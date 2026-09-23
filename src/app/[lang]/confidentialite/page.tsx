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
  const canonical = `${SITE_URL}/${key}/confidentialite`;
  return {
    title: `${t.privacyTitle} | Green Solutions`,
    description: t.privacyDescription,
    alternates: {
      canonical,
      languages: languageAlternates("/confidentialite"),
    },
  };
}

export default async function Confidentialite({ params }: Params) {
  const { lang } = await params;
  const key = resolveLang(lang);
  const t = LEGAL_TEXT[key];

  return (
    <main className="legal">
      <a href={`/${key}/`} className="legal-back btn-3d btn-3d-light">
        ← {t.back}
      </a>

      <h1>{t.privacyTitle}</h1>
      <p className="legal-updated">{t.privacyUpdated}</p>
      <p className="legal-lede">{t.privacyIntro}</p>

      <h2>{t.controller}</h2>
      <p>
        {t.publisherBody}
        <br />
        {t.companyId} : <mark>{t.toComplete}</mark>.
        <br />
        Contact : <a href="mailto:contact@evergreen-ecosorb.com">contact@evergreen-ecosorb.com</a>
      </p>

      <h2>{t.collected}</h2>
      <p>{t.collectedBody}</p>

      <h2>{t.purpose}</h2>
      <p>{t.purposeBody}</p>

      <h2>{t.access}</h2>
      <p>{t.accessBody}</p>

      <h2>{t.retention}</h2>
      <p>{t.retentionBody}</p>

      <h2>{t.cookies}</h2>
      <p>{t.cookiesBody}</p>

      <h2>{t.rights}</h2>
      <p>{t.rightsBody}</p>
    </main>
  );
}
