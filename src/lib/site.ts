/**
 * The canonical origin of the site, in one place.
 *
 * Every canonical URL, hreflang alternate, sitemap entry and Open Graph URL is
 * built from this, so moving the site to its own domain is a single change to
 * NEXT_PUBLIC_SITE_URL in the Vercel project settings.
 *
 * The fallback chain matters more than it looks. Falling straight back to
 * localhost meant that if the variable were ever missing in production, every
 * page would tell search engines its real address was http://localhost:3000.
 * Vercel always exposes the deployment's production host, so that is used
 * before giving up and assuming local development.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");

  const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercelHost) return `https://${vercelHost}`;

  return "http://localhost:3000";
}

export const SITE_URL = resolveSiteUrl();

/* Les treize langues du site, en un seul endroit.
 *
 * La liste était recopiée à la main dans chaque page qui déclare ses
 * traductions, et les copies avaient divergé : le croate ne figurait nulle
 * part, « x-default » manquait aux pages technologies, et les pages
 * Partenaires et Tests et rapports n'annonçaient que huit langues sur treize.
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
] as const;

/**
 * La carte des traductions d'une page, pour `alternates.languages`.
 *
 * `chemin` est ce qui suit la langue dans l'adresse : « / » pour l'accueil,
 * « /partenaires » pour la page Partenaires. La barre finale compte — elle
 * doit reproduire l'adresse canonique de la page, sans quoi la traduction
 * déclarée ne désigne pas la page servie.
 *
 * « x-default » désigne la page montrée à qui ne parle aucune des treize.
 */
export function languageAlternates(chemin: string): Record<string, string> {
  const carte: Record<string, string> = {};
  for (const langue of LANGUAGES) {
    carte[langue] = `${SITE_URL}/${langue}${chemin}`;
  }
  carte["x-default"] = `${SITE_URL}/fr${chemin}`;
  return carte;
}
