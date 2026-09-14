// Insère (ou remplace) le bloc `doseCalculator` d'une locale dans content.ts.
// Passer par un script évite les erreurs d'accolades sur un fichier de 4000
// lignes, et garantit l'écriture en UTF-8.
//
// Usage: node inject_i18n.mjs <locale> <traduction.json>
import { readFileSync, writeFileSync } from "node:fs";

const CONTENT = "src/lib/content.ts";
const locale = process.argv[2];
const data = JSON.parse(readFileSync(process.argv[3], "utf8"));

const IND = "    ";

function render(value, depth) {
  const pad = IND.repeat(depth);
  if (typeof value === "string") return JSON.stringify(value);
  const inner = Object.entries(value)
    .map(([k, v]) => `${pad}${IND}${k}: ${render(v, depth + 1)},`)
    .join("\n");
  return `{\n${inner}\n${pad}}`;
}

const src = readFileSync(CONTENT, "utf8");

// Chaque locale est un objet `xx: {` au premier niveau ; on cible le bloc
// waterCalculator de CELLE demandée et on insère juste après sa fermeture.
const localeStart = src.indexOf(`\n  ${locale}: {`);
if (localeStart < 0) throw new Error(`locale ${locale} introuvable`);

const wcStart = src.indexOf("waterCalculator: {", localeStart);
if (wcStart < 0) throw new Error(`waterCalculator absent pour ${locale}`);

// Fin du bloc waterCalculator : on suit les accolades.
let depth = 0;
let wcEnd = -1;
for (let i = src.indexOf("{", wcStart); i < src.length; i++) {
  if (src[i] === "{") depth++;
  else if (src[i] === "}") {
    depth--;
    if (depth === 0) {
      wcEnd = i + 1;
      break;
    }
  }
}
if (wcEnd < 0) throw new Error("bloc waterCalculator non terminé");

const apres = src.slice(wcEnd);
const virgule = apres.startsWith(",") ? 1 : 0;
const coupe = wcEnd + virgule;

// Si le bloc existe déjà pour cette locale, on le retire d'abord.
let reste = src.slice(coupe);
const dejaLa = reste.match(/^\s*doseCalculator: \{/);
if (dejaLa) {
  let d = 0;
  const debut = coupe + reste.indexOf("{", reste.indexOf("doseCalculator"));
  for (let i = debut; i < src.length; i++) {
    if (src[i] === "{") d++;
    else if (src[i] === "}") {
      d--;
      if (d === 0) {
        const fin = i + 1 + (src[i + 1] === "," ? 1 : 0);
        reste = src.slice(fin);
        break;
      }
    }
  }
}

const bloc = `\n${IND}doseCalculator: ${render(data, 2)},`;
writeFileSync(CONTENT, src.slice(0, coupe) + bloc + reste, "utf8");
console.log(`${locale} : doseCalculator inséré (${Object.keys(data).length} clés)`);
