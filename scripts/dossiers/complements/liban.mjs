// Les pages qui complètent le dossier Liban : Économie, filière prioritaire, sources.
export default {
  paysTitre: "le Liban",
  partenariat: false,

  economie: {
    kicker: "ÉCONOMIE ET SÉCURITÉ ALIMENTAIRE",
    title: "Un pays qui importe l'essentiel de ses céréales",
    items: [
      { value: "≈ 5,8 M", label: "d'habitants, sur un peu plus de 10 000 km²" },
      { value: "≈ 2,7 Md$", label: "d'importations agricoles en 2024, pour 0,5 Md$ d'exportations" },
      { value: "≈ 500 000 t", label: "de blé importées en 2024, trois fois la production nationale" },
      { value: "≈ 170 000", label: "exploitations agricoles, de 1,4 ha en moyenne (recensement de 2010)" },
    ],
    note:
      "Depuis la crise de 2019, la facture alimentaire pèse sur une économie fortement contractée. Le pays exporte de l'huile d'olive, du raisin, des pommes de terre, des bananes, des pommes et des avocats, et importe ses céréales, ses huiles, son sucre et une partie de sa viande. Produire plus avec la même eau réduit directement cette dépendance.",
  },

  filieres: [
    {
      kicker: "FILIÈRE PRIORITAIRE",
      title: "La pomme de terre irriguée de la Békaa et de l'Akkar",
      photo: 0,
      bullets: [
        "Première culture du pays en valeur de production, sur environ 27 600 ha (FAOSTAT, 2023).",
        "Irriguée par pompage ou par les canaux du Litani ; en 2025, 70 % des producteurs de la Békaa n'ont pas semé faute d'eau fiable, selon l'union nationale des agriculteurs.",
        "Le pays exporte environ 36 000 t de pommes de terre et en importe 83 000 t (2024) : La production locale ne couvre pas toute l'année.",
        "Un essai publié en Afrique du Sud a mesuré 52 % d'eau en moins et 31 % de rendement en plus avec EVERGREEN® et ECOFERT®.",
        "EVERGREEN® posé dans le sillon de plantation retient l'eau de chaque arrosage autour des tubercules.",
      ],
    },
  ],

  sources: [
    "Ministère de l'Agriculture et FAO : Recensement agricole 2010.",
    "Ministère de l'Énergie et de l'Eau : Stratégie nationale du secteur de l'eau, mise à jour 2020.",
    "FAO (FAOSTAT, AQUASTAT) et Banque mondiale (WDI) ; Office national du Litani.",
  ],
};
