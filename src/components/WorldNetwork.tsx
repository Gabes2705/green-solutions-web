"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HUB = { lat: 46.88, lng: 6.89, label: "Suisse" };

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
  { lat: 26.8, lng: 30.8, label: "Égypte" },
  { lat: 28.0, lng: 1.7, label: "Algérie" },
  { lat: -38.4, lng: -63.6, label: "Argentine" },
  { lat: -35.7, lng: -71.5, label: "Chili" },
  { lat: -0.8, lng: 11.6, label: "Gabon" },
  { lat: 7.9, lng: -1.0, label: "Ghana" },
  { lat: 30.6, lng: 36.2, label: "Jordanie" },
  { lat: 29.3, lng: 47.5, label: "Koweït" },
  { lat: 45.1, lng: 15.2, label: "Croatie" },
  { lat: -20.0, lng: 47.0, label: "Madagascar" },
  { lat: 9.5, lng: 2.25, label: "Bénin" },
  { lat: 16.25, lng: -61.58, label: "Guadeloupe" },
  { lat: 14.67, lng: -61.0, label: "Martinique" },
];

type Point = { x: number; y: number };
type ProjectedNode = Point & { label: string };

function controlPoint(start: Point, end: Point): Point {
  return { x: (start.x + end.x) / 2, y: Math.min(start.y, end.y) - 40 };
}

function curvedPath(start: Point, end: Point) {
  const c = controlPoint(start, end);
  return `M ${start.x} ${start.y} Q ${c.x} ${c.y} ${end.x} ${end.y}`;
}

function arrowTransform(start: Point, end: Point) {
  const c = controlPoint(start, end);
  const rawAngle = (Math.atan2(end.y - c.y, end.x - c.x) * 180) / Math.PI;
  const angle = Math.round(rawAngle * 1000) / 1000;
  return `translate(${end.x} ${end.y}) rotate(${angle})`;
}

export default function WorldNetwork({
  ariaLabel,
  countryCountLabel,
}: {
  ariaLabel?: string;
  countryCountLabel?: string;
}) {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [dotsSvg, setDotsSvg] = useState<string | null>(null);
  const [hubPoint, setHubPoint] = useState<Point | null>(null);
  const [projectedNodes, setProjectedNodes] = useState<ProjectedNode[]>([]);

  useEffect(() => {
    let cancelled = false;

    import("dotted-map").then(({ default: DottedMap }) => {
      if (cancelled) return;

      // Force a 2:1 canvas so the dotted map and the route overlay use
      // exactly the same geometry at every screen size.
      const map = new DottedMap({
        height: 90,
        width: 180,
        grid: "diagonal",
      });

      const width = map.image.width;
      const height = map.image.height;
      const toOverlay = (p: { x: number; y: number }): Point => ({
        x: (p.x / width) * 800,
        y: (p.y / height) * 400,
      });

      const hubPin = map.getPin({ lat: HUB.lat, lng: HUB.lng });
      const nodes = NODES.map((node) => {
        const pin = map.getPin({ lat: node.lat, lng: node.lng });
        return pin ? { ...toOverlay(pin), label: node.label } : null;
      }).filter((node): node is ProjectedNode => Boolean(node));

      if (hubPin) setHubPoint(toOverlay(hubPin));
      setProjectedNodes(nodes);

      const svg = map.getSVG({
        radius: 0.22,
        color: "#5E8670AA",
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
    if (!svg || !hubPoint || !projectedNodes.length) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const paths = svg.querySelectorAll("path.route");
    const arrows = svg.querySelectorAll("path.route-arrow");
    if (reduceMotion || !paths.length) return;

    const ctx = gsap.context(() => {
      gsap.set(paths, { strokeDasharray: 100, strokeDashoffset: 100 });
      gsap.set(arrows, { opacity: 0, scale: 0.4, transformOrigin: "0px 0px" });

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
  }, [dotsSvg, hubPoint, projectedNodes]);


  return (
    <div className="world-network">
      {countryCountLabel && (
        <div className="world-network-count">{countryCountLabel}</div>
      )}

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
        aria-label={ariaLabel || "Carte du réseau Green Solutions dans 42 pays"}
      >
        <defs>
          <linearGradient id="route-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1D8A96" stopOpacity="0" />
            <stop offset="12%" stopColor="#1D8A96" stopOpacity="1" />
            <stop offset="88%" stopColor="#1F8A45" stopOpacity="1" />
            <stop offset="100%" stopColor="#1F8A45" stopOpacity="0" />
          </linearGradient>
        </defs>

        {hubPoint && projectedNodes.map((node) => (
          <path
            key={`route-${node.label}`}
            className="route"
            d={curvedPath(hubPoint, node)}
            fill="none"
            stroke="url(#route-gradient)"
            strokeWidth="1.1"
            pathLength={100}
          />
        ))}

        {hubPoint && projectedNodes.map((node) => (
          <g
            key={`arrow-${node.label}`}
            transform={arrowTransform(hubPoint, node)}
          >
            <path
              className="route-arrow"
              d="M -5.5 -3.2 L 0 0 L -5.5 3.2 Z"
              fill="#1F8A45"
            />
          </g>
        ))}

        {hubPoint && (
          <>
            <circle cx={hubPoint.x} cy={hubPoint.y} r="3.2" fill="#1F8A45" />
            <circle
              cx={hubPoint.x}
              cy={hubPoint.y}
              r="3.2"
              fill="#1F8A45"
              opacity="0.5"
            >
              <animate attributeName="r" from="3.2" to="12" dur="1.8s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.5" to="0" dur="1.8s" repeatCount="indefinite" />
            </circle>
          </>
        )}

        {projectedNodes.map((node, i) => {
          const delay = `${(i % 6) * 0.28}s`;
          return (
            <g key={`point-${node.label}`}>
              <circle cx={node.x} cy={node.y} r="2.2" fill="#1D8A96" />
              <circle cx={node.x} cy={node.y} r="2.2" fill="#1D8A96" opacity="0.5">
                <animate
                  attributeName="r"
                  from="2.2"
                  to="8"
                  dur="1.8s"
                  begin={delay}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.5"
                  to="0"
                  dur="1.8s"
                  begin={delay}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
