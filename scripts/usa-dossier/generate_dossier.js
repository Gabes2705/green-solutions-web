const PptxGenJS = require('pptxgenjs');
const fs = require('fs');
const path = require('path');

// Create presentation
const pres = new PptxGenJS();

// Set layout to 16:9
pres.layout = 'LAYOUT_16x9';

// Define color palette - USA themed (deep blue, corn gold, water teal)
const colors = {
  darkBlue: '1B3A70',       // Deep blue (USA)
  lightBlue: '4A90E2',      // Light blue
  teal: '1F8B8B',           // Teal (water)
  gold: 'D4AF37',           // Gold accent (agriculture/wheat)
  lightGold: 'F4D03F',      // Light gold
  white: 'FFFFFF',
  darkText: '1A1A1A',
  lightText: 'E8E8E8',
  accentRed: 'E74C3C'       // Red for drought/stress
};

// English content
const content = {
  title: 'USA Agricultural Market Development Dossier',
  slides: [
    {
      layout: 'title',
      title: 'USA Agricultural Market',
      subtitle: 'Development Dossier 2026',
      date: 'Market Overview & Water Sustainability'
    },
    {
      layout: 'overview',
      title: 'Market Overview',
      content: [
        {
          icon: '🌍',
          heading: 'Geography',
          text: 'North America, 3.8M sq miles, diverse climates from Pacific to Atlantic'
        },
        {
          icon: '👥',
          heading: 'Population',
          text: '340 million people with stable 0.6% annual growth'
        },
        {
          icon: '💼',
          heading: 'Economy',
          text: 'GDP: $27.4 trillion (world\'s largest economy)'
        },
        {
          icon: '🌾',
          heading: 'Agriculture',
          text: '$400B+ market sector, ~1% of GDP but critical food security'
        }
      ]
    },
    {
      layout: 'sectors',
      title: 'Primary Agricultural Sectors',
      sectors: [
        {
          crop: 'Corn (Maize)',
          production: '380-420 million bushels annually',
          area: '90-95 million acres'
        },
        {
          crop: 'Wheat',
          production: '1.7-2.1 billion bushels annually',
          area: '40-45 million acres'
        },
        {
          crop: 'Soybeans',
          production: '2.0-2.3 billion bushels annually',
          area: '85-90 million acres'
        },
        {
          crop: 'Cotton',
          production: '3-4 million bales annually',
          area: '12-14 million acres'
        },
        {
          crop: 'Vegetables & Fruits',
          production: '400+ million tons annually',
          area: '5.5+ million acres'
        }
      ]
    },
    {
      layout: 'water',
      title: 'Water Usage & Irrigation Patterns',
      content: [
        {
          heading: 'Agricultural Water Use',
          value: '80%',
          description: 'of total U.S. freshwater consumed in agriculture'
        },
        {
          heading: 'Irrigated Cropland',
          value: '58 million acres',
          description: 'requires 145+ billion gallons daily'
        },
        {
          heading: 'Water Stress Regions',
          value: 'High',
          description: 'California, Texas, Colorado Basin dependent on depleting aquifers'
        },
        {
          heading: 'Groundwater Depletion',
          value: '10-12 km³/year',
          description: 'Ogallala Aquifer (High Plains) declining at critical rates'
        }
      ]
    },
    {
      layout: 'climate',
      title: 'Climate & Environmental Constraints',
      threats: [
        {
          threat: 'Severe Drought Cycles',
          impact: 'Western states face recurring multi-year droughts; 2012 Midwest drought reduced corn yields 26%'
        },
        {
          threat: 'Groundwater Depletion',
          impact: 'Ogallala Aquifer supplying 8 million acres dropping 2.5-3 feet annually'
        },
        {
          threat: 'Colorado River Compact Crisis',
          impact: 'Lake Mead/Powell at historic lows; 4-state compact restricting allocations'
        },
        {
          threat: 'Extreme Weather Events',
          impact: 'Increased flooding, hail damage, erratic rainfall affecting yields and infrastructure'
        },
        {
          threat: 'Soil Degradation',
          impact: 'Erosion and nutrient depletion reducing productivity; 24 billion tons soil lost annually'
        }
      ]
    },
    {
      layout: 'technology',
      title: 'Technology Fit & Adoption',
      technologies: [
        {
          name: 'Precision Irrigation (Drip/Pivot)',
          readiness: 'Very High',
          adoption: '65-70% of irrigated farmland',
          benefit: 'Save 20-50% water while increasing yields 15-25%'
        },
        {
          name: 'Smart Soil Monitoring',
          readiness: 'High',
          adoption: '25-30% of large operations',
          benefit: 'Optimize water delivery, reduce waste, increase efficiency'
        },
        {
          name: 'Renewable Energy Integration',
          readiness: 'Very High',
          adoption: '15,000+ solar-powered wells, 8,000+ wind installations',
          benefit: 'Cut energy costs 50-70%, reduce emissions'
        },
        {
          name: 'AI-Driven Crop Management',
          readiness: 'Medium-High',
          adoption: '10-15% adoption, growing rapidly',
          benefit: 'Predict yields, optimize inputs, reduce losses 10-20%'
        }
      ]
    },
    {
      layout: 'case-study-1',
      title: 'Case Study: California Central Valley',
      location: 'Central California, 40% of U.S. vegetables & 1/3 of fruits/nuts',
      challenge: 'Severe groundwater depletion (subsidence 1 foot/year), surface water shortages, competing urban demand',
      solution: [
        'Transition to drip irrigation and precision watering systems',
        'Implement real-time soil moisture monitoring networks',
        'Develop recycled water and groundwater recharge programs',
        'Integrate solar-powered irrigation pumping systems',
        'Sustainable farming certification programs'
      ],
      results: 'Reduced water use 25-35%, maintained yields, stabilized aquifer levels in pilot areas'
    },
    {
      layout: 'case-study-2',
      title: 'Case Study: Texas High Plains',
      location: 'Panhandle & Southern Plains, top cotton & grain production region',
      challenge: 'Ogallala Aquifer depletion (60+ feet decline since 1960), irrigation dependency, extreme drought',
      solution: [
        'Convert to center-pivot drip-compatible systems',
        'Shift to drought-resistant crop varieties (sorghum, peanuts)',
        'Implement crop rotation and cover cropping',
        'Deploy soil carbon sequestration programs',
        'Develop groundwater banking and surface water partnerships'
      ],
      results: 'Reduced water consumption 30-40%, improved soil health, enhanced climate resilience'
    },
    {
      layout: 'case-study-3',
      title: 'Case Study: Southwest Colorado Basin',
      location: 'Arizona, Nevada, Utah, Colorado, New Mexico - 7 states dependent on Colorado River',
      challenge: 'Historic drought reducing water allocations 25-30%, agricultural allocation under pressure',
      solution: [
        'Large-scale adoption of surface drip systems',
        'Fallowing programs with incentive payments',
        'Recharge basin and aquifer storage recovery projects',
        'Water markets and trading mechanisms',
        'Integrated basin-wide management systems'
      ],
      results: 'Saved 1-1.5 million acre-feet annually, stabilized interstate allocations, supported farmer incomes'
    },
    {
      layout: 'regulation',
      title: 'Regulatory & Governance Environment',
      policies: [
        {
          policy: 'Clean Water Act & EPA Regulations',
          year: 'Ongoing',
          focus: 'Water quality, irrigation runoff management, pesticide controls'
        },
        {
          policy: 'Interstate Water Compacts (7 compacts)',
          year: 'Historical-Present',
          focus: 'Colorado, Rio Grande, Platte, Missouri, Columbia river allocations'
        },
        {
          policy: 'USDA Conservation Programs',
          year: 'Ongoing',
          focus: '$7B+ annually for sustainability, soil health, water conservation'
        },
        {
          policy: 'California Water Code & Sustainable Groundwater Management',
          year: '2014+',
          focus: 'Mandatory groundwater sustainability plans; local basin management'
        },
        {
          policy: 'Inflation Reduction Act (IRA) Climate Investment',
          year: '2022-2032',
          focus: '$20B for agricultural climate adaptation, renewable energy, conservation'
        }
      ]
    },
    {
      layout: 'partnerships',
      title: 'Partnership & Investment Opportunities',
      opportunities: [
        {
          area: 'Water Technology Transfer',
          description: 'Drip irrigation systems, smart monitoring platforms, precision application technology'
        },
        {
          area: 'Renewable Energy Solutions',
          description: 'Solar/wind-powered irrigation, energy storage, microgrids for rural farms'
        },
        {
          area: 'Water Management Services',
          description: 'Real-time data analytics, hydrological modeling, predictive water demand systems'
        },
        {
          area: 'Financing & Risk Management',
          description: 'Green bonds, water credits, sustainability-linked lending, drought insurance'
        },
        {
          area: 'Crop Resilience R&D',
          description: 'Development of drought-tolerant varieties, regenerative practices, carbon farming'
        },
        {
          area: 'Watershed & Basin Management',
          description: 'Integrated water management platforms, recharge projects, inter-state coordination tools'
        }
      ]
    },
    {
      layout: 'investment',
      title: 'Market Size & Investment Potential',
      data: [
        {
          metric: 'Annual Investment Need',
          value: '$15-20 billion',
          description: 'For water infrastructure upgrades, technology adoption, sustainability transitions'
        },
        {
          metric: 'Time Horizon',
          value: '5-15 years',
          description: 'For full water-efficient agriculture transition across water-stressed regions'
        },
        {
          metric: 'Expected ROI',
          value: '2-3x returns',
          description: 'Within 10-15 years through yield preservation, cost savings, water trading income'
        },
        {
          metric: 'Job Creation',
          value: '100,000-150,000 roles',
          description: 'Water management specialists, renewable energy technicians, precision agriculture analysts'
        }
      ]
    },
    {
      layout: 'conclusion',
      title: 'Strategic Recommendations',
      recommendations: [
        'Accelerate adoption of precision irrigation and smart water monitoring across water-stressed regions',
        'Expand renewable energy integration for irrigation systems, reducing operational costs and emissions',
        'Support interstate water management coordination and science-based allocation systems',
        'Invest in groundwater recharge and aquifer storage recovery infrastructure',
        'Develop regional water markets and incentive programs for conservation practices',
        'Foster research into drought-resistant crop varieties and regenerative farming methods'
      ]
    }
  ]
};

