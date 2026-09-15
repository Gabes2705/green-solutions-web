// The seven pages that complete the South Africa dossier (see build.mjs).
export default {
  paysTitre: "South Africa",

  economie: {
    kicker: "ECONOMY AND FOOD SECURITY",
    title: "A net food exporter with a two-speed farm economy",
    items: [
      { value: "No. 2", label: "exporter of fresh citrus in the world" },
      { value: "≈ 0.9 M", label: "people employed in primary agriculture" },
      { value: "≈ 40,000", label: "commercial farming units in the latest census" },
      { value: "≈ 2.3 M", label: "households farming on a small scale, mostly for their own food" },
    ],
    note:
      "Commercial agriculture earns foreign exchange from fruit, wine, nuts and sugar, while millions of households farm small plots with little access to water. Water-use licensing, electricity load-shedding and land reform all weigh on investment decisions.",
  },

  filieres: [
    {
      kicker: "FIRST SECTOR",
      title: "Citrus: an export leader on a tight water allocation",
      photo: 3,
      bullets: [
        "Citrus is grown in Limpopo, the Eastern Cape, Mpumalanga and the Western Cape, mostly under micro-irrigation.",
        "Orchards draw on allocated river and dam water, which is cut back in drought years.",
        "Load-shedding interrupts pumping schedules, so trees can miss irrigations during hot, dry spells.",
        "Export markets pay for size and appearance: steady soil moisture protects both at fruit set and sizing.",
        "NAPEMA® treats pests without residue, which matters under strict European maximum residue limits.",
      ],
    },
    {
      kicker: "SECOND SECTOR",
      title: "Wine and table grapes in the Western Cape",
      photo: 4,
      bullets: [
        "The Western Cape holds most of the vineyard area, from Stellenbosch to the Breede and Olifants river valleys.",
        "The 2015–2018 drought brought Cape Town close to 'Day Zero', and farms lost much of their water allocation.",
        "Table-grape growers in the Hex and Orange River valleys depend on long, hot seasons and dependable irrigation.",
        "Replanting a vineyard costs several years of income: young vines must be kept free of water stress to establish.",
        "EVERGREEN® placed in the planting furrow holds water around young roots between irrigations.",
      ],
    },
  ],

  rendement: ["raisin", "agrumes", "canne", "pommesDeTerre", "avocats"],

  sources: [
    "Statistics South Africa: GDP by industry, Quarterly Labour Force Survey, Census of Commercial Agriculture.",
    "Department of Agriculture: Abstract of Agricultural Statistics.",
    "Citrus Growers' Association; SAWIS for vineyard area.",
    "Department of Water and Sanitation; FAO (FAOSTAT, AQUASTAT); World Bank (WDI).",
  ],
};
