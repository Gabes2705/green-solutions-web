import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LANGUAGES = ["fr", "en", "es", "pt", "ar", "zh", "id", "de", "it", "el", "tr", "pl", "hr", "ca"] as const;
const DEFAULT_LANGUAGE = "fr";

// Maps the base part of a locale tag to one of our languages, so that
// "pt-BR" resolves to "pt" and "zh-Hans-CN" to "zh".
function matchLanguage(tag: string): string | null {
  const base = tag.toLowerCase().split("-")[0];
  return (LANGUAGES as readonly string[]).includes(base) ? base : null;
}

// Picks the best supported language from an Accept-Language header,
// honouring the q-values the browser sends.
function detectLanguage(header: string | null): string {
  if (!header) return DEFAULT_LANGUAGE;

  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params.find((p) => p.trim().startsWith("q="));
      const quality = q ? parseFloat(q.split("=")[1]) : 1;
      return { tag: tag.trim(), quality: Number.isNaN(quality) ? 0 : quality };
    })
    .filter((entry) => entry.tag && entry.quality > 0)
    .sort((a, b) => b.quality - a.quality);

  for (const { tag } of ranked) {
    const match = matchLanguage(tag);
    if (match) return match;
  }
  return DEFAULT_LANGUAGE;
}

/* Les six pages de l'ancien site WordPress, servi sur evergreen-ecosorb.com
   jusqu'au jour où ce domaine pointera ici. Google les a indexées : sans cette
   table, la détection de langue ci-dessous les enverrait sur /fr/nos-solutions
   et consorts, qui n'existent pas — chaque résultat de recherche mènerait à une
   page introuvable, et le crédit accumulé par l'ancienne adresse serait perdu.

   L'accueil n'y figure pas : il mène déjà au nouvel accueil. */
const ANCIENNES_PAGES: Record<string, string> = {
  "/nos-solutions": "/fr/technologies/retention-eau",
  "/nos-partenaires": "/fr/partenaires",
  "/contactez-nous": "/fr/#contact",
  "/a-propos-de-nous": "/fr/#entreprise",
  "/politique-de-confidentialite": "/fr/confidentialite",
};

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Avant toute chose : une adresse de l'ancien site ne doit pas tomber entre
  // les mains de la détection de langue.
  //
  // 308 et non 307 : permanent, ce qui demande au moteur de recherche de
  // transférer à la nouvelle page le crédit de l'ancienne. Un permanent se met
  // en cache, donc sa destination ne peut pas dépendre du navigateur : ces
  // pages-là partent toutes vers le français, la langue dans laquelle elles
  // étaient écrites et indexées. Le visiteur changera de langue s'il le veut.
  const sansBarreFinale = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  const ancienne = ANCIENNES_PAGES[sansBarreFinale];
  if (ancienne) {
    return NextResponse.redirect(new URL(ancienne, request.url), 308);
  }

  const pathnameHasLanguage = LANGUAGES.some(
    (lang) => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`
  );

  if (pathnameHasLanguage) {
    return NextResponse.next();
  }

  const language = detectLanguage(request.headers.get("accept-language"));

  // Clone rather than build a fresh URL, so query strings survive the
  // redirect - /etudes?file=... would otherwise lose the document to show.
  const target = request.nextUrl.clone();
  target.pathname = pathname === "/" ? `/${language}/` : `/${language}${pathname}`;

  const response = NextResponse.redirect(target);
  // The redirect target depends on the request headers, so it must not be
  // cached and replayed to visitors with a different language preference.
  response.headers.set("Vary", "Accept-Language");
  return response;
}

export const config = {
  // "api" has to be excluded alongside _next and static files. Without it the
  // contact form's POST to /api/contact was redirected to /fr/api/contact,
  // where no route exists, so every enquiry sent from the site ended in a 404.
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
