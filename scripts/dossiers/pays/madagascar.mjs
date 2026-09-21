export default {
  slug: "madagascar",
  fichier: "madagascar",
  palette: "sable",
  locale: "fr-MG",
  langue: "Français",
  pied: "Green Solutions · Dossier marché Madagascar",

  cover: {
    eyebrow: "DOSSIER DE MARCHÉ",
    title: "Madagascar",
    officiel: "RÉPUBLIQUE DE MADAGASCAR",
    lieu: "Antananarivo · 2026",
    marques: "EVERGREEN® · ECOSORB® · WATER VITAL® · ECOFERT® · NAPEMA®",
    mention: "Septembre 2026 · Document confidentiel · À l'usage exclusif du destinataire",
    subtitle:
      "Riz des Hautes Terres, cultures vivrières du Grand Sud et filières de valeur exposées à des chocs climatiques très contrastés.\nCe que la rétention d’eau change quand la moyenne nationale masque les crises locales.",
    footer: "Green Solutions · contact@evergreen-ecosorb.com",
    photo: 0,
  },

  chiffres: {
    kicker: "LE PAYS EN BREF",
    title: "Une agriculture pluviale, vitale et très exposée",
    items: [
      { value: "31,2 M", label: "d’habitants" },
      { value: "1,7 M", label: "de personnes en forte insécurité alimentaire aiguë" },
      { value: "11,3 %", label: "de stress hydrique national en 2022" },
      { value: "≈ 40 %", label: "des enfants touchés par la malnutrition chronique" },
    ],
    note:
      "Le stress hydrique national reste inférieur aux seuils élevés, mais cette moyenne ne décrit ni les sécheresses récurrentes du Sud, ni les déficits saisonniers, ni la dépendance d’une grande partie des exploitations aux pluies. Les chiffres alimentaires sont ceux du Programme alimentaire mondial ; l’indicateur d’eau vient de la Banque mondiale et de FAO AQUASTAT.",
  },

  contrainte: {
    kicker: "LA CONTRAINTE",
    title: "Trop peu d’eau au Sud, parfois trop d’eau à l’Est",
    photo: 1,
    caption: "Travail du sol dans une exploitation malgache",
    bullets: [
      "Le Sud est régulièrement touché par la sécheresse, tandis que le Sud-Est subit cyclones et inondations récurrents : le même pays doit gérer le manque et l’excès d’eau.",
      "Une grande part de la production dépend directement de la pluie ; une rupture au semis ou à la floraison devient rapidement une perte de récolte.",
      "Sur les Hautes Terres, les rizières retiennent l’eau mais les cultures de contre-saison et les pépinières restent exposées aux tours d’eau irréguliers.",
      "Dans le Grand Sud, sols pauvres, vent et évaporation réduisent la réserve utile autour des racines.",
      "L’enjeu n’est pas de remplacer l’irrigation : il est de sécuriser la zone racinaire et de mesurer l’effet sur une parcelle témoin conduite à l’identique.",
    ],
  },

  usages: {
    kicker: "LIRE LE STRESS HYDRIQUE",
    title: "Une moyenne nationale basse peut cacher un risque local fort",
    type: "bar",
    data: [
      {
        name: "Part des ressources renouvelables prélevée (%)",
        labels: ["Madagascar, 2022", "Seuil de stress faible", "Seuil de stress élevé"],
        values: [11.3, 25, 75],
      },
    ],
    opts: { barDir: "col", dataLabelFormatCode: '0.0"%"', showLegend: false },
    reading: {
      head: "Ce que cela implique",
      body:
        "L’indicateur ODD 6.4.2 place Madagascar sous 25 % au niveau national. Il ne mesure toutefois ni la répartition géographique, ni la saison, ni une sécheresse météorologique.\n\nLes essais doivent donc être ciblés par bassin, culture et calendrier, en priorité là où les racines manquent réellement d’eau.",
    },
  },

  solutions: {
    kicker: "NOTRE RÉPONSE",
    title: "Une combinaison à tester, pas une promesse isolée",
    left: {
      head: "EVERGREEN® / ECOSORB® — retenir près des racines",
      lines: [
        "Hydro-rétenteur à base de potassium placé dans la zone racinaire au semis, à la plantation ou au repiquage.",
        "Capte une partie de la pluie ou de l’irrigation et la restitue progressivement pendant les intervalles secs.",
        "WATER VITAL® intervient sur la qualité et la disponibilité de l’eau lorsque l’analyse du site le justifie.",
        "Le protocole compare toujours une parcelle traitée et une parcelle témoin conduites avec la même eau et le même calendrier.",
      ],
    },
    right: {
      head: "ECOFERT® / NAPEMA® — nourrir et protéger",
      lines: [
        "ECOFERT® apporte une nutrition en microdose, sans présenter l’effet de l’hydro-rétenteur comme un substitut à la fertilité.",
        "NAPEMA® complète le dispositif lorsque ravageurs ou maladies limitent le potentiel de la culture.",
        "L’intérêt recherché est synergique : eau disponible, nutrition adaptée et protection cohérente au même stade cultural.",
        "Le rendement, la consommation d’eau et la marge sont mesurés séparément avant toute généralisation.",
      ],
    },
    note:
      "Le choix des produits et leur dosage restent conditionnés par l’analyse de sol, la qualité de l’eau, la culture et un essai local. Aucun gain de rendement ou d’économie n’est garanti avant mesure sur le terrain.",
  },

  regions: {
    kicker: "TROIS TERRAINS PRIORITAIRES",
    title: "Où engager les premiers essais comparatifs",
    items: [
      {
        photo: 0,
        head: "Hautes Terres",
        metric: "Riz et contre-saison",
        lines: [
          "Rizières en terrasses autour d’Antananarivo et d’Antsirabe.",
          "Cibler pépinières, repiquage et cultures de contre-saison plutôt que promettre un gain sur riz submergé.",
          "Mesurer reprise, fréquence des tours d’eau et rendement marchand.",
        ],
      },
      {
        photo: 4,
        head: "Grand Sud",
        metric: "Maïs, manioc, légumineuses",
        lines: [
          "Sécheresses récurrentes et forte dépendance à une saison des pluies courte.",
          "Priorité à la levée et à l’enracinement, avec témoin et suivi de l’humidité du sol.",
          "Associer l’essai à une conduite réaliste pour les petits producteurs.",
        ],
      },
      {
        photo: 3,
        head: "Nord-Est et SAVA",
        metric: "Vanille et cultures de valeur",
        lines: [
          "Forte valeur à l’hectare, mais alternance d’excès d’eau, d’érosion et de périodes sèches.",
          "Tester sur jeunes plants et pépinières, là où une perte de plant coûte le plus.",
          "Intégrer drainage, ombrage et protection sanitaire au protocole.",
        ],
      },
    ],
  },

  deploiement: {
    kicker: "COMMENT NOUS PROCÉDONS",
    title: "Un essai local, mesuré avant toute extension",
    items: [
      { head: "Diagnostic", body: "Sol, eau, pluie, culture et pratiques de la parcelle sont documentés." },
      { head: "Témoin", body: "Une parcelle traitée et une parcelle témoin sont conduites à l’identique." },
      { head: "Mesure", body: "Humidité, reprise, eau apportée, rendement marchand et coûts sont relevés." },
      { head: "Décision", body: "La solution n’est étendue que si l’écart technique et économique est net." },
    ],
    note:
      "Le prix produit, la main-d’œuvre, l’eau et la valeur de la récolte restent des champs de calcul ouverts jusqu’à validation par les équipes locales.",
  },

  risques: {
    kicker: "CE QU’IL FAUT ANTICIPER",
    title: "Risques identifiés et réponses",
    left: {
      head: "Risques",
      lines: [
        "Résultats très variables entre Hautes Terres, côte humide et Grand Sud.",
        "Confusion possible entre sécheresse, manque d’irrigation et stress hydrique national.",
        "Coût d’accès aux parcelles, petites superficies et suivi de mesure irrégulier.",
        "Pression cyclonique et excès d’eau dans l’Est, où la rétention n’est pas toujours la priorité.",
      ],
    },
    right: {
      head: "Nos réponses",
      lines: [
        "Segmenter les essais par bassin, sol et culture, sans extrapoler une moyenne nationale.",
        "Mesurer l’humidité, l’eau réellement apportée et la récolte commercialisable.",
        "Travailler avec une organisation locale capable de tenir le protocole jusqu’à la récolte.",
        "Exclure les parcelles mal drainées et adapter la combinaison de solutions au diagnostic.",
      ],
    },
    note:
      "Les éléments réglementaires, certificats et fiches techniques doivent être revus avec l’importateur et les autorités malgaches avant commercialisation.",
  },

  closing: {
    photo: 4,
    title: "Choisissons une parcelle pilote",
    body:
      "Culture, type de sol, calendrier des pluies, accès à l’eau, coût de l’irrigation et prix de vente. À partir de ces données, nous préparons un protocole simple avec témoin, critères de réussite et budget à compléter par l’équipe locale.\n\nUne première étude n’engage pas à un déploiement.",
    contact:
      "contact@evergreen-ecosorb.com · Green Solutions Groupe AIM SA, 46, route de la Condémine, 1475 Forel, Suisse",
  },
};
