// Contrôles automatiques sur les textes extraits : clés manquantes, textes non
// traduits, chiffres qui divergent d'une langue à l'autre, coquilles mécaniques.
import { readFileSync } from "node:fs";
const tout = JSON.parse(readFileSync(`${process.argv[2]}/_tout.json`, "utf8"));
const langues = Object.keys(tout);
const map = Object.fromEntries(langues.map((l) => [l, new Map(tout[l])]));
const fr = map.fr;
const dit = (t, lignes) => { if (lignes.length) { console.log(`\n### ${t} (${lignes.length})`); lignes.slice(0, 60).forEach((l) => console.log("  " + l)); if (lignes.length > 60) console.log(`  … ${lignes.length - 60} de plus`); } };

// 1. Clés
for (const l of langues) {
  if (l === "fr") continue;
  const manque = [...fr.keys()].filter((k) => !map[l].has(k));
  const enTrop = [...map[l].keys()].filter((k) => !fr.has(k));
  dit(`${l} — clés absentes du français`, enTrop);
  dit(`${l} — clés du français absentes ici`, manque);
}

// 2. Chiffres divergents
const nombres = (s) => (s.match(/\d+(?:[.,]\d+)?/g) ?? []).map((n) => n.replace(",", "."));
const divergences = [];
for (const [k, v] of fr) {
  const ref = nombres(v).sort().join("|");
  for (const l of langues) {
    if (l === "fr" || !map[l].has(k)) continue;
    const autre = nombres(map[l].get(k)).sort().join("|");
    if (ref !== autre) divergences.push(`${k}\n      fr: ${v.slice(0, 150)}\n      ${l}: ${map[l].get(k).slice(0, 150)}`);
  }
}
dit("Chiffres différents du français", divergences);

// 3. Coquilles mécaniques
const regles = [
  [/  +/, "double espace"],
  [/\s[,.;](?!\d)/, "espace avant une virgule ou un point"],
  [/[Ã][©¨ªº»]|â€|Ð|�/, "caractère abîmé"],
  [/\b(\p{L}+) \1\b/u, "mot répété"],
  [/\.\.(?!\.)/, "deux points de suite"],
  [/,,|;;|!!|\?\?/, "ponctuation doublée"],
  [/\(\s|\s\)/, "parenthèse mal collée"],
];
const coquilles = [];
for (const l of langues) for (const [k, v] of map[l]) for (const [re, nom] of regles) if (re.test(v)) coquilles.push(`${l} ${k} [${nom}] ${v.slice(0, 120)}`);
dit("Coquilles mécaniques", coquilles);

// 4. Parenthèses et guillemets déséquilibrés
const desequilibre = [];
for (const l of langues) for (const [k, v] of map[l]) {
  const o = (v.match(/\(/g) ?? []).length, f = (v.match(/\)/g) ?? []).length;
  const g = (v.match(/«/g) ?? []).length, d = (v.match(/»/g) ?? []).length;
  if (o !== f || g !== d) desequilibre.push(`${l} ${k} ${v.slice(0, 120)}`);
}
dit("Parenthèses ou guillemets non refermés", desequilibre);

// 5. Textes identiques au français (souvent non traduits)
const latines = ["en", "es", "pt", "id", "de", "it", "tr", "pl", "hr", "ca"];
const copies = [];
for (const l of latines) for (const [k, v] of map[l]) {
  const f = fr.get(k);
  if (!f || v !== f) continue;
  if (v.length < 25) continue;                    // noms de marque, sigles
  if (/^[\d\s%+.,°×/-]+$/.test(v)) continue;      // chiffres seuls
  copies.push(`${l} ${k} ${v.slice(0, 110)}`);
}
dit("Identique au français (à vérifier)", copies);
