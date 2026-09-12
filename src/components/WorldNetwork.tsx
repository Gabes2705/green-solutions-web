"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HUB = { lat: 43.1, lng: 6.02, label: "France" }; // Le Pradet — siège

const NODES = [
  { lat: -30.5, lng: 22.9, label: "Afrique du Sud" },
  { lat: 34.0, lng: 9.5, label: "Tunisie" },
  { lat: 42.5, lng: 12.5, label: "Italie" },
  { lat: 54.0, lng: -2.0, label: "Royaume-Uni" },
  { lat: 56.1, lng: -106.3, label: "Canada" },
  { lat: 40.0, lng: -4.0, label: "Espagne" },
  { lat: 17.5, lng: -4.0, label: "Mali" },
  { lat: 18.9, lng: -72.3, label: "Caraïbes" },
  { lat: 39.8, lng: -98.5, label: "États-Unis" },
  { lat: 5.5, lng: 12.7, label: "Cameroun" },
  { lat: 9.9, lng: -9.7, label: "Guinée" },
  { lat: 14.5, lng: -14.4, label: "Sénégal" },
  { lat: 31.8, lng: -7.1, label: "Maroc" },
  { lat: 12.0, lng: -15.0, label: "Guinée-Bissau" },
  { lat: -14.2, lng: -51.9, label: "Brésil" },
  { lat: 23.9, lng: 45.1, label: "Arabie saoudite" },
  { lat: 21.5, lng: 55.9, label: "Sultanat d'Oman" },
  { lat: -0.8, lng: 15.8, label: "Congo" },
  { lat: 7.5, lng: -5.5, label: "Côte d'Ivoire" },
  { lat: 7.9, lng: 30.0, label: "Soudan du Sud" },
  { lat: 52.0, lng: 19.4, label: "Pologne" },
  { lat: 39.1, lng: 22.0, label: "Grèce" },
  { lat: 39.6, lng: -8.0, label: "Portugal" },
  { lat: 23.4, lng: 53.8, label: "Émirats arabes unis" },
  { lat: 23.6, lng: -102.5, label: "Mexique" },
  { lat: 38.9, lng: 35.2, label: "Turquie" },
  { lat: -2.5, lng: 118.0, label: "Indonésie" },
  { lat: 35.9, lng: 104.2, label: "Chine" },
];

function projectPoint(lat: number, lng: number) {
  const x = (lng + 180) * (800 / 360);
  const y = (90 - lat) * (400 / 180);
  return { x, y };
}

type Point = { x: number; y: number };

function controlPoint(start: Point, end: Point): Point {
  return { x: (start.x + end.x) / 2, y: Math.min(start.y, end.y) - 40 };
}

function curvedPath(start: Point, end: Point) {
  const c = controlPoint(start, end);
  return `M ${start.x} ${start.y} Q ${c.x} ${c.y} ${end.x} ${end.y}`;
}

/**
 * Arrowhead sitting on the destination end of the route, rotated along the
 * curve's tangent there. For a quadratic Bézier the tangent at the end point
 * runs from the control point to the end point.
 */
function arrowTransform(start: Point, end: Point) {
  const c = controlPoint(start, end);
  const rawAngle = (Math.atan2(end.y - c.y, end.x - c.x) * 180) / Math.PI;
  // rounded to avoid a server/client floating-point mismatch in the last
  // decimals of atan2, which otherwise trips a hydration warning
  const angle = Math.round(rawAngle * 1000) / 1000;
  return `translate(${end.x} ${end.y}) rotate(${angle})`;
}

