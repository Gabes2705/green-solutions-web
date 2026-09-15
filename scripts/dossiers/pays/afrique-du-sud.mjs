export default {
  slug: "afrique-du-sud",
  fichier: "afrique-du-sud",
  palette: "vigne",
  locale: "en-ZA",
  langue: "anglais",
  pied: "Green Solutions · South Africa market dossier",

  cover: {
    eyebrow: "MARKET DOSSIER",
    title: "South Africa",
    officiel: "REPUBLIC OF SOUTH AFRICA",
    lieu: "Pretoria · 2026",
    marques: "ECOSORB® · ECOFERT® · NAPEMA® · PAULOWNIA",
    mention: "September 2026 · Confidential · For the sole use of the recipient",
    subtitle:
      "Citrus, deciduous fruit and wine grapes grown on half the world's average rainfall.\nWhat hydro-retention changes for an export-led sector.",
    footer: "Green Solutions · contact@evergreen-ecosorb.com",
    photo: 1,
  },

  chiffres: {
    kicker: "THE MARKET IN BRIEF",
    title: "A small share of GDP, a large export earner",
    items: [
      { value: "≈ 2.5 %", label: "of GDP from agriculture, forestry and fishing" },
      { value: "≈ 1.6 M ha", label: "under irrigation, out of some 12 M ha of arable land" },
      { value: "≈ 465 mm", label: "of rain a year, about half the world average" },
      { value: "US$ 13 bn", label: "of farm exports a year — a consistent net exporter" },
    ],
    note:
      "Agriculture is a modest share of national output but employs roughly 5 % of the workforce, close to 900,000 people, and feeds an agro-processing chain worth several times the farm-gate value. Output comes from some 40,000 commercial farms alongside a much larger smallholder base.",
  },

  contrainte: {
    kicker: "THE CONSTRAINT",
    title: "A dry country, and rainfall it cannot count on",
    photo: 3,
    caption: "Orchards and vineyards, Western Cape",
    bullets: [
      "Mean annual rainfall is around 465 mm, roughly half the world average, and potential evaporation exceeds it across most of the interior.",
      "Irrigation takes about 60 % of the water withdrawn each year: when the resource tightens, the restriction reaches the field before it reaches the city.",
      "Rainfall is unevenly spread — under 200 mm a year in the Northern Cape, more than 1,000 mm on the KwaZulu-Natal coast — and it arrives in short, intense events.",
      "Drought is a recurring line item: the 2015/16 El Niño season cut the commercial maize crop to under 8 million tonnes; the 2015-2018 Western Cape drought forced irrigation quota cuts.",
      "Public plans — new dams, water reuse, coastal desalination — act on supply. Hydro-retention acts on demand, in the root zone, block by block.",
    ],
  },

  usages: {
    kicker: "WHERE THE WATER GOES",
    title: "Irrigation takes six litres in every ten",
    type: "doughnut",
    data: [
      {
        name: "Water withdrawals",
        labels: ["Agriculture", "Municipal & domestic", "Industry, mining & other"],
        values: [60, 27, 13],
      },
    ],
    opts: { showLegend: true, showValue: true, dataLabelFormatCode: '0"%"', holeSize: 55 },
    reading: {
      head: "What this implies",
      body:
        "A 10 % cut in irrigation demand releases close to half the volume used by industry, mining and every other non-municipal use combined.\n\nThat is why the effort belongs in the field rather than in the other uses.",
    },
  },

  productions: {
    kicker: "THE MAIN CROPS",
    title: "Five crops carry the volume and the value",
    type: "bar",
    data: [
      {
        name: "Annual production (million tonnes)",
        labels: ["Sugar cane", "Maize*", "Citrus", "Potatoes", "Grapes"],
        values: [18.0, 15.0, 3.3, 2.5, 1.8],
      },
    ],
    opts: { barDir: "col", dataLabelFormatCode: "0.0", showLegend: false },
    reading: {
      head: "Reading",
      body:
        "Citrus and grapes are irrigated, export-bound and priced per carton: there, a litre saved converts into margin. The country ships about 2.6 million tonnes of citrus a year, second only to Spain.\n\n* Maize is mostly rain-fed and swings by several million tonnes between seasons.",
    },
  },

  solutions: {
    kicker: "OUR RESPONSE",
    title: "Two technologies, two different constraints",
    left: {
      head: "EVERGREEN® — holding the water",
      lines: [
        "A potassium-based hydro-retainer placed in the root zone at planting or at replant.",
        "It captures rain and irrigation water and releases it back to the plant gradually, removing water stress through the critical stages.",
        "Absorbs on the order of 300 times its own weight; useful effect of 3 to 4 years in the soil.",
        "Breaks down by 20 to 25 % a year, with no build-up and no risk of overdosing.",
      ],
    },
    right: {
      head: "ECOFERT® — feeding without depleting",
      lines: [
        "A micro-dose fertiliser of amino acids, nitrogen, phosphorus and potassium, made from renewable resources.",
        "Non-chelating: it does not strip the clay-humus complex and adds neither salinity nor nitrate load.",
        "Certified SOHISCERT and EU Bio, in use in 60 countries — the entry condition for European buyers' specifications.",
        "1 to 4 bottles of 140 ml per hectare, compatible with existing fertigation equipment.",
      ],
    },
    note:
      "The two products are sold separately but were designed to reinforce each other: the hydro-retainer extends how long water stays available, the fertiliser puts that water to work without degrading the soil.",
  },

  economies: {
    kicker: "ORDERS OF MAGNITUDE",
    title: "Expected water saving by irrigation method",
    type: "bar",
    data: [
      {
        name: "Low end of range (%)",
        labels: ["Drip", "Micro-sprinkler", "Centre pivot", "Flood / furrow"],
        values: [40, 50, 50, 55],
      },
      {
        name: "High end of range (%)",
        labels: ["Drip", "Micro-sprinkler", "Centre pivot", "Flood / furrow"],
        values: [55, 65, 65, 70],
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
        photo: 2,
        head: "Western Cape",
        metric: "≈ 90,000 ha of vineyard",
        lines: [
          "Nearly all of the national vineyard, plus the deciduous fruit of the Breede and Olifants valleys.",
          "Winter rainfall of 250 to 400 mm inland, and the 2015-2018 quota cuts are a live memory.",
          "Export blocks already on drip or micro-sprinkler, with buyers asking for organic certification.",
        ],
      },
      {
        photo: 0,
        head: "Limpopo",
        metric: "≈ 450 mm of rain a year",
        lines: [
          "The leading citrus province, with macadamia and avocado on sandy, low-retention soils.",
          "High summer evaporation and a long dry winter: irrigation carries the whole season.",
          "Orchards planted for twenty years or more — planting is exactly when the retainer goes in.",
        ],
      },
      {
        photo: 4,
        head: "KwaZulu-Natal",
        metric: "≈ 300,000 ha of cane",
        lines: [
          "A sugar belt from the North Coast to Zululand, carrying most of a national crop of roughly 18 million tonnes.",
          "Largely rain-fed: the gain is in holding the rain that falls, not in trimming a dose.",
          "Around twenty thousand growers organised around mills — one route to a coordinated trial.",
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
        body: "Water use and yield recorded over a full growing season.",
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
        "Rainfall variability: one good La Niña season is enough to mask the value of the product.",
        "Registration: fertilisers and soil amendments fall under Act 36 of 1947 and must be registered before commercial sale.",
        "The memory of cheap sodium-based polymers, which left a poor reputation in several regions.",
        "Farm cash flow after successive droughts, high input costs and a rand that raises the price of every imported input.",
      ],
    },
    right: {
      head: "Our answers",
      lines: [
        "Run the trial over a full season against a control block, so the gain is measurable even in a favourable year.",
        "Open the registration file in parallel with the first trials rather than after them.",
        "Document the formulation: potassium, never sodium, and compatible with food crops.",
        "Spread the commitment: a useful life of 3 to 4 years amortises the cost over several seasons.",
      ],
    },
    note:
      "Acrylamide analysis (Polymex laboratory, ISO 9001, content below 3.0 µg/g) and REACH / SVHC screening (SGS) are available on request, together with the SOHISCERT certificate valid until 4 September 2027.",
  },

  closing: {
    photo: 4,
    title: "Tell us about your block",
    body:
      "Crop, irrigation method, soil type, the volume of water you use today. We come back with the matching combination of technologies, the dosing, and the trials already run in comparable situations.\n\nA first conversation commits you to nothing.",
    contact: "contact@evergreen-ecosorb.com · Green Solutions Groupe AIM SA, 46, route de la Condémine, 1475 Forel, Switzerland",
  },
};