// Helper function to add a title slide
function addTitleSlide(pres, slide) {
  const s = pres.addSlide();

  // Background
  s.background = { color: colors.darkBlue };

  // Title
  s.addText(slide.title, {
    x: 0.5,
    y: 1.8,
    w: 9,
    h: 1.5,
    fontSize: 48,
    bold: true,
    color: colors.white,
    align: 'center',
    fontFace: 'Calibri',
    isTextBox: true
  });

  // Subtitle
  s.addText(slide.subtitle, {
    x: 0.5,
    y: 3.5,
    w: 9,
    h: 1,
    fontSize: 32,
    color: colors.lightGold,
    align: 'center',
    fontFace: 'Calibri',
    isTextBox: true
  });

  // Date/Footer
  s.addText(slide.date, {
    x: 0.5,
    y: 4.8,
    w: 9,
    h: 0.5,
    fontSize: 14,
    color: colors.gold,
    align: 'center',
    fontFace: 'Calibri',
    isTextBox: true
  });
}

// Helper function to add overview slide
function addOverviewSlide(pres, slide) {
  const s = pres.addSlide();

  // Background
  s.background = { color: colors.white };

  // Title bar
  s.addShape('rect', {
    x: 0,
    y: 0,
    w: 10,
    h: 0.8,
    fill: { color: colors.darkBlue },
    line: { type: 'none' }
  });

  // Title
  s.addText(slide.title, {
    x: 0.5,
    y: 0.15,
    w: 9,
    h: 0.5,
    fontSize: 28,
    bold: true,
    color: colors.white,
    align: 'left',
    fontFace: 'Calibri',
    isTextBox: true,
    margin: 0
  });

  // Content boxes
  const boxHeight = 1;
  const boxWidth = 2.3;
  let yPos = 1.2;

  slide.content.forEach((item, idx) => {
    const xPos = (idx % 2) * 4.8 + 0.5;
    if (idx > 0 && idx % 2 === 0) {
      yPos += boxHeight + 0.5;
    }

    // Box background
    s.addShape('rect', {
      x: xPos,
      y: yPos,
      w: boxWidth + 1.5,
      h: boxHeight + 0.5,
      fill: { color: '#E3F2FD' },
      line: { color: colors.teal, width: 2 }
    });

    // Icon
    s.addText(item.icon, {
      x: xPos + 0.2,
      y: yPos + 0.1,
      w: 0.4,
      h: 0.4,
      fontSize: 24,
      align: 'center',
      isTextBox: true,
      margin: 0
    });

    // Heading
    s.addText(item.heading, {
      x: xPos + 0.7,
      y: yPos + 0.1,
      w: boxWidth + 0.8,
      h: 0.35,
      fontSize: 13,
      bold: true,
      color: colors.darkText,
      fontFace: 'Calibri',
      isTextBox: true,
      margin: 0
    });

    // Text
    s.addText(item.text, {
      x: xPos + 0.2,
      y: yPos + 0.55,
      w: boxWidth + 1.3,
      h: 0.85,
      fontSize: 10,
      color: colors.darkText,
      fontFace: 'Calibri',
      isTextBox: true,
      margin: 0
    });
  });
}

