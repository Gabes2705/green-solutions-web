export default {
  slug: "djibouti",
  fichier: "djibouti",
  palette: "desert",
  locale: "fr-DJ",
  langue: "Français",
  pied: "Green Solutions · Dossier marché Djibouti",

  cover: {
    eyebrow: "DOSSIER DE MARCHÉ",
    title: "Djibouti",
    officiel: "RÉPUBLIQUE DE DJIBOUTI",
    lieu: "Djibouti",
    marques: "EVERGREEN® · ECOSORB® · ECOFERT® · PAULOWNIA",
    mention: "Document confidentiel · À l'usage exclusif du destinataire",
    subtitle:
      "Jardins maraîchers, palmiers et vergers irrigués par des nappes qui se salinisent.\nCe que l'hydro-rétention change quand chaque mètre cube est pompé ou dessalé.",
    footer: "Green Solutions · contact@green-solutions-group.com",
    photo: 0,
  },

  chiffres: {
    kicker: "LE MARCHÉ EN BREF",
    title: "Un pays sans rivière, qui cultive des jardins",
    items: [
      { value: "1 066 809", label: "Habitants au recensement de 2024, dont 72 % dans la région de Djibouti-ville" },
      { value: "264 m³", label: "D'eau douce renouvelable par habitant et par an (2022), sans aucun cours d'eau permanent" },
      { value: "228 mm", label: "De pluie par an à Djibouti-ville, pour 2 017 mm d'évapotranspiration de référence" },
      { value: "1 010 ha", label: "Équipés pour l'irrigation en 2023. La production locale couvre environ 10 % de la consommation alimentaire" },
    ],
    note:
      "Environ 9 896 t de produits végétaux ont été récoltées en 2019/2020 (INSTAD) : Maraîchage et vergers le long des oueds. L'élevage fait environ les trois quarts du PIB agricole.",
  },

  contrainte: {
    kicker: "LA CONTRAINTE",
    title: "Des nappes qui baissent et se salinisent",
    photo: 1,
    caption: "Le lac Abbé, région de Dikhil",
    bullets: [
      "Il tombe 228 mm de pluie par an à Djibouti-ville et 142 mm à Dikhil, pour plus de 1 900 mm d'évapotranspiration de référence partout (ERA5, 1991-2020).",
      "Les nappes fournissent l'eau de 99 % de la population rurale (FIDA). Le pays n'a aucun cours d'eau permanent.",
      "La nappe de la capitale se salinise ; le déficit de Djibouti-ville dépasserait 5 millions de m³ par an.",
      "À Djibouti-ville, la température moyenne annuelle est passée de 28,6 °C (1981-1990) à 29,8 °C (2015-2024).",
      "L'usine de dessalement de Doraleh produit 22 500 m³ par jour depuis 2021. Garder l'eau d'irrigation dans la zone racinaire réduit la part qui s'évapore.",
    ],
  },

  usages: {
    kicker: "OÙ PART L'EAU",
    title: "Les villes prennent l'essentiel de l'eau prélevée",
    type: "doughnut",
    data: [
      {
        name: "Prélèvements d'eau douce",
        labels: ["Ménages et villes", "Agriculture"],
        values: [84, 16],
      },
    ],
    opts: { showLegend: true, showValue: true, dataLabelFormatCode: '0"%"', holeSize: 55 },
    reading: {
      head: "Ce que cela implique",
      body:
        "La Banque mondiale estime les prélèvements à 19 millions de m³ par an, dont 3 millions pour l'agriculture.\n\nChaque mètre cube économisé dans les jardins reste disponible pour la région de Djibouti-ville, passée de 475 322 à 767 250 habitants entre 2009 et 2024.",
    },
  },

  productions: {
    kicker: "LES SIX RÉGIONS",
    title: "Moins de 300 mm de pluie dans chaque région",
    type: "bar",
    data: [
      {
        name: "Pluie (mm par an, moyenne 1991-2020)",
        labels: ["Ali Sabieh", "Obock", "Tadjourah", "Djibouti-ville", "Arta", "Dikhil"],
        values: [284, 235, 229, 228, 198, 142],
      },
    ],
    opts: { barDir: "col", dataLabelFormatCode: "0", showLegend: false },
    reading: {
      head: "Lecture",
      body:
        "Pluie au chef-lieu de chaque région, d'après la réanalyse climatique ERA5.\n\nL'évapotranspiration de référence dépasse partout 1 900 mm et atteint 2 398 mm à Dikhil : L'air demande sept à dix-sept fois plus d'eau qu'il n'en tombe.",
    },
  },

  solutions: {
    kicker: "NOTRE RÉPONSE",
    title: "Retenir l'eau, nourrir sans saler",
    left: {
      head: "EVERGREEN® — retenir l'eau",
      lines: [
        "Hydro-rétenteur à base de potassium, placé dans la zone racinaire à la plantation ou à la reprise.",
        "Capte l'eau d'irrigation et la restitue progressivement, ce qui espace les arrosages pendant la saison chaude.",
        "Capacité d'absorption de l'ordre de 300 fois son poids ; durée d'effet utile de 3 à 4 ans dans le sol.",
        "Se dégrade de 20 à 25 % par an, sans accumulation ni risque de surdosage.",
      ],
    },
    right: {
      head: "ECOFERT® — nourrir sans épuiser",
      lines: [
        "Fertilisant en microdoses d'acides aminés, azote, phosphore et potassium, issu de ressources renouvelables.",
        "Non chélatant : Il n'appauvrit pas le complexe argilo-humique et n'ajoute pas de salinité à l'eau d'irrigation.",
        "Certifié SOHISCERT et EU Bio, utilisé dans 60 pays.",
        "1 à 4 flacons de 140 ml par hectare, compatibles avec un pulvérisateur comme avec la fertirrigation.",
      ],
    },
    note:
      "Les deux produits se vendent séparément mais ont été conçus pour se renforcer : L'hydro-rétenteur prolonge la disponibilité de l'eau, le fertilisant valorise cette eau sans ajouter à la charge saline du sol.",
  },

  economies: {
    kicker: "ORDRES DE GRANDEUR",
    title: "Eau agricole économisée chaque année, en jours de production de Doraleh",
    type: "bar",
    data: [
      {
        name: "Jours de production de l'usine de Doraleh",
        labels: ["Scénario prudent", "Scénario central", "Scénario fort"],
        values: [15, 31, 62],
      },
    ],
    opts: { barDir: "col", dataLabelFormatCode: "0", showLegend: false },
    reading: {
      head: "Comment c'est calculé",
      body:
        "L'eau agricole vaut 3,0 millions de m³ par an pour 1 010 ha équipés. Le scénario central applique les essais pastèque et palmier dattier au maraîchage et aux palmiers, et 5 à 20 % aux vergers ; le prudent en retient la moitié, le fort le double.\n\nAu scénario central, 696 750 m³ sont économisés chaque année : 31 jours de production de l'usine de Doraleh, environ 14 % du déficit de la capitale.",
    },
  },

  regions: {
    kicker: "TROIS TERRAINS PRIORITAIRES",
    title: "Où engager les premiers essais",
    items: [
      {
        photo: 4,
        head: "Dikhil",
        metric: "142 mm de pluie par an",
        lines: [
          "La région la plus chaude et la plus sèche : 2 398 mm d'évapotranspiration de référence.",
          "Les plaines de Hanlé et du Gobaad et les rives du lac Abbé concentrent l'essentiel du potentiel agricole du pays.",
          "Une étude de la JICA (2014) porte sur l'irrigation durable dans le sud, dont le bassin d'Afka Arraba.",
        ],
      },
      {
        photo: 5,
        head: "Ali Sabieh",
        metric: "284 mm, la région la plus arrosée",
        lines: [
          "Région montagneuse du sud, le long du chemin de fer vers l'Éthiopie.",
          "Jardins et vergers autour d'Ali Sabieh, d'Ali Adde et de Holl-Holl.",
          "Ils dépendent de puits et de petites retenues : Chaque arrosage gardé dans le sol compte.",
        ],
      },
      {
        photo: 6,
        head: "Djibouti-ville et Arta",
        metric: "72 % de la population",
        lines: [
          "Les jardins de l'oued Ambouli et les espaces verts urbains sont les principaux usagers agricoles de l'eau.",
          "À Arta, sur les hauteurs, les périmètres maraîchers profitent du marché de la capitale.",
          "L'usine de dessalement de Doraleh et l'arrivée de la conduite venue d'Éthiopie s'y trouvent.",
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
        body: "Analyse du sol, de l'eau d'arrosage et de la culture. Aucun engagement à ce stade.",
      },
      {
        head: "Parcelle témoin",
        body: "Un essai comparatif sur un bloc, avec parcelle témoin conduite à l'identique.",
      },
      {
        head: "Mesure",
        body: "Relevés de consommation d'eau et de rendement sur une saison complète, saison chaude comprise.",
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
        "Des surfaces cultivées réduites : 1 010 ha équipés pour l'irrigation dans tout le pays.",
        "Une eau de nappe salée dans plusieurs zones : Le sol se charge en sel à chaque arrosage.",
        "Une chaleur extrême l'été : Un essai doit couvrir la saison chaude pour être probant.",
        "Enregistrement des fertilisants et amendements auprès du ministère de l'Agriculture avant toute vente.",
      ],
    },
    right: {
      head: "Réponses",
      lines: [
        "Commencer par les espaces verts, les projets d'irrigation financés par les bailleurs et les jardins des oueds.",
        "Une formulation au potassium, jamais au sodium : Elle n'ajoute pas de salinité.",
        "Programmer l'essai sur la saison chaude, avec une parcelle témoin conduite à l'identique.",
        "Préparer tôt le dossier réglementaire : Analyses et certificats avant la négociation.",
      ],
    },
    note:
      "Analyse acrylamide (laboratoire Polymex, ISO 9001, teneur inférieure à 3,0 µg/g) et screening REACH / SVHC (SGS) disponibles sur demande, ainsi que le certificat SOHISCERT valable jusqu'au 4 septembre 2027.",
  },

  closing: {
    photo: 7,
    title: "Dites-nous votre parcelle",
    body:
      "Culture, mode d'arrosage, nature du sol, volume d'eau consommé aujourd'hui. Nous revenons avec la combinaison de technologies correspondante, les dosages, et les essais déjà conduits dans des situations comparables.\n\nUn premier échange n'engage à rien.",
    contact: "contact@green-solutions-group.com · Green Solutions Groupe AIM SA, 46, route de la Condémine, 1475 Forel, Suisse",
  },
};
