/**
 * Geometry of the drawing on the home cover.
 *
 * Artboard 1600 x 1000, ground line at y = 540, 4.5 units of depth per
 * centimetre. Everything is computed from fixed seeds, so the server and the
 * browser draw exactly the same roots and nothing has to be shipped as data.
 */

export const ART_W = 1600;
export const ART_H = 1000;
export const GROUND = 540;
export const EMITTER_X = 1156;

/** Where the drop hangs, and how far it falls to reach the ground. */
export const DROP_TOP = 236;
export const DROP_FALL = GROUND - 16 - DROP_TOP;

type Pt = [number, number];

/* mulberry32: a small seeded generator, so the drawing is the same on every render */
function prng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const r1 = (n: number) => Math.round(n * 10) / 10;

/** Smooth path through the points (Catmull-Rom turned into cubic curves). */
function curve(p: Pt[]): string {
  let d = `M${r1(p[0][0])} ${r1(p[0][1])}`;
  for (let i = 0; i < p.length - 1; i++) {
    const p0 = p[i - 1] ?? p[i];
    const p1 = p[i];
    const p2 = p[i + 1];
    const p3 = p[i + 2] ?? p2;
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += `C${r1(c1x)} ${r1(c1y)} ${r1(c2x)} ${r1(c2y)} ${r1(p2[0])} ${r1(p2[1])}`;
  }
  return d;
}

/** Point at fraction t (0 to 1) of a polyline, by segment. */
function along(p: Pt[], t: number): Pt {
  const n = p.length - 1;
  const s = Math.min(Math.max(t, 0), 1) * n;
  const i = Math.min(Math.floor(s), n - 1);
  const u = s - i;
  return [p[i][0] + (p[i + 1][0] - p[i][0]) * u, p[i][1] + (p[i + 1][1] - p[i][1]) * u];
}

/* ---------- roots and gel beads ---------- */

export interface RootPath {
  d: string;
  tier: 1 | 2 | 3;
  /** 0 at the surface, 1 at the deepest point: drives the order of growth */
  t: number;
}

interface Lateral {
  pts: Pt[];
  t: number;
}

function rootSystem(x0: number, depth: number, spread: number, seed: number, laterals: number) {
  const r = prng(seed);
  const roots: RootPath[] = [];
  const side: Lateral[] = [];
  const tap: Pt[] = [[x0, GROUND]];
  const steps = 8;
  for (let i = 1; i <= steps; i++) {
    const wobble = (r() - 0.5) * 26 * Math.min(1, i / 3);
    tap.push([x0 + wobble, GROUND + (depth * i) / steps]);
  }
  roots.push({ d: curve(tap), tier: 1, t: 0 });

  for (let k = 0; k < laterals; k++) {
    const t = 0.1 + (0.8 * k) / Math.max(1, laterals - 1);
    const [ax, ay] = along(tap, t);
    const dir = k % 2 === 0 ? -1 : 1;
    const len = spread * (0.5 + r() * 0.5) * (1 - 0.4 * t);
    const pts: Pt[] = [[ax, ay]];
    let cx = ax;
    let cy = ay;
    const segs = 4;
    for (let s = 1; s <= segs; s++) {
      cx += dir * (len / segs) * (0.8 + r() * 0.4);
      cy += (len / segs) * (0.16 + r() * 0.34) + (r() - 0.5) * 9;
      pts.push([cx, cy]);
    }
    roots.push({ d: curve(pts), tier: 2, t });
    side.push({ pts, t });

    const hairs = 2 + Math.floor(r() * 3);
    for (let h = 0; h < hairs; h++) {
      const u = 0.3 + (0.62 * h) / hairs + r() * 0.08;
      const [hx, hy] = along(pts, u);
      const hl = 20 + r() * 32;
      const a = (0.4 + r() * 0.9) * (r() > 0.5 ? 1 : -1);
      const hp: Pt[] = [
        [hx, hy],
        [hx + Math.sin(a) * hl * 0.55, hy + Math.cos(a) * hl * 0.55 + 2],
        [hx + Math.sin(a) * hl, hy + Math.cos(a) * hl],
      ];
      roots.push({ d: curve(hp), tier: 3, t: Math.min(1, t + 0.08 + u * 0.08) });
    }
  }
  return { roots, side, tap };
}

