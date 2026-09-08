import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LANGUAGES = ["fr", "en", "es", "pt", "ar", "zh", "id", "de"];
const DEFAULT_LANGUAGE = "en";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if pathname already has a language prefix
  const pathnameHasLanguage = LANGUAGES.some(
    (lang) => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`
  );

  if (pathnameHasLanguage) {
    return NextResponse.next();
  }

  // Redirect root to default language
  if (pathname === "/") {
    return NextResponse.redirect(new URL(`/${DEFAULT_LANGUAGE}/`, request.url));
  }

  // Redirect other paths to language-prefixed version
  return NextResponse.redirect(
    new URL(`/${DEFAULT_LANGUAGE}${pathname}`, request.url)
  );
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
