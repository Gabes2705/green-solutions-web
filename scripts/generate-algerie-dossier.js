const PptxGenJS = require("pptxgenjs");
const fs = require("fs");
const path = require("path");

// Create presentation
const prs = new PptxGenJS();

// Set presentation properties
prs.defineLayout({ name: "LAYOUT1", width: 10, height: 7.5 });
prs.layout = "LAYOUT1";

// Define colors for the presentation
const colors = {
  darkGreen: "1a5f3e",
  lightGreen: "4a9d6f",
  cyan: "00e5ff",
  darkBlue: "0d3b66",
  lightBlue: "4a90e2",
  white: "ffffff",
  darkText: "1a1a1a",
  lightText: "f5f5f5"
};

// Helper function for Arabic text (RTL)
function addArabicText(slide, text, options = {}) {
  return slide.addText(text, {
    dir: "rtl",
    ...options
  });
}

// Slide 1: Title Slide
function createTitleSlide() {
  const slide = prs.addSlide();

  // Background
  slide.background = { color: colors.darkGreen };

  // Main title - Arabic
  addArabicText(slide, "تقرير تطوير السوق الجزائري", {
    x: 0.5, y: 2.5, w: 9, h: 1,
    fontSize: 54,
    bold: true,
    color: colors.cyan,
    align: "right"
  });

  // Subtitle
  addArabicText(slide, "الزراعة والمياه والتكنولوجيا الخضراء", {
    x: 0.5, y: 3.7, w: 9, h: 0.6,
    fontSize: 28,
    color: colors.white,
    align: "right"
  });

  // Footer
  addArabicText(slide, "2024", {
    x: 0.5, y: 6.8, w: 9, h: 0.4,
    fontSize: 14,
    color: colors.lightText,
    align: "right"
  });
}

// Slide 2: Market Overview
function createMarketOverviewSlide() {
  const slide = prs.addSlide();
  slide.background = { color: colors.white };

  // Title
  addArabicText(slide, "نظرة عامة على السوق الجزائري", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 40,
    bold: true,
    color: colors.darkGreen,
    align: "right"
  });

  // Divider line
  slide.addShape(prs.ShapeType.rect, {
    x: 0.5, y: 1, w: 9, h: 0.05,
    fill: { color: colors.cyan }
  });

  // Key facts
  const facts = [
    "🌍 المساحة: 2.38 مليون كم²",
    "👥 السكان: 44 مليون نسمة",
    "📊 الناتج المحلي: يعتمد على النفط والزراعة",
    "🌾 الزراعة: 10-12% من الناتج المحلي",
    "💧 التحديات: شح المياه والجفاف"
  ];

  let yPos = 1.5;
  facts.forEach(fact => {
    addArabicText(slide, fact, {
      x: 1, y: yPos, w: 8.5, h: 0.35,
      fontSize: 16,
      color: colors.darkText,
      align: "right"
    });
    yPos += 0.5;
  });
}

// Slide 3: Climate & Water Scarcity
function createClimateSlide() {
  const slide = prs.addSlide();
  slide.background = { color: colors.white };

  addArabicText(slide, "المناخ والتحديات المائية", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 40,
    bold: true,
    color: colors.darkGreen,
    align: "right"
  });

  slide.addShape(prs.ShapeType.rect, {
    x: 0.5, y: 1, w: 9, h: 0.05,
    fill: { color: colors.cyan }
  });

  const challenges = [
    "الصحراء الكبرى تغطي 80% من الأراضي",
    "هطول الأمطار السنوي: 100-400 ملم",
    "معدل التبخر العالي جداً",
    "نقص موارد المياه الجوفية",
    "تأثر المناطق الساحلية والشمالية أقل"
  ];

  let yPos = 1.5;
  challenges.forEach(challenge => {
    addArabicText(slide, challenge, {
      x: 1, y: yPos, w: 8.5, h: 0.35,
      fontSize: 16,
      color: colors.darkText,
      align: "right"
    });
    yPos += 0.5;
  });
}

