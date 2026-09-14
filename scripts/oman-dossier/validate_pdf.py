#!/usr/bin/env python3
"""
Validate PDF file and extract metadata
"""
import os
import sys
from pathlib import Path

try:
    import pypdf
    HAS_PYPDF = True
except ImportError:
    HAS_PYPDF = False

def validate_pdf(pdf_path):
    """Validate PDF file"""
    if not os.path.exists(pdf_path):
        return False, "File not found"

    file_size = os.path.getsize(pdf_path)
    if file_size == 0:
        return False, "File is empty"

    if not HAS_PYPDF:
        # Basic validation without pypdf
        try:
            with open(pdf_path, 'rb') as f:
                header = f.read(5)
                if header.startswith(b'%PDF'):
                    return True, f"Valid PDF (size: {file_size / 1024:.1f} KB)"
                else:
                    return False, "Not a valid PDF (invalid header)"
        except Exception as e:
            return False, f"Error reading file: {e}"
    else:
        # Detailed validation with pypdf
        try:
            reader = pypdf.PdfReader(pdf_path)
            num_pages = len(reader.pages)
            return True, f"Valid PDF ({num_pages} pages, {file_size / 1024:.1f} KB)"
        except Exception as e:
            return False, f"Invalid PDF: {e}"

def main():
    pdf_path = r"C:\Users\Utilisateur\dev\green-solutions-web\public\documents\countries\oman.pdf"

    print(f"PDF Path: {pdf_path}\n")

    is_valid, message = validate_pdf(pdf_path)

    if is_valid:
        print(f"[OK] {message}")

        # Get file details
        file_stat = os.stat(pdf_path)
        print(f"\nFile Details:")
        print(f"  Size: {file_stat.st_size / 1024:.1f} KB")
        print(f"  Location: {pdf_path}")

        sys.exit(0)
    else:
        print(f"[ERROR] {message}")
        sys.exit(1)

if __name__ == "__main__":
    main()
