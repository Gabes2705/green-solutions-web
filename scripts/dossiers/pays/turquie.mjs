export default {
  slug: "turquie",
  fichier: "turquie",
  palette: "plaine",
  locale: "tr-TR",
  langue: "Türkçe",
  pied: "Green Solutions · Türkiye pazar dosyası",

  cover: {
    eyebrow: "PAZAR DOSYASI",
    title: "Türkiye",
    officiel: "TÜRKİYE CUMHURİYETİ",
    lieu: "Ankara",
    marques: "EVERGREEN® · ECOSORB® · ECOFERT® · PAULOWNIA",
    mention: "Gizli belge · Yalnızca alıcının kullanımı içindir",
    subtitle:
      "Ovalar, meyve bahçeleri ve büyük sulama projeleri: Çekilen suyun yüzde 87'si tarıma gidiyor.\nHer sulamada suyu kök bölgesinde tutmanın sağladıkları.",
    footer: "Green Solutions · contact@green-solutions-group.com",
    photo: 0,
  },

  chiffres: {
    kicker: "KISACA PAZAR",
    title: "Suyun büyük kısmını kullanan bir tarım ülkesi",
    items: [
      { value: "85,9 milyon", label: "2025'te nüfus (Dünya Bankası)" },
      { value: "4,91 milyon ha", label: "2024'te fiilen sulanan alan; sulama için donatılmış alan 7,20 milyon ha (FAOSTAT)" },
      { value: "56,0 km³", label: "2022'de tarımın çektiği su, toplam çekimlerin %86,9'u (Dünya Bankası)" },
      { value: "30,7 milyar $", label: "2024'te tarım ürünleri ihracatı; ithalat 23,1 milyar $ (FAOSTAT)" },
    ],
    note:
      "Buğday 6,93 milyon hektarla ekim alanında ilk sıradadır ve neredeyse tamamen yağmura bağlıdır. DSİ'ye göre teknik ve ekonomik olarak sulanabilir alan 8,5 milyon hektardır.",
  },

  contrainte: {
    kicker: "KISIT",
    title: "Orta Anadolu'dan Güneydoğu'ya: Az yağış, yüksek buharlaşma",
    photo: 1,
    caption: "Harran Ovası'nda sulama kanalı, Şanlıurfa",
    bullets: [
      "Konya'ya yılda 299 mm yağış düşer; referans evapotranspirasyon ise 1 328 mm'dir (ERA5, 1991-2020).",
      "Şanlıurfa'da su açığı yılda 1 181 mm'ye ulaşır; Harran Ovası GAP kapsamında Fırat'tan sulanır.",
      "Tarım, 2022'de çekilen 64,5 km³ tatlı suyun %86,9'unu kullandı (Dünya Bankası).",
      "Konya'da yıllık ortalama sıcaklık 1981-1990'da 11,7 °C iken 2015-2024'te 13,3 °C oldu.",
      "Su stresi %47,9'dur: Kullanılabilir yenilenebilir kaynakların neredeyse yarısı çekilmektedir.",
    ],
  },

  usages: {
    kicker: "SU NEREYE GİDİYOR",
    title: "Çekilen suyun büyük kısmı tarıma gidiyor",
    type: "doughnut",
    data: [
      {
        name: "Tatlı su çekimleri",
        labels: ["Tarım", "Evler ve şehirler", "Sanayi"],
        values: [87, 11, 2],
      },
    ],
    opts: { showLegend: true, showValue: true, dataLabelFormatCode: '0"%"', holeSize: 55 },
    reading: {
      head: "Bunun anlamı",
      body:
        "Dünya Bankası'na göre 2022'de toplam çekim 64,5 km³, tarımsal çekim 56,0 km³'tür.\n\nFiilen sulanan her hektar yılda ortalama 11 404 m³ su kullanır: Tarlada tasarruf edilen her metreküp, yeni bir alanın sulanmasına yarayabilir.",
    },
  },

  productions: {
    kicker: "SEKİZ BÖLGE",
    title: "Yağış bölgeden bölgeye neredeyse üç kat değişiyor",
    type: "bar",
    data: [
      {
        name: "Yağış (yılda mm, 1991-2020 ortalaması)",
        labels: ["Bursa", "Samsun", "Adana", "Manisa", "Erzurum", "Edirne", "Şanlıurfa", "Konya"],
        values: [861, 856, 718, 698, 624, 540, 491, 299],
      },
    ],
    opts: { barDir: "col", dataLabelFormatCode: "0", showLegend: false },
    reading: {
      head: "Okuma",
      body:
        "Her bölgenin referans şehrindeki yağış, ERA5 iklim yeniden analizine göre.\n\nKonya ve Şanlıurfa'da hava, düşen yağıştan yılda 1 000 mm'den fazla su ister.",
    },
  },

  solutions: {
    kicker: "ÇÖZÜMÜMÜZ",
    title: "Suyu tutmak, toprağı yormadan beslemek",
    left: {
      head: "EVERGREEN® — suyu tutmak",
      lines: [
        "Potasyum bazlı su tutucu; dikimde ya da ekimde kök bölgesine yerleştirilir.",
        "Sulama ya da yağmur suyunu yakalar ve kademeli olarak geri verir; sulamalar arasındaki süre uzar.",
        "Ağırlığının yaklaşık 300 katı su emer; toprakta 3 ila 4 yıl etkili kalır.",
        "Yılda %20 ila 25 oranında bozunur; birikme ya da aşırı dozaj riski yoktur.",
      ],
    },
    right: {
      head: "ECOFERT® — toprağı yormadan beslemek",
      lines: [
        "Amino asit, azot, fosfor ve potasyum içeren, yenilenebilir kaynaklı mikro dozlu gübre.",
        "Şelat yapıcı değildir: Kil-humus kompleksini yoksullaştırmaz ve sulama suyuna tuz eklemez.",
        "SOHISCERT ve AB Organik sertifikalı, 60 ülkede kullanılıyor.",
        "Hektar başına 140 ml'lik 1 ila 4 şişe; pülverizatörle ya da gübreli sulamayla uygulanır.",
      ],
    },
    note:
      "İki ürün ayrı ayrı satılır ama birbirini güçlendirecek şekilde tasarlanmıştır: Su tutucu suyun kullanılabilirliğini uzatır, gübre bu sudan en iyi şekilde yararlanır.",
  },

  economies: {
    kicker: "BÜYÜKLÜK SIRALARI",
    title: "Yılda tasarruf edilen tarımsal su (milyon m³)",
    type: "bar",
    data: [
      {
        name: "Milyon m³",
        labels: ["İhtiyatlı senaryo", "Merkezi senaryo", "Yüksek senaryo"],
        values: [4313, 8626, 17252],
      },
    ],
    opts: { barDir: "col", dataLabelFormatCode: "0", showLegend: false },
    reading: {
      head: "Nasıl hesaplandı",
      body:
        "Tarımsal su yılda 56,0 km³, fiilen sulanan alan 4,91 milyon hektardır. Her bitki grubu, kendisi için yayımlanmış denemenin etkisini alır: Merkezi senaryoda yarısını, ihtiyatlı senaryoda dörtte birini, yüksek senaryoda tamamını. Denemesi olmayan gruplar için %5, %10 ve %20 varsayılır.\n\nMerkezi senaryoda yılda 8,63 milyar m³ tasarruf edilir: Aynı suyla yaklaşık 756 000 hektar daha sulanabilir.",
    },
  },

  regions: {
    kicker: "ÖNCELİKLİ ÜÇ ALAN",
    title: "İlk denemeler nerede yapılmalı",
    items: [
      {
        photo: 4,
        head: "Konya ve İç Anadolu",
        metric: "Yılda 299 mm yağış",
        lines: [
          "Ülkenin tahıl ambarı; şeker pancarı ve mısır, yoğun kullanılan yeraltı sularıyla sulanır.",
          "EVERGREEN® mısır denemesi 2025'te Konya'daki TİGEM işletmesinde yapıldı: Sulama %38,9 azaldı, verim %17,1 arttı.",
          "Sıcaklık 1981'den bu yana on yılda 0,50 °C artıyor.",
        ],
      },
      {
        photo: 5,
        head: "Çukurova (Adana)",
        metric: "Yılda 615 mm su açığı",
        lines: [
          "Mısır, pamuk, narenciye, sebze ve ikinci ürün olarak soya.",
          "Geniş bir sulu tarım ovası; Akdeniz kıyısındaki seralar da yakındadır.",
          "Sebze ve kavunlar, merkezi senaryoda tasarruf edilen suyun en büyük payını verir: Yılda 2 524 milyon m³.",
        ],
      },
      {
        photo: 6,
        head: "Harran Ovası (Şanlıurfa)",
        metric: "Yılda 1 181 mm su açığı",
        lines: [
          "GAP kapsamında Fırat'tan sulanan ova: Pamuk, mısır, buğday, yer fıstığı.",
          "İncelenen sekiz referans şehir arasında en büyük su açığı burada; sıcaklık on yılda 0,51 °C artıyor.",
          "Kök bölgesinde tutulan her sulama suyu, kanal suyunun daha geniş bir alana yetmesini sağlar.",
        ],
      },
    ],
  },

  deploiement: {
    kicker: "NASIL ÇALIŞIYORUZ",
    title: "Her aşamada ölçülen, adım adım bir uygulama",
    items: [
      { head: "Teşhis", body: "Toprak, sulama suyu ve bitki analizi. Bu aşamada hiçbir taahhüt yok." },
      { head: "Tanık parsel", body: "Aynı şekilde yönetilen tanık parselli, karşılaştırmalı bir deneme." },
      { head: "Ölçüm", body: "Sıcak mevsim dahil tam bir sezon boyunca su tüketimi ve verim ölçümleri." },
      { head: "Yaygınlaştırma", body: "Elde edilen sonuçlara göre diğer parsellere kademeli yaygınlaştırma." },
    ],
    note:
      "Dozaj kuralı her yerde aynıdır: Faydalı toprağın litresi başına 3 gram. Araziden araziye değişen, köklerin gerçekten kullandığı toprak hacmidir.",
  },

  risques: {
    kicker: "ÖNCEDEN BİLİNMESİ GEREKENLER",
    title: "Belirlenen riskler ve yanıtlar",
    left: {
      head: "Riskler",
      lines: [
        "Toprak düzenleyiciler ve gübreler, satıştan önce Tarım ve Orman Bakanlığı'ndan (BÜGEM) ithalat izni ve tescil belgesi gerektirir.",
        "Koşullar bölgeden bölgeye çok farklıdır: Bir denemenin sonucu tüm ülkeye genellenemez.",
        "Türkiye'de şimdiye kadar tek bir deneme yapıldı: Konya'da mısır.",
        "İhracata yönelik zincirlerde alıcıların kendi girdi kuralları vardır.",
      ],
    },
    right: {
      head: "Yanıtlar",
      lines: [
        "Tescil dosyasını erken hazırlamak: TSE analizi, etiket örneği, sertifikalar.",
        "Her bölgede tanık parselli bir deneme yürütmek.",
        "Konya denemesini sebze, pamuk ve meyve bahçelerinde tekrarlamak.",
        "ECOFERT®'in AB Organik sertifikasını ihracat zincirlerine sunmak.",
      ],
    },
    note:
      "Akrilamid analizi (Polymex laboratuvarı, ISO 9001, 3,0 µg/g'ın altında) ve REACH / SVHC taraması (SGS) talep üzerine sunulur; SOHISCERT sertifikası 4 Eylül 2027'ye kadar geçerlidir.",
  },

  closing: {
    photo: 7,
    title: "Bize parselinizi anlatın",
    body:
      "Ürün, sulama yöntemi, toprak yapısı, bugün kullanılan su miktarı. Size uygun teknoloji kombinasyonu, dozajlar ve benzer koşullarda yapılmış denemelerle geri döneriz.\n\nİlk görüşme hiçbir taahhüt gerektirmez.",
    contact: "contact@green-solutions-group.com · Green Solutions Groupe AIM SA, 46, route de la Condémine, 1475 Forel, İsviçre",
  },
};
