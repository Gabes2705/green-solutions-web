import type { Metadata } from "next";
import { LANGUAGES, SITE_URL, languageAlternates } from "@/lib/site";
import { LEGAL_TEXT } from "@/lib/legal-content";
import type { Lang } from "@/lib/content";

export function generateStaticParams() {
  return LANGUAGES.map((lang) => ({ lang }));
}

type Params = { params: Promise<{ lang: string }> };

function resolveLang(lang: string): Lang {
  return (LANGUAGES as readonly string[]).includes(lang) ? (lang as Lang) : "fr";
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang } = await params;
  const key = resolveLang(lang);
  const t = LEGAL_TEXT[key];
  const canonical = `${SITE_URL}/${key}/mentions-legales`;
  return {
    title: `${t.legalTitle} | Green Solutions`,
    description: t.legalDescription,
    alternates: {
      canonical,
      languages: languageAlternates("/mentions-legales"),
    },
  };
}

export default async function MentionsLegales({ params }: Params) {
  const { lang } = await params;
  const key = resolveLang(lang);
  const t = LEGAL_TEXT[key];

  return (
    <main className="legal">
      <a href={`/${key}/`} className="legal-back btn-3d btn-3d-light">
        ← {t.back}
      </a>

      <h1>{t.legalTitle}</h1>
      <p className="legal-updated">{t.legalUpdated}</p>

      <h2>{t.publisher}</h2>
      <p>
        {t.publisherBody}
        <br />
        {t.companyId} : <mark>{t.toComplete}</mark>
        <br />
        {t.phone} : +33 6 44 83 55 09
        <br />
        {t.email} : <a href="mailto:contact@evergreen-ecosorb.com">contact@evergreen-ecosorb.com</a>
      </p>

      <h2>{t.director}</h2>
      <p>{t.directorBody}</p>

      <h2>{t.host}</h2>
      <p>
        <strong>Vercel Inc.</strong>
        <br />
        440 N Barranca Avenue #4133
        <br />
        Covina, CA 91723, United States
        <br />
        <a href="https://vercel.com" target="_blank" rel="noreferrer">vercel.com</a>
      </p>

      <h2>{t.intellectual}</h2>
      <p>{t.intellectualBody}</p>

      <h2>{t.credits}</h2>
      <p>{t.creditsBody}</p>

      <h2>{t.personalData}</h2>
      <p>{t.personalDataBody}</p>
      <p>
        <a href={`/${key}/confidentialite`}>{t.privacyTitle} →</a>
      </p>
    </main>
  );
}
