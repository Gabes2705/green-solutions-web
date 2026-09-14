const PptxGenJS = require('pptxgenjs');
const fs = require('fs');
const path = require('path');
const https = require('https');

// Create presentation
const pres = new PptxGenJS();

// Set presentation properties
pres.defineLayout({ name: 'LAYOUT1', width: 10, height: 7.5 });
pres.defineLayout({ name: 'LAYOUT2', width: 10, height: 5.625 });

// Define colors and styling
const colors = {
  primary: '1B5E75',      // Deep teal
  accent: 'D4AF37',       // Gold
  secondary: 'A8D5BA',    // Sage green
  dark: '1B1B1B',
  white: 'FFFFFF',
  lightGray: 'F5F5F5',
  lightText: 'E8E8E8'
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

// Helper function to add a title slide
function addTitleSlide(pres, title, subtitle) {
  const slide = pres.addSlide();

  // Background
  slide.background = { color: colors.primary };

  // Title
  slide.addText(title, {
    x: 0.5,
    y: 2.5,
    w: 9,
    h: 1.2,
    fontSize: fonts.size.title,
    bold: true,
    color: colors.white,
    align: 'center',
    fontFace: fonts.arabic,
    rtl: true
  });

  // Subtitle
  slide.addText(subtitle, {
    x: 0.5,
    y: 3.9,
    w: 9,
    h: 0.8,
    fontSize: fonts.size.subtitle,
    color: colors.accent,
    align: 'center',
    fontFace: fonts.arabic,
    rtl: true
  });

  // Decorative line
  slide.addShape(pres.ShapeType.rect, {
    x: 3.5,
    y: 5,
    w: 3,
    h: 0.05,
    fill: { color: colors.accent },
    line: { type: 'none' }
  });
}

// Helper function to add content slide
function addContentSlide(pres, title, content, bgColor = colors.white) {
  const slide = pres.addSlide();

  // Background
  slide.background = { color: bgColor };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0,
    y: 0,
    w: 10,
    h: 0.8,
    fill: { color: colors.primary },
    line: { type: 'none' }
  });

  // Title
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

  // Content area
  slide.addText(content, {
    x: 0.5,
    y: 1.2,
    w: 9,
    h: 5.8,
    fontSize: fonts.size.body,
    color: colors.dark,
    align: 'right',
    fontFace: fonts.arabic,
    rtl: true,
    valign: 'top'
  });

  return slide;
}

// Helper function to add bullet points
function addBulletSlide(pres, title, bullets, bgColor = colors.white) {
  const slide = pres.addSlide();

  slide.background = { color: bgColor };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0,
    y: 0,
    w: 10,
    h: 0.8,
    fill: { color: colors.primary },
    line: { type: 'none' }
  });

  // Title
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

  // Bullets
  let yPos = 1.3;
  bullets.forEach((bullet) => {
    // Bullet point
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

    // Text
    slide.addText(bullet, {
      x: 1.2,
      y: yPos,
      w: 8.3,
      h: 'auto',
      fontSize: fonts.size.body,
      color: colors.dark,
      align: 'right',
      fontFace: fonts.arabic,
      rtl: true,
      wrap: true
    });

    yPos += 0.7;
  });

  return slide;
}

