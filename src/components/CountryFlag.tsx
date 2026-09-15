import type { ReactNode } from "react";

const STAR = "M12 2.5 l2.35 6.9 h7.25 l-5.87 4.27 2.24 6.93 -5.97 -4.34 -5.97 4.34 2.24 -6.93 -5.87 -4.27 h7.25 z";

function Star({ fill }: { fill: string }) {
  return <path d={STAR} fill={fill} transform="scale(0.62) translate(-12 -12.7)" />;
}

const FLAGS: Record<string, (id: string) => ReactNode> = {
  "cote-divoire": () => (
    <>
      <rect width="10" height="20" fill="#F77F00" />
      <rect x="10" width="10" height="20" fill="#fff" />
      <rect x="20" width="10" height="20" fill="#009E60" />
    </>
  ),
  congo: () => (
    <>
      <polygon points="0,0 30,0 0,20" fill="#009543" />
      <polygon points="30,0 30,20 0,20" fill="#DC241F" />
      <polygon points="0,20 30,0 21,0 0,15" fill="#FBDE4A" />
      <polygon points="30,0 9,20 0,20 21,0" fill="#FBDE4A" />
    </>
  ),
  cameroun: () => (
    <>
      <rect width="10" height="20" fill="#007A5E" />
      <rect x="10" width="10" height="20" fill="#CE1126" />
      <rect x="20" width="10" height="20" fill="#FCD116" />
      <g transform="translate(15 10) scale(0.45)">
        <Star fill="#FCD116" />
      </g>
    </>
  ),
  ghana: () => (
    <>
      <rect width="30" height="6.67" fill="#CE1126" />
      <rect y="6.67" width="30" height="6.67" fill="#FCD116" />
      <rect y="13.33" width="30" height="6.67" fill="#006B3F" />
      <g transform="translate(15 10) scale(0.55)">
        <Star fill="#000" />
      </g>
    </>
  ),
  "guinee-conakry": () => (
    <>
      <rect width="10" height="20" fill="#CE1126" />
      <rect x="10" width="10" height="20" fill="#FCD116" />
      <rect x="20" width="10" height="20" fill="#009460" />
    </>
  ),
  koweit: () => (
    <>
      <rect width="30" height="6.67" fill="#007A3D" />
      <rect y="6.67" width="30" height="6.67" fill="#fff" />
      <rect y="13.33" width="30" height="6.67" fill="#CE1126" />
      <polygon points="0,0 9,10 0,20" fill="#000" />
    </>
  ),
  oman: () => (
    <>
      <rect width="30" height="6.67" fill="#fff" />
      <rect y="6.67" width="30" height="6.67" fill="#DB161B" />
      <rect y="13.33" width="30" height="6.67" fill="#008751" />
      <rect width="9" height="20" fill="#DB161B" />
    </>
  ),
  senegal: () => (
    <>
      <rect width="10" height="20" fill="#00853F" />
      <rect x="10" width="10" height="20" fill="#FDEF42" />
      <rect x="20" width="10" height="20" fill="#E31B23" />
      <g transform="translate(15 10) scale(0.8)">
        <Star fill="#00853F" />
      </g>
    </>
  ),
  tunisie: (id) => (
    <>
      <mask id={`${id}-crescent`}>
        <rect width="30" height="20" fill="#000" />
        <circle cx="14.4" cy="10" r="4.6" fill="#fff" />
        <circle cx="16.3" cy="10" r="3.7" fill="#000" />
      </mask>
      <rect width="30" height="20" fill="#E70013" />
      <circle cx="15" cy="10" r="6.2" fill="#fff" />
      <rect width="30" height="20" fill="#E70013" mask={`url(#${id}-crescent)`} />
      <g transform="translate(17.4 10) scale(0.45)">
        <Star fill="#E70013" />
      </g>
    </>
  ),
  "soudan-sud": () => (
    <>
      <rect width="30" height="5.5" fill="#000" />
      <rect y="5.5" width="30" height="0.7" fill="#fff" />
      <rect y="6.2" width="30" height="7.6" fill="#DA121A" />
      <rect y="13.8" width="30" height="0.7" fill="#fff" />
      <rect y="14.5" width="30" height="5.5" fill="#078930" />
      <polygon points="0,0 0,20 13,10" fill="#0F47AF" />
      <g transform="translate(4.6 10) scale(0.5)">
        <Star fill="#FCDD09" />
      </g>
    </>
  ),
  emirats: () => (
    <>
      <rect width="30" height="6.67" fill="#00732F" />
      <rect y="6.67" width="30" height="6.67" fill="#fff" />
      <rect y="13.33" width="30" height="6.67" fill="#000" />
      <rect width="7.5" height="20" fill="#CE1126" />
    </>
  ),
  mexique: () => (
    <>
      <rect width="10" height="20" fill="#006847" />
      <rect x="10" width="10" height="20" fill="#fff" />
      <rect x="20" width="10" height="20" fill="#CE1126" />
    </>
  ),
  "etats-unis": () => (
    <>
      <rect width="30" height="20" fill="#fff" />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <rect key={i} y={i * 3.077} width="30" height="1.538" fill="#B22234" />
      ))}
      <rect width="12" height="10.77" fill="#3C3B6E" />
      {[0, 1, 2, 3].map((row) =>
        [0, 1, 2, 3, 4].map((col) => (
          <circle
            key={`${row}-${col}`}
            cx={1.2 + col * 2.4 + (row % 2) * 1.2}
            cy={1.35 + row * 2.7}
            r="0.55"
            fill="#fff"
          />
        )),
      )}
    </>
  ),
  "afrique-du-sud": () => (
    <>
      <rect width="30" height="20" fill="#fff" />
      <polygon points="0,0 30,0 30,3.3 12,10 0,10" fill="#DE3831" />
      <polygon points="0,20 30,20 30,16.7 12,10 0,10" fill="#002395" />
      <polygon points="0,2.5 9.5,10 0,17.5" fill="#FFB612" />
      <polygon points="0,4.5 7.4,10 0,15.5" fill="#000" />
      <polygon points="0,6.5 30,0 30,3.3 12,10 30,16.7 30,20 0,13.5 5.5,10" fill="#007A4D" />
    </>
  ),
  turquie: () => (
    <>
      <rect width="30" height="20" fill="#E30A17" />
      <circle cx="11" cy="10" r="5" fill="#fff" />
      <circle cx="12.5" cy="10" r="4" fill="#E30A17" />
      <g transform="translate(17.6 10) scale(0.42)">
        <Star fill="#fff" />
      </g>
    </>
  ),
  indonesie: () => (
    <>
      <rect width="30" height="10" fill="#CE1126" />
      <rect y="10" width="30" height="10" fill="#fff" />
    </>
  ),
  espagne: () => (
    <>
      <rect width="30" height="5" fill="#AA151B" />
      <rect y="5" width="30" height="10" fill="#F1BF00" />
      <rect y="15" width="30" height="5" fill="#AA151B" />
    </>
  ),
  grece: () => (
    <>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <rect key={i} y={(i * 20) / 9} width="30" height={20 / 9} fill={i % 2 === 0 ? "#0D5EAF" : "#fff"} />
      ))}
      <rect width="11.11" height="11.11" fill="#0D5EAF" />
      <rect x="4.44" width="2.22" height="11.11" fill="#fff" />
      <rect y="4.44" width="11.11" height="2.22" fill="#fff" />
    </>
  ),
  chine: () => (
    <>
      <rect width="30" height="20" fill="#DE2910" />
      <g transform="translate(5 5) scale(0.42)">
        <Star fill="#FFDE00" />
      </g>
      <g transform="translate(10 2.2) scale(0.15)">
        <Star fill="#FFDE00" />
      </g>
      <g transform="translate(12 4.4) scale(0.15)">
        <Star fill="#FFDE00" />
      </g>
      <g transform="translate(12 7.2) scale(0.15)">
        <Star fill="#FFDE00" />
      </g>
      <g transform="translate(10 9.4) scale(0.15)">
        <Star fill="#FFDE00" />
      </g>
    </>
  ),
  maroc: () => (
    <>
      <rect width="30" height="20" fill="#C1272D" />
      <path
        d="M15 5.2 L17.85 14 L10.35 8.55 L19.65 8.55 L12.15 14 Z"
        fill="none"
        stroke="#006233"
        strokeWidth="0.75"
        strokeLinejoin="miter"
      />
    </>
  ),
  algerie: (id) => (
    <>
      <mask id={`${id}-crescent`}>
        <rect width="30" height="20" fill="#000" />
        <circle cx="14.6" cy="10" r="4.7" fill="#fff" />
        <circle cx="16.5" cy="10" r="3.9" fill="#000" />
      </mask>
      <rect width="15" height="20" fill="#006233" />
      <rect x="15" width="15" height="20" fill="#FFF" />
      <rect width="30" height="20" fill="#D21034" mask={`url(#${id}-crescent)`} />
      <g transform="translate(18.4 10) rotate(-18) scale(0.5)">
        <Star fill="#D21034" />
      </g>
    </>
  ),
  gabon: () => (
    <>
      <rect width="30" height="6.67" fill="#009E60" />
      <rect y="6.67" width="30" height="6.67" fill="#FCD116" />
      <rect y="13.33" width="30" height="6.67" fill="#3A75C4" />
    </>
  ),
  egypte: () => (
    <>
      <rect width="30" height="6.67" fill="#CE1126" />
      <rect y="6.67" width="30" height="6.67" fill="#FFF" />
      <rect y="13.33" width="30" height="6.67" fill="#000" />
      <g fill="#C09300" transform="translate(15 10)">
        <ellipse rx="1.05" ry="1.5" />
        <path d="M-1 -0.5 L-3.6 -1.5 L-3.2 0.4 L-1 0.6 Z" />
        <path d="M1 -0.5 L3.6 -1.5 L3.2 0.4 L1 0.6 Z" />
        <path d="M-1 1.1 L1 1.1 L0.55 2.6 L-0.55 2.6 Z" />
      </g>
    </>
  ),
  jordanie: () => (
    <>
      <rect width="30" height="6.67" fill="#000" />
      <rect y="6.67" width="30" height="6.67" fill="#FFF" />
      <rect y="13.33" width="30" height="6.67" fill="#007A3D" />
      <polygon points="0,0 11.5,10 0,20" fill="#CE1126" />
      <g transform="translate(4.6 10) scale(0.42)">
        <Star fill="#FFF" />
      </g>
    </>
  ),
  haiti: () => (
    <>
      <rect width="30" height="10" fill="#003DA5" />
      <rect y="10" width="30" height="10" fill="#CE1126" />
    </>
  ),
  "arabie-saoudite": () => (
    <>
      <rect width="30" height="20" fill="#006C35" />
      <g fill="#FFF">
        <rect x="4.5" y="7.4" width="21" height="0.85" />
        {[6.2, 8.6, 11.4, 14.2, 17.6, 20.4, 23].map((x, i) => (
          <rect key={x} x={x} y={7.4 - (i % 2 ? 2.5 : 1.7)} width="0.8" height={i % 2 ? 2.5 : 1.7} />
        ))}
        <rect x="5.5" y="11.2" width="19" height="0.85" />
        {[7, 9.8, 12.6, 15.4, 18.2, 21].map((x, i) => (
          <rect key={x} x={x} y={11.2 - (i % 2 ? 1.6 : 2.3)} width="0.8" height={i % 2 ? 1.6 : 2.3} />
        ))}
        <rect x="5.2" y="15" width="18.5" height="0.9" />
        <polygon points="5.2,15 5.2,15.9 2.2,15.45" />
        <rect x="23.2" y="13.7" width="0.9" height="3.5" />
        <rect x="24.4" y="14.9" width="3.2" height="1.1" rx="0.5" />
      </g>
    </>
  ),
  chili: () => (
    <>
      <rect x="10" width="20" height="10" fill="#FFF" />
      <rect y="10" width="30" height="10" fill="#D52B1E" />
      <rect width="10" height="10" fill="#0039A6" />
      <g transform="translate(5 5) scale(0.4)">
        <Star fill="#FFF" />
      </g>
    </>
  ),
  argentine: () => (
    <>
      <rect width="30" height="6.67" fill="#74ACDF" />
      <rect y="6.67" width="30" height="6.67" fill="#FFF" />
      <rect y="13.33" width="30" height="6.67" fill="#74ACDF" />
      <g transform="translate(15 10)">
        {Array.from({ length: 16 }, (_, i) => (
          <rect
            key={i}
            x="-0.28"
            y="-3.1"
            width="0.56"
            height="1.5"
            fill="#F6B40E"
            transform={`rotate(${i * 22.5})`}
          />
        ))}
        <circle r="1.75" fill="#F6B40E" />
        <circle r="1.3" fill="#FCDD09" />
      </g>
    </>
  ),
  france: () => (
    <>
      <rect width="10" height="20" fill="#002654" />
      <rect x="10" width="10" height="20" fill="#fff" />
      <rect x="20" width="10" height="20" fill="#ED2939" />
    </>
  ),
  italie: () => (
    <>
      <rect width="10" height="20" fill="#009246" />
      <rect x="10" width="10" height="20" fill="#fff" />
      <rect x="20" width="10" height="20" fill="#CE2B37" />
    </>
  ),
  allemagne: () => (
    <>
      <rect width="30" height="6.67" fill="#000" />
      <rect y="6.67" width="30" height="6.67" fill="#DD0000" />
      <rect y="13.33" width="30" height="6.67" fill="#FFCE00" />
    </>
  ),
  pologne: () => (
    <>
      <rect width="30" height="10" fill="#fff" />
      <rect y="10" width="30" height="10" fill="#DC143C" />
    </>
  ),
  croatie: () => (
    <>
      <rect width="30" height="6.67" fill="#FF0000" />
      <rect y="6.67" width="30" height="6.67" fill="#fff" />
      <rect y="13.33" width="30" height="6.67" fill="#171796" />
      {/* Le damier, réduit à ce qui se lit à cette taille : cinq carreaux
          rouges en quinconce sur un écu blanc. */}
      <g transform="translate(12.4 5.6)">
        <rect width="5.2" height="6" fill="#fff" stroke="#171796" strokeWidth="0.3" />
        {[
          [0, 0],
          [2.6, 0],
          [1.3, 2],
          [0, 4],
          [2.6, 4],
        ].map(([x, y], i) => (
          <rect key={i} x={x} y={y} width="1.3" height="2" fill="#FF0000" />
        ))}
      </g>
    </>
  ),
  portugal: () => (
    <>
      <rect width="30" height="20" fill="#DA291C" />
      <rect width="12" height="20" fill="#046A38" />
      <circle cx="12" cy="10" r="3.6" fill="#FFE900" />
      <circle cx="12" cy="10" r="2.5" fill="#DA291C" />
    </>
  ),
};

const ALIASES: Record<string, string> = {
  usa: "etats-unis",
  "etats-unis-amerique": "etats-unis",
};

export default function CountryFlag({ id }: { id: string }) {
  const draw = FLAGS[ALIASES[id] ?? id];
  if (!draw) return null;

  return (
    <div className="flag-square">
      <svg
        viewBox="0 0 30 20"
        className="flag-square-svg"
        role="img"
        aria-hidden="true"
      >
        {draw(id)}
      </svg>
    </div>
  );
}
