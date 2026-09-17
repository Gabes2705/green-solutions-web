/**
 * Les pays qui ont une page de dossier, et la langue de cette page.
 *
 * CE FICHIER EST GÉNÉRÉ — ne pas l'éditer à la main.
 *
 *   node scripts/dossiers/vers_web.mjs
 *
 * Volontairement séparé de dossiers.ts, qui porte le texte des dix-neuf
 * dossiers : la page d'accueil a seulement besoin de savoir vers quoi pointer.
 */

export const DOSSIER_LANGS: Record<string, string> = {
  "afrique-du-sud": "en",
  "algerie": "fr",
  "arabie-saoudite": "ar",
  "argentine": "es",
  "cameroun": "fr",
  "chili": "es",
  "cote-divoire": "fr",
  "croatie": "hr",
  "egypte": "ar",
  "espagne": "es",
  "gabon": "fr",
  "grece": "el",
  "haiti": "fr",
  "jordanie": "ar",
  "maroc": "fr",
  "oman": "en",
  "senegal": "fr",
  "soudan-sud": "en",
  "usa": "en"
};

/** L'adresse de la page d'un pays, ou null s'il n'a qu'un PDF. */
export function dossierHref(slug: string): string | null {
  const langue = DOSSIER_LANGS[slug];
  return langue ? `/${langue}/dossiers/${slug}` : null;
}
