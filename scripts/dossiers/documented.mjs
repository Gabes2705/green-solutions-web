/** Build source-linked country studies with the established Deck templates.
 * Images and their provenance live with the website, so builds are reproducible.
 * Invoked by: node scripts/dossiers/build.mjs bresil,perou
 */
import { readFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { Deck, PALETTES } from './deck.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '../..');

export async function buildDocumented(spec) {
  const d = new Deck({ palette: PALETTES[spec.palette], locale: spec.locale });
  const pt = spec.locale.startsWith('pt');
  const photoDir = join(root, 'public/images/dossiers', spec.slug);
  const photo = i => join(photoDir, `${i}.webp`);
  const credits = JSON.parse(readFileSync(join(photoDir, '_credits.json'), 'utf8'));
  const footer = spec.pied;
  const annotate = (slide, sources = spec.sources) => slide.addNotes(sources.join('\n'));
  annotate(await d.cover({ ...spec.cover, photo: photo(0), flag: join(here, 'drapeaux', `${spec.slug}.png`), logo: join(root, 'public/images/logo-icon.png') }), [credits[0].url, credits[0].licenceUrl, credits[0].modifications]);
  annotate(d.stats({ ...spec.chiffres, footer }));
  annotate(await d.split({ ...spec.contrainte, photo: photo(1), footer }), [...spec.sources, credits[1].url, credits[1].licenceUrl]);
  for (const chart of [spec.stress, spec.productions]) {
    // Explicit units survive both the editable chart and PDF export.
    const s = d.chart({ ...chart, footer });
    s.addText(chart.data[0].name, { x: .7, y: 1.64, w: 8, h: .25, fontFace: 'Calibri', fontSize: 11, color: d.pal.muted, margin: 0 });
    annotate(s);
  }
  // Each country has two context photographs. Sector pages retain the full
  // content without repeatedly using the same photograph as a new location.
  for (const f of spec.filieres) {
    annotate(d.columns({ kicker: f.kicker, title: f.title,
      left: { head: pt ? 'Contexto e oportunidade' : 'Contexto y oportunidad', lines: f.bullets.slice(0, 2) },
      right: { head: pt ? 'Aplicação proposta' : 'Aplicación propuesta', lines: f.bullets.slice(2) },
      footer,
    }));
  }
  annotate(d.columns({ ...spec.solutions, footer }));
  annotate(d.steps({ ...spec.deploiement, footer }));
  annotate(d.columns({ ...spec.risques, footer }));

  const referencePage = title => {
    const s = d.p.addSlide();
    s.background = { color: d.pal.light };
    s.addText(title, { x: .65, y: .65, w: 12, h: .7, fontFace: 'Cambria', fontSize: 30, bold: true, color: d.pal.dark, margin: 0 });
    s.addText(footer, { x: .65, y: 7, w: 11, h: .2, fontFace: 'Calibri', fontSize: 9, color: d.pal.muted, margin: 0 });
    return s;
  };
  const refs = spec.sources.filter(s => s.includes('https://'));
  for (let start = 0; start < refs.length; start += 4) {
    const s = referencePage(pt ? 'Fontes e datas de referência' : 'Fuentes y fechas de referencia');
    refs.slice(start, start + 4).forEach((ref, i) => {
      const [label, url] = ref.split(/(https:\/\/\S+)/);
      const y = 1.65 + i * 1.12;
      s.addText(label.trim(), { x: .75, y, w: 11.8, h: .58, fontFace: 'Calibri', fontSize: 15, color: d.pal.body, margin: 0, valign: 'top' });
      s.addText(new URL(url).hostname, { x: .75, y: y + .62, w: 11.8, h: .25, fontFace: 'Calibri', fontSize: 12, color: d.pal.primary, underline: true, margin: 0, hyperlink: { url } });
    });
    s.addText(spec.sources.at(-1), { x: .75, y: 6.42, w: 11.8, h: .4, fontFace: 'Calibri', fontSize: 11, color: d.pal.muted, margin: 0 });
    annotate(s);
  }
  const s = referencePage(pt ? 'Fotografias e direitos de uso' : 'Fotografías y derechos de uso');
  for (let i = 0; i < credits.length; i++) {
    const c = credits[i]; const y = 1.7 + i * 1.6;
    s.addText(`${c.titre}\n${c.auteur} · ${c.licence}`, { x: .75, y, w: 11.8, h: .75, fontFace: 'Calibri', fontSize: 17, color: d.pal.body, margin: 0 });
    s.addText('Wikimedia Commons', { x: .75, y: y + .82, w: 3.6, h: .25, fontFace: 'Calibri', fontSize: 12, color: d.pal.primary, underline: true, margin: 0, hyperlink: { url: c.url } });
    s.addText(c.licence, { x: 4.5, y: y + .82, w: 3, h: .25, fontFace: 'Calibri', fontSize: 12, color: d.pal.primary, underline: true, margin: 0, hyperlink: { url: c.licenceUrl } });
  }
  s.addText(pt ? 'Fotografias de contexto. Redimensionamento e recorte para a apresentação, sob as licenças indicadas. Não documentam ensaios ou propriedades Green Solutions.' : 'Fotografías de contexto. Redimensionado y recortado para la presentación, bajo las licencias indicadas. No documentan ensayos ni predios Green Solutions.', { x: .75, y: 5.3, w: 11.8, h: .8, fontFace: 'Calibri', fontSize: 15, color: d.pal.body, margin: 0 });
  annotate(s, credits.flatMap(c => [c.url, c.licenceUrl]));
  annotate(await d.closing({ ...spec.closing, photo: null, footer, sceau: join(here, 'sceau-aim-clair.png') }));
  const out = join(root, 'public/documents/countries'); mkdirSync(out, { recursive: true });
  const pptx = join(out, `${spec.fichier}.pptx`);
  await d.save(pptx);
  execFileSync(process.env.LIBREOFFICE_BIN ?? 'soffice', ['--headless', '--norestore', '--convert-to', 'pdf', '--outdir', out, pptx], { stdio: 'pipe', timeout: 180000 });
  return pptx;
}
