import { createRequire } from "node:module";
import { readFileSync, existsSync } from "node:fs";
import sharp from "sharp";

const require = createRequire(import.meta.url);
const PptxGenJS = require("pptxgenjs");

export const W = 13.333;
export const H = 7.5;

const BODY = "Calibri";
const HEAD = "Cambria";
const BODY_RTL = "Arial";
const HEAD_RTL = "Arial";

// Recadre au ratio exact de la zone de destination : pptxgenjs n'a pas de vrai
// "cover" — l'option sizing étire l'image au lieu de la rogner.
export async function cover(file, wIn, hIn, { gravity = "centre" } = {}) {
  const px = Math.round(wIn * 150);
  const py = Math.round(hIn * 150);
  const buf = await sharp(file)
    .resize(px, py, { fit: "cover", position: gravity })
    .jpeg({ quality: 86 })
    .toBuffer();
  return `image/jpeg;base64,${buf.toString("base64")}`;
}

export async function tint(file, wIn, hIn, rgba) {
  const px = Math.round(wIn * 150);
  const py = Math.round(hIn * 150);
  const base = await sharp(file).resize(px, py, { fit: "cover" }).toBuffer();
  const veil = Buffer.from(
    `<svg width="${px}" height="${py}"><rect width="${px}" height="${py}" fill="${rgba}"/></svg>`,
  );
  const buf = await sharp(base)
    .composite([{ input: veil, blend: "over" }])
    .jpeg({ quality: 86 })
    .toBuffer();
  return `image/jpeg;base64,${buf.toString("base64")}`;
}

export function nf(locale) {
  return (v, opts = {}) => new Intl.NumberFormat(locale, opts).format(v);
}

export class Deck {
  constructor({ palette, locale, rtl = false }) {
    this.p = new PptxGenJS();
    this.p.layout = "LAYOUT_WIDE";
    this.pal = palette;
    this.locale = locale;
    this.rtl = rtl;
    this.n = 0;
  }

  get align() {
    return this.rtl ? "right" : "left";
  }

