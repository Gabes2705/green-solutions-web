export default {
  slug: "haiti",
  fichier: "haiti",
  palette: "nil",
  locale: "fr-HT",
  langue: "Français",
  pied: "Green Solutions · Dossier marché Haïti",

  cover: {
    eyebrow: "DOSSIER DE MARCHÉ",
    title: "Haïti",
    officiel: "RÉPUBLIQUE D'HAÏTI",
    lieu: "Port-au-Prince · 2026",
    marques: "ECOSORB® · ECOFERT® · NAPEMA® · PAULOWNIA",
    mention: "Septembre 2026 · Document confidentiel · À l'usage exclusif du destinataire",
    subtitle:
      "Vivrier, riz irrigué et cultures de rente sur des sols en érosion.\nCe que l'hydro-rétention change là où la pluie ruisselle au lieu d'entrer.",
    footer: "Green Solutions · contact@evergreen-ecosorb.com",
    photo: 0,
  },

  chiffres: {
    kicker: "LE MARCHÉ EN BREF",
    title: "Une agriculture qui fait vivre la moitié du pays",
    items: [
      { value: "≈ 20 %", label: "du PIB provient de l'agriculture" },
      { value: "≈ 50 %", label: "de la population active travaille la terre" },
      { value: "≈ 1 M ha", label: "de surface cultivée, très morcelée" },
      { value: "≈ 0,7 ha", label: "de surface moyenne par exploitation" },
    ],
    note:
      "L'agriculture haïtienne est d'abord vivrière et conduite sur de très petites parcelles, souvent en pente. Elle ne couvre plus qu'une part de la consommation nationale : près de la moitié des besoins alimentaires est importée, dont l'essentiel du riz. Regagner du rendement à la parcelle a ici une portée qui dépasse l'exploitation.",
  },

  contrainte: {
    kicker: "LA CONTRAINTE",
    title: "Il pleut assez, mais l'eau ne reste pas",
    photo: 1,
    caption: "Versants cultivés, Haïti",
    bullets: [
      "La pluviométrie est abondante — de 1 000 à 2 000 mm par an selon les régions — mais concentrée sur deux saisons, avec de longues périodes sèches entre les deux.",
      "Le couvert forestier a presque disparu. Sur des versants dénudés et pentus, la pluie ruisselle et emporte la terre arable au lieu de s'infiltrer.",
      "L'érosion fait perdre chaque année des millimètres de sol fertile : le problème n'est pas le volume d'eau reçu, c'est la fraction que le sol parvient à retenir.",
      "Les périmètres irrigués aménagés, de l'ordre de 100 000 hectares, sont pour beaucoup dégradés ou partiellement hors service faute d'entretien.",
      "Les cyclones et tempêtes tropicales détruisent régulièrement les récoltes et aggravent le décapage des sols sur les parcelles les plus exposées.",
    ],
  },

  usages: {
    kicker: "OÙ PART L'EAU",
    title: "L'irrigation domine largement les prélèvements",
    type: "doughnut",
    data: [
      {
        name: "Prélèvements",
        labels: ["Agriculture", "Eau potable", "Industrie"],
        values: [80, 15, 5],
      },
    ],
    opts: { showLegend: true, showValue: true, dataLabelFormatCode: '0"%"', holeSize: 55 },
    reading: {
      head: "Ce que cela implique",
      body:
        "Réduire de 10 % la consommation d'irrigation libère un volume comparable à la moitié de tout l'usage domestique du pays.\n\nMais la vraie marge, ici, est en pluvial : c'est sur les parcelles non irriguées que la pluie se perd le plus.",
    },
  },

  productions: {
    kicker: "LES CULTURES",
    title: "Cinq productions structurent les campagnes",
    type: "bar",
    data: [
      {
        name: "Production annuelle (milliers de tonnes)",
        labels: ["Manioc", "Banane plantain", "Maïs", "Riz paddy", "Haricot"],
        values: [600, 320, 300, 150, 70],
      },
    ],
    opts: { barDir: "col", dataLabelFormatCode: "0", showLegend: false },
    reading: {
      head: "Lecture",
      body:
        "Ces cinq cultures sont d'abord destinées au marché intérieur : chaque tonne gagnée remplace une tonne importée.\n\nÀ côté, les cultures de rente — café, cacao, mangue Francique, vétiver — pèsent peu en volume mais portent l'essentiel des devises agricoles.",
    },
  },

  solutions: {
    kicker: "NOTRE RÉPONSE",
    title: "Deux technologies, deux contraintes différentes",
    left: {
      head: "EVERGREEN® — retenir l'eau",
      lines: [
        "Hydro-rétenteur à base de potassium, placé dans la zone racinaire à la plantation ou à la reprise.",
        "Capte l'eau de pluie avant qu'elle ne ruisselle et la restitue à la plante pendant les séquences sèches entre deux saisons.",
        "Capacité d'absorption de l'ordre de 300 fois son poids ; durée d'effet utile de 3 à 4 ans dans le sol.",
        "Sur parcelle en pente, il agit là où l'aménagement anti-érosif seul ne suffit pas : à l'intérieur du sol.",
      ],
    },
    right: {
      head: "ECOFERT® — nourrir sans épuiser",
      lines: [
        "Fertilisant en microdoses d'acides aminés, azote, phosphore et potassium, issu de ressources renouvelables.",
        "Non chélatant : il n'appauvrit pas le complexe argilo-humique, déjà très entamé sur les sols décapés.",
        "Certifié SOHISCERT et EU Bio — utile pour les filières café et cacao qui visent les primes de certification.",
        "1 à 4 flacons de 140 ml par hectare : un format transportable, compatible avec le morcellement des parcelles.",
      ],
    },
    note:
      "Les deux produits se vendent séparément mais ont été conçus pour se renforcer : l'hydro-rétenteur prolonge la disponibilité de l'eau, le fertilisant valorise cette eau disponible sans dégrader davantage un sol déjà fragile.",
  },

  economies: {
    kicker: "ORDRES DE GRANDEUR",
    title: "Économie d'eau attendue selon le mode d'irrigation",
    type: "bar",
    data: [
      {
        name: "Fourchette basse (%)",
        labels: ["Goutte-à-goutte", "Aspersion", "Gravitaire", "Submersion (riz)"],
        values: [40, 50, 55, 55],
      },
      {
        name: "Fourchette haute (%)",
        labels: ["Goutte-à-goutte", "Aspersion", "Gravitaire", "Submersion (riz)"],
        values: [55, 65, 70, 70],
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
        head: "Vallée de l'Artibonite",
        metric: "Le grenier à riz du pays",
        lines: [
          "Le plus grand périmètre irrigué d'Haïti, alimenté par le fleuve Artibonite.",
          "Riz conduit en submersion : c'est le mode d'irrigation où la marge d'économie est la plus large.",
          "Réseau de canaux ancien et partiellement dégradé, d'où des inégalités d'accès à l'eau en bout de parcours.",
        ],
      },
      {
        photo: 2,
        head: "Plateau Central",
        metric: "Vivrier et élevage",
        lines: [
          "Maïs, haricot, manioc et sorgho conduits presque entièrement en pluvial.",
          "Saison sèche marquée : c'est exactement la séquence que l'hydro-rétenteur est fait pour franchir.",
          "Organisations paysannes structurées, capables de porter un essai groupé sur plusieurs parcelles.",
        ],
      },
      {
        photo: 5,
        head: "Grand Sud — Grand'Anse",
        metric: "Café, cacao, mangue, vétiver",
        lines: [
          "Cultures de rente destinées à l'export, seules à supporter une prime de certification biologique.",
          "Versants pentus et fortement érodés : chaque averse emporte du sol si rien ne le retient.",
          "Zone exposée aux cyclones, où la reprise des jeunes plants après sinistre est un enjeu récurrent.",
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
        body: "Analyse du sol, de la pente et de la culture. Aucun engagement à ce stade.",
      },
      {
        head: "Parcelle témoin",
        body: "Un essai comparatif sur une parcelle, avec parcelle témoin conduite à l'identique.",
      },
      {
        head: "Mesure",
        body: "Relevés de rendement et de reprise sur un cycle cultural complet.",
      },
      {
        head: "Extension",
        body: "Généralisation progressive par groupement de producteurs, sur la base des résultats.",
      },
    ],
    note:
      "Un essai est déjà en cours en Haïti avec l'Institut CEHPAPE, sur maraîchage, banane plantain et riz, avec ECOSORB®, ECOFERT®, EVERGREEN® et NAPEMA®. Les premiers relevés sont disponibles sur demande.",
  },

  risques: {
    kicker: "CE QU'IL FAUT ANTICIPER",
    title: "Risques identifiés et réponses",
    left: {
      head: "Risques",
      lines: [
        "Morcellement extrême du foncier : la décision d'achat est dispersée sur des milliers de très petites exploitations.",
        "Capacité de trésorerie limitée des producteurs, qui rend tout achat d'intrant difficile à engager seul.",
        "Aléa cyclonique : une tempête peut effacer les résultats d'un essai en cours de campagne.",
        "Logistique intérieure et sécurité des déplacements, qui compliquent le suivi agronomique de terrain.",
      ],
    },
    right: {
      head: "Réponses",
      lines: [
        "Passer par les organisations de producteurs et les coopératives plutôt que par l'exploitation individuelle.",
        "Adosser les premiers déploiements aux programmes de développement agricole et aux bailleurs déjà présents.",
        "Conduire les essais sur deux cycles, pour que l'aléa d'une campagne ne décide pas seul du résultat.",
        "S'appuyer sur l'essai CEHPAPE en cours et sur un relais local établi pour le suivi des parcelles.",
      ],
    },
    note:
      "Analyse acrylamide (laboratoire Polymex, ISO 9001, teneur inférieure à 3,0 µg/g), screening REACH / SVHC (SGS) et certificat SOHISCERT valable jusqu'au 4 septembre 2027 : disponibles sur demande.",
  },

  closing: {
    photo: 4,
    title: "Dites-nous votre parcelle",
    body:
      "Culture, pente, nature du sol, mode d'irrigation s'il y en a un. Nous revenons avec la combinaison de technologies correspondante, les dosages, et les résultats déjà relevés en Haïti et dans la Caraïbe.\n\nUn premier échange n'engage à rien.",
    contact: "contact@evergreen-ecosorb.com · Green Solutions Groupe AIM SA, 46, route de la Condémine, 1475 Forel, Suisse",
  },
};
