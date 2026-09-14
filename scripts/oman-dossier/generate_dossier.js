const PptxGenJS = require('pptxgenjs');
const fs = require('fs');
const path = require('path');

// Create presentation
const pres = new PptxGenJS();

// Set layout to 16:9
pres.layout = 'LAYOUT_16x9';

// Define color palette - Oman-inspired (desert golds, ocean blues, mountain grays)
const colors = {
  darkGold: 'B8860B',        // Dark goldenrod (desert/dates)
  lightGold: 'FFD700',       // Gold accent
  oceanBlue: '0066CC',       // Ocean blue (coast)
  lightBlue: '4DB8E8',       // Light blue
  sandColor: 'F4A460',       // Sandy brown
  darkText: '1A1A1A',
  lightText: 'E8E8E8',
  white: 'FFFFFF',
  accentRed: 'CC6633'        // Warm red (mountains/sunset)
};

// Arabic content - Modern Standard Arabic (MSA)
const content = {
  title: 'دراسة سوق التنمية الزراعية عمّان',
  slides: [
    {
      layout: 'title',
      title: 'دراسة سوق التنمية الزراعية',
      subtitle: 'سلطنة عمّان',
      date: '2026'
    },
    {
      layout: 'overview',
      title: 'نظرة عامة على السوق',
      content: [
        {
          icon: '🌍',
          heading: 'الموقع الجغرافي',
          text: 'جنوب شرق شبه الجزيرة العربية، موقع استراتيجي على بحر العرب'
        },
        {
          icon: '👥',
          heading: 'السكان',
          text: '5.1 مليون نسمة، معدل النمو 2.1% سنويًا'
        },
        {
          icon: '💼',
          heading: 'الاقتصاد',
          text: 'الناتج المحلي الإجمالي: 198 مليار ريال عماني (52 مليار دولار)'
        },
        {
          icon: '🌾',
          heading: 'الزراعة',
          text: '4-5% من الناتج المحلي الإجمالي، توظف 4-5% من القوى العاملة'
        }
      ]
    },
    {
      layout: 'sectors',
      title: 'القطاعات الزراعية الرئيسية',
      sectors: [
        {
          crop: 'التمر والنخيل',
          production: '350,000 - 380,000 طن سنويًا',
          area: '45,000 هكتار'
        },
        {
          crop: 'الليمون والحمضيات',
          production: '310,000 - 340,000 طن',
          area: '21,000 هكتار'
        },
        {
          crop: 'الخضروات (الطماطم والخيار)',
          production: '180,000 - 200,000 طن',
          area: '12,000 هكتار'
        },
        {
          crop: 'الفلفل والبصل',
          production: '85,000 - 100,000 طن',
          area: '6,500 هكتار'
        },
        {
          crop: 'الأعلاف والحبوب',
          production: '90,000 - 120,000 طن',
          area: '8,000 هكتار'
        }
      ]
    },
    {
      layout: 'water',
      title: 'أنماط استخدام المياه',
      content: [
        {
          heading: 'استهلاك المياه الزراعية',
          value: '91%',
          description: 'من إجمالي استخدام المياه المتاحة'
        },
        {
          heading: 'الموارد المائية المتاحة',
          value: '1.4 مليار م³',
          description: 'سنويًا (من الينابيع والآبار والأفلاج)'
        },
        {
          heading: 'نظام الفلج التقليدي',
          value: '3,100 فلج',
          description: 'نظام ري تقليدي فريد يروي 25,000 هكتار'
        },
        {
          heading: 'الضغط المائي',
          value: 'عالي جدًا',
          description: 'استخراج المياه الجوفية يفوق التجدد بنسبة 25%'
        }
      ]
    },
    {
      layout: 'climate',
      title: 'المناخ والقيود الطبيعية',
      threats: [
        {
          threat: 'القحط والجفاف',
          impact: 'سقوط أمطار محدود جدًا (80-100 ملم سنويًا في الداخل)'
        },
        {
          threat: 'ندرة المياه الجوفية',
          impact: 'استنزاف المياه الجوفية بمعدل 25% أعلى من التجدد'
        },
        {
          threat: 'ارتفاع درجات الحرارة',
          impact: 'تصل إلى 50 درجة مئوية في الصيف، ارتفاع 1.2 درجة منذ 1980'
        },
        {
          threat: 'تملح التربة والمياه',
          impact: 'تأثر 30% من الأراضي الزراعية بالملوحة'
        },
        {
          threat: 'الرياح والعواصف',
          impact: 'فقدان التربة والرطوبة، تآكل البنية التحتية الزراعية'
        }
      ]
    },
    {
      layout: 'technology',
      title: 'ملاءمة التكنولوجيا',
      technologies: [
        {
          name: 'الري بالتنقيط والرش المحسّن',
          readiness: 'عالي جدًا',
          adoption: '35% من الأراضي المروية',
          benefit: 'توفير المياه 50-70%'
        },
        {
          name: 'حصاد المياه الحديث',
          readiness: 'عالي جدًا',
          adoption: 'جارٍ التوسع',
          benefit: 'زيادة توفر المياه بنسبة 15-20%'
        },
        {
          name: 'الطاقة الشمسية للضخ',
          readiness: 'عالي جدًا',
          adoption: '2,000+ نظام مثبت',
          benefit: 'خفض تكاليف الطاقة 60-80%'
        },
        {
          name: 'المراقبة الذكية والبيانات',
          readiness: 'متوسط إلى عالي',
          adoption: '8-12% من المزارعين',
          benefit: 'تحسين إنتاجية المحاصيل 25-35%'
        }
      ]
    },
    {
      layout: 'case-study-1',
      title: 'دراسة حالة: منطقة الداخلية (ولاية نزوى)',
      location: 'محافظة الداخلية',
      challenge: 'ندرة المياه الشديدة والجفاف المستمر وتراجع الإنتاج الزراعي',
      solution: [
        'تطوير نظام الفلج التقليدي مع التكنولوجيا الحديثة',
        'تطبيق الري بالتنقيط في المزارع التجارية',
        'استخدام الطاقة الشمسية لضخ المياه من الآبار',
        'إدخال أصناف نخيل وحمضيات محسّنة ومقاومة للجفاف'
      ],
      results: 'زيادة الإنتاجية بنسبة 40% وتوفير المياه بنسبة 45% وزيادة دخل المزارعين 38%'
    },
    {
      layout: 'case-study-2',
      title: 'دراسة حالة: منطقة ظفار (الخريف الموسمي)',
      location: 'محافظة ظفار',
      challenge: 'تركيز الأمطار في فصل واحد، تقلب الإنتاج، تآكل التربة',
      solution: [
        'بناء خزانات حصاد المياه لتجميع مياه الخريف',
        'تطبيق الزراعة المستدامة والحفاظ على التربة',
        'زراعة محاصيل موسمية متنوعة (الحبوب، الخضروات)',
        'برامج التدريب المكثفة للمزارعين على الممارسات الحديثة'
      ],
      results: 'استقرار الإنتاج برغم التذبذب المناخي، زيادة إنتاج الخضروات 50%، توفر السلع الغذائية'
    },
    {
      layout: 'case-study-3',
      title: 'دراسة حالة: التنمية الزراعية الساحلية',
      location: 'مسقط والمنطقة الساحلية',
      challenge: 'ارتفاع تكاليف الأراضي، تنافس من الاستخدامات الحضرية، تملح التربة',
      solution: [
        'تطوير الزراعة العمودية والدفيئات عالية الكفاءة',
        'استخدام تحلية المياه المدعومة بالطاقة الشمسية',
        'التركيز على المنتجات عالية القيمة (الخضروات العضوية)',
        'الاستثمار في تصنيع وتصدير المنتجات الزراعية'
      ],
      results: 'إنتاجية أراضي أعلى 5 مرات، توظيف آلاف العمال، زيادة الصادرات الزراعية'
    },
    {
      layout: 'regulation',
      title: 'البيئة التنظيمية والسياسات',
      policies: [
        {
          policy: 'الاستراتيجية الوطنية للزراعة المستدامة',
          year: '2016-2040',
          focus: 'تحقيق الأمن الغذائي والتنمية المستدامة'
        },
        {
          policy: 'خطة تطوير الري الحديث',
          year: 'جاري (2023-2030)',
          focus: 'نقل 50% من الأراضي للري الحديث الموفر للمياه'
        },
        {
          policy: 'قانون الموارد المائية',
          year: '2001، محدّث 2020',
          focus: 'إدارة مستدامة وحماية المياه الجوفية'
        },
        {
          policy: 'برنامج الطاقة المتجددة الوطني',
          year: '2020-2030',
          focus: '30% من الكهرباء من الطاقات المتجددة'
        },
        {
          policy: 'خطة التكيف مع التغير المناخي',
          year: '2020-2050',
          focus: 'بناء المرونة الزراعية والاقتصادية'
        }
      ]
    },
    {
      layout: 'partnerships',
      title: 'فرص الشراكة والتعاون',
      opportunities: [
        {
          area: 'نقل التكنولوجيا',
          description: 'شراكات في الري الذكي والمراقبة الزراعية والبيانات الزراعية'
        },
        {
          area: 'الطاقة الشمسية الزراعية',
          description: 'تطوير محطات الطاقة الشمسية لتحلية المياه والري'
        },
        {
          area: 'إدارة المياه المتقدمة',
          description: 'مشاريع حصاد المياه وإعادة استخدام المياه المعالجة'
        },
        {
          area: 'البحث والتطوير الزراعي',
          description: 'تطوير أصناف نباتية جديدة مقاومة للجفاف والملوحة'
        },
        {
          area: 'التدريب والقدرات',
          description: 'برامج تدريب المزارعين على الممارسات الزراعية الحديثة'
        },
        {
          area: 'سلاسل القيمة والتصدير',
          description: 'تطوير تصنيع وتصدير المنتجات الزراعية عالية الجودة'
        }
      ]
    },
    {
      layout: 'investment',
      title: 'حجم الاستثمارات والعوائد المتوقعة',
      data: [
        {
          metric: 'الاستثمار السنوي المطلوب',
          value: '200-250 مليون ريال',
          description: 'لتحديث البنية التحتية الزراعية والري (50-65 مليون دولار)'
        },
        {
          metric: 'الفترة الزمنية',
          value: '5-8 سنوات',
          description: 'للوصول إلى الاستدامة المائية والاقتصادية'
        },
        {
          metric: 'العائد على الاستثمار',
          value: '2-3x',
          description: 'خلال 10-12 سنة من البداية'
        },
        {
          metric: 'خلق فرص العمل',
          value: '15,000-20,000 فرصة',
          description: 'في الزراعة والصناعات الغذائية والتصدير'
        }
      ]
    },
    {
      layout: 'conclusion',
      title: 'الخلاصة والتوصيات',
      recommendations: [
        'الاستثمار المكثف في تطوير الري الحديث والموفر للمياه بأولوية عالية',
        'توسيع استخدام الطاقة الشمسية لضخ المياه وتحليتها',
        'تطوير وإعادة تأهيل نظام الفلج التقليدي الفريد',
        'الاستثمار في البحث عن أصناف محاصيل محسّنة ومقاومة للجفاف والملوحة',
        'دعم صناعة تحويل وتصدير المنتجات الزراعية (التمر، الحمضيات)',
        'تعزيز الشراكات الدولية لنقل التكنولوجيا والخبرات الزراعية'
      ]
    }
  ]
};

