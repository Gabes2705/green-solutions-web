#!/usr/bin/env python3
"""Convert PPTX to PDF using PowerPoint COM interface (Windows)"""

import sys
import os
import subprocess

def convert_with_powershell(pptx_path, pdf_path):
    """Use PowerShell to convert PPTX to PDF via PowerPoint COM"""
    ps_script = f"""
    $pptx = '{os.path.abspath(pptx_path)}'
    $pdf = '{os.path.abspath(pdf_path)}'

    $pptApplication = New-Object -ComObject PowerPoint.Application
    $pptApplication.Visible = $false

    try {{
        $presentation = $pptApplication.Presentations.Open($pptx, [Microsoft.Office.Core.MsoTriState]::msoTrue, [Microsoft.Office.Core.MsoTriState]::msoTrue, [Microsoft.Office.Core.MsoTriState]::msoTrue)
        $presentation.SaveAs($pdf, 32) # 32 = ppSaveAsPDF
        Write-Host "PDF saved to: $pdf"
        $presentation.Close()
    }} finally {{
        $pptApplication.Quit()
    }}
    """

    try:
        result = subprocess.run(
            ['powershell', '-Command', ps_script],
            capture_output=True,
            text=True,
            timeout=60
        )
        if result.returncode == 0:
            print(result.stdout)
            return True
        else:
            print(f"PowerShell error: {result.stderr}")
            return False
    except Exception as e:
        print(f"Error running PowerShell: {e}")
        return False

if __name__ == '__main__':
    pptx_file = r'C:\Users\Utilisateur\dev\green-solutions-web\scripts\usa-dossier\usa_dossier.pptx'
    pdf_file = r'C:\Users\Utilisateur\dev\green-solutions-web\public\documents\countries\usa.pdf'

    print(f"Converting {pptx_file} to PDF...")
    print(f"Output: {pdf_file}")

    if convert_with_powershell(pptx_file, pdf_file):
        if os.path.exists(pdf_file):
            file_size = os.path.getsize(pdf_file)
            print(f"Success! PDF file size: {file_size:,} bytes ({file_size/1024/1024:.2f} MB)")
        else:
            print("ERROR: PDF file not created!")
            sys.exit(1)
    else:
        print("Conversion failed!")
        sys.exit(1)
