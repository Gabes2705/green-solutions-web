from __future__ import annotations

import math
import random
import subprocess
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageFont


ROOT = Path(__file__).resolve().parents[1]
SOURCE_DIR = ROOT / "public" / "images" / "agronomic-film"
OUTPUT = ROOT / "public" / "green-solutions-synergy.mp4"

SOURCES = [
    SOURCE_DIR / "maize-stage-young.webp",
    SOURCE_DIR / "maize-stage-growth.webp",
    SOURCE_DIR / "maize-stage-harvest.webp",
]

WIDTH, HEIGHT = 1280, 720
FPS = 24
DURATION = 26
TOTAL_FRAMES = FPS * DURATION


def clamp(value: float, low: float = 0.0, high: float = 1.0) -> float:
    return max(low, min(high, value))


def smoothstep(edge0: float, edge1: float, value: float) -> float:
    if edge0 == edge1:
        return 0.0
    x = clamp((value - edge0) / (edge1 - edge0))
    return x * x * (3 - 2 * x)


def load_frame(path: Path) -> np.ndarray:
    image = Image.open(path).convert("RGB").resize((WIDTH, HEIGHT), Image.Resampling.LANCZOS)
    return np.asarray(image, dtype=np.float32)


def blend_keyframes(images: list[np.ndarray], seconds: float) -> np.ndarray:
    if seconds < 5.5:
        return images[0]
    if seconds < 11.5:
        amount = smoothstep(5.5, 11.5, seconds)
        return images[0] * (1 - amount) + images[1] * amount
    if seconds < 18.0:
        amount = smoothstep(11.5, 18.0, seconds)
        return images[1] * (1 - amount) + images[2] * amount
    return images[2]


def camera_move(frame: Image.Image, seconds: float) -> Image.Image:
    final_push = smoothstep(18.0, 25.5, seconds)
    zoom = 1.008 + 0.018 * math.sin(math.pi * seconds / DURATION) + 0.018 * final_push
    scaled = frame.resize((round(WIDTH * zoom), round(HEIGHT * zoom)), Image.Resampling.LANCZOS)
    drift = round(6 * math.sin(seconds * 0.28) + 12 * final_push)
    left = clamp((scaled.width - WIDTH) / 2 + drift, 0, scaled.width - WIDTH)
    top = (scaled.height - HEIGHT) / 2
    return scaled.crop((round(left), round(top), round(left) + WIDTH, round(top) + HEIGHT))


def draw_rain(overlay: Image.Image, seconds: float, rain_points: list[tuple[int, int, int]]) -> None:
    strength = smoothstep(0.8, 1.8, seconds) * (1 - smoothstep(6.3, 7.3, seconds))
    if strength <= 0:
        return
    draw = ImageDraw.Draw(overlay, "RGBA")
    for index, (x, y, length) in enumerate(rain_points):
        travel = int((seconds * (250 + index % 7 * 16)) % (HEIGHT + 180))
        yy = (y + travel) % (HEIGHT + 100) - 80
        draw.line((x, yy, x - 8, yy + length), fill=(184, 229, 237, round(100 * strength)), width=2)

    infiltration = smoothstep(2.0, 3.0, seconds) * (1 - smoothstep(7.0, 8.2, seconds))
    for index in range(19):
        x = 670 + index * 31
        head = 430 + ((seconds * 72 + index * 25) % 245)
        draw.line((x, 425, x + math.sin(index) * 7, head), fill=(89, 189, 210, round(48 * infiltration)), width=2)


def radial_bubble(radius: int, alpha: int) -> Image.Image:
    size = radius * 2 + 8
    yy, xx = np.mgrid[:size, :size]
    center = (size - 1) / 2
    distance = np.sqrt((xx - center) ** 2 + (yy - center) ** 2) / max(radius, 1)
    ring = np.exp(-((distance - 0.82) ** 2) / 0.045)
    fill = np.clip(1 - distance, 0, 1) ** 1.8
    arr = np.zeros((size, size, 4), dtype=np.uint8)
    arr[..., 0] = 144
    arr[..., 1] = 221
    arr[..., 2] = 232
    arr[..., 3] = np.clip((ring * 0.55 + fill * 0.28) * alpha, 0, 255).astype(np.uint8)
    bubble = Image.fromarray(arr, "RGBA")
    draw = ImageDraw.Draw(bubble, "RGBA")
    draw.ellipse((radius * 0.55, radius * 0.35, radius * 0.82, radius * 0.62), fill=(255, 255, 255, min(220, alpha)))
    return bubble


