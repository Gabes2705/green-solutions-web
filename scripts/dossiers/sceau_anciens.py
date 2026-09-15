"""Appose le sceau du groupe sur la dernière page des dossiers pays anciens.

Treize dossiers sont regénérés par build.mjs, qui pose le sceau lui-même. Onze
autres — Cameroun, Congo, Côte d'Ivoire, Ghana, Grèce, Guinée, Koweït, Oman,
Sénégal, Soudan du Sud, Tunisie — sont antérieurs à cette chaîne et n'ont plus
de script source : il n'y a rien à regénérer, seulement un PDF à compléter.

Leurs dernières pages ne se ressemblent pas. Elles n'ont ni le même format
(960x540, 842x478, 720x405, 842x595 points), ni le même fond — certaines sont
presque noires, d'autres presque blanches — et plusieurs portent déjà un
drapeau ou un bandeau dans un coin. Poser le sceau à une position fixe en
recouvrirait.

Le coin est donc choisi en le mesurant, à deux tests. Le premier interroge le
PDF lui-même : s'il déclare du texte dans la zone, elle est prise, et aucune
mesure de pixels ne vaut cette réponse-là. Le second rend la zone en vignette —
un écart-type élevé trahit une image détaillée, qu'un sceau salirait ; un
dégradé, lui, reste uni au sens de cette mesure et accueille la marque sans
rien masquer. La luminance moyenne dit enfin lequel des deux sceaux, encre
verte ou encre blanche, y sera lisible.

Le premier coin libre l'emporte, en commençant par celui où l'on finit de lire.

Usage : python sceau_anciens.py [--dry-run]
"""

import sys
from pathlib import Path

import pymupdf

RACINE = Path(__file__).resolve().parents[2]
PDFS = RACINE / "public/documents/countries"
SCEAU_CLAIR = Path(__file__).parent / "sceau-aim-clair.png"
SCEAU_SOMBRE = RACINE / "public/images/logo-aim-sa.png"

# Une page a dû être placée à la main. La clôture d'Oman est une composition en
# aplats verts qui court d'un bord à l'autre : ses quatre coins portent du
# texte, et les deux bords libres tombent sur le motif, où l'encre verte se
# perd dans le vert et l'encre blanche salit les aplats clairs. Le sceau prend
# la bande de bleu nuit restée vide entre le logo et le premier aplat, en haut
# à droite du bloc de texte — mesurée à sd 0,0, c'est le seul aplat uni de la
# page. Coordonnées en points, sur une page de 720x405.
MAIN = {
    "oman": (466, 14, 529, 77),
}

ANCIENS = [
    "cameroun",
    "congo",
    "cote-divoire",
    "ghana",
    "grece",
    "guinee-conakry",
    "koweit",
    "oman",
    "senegal",
    "soudan-sud",
    "tunisie",
]

# Part de la hauteur de page prise par le sceau, et marge autour de lui.
TAILLE = 0.155
MARGE_X = 0.030
MARGE_Y = 0.045

# Au-delà, la zone porte une image détaillée, que le sceau salirait. Mesuré sur
# ces onze fichiers : un aplat tourne autour de 1, un dégradé monte à 17, une
# photographie dépasse 25.
DETAIL = 22.0

# Écrite dans les métadonnées du fichier scellé, et relue au passage suivant.
MARQUE = "sceau-aim"


def marquer(doc: pymupdf.Document) -> None:
    """Note dans le fichier qu'il porte le sceau, pour ne pas l'y poser deux fois."""
    meta = doc.metadata or {}
    mots = meta.get("keywords") or ""
    doc.set_metadata({**meta, "keywords": f"{mots} {MARQUE}".strip()})


def ecart(page: pymupdf.Page, rect: pymupdf.Rect) -> tuple[float, float]:
    """Luminance moyenne et écart-type d'une zone, en niveaux de gris."""
    pix = page.get_pixmap(dpi=24, clip=rect, colorspace=pymupdf.csGRAY)
    vals = list(pix.samples)
    if not vals:
        return 255.0, 0.0
    moy = sum(vals) / len(vals)
    var = sum((v - moy) ** 2 for v in vals) / len(vals)
    return moy, var**0.5


