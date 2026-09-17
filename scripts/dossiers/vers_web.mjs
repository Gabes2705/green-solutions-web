/**
 * Transforme les dossiers pays en données lisibles par le site.
 *
 *   node scripts/dossiers/vers_web.mjs
 *
 * Les dossiers vivent depuis toujours sous forme de spécifications destinées à
 * fabriquer un PowerPoint puis un PDF. Un PDF de deux mégaoctets est illisible
 * pour un moteur de recherche : l'agronome qui cherche « rétention d'eau cacao
 * Côte d'Ivoire » ne trouvera jamais la page. Le même contenu, servi en HTML,
 * est indexable.
 *
 * Ce script ne réécrit rien. Il recopie le texte déjà validé des dossiers vers
 * src/lib/dossiers.ts, en laissant de côté ce qui n'a de sens que dans un
 * PowerPoint : indices de photo pour la mise en page, options de graphique,
 * polices. Les graphiques sont réduits à leurs étiquettes et à leurs valeurs —
 * le site les redessine en HTML, sans bibliothèque.
 *
 * Une conséquence à connaître : chaque dossier est rédigé dans UNE langue,
 * celle de son marché (fr-CI, en-ZA, ar-EG, el-GR, hr-HR…). La page reprend
 * cette langue et le déclare à Google, plutôt que de faire croire à une
 * traduction qui n'existe pas.
 */
import { readdirSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ici = dirname(fileURLToPath(import.meta.url));
const RACINE = join(ici, "../..");

/* Ce que le site peut réellement montrer.
 *
 * Une page n'affiche que les photos installées dans public/, et il n'y en a que
 * pour les pays dont l'origine des images est connue. Compter ici évite qu'une
 * page réclame au navigateur une image qui n'existe pas. */
function photosInstallees(slug) {
  const dir = join(RACINE, "public/images/dossiers", slug);
  if (!existsSync(dir)) return { nombre: 0, credits: null };
  const nombre = readdirSync(dir).filter((f) => f.endsWith(".webp")).length;
  const fichierCredits = join(dir, "_credits.json");
  const credits = existsSync(fichierCredits)
    ? JSON.parse(readFileSync(fichierCredits, "utf8")).map((c) => ({
        titre: c.titre ?? null,
        auteur: c.auteur ?? null,
        licence: c.licence ?? null,
      }))
    : null;
  return { nombre, credits };
}

/**
 * Les dossiers dont le document téléchargeable a été retiré du site.
 *
 * L'Arabie saoudite est dans ce cas. Ses photos venaient d'internet, et la
 * recherche d'images libres n'a rien donné d'utilisable pour ce pays : un
 * graphique sur le cacao en Indonésie et des régimes de palmier à huile
 * ouest-africains, aucun dattier saoudien établi. Le document ne peut donc pas
 * être refabriqué sans ces photos, et il n'est plus distribué.
 *
 * La liste est explicite plutôt que déduite du disque : les fichiers restent
 * présents en local, ce sont leurs versions suivies par git qui disparaissent
 * du site.
 */
const RETIRES = new Set(["arabie-saoudite"]);

/** Un graphique de dossier, réduit à ce qu'une page web sait redessiner. */
function graphique(bloc) {
  if (!bloc) return null;
  return {
    kicker: bloc.kicker,
    title: bloc.title,
    type: bloc.type,
    series: (bloc.data ?? []).map((serie) => ({
      name: serie.name,
      labels: serie.labels,
      values: serie.values,
    })),
    reading: bloc.reading ?? null,
  };
}

function colonnes(bloc) {
  if (!bloc) return null;
  return {
    kicker: bloc.kicker,
    title: bloc.title,
    left: bloc.left ?? null,
    right: bloc.right ?? null,
    note: bloc.note ?? null,
  };
}

function etapes(bloc) {
  if (!bloc) return null;
  return {
    kicker: bloc.kicker,
    title: bloc.title,
    items: (bloc.items ?? []).map(({ head, body }) => ({ head, body })),
    note: bloc.note ?? null,
  };
}

function chiffres(bloc) {
  if (!bloc) return null;
  return {
    kicker: bloc.kicker,
    title: bloc.title,
    items: (bloc.items ?? []).map(({ value, label }) => ({ value, label })),
    note: bloc.note ?? null,
  };
}

function texteAPuces(bloc) {
  if (!bloc) return null;
  return {
    kicker: bloc.kicker,
    title: bloc.title,
    caption: bloc.caption ?? null,
    bullets: bloc.bullets ?? [],
    photo: bloc.photo ?? null,
  };
}

function cartes(bloc) {
  if (!bloc) return null;
  return {
    kicker: bloc.kicker,
    title: bloc.title,
    items: (bloc.items ?? []).map(({ head, metric, lines, photo }) => ({
      head,
      metric: metric ?? null,
      lines: lines ?? [],
      photo: photo ?? null,
    })),
  };
}

const slugs = readdirSync(join(ici, "pays"))
  .filter((f) => f.endsWith(".mjs"))
  .map((f) => f.replace(/\.mjs$/, ""))
  .sort();

const dossiers = {};
for (const slug of slugs) {
  const spec = (await import(`./pays/${slug}.mjs`)).default;
  const complementPath = join(ici, "complements", `${slug}.mjs`);
  const plus = existsSync(complementPath)
    ? (await import(`./complements/${slug}.mjs`)).default
    : {};

  const { nombre, credits } = photosInstallees(slug);

  dossiers[slug] = {
    slug,
    locale: spec.locale,
    langue: spec.locale.slice(0, 2),
    pdf: RETIRES.has(slug) ? null : `/documents/countries/${spec.fichier}.pdf`,
    photos: nombre,
    credits,
    cover: {
      eyebrow: spec.cover.eyebrow,
      title: spec.cover.title,
      officiel: spec.cover.officiel ?? null,
      lieu: spec.cover.lieu ?? null,
      subtitle: spec.cover.subtitle ?? null,
    },
    chiffres: chiffres(spec.chiffres),
    contrainte: texteAPuces(spec.contrainte),
    usages: graphique(spec.usages),
    economie: chiffres(plus.economie),
    productions: graphique(spec.productions),
    filieres: (plus.filieres ?? []).map(texteAPuces),
    solutions: colonnes(spec.solutions),
    economies: graphique(spec.economies),
    regions: cartes(spec.regions),
    deploiement: etapes(spec.deploiement),
    risques: colonnes(spec.risques),
    sources: plus.sources ?? null,
    closing: {
      title: spec.closing.title,
      body: spec.closing.body,
      contact: spec.closing.contact ?? null,
    },
  };
}

const entete = `/**
 * Les dossiers pays, en données.
 *
 * CE FICHIER EST GÉNÉRÉ — ne pas l'éditer à la main.
 *
 *   node scripts/dossiers/vers_web.mjs
 *
 * La source reste scripts/dossiers/pays/<slug>.mjs, qui sert aussi à fabriquer
 * le PDF : le texte de la page et celui du dossier téléchargeable ne peuvent
 * donc pas diverger. Chaque dossier est rédigé dans la langue de son marché,
 * portée ici par « locale » : la page se déclare dans cette langue plutôt que
 * de laisser croire à une traduction qui n'existe pas.
 */

export type Lecture = { head: string; body: string };
export type Serie = { name: string; labels: string[]; values: number[] };

export type Graphique = {
  kicker: string;
  title: string;
  type: string;
  series: Serie[];
  reading: Lecture | null;
};

export type Chiffres = {
  kicker: string;
  title: string;
  items: { value: string; label: string }[];
  note: string | null;
};

export type Puces = {
  kicker: string;
  title: string;
  caption: string | null;
  bullets: string[];
  photo: number | null;
};

export type Colonne = { head: string; lines: string[] };

export type Colonnes = {
  kicker: string;
  title: string;
  left: Colonne | null;
  right: Colonne | null;
  note: string | null;
};

export type Etapes = {
  kicker: string;
  title: string;
  items: { head: string; body: string }[];
  note: string | null;
};

export type Cartes = {
  kicker: string;
  title: string;
  items: { head: string; metric: string | null; lines: string[]; photo: number | null }[];
};

export type Dossier = {
  slug: string;
  locale: string;
  langue: string;
  /** Null quand le PDF a été retiré du site. */
  pdf: string | null;
  /** Nombre de photos installées. Zéro quand leur origine n'est pas établie. */
  photos: number;
  credits: { titre: string | null; auteur: string | null; licence: string | null }[] | null;
  cover: {
    eyebrow: string;
    title: string;
    officiel: string | null;
    lieu: string | null;
    subtitle: string | null;
  };
  chiffres: Chiffres | null;
  contrainte: Puces | null;
  usages: Graphique | null;
  economie: Chiffres | null;
  productions: Graphique | null;
  filieres: Puces[];
  solutions: Colonnes | null;
  economies: Graphique | null;
  regions: Cartes | null;
  deploiement: Etapes | null;
  risques: Colonnes | null;
  sources: string[] | null;
  closing: { title: string; body: string; contact: string | null };
};

export const DOSSIERS: Record<string, Dossier> = `;

const sortie = `${entete}${JSON.stringify(dossiers, null, 2)};

/** Les pays qui ont un dossier rédigé, dans l'ordre alphabétique de leur clé. */
export const DOSSIER_SLUGS = Object.keys(DOSSIERS);
`;

mkdirSync(join(RACINE, "src/lib"), { recursive: true });
writeFileSync(join(RACINE, "src/lib/dossiers.ts"), sortie, "utf8");

/* Un index léger, pour la grille de la page d'accueil et le plan du site.
 *
 * dossiers.ts pèse plus de deux cents kilo-octets : le charger dans le
 * navigateur pour savoir quels pays ont une page reviendrait à envoyer les
 * dix-neuf dossiers entiers à chaque visiteur. Cet index-ci ne porte que le
 * slug et la langue. */
const index = Object.fromEntries(slugs.map((s) => [s, dossiers[s].langue]));
const sortieIndex = `/**
 * Les pays qui ont une page de dossier, et la langue de cette page.
 *
 * CE FICHIER EST GÉNÉRÉ — ne pas l'éditer à la main.
 *
 *   node scripts/dossiers/vers_web.mjs
 *
 * Volontairement séparé de dossiers.ts, qui porte le texte des dix-neuf
 * dossiers : la page d'accueil a seulement besoin de savoir vers quoi pointer.
 */

export const DOSSIER_LANGS: Record<string, string> = ${JSON.stringify(index, null, 2)};

/** L'adresse de la page d'un pays, ou null s'il n'a qu'un PDF. */
export function dossierHref(slug: string): string | null {
  const langue = DOSSIER_LANGS[slug];
  return langue ? \`/\${langue}/dossiers/\${slug}\` : null;
}
`;
writeFileSync(join(RACINE, "src/lib/dossiers-index.ts"), sortieIndex, "utf8");

console.log(`dossiers.ts généré : ${slugs.length} pays — ${slugs.join(", ")}`);
console.log("dossiers-index.ts généré : slug → langue");
