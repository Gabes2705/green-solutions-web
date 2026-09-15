export default {
  slug: "soudan-sud",
  fichier: "soudan-sud",
  palette: "nil",
  locale: "en-SS",
  langue: "anglais",
  pied: "Green Solutions · South Sudan market dossier",

  cover: {
    eyebrow: "MARKET DOSSIER",
    title: "South Sudan",
    officiel: "REPUBLIC OF SOUTH SUDAN",
    lieu: "Juba · 2026",
    marques: "ECOSORB® · ECOFERT® · NAPEMA® · PAULOWNIA",
    mention: "September 2026 · Confidential · For the sole use of the recipient",
    subtitle:
      "Sorghum, maize, cassava and vegetables in a country of floods and dry spells.\nWhere hydro-retention helps, and where drainage must come first.",
    footer: "Green Solutions · contact@evergreen-ecosorb.com",
    photo: 1,
  },

  chiffres: {
    kicker: "THE MARKET IN BRIEF",
    title: "A farming country that cannot yet feed itself",
    items: [
      { value: "≈ 80 %", label: "of households depend on crops or livestock" },
      { value: "≈ 4 %", label: "of the land area is cultivated" },
      { value: "≈ 25 %", label: "cereal deficit after the 2024 harvest" },
      { value: "≈ 7.7 M", label: "people projected in acute food insecurity (IPC)" },
    ],
    note:
      "South Sudan combines vast arable land, large herds and the White Nile system, yet most production is rain-fed, small-scale and exposed to conflict, poor roads and repeated floods. Oil still provides the large majority of export earnings.",
  },

  contrainte: {
    kicker: "THE CONSTRAINT",
    title: "Too much water in some places, too little in others",
    photo: 4,
    bullets: [
      "The Greenbelt of Western and Central Equatoria has a long rainy season, while the east and north face shorter rains and dry spells.",
      "The Sudd wetland and the northern flood plains stay inundated for months: several years of major floods have displaced families and destroyed crops.",
      "Most farming is rain-fed on small plots worked by hand, with little access to seed, fertiliser or extension services.",
      "Poor roads cut markets off in the rainy season, and Juba relies heavily on food trucked in from neighbouring countries.",
      "Water retention only makes sense on well-drained, drought-exposed plots. On flood-prone land, drainage and raised planting come first.",
    ],
  },

  usages: {
    kicker: "THE FOOD BALANCE",
    title: "Local cereal output covers about three quarters of needs",
    type: "bar",
    data: [
      {
        name: "Million tonnes of cereals",
        labels: ["Net output, 2024", "Estimated requirement"],
        values: [1.12, 1.5],
      },
    ],
    opts: { barDir: "col", dataLabelFormatCode: "0.0", showLegend: false },
    reading: {
      head: "What this implies",
      body:
        "The gap of roughly 25 % is filled by imports from neighbouring countries and by food assistance.\n\nEvery tonne produced locally on a reliable basis replaces a trucked-in tonne whose price rises with fuel costs and insecurity.",
    },
  },

  productions: {
    kicker: "THE MAIN CROPS",
    title: "Sorghum dominates the cereal area",
    type: "bar",
    data: [
      {
        name: "Share of cereal area (%)",
        labels: ["Sorghum", "Maize", "Millet", "Rice"],
        values: [70, 22, 6, 2],
      },
    ],
    opts: { barDir: "col", dataLabelFormatCode: '0"%"', showLegend: false },
    reading: {
      head: "Reading",
      body:
        "Sorghum is grown almost everywhere and underpins household food security.\n\nMaize and cassava lead in the Greenbelt of Western Equatoria, where rainfall and soils respond best to improved practices. Shares are rounded orders of magnitude.",
    },
  },

  solutions: {
    kicker: "OUR RESPONSE",
    title: "Two technologies, for drained land under dry spells",
    left: {
      head: "EVERGREEN® — holding the water",
      lines: [
        "A potassium-based hydro-retainer placed in the root zone of drained, drought-exposed plots.",
        "It captures rain and releases it back to the plant gradually, bridging dry spells at emergence and flowering.",
        "Absorbs on the order of 300 times its own weight; useful effect of 3 to 4 years in the soil.",
        "Breaks down by 20 to 25 % a year, with no build-up and no risk of overdosing.",
      ],
    },
    right: {
      head: "ECOFERT® — feeding without depleting",
      lines: [
        "A micro-dose fertiliser of amino acids, nitrogen, phosphorus and potassium, made from renewable resources.",
        "Non-chelating: it does not strip the clay-humus complex of soils that are often low in organic matter.",
        "Certified SOHISCERT and EU Bio, in use in 60 countries.",
        "1 to 4 bottles of 140 ml per hectare, applied with a knapsack sprayer.",
      ],
    },
    note:
      "Neither product replaces drainage, good seed or safe storage. They are trialled where water shortage, not waterlogging, limits the crop.",
  },

  economies: {
    kicker: "ORDERS OF MAGNITUDE",
    title: "Expected water saving by irrigation method",
    type: "bar",
    data: [
      {
        name: "Low end of range (%)",
        labels: ["Drip", "Sprinkler", "Hand watering", "Furrow"],
        values: [40, 50, 55, 55],
      },
      {
        name: "High end of range (%)",
        labels: ["Drip", "Sprinkler", "Hand watering", "Furrow"],
        values: [55, 65, 70, 70],
      },
    ],
    opts: { barDir: "col", barGrouping: "clustered", dataLabelFormatCode: '0"%"' },
    reading: {
      head: "Read with caution",
      body:
        "These ranges are indicative and based on the savings documented for our hydro-retainers.\n\nThe actual result depends on the soil, the climate and the crop. They give an order of magnitude and are in no case a guaranteed, contractual or absolute value.",
    },
  },

  regions: {
    kicker: "THREE PRIORITY AREAS",
    title: "Where to run the first trials",
    items: [
      {
        photo: 3,
        head: "Western Equatoria",
        metric: "The Greenbelt",
        lines: [
          "Maize, cassava, groundnut and vegetables under a long rainy season.",
          "Trials near Yambio and Nzara reached 4.7 t/ha of maize with fertiliser, against 2.9 t/ha on control plots.",
          "Better access and security than most regions for a monitored pilot.",
        ],
      },
      {
        photo: 2,
        head: "Central Equatoria — Juba",
        metric: "Peri-urban vegetables",
        lines: [
          "Tomato, onion, okra and leafy vegetables for a city that imports much of its food.",
          "Hand watering and dry-season irrigation from wells and the Nile.",
          "Short cycles and a cash market: a trial shows results in one season.",
        ],
      },
      {
        photo: 0,
        head: "Northern Bahr el Ghazal",
        metric: "Sorghum and rice",
        lines: [
          "Rain-fed sorghum, and irrigated rice on the Aweil scheme.",
          "Dry spells early in the season, floods late: plots must be selected with care.",
          "Farmer groups already supported by FAO and NGO programmes.",
        ],
      },
    ],
  },

  deploiement: {
    kicker: "HOW WE WORK",
    title: "A staged rollout, measured at every step",
    items: [
      {
        head: "Site assessment",
        body: "Drainage, soil, crop and access are reviewed. No commitment at this stage.",
      },
      {
        head: "Trial plot",
        body: "One comparative plot on drained land, against a control plot managed identically.",
      },
      {
        head: "Measurement",
        body: "Emergence, water use and yield recorded over a full season.",
      },
      {
        head: "Extension",
        body: "Gradual rollout to other plots and sites, on the basis of what was measured.",
      },
    ],
    note:
      "The dosing rule is the same everywhere: 3 grams per litre of useful soil. What changes from one site to the next is the volume of soil the roots actually explore.",
  },

  risques: {
    kicker: "WHAT TO ANTICIPATE",
    title: "Identified risks and our answers",
    left: {
      head: "Risks",
      lines: [
        "Insecurity and poor roads, which limit access to trial sites and raise transport costs.",
        "Flooding: waterlogged land gains nothing from water retention.",
        "Very little cash among smallholders, and dependence on donor-funded programmes.",
        "Import logistics through Uganda or Kenya, with long lead times.",
      ],
    },
    right: {
      head: "Our answers",
      lines: [
        "Start with accessible, secure pilot sites around Juba and in Western Equatoria.",
        "Select only drained, drought-exposed plots, after a site assessment.",
        "Work through FAO, NGOs and donor programmes that already supply inputs to farmers.",
        "Group orders and hold a buffer stock in Juba before the planting season.",
      ],
    },
    note:
      "Acrylamide analysis (Polymex laboratory, ISO 9001, content below 3.0 µg/g) and REACH / SVHC screening (SGS) are available on request, together with the SOHISCERT certificate valid until 4 September 2027.",
  },

  closing: {
    photo: 1,
    title: "Tell us about your plot",
    body:
      "Crop, drainage, soil type and how you water today. We come back with the matching combination of technologies, the dosing, and the trials already run in comparable situations.\n\nA first conversation commits you to nothing.",
    contact: "contact@evergreen-ecosorb.com · Green Solutions Groupe AIM SA, 46, route de la Condémine, 1475 Forel, Switzerland",
  },
};
