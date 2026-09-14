const PptxGenJS = require('pptxgenjs');
const path = require('path');
const fs = require('fs');

// Initialize presentation
const prs = new PptxGenJS();
prs.defineLayout({ name: 'LAYOUT1', width: 10, height: 7.5 });
prs.defineLayout({ name: 'LAYOUT2', width: 10, height: 7.5 });

// Color scheme
const colors = {
    primary: '1f5233',      // Deep green
    accent: '2e8b57',       // Forest green
    highlight: '00b050',    // Bright green
    dark: '1a1a1a',         // Dark
    light: 'f0f0f0',        // Light
    white: 'ffffff',
    text: '333333'
};

// Helper function to add title slide
function addTitleSlide() {
    const slide = prs.addSlide();

    // Background
    slide.background = { color: colors.primary };

    // Title
    slide.addText('SOUTH AFRICA', {
        x: 0.5, y: 2.5, w: 9, h: 1,
        fontSize: 60,
        bold: true,
        color: colors.white,
        align: 'center',
        fontFace: 'Arial'
    });

    // Subtitle
    slide.addText('Market Development Dossier', {
        x: 0.5, y: 3.7, w: 9, h: 0.8,
        fontSize: 32,
        color: colors.highlight,
        align: 'center',
        fontFace: 'Arial'
    });

    // Subtext
    slide.addText('Agriculture | Water | Innovation | Partnerships', {
        x: 0.5, y: 5, w: 9, h: 0.6,
        fontSize: 18,
        color: colors.light,
        align: 'center',
        fontFace: 'Arial'
    });
}

// Helper function to add content slide
function addContentSlide(title, content, imagePath = null) {
    const slide = prs.addSlide();

    // Background
    slide.background = { color: colors.white };

    // Header bar
    slide.addShape(prs.ShapeType.rect, {
        x: 0, y: 0, w: '100%', h: 1,
        fill: { color: colors.primary }
    });

    // Title
    slide.addText(title, {
        x: 0.5, y: 0.15, w: 9, h: 0.7,
        fontSize: 40,
        bold: true,
        color: colors.white,
        fontFace: 'Arial'
    });

    // Content
    if (imagePath && fs.existsSync(imagePath)) {
        slide.addImage({
            path: imagePath,
            x: 5.5, y: 1.3, w: 4, h: 5.8,
            rasterize: true
        });

        // Text on left side
        const lines = Array.isArray(content) ? content : [content];
        let yPos = 1.3;
        lines.forEach((line, idx) => {
            const isBold = line.startsWith('•');
            slide.addText(line, {
                x: 0.5, y: yPos, w: 4.8, h: 0.5,
                fontSize: 16,
                color: colors.text,
                fontFace: 'Arial',
                valign: 'top',
                bold: isBold
            });
            yPos += 0.55;
        });
    } else {
        // Full width text
        const lines = Array.isArray(content) ? content : [content];
        let yPos = 1.3;
        lines.forEach((line) => {
            const isBold = line.startsWith('•');
            const text = isBold ? line.substring(1).trim() : line;
            slide.addText(text, {
                x: 0.5, y: yPos, w: 9, h: 0.6,
                fontSize: 16,
                color: colors.text,
                fontFace: 'Arial',
                bold: isBold
            });
            yPos += 0.65;
        });
    }

    // Footer
    slide.addText('South African Market Development Dossier', {
        x: 0.5, y: 7, w: 9, h: 0.4,
        fontSize: 10,
        color: colors.primary,
        align: 'right',
        fontFace: 'Arial'
    });
}

