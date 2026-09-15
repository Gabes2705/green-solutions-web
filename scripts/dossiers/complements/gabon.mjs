// Les sept pages qui complètent le dossier Gabon (voir build.mjs).
export default {
  paysTitre: "le Gabon",

  economie: {
    kicker: "ÉCONOMIE ET SÉCURITÉ ALIMENTAIRE",
    title: "Une économie pétrolière qui veut nourrir ses villes",
    items: [
      { value: "≈ 90 %", label: "de la population vit en ville, près de la moitié à Libreville" },
      { value: "≈ 88 %", label: "du territoire couvert par la forêt" },
      { value: "≈ 500 Md", label: "de francs CFA d'importations alimentaires par an" },
      { value: "2014", label: "lancement du programme GRAINE de relance agricole" },
    ],
    note:
      "Le pétrole, le manganèse et le bois font l'essentiel des exportations, tandis que l'assiette des Gabonais vient largement de l'étranger. Les plans de diversification et le programme GRAINE misent sur une agriculture vivrière et périurbaine capable de réduire cette dépendance.",
  },

  filieres: [
    {
      kicker: "PREMIÈRE FILIÈRE",
      title: "Banane plantain et manioc : la base de l'assiette",
      photo: 6,
      bullets: [
        "Manioc et banane plantain sont les deux aliments de base, cultivés surtout en petites parcelles familiales.",
        "Les sols ferralitiques, lessivés par les fortes pluies, retiennent mal l'eau et les éléments nutritifs.",
        "La saison sèche, de juin à septembre, suffit à faire chuter la production des parcelles non arrosées.",
        "Une part importante de la banane plantain vendue à Libreville arrive encore du Cameroun.",
        "EVERGREEN® à la plantation garde l'humidité au pied pendant la saison sèche ; ECOFERT® apporte ce que la pluie emporte.",
      ],
    },
    {
      kicker: "DEUXIÈME FILIÈRE",
      title: "Maraîchage autour de Libreville : produire là où l'on mange",
      photo: 5,
      bullets: [
        "Tomates, piments, oseille et légumes-feuilles sont cultivés en ceinture de Libreville, d'Owendo et de Ntoum.",
        "Les légumes importés arrivent chers et souvent abîmés : la production locale a un marché immédiat.",
        "Sur sol sableux ou très lessivé, l'arrosage manuel ne suffit plus dès que la pluie s'interrompt quelques jours.",
        "Les maladies fongiques profitent de l'humidité : NAPEMA® les traite sans résidu sur des légumes vendus frais.",
        "Retenir l'eau au niveau des racines réduit les arrosages et stabilise les récoltes entre deux pluies.",
      ],
    },
  ],

  rendement: ["bananes", "tomates", "manioc", "aubergines", "canne"],

  sources: [
    "Direction générale de la statistique : comptes nationaux, commerce extérieur.",
    "Ministère de l'Agriculture : programme GRAINE, statistiques agricoles.",
    "Banque africaine de développement : profil agricole du Gabon.",
    "FAO (FAOSTAT, AQUASTAT) et Banque mondiale (WDI).",
  ],
};
