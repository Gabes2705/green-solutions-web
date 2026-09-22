/**
 * Les essais de terrain, en pages web.
 *
 * Ces rapports n'existaient sur le site qu'en PDF, que Google lit mal. Chaque
 * essai devient ici une page dont tout le texte est lisible par un moteur de
 * recherche, et qui renvoie au rapport complet.
 *
 * Tous les chiffres sont recopiés des rapports de public/documents/field-tests,
 * sans arrondi ni extrapolation. Quand un rapport donne deux valeurs pour la
 * même chose, c'est le calcul à partir des mesures brutes qui est retenu (le
 * maïs de Konya : 12 060 kg contre 10 300 kg donnent +17,1 %, pas les « 20 % »
 * du commentaire).
 *
 * Rédigé en français seulement pour l'instant : les pages ne sont servies que
 * sous /fr, et ne prétendent à aucune traduction.
 */

export type Essai = {
  slug: string;
  /** Titre de la page, formulé comme une recherche. */
  titre: string;
  /** Description de recherche : une phrase, avec le résultat principal. */
  description: string;
  culture: string;
  lieu: string;
  pays: string;
  periode: string;
  /** Qui a conduit ou suivi l'essai. */
  conduit: string;
  produits: string;
  chapeau: string;
  resultats: { valeur: string; label: string }[];
  protocole: string[];
  constats: string[];
  pdf: string;
};

