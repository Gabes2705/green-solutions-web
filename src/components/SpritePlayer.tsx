"use client";

import { useEffect, useRef } from "react";

type Props = {
  src: string;
  columns: number;
  frameCount: number;
  frameWidth: number;
  frameHeight: number;
  duration: number;
  className?: string;
  label: string;
};

export default function SpritePlayer({
  src,
  columns,
  frameCount,
  frameWidth,
  frameHeight,
  duration,
  className,
  label,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const sprite = new Image();
    let animation = 0;
    let startedAt = 0;
    let lastFrame = -1;

    const draw = (now: number) => {
      if (!startedAt) startedAt = now;
      const elapsed = ((now - startedAt) / 1000) % duration;
      const frame = Math.min(frameCount - 1, Math.floor((elapsed / duration) * frameCount));
      if (frame !== lastFrame) {
        const sourceX = (frame % columns) * frameWidth;
        const sourceY = Math.floor(frame / columns) * frameHeight;
        context.drawImage(sprite, sourceX, sourceY, frameWidth, frameHeight, 0, 0, frameWidth, frameHeight);
        canvas.dataset.frame = String(frame);
        lastFrame = frame;
      }
      animation = requestAnimationFrame(draw);
    };

    sprite.onload = () => { animation = requestAnimationFrame(draw); };
    sprite.src = src;
    return () => cancelAnimationFrame(animation);
  }, [columns, duration, frameCount, frameHeight, frameWidth, src]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      width={frameWidth}
      height={frameHeight}
      role="img"
      aria-label={label}
    />
  );
}
