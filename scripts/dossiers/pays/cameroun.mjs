export default {
  slug: "cameroun",
  fichier: "cameroun",
  palette: "sable",
  locale: "fr-CM",
  langue: "Français",
  pied: "Green Solutions · Dossier marché Cameroun",

  cover: {
    eyebrow: "DOSSIER DE MARCHÉ",
    title: "Cameroun",
    officiel: "RÉPUBLIQUE DU CAMEROUN",
    lieu: "Yaoundé · 2026",
    marques: "ECOSORB® · ECOFERT® · NAPEMA® · PAULOWNIA",
    mention: "Septembre 2026 · Document confidentiel · À l'usage exclusif du destinataire",
    subtitle:
      "Cacao, coton, banane et vivrier, du Sud humide au Grand Nord sahélien.\nCe que l'hydro-rétention change quand la saison sèche s'allonge.",
    footer: "Green Solutions · contact@evergreen-ecosorb.com",
    photo: 8,
  },

  chiffres: {
    kicker: "LE MARCHÉ EN BREF",
    title: "Une agriculture qui fait vivre plus de quatre actifs sur dix",
    items: [
      { value: "≈ 17 %", label: "du PIB provient de l'agriculture" },
      { value: "≈ 43 %", label: "de la population active travaille dans le secteur" },
      { value: "≈ 309 000 t", label: "de cacao récoltées en 2024/25, un record" },
      { value: "≈ 350 000 t", label: "de coton-graine attendues dans le Grand Nord" },
    ],
    note:
      "Le pays compte environ 30 millions d'habitants et une agriculture très diversifiée, portée par des centaines de milliers de petites exploitations. Les filières d'exportation — cacao, coton, banane, café, hévéa — côtoient un vivrier qui nourrit les villes et une partie des pays voisins de la zone CEMAC.",
  },

  contrainte: {
    kicker: "LA CONTRAINTE",
    title: "Deux climats, une même fragilité face à l'eau",
    photo: 6,
    bullets: [
      "Au Sud, 1 500 à 3 000 mm de pluie par an, mais des saisons sèches qui s'allongent et se décalent : les jeunes cacaoyers et les bananiers en souffrent les premiers.",
      "Au Nord, la pluie tombe en quatre à cinq mois : chaque sécheresse en début de cycle coûte des semaines de croissance au coton et aux céréales.",
      "Le lac Tchad a perdu l'essentiel de sa superficie depuis les années 1960, et la dégradation des terres progresse dans les régions septentrionales.",
      "Inondations et ravageurs ont fait reculer les surfaces de coton, dont le rendement est passé d'environ 1 600 à 1 300 kg/ha.",
      "Presque toute la production est pluviale : l'enjeu n'est pas de pomper davantage, mais de garder l'eau de pluie dans la zone racinaire au moment où la plante en a besoin.",
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
        values: [74, 18, 8],
      },
    ],
    opts: { showLegend: true, showValue: true, dataLabelFormatCode: '0"%"', holeSize: 55 },
    reading: {
      head: "Ce que cela implique",
      body:
        "Les prélèvements restent faibles au regard de la ressource du Sud : le pays n'est pas en pénurie d'eau à l'échelle nationale.\n\nLa contrainte est locale et saisonnière — le Grand Nord, la saison sèche, les jeunes plantations. C'est là que l'hydro-rétention se mesure.",
    },
  },

  productions: {
    kicker: "LES FILIÈRES",
    title: "Cinq productions structurent l'offre agricole",
    type: "bar",
    data: [
      {
        name: "Production annuelle (millions de tonnes)",
        labels: ["Manioc", "Banane plantain", "Maïs", "Coton-graine", "Cacao"],
        values: [5.5, 4.5, 2.3, 0.35, 0.31],
      },
    ],
    opts: { barDir: "col", dataLabelFormatCode: "0.0", showLegend: false },
    reading: {
      head: "Lecture",
      body:
        "Manioc, plantain et maïs nourrissent le pays ; cacao et coton rapportent les devises.\n\nLes filières d'exportation pèsent peu en tonnes mais beaucoup en valeur, et elles sont encadrées : c'est là qu'un essai mesuré se transforme le plus vite en décision.",
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
        "Certifié SOHISCERT et EU Bio, utilisé dans 60 pays — argument utile pour les filières cacao et café exportatrices.",
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
        photo: 4,
        head: "Centre et Sud — cacao",
        metric: "≈ 309 000 t en 2024/25",
        lines: [
          "Petites cacaoyères familiales, souvent âgées, où la replantation est la priorité des programmes publics.",
          "Mortalité des jeunes plants en saison sèche : l'hydro-rétenteur se juge au taux de reprise.",
          "Coopératives et exportateurs déjà organisés pour suivre des parcelles.",
        ],
      },
      {
        photo: 1,
        head: "Grand Nord — coton",
        metric: "Plus de 200 000 familles",
        lines: [
          "Producteurs encadrés par la SODECOTON, avec des intrants distribués en début de campagne.",
          "Pluie concentrée sur quelques mois et poches de sécheresse au semis.",
          "Un réseau d'encadrement qui permet un essai coordonné sur de nombreux sites.",
        ],
      },
      {
        photo: 3,
        head: "Moungo et Littoral — banane",
        metric: "Banane d'export et vivrier",
        lines: [
          "Plantations de banane dessert autour de Njombé-Penja, suivies bloc par bloc.",
          "Sols volcaniques fertiles, mais saison sèche marquée de décembre à mars.",
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
        "Logistique intérieure et coût du transport entre Douala et le Grand Nord.",
        "Insécurité dans une partie de l'Extrême-Nord et des régions du Nord-Ouest et du Sud-Ouest.",
        "Trésorerie limitée des petits producteurs, qui achètent souvent leurs intrants à crédit.",
        "Produit peu connu, parfois confondu avec les polymères à base de sodium.",
      ],
    },
    right: {
      head: "Réponses",
      lines: [
        "Passer par les structures d'encadrement et les coopératives pour grouper achats et suivi.",
        "Choisir des sites d'essai accessibles et sûrs, puis étendre selon les résultats.",
        "Raisonner le coût sur 3 à 4 ans d'effet utile et sur la reprise des jeunes plants.",
        "Documenter la formulation potassique, sans sodium, compatible avec les cultures alimentaires.",
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
    contact: "contact@evergreen-ecosorb.com · Green Solutions Groupe AIM SA, 46, route de la Condémine, 1475 Forel, Suisse",
  },
};
