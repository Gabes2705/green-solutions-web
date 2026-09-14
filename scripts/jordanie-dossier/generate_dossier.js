const PptxGenJS = require('pptxgenjs');
const fs = require('fs');
const path = require('path');

// Create presentation
const pres = new PptxGenJS();

// Set layout to 16:9
pres.layout = 'LAYOUT_16x9';

// Define color palette - Jordan-inspired (blues, desert golds, greens)
const colors = {
  darkBlue: '1A3A52',        // Deep Jordan blue (water/Dead Sea)
  lightBlue: '4DB8E8',       // Light blue (water resources)
  teal: '00897B',            // Teal (agriculture)
  darkGreen: '2D5016',       // Forest green (agriculture/sustainability)
  sandGold: 'D4A574',        // Desert sand gold
  orange: 'E89B3C',          // Warm orange (challenges)
  white: 'FFFFFF',
  darkText: '1A1A1A',
  lightText: 'E8E8E8',
  accentRed: 'C62828'        // Red for water stress indicators
};

// Arabic content for Jordan
const content = {
  title: 'دراسة سوق التنمية الزراعية الأردن',
  slides: [
    {
      layout: 'title',
      title: 'دراسة سوق التنمية الزراعية',
      subtitle: 'المملكة الأردنية الهاشمية',
      date: '2026'
    },
    {
      layout: 'overview',
      title: 'نظرة عامة على السوق',
      content: [
        {
          icon: '🌍',
          heading: 'الموقع الجغرافي',
          text: 'شرق المتوسط، موقع استراتيجي بين بلاد الشام والعالم العربي'
        },
        {
          icon: '👥',
          heading: 'السكان',
          text: '10 ملايين نسمة بمعدل نمو سنوي 2.3%'
        },
        {
          icon: '💼',
          heading: 'الاقتصاد',
          text: 'الناتج المحلي الإجمالي: 45 مليار دولار أمريكي'
        },
        {
          icon: '🌾',
          heading: 'الزراعة',
          text: '3-4% من الناتج المحلي الإجمالي، توظف 4% من القوى العاملة'
        }
      ]
    },
    {
      layout: 'sectors',
      title: 'القطاعات الزراعية الرئيسية',
      sectors: [
        {
          crop: 'الحبوب (القمح والشعير)',
          production: '30,000-50,000 طن سنويًا',
          area: '250,000 هكتار'
        },
        {
          crop: 'التمر والنخيل',
          production: '80,000 طن سنويًا',
          area: '45,000 هكتار'
        },
        {
          crop: 'الخضروات والفواكه',
          production: '600,000 طن سنويًا',
          area: '80,000 هكتار'
        },
        {
          crop: 'الزيتون',
          production: '150,000 طن سنويًا',
          area: '100,000 هكتار'
        },
        {
          crop: 'الحمضيات والمحاصيل البستانية',
          production: '200,000 طن سنويًا',
          area: '30,000 هكتار'
        }
      ]
    },
    {
      layout: 'water',
      title: 'أنماط استخدام المياه والندرة',
      content: [
        {
          heading: 'استهلاك المياه الزراعية',
          value: '65%',
          description: 'من إجمالي المياه المتاحة للاستخدام'
        },
        {
          heading: 'الموارد المائية المتاحة',
          value: '3.6 مليار م³',
          description: 'سنويًا (أقل من الدول المجاورة بكثير)'
        },
        {
          heading: 'تصنيف الإجهاد المائي',
          value: 'حرج جدًا',
          description: 'الأردن من أكثر دول العالم ندرة للمياه'
        },
        {
          heading: 'مناطق الإجهاد الشديد',
          value: 'وادي الأردن، البادية',
          description: 'مناطق حرجة تتطلب تدخل فوري'
        }
      ]
    },
    {
      layout: 'climate',
      title: 'المناخ والقيود الطبيعية',
      threats: [
        {
          threat: 'الجفاف الشديد والمستمر',
          impact: 'معدل الأمطار السنوي 50-300 ملم في معظم المناطق'
        },
        {
          threat: 'ندرة المياه العميقة',
          impact: 'الاستخراج من الآبار يتجاوز التجدد السنوي بنسبة 150%'
        },
        {
          threat: 'التصحر وتدهور الأراضي',
          description: 'فقدان إنتاجية الأراضي وملوحة التربة في البادية'
        },
        {
          threat: 'التغير المناخي والارتفاع الحراري',
          impact: 'ارتفاع درجات الحرارة يؤثر على المحاصيل بنسبة 20-30%'
        },
        {
          threat: 'الضغط السكاني والهجرة',
          impact: 'زيادة الطلب على الغذاء وضغط على الموارد الطبيعية'
        }
      ]
    },
    {
      layout: 'technology',
      title: 'ملاءمة التكنولوجيا والحلول',
      technologies: [
        {
          name: 'الري بالتنقيط والري الحديث',
          readiness: 'عالي جدًا',
          adoption: '35% من الأراضي المروية',
          benefit: 'توفير المياه بنسبة 50-60%'
        },
        {
          name: 'محطات التحلية (البحر والمياه المالحة)',
          readiness: 'عالي',
          adoption: '3 محطات رئيسية',
          benefit: 'إنتاج 200 مليون م³ سنويًا إضافية'
        },
        {
          name: 'معالجة وإعادة استخدام المياه',
          readiness: 'عالي',
          adoption: '25% من المياه المعالجة',
          benefit: 'توفير 500 مليون م³ سنويًا'
        },
        {
          name: 'الطاقة الشمسية لمضخات الري',
          readiness: 'عالي جدًا',
          adoption: '1000+ محطة',
          benefit: 'خفض تكاليف الطاقة بنسبة 70%'
        }
      ]
    },
    {
      layout: 'case-study-1',
      title: 'دراسة حالة: وادي الأردن',
      location: 'وادي الأردن - من الشمال إلى جنوب البحر الميت',
      challenge: 'أهم منطقة زراعية لكنها تعاني من إجهاد مائي شديد وتدهور التربة',
      solution: [
        'نظام الري الحديث والتنقيط المتقدم',
        'محطات معالجة المياه وإعادة الاستخدام',
        'حصاد المياه من الأودية الموسمية',
        'إدارة ذكية للموارد المائية والتخطيط الزراعي'
      ],
      results: 'زيادة إنتاجية الأراضي بنسبة 40% مع توفير المياه بنسبة 45%'
    },
    {
      layout: 'case-study-2',
      title: 'دراسة حالة: منطقة البحر الميت والسياحة الزراعية',
      location: 'محافظة أريحا والبحر الميت - أقل نقطة على الأرض',
      challenge: 'ملوحة عالية جدًا، تأثر بانخفاض منسوب البحر الميت، فرص اقتصادية محدودة',
      solution: [
        'محاصيل متخصصة مقاومة للملح (الأفوكادو، الحمضيات، التمر)',
        'السياحة الزراعية والعلاجات الصحية',
        'تطبيق تقنيات الزراعة المائية المتقدمة',
        'الشراكات مع القطاع السياحي للتسويق المتكامل'
      ],
      results: 'خلق 500-800 فرصة عمل وزيادة دخل المنطقة بنسبة 35%'
    },
    {
      layout: 'case-study-3',
      title: 'دراسة حالة: منطقة عمّان والمرتفعات الوسطى',
      location: 'محافظات عمّان والزرقاء والمفرق - مناطق جبلية وأمطار محدودة',
      challenge: 'فقر الموارد المائية، تقلب المناخ، الفقر الريفي، الهجرة القروية',
      solution: [
        'تطوير المحاصيل الجافة والزيتون والأشجار المثمرة',
        'برامج الحصاد المائي والخزانات الصغيرة',
        'الثروة الحيوانية المستدامة والدواجن',
        'التعاونيات الزراعية ودعم المزارعين الصغار'
      ],
      results: 'زيادة دخل الأسر الريفية بنسبة 30% وتحسين الأمن الغذائي'
    },
    {
      layout: 'regulation',
      title: 'البيئة التنظيمية والسياسات الزراعية',
      policies: [
        {
          policy: 'استراتيجية الأمن الغذائي الوطنية',
          year: '2013-2025',
          focus: 'تحسين الاكتفاء الذاتي وكفاءة الموارد'
        },
        {
          policy: 'الخطة الوطنية للمياه',
          year: '2016-2025',
          focus: 'إدارة مستدامة وتقليل الفاقد المائي'
        },
        {
          policy: 'برنامج تطوير القطاع الزراعي',
          year: 'جاري',
          focus: 'تحديث البنية التحتية والتكنولوجيا'
        },
        {
          policy: 'خطة الطاقة والمياه المتجددة',
          year: '2020-2030',
          focus: '50% من الطاقة من مصادر متجددة'
        },
        {
          policy: 'سياسة التكيف مع تغير المناخ',
          year: '2020-2030',
          focus: 'بناء المرونة الزراعية والاقتصادية'
        }
      ]
    },
    {
      layout: 'partnerships',
      title: 'فرص الشراكة والتعاون الدولي',
      opportunities: [
        {
          area: 'تكنولوجيا المياه والتحلية',
          description: 'محطات تحلية متقدمة وإعادة استخدام المياه المعالجة'
        },
        {
          area: 'الطاقة الشمسية الزراعية',
          description: 'مشاريع كبرى للطاقة الشمسية في ضخ الري والمعالجة'
        },
        {
          area: 'الزراعة الذكية والابتكار',
          description: 'تطبيقات الذكاء الاصطناعي والمراقبة الدقيقة للموارد'
        },
        {
          area: 'التصدير والقيمة المضافة',
          description: 'تطوير منتجات زراعية عالية القيمة للأسواق العالمية'
        },
        {
          area: 'البحث والتطوير الزراعي',
          description: 'تطوير أصناف محاصيل مقاومة للجفاف والملح'
        },
        {
          area: 'التدريب والقدرات البشرية',
          description: 'برامج تدريب المزارعين على الزراعة الحديثة والمستدامة'
        }
      ]
    },
    {
      layout: 'investment',
      title: 'حجم الاستثمارات والعوائد المتوقعة',
      data: [
        {
          metric: 'الاستثمار السنوي المطلوب',
          value: '150-200 مليون دولار',
          description: 'لتحديث البنية التحتية والتكنولوجيا'
        },
        {
          metric: 'الفترة الزمنية للعائد',
          value: '5-10 سنوات',
          description: 'للوصول إلى الاستدامة المالية والبيئية'
        },
        {
          metric: 'العائد على الاستثمار المتوقع',
          value: '2.0-3.0x',
          description: 'خلال 10-15 سنة'
        },
        {
          metric: 'خلق فرص العمل',
          value: '15,000-25,000 فرصة',
          description: 'في الزراعة والصناعات ذات الصلة'
        }
      ]
    },
    {
      layout: 'conclusion',
      title: 'الخلاصة والتوصيات الاستراتيجية',
      recommendations: [
        'الاستثمار الاستراتيجي في تحلية المياه وإعادة الاستخدام لتوسيع الموارد المائية',
        'تسريع تطبيق تقنيات الري الحديث في وادي الأردن والمناطق الإنتاجية',
        'تعزيز دور الطاقة الشمسية في تقليل تكاليف الري والإنتاج',
        'دعم البحث والتطوير لأصناف محاصيل تتحمل الجفاف والملح',
        'تشجيع الاستثمارات الدولية والشراكات في القطاع الزراعي',
        'تحسين الأمن الغذائي والاكتفاء الذاتي مع الحفاظ على الموارد الطبيعية'
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
    color: colors.lightBlue,
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
    color: colors.sandGold,
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
      line: { color: colors.darkBlue, width: 2 }
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
      fill: { color: colors.sandGold },
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
      line: { color: colors.accentRed, width: 2 }
    });

    // Value
    s.addText(item.value, {
      x: xPos + 0.2,
      y: yPos + 0.3,
      w: 3.9,
      h: 0.6,
      fontSize: 24,
      bold: true,
      color: colors.accentRed,
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
    fill: { color: colors.orange },
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
      fill: { color: colors.orange }
    });

    s.addText('⚠', {
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
    const readinessBg = tech.readiness === 'عالي جدًا' ? colors.darkGreen : colors.sandGold;
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
    color: colors.darkBlue,
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
    fill: { color: colors.accentRed },
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
    fill: { color: colors.darkGreen },
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
    line: { color: colors.darkBlue, width: 2 }
  });

  s.addText('النتائج: ' + slide.results, {
    x: 0.7,
    y: 4.95,
    w: 8.6,
    h: 0.35,
    fontSize: 11,
    bold: true,
    color: colors.darkBlue,
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
      fill: { color: colors.darkBlue }
    });

    // Connecting line (not on last)
    if (idx < slide.policies.length - 1) {
      s.addShape('line', {
        x: 0.65,
        y: yPos + 0.45,
        w: 0,
        h: rowHeight - 0.15,
        line: { color: colors.darkBlue, width: 2 }
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
      fill: { color: colors.sandGold },
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
      line: { color: colors.darkGreen, width: 2 }
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
      fill: { color: colors.sandGold },
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
      color: colors.sandGold,
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
console.log('Building Jordan presentation...');
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
const outputPath = path.join(__dirname, 'jordanie_dossier.pptx');
pres.writeFile({ fileName: outputPath });
console.log('Presentation created: ' + outputPath);
