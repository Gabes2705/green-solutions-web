/*
 * Une page commune, sourcée, pour distinguer deux notions souvent confondues :
 * - la sécheresse, aléa climatique ;
 * - le stress hydrique, rapport entre prélèvements et ressources disponibles.
 *
 * Le +29 % est un signal mondial publié par l'UNCCD. Il ne doit jamais être
 * présenté comme une prévision propre au pays du dossier.
 */

const TEXTES = {
  fr: {
    kicker: "SÉCHERESSE ET STRESS HYDRIQUE",
    title: "La pression augmente, mais le risque se lit localement",
    serie: "Indice mondial du nombre et de la durée des sécheresses",
    labels: ["1980–1999", "Depuis 2000"],
    head: "Deux indicateurs, pas un raccourci",
    body:
      "À l’échelle mondiale, le nombre et la durée des sécheresses ont augmenté de 29 % depuis 2000 par rapport aux deux décennies précédentes.\n\nLe stress hydrique mesure autre chose : les prélèvements rapportés aux ressources renouvelables disponibles après les besoins environnementaux. Ce signal mondial n’est donc pas une prévision nationale ; il doit être confronté aux pluies, aux nappes, aux saisons et aux usages locaux.",
  },
  en: {
    kicker: "DROUGHT AND WATER STRESS",
    title: "Pressure is rising, but risk remains local",
    serie: "Global index of drought number and duration",
    labels: ["1980–1999", "Since 2000"],
    head: "Two indicators, not a shortcut",
    body:
      "Worldwide, the number and duration of droughts have risen by 29% since 2000 compared with the two previous decades.\n\nWater stress measures something different: withdrawals as a share of renewable resources available after environmental needs. This global signal is therefore not a country forecast; it must be read alongside local rainfall, aquifers, seasons and uses.",
  },
  es: {
    kicker: "SEQUÍA Y ESTRÉS HÍDRICO",
    title: "La presión aumenta, pero el riesgo sigue siendo local",
    serie: "Índice mundial del número y duración de las sequías",
    labels: ["1980–1999", "Desde 2000"],
    head: "Dos indicadores, no un atajo",
    body:
      "A escala mundial, el número y la duración de las sequías han aumentado un 29 % desde 2000 frente a las dos décadas anteriores.\n\nEl estrés hídrico mide otra cosa: las extracciones respecto a los recursos renovables disponibles tras las necesidades ambientales. Esta señal mundial no es una previsión nacional; debe leerse con la lluvia, los acuíferos, las estaciones y los usos locales.",
  },
  ar: {
    kicker: "الجفاف والإجهاد المائي",
    title: "الضغط يتزايد، لكن المخاطر تبقى محلية",
    serie: "مؤشر عالمي لعدد فترات الجفاف ومدتها",
    labels: ["1980–1999", "منذ 2000"],
    head: "مؤشران مختلفان",
    body:
      "عالمياً، ارتفع عدد فترات الجفاف ومدتها بنسبة 29٪ منذ عام 2000 مقارنة بالعقدين السابقين.\n\nأما الإجهاد المائي فيقيس نسبة السحب إلى الموارد المتجددة المتاحة بعد الاحتياجات البيئية. لذلك لا تمثل هذه الإشارة العالمية توقعاً خاصاً بالدولة، بل يجب قراءتها مع الأمطار والمياه الجوفية والمواسم والاستخدامات المحلية.",
  },
  el: {
    kicker: "ΞΗΡΑΣΙΑ ΚΑΙ ΥΔΑΤΙΚΗ ΠΙΕΣΗ",
    title: "Η πίεση αυξάνεται, αλλά ο κίνδυνος παραμένει τοπικός",
    serie: "Παγκόσμιος δείκτης αριθμού και διάρκειας ξηρασιών",
    labels: ["1980–1999", "Από το 2000"],
    head: "Δύο διαφορετικοί δείκτες",
    body:
      "Παγκοσμίως, ο αριθμός και η διάρκεια των ξηρασιών αυξήθηκαν κατά 29% από το 2000 σε σύγκριση με τις δύο προηγούμενες δεκαετίες.\n\nΗ υδατική πίεση μετρά κάτι διαφορετικό: τις απολήψεις ως ποσοστό των ανανεώσιμων πόρων μετά τις περιβαλλοντικές ανάγκες. Το παγκόσμιο σήμα δεν είναι εθνική πρόβλεψη· διαβάζεται μαζί με τις τοπικές βροχές, τους υδροφορείς, τις εποχές και τις χρήσεις.",
  },
  hr: {
    kicker: "SUŠA I VODNI STRES",
    title: "Pritisak raste, ali rizik ostaje lokalan",
    serie: "Globalni indeks broja i trajanja suša",
    labels: ["1980.–1999.", "Od 2000."],
    head: "Dva različita pokazatelja",
    body:
      "Globalno su broj i trajanje suša od 2000. porasli 29% u odnosu na prethodna dva desetljeća.\n\nVodni stres mjeri nešto drugo: zahvaćanje vode kao udio obnovljivih resursa nakon okolišnih potreba. Taj globalni signal nije prognoza za pojedinu državu; mora se čitati uz lokalne oborine, vodonosnike, sezone i načine uporabe.",
  },
};

