/**
 * The canonical origin of the site, in one place.
 *
 * Every canonical URL, hreflang alternate, sitemap entry and Open Graph URL is
 * built from this. It is a constant, not a Vercel variable: the address told
 * to search engines goes live with the pull request that changes it and cannot
 * be left behind in a dashboard setting.
 *
 * The site moved here from evergreen-ecosorb.com in October 2026; that domain
 * is redirected to this one in next.config.ts, which writes the address out.
 */
export const SITE_URL = "https://www.green-solutions-group.com";

/* Les quatorze langues du site, en un seul endroit.
 *
 * La liste était recopiée à la main dans chaque page qui déclare ses
 * traductions, et les copies avaient divergé : le croate ne figurait nulle
 * part, « x-default » manquait aux pages technologies, et les pages
 * Partenaires et Tests et rapports n'annonçaient que huit langues sur quatorze.
 * Un moteur de recherche ne relie entre elles que les versions qu'on lui
 * nomme : les autres passent pour des pages étrangères sans rapport. */
export const LANGUAGES = [
  "fr",
  "en",
  "es",
  "pt",
  "ar",
  "zh",
  "id",
  "de",
  "it",
  "el",
  "tr",
  "pl",
  "hr",
  "ca",
] as const;

/**
 * La carte des traductions d'une page, pour `alternates.languages`.
 *
 * `chemin` est ce qui suit la langue dans l'adresse : « / » pour l'accueil,
 * « /partenaires » pour la page Partenaires. La barre finale compte — elle
 * doit reproduire l'adresse canonique de la page, sans quoi la traduction
 * déclarée ne désigne pas la page servie.
 *
 * « x-default » désigne la page montrée à qui ne parle aucune des quatorze.
 */
export function languageAlternates(chemin: string): Record<string, string> {
  const carte: Record<string, string> = {};
  for (const langue of LANGUAGES) {
    carte[langue] = `${SITE_URL}/${langue}${chemin}`;
  }
  carte["x-default"] = `${SITE_URL}/fr${chemin}`;
  return carte;
}