// Helper function to add sectors slide
function addSectorsSlide(pres, slide) {
  const s = pres.addSlide();

  s.background = { color: colors.white };

  // Title bar
  s.addShape('rect', {
    x: 0,
    y: 0,
    w: 10,
    h: 0.8,
    fill: { color: colors.darkBlue },
    line: { type: 'none' }
  });

  s.addText(slide.title, {
    x: 0.5,
    y: 0.15,
    w: 9,
    h: 0.5,
    fontSize: 28,
    bold: true,
    color: colors.white,
    align: 'left',
    fontFace: 'Calibri',
    isTextBox: true,
    margin: 0
  });

  // Sector rows
  let yPos = 1.1;
  const rowHeight = 0.75;

  slide.sectors.forEach((sector, idx) => {
    // Alternate background
    if (idx % 2 === 0) {
      s.addShape('rect', {
        x: 0.3,
        y: yPos,
        w: 9.4,
        h: rowHeight,
        fill: { color: '#E3F2FD' },
        line: { type: 'none' }
      });
    }

    // Colored accent bar
    s.addShape('rect', {
      x: 0.3,
      y: yPos,
      w: 0.08,
      h: rowHeight,
      fill: { color: colors.gold },
      line: { type: 'none' }
    });

    // Crop name
    s.addText(sector.crop, {
      x: 0.6,
      y: yPos + 0.08,
      w: 2.5,
      h: 0.3,
      fontSize: 12,
      bold: true,
      color: colors.darkText,
      fontFace: 'Calibri',
      isTextBox: true,
      margin: 0
    });

    // Production
    s.addText(sector.production, {
      x: 3.3,
      y: yPos + 0.08,
      w: 2.5,
      h: 0.3,
      fontSize: 11,
      color: colors.darkText,
      fontFace: 'Calibri',
      isTextBox: true,
      margin: 0
    });

    // Area
    s.addText(sector.area, {
      x: 6.1,
      y: yPos + 0.08,
      w: 3,
      h: 0.3,
      fontSize: 11,
      color: colors.darkText,
      fontFace: 'Calibri',
      isTextBox: true,
      margin: 0
    });

    yPos += rowHeight + 0.1;
  });
}

