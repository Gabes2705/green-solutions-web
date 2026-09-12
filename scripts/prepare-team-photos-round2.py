import os
from PIL import Image

SRC = r"C:\Users\Utilisateur\OneDrive\Desktop\demo claude\Direction et Groupe"
DST = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "public", "team")
SIZE = 480

MAPPING = {
    "ahmed-elashrry": "Ahmed ELASHRRY.png",
    "alfredo-curina": "Alfredo CURINA.png",
    "christian-carnavalet": "ChatGPT Image 12 sept. 2026, 16_55_58.png",
    "chokry-bayoud": "Chokri Bayoudh.png",
    "daniel-baloche": "Daniel Baloche.png",
    "franck-petain": "Franck Petain.png",
    "gabriel-bonnat": "Gabriel E. Bonnat.png",
    "jean-michel-foucher": "Jean Michel Fouchet.png",
    "jean-camille-bissereth": "Jean-Camille Bissereth.png",
    "jean-guy-ongono": "Jean-Guy Ongono.png",
    "ken-arian": "Ken Arian.png",
    "lionel-lhommet": "Lionel Lhommet.png",
    "yves-haddad": "Me Yves Haddad.png",
    "michel-paul-correa": "Michrl Paul Correa.png",
    "mohamed-hajlaoui": "Pr Mohamed Hajlaoui.png",
    "nicolas-marmier": "Pr Nicolas Marmier.png",
    "rene-munya": "Ren\u00e9 Munya.png",
}

os.makedirs(DST, exist_ok=True)

for slug, filename in MAPPING.items():
    src_path = os.path.join(SRC, filename)
    im = Image.open(src_path).convert("RGB")
    w, h = im.size
    side = min(w, h)
    if w >= h:
        left = (w - side) // 2
        top = 0
    else:
        left = 0
        slack = h - side
        top = int(slack * 0.12)
    im = im.crop((left, top, left + side, top + side))
    im = im.resize((SIZE, SIZE), Image.LANCZOS)
    out_path = os.path.join(DST, f"{slug}.jpg")
    im.save(out_path, "JPEG", quality=90)
    print(f"{filename} -> {slug}.jpg")

print("done,", len(MAPPING), "photos written to", DST)
