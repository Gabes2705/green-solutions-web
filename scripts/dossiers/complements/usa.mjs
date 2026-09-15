// The seven pages that complete the United States dossier (see build.mjs).
export default {
  paysTitre: "the United States",

  economie: {
    kicker: "ECONOMY AND FOOD SYSTEM",
    title: "The largest farm exporter, on a tightening water ledger",
    items: [
      { value: "≈ 1.9 M", label: "farms, averaging about 460 acres each" },
      { value: "≈ 0.7 %", label: "of GDP from farms alone, over 5 % with food industries" },
      { value: "≈ $59 B", label: "in 2023 farm cash receipts for California, the top state" },
      { value: "≈ 80 %", label: "of the world's almonds grown in California" },
    ],
    note:
      "Fruit, nuts and vegetables cover a small share of cropland but a large share of farm value, and most of them are irrigated in the West. California's Sustainable Groundwater Management Act and falling water tables on the High Plains now cap how much water those acres can draw.",
  },

  filieres: [
    {
      kicker: "FIRST SECTOR",
      title: "California specialty crops: every acre-foot is margin",
      photo: 4,
      bullets: [
        "California grows most U.S. almonds, pistachios, table grapes, strawberries and processing tomatoes, all under irrigation.",
        "In drought years surface-water allocations have fallen close to zero, pushing growers onto groundwater.",
        "SGMA requires groundwater basins to reach sustainable pumping by the early 2040s: less water per acre, or fewer acres.",
        "Orchards cannot be rotated out in a dry year; keeping the root zone moist protects a multi-decade investment.",
        "A water retainer placed at planting, or when an orchard is renewed, lengthens the interval between irrigations.",
      ],
    },
    {
      kicker: "SECOND SECTOR",
      title: "High Plains corn above a shrinking Ogallala",
      photo: 5,
      bullets: [
        "The Ogallala aquifer underlies parts of eight states and carries much of the irrigated corn, sorghum and cotton of the High Plains.",
        "In southwest Kansas and the Texas Panhandle, some wells no longer yield enough for full irrigation.",
        "Local districts now set pumping limits, and growers are shifting to fewer pivot acres or limited irrigation.",
        "For grain crops we claim no yield gain without a field trial: the case rests on the water saved per acre.",
        "Trials pair a treated pivot sector with an untreated one, measured over a full season with soil-moisture probes.",
      ],
    },
  ],

  rendement: ["tomates", "avocats", "fraises", "amandes", "raisin"],

  sources: [
    "USDA NASS: 2022 Census of Agriculture, state farm cash receipts.",
    "USDA ERS: agriculture and food sectors in the economy, farm exports.",
    "USGS: estimated water use in the United States, High Plains aquifer monitoring.",
    "California Department of Water Resources (SGMA); Almond Board of California.",
  ],
};
