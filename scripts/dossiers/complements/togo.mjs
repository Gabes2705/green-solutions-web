// Les pages qui complètent le dossier Togo : Économie, deux filières, sources.
export default {
  /* Un dossier complet par langue, qui remplace le PDF de présentation. */
  telechargements: [
    { langue: "fr", fichier: "togo-fr" },
    { langue: "en", fichier: "togo-en" },
  ],

  paysTitre: "Togo",
  partenariat: false,

  economie: {
    kicker: "ÉCONOMIE ET SÉCURITÉ ALIMENTAIRE",
    title: "Des échanges équilibrés, une facture de riz",
    items: [
      { value: "466 M$", label: "D'exportations agricoles en 2024 : Cacao, tourteau de soja, coton fibre" },
      { value: "467 M$", label: "D'importations agricoles en 2024 : Huile de palme, riz, sucre, blé" },
      { value: "74 M$", label: "De riz importé en 2024 : Riz décortiqué, brisures et riz usiné" },
      { value: "26 554 t", label: "D'azote minéral utilisé en 2023, entièrement importé" },
    ],
    note:
      "Le port de Lomé sert aussi de porte d'entrée aux pays voisins : Une partie des échanges, comme l'huile de palme, peut correspondre à des réexportations. La sous-alimentation touche 10,2 % de la population (Banque mondiale).",
  },

  filieres: [
    {
      kicker: "FILIÈRE PRIORITAIRE",
      title: "Maïs et soja sous la pluie",
      photo: 2,
      bullets: [
        "Le maïs couvre 804 000 ha et le soja 281 684 ha (FAOSTAT, 2024) ; presque tout est cultivé sans irrigation.",
        "Rendements moyens : 1,26 t/ha pour le maïs, 1,01 t/ha pour le soja.",
        "EVERGREEN® posé au semis garde l'eau de chaque pluie près des racines.",
        "Au scénario central : 1 074 t de maïs et 570 t de soja en plus pour 10 000 ha traités.",
        "La filière soja, en grande partie biologique, peut utiliser ECOFERT®, certifié EU Bio.",
      ],
    },
    {
      kicker: "IRRIGATION ET MARAÎCHAGE",
      title: "Riz de bas-fond et cultures maraîchères",
      photo: 3,
      bullets: [
        "7 860 ha sont équipés pour l'irrigation, surtout pour le riz et le maraîchage.",
        "Le pays a importé 74 M$ de riz en 2024 : Chaque tonne produite sur place réduit cette facture.",
        "Au scénario central, 11,7 millions de m³ d'eau seraient économisés chaque année, de quoi irriguer environ 1 214 ha de plus.",
        "Pour les légumes, l'essai de référence (pastèque, Mexique) a mesuré 60,5 % d'eau en moins et 30 % de rendement en plus.",
        "Paulownia ALTIFOLIA®, arbre à croissance rapide, peut accompagner le reboisement et l'agroforesterie : Le résultat se mesure par essai.",
      ],
    },
  ],

  sources: [
    "Banque mondiale (WDI), FAOSTAT (cultures, commerce, engrais, terres) et FAO AQUASTAT.",
    "ERA5 (Copernicus) et PVGIS : Climat 1991-2020 et tendances depuis 1981.",
    "CEDEAO : Tarif extérieur commun et règlement C/REG.13/12/12 sur les engrais.",
  ],
};
