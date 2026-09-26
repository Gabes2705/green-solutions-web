// Dossier court : économie, filière phare et reste de la gamme.
export default {
  paysTitre: "le Bénin",
  partenariat: false,

  economie: {
    kicker: "ÉCONOMIE ET TRANSFORMATION LOCALE",
    title: "Le coton porte l'économie, la transformation prend le relais",
    items: [
      { value: "1er", label: "producteur de coton d'Afrique de l'Ouest (637 000 t, 2024-2025)" },
      { value: "≈ 63 %", label: "du territoire est considéré cultivable" },
      { value: "135 hab./km²", label: "densité moyenne, en forte croissance démographique" },
      { value: "GDIZ", label: "la zone industrielle de Glo-Djigbé, moteur de la transformation locale" },
    ],
    note:
      "Le Bénin cherche à transformer davantage de ses cultures de rente sur place plutôt qu'à les exporter brutes, en particulier via la zone industrielle de Glo-Djigbé. Cette stratégie suppose un approvisionnement agricole régulier, d'un bout à l'autre de l'année, ce qui remet la question du rendement et de l'eau au centre.",
  },

  filieres: [
    {
      kicker: "FILIÈRE PHARE",
      title: "Le coton du nord : une culture pluviale, une seule saison",
      photo: 2,
      bullets: [
        "Le coton béninois est cultivé très majoritairement en pluvial, dans le nord et le centre du pays, sur la seule saison des pluies de la région.",
        "Un démarrage tardif ou une pause de pluie en début de cycle compromet directement la levée, sans irrigation de secours sur la plupart des parcelles.",
        "La filière est structurée autour de sociétés cotonnières et de coopératives, un circuit qui facilite le déploiement d'un essai groupé.",
        "Anacarde et ananas, cultures de rente en forte croissance, partagent la même contrainte pluviale sur des sols souvent moins profonds.",
        "Sur ces cultures de diversification, EVERGREEN® se teste en une saison ; le calendrier du coton lui-même dépend des campagnes de la filière.",
      ],
    },
  ],
};
