// Collecte des photos agricoles sur Wikimedia Commons.
//
// La recherche plein texte de Commons est inexploitable ici : une requête
// « Egypt agriculture » ramène aussi bien un caméléon qu'une gravure du
// XIXe siècle. On passe donc par les catégories thématiques, puis on filtre
// sur le titre du fichier — c'est là que se voient les cartes, blasons,
// portraits et gravures qu'il faut écarter.
//
// Usage: node fetch_images.mjs <sortie> <manifest.json> [--par 6]
import { mkdirSync, writeFileSync, existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const UA = "GreenSolutionsDossiers/1.0 (contact@evergreen-ecosorb.com)";
const API = "https://commons.wikimedia.org/w/api.php";

const outDir = process.argv[2];
const manifest = JSON.parse(readFileSync(process.argv[3], "utf8"));
const parIdx = process.argv.indexOf("--par");
const TARGET = parIdx > -1 ? Number(process.argv[parIdx + 1]) : 6;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Les cultures tropicales manquaient : un fichier « Cocoa pods drying » ne
// portait aucun des mots ci-dessous et se faisait écarter, alors que le cacao
// est la photo emblématique de la Côte d'Ivoire ou du Ghana.
const MOTS_OK =
  /(field|farm|orchard|plantation|irrigat|oasis|oases|palm|vineyard|vine|crop|harvest|agricultur|greenhouse|terrace|olive|wheat|corn|maize|citrus|orange|farmland|cultivat|paddy|grove|tractor|barley|soy|blueberr|garden|valley|plain|delta|cocoa|cacao|cashew|anacard|rubber|hevea|latex|yam|cassava|manioc|plantain|banana|coffee|rice|cotton|pineapple|mango)/i;

const MOTS_KO = new RegExp(
  [
    // imagerie satellite et cartographie — très présente dans les catégories
    // d'irrigation, où elle représente l'essentiel des fichiers
    "map|satellite|landsat|sentinel|modis|aster|ndvi|imagery|orthophoto",
    "copernicus|nasa|usgs|earth.observ|false.colo|true.colo|time.series|remote.sensing",
    // documents, reproductions, objets
    "flag|coat.of.arms|emblem|logo|chart|diagram|graph|poster|postcard|stamp|coin|banknote",
    "engraving|drawing|lithograph|print|sketch|painting|manuscript|book|page|seal|badge",
    "jar|bottle|sample|laborator|packaging|label|product.shot",
    // scènes hors sujet
    "protest|rally|demonstrat|portrait|conference|meeting|signature|parliament|minister|president",
    "uniform|soldier|military|war|mosque|church|museum|interior|street|urban|city.centre|downtown",
    "snake|lizard|chameleon|bird|insect|beetle|butterfly|spider|fossil|skull",
    "monument|statue|tomb|archaeolog",
    "helicopter|aircraft|airplane|aviation|drone|signpost|sign.board|entrance.gate",
    // reproductions anciennes
    "1[6-9]\\d\\d|19[0-4]\\d|black.and.white|b&w|colou?ri[sz]ed",
  ].join("|"),
  "i",
);

async function api(params) {
  const url = `${API}?${new URLSearchParams({ format: "json", ...params })}`;
  const r = await fetch(url, { headers: { "User-Agent": UA } });
  if (!r.ok) throw new Error(`api ${r.status}`);
  return r.json();
}

function usable(info, title) {
  if (!info) return false;
  const name = title.replace(/^File:/, "");
  if (MOTS_KO.test(name)) return false;
  if (!MOTS_OK.test(name)) return false;
  const w = info.thumbwidth || info.width;
  const h = info.thumbheight || info.height;
  if (w < 900) return false;
  if (w / h < 1.1) return false;
  return true;
}

async function fromCategory(cat) {
  const j = await api({
    action: "query",
    generator: "categorymembers",
    gcmtitle: `Category:${cat}`,
    gcmtype: "file",
    gcmlimit: "60",
    prop: "imageinfo",
    iiprop: "url|size|extmetadata",
    iiurlwidth: "1600",
  });
  const pages = Object.values(j.query?.pages ?? {});
  return pages
    .filter((p) => usable(p.imageinfo?.[0], p.title))
    .map((p) => ({
      url: p.imageinfo[0].thumburl || p.imageinfo[0].url,
      title: p.title,
      credit: (p.imageinfo[0].extmetadata?.Artist?.value || "")
        .replace(/<[^>]*>/g, "")
        .trim()
        .slice(0, 70),
      licence: p.imageinfo[0].extmetadata?.LicenseShortName?.value ?? "",
    }));
}

async function fromSearch(q) {
  const j = await api({
    action: "query",
    generator: "search",
    gsrsearch: `filetype:bitmap ${q}`,
    gsrnamespace: "6",
    gsrlimit: "30",
    prop: "imageinfo",
    iiprop: "url|size|extmetadata",
    iiurlwidth: "1600",
  });
  const pages = Object.values(j.query?.pages ?? {});
  return pages
    .filter((p) => usable(p.imageinfo?.[0], p.title))
    .map((p) => ({
      url: p.imageinfo[0].thumburl || p.imageinfo[0].url,
      title: p.title,
      credit: (p.imageinfo[0].extmetadata?.Artist?.value || "")
        .replace(/<[^>]*>/g, "")
        .trim()
        .slice(0, 70),
      licence: p.imageinfo[0].extmetadata?.LicenseShortName?.value ?? "",
    }));
}

async function download(url, dest) {
  const r = await fetch(url, { headers: { "User-Agent": UA } });
  if (!r.ok) throw new Error(`dl ${r.status}`);
  const buf = Buffer.from(await r.arrayBuffer());
  if (buf.length < 40_000) throw new Error("trop petit");
  writeFileSync(dest, buf);
  return buf.length;
}

mkdirSync(outDir, { recursive: true });
const credits = {};

for (const [slug, sources] of Object.entries(manifest)) {
  const dir = join(outDir, slug);
  mkdirSync(dir, { recursive: true });
  let n = existsSync(dir) ? readdirSync(dir).filter((f) => f.endsWith(".jpg")).length : 0;
  credits[slug] = [];
  const vus = new Set();

  for (const src of sources) {
    if (n >= TARGET) break;
    let hits = [];
    try {
      hits = src.startsWith("cat:")
        ? await fromCategory(src.slice(4))
        : await fromSearch(src);
    } catch (e) {
      console.log(`  ${slug} <- ${src} : ${e.message}`);
      continue;
    }
    for (const hit of hits) {
      if (n >= TARGET) break;
      if (vus.has(hit.title)) continue;
      vus.add(hit.title);
      const dest = join(dir, `${n}.jpg`);
      try {
        const size = await download(hit.url, dest);
        credits[slug].push({
          fichier: `${n}.jpg`,
          titre: hit.title.replace(/^File:/, ""),
          auteur: hit.credit,
          licence: hit.licence,
          ko: Math.round(size / 1024),
        });
        n += 1;
      } catch {
        /* suivant */
      }
      await sleep(110);
    }
    await sleep(160);
  }
  console.log(`${slug}: ${n}`);
}

writeFileSync(join(outDir, "_credits.json"), JSON.stringify(credits, null, 2));
