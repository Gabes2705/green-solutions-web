// Les sept pages qui complètent le dossier Haïti (voir build.mjs).
export default {
  paysTitre: "Haïti",

  economie: {
    kicker: "ÉCONOMIE ET SÉCURITÉ ALIMENTAIRE",
    title: "Un pays agricole qui importe la moitié de sa nourriture",
    items: [
      { value: "≈ 50 %", label: "de la nourriture consommée est importée" },
      { value: "≈ 80 %", label: "du riz consommé vient de l'étranger" },
      { value: "≈ 5 M", label: "d'Haïtiens en insécurité alimentaire aiguë selon l'IPC" },
      { value: "1er", label: "producteur mondial d'huile essentielle de vétiver" },
    ],
    note:
      "L'insécurité, l'état des routes et la hausse des prix pèsent sur les campagnes autant que sur les villes. Les filières d'exportation — mangue Francisque, cacao, café, vétiver — restent les rares sources de devises agricoles, et chaque récolte perdue se ressent directement dans le revenu des familles.",
  },

  filieres: [
    {
      kicker: "PREMIÈRE FILIÈRE",
      title: "Mangue Francisque et cacao : des devises à protéger",
      photo: 5,
      bullets: [
        "La mangue Francisque, exportée surtout vers les États-Unis, vient de vergers souvent anciens et dispersés.",
        "Le cacao du Nord et de la Grand'Anse gagne des marchés de qualité, notamment en filière biologique.",
        "Les arbres subissent des sécheresses de plus en plus marquées entre deux saisons des pluies.",
        "Les exigences sanitaires à l'export imposent une protection sans résidu : NAPEMA® y répond.",
        "Planter les jeunes arbres avec EVERGREEN® améliore leur survie pendant la première saison sèche.",
      ],
    },
    {
      kicker: "DEUXIÈME FILIÈRE",
      title: "Mornes dénudés : retenir l'eau et le sol sur les pentes",
      photo: 1,
      bullets: [
        "Une grande partie des terres cultivées est en pente, où maïs, haricot et pois congo sont semés sur sol nu.",
        "La déforestation expose les sols : chaque averse emporte de la terre fertile vers les rivières et la mer.",
        "Il pleut assez sur l'année, mais l'eau ruisselle au lieu de s'infiltrer, puis manque en saison sèche.",
        "Des haies et des arbres comme le Paulownia tiennent les sols tout en produisant du bois et du miel.",
        "Un hydro-rétenteur au pied des plants garde l'eau de pluie là où les racines peuvent la prendre.",
      ],
    },
  ],

  rendement: ["mangues", "bananes", "cacao", "manioc", "tomates"],

  sources: [
    "Institut haïtien de statistique et d'informatique (IHSI) : comptes nationaux.",
    "Coordination nationale de la sécurité alimentaire (CNSA) et analyses IPC.",
    "Ministère de l'Agriculture, des Ressources naturelles et du Développement rural (MARNDR).",
    "FAO (FAOSTAT, AQUASTAT) et Banque mondiale (WDI).",
  ],
};