// Helper function to add water slide
function addWaterSlide(pres, slide) {
  const s = pres.addSlide();

  s.background = { color: colors.white };

  // Title bar
  s.addShape('rect', {
    x: 0,
    y: 0,
    w: 10,
    h: 0.8,
    fill: { color: colors.teal },
    line: { type: 'none' }
  });

  s.addText(slide.title, {
    x: 0.5,
    y: 0.15,
    w: 9,
    h: 0.5,
    fontSize: 28,
    bold: true,
    color: colors.white,
    align: 'left',
    fontFace: 'Calibri',
    isTextBox: true,
    margin: 0
  });

  // Water stat boxes
  let yPos = 1.1;
  slide.content.forEach((item, idx) => {
    const xPos = (idx % 2) * 4.8 + 0.5;
    if (idx > 0 && idx % 2 === 0) {
      yPos += 2;
    }

    // Box
    s.addShape('rect', {
      x: xPos,
      y: yPos,
      w: 4.3,
      h: 1.8,
      fill: { color: '#E0F2F1' },
      line: { color: colors.teal, width: 2 }
    });

    // Value
    s.addText(item.value, {
      x: xPos + 0.2,
      y: yPos + 0.3,
      w: 3.9,
      h: 0.6,
      fontSize: 24,
      bold: true,
      color: colors.teal,
      align: 'center',
      fontFace: 'Calibri',
      isTextBox: true,
      margin: 0
    });

    // Heading
    s.addText(item.heading, {
      x: xPos + 0.2,
      y: yPos + 1.0,
      w: 3.9,
      h: 0.35,
      fontSize: 12,
      bold: true,
      color: colors.darkText,
      align: 'center',
      fontFace: 'Calibri',
      isTextBox: true,
      margin: 0
    });

    // Description
    s.addText(item.description, {
      x: xPos + 0.2,
      y: yPos + 1.4,
      w: 3.9,
      h: 0.35,
      fontSize: 10,
      color: colors.darkText,
      align: 'center',
      fontFace: 'Calibri',
      isTextBox: true,
      margin: 0
    });
  });
}

