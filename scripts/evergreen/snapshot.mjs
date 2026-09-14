// Extrait une section rendue du site (HTML + CSS) dans une page autonome.
// Sert de preuve visuelle quand la capture d'écran du navigateur piloté échoue.
//
// Usage: node snapshot.mjs <selecteur> <sortie.html> [url]
import { readFileSync, writeFileSync } from "node:fs";

const selecteur = process.argv[2];
const sortie = process.argv[3];
const url = process.argv[4] ?? "http://localhost:3000";

const page = await (await fetch(url)).text();

// En production Next sert ses feuilles dans /_next/static/css ; en dev il les
// injecte par JS, d'où le repli sur la source.
const feuilles = [...page.matchAll(/href="(\/_next\/static\/css\/[^"]+\.css)"/g)].map((m) => m[1]);
let css = "";
for (const f of new Set(feuilles)) {
  css += (await (await fetch(url + f)).text()) + "\n";
}
if (css.trim().length === 0) {
  css = readFileSync("src/app/globals.css", "utf8");
}

const idAttr = selecteur.replace(/^#/, "");
const debut = page.indexOf(`id="${idAttr}"`);
if (debut < 0) throw new Error(`${selecteur} introuvable dans le HTML servi`);
const ouvrant = page.lastIndexOf("<section", debut);

let profondeur = 0;
let fin = -1;
const re = /<section\b|<\/section>/g;
re.lastIndex = ouvrant;
let m;
while ((m = re.exec(page))) {
  if (m[0] === "</section>") {
    profondeur--;
    if (profondeur === 0) {
      fin = m.index + m[0].length;
      break;
    }
  } else profondeur++;
}
if (fin < 0) throw new Error("section non terminée");

const html = page.slice(ouvrant, fin);

writeFileSync(
  sortie,
  `<!doctype html>
<meta charset="utf-8">
<title>Calculateur de dosage</title>
<style>${css}
body { margin: 0; background: var(--bg-deep, #0d2418); }
.section { padding: 3rem 0 !important; }
.section-inner > * { opacity: 1 !important; transform: none !important; }
</style>
${html}
`,
  "utf8",
);

console.log(
  `${selecteur} -> ${sortie} (html ${Math.round(html.length / 1024)} Ko, css ${Math.round(css.length / 1024)} Ko)`,
);
