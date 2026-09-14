#!/usr/bin/env python3
"""
Convert PPTX to PDF using multiple approaches
"""
import subprocess
import os
import sys
from pathlib import Path

def convert_with_powershell(pptx_path, pdf_path):
    """Convert PPTX to PDF using PowerShell and PowerPoint COM"""
    script = f'''
    $pptxPath = "{pptx_path}"
    $pdfPath = "{pdf_path}"

    $ppt = New-Object -ComObject PowerPoint.Application
    $ppt.DisplayAlerts = 2

    # Open and convert
    $presentation = $ppt.Presentations.Open([System.IO.Path]::GetFullPath($pptxPath), -1, -1, -1)
    $presentation.ExportAsFixedFormat([System.IO.Path]::GetFullPath($pdfPath), 2)
    $presentation.Close()
    $ppt.Quit()

    # Release COM objects
    [System.Runtime.Interopservices.Marshal]::ReleaseComObject($ppt) | Out-Null

    Write-Host "Conversion complete"
    '''

    try:
        result = subprocess.run(
            ["powershell", "-NoProfile", "-Command", script],
            capture_output=True,
            text=True,
            timeout=30
        )

        if result.returncode == 0:
            print("PowerShell conversion successful")
            return True
        else:
            print(f"PowerShell error: {result.stderr}")
            return False
    except Exception as e:
        print(f"PowerShell conversion failed: {e}")
        return False

def convert_with_libreoffice(pptx_path, pdf_path):
    """Convert PPTX to PDF using LibreOffice"""
    try:
        cmd = [
            "soffice",
            "--headless",
            "--convert-to", "pdf",
            "--outdir", os.path.dirname(pdf_path),
            pptx_path
        ]

        result = subprocess.run(cmd, capture_output=True, text=True, timeout=60)

        if result.returncode == 0:
            print("LibreOffice conversion successful")

            # Rename output file to expected name
            source_pdf = os.path.join(os.path.dirname(pdf_path), os.path.splitext(os.path.basename(pptx_path))[0] + ".pdf")
            if os.path.exists(source_pdf) and source_pdf != pdf_path:
                os.rename(source_pdf, pdf_path)

            return True
        else:
            print(f"LibreOffice error: {result.stderr}")
            return False
    except FileNotFoundError:
        print("LibreOffice not found")
        return False
    except Exception as e:
        print(f"LibreOffice conversion failed: {e}")
        return False

def main():
    pptx_path = r"C:\Users\Utilisateur\dev\green-solutions-web\scripts\oman-dossier\oman_dossier.pptx"
    pdf_path = r"C:\Users\Utilisateur\dev\green-solutions-web\public\documents\countries\oman.pdf"

    print(f"Source PPTX: {pptx_path}")
    print(f"Target PDF: {pdf_path}")

    # Verify source exists
    if not os.path.exists(pptx_path):
        print(f"Error: PPTX file not found: {pptx_path}")
        sys.exit(1)

    print(f"PPTX file size: {os.path.getsize(pptx_path) / 1024:.1f} KB")

    # Create target directory if needed
    os.makedirs(os.path.dirname(pdf_path), exist_ok=True)

    # Try PowerShell first (Windows with PowerPoint)
    print("\nAttempting conversion with PowerShell/PowerPoint...")
    if convert_with_powershell(pptx_path, pdf_path):
        if os.path.exists(pdf_path):
            print(f"✓ PDF created successfully: {os.path.getsize(pdf_path) / 1024:.1f} KB")
            sys.exit(0)

    # Try LibreOffice
    print("\nAttempting conversion with LibreOffice...")
    if convert_with_libreoffice(pptx_path, pdf_path):
        if os.path.exists(pdf_path):
            print(f"✓ PDF created successfully: {os.path.getsize(pdf_path) / 1024:.1f} KB")
            sys.exit(0)

    print("\nError: Could not convert PPTX to PDF")
    sys.exit(1)

if __name__ == "__main__":
    main()
