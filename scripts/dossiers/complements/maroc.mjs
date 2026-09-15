// Les sept pages qui complètent le dossier Maroc (voir build.mjs).
export default {
  paysTitre: "le Maroc",

  economie: {
    kicker: "ÉCONOMIE ET SÉCURITÉ ALIMENTAIRE",
    title: "Exporter des primeurs, importer du blé",
    items: [
      { value: "Top 5", label: "des exportateurs mondiaux de tomates fraîches" },
      { value: "≈ 80 Md DH", label: "d'exportations agroalimentaires par an" },
      { value: "> 50 %", label: "du blé consommé importé les années de sécheresse" },
      { value: "2030", label: "horizon de la stratégie Génération Green, après le Plan Maroc Vert" },
    ],
    note:
      "Le Maroc exporte tomates, agrumes, fruits rouges et olives vers l'Europe et l'Afrique, mais dépend de l'étranger pour une large part de son blé. Avec des barrages au plus bas, les dotations d'irrigation ont été réduites et le dessalement s'est ouvert à l'agriculture, notamment à Chtouka.",
  },

  filieres: [
    {
      kicker: "PREMIÈRE FILIÈRE",
      title: "Tomate sous serre du Souss : l'export au litre près",
      photo: 2,
      bullets: [
        "Le Souss-Massa concentre l'essentiel des serres de tomates destinées à l'Europe, de l'automne au printemps.",
        "La nappe du Souss baisse depuis des décennies ; une partie des exploitations est irriguée à l'eau dessalée de Chtouka.",
        "L'eau dessalée coûte nettement plus cher que l'eau de forage : chaque litre économisé améliore directement la marge.",
        "Les exportateurs doivent respecter des limites de résidus strictes : NAPEMA® traite les ravageurs sans résidu.",
        "Retenir l'eau dans le sol espace les apports et réduit le drainage perdu sous la serre.",
      ],
    },
    {
      kicker: "DEUXIÈME FILIÈRE",
      title: "Agrumes et olivier : des vergers à protéger de la sécheresse",
      photo: 3,
      bullets: [
        "Agrumes du Souss, du Gharb et de Berkane, olivier du Haouz et du Saïss : des cultures pérennes à fort investissement.",
        "Les restrictions d'eau des dernières campagnes ont conduit des producteurs à arracher une partie de leurs vergers d'agrumes.",
        "L'olivier, souvent conduit en pluvial, voit sa récolte chuter fortement les années sans pluie de printemps.",
        "Un verger perdu coûte plusieurs années de production : protéger les racines du stress hydrique protège le capital.",
        "EVERGREEN® posé à la plantation ou au rajeunissement du verger prolonge la réserve d'eau entre deux irrigations.",
      ],
    },
  ],

  rendement: ["tomates", "agrumes", "olives", "fraises", "avocats"],

  sources: [
    "Haut-Commissariat au Plan (HCP) : comptes nationaux et emploi.",
    "Ministère de l'Agriculture : stratégie Génération Green, statistiques des filières.",
    "Office des changes : exportations agroalimentaires.",
    "FAO (FAOSTAT, AQUASTAT) et Banque mondiale (WDI).",
  ],
};
