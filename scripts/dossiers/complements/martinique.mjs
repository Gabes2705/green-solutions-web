// Dossier court : économie, filière phare et reste de la gamme.
export default {
  paysTitre: "la Martinique",
  partenariat: false,

  economie: {
    kicker: "ÉCONOMIE AGRICOLE",
    title: "Banane et canne à sucre, sous alerte sécheresse territoriale",
    items: [
      { value: "94 %", label: "de l'eau consommée vient directement des rivières" },
      { value: "≈ 3 jours", label: "de capacité de stockage pour tout le territoire" },
      { value: "2026", label: "procédure de calamité agricole engagée par la préfecture" },
      { value: "Banamart", label: "la structure qui fédère l'essentiel des producteurs de banane" },
    ],
    note:
      "Banane et canne à sucre restent les deux piliers de l'agriculture d'exportation martiniquaise, commercialisées via des structures collectives établies (Banamart pour la banane, SICA Canne-Union pour la canne et le rhum). L'absence quasi totale de réserve d'eau rend chaque semaine sans pluie immédiatement visible sur les deux filières.",
  },

  filieres: [
    {
      kicker: "FILIÈRE PHARE",
      title: "Banane et canne : deux cultures exposées à l'absence de réserve",
      photo: 2,
      bullets: [
        "La banane, principale culture d'export de l'île, encaisse directement tout déficit hydrique prolongé faute de réserve territoriale.",
        "La canne à sucre, destinée pour l'essentiel à la distillerie agricole et au sucre, est également concernée par la procédure de calamité agricole 2026.",
        "Les deux filières sont structurées autour d'organisations de producteurs, ce qui facilite un essai groupé plutôt qu'exploitation par exploitation.",
        "Le maraîchage de diversification, plus fragile en trésorerie, est le segment où un gain d'eau se traduit le plus vite en résultat visible.",
        "Sur ces cultures, EVERGREEN® se teste en une saison ; la canne, cultivée sur plusieurs cycles, demande un suivi sur au moins une replantation complète.",
      ],
    },
  ],
};
