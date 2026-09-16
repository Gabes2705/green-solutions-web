export default {
  slug: "cote-divoire",
  fichier: "cote-divoire",
  palette: "vigne",
  locale: "fr-CI",
  langue: "Français",
  pied: "Green Solutions · Dossier marché Côte d'Ivoire",

  cover: {
    eyebrow: "DOSSIER DE MARCHÉ",
    title: "Côte d'Ivoire",
    officiel: "RÉPUBLIQUE DE CÔTE D'IVOIRE",
    lieu: "Abidjan · 2026",
    marques: "ECOSORB® · ECOFERT® · NAPEMA® · PAULOWNIA",
    mention: "Septembre 2026 · Document confidentiel · À l'usage exclusif du destinataire",
    subtitle:
      "Premier producteur mondial de cacao et de noix de cajou, sur des vergers âgés et des pluies devenues irrégulières.\nCe que l'hydro-rétention change au moment de replanter.",
    footer: "Green Solutions · contact@evergreen-ecosorb.com",
    photo: 0,
  },

  chiffres: {
    kicker: "LE MARCHÉ EN BREF",
    title: "La première agriculture d'exportation d'Afrique de l'Ouest",
    items: [
      { value: "≈ 20 %", label: "du PIB provient de l'agriculture" },
      { value: "≈ 45 %", label: "de la population active vit du secteur" },
      { value: "≈ 40 %", label: "du cacao mondial vient de Côte d'Ivoire" },
      { value: "≈ 2 Mt", label: "de fèves de cacao récoltées en 2024/25" },
    ],
    note:
      "Le pays compte environ 33 millions d'habitants et reste la première économie de l'UEMOA. Cacao, anacarde, hévéa, palmier et café sont produits pour l'essentiel par des exploitations familiales de quelques hectares, encadrées par des filières structurées et des coopératives nombreuses.",
  },

  contrainte: {
    kicker: "LA CONTRAINTE",
    title: "Beaucoup de pluie, des vergers qui n'en profitent plus",
    photo: 4,
    caption: "Cacaoyère du sud forestier",
    bullets: [
      "Le cacaoyer demande une pluie régulière sur neuf mois. Les saisons se décalent, et les épisodes secs tombent désormais pendant la formation des cabosses.",
      "Le couvert forestier a fortement reculé depuis l'indépendance : les parcelles perdent l'ombrage et l'humidité que la forêt leur apportait.",
      "Une grande partie du verger a dépassé son pic de production. Replanter est devenu le principal chantier des filières cacao et café.",
      "Au centre et au nord, la pluie tombe sur cinq à six mois : chaque poche de sécheresse au semis coûte des semaines de croissance.",
      "Presque toute la production est pluviale. L'enjeu n'est pas de pomper davantage, mais de garder l'eau de pluie dans la zone racinaire au moment où la plante en a besoin.",
    ],
  },

  usages: {
    kicker: "OÙ PART L'EAU",
    title: "L'agriculture prélève la moitié de l'eau utilisée",
    type: "doughnut",
    data: [
      {
        name: "Prélèvements",
        labels: ["Agriculture", "Eau potable", "Industrie"],
        values: [52, 27, 21],
      },
    ],
    opts: { showLegend: true, showValue: true, dataLabelFormatCode: '0"%"', holeSize: 55 },
    reading: {
      head: "Ce que cela implique",
      body:
        "Avec environ 84 milliards de m³ de ressources renouvelables, le pays n'est pas en pénurie d'eau à l'échelle nationale.\n\nLa contrainte est saisonnière et locale : la saison sèche, le nord, et surtout les jeunes plants mis en terre. C'est là que l'hydro-rétention se mesure.",
    },
  },

  productions: {
    kicker: "LES FILIÈRES",
    title: "Le vivrier en volume, les cultures pérennes en valeur",
    type: "bar",
    data: [
      {
        name: "Production annuelle (millions de tonnes)",
        labels: ["Manioc", "Igname", "Banane plantain", "Cacao", "Hévéa"],
        values: [7.4, 7.0, 2.3, 2.0, 1.8],
      },
    ],
    opts: { barDir: "col", dataLabelFormatCode: "0.0", showLegend: false },
    reading: {
      head: "Lecture",
      body:
        "Manioc, igname et banane plantain nourrissent le pays et pèsent le plus en tonnes.\n\nCacao, hévéa, anacarde et palmier rapportent les devises. Ces filières sont encadrées et suivies : c'est là qu'un essai mesuré se transforme le plus vite en décision d'achat.",
    },
  },

  solutions: {
    kicker: "NOTRE RÉPONSE",
    title: "Retenir l'eau, nourrir sans épuiser",
    left: {
      head: "EVERGREEN® — retenir l'eau",
      lines: [
        "Hydro-rétenteur à base de potassium, placé dans la zone racinaire à la plantation ou à la replantation.",
        "Capte l'eau de pluie ou d'irrigation et la restitue progressivement, ce qui protège les jeunes plants pendant la saison sèche.",
        "Capacité d'absorption de l'ordre de 300 fois son poids ; durée d'effet utile de 3 à 4 ans dans le sol.",
        "Se dégrade de 20 à 25 % par an, sans accumulation ni risque de surdosage.",
      ],
    },
    right: {
      head: "ECOFERT® — nourrir sans épuiser",
      lines: [
        "Fertilisant en microdoses d'acides aminés, azote, phosphore et potassium, issu de ressources renouvelables.",
        "Non chélatant : il n'appauvrit pas le complexe argilo-humique de sols cultivés depuis des générations.",
        "Certifié SOHISCERT et EU Bio, utilisé dans 60 pays — argument direct face aux exigences des acheteurs européens de cacao.",
        "1 à 4 flacons de 140 ml par hectare, compatibles avec un pulvérisateur à dos comme avec la fertirrigation.",
      ],
    },
    note:
      "Les deux produits se vendent séparément mais ont été conçus pour se renforcer : l'hydro-rétenteur prolonge la disponibilité de l'eau, le fertilisant valorise cette eau sans dégrader le sol.",
  },

  economies: {
    kicker: "ORDRES DE GRANDEUR",
    title: "Économie d'eau attendue selon le mode d'arrosage",
    type: "bar",
    data: [
      {
        name: "Fourchette basse (%)",
        labels: ["Goutte-à-goutte", "Micro-aspersion", "Aspersion", "Arrosage manuel"],
        values: [40, 45, 50, 55],
      },
      {
        name: "Fourchette haute (%)",
        labels: ["Goutte-à-goutte", "Micro-aspersion", "Aspersion", "Arrosage manuel"],
        values: [55, 60, 65, 70],
      },
    ],
    opts: { barDir: "col", barGrouping: "clustered", dataLabelFormatCode: '0"%"' },
    reading: {
      head: "À lire avec prudence",
      body:
        "Ces fourchettes sont indicatives et fondées sur les gains documentés de nos hydro-rétenteurs.\n\nLe résultat réel dépend du sol, du climat et de la culture. Ces chiffres donnent un ordre de grandeur : ils ne constituent en aucun cas une valeur garantie, contractuelle ou absolue.",
    },
  },

  regions: {
    kicker: "TROIS TERRAINS PRIORITAIRES",
    title: "Où engager les premiers essais",
    items: [
      {
        photo: 3,
        head: "Sud-Ouest — cacao",
        metric: "Premier bassin cacaoyer",
        lines: [
          "San-Pédro, Soubré, Gagnoa : la plus forte concentration de cacaoyères du pays.",
          "Verger âgé et programmes de replantation en cours : l'hydro-rétenteur se juge au taux de reprise.",
          "Coopératives certifiées et exportateurs déjà organisés pour suivre des parcelles.",
        ],
      },
      {
        photo: 5,
        head: "Centre et Nord — anacarde, coton, vivrier",
        metric: "≈ 1 Mt de noix brutes",
        lines: [
          "Bouaké, Korhogo, Bondoukou : anacarde, coton, igname et maïs sur cinq à six mois de pluie.",
          "Poches de sécheresse au semis et sols sableux qui retiennent peu l'eau.",
          "Producteurs encadrés par les structures de filière : un essai peut être coordonné sur plusieurs sites.",
        ],
      },
      {
        photo: 1,
        head: "Sud-Est et lagunes — hévéa, palmier",
        metric: "≈ 1,8 Mt de caoutchouc",
        lines: [
          "Aboisso, Dabou, Bonoua : plantations industrielles et villageoises suivies bloc par bloc.",
          "Mortalité des jeunes plants en saison sèche, sur des sols lessivés par les fortes pluies.",
          "Volumes contractualisables et protocole d'essai facile à tenir sur un bloc homogène.",
        ],
      },
    ],
  },

  deploiement: {
    kicker: "COMMENT NOUS PROCÉDONS",
    title: "Un déploiement par étapes, mesuré à chaque palier",
    items: [
      {
        head: "Diagnostic",
        body: "Analyse du sol, du mode d'arrosage et de la culture. Aucun engagement à ce stade.",
      },
      {
        head: "Parcelle témoin",
        body: "Un essai comparatif sur un bloc, avec parcelle témoin conduite à l'identique.",
      },
      {
        head: "Mesure",
        body: "Relevés de reprise, de consommation et de rendement à cheval sur la saison sèche.",
      },
      {
        head: "Extension",
        body: "Généralisation progressive aux autres parcelles sur la base des résultats constatés.",
      },
    ],
    note:
      "La règle de dosage est la même partout : 3 grammes par litre de terre utile. Ce qui change d'un terrain à l'autre, c'est le volume de terre effectivement exploré par les racines.",
  },

  risques: {
    kicker: "CE QU'IL FAUT ANTICIPER",
    title: "Risques identifiés et réponses",
    left: {
      head: "Risques",
      lines: [
        "Trésorerie limitée des planteurs, qui achètent leurs intrants à crédit.",
        "Filières cacao et anacarde encadrées : rien ne se déploie sans l'accord des organismes de filière.",
        "Le swollen shoot ne se corrige pas par l'eau : l'hydro-rétenteur accompagne la replantation.",
        "Produit peu connu, parfois confondu avec les polymères à base de sodium.",
      ],
    },
    right: {
      head: "Réponses",
      lines: [
        "Passer par les coopératives et les exportateurs pour grouper les achats.",
        "Présenter les essais aux structures de filière dès la première parcelle.",
        "Positionner EVERGREEN® sur la reprise des jeunes plants, mesurée en une saison.",
        "Documenter la formulation potassique, sans sodium, compatible avec l'alimentaire.",
      ],
    },
    note:
      "Analyse acrylamide (laboratoire Polymex, ISO 9001, teneur inférieure à 3,0 µg/g) et screening REACH / SVHC (SGS) disponibles sur demande, ainsi que le certificat SOHISCERT valable jusqu'au 4 septembre 2027.",
  },

  closing: {
    photo: 8,
    title: "Dites-nous votre parcelle",
    body:
      "Culture, mode d'arrosage, nature du sol, volume d'eau consommé aujourd'hui. Nous revenons avec la combinaison de technologies correspondante, les dosages, et les essais déjà conduits dans des situations comparables.\n\nUn premier échange n'engage à rien.",
    contact: "contact@evergreen-ecosorb.com · Green Solutions Groupe AIM SA, 46, route de la Condémine, 1475 Forel, Suisse",
  },
};