export interface Bead {
  x: number;
  y: number;
  r: number;
  /** ms after load: the water reaches the nearest beads first */
  delay: number;
}

function beadsAlong(side: Lateral[], seed: number, every: number, per: number, taken: Bead[]): Bead[] {
  const r = prng(seed);
  const out: Bead[] = [];
  side.forEach((lat, i) => {
    if (i % every !== 0) return;
    for (let n = 0; n < per; n++) {
      const u = Math.min(0.95, 0.4 + (n / per) * 0.42 + r() * 0.1);
      const [px, py] = along(lat.pts, u);
      const off = (8 + r() * 12) * (r() > 0.5 ? 1 : -1);
      const rad = 8 + r() * 15;
      const x = px + off * 0.5;
      const y = py + off;
      const clash = [...taken, ...out].some((b) => Math.hypot(b.x - x, b.y - y) < b.r + rad + 5);
      if (clash || y > 880) continue;
      const d = Math.hypot(x - EMITTER_X, y - GROUND);
      out.push({ x: r1(x), y: r1(y), r: r1(rad), delay: Math.round(3000 + d * 3.4) });
    }
  });
  return out;
}

/* ---------- plants above the ground ---------- */

export interface Leaf {
  x: number;
  y: number;
  deg: number;
  d: string;
  rib: string;
  delay: number;
}

const lens = (L: number, W: number) =>
  `M0 0C${r1(L * 0.3)} ${r1(-W)} ${r1(L * 0.78)} ${r1(-W * 0.9)} ${r1(L)} 0C${r1(L * 0.78)} ${r1(W * 0.9)} ${r1(L * 0.3)} ${r1(W)} 0 0Z`;

/* the broad, heart-shaped leaf of the Paulownia */
const heart = (L: number, W: number) =>
  `M0 0C${r1(-L * 0.12)} ${r1(-W * 0.55)} ${r1(L * 0.05)} ${r1(-W)} ${r1(L * 0.45)} ${r1(-W * 0.85)}C${r1(L * 0.8)} ${r1(-W * 0.7)} ${r1(L * 0.95)} ${r1(-W * 0.25)} ${r1(L)} 0C${r1(L * 0.95)} ${r1(W * 0.25)} ${r1(L * 0.8)} ${r1(W * 0.7)} ${r1(L * 0.45)} ${r1(W * 0.85)}C${r1(L * 0.05)} ${r1(W)} ${r1(-L * 0.12)} ${r1(W * 0.55)} 0 0Z`;

function stemAndLeaves(x0: number, h: number, seed: number, broad: boolean) {
  const r = prng(seed);
  const sway = (r() - 0.5) * 20;
  const stem: Pt[] = [
    [x0, GROUND],
    [x0 + sway * 0.4, GROUND - h * 0.34],
    [x0 + sway, GROUND - h * 0.68],
    [x0 + sway * 0.55, GROUND - h],
  ];
  const leaves: Leaf[] = [];
  const count = broad ? 5 : 4 + Math.floor(h / 80);
  for (let i = 0; i < count; i++) {
    const t = (broad ? 0.46 : 0.26) + (broad ? 0.5 : 0.7) * (i / (count - 1));
    const [px, py] = along(stem, t);
    const side = i % 2 === 0 ? -1 : 1;
    const deg = -90 + side * (broad ? 54 + r() * 12 : 36 + r() * 16);
    const L = broad
      ? 54 + (1 - t) * 34 + r() * 8
      : (36 + r() * 12 + 46 * (1 - t * 0.5)) * (0.62 + h / 640);
    const W = L * (broad ? 0.6 : 0.25);
    leaves.push({
      x: r1(px),
      y: r1(py),
      deg: r1(deg),
      d: broad ? heart(L, W) : lens(L, W),
      rib: `M0 0H${r1(L * 0.9)}`,
      delay: 760 + i * 70,
    });
  }
  const top = along(stem, 1);
  const Lt = broad ? 56 : 44 * (0.62 + h / 640);
  leaves.push({
    x: r1(top[0]),
    y: r1(top[1]),
    deg: -90 + (r() - 0.5) * 16,
    d: broad ? heart(Lt, Lt * 0.6) : lens(Lt, Lt * 0.25),
    rib: `M0 0H${r1(Lt * 0.9)}`,
    delay: 760 + count * 70,
  });
  return { stem: curve(stem), leaves };
}

