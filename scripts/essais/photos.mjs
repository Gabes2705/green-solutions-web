// Photos libres des pages d'essais et des guides, prises sur Wikimedia Commons.
//
//   node scripts/essais/photos.mjs [slug…]
//
// Pour chaque page : deux photos sous licence libre (domaine public, CC0,
// CC BY, CC BY-SA), converties en WebP dans public/images/essais/<slug>/, et
// leurs crédits écrits dans src/lib/essais-photos.json. Une licence CC BY
// oblige à nommer l'auteur : les crédits sont affichés sous chaque photo.
import { mkdirSync, writeFileSync, readFileSync, existsSync } from "node:fs";
import sharp from "sharp";

const UA = "GreenSolutionsSite/1.0 (contact@evergreen-ecosorb.com)";
const API = "https://commons.wikimedia.org/w/api.php";
const LICENCE_OK = /^(cc0|public domain|pd|cc by(-sa)? \d(\.\d)?)/i;
const MOTS_KO =
  /map|satellite|chart|diagram|logo|flag|stamp|drawing|painting|engraving|poster|book|page|1[6-9]\d\d|19[0-4]\d|portrait|museum|seed|market|food|dish|recipe|slice|cut|juice|salad|postcard|dixieland|unhealthy|boone.county|damage|drought/i;

// Recherches par page, de la plus précise à la plus large.
const PAGES = {
  "palmiers-dattiers-emirats-icba": ["date palm plantation", "date palm farm oasis", "date palm tree dates"],
  "pasteques-mexique": ["watermelon field", "watermelon plant fruit", "watermelon growing"],
  "coton-turquie-hatay": ["cotton field", "cotton plant boll field", "cotton harvest"],
  "mais-turquie-konya": ["maize field", "corn field", "maize plants"],
  "canne-a-sucre-indonesie": ["sugarcane field", "sugar cane plantation", "sugarcane harvest"],
  "pommes-de-terre-afrique-du-sud": ["potato field", "potato harvest field", "potato plants field"],
  "soja-chine-shandong": ["soybean plants", "soybean field green", "soybean pods plant"],
  "protection-naturelle-des-cultures": ["Opuntia ficus-indica fruits", "orange orchard fruit trees", "Citrus sinensis tree fruits"],
  "tomate-espagne": ["tomato field", "tomato plantation field", "tomato plants growing field"],
  "engrais-bio-liquide-biostimulant": ["tomato plants greenhouse", "foliar spraying crop", "organic farm vegetables field"],
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const propre = (html) => (html || "").replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();

async function chercher(q) {
  const url = `${API}?${new URLSearchParams({
    format: "json",
    action: "query",
    generator: "search",
    gsrsearch: `filetype:bitmap ${q}`,
    gsrnamespace: "6",
    gsrlimit: "40",
    prop: "imageinfo",
    iiprop: "url|size|extmetadata",
    iiurlwidth: "1600",
  })}`;
  const r = await fetch(url, { headers: { "User-Agent": UA } });
  const j = await r.json();
  return Object.values(j.query?.pages ?? {})
    .sort((a, b) => a.index - b.index)
    .map((p) => ({ p, i: p.imageinfo?.[0] }))
    .filter(({ p, i }) => {
      if (!i) return false;
      const m = i.extmetadata ?? {};
      const licence = propre(m.LicenseShortName?.value);
      if (!LICENCE_OK.test(licence)) return false;
      if (MOTS_KO.test(p.title)) return false;
      if (i.width < 1200 || i.width / i.height < 1.2) return false;
      return true;
    })
    .map(({ p, i }) => ({
      titre: p.title,
      url: i.thumburl || i.url,
      page: i.descriptionurl,
      auteur: propre(i.extmetadata?.Artist?.value).slice(0, 80) || "Auteur inconnu",
      licence: propre(i.extmetadata?.LicenseShortName?.value),
    }));
}

const cheminCredits = new URL("../../src/lib/essais-photos.json", import.meta.url);
const credits = existsSync(cheminCredits) ? JSON.parse(readFileSync(cheminCredits, "utf8")) : {};
const choisis = process.argv.slice(2);

for (const [slug, requetes] of Object.entries(PAGES)) {
  if (choisis.length && !choisis.includes(slug)) continue;
  const retenues = [];
  const vus = new Set();
  // Une photo par recherche quand la page en a plusieurs : deux sujets
  // différents valent mieux que deux vues du même.
  const parRecherche = requetes.length > 2 ? 1 : 2;
  for (const q of requetes) {
    let prises = 0;
    for (const c of await chercher(q)) {
      if (retenues.length >= 2 || prises >= parRecherche) break;
      if (vus.has(c.titre)) continue;
      vus.add(c.titre);
      retenues.push(c);
      prises++;
    }
    if (retenues.length >= 2) break;
    await sleep(500);
  }
  const dossier = new URL(`../../public/images/essais/${slug}/`, import.meta.url);
  mkdirSync(dossier, { recursive: true });
  credits[slug] = [];
  for (const [n, c] of retenues.entries()) {
    const r = await fetch(c.url, { headers: { "User-Agent": UA } });
    const tampon = Buffer.from(await r.arrayBuffer());
    await sharp(tampon).resize({ width: 1100, withoutEnlargement: true }).webp({ quality: 70 }).toFile(new URL(`${n}.webp`, dossier).pathname.replace(/^\/([A-Z]:)/, "$1"));
    credits[slug].push({ src: `/images/essais/${slug}/${n}.webp`, auteur: c.auteur, licence: c.licence, page: c.page, titre: c.titre });
    await sleep(500);
  }
  console.log(slug, retenues.map((c) => `${c.titre} [${c.licence}]`));
}

writeFileSync(cheminCredits, JSON.stringify(credits, null, 2) + "\n", "utf8");
