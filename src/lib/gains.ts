/**
 * Ce que l'hydrorétenteur rapporte à l'hectare, en quatre exemples.
 *
 * Le calcul est toujours le même, et il tient en cinq lignes : la dose par
 * pied ou par hectare, le prix du produit, le gain de récolte mesuré, le prix
 * payé au producteur, et la différence entre les deux. Tout est calculé ici à
 * partir des entrées, pour qu'aucun chiffre affiché ne puisse contredire un
 * autre.
 *
 * Ce fichier ne contient que des nombres. Les mots — pays, culture, dose,
 * provenance des chiffres — sont dans gains-i18n.ts, une fois par langue : un
 * prix traduit quatorze fois finirait par diverger.
 *
 * Deux natures de chiffres cohabitent, et la page le dit :
 *  — ce qui vient d'un essai de terrain (le gain de récolte, la dose),
 *  — ce qui vient d'une moyenne de marché (le rendement de référence et le
 *    prix payé au producteur), forcément variable d'une région et d'une année
 *    à l'autre. Ces derniers portent la mention « à confirmer » tant que
 *    Gabriel ne les a pas validés.
 *
 * Le prix du produit — 12 € le kilo rendu cultivateur — est celui qu'il a
 * donné le 24 septembre 2026, après un premier chiffre de 17 €.
 */

export const PRIX_PRODUIT = 12; // € le kilo, rendu cultivateur

export type Cas = {
  slug: string;
  /** Kilos d'hydrorétenteur par hectare. */
  kgParHa: number;
  /** Rendement de référence sans produit, en tonnes par hectare. */
  rendementAvant: number;
  /** Hausse de récolte, en pourcentage. */
  hausse: number;
  /** Page de l'essai correspondant, s'il existe. */
  essai?: string;
  /** Page de détail propre à ce cas, quand l'essai ne porte pas sur la culture. */
  page?: string;
  /** Prix payé au producteur, en euros le kilo. */
  prixVente: number;
};

export const CAS: Cas[] = [
  {
    slug: "espagne-tomate",
    kgParHa: 75,
    rendementAvant: 90,
    hausse: 30,
    // La tomate n'a pas d'essai à elle : le bouton menait à la pastèque, et on
    // cliquait sur tomate pour tomber sur pastèque. Il mène désormais à une
    // page qui refait le calcul et dit d'où vient chaque chiffre.
    page: "tomate-espagne",
    essai: "pasteques-mexique",
    prixVente: 0.11,
  },
  {
    slug: "afrique-du-sud-pomme-de-terre",
    kgParHa: 30,
    rendementAvant: 12,
    hausse: 31.4,
    essai: "pommes-de-terre-afrique-du-sud",
    prixVente: 0.25,
  },
  {
    slug: "turquie-coton",
    kgParHa: 55,
    rendementAvant: 2.53,
    hausse: 93,
    essai: "coton-turquie-hatay",
    prixVente: 1.4,
  },
  {
    slug: "indonesie-canne",
    kgParHa: 50,
    rendementAvant: 80,
    hausse: 55.4,
    essai: "canne-a-sucre-indonesie",
    prixVente: 0.04,
  },
];

export type Calcul = {
  coutHa: number;
  gainTonnes: number;
  rendementApres: number;
  recetteEnPlus: number;
  gainNet: number;
  /** Combien d'euros gagnés pour un euro dépensé. */
  retour: number;
};

/** Le même calcul pour les quatre cas, fait une seule fois, ici. */
export function calculer(cas: Cas): Calcul {
  const coutHa = cas.kgParHa * PRIX_PRODUIT;
  const gainTonnes = (cas.rendementAvant * cas.hausse) / 100;
  const recetteEnPlus = gainTonnes * 1000 * cas.prixVente;
  return {
    coutHa,
    gainTonnes,
    rendementApres: cas.rendementAvant + gainTonnes,
    recetteEnPlus,
    gainNet: recetteEnPlus - coutHa,
    retour: recetteEnPlus / coutHa,
  };
}
