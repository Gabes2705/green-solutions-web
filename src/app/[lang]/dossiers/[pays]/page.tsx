import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DossierPage from "@/components/DossierPage";
import { DOSSIERS, DOSSIER_SLUGS } from "@/lib/dossiers";
import { SITE_URL } from "@/lib/site";

/**
 * Un dossier pays, en page web.
 *
 * Chaque dossier est rédigé dans la langue de son marché — le dossier ivoirien
 * en français, le sud-africain en anglais, l'égyptien en arabe. La page n'est
 * donc servie que sous cette langue : /fr/dossiers/cote-divoire existe,
 * /de/dossiers/cote-divoire non. Prétendre le contraire reviendrait à annoncer
 * à Google treize traductions dont douze n'existent pas.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return DOSSIER_SLUGS.map((pays) => ({ lang: DOSSIERS[pays].langue, pays }));
}

type Params = { params: Promise<{ lang: string; pays: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang, pays } = await params;
  const dossier = DOSSIERS[pays];
  if (!dossier || dossier.langue !== lang) return {};

  const url = `${SITE_URL}/${lang}/dossiers/${pays}`;
  const title = `${dossier.cover.title} — ${dossier.cover.eyebrow.toLowerCase()} | Green Solutions`;
  // Le sous-titre de couverture tient sur deux lignes séparées par un saut :
  // une description de recherche est une phrase, pas une mise en page.
  const description =
    dossier.cover.subtitle?.replace(/\s*\n\s*/g, " ") ??
    dossier.chiffres?.note ??
    "";

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title,
      description,
      url,
      siteName: "Green Solutions",
      locale: dossier.locale.replace("-", "_"),
      // Treize dossiers n'ont aucune photo dont l'origine soit établie. Leur
      // annoncer une image d'aperçu revenait à envoyer les réseaux sociaux
      // chercher un fichier qui répond 404.
      ...(dossier.photos > 0
        ? { images: [{ url: `${SITE_URL}/images/dossiers/${pays}/0.webp` }] }
        : {}),
    },
  };
}

export default async function Page({ params }: Params) {
  const { lang, pays } = await params;
  const dossier = DOSSIERS[pays];
  if (!dossier || dossier.langue !== lang) notFound();

  // Le fil d'Ariane situe la page dans le site : le moteur affiche alors
  // « Green Solutions › Dossier de marché › Côte d'Ivoire » sous le lien, au
  // lieu d'une adresse brute. Les libellés viennent du dossier lui-même, donc
  // ils sont déjà dans la bonne langue.
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Green Solutions",
        item: `${SITE_URL}/${lang}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: dossier.cover.eyebrow,
        item: `${SITE_URL}/${lang}/#etudes-pays`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: dossier.cover.title,
        item: `${SITE_URL}/${lang}/dossiers/${pays}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <DossierPage dossier={dossier} />
    </>
  );
}