def draw_bubbles(overlay: Image.Image, seconds: float, bubble_points: list[tuple[int, int, int, float]]) -> None:
    strength = smoothstep(3.0, 4.8, seconds) * (1 - 0.45 * smoothstep(18.0, 25.0, seconds))
    if strength <= 0:
        return
    for index, (x, y, base_radius, phase) in enumerate(bubble_points):
        pulse = 0.84 + 0.18 * math.sin(seconds * 2.1 + phase)
        growth = smoothstep(3.2 + index * 0.012, 6.0 + index * 0.012, seconds)
        radius = max(2, round(base_radius * pulse * growth))
        alpha = round((120 + (index % 4) * 14) * strength)
        bubble = radial_bubble(radius, alpha)
        float_y = round(3 * math.sin(seconds * 1.5 + phase))
        overlay.alpha_composite(bubble, (x - bubble.width // 2, y + float_y - bubble.height // 2))


def bezier_point(points: tuple[tuple[float, float], ...], amount: float) -> tuple[float, float]:
    working = list(points)
    while len(working) > 1:
        working = [
            (a[0] + (b[0] - a[0]) * amount, a[1] + (b[1] - a[1]) * amount)
            for a, b in zip(working, working[1:])
        ]
    return working[0]


def draw_root_energy(overlay: Image.Image, seconds: float, root_paths: list[tuple[tuple[float, float], ...]]) -> None:
    progress = smoothstep(7.0, 15.8, seconds)
    strength = smoothstep(6.6, 8.0, seconds) * (1 - 0.45 * smoothstep(21.5, 26.0, seconds))
    if progress <= 0:
        return
    glow = Image.new("RGBA", overlay.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(glow, "RGBA")
    for index, path in enumerate(root_paths):
        points = [bezier_point(path, step / 54) for step in range(round(54 * progress) + 1)]
        if len(points) > 1:
            draw.line(points, fill=(89, 215, 137, round(58 * strength)), width=9)
            draw.line(points, fill=(213, 245, 191, round(150 * strength)), width=2)
            tip = points[-1]
            radius = 3 + index % 3
            draw.ellipse((tip[0] - radius, tip[1] - radius, tip[0] + radius, tip[1] + radius), fill=(222, 252, 202, round(190 * strength)))
    overlay.alpha_composite(glow.filter(ImageFilter.GaussianBlur(3)))


def pill(text: str, color: tuple[int, int, int], font: ImageFont.FreeTypeFont, large: bool = False) -> Image.Image:
    probe = Image.new("RGBA", (1, 1), (0, 0, 0, 0))
    draw = ImageDraw.Draw(probe)
    bbox = draw.textbbox((0, 0), text, font=font)
    padding = 54 if large else 34
    height = 58 if large else 42
    width = bbox[2] - bbox[0] + padding
    card = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    draw = ImageDraw.Draw(card, "RGBA")
    radius = height // 2
    draw.rounded_rectangle((1, 1, width - 2, height - 2), radius=radius, fill=(5, 30, 22, 232), outline=(*color, 235), width=2)
    dot = 19 if large else 13
    dot_x = 15 if large else 10
    draw.ellipse((dot_x, (height - dot) // 2, dot_x + dot, (height + dot) // 2), fill=(*color, 255))
    draw.text((dot_x + dot + 12, height // 2), text, anchor="lm", font=font, fill=(249, 253, 250, 255))
    return card


def draw_solution_story(overlay: Image.Image, seconds: float, large_cards: list[Image.Image], rail_cards: list[Image.Image]) -> None:
    start = 6.0
    step = 1.85
    for index, card in enumerate(large_cards):
        local = seconds - (start + index * step)
        opacity = smoothstep(0.0, 0.25, local) * (1 - smoothstep(1.35, 1.75, local))
        if opacity <= 0:
            continue
        scale = 0.93 + 0.07 * smoothstep(0.0, 0.45, local)
        current = card.resize((round(card.width * scale), round(card.height * scale)), Image.Resampling.LANCZOS)
        current.putalpha(current.getchannel("A").point(lambda value: round(value * opacity)))
        x = 960 - current.width // 2
        y = 112 - current.height // 2
        shadow = Image.new("RGBA", overlay.size, (0, 0, 0, 0))
        shadow.alpha_composite(current, (x, y + 7))
        overlay.alpha_composite(shadow.filter(ImageFilter.GaussianBlur(10)))
        overlay.alpha_composite(current, (x, y))

    rail_alpha = smoothstep(15.0, 16.3, seconds)
    if rail_alpha <= 0:
        return
    gap = 11
    total_width = sum(card.width for card in rail_cards) + gap * (len(rail_cards) - 1)
    x = (WIDTH - total_width) // 2
    for index, card in enumerate(rail_cards):
        stagger = smoothstep(15.0 + index * 0.12, 15.8 + index * 0.12, seconds)
        current = card.copy()
        current.putalpha(current.getchannel("A").point(lambda value: round(value * rail_alpha * stagger)))
        overlay.alpha_composite(current, (x, 80))
        x += card.width + gap


def draw_height_scale(overlay: Image.Image, seconds: float) -> None:
    strength = smoothstep(18.2, 19.4, seconds)
    if strength <= 0:
        return
    draw = ImageDraw.Draw(overlay, "RGBA")
    font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 14)
    x = 1230
    ground_y = 431
    top_y = 42
    alpha = round(220 * strength)
    draw.line((x, top_y, x, ground_y), fill=(244, 213, 117, alpha), width=3)
    for metre in range(4):
        y = ground_y - (ground_y - top_y) * metre / 3
        draw.line((x - 12, y, x + 8, y), fill=(244, 213, 117, alpha), width=3)
        draw.text((x - 18, y), f"{metre} m", anchor="rm", font=font, fill=(255, 246, 211, alpha), stroke_width=2, stroke_fill=(6, 31, 22, alpha))

    pulse = 0.65 + 0.35 * math.sin(seconds * 2.0)
    for cx, cy, rx, ry in ((767, 293, 46, 70), (983, 281, 58, 88), (1161, 292, 48, 75)):
        ring_alpha = round(105 * strength * pulse)
        draw.ellipse((cx - rx, cy - ry, cx + rx, cy + ry), outline=(246, 194, 75, ring_alpha), width=3)


def draw_divider(overlay: Image.Image, seconds: float) -> None:
    draw = ImageDraw.Draw(overlay, "RGBA")
    draw.line((WIDTH // 2, 0, WIDTH // 2, HEIGHT), fill=(255, 255, 255, 125), width=2)
    pulse = 0.5 + 0.5 * math.sin(seconds * 1.5)
    draw.ellipse((WIDTH // 2 - 24, HEIGHT // 2 - 24, WIDTH // 2 + 24, HEIGHT // 2 + 24), fill=(6, 31, 22, 232), outline=(255, 255, 255, 225), width=3)
    font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 13)
    draw.text((WIDTH // 2, HEIGHT // 2 + 1), "VS", anchor="mm", font=font, fill=(235, 249, 240, round(220 + 35 * pulse)))


def render() -> None:
    for path in SOURCES:
        if not path.exists():
            raise FileNotFoundError(path)

    images = [load_frame(path) for path in SOURCES]
    rng = random.Random(2705)
    rain_points = [(rng.randrange(0, WIDTH + 80), rng.randrange(-HEIGHT, HEIGHT), rng.randrange(28, 52)) for _ in range(96)]
    bubble_points = [
        (rng.randrange(680, 1215), rng.randrange(455, 685), rng.randrange(7, 17), rng.random() * math.tau)
        for _ in range(42)
    ]
    root_paths = [
        ((760, 430), (735, 495), (735, 585), (700, 700)),
        ((825, 430), (850, 500), (820, 605), (860, 708)),
        ((930, 430), (900, 505), (960, 610), (925, 710)),
        ((1010, 430), (1045, 500), (1000, 605), (1075, 708)),
        ((1135, 430), (1105, 505), (1180, 610), (1140, 708)),
        ((1210, 430), (1185, 500), (1240, 590), (1210, 700)),
        ((880, 445), (820, 500), (855, 565), (790, 650)),
        ((1070, 445), (1135, 505), (1090, 575), (1180, 655)),
    ]

    large_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 27)
    rail_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 15)
    brands = [
        ("EVERGREEN®", (64, 180, 102)),
        ("ECOSORB®", (67, 164, 205)),
        ("WATER VITAL®", (64, 191, 216)),
        ("ECOFERT®", (222, 171, 63)),
        ("NAPEMA®", (180, 105, 210)),
    ]
    large_cards = [pill(name, color, large_font, large=True) for name, color in brands]
    rail_cards = [pill(name, color, rail_font) for name, color in brands]

    command = [
        "ffmpeg", "-y", "-loglevel", "error",
        "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{WIDTH}x{HEIGHT}", "-r", str(FPS), "-i", "-",
        "-an", "-c:v", "libx264", "-preset", "slow", "-crf", "21", "-pix_fmt", "yuv420p",
        "-movflags", "+faststart", str(OUTPUT),
    ]
    process = subprocess.Popen(command, stdin=subprocess.PIPE)
    assert process.stdin is not None

    for frame_index in range(TOTAL_FRAMES):
        seconds = frame_index / FPS
        base = Image.fromarray(np.clip(blend_keyframes(images, seconds), 0, 255).astype(np.uint8), "RGB")
        base = camera_move(base, seconds).convert("RGBA")

        overlay = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
        draw_rain(overlay, seconds, rain_points)
        draw_bubbles(overlay, seconds, bubble_points)
        draw_root_energy(overlay, seconds, root_paths)
        draw_solution_story(overlay, seconds, large_cards, rail_cards)
        draw_height_scale(overlay, seconds)
        draw_divider(overlay, seconds)

        shade = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
        shade_draw = ImageDraw.Draw(shade, "RGBA")
        shade_draw.rectangle((0, 0, WIDTH // 2, HEIGHT), fill=(91, 51, 25, round(13 + 18 * smoothstep(8.0, 20.0, seconds))))
        vitality = smoothstep(10.0, 18.0, seconds)
        shade_draw.rectangle((WIDTH // 2, 0, WIDTH, HEIGHT), fill=(24, 111, 57, round(8 + 18 * vitality)))
        shade = shade.filter(ImageFilter.GaussianBlur(28))

        composed = Image.alpha_composite(base, shade)
        composed = Image.alpha_composite(composed, overlay).convert("RGB")
        process.stdin.write(np.asarray(composed, dtype=np.uint8).tobytes())

    process.stdin.close()
    return_code = process.wait()
    if return_code != 0:
        raise RuntimeError(f"ffmpeg exited with code {return_code}")
    print(OUTPUT)


if __name__ == "__main__":
    render()
