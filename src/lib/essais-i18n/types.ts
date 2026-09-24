/**
 * Les essais de terrain et les guides, dans les autres langues.
 *
 * Le français reste la source : lib/essais.ts et lib/guides.ts portent les
 * chiffres, les photos, les PDF et le texte d'origine. Chaque langue n'ajoute
 * ici que ses mots. Ce qu'une langue n'a pas encore traduit reste en français
 * plutôt que de disparaître.
 */

/** Les libellés de l'habillage : titres de sections, boutons, intertitres. */
export type Habillage = {
  retour: string;
  tousLesEssais: string;
  lireRapport: string;
  resultatsEyebrow: string;
  resultatsTitre: string;
  imagesEyebrow: string;
  imagesTitre: string;
  mecaniqueEyebrow: string;
  mecaniqueTitre: string;
  mecaniqueTexte: string;
  /* La vidéo de germination, sous la mécanique. */
  videoLegende: string;
  videoAlt: string;
  videoMot: string;
  videoAccelere: string;
  ficheEyebrow: string;
  ficheTitre: string;
  culture: string;
  lieu: string;
  periode: string;
  conduitPar: string;
  produits: string;
  methodeEyebrow: string;
  methodeTitre: string;
  observationsEyebrow: string;
  observationsTitre: string;
  autresEyebrow: string;
  autresTitre: string;
  /* La page qui liste les essais. */
  hubEyebrow: string;
  hubTitre: string;
  hubChapeau: string;
  hubPrincipe: string;
  hubTermines: string;
  hubEnCours: string;
  hubGuides: string;
  hubCreditPhoto: string;
  /* Les guides. */
  guideProduit: string;
  guidePreuvesEyebrow: string;
  guidePreuvesTitre: string;
  guideResultatsEyebrow: string;
  guideResultatsTitre: string;
  guideComparaisonEyebrow: string;
  guideFaqEyebrow: string;
  guideFaqTitre: string;
  guideOui: string;
  guideNon: string;
  guideCritere: string;
};

/** Un essai traduit. Les chiffres viennent toujours du français. */
export type EssaiTraduit = {
  titre: string;
  description: string;
  culture: string;
  lieu: string;
  pays: string;
  periode: string;
  conduit: string;
  produits: string;
  chapeau: string;
  /** Les libellés seuls : les valeurs (« −82 % ») ne se traduisent pas. */
  resultats: string[];
  protocole: string[];
  constats: string[];
  /** Titre de chaque graphique, puis libellé de chaque barre. */
  graphiques: { titre: string; barres: string[] }[];
};

export type EnCoursTraduit = { titre: string; texte: string };

export type Traduction = {
  habillage: Habillage;
  essais: Record<string, EssaiTraduit>;
  enCours: EnCoursTraduit[];
};
