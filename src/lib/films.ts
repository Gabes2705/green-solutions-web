/**
 * Les vidéos des pages d'essais et des guides.
 *
 * La plupart viennent de Wikimedia Commons, sous licence CC BY-SA ou CC BY :
 * certaines ont été accélérées et recadrées pour le site, ce que la licence
 * permet à condition de citer l'auteur (et, pour CC BY-SA, de garder la même
 * licence). Le crédit est affiché sous chaque vidéo.
 *
 * Une seule est de nous : l'illustration en coupe des deux plants de tomate.
 * Elle n'a donc ni licence Commons ni page d'origine, et ces deux champs sont
 * laissés vides plutôt que remplis d'un crédit inventé.
 */
export type Film = {
  src: string;
  affiche: string;
  legende: string;
  auteur: string;
  /** Vides quand la vidéo est la nôtre : il n'y a alors rien à créditer. */
  licence?: string;
  page?: string;
  alt: string;
  /** Vrai quand le film a été accéléré pour le site. */
  accelere: boolean;
};

export const FILMS: Record<"racines" | "mais" | "abeilles" | "tomates", Film> = {
  racines: {
    src: "/videos/essais/germination-racines.mp4",
    affiche: "/videos/essais/germination-racines.jpg",
    legende: "Des graines germent : les racines descendent chercher l'eau dans le sol.",
    auteur: "Wjh31",
    licence: "CC BY-SA 3.0",
    page: "https://commons.wikimedia.org/wiki/File:Mung_bean_germination.ogv",
    alt: "Vidéo accélérée de graines de haricot mungo qui germent, racines visibles dans la terre",
    accelere: true,
  },
  mais: {
    src: "/videos/essais/mais-croissance.mp4",
    affiche: "/videos/essais/mais-croissance.jpg",
    legende: "Du maïs qui grandit, jour après jour, en vidéo accélérée.",
    auteur: "Szabolcs Turuczki",
    licence: "CC BY-SA 4.0",
    page: "https://commons.wikimedia.org/wiki/File:Growing_of_corn.webm",
    alt: "Vidéo accélérée de jeunes plants de maïs dont les feuilles se déploient",
    accelere: true,
  },
  abeilles: {
    src: "/videos/essais/abeilles-figuier-barbarie.mp4",
    affiche: "/videos/essais/abeilles-figuier-barbarie.jpg",
    legende: "Des abeilles butinent une fleur de figuier de Barbarie : les pollinisateurs doivent rester au travail.",
    auteur: "Bob Peterson",
    licence: "CC BY 2.0",
    page: "https://commons.wikimedia.org/wiki/File:Busy_Green_Bees_(Agapostemon_splendens).webm",
    alt: "Vidéo de petites abeilles vertes qui butinent une fleur jaune de figuier de Barbarie",
    accelere: false,
  },
  tomates: {
    src: "/videos/comparatif-tomates-restored.mp4",
    affiche: "/images/comparatif-tomates-poster.jpg",
    legende:
      "Vue en coupe : à gauche un plant de tomate sans hydrorétenteur, à droite le même plant avec les billes de gel qui retiennent l'eau autour des racines.",
    auteur: "Green Solutions",
    alt: "Animation en coupe : deux plants de tomate côte à côte, racines visibles dans la terre, avec des billes de gel autour de celles de droite",
    accelere: false,
  },
};