// Helper function for two-column layout
function addTwoColumnSlide(title, leftContent, rightContent) {
    const slide = prs.addSlide();
    slide.background = { color: colors.white };

    // Header bar
    slide.addShape(prs.ShapeType.rect, {
        x: 0, y: 0, w: '100%', h: 0.9,
        fill: { color: colors.primary }
    });

    // Title
    slide.addText(title, {
        x: 0.5, y: 0.1, w: 9, h: 0.7,
        fontSize: 38,
        bold: true,
        color: colors.white,
        fontFace: 'Arial'
    });

    // Left column
    let yPos = 1.2;
    const leftLines = Array.isArray(leftContent) ? leftContent : [leftContent];
    leftLines.forEach((line) => {
        const isBold = line.startsWith('•');
        const text = isBold ? line.substring(1).trim() : line;
        slide.addText(text, {
            x: 0.5, y: yPos, w: 4.5, h: 0.55,
            fontSize: 14,
            color: colors.text,
            fontFace: 'Arial',
            bold: isBold,
            valign: 'top'
        });
        yPos += 0.6;
    });

    // Divider
    slide.addShape(prs.ShapeType.line, {
        x: 5.2, y: 1.1, w: 0, h: 5.8,
        line: { color: colors.accent, width: 2 }
    });

    // Right column
    yPos = 1.2;
    const rightLines = Array.isArray(rightContent) ? rightContent : [rightContent];
    rightLines.forEach((line) => {
        const isBold = line.startsWith('•');
        const text = isBold ? line.substring(1).trim() : line;
        slide.addText(text, {
            x: 5.4, y: yPos, w: 4.5, h: 0.55,
            fontSize: 14,
            color: colors.text,
            fontFace: 'Arial',
            bold: isBold,
            valign: 'top'
        });
        yPos += 0.6;
    });
}

// Slide 1: Title Slide
addTitleSlide();

// Slide 2: Market Overview
addContentSlide('Market Overview', [
    '• Population: ~60 million',
    '• GDP per capita: ~$6,000 USD',
    '• Agriculture: ~2-3% of GDP',
    '• Land area: 1.2 million km²',
    '• Rainfall zones: High variance',
    '• Agricultural export leader in Africa'
]);

// Slide 3: Economic Context & GDP Distribution
addTwoColumnSlide('Economic Context', [
    '• GDP: ~$405 billion USD',
    '• Services: 68% of economy',
    '• Industry: 29% of economy',
    '• Agriculture: 2-3% of economy',
    '• Unemployment: ~29%',
    '• HDI: 0.713 (upper-middle)'
], [
    '• Primary sectors:',
    '  - Financial services',
    '  - Retail & tourism',
    '  - Manufacturing',
    '  - Mining (legacy)',
    '• Agricultural value chain: $15B+'
]);

// Slide 4: Agricultural Sectors & Production
addContentSlide('Agricultural Sectors', [
    '• Wine production: 350M liters/year',
    '• Citrus (oranges, grapefruits, lemons)',
    '• Grains (maize, wheat)',
    '• Sugar cane (KwaZulu-Natal region)',
    '• Deciduous fruit (apples, pears)',
    '• Livestock (beef, wool, mohair)'
]);

// Slide 5: Agricultural Geography & Zones
addTwoColumnSlide('Agricultural Regions', [
    'Western Cape:',
    '• Wine & fruit belt',
    '• 150k hectares vineyards',
    '• 40% of SA wine exports',
    '',
    'Eastern Cape:',
    '• Citrus production',
    '• Livestock farming'
], [
    'KwaZulu-Natal:',
    '• Sugar cane (65% of nation)',
    '• Dairy farming',
    '• Intensive production',
    '',
    'Limpopo & Mpumalanga:',
    '• Grains & maize',
    '• Irrigation development'
]);

// Slide 6: Water Resources & Stress
addContentSlide('Water Resources & Stress', [
    '• Average rainfall: 500-700mm (below global average)',
    '• Water-stressed regions: Western Cape, Northern Cape',
    '• Cape Town drought (2018-2019): severe supply crisis',
    '• Irrigation dependency: 60% of water use in agriculture',
    '• Dams at critical levels during dry seasons',
    '• Competition: agriculture vs. urban demand'
]);

