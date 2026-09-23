/**
 * Ce que l'hydrorétenteur rapporte à l'hectare, en quatre exemples.
 *
 * Le calcul est toujours le même, et il tient en cinq lignes : la dose par
 * pied ou par hectare, le prix du produit, le gain de récolte mesuré, le prix
 * payé au producteur, et la différence entre les deux. Tout est calculé ici à
 * partir des entrées, pour qu'aucun chiffre affiché ne puisse contredire un
 * autre.
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
  continent: string;
  pays: string;
  culture: string;
  /** Comment la dose est exprimée au champ. */
  dose: string;
  /** Kilos d'hydrorétenteur par hectare. */
  kgParHa: number;
  /** Détail du calcul de la dose, quand elle part d'un nombre de pieds. */
  doseDetail?: string;
  /** Rendement de référence sans produit, en tonnes par hectare. */
  rendementAvant: number;
  /** Hausse de récolte, en pourcentage. */
  hausse: number;
  /** D'où vient cette hausse. */
  origineHausse: string;
  /** Page de l'essai correspondant, s'il existe. */
  essai?: string;
  /** Prix payé au producteur, en euros le kilo. */
  prixVente: number;
  /** D'où vient ce prix. */
  originePrix: string;
  /** Ce que l'essai a mesuré en plus du rendement. */
  bonus?: string;
};

export const CAS: Cas[] = [
  {
    slug: "espagne-tomate",
    continent: "Europe",
    pays: "Espagne",
    culture: "Tomate d'industrie, plein champ",
    dose: "3 g par pied",
    doseDetail: "3 g × 25 000 pieds/ha",
    kgParHa: 75,
    rendementAvant: 90,
    hausse: 30,
    origineHausse: "Gain mesuré sur pastèque au Mexique, culture maraîchère comparable",
    essai: "pasteques-mexique",
    prixVente: 0.11,
    originePrix: "Prix de contrat tomate d'industrie — à confirmer",
    bonus: "60,5 % d'eau en moins sur l'essai mexicain",
  },
  {
    slug: "afrique-du-sud-pomme-de-terre",
    continent: "Afrique",
    pays: "Afrique du Sud",
    culture: "Pomme de terre",
    dose: "30 kg par hectare, dans le sillon",
    kgParHa: 30,
    rendementAvant: 12,
    hausse: 31.4,
    origineHausse: "Essai Afrinest Farm, récolte de janvier 2026",
    essai: "pommes-de-terre-afrique-du-sud",
    prixVente: 0.25,
    originePrix: "Prix moyen payé au producteur sud-africain — à confirmer",
    bonus: "52 % d'eau en moins",
  },
  {
    slug: "turquie-coton",
    continent: "Méditerranée",
    pays: "Turquie",
    culture: "Coton",
    dose: "55 kg par hectare, injectés sous les racines",
    kgParHa: 55,
    rendementAvant: 2.53,
    hausse: 93,
    origineHausse: "Essai de Hatay, saison 2025",
    essai: "coton-turquie-hatay",
    prixVente: 1.4,
    originePrix: "Prix payé au producteur turc — à confirmer",
    bonus: "Le rapport d'essai conclut à un bénéfice net de 1 181 $/ha",
  },
  {
    slug: "indonesie-canne",
    continent: "Asie",
    pays: "Indonésie",
    culture: "Canne à sucre",
    dose: "50 kg par hectare, enfouis près des racines",
    kgParHa: 50,
    rendementAvant: 80,
    hausse: 55.4,
    origineHausse: "Essai de Jember, Java, récolte de juillet 2024",
    essai: "canne-a-sucre-indonesie",
    prixVente: 0.04,
    originePrix: "Prix payé au planteur indonésien — à confirmer",
    bonus: "Teneur en sucre portée de 14 à 18",
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
