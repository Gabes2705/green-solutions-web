import type { CSSProperties } from "react";
import styles from "./Hero.module.css";
import {
  ART_H,
  ART_W,
  BEADS,
  DEPTH_MARKS,
  DROP_FALL,
  DROP_TOP,
  EMITTER_X,
  FLOWS,
  GROUND,
  GROUND_TICKS,
  PLANTS,
  PULSES,
  SAPLING,
  WETTING,
  type Plant,
} from "./plate-geometry";

const css = (vars: Record<string, string | number>) => vars as CSSProperties;

/** Roots of one plant, drawn from the surface down. */
function Roots({ plant }: { plant: Plant }) {
  return (
    <>
      {plant.roots.map((rt, i) => (
        <path
          key={i}
          d={rt.d}
          pathLength={1}
          className={`${styles.root} ${rt.tier === 1 ? styles.tier1 : rt.tier === 2 ? styles.tier2 : styles.tier3}`}
          style={css({ "--delay": `${Math.round(560 + rt.t * 900 + rt.tier * 140)}ms` })}
        />
      ))}
    </>
  );
}

/** Stem and leaves of one plant, above the ground line. */
function Shoot({ plant }: { plant: Plant }) {
  return (
    <>
      <path
        d={plant.stem}
        pathLength={1}
        className={`${styles.stem} ${plant.id === "s" ? styles.trunk : ""}`}
        style={css({ "--delay": `${plant.id === "s" ? 420 : 240}ms` })}
      />
      {plant.leaves.map((l, i) => (
        <g key={i} transform={`translate(${l.x} ${l.y}) rotate(${l.deg})`}>
          <g className={styles.leaf} style={css({ "--delay": `${l.delay}ms` })}>
            <path d={l.d} className={styles.leafBody} />
            <path d={l.rib} className={styles.leafRib} />
          </g>
        </g>
      ))}
    </>
  );
}

/**
 * The cover's drawing: a soil section with the drip line above it. Every part
 * carries the name of the technology it stands for, so that the entry points
 * below can light up the part they are about.
 */
