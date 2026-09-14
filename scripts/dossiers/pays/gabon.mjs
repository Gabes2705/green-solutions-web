export default {
  slug: "gabon",
  fichier: "gabon",
  palette: "nil",
  locale: "fr-GA",
  langue: "Français",
  pied: "Green Solutions · Dossier marché Gabon",

  cover: {
    eyebrow: "DOSSIER DE MARCHÉ",
    title: "Gabon",
    officiel: "RÉPUBLIQUE GABONAISE",
    lieu: "Libreville · 2026",
    marques: "ECOSORB® · ECOFERT® · NAPEMA® · PAULOWNIA",
    mention: "Septembre 2026 · Document confidentiel · À l'usage exclusif du destinataire",
    subtitle:
      "Vivrier, maraîchage péri-urbain et plantations industrielles sur sols lessivés.\nCe que l'hydro-rétention change quand la pluie s'arrête quatre mois.",
    footer: "Green Solutions · contact@evergreen-ecosorb.com",
    photo: 1,
  },

  chiffres: {
    kicker: "LE MARCHÉ EN BREF",
    title: "Un pays forestier qui importe sa nourriture",
    items: [
      { value: "≈ 5 %", label: "du PIB provient de l'agriculture" },
      { value: "≈ 80 %", label: "des produits alimentaires consommés sont importés" },
      { value: "≈ 25 %", label: "de la population active vit du secteur agricole" },
      { value: "≈ 1 800 mm", label: "de pluie par an, mais concentrés sur huit mois" },
    ],
    note:
      "Moins de 2 % du territoire est cultivé, alors que la forêt en couvre près de 88 %. La réduction de la facture alimentaire est un objectif public constant depuis dix ans : elle suppose de sécuriser des rendements sur des sols pauvres, avec très peu d'irrigation installée.",
  },

  contrainte: {
    kicker: "LA CONTRAINTE",
    title: "Beaucoup de pluie, des sols qui ne la retiennent pas",
    photo: 2,
    caption: "Parcelle vivrière en lisière de forêt",
    bullets: [
      "Le pays reçoit de 1 500 à 3 000 mm de pluie par an, mais la grande saison sèche court de juin à septembre : trois à quatre mois quasiment sans précipitations sur la côte et le nord.",
      "Les sols ferralitiques du littoral et les sables des plateaux Batéké retiennent peu l'eau : une averse forte percole sous la zone racinaire en quelques heures.",
      "Cette percolation lessive aussi les éléments nutritifs. Les sols sont acides, pauvres en matière organique, et la fertilisation classique s'y dilue rapidement.",
      "Hors plantations industrielles, la production vivrière est presque entièrement pluviale : la campagne s'interrompt quand la pluie s'arrête.",
      "La contrainte n'est donc pas le volume d'eau reçu, mais sa disponibilité dans la zone racinaire au moment où la plante en a besoin. C'est précisément ce que corrige l'hydro-rétention.",
    ],
  },

  usages: {
    kicker: "OÙ PART L'EAU",
    title: "L'agriculture n'est pas le premier usage de l'eau",
    type: "doughnut",
    data: [
      {
        name: "Prélèvements",
        labels: ["Agriculture", "Eau potable", "Industrie"],
        values: [40, 50, 10],
      },
    ],
    opts: { showLegend: true, showValue: true, dataLabelFormatCode: '0"%"', holeSize: 55 },
    reading: {
      head: "Ce que cela implique",
      body:
        "Le Gabon n'est pas en pénurie d'eau : la ressource est abondante et l'agriculture n'en prélève qu'une part limitée.\n\nL'argument n'est donc pas d'économiser un volume national, mais de maintenir l'eau disponible à la racine pendant la saison sèche, et de réduire le coût du pompage.",
    },
  },

  productions: {
    kicker: "LES FILIÈRES",
    title: "Cinq productions structurent l'offre nationale",
    type: "bar",
    data: [
      {
        name: "Production annuelle (milliers de tonnes)",
        labels: ["Manioc", "Banane plantain", "Canne à sucre", "Huile de palme", "Caoutchouc"],
        values: [330, 300, 250, 80, 30],
      },
    ],
    opts: { barDir: "col", dataLabelFormatCode: "0", showLegend: false },
    reading: {
      head: "Lecture",
      body:
        "Manioc et banane plantain forment la base alimentaire, cultivés en petites parcelles pluviales.\n\nHuile de palme, canne et hévéa sont conduits en plantations industrielles, sur des périmètres suivis et équipés : ce sont les interlocuteurs les plus rapides à convaincre par la mesure.",
    },
  },

  solutions: {
    kicker: "NOTRE RÉPONSE",
    title: "Retenir l'eau, nourrir sans lessiver",
    left: {
      head: "EVERGREEN® — retenir l'eau",
      lines: [
        "Hydro-rétenteur à base de potassium, placé dans la zone racinaire à la plantation ou à la reprise.",
        "Capte l'eau de pluie ou d'irrigation et la restitue progressivement, ce qui lisse l'écart entre une averse tropicale et quatre mois sans pluie.",
        "Capacité d'absorption de l'ordre de 300 fois son poids ; durée d'effet utile de 3 à 4 ans dans le sol.",
        "Se dégrade de 20 à 25 % par an, sans accumulation ni risque de surdosage.",
      ],
    },
    right: {
      head: "ECOFERT® — nourrir sans épuiser",
      lines: [
        "Fertilisant en microdoses d'acides aminés, azote, phosphore et potassium, issu de ressources renouvelables.",
        "Non chélatant : il n'appauvrit pas le complexe argilo-humique, déjà fragile sur sols ferralitiques acides.",
        "Certifié SOHISCERT et EU Bio, utilisé dans 60 pays — argument utile pour les filières palme et hévéa exportatrices.",
        "1 à 4 flacons de 140 ml par hectare, compatibles avec un pulvérisateur à dos comme avec la fertirrigation.",
      ],
    },
    note:
      "Les deux produits se vendent séparément mais ont été conçus pour se renforcer : l'hydro-rétenteur prolonge la disponibilité de l'eau, le fertilisant valorise cette eau sans ajouter à la charge saline d'un sol déjà lessivé.",
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
        photo: 1,
        head: "Estuaire — Libreville",
        metric: "≈ 900 000 consommateurs",
        lines: [
          "Ceinture maraîchère de Ntoum et Kango, qui approvisionne la capitale toute l'année.",
          "Sols sableux littoraux, arrosage manuel ou goutte-à-goutte : l'eau y coûte cher en main-d'œuvre.",
          "Cultures à cycle court et à forte valeur, où un essai se conclut en une saison.",
        ],
      },
      {
        photo: 4,
        head: "Woleu-Ntem — Oyem",
        metric: "Premier bassin vivrier",
        lines: [
          "Manioc, banane plantain et arachide sur de petites parcelles familiales, presque toutes pluviales.",
          "Cacaoyers et caféiers en replantation, cultures pérennes où l'effet de 3 à 4 ans est décisif à la reprise.",
          "Coopératives déjà structurées : la décision d'achat peut être groupée.",
        ],
      },
      {
        photo: 5,
        head: "Ngounié — Mouila",
        metric: "≈ 40 000 ha de palmier",
        lines: [
          "Plantations industrielles de palmier à huile, suivies agronomiquement bloc par bloc.",
          "Forte mortalité des jeunes plants en saison sèche : l'hydro-rétenteur se juge au taux de reprise.",
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
        "Marché intérieur étroit : environ 2,4 millions d'habitants et des exploitations vivrières de très petite taille.",
        "Logistique intérieure difficile en saison des pluies, qui renchérit la distribution hors des axes principaux.",
        "Pluviométrie abondante : un essai conduit hors saison sèche masque l'intérêt du produit.",
        "Produit peu connu, parfois confondu avec les polymères à base de sodium vendus en jardinerie.",
      ],
    },
    right: {
      head: "Réponses",
      lines: [
        "Concentrer les premiers volumes sur les plantations industrielles et les coopératives maraîchères péri-urbaines.",
        "Grouper les commandes sur un conteneur via le port d'Owendo, avec un stock tampon à Libreville.",
        "Programmer systématiquement l'essai de mai à octobre, pour couvrir la grande saison sèche.",
        "Documenter la formulation potassique, sans sodium, compatible avec les cultures alimentaires.",
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
    contact: "contact@evergreen-ecosorb.com · 821 Chemin des Clapiers, 83220 Le Pradet, France",
  },
};
