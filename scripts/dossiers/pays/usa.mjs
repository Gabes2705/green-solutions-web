export default {
  slug: "usa",
  fichier: "usa",
  palette: "plaine",
  locale: "en-US",
  langue: "anglais",
  pied: "Green Solutions · United States Market Dossier",

  cover: {
    eyebrow: "MARKET DOSSIER",
    title: "United States",
    officiel: "UNITED STATES OF AMERICA",
    lieu: "Washington · 2026",
    marques: "ECOSORB® · ECOFERT® · NAPEMA® · PAULOWNIA",
    mention: "September 2026 · Confidential · For the sole use of the recipient",
    subtitle:
      "Row crops, permanent plantings and specialty produce on a shrinking water budget.\nWhat hydro-retention changes for irrigated acres.",
    footer: "Green Solutions · contact@evergreen-ecosorb.com",
    photo: 1,
  },

  chiffres: {
    kicker: "THE MARKET AT A GLANCE",
    title: "A large export sector working on a tighter water budget",
    items: [
      { value: "880M acres", label: "of land in farms, about 40% of the land area" },
      { value: "≈ 55M acres", label: "under irrigation, three quarters of it in the West" },
      { value: "≈ $180 B", label: "in annual agricultural and food exports" },
      { value: "≈ 2.6 M", label: "people working on farms, near 1.4% of all U.S. jobs" },
    ],
    note:
      "Farming contributes roughly 1% of GDP on its own, and close to 5% once processing and distribution are counted. Output is concentrated: a small share of operations generates most of the production value, and irrigated acres deliver far more than their proportion of that total.",
  },

  contrainte: {
    kicker: "THE CONSTRAINT",
    title: "Water scarcity here is regional, and it is structural",
    photo: 3,
    caption: "Center-pivot irrigation, Great Plains",
    bullets: [
      "Annual precipitation runs from under 10 inches (≈ 250 mm) in the Desert Southwest to more than 50 inches (≈ 1,270 mm) in the Southeast. Irrigation follows that gradient.",
      "About three quarters of irrigated acreage sits in the 17 western states, where most crops cannot be brought to harvest without applied water in a normal season.",
      "The Colorado River serves some 40 million people and roughly 5 million irrigated acres. Lake Mead and Lake Powell have operated near a third of capacity in recent years.",
      "The Ogallala Aquifer supports close to 12 million irrigated acres across eight states. In parts of Kansas and the Texas Panhandle, water levels have fallen by more than 100 feet.",
      "Public policy works on supply — storage, recycling, fallowing payments, groundwater plans California basins must balance by 2040. Hydro-retention works on demand, in the root zone.",
    ],
  },

  usages: {
    kicker: "WHERE THE WATER GOES",
    title: "Irrigation and power cooling dominate withdrawals",
    type: "doughnut",
    data: [
      {
        name: "Withdrawals",
        labels: ["Agriculture", "Public supply", "Industry & power"],
        values: [40, 13, 47],
      },
    ],
    opts: { showLegend: true, showValue: true, dataLabelFormatCode: '0"%"', holeSize: 55 },
    reading: {
      head: "What this means",
      body:
        "The industrial share is inflated by once-through cooling at power plants, which returns most of its water to the river.\n\nIrrigation is different: most of what is applied is consumed. In consumptive terms, farming accounts for the large majority of U.S. freshwater use.",
    },
  },

  productions: {
    kicker: "THE MAJOR CROPS",
    title: "Five outputs carry the bulk of farm volume",
    type: "bar",
    data: [
      {
        name: "Annual output (million metric tons)",
        labels: ["Corn", "Soybeans", "Hay & forage", "Wheat", "Potatoes"],
        values: [380, 115, 110, 50, 19],
      },
    ],
    opts: { barDir: "col", dataLabelFormatCode: "0", showLegend: false },
    reading: {
      head: "Reading",
      body:
        "Corn and soybeans carry the volume, largely rain-fed across the Midwest.\n\nHay and forage are the single largest consumer of irrigation water in the West; alfalfa alone takes a significant share of Colorado River deliveries. Potatoes and specialty crops carry the highest value per acre.",
    },
  },

  solutions: {
    kicker: "OUR ANSWER",
    title: "Two technologies for two different constraints",
    left: {
      head: "EVERGREEN® — hold the water",
      lines: [
        "Potassium-based hydro-retainer, placed in the root zone at planting or at the first pass of the season.",
        "Captures rain and irrigation water, then releases it back to the plant as demand arises, removing water stress during the critical growth stages.",
        "Absorbs on the order of 300 times its own weight; useful life of 3 to 4 years in the soil.",
        "Degrades by 20 to 25% per year, with no accumulation and no risk of overdose.",
      ],
    },
    right: {
      head: "ECOFERT® — feed without depleting",
      lines: [
        "Microdose fertilizer built on amino acids, nitrogen, phosphorus and potassium, sourced from renewable inputs.",
        "Non-chelating: it does not strip the clay-humus complex and does not raise soil salinity or nitrate load.",
        "SOHISCERT and EU Organic certified — the condition of entry to organic and export buyer programs.",
        "1 to 4 bottles of 140 ml per hectare, compatible with existing fertigation equipment.",
      ],
    },
    note:
      "The two products are sold separately but were designed to reinforce one another: the hydro-retainer extends how long water stays available, the fertilizer converts that available water into growth without degrading the soil.",
  },

  economies: {
    kicker: "ORDERS OF MAGNITUDE",
    title: "Expected water savings by irrigation method",
    type: "bar",
    data: [
      {
        name: "Low end (%)",
        labels: ["Drip", "Sprinkler", "Center pivot", "Furrow / flood"],
        values: [40, 50, 50, 55],
      },
      {
        name: "High end (%)",
        labels: ["Drip", "Sprinkler", "Center pivot", "Furrow / flood"],
        values: [55, 65, 65, 70],
      },
    ],
    opts: { barDir: "col", barGrouping: "clustered", dataLabelFormatCode: '0"%"' },
    reading: {
      head: "Read with care",
      body:
        "These ranges are indicative and rest on documented gains from our hydro-retainers.\n\nActual results depend on the soil, the climate and the crop. The figures give an order of magnitude only: they are in no case a guaranteed, contractual or absolute value.",
    },
  },

  regions: {
    kicker: "THREE PRIORITY AREAS",
    title: "Where to run the first trials",
    items: [
      {
        photo: 1,
        head: "Central Valley, CA",
        metric: "≈ 5M irrigated acres",
        lines: [
          "More than 250 crops on one valley floor — almonds, pistachios, grapes, processing tomatoes. Permanent plantings cannot simply be fallowed in a dry year.",
          "State groundwater plans tighten pumping allowances through 2040: growers need savings per acre, not new supply.",
          "Drip and micro-sprinkler are already standard, so the remaining gain has to come from the soil itself.",
        ],
      },
      {
        photo: 4,
        head: "High Plains",
        metric: "≈ 12M irrigated acres",
        lines: [
          "Corn, sorghum, cotton and alfalfa across Nebraska, Kansas, Colorado and the Texas Panhandle, almost entirely on center pivot.",
          "Aquifer levels have declined for decades; well yields fall and pumping lift rises, pushing up energy cost per acre-inch applied.",
          "Sandy and sandy-loam soils hold little water — retention in the root zone has a direct, measurable effect.",
        ],
      },
      {
        photo: 2,
        head: "Columbia Basin",
        metric: "≈ 700k irrigated acres",
        lines: [
          "Potatoes, apples, hops, onions and wine grapes on sandy volcanic soils with very low water-holding capacity.",
          "Under 10 inches of rain a year: every acre depends on delivered water from the Columbia River system.",
          "High value per acre and strict packer quality specifications justify spending on per-acre inputs.",
        ],
      },
    ],
  },

  deploiement: {
    kicker: "HOW WE PROCEED",
    title: "A staged rollout, measured at every step",
    items: [
      {
        head: "Assessment",
        body: "Review of the soil, the irrigation method and the crop. No commitment at this stage.",
      },
      {
        head: "Trial block",
        body: "A comparative trial on one block, against a control block managed identically.",
      },
      {
        head: "Measurement",
        body: "Water use and yield recorded across a full production cycle.",
      },
      {
        head: "Rollout",
        body: "Gradual extension to the remaining acres on the basis of the results observed.",
      },
    ],
    note:
      "The dosing rule is the same everywhere: 3 grams per liter of usable soil. What changes from one field to the next is the volume of soil the roots actually explore.",
  },

  risques: {
    kicker: "WHAT TO ANTICIPATE",
    title: "Identified risks and how we answer them",
    left: {
      head: "Risks",
      lines: [
        "Year-to-year rainfall variability: a wet season masks the value of the product.",
        "Long purchasing cycles and agronomist sign-off on large operations, plus dealer and co-op channels to qualify.",
        "Memory of low-grade sodium-based polymers, which left a poor reputation among growers.",
        "Tight margins on row crops when input costs rise faster than commodity prices.",
      ],
    },
    right: {
      head: "Answers",
      lines: [
        "Run the trial over a full cycle with a control block, so the gain is documented even in a favorable season.",
        "Work through dealers, co-ops and crop consultants rather than farm by farm, and supply the trial protocol in advance.",
        "Document the formulation: potassium, never sodium, compatible with food crops and with soil health.",
        "Spread the outlay: a 3 to 4 year useful life amortizes the cost across several seasons.",
      ],
    },
    note:
      "Acrylamide analysis (Polymex laboratory, ISO 9001, content below 3.0 µg/g), REACH / SVHC screening (SGS) and the SOHISCERT certificate valid to 4 September 2027 are all available on request.",
  },

  closing: {
    photo: 3,
    title: "Tell us about your field",
    body:
      "Crop, irrigation method, soil type, and the water volume you apply today. We come back with the matching combination of technologies, the dosing, and the trials already run in comparable conditions.\n\nA first conversation commits you to nothing.",
    contact: "contact@evergreen-ecosorb.com · 821 Chemin des Clapiers, 83220 Le Pradet, France",
  },
};