export default function WorldNetwork({ ariaLabel }: { ariaLabel?: string }) {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [dotsSvg, setDotsSvg] = useState<string | null>(null);
  const hubPoint = projectPoint(HUB.lat, HUB.lng);

  useEffect(() => {
    let cancelled = false;
    import("dotted-map").then(({ default: DottedMap }) => {
      if (cancelled) return;
      const map = new DottedMap({ height: 90, grid: "diagonal" });
      const svg = map.getSVG({
        radius: 0.22,
        color: "#93AC9C33",
        shape: "circle",
        backgroundColor: "transparent",
      });
      setDotsSvg(svg);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const paths = svg.querySelectorAll("path.route");
    const arrows = svg.querySelectorAll("path.route-arrow");
    if (reduceMotion || !paths.length) return;

    const ctx = gsap.context(() => {
      gsap.set(paths, { strokeDasharray: 100, strokeDashoffset: 100 });
      // the arrowhead waits for its own line to reach it
      gsap.set(arrows, { opacity: 0, scale: 0.4, transformOrigin: "0px 0px" });

      // Loops: the routes draw themselves, hold, then draw again. repeatDelay
      // leaves the finished map on screen instead of restarting the moment it
      // lands, and toggleActions stops it once the section scrolls away -
      // this animates strokeDashoffset, which repaints every frame rather
      // than riding the compositor, so it should not keep running out of view.
      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 3.2,
        scrollTrigger: {
          trigger: svg,
          start: "top 75%",
          toggleActions: "play pause resume pause",
        },
      });

      tl.to(paths, {
        strokeDashoffset: 0,
        duration: 1.1,
        stagger: 0.12,
        ease: "power2.out",
      }).to(
        arrows,
        {
          opacity: 1,
          scale: 1,
          duration: 0.35,
          stagger: 0.12,
          ease: "back.out(2)",
        },
        0.85
      );
    }, svg);
    return () => ctx.revert();
  }, [dotsSvg]);

  return (
    <div className="world-network">
      {dotsSvg && (
        <Image
          src={`data:image/svg+xml;utf8,${encodeURIComponent(dotsSvg)}`}
          alt=""
          fill
          unoptimized
          className="world-network-dots"
          draggable={false}
        />
      )}
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="world-network-svg"
        role="img"
        aria-label={ariaLabel || "Carte du réseau Green Solutions dans 24 pays"}
      >
        <defs>
          <linearGradient id="route-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1D8A96" stopOpacity="0" />
            <stop offset="12%" stopColor="#1D8A96" stopOpacity="1" />
            <stop offset="88%" stopColor="#A8D14A" stopOpacity="1" />
            <stop offset="100%" stopColor="#A8D14A" stopOpacity="0" />
          </linearGradient>
        </defs>

        {NODES.map((n) => {
          const p = projectPoint(n.lat, n.lng);
          return (
            <path
              key={n.label}
              className="route"
              d={curvedPath(hubPoint, p)}
              fill="none"
              stroke="url(#route-gradient)"
              strokeWidth="1.1"
              pathLength={100}
            />
          );
        })}

        {NODES.map((n) => {
          const p = projectPoint(n.lat, n.lng);
          return (
            // the placement lives on the wrapper: GSAP animates the inner
            // path's transform, and would otherwise overwrite it
            <g key={`arrow-${n.label}`} transform={arrowTransform(hubPoint, p)}>
              <path
                className="route-arrow"
                d="M -5.5 -3.2 L 0 0 L -5.5 3.2 Z"
                fill="#A8D14A"
              />
            </g>
          );
        })}

        <circle cx={hubPoint.x} cy={hubPoint.y} r="3.2" fill="#A8D14A" />
        <circle cx={hubPoint.x} cy={hubPoint.y} r="3.2" fill="#A8D14A" opacity="0.5">
          <animate attributeName="r" from="3.2" to="12" dur="1.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" from="0.5" to="0" dur="1.8s" repeatCount="indefinite" />
        </circle>

        {NODES.map((n, i) => {
          const p = projectPoint(n.lat, n.lng);
          const delay = `${(i % 6) * 0.28}s`;
          return (
            <g key={n.label}>
              <circle cx={p.x} cy={p.y} r="2.2" fill="#1D8A96" />
              <circle cx={p.x} cy={p.y} r="2.2" fill="#1D8A96" opacity="0.5">
                <animate attributeName="r" from="2.2" to="8" dur="1.8s" begin={delay} repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.5" to="0" dur="1.8s" begin={delay} repeatCount="indefinite" />
              </circle>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