// Slide 4: Agricultural Sectors
function createAgricultureSlide() {
  const slide = prs.addSlide();
  slide.background = { color: colors.white };

  addArabicText(slide, "القطاعات الزراعية الرئيسية", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 40,
    bold: true,
    color: colors.darkGreen,
    align: "right"
  });

  slide.addShape(prs.ShapeType.rect, {
    x: 0.5, y: 1, w: 9, h: 0.05,
    fill: { color: colors.cyan }
  });

  // Crop sections
  const crops = [
    { name: "القمح", area: "1.5 مليون هكتار", production: "2.5-4 مليون طن" },
    { name: "الشعير", area: "2 مليون هكتار", production: "1-2 مليون طن" },
    { name: "الزيتون", area: "500,000 هكتار", production: "500,000 طن" },
    { name: "التمر", area: "120,000 هكتار", production: "900,000 طن" }
  ];

  let yPos = 1.5;
  crops.forEach(crop => {
    addArabicText(slide, crop.name, {
      x: 8, y: yPos, w: 1.5, h: 0.3,
      fontSize: 14,
      bold: true,
      color: colors.darkGreen,
      align: "right"
    });

    addArabicText(slide, `${crop.area} | ${crop.production}`, {
      x: 1, y: yPos, w: 6.8, h: 0.3,
      fontSize: 13,
      color: colors.darkText,
      align: "right"
    });

    yPos += 0.6;
  });
}

// Slide 5: Water Usage Patterns
function createWaterUsageSlide() {
  const slide = prs.addSlide();
  slide.background = { color: colors.white };

  addArabicText(slide, "أنماط استخدام المياه", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 40,
    bold: true,
    color: colors.darkGreen,
    align: "right"
  });

  slide.addShape(prs.ShapeType.rect, {
    x: 0.5, y: 1, w: 9, h: 0.05,
    fill: { color: colors.cyan }
  });

  // Water usage breakdown
  const usages = [
    { sector: "الزراعة", percentage: "84%", details: "استخدام الري التقليدي" },
    { sector: "الصناعة", percentage: "8%", details: "استخدام محدود في المناطق الساحلية" },
    { sector: "الاستخدام المنزلي", percentage: "8%", details: "توزيع متفاوت حسب المنطقة" }
  ];

  let yPos = 1.5;
  usages.forEach(usage => {
    addArabicText(slide, usage.sector, {
      x: 8.5, y: yPos, w: 1.2, h: 0.3,
      fontSize: 14,
      bold: true,
      color: colors.darkGreen,
      align: "right"
    });

    addArabicText(slide, usage.percentage, {
      x: 7.5, y: yPos + 0.35, w: 0.8, h: 0.3,
      fontSize: 16,
      bold: true,
      color: colors.lightGreen,
      align: "right"
    });

    addArabicText(slide, usage.details, {
      x: 1, y: yPos, w: 6.3, h: 0.65,
      fontSize: 12,
      color: colors.darkText,
      align: "right"
    });

    yPos += 1;
  });
}

// Slide 6: Irrigation Infrastructure
function createIrrigationSlide() {
  const slide = prs.addSlide();
  slide.background = { color: colors.white };

  addArabicText(slide, "البنية التحتية للري", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 40,
    bold: true,
    color: colors.darkGreen,
    align: "right"
  });

  slide.addShape(prs.ShapeType.rect, {
    x: 0.5, y: 1, w: 9, h: 0.05,
    fill: { color: colors.cyan }
  });

  const infrastructure = [
    "السدود: 76 سد رئيسي بطاقة تخزين 13 مليار م³",
    "الآبار الارتوازية: 25,000 بئر في الصحراء",
    "الري بالتنقيط: ينتشر في الواحات وشرق الولايات",
    "شبكات الري التقليدية: لا تزال سائدة في المناطق الشمالية",
    "محطات معالجة المياه: في التطور والتحديث"
  ];

  let yPos = 1.5;
  infrastructure.forEach(item => {
    addArabicText(slide, item, {
      x: 1, y: yPos, w: 8.5, h: 0.35,
      fontSize: 15,
      color: colors.darkText,
      align: "right"
    });
    yPos += 0.5;
  });
}

