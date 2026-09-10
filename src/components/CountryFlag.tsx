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