// Helper function to add climate slide
function addClimateSlide(pres, slide) {
  const s = pres.addSlide();

  s.background = { color: colors.white };

  // Title bar
  s.addShape('rect', {
    x: 0,
    y: 0,
    w: 10,
    h: 0.8,
    fill: { color: colors.accentRed },
    line: { type: 'none' }
  });

  s.addText(slide.title, {
    x: 0.5,
    y: 0.15,
    w: 9,
    h: 0.5,
    fontSize: 28,
    bold: true,
    color: colors.white,
    align: 'left',
    fontFace: 'Calibri',
    isTextBox: true,
    margin: 0
  });

  // Threat rows
  let yPos = 1.1;
  const rowHeight = 0.65;

  slide.threats.forEach((threat, idx) => {
    // Warning icon
    s.addShape('circle', {
      x: 0.4,
      y: yPos + 0.08,
      w: 0.4,
      h: 0.4,
      fill: { color: colors.accentRed }
    });

    s.addText('!', {
      x: 0.4,
      y: yPos + 0.05,
      w: 0.4,
      h: 0.4,
      fontSize: 20,
      bold: true,
      color: colors.white,
      align: 'center',
      isTextBox: true,
      margin: 0
    });

    // Threat name
    s.addText(threat.threat, {
      x: 1.0,
      y: yPos + 0.05,
      w: 3.5,
      h: 0.3,
      fontSize: 12,
      bold: true,
      color: colors.darkText,
      fontFace: 'Calibri',
      isTextBox: true,
      margin: 0
    });

    // Impact
    s.addText(threat.impact, {
      x: 1.0,
      y: yPos + 0.35,
      w: 8.5,
      h: 0.25,
      fontSize: 10,
      color: colors.darkText,
      fontFace: 'Calibri',
      isTextBox: true,
      margin: 0
    });

    yPos += rowHeight + 0.1;
  });
}

// Helper function to add technology slide
function addTechnologySlide(pres, slide) {
  const s = pres.addSlide();

  s.background = { color: colors.white };

  // Title bar
  s.addShape('rect', {
    x: 0,
    y: 0,
    w: 10,
    h: 0.8,
    fill: { color: colors.darkBlue },
    line: { type: 'none' }
  });

  s.addText(slide.title, {
    x: 0.5,
    y: 0.15,
    w: 9,
    h: 0.5,
    fontSize: 28,
    bold: true,
    color: colors.white,
    align: 'left',
    fontFace: 'Calibri',
    isTextBox: true,
    margin: 0
  });

  // Tech rows
  let yPos = 1.1;
  const rowHeight = 0.85;

  slide.technologies.forEach((tech, idx) => {
    // Alternating background
    if (idx % 2 === 0) {
      s.addShape('rect', {
        x: 0.3,
        y: yPos,
        w: 9.4,
        h: rowHeight,
        fill: { color: '#E3F2FD' },
        line: { type: 'none' }
      });
    }

    // Tech name
    s.addText(tech.name, {
      x: 0.6,
      y: yPos + 0.08,
      w: 2.5,
      h: 0.25,
      fontSize: 11,
      bold: true,
      color: colors.darkText,
      fontFace: 'Calibri',
      isTextBox: true,
      margin: 0
    });

    // Readiness (badge)
    const readinessBg = tech.readiness === 'Very High' ? colors.lightGold : '#FFA500';
    s.addShape('rect', {
      x: 3.3,
      y: yPos + 0.05,
      w: 1.4,
      h: 0.35,
      fill: { color: readinessBg },
      line: { type: 'none' }
    });

    s.addText(tech.readiness, {
      x: 3.3,
      y: yPos + 0.08,
      w: 1.4,
      h: 0.3,
      fontSize: 9,
      bold: true,
      color: colors.white,
      align: 'center',
      fontFace: 'Calibri',
      isTextBox: true,
      margin: 0
    });

    // Adoption + Benefit
    s.addText(tech.adoption + ' | ' + tech.benefit, {
      x: 4.9,
      y: yPos + 0.08,
      w: 4.8,
      h: 0.65,
      fontSize: 9,
      color: colors.darkText,
      fontFace: 'Calibri',
      isTextBox: true,
      margin: 0
    });

    yPos += rowHeight + 0.1;
  });
}