// Slide 7: Sahel Region Challenges
function createSahelSlide() {
  const slide = prs.addSlide();
  slide.background = { color: colors.white };

  addArabicText(slide, "تحديات منطقة الساحل", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 40,
    bold: true,
    color: colors.darkGreen,
    align: "right"
  });

  slide.addShape(prs.ShapeType.rect, {
    x: 0.5, y: 1, w: 9, h: 0.05,
    fill: { color: colors.cyan }
  });

  const challenges = [
    "التصحر المتسارع والزحف الصحراوي",
    "تدهور التربة وفقدان الخصوبة",
    "الإجهاد المائي الشديد",
    "الفقر والبطالة الريفية المرتفعة",
    "الهجرة القسرية من المناطق الحدودية"
  ];

  let yPos = 1.5;
  challenges.forEach(challenge => {
    addArabicText(slide, challenge, {
      x: 1, y: yPos, w: 8.5, h: 0.35,
      fontSize: 16,
      color: colors.darkText,
      align: "right"
    });
    yPos += 0.5;
  });
}

// Slide 8: Green Technology Fit
function createTechnologySlide() {
  const slide = prs.addSlide();
  slide.background = { color: colors.white };

  addArabicText(slide, "توافق التكنولوجيا الخضراء", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 40,
    bold: true,
    color: colors.darkGreen,
    align: "right"
  });

  slide.addShape(prs.ShapeType.rect, {
    x: 0.5, y: 1, w: 9, h: 0.05,
    fill: { color: colors.cyan }
  });

  const technologies = [
    { tech: "الطاقة الشمسية", fit: "ممتاز - 2500+ ساعة شمس سنوياً" },
    { tech: "الري الذكي", fit: "حرج - توفير 30-40% من المياه" },
    { tech: "إدارة التربة", fit: "مهم - استعادة الخصوبة والكربون" },
    { tech: "الزراعة الدقيقة", fit: "واعد - تحسين الغلة 20-25%" },
    { tech: "حصاد المياه", fit: "ضروري - أنظمة الخزانات الصغيرة" }
  ];

  let yPos = 1.5;
  technologies.forEach(tech => {
    addArabicText(slide, tech.tech, {
      x: 8.5, y: yPos, w: 1.2, h: 0.3,
      fontSize: 13,
      bold: true,
      color: colors.darkGreen,
      align: "right"
    });

    addArabicText(slide, tech.fit, {
      x: 1, y: yPos, w: 7.3, h: 0.3,
      fontSize: 12,
      color: colors.darkText,
      align: "right"
    });

    yPos += 0.5;
  });
}

// Slide 9: Case Study 1 - Drip Irrigation Success
function createCaseStudy1Slide() {
  const slide = prs.addSlide();
  slide.background = { color: colors.white };

  addArabicText(slide, "دراسة حالة: نجاح الري بالتنقيط في الواحات", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 38,
    bold: true,
    color: colors.darkGreen,
    align: "right"
  });

  slide.addShape(prs.ShapeType.rect, {
    x: 0.5, y: 1, w: 9, h: 0.05,
    fill: { color: colors.cyan }
  });

  addArabicText(slide, "بسكرة وأدرار - منطقة واحات التمر", {
    x: 0.5, y: 1.2, w: 9, h: 0.3,
    fontSize: 16,
    bold: true,
    color: colors.lightGreen,
    align: "right"
  });

  const results = [
    "توفير المياه: 35% انخفاض استهلاك المياه",
    "زيادة الإنتاج: 40% زيادة في محصول التمر",
    "تحسين الدخل: مدخول الفلاح ارتفع 50%",
    "المستدامة: الأرض تحتفظ بخصوبتها",
    "التكرار: 15,000 هكتار الآن بالري المحسّن"
  ];

  let yPos = 1.7;
  results.forEach(result => {
    addArabicText(slide, result, {
      x: 1, y: yPos, w: 8.5, h: 0.3,
      fontSize: 14,
      color: colors.darkText,
      align: "right"
    });
    yPos += 0.45;
  });
}

