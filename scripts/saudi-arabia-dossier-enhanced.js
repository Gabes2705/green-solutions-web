const PptxGenJS = require('pptxgenjs');
const fs = require('fs');
const path = require('path');
const https = require('https');

// Create presentation
const pres = new PptxGenJS();

// Define colors and styling
const colors = {
  primary: '1B5E75',
  accent: 'D4AF37',
  secondary: 'A8D5BA',
  dark: '1B1B1B',
  white: 'FFFFFF',
  lightGray: 'F5F5F5'
};

const fonts = {
  arabic: 'Arial',
  size: {
    title: 44,
    subtitle: 28,
    heading: 24,
    body: 14,
    small: 12
  }
};

// Helper functions
function addTitleSlide(pres, title, subtitle, imagePath = null) {
  const slide = pres.addSlide();
  slide.background = { color: colors.primary };

  if (imagePath && fs.existsSync(imagePath)) {
    slide.addImage({
      path: imagePath,
      x: 5,
      y: 1,
      w: 4,
      h: 4,
      transparency: 30
    });
  }

  slide.addText(title, {
    x: 0.5,
    y: 2.5,
    w: 4.5,
    h: 1.2,
    fontSize: fonts.size.title,
    bold: true,
    color: colors.white,
    align: 'center',
    fontFace: fonts.arabic,
    rtl: true
  });

  slide.addText(subtitle, {
    x: 0.5,
    y: 3.9,
    w: 4.5,
    h: 0.8,
    fontSize: fonts.size.subtitle,
    color: colors.accent,
    align: 'center',
    fontFace: fonts.arabic,
    rtl: true
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 1,
    y: 5,
    w: 3,
    h: 0.05,
    fill: { color: colors.accent },
    line: { type: 'none' }
  });
}

function addBulletSlide(pres, title, bullets, imagePath = null) {
  const slide = pres.addSlide();
  slide.background = { color: colors.white };

  slide.addShape(pres.ShapeType.rect, {
    x: 0,
    y: 0,
    w: 10,
    h: 0.8,
    fill: { color: colors.primary },
    line: { type: 'none' }
  });

  const titleWidth = imagePath ? 5.5 : 9;
  slide.addText(title, {
    x: 0.5,
    y: 0.15,
    w: titleWidth,
    h: 0.5,
    fontSize: fonts.size.heading,
    bold: true,
    color: colors.white,
    align: 'right',
    fontFace: fonts.arabic,
    rtl: true
  });

  if (imagePath && fs.existsSync(imagePath)) {
    slide.addImage({
      path: imagePath,
      x: 6,
      y: 1.2,
      w: 3.5,
      h: 3.5
    });
  }

  let yPos = 1.3;
  const maxBullets = imagePath ? 8 : 9;

  bullets.slice(0, maxBullets).forEach((bullet) => {
    slide.addText('•', {
      x: 0.7,
      y: yPos,
      w: 0.3,
      h: 0.35,
      fontSize: fonts.size.body,
      color: colors.accent,
      align: 'center',
      fontFace: fonts.arabic
    });

    const textWidth = imagePath ? 5 : 8.3;
    slide.addText(bullet, {
      x: 1.2,
      y: yPos,
      w: textWidth,
      h: 'auto',
      fontSize: fonts.size.body,
      color: colors.dark,
      align: 'right',
      fontFace: fonts.arabic,
      rtl: true,
      wrap: true
    });

    yPos += 0.65;
  });

  return slide;
}

function addContentWithImageSlide(pres, title, content, imagePath = null) {
  const slide = pres.addSlide();
  slide.background = { color: colors.white };

  slide.addShape(pres.ShapeType.rect, {
    x: 0,
    y: 0,
    w: 10,
    h: 0.8,
    fill: { color: colors.primary },
    line: { type: 'none' }
  });

  slide.addText(title, {
    x: 0.5,
    y: 0.15,
    w: 9,
    h: 0.5,
    fontSize: fonts.size.heading,
    bold: true,
    color: colors.white,
    align: 'right',
    fontFace: fonts.arabic,
    rtl: true
  });

  const contentWidth = imagePath ? 5.5 : 9;
  slide.addText(content, {
    x: 0.5,
    y: 1.2,
    w: contentWidth,
    h: 5.5,
    fontSize: fonts.size.body,
    color: colors.dark,
    align: 'right',
    fontFace: fonts.arabic,
    rtl: true,
    valign: 'top',
    wrap: true
  });

  if (imagePath && fs.existsSync(imagePath)) {
    slide.addImage({
      path: imagePath,
      x: 6.2,
      y: 1.2,
      w: 3.3,
      h: 5.3
    });
  }

  return slide;
}