// Helper function to add case study slide
function addCaseStudySlide(pres, slide) {
  const s = pres.addSlide();

  s.background = { color: colors.white };

  // Title bar
  s.addShape('rect', {
    x: 0,
    y: 0,
    w: 10,
    h: 0.8,
    fill: { color: colors.teal },
    line: { type: 'none' }
  });

  s.addText(slide.title, {
    x: 0.5,
    y: 0.15,
    w: 9,
    h: 0.5,
    fontSize: 28,
    bold: true,
    color: colors.white,
    align: 'left',
    fontFace: 'Calibri',
    isTextBox: true,
    margin: 0
  });

  // Location
  s.addText('Location: ' + slide.location, {
    x: 0.5,
    y: 1.0,
    w: 9,
    h: 0.3,
    fontSize: 12,
    bold: true,
    color: colors.teal,
    align: 'left',
    fontFace: 'Calibri',
    isTextBox: true,
    margin: 0
  });

  // Challenge box
  s.addShape('rect', {
    x: 0.5,
    y: 1.4,
    w: 4.4,
    h: 0.5,
    fill: { color: colors.accentRed },
    line: { type: 'none' }
  });

  s.addText('Challenges:', {
    x: 0.7,
    y: 1.43,
    w: 4,
    h: 0.4,
    fontSize: 11,
    bold: true,
    color: colors.white,
    fontFace: 'Calibri',
    isTextBox: true,
    margin: 0
  });

  s.addText(slide.challenge, {
    x: 0.5,
    y: 2.0,
    w: 4.4,
    h: 0.8,
    fontSize: 10,
    color: colors.darkText,
    fontFace: 'Calibri',
    isTextBox: true,
    margin: 0
  });

  // Solution box
  s.addShape('rect', {
    x: 5.1,
    y: 1.4,
    w: 4.4,
    h: 0.5,
    fill: { color: '#2E7D32' },
    line: { type: 'none' }
  });

  s.addText('Solutions:', {
    x: 5.3,
    y: 1.43,
    w: 4,
    h: 0.4,
    fontSize: 11,
    bold: true,
    color: colors.white,
    fontFace: 'Calibri',
    isTextBox: true,
    margin: 0
  });

  // Solution bullets
  let yPos = 2.0;
  slide.solution.forEach((sol) => {
    s.addText('• ' + sol, {
      x: 5.1,
      y: yPos,
      w: 4.4,
      h: 0.45,
      fontSize: 9,
      color: colors.darkText,
      fontFace: 'Calibri',
      isTextBox: true,
      margin: 0
    });
    yPos += 0.45;
  });

  // Results
  s.addShape('rect', {
    x: 0.5,
    y: 4.8,
    w: 9,
    h: 0.65,
    fill: { color: '#E0F2F1' },
    line: { color: colors.teal, width: 2 }
  });

  s.addText('Results: ' + slide.results, {
    x: 0.7,
    y: 4.95,
    w: 8.6,
    h: 0.35,
    fontSize: 11,
    bold: true,
    color: colors.teal,
    align: 'left',
    fontFace: 'Calibri',
    isTextBox: true,
    margin: 0
  });
}