export const ESSAIS: Essai[] = [
  {
    slug: "palmiers-dattiers-emirats-icba",
    titre: "Palmiers dattiers aux Émirats : 82 % d'eau d'irrigation en moins",
    description:
      "Essai EVERGREEN conduit par l'ICBA à Dubaï sur 27 palmiers dattiers en sol sableux : 82 % d'eau d'irrigation économisée et +20 % de rendement en dattes.",
    culture: "Palmier dattier",
    lieu: "Station de recherche de l'ICBA, Dubaï",
    pays: "Émirats arabes unis",
    periode: "Saison 2020-2021",
    conduit: "ICBA — International Center for Biosaline Agriculture",
    produits: "EVERGREEN (hydrorétenteur)",
    chapeau:
      "Aux Émirats, il tombe environ 50 mm de pluie par an et presque toute l'agriculture dépend de l'irrigation. L'ICBA a testé EVERGREEN en plein champ, en sol sableux et salin, sur des palmiers dattiers d'environ 8 ans.",
    resultats: [
      { valeur: "−82 %", label: "d'eau d'irrigation sur la saison complète" },
      { valeur: "−85 %", label: "d'eau sur les 7 derniers mois, sans stress pour les arbres" },
      { valeur: "+20 %", label: "de rendement en dattes à 300 g par arbre" },
      { valeur: "1 fois / 7 jours", label: "fréquence d'arrosage des arbres traités" },
    ],
    protocole: [
      "27 palmiers dattiers plantés à 8 × 8 m, sur la station de recherche de l'ICBA.",
      "EVERGREEN incorporé dans les 50 premiers centimètres du sol en début de saison, à plusieurs doses par arbre (dont 300 g, 500 g et 1 000 g).",
      "Arrosage piloté par des sondes qui mesurent l'humidité du sol en temps réel.",
      "Comparaison avec des arbres témoins sans EVERGREEN.",
    ],
    constats: [
      "Les arbres traités n'ont montré aucun signe de sécheresse ni de dégât pendant la saison.",
      "Les éléments nutritifs disponibles dans le sol sont nettement plus élevés avec EVERGREEN : l'eau et les minéraux restent dans la zone des racines au lieu de s'infiltrer en profondeur.",
      "L'activité biologique du sol (respiration et biomasse microbienne) augmente.",
      "L'ICBA confirme l'ensemble des résultats obtenus en conditions de plein champ.",
    ],
    pdf: "/documents/field-tests/palmiers-emirats-uae-icba-2021.pdf",
  },
  {
    slug: "pasteques-mexique",
    titre: "Pastèques au Mexique : 60,5 % d'eau en moins et +30 % de récolte",
    description:
      "Essai EVERGREEN sur 2 600 plants de pastèques à Hermosillo (Sonora, Mexique), par 45 °C : 60,5 % d'eau économisée et une récolte supérieure de 30 %.",
    culture: "Pastèque (variété Charleston)",
    lieu: "Hermosillo, Sonora",
    pays: "Mexique",
    periode: "15 février – 2 août 2023",
    conduit: "Essai de terrain Green Solutions",
    produits: "EVERGREEN (hydrorétenteur)",
    chapeau:
      "Le Sonora domine la production de pastèques au Mexique, mais il a été durement frappé par la sécheresse en 2023. L'essai devait mesurer l'eau économisée avec EVERGREEN dans une région très aride, avec des journées à 45 °C en moyenne.",
    resultats: [
      { valeur: "−60,5 %", label: "d'eau d'irrigation" },
      { valeur: "+30 %", label: "de récolte par rapport à la parcelle arrosée à 100 %" },
      { valeur: "+5°", label: "de taux de sucre moyen dans les fruits" },
      { valeur: "5 g", label: "d'EVERGREEN par plant" },
    ],
    protocole: [
      "2 600 plants de pastèques.",
      "Parcelle témoin sans EVERGREEN, arrosée à 100 %.",
      "Parcelle traitée avec 5 g d'EVERGREEN par plant (2 g de plus que les 3 g habituellement conseillés).",
    ],
    constats: [
      "Climat extrêmement chaud et sec, sur sol aride.",
      "La dose dépend du type de sol (argileux, sableux, caillouteux, calcaire) et du mode d'irrigation (puits, goutte-à-goutte, pluie).",
      "Autre méthode possible : 15 à 20 g d'EVERGREEN par mètre linéaire, selon la variété.",
    ],
    pdf: "/documents/field-tests/pasteques-mexique-2023.pdf",
  },
  {
    slug: "coton-turquie-hatay",
    titre: "Coton en Turquie : rendement presque doublé sous stress hydrique",
    description:
      "Démonstration EVERGREEN sur coton dans la région de Hatay (Turquie) en 2025 : rendement passé de 2,53 à 4,88 t/ha (+93 %) malgré une grave pénurie d'eau.",
    culture: "Coton",
    lieu: "Ferme Mistikoğlu Tarım, plaine d'Amik, Hatay",
    pays: "Turquie",
    periode: "Saison 2025",
    conduit: "Green Solutions avec la coopérative Teknik Tarım",
    produits: "EVERGREEN (hydrorétenteur), injecté sous la zone des racines",
    chapeau:
      "La région de Hatay souffre d'un manque d'eau chronique, de fortes chaleurs et d'un réseau d'irrigation abîmé par le séisme de 2023. En juillet 2025, la plaine d'Amik a connu une crise de l'eau sans précédent. C'est là que l'essai a été conduit.",
    resultats: [
      { valeur: "+93 %", label: "de rendement : 4,88 t/ha contre 2,53 t/ha" },
      { valeur: "+90 %", label: "de productivité de l'eau, au moins" },
      { valeur: "+1 590 $/ha", label: "de revenu brut (3 300 $ contre 1 710 $)" },
      { valeur: "+1 181 $/ha", label: "de bénéfice net, produit et pose déduits" },
    ],
    protocole: [
      "EVERGREEN injecté sous la zone des racines avec les outils d'injection de Green Solutions, dans les buttes préparées pour le semis.",
      "Plusieurs doses comparées : 48, 55, 58 et 62 kg/ha.",
      "Comparaison avec une zone témoin sans traitement.",
      "Irrigation habituelle de la région : par inondation depuis des canaux ouverts.",
    ],
    constats: [
      "Le coton traité a gardé une meilleure croissance et plus de biomasse malgré le manque d'eau.",
      "L'écart se voit dès les premières semaines, une période décisive pour le rendement final du coton.",
    ],
    pdf: "/documents/field-tests/coton-stress-hydrique-turquie.pdf",
  },
  {
    slug: "mais-turquie-konya",
    titre: "Maïs en Turquie : 39 % d'eau en moins et +17 % de rendement",
    description:
      "Démonstration EVERGREEN sur maïs à Konya (TIGEM, Turquie) en 2025 : 528 mm d'irrigation au lieu de 864 mm, et 12 060 kg/ha contre 10 300 kg/ha.",
    culture: "Maïs",
    lieu: "Exploitation d'État TIGEM, Konya",
    pays: "Turquie",
    periode: "Mai – septembre 2025",
    conduit: "Green Solutions et D.I.S., mesures du département irrigation de TIGEM",
    produits: "Hydrorétenteur EVERGREEN, appliqué sous la ligne de semis",
    chapeau:
      "L'objectif était simple : produire autant, ou plus, avec moins d'eau. L'hydrorétenteur a été injecté juste sous la ligne de semis, à une profondeur précise, avec des machines conçues par D.I.S., puis l'irrigation des zones traitées a été volontairement réduite.",
    resultats: [
      { valeur: "−39 %", label: "d'eau : 528 mm au lieu de 864 mm" },
      { valeur: "+17,1 %", label: "de rendement : 12 060 kg/ha contre 10 300 kg/ha" },
      { valeur: "×1,9", label: "productivité de l'eau : 22,8 kg de maïs par m³ contre 11,9" },
      { valeur: "74 kg/ha", label: "dose donnant le meilleur résultat" },
    ],
    protocole: [
      "Une zone témoin et trois zones traitées à 39, 51 et 74 kg/ha.",
      "Application les 14 et 15 mai 2025, directement sous la ligne de semis.",
      "Irrigation des zones traitées réduite de 50 %, puis de 30 %, selon les phases de croissance.",
      "Récolte le 16 septembre 2025, sur des secteurs comparables.",
    ],
    constats: [
      "Rendements mesurés : témoin 10 300 kg/ha ; 39 kg/ha → 11 200 kg/ha ; 51 kg/ha → 10 300 kg/ha ; 74 kg/ha → 12 060 kg/ha.",
      "La précision compte : une application trop superficielle, trop profonde ou décalée de la ligne de semis réduit l'effet.",
      "Pour l'exploitation, 39 % d'eau en moins représentent une économie de 13 629 livres turques par hectare et par an.",
    ],
    pdf: "/documents/field-tests/mais-turquie-tigem.pdf",
  },
  {
    slug: "canne-a-sucre-indonesie",
    titre: "Canne à sucre à Java : +55 % de récolte avec EVERGREEN et ECOFERT",
    description:
      "Essai suivi par l'Université de Jember sur canne à sucre à Java (Indonésie) : +34 % de tonnage à 2,5 g par pied et +55 % à 5 g, avec plus de sucre.",
    culture: "Canne à sucre (variété B82.0333)",
    lieu: "Jember, Java",
    pays: "Indonésie",
    periode: "Février – juillet 2024",
    conduit: "Université de Jember et centre indonésien de recherche sur la canne à sucre",
    produits: "EVERGREEN (hydrorétenteur) et fertilisant biostimulant ECO (ECOFERT)",
    chapeau:
      "L'essai comparait trois parcelles en sol argileux : une parcelle témoin, une avec 2,5 g d'EVERGREEN par pied et une avec 5 g, les deux dernières recevant aussi le fertilisant biostimulant ECO.",
    resultats: [
      { valeur: "+55,4 %", label: "de tonnage à 5 g par pied" },
      { valeur: "+34,2 %", label: "de tonnage à 2,5 g par pied" },
      { valeur: "18 contre 14", label: "teneur en saccharose à la récolte (5 g contre témoin)" },
      { valeur: "128 cm", label: "hauteur de tige à 8 mois, contre 111 cm pour le témoin" },
    ],
    protocole: [
      "Trois parcelles d'un quart d'hectare.",
      "EVERGREEN enfoui près des racines quand la canne a 3 mois.",
      "Fertilisant ECO pulvérisé à la plantation, 3 mois plus tard, puis 8 mois après la plantation.",
      "Doses à l'hectare : 50 kg d'EVERGREEN et 500 ml de fertilisant.",
    ],
    constats: [
      "Tonnage total : 6 950 t pour le témoin, 9 330 t à 2,5 g par pied, 10 800 t à 5 g par pied.",
      "Diamètre de tige à 8 mois : 2,47 cm pour le témoin, 2,78 cm à 2,5 g et 2,88 cm à 5 g.",
      "Teneur en saccharose : 14 pour le témoin, 16 à 2,5 g et 18 à 5 g.",
    ],
    pdf: "/documents/field-tests/canne-a-sucre-java-indonesie-2024.pdf",
  },
  {
    slug: "pommes-de-terre-afrique-du-sud",
    titre: "Pommes de terre en Afrique du Sud : +31 % de rendement, 52 % d'eau en moins",
    description:
      "Essai EVERGREEN et ECOFERT sur pommes de terre à Bloemfontein (Afrique du Sud), 2025-2026 : rendement de 12 à 15,7 t/ha et 52 % d'eau économisée.",
    culture: "Pomme de terre (variété Buffelspoort BP13)",
    lieu: "Bloemfontein",
    pays: "Afrique du Sud",
    periode: "Septembre 2025 – janvier 2026",
    conduit: "Afrinest Farm Group (Tzaneen, Limpopo)",
    produits: "EVERGREEN (hydrorétenteur) et ECOFERT (fertilisant bio)",
    chapeau:
      "Cet essai pilote mesurait l'effet combiné d'EVERGREEN dans le sol et d'ECOFERT en pulvérisation sur le rendement et la qualité des pommes de terre.",
    resultats: [
      { valeur: "+31,4 %", label: "de rendement total" },
      { valeur: "15,7 t/ha", label: "au lieu de 12 t/ha" },
      { valeur: "−52 %", label: "d'eau" },
      { valeur: "30 kg/ha", label: "d'EVERGREEN dans le sillon de plantation" },
    ],
    protocole: [
      "Rangées de 10 m, répétées 5 fois.",
      "Sol limoneux (Avalon) avec 15 à 18 % d'argile ; 26 667 plants par hectare.",
      "Plantation manuelle le 22 septembre 2025 ; récolte du 25 au 31 janvier 2026.",
      "EVERGREEN posé à la main dans le sillon de plantation ; ECOFERT pulvérisé à 700 ml/ha.",
      "Irrigation conventionnelle.",
    ],
    constats: [
      "Tubercules plus gros et plus réguliers.",
      "Moins de risques sur la production et un revenu plus élevé pour l'agriculteur.",
    ],
    pdf: "/documents/field-tests/pomme-de-terre-afrique-du-sud-2025.pdf",
  },
  {
    slug: "soja-chine-shandong",
    titre: "Soja en Chine : +11 % de rendement avec un super-absorbant",
    description:
      "Essai en blocs randomisés avec l'Institut des sols et des engrais du Shandong (Chine) : levée plus rapide et rendement de soja supérieur de 11,2 à 11,4 %.",
    culture: "Soja (variété Ludou II)",
    lieu: "Taian, province du Shandong",
    pays: "Chine",
    periode: "Juin – octobre 2017",
    conduit: "Institut des sols et des engrais du Shandong, avec Summit Enterprise",
    produits: "Polymère super-absorbant EVERGREEN",
    chapeau:
      "L'été, au moment du semis du soja, le Shandong est chaud avec une forte évaporation. L'essai mesurait l'effet du super-absorbant mis dans la ligne de semis sur la levée, la vigueur, le rendement et le revenu.",
    resultats: [
      { valeur: "+11,2 à 11,4 %", label: "de rendement" },
      { valeur: "2 jours", label: "de levée plus rapide" },
      { valeur: "+6,2 à 6,6 %", label: "de taux de germination" },
      { valeur: "+19 à 20 kg", label: "de soja par acre" },
    ],
    protocole: [
      "Blocs randomisés : parcelles de 30 m², chaque traitement répété 4 fois.",
      "Même fumure pour toutes les parcelles : engrais composé et compost dans la ligne de semis.",
      "Trois traitements : témoin sans super-absorbant, 1,6 kg et 2 kg de super-absorbant par parcelle de 30 m².",
    ],
    constats: [
      "L'augmentation de rendement atteint un niveau statistiquement significatif.",
      "Gain de revenu de 62,9 à 66,1 yuans par acre par rapport au témoin.",
    ],
    pdf: "/documents/field-tests/soja-super-absorbant.pdf",
  },
];

/** Essais lancés avec des universités, dont les résultats ne sont pas encore publiés. */
export const ESSAIS_EN_COURS = [
  {
    titre: "Érables rouges en ville — Université de Floride",
    texte:
      "Le laboratoire d'arboriculture Klein (Gainesville) teste EVERGREEN sur 90 érables rouges plantés en avril 2025 : 30 avec le gel dans le trou de plantation, 30 avec le gel mélangé au sol autour de l'arbre, 30 sans gel. Étude sur 2 ans.",
    pdf: "/documents/field-tests/hydrogel-floride-klein-university.pdf",
  },
  {
    titre: "Reboisement en sapins de Douglas — Université d'État de l'Oregon",
    texte:
      "La coopérative de recherche VMRC teste EVERGREEN sur deux sites de reboisement aux déficits en eau contrastés, près de Coquille et de Roseburg : 48 jeunes plants avec gel et 48 sans, sur chaque site. Plantation en février 2025, étude sur 2 ans.",
    pdf: "/documents/field-tests/hydrogel-oregon-2025.pdf",
  },
];