const SOURCES = {
  fr: [
    "UNCCD, Drought in Numbers 2022 : nombre et durée des sécheresses, +29 % depuis 2000 par rapport à 1980–1999.",
    "ONU-Eau / FAO AQUASTAT, indicateur ODD 6.4.2 : définition et seuils du stress hydrique.",
  ],
  en: [
    "UNCCD, Drought in Numbers 2022: number and duration of droughts, +29% since 2000 versus 1980–1999.",
    "UN-Water / FAO AQUASTAT, SDG indicator 6.4.2: definition and thresholds of water stress.",
  ],
  es: [
    "UNCCD, Drought in Numbers 2022: número y duración de las sequías, +29 % desde 2000 frente a 1980–1999.",
    "ONU-Agua / FAO AQUASTAT, indicador ODS 6.4.2: definición y umbrales del estrés hídrico.",
  ],
  ar: [
    "اتفاقية الأمم المتحدة لمكافحة التصحر، الجفاف بالأرقام 2022: ارتفاع عدد فترات الجفاف ومدتها 29٪ منذ 2000 مقارنة بـ1980–1999.",
    "الأمم المتحدة للمياه / أكواستات الفاو، مؤشر الهدف 6.4.2: تعريف الإجهاد المائي وحدوده.",
  ],
  el: [
    "UNCCD, Drought in Numbers 2022: αριθμός και διάρκεια ξηρασιών, +29% από το 2000 έναντι 1980–1999.",
    "UN-Water / FAO AQUASTAT, δείκτης ΣΒΑ 6.4.2: ορισμός και όρια υδατικής πίεσης.",
  ],
  hr: [
    "UNCCD, Drought in Numbers 2022: broj i trajanje suša, +29% od 2000. u odnosu na 1980.–1999.",
    "UN-Water / FAO AQUASTAT, pokazatelj SDG 6.4.2: definicija i pragovi vodnog stresa.",
  ],
};

export function stressHydrique(locale = "fr") {
  const langue = locale.slice(0, 2);
  const t = TEXTES[langue] ?? TEXTES.fr;
  return {
    kicker: t.kicker,
    title: t.title,
    type: "bar",
    data: [
      {
        name: t.serie,
        labels: t.labels,
        values: [100, 129],
      },
    ],
    opts: {
      barDir: "col",
      showLegend: false,
      showValue: true,
      dataLabelFormatCode: "0",
      valAxisMinVal: 0,
      valAxisMaxVal: 140,
      valAxisMajorUnit: 20,
    },
    reading: { head: t.head, body: t.body },
  };
}

export function sourcesStress(locale = "fr") {
  return SOURCES[locale.slice(0, 2)] ?? SOURCES.fr;
}
