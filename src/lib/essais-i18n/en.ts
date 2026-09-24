import type { Traduction } from "./types";

/** Les essais de terrain en anglais. */
export const en: Traduction = {
  habillage: {
    retour: "← All trials",
    tousLesEssais: "See all the trials →",
    lireRapport: "Read the full report (PDF)",
    resultatsEyebrow: "Results",
    resultatsTitre: "What the trial measured",
    imagesEyebrow: "In pictures",
    imagesTitre: "Before and after: the measured difference",
    mecaniqueEyebrow: "How it works",
    mecaniqueTitre: "The water stays where the plant needs it",
    mecaniqueTexte:
      "Mixed into the soil near the roots, the water retainer fills up at every watering or rainfall instead of letting the water evaporate or drain away. It then hands the water back to the plant, day after day. You water less often, and the plant never goes thirsty between two waterings.",
    videoLegende: "Seeds germinate: the roots reach down for the water in the soil.",
    videoAlt: "Time-lapse video of mung bean seeds germinating, roots visible in the soil",
    videoMot: "Video",
    videoAccelere: "sped up",
    ficheEyebrow: "Trial sheet",
    ficheTitre: "Where, when, by whom",
    culture: "Crop",
    lieu: "Place",
    periode: "Period",
    conduitPar: "Run by",
    produits: "Products",
    methodeEyebrow: "Method",
    methodeTitre: "How the trial was run",
    observationsEyebrow: "Observations",
    observationsTitre: "What to remember",
    autresEyebrow: "Other trials",
    autresTitre: "The same products, on other crops",
    hubEyebrow: "Field trials",
    hubTitre: "Less water, more harvest: the measured results",
    hubChapeau:
      "Universities, research centres and farms have tested the EVERGREEN water retainer, on its own or with the ECOFERT fertiliser, on seven crops in six countries. Each page carries the figures from the report and links to the full document.",
    hubPrincipe:
      "The principle is the same everywhere: the water retainer holds water near the roots and hands it back to the plant little by little. Depending on the crop and the climate, the trials measure up to 82% less water and up to 93% more harvest.",
    hubTermines: "Completed trials",
    hubEnCours: "Trials under way with universities",
    hubGuides: "Our guides",
    hubCreditPhoto: "Banner photo:",
    guideProduit: "See the product page",
    guidePreuvesEyebrow: "Field evidence",
    guidePreuvesTitre: "The trials that measured it",
    guideResultatsEyebrow: "Field results",
    guideResultatsTitre: "What the trials measured",
    guideComparaisonEyebrow: "Comparison",
    guideFaqEyebrow: "Frequent questions",
    guideFaqTitre: "What people ask us most",
    guideOui: "Yes",
    guideNon: "No",
    guideCritere: "Criterion",
  },
  essais: {
    "palmiers-dattiers-emirats-icba": {
      titre: "Date palms in the Emirates: 82% less irrigation water",
      description:
        "EVERGREEN trial run by ICBA in Dubai on 27 date palms in sandy soil: 82% of irrigation water saved and 20% more dates.",
      culture: "Date palm",
      lieu: "ICBA research station, Dubai",
      pays: "United Arab Emirates",
      periode: "2020-2021 season",
      conduit: "ICBA — International Center for Biosaline Agriculture",
      produits: "EVERGREEN (water retainer)",
      chapeau:
        "The Emirates get about 50 mm of rain a year and almost all farming depends on irrigation. ICBA tested EVERGREEN in the open field, in sandy, saline soil, on date palms around 8 years old.",
      resultats: [
        "of irrigation water over the whole season",
        "of water over the last 7 months, with no stress to the trees",
        "more dates at 300 g per tree",
        "watering frequency for the treated trees",
      ],
      protocole: [
        "27 date palms planted 8 × 8 m apart, on the ICBA research station.",
        "EVERGREEN worked into the top 50 cm of soil at the start of the season, at several doses per tree (including 300 g, 500 g and 1,000 g).",
        "Watering steered by probes measuring soil moisture in real time.",
        "Compared with control trees without EVERGREEN.",
      ],
      constats: [
        "The treated trees showed no sign of drought or damage during the season.",
        "Available nutrients in the soil are markedly higher with EVERGREEN: water and minerals stay in the root zone instead of draining deeper.",
        "Soil biological activity (respiration and microbial biomass) increases.",
        "ICBA confirms all the results obtained under field conditions.",
      ],
      graphiques: [
        {
          titre: "Irrigation water over the season (index, control = 100)",
          barres: ["Without EVERGREEN", "With EVERGREEN"],
        },
        { titre: "Date yield (index, control = 100)", barres: ["Without EVERGREEN", "300 g per tree"] },
      ],
    },
    "pasteques-mexique": {
      titre: "Watermelons in Mexico: 60.5% less water and 30% more harvest",
      description:
        "EVERGREEN trial on 2,600 watermelon plants in Hermosillo (Sonora, Mexico), at 45 °C: 60.5% of water saved and a harvest 30% higher.",
      culture: "Watermelon (Charleston variety)",
      lieu: "Hermosillo, Sonora",
      pays: "Mexico",
      periode: "15 February – 2 August 2023",
      conduit: "Green Solutions field trial",
      produits: "EVERGREEN (water retainer)",
      chapeau:
        "Sonora leads watermelon production in Mexico, but it was hit hard by drought in 2023. The trial set out to measure the water saved with EVERGREEN in a very arid region, with days averaging 45 °C.",
      resultats: [
        "of irrigation water",
        "more harvest than the plot watered at 100%",
        "average sugar content in the fruit",
        "of EVERGREEN per plant",
      ],
      protocole: [
        "2,600 watermelon plants.",
        "Control plot without EVERGREEN, watered at 100%.",
        "Treated plot with 5 g of EVERGREEN per plant (2 g more than the 3 g usually advised).",
      ],
      constats: [
        "Extremely hot, dry climate, on arid soil.",
        "The dose depends on the soil type (clay, sandy, stony, chalky) and the irrigation method (well, drip, rain).",
        "Another possible method: 15 to 20 g of EVERGREEN per linear metre, depending on the variety.",
      ],
      graphiques: [
        { titre: "Irrigation water (index, control = 100)", barres: ["Without EVERGREEN", "5 g per plant"] },
        { titre: "Harvest (index, control = 100)", barres: ["Without EVERGREEN", "5 g per plant"] },
      ],
    },
    "coton-turquie-hatay": {
      titre: "Cotton in Turkey: yield almost doubled under water stress",
      description:
        "EVERGREEN demonstration on cotton in the Hatay region (Turkey) in 2025: yield up from 2.53 to 4.88 t/ha (+93%) despite a severe water shortage.",
      culture: "Cotton",
      lieu: "Mistikoğlu Tarım farm, Amik plain, Hatay",
      pays: "Turkey",
      periode: "2025 season",
      conduit: "Green Solutions with the Teknik Tarım cooperative",
      produits: "EVERGREEN (water retainer), injected below the root zone",
      chapeau:
        "The Hatay region suffers from chronic water shortage, extreme heat and an irrigation network damaged by the 2023 earthquake. In July 2025 the Amik plain faced an unprecedented water crisis. That is where the trial was run.",
      resultats: [
        "yield: 4.88 t/ha against 2.53 t/ha",
        "water productivity, at least",
        "gross income ($3,300 against $1,710)",
        "net benefit, product and application deducted",
      ],
      protocole: [
        "EVERGREEN injected below the root zone with Green Solutions injection tools, into the ridges prepared for sowing.",
        "Several doses compared: 48, 55, 58 and 62 kg/ha.",
        "Compared with an untreated control area.",
        "The region's usual irrigation: flooding from open channels.",
      ],
      constats: [
        "The treated cotton kept better growth and more biomass despite the lack of water.",
        "The gap shows from the first weeks, a decisive period for cotton's final yield.",
      ],
      graphiques: [
        { titre: "Cotton yield (t/ha)", barres: ["Control area", "With EVERGREEN"] },
        { titre: "Gross income (USD/ha)", barres: ["Control area", "With EVERGREEN"] },
      ],
    },
    "mais-turquie-konya": {
      titre: "Maize in Turkey: 39% less water and 17% more yield",
      description:
        "EVERGREEN demonstration on maize at Konya (TIGEM, Turkey) in 2025: 528 mm of irrigation instead of 864 mm, and 12,060 kg/ha against 10,300 kg/ha.",
      culture: "Maize",
      lieu: "TIGEM state farm, Konya",
      pays: "Turkey",
      periode: "May – September 2025",
      conduit: "Green Solutions and D.I.S., measurements by TIGEM's irrigation department",
      produits: "EVERGREEN water retainer, applied below the sowing line",
      chapeau:
        "The goal was simple: produce as much, or more, with less water. The water retainer was injected just below the sowing line, at a precise depth, with machines built by D.I.S., and irrigation of the treated areas was then deliberately cut.",
      resultats: [
        "water: 528 mm instead of 864 mm",
        "yield: 12,060 kg/ha against 10,300 kg/ha",
        "water productivity: 22.8 kg of maize per m³ against 11.9",
        "the dose giving the best result",
      ],
      protocole: [
        "One control area and three areas treated at 39, 51 and 74 kg/ha.",
        "Applied on 14 and 15 May 2025, directly below the sowing line.",
        "Irrigation of the treated areas cut by 50%, then by 30%, according to growth stage.",
        "Harvested on 16 September 2025, on comparable sections.",
      ],
      constats: [
        "Measured yields: control 10,300 kg/ha; 39 kg/ha → 11,200 kg/ha; 51 kg/ha → 10,300 kg/ha; 74 kg/ha → 12,060 kg/ha.",
        "Precision matters: an application too shallow, too deep or off the sowing line weakens the effect.",
        "For the farm, 39% less water means saving 13,629 Turkish lira per hectare per year.",
      ],
      graphiques: [
        { titre: "Irrigation water over 4 months (mm)", barres: ["Control area", "Treated areas"] },
        {
          titre: "Maize yield by dose (kg/ha)",
          barres: ["Control", "39 kg/ha", "51 kg/ha", "74 kg/ha"],
        },
      ],
    },
    "canne-a-sucre-indonesie": {
      titre: "Sugarcane in Java: 55% more harvest with EVERGREEN and ECOFERT",
      description:
        "Trial followed by the University of Jember on sugarcane in Java (Indonesia): 34% more tonnage at 2.5 g per plant and 55% at 5 g, with more sugar.",
      culture: "Sugarcane (variety B82.0333)",
      lieu: "Jember, Java",
      pays: "Indonesia",
      periode: "February – July 2024",
      conduit: "University of Jember and the Indonesian sugarcane research centre",
      produits: "EVERGREEN (water retainer) and the ECO biostimulant fertiliser (ECOFERT)",
      chapeau:
        "The trial compared three plots on clay soil: a control plot, one with 2.5 g of EVERGREEN per plant and one with 5 g, the last two also receiving the ECO biostimulant fertiliser.",
      resultats: [
        "tonnage at 5 g per plant",
        "tonnage at 2.5 g per plant",
        "sucrose content at harvest (5 g against control)",
        "stem height at 8 months, against 111 cm for the control",
      ],
      protocole: [
        "Three quarter-hectare plots.",
        "EVERGREEN buried near the roots when the cane is 3 months old.",
        "ECO fertiliser sprayed at planting, 3 months later, then 8 months after planting.",
        "Doses per hectare: 50 kg of EVERGREEN and 500 ml of fertiliser.",
      ],
      constats: [
        "Total tonnage: 6,950 t for the control, 9,330 t at 2.5 g per plant, 10,800 t at 5 g per plant.",
        "Stem diameter at 8 months: 2.47 cm for the control, 2.78 cm at 2.5 g and 2.88 cm at 5 g.",
        "Sucrose content: 14 for the control, 16 at 2.5 g and 18 at 5 g.",
      ],
      graphiques: [
        { titre: "Tonnage harvested (t)", barres: ["Control", "2.5 g per plant", "5 g per plant"] },
        {
          titre: "Sucrose content at harvest",
          barres: ["Control", "2.5 g per plant", "5 g per plant"],
        },
      ],
    },
    "pommes-de-terre-afrique-du-sud": {
      titre: "Potatoes in South Africa: 31% more yield, 52% less water",
      description:
        "EVERGREEN and ECOFERT trial on potatoes at Bloemfontein (South Africa), 2025-2026: yield from 12 to 15.7 t/ha and 52% of water saved.",
      culture: "Potato (Buffelspoort BP13 variety)",
      lieu: "Bloemfontein",
      pays: "South Africa",
      periode: "September 2025 – January 2026",
      conduit: "Afrinest Farm Group (Tzaneen, Limpopo)",
      produits: "EVERGREEN (water retainer) and ECOFERT (organic fertiliser)",
      chapeau:
        "This pilot trial measured the combined effect of EVERGREEN in the soil and ECOFERT sprayed on the crop, on potato yield and quality.",
      resultats: ["total yield", "instead of 12 t/ha", "water", "of EVERGREEN in the planting furrow"],
      protocole: [
        "Rows of 10 m, repeated 5 times.",
        "Loamy soil (Avalon) with 15 to 18% clay; 26,667 plants per hectare.",
        "Planted by hand on 22 September 2025; harvested 25 to 31 January 2026.",
        "EVERGREEN laid by hand in the planting furrow; ECOFERT sprayed at 700 ml/ha.",
        "Conventional irrigation.",
      ],
      constats: [
        "Larger, more even tubers.",
        "Less risk on the crop and a higher income for the farmer.",
      ],
      graphiques: [
        { titre: "Yield (t/ha)", barres: ["Without treatment", "EVERGREEN + ECOFERT"] },
        {
          titre: "Irrigation water (index, control = 100)",
          barres: ["Without treatment", "EVERGREEN + ECOFERT"],
        },
      ],
    },
    "soja-chine-shandong": {
      titre: "Soybean in China: 11% more yield with a super-absorbent",
      description:
        "Randomised block trial with the Shandong Soil and Fertiliser Institute (China): faster emergence and soybean yield 11.2 to 11.4% higher.",
      culture: "Soybean (Ludou II variety)",
      lieu: "Taian, Shandong province",
      pays: "China",
      periode: "June – October 2017",
      conduit: "Shandong Soil and Fertiliser Institute, with Summit Enterprise",
      produits: "EVERGREEN super-absorbent polymer",
      chapeau:
        "In summer, when soybean is sown, Shandong is hot with high evaporation. The trial measured the effect of the super-absorbent placed in the sowing line on emergence, vigour, yield and income.",
      resultats: ["yield", "faster emergence", "germination rate", "of soybean per acre"],
      protocole: [
        "Randomised blocks: 30 m² plots, each treatment repeated 4 times.",
        "The same fertilisation on every plot: compound fertiliser and compost in the sowing line.",
        "Three treatments: control without super-absorbent, 1.6 kg and 2 kg of super-absorbent per 30 m² plot.",
      ],
      constats: [
        "The yield increase reaches a statistically significant level.",
        "Income gain of 62.9 to 66.1 yuan per acre compared with the control.",
      ],
      graphiques: [
        {
          titre: "Soybean yield (index, control = 100)",
          barres: ["Without super-absorbent", "With super-absorbent"],
        },
      ],
    },
  },
  enCours: [
    {
      titre: "Red maples in town — University of Florida",
      texte:
        "The Klein arboriculture lab (Gainesville) is testing EVERGREEN on 90 red maples planted in April 2025: 30 with the gel in the planting hole, 30 with the gel mixed into the soil around the tree, 30 without gel. A two-year study.",
    },
    {
      titre: "Douglas fir reforestation — Oregon State University",
      texte:
        "The VMRC research cooperative is testing EVERGREEN on two reforestation sites with contrasting water deficits, near Coquille and Roseburg: 48 seedlings with gel and 48 without, on each site. Planted in February 2025, a two-year study.",
    },
  ],
};