def coins(page: pymupdf.Page) -> list[tuple[str, pymupdf.Rect]]:
    r = page.rect
    cote = r.height * TAILLE
    mx, my = r.width * MARGE_X, r.height * MARGE_Y
    milieu = (r.height - cote) / 2
    return [
        ("bas-droite", pymupdf.Rect(r.width - mx - cote, r.height - my - cote,
                                    r.width - mx, r.height - my)),
        # Plusieurs de ces pages sont des listes de sources : la colonne de
        # droite y est vide sur toute sa hauteur, mais ses deux coins portent un
        # drapeau en haut et le folio en bas.
        ("droite-milieu", pymupdf.Rect(r.width - mx - cote, milieu,
                                       r.width - mx, milieu + cote)),
        ("bas-gauche", pymupdf.Rect(mx, r.height - my - cote, mx + cote, r.height - my)),
        ("haut-droite", pymupdf.Rect(r.width - mx - cote, my, r.width - mx, my + cote)),
        ("haut-gauche", pymupdf.Rect(mx, my, mx + cote, my + cote)),
    ]


def main() -> int:
    essai = "--dry-run" in sys.argv
    for slug in ANCIENS:
        chemin = PDFS / f"{slug}.pdf"
        if not chemin.exists():
            print(f"{slug:16} ABSENT")
            continue

        doc = pymupdf.open(chemin)
        page = doc[-1]

        # Le script écrit en incrémental : relancé sur un fichier déjà scellé,
        # il empilerait un second sceau sur le premier. La marque posée dans
        # les métadonnées est ce qui l'en empêche.
        if MARQUE in (doc.metadata.get("keywords") or ""):
            print(f"{slug:16} déjà scellé")
            doc.close()
            continue

        if slug in MAIN:
            rect = pymupdf.Rect(*MAIN[slug])
            moy, _ = ecart(page, rect)
            sceau = SCEAU_CLAIR if moy < 128 else SCEAU_SOMBRE
            print(f"{slug:16} {'placé à la main':13} fond={moy:3.0f} -> sceau "
                  f"{'blanc' if moy < 128 else 'vert'}")
            if not essai:
                page.insert_image(rect, filename=str(sceau), overlay=True)
                marquer(doc)
                doc.saveIncr()
            doc.close()
            continue

        choisi = None
        repli = None
        mesures = []
        for nom, rect in coins(page):
            moy, sd = ecart(page, rect)
            texte = page.get_text("text", clip=rect).strip()
            mesures.append(f"{nom} sd={sd:.0f}{' TEXTE' if texte else ''}")
            if texte:
                continue
            if sd <= DETAIL and choisi is None:
                choisi = (nom, rect, moy)
            elif repli is None:
                repli = (nom, rect, moy)

        # Une page peut n'offrir aucune zone unie : celle d'Oman est une
        # composition en aplats géométriques qui court d'un bord à l'autre. On
        # prend alors la première zone sans texte, et on le signale, parce que
        # cette pose-là demande à être regardée avant d'être gardée.
        secours = choisi is None
        if secours:
            choisi = repli
        if choisi is None:
            print(f"{slug:16} AUCUNE ZONE LIBRE  ({', '.join(mesures)})")
            doc.close()
            continue

        nom, rect, moy = choisi
        sceau = SCEAU_CLAIR if moy < 128 else SCEAU_SOMBRE
        encre = "blanc" if moy < 128 else "vert"
        note = "  (sur un motif - a verifier)" if secours else ""
        print(f"{slug:16} {nom:13} fond={moy:3.0f} -> sceau {encre}{note}")

        if not essai:
            page.insert_image(rect, filename=str(sceau), overlay=True)
            marquer(doc)
            doc.saveIncr()
        doc.close()
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
