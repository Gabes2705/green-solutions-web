/* Les textes de la rubrique « Fermes idéales », dans les quatorze langues du site.
   Les noms propres (Christian Carnavalet, l’Institut, les produits, les titres des
   livres et les partenaires cités) restent tels quels dans toutes les langues. */

export type Carte = { titre: string; texte: string };

export type FermesCopy = {
  /** Locale Open Graph, par exemple fr_FR. */
  locale: string;
  /** Libellé dans la navigation principale. */
  nav: string;
  /** Objet du courriel de prise de rendez-vous. */
  rdvSujet: string;
  /** Mention des images générées par IA. */
  iaLegende: string;
  meta: { titre: string; description: string; fil: string };
  accueil: { eyebrow: string; titre: string; texte: string; bouton: string; alt: string };
  haut: { accueil: string; contact: string; aria: string };
  hero: { eyebrow: string; titre: string; lede: string; alt: string; sommaire: string[] };
  video: { eyebrow: string; aria: string; repli: string };
  partenaire: {
    legende: string;
    alt: string;
    eyebrow: string;
    titre: string;
    texte: string;
    bioTitre: string;
    bio1: string;
    bio2: string;
    livresTitre: string;
    livresTexte: string;
    /** Précède le titre de chaque couverture, dans le texte de remplacement. */
    couverture: string;
    /** Édition, éditeur, année et pages, dans l’ordre 2024, 2020, 2018, 2011. */
    livresDetails: string[];
  };
  ferme: {
    eyebrow: string;
    titre: string;
    p1: string;
    p2: string;
    legendeIntro: string;
    altIntro: string;
    altBanniere: string;
    legendeBanniere: string;
    cartes: Carte[];
    altFormation: string;
    coopTitre: string;
    coopTexte: string;
    projetsTitre: string;
    projetsTexte: string;
    partenairesLabel: string;
    altAerien: string;
    legendeAerien: string;
    note: string;
  };
  methode: { eyebrow: string; titre: string; texte: string; altBanniere: string; cartes: Carte[] };
  produits: {
    eyebrow: string;
    titre: string;
    texte: string;
    cartes: Carte[];
    obsTitre: string;
    obsTexte1: string;
    obsTexte2: string;
    altChamp: string;
    bouton: string;
  };
  concevoir: {
    eyebrow: string;
    titre: string;
    texte: string;
    etapes: Carte[];
    altSerres: string;
    legendeSerres: string;
    note: string;
  };
  galerie: { eyebrow: string; titre: string; legende: string; altCaisse: string; altCarottes: string };
  questions: { eyebrow: string; titre: string; altSalade: string; cartes: { q: string; r: string }[] };
  rendezVous: { eyebrow: string; titre: string; texte: string; rdv: string; presenter: string; note: string };
  pied: { phrase: string; mentions: string; confidentialite: string; accueil: string; aria: string };
};
