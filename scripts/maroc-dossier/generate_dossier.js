const PptxGenJS = require('pptxgenjs');
const fs = require('fs');
const path = require('path');

// Create presentation
const pres = new PptxGenJS();

// Set layout to 16:9
pres.layout = 'LAYOUT_16x9';

// Define color palette - Morocco-inspired (greens, blues, warm earth tones)
const colors = {
  darkGreen: '2D5016',      // Forest green (agriculture)
  lightGreen: '7CB342',     // Light green
  teal: '00897B',           // Teal (water)
  lightBlue: '4DB8E8',      // Light blue
  gold: 'D4AF37',           // Gold accent
  white: 'FFFFFF',
  darkText: '1A1A1A',
  lightText: 'E8E8E8',
  accentOrange: 'E89B3C'    // Warm orange
};

// Arabic content
const content = {
  title: 'دراسة سوق التنمية الزراعية المغرب',
  slides: [
    {
      layout: 'title',
      title: 'دراسة سوق التنمية الزراعية',
      subtitle: 'المملكة المغربية',
      date: '2026'
    },
    {
      layout: 'overview',
      title: 'نظرة عامة على السوق',
      content: [
        {
          icon: '🌍',
          heading: 'الموقع الجغرافي',
          text: 'شمال إفريقيا، موقع استراتيجي بين أوروبا وإفريقيا'
        },
        {
          icon: '👥',
          heading: 'السكان',
          text: '37 مليون نسمة بمعدل نمو سنوي 1.3%'
        },
        {
          icon: '💼',
          heading: 'الاقتصاد',
          text: 'الناتج المحلي الإجمالي: 156 مليار دولار أمريكي'
        },
        {
          icon: '🌾',
          heading: 'الزراعة',
          text: '12-14% من الناتج المحلي الإجمالي، توظف 13% من القوى العاملة'
        }
      ]
    },
    {
      layout: 'sectors',
      title: 'القطاعات الزراعية الرئيسية',
      sectors: [
        {
          crop: 'القمح والشعير',
          production: '5-7 ملايين طن سنويًا',
          area: '2.8 مليون هكتار'
        },
        {
          crop: 'الزيتون',
          production: '900,000 - 1.2 مليون طن',
          area: '600,000 هكتار'
        },
        {
          crop: 'التمر والنخيل',
          production: '160,000 طن سنويًا',
          area: '60,000 هكتار'
        },
        {
          crop: 'الحمضيات',
          production: '2.2 مليون طن سنويًا',
          area: '100,000 هكتار'
        },
        {
          crop: 'اللوز والكروم',
          production: '250,000 طن سنويًا',
          area: '500,000 هكتار'
        }
      ]
    },
    {
      layout: 'water',
      title: 'أنماط استخدام المياه',
      content: [
        {
          heading: 'استهلاك المياه الزراعية',
          value: '87%',
          description: 'من إجمالي المياه المتاحة للاستخدام'
        },
        {
          heading: 'الموارد المائية المتاحة',
          value: '20 مليار م³',
          description: 'سنويًا (متوسط، قابل للتقلب)'
        },
        {
          heading: 'الضغط المائي',
          value: 'عالي جدًا',
          description: 'معدل استخراج المياه 115% من المجموع المتجدد'
        },
        {
          heading: 'مناطق الإجهاد',
          value: 'وادي درعة، الأطلس',
          description: 'أعلى المناطق الحرجة للقطاع الزراعي'
        }
      ]
    },
    {
      layout: 'climate',
      title: 'المناخ والقيود الطبيعية',
      threats: [
        {
          threat: 'الجفاف المتكرر',
          impact: 'انخفاض الإنتاج حتى 50% في السنوات الجافة'
        },
        {
          threat: 'الفيضانات الموسمية',
          impact: 'خسائر كبيرة في المحاصيل والبنية التحتية'
        },
        {
          threat: 'التصحر وتدهور التربة',
          impact: '1% فقدان إنتاجية الأراضي سنويًا'
        },
        {
          threat: 'التغير المناخي',
          impact: 'ارتفاع درجات الحرارة 1.5 درجة مئوية منذ 1960'
        },
        {
          threat: 'ندرة المياه',
          impact: 'تأثر 55% من الأراضي الزراعية بالإجهاد المائي'
        }
      ]
    },
    {
      layout: 'technology',
      title: 'ملاءمة التكنولوجيا',
      technologies: [
        {
          name: 'الري بالتنقيط',
          readiness: 'عالي جدًا',
          adoption: '45% من الأراضي المروية',
          benefit: 'توفير المياه بنسبة 40-60%'
        },
        {
          name: 'مراقبة التربة الذكية',
          readiness: 'متوسط إلى عالي',
          adoption: '5-10% من المزارعين',
          benefit: 'تحسين إنتاجية المحاصيل بنسبة 20-30%'
        },
        {
          name: 'الطاقة الشمسية',
          readiness: 'عالي جدًا',
          adoption: '300+ محطة توليد',
          benefit: 'خفض تكاليف الطاقة بنسبة 60-70%'
        },
        {
          name: 'الزراعة الذكية',
          readiness: 'متوسط',
          adoption: '10-15% من المزارعين',
          benefit: 'زيادة المحاصيل والكفاءة'
        }
      ]
    },
    {
      layout: 'case-study-1',
      title: 'دراسة حالة: وادي درعة',
      location: 'جنوب شرق المغرب',
      challenge: 'شح المياه والتصحر والهجرة القروية',
      solution: [
        'تطوير الري الحديث (التنقيط والري بالرش)',
        'إنشاء نظام حصاد المياه والسدود الصغيرة',
        'تعزيز زراعة التمر والنخيل المحلية',
        'استخدام الطاقة الشمسية لضخ المياه'
      ],
      results: 'زيادة الإنتاجية بنسبة 35% والدخل الفلاحي بنسبة 45%'
    },
    {
      layout: 'case-study-2',
      title: 'دراسة حالة: منطقة دكالة الدرعية',
      location: 'الدار البيضاء - سيدي بنور',
      challenge: 'تدهور التربة والإفراط في استخدام المياه',
      solution: [
        'تطبيق الزراعة المستدامة',
        'برامج تدوير المحاصيل والتسميد الأخضر',
        'نظم الحصاد المائي المتقدمة',
        'الإرشاد الزراعي والتدريب المكثف'
      ],
      results: 'انخفاض استهلاك المياه بنسبة 30% وزيادة الغلة بنسبة 25%'
    },
    {
      layout: 'case-study-3',
      title: 'دراسة حالة: حوض الأطلس المتوسط',
      location: 'فاس - إفران - مكناس',
      challenge: 'تقلب المناخ والفقر الريفي وقلة البنية التحتية',
      solution: [
        'تطوير الثروة الحيوانية المستدامة',
        'زراعة اللوز والفواكه المحلية',
        'برامج الطاقة المتجددة المجتمعية',
        'تعاونيات نسائية للمنتجات المحلية'
      ],
      results: 'زيادة دخل الأسر الريفية بنسبة 40% وتحسين الأمن الغذائي'
    },
    {
      layout: 'regulation',
      title: 'البيئة التنظيمية',
      policies: [
        {
          policy: 'استراتيجية "المغرب الأخضر"',
          year: '2008-2020',
          focus: 'تحديث الزراعة والاستدامة'
        },
        {
          policy: 'برنامج الري الحديث',
          year: 'جاري',
          focus: 'نقل 50% من الأراضي للري الحديث'
        },
        {
          policy: 'قانون المياه والطاقة',
          year: '2016',
          focus: 'إدارة مستدامة للموارد الطبيعية'
        },
        {
          policy: 'الخطة الوطنية للطاقات المتجددة',
          year: '2020-2030',
          focus: '52% من الكهرباء من الطاقات المتجددة'
        },
        {
          policy: 'خطة التكيف مع التغير المناخي',
          year: '2020-2030',
          focus: 'تعزيز المرونة الزراعية'
        }
      ]
    },
    {
      layout: 'partnerships',
      title: 'فرص الشراكة والتعاون',
      opportunities: [
        {
          area: 'نقل التكنولوجيا',
          description: 'الشراكة في الري الذكي وتطبيقات الذكاء الاصطناعي الزراعية'
        },
        {
          area: 'الاستثمار في الطاقة الشمسية',
          description: 'تطوير محطات توليد الطاقة والتخزين'
        },
        {
          area: 'إدارة المياه',
          description: 'مشاريع إعادة استخدام المياه المعالجة والحصاد المائي'
        },
        {
          area: 'التدريب والقدرات',
          description: 'برامج تدريب المزارعين على الزراعة الحديثة'
        },
        {
          area: 'البحث والتطوير',
          description: 'تطوير أصناف محاصيل مقاومة للجفاف والملح'
        },
        {
          area: 'التصدير والقيمة المضافة',
          description: 'تطوير سلاسل القيمة وتصنيع المنتجات الزراعية'
        }
      ]
    },
    {
      layout: 'investment',
      title: 'حجم الاستثمارات والعوائد المتوقعة',
      data: [
        {
          metric: 'الاستثمار السنوي المطلوب',
          value: '400-500 مليون دولار',
          description: 'لتحديث الخدمات والبنية التحتية'
        },
        {
          metric: 'الفترة الزمنية',
          value: '5-10 سنوات',
          description: 'للوصول إلى الاستدامة الكاملة'
        },
        {
          metric: 'العائد على الاستثمار',
          value: '2.5-3.5x',
          description: 'خلال 10-15 سنة'
        },
        {
          metric: 'خلق فرص العمل',
          value: '50,000-70,000 فرصة',
          description: 'في الزراعة والمجالات ذات الصلة'
        }
      ]
    },
    {
      layout: 'conclusion',
      title: 'الخلاصة والتوصيات',
      recommendations: [
        'المضي قدمًا في استثمار تكنولوجيا الري الحديث والمراقبة الذكية',
        'تعزيز الاستثمار في الطاقة المتجددة بشكل خاص الطاقة الشمسية',
        'تحسين إدارة المياه من خلال أنظمة الحصاد والإعادة استخدام',
        'دعم المزارعين الصغار من خلال التدريب والتمويل الميسر',
        'تعزيز الشراكات الدولية لنقل التكنولوجيا والخبرات',
        'تطوير الأصناف المحلية المقاومة للجفاف والتغير المناخي'
      ]
    }
  ]
};

