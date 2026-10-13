---
name: Green Solutions, home cover
description: A drafted soil plate. White hairlines and a committed green field under mineral-white paper, set in engineering-drawing grammar.
colors:
  paper: "#f3f6f1"
  ink: "#0b2a1f"
  action: "#0e6f3f"
  action-hover: "#0a5a33"
  field-a: "#17804e"
  field-b: "#0a4a2e"
  water: "#9be8df"
  water-ink: "#167c86"
  plate-green: "rgba(8, 58, 36, 0.8)"
  film-black: "#06150e"
typography:
  claim:
    fontFamily: "Bricolage Grotesque, Manrope, system-ui, sans-serif"
    fontSize: "max(2.2rem, min(var(--fs-air), var(--fs-fit), 6rem))"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.03em"
  claim-ar:
    fontFamily: "IBM Plex Sans Arabic, Manrope, system-ui, sans-serif"
    fontSize: "same fit rule, air divisor 3.9"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "0"
  figure:
    fontFamily: "Bricolage Grotesque, Manrope, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 700
    lineHeight: 1.2
  button:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 700
    lineHeight: 1.15
  body:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "13.5px"
    fontWeight: 400
    lineHeight: 1.35
  label:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 700
    lineHeight: 1.15
  dimension:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "max(0.27em, 12px)"
    fontWeight: 600
    lineHeight: 1
rounded:
  control: "2px"
  circle: "50%"
spacing:
  hairline: "1.5px"
  xs: "8px"
  sm: "12px"
  md: "14px"
  lg: "26px"
  nav-h: "72px"
  gutter: "clamp(20px, 4.4vw, 72px)"
  lift: "16px"
components:
  button-primary:
    backgroundColor: "{colors.action}"
    textColor: "#ffffff"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "0 26px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.action-hover}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "0 26px"
    height: "52px"
  button-secondary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "#ffffff"
  nav-cta:
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0 18px"
    height: "42px"
  door-tab:
    backgroundColor: "{colors.plate-green}"
    textColor: "#ffffff"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0 16px"
    height: "56px"
  door-tab-hover:
    backgroundColor: "#ffffff"
    textColor: "{colors.ink}"
  title-block:
    backgroundColor: "{colors.plate-green}"
    textColor: "#ffffff"
    padding: "9px 14px"
    width: "min(450px, 33vw)"
  film-dialog:
    backgroundColor: "{colors.film-black}"
    textColor: "#ffffff"
    width: "min(960px, 92vw)"
---

# Design System: Green Solutions, home cover

Scope: only the home cover and the controls it owns (nav bar, restyled language switcher, quote and secondary buttons, door tabs, ruled title block, film dialog, drawing grammar). Everything below the cover and `src/app/globals.css` still follows the older site styles and is not recorded here.

## Overview

**Creative North Star: "The Soil Plate"**

The cover is one engineering plate: mineral-white paper above a ground line, a committed field of living green below it, and a soil section drawn in white hairlines that shows irrigation water caught by gel at the roots. The mechanism is meant to be understood before any copy is read. The type is deep bottle-green ink on paper; every control is a square-cornered hairline box, like a part on a drawing sheet.

Density is calm. The first viewport carries one claim, two actions, one drawing, one ruled title block and five door tabs. There are no shadows on surfaces, no gradients except the field, and no decorative colour: teal appears only where water flows.

**Key Characteristics:**
- Two grounds: paper above the ground line, a green field below it. White hairlines live only on the green; ink lines only on the paper.
- Square controls (2px corner), 1.5px strokes, solid fill only for the single quote action.
- The claim is dimensioned like a part: its second line carries a dimension line and the proof figure.
- Motion tells the mechanism once (drop, ripple, flow, swelling gel, pulse) and then stays still.
- Right-to-left is solved by mirroring the whole drawing; text inside it is counter-mirrored.

## Colors

Mineral paper, bottle-green ink, one saturated action green, a two-stop field, and a single cool teal reserved for water.

### Primary
- **Action Green** (`action`): the quote button fill, the dimension line and figure under the claim, the brand mark accent, keyboard focus rings on paper, text selection.
- **Action Green Pressed** (`action-hover`): hover state of the quote button only.

### Secondary
- **Field Green, lit** (`field-a`) and **Field Green, deep** (`field-b`): top and bottom of the vertical gradient that makes the soil field. `field-b` also backs the stacked mobile block and the photo circle.
- **Water Teal** (`water`) and **Water Ink** (`water-ink`): flowing water only. `water` for flow dashes; `water-ink` for the drop outline.

