/**
 * Les guides thématiques : une page par sujet que les gens cherchent.
 *
 * Google classe des pages, pas des sites. Pour apparaître sur « engrais bio
 * liquide » ou « biostimulant », il faut une page dont ce soit le sujet, écrite
 * avec les mots de la recherche. Les pages produits du site parlent d'abord de
 * la marque ; les guides partent de la question de l'agriculteur.
 *
 * Tout le contenu vient des fiches produits et des rapports du dossier de
 * Green Solutions. Les chiffres annoncés par une fiche sont présentés comme
 * tels ; ceux d'un essai renvoient à la page de l'essai.
 *
 * Rédigés en français seulement pour l'instant, servis sous /fr.
 */

export type Guide = {
  slug: string;
  titre: string;
  description: string;
  eyebrow: string;
  h1: string;
  chapeau: string;
  chiffres: { valeur: string; label: string }[];
  sections: { titre: string; paragraphes?: string[]; puces?: string[] }[];
  faq: { q: string; r: string }[];
  /** Essais de terrain (slugs de lib/essais) qui utilisent le produit. */
  essais: string[];
  /** Page produit du site. */
  technologie: string;
};

export const GUIDES: Guide[] = [
  {
    slug: "engrais-bio-liquide-biostimulant",
    titre: "Engrais bio liquide et biostimulant en microdoses : ECOFERT",
    description:
      "ECOFERT, engrais bio liquide aux acides aminés certifié SOHISCERT : 1 à 4 flacons de 140 ml par hectare, sans lessivage, sans hausse de salinité ni de nitrates.",
    eyebrow: "Guide · Fertilisation",
    h1: "Un engrais bio liquide qui nourrit la plante sans épuiser le sol",
    chapeau:
      "ECOFERT est un fertilisant biologique liquide, à base d'acides aminés, d'azote, de phosphore et de potassium. Il s'applique en microdoses : quelques flacons suffisent pour un hectare. Il sert à la fois d'engrais et de stimulateur de croissance.",
    chiffres: [
      { valeur: "1 à 4", label: "flacons de 140 ml par hectare" },
      { valeur: "8 %", label: "d'acides aminés libres" },
      { valeur: "UE 2018/848", label: "conforme au règlement européen de la production biologique" },
      { valeur: "SOHISCERT", label: "certification bio" },
    ],
    sections: [
      {
        titre: "Qu'est-ce qu'ECOFERT ?",
        paragraphes: [
          "Un engrais liquide biologique, composé d'acides aminés libres (8 %) et d'azote (1,73 %), presque entièrement sous forme organique (1,66 %). Il contient notamment de la lysine, de l'arginine, de la thréonine, de la glycine, de l'isoleucine et de la leucine.",
          "Ces acides aminés sont directement utilisables par la plante. Ils l'accompagnent dans les moments où elle a le plus besoin d'énergie : la floraison et la formation des fruits.",
        ],
      },
      {
        titre: "Ce qui le distingue d'un engrais chimique",
        puces: [
          "Il n'est pas chélatant : il ne dissout pas les éléments du sol et ne l'épuise pas.",
          "Il ne se perd pas par lessivage vers les nappes.",
          "Il n'augmente ni la salinité ni les nitrates, dans la plante comme dans le sol.",
          "Sans hormone, sans stéroïde, sans stimulant chimique.",
          "Les quantités sont très faibles, donc le transport et l'épandage coûtent peu.",
        ],
      },
      {
        titre: "Les effets annoncés par la fiche produit",
        puces: [
          "Floraison plus abondante et moins de chute des fleurs et des fruits.",
          "Fruits plus gros, plus fermes, plus colorés, plus sucrés, qui se conservent mieux.",
          "Meilleure résistance à la sécheresse, au froid et aux maladies.",
          "Maturation plus uniforme et production plus régulière d'une année à l'autre.",
          "Plus de sucre dans la betterave et la canne à sucre.",
        ],
      },
      {
        titre: "Comment l'appliquer",
        paragraphes: [
          "ECOFERT s'applique au sol ou sur les feuilles, par pulvérisation, goutte-à-goutte ou aspersion. En général, 1 à 2 bouchons du flacon dans un bidon de 20 litres.",
        ],
        puces: [
          "Arbres fruitiers, agrumes, fruits tropicaux, légumes : deux applications, une au sol avant la floraison ou le semis, une sur les feuilles à mi-culture.",
          "Oliviers : 2 flacons pour 90 à 100 arbres, un en hiver et un en septembre-octobre.",
          "Pays tropicaux : 1 à 3 flacons tous les trois mois.",
        ],
      },
      {
        titre: "Une gamme par culture",
        puces: [
          "Maxi 1 : fertilisant universel pour toutes les cultures.",
          "Maxi 3 : vigne et raisin de table.",
          "Maxi 4 : grossissement et couleur des fruits et légumes (tomates, melons, agrumes, avocats…).",
          "Maxi 6 : céréales et tubercules (blé, orge, pommes de terre, manioc…).",
          "Maxi 9 : croissance de la canne à sucre, des arbres forestiers et des pépinières.",
          "Maxi 10 : fécondation, taux de sucre, moins de chute des fleurs.",
          "Maxi 15 : azote à action rapide.",
        ],
      },
      {
        titre: "Avec l'hydrorétenteur EVERGREEN",
        paragraphes: [
          "ECOFERT nourrit la plante ; EVERGREEN garde l'eau près des racines. Ensemble, ils ont été testés sur le terrain : sur la canne à sucre à Java, le tonnage a augmenté de 55 % ; sur les pommes de terre en Afrique du Sud, le rendement a augmenté de 31 % avec 52 % d'eau en moins.",
        ],
      },
    ],
    faq: [
      {
        q: "ECOFERT est-il utilisable en agriculture biologique ?",
        r: "Oui. Il est certifié par SOHISCERT et conforme au règlement européen (UE) 2018/848 sur la production biologique.",
      },
      {
        q: "Quelle quantité faut-il par hectare ?",
        r: "De 1 à 4 flacons de 140 ml par hectare, selon la culture. En pays tropical, 1 à 3 flacons tous les trois mois.",
      },
      {
        q: "Peut-il remplacer un engrais classique ?",
        r: "Il apporte l'azote, le phosphore et le potassium dont la plante a besoin. La fiche produit conseille de faire analyser le sol avant l'application et après la récolte pour le vérifier soi-même.",
      },
      {
        q: "Est-il dangereux à manipuler ?",
        r: "Non. Il est ininflammable et ne demande aucune précaution particulière pour le transport ou le stockage, y compris par avion. Un contact très prolongé avec la peau peut causer une légère irritation.",
      },
    ],
    essais: ["canne-a-sucre-indonesie", "pommes-de-terre-afrique-du-sud"],
    technologie: "fertilisation",
  },
];
