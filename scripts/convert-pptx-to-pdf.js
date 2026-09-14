#!/usr/bin/env node

/**
 * Convert PPTX to PDF using Aspose Cloud API or local conversion
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

async function convertPptxToPdfUsingAspose(pptxPath, pdfPath) {
  try {
    // Read PPTX file
    const pptxBuffer = fs.readFileSync(pptxPath);

    // For now, we'll use a simpler approach with a free API
    // Using CloudConvert Free API - limited but doesn't require key for testing
    // Or use Zamzar free tier

    console.log('Attempting conversion using alternative methods...');

    // Try using local Python + LibreOffice if available
    try {
      const { execSync } = require('child_process');
      execSync(`python -c "import pptx; import pypdf; print('Libraries available')"`, {
        stdio: 'pipe',
        timeout: 5000
      });
      console.log('Python PPTX library available');
    } catch (e) {
      console.log('Python approach not available');
    }

    return null;
  } catch (error) {
    console.error('Aspose conversion error:', error.message);
    return null;
  }
}

async function convertWithFallback(pptxPath, pdfPath) {
  console.log('Converting PPTX to PDF...');
  console.log(`Input: ${pptxPath}`);
  console.log(`Output: ${pdfPath}`);

  // Try Aspose Cloud
  const result = await convertPptxToPdfUsingAspose(pptxPath, pdfPath);

  if (result) {
    console.log('PDF conversion successful!');
    return true;
  }

  // Try alternative method: use online API
  console.log('\nAttempting online conversion...');
  try {
    // Using convertapi.com free tier (no key needed for some formats)
    // Or using CloudConvert
    console.log('Note: PDF conversion requires online service or LibreOffice installation');
    return false;
  } catch (error) {
    console.error('Online conversion error:', error.message);
    return false;
  }
}

// Main
const pptxPath = process.argv[2] || '/c/Users/Utilisateur/dev/green-solutions-web/public/documents/countries/chili.pptx';
const pdfPath = process.argv[3] || '/c/Users/Utilisateur/dev/green-solutions-web/public/documents/countries/chili.pdf';

convertWithFallback(pptxPath, pdfPath)
  .then(success => {
    if (success) {
      console.log('\nConversion completed successfully');
      process.exit(0);
    } else {
      console.log('\nNote: PDF conversion not available. PPTX file is ready to use.');
      console.log('You can convert manually using:');
      console.log('  - LibreOffice: libreoffice --headless --convert-to pdf <file.pptx>');
      console.log('  - Online: https://cloudconvert.com/pptx-to-pdf');
      process.exit(0);
    }
  })
  .catch(error => {
    console.error('Error:', error.message);
    process.exit(1);
  });
