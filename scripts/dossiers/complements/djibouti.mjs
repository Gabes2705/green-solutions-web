// Les pages qui complètent le dossier Djibouti : Économie, deux filières, sources.
export default {
  /* Un dossier complet par langue, qui remplace le PDF de présentation. */
  telechargements: [
    { langue: "fr", fichier: "djibouti-fr" },
    { langue: "en", fichier: "djibouti-en" },
  ],

  paysTitre: "Djibouti",
  partenariat: false,

  economie: {
    kicker: "ÉCONOMIE ET SÉCURITÉ ALIMENTAIRE",
    title: "Un port qui nourrit la région",
    items: [
      { value: "1 623 M$", label: "D'importations agricoles en 2024 : Huiles, sucre, riz, farine de blé" },
      { value: "579 M$", label: "D'engrais reçus en 2022, presque tous réexportés vers l'Éthiopie" },
      { value: "96,7 %", label: "Du fret extérieur éthiopien traité par les ports de Djibouti en 2025/26" },
      { value: "22 500 m³", label: "Produits chaque jour par l'usine de Doraleh ; 45 000 m³ visés après la deuxième phase" },
    ],
    note:
      "Djibouti importe presque toute sa nourriture et sert de porte d'entrée à l'Éthiopie : Engrais, blé, sucre et huiles y transitent. Le bétail est la première exportation propre du pays : Moutons, chèvres, bovins et dromadaires partent vers la péninsule arabique depuis les terminaux de Damerjog et de Doraleh.",
  },

  filieres: [
    {
      kicker: "FILIÈRE PRIORITAIRE",
      title: "Maraîchage et palmiers sur eau de nappe",
      photo: 2,
      bullets: [
        "Les jardins le long des oueds produisent légumes, fruits et dattes, irrigués par des puits dont l'eau se salinise.",
        "Avec 228 mm de pluie et plus de 2 000 mm d'évapotranspiration, l'eau de chaque arrosage s'évapore vite en surface.",
        "Un essai publié en sol sableux et salin (ICBA, Dubaï) a mesuré 82 % d'eau en moins et 20 % de dattes en plus avec EVERGREEN®.",
        "EVERGREEN® posé au pied des plants retient l'eau de chaque arrosage autour des racines.",
        "ECOFERT® enrichit le sol en matière organique sans ajouter de sel à l'eau d'irrigation.",
      ],
    },
    {
      kicker: "VILLES ET REBOISEMENT",
      title: "Espaces verts, plantations et forêt du Day",
      photo: 3,
      bullets: [
        "Les espaces verts et les plantations urbaines s'arrosent à l'eau dessalée ou épurée : Chaque litre économisé compte.",
        "EVERGREEN® et ECOSORB® réduisent l'arrosage pour la même surface plantée.",
        "Le reboisement de la forêt du Day et des abords des villes demande une bonne reprise des plants en saison chaude.",
        "Paulownia ALTIFOLIA®, arbre à croissance rapide, peut y être planté avec un hydro-rétenteur : Le résultat se mesure par essai.",
        "Djibouti peut aussi servir de plateforme de stockage et d'acheminement vers le marché éthiopien.",
      ],
    },
  ],

  sources: [
    "INSTAD : Recensements de la population de 2009 et 2024 ; production agricole 2019/2020.",
    "FAO (FAOSTAT, AQUASTAT), Banque mondiale (WDI) et FIDA.",
    "ERA5 (Copernicus) : Climat 1991-2020 et tendances depuis 1981 ; UN Comtrade, cité par la DG Trésor.",
  ],
};