### Neutral
- **Mineral Paper** (`paper`): the air above the ground line, the translucent solid nav, the mobile menu, the pipe fill. Cool and faintly green, never cream.
- **Bottle-Green Ink** (`ink`): all type on paper, the ground line (2px), stems, leaf outlines, secondary button, nav borders at several opacities.
- **Plate Green** (`plate-green`): the translucent fill behind the title block and door tabs so white hairlines read over the drawing.
- **Film Black** (`film-black`): the film dialog only.
- White (`#fff`, with 0.34 to 0.95 alpha variants): every line, label and control on the green field.

### Named Rules
**The Water Rule.** Teal is for moving water and nothing else. It is never a button, a heading or a decoration.

**The Two Grounds Rule.** Ink on paper, white on green. A control crossing the ground line keeps the ground it sits on; it never mixes ink and white.

**The One Solid Rule.** Only the quote button is a solid colour fill at rest. Every other control is a hairline outline that fills on hover.

## Typography

**Claim Font:** Bricolage Grotesque, weights 600 to 800 (variable `--font-claim`), then Manrope, then the system sans.
**Arabic Claim Font:** IBM Plex Sans Arabic 700 (variable `--font-claim-ar`), fetched only on Arabic pages.
**Body and Label Font:** Manrope (variable `--font-sans`), weights 400 to 800.
Fraunces is loaded site-wide for the old sections and is not used on the cover.

**Character:** A condensed-feeling, tightly tracked grotesque for the claim and the figures; a quiet humanist sans for everything else. Weight 700 carries nearly every label.

### Hierarchy
- **Claim** (700, `max(2.2rem, min(air, fit, 6rem))`, line-height 1, -0.03em): three balanced lines. The size is the smaller of the room above the ground line and the room for the longest line of the language (`--len`). About 75px at 1440x900, down to 2rem on phones (caps 4.6rem tablet, 3.4rem phone). Arabic and Chinese use 0 tracking; Arabic line-height 1.12.
- **Figure** (Bricolage 700, 17px, 1.2, tabular numerals): the proof figures in the title block.
- **Button** (700, 16px, 1.15): quote and calculator link.
- **Label** (700, 15px, 1.15): door tabs (14px under 1100px, 13.5px under 420px); partner links 14px; nav links 13.5px; nav quote 14px.
- **Body** (400, 13.5px, 1.35): proof descriptions in the title block (14.5px in Arabic).
- **Dimension** (600, `max(0.27em, 12px)`): the figure on the claim's dimension line, in Action Green. Depth numerals in the drawing: 600, 18px drawing units (28px under 1100px), tabular, forced left-to-right.

### Named Rules
**The Fit Rule.** The claim is sized to its room, never to a fixed step. Do not hand-set a headline size per language or per breakpoint.

**The Own Face Rule.** Arabic gets its own display face; Chinese uses the visitor's system sans. Never let Bricolage fall back for Arabic glyphs.

## Layout

A full-viewport plate, minimum 700px high (`max(100svh, 700px)`). The drawing is a 1600 by 1000 artboard sized by the smaller of the height and 62.5vw and anchored 16px above the foot; the ground line sits at 46% of the drawing's height above that. The claim block starts under the nav (72px) in the air; the title block sits bottom start; five equal door tabs run along the foot at 10px gaps, 28px from the bottom. A single fluid gutter, `clamp(20px, 4.4vw, 72px)`, frames everything.

Tiers: at 1241px and below the nav links fold into a burger; at 1100px and below the cover stacks in the order claim, drawing, title block, doors (same as the markup and keyboard order), with the nav at 64px; at 700px and below the drawing is a cropped window on the drip and roots, the photo circle is hidden, buttons go full width and doors become two columns with the fifth spanning both. Between 1101px and 1399px wide, or under 900px high, the title block, rows and doors tighten (block bottom 84px, rows 5px, door 48px).

Spacing in use: 8, 10, 12, 14, 16, 22, 26, 28px; no single base scale. Direction is logical (`inset-inline`, `padding-inline`) so right-to-left needs no override.

## Elevation & Depth

Flat. Depth is conveyed by the two grounds, by translucent plate-green panels over the drawing, and by hairlines. The only shadow is the language menu (`0 14px 30px -14px rgba(11,42,31,0.4)`), a soft downward ambient shadow for a popup. The solid nav gains a 10px backdrop blur and a 0.14-alpha ink hairline after scroll.

### Named Rules
**The Flat Plate Rule.** Surfaces carry no shadow at rest; separation is a 1.5px line or a change of ground.

## Shapes

Square with a 2px relief on every control (buttons, nav quote, burger, language button and menu, door tabs, close button). Strokes are 1.5px at rest (title block and door borders at 0.78 white alpha), 1px for row dividers (0.4 alpha), 2px for the ground line. The one round form is the real-photo detail circle (50%, 1.5px white edge), joined to the drawing by a callout mark. Drawing line weights: roots in three tiers (2.6, 1.7, 1.1), stems 3, trunk 6, leaf outline 1.8, pipe 1.8, soil horizons 1.2.

