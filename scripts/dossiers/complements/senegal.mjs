// Dossier court (14 pages) : économie, filière phare et reste de la gamme.
export default {
  paysTitre: "le Sénégal",
  partenariat: false,

  economie: {
    kicker: "ÉCONOMIE ET SÉCURITÉ ALIMENTAIRE",
    title: "La souveraineté alimentaire passe par le riz",
    items: [
      { value: "≈ 18 M", label: "d'habitants, dont près de la moitié en ville" },
      { value: "> 1 M t", label: "de riz importées chaque année" },
      { value: "≈ 25 000 t", label: "de mangues exportées par an, surtout vers l'Europe" },
      { value: "2024", label: "début de la production pétrolière, qui rend la diversification urgente" },
    ],
    note:
      "Le riz est l'aliment de base, et une grande partie en est importée, comme les légumes de contre-saison. Les programmes publics misent sur l'extension du riz irrigué dans la vallée du fleuve et sur la modernisation du maraîchage.",
  },

  filieres: [
    {
      kicker: "FILIÈRE PHARE",
      title: "Vallée du fleuve : produire plus avec la même eau",
      photo: 2,
      bullets: [
        "Les périmètres irrigués de la vallée du fleuve Sénégal portent l'essentiel de la politique d'autosuffisance en riz.",
        "Les rendements varient fortement d'un aménagement à l'autre, selon la maîtrise de l'eau et le calendrier cultural.",
        "Le pompage pèse lourd dans le coût de production, et les parcelles sableuses en bordure perdent beaucoup d'eau.",
        "Oignon, tomate et patate douce en contre-saison diversifient les revenus sur les mêmes périmètres.",
        "Sur ces cultures de diversification, EVERGREEN® se teste en une saison ; le riz en submersion n'est pas sa cible.",
      ],
    },
  ],
};