// Helper function to add regulation slide
function addRegulationSlide(pres, slide) {
  const s = pres.addSlide();

  s.background = { color: colors.white };

  // Title bar
  s.addShape('rect', {
    x: 0,
    y: 0,
    w: 10,
    h: 0.8,
    fill: { color: colors.darkBlue },
    line: { type: 'none' }
  });

  s.addText(slide.title, {
    x: 0.5,
    y: 0.15,
    w: 9,
    h: 0.5,
    fontSize: 28,
    bold: true,
    color: colors.white,
    align: 'left',
    fontFace: 'Calibri',
    isTextBox: true,
    margin: 0
  });

  // Policy timeline
  let yPos = 1.1;
  const rowHeight = 0.72;

  slide.policies.forEach((policy, idx) => {
    // Timeline circle
    s.addShape('circle', {
      x: 0.5,
      y: yPos + 0.16,
      w: 0.3,
      h: 0.3,
      fill: { color: colors.teal }
    });

    // Connecting line (not on last)
    if (idx < slide.policies.length - 1) {
      s.addShape('line', {
        x: 0.65,
        y: yPos + 0.45,
        w: 0,
        h: rowHeight - 0.15,
        line: { color: colors.teal, width: 2 }
      });
    }

    // Policy box
    s.addShape('rect', {
      x: 1.0,
      y: yPos,
      w: 8.5,
      h: rowHeight - 0.05,
      fill: { color: '#E3F2FD' },
      line: { type: 'none' }
    });

    // Year badge
    s.addShape('rect', {
      x: 1.2,
      y: yPos + 0.08,
      w: 1.2,
      h: 0.28,
      fill: { color: colors.gold },
      line: { type: 'none' }
    });

    s.addText(policy.year, {
      x: 1.2,
      y: yPos + 0.1,
      w: 1.2,
      h: 0.25,
      fontSize: 9,
      bold: true,
      color: colors.white,
      align: 'center',
      fontFace: 'Calibri',
      isTextBox: true,
      margin: 0
    });

    // Policy name + focus
    s.addText(policy.policy, {
      x: 2.6,
      y: yPos + 0.06,
      w: 6.7,
      h: 0.25,
      fontSize: 11,
      bold: true,
      color: colors.darkText,
      fontFace: 'Calibri',
      isTextBox: true,
      margin: 0
    });

    s.addText(policy.focus, {
      x: 2.6,
      y: yPos + 0.35,
      w: 6.7,
      h: 0.28,
      fontSize: 9,
      color: colors.darkText,
      fontFace: 'Calibri',
      isTextBox: true,
      margin: 0
    });

    yPos += rowHeight + 0.08;
  });
}

// Helper function to add partnerships slide
function addPartnershipsSlide(pres, slide) {
  const s = pres.addSlide();

  s.background = { color: colors.white };

  // Title bar
  s.addShape('rect', {
    x: 0,
    y: 0,
    w: 10,
    h: 0.8,
    fill: { color: '#2E7D32' },
    line: { type: 'none' }
  });

  s.addText(slide.title, {
    x: 0.5,
    y: 0.15,
    w: 9,
    h: 0.5,
    fontSize: 28,
    bold: true,
    color: colors.white,
    align: 'left',
    fontFace: 'Calibri',
    isTextBox: true,
    margin: 0
  });

  // Opportunity boxes (2 columns)
  let yPos = 1.1;
  let boxNum = 0;

  slide.opportunities.forEach((opp, idx) => {
    const xPos = (idx % 2) * 4.9 + 0.3;
    if (idx > 0 && idx % 2 === 0) {
      yPos += 1.45;
    }

    // Box
    s.addShape('rect', {
      x: xPos,
      y: yPos,
      w: 4.6,
      h: 1.35,
      fill: { color: '#E8F5E9' },
      line: { color: '#2E7D32', width: 2 }
    });

    // Area
    s.addText(opp.area, {
      x: xPos + 0.2,
      y: yPos + 0.1,
      w: 4.2,
      h: 0.35,
      fontSize: 11,
      bold: true,
      color: colors.darkText,
      fontFace: 'Calibri',
      isTextBox: true,
      margin: 0
    });

    // Description
    s.addText(opp.description, {
      x: xPos + 0.2,
      y: yPos + 0.5,
      w: 4.2,
      h: 0.8,
      fontSize: 9,
      color: colors.darkText,
      fontFace: 'Calibri',
      isTextBox: true,
      margin: 0
    });

    boxNum++;
  });
}