export default function HeroPlate() {
  return (
    <svg
      className={styles.plate}
      viewBox={`0 0 ${ART_W} ${ART_H}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <pattern id="hatch-a" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
          <line x1="0" y1="0" x2="0" y2="9" stroke="#fff" strokeOpacity="0.15" strokeWidth="1" />
        </pattern>
        <pattern id="hatch-b" width="15" height="15" patternUnits="userSpaceOnUse" patternTransform="rotate(-38)">
          <line x1="0" y1="0" x2="0" y2="15" stroke="#fff" strokeOpacity="0.12" strokeWidth="1" />
        </pattern>
        <pattern id="hatch-c" width="26" height="26" patternUnits="userSpaceOnUse">
          <circle cx="5" cy="7" r="1.6" fill="#fff" fillOpacity="0.17" />
          <circle cx="18" cy="19" r="2.4" fill="#fff" fillOpacity="0.12" />
          <circle cx="21" cy="5" r="1.1" fill="#fff" fillOpacity="0.15" />
        </pattern>
        <radialGradient id="gel" cx="35%" cy="32%" r="75%">
          <stop offset="0" stopColor="#fff" stopOpacity="0.6" />
          <stop offset="0.55" stopColor="#9be8df" stopOpacity="0.42" />
          <stop offset="1" stopColor="#9be8df" stopOpacity="0.18" />
        </radialGradient>
      </defs>

      {/* ---- the ground: three horizons, shown by hatching rather than fill ---- */}
      <g className={styles.soil}>
        {/* the soil runs past both sides of the artboard (the page can be wider than the drawing) */}
        <rect x="-1200" y={GROUND} width={ART_W + 2400} height="140" fill="url(#hatch-a)" />
        <rect x="-1200" y="680" width={ART_W + 2400} height="160" fill="url(#hatch-b)" />
        <rect x="-1200" y="840" width={ART_W + 2400} height="160" fill="url(#hatch-c)" />
        <path className={styles.horizon} d="M-1200 680H0C200 672 420 690 640 681S1040 671 1240 682 1500 691 1600 681H2800" />
        <path className={styles.horizon} d="M-1200 840H0C230 832 400 850 700 841S1100 831 1300 843 1520 850 1600 841H2800" />
        <path className={styles.ticks} d={GROUND_TICKS} />
      </g>

      {/* ---- depth scale ---- */}
      <g className={`${styles.scale} ${styles.keepText}`}>
        <path className={styles.scaleLine} d={`M640 ${GROUND}V${DEPTH_MARKS[DEPTH_MARKS.length - 1].y}`} />
        {DEPTH_MARKS.map((m) => (
          <g key={m.cm}>
            <path className={styles.scaleLine} d={`M640 ${m.y}h12`} />
            {/* the 0 sits just under the surface: above it the numeral would be white on paper */}
            <text x="662" y={m.y + (m.cm === 0 ? 19 : 5)}>
              {m.cm}
              {m.cm === 80 ? " cm" : ""}
            </text>
          </g>
        ))}
      </g>

      {/* ---- leader from the detail circle to the roots it magnifies ---- */}
      <g className={styles.detailMark}>
        <path d="M1084 730H990" />
        <circle cx="1118" cy="730" r="34" fill="none" />
        <circle cx="1118" cy="730" r="2.6" className={styles.dot} />
      </g>

      {/* ---- roots: nutrition ---- */}
      <g data-p="fertilisation">
        {PLANTS.map((p) => (
          <Roots key={p.id} plant={p} />
        ))}
      </g>

      {/* ---- the Paulownia sapling and its deep root ---- */}
      <g data-p="paulownia">
        <Roots plant={SAPLING} />
        <Shoot plant={SAPLING} />
      </g>

      {/* ---- wetting front, flow and root pulses: the water ---- */}
      <g data-p="eau-restructuree">
        {WETTING.map((w, i) => (
          <path
            key={i}
            d={w.d}
            className={styles.arc}
            style={css({ "--o": `${w.delay}ms`, "--ox": `${EMITTER_X}px`, "--oy": `${GROUND}px` })}
          />
        ))}
        {FLOWS.map((d, i) => (
          <path key={i} d={d} className={styles.flow} style={css({ "--o": `${1250 + i * 150}ms` })} />
        ))}
      </g>
      <g data-p="fertilisation">
        {PULSES.map((p, i) => (
          <path
            key={i}
            d={p.d}
            pathLength={1}
            className={styles.pulse}
            style={css({ "--o": `${p.delay}ms` })}
          />
        ))}
      </g>

      {/* ---- the gel beads: water held next to the roots ---- */}
      <g data-p="retention-eau">
        {BEADS.map((b, i) => (
          <g key={i} className={styles.bead}>
            <g className={styles.beadInner} style={css({ "--d": `${b.delay}ms` })}>
              <circle cx={b.x} cy={b.y} r={b.r} fill="url(#gel)" className={styles.beadBody} />
              <path
                className={styles.beadGlint}
                d={`M${(b.x - b.r * 0.55).toFixed(1)} ${(b.y - b.r * 0.12).toFixed(1)}A${(b.r * 0.6).toFixed(1)} ${(b.r * 0.6).toFixed(1)} 0 0 1 ${(b.x - b.r * 0.12).toFixed(1)} ${(b.y - b.r * 0.58).toFixed(1)}`}
              />
            </g>
          </g>
        ))}
      </g>

      {/* ---- above the ground: plants and drip line ---- */}
      <g data-p="protection">
        {PLANTS.map((p) => (
          <Shoot key={p.id} plant={p} />
        ))}
      </g>

      <g data-p="eau-restructuree">
        <path className={styles.wire} d="M990 100V150M1560 100V150" />
        <rect className={styles.tube} x="975" y="150" width="600" height="9" rx="4.5" />
        <path className={styles.emitter} d={`M${EMITTER_X - 10} 159h20l-4 15h-12z`} />
        <g transform={`translate(${EMITTER_X} ${DROP_TOP})`}>
          <g className={styles.drop} style={css({ "--fall": `${DROP_FALL}px` })}>
            <path d="M0 -17C7 -8 11 -1 11 5a11 11 0 1 1-22 0C-11 -1 -7 -8 0 -17Z" />
          </g>
        </g>
      </g>
    </svg>
  );
}