// Slide 10: Case Study 2 - Solar-Powered Irrigation
function createCaseStudy2Slide() {
  const slide = prs.addSlide();
  slide.background = { color: colors.white };

  addArabicText(slide, "دراسة حالة: الري بالطاقة الشمسية", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 38,
    bold: true,
    color: colors.darkGreen,
    align: "right"
  });

  slide.addShape(prs.ShapeType.rect, {
    x: 0.5, y: 1, w: 9, h: 0.05,
    fill: { color: colors.cyan }
  });

  addArabicText(slide, "غرداية والمنطقة الوسطى", {
    x: 0.5, y: 1.2, w: 9, h: 0.3,
    fontSize: 16,
    bold: true,
    color: colors.lightGreen,
    align: "right"
  });

  const results = [
    "الطاقة: أنظمة بطاريات شمسية بـ 50 كيلوواط",
    "التوفير: انخفاض تكاليف الكهرباء بـ 80%",
    "الاستقلالية: حرية من الشبكة الكهربائية",
    "البيئة: خفض الانبعاثات بـ 100 طن CO₂/السنة",
    "التوسع: 50 موقع تشغيلي الآن و100 مخطط"
  ];

  let yPos = 1.7;
  results.forEach(result => {
    addArabicText(slide, result, {
      x: 1, y: yPos, w: 8.5, h: 0.3,
      fontSize: 14,
      color: colors.darkText,
      align: "right"
    });
    yPos += 0.45;
  });
}

// Slide 11: Regulatory Environment
function createRegulatorySlide() {
  const slide = prs.addSlide();
  slide.background = { color: colors.white };

  addArabicText(slide, "البيئة التنظيمية والدعم الحكومي", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 38,
    bold: true,
    color: colors.darkGreen,
    align: "right"
  });

  slide.addShape(prs.ShapeType.rect, {
    x: 0.5, y: 1, w: 9, h: 0.05,
    fill: { color: colors.cyan }
  });

  const policies = [
    "برنامج التنمية الريفية المستدامة (2020-2030)",
    "دعم حكومي: 50% من تكاليف الري بالتنقيط",
    "إعفاءات ضريبية للتكنولوجيات الخضراء",
    "قروض ميسّرة من البنوك الحكومية",
    "سياسة حماية المياه الجوفية"
  ];

  let yPos = 1.5;
  policies.forEach(policy => {
    addArabicText(slide, policy, {
      x: 1, y: yPos, w: 8.5, h: 0.35,
      fontSize: 15,
      color: colors.darkText,
      align: "right"
    });
    yPos += 0.5;
  });
}

// Slide 12: Partnership Opportunities
function createPartnershipsSlide() {
  const slide = prs.addSlide();
  slide.background = { color: colors.white };

  addArabicText(slide, "فرص الشراكة والاستثمار", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 38,
    bold: true,
    color: colors.darkGreen,
    align: "right"
  });

  slide.addShape(prs.ShapeType.rect, {
    x: 0.5, y: 1, w: 9, h: 0.05,
    fill: { color: colors.cyan }
  });

  const opportunities = [
    "1. تحديث البنية التحتية المائية - 2 مليار دولار",
    "2. تركيب أنظمة الري الذكية - 500 مليون دولار",
    "3. المزارع الشمسية المدمجة - 1 مليار دولار",
    "4. مراكز التدريب والبحث - 200 مليون دولار",
    "5. صادرات المحاصيل العضوية - 300 مليون دولار"
  ];

  let yPos = 1.5;
  opportunities.forEach(opp => {
    addArabicText(slide, opp, {
      x: 1, y: yPos, w: 8.5, h: 0.35,
      fontSize: 14,
      color: colors.darkText,
      align: "right"
    });
    yPos += 0.45;
  });
}

