---
version: 1
slug: "src-components-hero-tsx"
primary_target: "src/components/Hero.tsx"
related_targets: []
---

# Surface brief: home cover (src/components/Hero.tsx)

## Scope and mode

Persuade. The home page cover, in all 14 languages. It replaces the incumbent look: blurred nature video with a glass droplet, rotating 3D logo badge, glossy 3D buttons and floating film widget. Every section below the cover stays untouched.

## Audience, job, action, proof, constraints

Professionals first (distributors, agro-industrial groups, cooperatives, universities), smallholders second. Job: judge within seconds whether this supplier is credible and cuts irrigation water. Action: ask for a quote. Proof: the figures already on the proof bar (+30 à +100 %, −40 à −70 %, 15 pilot trials, SOHISCERT and EU Bio), already translated. Must keep: navigation links, language switcher, quote action, partner pages, the "impact économique par hectare" link, the five technology doors, access to the 33 s film. All wording comes from `src/lib/content.ts` or is added in all 14 languages. Arabic is right to left. Reduced motion respected. No heavy media in the first load.

## Chosen direction and memorable moment

Planche du sol (soil plate). Memorable moment: a drip falls, rings the soil, water runs along the roots into gel beads that swell, and a pulse of light travels the root network.

## Unresolved decisions

- Whether the title block should replace the proof bar further down the page (left as is for now).

## Direction contract

THESIS: The cover is one drafted soil plate: a cutaway that shows irrigation water being caught by gel at the roots, so the mechanism is understood before any copy is read. It refuses the stock field photo hero and the dark neon agritech dashboard.

OWN-WORLD: Engineering drawing grammar. Mineral-white ground (cool, faintly green, never cream) above a committed field of saturated living green that holds white hairlines; deep bottle-green ink for type; water-teal only for flowing water; soil shown by hatching, not fill. Components: depth scale in cm, callout leaders, dimension lines, a ruled title block, square-cornered hairline controls. Headline in Bricolage Grotesque.

STORY: A professional sees water enter, be held and reach the roots; reads the five technologies as parts of one system through the doors; trusts it because the title block carries real certifications and trial figures; acts through the quote button.

FIRST VIEWPORT: 1440x900. White air above, green section below, split by the ground line near y=440. Top-left: three-line H1 at 96px with a dimension line under the second line labelled with the −40 à −70 % figure; solid deep-green quote button and the calculator link beneath. Right: drip emitter, falling drop and crop above the ground line. Below: full-bleed drawing with roots, gel beads, flow dashes and a real-photo detail circle; five door tabs along the bottom edge; ruled title block bottom right.

FORM: Candidate 5 of my ordered list (irrigation hydraulic schematic), seed key fe283d71. Raises: obi-band proof strip as the title block; ebru drop ripples; understory root pulses; doll-program committed hue; plankton calm after motion.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Recorded deviations from the contract (finish review, 2026-10-13)

Each one is a decision, not an oversight.

- **Headline size.** The contract said 96px. The build sizes the headline to the room above the ground line and to the longest line of the language: about 75px at 1440x900, 55 to 60px at 1366x768, about 50px in a 700px-high window, 96px only on tall screens. The ground line cannot rise further without cutting the soil section, which must hold roots to 80 cm, the title block and the door tabs.
- **Ground line.** The contract said near y=440 at 1440x900. The build puts it near y=470 to 490: the soil section takes 46% of the height, minus a 16px lift that keeps the root tips and the 80 cm mark clear of the door tabs.
- **Title block position.** The contract said bottom right. The build puts it bottom left (and bottom right in right-to-left languages, because the whole drawing mirrors), since the roots, the gel and the young Paulownia occupy the right of the soil section.
- **Annotation.** The drawing carries one depth scale and one callout leader (the photo circle). No drawing title, scale or revision fields, and no horizon labels: the first viewport is kept calm and every extra word would need fourteen translations.
- **Type.** Latin and Greek: Bricolage Grotesque with tight tracking. Arabic: IBM Plex Sans Arabic 700, no tracking, a little more leading (fetched only on Arabic pages). Chinese: the visitor's own system sans, no tracking. A Chinese web face would add over a hundred font slices for a headline of about ten characters.
- **Height floor.** The cover is never shorter than 700px, so on a real laptop window (about 650px high) the door tabs show their top edge and invite the scroll.
- **Order of the stacked layouts.** Below 1101px the order is headline, drawing, proof block, door tabs, the same as the order of the markup, so the keyboard follows what the eye sees.
