import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import ts from "typescript";
const OUT = process.argv[2];
mkdirSync(OUT, { recursive: true });
function charger(fichier, exportName) {
  const source = readFileSync(fichier, "utf8");
  const js = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
  const module = { exports: {} };
  new Function("module", "exports", "require", js)(module, module.exports, (p) => {
    if (p.endsWith("countries")) return require0("src/lib/countries.ts", "*");
    return {};
  });
  return exportName === "*" ? module.exports : module.exports[exportName];
}
function require0(f) { return charger(f, "*"); }
const content = charger("src/lib/content.ts", "content");
function parcourir(v, chemin, out) {
  if (typeof v === "string") out.push([chemin, v]);
  else if (Array.isArray(v)) v.forEach((x, i) => parcourir(x, `${chemin}[${i}]`, out));
  else if (v && typeof v === "object") for (const [k, x] of Object.entries(v)) parcourir(x, chemin ? `${chemin}.${k}` : k, out);
}
const tout = {};
for (const [langue, bloc] of Object.entries(content)) {
  const lignes = [];
  parcourir(bloc, "", lignes);
  tout[langue] = lignes;
  writeFileSync(`${OUT}/${langue}.txt`, lignes.map(([c, t]) => `${c}\t${t}`).join("\n") + "\n", "utf8");
}
writeFileSync(`${OUT}/_tout.json`, JSON.stringify(tout), "utf8");
console.log(Object.entries(tout).map(([l, v]) => `${l}: ${v.length}`).join("  "));
