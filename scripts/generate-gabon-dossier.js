#!/usr/bin/env node

/**
 * Gabonese Market Development Dossier Generator
 * Generates a comprehensive market analysis presentation in French using pptxgenjs
 * Output: public/documents/countries/gabon.pdf
 */

const PptxGenJs = require('pptxgenjs');
const fs = require('fs');
const path = require('path');
const https = require('https');

// Create presentation
const prs = new PptxGenJs();
prs.defineLayout({ name: 'LAYOUT1', master: 'BLANK' });
prs.defineLayout({ name: 'LAYOUT2', master: 'BLANK' });

// Color scheme
const colors = {
  darkGreen: '1B4D3E',
  accentGreen: '2D8659',
  lightGreen: '5AB86E',
  waterBlue: '0097A7',
  textDark: '2D3436',
  textLight: 'F0F0F0',
  background: 'FFFFFF',
  accentOrange: 'FF9800'
};

// Set slide size and background
prs.defineLayout({ name: 'BLANK', master: 'BLANK' });

// Helper function to download images
async function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        downloadImage(response.headers.location, filename).then(resolve).catch(reject);
      } else if (response.statusCode === 200) {
        const file = fs.createWriteStream(filename);
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve(filename);
        });
      } else {
        reject(new Error(`Failed to download: ${response.statusCode}`));
      }
    }).on('error', reject);
  });
}

// Helper function to add header slide
function addHeaderSlide(title, subtitle = '', imagePath = null) {
  const slide = prs.addSlide();

  // Background
  slide.background = { color: colors.darkGreen };

  // Title
  slide.addText(title, {
    x: 0.5,
    y: 2.0,
    w: 9,
    h: 1.5,
    fontSize: 48,
    bold: true,
    color: colors.textLight,
    align: 'left',
    fontFace: 'Arial'
  });

  // Subtitle
  if (subtitle) {
    slide.addText(subtitle, {
      x: 0.5,
      y: 3.6,
      w: 9,
      h: 0.8,
      fontSize: 24,
      color: colors.lightGreen,
      align: 'left',
      fontFace: 'Arial'
    });
  }

  // Accent bar
  slide.addShape(prs.ShapeType.rect, {
    x: 0,
    y: 5.2,
    w: 10,
    h: 0.1,
    fill: { color: colors.accentOrange },
    line: { type: 'none' }
  });

  return slide;
}

// Helper function to add content slide
function addContentSlide(title, content, imagePath = null) {
  const slide = prs.addSlide();

  // Background
  slide.background = { color: colors.background };

  // Header bar
  slide.addShape(prs.ShapeType.rect, {
    x: 0,
    y: 0,
    w: 10,
    h: 0.7,
    fill: { color: colors.darkGreen },
    line: { type: 'none' }
  });

  // Title
  slide.addText(title, {
    x: 0.3,
    y: 0.1,
    w: 9,
    h: 0.5,
    fontSize: 32,
    bold: true,
    color: colors.textLight,
    align: 'left',
    fontFace: 'Arial'
  });

  // Content
  if (typeof content === 'string') {
    slide.addText(content, {
      x: 0.5,
      y: 1.0,
      w: imagePath ? 4.5 : 9,
      h: 4.5,
      fontSize: 14,
      color: colors.textDark,
      align: 'left',
      fontFace: 'Arial',
      valign: 'top'
    });
  } else if (Array.isArray(content)) {
    let yPos = 1.0;
    content.forEach((item, index) => {
      slide.addText(item, {
        x: 0.5,
        y: yPos,
        w: imagePath ? 4.5 : 9,
        h: 0.8,
        fontSize: 13,
        color: colors.textDark,
        align: 'left',
        fontFace: 'Arial',
        bullet: true
      });
      yPos += 0.9;
    });
  }

  // Add image if provided
  if (imagePath && fs.existsSync(imagePath)) {
    slide.addImage({
      path: imagePath,
      x: 5.2,
      y: 1.0,
      w: 4.3,
      h: 4.5,
      rasterized: true
    });
  }

  return slide;
}

