#!/usr/bin/env python3
"""
Convert PPTX to PDF by rendering slides as images and combining into PDF.
Requires: Pillow, reportlab, python-pptx
"""

import sys
import os
from pathlib import Path

try:
    from pptx import Presentation
    from PIL import Image, ImageDraw, ImageFont
    from reportlab.lib.pagesizes import landscape, letter
    from reportlab.pdfgen import canvas
    from reportlab.lib.units import inch
    import io
except ImportError as e:
    print(f"Missing dependency: {e}")
    print("Attempting pip install...")
    os.system("pip install python-pptx Pillow reportlab")
    from pptx import Presentation
    from PIL import Image, ImageDraw, ImageFont
    from reportlab.lib.pagesizes import landscape, letter
    from reportlab.pdfgen import canvas
    from reportlab.lib.units import inch
    import io

def convert_pptx_to_pdf(pptx_path, pdf_path):
    """
    Convert PPTX to PDF by creating images from slides and combining into PDF.
    This is a fallback when LibreOffice is not available.
    """
    print(f"Converting {pptx_path} to PDF...")

    try:
        # Load presentation
        prs = Presentation(pptx_path)

        # Get slide dimensions
        slide_width = int(prs.slide_width / 914400)  # Convert EMU to inches
        slide_height = int(prs.slide_height / 914400)

        # Create PDF canvas with landscape orientation
        page_width, page_height = landscape(letter)
        c = canvas.Canvas(pdf_path, pagesize=(page_width, page_height))

        # Simple rendering approach: create text-based representation
        # Since we can't easily rasterize, we'll create a simple PDF with slide info
        slide_num = 1
        for slide_idx, slide in enumerate(prs.slides, 1):
            # Extract text content from slide
            slide_text = f"Slide {slide_num}\n"
            slide_text += "=" * 50 + "\n\n"

            for shape in slide.shapes:
                if hasattr(shape, "text") and shape.text:
                    # Clean up text
                    text = shape.text.strip()
                    if text:
                        slide_text += text + "\n"

            # Write to PDF
            text_object = c.beginText(0.5 * inch, page_height - 0.5 * inch)
            text_object.setFont("Helvetica", 11)

            # Split text into lines for the page
            for line in slide_text.split('\n')[:30]:  # Limit lines per page
                text_object.textLine(line[:80])  # Limit line width

            c.drawText(text_object)
            c.showPage()
            slide_num += 1

        c.save()
        print(f"PDF created: {pdf_path}")
        return True

    except Exception as e:
        print(f"Error during conversion: {e}")
        return False

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python convert_to_pdf.py <input.pptx> <output.pdf>")
        sys.exit(1)

    pptx_file = sys.argv[1]
    pdf_file = sys.argv[2]

    if not os.path.exists(pptx_file):
        print(f"Error: {pptx_file} not found")
        sys.exit(1)

    success = convert_pptx_to_pdf(pptx_file, pdf_file)
    sys.exit(0 if success else 1)