// Slide 13: Implementation Roadmap
function createRoadmapSlide() {
  const slide = prs.addSlide();
  slide.background = { color: colors.white };

  addArabicText(slide, "خريطة الطريق للتنفيذ", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 38,
    bold: true,
    color: colors.darkGreen,
    align: "right"
  });

  slide.addShape(prs.ShapeType.rect, {
    x: 0.5, y: 1, w: 9, h: 0.05,
    fill: { color: colors.cyan }
  });

  const roadmap = [
    { phase: "المرحلة الأولى (2024-2025)", tasks: "الدراسات والتخطيط وتحديد الأولويات" },
    { phase: "المرحلة الثانية (2025-2027)", tasks: "تركيب أولي في 5 واحات رئيسية" },
    { phase: "المرحلة الثالثة (2027-2030)", tasks: "التوسع إلى 25 منطقة وتدريب الفلاحين" }
  ];

  let yPos = 1.5;
  roadmap.forEach(item => {
    addArabicText(slide, item.phase, {
      x: 8.5, y: yPos, w: 1.2, h: 0.3,
      fontSize: 13,
      bold: true,
      color: colors.darkGreen,
      align: "right"
    });

    addArabicText(slide, item.tasks, {
      x: 1, y: yPos, w: 7.3, h: 0.3,
      fontSize: 13,
      color: colors.darkText,
      align: "right"
    });

    yPos += 0.6;
  });
}

// Slide 14: Conclusion & Key Takeaways
function createConclusionSlide() {
  const slide = prs.addSlide();
  slide.background = { color: colors.darkGreen };

  addArabicText(slide, "الخلاصة والنقاط الأساسية", {
    x: 0.5, y: 0.5, w: 9, h: 0.6,
    fontSize: 40,
    bold: true,
    color: colors.cyan,
    align: "right"
  });

  const conclusions = [
    "الجزائر تملك إمكانيات زراعية هائلة غير مستغلة",
    "التكنولوجيا الخضراء حل حقيقي لأزمة المياه",
    "نماذج ناجحة تثبت فعالية الحل والعائد الاستثماري",
    "الدعم الحكومي والشراكات الخاصة ضرورية للنجاح",
    "الفرص الاستثمارية كبيرة والعودة مضمونة"
  ];

  let yPos = 1.5;
  conclusions.forEach(conclusion => {
    addArabicText(slide, conclusion, {
      x: 1, y: yPos, w: 8.5, h: 0.3,
      fontSize: 15,
      color: colors.white,
      align: "right"
    });
    yPos += 0.45;
  });

  // Contact/Footer
  addArabicText(slide, "تم إعداد هذا التقرير: 2024", {
    x: 0.5, y: 6.8, w: 9, h: 0.3,
    fontSize: 12,
    color: colors.lightText,
    align: "right"
  });
}

// Create all slides
createTitleSlide();
createMarketOverviewSlide();
createClimateSlide();
createAgricultureSlide();
createWaterUsageSlide();
createIrrigationSlide();
createSahelSlide();
createTechnologySlide();
createCaseStudy1Slide();
createCaseStudy2Slide();
createRegulatorySlide();
createPartnershipsSlide();
createRoadmapSlide();
createConclusionSlide();

// Save as PPTX
const outputPath = process.argv[2] || path.join(__dirname, "../public/documents/countries/algerie.pptx");
prs.writeFile({ fileName: outputPath });

console.log(`✓ Presentation saved to ${outputPath}`);
console.log(`✓ Total slides: 14`);
console.log(`✓ Language: Modern Standard Arabic (MSA) - RTL formatted`);