  // En RTL, chaque bloc de texte doit porter rtlMode, et Cambria n'a pas de
  // glyphes arabes — on substitue une police qui en a, sans toucher aux appels.
  #prep(s) {
    if (!this.rtl) return s;
    const orig = s.addText.bind(s);
    s.addText = (txt, opts = {}) =>
      orig(txt, {
        ...opts,
        rtlMode: true,
        fontFace: opts.fontFace === HEAD ? HEAD_RTL : BODY_RTL,
      });
    return s;
  }

  #base(bg) {
    const s = this.p.addSlide();
    s.background = { color: bg ?? this.pal.light };
    return this.#prep(s);
  }

  #foot(s, label, dark = false) {
    this.n += 1;
    s.addText(label, {
      x: 0.55,
      y: H - 0.52,
      w: 9,
      h: 0.3,
      fontSize: 9.5,
      color: dark ? "FFFFFF" : this.pal.muted,
      transparency: dark ? 45 : 20,
      fontFace: BODY,
      isTextBox: true,
      margin: 0,
      align: this.align,
    });
    s.addText(String(this.n), {
      x: W - 1.15,
      y: H - 0.52,
      w: 0.6,
      h: 0.3,
      fontSize: 9.5,
      color: dark ? "FFFFFF" : this.pal.muted,
      transparency: dark ? 45 : 20,
      fontFace: BODY,
      isTextBox: true,
      margin: 0,
      align: "right",
    });
  }

  // Couverture : panneau sombre + photo, à la charte du dossier Tunisie
  async cover({
    photo,
    officiel,
    title,
    lieu,
    subtitle,
    marques,
    mention,
    footer,
    flag,
    logo,
  }) {
    const s = this.#prep(this.p.addSlide());
    const PANEL = 6.86;
    const M = 0.72;
    const NOIR = "0D0D0D";
    const VERT = "8BC34A";

    // En RTL le panneau passe à droite : le lecteur commence par ce côté.
    const px = this.rtl ? W - PANEL : 0;
    const photoX = this.rtl ? 0 : PANEL;
    const tx = this.rtl ? px + M : M;
    const tw = PANEL - 2 * M;
    const ali = this.rtl ? "right" : "left";

    s.background = { color: NOIR };
    if (photo && existsSync(photo)) {
      s.addImage({
        data: await cover(photo, W - PANEL, H),
        x: photoX,
        y: 0,
        w: W - PANEL,
        h: H,
      });
    }
    s.addShape(this.p.ShapeType.rect, { x: px, y: 0, w: PANEL, h: H, fill: { color: NOIR } });

    s.addText("GREEN SOLUTIONS GROUP", {
      x: tx,
      y: 0.62,
      w: tw - 1.0,
      h: 0.32,
      fontSize: 11,
      bold: true,
      color: VERT,
      charSpacing: 0.8,
      fontFace: BODY,
      isTextBox: true,
      margin: 0,
      align: ali,
    });

    if (logo && existsSync(logo)) {
      s.addImage({
        path: logo,
        x: this.rtl ? px + M : M + tw - 0.66,
        y: 0.5,
        w: 0.66,
        h: 0.66,
      });
    }

    // Le drapeau occupe le quart droit du panneau, à hauteur du titre.
    const fw = 2.15;
    const fh = fw * (2 / 3);
    const fx = this.rtl ? px + M : px + PANEL - M - fw;
    if (flag && existsSync(flag)) {
      s.addImage({ path: flag, x: fx, y: 1.52, w: fw, h: fh });
      s.addShape(this.p.ShapeType.rect, {
        x: fx,
        y: 1.52,
        w: fw,
        h: fh,
        fill: { type: "none" },
        line: { color: "3A3A3A", width: 0.75 },
      });
    }

    // Le titre s'arrête avant le drapeau : « UNITED STATES OF AMERICA » passait
    // dessous quand la largeur était fixe.
    const titre = officiel ?? title;
    const tiw = PANEL - 2 * M - fw - 0.25;
    s.addText(titre, {
      x: this.rtl ? px + PANEL - M - tiw : tx,
      y: 1.42,
      w: tiw,
      h: 1.35,
      fontSize: titre.length > 21 ? 24 : 28,
      bold: true,
      color: "FFFFFF",
      fontFace: HEAD,
      isTextBox: true,
      margin: 0,
      align: ali,
      valign: "top",
      lineSpacingMultiple: 1.1,
    });

    s.addShape(this.p.ShapeType.rect, {
      x: this.rtl ? px + PANEL - M - 3.05 : tx,
      y: 3.16,
      w: 3.05,
      h: 0.05,
      fill: { color: this.pal.accent },
    });

    s.addText(lieu, {
      x: tx,
      y: 3.46,
      w: tw,
      h: 0.42,
      fontSize: 16,
      bold: true,
      color: this.pal.accent,
      fontFace: HEAD,
      isTextBox: true,
      margin: 0,
      align: ali,
    });

    s.addText(subtitle, {
      x: tx,
      y: 4.12,
      w: tw,
      h: 1.0,
      fontSize: 14.5,
      color: "FFFFFF",
      fontFace: BODY,
      isTextBox: true,
      margin: 0,
      align: ali,
      valign: "top",
      lineSpacingMultiple: 1.28,
    });

    s.addText(marques, {
      x: tx,
      y: 5.35,
      w: tw,
      h: 0.38,
      fontSize: 11,
      bold: true,
      color: VERT,
      fontFace: BODY,
      isTextBox: true,
      margin: 0,
      align: ali,
    });

    s.addText(mention, {
      x: tx,
      y: 6.62,
      w: tw,
      h: 0.34,
      fontSize: 8.5,
      color: "9A9A9A",
      fontFace: BODY,
      isTextBox: true,
      margin: 0,
      align: ali,
    });

    this.n = 0;
    return s;
  }

  #title(s, title, kicker) {
    if (kicker) {
      s.addText(kicker, {
        x: 0.65,
        y: 0.45,
        w: 11.5,
        h: 0.3,
        fontSize: 11.5,
        bold: true,
        color: this.pal.accent,
        charSpacing: 2,
        fontFace: BODY,
        isTextBox: true,
        margin: 0,
        align: this.align,
      });
    }
    s.addText(title, {
      x: 0.65,
      y: kicker ? 0.8 : 0.55,
      w: 11.9,
      h: 0.8,
      fontSize: 30,
      bold: true,
      color: this.pal.dark,
      fontFace: HEAD,
      isTextBox: true,
      margin: 0,
      align: this.align,
    });
  }

  // Grands chiffres
  stats({ kicker, title, items, note, footer }) {
    const s = this.#base();
    this.#title(s, title, kicker);
    const n = items.length;
    const gap = 0.3;
    const cw = (W - 1.3 - gap * (n - 1)) / n;
    items.forEach((it, i) => {
      const x = 0.65 + i * (cw + gap);
      s.addShape(this.p.ShapeType.roundRect, {
        x,
        y: 2.05,
        w: cw,
        h: 2.75,
        fill: { color: this.pal.tintBg },
        line: { color: this.pal.tintLine, width: 0.75 },
        rectRadius: 0.1,
      });
      s.addText(it.value, {
        x: x + 0.2,
        y: 2.35,
        w: cw - 0.4,
        h: 1.05,
        fontSize: it.value.length > 9 ? 30 : 38,
        bold: true,
        color: this.pal.primary,
        fontFace: HEAD,
        isTextBox: true,
        margin: 0,
        align: "center",
      });
      s.addText(it.label, {
        x: x + 0.22,
        y: 3.45,
        w: cw - 0.44,
        h: 1.15,
        fontSize: 12.5,
        color: this.pal.body,
        fontFace: BODY,
        isTextBox: true,
        margin: 0,
        align: "center",
        valign: "top",
        lineSpacingMultiple: 1.18,
      });
    });
    if (note) {
      s.addText(note, {
        x: 0.65,
        y: 5.15,
        w: W - 1.3,
        h: 1.2,
        fontSize: 13.5,
        color: this.pal.body,
        fontFace: BODY,
        isTextBox: true,
        margin: 0,
        align: this.align,
        valign: "top",
        lineSpacingMultiple: 1.3,
      });
    }
    this.#foot(s, footer);
    return s;
  }

  // Texte + photo
  async split({ kicker, title, bullets, photo, caption, footer, photoLeft = false, gravity }) {
    const s = this.#base();
    this.#title(s, title, kicker);
    const pw = 5.55;
    const ph = 4.15;
    const px = photoLeft ? 0.65 : W - 0.65 - pw;
    const tx = photoLeft ? px + pw + 0.6 : 0.65;
    const tw = W - 1.3 - pw - 0.6;

    if (photo && existsSync(photo)) {
      s.addImage({ data: await cover(photo, pw, ph, { gravity }), x: px, y: 1.95, w: pw, h: ph });
      if (caption) {
        s.addText(caption, {
          x: px,
          y: 1.95 + ph + 0.12,
          w: pw,
          h: 0.5,
          fontSize: 10,
          italic: true,
          color: this.pal.muted,
          fontFace: BODY,
          isTextBox: true,
          margin: 0,
          align: photoLeft ? "left" : "right",
        });
      }
    }
    s.addText(
      bullets.map((b, i) => ({
        text: b,
        options: { bullet: true, breakLine: i < bullets.length - 1, paraSpaceAfter: 11 },
      })),
      {
        x: tx,
        y: 1.95,
        w: tw,
        h: ph + 0.5,
        fontSize: 14,
        color: this.pal.body,
        fontFace: BODY,
        isTextBox: true,
        margin: 0,
        align: this.align,
        valign: "top",
        lineSpacingMultiple: 1.22,
      },
    );
    this.#foot(s, footer);
    return s;
  }

  // Un format code OOXML rend son séparateur décimal selon la locale du poste
  // qui ouvre le fichier : « 18.0 » devenait « 18,0 » dans un dossier anglais
  // converti sur une machine française. Le préfixe [$-LCID] le fige.
  #fmt(code) {
    if (!code || /^\[\$-/.test(code)) return code;
    const lcid = { en: "409", fr: "40C", es: "C0A", ar: "401" }[this.locale.slice(0, 2)];
    return lcid ? `[$-${lcid}]${code}` : code;
  }

  // Graphique natif + lecture
  chart({ kicker, title, type, data, opts = {}, reading, footer }) {
    const s = this.#base();
    this.#title(s, title, kicker);
    const cw = reading ? 8.05 : W - 1.3;
    s.addChart(type, data, {
      x: 0.65,
      y: 1.95,
      w: cw,
      h: 4.35,
      chartColors: this.pal.series,
      showTitle: false,
      showLegend: data.length > 1,
      legendPos: "b",
      legendFontSize: 11,
      legendFontFace: BODY,
      showValue: true,
      dataLabelFontSize: 11,
      dataLabelFontFace: BODY,
      // Sur un camembert l'étiquette est posée sur le segment coloré ; ailleurs
      // elle flotte au-dessus de la barre, sur le fond clair de la diapositive.
      dataLabelColor: /pie|doughnut/.test(type) ? "FFFFFF" : this.pal.dark,
      valAxisMinVal: 0,
      catAxisLabelColor: this.pal.muted,
      valAxisLabelColor: this.pal.muted,
      catAxisLabelFontSize: 11,
      valAxisLabelFontSize: 11,
      catAxisLabelFontFace: BODY,
      valAxisLabelFontFace: BODY,
      valGridLine: { color: this.pal.tintLine, size: 0.75 },
      catGridLine: { style: "none" },
      ...opts,
      dataLabelFormatCode: this.#fmt(opts.dataLabelFormatCode),
    });
    if (reading) {
      s.addShape(this.p.ShapeType.roundRect, {
        x: 9.05,
        y: 1.95,
        w: 3.6,
        h: 4.35,
        fill: { color: this.pal.tintBg },
        line: { color: this.pal.tintLine, width: 0.75 },
        rectRadius: 0.1,
      });
      s.addText(reading.head, {
        x: 9.3,
        y: 2.2,
        w: 3.1,
        h: 0.5,
        fontSize: 13,
        bold: true,
        color: this.pal.primary,
        fontFace: HEAD,
        isTextBox: true,
        margin: 0,
        align: this.align,
      });
      s.addText(reading.body, {
        x: 9.3,
        y: 2.8,
        w: 3.1,
        h: 3.3,
        fontSize: 12,
        color: this.pal.body,
        fontFace: BODY,
        isTextBox: true,
        margin: 0,
        align: this.align,
        valign: "top",
        lineSpacingMultiple: 1.25,
      });
    }
    this.#foot(s, footer);
    return s;
  }

  // Cartes (cas régionaux)
  async cards({ kicker, title, items, footer }) {
    const s = this.#base();
    this.#title(s, title, kicker);
    const n = items.length;
    const gap = 0.32;
    const cw = (W - 1.3 - gap * (n - 1)) / n;
    const ih = 1.85;
    for (let i = 0; i < n; i++) {
      const it = items[i];
      const x = 0.65 + i * (cw + gap);
      s.addShape(this.p.ShapeType.roundRect, {
        x,
        y: 1.95,
        w: cw,
        h: 4.45,
        fill: { color: this.pal.tintBg },
        line: { color: this.pal.tintLine, width: 0.75 },
        rectRadius: 0.1,
      });
      if (it.photo && existsSync(it.photo)) {
        s.addImage({ data: await cover(it.photo, cw, ih), x, y: 1.95, w: cw, h: ih });
      }
      s.addText(it.head, {
        x: x + 0.22,
        y: 1.95 + ih + 0.18,
        w: cw - 0.44,
        h: 0.42,
        fontSize: 15,
        bold: true,
        color: this.pal.primary,
        fontFace: HEAD,
        isTextBox: true,
        margin: 0,
        align: this.align,
      });
      if (it.metric) {
        s.addText(it.metric, {
          x: x + 0.22,
          y: 1.95 + ih + 0.62,
          w: cw - 0.44,
          h: 0.36,
          fontSize: 12.5,
          bold: true,
          color: this.pal.accentDark,
          fontFace: BODY,
          isTextBox: true,
          margin: 0,
          align: this.align,
        });
      }
      s.addText(
        it.lines.map((l, j) => ({
          text: l,
          options: { bullet: true, breakLine: j < it.lines.length - 1, paraSpaceAfter: 7 },
        })),
        {
          x: x + 0.22,
          y: 1.95 + ih + (it.metric ? 1.02 : 0.62),
          w: cw - 0.44,
          h: 4.45 - ih - (it.metric ? 1.2 : 0.8),
          fontSize: 11.5,
          color: this.pal.body,
          fontFace: BODY,
          isTextBox: true,
          margin: 0,
          align: this.align,
          valign: "top",
        lineSpacingMultiple: 1.16,
        },
      );
    }
    this.#foot(s, footer);
    return s;
  }

  // Étapes numérotées
  steps({ kicker, title, items, note, footer }) {
    const s = this.#base();
    this.#title(s, title, kicker);
    const n = items.length;
    const gap = 0.3;
    const cw = (W - 1.3 - gap * (n - 1)) / n;
    items.forEach((it, i) => {
      const x = 0.65 + i * (cw + gap);
      s.addShape(this.p.ShapeType.roundRect, {
        x,
        y: 2.05,
        w: cw,
        h: 3.1,
        fill: { color: this.pal.tintBg },
        line: { color: this.pal.tintLine, width: 0.75 },
        rectRadius: 0.1,
      });
      s.addShape(this.p.ShapeType.ellipse, {
        x: x + 0.25,
        y: 2.3,
        w: 0.62,
        h: 0.62,
        fill: { color: this.pal.primary },
      });
      s.addText(String(i + 1), {
        x: x + 0.25,
        y: 2.3,
        w: 0.62,
        h: 0.62,
        fontSize: 16,
        bold: true,
        color: "FFFFFF",
        fontFace: HEAD,
        isTextBox: true,
        margin: 0,
        align: "center",
        valign: "middle",
      });
      s.addText(it.head, {
        x: x + 0.25,
        y: 3.05,
        w: cw - 0.5,
        h: 0.5,
        fontSize: 14,
        bold: true,
        color: this.pal.primary,
        fontFace: HEAD,
        isTextBox: true,
        margin: 0,
        align: this.align,
      });
      s.addText(it.body, {
        x: x + 0.25,
        y: 3.6,
        w: cw - 0.5,
        h: 1.35,
        fontSize: 12,
        color: this.pal.body,
        fontFace: BODY,
        isTextBox: true,
        margin: 0,
        align: this.align,
        valign: "top",
        lineSpacingMultiple: 1.2,
      });
    });
    if (note) {
      s.addText(note, {
        x: 0.65,
        y: 5.45,
        w: W - 1.3,
        h: 0.9,
        fontSize: 12.5,
        italic: true,
        color: this.pal.muted,
        fontFace: BODY,
        isTextBox: true,
        margin: 0,
        align: this.align,
        valign: "top",
        lineSpacingMultiple: 1.25,
      });
    }
    this.#foot(s, footer);
    return s;
  }

  // Deux colonnes de texte
  columns({ kicker, title, left, right, note, footer }) {
    const s = this.#base();
    this.#title(s, title, kicker);
    const cw = (W - 1.3 - 0.6) / 2;
    [left, right].forEach((col, i) => {
      const x = 0.65 + i * (cw + 0.6);
      s.addText(col.head, {
        x,
        y: 1.95,
        w: cw,
        h: 0.45,
        fontSize: 16,
        bold: true,
        color: this.pal.primary,
        fontFace: HEAD,
        isTextBox: true,
        margin: 0,
        align: this.align,
      });
      s.addText(
        col.lines.map((l, j) => ({
          text: l,
          options: { bullet: true, breakLine: j < col.lines.length - 1, paraSpaceAfter: 10 },
        })),
        {
          x,
          y: 2.5,
          w: cw,
          h: note ? 2.7 : 3.6,
          fontSize: 13.5,
          color: this.pal.body,
          fontFace: BODY,
          isTextBox: true,
          margin: 0,
          align: this.align,
          valign: "top",
        lineSpacingMultiple: 1.22,
        },
      );
    });
    if (note) {
      s.addShape(this.p.ShapeType.roundRect, {
        x: 0.65,
        y: 5.3,
        w: W - 1.3,
        h: 1.05,
        fill: { color: this.pal.tintBg },
        line: { color: this.pal.tintLine, width: 0.75 },
        rectRadius: 0.08,
      });
      s.addText(note, {
        x: 0.9,
        y: 5.45,
        w: W - 1.8,
        h: 0.78,
        fontSize: 11,
        color: this.pal.muted,
        fontFace: BODY,
        isTextBox: true,
        margin: 0,
        align: this.align,
        valign: "top",
        lineSpacingMultiple: 1.18,
      });
    }
    this.#foot(s, footer);
    return s;
  }

  // Clôture
  async closing({ photo, title, body, contact, footer, sceau }) {
    const s = this.#prep(this.p.addSlide());
    if (photo && existsSync(photo)) {
      s.addImage({
        data: await tint(photo, W, H, "rgba(6,32,22,0.74)"),
        x: 0,
        y: 0,
        w: W,
        h: H,
      });
    } else {
      s.background = { color: this.pal.dark };
    }
    s.addText(title, {
      x: 0.9,
      y: 2.3,
      w: 11,
      h: 1.1,
      fontSize: 34,
      bold: true,
      color: "FFFFFF",
      fontFace: HEAD,
      isTextBox: true,
      margin: 0,
      align: this.align,
    });
    s.addText(body, {
      x: 0.9,
      y: 3.5,
      w: 9.8,
      h: 1.6,
      fontSize: 15,
      color: "FFFFFF",
      transparency: 12,
      fontFace: BODY,
      isTextBox: true,
      margin: 0,
      align: this.align,
      lineSpacingMultiple: 1.3,
    });
    s.addText(contact, {
      x: 0.9,
      y: 5.3,
      w: 11,
      h: 0.5,
      fontSize: 14,
      bold: true,
      color: this.pal.accent,
      fontFace: BODY,
      isTextBox: true,
      margin: 0,
      align: this.align,
    });

    // Le sceau du groupe, qui signe le document — une seule fois, sur la
    // dernière page, comme au pied du site.
    //
    // Une version claire : cette page est toujours sombre, photo teintée ou
    // aplat, et le sceau imprimé en vert foncé n'y serait pas lisible. Il tient
    // le coin sous la ligne de contact (qui s'arrête à 5,8) et au-dessus du
    // pied de page (qui commence à 6,98), du côté opposé à la lecture pour ne
    // jamais croiser le texte : à droite en LTR, à gauche en RTL.
    if (sceau && existsSync(sceau)) {
      // 1,15 : l'adresse gravée autour de l'anneau est le plus petit texte du
      // dossier, et en dessous elle cesse de se lire.
      const SW = 1.15;
      s.addImage({
        path: sceau,
        x: this.rtl ? 0.55 : W - 0.55 - SW,
        y: 5.68,
        w: SW,
        h: SW,
        transparency: 15,
      });
    }

    this.#foot(s, footer, true);
    return s;
  }

  save(file) {
    return this.p.writeFile({ fileName: file });
  }
}

