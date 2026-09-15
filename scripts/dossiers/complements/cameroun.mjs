// Dossier court (14 pages) : économie, filière phare et reste de la gamme.
export default {
  paysTitre: "le Cameroun",
  partenariat: false,

  economie: {
    kicker: "ÉCONOMIE ET SÉCURITÉ ALIMENTAIRE",
    title: "Un exportateur agricole qui importe encore son riz",
    items: [
      { value: "Top 5", label: "des producteurs mondiaux de cacao" },
      { value: "≈ 30 M", label: "d'habitants, dont plus de la moitié en ville" },
      { value: "≈ 800 000 t", label: "de riz importées chaque année" },
      { value: "≈ 12 M ha", label: "de terres dégradées, dont les deux tiers au Nord" },
    ],
    note:
      "Le Cameroun approvisionne ses voisins de la CEMAC en produits vivriers, mais importe l'essentiel de son riz, de son blé et de son poisson. La politique d'import-substitution vise à produire localement une part croissante de ces volumes.",
  },

  filieres: [
    {
      kicker: "FILIÈRE PHARE",
      title: "Cacao : un record à transformer en rendement durable",
      photo: 5,
      bullets: [
        "La campagne 2024/25 a dépassé pour la première fois 300 000 tonnes, portée par des prix mondiaux historiquement élevés.",
        "La production repose sur des centaines de milliers de petites exploitations du Centre, du Sud et du Sud-Ouest, aux vergers souvent âgés.",
        "Le rendement moyen reste faible, et la variabilité des pluies pèse sur chaque récolte comme sur la reprise des jeunes plants.",
        "Les acheteurs européens exigent traçabilité, zéro déforestation et limites strictes de résidus : NAPEMA® protège sans résidu.",
        "À la replantation, EVERGREEN® dans le trou de plantation sécurise la reprise pendant la première saison sèche.",
      ],
    },
  ],
};