## Components

### Buttons
- **Shape:** square, 2px corner, 52px minimum height, 26px side padding, 700 at 16px.
- **Primary (quote):** Action Green fill, white text, same-colour border. Hover darkens to Action Green Pressed.
- **Secondary (calculator link):** transparent with 1.5px ink border; hover fills ink with white text.
- **Focus:** 3px outline, 3px offset: Action Green on paper, white on the green field.

### Navigation
Fixed, 72px (64px stacked), transparent over the paper, turning 95% paper with blur and a hairline once scrolled. Brand at start (700, 15px, accent in Action Green). Links 13.5px 700 with an ink underline that draws from the reading-direction start on hover and focus. The language switcher is the shared component restyled here only: 42px high, 1.5px ink-38% border, 2px corner. Nav quote: 42px, 1.5px ink outline, fills ink on hover. Burger: 44px square, three 2px bars that become a cross. The mobile menu is a paper sheet with 54px rows, ink hairline dividers, and a full-width quote.

### Door Tabs
Five entry points to the technologies (retention-eau, eau-restructuree, fertilisation, protection, paulownia). 56px tall, plate-green fill, 0.78 white hairline, white line mark (22px, 1.5px stroke) and label. Hover or focus inverts to white with ink text. Hovering a door dims every other part of the drawing to 0.26 opacity, so each door lights its own part.

### Title Block
A ruled cartouche: 1.5px white border, plate-green fill, rows of figure plus description on a shared figures column (subgrid), 1px dividers, then a film button and the two partner links as the last ruled lines. Up to 450px wide, bottom start; static and full-width in the stacked layouts.

### Film Dialog
Native dialog, up to 960px by 92svh, film-black ground, 76% dark backdrop, 44px square close button with a white hairline at the end corner. Video at 86svh maximum.

### Drawing Grammar (signature)
White hairlines on the green: soil as hatching and dots, never fill; horizons at 0.34 alpha; one depth scale in cm to 80; one callout to the photo circle; roots, ink stems and green-tinted leaves (`rgba(23,128,78,0.14)`) above ground. Gel beads are white-edged and swell when water reaches them. Motion: roots grow over 1100ms and stems 760ms with an expo-out ease `cubic-bezier(0.22, 1, 0.36, 1)`, leaves 650ms, beads 520ms in then 950ms swell. Water runs on a 9s cycle (drop, ripple arc, dashed flow, light pulse) three times, then the drawing stays still. Hover and fade transitions are 0.2 to 0.28s. Under `prefers-reduced-motion` all drawing animation, the nav transition, the link underline and the burger transform are removed. In right-to-left the drawing is mirrored with `scaleX(-1)` and its numerals and the film arrow are counter-mirrored.

## Do's and Don'ts

### Do:
- **Do** set ink on paper and white on green, with Action Green for the single solid action.
- **Do** build new controls as 2px-cornered, 1.5px-hairline boxes that fill on hover.
- **Do** keep teal for flowing water only.
- **Do** use logical properties (`inset-inline`, `padding-inline`) and counter-mirror any text placed inside the mirrored drawing.
- **Do** draw new depth with a line or a ground change, and keep an outline of 3px with 3px offset for keyboard focus.
- **Do** add any new cover wording in all fourteen languages and size it with the fit rule.

### Don't:
- **Don't** return to the incumbent cover idiom: blurred video ground, glass droplet, rotating 3D badge, glossy buttons, floating film widget.
- **Don't** use a stock field photo hero or a dark neon dashboard look.
- **Don't** round controls beyond 2px, except the photo circle.
- **Don't** put shadows on resting surfaces, or fill soil with solid colour.
- **Don't** colour a word of the claim to emphasise it; dimension it instead.
- **Don't** loop the water cycle past three runs, or animate under reduced motion.

## Not canonized

Hard-coded values in the build that are not tokens (gaps, not repaired): white and its alpha steps (0.34, 0.4, 0.78, 0.85, 0.92, 0.94, 0.95) and the ink alpha steps (0.05, 0.14, 0.38) are literals; `plate-green` and `film-black` are literals declared only in rules, as are the drop fill `#bdeeea` and pulse `#c9f7f1`; the leaf tint `rgba(23,128,78,0.14)` duplicates `field-a`; `HeroPlate.tsx` repeats `#fff` and `#9be8df` (the `water` value) in its SVG patterns and gradient; the 2px radius, 1.5px stroke, 42/44/52/56px control heights, the expo ease and the 0.2s transition are repeated rather than named; type sizes are px literals with no scale; the cover exposes no `--shadow` or `--ease` properties.
