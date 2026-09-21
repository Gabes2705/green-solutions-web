import type { Metadata } from "next";
import { content } from "@/lib/content";
import TechnologyPageClient from "@/components/TechnologyPageClient";
import { SITE_URL, languageAlternates } from "@/lib/site";

const TECH_IDS = [
  "retention-eau",
  "paulownia",
  "fertilisation",
  "protection",
  "eau-restructuree",
  "agroforesterie",
] as const;

const TECH_HERO: Record<string, string> = {
  "retention-eau": "/images/card-evergreen.jpg",
  paulownia: "/images/card-paulownia.jpg",
  fertilisation: "/images/stock/wheat-golden-hour.jpg",
  protection: "/images/card-napema.jpg",
  "eau-restructuree": "/images/card-water-vital.jpg",
  agroforesterie: "/images/card-agroforesterie.jpg",
};

/**
 * Le titre affiché par les moteurs de recherche.
 *
 * Il portait la marque en premier : « EVERGREEN® & ECOSORB® — Retenir l'eau ».
 * Or personne ne cherche une marque qu'il ne connaît pas encore ; on cherche
 * « retenir l'eau dans le sol ». L'accroche passe donc devant. Elle existe,
 * écrite à la main, dans les treize langues — « Wasser speichern », « Suyu
 * tutmak », « 保持水分 » — donc rien n'est traduit ni inventé ici : l'ordre
 * change, les mots non.
 *
 * Le nom de l'entreprise n'est ajouté que s'il reste de la place : au-delà
 * d'une soixantaine de caractères, Google coupe, et il vaut mieux perdre la
 * signature que le sujet de la page.
 */
function titreDeRecherche(kicker: string, marque: string): string {
  const base = `${kicker} — ${marque}`;
  return base.length <= 45 ? `${base} | Green Solutions` : base;
}

export function generateStaticParams() {
  return TECH_IDS.flatMap((id) =>
    ["fr", "en", "es", "pt", "ar", "zh", "id", "de", "it", "el", "tr", "pl", "hr", "ca"].map((lang) => ({ lang, id }))
  );
}

type Params = { params: Promise<{ lang: string; id: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { id, lang } = await params;
  const langKey = (["en", "es", "pt", "ar", "zh", "id", "de", "it", "el", "tr", "pl", "hr", "ca"].includes(lang) ? lang : "fr") as keyof typeof content;
  const item = content[langKey].products.items.find((p) => p.id === id);
  if (!item) return {};

  const url = `${SITE_URL}/${lang}/technologies/${id}`;
  const title = titreDeRecherche(item.kicker, item.title);
  const description = item.text;
  const image = TECH_HERO[id];

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: languageAlternates(`/technologies/${id}`),
    },
    openGraph: {
      type: "website",
      title,
      description,
      url,
      siteName: "Green Solutions",
      images: image
        ? [{ url: image, width: 1200, height: 630, alt: item.title }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}

export default async function Page({ params }: Params) {
  const { id, lang } = await params;
  const langKey = (["en", "es", "pt", "ar", "zh", "id", "de", "it", "el", "tr", "pl", "hr", "ca"].includes(lang) ? lang : "fr") as keyof typeof content;
  const item = content[langKey].products.items.find((p) => p.id === id);

  // Le fil d'Ariane dit au moteur où la page se situe dans le site, et lui
  // permet d'afficher « Green Solutions › Les technologies › … » sous le lien
  // plutôt qu'une adresse brute. Les libellés viennent des traductions
  // existantes : rien n'est écrit ici.
  const breadcrumb = item
    ? {
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
            name: content[langKey].products.eyebrow,
            item: `${SITE_URL}/${lang}/#technologies`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: item.title,
            item: `${SITE_URL}/${lang}/technologies/${id}`,
          },
        ],
      }
    : null;

  // Il y avait ici une fiche « Product ». Google exige qu'un produit porte au
  // moins un prix, un avis ou une note ; ces pages n'en ont aucun, parce que
  // la vente se fait à la tonne et sur devis. La fiche ne pouvait donc jamais
  // être valide, et Search Console la signalait sur les soixante-dix-huit
  // pages. Inventer un prix ou des avis pour la satisfaire aurait été pire que
  // l'erreur : elle est retirée.

  return (
    <>
      {breadcrumb && (
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
        />
      )}
      <TechnologyPageClient />
    </>
  );
}