/* ---------- the assembled drawing ---------- */

const A = rootSystem(1048, 200, 108, 11, 9);
const B = rootSystem(1250, 316, 164, 23, 13);
const C = rootSystem(1380, 226, 118, 37, 9);
const S = rootSystem(1494, 360, 80, 53, 8);

export interface Plant {
  id: string;
  stem: string;
  leaves: Leaf[];
  roots: RootPath[];
}

export const PLANTS: Plant[] = [
  { id: "a", ...stemAndLeaves(1048, 148, 5, false), roots: A.roots },
  { id: "b", ...stemAndLeaves(1250, 288, 7, false), roots: B.roots },
  { id: "c", ...stemAndLeaves(1380, 176, 9, false), roots: C.roots },
];

export const SAPLING: Plant = { id: "s", ...stemAndLeaves(1494, 240, 13, true), roots: S.roots };

const beadsB = beadsAlong(B.side, 101, 1, 2, []);
const beadsA = beadsAlong(A.side, 103, 2, 1, beadsB);
const beadsC = beadsAlong(C.side, 107, 2, 1, [...beadsB, ...beadsA]);
export const BEADS: Bead[] = [...beadsB, ...beadsA, ...beadsC];

/* the water moving from the emitter to the root zone of each plant */
const tapA = along(A.tap, 0.38);
const tapB = along(B.tap, 0.34);
const tapC = along(C.tap, 0.3);
export const FLOWS: string[] = [
  `M${EMITTER_X} ${GROUND}C${EMITTER_X - 6} ${GROUND + 44} ${r1(tapA[0] + 34)} ${r1(tapA[1] - 46)} ${r1(tapA[0])} ${r1(tapA[1])}`,
  `M${EMITTER_X} ${GROUND}C${EMITTER_X + 10} ${GROUND + 50} ${r1(tapB[0] - 46)} ${r1(tapB[1] - 50)} ${r1(tapB[0])} ${r1(tapB[1])}`,
  `M${EMITTER_X} ${GROUND}C${EMITTER_X + 36} ${GROUND + 34} ${r1(tapC[0] - 70)} ${r1(tapC[1] - 70)} ${r1(tapC[0])} ${r1(tapC[1])}`,
];

/* a short stretch of light that travels down the roots once the water has arrived */
export const PULSES: { d: string; delay: number }[] = [A, B, C].flatMap((sys, k) =>
  sys.roots
    .filter((rt) => rt.tier < 3)
    .slice(0, k === 1 ? 9 : 5)
    .map((rt, i) => ({ d: rt.d, delay: Math.round(1700 + rt.t * 700 + i * 55 + k * 90) })),
);

/** The half circles of the wetting front, spreading from the drop. */
export const WETTING = [70, 140, 220].map((rad, i) => ({
  d: `M${EMITTER_X - rad} ${GROUND}A${rad} ${r1(rad * 0.86)} 0 0 0 ${EMITTER_X + rad} ${GROUND}`,
  delay: 1110 + i * 120,
}));

/** Oblique ticks under the ground line, the way a ground is drawn on a section. */
export const GROUND_TICKS = (() => {
  let d = "";
  /* the ground does not stop at the edge of the artboard: on a wide screen the
     drawing is narrower than the page, so the ticks run on past both sides */
  for (let x = -1200; x <= ART_W + 1200; x += 24) d += `M${x} ${GROUND}l-9 11`;
  return d;
})();

/** Depth scale: one mark every 20 cm, 4.5 units to the centimetre. */
export const DEPTH_MARKS = [0, 20, 40, 60, 80].map((cm) => ({ cm, y: GROUND + cm * 4.5 }));