// Build the presentation
try {
  // Slide 1: Title Slide
  addTitleSlide(pres, 'المملكة العربية السعودية', 'دليل تطوير السوق الزراعي');

  // Slide 2: نظرة عامة على السوق
  addBulletSlide(pres, 'نظرة عامة على السوق', [
    'السكان: حوالي 36 مليون نسمة',
    'القطاع الزراعي: 2-3% من الناتج المحلي الإجمالي',
    'التمويل الزراعي: معتمد على ثروة النفط والدعم الحكومي',
    'الأهداف: الأمن الغذائي والمستدامة البيئية',
    'رؤية 2030: التحديث والتنويع الاقتصادي'
  ]);

  // Slide 3: المحاصيل الرئيسية
  addBulletSlide(pres, 'المحاصيل الرئيسية', [
    'القمح: محصول استراتيجي، الأمن الغذائي',
    'التمر: محصول تقليدي، 150+ نوع محلي',
    'الخضروات: إنتاج محلي موسمي وفي الصوب',
    'منتجات الألبان: إنتاج دعوم، تربية الماشية',
    'المحاصيل الحديثة: الزراعة الرأسية والمائية'
  ]);

  // Slide 4: الموارد المائية والتحديات
  addBulletSlide(pres, 'الموارد المائية والتحديات', [
    'ندرة المياه الشديدة: 3,450 ملم/سنة هطول أمطار',
    'استنزاف المياه الجوفية: تراجع 30-40% في العقد الأخير',
    'المياه المحلاة: 50% من احتياجات المياه العذبة',
    'الإجهاد المائي: 94% من إمدادات المياه للزراعة',
    'كفاءة الري: فرص تحسين العائد من المياه'
  ]);

  // Slide 5: المناخ والقيود البيئية
  addBulletSlide(pres, 'المناخ والقيود البيئية', [
    'درجات الحرارة: 50°C+ في الصيف',
    'الرطوبة: منخفضة جداً (10-30% في الصيف)',
    'الرياح: عواصف رملية متكررة',
    'التربة: قلوية، ملحية، فقيرة بالمادة العضوية',
    'الموسمية: نمو محدود خارج الفصول المناسبة'
  ]);

  // Slide 6: التكنولوجيا المناسبة
  addBulletSlide(pres, 'التكنولوجيا المناسبة (1)', [
    'الزراعة المحمية: صوب زجاجية وبلاستيكية',
    'الري بالتنقيط: توفير المياه 30-50%',
    'الزراعة الرأسية: إنتاجية عالية بمساحة صغيرة',
    'الزراعة المائية: نظم بدون تربة',
    'الرصد عن بعد: مراقبة المحاصيل وصحتها'
  ]);

  // Slide 7: التكنولوجيا المناسبة (2)
  addBulletSlide(pres, 'التكنولوجيا المناسبة (2)', [
    'الزراعة الذكية: حساسات، ذكاء اصطناعي، تنبؤات',
    'إدارة التربة: تحسين الخواص الكيميائية والفيزيائية',
    'الطاقة الشمسية: توليد الكهرباء لأنظمة الري',
    'تحلية المياه: تحسين كفاءة إنتاج المياه العذبة',
    'معالجة النفايات: إعادة استخدام المياه والتسميد'
  ]);

  // Slide 8: دراسات الحالة - المناطق الزراعية
  addBulletSlide(pres, 'دراسات الحالة: المناطق الزراعية', [
    'الأحساء: كثافة نخيل التمر والخضروات',
    'الجوف: إنتاج محلي معتمد على الآبار العميقة',
    'القصيم: منطقة زراعية شاملة متعددة المحاصيل',
    'نجران: إنتاج محلي الخصائص المناخية الفريدة',
    'الدلتا المجلة: تجارب حديثة في التكنولوجيا'
  ]);

  // Slide 9: دراسات الحالة - المشاريع التجريبية
  addBulletSlide(pres, 'مشاريع تجريبية ناجحة', [
    'مشروع الصوب الزجاجية: محاصيل عضوية مستدامة',
    'نظم الري الحديثة: توفير المياه وزيادة الإنتاجية',
    'مشاريع إعادة التأهيل: استعادة التربة المالحة',
    'الزراعة الذكية: أتمتة وتحسين المحاصيل',
    'الشراكات الأجنبية: نقل التكنولوجيا والخبرة'
  ]);

  // Slide 10: البيئة التنظيمية
  addBulletSlide(pres, 'البيئة التنظيمية', [
    'رؤية 2030: استراتيجية الأمن الغذائي والمستدامة',
    'وزارة البيئة والمياه والزراعة: إدارة السياسات',
    'اللوائح الزراعية: معايير الجودة والسلامة',
    'المؤسسة العامة للحبوب: توزيع الدعم والشراء',
    'الحوافز الضريبية: تقليل الرسوم للمستثمرين'
  ]);

  // Slide 11: فرص الشراكة والاستثمار
  addBulletSlide(pres, 'فرص الشراكة والاستثمار (1)', [
    'الاستثمار المباشر: قطاع زراعي منظم',
    'نقل التكنولوجيا: شراكات دولية وتعاون بحثي',
    'الصادرات الزراعية: فرص في الأسواق الإقليمية',
    'الزراعة العضوية: طلب متزايد على المنتجات المستدامة',
    'إنشاء مراكز التدريب: تطوير كفاءات العاملين'
  ]);

  // Slide 12: فرص الشراكة والاستثمار (2)
  addBulletSlide(pres, 'فرص الشراكة والاستثمار (2)', [
    'الشراكات العامة-الخاصة (PPP): تطوير البنية التحتية',
    'الأمن الغذائي: ضمان الاكتفاء المحلي',
    'الاستدامة البيئية: تقليل البصمة الكربونية',
    'التصنيع الزراعي: منتجات ذات قيمة مضافة',
    'الأسواق الإقليمية: تصدير المنتجات الزراعية'
  ]);

  // Slide 13: الخلاصة والتوصيات
  addBulletSlide(pres, 'الخلاصة والتوصيات', [
    'الحاجة الماسة: استخدام التكنولوجيا الحديثة',
    'التركيز: كفاءة المياه والاستدامة البيئية',
    'الفرص: شراكات دولية وتطوير الموارد البشرية',
    'التحديات: ندرة المياه والمناخ القاسي',
    'النجاح: رؤية 2030 والالتزام بالأمن الغذائي'
  ]);

  // Slide 14: الشكر والتواصل
  addTitleSlide(pres, 'شكراً لكم', 'للمزيد من المعلومات');

  // Save presentation
  const outputPath = path.join(__dirname, '../public/documents/countries/arabie-saoudite.pptx');
  const outputDir = path.dirname(outputPath);

  // Create directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  pres.writeFile({ fileName: outputPath });
  console.log(`✓ PPTX created: ${outputPath}`);

} catch (error) {
  console.error('Error creating presentation:', error);
  process.exit(1);
}
