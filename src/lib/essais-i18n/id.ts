import type { Traduction } from "./types";

/** Les essais de terrain en indonésien. */
export const id: Traduction = {
  habillage: {
    retour: "← Semua uji coba",
    tousLesEssais: "Lihat semua uji coba →",
    lireRapport: "Baca laporan lengkap (PDF)",
    resultatsEyebrow: "Hasil",
    resultatsTitre: "Apa yang diukur uji coba ini",
    imagesEyebrow: "Dalam gambar",
    imagesTitre: "Sebelum dan sesudah: selisih yang terukur",
    mecaniqueEyebrow: "Cara kerjanya",
    mecaniqueTitre: "Air tetap berada di tempat tanaman membutuhkannya",
    mecaniqueTexte:
      "Dicampur ke tanah dekat akar, penahan air menyerap air pada setiap penyiraman dan setiap hujan, alih-alih membiarkannya menguap atau meresap ke dalam. Setelah itu air dikembalikan ke tanaman, hari demi hari. Penyiraman menjadi lebih jarang, dan tanaman tidak kehausan di antara dua penyiraman.",
    ficheEyebrow: "Data uji coba",
    ficheTitre: "Di mana, kapan, oleh siapa",
    culture: "Tanaman",
    lieu: "Tempat",
    periode: "Periode",
    conduitPar: "Dilaksanakan oleh",
    produits: "Produk",
    methodeEyebrow: "Metode",
    methodeTitre: "Bagaimana uji coba dijalankan",
    observationsEyebrow: "Pengamatan",
    observationsTitre: "Yang perlu diingat",
    autresEyebrow: "Uji coba lain",
    autresTitre: "Produk yang sama, pada tanaman lain",
    hubEyebrow: "Uji coba lapangan",
    hubTitre: "Lebih sedikit air, lebih banyak panen: hasil yang terukur",
    hubChapeau:
      "Universitas, pusat penelitian, dan perkebunan telah menguji penahan air EVERGREEN, sendiri atau bersama pupuk ECOFERT, pada tujuh tanaman di enam negara. Setiap halaman memuat angka dari laporan dan menautkan ke dokumen lengkapnya.",
    hubPrincipe:
      "Prinsipnya sama di mana pun: penahan air menyimpan air dekat akar dan mengembalikannya ke tanaman sedikit demi sedikit. Bergantung pada tanaman dan iklim, uji coba mengukur hingga 82% lebih sedikit air dan hingga 93% lebih banyak panen.",
    hubTermines: "Uji coba yang selesai",
    hubEnCours: "Uji coba yang berjalan bersama universitas",
    hubGuides: "Panduan kami",
    hubCreditPhoto: "Foto sampul:",
    guideProduit: "Lihat halaman produk",
    guidePreuvesEyebrow: "Bukti lapangan",
    guidePreuvesTitre: "Uji coba yang mengukurnya",
    guideResultatsEyebrow: "Hasil lapangan",
    guideResultatsTitre: "Apa yang diukur uji coba",
    guideComparaisonEyebrow: "Perbandingan",
    guideFaqEyebrow: "Pertanyaan umum",
    guideFaqTitre: "Yang paling sering ditanyakan",
    guideOui: "Ya",
    guideNon: "Tidak",
    guideCritere: "Kriteria",
  },
  essais: {
    "palmiers-dattiers-emirats-icba": {
      titre: "Kurma di Uni Emirat Arab: 82% lebih sedikit air irigasi",
      description:
        "Uji coba EVERGREEN oleh ICBA di Dubai pada 27 pohon kurma di tanah berpasir: hemat 82% air irigasi dan 20% lebih banyak buah.",
      culture: "Pohon kurma",
      lieu: "Stasiun penelitian ICBA, Dubai",
      pays: "Uni Emirat Arab",
      periode: "Musim 2020-2021",
      conduit: "ICBA — International Center for Biosaline Agriculture",
      produits: "EVERGREEN (penahan air)",
      chapeau:
        "Di Uni Emirat Arab hujan turun sekitar 50 mm per tahun dan hampir seluruh pertanian bergantung pada irigasi. ICBA menguji EVERGREEN di lahan terbuka, pada tanah berpasir dan salin, pada pohon kurma berumur sekitar 8 tahun.",
      resultats: [
        "air irigasi sepanjang musim",
        "air pada 7 bulan terakhir, tanpa cekaman bagi pohon",
        "lebih banyak kurma dengan 300 g per pohon",
        "frekuensi penyiraman pohon yang diberi produk",
      ],
      protocole: [
        "27 pohon kurma ditanam dengan jarak 8 × 8 m, di stasiun penelitian ICBA.",
        "EVERGREEN dicampurkan ke 50 cm lapisan atas tanah pada awal musim, dengan beberapa dosis per pohon (antara lain 300 g, 500 g, dan 1000 g).",
        "Penyiraman dikendalikan sensor yang mengukur kelembapan tanah secara langsung.",
        "Dibandingkan dengan pohon kontrol tanpa EVERGREEN.",
      ],
      constats: [
        "Pohon yang diberi produk tidak menunjukkan tanda kekeringan atau kerusakan selama musim.",
        "Hara tersedia di tanah jelas lebih tinggi dengan EVERGREEN: air dan mineral bertahan di zona akar alih-alih meresap ke bawah.",
        "Aktivitas biologi tanah (respirasi dan biomassa mikroba) meningkat.",
        "ICBA menegaskan seluruh hasil yang diperoleh dalam kondisi lapangan.",
      ],
      graphiques: [
        {
          titre: "Air irigasi sepanjang musim (indeks, kontrol = 100)",
          barres: ["Tanpa EVERGREEN", "Dengan EVERGREEN"],
        },
        { titre: "Hasil kurma (indeks, kontrol = 100)", barres: ["Tanpa EVERGREEN", "300 g per pohon"] },
      ],
    },
    "pasteques-mexique": {
      titre: "Semangka di Meksiko: 60,5% lebih sedikit air dan 30% lebih banyak panen",
      description:
        "Uji coba EVERGREEN pada 2.600 tanaman semangka di Hermosillo (Sonora, Meksiko), pada 45 °C: hemat 60,5% air dan panen 30% lebih tinggi.",
      culture: "Semangka (varietas Charleston)",
      lieu: "Hermosillo, Sonora",
      pays: "Meksiko",
      periode: "15 Februari – 2 Agustus 2023",
      conduit: "Uji coba lapangan Green Solutions",
      produits: "EVERGREEN (penahan air)",
      chapeau:
        "Sonora memimpin produksi semangka Meksiko, tetapi terpukul keras oleh kekeringan pada 2023. Uji coba ini mengukur air yang dihemat EVERGREEN di wilayah sangat kering, dengan suhu harian rata-rata 45 °C.",
      resultats: [
        "air irigasi",
        "panen lebih banyak dibanding petak yang diairi 100%",
        "kadar gula rata-rata pada buah",
        "EVERGREEN per tanaman",
      ],
      protocole: [
        "2.600 tanaman semangka.",
        "Petak kontrol tanpa EVERGREEN, diairi 100%.",
        "Petak dengan 5 g EVERGREEN per tanaman (2 g di atas 3 g yang biasa dianjurkan).",
      ],
      constats: [
        "Iklim amat panas dan kering, di tanah gersang.",
        "Dosis bergantung pada jenis tanah (liat, berpasir, berbatu, berkapur) dan cara irigasi (sumur, tetes, hujan).",
        "Cara lain yang mungkin: 15 sampai 20 g EVERGREEN per meter larikan, tergantung varietas.",
      ],
      graphiques: [
        { titre: "Air irigasi (indeks, kontrol = 100)", barres: ["Tanpa EVERGREEN", "5 g per tanaman"] },
        { titre: "Panen (indeks, kontrol = 100)", barres: ["Tanpa EVERGREEN", "5 g per tanaman"] },
      ],
    },
    "coton-turquie-hatay": {
      titre: "Kapas di Turki: hasil hampir dua kali lipat di bawah cekaman air",
      description:
        "Demonstrasi EVERGREEN pada kapas di wilayah Hatay (Turki) tahun 2025: hasil naik dari 2,53 menjadi 4,88 t/ha (+93%) meski air sangat terbatas.",
      culture: "Kapas",
      lieu: "Kebun Mistikoğlu Tarım, dataran Amik, Hatay",
      pays: "Turki",
      periode: "Musim 2025",
      conduit: "Green Solutions bersama koperasi Teknik Tarım",
      produits: "EVERGREEN (penahan air), disuntikkan di bawah zona akar",
      chapeau:
        "Wilayah Hatay menghadapi kelangkaan air menahun, panas terik, dan jaringan irigasi yang rusak akibat gempa 2023. Pada Juli 2025 dataran Amik mengalami krisis air yang belum pernah terjadi. Di sanalah uji coba dijalankan.",
      resultats: [
        "hasil: 4,88 t/ha dibanding 2,53 t/ha",
        "produktivitas air, sekurang-kurangnya",
        "pendapatan kotor (3.300 $ dibanding 1.710 $)",
        "keuntungan bersih, setelah biaya produk dan aplikasi",
      ],
      protocole: [
        "EVERGREEN disuntikkan di bawah zona akar dengan alat injeksi Green Solutions, pada guludan yang disiapkan untuk tanam.",
        "Beberapa dosis dibandingkan: 48, 55, 58, dan 62 kg/ha.",
        "Dibandingkan dengan zona kontrol tanpa perlakuan.",
        "Irigasi yang lazim di wilayah itu: penggenangan dari saluran terbuka.",
      ],
      constats: [
        "Kapas yang diberi produk tumbuh lebih baik dan berbiomassa lebih banyak meski air terbatas.",
        "Selisihnya terlihat sejak minggu-minggu pertama, periode penentu hasil akhir kapas.",
      ],
      graphiques: [
        { titre: "Hasil kapas (t/ha)", barres: ["Zona kontrol", "Dengan EVERGREEN"] },
        { titre: "Pendapatan kotor (USD/ha)", barres: ["Zona kontrol", "Dengan EVERGREEN"] },
      ],
    },
    "mais-turquie-konya": {
      titre: "Jagung di Turki: 39% lebih sedikit air dan 17% lebih banyak hasil",
      description:
        "Demonstrasi EVERGREEN pada jagung di Konya (TIGEM, Turki) tahun 2025: 528 mm irigasi alih-alih 864 mm, dan 12.060 kg/ha dibanding 10.300 kg/ha.",
      culture: "Jagung",
      lieu: "Perusahaan negara TIGEM, Konya",
      pays: "Turki",
      periode: "Mei – September 2025",
      conduit: "Green Solutions dan D.I.S., pengukuran oleh bagian irigasi TIGEM",
      produits: "Penahan air EVERGREEN, ditempatkan di bawah barisan tanam",
      chapeau:
        "Tujuannya sederhana: menghasilkan sama banyak atau lebih, dengan air lebih sedikit. Penahan air disuntikkan tepat di bawah barisan tanam, pada kedalaman tertentu, dengan mesin rancangan D.I.S., lalu irigasi pada zona perlakuan sengaja dikurangi.",
      resultats: [
        "air: 528 mm alih-alih 864 mm",
        "hasil: 12.060 kg/ha dibanding 10.300 kg/ha",
        "produktivitas air: 22,8 kg jagung per m³ dibanding 11,9",
        "dosis dengan hasil terbaik",
      ],
      protocole: [
        "Satu zona kontrol dan tiga zona perlakuan dengan 39, 51, dan 74 kg/ha.",
        "Aplikasi pada 14 dan 15 Mei 2025, langsung di bawah barisan tanam.",
        "Irigasi zona perlakuan dikurangi 50%, lalu 30%, sesuai fase pertumbuhan.",
        "Panen pada 16 September 2025, pada petak yang sebanding.",
      ],
      constats: [
        "Hasil terukur: kontrol 10.300 kg/ha; 39 kg/ha → 11.200 kg/ha; 51 kg/ha → 10.300 kg/ha; 74 kg/ha → 12.060 kg/ha.",
        "Ketepatan menentukan: aplikasi terlalu dangkal, terlalu dalam, atau melenceng dari barisan tanam mengurangi efeknya.",
        "Bagi perusahaan, 39% air lebih sedikit berarti hemat 13.629 lira Turki per hektare per tahun.",
      ],
      graphiques: [
        { titre: "Air irigasi selama 4 bulan (mm)", barres: ["Zona kontrol", "Zona perlakuan"] },
        {
          titre: "Hasil jagung menurut dosis (kg/ha)",
          barres: ["Kontrol", "39 kg/ha", "51 kg/ha", "74 kg/ha"],
        },
      ],
    },
    "canne-a-sucre-indonesie": {
      titre: "Tebu di Jawa: panen 55% lebih banyak dengan EVERGREEN dan ECOFERT",
      description:
        "Uji coba yang dipantau Universitas Jember pada tebu di Jawa (Indonesia): tonase naik 34% dengan 2,5 g per tanaman dan 55% dengan 5 g, dengan kadar gula lebih tinggi.",
      culture: "Tebu (varietas B82.0333)",
      lieu: "Jember, Jawa",
      pays: "Indonesia",
      periode: "Februari – Juli 2024",
      conduit: "Universitas Jember dan pusat penelitian tebu Indonesia",
      produits: "EVERGREEN (penahan air) dan pupuk biostimulan ECO (ECOFERT)",
      chapeau:
        "Uji coba membandingkan tiga petak di tanah liat: petak kontrol, petak dengan 2,5 g EVERGREEN per tanaman, dan petak dengan 5 g; dua petak terakhir juga menerima pupuk biostimulan ECO.",
      resultats: [
        "tonase dengan 5 g per tanaman",
        "tonase dengan 2,5 g per tanaman",
        "kadar sukrosa saat panen (5 g dibanding kontrol)",
        "tinggi batang pada bulan ke-8, dibanding 111 cm pada kontrol",
      ],
      protocole: [
        "Tiga petak seluas seperempat hektare.",
        "EVERGREEN dibenamkan dekat akar saat tebu berumur 3 bulan.",
        "Pupuk ECO disemprotkan saat tanam, 3 bulan kemudian, lalu 8 bulan setelah tanam.",
        "Dosis per hektare: 50 kg EVERGREEN dan 500 ml pupuk.",
      ],
      constats: [
        "Tonase total: 6.950 t pada kontrol, 9.330 t dengan 2,5 g per tanaman, 10.800 t dengan 5 g per tanaman.",
        "Diameter batang pada bulan ke-8: 2,47 cm pada kontrol, 2,78 cm dengan 2,5 g, dan 2,88 cm dengan 5 g.",
        "Kadar sukrosa: 14 pada kontrol, 16 dengan 2,5 g, dan 18 dengan 5 g.",
      ],
      graphiques: [
        { titre: "Tonase panen (t)", barres: ["Kontrol", "2,5 g per tanaman", "5 g per tanaman"] },
        {
          titre: "Kadar sukrosa saat panen",
          barres: ["Kontrol", "2,5 g per tanaman", "5 g per tanaman"],
        },
      ],
    },
    "pommes-de-terre-afrique-du-sud": {
      titre: "Kentang di Afrika Selatan: hasil 31% lebih tinggi, air 52% lebih sedikit",
      description:
        "Uji coba EVERGREEN dan ECOFERT pada kentang di Bloemfontein (Afrika Selatan), 2025-2026: hasil dari 12 menjadi 15,7 t/ha dan hemat 52% air.",
      culture: "Kentang (varietas Buffelspoort BP13)",
      lieu: "Bloemfontein",
      pays: "Afrika Selatan",
      periode: "September 2025 – Januari 2026",
      conduit: "Afrinest Farm Group (Tzaneen, Limpopo)",
      produits: "EVERGREEN (penahan air) dan ECOFERT (pupuk organik)",
      chapeau:
        "Uji coba percontohan ini mengukur efek gabungan EVERGREEN di tanah dan ECOFERT yang disemprotkan terhadap hasil dan mutu kentang.",
      resultats: [
        "hasil total",
        "alih-alih 12 t/ha",
        "air",
        "EVERGREEN di alur tanam",
      ],
      protocole: [
        "Barisan 10 m, diulang 5 kali.",
        "Tanah lempung berdebu (Avalon) dengan 15 sampai 18% liat; 26.667 tanaman per hektare.",
        "Tanam manual pada 22 September 2025; panen 25 sampai 31 Januari 2026.",
        "EVERGREEN diletakkan dengan tangan di alur tanam; ECOFERT disemprot 700 ml/ha.",
        "Irigasi konvensional.",
      ],
      constats: [
        "Umbi lebih besar dan lebih seragam.",
        "Risiko produksi berkurang dan pendapatan petani lebih tinggi.",
      ],
      graphiques: [
        { titre: "Hasil (t/ha)", barres: ["Tanpa perlakuan", "EVERGREEN + ECOFERT"] },
        {
          titre: "Air irigasi (indeks, kontrol = 100)",
          barres: ["Tanpa perlakuan", "EVERGREEN + ECOFERT"],
        },
      ],
    },
    "soja-chine-shandong": {
      titre: "Kedelai di Tiongkok: hasil 11% lebih tinggi dengan superabsorben",
      description:
        "Uji coba rancangan acak kelompok bersama Institut Tanah dan Pupuk Shandong (Tiongkok): perkecambahan lebih cepat dan hasil kedelai 11,2 sampai 11,4% lebih tinggi.",
      culture: "Kedelai (varietas Ludou II)",
      lieu: "Taian, Provinsi Shandong",
      pays: "Tiongkok",
      periode: "Juni – Oktober 2017",
      conduit: "Institut Tanah dan Pupuk Shandong, bersama Summit Enterprise",
      produits: "Polimer superabsorben EVERGREEN",
      chapeau:
        "Pada musim panas, saat kedelai ditanam, Shandong panas dengan penguapan kuat. Uji coba mengukur pengaruh superabsorben yang diletakkan di barisan tanam terhadap perkecambahan, kekuatan tumbuh, hasil, dan pendapatan.",
      resultats: [
        "hasil",
        "perkecambahan lebih cepat",
        "daya kecambah",
        "kedelai per acre",
      ],
      protocole: [
        "Rancangan acak kelompok: petak 30 m², tiap perlakuan diulang 4 kali.",
        "Pemupukan sama pada semua petak: pupuk majemuk dan kompos di barisan tanam.",
        "Tiga perlakuan: kontrol tanpa superabsorben, 1,6 kg dan 2 kg superabsorben per petak 30 m².",
      ],
      constats: [
        "Kenaikan hasil mencapai tingkat yang nyata secara statistik.",
        "Tambahan pendapatan 62,9 sampai 66,1 yuan per acre dibanding kontrol.",
      ],
      graphiques: [
        {
          titre: "Hasil kedelai (indeks, kontrol = 100)",
          barres: ["Tanpa superabsorben", "Dengan superabsorben"],
        },
      ],
    },
  },
  enCours: [
    {
      titre: "Mapel merah di perkotaan — Universitas Florida",
      texte:
        "Laboratorium arborikultur Klein (Gainesville) menguji EVERGREEN pada 90 pohon mapel merah yang ditanam April 2025: 30 dengan gel di lubang tanam, 30 dengan gel dicampur ke tanah di sekeliling pohon, 30 tanpa gel. Studi selama 2 tahun.",
    },
    {
      titre: "Reboisasi cemara Douglas — Oregon State University",
      texte:
        "Koperasi penelitian VMRC menguji EVERGREEN di dua lokasi reboisasi dengan defisit air berbeda, dekat Coquille dan Roseburg: 48 bibit dengan gel dan 48 tanpa gel di tiap lokasi. Penanaman Februari 2025, studi selama 2 tahun.",
    },
  ],
};
