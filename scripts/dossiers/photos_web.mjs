/**
 * Installe les photos des dossiers dans le site.
 *
 *   node scripts/dossiers/photos_web.mjs [racine des photos]
 *
 * Les photos d'origine servent à fabriquer des PDF : elles sont lourdes et
 * vivent hors du dépôt. Une page web n'a pas besoin de cette définition. Ce
 * script les réduit à 1400 px de large en WebP et les dépose dans
 * public/images/dossiers/<pays>/, numérotées dans le même ordre que celui que
 * les dossiers utilisent — les indices « photo: 4 » des spécifications
 * désignent donc la même image sur le site que dans le PDF.
 *
 * Les crédits Wikimedia Commons de _credits.json sont recopiés tels quels à
 * côté des images : une photo CC BY-SA sans son attribution n'est pas
 * republiable.
 */
import {
  readdirSync,
  existsSync,
  mkdirSync,
  copyFileSync,
  writeFileSync,
  readFileSync,
  statSync,
} from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ici = dirname(fileURLToPath(import.meta.url));
const RACINE = join(ici, "../..");
const SOURCE = process.argv[2] ?? join(ici, "photos");
const CIBLE = join(RACINE, "public/images/dossiers");

// 1400 px en qualité 76 pesaient 25 Mo pour 135 photos, entrés pour toujours
// dans l'historique du dépôt. Une photo de dossier s'affiche au plus sur la
// moitié d'un écran : 1100 px suffisent, et personne ne verra la différence.
const LARGEUR = 1100;
const QUALITE = 70;

// Les pays sans dossier rédigé n'ont pas de page : leurs photos ne serviraient
// à rien. La Tunisie est dans ce cas — son PDF existe, pas sa spécification.
const AVEC_DOSSIER = new Set(
  readdirSync(join(ici, "pays"))
    .filter((f) => f.endsWith(".mjs"))
    .map((f) => f.replace(/\.mjs$/, "")),
);

if (!existsSync(SOURCE)) {
  console.error(`photos introuvables : ${SOURCE}`);
  process.exit(1);
}

const pays = readdirSync(SOURCE).filter((d) => statSync(join(SOURCE, d)).isDirectory());

let total = 0;
let octets = 0;

/* Les crédits connus, par pays.
 *
 * Une photo dont on ne sait pas d'où elle vient ne se republie pas. Treize des
 * dix-neuf jeux ont été installés autrefois depuis un dossier extérieur, sans
 * qu'aucune source soit conservée : install_photos.mjs recopie les images en
 * les renommant 00.jpg, 01.jpg, et ne garde rien de leur origine. Ces treize-là
 * restent donc hors du site tant que leur provenance n'est pas établie. */
const TOUS_CREDITS = existsSync(join(SOURCE, "_credits.json"))
  ? JSON.parse(readFileSync(join(SOURCE, "_credits.json"), "utf8"))
  : {};

for (const slug of pays) {
  if (!AVEC_DOSSIER.has(slug)) {
    console.log(`${slug.padEnd(18)} ignoré — pas de dossier rédigé`);
    continue;
  }
  if (!TOUS_CREDITS[slug]) {
    console.log(`${slug.padEnd(18)} IGNORÉ — origine des photos inconnue`);
    continue;
  }
  const dossierSource = join(SOURCE, slug);
  const images = readdirSync(dossierSource)
    .filter((f) => /\.(jpe?g|png)$/i.test(f))
    .sort();
  if (images.length === 0) continue;

  const dossierCible = join(CIBLE, slug);
  mkdirSync(dossierCible, { recursive: true });

  for (const [i, nom] of images.entries()) {
    const destination = join(dossierCible, `${i}.webp`);
    await sharp(join(dossierSource, nom))
      .resize({ width: LARGEUR, withoutEnlargement: true })
      .webp({ quality: QUALITE })
      .toFile(destination);
    octets += statSync(destination).size;
    total += 1;
  }

  // Les crédits suivent les images : sans attribution, une photo CC BY-SA ne
  // peut pas être republiée.
  const credits = join(dossierSource, "_credits.json");
  if (existsSync(credits)) {
    copyFileSync(credits, join(dossierCible, "_credits.json"));
  } else {
    const racineCredits = join(SOURCE, "_credits.json");
    if (existsSync(racineCredits)) {
      const tout = JSON.parse(readFileSync(racineCredits, "utf8"));
      const pourCePays = tout[slug];
      if (pourCePays) {
        writeFileSync(
          join(dossierCible, "_credits.json"),
          JSON.stringify(pourCePays, null, 1),
          "utf8",
        );
      }
    }
  }

  console.log(`${slug.padEnd(18)} ${images.length} images`);
}

console.log(
  `\n${total} photos installées, ${(octets / 1024 / 1024).toFixed(1)} Mo au total (${LARGEUR} px, WebP qualité ${QUALITE}).`,
);
