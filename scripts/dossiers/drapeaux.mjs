// Récupère les drapeaux nationaux officiels depuis Wikimedia Commons pour les
// couvertures de dossier.
//
// Les tracés du composant CountryFlag du site sont volontairement schématiques :
// à 52 px de large ils font l'affaire, mais agrandis sur une couverture la
// Shahada saoudienne ressemble à une rangée de peignes. Un destinataire
// reconnaît son propre drapeau : il faut le vrai.
//
// Usage: node drapeaux.mjs
import { mkdirSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const UA = "GreenSolutionsDossiers/1.0 (contact@evergreen-ecosorb.com)";
const API = "https://commons.wikimedia.org/w/api.php";
const out = join(dirname(fileURLToPath(import.meta.url)), "drapeaux");

const FICHIERS = {
  maroc: "Flag of Morocco.svg",
  algerie: "Flag of Algeria.svg",
  tunisie: "Flag of Tunisia.svg",
  egypte: "Flag of Egypt.svg",
  jordanie: "Flag of Jordan.svg",
  "arabie-saoudite": "Flag of Saudi Arabia.svg",
  usa: "Flag of the United States.svg",
  "afrique-du-sud": "Flag of South Africa.svg",
  gabon: "Flag of Gabon.svg",
  chili: "Flag of Chile.svg",
  argentine: "Flag of Argentina.svg",
  haiti: "Flag of Haiti.svg",
};

mkdirSync(out, { recursive: true });

for (const [slug, fichier] of Object.entries(FICHIERS)) {
  const url =
    `${API}?action=query&format=json&titles=${encodeURIComponent(`File:${fichier}`)}` +
    `&prop=imageinfo&iiprop=url&iiurlwidth=1200`;
  const j = await fetch(url, { headers: { "User-Agent": UA } }).then((r) => r.json());
  const info = Object.values(j.query?.pages ?? {})[0]?.imageinfo?.[0];
  if (!info?.thumburl) {
    console.log(`${slug} : introuvable`);
    continue;
  }
  const buf = Buffer.from(
    await fetch(info.thumburl, { headers: { "User-Agent": UA } }).then((r) => r.arrayBuffer()),
  );
  writeFileSync(join(out, `${slug}.png`), buf);
  console.log(`${slug.padEnd(18)} ${Math.round(buf.length / 1024)} Ko`);
  await new Promise((r) => setTimeout(r, 150));
}
