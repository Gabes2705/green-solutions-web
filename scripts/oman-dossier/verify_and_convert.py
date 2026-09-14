#!/usr/bin/env python3
"""
Verify PPTX and attempt conversion using available methods
"""
from pptx import Presentation
import os
import sys
import subprocess
from pathlib import Path

def verify_pptx(pptx_path):
    """Verify PPTX file is valid"""
    try:
        prs = Presentation(pptx_path)
        print(f"[OK] PPTX valid: {len(prs.slides)} slides")
        return True
    except Exception as e:
        print(f"[ERROR] PPTX invalid: {e}")
        return False

def convert_using_cmd(pptx_path, pdf_path):
    """Try conversion using Windows command line tools"""
    # This uses PowerPoint's built-in export via VBScript or similar
    vbs_script = f'''
Set objPPT = CreateObject("PowerPoint.Application")
objPPT.DisplayAlerts = 0
Set objPresentation = objPPT.Presentations.Open("{os.path.abspath(pptx_path)}")
objPresentation.ExportAsFixedFormat "{os.path.abspath(pdf_path)}", 2
objPresentation.Close
objPPT.Quit
Set objPresentation = Nothing
Set objPPT = Nothing
'''

    vbs_path = Path(pptx_path).parent / "convert.vbs"

    try:
        with open(vbs_path, 'w') as f:
            f.write(vbs_script)

        result = subprocess.run(
            ["cscript.exe", str(vbs_path)],
            capture_output=True,
            text=True,
            timeout=60
        )

        vbs_path.unlink()  # Clean up script

        if result.returncode == 0 and os.path.exists(pdf_path):
            print("VBScript conversion successful")
            return True
        else:
            print(f"VBScript error: {result.stderr}")
            return False
    except Exception as e:
        print(f"VBScript conversion failed: {e}")
        if vbs_path.exists():
            vbs_path.unlink()
        return False

def main():
    pptx_path = r"C:\Users\Utilisateur\dev\green-solutions-web\scripts\oman-dossier\oman_dossier.pptx"
    pdf_path = r"C:\Users\Utilisateur\dev\green-solutions-web\public\documents\countries\oman.pdf"

    print(f"Source PPTX: {pptx_path}")
    print(f"Target PDF: {pdf_path}\n")

    # Verify source
    if not os.path.exists(pptx_path):
        print(f"Error: PPTX not found")
        sys.exit(1)

    # Verify PPTX validity
    print("Verifying PPTX integrity...")
    if not verify_pptx(pptx_path):
        print("Error: PPTX file is invalid")
        sys.exit(1)

    # Ensure target directory exists
    os.makedirs(os.path.dirname(pdf_path), exist_ok=True)

    # Try VBScript conversion
    print("\nAttempting conversion with VBScript...")
    if convert_using_cmd(pptx_path, pdf_path):
        if os.path.exists(pdf_path):
            size_kb = os.path.getsize(pdf_path) / 1024
            print(f"[OK] PDF created: {size_kb:.1f} KB")
            sys.exit(0)

    # If conversion fails, provide guidance
    print("\nConversion failed. Please convert PPTX to PDF manually using:")
    print(f"  1. Open PowerPoint and load: {pptx_path}")
    print(f"  2. File > Export As > PDF")
    print(f"  3. Save to: {pdf_path}")

    # For now, create a placeholder with the PPTX data
    # This is NOT ideal but ensures the file exists for testing
    print("\nNote: PPTX file is valid and ready for manual conversion")
    print(f"PPTX location: {pptx_path}")

    sys.exit(1)

if __name__ == "__main__":
    main()
