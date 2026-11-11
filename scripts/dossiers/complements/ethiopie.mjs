// The pages that complete the Ethiopia dossier: economy, two sectors, sources.
export default {
  /* Un dossier complet par langue, qui remplace le PDF de présentation. */
  telechargements: [
    { langue: "en", fichier: "ethiopie-en" },
    { langue: "fr", fichier: "ethiopie-fr" },
  ],

  paysTitre: "Ethiopia",
  partenariat: false,

  economie: {
    kicker: "ECONOMY AND FOOD SECURITY",
    title: "Coffee pays for the imports",
    items: [
      { value: "$2.65 bn", label: "Of coffee exports in 2024/25, a record" },
      { value: "$2.26 bn", label: "Of agricultural exports in 2023, including $1.22 bn of coffee" },
      { value: "$950 M", label: "Minimum spending on mineral fertilisers in 2022, then $630 M in 2023" },
      { value: "96.7%", label: "Of Ethiopia's external freight handled by the ports of Djibouti in 2025/26" },
    ],
    note:
      "Fertilisers, wheat, sugar and edible oils arrive through the Djibouti corridor. Horticulture earned $565 M in 2024/25, and a urea plant of 3 million tonnes a year was announced at Gode in 2025. Every cubic metre of water and every kilo of fertiliser used better reduces this dependence.",
  },

  filieres: [
    {
      kicker: "PRIORITY SECTOR",
      title: "Irrigated maize, onion and potato",
      photo: 2,
      bullets: [
        "Maize: 189,237 irrigated hectares and 2,136 million m³ of water a year, of which 417 million m³ are saved in the central scenario.",
        "Onion, garlic and potato: 104,970 irrigated hectares, and 308 million m³ saved a year.",
        "Together they give half of the water saved in the central scenario.",
        "Published trials of EVERGREEN® cover maize and potato, the two crops that carry the result.",
        "EVERGREEN® placed in the furrow at sowing or planting holds each watering around the roots.",
      ],
    },
    {
      kicker: "EXPORT SECTOR",
      title: "Coffee, khat and fruit: Perennial crops",
      photo: 3,
      bullets: [
        "Coffee exports reached a record $2.65 bn in 2024/25, and horticulture earned $565 M.",
        "Khat, coffee and gesho: 207,160 irrigated hectares, and 234 million m³ saved a year in the central scenario.",
        "Banana, mango, citrus and avocado: 65,400 irrigated hectares, and 74 million m³ saved a year.",
        "For perennial crops, the retainer goes into the planting pit: Young trees establish before the dry season.",
        "ECOFERT® is certified SOHISCERT and EU Organic, an asset for buyers who check how a crop is grown.",
      ],
    },
  ],

  sources: [
    "Ethiopian Statistics Service (ESS): Agricultural Sample Survey 2021/22 and population projection 2024.",
    "FAOSTAT, AQUASTAT and World Bank (WDI); IWMI for the irrigation potential.",
    "ERA5 (Copernicus): Climate 1991-2020 and trends since 1981; OCHA for the 2020-2023 drought; Ethiopian Coffee and Tea Authority.",
  ],
};
