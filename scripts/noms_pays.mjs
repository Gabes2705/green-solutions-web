/**
 * Regénère src/lib/countries.ts depuis CLDR.
 *
 *   node scripts/noms_pays.mjs
 *
 * Les noms de pays ne se recopient pas à la main. C'est ainsi que les treize
 * listes de content.ts avaient fini par afficher le Maroc six fois de suite en
 * anglais — « Fas », « Marocco », « Marokko », « Maroko », « Marruecos »,
 * « Morocco » — et par nommer la Croatie « كرواتيا » en portugais.
 *
 * Intl.DisplayNames lit la base CLDR d'Unicode à partir du code ISO 3166 du
 * pays : la même référence que celle dont se servent les navigateurs et les
 * systèmes d'exploitation. Aucun nom de ce fichier n'est écrit de mémoire.
 */
import { writeFileSync } from "node:fs";

/** Le code ISO 3166-1 de chaque dossier. C'est la seule chose saisie ici. */
const ISO = {
  "cote-divoire": "CI",
  congo: "CG", // République du Congo — la couverture du dossier porte « Congo-Brazzaville »
  ghana: "GH",
  "guinee-conakry": "GN", // République de Guinée — le dossier est titré « Conakry »
  maroc: "MA",
  algerie: "DZ",
  "afrique-du-sud": "ZA",
  gabon: "GA",
  egypte: "EG",
  jordanie: "JO",
  haiti: "HT",
  usa: "US",
  "arabie-saoudite": "SA",
  cameroun: "CM",
  koweit: "KW",
  oman: "OM",
  senegal: "SN",
  tunisie: "TN",
  "soudan-sud": "SS",
  espagne: "ES",
  grece: "GR",
  chili: "CL",
  argentine: "AR",
  croatie: "HR",
};

const LANGUES = ["fr", "en", "es", "pt", "ar", "zh", "id", "de", "it", "el", "tr", "pl", "hr"];

const cle = (slug) => (/^[a-z]+$/.test(slug) ? slug : JSON.stringify(slug));

const entete = `/**
 * Les pays couverts par un dossier, en un seul endroit.
 *
 * Auparavant, chaque langue portait sa propre liste de vingt-quatre entrées
 * recopiée à la main dans content.ts. Les copies avaient divergé : l'anglais
 * affichait soixante-douze boutons, dont le Maroc six fois de suite ; le grec,
 * l'allemand, le chinois et le turc n'en affichaient que treize ou quatorze ;
 * et la dernière entrée de chaque langue avait été écrasée par la première de
 * la suivante, si bien que la Croatie s'écrivait « كرواتيا » en portugais.
 *
 * CE FICHIER EST GÉNÉRÉ — ne pas l'éditer à la main.
 *
 *   node scripts/noms_pays.mjs
 *
 * Les noms viennent de CLDR, la base d'Unicode dont se servent les navigateurs
 * et les systèmes d'exploitation, lue par Intl.DisplayNames à partir du code
 * ISO 3166 de chaque pays. Deux conséquences valent d'être connues : CLDR
 * nomme le Congo « Congo-Brazzaville », ce qui le distingue de Kinshasa et
 * correspond à la couverture du dossier ; et il laisse « Côte d'Ivoire » en
 * français dans la plupart des langues, parce que c'est le nom que le pays
 * demande qu'on lui donne partout.
 */

`;

const table = {};
for (const langue of LANGUES) {
  const dn = new Intl.DisplayNames([langue], { type: "region" });
  table[langue] = Object.fromEntries(
    Object.entries(ISO).map(([slug, code]) => {
      const nom = dn.of(code);
      if (!nom || nom === code) throw new Error(`CLDR ne nomme pas ${code} en ${langue}`);
      return [slug, nom];
    }),
  );
}

let sortie = entete;
sortie += "export const COUNTRY_SLUGS = [\n";
for (const slug of Object.keys(ISO)) sortie += `  ${JSON.stringify(slug)},\n`;
sortie += "] as const;\n\nexport type CountrySlug = (typeof COUNTRY_SLUGS)[number];\n\n";
sortie += `/**
 * Le nom de chaque pays dans chaque langue, d'après CLDR.
 *
 * Le type impose les vingt-quatre clés : ajouter un pays à la liste ci-dessus
 * sans le nommer ici ne compile pas. C'est ce contrôle qui manquait.
 */
type NameTable = Record<CountrySlug, string>;

export const COUNTRY_NAMES: Record<string, NameTable> = {
`;
for (const langue of LANGUES) {
  sortie += `  ${langue}: {\n`;
  for (const slug of Object.keys(ISO)) {
    sortie += `    ${cle(slug)}: ${JSON.stringify(table[langue][slug])},\n`;
  }
  sortie += "  },\n";
}
sortie += `};

export type CountryItem = {
  slug: CountrySlug;
  country: string;
  href: string;
};

/** Les vingt-quatre pays, nommés dans la langue demandée. */
export function countryItems(langue: string): CountryItem[] {
  const noms = COUNTRY_NAMES[langue] ?? COUNTRY_NAMES.fr;
  return COUNTRY_SLUGS.map((slug) => ({
    slug,
    country: noms[slug],
    href: \`/documents/countries/\${slug}.pdf\`,
  }));
}
`;

const cible = new URL("../src/lib/countries.ts", import.meta.url);
writeFileSync(cible, sortie, "utf8");
console.log(
  `countries.ts régénéré : ${Object.keys(ISO).length} pays × ${LANGUES.length} langues = ${
    Object.keys(ISO).length * LANGUES.length
  } noms, tous issus de CLDR.`,
);
