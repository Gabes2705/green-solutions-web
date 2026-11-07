export default {
  slug: "liban",
  fichier: "liban",
  palette: "nil",
  locale: "fr-LB",
  langue: "Français",
  pied: "Green Solutions · Dossier marché Liban",

  cover: {
    eyebrow: "DOSSIER DE MARCHÉ",
    title: "Liban",
    officiel: "RÉPUBLIQUE LIBANAISE",
    lieu: "Beyrouth",
    marques: "ECOSORB® · ECOFERT® · NAPEMA® · PAULOWNIA",
    mention: "Document confidentiel · À l'usage exclusif du destinataire",
    subtitle:
      "Pommes de terre, légumes, vergers et céréales irrigués dans la Békaa et l'Akkar.\nCe que l'hydro-rétention change quand l'été ne donne plus une goutte de pluie.",
    footer: "Green Solutions · contact@green-solutions-group.com",
    photo: 0,
  },

  chiffres: {
    kicker: "LE MARCHÉ EN BREF",
    title: "La moitié des terres cultivées dépend de l'irrigation",
    items: [
      { value: "≈ 880 Mm³", label: "d'eau demandés chaque année pour l'irrigation (stratégie nationale, 2020)" },
      { value: "≈ 49 %", label: "de la surface agricole utilisée est irriguée (recensement de 2010)" },
      { value: "350 à 700 mm", label: "de pluie par an selon les régions, presque rien de juin à septembre" },
      { value: "≈ 45 Mm³", label: "d'apports au lac de Qaraoun en 2025, contre 350 millions en moyenne" },
    ],
    note:
      "La Békaa et Baalbek-Hermel concentrent 55 % des surfaces irriguées. Les eaux souterraines fournissent plus de la moitié de l'eau prélevée : Une grande partie de l'irrigation dépend de puits privés, et chaque mètre cube pompé se paie en énergie.",
  },

  contrainte: {
    kicker: "LA CONTRAINTE",
    title: "Une pluie d'hiver pour des cultures d'été",
    photo: 2,
    caption: "Le lac de retenue du Litani (Qaraoun)",
    bullets: [
      "Il tombe environ 350 mm de pluie par an à Baalbek et 700 mm à Tripoli, mais presque rien de juin à septembre, quand l'atmosphère demande 150 à 200 mm d'eau par mois.",
      "La Békaa, première région irriguée du pays, est aussi la plus sèche : Pommes de terre, légumes, céréales et vergers y dépendent des nappes et du Litani.",
      "Les eaux souterraines fournissent plus de la moitié de l'eau prélevée : Le coût du pompage pèse sur chaque arrosage.",
      "La sécheresse de 2025 a fait tomber les apports au lac de Qaraoun à environ 45 millions de m³, contre 350 millions en moyenne.",
      "Les projections nationales annoncent 10 à 20 % de pluie en moins d'ici 2040. Garder l'eau dans la zone racinaire devient un levier d'adaptation.",
    ],
  },

  usages: {
    kicker: "OÙ PART L'EAU",
    title: "L'irrigation prend sept litres sur dix",
    type: "doughnut",
    data: [
      {
        name: "Demande en eau",
        labels: ["Irrigation", "Ménages, industrie et tourisme"],
        values: [72, 28],
      },
    ],
    opts: { showLegend: true, showValue: true, dataLabelFormatCode: '0"%"', holeSize: 55 },
    reading: {
      head: "Ce que cela implique",
      body:
        "La stratégie nationale de l'eau estime la demande d'irrigation à 882 millions de m³ par an, contre environ 350 millions pour les autres usages.\n\nLe déficit en eau du pays, estimé à 373 millions de m³ par an par la Banque mondiale, se réduit d'abord dans les champs.",
    },
  },

  productions: {
    kicker: "LES CULTURES IRRIGUÉES",
    title: "Ce que le Liban irrigue",
    type: "bar",
    data: [
      {
        name: "Surface récoltée sous irrigation (milliers d'hectares, 2003)",
        labels: ["Pommes de terre", "Céréales", "Agrumes", "Légumes", "Tabac"],
        values: [23, 22, 16, 14, 9],
      },
    ],
    opts: { barDir: "col", dataLabelFormatCode: "0", showLegend: false },
    reading: {
      head: "Lecture",
      body:
        "Pommes de terre, céréales, agrumes et légumes occupent près des trois quarts de la surface récoltée sous irrigation (FAO AQUASTAT, d'après le ministère de l'Agriculture).\n\nC'est sur la pomme de terre et les légumes que les essais publiés donnent les économies d'eau les plus nettes : Ce sont les premières cultures à tester.",
    },
  },

  solutions: {
    kicker: "NOTRE RÉPONSE",
    title: "Retenir l'eau, nourrir sans lessiver",
    left: {
      head: "EVERGREEN® — retenir l'eau",
      lines: [
        "Hydro-rétenteur à base de potassium, placé dans la zone racinaire à la plantation ou à la reprise.",
        "Capte l'eau de pluie ou d'irrigation et la restitue progressivement, ce qui espace les arrosages pendant l'été sec.",
        "Capacité d'absorption de l'ordre de 300 fois son poids ; durée d'effet utile de 3 à 4 ans dans le sol.",
        "Se dégrade de 20 à 25 % par an, sans accumulation ni risque de surdosage.",
      ],
    },
    right: {
      head: "ECOFERT® — nourrir sans épuiser",
      lines: [
        "Fertilisant en microdoses d'acides aminés, azote, phosphore et potassium, issu de ressources renouvelables.",
        "Non chélatant : Il n'appauvrit pas le complexe argilo-humique et n'ajoute pas de salinité à l'eau d'irrigation.",
        "Certifié SOHISCERT et EU Bio, utilisé dans 60 pays — argument utile pour les filières exportatrices : Raisin, pomme, avocat, huile d'olive.",
        "1 à 4 flacons de 140 ml par hectare, compatibles avec un pulvérisateur comme avec la fertirrigation.",
      ],
    },
    note:
      "Les deux produits se vendent séparément mais ont été conçus pour se renforcer : L'hydro-rétenteur prolonge la disponibilité de l'eau, le fertilisant valorise cette eau sans ajouter à la charge saline du sol.",
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
        head: "Békaa et Baalbek-Hermel",
        metric: "55 % des surfaces irriguées",
        lines: [
          "Pommes de terre, légumes, céréales, vigne et vergers sur la plaine intérieure la plus sèche du pays.",
          "Irrigation par pompage dans les nappes et par les canaux du Litani : L'économie d'eau se lit sur la facture d'énergie.",
          "Grandes exploitations et stations de recherche, comme Terbol, capables d'accueillir un essai comparatif.",
        ],
      },
      {
        photo: 3,
        head: "Akkar",
        metric: "≈ 1 600 ha de serres",
        lines: [
          "Plaine côtière irriguée : Légumes de plein champ et sous serre, pommes de terre.",
          "Premières surfaces de serres du pays, où l'eau et l'engrais se pilotent au plant.",
          "Cultures à cycle court : Un essai se conclut en une saison.",
        ],
      },
      {
        photo: 4,
        head: "Liban-Sud et Nabatieh",
        metric: "Agrumes, bananes, oliviers",
        lines: [
          "Vergers d'agrumes et bananeraies sur la côte, oliviers et cultures pluviales à l'intérieur.",
          "Périmètre de Qasmieh, environ 6 000 ha alimentés par le Litani.",
          "Cultures pérennes : L'effet de 3 à 4 ans de l'hydro-rétenteur se juge à la plantation et à la replantation.",
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
        body: "Relevés de consommation d'eau et de rendement sur une saison complète, été compris.",
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
        "Crise économique et monétaire : Trésorerie des exploitations réduite, financement difficile.",
        "Exploitations très petites : 70 % font moins d'un hectare selon le recensement de 2010.",
        "Été sans pluie : Un essai doit couvrir toute la saison chaude pour être probant.",
        "Enregistrement des fertilisants et amendements auprès du ministère de l'Agriculture avant toute vente.",
      ],
    },
    right: {
      head: "Réponses",
      lines: [
        "Commencer par les grandes exploitations, les coopératives et les projets d'irrigation financés par les bailleurs.",
        "Grouper les achats par coopérative ou par périmètre irrigué.",
        "Programmer l'essai de mai à octobre, avec une parcelle témoin conduite à l'identique.",
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
