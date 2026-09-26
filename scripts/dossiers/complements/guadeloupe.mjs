// Dossier court : économie, filière phare et reste de la gamme.
export default {
  paysTitre: "la Guadeloupe",
  partenariat: false,

  economie: {
    kicker: "ÉCONOMIE AGRICOLE",
    title: "Banane et canne à sucre, deux filières d'export sous tension",
    items: [
      { value: "60 %", label: "de l'eau potable perdue dans le réseau avant d'arriver au robinet" },
      { value: "29,4 %", label: "seulement des sites en rivière jugés d'excellente qualité" },
      { value: "2026", label: "campagne de replantation de la canne compromise par la sécheresse" },
      { value: "UGPBAN", label: "l'union de producteurs qui commercialise la banane des Antilles françaises" },
    ],
    note:
      "La banane et la canne à sucre restent les deux piliers de l'agriculture d'exportation guadeloupéenne, commercialisées via des structures collectives établies (UGPBAN pour la banane, filière sucre-rhum pour la canne). La crise de l'eau de 2026 touche les deux filières en même temps : la sécheresse au champ, les fuites dans le réseau.",
  },

  filieres: [
    {
      kicker: "FILIÈRE PHARE",
      title: "Banane et canne : deux cultures qui encaissent le déficit hydrique",
      photo: 2,
      bullets: [
        "La banane, principale culture d'export de l'île, est sensible à tout déficit hydrique prolongé, en particulier sur les parcelles les moins bien exposées.",
        "La canne à sucre, conduite pour l'essentiel vers l'industrie sucrière, a vu sa campagne de replantation 2026 directement compromise par le manque de pluie.",
        "Les deux filières sont structurées autour d'organisations de producteurs, ce qui facilite un essai groupé plutôt qu'exploitation par exploitation.",
        "Le maraîchage de diversification, plus fragile en trésorerie, est le segment où un gain d'eau se traduit le plus vite en résultat visible.",
        "Sur ces cultures, EVERGREEN® se teste en une saison ; la canne, cultivée sur plusieurs cycles, demande un suivi sur au moins une replantation complète.",
      ],
    },
  ],
};
