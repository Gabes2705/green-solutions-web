// Planche contact de toutes les photos, pour inspection visuelle.
// Usage: node contact_sheet.mjs <racinePhotos> <sortie.png> [slug1,slug2,...]
import { readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const root = process.argv[2];
const out = process.argv[3];
const only = process.argv[4]?.split(",");

const CELL = 260;
const CELL_H = 175;
const LABEL = 22;
const COLS = 6;
const PAD = 8;

const shots = [];
for (const slug of readdirSync(root)) {
  if (only && !only.includes(slug)) continue;
  const dir = join(root, slug);
  if (!statSync(dir).isDirectory()) continue;
  for (const f of readdirSync(dir).filter((x) => /\.jpe?g$/i.test(x))) {
    shots.push({ slug, f, path: join(dir, f) });
  }
}

const rows = Math.ceil(shots.length / COLS);
const W = COLS * (CELL + PAD) + PAD;
const H = rows * (CELL_H + LABEL + PAD) + PAD;

const layers = [];
for (let i = 0; i < shots.length; i++) {
  const col = i % COLS;
  const row = Math.floor(i / COLS);
  const left = PAD + col * (CELL + PAD);
  const top = PAD + row * (CELL_H + LABEL + PAD);

  layers.push({
    input: await sharp(shots[i].path).resize(CELL, CELL_H, { fit: "cover" }).png().toBuffer(),
    left,
    top,
  });

  const text = `${shots[i].slug}/${shots[i].f.replace(/\.jpe?g$/i, "")}`;
  layers.push({
    input: Buffer.from(
      `<svg width="${CELL}" height="${LABEL}">
        <rect width="${CELL}" height="${LABEL}" fill="#14281f"/>
        <text x="6" y="15" font-family="sans-serif" font-size="13" fill="#cfe0d3">${text}</text>
      </svg>`,
    ),
    left,
    top: top + CELL_H,
  });
}

await sharp({
  create: { width: W, height: H, channels: 3, background: "#0c1a14" },
})
  .composite(layers)
  .png()
  .toFile(out);

console.log(`${shots.length} photos -> ${out} (${W}x${H})`);
