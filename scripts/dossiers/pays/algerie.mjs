export default {
  slug: "algerie",
  fichier: "algerie",
  palette: "desert",
  locale: "fr-DZ",
  langue: "Français",
  pied: "Green Solutions · Dossier marché Algérie",

  cover: {
    eyebrow: "DOSSIER DE MARCHÉ",
    title: "Algérie",
    officiel: "RÉPUBLIQUE ALGÉRIENNE",
    lieu: "Alger · 2026",
    marques: "ECOSORB® · ECOFERT® · NAPEMA® · PAULOWNIA",
    mention: "Septembre 2026 · Document confidentiel · À l'usage exclusif du destinataire",
    subtitle:
      "Maraîchage, dattes et céréales entre littoral saturé et périmètres sahariens.\nCe que l'hydro-rétention change quand l'eau ne se renouvelle plus.",
    footer: "Green Solutions · contact@evergreen-ecosorb.com",
    photo: 0,
  },

  chiffres: {
    kicker: "LE MARCHÉ EN BREF",
    title: "Un secteur stratégique, très exposé à la ressource en eau",
    items: [
      { value: "≈ 12 %", label: "du PIB provient de l'agriculture" },
      { value: "≈ 8,5 M ha", label: "de surface agricole utile" },
      { value: "≈ 1,4 M ha", label: "irrigués, soit environ 16 % de la SAU" },
      { value: "≈ 10–20 %", label: "de la population active, selon les sources" },
    ],
    note:
      "L'agriculture algérienne couvre l'essentiel de la demande nationale en légumes, en pomme de terre et en dattes, mais le pays importe encore de l'ordre de 6 à 8 millions de tonnes de blé par an. La marge de progression passe par l'eau disponible à la parcelle.",
  },

  contrainte: {
    kicker: "LA CONTRAINTE",
    title: "Une ressource rare, inégalement répartie",
    photo: 3,
    caption: "Périmètre irrigué sous pivot, Sud algérien",
    bullets: [
      "La disponibilité en eau renouvelable est de l'ordre de 300 m³ par habitant et par an, très en dessous du seuil de pénurie communément retenu de 1 000 m³.",
      "L'agriculture mobilise environ les deux tiers de l'eau prélevée : toute tension sur la ressource se traduit d'abord par des restrictions d'irrigation.",
      "Le gradient pluviométrique est brutal : 600 à 1 000 mm par an en Kabylie, 300 à 400 mm sur les Hauts Plateaux, moins de 100 mm dès l'entrée du Sahara.",
      "Les nappes sahariennes exploitées à El Oued, Ouargla ou Adrar sont pour l'essentiel fossiles : le mètre cube pompé ne se reconstitue pas à l'échelle humaine.",
      "La réponse publique — barrages, transferts, unités de dessalement de grande capacité — porte sur l'offre. L'hydro-rétention agit sur la demande, à la parcelle.",
    ],
  },

  usages: {
    kicker: "OÙ PART L'EAU",
    title: "L'agriculture, premier poste de prélèvement",
    type: "doughnut",
    data: [
      {
        name: "Prélèvements",
        labels: ["Agriculture", "Eau potable", "Industrie"],
        values: [65, 30, 5],
      },
    ],
    opts: { showLegend: true, showValue: true, dataLabelFormatCode: '0"%"', holeSize: 55 },
    reading: {
      head: "Ce que cela implique",
      body:
        "Réduire de 10 % la consommation agricole libère plus de volume que l'arrêt complet de l'usage industriel.\n\nDans un pays qui produit une part croissante de son eau potable par dessalement, chaque mètre cube économisé à la parcelle a une valeur directe.",
    },
  },

  productions: {
    kicker: "LES FILIÈRES",
    title: "Cinq productions structurent l'offre nationale",
    type: "bar",
    data: [
      {
        name: "Production annuelle (millions de tonnes)",
        labels: ["Pomme de terre", "Céréales*", "Tomate", "Agrumes", "Dattes"],
        values: [4.7, 3.5, 2.2, 1.4, 1.2],
      },
    ],
    opts: { barDir: "col", dataLabelFormatCode: "0.0", showLegend: false },
    reading: {
      head: "Lecture",
      body:
        "Pomme de terre, tomate et dattes sont intégralement irriguées : c'est là que l'économie d'eau se convertit en marge.\n\n* Les céréales sont majoritairement pluviales et le volume varie fortement d'une campagne à l'autre selon la pluviométrie.",
    },
  },

  solutions: {
    kicker: "NOTRE RÉPONSE",
    title: "Deux technologies, deux contraintes différentes",
    left: {
      head: "EVERGREEN® — retenir l'eau",
      lines: [
        "Hydro-rétenteur à base de potassium, incorporé dans la zone racinaire à la plantation ou à la reprise.",
        "Capte l'eau d'irrigation ou de pluie et la restitue progressivement, ce qui supprime le stress hydrique des phases critiques.",
        "Capacité d'absorption de l'ordre de 300 fois son poids ; durée d'effet utile de 3 à 4 ans dans le sol.",
        "Se dégrade de 20 à 25 % par an, sans accumulation dans le profil ni risque de surdosage.",
      ],
    },
    right: {
      head: "ECOFERT® — nourrir sans épuiser",
      lines: [
        "Fertilisant en microdoses d'acides aminés, azote, phosphore et potassium, issu de ressources renouvelables.",
        "Non chélatant : il n'appauvrit pas le complexe argilo-humique et n'augmente ni la salinité ni la teneur en nitrates.",
        "Certifié SOHISCERT et EU Bio — condition d'accès aux cahiers des charges des acheteurs européens.",
        "1 à 4 flacons de 140 ml par hectare, compatible avec les équipements de fertirrigation en place.",
      ],
    },
    note:
      "Les deux produits se vendent séparément mais se renforcent : l'hydro-rétenteur prolonge la disponibilité de l'eau, le fertilisant valorise cette eau sans charger un sol déjà sensible à la salinité.",
  },

  economies: {
    kicker: "ORDRES DE GRANDEUR",
    title: "Économie d'eau attendue selon le mode d'irrigation",
    type: "bar",
    data: [
      {
        name: "Fourchette basse (%)",
        labels: ["Goutte-à-goutte", "Aspersion", "Pivot", "Submersion"],
        values: [40, 50, 50, 55],
      },
      {
        name: "Fourchette haute (%)",
        labels: ["Goutte-à-goutte", "Aspersion", "Pivot", "Submersion"],
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
        head: "Mitidja",
        metric: "≈ 130 000 ha de plaine agricole",
        lines: [
          "Premier bassin d'agrumes et de maraîchage du pays, adossé au marché d'Alger.",
          "Nappe alluviale surexploitée, avec des remontées salines constatées en bordure côtière.",
          "Exploitations moyennes déjà équipées en goutte-à-goutte, capables de décider vite sur un essai.",
        ],
      },
      {
        photo: 4,
        head: "Ziban — Biskra",
        metric: "Dattes Deglet Nour et primeurs",
        lines: [
          "Premier pôle dattier du pays et principal fournisseur de primeurs hors saison.",
          "Sols sableux à très faible capacité de rétention : l'eau percole avant d'être absorbée.",
          "Filière d'exportation déjà structurée vers l'Europe, sensible aux exigences de certification.",
        ],
      },
      {
        photo: 2,
        head: "El Oued — Souf",
        metric: "Pomme de terre sous pivot",
        lines: [
          "Bassin de pomme de terre développé sur sable, irrigué par pivots depuis des nappes profondes.",
          "Sol filtrant et évapotranspiration élevée : le poste irrigation pèse lourd dans le coût de revient.",
          "Ressource fossile non renouvelable : l'économie d'eau conditionne la durée d'exploitation.",
        ],
      },
    ],
  },

  deploiement: {
    kicker: "COMMENT NOUS PROCÉDONS",
    title: "Un déploiement progressif, mesuré à chaque étape",
    items: [
      {
        head: "Diagnostic",
        body: "Analyse du sol, du mode d'irrigation et de la culture. Aucun engagement à ce stade.",
      },
      {
        head: "Parcelle témoin",
        body: "Un essai comparatif sur une parcelle, avec témoin conduit strictement à l'identique.",
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
      "La règle de dosage est la même partout : 3 grammes par litre de terre utile. Ce qui change d'un terrain à l'autre, c'est le volume de terre réellement exploré par les racines — un pivot sur sable du Souf et un verger d'agrumes de Mitidja n'appellent pas la même quantité.",
  },

  risques: {
    kicker: "CE QU'IL FAUT ANTICIPER",
    title: "Risques identifiés et réponses",
    left: {
      head: "Risques",
      lines: [
        "Variabilité interannuelle de la pluviométrie : une campagne humide masque l'intérêt du produit sur les Hauts Plateaux.",
        "Foncier morcelé au Nord : beaucoup de petites exploitations, décision d'achat dispersée.",
        "Concurrence de produits bas de gamme à base de sodium, qui ont laissé de mauvais souvenirs.",
        "Contraintes d'importation et délais logistiques sur les intrants agricoles.",
      ],
    },
    right: {
      head: "Réponses",
      lines: [
        "Conduire l'essai sur un cycle complet avec parcelle témoin, pour objectiver le gain même en année favorable.",
        "Passer par les coopératives, les groupements et les grandes fermes pilotes du Sud.",
        "Documenter la formulation : potassium et non sodium, compatible avec les cultures alimentaires.",
        "Étaler l'engagement : la durée d'effet de 3 à 4 ans amortit le coût sur plusieurs campagnes.",
      ],
    },
    note:
      "Analyse acrylamide (laboratoire Polymex, ISO 9001, teneur inférieure à 3,0 µg/g), screening REACH / SVHC (SGS) et certificat SOHISCERT valable jusqu'au 4 septembre 2027 : disponibles sur demande.",
  },

  closing: {
    photo: 5,
    title: "Dites-nous votre parcelle",
    body:
      "Culture, mode d'irrigation, nature du sol, volume d'eau consommé aujourd'hui. Nous revenons avec la combinaison de technologies correspondante, les dosages, et les essais déjà conduits dans des situations comparables.\n\nUn premier échange n'engage à rien.",
    contact: "contact@evergreen-ecosorb.com · 821 Chemin des Clapiers, 83220 Le Pradet, France",
  },
};