// Helper function to add investment slide
function addInvestmentSlide(pres, slide) {
  const s = pres.addSlide();

  s.background = { color: colors.white };

  // Title bar
  s.addShape('rect', {
    x: 0,
    y: 0,
    w: 10,
    h: 0.8,
    fill: { color: colors.darkBlue },
    line: { type: 'none' }
  });

  s.addText(slide.title, {
    x: 0.5,
    y: 0.15,
    w: 9,
    h: 0.5,
    fontSize: 28,
    bold: true,
    color: colors.white,
    align: 'left',
    fontFace: 'Calibri',
    isTextBox: true,
    margin: 0
  });

  // Data rows
  let yPos = 1.1;
  const rowHeight = 0.7;

  slide.data.forEach((item, idx) => {
    // Alternating background
    if (idx % 2 === 0) {
      s.addShape('rect', {
        x: 0.3,
        y: yPos,
        w: 9.4,
        h: rowHeight,
        fill: { color: '#E3F2FD' },
        line: { type: 'none' }
      });
    }

    // Value badge
    s.addShape('rect', {
      x: 0.5,
      y: yPos + 0.1,
      w: 2,
      h: 0.5,
      fill: { color: colors.gold },
      line: { type: 'none' }
    });

    s.addText(item.value, {
      x: 0.5,
      y: yPos + 0.12,
      w: 2,
      h: 0.45,
      fontSize: 11,
      bold: true,
      color: colors.white,
      align: 'center',
      fontFace: 'Calibri',
      isTextBox: true,
      margin: 0
    });

    // Metric + description
    s.addText(item.metric, {
      x: 2.8,
      y: yPos + 0.08,
      w: 6.8,
      h: 0.25,
      fontSize: 11,
      bold: true,
      color: colors.darkText,
      fontFace: 'Calibri',
      isTextBox: true,
      margin: 0
    });

    s.addText(item.description, {
      x: 2.8,
      y: yPos + 0.35,
      w: 6.8,
      h: 0.3,
      fontSize: 9,
      color: colors.darkText,
      fontFace: 'Calibri',
      isTextBox: true,
      margin: 0
    });

    yPos += rowHeight + 0.05;
  });
}

// Helper function to add conclusion slide
function addConclusionSlide(pres, slide) {
  const s = pres.addSlide();

  s.background = { color: colors.darkBlue };

  // Title
  s.addText(slide.title, {
    x: 0.5,
    y: 0.5,
    w: 9,
    h: 0.6,
    fontSize: 40,
    bold: true,
    color: colors.white,
    align: 'center',
    fontFace: 'Calibri',
    isTextBox: true
  });

  // Recommendations (bullets)
  let yPos = 1.3;
  slide.recommendations.forEach((rec) => {
    // Bullet point
    s.addText('✓', {
      x: 0.8,
      y: yPos,
      w: 0.4,
      h: 0.35,
      fontSize: 16,
      color: colors.gold,
      align: 'center',
      isTextBox: true,
      margin: 0
    });

    s.addText(rec, {
      x: 1.4,
      y: yPos,
      w: 8,
      h: 0.35,
      fontSize: 11,
      color: colors.white,
      align: 'left',
      fontFace: 'Calibri',
      isTextBox: true,
      margin: 0
    });

    yPos += 0.4;
  });
}

// Build slides
console.log('Building USA Agricultural Market Dossier...');
addTitleSlide(pres, content.slides[0]);
addOverviewSlide(pres, content.slides[1]);
addSectorsSlide(pres, content.slides[2]);
addWaterSlide(pres, content.slides[3]);
addClimateSlide(pres, content.slides[4]);
addTechnologySlide(pres, content.slides[5]);
addCaseStudySlide(pres, content.slides[6]);
addCaseStudySlide(pres, content.slides[7]);
addCaseStudySlide(pres, content.slides[8]);
addRegulationSlide(pres, content.slides[9]);
addPartnershipsSlide(pres, content.slides[10]);
addInvestmentSlide(pres, content.slides[11]);
addConclusionSlide(pres, content.slides[12]);

// Write file
const outputPath = 'C:\\Users\\Utilisateur\\dev\\green-solutions-web\\scripts\\usa-dossier\\usa_dossier.pptx';
pres.writeFile(outputPath);
console.log('USA Dossier PPTX created: ' + outputPath);
