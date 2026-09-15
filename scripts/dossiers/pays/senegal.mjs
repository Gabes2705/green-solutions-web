export default {
  slug: "senegal",
  fichier: "senegal",
  palette: "plaine",
  locale: "fr-SN",
  langue: "Français",
  pied: "Green Solutions · Dossier marché Sénégal",

  cover: {
    eyebrow: "DOSSIER DE MARCHÉ",
    title: "Sénégal",
    officiel: "RÉPUBLIQUE DU SÉNÉGAL",
    lieu: "Dakar · 2026",
    marques: "ECOSORB® · ECOFERT® · NAPEMA® · PAULOWNIA",
    mention: "Septembre 2026 · Document confidentiel · À l'usage exclusif du destinataire",
    subtitle:
      "Arachide, riz du fleuve et maraîchage des Niayes sur des sols sableux et des pluies qui reculent.\nCe que l'hydro-rétention change quand chaque semaine sèche compte.",
    footer: "Green Solutions · contact@evergreen-ecosorb.com",
    photo: 3,
  },

  chiffres: {
    kicker: "LE MARCHÉ EN BREF",
    title: "Un pays agricole à la pluie courte et aux sols pauvres",
    items: [
      { value: "≈ 17 %", label: "du PIB provient de l'agriculture, élevage compris" },
      { value: "≈ 3,8 M ha", label: "de terres cultivables" },
      { value: "≈ 1,5 M t", label: "d'arachide récoltées les bonnes années" },
      { value: "300–1 200 mm", label: "de pluie par an, du Nord sahélien à la Casamance" },
    ],
    note:
      "Environ 18 millions d'habitants, une façade atlantique et le fleuve Sénégal : le pays a les terres et une partie de l'eau, mais une agriculture encore largement pluviale, concentrée sur quelques mois d'hivernage. La souveraineté alimentaire, en particulier pour le riz, est une priorité affichée des pouvoirs publics.",
  },

  contrainte: {
    kicker: "LA CONTRAINTE",
    title: "Un hivernage court, des sols sableux qui ne gardent rien",
    photo: 1,
    bullets: [
      "L'essentiel des pluies tombe en trois à quatre mois, de juillet à octobre : une pause de deux semaines après le semis suffit à compromettre la levée.",
      "Les sols sableux du bassin arachidier sont pauvres en matière organique : l'eau percole sous la zone racinaire en quelques heures.",
      "Au nord, la pluviométrie reste proche de 300 mm par an ; seule la Casamance dépasse régulièrement 1 000 mm.",
      "Dans les Niayes, le maraîchage dépend de nappes peu profondes qui baissent et se salinisent près de la côte.",
      "Dans la vallée du fleuve, l'eau est pompée à grands frais : chaque tour d'eau économisé réduit la facture de gasoil ou d'électricité.",
    ],
  },

  usages: {
    kicker: "OÙ PART L'EAU",
    title: "L'irrigation concentre presque tous les prélèvements",
    type: "doughnut",
    data: [
      {
        name: "Prélèvements",
        labels: ["Agriculture", "Eau potable", "Industrie"],
        values: [93, 4, 3],
      },
    ],
    opts: { showLegend: true, showValue: true, dataLabelFormatCode: '0"%"', holeSize: 55 },
    reading: {
      head: "Ce que cela implique",
      body:
        "Les prélèvements agricoles se concentrent dans la vallée du fleuve et les Niayes, là où l'eau est pompée.\n\nC'est donc au champ que se joue l'économie d'eau, et sur les cultures irriguées que l'essai se chiffre le plus vite.",
    },
  },

  productions: {
    kicker: "LES FILIÈRES",
    title: "Cinq productions structurent l'offre nationale",
    type: "bar",
    data: [
      {
        name: "Production annuelle (millions de tonnes)",
        labels: ["Arachide", "Riz paddy", "Mil", "Maïs", "Oignon"],
        values: [1.5, 1.3, 1.0, 0.7, 0.45],
      },
    ],
    opts: { barDir: "col", dataLabelFormatCode: "0.0", showLegend: false },
    reading: {
      head: "Lecture",
      body:
        "Arachide et mil occupent l'essentiel des surfaces pluviales du bassin arachidier.\n\nRiz irrigué et oignon, cultivés sous pompage, sont les filières où l'eau économisée se voit directement dans la marge. Volumes arrondis, variables selon l'hivernage.",
    },
  },

  solutions: {
    kicker: "NOTRE RÉPONSE",
    title: "Retenir l'eau, nourrir sans épuiser",
    left: {
      head: "EVERGREEN® — retenir l'eau",
      lines: [
        "Hydro-rétenteur à base de potassium, placé dans la zone racinaire au semis, à la plantation ou à la reprise.",
        "Capte l'eau de pluie ou d'irrigation et la restitue progressivement, ce qui amortit une pause de pluie en début d'hivernage.",
        "Capacité d'absorption de l'ordre de 300 fois son poids ; durée d'effet utile de 3 à 4 ans dans le sol.",
        "Se dégrade de 20 à 25 % par an, sans accumulation ni risque de surdosage.",
      ],
    },
    right: {
      head: "ECOFERT® — nourrir sans épuiser",
      lines: [
        "Fertilisant en microdoses d'acides aminés, azote, phosphore et potassium, issu de ressources renouvelables.",
        "Non chélatant : il n'appauvrit pas le complexe argilo-humique, déjà fragile sur sols sableux.",
        "Certifié SOHISCERT et EU Bio, utilisé dans 60 pays — argument utile pour les exportateurs de légumes et de mangues.",
        "1 à 4 flacons de 140 ml par hectare, compatibles avec un pulvérisateur à dos comme avec la fertirrigation.",
      ],
    },
    note:
      "Les deux produits se vendent séparément mais ont été conçus pour se renforcer : l'hydro-rétenteur prolonge la disponibilité de l'eau, le fertilisant valorise cette eau sans dégrader le sol.",
  },

  economies: {
    kicker: "ORDRES DE GRANDEUR",
    title: "Économie d'eau attendue selon le mode d'irrigation",
    type: "bar",
    data: [
      {
        name: "Fourchette basse (%)",
        labels: ["Goutte-à-goutte", "Aspersion", "Pivot", "Gravitaire"],
        values: [40, 50, 50, 55],
      },
      {
        name: "Fourchette haute (%)",
        labels: ["Goutte-à-goutte", "Aspersion", "Pivot", "Gravitaire"],
        values: [55, 65, 65, 70],
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
        photo: 4,
        head: "Vallée du fleuve Sénégal",
        metric: "Riz et oignon irrigués",
        lines: [
          "Périmètres irrigués aménagés par la SAED, de Saint-Louis à Matam.",
          "Pompage coûteux et parcelles sableuses en bordure : l'eau économisée se lit sur la facture.",
          "Organisations paysannes structurées, capables de suivre un essai sur une campagne.",
        ],
      },
      {
        photo: 5,
        head: "Niayes",
        metric: "Premier bassin maraîcher",
        lines: [
          "Bande côtière de Dakar à Saint-Louis, qui produit l'essentiel des légumes du pays.",
          "Nappes peu profondes en baisse et salinisation près de la mer.",
          "Cultures à cycle court et à forte valeur : un essai se conclut en une saison.",
        ],
      },
      {
        photo: 0,
        head: "Bassin arachidier",
        metric: "Arachide et mil pluviaux",
        lines: [
          "Arachide et mil sur sols sableux épuisés, dans le centre du pays.",
          "Semis exposés aux pauses de pluie de début d'hivernage.",
          "Coopératives et huiliers capables de regrouper les commandes.",
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
        body: "Relevés de levée, de consommation d'eau et de rendement sur une campagne complète.",
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
        "Trésorerie limitée des petits producteurs pluviaux.",
        "Variabilité de l'hivernage : une bonne année masque l'intérêt du produit.",
        "Produit peu connu, parfois confondu avec les polymères à base de sodium.",
        "Homologation des intrants auprès des autorités avant la vente commerciale.",
      ],
    },
    right: {
      head: "Réponses",
      lines: [
        "Commencer par le maraîchage des Niayes et les cultures irriguées, où le gain se chiffre vite.",
        "Mesurer sur une campagne complète avec parcelle témoin, même en bonne année.",
        "Documenter la formulation potassique, sans sodium, compatible avec les cultures alimentaires.",
        "Ouvrir le dossier d'homologation en parallèle des premiers essais.",
      ],
    },
    note:
      "Analyse acrylamide (laboratoire Polymex, ISO 9001, teneur inférieure à 3,0 µg/g) et screening REACH / SVHC (SGS) disponibles sur demande, ainsi que le certificat SOHISCERT valable jusqu'au 4 septembre 2027.",
  },

  closing: {
    photo: 3,
    title: "Dites-nous votre parcelle",
    body:
      "Culture, mode d'arrosage, nature du sol, volume d'eau consommé aujourd'hui. Nous revenons avec la combinaison de technologies correspondante, les dosages, et les essais déjà conduits dans des situations comparables.\n\nUn premier échange n'engage à rien.",
    contact: "contact@evergreen-ecosorb.com · Green Solutions Groupe AIM SA, 46, route de la Condémine, 1475 Forel, Suisse",
  },
};
