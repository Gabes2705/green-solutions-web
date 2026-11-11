export default {
  slug: "togo",
  fichier: "togo",
  palette: "plaine",
  locale: "fr-TG",
  langue: "Français",
  pied: "Green Solutions · Dossier marché Togo",

  cover: {
    eyebrow: "DOSSIER DE MARCHÉ",
    title: "Togo",
    officiel: "RÉPUBLIQUE TOGOLAISE",
    lieu: "Lomé",
    marques: "EVERGREEN® · ECOSORB® · ECOFERT® · PAULOWNIA",
    mention: "Document confidentiel · À l'usage exclusif du destinataire",
    subtitle:
      "Maïs, soja, igname et cacao : Une agriculture qui vit de la pluie.\nCe que l'hydro-rétention change quand chaque pluie doit tenir jusqu'à la suivante.",
    footer: "Green Solutions · contact@green-solutions-group.com",
    photo: 0,
  },

  chiffres: {
    kicker: "LE MARCHÉ EN BREF",
    title: "Un pays agricole qui cultive sous la pluie",
    items: [
      { value: "8,59 M", label: "Habitants en 2025 ; l'agriculture emploie 37,6 % de la population active (Banque mondiale)" },
      { value: "804 000 ha", label: "De maïs récoltés en 2024, la première culture, pour 1,01 million de tonnes (FAOSTAT)" },
      { value: "7 860 ha", label: "Équipés pour l'irrigation en 2024, pour 2,76 millions d'hectares de terres cultivées" },
      { value: "225 720 ha", label: "De cultures certifiées biologiques en 2025, surtout pour le soja (FAOSTAT)" },
    ],
    note:
      "Le soja couvre 281 684 ha. L'igname, le maïs et le manioc sont les trois premières cultures par la valeur de production : Ce sont d'abord des cultures vivrières.",
  },

  contrainte: {
    kicker: "LA CONTRAINTE",
    title: "De l'eau sur l'année, pas toujours entre deux pluies",
    photo: 1,
    caption: "Agriculture de bas-fond au Togo",
    bullets: [
      "Il tombe 1 517 mm de pluie par an à Kpalimé, mais 738 mm à Dapaong, pour 2 010 mm d'évapotranspiration de référence (ERA5, 1991-2020).",
      "Au nord, la pluie tombe en une seule saison, suivie de longs mois presque sans pluie.",
      "Le stress hydrique national n'est que de 3,4 % : L'eau existe, mais elle est peu mobilisée pour les cultures.",
      "L'agriculture prélève 34,1 % des 223 millions de m³ d'eau douce prélevés en 2022 ; 7 860 ha sont équipés pour l'irrigation.",
      "À Dapaong, la température moyenne annuelle est passée de 27,6 °C (1981-1990) à 28,1 °C (2015-2024).",
    ],
  },

  usages: {
    kicker: "OÙ PART L'EAU",
    title: "Les villes prennent la plus grande part de l'eau prélevée",
    type: "doughnut",
    data: [
      {
        name: "Prélèvements d'eau douce",
        labels: ["Ménages et villes", "Agriculture", "Industrie"],
        values: [63, 34, 3],
      },
    ],
    opts: { showLegend: true, showValue: true, dataLabelFormatCode: '0"%"', holeSize: 55 },
    reading: {
      head: "Ce que cela implique",
      body:
        "La Banque mondiale estime les prélèvements à 223 millions de m³ par an, dont 76 millions pour l'agriculture.\n\nLe potentiel d'irrigation reste large : La FAO estimait à 86 000 ha les terres aptes à une irrigation en maîtrise totale.",
    },
  },

  productions: {
    kicker: "LES CINQ RÉGIONS",
    title: "Deux fois moins de pluie au nord qu'à l'ouest",
    type: "bar",
    data: [
      {
        name: "Pluie (mm par an, moyenne 1991-2020)",
        labels: ["Kpalimé", "Sokodé", "Kara", "Atakpamé", "Lomé", "Dapaong"],
        values: [1517, 1514, 1357, 1140, 1010, 738],
      },
    ],
    opts: { barDir: "col", dataLabelFormatCode: "0", showLegend: false },
    reading: {
      head: "Lecture",
      body:
        "Pluie au chef-lieu de chaque région (deux villes pour les Plateaux), d'après la réanalyse climatique ERA5.\n\nÀ Dapaong, l'évapotranspiration de référence atteint 2 010 mm : L'air demande près de trois fois plus d'eau qu'il n'en tombe.",
    },
  },

  solutions: {
    kicker: "NOTRE RÉPONSE",
    title: "Retenir la pluie, nourrir sans épuiser",
    left: {
      head: "EVERGREEN® — retenir l'eau",
      lines: [
        "Hydro-rétenteur à base de potassium, placé dans la zone racinaire au semis ou à la plantation.",
        "Capte l'eau de chaque pluie et la restitue progressivement, ce qui aide la culture à passer les jours secs.",
        "Capacité d'absorption de l'ordre de 300 fois son poids ; durée d'effet utile de 3 à 4 ans dans le sol.",
        "Se dégrade de 20 à 25 % par an, sans accumulation ni risque de surdosage.",
      ],
    },
    right: {
      head: "ECOFERT® — nourrir sans épuiser",
      lines: [
        "Fertilisant en microdoses d'acides aminés, azote, phosphore et potassium, issu de ressources renouvelables.",
        "Non chélatant : Il n'appauvrit pas le complexe argilo-humique.",
        "Certifié SOHISCERT et EU Bio, utilisable dans les filières biologiques.",
        "1 à 4 flacons de 140 ml par hectare, compatibles avec un pulvérisateur comme avec la fertirrigation.",
      ],
    },
    note:
      "Les deux produits se vendent séparément mais ont été conçus pour se renforcer : L'hydro-rétenteur prolonge la disponibilité de l'eau, le fertilisant valorise cette eau.",
  },

  economies: {
    kicker: "ORDRES DE GRANDEUR",
    title: "Production en plus pour 10 000 ha traités (tonnes par an)",
    type: "bar",
    data: [
      { name: "Maïs", labels: ["Prudent", "Central", "Fort"], values: [537, 1074, 2148] },
      { name: "Soja", labels: ["Prudent", "Central", "Fort"], values: [285, 570, 1141] },
    ],
    opts: { barDir: "col", dataLabelFormatCode: "0", showLegend: true },
    reading: {
      head: "Comment c'est calculé",
      body:
        "Rendement moyen 2024 : 1,26 t/ha pour le maïs, 1,01 t/ha pour le soja (FAOSTAT). Le scénario central applique la moitié du gain mesuré par les essais publiés (maïs +17,1 %, soja +11,3 %) ; le prudent un quart, le fort la totalité. Aucun essai n'a encore été conduit au Togo.\n\nEn irrigation, l'eau économisée au scénario central, 11,7 millions de m³ par an, suffirait à irriguer environ 1 214 ha de plus.",
    },
  },

  regions: {
    kicker: "TROIS TERRAINS PRIORITAIRES",
    title: "Où engager les premiers essais",
    items: [
      {
        photo: 4,
        head: "Plateaux",
        metric: "1 140 à 1 517 mm de pluie par an",
        lines: [
          "Grand bassin de maïs, de soja et d'igname autour d'Atakpamé.",
          "Café et cacao dans les monts du Kloto et de l'Agou, à l'ouest.",
          "Le cacao est le premier produit agricole exporté : 88 M$ en 2024.",
        ],
      },
      {
        photo: 5,
        head: "Centrale et Kara",
        metric: "92 à 329 mm de déficit par an",
        lines: [
          "Igname, maïs, soja, sorgho et coton.",
          "Une seule saison des pluies : La culture doit tenir jusqu'à la récolte.",
          "Des collines souvent travaillées en terrasses.",
        ],
      },
      {
        photo: 6,
        head: "Savanes",
        metric: "738 mm de pluie, 1 272 mm de déficit",
        lines: [
          "La région la plus sèche ; 27,8 °C de moyenne annuelle à Dapaong.",
          "Sorgho, mil, riz de bas-fonds, oignon, coton et élevage.",
          "C'est là que garder l'eau de chaque pluie près des racines compte le plus.",
        ],
      },
    ],
  },

  deploiement: {
    kicker: "COMMENT NOUS PROCÉDONS",
    title: "Un déploiement par étapes, mesuré à chaque palier",
    items: [
      { head: "Diagnostic", body: "Analyse du sol, de l'eau et de la culture. Aucun engagement à ce stade." },
      { head: "Parcelle témoin", body: "Un essai comparatif sur un bloc, avec parcelle témoin conduite à l'identique." },
      { head: "Mesure", body: "Relevés de rendement et d'humidité du sol sur une saison des pluies complète." },
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
        "Une saison des pluies irrégulière : Un essai doit couvrir une saison complète pour être probant.",
        "Des surfaces irriguées réduites : 7 860 ha équipés dans tout le pays.",
        "Homologation des engrais selon le règlement C/REG.13/12/12 de la CEDEAO avant toute vente.",
        "Des exploitations familiales : La diffusion passe par les coopératives et les programmes publics.",
      ],
    },
    right: {
      head: "Réponses",
      lines: [
        "Programmer l'essai sur toute la saison des pluies, avec une parcelle témoin conduite à l'identique.",
        "Commencer par les filières maïs et soja, les bas-fonds aménagés et le maraîchage.",
        "Préparer tôt le dossier réglementaire : Analyses et certificats avant la négociation.",
        "Travailler avec les coopératives et les organisations de producteurs ; ECOFERT® convient aux filières biologiques.",
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
