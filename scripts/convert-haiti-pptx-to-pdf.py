#!/usr/bin/env python3
"""
Convert Haiti PPTX to PDF using reportlab and PIL
"""

import os
from pptx import Presentation
from PIL import Image, ImageDraw, ImageFont
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor
from io import BytesIO

# Paths
PPTX_PATH = r"C:\Users\Utilisateur\dev\green-solutions-web\public\documents\countries\haiti.pptx"
PDF_PATH = r"C:\Users\Utilisateur\dev\green-solutions-web\public\documents\countries\haiti.pdf"

# Convert to Unix paths if needed
if not os.path.exists(PPTX_PATH):
    PPTX_PATH = "/c/Users/Utilisateur/dev/green-solutions-web/public/documents/countries/haiti.pptx"
    PDF_PATH = "/c/Users/Utilisateur/dev/green-solutions-web/public/documents/countries/haiti.pdf"

def pptx_to_pdf():
    """Convert PPTX to PDF by extracting text and recreating as PDF."""

    print(f"Loading PPTX: {PPTX_PATH}")

    try:
        prs = Presentation(PPTX_PATH)
        print(f"Found {len(prs.slides)} slides")

        # Get slide dimensions
        slide_width = prs.slide_width.inches
        slide_height = prs.slide_height.inches

        print(f"Slide dimensions: {slide_width}\" x {slide_height}\"")

        # Create PDF
        c = canvas.Canvas(PDF_PATH, pagesize=letter)
        page_width, page_height = letter

        colors = {
            'primary': HexColor('#003DA5'),
            'secondary': HexColor('#CE1126'),
            'text': HexColor('#1E1E1E'),
            'light': HexColor('#F5F5F5')
        }

        slide_count = 0

        for slide_idx, slide in enumerate(prs.slides):
            slide_count += 1
            print(f"Processing slide {slide_count}...")

            # Draw background
            c.setFillColor(colors['light'])
            c.rect(0, 0, page_width, page_height, fill=1)

            # Extract text from shapes
            slide_text = []

            for shape_idx, shape in enumerate(slide.shapes):
                if hasattr(shape, "text") and shape.text:
                    # Get text and position
                    text = shape.text.strip()
                    if text:
                        slide_text.append((shape_idx, text))

            # Draw title (first shape typically)
            title_y = page_height - inch * 0.75
            c.setFont("Helvetica-Bold", 28)
            c.setFillColor(colors['primary'])

            if slide_text:
                title = slide_text[0][1]
                # Handle multi-line titles
                if len(title) > 50:
                    words = title.split()
                    lines = []
                    current_line = []
                    for word in words:
                        current_line.append(word)
                        if len(' '.join(current_line)) > 45:
                            lines.append(' '.join(current_line[:-1]))
                            current_line = [word]
                    lines.append(' '.join(current_line))

                    for i, line in enumerate(lines[:2]):
                        c.drawString(inch * 0.5, title_y - (i * inch * 0.35), line)
                else:
                    c.drawString(inch * 0.5, title_y, title)

            # Draw content
            c.setFont("Helvetica", 11)
            c.setFillColor(colors['text'])

            content_y = title_y - inch * 1.2

            for i, (idx, text) in enumerate(slide_text[1:], 1):
                # Wrap text
                lines = []
                words = text.split()
                current_line = []

                for word in words:
                    current_line.append(word)
                    line_text = ' '.join(current_line)
                    if len(line_text) > 70:
                        lines.append(' '.join(current_line[:-1]))
                        current_line = [word]

                lines.append(' '.join(current_line))

                for line in lines:
                    if content_y < inch * 0.5:
                        break
                    c.drawString(inch * 0.75, content_y, line)
                    content_y -= inch * 0.25

                if content_y < inch * 0.5:
                    break

            # Add page number
            c.setFont("Helvetica", 9)
            c.setFillColor(HexColor('#888888'))
            c.drawRightString(page_width - inch * 0.5, inch * 0.3, f"Page {slide_count}")

            # New page for next slide
            c.showPage()

        # Save PDF
        c.save()

        print(f"\n[SUCCESS] PDF created: {PDF_PATH}")
        pdf_size_mb = os.path.getsize(PDF_PATH) / (1024 * 1024)
        print(f"PDF file size: {pdf_size_mb:.2f} MB")

        return PDF_PATH

    except Exception as e:
        print(f"Error: {e}")
        import traceback
        traceback.print_exc()
        return None

if __name__ == "__main__":
    result = pptx_to_pdf()
    exit(0 if result else 1)
