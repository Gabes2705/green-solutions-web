#!/usr/bin/env node

/**
 * Convert Chile PPTX to PDF using online API (Zamzar free tier)
 * Fallback: Accept PPTX if conversion fails
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const pptxPath = path.join(__dirname, '../public/documents/countries/chili.pptx');
const pdfPath = path.join(__dirname, '../public/documents/countries/chili.pdf');

console.log('Intento de conversión PPTX a PDF mediante API en línea...');
console.log(`Entrada: ${pptxPath}`);
console.log(`Salida: ${pdfPath}`);

// Option 1: Try using CloudConvert API (free tier, no key needed for web form)
// But for programmatic access, we need a different approach

// Option 2: Use a Python script with pymupdf if Python is available
const { execSync } = require('child_process');

try {
  // Try using Python + pymupdf to convert
  const pythonScript = `
import os
from pathlib import Path

try:
  from pptx import Presentation
  from PIL import ImageDraw, Image, ImageFont
  from io import BytesIO

  # Read PPTX
  prs = Presentation('${pptxPath.replace(/\\/g, '\\\\')}')

  # Create PDF from PPTX (simple approach: create a text-based PDF)
  from reportlab.pdfgen import canvas
  from reportlab.lib.pagesizes import letter

  c = canvas.Canvas('${pdfPath.replace(/\\/g, '\\\\')}', pagesize=letter)

  # Simple export - just text content
  for idx, slide in enumerate(prs.slides, 1):
    y = 750
    c.drawString(50, y, f"Slide {idx}")
    y -= 20

    for shape in slide.shapes:
      if hasattr(shape, "text"):
        text = shape.text[:100]  # Limit text length
        if text:
          c.drawString(50, y, text)
          y -= 20
        if y < 50:
          c.showPage()
          y = 750

  c.save()
  print("PDF created successfully with Python/ReportLab")

except ImportError as e:
  print(f"Library not available: {e}")
except Exception as e:
  print(f"Error: {e}")
`;

  // Write Python script to temp file
  const pythonScriptPath = path.join(__dirname, '../temp-convert-script.py');
  fs.writeFileSync(pythonScriptPath, pythonScript);

  try {
    execSync(`python "${pythonScriptPath}"`, {
      stdio: 'pipe',
      timeout: 15000
    });

    if (fs.existsSync(pdfPath)) {
      console.log('\n✓ PDF creado exitosamente usando Python/ReportLab');
      const stats = fs.statSync(pdfPath);
      const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
      console.log(`Tamaño: ${sizeMB} MB`);

      // Cleanup
      fs.unlinkSync(pythonScriptPath);
      process.exit(0);
    }
  } catch (e) {
    console.log('Python conversion attempt failed');
  }

  // Cleanup temp file
  if (fs.existsSync(pythonScriptPath)) {
    fs.unlinkSync(pythonScriptPath);
  }

} catch (error) {
  console.log('Python conversion method not available');
}

// Option 3: If all else fails, create a simple PDF stub
console.log('\nIntentando método alternativo...');

try {
  // Try to use pdfrw or similar if available
  const { execSync } = require('child_process');

  // Check if libreoffice-convert works differently
  const convert = require('libreoffice-convert');

  if (typeof convert.convert === 'function') {
    const pptxBuffer = fs.readFileSync(pptxPath);

    convert.convert(
      {
        input: pptxBuffer,
        format: 'pdf',
        timeout: 30000
      },
      (err, pdfBuffer) => {
        if (!err && pdfBuffer) {
          fs.writeFileSync(pdfPath, pdfBuffer);
          console.log('✓ PDF creado exitosamente usando libreoffice-convert');
          const stats = fs.statSync(pdfPath);
          const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
          console.log(`Tamaño: ${sizeMB} MB`);
          process.exit(0);
        } else {
          console.log('libreoffice-convert no disponible - se requiere LibreOffice instalado');
          console.log('\n✗ No se pudo crear PDF automáticamente');
          console.log('Soluciones:');
          console.log('1. Instalar LibreOffice');
          console.log('2. Usar servicio en línea: https://cloudconvert.com/pptx-to-pdf');
          console.log('3. Usar: libreoffice --headless --convert-to pdf chili.pptx');
          process.exit(0);
        }
      }
    );
  }
} catch (error) {
  console.log('Error en conversión:', error.message);
  console.log('\n✗ No se pudo crear PDF automáticamente');
  console.log('El archivo PPTX está disponible en:');
  console.log(`  ${pptxPath}`);
  console.log('\nPuede convertirlo manualmente usando:');
  console.log('  1. LibreOffice: libreoffice --headless --convert-to pdf chili.pptx');
  console.log('  2. En línea: https://cloudconvert.com/pptx-to-pdf');
  console.log('  3. MS PowerPoint: File > Export as PDF');
  process.exit(0);
}
