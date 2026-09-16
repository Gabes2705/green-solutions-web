// Les sept pages qui complètent le dossier Côte d'Ivoire (voir build.mjs).
export default {
  paysTitre: "la Côte d'Ivoire",

  economie: {
    kicker: "ÉCONOMIE ET SÉCURITÉ ALIMENTAIRE",
    title: "Premier exportateur de cacao, importateur de riz",
    items: [
      { value: "1er", label: "producteur mondial de cacao et de noix de cajou" },
      { value: "3e", label: "producteur mondial de caoutchouc naturel" },
      { value: "≈ 1,6 Mt", label: "de riz importées chaque année" },
      { value: "≈ 33 M", label: "d'habitants, dont plus de la moitié en ville" },
    ],
    note:
      "Les recettes d'exportation reposent largement sur le cacao, ce qui expose le pays aux cours mondiaux. En face, le riz reste massivement importé : les programmes publics de relance rizicole visent à réduire cette facture, et cherchent des gains de rendement sur des périmètres largement pluviaux.",
  },

  filieres: [
    {
      kicker: "FILIÈRE PHARE",
      title: "Cacao : le rendement, pas le volume",
      photo: 2,
      bullets: [
        "Environ 40 % du cacao mondial sort de Côte d'Ivoire, produit par des centaines de milliers d'exploitations familiales.",
        "Le rendement moyen tourne autour de 500 kg par hectare, très en dessous de ce que le cacaoyer peut donner sur un verger jeune et bien conduit.",
        "L'écart s'explique par l'âge des arbres, la pression du swollen shoot et des pluies devenues irrégulières — pas par un manque de surface.",
        "Les acheteurs européens exigent traçabilité, zéro déforestation et limites strictes de résidus : NAPEMA® protège sans laisser de résidu sur la fève.",
        "À la replantation, EVERGREEN® dans le trou de plantation sécurise la reprise pendant la première saison sèche, quand la perte de jeunes plants coûte une année entière.",
      ],
    },
    {
      kicker: "DEUXIÈME FILIÈRE",
      title: "Anacarde et cultures du Nord : la saison courte",
      photo: 6,
      caption: "Plantation de maïs, Côte d'Ivoire",
      bullets: [
        "Le pays est devenu en quinze ans le premier producteur mondial de noix de cajou brutes, avec près d'un million de tonnes récoltées.",
        "La filière se concentre au centre et au nord, où la pluie tombe sur cinq à six mois seulement.",
        "Les rendements par hectare restent faibles et l'essentiel de la noix part encore brute : le pays développe sa transformation locale.",
        "Igname, maïs et coton partagent les mêmes parcelles et la même contrainte : une poche de sécheresse au semis se paie à la récolte.",
        "Retenir l'eau de pluie dans la zone racinaire est ici le levier le plus direct, sur des sols sableux qui la laissent filer.",
      ],
    },
  ],

  rendement: ["cacao", "manioc", "bananes", "cafe", "mangues"],

  sources: [
    "Conseil du Café-Cacao et Conseil Coton-Anacarde : production, campagnes, prix garantis.",
    "Ministère de l'Agriculture, ANADER et FIRCA : statistiques agricoles et programmes de filière.",
    "FAO (FAOSTAT, AQUASTAT) et Banque mondiale (WDI) : PIB agricole, emploi, prélèvements d'eau.",
    "USDA GAIN et ICCO : cacao, café, riz et échanges mondiaux.",
  ],
};
