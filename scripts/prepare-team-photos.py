import os
from PIL import Image

SRC = r"C:\Users\Utilisateur\OneDrive\Desktop\demo claude\Staff et partenaires"
DST = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "public", "team")
SIZE = 480

# content.ts name -> source filename (spellings differ between the two)
MAPPING = {
    "michel-paul-correa": "Miche-Paul CORREA.png",
    "jean-michel-foucher": "Jean-Michel FOUCHER.png",
    "gabriel-bonnat": "Gabriel E. BONNAT.png",
    "franck-petain": "Franck PETAIN.png",
    "gilles-martin-peulet": "Gilles MARTIN-PEULET.png",
    "christian-carnavalet": "Christian CARNAVALET.png",
    "nicolas-marmier": "Pr Nicolas MARMIER.png",
    "rene-munya": "Ren\u00e9 MOUNYA.png",
    "chokry-bayoud": "Chokri BAYOUDH.png",
    "mohamed-hajlaoui": "Professeur Hamed Hajlaoui.png",
    "jean-guy-ongono": "Jean-Guy ONGONO.png",
    "lionel-lhommet": "Lionel LHOMMET.png",
    "ken-arian": "Ken ARIAN.png",
    "ahmed-elashrry": "Ahmed ELHASRRY.png",
    "alfredo-curina": "Alfredo CURINA.png",
    "jean-camille-bissereth": "Jean-Camille BISSEREHT.png",
    "daniel-baloche": "Daniel BALLOCHE.png",
    "yves-haddad": "Ma\u00eetre Yves HADDAD.png",
}

os.makedirs(DST, exist_ok=True)

for slug, filename in MAPPING.items():
    src_path = os.path.join(SRC, filename)
    im = Image.open(src_path).convert("RGB")
    w, h = im.size
    side = min(w, h)
    if w >= h:
        # landscape / square: center horizontally, full height
        left = (w - side) // 2
        top = 0
    else:
        # portrait: crop full width, biased toward the top (face sits high)
        left = 0
        slack = h - side
        top = int(slack * 0.12)
    im = im.crop((left, top, left + side, top + side))
    im = im.resize((SIZE, SIZE), Image.LANCZOS)
    out_path = os.path.join(DST, f"{slug}.jpg")
    im.save(out_path, "JPEG", quality=90)
    print(f"{filename} -> {slug}.jpg")

print("done,", len(MAPPING), "photos written to", DST)
