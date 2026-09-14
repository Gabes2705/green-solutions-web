"""Rend un PDF en planches contact pour inspection visuelle.

Usage: python qa.py <fichier.pdf> <dossier_sortie> [dpi]
"""

import sys
from pathlib import Path

import pymupdf

pdf_path = Path(sys.argv[1])
out_dir = Path(sys.argv[2])
dpi = int(sys.argv[3]) if len(sys.argv) > 3 else 85

out_dir.mkdir(parents=True, exist_ok=True)
for old in out_dir.glob(f"{pdf_path.stem}-*.png"):
    old.unlink()

doc = pymupdf.open(pdf_path)
written = []
for i, page in enumerate(doc, start=1):
    pix = page.get_pixmap(dpi=dpi)
    dest = out_dir / f"{pdf_path.stem}-{i:02d}.png"
    pix.save(dest)
    written.append(dest)

print(f"{len(written)} pages -> {out_dir}")
for w in written:
    print(w)