// Helper function to add a title slide
function addTitleSlide(pres, slide) {
  const s = pres.addSlide();

  // Background
  s.background = { color: colors.darkGreen };

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
    color: colors.lightGreen,
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
    fill: { color: colors.darkGreen },
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
    align: 'right',
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
      fill: { color: colors.lightBlue },
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
    fill: { color: colors.darkGreen },
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
    align: 'right',
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
        fill: { color: colors.lightBlue },
        line: { type: 'none' }
      });
    }

    // Colored accent bar
    s.addShape('rect', {
      x: 0.3,
      y: yPos,
      w: 0.08,
      h: rowHeight,
      fill: { color: colors.accentOrange },
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
    align: 'right',
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
      fill: { color: colors.lightBlue },
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
    fill: { color: colors.accentOrange },
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
    align: 'right',
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
      fill: { color: colors.accentOrange }
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
    fill: { color: colors.darkGreen },
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
    align: 'right',
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
        fill: { color: colors.lightBlue },
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
    const readinessBg = tech.readiness === 'عالي جدًا' ? colors.lightGreen : colors.gold;
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
    align: 'right',
    fontFace: 'Calibri',
    isTextBox: true,
    margin: 0
  });

  // Location
  s.addText('الموقع: ' + slide.location, {
    x: 0.5,
    y: 1.0,
    w: 9,
    h: 0.3,
    fontSize: 12,
    bold: true,
    color: colors.teal,
    align: 'right',
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
    fill: { color: colors.accentOrange },
    line: { type: 'none' }
  });

  s.addText('التحديات:', {
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
    fill: { color: colors.lightGreen },
    line: { type: 'none' }
  });

  s.addText('الحلول:', {
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
    fill: { color: colors.lightBlue },
    line: { color: colors.teal, width: 2 }
  });

  s.addText('النتائج: ' + slide.results, {
    x: 0.7,
    y: 4.95,
    w: 8.6,
    h: 0.35,
    fontSize: 11,
    bold: true,
    color: colors.teal,
    align: 'right',
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
    fill: { color: colors.darkGreen },
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
    align: 'right',
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
      fill: { color: colors.lightBlue },
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
    fill: { color: colors.lightGreen },
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
    align: 'right',
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
      fill: { color: colors.lightBlue },
      line: { color: colors.lightGreen, width: 2 }
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
    fill: { color: colors.darkGreen },
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
    align: 'right',
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
        fill: { color: colors.lightBlue },
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

  s.background = { color: colors.darkGreen };

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
      align: 'right',
      fontFace: 'Calibri',
      isTextBox: true,
      margin: 0
    });

    yPos += 0.4;
  });
}

// Build slides
console.log('Building presentation...');
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
const outputPath = 'scripts/maroc-dossier/maroc_dossier.pptx';
pres.writeFile({ fileName: outputPath });
console.log('Presentation created: ' + outputPath);
