#!/usr/bin/env python3
"""
Convert PPTX to PDF using LibreOffice via UNO bridge or subprocess
"""

import subprocess
import sys
import os
import time
from pathlib import Path

def convert_with_libreoffice(pptx_path, output_dir=None):
    """
    Convert PPTX to PDF using LibreOffice with various fallback strategies
    """
    pptx_path = Path(pptx_path).resolve()

    if not pptx_path.exists():
        print(f"Error: {pptx_path} not found")
        return False

    # Determine output directory
    if output_dir is None:
        output_dir = pptx_path.parent
    else:
        output_dir = Path(output_dir).resolve()

    output_dir.mkdir(parents=True, exist_ok=True)

    # Try different LibreOffice paths
    libreoffice_paths = [
        r"C:\Program Files\LibreOffice\program\soffice.exe",
        r"C:\Program Files (x86)\LibreOffice\program\soffice.exe",
        "soffice",
        "libreoffice"
    ]

    soffice_exe = None
    for path in libreoffice_paths:
        try:
            result = subprocess.run([path, "--version"], capture_output=True, timeout=5)
            if result.returncode == 0:
                soffice_exe = path
                print(f"Found LibreOffice at: {path}")
                break
        except (FileNotFoundError, subprocess.TimeoutExpired):
            continue

    if not soffice_exe:
        print("Error: LibreOffice not found")
        return False

    try:
        print(f"Converting {pptx_path.name} to PDF...")

        # Run conversion
        cmd = [
            soffice_exe,
            "--headless",
            "--norestore",
            "--nofirststartwizard",
            f"--outdir={output_dir}",
            "--convert-to", "pdf",
            str(pptx_path)
        ]

        print(f"Running: {' '.join(cmd)}")

        # Kill any existing soffice processes first
        try:
            subprocess.run("taskkill /F /IM soffice.bin /T 2>nul || true", shell=True, timeout=5)
            time.sleep(1)
        except:
            pass

        # Run the conversion
        result = subprocess.run(
            cmd,
            capture_output=True,
            text=True,
            timeout=60
        )

        print(f"Return code: {result.returncode}")
        if result.stdout:
            print(f"Stdout: {result.stdout}")
        if result.stderr:
            print(f"Stderr: {result.stderr}")

        # Check if PDF was created
        pdf_path = output_dir / pptx_path.stem / ".pdf"
        pdf_path_alt = output_dir / (pptx_path.stem + ".pdf")

        # Wait a moment for file system to update
        time.sleep(2)

        # Try alternative naming
        if not pdf_path.exists():
            pdf_path = pdf_path_alt

        if pdf_path.exists():
            print(f"PDF created: {pdf_path}")
            return True
        else:
            # List files to debug
            print(f"\nFiles in {output_dir}:")
            for f in output_dir.iterdir():
                print(f"  {f.name}")
            return False

    except subprocess.TimeoutExpired:
        print("Error: Conversion timed out")
        return False
    except Exception as e:
        print(f"Error: {e}")
        return False

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python pptx_to_pdf_robust.py <input.pptx> [output_dir]")
        sys.exit(1)

    pptx_file = sys.argv[1]
    output_dir = sys.argv[2] if len(sys.argv) > 2 else None

    success = convert_with_libreoffice(pptx_file, output_dir)
    sys.exit(0 if success else 1)
