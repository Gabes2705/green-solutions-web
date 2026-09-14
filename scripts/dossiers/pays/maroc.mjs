export default {
  slug: "maroc",
  fichier: "maroc",
  palette: "sable",
  locale: "fr-MA",
  langue: "Français",
  pied: "Green Solutions · Dossier marché Maroc",

  cover: {
    eyebrow: "DOSSIER DE MARCHÉ",
    title: "Maroc",
    subtitle:
      "Agrumes, maraîchage et oléiculture sous contrainte hydrique durable.\nCe que l'hydro-rétention change pour une filière exportatrice.",
    footer: "Green Solutions · contact@evergreen-ecosorb.com",
    photo: 0,
  },

  chiffres: {
    kicker: "LE MARCHÉ EN BREF",
    title: "Un pays agricole exportateur, exposé à la sécheresse",
    items: [
      { value: "≈ 12 %", label: "du PIB provient de l'agriculture" },
      { value: "≈ 8,7 M ha", label: "de surface agricole utile" },
      { value: "≈ 1,5 M ha", label: "irrigués, soit environ 17 % de la SAU" },
      { value: "≈ 30 %", label: "de la population active employée par le secteur" },
    ],
    note:
      "L'agriculture marocaine combine une filière d'exportation très structurée (agrumes, tomate, petits fruits) et une céréaliculture pluviale dont le rendement suit directement la pluviométrie. C'est cette dépendance à l'eau qui rend le pays prioritaire pour nos technologies.",
  },

  contrainte: {
    kicker: "LA CONTRAINTE",
    title: "Six campagnes de sécheresse consécutives",
    photo: 3,
    caption: "Périmètre irrigué, région du Souss",
    bullets: [
      "Depuis 2018, le Maroc enchaîne des campagnes déficitaires : le taux de remplissage des barrages est descendu sous le quart de leur capacité sur plusieurs bassins.",
      "L'agriculture mobilise de l'ordre de 85 % de l'eau prélevée : toute tension sur la ressource se traduit d'abord par des restrictions d'irrigation.",
      "Le gradient pluviométrique est extrême : de 600 à 800 mm par an dans le Rif, à moins de 100 mm dans les provinces du Sud.",
      "Les nappes du Souss-Massa et du Haouz sont surexploitées, avec un rabattement continu des niveaux piézométriques.",
      "La réponse publique — barrages, dessalement à Agadir et Casablanca, reconversion au goutte-à-goutte — traite l'offre. L'hydro-rétention agit sur la demande, à la parcelle.",
    ],
  },

  usages: {
    kicker: "OÙ PART L'EAU",
    title: "L'irrigation concentre l'essentiel du prélèvement",
    type: "doughnut",
    data: [
      {
        name: "Prélèvements",
        labels: ["Agriculture", "Eau potable", "Industrie"],
        values: [85, 10, 5],
      },
    ],
    opts: { showLegend: true, showValue: true, dataLabelFormatCode: '0"%"', holeSize: 55 },
    reading: {
      head: "Ce que cela implique",
      body:
        "Réduire de 10 % la consommation agricole libère davantage de volume que de supprimer la totalité de l'usage industriel.\n\nC'est pourquoi l'effort porte en priorité sur la parcelle, et non sur les autres usages.",
    },
  },

  productions: {
    kicker: "LES FILIÈRES",
    title: "Quatre productions portent la valeur à l'export",
    type: "bar",
    data: [
      {
        name: "Production annuelle (millions de tonnes)",
        labels: ["Agrumes", "Tomate", "Olive", "Céréales*"],
        values: [2.6, 1.4, 1.9, 5.0],
      },
    ],
    opts: { barDir: "col", dataLabelFormatCode: "0.0", showLegend: false },
    reading: {
      head: "Lecture",
      body:
        "Agrumes et tomate sont irrigués et destinés à l'export : ce sont les cultures où l'économie d'eau se convertit directement en marge.\n\n* Les céréales sont majoritairement pluviales ; le volume varie fortement d'une campagne à l'autre selon la pluviométrie.",
    },
  },

  solutions: {
    kicker: "NOTRE RÉPONSE",
    title: "Deux technologies, deux contraintes différentes",
    left: {
      head: "EVERGREEN® — retenir l'eau",
      lines: [
        "Hydro-rétenteur à base de potassium, placé dans la zone racinaire à la plantation ou à la reprise.",
        "Capte l'eau de pluie ou d'irrigation et la restitue à la plante au fur et à mesure, en supprimant le stress hydrique des phases critiques.",
        "Capacité d'absorption de l'ordre de 300 fois son poids ; durée d'effet utile de 3 à 4 ans dans le sol.",
        "Se dégrade de 20 à 25 % par an, sans accumulation ni risque de surdosage.",
      ],
    },
    right: {
      head: "ECOFERT® — nourrir sans épuiser",
      lines: [
        "Fertilisant en microdoses d'acides aminés, azote, phosphore et potassium, issu de ressources renouvelables.",
        "Non chélatant : il n'appauvrit pas le complexe argilo-humique et n'augmente ni la salinité ni la teneur en nitrates.",
        "Certifié SOHISCERT et EU Bio — condition d'accès aux cahiers des charges des acheteurs européens.",
        "1 à 4 flacons de 140 ml par hectare, compatible avec les équipements de fertirrigation existants.",
      ],
    },
    note:
      "Les deux produits se vendent séparément mais ont été conçus pour se renforcer : l'hydro-rétenteur prolonge la disponibilité de l'eau, le fertilisant valorise cette eau disponible sans dégrader le sol.",
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
        photo: 1,
        head: "Souss-Massa",
        metric: "Agrumes et primeurs",
        lines: [
          "Cœur de la filière d'exportation, déjà largement converti au goutte-à-goutte.",
          "Nappe en rabattement continu : la pression réglementaire sur les prélèvements y est la plus forte.",
          "Acheteurs européens demandeurs de certification biologique.",
        ],
      },
      {
        photo: 4,
        head: "Haouz — Marrakech",
        metric: "Maraîchage et oliviers",
        lines: [
          "Périmètres irrigués dépendants des barrages, soumis aux tours d'eau en année sèche.",
          "Forte proportion de structures moyennes, capables de décider vite sur un essai.",
          "Oléiculture en modernisation, avec des marges de progrès agronomiques nettes.",
        ],
      },
      {
        photo: 2,
        head: "Drâa-Tafilalet",
        metric: "Palmier dattier et arganier",
        lines: [
          "Oasis en situation de stress hydrique structurel, moins de 100 mm de pluie par an.",
          "Enjeu de préservation autant que de rendement : lutte contre l'ensablement.",
          "Filières à forte valeur unitaire — datte de bouche, huile d'argan.",
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
        body: "Analyse du sol, du mode d'irrigation et de la culture. Aucun engagement à ce stade.",
      },
      {
        head: "Parcelle témoin",
        body: "Un essai comparatif sur une parcelle, avec parcelle témoin conduite à l'identique.",
      },
      {
        head: "Mesure",
        body: "Relevés de consommation et de rendement sur un cycle cultural complet.",
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
        "Variabilité interannuelle de la pluviométrie : une campagne humide masque l'intérêt du produit.",
        "Fragmentation du foncier : beaucoup de petites exploitations, décision d'achat dispersée.",
        "Concurrence de solutions bas de gamme à base de sodium, qui ont laissé de mauvais souvenirs.",
        "Trésorerie des exploitations après plusieurs campagnes déficitaires.",
      ],
    },
    right: {
      head: "Réponses",
      lines: [
        "Conduire l'essai sur un cycle complet avec parcelle témoin, pour objectiver le gain même en année favorable.",
        "Passer par les coopératives et les groupements, plutôt que par l'exploitation individuelle.",
        "Documenter la différence de formulation : potassium et non sodium, compatible cultures alimentaires.",
        "Étaler l'engagement : la durée d'effet de 3 à 4 ans amortit le coût sur plusieurs campagnes.",
      ],
    },
    note:
      "Analyse acrylamide (laboratoire Polymex, ISO 9001, teneur inférieure à 3,0 µg/g), screening REACH / SVHC (SGS) et certificat SOHISCERT valable jusqu'au 4 septembre 2027 : disponibles sur demande.",
  },

  closing: {
    photo: 3,
    title: "Dites-nous votre parcelle",
    body:
      "Culture, mode d'irrigation, nature du sol, volume d'eau consommé aujourd'hui. Nous revenons avec la combinaison de technologies correspondante, les dosages, et les essais déjà conduits dans des situations comparables.\n\nUn premier échange n'engage à rien.",
    contact: "contact@evergreen-ecosorb.com · 821 Chemin des Clapiers, 83220 Le Pradet, France",
  },
};
