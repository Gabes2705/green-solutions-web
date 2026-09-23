import type { Traduction } from "./types";

/** Les essais de terrain en turc. */
export const tr: Traduction = {
  habillage: {
    retour: "← Tüm denemeler",
    tousLesEssais: "Tüm denemeleri gör →",
    lireRapport: "Tam raporu oku (PDF)",
    resultatsEyebrow: "Sonuçlar",
    resultatsTitre: "Denemenin ölçtükleri",
    imagesEyebrow: "Görsellerle",
    imagesTitre: "Öncesi ve sonrası: ölçülen fark",
    mecaniqueEyebrow: "Nasıl çalışır",
    mecaniqueTitre: "Su, bitkinin ihtiyaç duyduğu yerde kalır",
    mecaniqueTexte:
      "Köklerin yakınında toprağa karıştırılan hidro-tutucu, her sulamada ve her yağmurda suyla dolar; su buharlaşıp gitmez, derine de sızmaz. Sonra bu suyu bitkiye gün be gün geri verir. Daha seyrek sulanır ve bitki iki sulama arasında susuz kalmaz.",
    ficheEyebrow: "Deneme künyesi",
    ficheTitre: "Nerede, ne zaman, kim tarafından",
    culture: "Ürün",
    lieu: "Yer",
    periode: "Dönem",
    conduitPar: "Yürüten",
    produits: "Ürünler",
    methodeEyebrow: "Yöntem",
    methodeTitre: "Deneme nasıl yapıldı",
    observationsEyebrow: "Gözlemler",
    observationsTitre: "Akılda kalanlar",
    autresEyebrow: "Diğer denemeler",
    autresTitre: "Aynı ürünler, başka bitkilerde",
    hubEyebrow: "Tarla denemeleri",
    hubTitre: "Daha az su, daha çok hasat: ölçülen sonuçlar",
    hubChapeau:
      "Üniversiteler, araştırma merkezleri ve çiftlikler EVERGREEN hidro-tutucusunu tek başına ya da ECOFERT gübresiyle birlikte, yedi üründe ve altı ülkede denedi. Her sayfa raporun rakamlarını verir ve tam belgeye bağlanır.",
    hubPrincipe:
      "İlke her yerde aynı: hidro-tutucu suyu köklerin yanında tutar ve bitkiye azar azar geri verir. Ürüne ve iklime göre denemeler %82'ye varan su tasarrufu ve %93'e varan hasat artışı ölçüyor.",
    hubTermines: "Tamamlanan denemeler",
    hubEnCours: "Üniversitelerle süren denemeler",
    hubGuides: "Rehberlerimiz",
    hubCreditPhoto: "Başlık fotoğrafı:",
    guideProduit: "Ürün sayfasına git",
    guidePreuvesEyebrow: "Tarladan kanıtlar",
    guidePreuvesTitre: "Bunu ölçen denemeler",
    guideResultatsEyebrow: "Tarla sonuçları",
    guideResultatsTitre: "Denemelerin ölçtükleri",
    guideComparaisonEyebrow: "Karşılaştırma",
    guideFaqEyebrow: "Sık sorulanlar",
    guideFaqTitre: "Bize en çok sorulanlar",
    guideOui: "Evet",
    guideNon: "Hayır",
    guideCritere: "Ölçüt",
  },
  essais: {
    "palmiers-dattiers-emirats-icba": {
      titre: "Birleşik Arap Emirlikleri'nde hurma: %82 daha az sulama suyu",
      description:
        "ICBA'nın Dubai'de 27 hurma ağacında kumlu toprakta yürüttüğü EVERGREEN denemesi: %82 sulama suyu tasarrufu ve %20 daha fazla hurma.",
      culture: "Hurma ağacı",
      lieu: "ICBA araştırma istasyonu, Dubai",
      pays: "Birleşik Arap Emirlikleri",
      periode: "2020-2021 sezonu",
      conduit: "ICBA — International Center for Biosaline Agriculture",
      produits: "EVERGREEN (hidro-tutucu)",
      chapeau:
        "Emirlikler'de yılda yaklaşık 50 mm yağmur düşer ve tarımın neredeyse tamamı sulamaya bağlıdır. ICBA, EVERGREEN'i açık tarlada, kumlu ve tuzlu toprakta, yaklaşık 8 yaşındaki hurma ağaçlarında denedi.",
      resultats: [
        "sezon boyunca sulama suyu",
        "son 7 ayda su, ağaçlarda stres olmadan",
        "ağaç başına 300 g ile daha fazla hurma",
        "uygulanan ağaçların sulama sıklığı",
      ],
      protocole: [
        "ICBA araştırma istasyonunda 8 × 8 m aralıkla dikilmiş 27 hurma ağacı.",
        "Sezon başında toprağın ilk 50 cm'sine karıştırılan EVERGREEN, ağaç başına birkaç dozda (300 g, 500 g ve 1000 g dahil).",
        "Toprak nemini gerçek zamanlı ölçen sondalarla yönetilen sulama.",
        "EVERGREEN'siz kontrol ağaçlarıyla karşılaştırma.",
      ],
      constats: [
        "Uygulanan ağaçlar sezon boyunca hiçbir kuraklık ya da zarar belirtisi göstermedi.",
        "Topraktaki yarayışlı besin maddeleri EVERGREEN ile belirgin biçimde daha yüksek: su ve mineraller derine sızmak yerine kök bölgesinde kalıyor.",
        "Toprağın biyolojik etkinliği (solunum ve mikrobiyal biyokütle) artıyor.",
        "ICBA, tarla koşullarında elde edilen tüm sonuçları doğruluyor.",
      ],
      graphiques: [
        {
          titre: "Sezon boyunca sulama suyu (endeks, kontrol = 100)",
          barres: ["EVERGREEN'siz", "EVERGREEN'li"],
        },
        { titre: "Hurma verimi (endeks, kontrol = 100)", barres: ["EVERGREEN'siz", "Ağaç başına 300 g"] },
      ],
    },
    "pasteques-mexique": {
      titre: "Meksika'da karpuz: %60,5 daha az su ve %30 daha fazla hasat",
      description:
        "Hermosillo'da (Sonora, Meksika) 2600 karpuz bitkisinde 45 °C'de yapılan EVERGREEN denemesi: %60,5 su tasarrufu ve %30 daha yüksek hasat.",
      culture: "Karpuz (Charleston çeşidi)",
      lieu: "Hermosillo, Sonora",
      pays: "Meksika",
      periode: "15 Şubat – 2 Ağustos 2023",
      conduit: "Green Solutions tarla denemesi",
      produits: "EVERGREEN (hidro-tutucu)",
      chapeau:
        "Sonora, Meksika'nın karpuz üretiminde başı çeker, ancak 2023'te kuraklıktan ağır darbe aldı. Deneme, günlerin ortalama 45 °C olduğu çok kurak bir bölgede EVERGREEN'in sağladığı su tasarrufunu ölçecekti.",
      resultats: [
        "sulama suyu",
        "%100 sulanan parsele göre daha fazla hasat",
        "meyvelerde ortalama şeker oranı",
        "bitki başına EVERGREEN",
      ],
      protocole: [
        "2600 karpuz bitkisi.",
        "EVERGREEN'siz kontrol parseli, %100 sulanmış.",
        "Bitki başına 5 g EVERGREEN uygulanan parsel (alışılmış 3 g öneriden 2 g fazla).",
      ],
      constats: [
        "Kurak toprakta, aşırı sıcak ve kuru iklim.",
        "Doz, toprak tipine (killi, kumlu, taşlı, kireçli) ve sulama biçimine (kuyu, damla, yağmur) bağlıdır.",
        "Bir diğer yöntem: çeşide göre metre başına 15-20 g EVERGREEN.",
      ],
      graphiques: [
        { titre: "Sulama suyu (endeks, kontrol = 100)", barres: ["EVERGREEN'siz", "Bitki başına 5 g"] },
        { titre: "Hasat (endeks, kontrol = 100)", barres: ["EVERGREEN'siz", "Bitki başına 5 g"] },
      ],
    },
    "coton-turquie-hatay": {
      titre: "Türkiye'de pamuk: su stresi altında verim neredeyse ikiye katlandı",
      description:
        "2025'te Hatay'da pamukta yapılan EVERGREEN gösterimi: ciddi su kıtlığına rağmen verim 2,53 t/ha'dan 4,88 t/ha'ya (+%93).",
      culture: "Pamuk",
      lieu: "Mistikoğlu Tarım işletmesi, Amik ovası, Hatay",
      pays: "Türkiye",
      periode: "2025 sezonu",
      conduit: "Green Solutions ve Teknik Tarım kooperatifi",
      produits: "EVERGREEN (hidro-tutucu), kök bölgesinin altına enjekte edildi",
      chapeau:
        "Hatay bölgesi kronik su sıkıntısı, aşırı sıcaklar ve 2023 depreminde hasar gören bir sulama şebekesiyle boğuşuyor. Temmuz 2025'te Amik ovası benzeri görülmemiş bir su krizi yaşadı. Deneme orada yapıldı.",
      resultats: [
        "verim: 2,53 t/ha yerine 4,88 t/ha",
        "su verimliliği, en az",
        "brüt gelir (1710 $ yerine 3300 $)",
        "net fayda, ürün ve uygulama düşüldükten sonra",
      ],
      protocole: [
        "EVERGREEN, Green Solutions enjeksiyon aletleriyle ekim için hazırlanan sırtlara, kök bölgesinin altına enjekte edildi.",
        "Karşılaştırılan dozlar: 48, 55, 58 ve 62 kg/ha.",
        "Uygulama yapılmayan kontrol alanıyla karşılaştırma.",
        "Bölgenin olağan sulaması: açık kanallardan salma sulama.",
      ],
      constats: [
        "Uygulama yapılan pamuk, su kıtlığına rağmen daha iyi gelişim ve daha fazla biyokütle korudu.",
        "Fark ilk haftalardan görülüyor; bu dönem pamuğun nihai verimi için belirleyicidir.",
      ],
      graphiques: [
        { titre: "Pamuk verimi (t/ha)", barres: ["Kontrol alanı", "EVERGREEN'li"] },
        { titre: "Brüt gelir (USD/ha)", barres: ["Kontrol alanı", "EVERGREEN'li"] },
      ],
    },
    "mais-turquie-konya": {
      titre: "Türkiye'de mısır: %39 daha az su ve %17 daha fazla verim",
      description:
        "2025'te Konya'da (TIGEM, Türkiye) mısırda yapılan EVERGREEN gösterimi: 864 mm yerine 528 mm sulama ve 10 300 kg/ha yerine 12 060 kg/ha.",
      culture: "Mısır",
      lieu: "TIGEM devlet işletmesi, Konya",
      pays: "Türkiye",
      periode: "Mayıs – Eylül 2025",
      conduit: "Green Solutions ve D.I.S., ölçümler TIGEM sulama biriminden",
      produits: "EVERGREEN hidro-tutucu, ekim sırasının altına uygulandı",
      chapeau:
        "Amaç basitti: daha az suyla aynı ya da daha fazla üretmek. Hidro-tutucu, D.I.S. tarafından geliştirilen makinelerle ekim sırasının hemen altına, belirli bir derinliğe enjekte edildi; ardından uygulanan alanların sulaması bilinçli olarak azaltıldı.",
      resultats: [
        "su: 864 mm yerine 528 mm",
        "verim: 10 300 kg/ha yerine 12 060 kg/ha",
        "su verimliliği: m³ başına 11,9 yerine 22,8 kg mısır",
        "en iyi sonucu veren doz",
      ],
      protocole: [
        "Bir kontrol alanı ve 39, 51 ve 74 kg/ha uygulanan üç alan.",
        "14 ve 15 Mayıs 2025'te, doğrudan ekim sırasının altına uygulama.",
        "Uygulanan alanların sulaması, gelişme dönemlerine göre önce %50, sonra %30 azaltıldı.",
        "16 Eylül 2025'te, karşılaştırılabilir kesimlerde hasat.",
      ],
      constats: [
        "Ölçülen verimler: kontrol 10 300 kg/ha; 39 kg/ha → 11 200 kg/ha; 51 kg/ha → 10 300 kg/ha; 74 kg/ha → 12 060 kg/ha.",
        "Hassasiyet önemli: çok yüzeysel, çok derin ya da ekim sırasından kaymış bir uygulama etkiyi azaltır.",
        "İşletme için %39 daha az su, hektar başına yılda 13 629 TL tasarruf demek.",
      ],
      graphiques: [
        { titre: "4 ayda sulama suyu (mm)", barres: ["Kontrol alanı", "Uygulanan alanlar"] },
        {
          titre: "Doza göre mısır verimi (kg/ha)",
          barres: ["Kontrol", "39 kg/ha", "51 kg/ha", "74 kg/ha"],
        },
      ],
    },
    "canne-a-sucre-indonesie": {
      titre: "Java'da şeker kamışı: EVERGREEN ve ECOFERT ile %55 daha fazla hasat",
      description:
        "Jember Üniversitesi'nin izlediği, Java'da (Endonezya) şeker kamışı denemesi: bitki başına 2,5 g ile %34, 5 g ile %55 daha fazla tonaj ve daha yüksek şeker.",
      culture: "Şeker kamışı (B82.0333 çeşidi)",
      lieu: "Jember, Java",
      pays: "Endonezya",
      periode: "Şubat – Temmuz 2024",
      conduit: "Jember Üniversitesi ve Endonezya şeker kamışı araştırma merkezi",
      produits: "EVERGREEN (hidro-tutucu) ve ECO biyouyarıcı gübre (ECOFERT)",
      chapeau:
        "Deneme killi toprakta üç parseli karşılaştırdı: bir kontrol parseli, bitki başına 2,5 g EVERGREEN verilen bir parsel ve 5 g verilen bir parsel; son ikisi ayrıca ECO biyouyarıcı gübre aldı.",
      resultats: [
        "bitki başına 5 g ile tonaj",
        "bitki başına 2,5 g ile tonaj",
        "hasatta sakaroz oranı (5 g, kontrole karşı)",
        "8. ayda sap boyu, kontrolde 111 cm iken",
      ],
      protocole: [
        "Çeyrek hektarlık üç parsel.",
        "Kamış 3 aylıkken köklerin yakınına gömülen EVERGREEN.",
        "ECO gübresi dikimde, 3 ay sonra ve dikimden 8 ay sonra püskürtüldü.",
        "Hektar başına dozlar: 50 kg EVERGREEN ve 500 ml gübre.",
      ],
      constats: [
        "Toplam tonaj: kontrolde 6950 t, bitki başına 2,5 g ile 9330 t, 5 g ile 10 800 t.",
        "8. ayda sap çapı: kontrolde 2,47 cm, 2,5 g ile 2,78 cm ve 5 g ile 2,88 cm.",
        "Sakaroz oranı: kontrolde 14, 2,5 g ile 16 ve 5 g ile 18.",
      ],
      graphiques: [
        { titre: "Hasat edilen tonaj (t)", barres: ["Kontrol", "Bitki başına 2,5 g", "Bitki başına 5 g"] },
        {
          titre: "Hasatta sakaroz oranı",
          barres: ["Kontrol", "Bitki başına 2,5 g", "Bitki başına 5 g"],
        },
      ],
    },
    "pommes-de-terre-afrique-du-sud": {
      titre: "Güney Afrika'da patates: %31 daha fazla verim, %52 daha az su",
      description:
        "Bloemfontein'de (Güney Afrika) patateste EVERGREEN ve ECOFERT denemesi, 2025-2026: verim 12 t/ha'dan 15,7 t/ha'ya ve %52 su tasarrufu.",
      culture: "Patates (Buffelspoort BP13 çeşidi)",
      lieu: "Bloemfontein",
      pays: "Güney Afrika",
      periode: "Eylül 2025 – Ocak 2026",
      conduit: "Afrinest Farm Group (Tzaneen, Limpopo)",
      produits: "EVERGREEN (hidro-tutucu) ve ECOFERT (organik gübre)",
      chapeau:
        "Bu pilot deneme, topraktaki EVERGREEN ile püskürtülen ECOFERT'in patates verimi ve kalitesi üzerindeki ortak etkisini ölçtü.",
      resultats: [
        "toplam verim",
        "12 t/ha yerine",
        "su",
        "dikim çizisinde EVERGREEN",
      ],
      protocole: [
        "10 m'lik sıralar, 5 kez tekrarlandı.",
        "%15-18 kil içeren tınlı toprak (Avalon); hektara 26 667 bitki.",
        "22 Eylül 2025'te elle dikim; 25-31 Ocak 2026'da hasat.",
        "EVERGREEN dikim çizisine elle yerleştirildi; ECOFERT 700 ml/ha püskürtüldü.",
        "Geleneksel sulama.",
      ],
      constats: [
        "Daha iri ve daha türdeş yumrular.",
        "Üretimde daha az risk ve çiftçi için daha yüksek gelir.",
      ],
      graphiques: [
        { titre: "Verim (t/ha)", barres: ["Uygulamasız", "EVERGREEN + ECOFERT"] },
        {
          titre: "Sulama suyu (endeks, kontrol = 100)",
          barres: ["Uygulamasız", "EVERGREEN + ECOFERT"],
        },
      ],
    },
    "soja-chine-shandong": {
      titre: "Çin'de soya: süper emici ile %11 daha fazla verim",
      description:
        "Shandong Toprak ve Gübre Enstitüsü ile (Çin) tesadüf blokları denemesi: daha hızlı çıkış ve %11,2-11,4 daha yüksek soya verimi.",
      culture: "Soya (Ludou II çeşidi)",
      lieu: "Taian, Shandong eyaleti",
      pays: "Çin",
      periode: "Haziran – Ekim 2017",
      conduit: "Shandong Toprak ve Gübre Enstitüsü, Summit Enterprise ile",
      produits: "EVERGREEN süper emici polimer",
      chapeau:
        "Yazın, soya ekimi sırasında Shandong sıcaktır ve buharlaşma güçlüdür. Deneme, ekim sırasına konan süper emicinin çıkış, gelişme gücü, verim ve gelir üzerindeki etkisini ölçtü.",
      resultats: [
        "verim",
        "daha hızlı çıkış",
        "çimlenme oranı",
        "akr başına soya",
      ],
      protocole: [
        "Tesadüf blokları: 30 m²'lik parseller, her uygulama 4 kez tekrarlandı.",
        "Tüm parsellerde aynı gübreleme: ekim sırasına kompoze gübre ve kompost.",
        "Üç uygulama: süper emicisiz kontrol, 30 m²'lik parsel başına 1,6 kg ve 2 kg süper emici.",
      ],
      constats: [
        "Verim artışı istatistiksel olarak anlamlı düzeye ulaşıyor.",
        "Kontrole göre akr başına 62,9-66,1 yuan gelir artışı.",
      ],
      graphiques: [
        {
          titre: "Soya verimi (endeks, kontrol = 100)",
          barres: ["Süper emicisiz", "Süper emicili"],
        },
      ],
    },
  },
  enCours: [
    {
      titre: "Şehirde kırmızı akçaağaçlar — Florida Üniversitesi",
      texte:
        "Klein ağaç bilimi laboratuvarı (Gainesville), Nisan 2025'te dikilen 90 kırmızı akçaağaçta EVERGREEN'i deniyor: 30'unda jel dikim çukurunda, 30'unda jel ağacın çevresindeki toprağa karıştırılmış, 30'unda jel yok. İki yıllık çalışma.",
    },
    {
      titre: "Douglas göknarıyla ağaçlandırma — Oregon Eyalet Üniversitesi",
      texte:
        "VMRC araştırma kooperatifi, su açığı farklı iki ağaçlandırma alanında, Coquille ve Roseburg yakınlarında EVERGREEN'i deniyor: her alanda jelli 48 fidan ve jelsiz 48 fidan. Dikim Şubat 2025, iki yıllık çalışma.",
    },
  ],
};
