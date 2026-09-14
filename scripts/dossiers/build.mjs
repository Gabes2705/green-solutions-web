import { readdirSync, existsSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";
import { Deck, PALETTES } from "./deck.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const OUT = join(here, "../../public/documents/countries");
const SOFFICE = "C:\\Program Files\\LibreOffice\\program\\soffice.exe";

// Les photos vivent hors du dépôt : passer leur racine en 2e argument.
const PHOTOS = process.argv[3] ?? join(here, "photos");

function photosOf(slug) {
  const dir = join(PHOTOS, slug);
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => /\.(jpe?g|png)$/i.test(f))
    .sort()
    .map((f) => join(dir, f));
}

export async function build(spec) {
  const pics = photosOf(spec.slug);
  if (pics.length === 0) throw new Error(`aucune photo pour ${spec.slug}`);
  const pic = (i) => pics[i % pics.length];

  const d = new Deck({
    palette: PALETTES[spec.palette],
    locale: spec.locale,
    rtl: spec.rtl ?? false,
  });
  const foot = spec.pied;

  const drapeau = join(here, "drapeaux", `${spec.slug}.png`);
  const logo = join(here, "../../public/images/logo-icon.png");
  await d.cover({
    ...spec.cover,
    photo: pic(spec.cover.photo ?? 0),
    flag: existsSync(drapeau) ? drapeau : null,
    logo: existsSync(logo) ? logo : null,
  });
  d.stats({ ...spec.chiffres, footer: foot });
  await d.split({
    ...spec.contrainte,
    photo: pic(spec.contrainte.photo ?? 1),
    footer: foot,
  });
  d.chart({ ...spec.usages, footer: foot });
  d.chart({ ...spec.productions, footer: foot });
  d.columns({ ...spec.solutions, footer: foot });
  d.chart({ ...spec.economies, footer: foot });
  await d.cards({
    ...spec.regions,
    items: spec.regions.items.map((it) => ({ ...it, photo: pic(it.photo ?? 0) })),
    footer: foot,
  });
  d.steps({ ...spec.deploiement, footer: foot });
  d.columns({ ...spec.risques, footer: foot });
  await d.closing({ ...spec.closing, photo: pic(spec.closing.photo ?? 0), footer: foot });

  mkdirSync(OUT, { recursive: true });
  const pptx = join(OUT, `${spec.fichier}.pptx`);
  await d.save(pptx);

  execFileSync(
    SOFFICE,
    ["--headless", "--norestore", "--convert-to", "pdf", "--outdir", OUT, pptx],
    { stdio: "pipe", timeout: 180_000 },
  );

  return pptx;
}

const arg = process.argv[2];
if (arg) {
  const slugs =
    arg === "tous"
      ? readdirSync(join(here, "pays"))
          .filter((f) => f.endsWith(".mjs"))
          .map((f) => f.replace(/\.mjs$/, ""))
      : arg.split(",");

  let ok = 0;
  for (const slug of slugs) {
    try {
      const spec = (await import(`./pays/${slug}.mjs`)).default;
      await build(spec);
      console.log(`OK   ${slug}`);
      ok += 1;
    } catch (e) {
      console.log(`ECHEC ${slug} : ${e.message.split("\n")[0]}`);
    }
  }
  console.log(`\n${ok}/${slugs.length} dossiers generes`);
}
