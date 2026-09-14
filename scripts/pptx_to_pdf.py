#!/usr/bin/env python3
"""
Convert PPTX to PDF using python-pptx and reportlab
"""

import sys
import os
from pathlib import Path

# Try using python-pptx and reportlab
try:
    from pptx import Presentation
    from reportlab.pdfgen import canvas
    from reportlab.lib.pagesizes import letter
    from reportlab.pdfbase import pdfmetrics
    from PIL import Image
    from io import BytesIO

    def pptx_to_pdf(pptx_path, pdf_path):
        """Convert PPTX to PDF using reportlab"""
        print(f"Loading presentation: {pptx_path}")
        prs = Presentation(pptx_path)

        print(f"Creating PDF: {pdf_path}")
        c = canvas.Canvas(pdf_path, pagesize=letter)
        width, height = letter

        slide_num = 0
        for slide in prs.slides:
            slide_num += 1
            print(f"Processing slide {slide_num}...")

            # Draw a white background
            c.setFillColorRGB(1, 1, 1)
            c.rect(0, 0, width, height, fill=1, stroke=0)

            # Process slide content
            for shape in slide.shapes:
                if hasattr(shape, "text") and shape.text:
                    # Add text
                    text = shape.text[:100]  # Truncate for simplicity
                    x = shape.left / 914400.0  # Convert EMU to inches
                    y = (height - shape.top / 914400.0)  # Invert Y axis

                    if x > 0 and y > 0 and x < width and y < height:
                        c.drawString(x * 72, y * 72, text)

                if shape.shape_type == 13:  # Picture
                    try:
                        image = shape.image
                        img_stream = BytesIO(image.blob)
                        img = Image.open(img_stream)

                        x = shape.left / 914400.0
                        y = height - shape.top / 914400.0 - shape.height / 914400.0
                        w = shape.width / 914400.0
                        h = shape.height / 914400.0

                        if w > 0 and h > 0 and x >= 0 and y >= 0:
                            c.drawImage(img_stream, x * 72, y * 72, width=w * 72, height=h * 72)
                    except:
                        pass

            c.showPage()

        c.save()
        print(f"PDF created successfully: {pdf_path}")
        return True

    if len(sys.argv) < 3:
        print("Usage: python pptx_to_pdf.py <input.pptx> <output.pdf>")
        sys.exit(1)

    pptx_path = sys.argv[1]
    pdf_path = sys.argv[2]

    if not os.path.exists(pptx_path):
        print(f"Error: {pptx_path} not found")
        sys.exit(1)

    pptx_to_pdf(pptx_path, pdf_path)

except ImportError as e:
    print(f"Missing required library: {e}")
    print("Install requirements: pip install python-pptx reportlab pillow")
    sys.exit(1)
except Exception as e:
    print(f"Error: {e}")
    sys.exit(1)
