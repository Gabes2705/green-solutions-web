"""Planche des couvertures de tous les dossiers, pour revue rapide.

Usage: python apercu.py <dossierPdf> <sortie.png>
"""

import sys
from pathlib import Path

import pymupdf

src = Path(sys.argv[1])
out = Path(sys.argv[2])

PAYS = [
    "maroc", "algerie", "tunisie", "egypte", "jordanie", "arabie-saoudite",
    "usa", "afrique-du-sud", "gabon", "chili", "argentine",
]

COLS = 3
CELL_W, CELL_H = 520, 293
PAD = 10

vignettes = []
for slug in PAYS:
    pdf = src / f"{slug}.pdf"
    if not pdf.exists():
        continue
    doc = pymupdf.open(pdf)
    page0 = doc[0]
    zoom = CELL_W / page0.rect.width
    pix = page0.get_pixmap(matrix=pymupdf.Matrix(zoom, zoom))
    vignettes.append((slug, doc.page_count, pix))
    doc.close()

rows = (len(vignettes) + COLS - 1) // COLS
W = COLS * (CELL_W + PAD) + PAD
H = rows * (CELL_H + PAD) + PAD

page = pymupdf.open()
sheet = page.new_page(width=W, height=H)
sheet.draw_rect(pymupdf.Rect(0, 0, W, H), color=None, fill=(0.05, 0.1, 0.08))

for i, (slug, pages, pix) in enumerate(vignettes):
    col, row = i % COLS, i // COLS
    x = PAD + col * (CELL_W + PAD)
    y = PAD + row * (CELL_H + PAD)
    sheet.insert_image(pymupdf.Rect(x, y, x + CELL_W, y + CELL_H), pixmap=pix)
    sheet.insert_text(
        (x + 8, y + CELL_H - 8),
        f"{slug} — {pages} pages",
        fontsize=11,
        color=(1, 1, 1),
    )

sheet.get_pixmap(dpi=110).save(out)
print(f"{len(vignettes)} couvertures -> {out}")
