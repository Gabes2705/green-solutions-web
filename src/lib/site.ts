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
