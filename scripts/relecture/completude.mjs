// Quelles traductions disent moins que le texte français ?
// On compare la longueur de chaque texte à celle du français, puis on signale
// ceux qui s'écartent nettement de l'habitude de leur propre langue (le chinois
// est naturellement plus court, l'allemand plus long).
import { readFileSync } from "node:fs";
const tout = JSON.parse(readFileSync(`${process.argv[2]}/_tout.json`, "utf8"));
const map = Object.fromEntries(Object.keys(tout).map((l) => [l, new Map(tout[l])]));
const fr = map.fr;
const mediane = (a) => a.sort((x, y) => x - y)[Math.floor(a.length / 2)];

for (const l of Object.keys(map)) {
  if (l === "fr") continue;
  const ratios = [];
  for (const [k, v] of fr) {
    const t = map[l].get(k);
    if (!t || v.length < 60) continue;
    ratios.push([k, t.length / v.length]);
  }
  const med = mediane(ratios.map(([, r]) => r).slice());
  const courts = ratios.filter(([, r]) => r < med * 0.65).sort((a, b) => a[1] - b[1]);
  const perdus = courts.reduce((n, [k]) => n + (fr.get(k).length - map[l].get(k).length), 0);
  console.log(`\n### ${l} — ratio habituel ${med.toFixed(2)} · ${courts.length} textes trop courts · ~${perdus} caractères manquants`);
  courts.slice(0, 12).forEach(([k, r]) => console.log(`  ${(r * 100).toFixed(0)}%  ${k}  « ${fr.get(k).slice(0, 80)}… »`));
}