// Slide 7: Water Usage Patterns in Agriculture
addTwoColumnSlide('Agricultural Water Usage', [
    'Irrigation Methods:',
    '• Flood irrigation: 45%',
    '• Sprinkler systems: 35%',
    '• Drip/micro-irrigation: 20%',
    '• Efficiency varies widely',
    '• Average use: 800-1200 mm/year'
], [
    'Sector Distribution:',
    '• Sugar cane: 35% of ag water',
    '• Wine grapes: 20%',
    '• Citrus: 18%',
    '• Other crops: 27%',
    '• Livestock: 8% additional'
]);

// Slide 8: Climate Challenges & Constraints
addContentSlide('Climate & Environmental Constraints', [
    '• Climate zones: Mediterranean (SW), Semi-arid (interior)',
    '• Temperature rise: +1.0°C since 1980s',
    '• Rainfall variability: ±30% year-to-year',
    '• Desertification risk in Karoo region',
    '• Alien invasive plants consuming 3.3B m³ water/year',
    '• Sea-level rise affecting coastal agricultural zones'
]);

// Slide 9: Technology Fit & Innovation Opportunities
addTwoColumnSlide('Technology & Innovation', [
    'Precision Agriculture:',
    '• Soil moisture sensors',
    '• Weather station networks',
    '• Variable rate irrigation',
    '• Drone monitoring systems',
    '• AI crop health analysis'
], [
    'Water Management:',
    '• Advanced metering infrastructure',
    '• Rainwater harvesting tech',
    '• Wastewater recycling systems',
    '• Aquifer storage solutions',
    '• Smart irrigation controllers'
]);

// Slide 10: Case Study - Western Cape Drought Resilience
addContentSlide('Case Study: Western Cape Drought Response', [
    '• 2018-2019: Day Zero crisis averted by 50% water cuts',
    '• Adopted water restrictions & behavioral change',
    '• Investment in desalination plants',
    '• Treated wastewater reuse: +15% water supply',
    '• Agricultural sector adapted to 30% less water',
    '• Technology solutions deployed: 2,000+ smart meters'
]);

// Slide 11: Case Study - Karoo Irrigation Innovation
addContentSlide('Case Study: Karoo Irrigation Systems', [
    '• Semi-arid region: shifting to high-value crops',
    '• Advanced drip irrigation adoption',
    '• Efficient water use: 40% reduction vs. flood',
    '• Solar-powered pumping systems',
    '• Export quality improvements in vegetables',
    '• Emerging cooperative irrigation schemes'
]);

// Slide 12: Regulatory Environment & Policy
addTwoColumnSlide('Regulatory Landscape', [
    'Water Management:',
    '• National Water Act (1998)',
    '• Water allocation licensing',
    '• Catchment-based regulations',
    '• Compulsory water metering',
    '• Pricing incentives for efficiency'
], [
    'Agricultural Policy:',
    '• Land reform programs',
    '• Export standards (EU, US)',
    '• Organic certification support',
    '• Climate adaptation funding',
    '• Youth in agriculture incentives'
]);

// Slide 13: Partnership Opportunities
addTwoColumnSlide('Partnership & Investment', [
    'Technology Partnerships:',
    '• IoT & sensor integration',
    '• Data analytics platforms',
    '• Remote sensing services',
    '• Equipment financing schemes',
    '• Training & capacity building'
], [
    'Market Opportunities:',
    '• Export capacity growth',
    '• Value-added processing',
    '• Organic/premium markets',
    '• Climate-smart agriculture',
    '• Regional supply chains (SADC)'
]);

// Slide 14: Strategic Recommendations & Conclusion
addContentSlide('Strategic Recommendations', [
    '• Invest in precision irrigation infrastructure',
    '• Develop renewable energy for agricultural pumping',
    '• Strengthen water-sharing agreements between users',
    '• Accelerate tech adoption through demonstration farms',
    '• Support smallholder farmer cooperatives',
    '• Link agricultural productivity to climate adaptation'
]);

// Save presentation
const outputPath = path.join(__dirname, '..', 'public', 'documents', 'countries', 'afrique-du-sud.pptx');
prs.writeFile({ fileName: outputPath });
console.log('PPTX created: ' + outputPath);
