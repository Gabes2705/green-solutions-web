// Optimise et installe la sélection de photos dans le dépôt, pour que la
// génération des dossiers soit reproductible sans refaire la collecte.
// Usage: node install_photos.mjs <sourcePhotos>
import { readdirSync, statSync, mkdirSync, rmSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const src = process.argv[2];
const dest = join(dirname(fileURLToPath(import.meta.url)), "photos");

rmSync(dest, { recursive: true, force: true });
mkdirSync(dest, { recursive: true });

let total = 0;
for (const slug of readdirSync(src)) {
  const dir = join(src, slug);
  if (!statSync(dir).isDirectory()) continue;
  mkdirSync(join(dest, slug), { recursive: true });
  for (const f of readdirSync(dir).filter((x) => /\.jpe?g$/i.test(x))) {
    const out = join(dest, slug, f);
    await sharp(join(dir, f))
      .resize(1280, null, { withoutEnlargement: true })
      .jpeg({ quality: 76, mozjpeg: true })
      .toFile(out);
    total += statSync(out).size;
  }
}
console.log(`installees dans ${dest} — ${Math.round(total / 1024 / 1024)} Mo`);