// Main function
async function generateDossier() {
  console.log('Generating Gabonese Market Development Dossier...\n');

  const outputDir = path.join(__dirname, '../public/documents/countries');
  const imagesDir = path.join(__dirname, '../temp-gabon-images');

  // Create directories if they don't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  // Slide 1: Title Slide
  console.log('Creating slide 1: Title Slide');
  addHeaderSlide(
    'GABON',
    'Dossier de Développement du Marché',
    null
  );

  // Slide 2: Aperçu du Marché
  console.log('Creating slide 2: Market Overview');
  addContentSlide(
    'Aperçu du Marché Gabonais',
    [
      '• Population: ~2.3 millions d\'habitants',
      '• Superficie: 267,667 km² (16e plus grand pays africain)',
      '• PIB: ~19.9 milliards USD (2023)',
      '• Capitale: Libreville',
      '• Monnaie: Franc CFA (XAF)',
      '• Langue officielle: Français',
      '• Secteurs clés: Pétrole, Bois, Agriculture'
    ]
  );

  // Slide 3: Contexte Économique
  console.log('Creating slide 3: Economic Context');
  addContentSlide(
    'Contexte Économique et Démographique',
    [
      '• Taux de croissance PIB: ~2.5% (2023-2024)',
      '• PIB par capita: ~8,500 USD',
      '• Diversification économique en cours',
      '• Population jeune: 65% sous 25 ans',
      '• Urbanisation: ~88% en zones urbaines',
      '• Classe moyenne en expansion rapide',
      '• Stabilité politique relative'
    ]
  );

  // Slide 4: Secteurs Agricoles Clés
  console.log('Creating slide 4: Agricultural Sectors');
  addContentSlide(
    'Secteurs Agricoles Majeurs',
    [
      '• Agriculture: ~5% du PIB, potentiel de croissance majeur',
      '• Cacao: Production croissante, 15,000-20,000 tonnes/an',
      '• Huile de Palme: ~850,000 tonnes/an de potentiel',
      '• Bois tropical: Ressource majeure, gestion durable cruciale',
      '• Culture vivrière: Manioc, banane, plantain',
      '• Pêche et aquaculture: Secteurs sous-développés',
      '• Potentiel d\'exportation: 500M-1B USD/an'
    ]
  );

  // Slide 5: Ressources en Eau
  console.log('Creating slide 5: Water Resources');
  addContentSlide(
    'Ressources Hydriques et Patterns d\'Utilisation',
    [
      '• Ressources en eau: Abondantes (320 milliards m³/an)',
      '• Fleuve Ogooué: Principal fleuve (1,200 km)',
      '• Eau douce: Couvre 10% de la superficie',
      '• Utilisation agricole: ~80-85% des prélèvements',
      '• Disponibilité: 13,800 m³ par capita/an',
      '• Défi: Infrastructure d\'irrigation limitée',
      '• Opportunité: Développement hydro-électrique'
    ]
  );

  // Slide 6: Climat et Contraintes
  console.log('Creating slide 6: Climate & Constraints');
  addContentSlide(
    'Climat et Contraintes Environnementales',
    [
      '• Climat équatorial: Humide, 2 saisons (pluie/sèche)',
      '• Précipitations: 1,500-2,500 mm/an selon régions',
      '• Forêt tropicale: 88% de couverture forestière',
      '• Biodiversité: Riche écosystème à préserver',
      '• Défi: Érosion côtière et inondations saisonnières',
      '• Potentiel: Crédits carbone forestiers (REDD+)',
      '• Priorité: Agriculture durable et résiliente'
    ]
  );

  // Slide 7: Adéquation Technologique
  console.log('Creating slide 7: Technology Fit');
  addContentSlide(
    'Solutions Technologiques Adaptées',
    [
      '• Agriculture de précision: Fort potentiel',
      '• Irrigation goutte-à-goutte: Économies d\'eau 40-60%',
      '• Drones/satellites: Monitoring des cultures',
      '• Applications mobiles: Accès marché, météo, prix',
      '• Énergie renouvelable: Hydro-électrique, solaire',
      '• Transformation locale: Unités de transformation',
      '• Traçabilité blockchain: Certification produits premium'
    ]
  );

  // Slide 8: Infrastructure et Défis
  console.log('Creating slide 8: Infrastructure Challenges');
  addContentSlide(
    'Infrastructure et Défis d\'Accès',
    [
      '• Routes: 8,500 km, condition variable',
      '• Ports: Libreville (Owendo), accès restreint',
      '• Électricité: ~90% couverture, coût élevé',
      '• Internet: Couverture croissante, 35-40% en zones rurales',
      '• Financement agricole: Accès limité aux microcrédits',
      '• Entreposage: Faible capacité de conservation',
      '• Logistique: Coûts d\'export élevés'
    ]
  );

  // Slide 9: Études de Cas - Cacao Durable
  console.log('Creating slide 9: Case Study - Sustainable Cocoa');
  addContentSlide(
    'Étude de Cas: Initiative Cacao Durable',
    [
      '• Projet: Certification cacao biologique Gabon',
      '• Superficie: 2,500-3,000 ha',
      '• Rendement: 400-600 kg/ha (vs 200 moyenne)',
      '• Prix premium: +30-40% vs marché conventionnel',
      '• Revenus: 1,200-1,500 USD/ha/an',
      '• Impact social: 500+ familles de producteurs',
      '• Leçon: Certification+investissement = Rendement'
    ]
  );

  // Slide 10: Étude de Cas - Aquaculture
  console.log('Creating slide 10: Case Study - Aquaculture');
  addContentSlide(
    'Étude de Cas: Aquaculture Intégrée',
    [
      '• Projet: Fermes poisson-légumes, Estuaire d\'Ogooué',
      '• Espèces: Tilapia, silure, légumes aquaponiques',
      '• Production: 50-100 tonnes/an par site',
      '• Rentabilité: 25-35% de retour sur investissement',
      '• Emplois: 8-12 permanents + saisonniers',
      '• Marché: Export régionale + marché local',
      '• Potentiel: 10-20 sites viables d\'ici 2028'
    ]
  );

  // Slide 11: Environnement Réglementaire
  console.log('Creating slide 11: Regulatory Environment');
  addContentSlide(
    'Environnement Réglementaire et Politique',
    [
      '• Code forestier: Gestion durable obligatoire',
      '• Code agricole: Politique d\'intensification',
      '• Libre-échange: Adhésion à COMESA et CEMAC',
      '• Taxation: Exemptions possibles pour agro-export',
      '• Environnement: Conformité REDD+ et durabilité',
      '• Investissement: Codes d\'investissement favorables',
      '• Partenariats: Accords commerciaux régionaux'
    ]
  );

  // Slide 12: Opportunités de Partenariat
  console.log('Creating slide 12: Partnership Opportunities');
  addContentSlide(
    'Opportunités de Partenariat Stratégique',
    [
      '• Multinationales agro: Modernisation secteurs clés',
      '• Technologie: Fourniture solutions irrigation',
      '• Finance: Fonds de développement, subventions',
      '• Export: Partenaires Europe, Asie, Afrique',
      '• Recherche: Institutions amélioration variétés',
      '• Formation: Centres d\'excellence agricole',
      '• Transformation: Usines traitement local'
    ]
  );

  // Slide 13: Feuille de Route 2025-2030
  console.log('Creating slide 13: Roadmap 2025-2030');
  addContentSlide(
    'Feuille de Route de Développement 2025-2030',
    [
      '• Phase 1 (2025): Diagnostic, certification, pilotes',
      '• Phase 2 (2026): Expansion 5,000 ha en cultures intensives',
      '• Phase 3 (2027): Infrastructure irrigation (10,000 ha)',
      '• Phase 4 (2028): Transformation locale, export +50%',
      '• Phase 5 (2029-30): Consolidation, profitabilité durable',
      '• Cible: 500M USD revenue agricole agro-export d\'ici 2030',
      '• Emplois: 25,000+ dans secteur agricole'
    ]
  );

  // Slide 14: Conclusion et Appel à l'Action
  console.log('Creating slide 14: Conclusion & Call to Action');
  const slide = prs.addSlide();
  slide.background = { color: colors.accentGreen };

  slide.addText('Gabon: Opportunité Africaine Émergente', {
    x: 0.5,
    y: 1.5,
    w: 9,
    h: 1.0,
    fontSize: 40,
    bold: true,
    color: colors.textLight,
    align: 'center',
    fontFace: 'Arial'
  });

  slide.addText(
    'Ressources + Technologie + Volonté politique = Croissance durable\n\n' +
    'Investissement agricole: ROI 25-35% sur 5-7 ans\n' +
    'Potentiel d\'exportation: 1+ milliard USD\n' +
    'Impact social et environnemental positif',
    {
      x: 1.0,
      y: 2.7,
      w: 8,
      h: 2.0,
      fontSize: 16,
      color: colors.textLight,
      align: 'center',
      fontFace: 'Arial',
      valign: 'middle'
    }
  );

  // Save presentation as PPTX
  const pptxPath = path.join(outputDir, 'gabon.pptx');
  console.log(`\nSaving presentation to: ${pptxPath}`);
  await prs.writeFile({ fileName: pptxPath });
  console.log('PPTX file created successfully');

  // Convert PPTX to PDF using libreoffice-convert
  console.log('\nConverting PPTX to PDF...');

  return new Promise((resolve, reject) => {
    try {
      const convert = require('libreoffice-convert');
      const pptxBuffer = fs.readFileSync(pptxPath);

      convert({
        input: pptxBuffer,
        format: 'pdf',
        timeout: 30000
      }, (error, pdfBuffer) => {
        if (error) {
          console.log('Note: PDF conversion attempted but PPTX will be used as fallback');
          // Fallback: Use PPTX as the output
          const stats = fs.statSync(pptxPath);
          const fileSizeMB = (stats.size / (1024 * 1024)).toFixed(2);

          console.log(`\n=== Gabon Dossier Generation Complete ===`);
          console.log(`Output file: ${pptxPath}`);
          console.log(`File size: ${fileSizeMB} MB`);
          console.log(`Slides: 14`);
          console.log(`Language: French`);

          resolve(pptxPath);
        } else {
          const pdfPath = path.join(outputDir, 'gabon.pdf');
          fs.writeFileSync(pdfPath, pdfBuffer);
          console.log(`PDF created successfully: ${pdfPath}`);

          // Get file size
          const stats = fs.statSync(pdfPath);
          const fileSizeMB = (stats.size / (1024 * 1024)).toFixed(2);

          console.log(`\n=== Gabon Dossier Generation Complete ===`);
          console.log(`Output file: ${pdfPath}`);
          console.log(`File size: ${fileSizeMB} MB`);
          console.log(`Slides: 14`);
          console.log(`Language: French`);

          // Cleanup temp directory
          if (fs.existsSync(imagesDir)) {
            fs.rmSync(imagesDir, { recursive: true });
          }

          resolve(pdfPath);
        }
      });
    } catch (error) {
      console.log('PDF conversion library not available - PPTX will be used');
      // Fallback: Use PPTX as the output
      const stats = fs.statSync(pptxPath);
      const fileSizeMB = (stats.size / (1024 * 1024)).toFixed(2);

      console.log(`\n=== Gabon Dossier Generation Complete ===`);
      console.log(`Output file: ${pptxPath}`);
      console.log(`File size: ${fileSizeMB} MB`);
      console.log(`Slides: 14`);
      console.log(`Language: French`);

      resolve(pptxPath);
    }
  });
}

// Run the generator
generateDossier()
  .then(output => {
    console.log('\nDossier generation successful!');
    process.exit(0);
  })
  .catch(error => {
    console.error('Error generating dossier:', error.message);
    process.exit(1);
  });
