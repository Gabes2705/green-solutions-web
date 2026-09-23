import { ESSAIS, ESSAIS_EN_COURS, GRAPHIQUES, type Essai, type Graphique } from "@/lib/essais";
import type { Habillage, Traduction } from "./types";
import { en } from "./en";
import { es } from "./es";
import { de } from "./de";
import { it } from "./it";
import { pt } from "./pt";
import { ca } from "./ca";
import { pl } from "./pl";
import { hr } from "./hr";
import { el } from "./el";
import { tr } from "./tr";
import { id } from "./id";
import { ar } from "./ar";
import { zh } from "./zh";

/**
 * Les essais dans la langue de la page.
 *
 * Le français est la source ; chaque langue ajoute ses mots dans son fichier.
 * Ce qui n'est pas encore traduit retombe sur le français : un texte français
 * dans une page allemande se lit, une page vide ne se lit pas.
 */

export const HABILLAGE_FR: Habillage = {
  retour: "← Tous les essais",
  tousLesEssais: "Voir tous les essais →",
  lireRapport: "Lire le rapport complet (PDF)",
  resultatsEyebrow: "Résultats",
  resultatsTitre: "Ce que l'essai a mesuré",
  imagesEyebrow: "En images",
  imagesTitre: "Avant, après : la différence mesurée",
  mecaniqueEyebrow: "Comment ça marche",
  mecaniqueTitre: "L'eau reste là où la plante en a besoin",
  mecaniqueTexte:
    "Mélangé au sol près des racines, l'hydrorétenteur se gorge d'eau à chaque arrosage ou à chaque pluie, au lieu de la laisser s'évaporer ou filer en profondeur. Il la rend ensuite à la plante, jour après jour. On arrose moins souvent, et la plante ne subit pas de coup de soif entre deux arrosages.",
  ficheEyebrow: "Fiche de l'essai",
  ficheTitre: "Où, quand, par qui",
  culture: "Culture",
  lieu: "Lieu",
  periode: "Période",
  conduitPar: "Conduit par",
  produits: "Produits",
  methodeEyebrow: "Méthode",
  methodeTitre: "Comment l'essai a été mené",
  observationsEyebrow: "Observations",
  observationsTitre: "Ce qu'il faut retenir",
  autresEyebrow: "Autres essais",
  autresTitre: "Les mêmes produits, sur d'autres cultures",
  hubEyebrow: "Essais de terrain",
  hubTitre: "Moins d'eau, plus de récolte : les résultats mesurés",
  hubChapeau:
    "Universités, centres de recherche et exploitations ont testé l'hydrorétenteur EVERGREEN, seul ou avec le fertilisant ECOFERT, sur sept cultures et dans six pays. Chaque page reprend les chiffres du rapport et renvoie au document complet.",
  hubPrincipe:
    "Le principe est le même partout : l'hydrorétenteur garde l'eau près des racines et la rend à la plante peu à peu. Selon la culture et le climat, les essais mesurent jusqu'à 82 % d'eau en moins et jusqu'à 93 % de récolte en plus.",
  hubTermines: "Les essais terminés",
  hubEnCours: "Les essais en cours avec des universités",
  hubGuides: "Nos guides",
  hubCreditPhoto: "Photo du bandeau :",
  guideProduit: "Voir la fiche produit",
  guidePreuvesEyebrow: "Preuves de terrain",
  guidePreuvesTitre: "Les essais qui l'ont mesuré",
  guideResultatsEyebrow: "Résultats de terrain",
  guideResultatsTitre: "Ce que les essais ont mesuré",
  guideComparaisonEyebrow: "Comparaison",
  guideFaqEyebrow: "Questions fréquentes",
  guideFaqTitre: "Ce qu'on nous demande souvent",
  guideOui: "Oui",
  guideNon: "Non",
  guideCritere: "Critère",
};

/** Les langues déjà traduites. Les autres lisent le français. */
export const TRADUCTIONS: Record<string, Traduction> = { en, es, pt, ar, zh, id, de, it, el, tr, pl, hr, ca };

export function habillage(langue: string): Habillage {
  return TRADUCTIONS[langue] ? { ...HABILLAGE_FR, ...TRADUCTIONS[langue].habillage } : HABILLAGE_FR;
}

/** Un essai dans la langue demandée, les chiffres restant ceux du français. */
export function essaiTraduit(langue: string, essai: Essai): Essai {
  const trad = TRADUCTIONS[langue]?.essais[essai.slug];
  if (!trad) return essai;
  return {
    ...essai,
    titre: trad.titre,
    description: trad.description,
    culture: trad.culture,
    lieu: trad.lieu,
    pays: trad.pays,
    periode: trad.periode,
    conduit: trad.conduit,
    produits: trad.produits,
    chapeau: trad.chapeau,
    resultats: essai.resultats.map((r, i) => ({ valeur: r.valeur, label: trad.resultats[i] ?? r.label })),
    protocole: trad.protocole.length ? trad.protocole : essai.protocole,
    constats: trad.constats.length ? trad.constats : essai.constats,
  };
}

/** Les essais de la page d'accueil des essais, dans l'ordre, traduits. */
export function essaisTraduits(langue: string): Essai[] {
  return ESSAIS.map((e) => essaiTraduit(langue, e));
}

/** Les graphiques d'un essai : mêmes valeurs, libellés traduits. */
export function graphiquesTraduits(langue: string, slug: string): Graphique[] {
  const base = GRAPHIQUES[slug] ?? [];
  const trad = TRADUCTIONS[langue]?.essais[slug]?.graphiques;
  if (!trad) return base;
  return base.map((g, i) => ({
    titre: trad[i]?.titre ?? g.titre,
    barres: g.barres.map((b, j) => ({ ...b, label: trad[i]?.barres[j] ?? b.label })),
  }));
}

/** Les essais universitaires en cours, traduits ; le PDF reste le même. */
export function enCoursTraduits(langue: string) {
  const trad = TRADUCTIONS[langue]?.enCours;
  return ESSAIS_EN_COURS.map((e, i) => ({
    pdf: e.pdf,
    titre: trad?.[i]?.titre ?? e.titre,
    texte: trad?.[i]?.texte ?? e.texte,
  }));
}

/** Les langues où les pages d'essais existent : le français et les langues traduites. */
export const LANGUES_ESSAIS = ["fr", ...Object.keys(TRADUCTIONS)];
