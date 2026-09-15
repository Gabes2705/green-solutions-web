// Les sept pages qui complètent le dossier Algérie (voir build.mjs).
export default {
  paysTitre: "l'Algérie",

  economie: {
    kicker: "ÉCONOMIE ET SÉCURITÉ ALIMENTAIRE",
    title: "Produire davantage pour importer moins",
    items: [
      { value: "8–10 Md$", label: "d'importations alimentaires par an, céréales et lait en tête" },
      { value: "Top 5", label: "des importateurs mondiaux de blé" },
      { value: "≈ 20 M", label: "de palmiers dattiers, Deglet Nour en tête" },
      { value: "Top 4", label: "des producteurs mondiaux de dattes" },
    ],
    note:
      "La politique agricole encourage la mise en valeur des terres du Sud — céréales sous pivot, pomme de terre, maïs — pour réduire la facture des importations. Chaque hectare gagné sur le désert se paie en eau souterraine : l'efficience au champ conditionne l'extension.",
  },

  filieres: [
    {
      kicker: "PREMIÈRE FILIÈRE",
      title: "Dattes : la Deglet Nour sous contrainte d'eau et de sel",
      photo: 3,
      bullets: [
        "Les palmeraies des Ziban, de l'Oued Righ et du Souf fournissent l'essentiel de la production, dont la Deglet Nour exportée.",
        "L'irrigation par submersion reste courante, alors que les nappes profondes du Sahara ne se renouvellent pas.",
        "La remontée des sels et l'ensablement réduisent le calibre et la qualité des dattes dans les vieilles palmeraies.",
        "Les nouvelles plantations passent au goutte-à-goutte : c'est le moment où l'hydro-rétenteur se pose le plus simplement.",
        "Un rejet planté avec EVERGREEN® dans la fosse garde l'eau au niveau des racines entre deux irrigations.",
      ],
    },
    {
      kicker: "DEUXIÈME FILIÈRE",
      title: "Pomme de terre sous pivot : le rendement se joue à l'arrosage",
      photo: 5,
      bullets: [
        "Avec près de 5 millions de tonnes, la pomme de terre est la première production végétale du pays.",
        "El Oued est devenu en vingt ans un bassin majeur, sur sable, sous pivot, avec une eau pompée en profondeur.",
        "Sur sol sableux, l'eau traverse la zone racinaire en quelques heures : une partie de chaque arrosage est perdue.",
        "Le coût du pompage et de l'électricité pèse de plus en plus dans la marge à l'hectare.",
        "Des essais secteur contre secteur sous un même pivot mesurent l'eau économisée sur une saison complète.",
      ],
    },
  ],

  rendement: ["tomates", "pommesDeTerre", "dattes", "agrumes", "olives"],

  sources: [
    "Office national des statistiques (ONS) : comptes nationaux, production agricole.",
    "Ministère de l'Agriculture et du Développement rural : statistiques agricoles.",
    "Douanes algériennes : importations de céréales, de lait et de produits alimentaires.",
    "FAO (FAOSTAT, AQUASTAT) et Banque mondiale (WDI).",
  ],
};
