from PIL import Image

SRC = r"C:\Users\Utilisateur\OneDrive\Desktop\demo claude\David JAMES.png"
DST = "public/team/david-james.jpg"

im = Image.open(SRC).convert("RGB")
w, h = im.size

if w >= h:
    left = (w - h) / 2
    im = im.crop((left, 0, left + h, h))
else:
    top = (h - w) * 0.12
    im = im.crop((0, top, w, top + w))

im = im.resize((480, 480), Image.LANCZOS)
im.save(DST, "JPEG", quality=90)
print("saved", DST, im.size)
