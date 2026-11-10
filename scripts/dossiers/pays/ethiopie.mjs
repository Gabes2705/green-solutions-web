export default {
  slug: "ethiopie",
  fichier: "ethiopie",
  palette: "plaine",
  locale: "en-ET",
  langue: "anglais",
  pied: "Green Solutions · Ethiopia market dossier",

  cover: {
    eyebrow: "MARKET DOSSIER",
    title: "Ethiopia",
    officiel: "FEDERAL DEMOCRATIC REPUBLIC OF ETHIOPIA",
    lieu: "Addis Ababa",
    marques: "EVERGREEN® · ECOSORB® · ECOFERT® · PAULOWNIA",
    mention: "Confidential · For the sole use of the recipient",
    subtitle:
      "A rain-fed granary of 135 million people, where irrigation grows plot by plot.\nWhat hydro-retention changes when the rains come late or stop early.",
    footer: "Green Solutions · contact@green-solutions-group.com",
    photo: 0,
  },

  chiffres: {
    kicker: "THE MARKET IN BRIEF",
    title: "A farm economy that still runs on rain",
    items: [
      { value: "135.5 M", label: "Inhabitants in 2025. Agriculture provides 33% of GDP and 60% of jobs" },
      { value: "9.7 km³", label: "Of water withdrawn each year for agriculture, 92% of all withdrawals" },
      { value: "858,160 ha", label: "Equipped for irrigation in 2023, for a potential of 5.3 million hectares" },
      { value: "547,262 t", label: "Of mineral nitrogen used in 2023, almost all of it imported through Djibouti" },
    ],
    note:
      "Smallholders harvested 32.8 million tonnes of grain in 2021/22, excluding Tigray, and Oromia and Amhara produce 88% of it. Irrigation is still small: 1,228,082 smallholders irrigate 165,111 ha in the main season, mainly maize, khat, onion and banana.",
  },

  contrainte: {
    kicker: "THE CONSTRAINT",
    title: "Rains that come late, stop early or fail",
    photo: 1,
    caption: "Herd in a dry riverbed, Afar region",
    bullets: [
      "Rainfall ranges from 149 mm a year at Semera, in Afar, to 2,745 mm at Bonga, in the South West (ERA5, 1991-2020 mean).",
      "In the centre and north, the long rains (kiremt) last from June to September and carry the main harvest: A late start or an early end cuts the yield of maize, sorghum and teff.",
      "The lowlands are warming: At Semera, the mean temperature has risen by 0.33 °C per decade since 1981.",
      "The 2020-2023 drought in the south and east killed about 6.85 million head of livestock (OCHA).",
      "Irrigation grows plot by plot, from rivers, wells and ponds. Holding each watering in the root zone lets the same water serve a larger area.",
    ],
  },

  usages: {
    kicker: "WHERE THE WATER GOES",
    title: "Agriculture takes more than nine litres in ten",
    type: "doughnut",
    data: [
      {
        name: "Water withdrawals",
        labels: ["Agriculture", "Municipal", "Industry"],
        values: [91.8, 7.7, 0.5],
      },
    ],
    opts: { showLegend: true, showValue: true, dataLabelFormatCode: '0.0"%"', holeSize: 55 },
    reading: {
      head: "What this implies",
      body:
        "The World Bank puts agricultural withdrawals at 9.7 km³ a year, out of 10.5 km³ in all.\n\nIn the central scenario of our dossier, hydro-retention saves 1.46 km³ a year, 15% of agricultural water: Enough to irrigate about 129,000 more hectares at today's average use.",
    },
  },

  productions: {
    kicker: "THE MAIN CROPS",
    title: "Cereals cover most of the harvested land",
    type: "bar",
    data: [
      {
        name: "Harvested area (million hectares, 2024)",
        labels: ["Maize", "Teff and other cereals", "Wheat", "Sorghum", "Barley", "Coffee"],
        values: [3.4, 3.2, 2.1, 1.7, 1.1, 0.9],
      },
    ],
    opts: { barDir: "col", dataLabelFormatCode: "0.0", showLegend: false },
    reading: {
      head: "Reading",
      body:
        "Maize, teff, wheat, sorghum and barley cover most of the harvested area (FAOSTAT). Teff is counted by FAOSTAT among other cereals.\n\nIrrigated plots follow another order: Maize, khat and coffee, then onion and potato. Maize and the onion, garlic and potato group give half of the water saved in our central scenario.",
    },
  },

  solutions: {
    kicker: "OUR RESPONSE",
    title: "Two technologies, two different constraints",
    left: {
      head: "EVERGREEN® — holding the water",
      lines: [
        "A potassium-based hydro-retainer placed in the root zone at sowing, planting or replanting.",
        "It captures rain or irrigation water and releases it back to the plant gradually, bridging the dry spells of the rainy season.",
        "Absorbs on the order of 300 times its own weight; useful effect of 3 to 4 years in the soil.",
        "Breaks down by 20 to 25% a year, with no build-up and no risk of overdosing.",
      ],
    },
    right: {
      head: "ECOFERT® — feeding without depleting",
      lines: [
        "A micro-dose fertiliser of amino acids, nitrogen, phosphorus and potassium, made from renewable resources.",
        "Non-chelating: It does not strip the clay-humus complex and adds neither salinity nor nitrate load.",
        "Certified SOHISCERT and EU Organic, in use in 60 countries: An asset for coffee and horticulture exporters.",
        "1 to 4 bottles of 140 ml per hectare: A small volume to carry, where imported fertiliser is costly.",
      ],
    },
    note:
      "The two products are sold separately but were designed to reinforce each other: The hydro-retainer extends how long water stays available, the fertiliser puts that water to work without degrading the soil.",
  },

  economies: {
    kicker: "ORDERS OF MAGNITUDE",
    title: "Water saved each year, three scenarios",
    type: "bar",
    data: [
      {
        name: "Water saved (km³ a year)",
        labels: ["Cautious", "Central", "Strong"],
        values: [0.73, 1.46, 2.92],
      },
    ],
    opts: { barDir: "col", dataLabelFormatCode: "0.00", showLegend: false },
    reading: {
      head: "How it is calculated",
      body:
        "The central scenario applies the savings measured in published trials to each irrigated crop group, then adds them up for the country. The cautious and strong scenarios take half and twice that saving.\n\nThe central scenario saves 1.46 km³ a year, 15% of agricultural water. At today's average use of 11,288 m³ per hectare, that is about 129,000 more irrigable hectares.",
    },
  },

  regions: {
    kicker: "THREE PRIORITY AREAS",
    title: "Where to run the first trials",
    items: [
      {
        photo: 4,
        head: "Oromia",
        metric: "73,762 irrigated hectares",
        lines: [
          "The largest region, with 41.8 million inhabitants in 2024.",
          "East and West Hararghe alone irrigate more than a fifth of smallholder areas, mostly khat and vegetables.",
          "652 million m³ saved a year in the central scenario.",
        ],
      },
      {
        photo: 5,
        head: "Amhara",
        metric: "45,966 irrigated hectares",
        lines: [
          "23.6 million inhabitants in 2024. With Oromia, it produces 88% of the country's grain.",
          "West Gojjam, East Gojjam and North Wollo are its main irrigated zones.",
          "406 million m³ saved a year in the central scenario.",
        ],
      },
      {
        photo: 6,
        head: "South (former SNNP)",
        metric: "28,682 irrigated hectares",
        lines: [
          "22.4 million inhabitants in 2024, in the regions born from the former SNNP, Sidama included.",
          "Gamo zone, around Arba Minch, irrigates banana groves and orchards: 18,566 ha, the second zone in the country.",
          "253 million m³ saved a year in the central scenario.",
        ],
      },
    ],
  },

  deploiement: {
    kicker: "HOW WE WORK",
    title: "A staged rollout, measured at every step",
    items: [
      {
        head: "Assessment",
        body: "Soil, irrigation method and crop are reviewed. No commitment at this stage.",
      },
      {
        head: "Trial block",
        body: "One comparative trial block, against a control block managed identically.",
      },
      {
        head: "Measurement",
        body: "Water use and yield recorded over a full season, dry spells included.",
      },
      {
        head: "Extension",
        body: "Gradual rollout to the remaining blocks, on the basis of what was measured.",
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
        "Very small plots: A smallholder irrigates less than a seventh of a hectare on average.",
        "Rains vary widely from one year to the next: A trial must cover a full season to be convincing.",
        "Inputs travel a long way, from the port of Djibouti to the farm.",
        "Registration of fertilisers and soil conditioners with the Ministry of Agriculture before commercial sale.",
      ],
    },
    right: {
      head: "Our answers",
      lines: [
        "Work through cooperatives, unions and irrigation schemes, to reach many growers at once.",
        "Run trials over a full season against a control block, so the gain is documented in figures.",
        "Store and ship through Djibouti, the gateway that already handles 96.7% of Ethiopia's external freight.",
        "Prepare the regulatory file early: Analyses and certificates before negotiation starts.",
      ],
    },
    note:
      "Acrylamide analysis (Polymex laboratory, ISO 9001, content below 3.0 µg/g) and REACH / SVHC screening (SGS) are available on request, together with the SOHISCERT certificate valid until 4 September 2027.",
  },

  closing: {
    photo: 7,
    title: "Tell us about your farm",
    body:
      "Crop, irrigation method, soil type, the volume of water you use today. We come back with the matching combination of technologies, the dosing, and the trials already run in comparable situations.\n\nA first conversation commits you to nothing.",
    contact: "contact@green-solutions-group.com · Green Solutions Groupe AIM SA, 46, route de la Condémine, 1475 Forel, Switzerland",
  },
};
