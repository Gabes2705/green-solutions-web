// Les pages qui complètent le dossier France : Économie, filière prioritaire, sources.
export default {
  /* Un dossier complet par langue, qui remplace le PDF de présentation. */
  telechargements: [
    { langue: "fr", fichier: "france-fr" },
  ],

  paysTitre: "la France",
  partenariat: false,

  economie: {
    kicker: "ÉCONOMIE ET AGRICULTURE",
    title: "Un grand pays agricole et exportateur",
    items: [
      { value: "≈ 68,7 M", label: "d'habitants (2025)" },
      { value: "≈ 85 Md€", label: "de production agricole en 2024, dont 44 Md€ de productions végétales" },
      { value: "≈ 83,5 Md$", label: "d'exportations agricoles en 2024, pour 74,6 Md$ d'importations" },
      { value: "≈ 27,2 M ha", label: "de surface agricole utilisée (2023)" },
    ],
    note:
      "Vins, spiritueux, fromages, blé, orge, maïs et pommes de terre dominent les exportations. Plusieurs de ces productions dépendent d'une eau disponible au bon moment : Garder l'eau dans le sol protège aussi le chiffre d'affaires à l'export lors des étés secs.",
  },

  filieres: [
    {
      kicker: "FILIÈRE PRIORITAIRE",
      title: "Le maïs irrigué du Sud-Ouest et du Centre",
      photo: 0,
      bullets: [
        "Première culture irriguée du pays : Environ 497 000 ha de maïs grain irrigués en 2023 (Eurostat), un tiers des surfaces irriguées.",
        "Au scénario central, le maïs donne environ 42 % de l'eau économisée par nos produits en France.",
        "Un essai publié en Turquie a mesuré 39 % d'eau en moins et 17 % de rendement en plus avec nos hydro-rétenteurs.",
        "Le maïs est aussi un produit d'exportation : Chaque mètre cube économisé protège la récolte lors des étés secs.",
        "EVERGREEN® posé au semis retient l'eau de chaque arrosage autour des racines.",
      ],
    },
  ],

  sources: [
    "Eurostat : Enquête sur la structure des exploitations 2023, prélèvements d'eau, comptes de l'agriculture.",
    "Office français de la biodiversité : Banque nationale des prélèvements (BNPE), irrigation.",
    "FAO (FAOSTAT) et Banque mondiale (WDI) ; ministère de la Transition écologique (prix de l'eau, TRACC).",
  ],
};
