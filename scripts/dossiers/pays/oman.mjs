export default {
  slug: "oman",
  fichier: "oman",
  palette: "desert",
  locale: "en-OM",
  langue: "anglais",
  pied: "Green Solutions · Oman market dossier",

  cover: {
    eyebrow: "MARKET DOSSIER",
    title: "Oman",
    officiel: "SULTANATE OF OMAN",
    lieu: "Muscat · 2026",
    marques: "ECOSORB® · ECOFERT® · NAPEMA® · PAULOWNIA",
    mention: "September 2026 · Confidential · For the sole use of the recipient",
    subtitle:
      "Dates, vegetables and fodder grown on shrinking aquifers and under 100 mm of rain.\nWhat hydro-retention changes when every cubic metre is pumped.",
    footer: "Green Solutions · contact@evergreen-ecosorb.com",
    photo: 5,
  },

  chiffres: {
    kicker: "THE MARKET IN BRIEF",
    title: "Irrigated farming on a very tight water budget",
    items: [
      { value: "≈ 2 %", label: "of GDP from agriculture and fisheries" },
      { value: "≈ 83 %", label: "of water withdrawals go to agriculture" },
      { value: "< 100 mm", label: "of rain a year across most of the country" },
      { value: "≈ 370,000 t", label: "of dates harvested a year" },
    ],
    note:
      "Farming is concentrated on the Al Batinah coastal plain, the interior oases and the monsoon-fed Dhofar region. Most irrigation water comes from aquifers and from some 3,000 active aflaj, traditional channels that are themselves fed by groundwater.",
  },

  contrainte: {
    kicker: "THE CONSTRAINT",
    title: "Groundwater is the farm, and it is running down",
    photo: 0,
    bullets: [
      "Outside Dhofar and the Hajar mountains, rainfall averages well under 100 mm a year, while potential evaporation is many times higher.",
      "Agriculture draws the large majority of the water withdrawn each year, almost all of it from aquifers and aflaj.",
      "Along Al Batinah, decades of pumping have lowered water tables and let seawater intrude: salinity has taken farmland out of production.",
      "In long droughts many aflaj run weaker or dry up, and the oasis date groves they feed suffer first.",
      "Desalination supplies the cities, but its cost rules it out for most irrigation. Hydro-retention works on demand, in the root zone, where every pumped cubic metre is paid for.",
    ],
  },

  usages: {
    kicker: "WHERE THE WATER GOES",
    title: "Irrigation takes eight litres in every ten",
    type: "doughnut",
    data: [
      {
        name: "Water withdrawals",
        labels: ["Agriculture", "Municipal", "Industry"],
        values: [83, 15, 2],
      },
    ],
    opts: { showLegend: true, showValue: true, dataLabelFormatCode: '0"%"', holeSize: 55 },
    reading: {
      head: "What this implies",
      body:
        "A 10 % cut in irrigation demand saves several times the volume used by the whole of industry.\n\nThat is why the effort belongs in the field: dates, fodder and vegetables on the coastal plain.",
    },
  },

  productions: {
    kicker: "THE MAIN CROPS",
    title: "Date palms hold half of the cropped area",
    type: "bar",
    data: [
      {
        name: "Share of cropped area (%)",
        labels: ["Date palms", "Fodder", "Vegetables", "Other fruit"],
        values: [50, 25, 15, 10],
      },
    ],
    opts: { barDir: "col", dataLabelFormatCode: '0"%"', showLegend: false },
    reading: {
      head: "Reading",
      body:
        "Date palms occupy about half of the cropped area and carry cultural as well as economic weight.\n\nFodder, mostly Rhodes grass and alfalfa, is the thirstiest use per hectare and the first target of water rationing. Shares are rounded orders of magnitude.",
    },
  },

  solutions: {
    kicker: "OUR RESPONSE",
    title: "Two technologies, two different constraints",
    left: {
      head: "EVERGREEN® — holding the water",
      lines: [
        "A potassium-based hydro-retainer placed in the root zone at planting or at replant.",
        "It captures irrigation water and releases it back to the plant gradually, removing water stress through the hottest months.",
        "Absorbs on the order of 300 times its own weight; useful effect of 3 to 4 years in the soil.",
        "Breaks down by 20 to 25 % a year, with no build-up and no risk of overdosing.",
      ],
    },
    right: {
      head: "ECOFERT® — feeding without depleting",
      lines: [
        "A micro-dose fertiliser of amino acids, nitrogen, phosphorus and potassium, made from renewable resources.",
        "Non-chelating: it does not strip the clay-humus complex and adds neither salinity nor nitrate load.",
        "Certified SOHISCERT and EU Bio, in use in 60 countries — an entry condition for premium buyers.",
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
        labels: ["Drip", "Bubbler", "Sprinkler", "Basin / falaj"],
        values: [40, 45, 50, 55],
      },
      {
        name: "High end of range (%)",
        labels: ["Drip", "Bubbler", "Sprinkler", "Basin / falaj"],
        values: [55, 60, 65, 70],
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
        photo: 4,
        head: "Al Batinah",
        metric: "Oman's main farm belt",
        lines: [
          "Vegetables, dates and fodder on a coastal plain where aquifers are over-drawn and turning saline.",
          "Farms already on drip, with pumps running daily: the saving shows on the power bill.",
          "Many commercial farms able to host a trial block quickly.",
        ],
      },
      {
        photo: 1,
        head: "Interior oases",
        metric: "Aflaj-fed date groves",
        lines: [
          "Historic date groves around Nizwa and Bahla, irrigated by shared falaj rotations.",
          "Weaker flows in drought years mean longer intervals between turns.",
          "Young offshoots planted with a retainer establish before the summer heat.",
        ],
      },
      {
        photo: 6,
        head: "Dhofar — Salalah",
        metric: "Monsoon from June to September",
        lines: [
          "The only region with a monsoon: coconut, banana, papaya and vegetables near Salalah.",
          "Eight dry months outside the khareef: holding the monsoon water in the soil is the whole question.",
          "Soils poor in organic matter, where ECOFERT® adds value alongside the retainer.",
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
        body: "Water use and yield recorded over a full season, summer included.",
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
        "Summer heat above 45 °C and sandy soils: results vary strongly from one block to the next.",
        "Saline irrigation water in coastal areas, and caution toward any new soil input.",
        "Registration of fertilisers and soil conditioners before commercial sale.",
        "Long decision cycles at large agricultural companies and public bodies.",
      ],
    },
    right: {
      head: "Our answers",
      lines: [
        "Run trials over a full season against a control block, so the gain is documented in figures.",
        "A potassium formulation, never sodium: it adds no salinity and is safe for food crops.",
        "Prepare the regulatory file early: analyses and certificates before negotiation starts.",
        "Work through farmer associations and model farms to reach many growers at once.",
      ],
    },
    note:
      "Acrylamide analysis (Polymex laboratory, ISO 9001, content below 3.0 µg/g) and REACH / SVHC screening (SGS) are available on request, together with the SOHISCERT certificate valid until 4 September 2027.",
  },

  closing: {
    photo: 8,
    title: "Tell us about your farm",
    body:
      "Crop, irrigation method, soil type, the volume of water you use today. We come back with the matching combination of technologies, the dosing, and the trials already run in comparable situations.\n\nA first conversation commits you to nothing.",
    contact: "contact@evergreen-ecosorb.com · Green Solutions Groupe AIM SA, 46, route de la Condémine, 1475 Forel, Switzerland",
  },
};
