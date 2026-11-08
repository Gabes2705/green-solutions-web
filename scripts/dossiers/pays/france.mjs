export default {
  slug: "france",
  fichier: "france",
  palette: "nil",
  locale: "fr-FR",
  langue: "Français",
  pied: "Green Solutions · Dossier marché France",

  cover: {
    eyebrow: "DOSSIER DE MARCHÉ",
    title: "France",
    officiel: "RÉPUBLIQUE FRANÇAISE",
    lieu: "Paris",
    marques: "ECOSORB® · ECOFERT® · NAPEMA® · PAULOWNIA",
    mention: "Document confidentiel · À l'usage exclusif du destinataire",
    subtitle:
      "Maïs, légumes, pommes de terre et vergers irrigués, des plaines du Sud-Ouest à la Provence.\nCe que l'hydro-rétention change quand l'été demande plus d'eau que la pluie n'en apporte.",
    footer: "Green Solutions · contact@green-solutions-group.com",
    photo: 0,
  },

  chiffres: {
    kicker: "LE MARCHÉ EN BREF",
    title: "Une irrigation minoritaire, mais concentrée sur l'été",
    items: [
      { value: "≈ 2 900 Mm³", label: "d'eau douce prélevés pour l'agriculture en 2023 (Eurostat)" },
      { value: "≈ 1,5 M ha", label: "irrigués en 2023, soit 5,6 % de la surface agricole utilisée" },
      { value: "116 à 438 mm", label: "de déficit d'eau de juin à août selon les régions, de Strasbourg à Marseille" },
      { value: "≈ 450 Mm³", label: "d'eau économisés par an au scénario central, soit 15 % de l'eau agricole" },
    ],
    note:
      "Le maïs grain occupe un tiers des surfaces irriguées. La Nouvelle-Aquitaine, l'Occitanie et la Provence-Alpes-Côte d'Azur prélèvent à elles seules plus de la moitié de l'eau d'irrigation : C'est là que l'économie d'eau pèse le plus.",
  },

  contrainte: {
    kicker: "LA CONTRAINTE",
    title: "Une eau prélevée au plus mauvais moment",
    photo: 2,
    caption: "La France vue de la Station spatiale internationale",
    bullets: [
      "L'essentiel de l'eau d'irrigation est prélevé de juin à août, quand les rivières et les nappes sont au plus bas.",
      "De juin à août, l'atmosphère demande 116 mm d'eau de plus que la pluie à Strasbourg, 246 mm à Toulouse et 438 mm à Marseille.",
      "Les prélèvements agricoles suivent la météo : Ils ont atteint leur maximum de la série en 2022, année très sèche, avec plus de 3,5 milliards de m³.",
      "La trajectoire de réchauffement retenue par l'État prévoit +2,7 °C en 2050 et +4 °C en 2100 en France métropolitaine.",
      "Garder dans le sol l'eau de l'hiver et de chaque arrosage réduit directement le volume à prélever en été.",
    ],
  },

  usages: {
    kicker: "OÙ PART L'EAU",
    title: "L'agriculture prélève une eau surtout consommée",
    type: "doughnut",
    data: [
      {
        name: "Prélèvements d'eau douce",
        labels: ["Agriculture", "Énergie, eau potable et industrie"],
        values: [12.5, 87.5],
      },
    ],
    opts: { showLegend: true, showValue: true, dataLabelFormatCode: '0.0"%"', holeSize: 55 },
    reading: {
      head: "Ce que cela implique",
      body:
        "L'agriculture prélève 12,5 % de l'eau douce du pays (2 924 Mm³ sur 23 391 Mm³ en 2023), mais cette eau est en grande partie évaporée par les plantes, et prélevée en été.\n\nChaque mètre cube gardé dans la zone des racines allège la pression sur les rivières et les nappes au moment où elles sont le plus basses.",
    },
  },

  productions: {
    kicker: "LES CULTURES IRRIGUÉES",
    title: "Ce que la France irrigue",
    type: "bar",
    data: [
      {
        name: "Surface irriguée (milliers d'hectares, 2023)",
        labels: ["Maïs grain", "Céréales à paille", "Fourrages verts", "Vergers", "Légumes", "Pommes de terre"],
        values: [497, 168, 117, 114, 93, 88],
      },
    ],
    opts: { barDir: "col", dataLabelFormatCode: "0", showLegend: false },
    reading: {
      head: "Lecture",
      body:
        "Le maïs grain occupe un tiers des surfaces irriguées, loin devant les céréales à paille, les fourrages, les vergers, les légumes et les pommes de terre (Eurostat, enquête 2023).\n\nC'est sur le maïs, la pomme de terre et les légumes que les essais publiés donnent les économies d'eau les plus nettes : Ce sont les premières cultures à tester.",
    },
  },

  solutions: {
    kicker: "NOTRE RÉPONSE",
    title: "Retenir l'eau, nourrir sans lessiver",
    left: {
      head: "EVERGREEN® — retenir l'eau",
      lines: [
        "Hydro-rétenteur à base de potassium, placé dans la zone racinaire au semis, à la plantation ou à la reprise.",
        "Capte l'eau de pluie ou d'irrigation et la restitue progressivement, ce qui espace les arrosages pendant l'été.",
        "Capacité d'absorption de l'ordre de 300 fois son poids ; durée d'effet utile de 3 à 4 ans dans le sol.",
        "Se dégrade de 20 à 25 % par an, sans accumulation ni risque de surdosage.",
      ],
    },
    right: {
      head: "ECOFERT® — nourrir sans épuiser",
      lines: [
        "Fertilisant en microdoses d'acides aminés, azote, phosphore et potassium, issu de ressources renouvelables.",
        "Non chélatant : Il n'appauvrit pas le complexe argilo-humique et limite les pertes d'éléments vers les nappes.",
        "Certifié SOHISCERT et EU Bio, utilisé dans 60 pays — argument utile pour les filières sous signe de qualité et en agriculture biologique.",
        "1 à 4 flacons de 140 ml par hectare, compatibles avec un pulvérisateur comme avec la fertirrigation.",
      ],
    },
    note:
      "Les deux produits se vendent séparément mais ont été conçus pour se renforcer : L'hydro-rétenteur prolonge la disponibilité de l'eau, le fertilisant valorise cette eau sans ajouter à la charge du sol.",
  },

  economies: {
    kicker: "ORDRES DE GRANDEUR",
    title: "Économie d'eau attendue selon le mode d'arrosage",
    type: "bar",
    data: [
      {
        name: "Fourchette basse (%)",
        labels: ["Goutte-à-goutte", "Micro-aspersion", "Aspersion", "Gravitaire"],
        values: [40, 45, 50, 55],
      },
      {
        name: "Fourchette haute (%)",
        labels: ["Goutte-à-goutte", "Micro-aspersion", "Aspersion", "Gravitaire"],
        values: [55, 60, 65, 70],
      },
    ],
    opts: { barDir: "col", barGrouping: "clustered", dataLabelFormatCode: '0"%"' },
    reading: {
      head: "À lire avec prudence",
      body:
        "Ces fourchettes sont indicatives et fondées sur les gains documentés de nos hydro-rétenteurs.\n\nLe résultat réel dépend du sol, du climat et de la culture. Ces chiffres donnent un ordre de grandeur.",
    },
  },

  regions: {
    kicker: "TROIS TERRAINS PRIORITAIRES",
    title: "Où engager les premiers essais",
    items: [
      {
        photo: 1,
        head: "Nouvelle-Aquitaine",
        metric: "346 000 ha irrigués",
        lines: [
          "Première région irriguée de France : Maïs des Landes, du Béarn et des Charentes, vergers et légumes de la vallée de la Garonne.",
          "Environ 92 Mm³ d'eau économisés par an au scénario central.",
          "Grandes exploitations et coopératives capables de conduire un essai sur un pivot.",
        ],
      },
      {
        photo: 3,
        head: "Occitanie",
        metric: "268 000 ha irrigués",
        lines: [
          "Maïs et semences du Gers et de la Haute-Garonne, vergers du Tarn-et-Garonne, vignes du Languedoc.",
          "Environ 91 Mm³ d'eau économisés par an au scénario central.",
          "Été chaud et sec : 246 mm de déficit d'eau de juin à août à Toulouse.",
        ],
      },
      {
        photo: 4,
        head: "Provence-Alpes-Côte d'Azur",
        metric: "13,8 % de la SAU irriguée",
        lines: [
          "Foin de Crau, vergers et maraîchage de la Durance, riz de Camargue.",
          "Le déficit d'été le plus fort du pays : 438 mm de juin à août à Marseille.",
          "Cultures pérennes : L'effet de 3 à 4 ans de l'hydro-rétenteur se juge à la plantation et à la replantation.",
        ],
      },
    ],
  },

  deploiement: {
    kicker: "COMMENT NOUS PROCÉDONS",
    title: "Un déploiement par étapes, mesuré à chaque palier",
    items: [
      { head: "Diagnostic", body: "Analyse du sol, du mode d'arrosage et de la culture. Aucun engagement à ce stade." },
      { head: "Parcelle témoin", body: "Un essai comparatif sur un bloc, avec parcelle témoin conduite à l'identique." },
      { head: "Mesure", body: "Relevés de consommation d'eau et de rendement sur une saison complète, été compris." },
      { head: "Extension", body: "Généralisation progressive aux autres parcelles sur la base des résultats constatés." },
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
        "Eau agricole peu chère dans les réseaux collectifs : L'argument porte autant sur le rendement que sur le volume d'eau.",
        "Restrictions d'eau en été : Un essai doit couvrir toute la saison chaude pour être probant.",
        "Mise sur le marché des matières fertilisantes selon les règles françaises et européennes.",
        "Grandes cultures à faible marge : Le coût par hectare doit rester proportionné au gain.",
      ],
    },
    right: {
      head: "Réponses",
      lines: [
        "Commencer par le maïs, la pomme de terre, les légumes et les vergers, où l'eau et le rendement pèsent le plus.",
        "Travailler avec les coopératives et les gestionnaires de réseaux collectifs d'irrigation.",
        "Programmer l'essai de mai à septembre, avec une parcelle témoin conduite à l'identique.",
        "Préparer tôt le dossier réglementaire : Analyses et certificats avant la négociation.",
      ],
    },
    note:
      "Analyse acrylamide (laboratoire Polymex, ISO 9001, teneur inférieure à 3,0 µg/g) et screening REACH / SVHC (SGS) disponibles sur demande, ainsi que le certificat SOHISCERT valable jusqu'au 4 septembre 2027.",
  },

  closing: {
    photo: 5,
    title: "Dites-nous votre parcelle",
    body:
      "Culture, mode d'arrosage, nature du sol, volume d'eau consommé aujourd'hui. Nous revenons avec la combinaison de technologies correspondante, les dosages, et les essais déjà conduits dans des situations comparables.\n\nUn premier échange n'engage à rien.",
    contact: "contact@green-solutions-group.com · Green Solutions Groupe AIM SA, 46, route de la Condémine, 1475 Forel, Suisse",
  },
};