export const PALETTES = {
  sable: {
    primary: "1F5C3A",
    dark: "123324",
    accent: "E3B23C",
    accentDark: "A97C12",
    body: "33423A",
    muted: "6B7C72",
    light: "FBFAF6",
    tintBg: "F1F4EF",
    tintLine: "DCE4DA",
    series: ["1F5C3A", "E3B23C", "76A489", "C9772E", "4E7D64"],
  },
  nil: {
    primary: "1C5A73",
    dark: "0E3546",
    accent: "E0A33E",
    accentDark: "A3701A",
    body: "31424A",
    muted: "6C8089",
    light: "FAFBFB",
    tintBg: "EDF3F5",
    tintLine: "D6E2E7",
    series: ["1C5A73", "E0A33E", "5E93A8", "C2703A", "3C7285"],
  },
  desert: {
    primary: "2C6E49",
    dark: "16412B",
    accent: "D9A441",
    accentDark: "9C6C12",
    body: "364239",
    muted: "6F7D71",
    light: "FCFAF5",
    tintBg: "F2F1E8",
    tintLine: "E0DFD0",
    series: ["2C6E49", "D9A441", "7FA88C", "BE7A3C", "4F8663"],
  },
  vigne: {
    primary: "6B2A44",
    dark: "3F162A",
    accent: "C9A227",
    accentDark: "8F6D0F",
    body: "3F3138",
    muted: "7C6B73",
    light: "FCFAFA",
    tintBg: "F5EFF1",
    tintLine: "E5D9DE",
    series: ["6B2A44", "C9A227", "9E6079", "5C7D5A", "A8724C"],
  },
  plaine: {
    primary: "1D4E6B",
    dark: "0F2E40",
    accent: "D98C2B",
    accentDark: "9A5F12",
    body: "2F3E47",
    muted: "6B7D87",
    light: "FAFBFC",
    tintBg: "EEF2F5",
    tintLine: "D8E1E7",
    series: ["1D4E6B", "D98C2B", "5A8BA6", "8FAF5B", "B25C3C"],
  },
};
