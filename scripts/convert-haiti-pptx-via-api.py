#!/usr/bin/env python3
"""
Convert Haiti PPTX to PDF using CloudConvert API or fallback methods
"""

import os
import sys
import requests
import json
import time
import base64

# Determine the correct path format
if sys.platform == 'win32':
    PPTX_PATH = r"C:\Users\Utilisateur\dev\green-solutions-web\public\documents\countries\haiti.pptx"
    PDF_PATH = r"C:\Users\Utilisateur\dev\green-solutions-web\public\documents\countries\haiti.pdf"
else:
    PPTX_PATH = "/c/Users/Utilisateur/dev/green-solutions-web/public/documents/countries/haiti.pptx"
    PDF_PATH = "/c/Users/Utilisateur/dev/green-solutions-web/public/documents/countries/haiti.pdf"

def create_pdf_with_formatting():
    """Create a more complete PDF using reportlab with proper slide formatting."""

    from pptx import Presentation
    from reportlab.lib.pagesizes import letter
    from reportlab.pdfgen import canvas
    from reportlab.lib.units import inch
    from reportlab.lib.colors import HexColor
    from reportlab.platypus import SimpleDocTemplate, Table, TableStyle, Paragraph, Spacer, PageBreak
    from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
    from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY

    print(f"Creating formatted PDF from PPTX: {PPTX_PATH}")

    try:
        prs = Presentation(PPTX_PATH)
        print(f"Found {len(prs.slides)} slides")

        # Create PDF with Platypus for better formatting
        doc = SimpleDocTemplate(PDF_PATH, pagesize=letter, topMargin=0.5*inch, bottomMargin=0.5*inch)
        elements = []

        styles = getSampleStyleSheet()

        # Define custom styles
        title_style = ParagraphStyle(
            'CustomTitle',
            parent=styles['Heading1'],
            fontSize=24,
            textColor=HexColor('#003DA5'),
            spaceAfter=12,
            alignment=TA_CENTER,
            fontName='Helvetica-Bold'
        )

        heading_style = ParagraphStyle(
            'CustomHeading',
            parent=styles['Heading2'],
            fontSize=16,
            textColor=HexColor('#003DA5'),
            spaceAfter=12,
            spaceBefore=12,
            fontName='Helvetica-Bold',
            borderColor=HexColor('#003DA5'),
            borderWidth=2,
            borderPadding=8
        )

        body_style = ParagraphStyle(
            'CustomBody',
            parent=styles['BodyText'],
            fontSize=11,
            alignment=TA_JUSTIFY,
            spaceAfter=6,
            leading=14
        )

        slide_count = 0

        for slide in prs.slides:
            slide_count += 1

            # Extract text from all shapes
            slide_content = []

            for shape in slide.shapes:
                if hasattr(shape, "text"):
                    text = shape.text.strip()
                    if text:
                        slide_content.append(text)

            if not slide_content:
                continue

            # First item is typically title
            if len(slide_content) > 0:
                title = slide_content[0]
                if slide_count == 1 or 'Opportunités' in title or 'HAÏTI' in title:
                    # Title slide
                    elements.append(Spacer(1, 1*inch))
                    elements.append(Paragraph(title, title_style))
                    if len(slide_content) > 1:
                        subtitle = slide_content[1]
                        subtitle_para = Paragraph(subtitle, ParagraphStyle(
                            'Subtitle',
                            parent=styles['Normal'],
                            fontSize=14,
                            textColor=HexColor('#CE1126'),
                            alignment=TA_CENTER,
                            spaceAfter=24
                        ))
                        elements.append(Spacer(1, 0.5*inch))
                        elements.append(subtitle_para)
                else:
                    # Content slide
                    elements.append(Paragraph(title, heading_style))

                    # Add bullet points
                    for item in slide_content[1:]:
                        # Clean up bullet points
                        clean_item = item.lstrip('•').strip()
                        bullet_para = Paragraph(f"• {clean_item}", body_style)
                        elements.append(bullet_para)

                elements.append(PageBreak())

        # Build PDF
        print(f"Building PDF with {len(elements)} elements...")
        doc.build(elements)

        if os.path.exists(PDF_PATH):
            pdf_size_mb = os.path.getsize(PDF_PATH) / (1024 * 1024)
            print(f"[SUCCESS] PDF created: {PDF_PATH}")
            print(f"PDF file size: {pdf_size_mb:.2f} MB")
            return PDF_PATH
        else:
            print("Error: PDF file not created")
            return None

    except Exception as e:
        print(f"Error creating PDF: {e}")
        import traceback
        traceback.print_exc()
        return None

def try_zamzar_conversion():
    """Try using Zamzar API for conversion (free tier available)."""

    print("\nTrying Zamzar API for PPTX to PDF conversion...")

    try:
        # Check if API key is available in environment
        api_key = os.environ.get('ZAMZAR_API_KEY')

        if not api_key:
            print("Zamzar API key not found in environment. Skipping Zamzar conversion.")
            return None

        with open(PPTX_PATH, 'rb') as f:
            files = {'file': f}
            response = requests.post(
                'https://api.zamzar.com/v1/jobs',
                data={'target_format': 'pdf'},
                files=files,
                auth=(api_key, ''),
                timeout=30
            )

        if response.status_code == 201:
            job_data = response.json()
            job_id = job_data['id']
            print(f"Conversion started (Job ID: {job_id})")

            # Poll for completion
            for i in range(60):
                time.sleep(1)
                job_response = requests.get(
                    f'https://api.zamzar.com/v1/jobs/{job_id}',
                    auth=(api_key, ''),
                    timeout=10
                )

                job_status = job_response.json()
                print(f"Status: {job_status.get('status')} ({i+1}/60)")

                if job_status['status'] == 'successful':
                    # Download the converted file
                    if job_status['target_files']:
                        download_url = job_status['target_files'][0]['download_url']
                        pdf_response = requests.get(download_url, timeout=10)

                        with open(PDF_PATH, 'wb') as pdf_file:
                            pdf_file.write(pdf_response.content)

                        pdf_size_mb = os.path.getsize(PDF_PATH) / (1024 * 1024)
                        print(f"[SUCCESS] PDF downloaded: {PDF_PATH}")
                        print(f"PDF file size: {pdf_size_mb:.2f} MB")
                        return PDF_PATH
                    break
                elif job_status['status'] == 'failed':
                    print(f"Conversion failed: {job_status.get('failed')}")
                    break
        else:
            print(f"Zamzar API error: {response.status_code}")

    except Exception as e:
        print(f"Zamzar API not available: {e}")

    return None

if __name__ == "__main__":
    # Try online API first
    result = try_zamzar_conversion()

    # Fallback to local PDF generation
    if not result:
        print("\nFalling back to local PDF generation with Platypus...")
        result = create_pdf_with_formatting()

    if result:
        print(f"\n[SUCCESS] Haiti dossier PDF ready: {result}")
        exit(0)
    else:
        print("\nFailed to create PDF")
        exit(1)
