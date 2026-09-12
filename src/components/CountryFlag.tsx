import type { ReactNode } from "react";

const STAR = "M12 2.5 l2.35 6.9 h7.25 l-5.87 4.27 2.24 6.93 -5.97 -4.34 -5.97 4.34 2.24 -6.93 -5.87 -4.27 h7.25 z";

function Star({ fill }: { fill: string }) {
  return <path d={STAR} fill={fill} transform="translate(0 -1) scale(0.62)" />;
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
  ghana: () => (
    <>
      <rect width="30" height="6.67" fill="#CE1126" />
      <rect y="6.67" width="30" height="6.67" fill="#FCD116" />
      <rect y="13.33" width="30" height="6.67" fill="#006B3F" />
      <g transform="translate(15 10)">
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
      <g transform="translate(15 10)">
        <Star fill="#00853F" />
      </g>
    </>
  ),
  tunisie: () => (
    <>
      <rect width="30" height="20" fill="#E70013" />
      <circle cx="15" cy="10" r="6" fill="#fff" />
      <circle cx="16.4" cy="10" r="4.7" fill="#E70013" />
      <g transform="translate(14.3 10) rotate(20)">
        <Star fill="#fff" />
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
      <g transform="translate(4.3 10)">
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
      {[0, 2, 4, 6, 8, 10, 12].map((y) => (
        <rect key={y} y={y * 1.54} width="30" height="1.54" fill="#B22234" />
      ))}
      <rect width="12" height="10.8" fill="#3C3B6E" />
    </>
  ),
  "afrique-du-sud": () => (
    <>
      <rect width="30" height="20" fill="#fff" />
      <polygon points="0,0 30,0 30,2.7 13.5,10 10,10" fill="#DE3831" />
      <polygon points="0,20 30,20 30,17.3 13.5,10 10,10" fill="#002395" />
      <polygon points="10,10 30,0 30,2.7 13.5,10 30,17.3 30,20" fill="#007A4D" />
      <polygon points="0,0 0,20 10,10" fill="#000" />
    </>
  ),
  turquie: () => (
    <>
      <rect width="30" height="20" fill="#E30A17" />
      <circle cx="11" cy="10" r="5" fill="#fff" />
      <circle cx="12.5" cy="10" r="4" fill="#E30A17" />
      <g transform="translate(17.5 10)">
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
  chine: () => (
    <>
      <rect width="30" height="20" fill="#DE2910" />
      <g transform="translate(6 6) scale(0.95)">
        <Star fill="#FFDE00" />
      </g>
      <g transform="translate(11.5 3) scale(0.32)">
        <Star fill="#FFDE00" />
      </g>
      <g transform="translate(13.3 6.3) scale(0.32)">
        <Star fill="#FFDE00" />
      </g>
      <g transform="translate(13.3 10.3) scale(0.32)">
        <Star fill="#FFDE00" />
      </g>
      <g transform="translate(11.5 13.3) scale(0.32)">
        <Star fill="#FFDE00" />
      </g>
    </>
  ),
};

export default function CountryFlag({ id }: { id: string }) {
  const draw = FLAGS[id];
  if (!draw) return null;

  return (
    <div className="flag-square">
      <svg
        viewBox="0 0 30 20"
        preserveAspectRatio="none"
        className="flag-square-svg"
        role="img"
        aria-hidden="true"
      >
        {draw(id)}
      </svg>
    </div>
  );
}
