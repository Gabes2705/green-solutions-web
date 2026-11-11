// Türkiye dosyasını tamamlayan sayfalar: Ekonomi, iki zincir, kaynaklar.
export default {
  /* Un dossier complet par langue, qui remplace le PDF de présentation. */
  telechargements: [
    { langue: "en", fichier: "turquie-en" },
    { langue: "fr", fichier: "turquie-fr" },
  ],

  paysTitre: "Türkiye",
  partenariat: false,

  economie: {
    kicker: "EKONOMİ VE TİCARET",
    title: "Büyük bir tarım ihracatçısı",
    items: [
      { value: "30,7 milyar $", label: "2024'te tarım ürünleri ihracatı (FAOSTAT)" },
      { value: "1 503 M$", label: "Kabuksuz fındık ihracatı, ilk sırada (2024)" },
      { value: "1 766 M$", label: "Soya fasulyesi ithalatı, işleme sanayi için (2024)" },
      { value: "1,95 milyon t", label: "2023'te tarımda kullanılan mineral azot (FAOSTAT)" },
    ],
    note:
      "Türkiye işlenmiş ürün ihraç eder: Fındık, ayçiçek yağı, un, makarna, şekerleme, kuru üzüm. Soya, pamuk lifi, buğday ve ham ayçiçek yağı ithal eder; bunların bir kısmı işlenip yeniden ihraç edilir.",
  },

  filieres: [
    {
      kicker: "ÖNCELİKLİ ZİNCİR",
      title: "Mısır, pamuk ve sulu tarla bitkileri",
      photo: 2,
      bullets: [
        "Mısır 2024'te 789 379 hektarda hasat edildi ve büyük ölçüde sulanır.",
        "Konya'daki TİGEM denemesinde EVERGREEN® sulamayı 864 mm'den 528 mm'ye indirdi, verimi hektar başına 10 300 kg'dan 12 060 kg'a çıkardı.",
        "Merkezi senaryoda mısır yılda 1 756 milyon m³ su tasarrufu sağlar.",
        "Pamuk (466 927 ha) ve şeker pancarı (324 286 ha) da sulu tarımın büyük kullanıcılarıdır.",
      ],
    },
    {
      kicker: "SEBZE VE MEYVE",
      title: "Sebzeler, meyve bahçeleri ve bağlar",
      photo: 3,
      bullets: [
        "Domates, üretim değerinde ilk sıradadır: Sulu ve yüksek verimli bir ürün.",
        "Sebze ve kavunlar, merkezi senaryoda tasarrufun en büyük payını verir: Yılda 2 524 milyon m³.",
        "Meyve bahçeleri ve bağlar 1,14 milyon hektar kaplar; dikimde EVERGREEN® suyu kök bölgesinde tutar.",
        "ECOFERT® AB Organik sertifikalıdır: 173 260 hektarlık sertifikalı organik tarım alanına uygundur (FAOSTAT, 2024).",
      ],
    },
  ],

  sources: [
    "Dünya Bankası (WDI), FAOSTAT (üretim, ticaret, gübre, arazi kullanımı) ve DSİ (sulanabilir alan, 2024).",
    "ERA5 (Copernicus) ve PVGIS: 1991-2020 iklimi ve 1981'den bu yana eğilimler.",
    "Türk Gümrük Tarifesi ve Tarım ve Orman Bakanlığı (BÜGEM): İthalat ve tescil kuralları.",
  ],
};
