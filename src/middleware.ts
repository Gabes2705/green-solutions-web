import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LANGUAGES = ["fr", "en", "es", "pt", "ar", "zh", "id", "de"] as const;
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

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

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
