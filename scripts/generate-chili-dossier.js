#!/usr/bin/env node

/**
 * Chilean Market Development Dossier Generator
 * Generates a comprehensive market analysis presentation in Spanish using pptxgenjs
 * Output: public/documents/countries/chili.pptx and .pdf
 */

const PptxGenJs = require('pptxgenjs');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Create presentation
const prs = new PptxGenJs();

// Color scheme inspired by Chilean flag: dark green #165D31, sky blue #75AADB, white
const colors = {
  darkGreen: '165D31',      // Chilean flag green
  mediumGreen: '2D8A5F',
  lightGreen: '5AB86E',
  skyBlue: '75AADB',        // Chilean sky blue
  accentBlue: '0097A7',
  textDark: '2D3436',
  textLight: 'F0F0F0',
  background: 'FFFFFF',
  accentOrange: 'FF9800'
};

// Helper function to add header slide (cover slide)
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
      color: colors.skyBlue,
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
    fill: { color: colors.skyBlue },
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
  console.log('Generando Dossier de Desarrollo de Mercado Agrícola de Chile...\n');

  const outputDir = path.join(__dirname, '../public/documents/countries');

  // Create directories if they don't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Slide 1: Title Slide
  console.log('Creando diapositiva 1: Portada');
  addHeaderSlide(
    'Chili - Potencial de Mercado Agrícola',
    'Dossier de Desarrollo de Mercado',
    null
  );

  // Slide 2: Agricultural Context
  console.log('Creando diapositiva 2: Contexto Agrícola');
  addContentSlide(
    'Contexto Agrícola de Chile',
    [
      '• Población: ~19,6 millones de habitantes',
      '• Superficie total: 1.285.216 km² (incluyendo territorios insulares)',
      '• PIB nacional: ~305 mil millones USD (2023)',
      '• Contribución agrícola al PIB: ~2,5-3%',
      '• Superficie cultivable: ~2.2 millones de hectáreas',
      '• Clima: Semi-árido al norte, templado en el centro, océanico al sur',
      '• Exportaciones agrícolas: ~25 mil millones USD anuales'
    ]
  );

  // Slide 3: Water Resources
  console.log('Creando diapositiva 3: Recursos Hídricos');
  addContentSlide(
    'Recursos Hídricos y Disponibilidad',
    [
      '• Déficit hídrico crítico en el Norte Chico (Primera-Tercera Región)',
      '• Abundancia relativa en el Sur (Región de Los Lagos y Aysén)',
      '• Cuenca del Bío Bío: Principal fuente para el centro-sur (37 mil millones m³/año)',
      '• Río Maipo: Vital para Región Metropolitana (~2.5 mil millones m³/año)',
      '• Estrés hídrico: 40% del país presenta déficit severo',
      '• Demanda sectorial: Agricultura consume 70-80% del agua disponible',
      '• Cambio climático: Reducción proyectada de precipitaciones 5-15% hacia 2050'
    ]
  );

  // Slide 4: Main Crops & Export
  console.log('Creando diapositiva 4: Cultivos Principales');
  addContentSlide(
    'Cultivos Principales - Afectados por Sequía',
    [
      '• Uvas (Vitis vinifera): Exportación #1, ~1,4 millones de toneladas/año',
      '• Manzanas: 350-400 mil toneladas/año, variedad premium',
      '• Aguacates: 300-400 mil toneladas/año, demanda asia creciente',
      '• Bayas (arándanos, frambuesas, moras): Crecimiento 15-20% anual',
      '• Tomates: 500-600 mil toneladas/año, mercado regional',
      '• Nogales: 100-150 mil toneladas/año de nueces',
      '• Impacto sequía: Rendimiento reducido 20-40% en muchas regiones'
    ]
  );

  // Slide 5: Water Challenges
  console.log('Creando diapositiva 5: Desafíos de Agua');
  addContentSlide(
    'Principales Desafíos Hídricos',
    [
      '• Restricciones hídricas: Prohibiciones de riego en zonas críticas',
      '• Competencia sectorial: Agricultura vs. minería vs. consumo urbano',
      '• Acceso geográfico: 40% del país es desierto (norte)',
      '• Sobre-asignación de derechos de agua: 120-150% en algunas cuencas',
      '• Depleción de acuíferos: Descenso de 1-3 metros por año en el norte',
      '• Conflictividad social: Litigios entre agricultores y municipios',
      '• Sostenibilidad: Urgencia de transición tecnológica e hídrida'
    ]
  );

  // Slide 6: Current Irrigation Systems
  console.log('Creando diapositiva 6: Sistemas de Riego Actual');
  addContentSlide(
    'Infraestructura de Riego Actual',
    [
      '• Sistema gravitario dominante: 60-65% de sistemas de riego',
      '• Eficiencia baja: 40-50% de pérdidas por evaporación y percolación',
      '• Sistemas de goteo: Crecimiento en regiones modernas (Región Central)',
      '• Riego por aspersión: 20-25% en frutales premium',
      '• Infraestructura envejecida: Canales y tuberías de 30-50 años',
      '• Transición en curso: Adopción de riego por goteo +5-8% anual',
      '• Inversión pública: ~200-300 millones USD anuales en modernización'
    ]
  );

  // Slide 7: Economic Potential
  console.log('Creando diapositiva 7: Potencial Económico');
  addContentSlide(
    'Potencial Económico y Oportunidades',
    [
      '• Crecimiento exportación frutas orgánicas: +20-25% anual',
      '• Premium pricing: Mercados premium pagan +30-50% sobre precio base',
      '• Sostenibilidad: Mercado demanda certificaciones (Rainforest, Fair Trade)',
      '• Mercados emergentes: Demanda en Asia (China, Vietnam, Singapur)',
      '• Agregación de valor: Frutas secas, jugos, conservas (+15-20% margen)',
      '• Precio internacional: Uvas ~2-3 USD/kg, arándanos ~3-5 USD/kg',
      '• ROI potencial: 25-40% sobre inversión con adopción tecnológica'
    ]
  );

  // Slide 8: Green Solutions Products
  console.log('Creando diapositiva 8: Soluciones Green Solutions');
  addContentSlide(
    'Soluciones Green Solutions para Chile',
    [
      '• EVERGREEN®: Retención hídrica en suelos (aumenta capacidad 30-40%)',
      '• ECOFERT®: Regeneración de suelos volcánicos (prevalentes en Chile)',
      '• Beneficios combinados: Reducción agua + mejora nutrientes',
      '• Aplicación rápida: Integrable con sistemas existentes',
      '• Compatibilidad: Funciona con riego gravitario y goteo',
      '• Certificación orgánica: Productos calificados para agricultura biológica',
      '• Suelos volcánicos: 80% de suelos chilenos son de origen volcánico'
    ]
  );

  // Slide 9: Water Savings Estimates
  console.log('Creando diapositiva 9: Ahorros de Agua Estimados');
  addContentSlide(
    'Ahorros de Agua Estimados - Disclaimer Legal',
    [
      '• Ahorros estimados: 30-45% según cultivo y método',
      '• Viñedos (EVERGREEN + goteo): ~40% de reducción hídrica',
      '• Manzanales (sistemas gravitarios mejorados): ~35% de reducción',
      '• Aguacatales (riego eficiente): ~45% de reducción potencial',
      '• Berries (sistemas intensivos): ~30-35% de mejora',
      '• DISCLAIMER LEGAL: "Estimación indicativa… el resultado real depende del suelo, clima y cultivo específico. No garantiza resultados. Pruebas piloto recomendadas."',
      '• Validación local: Estudios de caso en Chile del Centro necesarios'
    ]
  );

  // Slide 10: Regional Use Cases
  console.log('Creando diapositiva 10: Casos de Uso Regionales');
  addContentSlide(
    'Casos de Uso Regionales',
    [
      '• Norte Chico (Regiones I-III): Uvas + bayas, estrés hídrico crítico',
      '• Región Metropolitana: Manzanas + vegetales, demanda urbana creciente',
      '• Maule (Región VII): Viñedos + frutales, principal zona vinícola',
      '• Ñuble (Región XVI): Arándanos + manzanas, crecimiento dinámico',
      '• Sur (Región Los Lagos): Berries + productos orgánicos, agua abundante',
      '• Oportunidades: Certificación orgánica, agregación de valor, exportación',
      '• Prioridad: Adaptación climática + eficiencia hídrica'
    ]
  );

  // Slide 11: Local Partners
  console.log('Creando diapositiva 11: Socios Locales');
  addContentSlide(
    'Socios Locales y Asociaciones Estratégicas',
    [
      '• COAGRA: Confederación de Agricultores y Ganaderos',
      '• Sociedades Agrícolas: Asoex (exportadores), SNA (sociedad nacional)',
      '• Cooperativas frutales: FEDEFRUTA, cooperativas regionales de berries',
      '• Exportadores biológicos: Asociaciones de agricultura sustentable',
      '• Universidades: UC, UdeC, INIA (investigación agrícola)',
      '• Centros tecnológicos: Institutos de riego, agricultura de precisión',
      '• Financiamiento: INDAP, INIA, Bancos agrícolas, fondos de inversión'
    ]
  );

  // Slide 12: Adoption Timeline
  console.log('Creando diapositiva 12: Timeline de Adopción');
  addContentSlide(
    'Timeline de Adopción - Fases de Implementación',
    [
      '• Fase 1 (Meses 1-6): Pilotos en viñedos y manzanales del Centro',
      '• Fase 2 (Meses 7-12): Escalada a berries y aguacates',
      '• Fase 3 (Año 2): Expansión a Norte Chico y Región Sur',
      '• Fase 4 (Año 2-3): Integración con sistemas de riego inteligente',
      '• Hitos: Certificaciones, estudios de ROI, alianzas exportadoras',
      '• Adopción esperada: 50+ predios en 18 meses, 200+ en 3 años',
      '• Impacto: Reducción hídrica acumulada 100+ millones m³ anuales'
    ]
  );

  // Slide 13: Risks and Mitigation
  console.log('Creando diapositiva 13: Riesgos y Mitigación');
  addContentSlide(
    'Riesgos y Estrategias de Mitigación',
    [
      '• Riesgo climático: Variabilidad El Niño, sequías extremas',
      '• Mitigación: Diversificación de cultivos, almacenamiento hídrico',
      '• Riesgo político: Regulaciones de agua más restrictivas (posible)',
      '• Mitigación: Adopción proactiva, demostraciones de sostenibilidad',
      '• Riesgo técnico: Adopción lenta de nuevas tecnologías',
      '• Mitigación: Alianzas con extensionistas, capacitación, financiamiento',
      '• Estrategia: Asociaciones con gobiernos regionales, fondos verdes'
    ]
  );

  // Slide 14: Call to Action
  console.log('Creando diapositiva 14: Conclusión y Llamada a la Acción');
  const slide = prs.addSlide();
  slide.background = { color: colors.mediumGreen };

  slide.addText('Chile: Oportunidad Estratégica para Agricultura Sostenible', {
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
    'Recursos + Tecnología + Urgencia Climática = Transformación Agrícola\n\n' +
    'Eficiencia hídrica: 30-45% de ahorro potencial\n' +
    'ROI potencial: 25-40% en 3-5 años\n' +
    'Impacto: Sostenibilidad + Competitividad global',
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

  slide.addText(
    'Contacte a Green Solutions\n' +
    'Solicite estudio de terreno para Chile del Norte/Centro',
    {
      x: 1.0,
      y: 5.0,
      w: 8,
      h: 0.8,
      fontSize: 14,
      color: colors.skyBlue,
      align: 'center',
      fontFace: 'Arial',
      bold: true
    }
  );

  // Save presentation as PPTX
  const pptxPath = path.join(outputDir, 'chili.pptx');
  console.log(`\nGuardando presentación en: ${pptxPath}`);
  await prs.writeFile({ fileName: pptxPath });
  console.log('Archivo PPTX creado exitosamente');

  // Convert PPTX to PDF
  console.log('\nConvirtiendo PPTX a PDF...');

  const pdfPath = path.join(outputDir, 'chili.pdf');

  try {
    // Try using LibreOffice command line if available
    try {
      execSync(`libreoffice --headless --convert-to pdf --outdir "${outputDir}" "${pptxPath}"`, {
        stdio: 'pipe',
        timeout: 30000
      });

      if (fs.existsSync(pdfPath)) {
        const pptxStats = fs.statSync(pptxPath);
        const pdfStats = fs.statSync(pdfPath);
        const pptxSizeMB = (pptxStats.size / (1024 * 1024)).toFixed(2);
        const pdfSizeMB = (pdfStats.size / (1024 * 1024)).toFixed(2);

        console.log(`\n=== Dossier de Chile Generado Exitosamente ===`);
        console.log(`Archivo PPTX: ${pptxPath} (${pptxSizeMB} MB)`);
        console.log(`Archivo PDF: ${pdfPath} (${pdfSizeMB} MB)`);
        console.log(`Diapositivas: 14`);
        console.log(`Idioma: Español (Nativo)`);

        return { pptxPath, pdfPath };
      }
    } catch (e) {
      console.log('LibreOffice no disponible en línea de comandos');
    }

    // Try using libreoffice-convert npm package
    try {
      const libreofficeConvert = require('libreoffice-convert');
      const pptxBuffer = fs.readFileSync(pptxPath);

      await new Promise((resolve, reject) => {
        libreofficeConvert.convert(
          { input: pptxBuffer, format: 'pdf', timeout: 30000 },
          (err, pdfBuffer) => {
            if (err) reject(err);
            else {
              fs.writeFileSync(pdfPath, pdfBuffer);
              resolve();
            }
          }
        );
      });

      const pptxStats = fs.statSync(pptxPath);
      const pdfStats = fs.statSync(pdfPath);
      const pptxSizeMB = (pptxStats.size / (1024 * 1024)).toFixed(2);
      const pdfSizeMB = (pdfStats.size / (1024 * 1024)).toFixed(2);

      console.log(`\n=== Dossier de Chile Generado Exitosamente ===`);
      console.log(`Archivo PPTX: ${pptxPath} (${pptxSizeMB} MB)`);
      console.log(`Archivo PDF: ${pdfPath} (${pdfSizeMB} MB)`);
      console.log(`Diapositivas: 14`);
      console.log(`Idioma: Español (Nativo)`);

      return { pptxPath, pdfPath };
    } catch (e) {
      console.log('libreoffice-convert no disponible');
    }

    // Fallback: Just use PPTX
    console.log('Nota: Conversión PDF no disponible. Se proporciona archivo PPTX.');
    const pptxStats = fs.statSync(pptxPath);
    const pptxSizeMB = (pptxStats.size / (1024 * 1024)).toFixed(2);

    console.log(`\n=== Dossier de Chile Generado ===`);
    console.log(`Archivo de salida: ${pptxPath} (${pptxSizeMB} MB)`);
    console.log(`Diapositivas: 14`);
    console.log(`Idioma: Español (Nativo)`);

    return { pptxPath };
  } catch (error) {
    console.log('Error en conversión PDF:', error.message);
    const pptxStats = fs.statSync(pptxPath);
    const pptxSizeMB = (pptxStats.size / (1024 * 1024)).toFixed(2);

    console.log(`\n=== Dossier de Chile Generado ===`);
    console.log(`Archivo de salida: ${pptxPath} (${pptxSizeMB} MB)`);
    console.log(`Diapositivas: 14`);
    console.log(`Idioma: Español (Nativo)`);

    return { pptxPath };
  }
}

// Run the generator
generateDossier()
  .then(output => {
    console.log('\n¡Generación de dossier completada exitosamente!');
    process.exit(0);
  })
  .catch(error => {
    console.error('Error generando dossier:', error.message);
    process.exit(1);
  });