// Build presentation
try {
  // Slide 1: Title
  addTitleSlide(pres, 'المملكة العربية السعودية', 'دليل تطوير السوق الزراعي');

  // Slide 2: Market Overview
  addBulletSlide(pres, 'نظرة عامة على السوق', [
    'السكان: حوالي 36 مليون نسمة',
    'القطاع الزراعي: 2-3% من الناتج المحلي الإجمالي',
    'التمويل: معتمد على ثروة النفط والدعم الحكومي',
    'الهدف: الأمن الغذائي والاستدامة البيئية',
    'رؤية 2030: التحديث والتنويع الاقتصادي',
    'الفرص: زيادة الإنتاجية والاستثمار الأجنبي'
  ]);

  // Slide 3: Main Crops
  addBulletSlide(pres, 'المحاصيل الرئيسية', [
    'القمح: محصول استراتيجي للأمن الغذائي',
    'التمر: أكثر من 150 نوع محلي',
    'الخضروات: إنتاج موسمي وفي الصوب',
    'منتجات الألبان: تربية مدعومة للماشية',
    'المحاصيل الحديثة: الزراعة الرأسية والمائية',
    'الاستثمار: قطاع مدعوم ومنظم'
  ]);

  // Slide 4: Water Resources and Challenges
  addBulletSlide(pres, 'الموارد المائية والتحديات', [
    'ندرة شديدة: 3,450 ملم/سنة هطول أمطار',
    'استنزاف المياه الجوفية: تراجع 30-40%',
    'المياه المحلاة: 50% من المياه العذبة',
    'الإجهاد المائي: 94% للقطاع الزراعي',
    'التحدي: توازن بين الأمن الغذائي والموارد',
    'الحل: تحسين كفاءة الري والتكنولوجيا'
  ]);

  // Slide 5: Climate and Environmental Constraints
  addBulletSlide(pres, 'المناخ والقيود البيئية', [
    'درجات الحرارة: 50°C+ في الصيف',
    'الرطوبة: منخفضة جداً (10-30%)',
    'الرياح: عواصف رملية متكررة',
    'التربة: قلوية وملحية وفقيرة',
    'الموسمية: نمو محدود خارج الفصول المناسبة',
    'الفرص: استخدام أصناف محسّنة ومقاومة'
  ]);

  // Slide 6: Technology Fit - Protected Agriculture
  addBulletSlide(pres, 'التكنولوجيا المناسبة - 1', [
    'الصوب الزجاجية والبلاستيكية',
    'الزراعة المحمية: توفير 50-70% من المياه',
    'التحكم بالمناخ الداخلي',
    'زراعة الخضروات الطازجة على مدار السنة',
    'تقليل الأمراض والآفات',
    'إنتاجية عالية بمساحة صغيرة'
  ]);

  // Slide 7: Technology Fit - Smart Irrigation
  addBulletSlide(pres, 'التكنولوجيا المناسبة - 2', [
    'الري بالتنقيط: توفير 30-50% من المياه',
    'الأنظمة الذكية: حساسات للرطوبة والتربة',
    'الزراعة الرأسية: إنتاجية عالية بقليل المياه',
    'الزراعة المائية: نظم بدون تربة',
    'الرصد عن بعد: مراقبة المحاصيل والصحة',
    'تنبؤات: ذكاء اصطناعي لتحسين الإنتاج'
  ]);

  // Slide 8: Sustainable Water Management
  addBulletSlide(pres, 'إدارة المياه المستدامة', [
    'تحلية المياه: تحسين الكفاءة والتكلفة',
    'معالجة مياه الصرف الزراعي',
    'إعادة استخدام المياه المعالجة',
    'الطاقة الشمسية: تشغيل أنظمة الري',
    'حصاد المياه: استقطاب الأمطار النادرة',
    'إدارة تربية: تحسين خواص التربة'
  ]);

  // Slide 9: Agricultural Regions and Case Studies
  addBulletSlide(pres, 'المناطق الزراعية ودراسات الحالة', [
    'الأحساء: كثافة نخيل التمر والخضروات',
    'الجوف: إنتاج معتمد على الآبار العميقة',
    'القصيم: منطقة زراعية متعددة المحاصيل',
    'نجران: خصائص مناخية فريدة',
    'المشاريع التجريبية: نجاح تكنولوجيات حديثة',
    'الدروس: نقل التكنولوجيا والخبرات'
  ]);

  // Slide 10: Pilot Projects Success
  addBulletSlide(pres, 'المشاريع التجريبية الناجحة', [
    'الصوب الزجاجية: محاصيل عضوية مستدامة',
    'نظم الري الحديثة: توفير المياه',
    'استعادة التربة المالحة: إعادة تأهيل',
    'الزراعة الذكية: أتمتة وتحسين المحاصيل',
    'الشراكات الأجنبية: نقل التكنولوجيا',
    'التدريب: تطوير الكوادر البشرية'
  ]);

  // Slide 11: Regulatory Environment
  addBulletSlide(pres, 'البيئة التنظيمية', [
    'رؤية 2030: استراتيجية الأمن الغذائي',
    'وزارة البيئة والمياه والزراعة: السياسات',
    'اللوائح الزراعية: معايير الجودة والسلامة',
    'المؤسسة العامة للحبوب: توزيع الدعم',
    'الحوافز الضريبية: تقليل الرسوم',
    'الترخيص: دعم المشاريع الجديدة'
  ]);

  // Slide 12: Investment and Partnership Opportunities - 1
  addBulletSlide(pres, 'فرص الاستثمار والشراكة - 1', [
    'الاستثمار المباشر: قطاع زراعي منظم',
    'نقل التكنولوجيا: شراكات دولية',
    'الصادرات الزراعية: أسواق إقليمية',
    'الزراعة العضوية: طلب متزايد',
    'مراكز التدريب: تطوير الكوادر',
    'المشاريع الكبيرة: تطوير البنية التحتية'
  ]);

  // Slide 13: Investment and Partnership Opportunities - 2
  addBulletSlide(pres, 'فرص الاستثمار والشراكة - 2', [
    'الشراكات العامة-الخاصة (PPP)',
    'الأمن الغذائي: ضمان الاكتفاء المحلي',
    'الاستدامة البيئية: تقليل البصمة الكربونية',
    'التصنيع الزراعي: منتجات ذات قيمة مضافة',
    'الأسواق الإقليمية: تصدير المنتجات',
    'الأبحاث: تطوير أصناف محسّنة'
  ]);

  // Slide 14: Conclusions and Recommendations
  addBulletSlide(pres, 'الخلاصة والتوصيات', [
    'الحاجة الماسة: استخدام التكنولوجيا الحديثة',
    'التركيز: كفاءة المياه والاستدامة',
    'الفرص: شراكات دولية وتطوير بشري',
    'التحديات: ندرة المياه والمناخ القاسي',
    'النجاح: التزام بـ رؤية 2030',
    'الطريق: اقتصاد زراعي مستدام'
  ]);

  // Slide 15: Closing Slide
  addTitleSlide(pres, 'شكراً لكم', 'للمزيد من المعلومات والاستثمار');

  // Save
  const outputPath = path.join(__dirname, '../public/documents/countries/arabie-saoudite.pptx');
  const outputDir = path.dirname(outputPath);

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  pres.writeFile({ fileName: outputPath });
  console.log(`✓ Enhanced PPTX created: ${outputPath}`);

} catch (error) {
  console.error('Error:', error);
  process.exit(1);
}
