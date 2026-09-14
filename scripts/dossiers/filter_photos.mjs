// Écarte les photos monochromes / sépia / mal exposées.
// Usage: node filter_photos.mjs <racinePhotos> [--apply]
import { readdirSync, statSync, renameSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const root = process.argv[2];
const apply = process.argv.includes("--apply");

// La saturation doit se mesurer pixel par pixel : la moyenne des canaux sur
// toute l'image se neutralise et fait passer une photo N&B pour une couleur.
async function measure(file) {
  const { data, info } = await sharp(file)
    .resize(72, 72, { fit: "fill" })
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  let satSum = 0;
  let lumSum = 0;
  const n = info.width * info.height;
  for (let i = 0; i < data.length; i += 3) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const mx = Math.max(r, g, b);
    const mn = Math.min(r, g, b);
    satSum += mx === 0 ? 0 : (mx - mn) / mx;
    lumSum += (r * 0.299 + g * 0.587 + b * 0.114) / 255;
  }
  return { sat: satSum / n, lum: lumSum / n };
}

let kept = 0;
let dropped = 0;

for (const slug of readdirSync(root)) {
  const dir = join(root, slug);
  if (!statSync(dir).isDirectory()) continue;

  for (const f of readdirSync(dir)) {
    if (!/\.jpe?g$/i.test(f)) continue;
    const file = join(dir, f);
    let m;
    try {
      m = await measure(file);
    } catch {
      m = { sat: 0, lum: 0 };
    }
    const mono = m.sat < 0.12;
    const sombre = m.lum < 0.18;
    const delave = m.lum > 0.9;

    if (mono || sombre || delave) {
      const why = mono ? "monochrome" : sombre ? "trop sombre" : "delave";
      console.log(`${slug}/${f}  REJET (${why})  sat=${m.sat.toFixed(3)} lum=${m.lum.toFixed(2)}`);
      dropped += 1;
      if (apply) {
        const bin = join(dir, "_rejet");
        mkdirSync(bin, { recursive: true });
        renameSync(file, join(bin, f));
      }
    } else {
      kept += 1;
    }
  }
}

console.log(`\ngardees ${kept} · rejetees ${dropped}`);