// Helper function to add a title slide
function addTitleSlide(pres, slide) {
  const s = pres.addSlide();

  // Background
  s.background = { color: colors.darkGold };

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
    color: colors.lightBlue,
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
    fill: { color: colors.darkGold },
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
      line: { color: colors.oceanBlue, width: 2 }
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
    fill: { color: colors.darkGold },
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
      fill: { color: colors.sandColor },
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
    fill: { color: colors.oceanBlue },
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
      line: { color: colors.oceanBlue, width: 2 }
    });

    // Value
    s.addText(item.value, {
      x: xPos + 0.2,
      y: yPos + 0.3,
      w: 3.9,
      h: 0.6,
      fontSize: 24,
      bold: true,
      color: colors.oceanBlue,
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
    fill: { color: colors.darkGold },
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
    const readinessBg = tech.readiness === 'عالي جدًا' ? colors.lightGold : colors.oceanBlue;
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
    fill: { color: colors.oceanBlue },
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
    color: colors.oceanBlue,
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
    fill: { color: colors.lightGold },
    line: { type: 'none' }
  });

  s.addText('الحلول:', {
    x: 5.3,
    y: 1.43,
    w: 4,
    h: 0.4,
    fontSize: 11,
    bold: true,
    color: colors.darkText,
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
    line: { color: colors.oceanBlue, width: 2 }
  });

  s.addText('النتائج: ' + slide.results, {
    x: 0.7,
    y: 4.95,
    w: 8.6,
    h: 0.35,
    fontSize: 11,
    bold: true,
    color: colors.oceanBlue,
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
    fill: { color: colors.darkGold },
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
      fill: { color: colors.oceanBlue }
    });

    // Connecting line (not on last)
    if (idx < slide.policies.length - 1) {
      s.addShape('line', {
        x: 0.65,
        y: yPos + 0.45,
        w: 0,
        h: rowHeight - 0.15,
        line: { color: colors.oceanBlue, width: 2 }
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
      fill: { color: colors.lightGold },
      line: { type: 'none' }
    });

    s.addText(policy.year, {
      x: 1.2,
      y: yPos + 0.1,
      w: 1.2,
      h: 0.25,
      fontSize: 9,
      bold: true,
      color: colors.darkText,
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
    fill: { color: colors.lightGold },
    line: { type: 'none' }
  });

  s.addText(slide.title, {
    x: 0.5,
    y: 0.15,
    w: 9,
    h: 0.5,
    fontSize: 28,
    bold: true,
    color: colors.darkText,
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
      line: { color: colors.oceanBlue, width: 2 }
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
    fill: { color: colors.darkGold },
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
      fill: { color: colors.lightGold },
      line: { type: 'none' }
    });

    s.addText(item.value, {
      x: 0.5,
      y: yPos + 0.12,
      w: 2,
      h: 0.45,
      fontSize: 11,
      bold: true,
      color: colors.darkText,
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

  s.background = { color: colors.darkGold };

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
      color: colors.lightGold,
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
console.log('Building Oman presentation...');
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
const outputPath = 'C:\\Users\\Utilisateur\\dev\\green-solutions-web\\scripts\\oman-dossier\\oman_dossier.pptx';
pres.writeFile({ fileName: outputPath });
console.log('Presentation created: ' + outputPath);
