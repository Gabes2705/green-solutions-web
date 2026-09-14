const PptxGenJS = require('pptxgenjs');
const fs = require('fs');
const path = require('path');

// Create presentation
const prs = new PptxGenJS();

// Set presentation properties
prs.defineLayout({ name: 'LAYOUT1', width: 10, height: 5.625 });
prs.defineLayout({ name: 'LAYOUT2', width: 10, height: 7 });
prs.layout = 'LAYOUT1';

// Color palette
const colors = {
  argentinaBlue: '#75AADB',
  darkGreen: '#2D5016',
  white: '#FFFFFF',
  darkText: '#1F1F1F',
  lightGray: '#F5F5F5',
  accentGreen: '#4A7023'
};

// Helper function to format numbers with es-AR locale
const formatNumber = (num) => {
  return new Intl.NumberFormat('es-AR', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(num);
};

// Helper function to add title slide
const addTitleSlide = (title, subtitle, imageUrl = null) => {
  const slide = prs.addSlide();

  if (imageUrl) {
    slide.addImage({
      path: imageUrl,
      x: 0,
      y: 0,
      w: '100%',
      h: '100%',
      transparency: 40
    });
  }

  slide.background = { color: colors.lightGray };

  // Add accent bar
  slide.addShape(prs.ShapeType.rect, {
    x: 0,
    y: 0.3,
    w: '100%',
    h: 0.15,
    fill: { color: colors.argentinaBlue },
    line: { type: 'none' }
  });

  // Title
  slide.addText(title, {
    x: 0.5,
    y: 1.5,
    w: 9,
    h: 1.2,
    fontSize: 54,
    bold: true,
    color: colors.darkText,
    fontFace: 'Arial',
    align: 'center'
  });

  // Subtitle
  if (subtitle) {
    slide.addText(subtitle, {
      x: 0.5,
      y: 2.8,
      w: 9,
      h: 1,
      fontSize: 24,
      color: colors.darkGreen,
      fontFace: 'Arial',
      align: 'center'
    });
  }
};

// Helper function to add content slide
const addContentSlide = (title, content, bgImage = null) => {
  const slide = prs.addSlide();
  slide.background = { color: colors.white };

  // Header background
  slide.addShape(prs.ShapeType.rect, {
    x: 0,
    y: 0,
    w: '100%',
    h: 0.8,
    fill: { color: colors.argentinaBlue },
    line: { type: 'none' }
  });

  // Title
  slide.addText(title, {
    x: 0.5,
    y: 0.15,
    w: 9,
    h: 0.5,
    fontSize: 40,
    bold: true,
    color: colors.white,
    fontFace: 'Arial'
  });

  // Left content area
  const contentX = 0.5;
  const contentY = 1.2;
  const contentW = 9;
  const contentH = 4.2;

  let currentY = contentY;

  content.forEach((item) => {
    if (item.type === 'heading') {
      slide.addText(item.text, {
        x: contentX,
        y: currentY,
        w: contentW,
        h: 0.4,
        fontSize: 18,
        bold: true,
        color: colors.darkGreen,
        fontFace: 'Arial'
      });
      currentY += 0.5;
    } else if (item.type === 'text') {
      slide.addText(item.text, {
        x: contentX + 0.2,
        y: currentY,
        w: contentW - 0.4,
        h: 0.35,
        fontSize: 14,
        color: colors.darkText,
        fontFace: 'Arial',
        bullet: true
      });
      currentY += 0.45;
    } else if (item.type === 'stat') {
      slide.addText(item.label, {
        x: contentX,
        y: currentY,
        w: contentW * 0.45,
        h: 0.3,
        fontSize: 12,
        color: colors.darkGreen,
        fontFace: 'Arial',
        bold: true
      });
      slide.addText(item.value, {
        x: contentX,
        y: currentY + 0.35,
        w: contentW * 0.45,
        h: 0.5,
        fontSize: 24,
        color: colors.argentinaBlue,
        fontFace: 'Arial',
        bold: true
      });
      currentY += 0.9;
    }
  });
};

// Slide 1: Cover
addTitleSlide(
  'ARGENTINA',
  'Potencial de Mercado Agrícola Sostenible',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Flag_of_Argentina.svg/1280px-Flag_of_Argentina.svg.png'
);

// Slide 2: Agricultural Context
addContentSlide('Contexto Agrícola de Argentina', [
  { type: 'heading', text: 'Posición Regional' },
  { type: 'text', text: '2º productor agrícola de América del Sur después de Brasil' },
  { type: 'text', text: 'PIB Agrícola: aproximadamente USD 170 mil millones anuales' },
  { type: 'text', text: 'Territorio: 135 millones de hectáreas de tierra cultivable' },
  { type: 'heading', text: 'Diversidad Climática' },
  { type: 'text', text: 'Climas variados: templado (Pampa), subtropical (Misiones), árido (Noroeste)' },
  { type: 'text', text: 'Estaciones bien definidas ideales para rotación de cultivos' },
  { type: 'text', text: 'Altitudes desde nivel del mar hasta 6.960m en el noroeste' }
]);

// Slide 3: Water Resources
addContentSlide('Recursos Hídricos de Argentina', [
  { type: 'heading', text: 'Principales Fuentes de Agua' },
  { type: 'text', text: 'Cuenca del Paraná: río perenne con caudal abundante' },
  { type: 'text', text: 'Acuífero Guaraní: reserva subterránea de 37.000 km³' },
  { type: 'text', text: 'Ríos principales: Paraná, Uruguay, Río de la Plata' },
  { type: 'heading', text: 'Desafíos Regionales' },
  { type: 'text', text: 'Déficit en el norte (Misiones, Corrientes) durante sequías' },
  { type: 'text', text: 'Competencia agua: agricultura vs. hidroelectricidad' },
  { type: 'text', text: 'Variabilidad anual de precipitaciones' }
]);

// Slide 4: Main Crops
addContentSlide('Cultivos Principales de Argentina', [
  { type: 'heading', text: 'Producción Extensiva' },
  { type: 'text', text: 'Soja: 1er cultivo de exportación, 52 millones de toneladas anuales' },
  { type: 'text', text: 'Maíz: 58 millones de toneladas/año, demanda global creciente' },
  { type: 'text', text: 'Trigo: 16 millones de toneladas/año' },
  { type: 'text', text: 'Arroz: principalmente en Mesopotamia' },
  { type: 'heading', text: 'Producción Especializada' },
  { type: 'text', text: 'Viñas (región Cuyo): vinos premium de clase mundial' },
  { type: 'text', text: 'Frutas (manzanas, peras, uvas): exportación a mercados europeos' },
  { type: 'text', text: 'Bayas orgánicas (Misiones): arándanos, frutillas crecimiento exponencial' }
]);

// Slide 5: Water Challenges
addContentSlide('Desafíos del Agua en la Agricultura', [
  { type: 'heading', text: 'Variabilidad Climática' },
  { type: 'text', text: 'Fenómeno ENOS: inundaciones en años lluviosos, sequías en años secos' },
  { type: 'text', text: 'Cambio climático intensifica eventos extremos' },
  { type: 'text', text: 'Ciclos de sequía más frecuentes en la Pampa' },
  { type: 'heading', text: 'Infraestructura Insuficiente' },
  { type: 'text', text: 'Solo 8% de tierras cultivables actualmente irrigadas' },
  { type: 'text', text: 'Sistemas de riego obsoletos en muchas regiones' },
  { type: 'text', text: 'Pérdidas hídricas por evaporación en pivots convencionales' }
]);

// Slide 6: Current Irrigation
addContentSlide('Sistemas de Riego Actual', [
  { type: 'heading', text: 'Tecnología Implementada' },
  { type: 'text', text: 'Riego por gravedad: predominante, pero ineficiente (40-50% pérdida)' },
  { type: 'text', text: 'Pivots center: usados en cultivos extensivos de maíz/soja' },
  { type: 'text', text: 'Sistemas localizados: limitados a viñedos y frutas premium' },
  { type: 'heading', text: 'Oportunidades de Modernización' },
  { type: 'text', text: 'Pampa Húmeda: regiones con déficit parcial, altamente productivas' },
  { type: 'text', text: 'Sistemas deficitarios: reducen volumen pero mantienen rendimiento' },
  { type: 'text', text: 'Adopción de sensores de humedad aún en fase inicial' }
]);

// Slide 7: Economic Potential
addContentSlide('Potencial Económico para Crecimiento', [
  { type: 'heading', text: 'Viñedos Región Cuyo' },
  { type: 'text', text: 'Exportación de vinos premium en aumento: USD 2.500 millones/año' },
  { type: 'text', text: 'Mercados objetivo: USA, Europa, mercados asiáticos emergentes' },
  { type: 'text', text: 'Inversión en riego optimizado = mayor consistencia de cosecha' },
  { type: 'heading', text: 'Bayas y Frutas Orgánicas (Misiones)' },
  { type: 'text', text: 'Arándanos: demanda global 15% anual crecimiento' },
  { type: 'text', text: 'Certificación orgánica permite sobreprecio 30-50%' },
  { type: 'text', text: 'Expansión viabilizada con riego sostenible' }
]);

// Slide 8: Green Solutions Products
addContentSlide('Soluciones Green Solutions para Argentina', [
  { type: 'heading', text: 'EVERGREEN®' },
  { type: 'text', text: 'Retención de humedad optimizada para Pampa seca' },
  { type: 'text', text: 'Reduce estrés hídrico en períodos de sequía' },
  { type: 'text', text: 'Compatible con sistemas de riego existentes' },
  { type: 'heading', text: 'ECOFERT®' },
  { type: 'text', text: 'Optimizado para suelos neurosoles y latosoles argentinos' },
  { type: 'text', text: 'Mejora estructura del suelo, aumenta retención hídrica' },
  { type: 'text', text: 'Certificado para agricultura orgánica (Misiones, Cuyo)' }
]);

// Slide 9: Water Savings Estimates
addContentSlide('Ahorros de Agua Estimados', [
  { type: 'heading', text: 'Proyecciones por Región' },
  { type: 'stat', label: 'Cuyo (Viñedos)', value: '25-35%' },
  { type: 'stat', label: 'Misiones (Bayas)', value: '20-30%' },
  { type: 'stat', label: 'Pampa (Soja/Maíz)', value: '15-25%' },
  { type: 'heading', text: 'Disclaimer Legal' },
  { type: 'text', text: 'Estimación indicativa basada en pruebas piloto. El resultado real depende del suelo, clima, cultivo y prácticas de manejo.' }
]);

// Slide 10: Regional Use Cases - Cuyo
addContentSlide('Caso de Uso Regional: Cuyo (Viñedos)', [
  { type: 'heading', text: 'Situación Actual' },
  { type: 'text', text: 'Región productora de vinos premium en Mendoza, San Juan' },
  { type: 'text', text: 'Riego deficitario controlado ya implementado en parcelas piloto' },
  { type: 'text', text: 'Competencia por agua con hidroelectricidad' },
  { type: 'heading', text: 'Solución Green Solutions' },
  { type: 'text', text: 'EVERGREEN® + ECOFERT® reduce 25-35% demanda hídrica' },
  { type: 'text', text: 'Mejora de calidad uvas sin comprometer viñedos históricos' },
  { type: 'text', text: 'ROI en 2-3 años con sobreprecio en exportación' }
]);

// Slide 11: Regional Use Cases - Misiones
addContentSlide('Caso de Uso Regional: Misiones (Bayas y Frutas)', [
  { type: 'heading', text: 'Situación Actual' },
  { type: 'text', text: 'Subtropicales, alta pluviometría pero sequías puntuales' },
  { type: 'text', text: 'Arándanos y frutillas en expansión, mayoría orgánica' },
  { type: 'text', text: 'Exportación a USA, UE: margen de ganancia elevado' },
  { type: 'heading', text: 'Solución Green Solutions' },
  { type: 'text', text: 'ECOFERT® + EVERGREEN® apto para cultivo intensivo en hileras' },
  { type: 'text', text: 'Mantiene humedad óptima en períodos críticos (floración)' },
  { type: 'text', text: 'Certificable orgánico, sin limitaciones regulatorias' }
]);

// Slide 12: Regional Use Cases - Pampa
addContentSlide('Caso de Uso Regional: Pampa (Soja y Maíz)', [
  { type: 'heading', text: 'Situación Actual' },
  { type: 'text', text: 'Pampa Húmeda: mayor zona productiva, 70% soja argentina' },
  { type: 'text', text: 'Sequías periódicas causan pérdidas de 30-40% cosecha' },
  { type: 'text', text: 'Inversiones en riego desalentadas por rentabilidad marginal actual' },
  { type: 'heading', text: 'Solución Green Solutions' },
  { type: 'text', text: 'EVERGREEN® en defensiva: protege de sequías puntuales' },
  { type: 'text', text: 'Costo bajo, aplicación simple, compatibilidad siembra directa' },
  { type: 'text', text: 'Piloto en 10.000ha = reducción riesgo, estabilidad producción' }
]);

// Slide 13: Local Partners & Adoption Timeline
addContentSlide('Alianzas Locales y Plan de Adopción', [
  { type: 'heading', text: 'Socios Clave' },
  { type: 'text', text: 'INTA: Instituto Nacional de Tecnología Agropecuaria, investigación y validación' },
  { type: 'text', text: 'Cooperativas vitivinícolas Cuyo: productores tradicionales, distribución' },
  { type: 'text', text: 'Exportadores orgánicos Misiones: acceso mercado premium' },
  { type: 'heading', text: 'Timeline de Implementación' },
  { type: 'text', text: 'Fase 1 (meses 1-6): Pilotos en viñedos Cuyo + bayas Misiones' },
  { type: 'text', text: 'Fase 2 (meses 7-12): Expansión soja/maíz Pampa Húmeda' }
]);

// Slide 14: Risks and Mitigation
addContentSlide('Riesgos y Estrategias de Mitigación', [
  { type: 'heading', text: 'Riesgos Macroeconómicos' },
  { type: 'text', text: 'Inflación argentina volatilidad: precios de insumos + tipo cambio USD' },
  { type: 'text', text: 'Mitigación: contratos a largo plazo con cooperativas, precios fijos iniciales' },
  { type: 'heading', text: 'Riesgos Climáticos y Técnicos' },
  { type: 'text', text: 'Cambio climático impredecible, variabilidad suelos regionales' },
  { type: 'text', text: 'Mitigación: pilotos rigurosos INTA, seguimiento 3-5 años antes expansión' },
  { type: 'heading', text: 'Sensibilidad Exportación' },
  { type: 'text', text: 'Economía argentina dolarca: riesgo tipo cambio USD/ARS' }
]);

// Slide 15: Call to Action
addTitleSlide(
  'Oportunidad de Asociación',
  'Juntos, transformamos la agricultura argentina',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Flag_of_Argentina.svg/1280px-Flag_of_Argentina.svg.png'
);

const lastSlide = prs.slides[prs.slides.length - 1];
lastSlide.addText('Pilotes Regionales: Cuyo • Misiones • Pampa\nAsociación Estratégica Green Solutions Argentina', {
  x: 0.5,
  y: 3.5,
  w: 9,
  h: 1.5,
  fontSize: 20,
  color: colors.argentinaBlue,
  fontFace: 'Arial',
  align: 'center',
  bold: true
});

// Save presentation
const outputDir = path.join(__dirname, '..', 'public', 'documents', 'countries');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const pptxPath = path.join(outputDir, 'argentine.pptx');
prs.writeFile(pptxPath);

console.log('PPTX generado exitosamente:', pptxPath);
