"use client";

import "./HeroMesures.css";
import { useLanguage } from "@/lib/LanguageContext";
import { LOCALES } from "@/lib/gains-i18n";

/**
 * Trois mesures posées sur la photo du champ, comme les relevés d'un instrument.
 *
 * Les deux premières viennent de l'essai maïs mené en 2025 à la ferme d'État
 * TİGEM de Konya (Turquie) : irrigation −38,9 %, rendement +17,1 %. La
 * troisième reprend le nombre de pays du réseau affiché plus bas dans la page,
 * pour qu'il n'y ait jamais deux chiffres différents.
 *
 * Décoratif au sens de la mise en page, pas du contenu : la liste reste lisible
 * par un lecteur d'écran ; elle n'apparaît qu'à partir de 1100 px de large, là
 * où elle a de la place à côté du titre.
 */
const TEXTES: Record<string, { eau: string; essai: string; recolte: string; memeEssai: string; pays: string; titre: string }> = {
  fr: { eau: "d'eau d'irrigation", essai: "Maïs · Konya, Turquie (2025)", recolte: "de récolte", memeEssai: "Même essai", pays: "pays dans notre réseau", titre: "Mesures au champ" },
  en: { eau: "irrigation water", essai: "Maize · Konya, Türkiye (2025)", recolte: "more harvest", memeEssai: "Same trial", pays: "countries in our network", titre: "Field measurements" },
  es: { eau: "agua de riego", essai: "Maíz · Konya, Turquía (2025)", recolte: "más cosecha", memeEssai: "Mismo ensayo", pays: "países en nuestra red", titre: "Mediciones en el campo" },
  pt: { eau: "água de rega", essai: "Milho · Konya, Turquia (2025)", recolte: "mais colheita", memeEssai: "Mesmo ensaio", pays: "países na nossa rede", titre: "Medições no campo" },
  ar: { eau: "من مياه الري", essai: "الذرة · قونية، تركيا (2025)", recolte: "زيادة في المحصول", memeEssai: "التجربة نفسها", pays: "دولة في شبكتنا", titre: "قياسات في الحقل" },
  zh: { eau: "灌溉用水", essai: "玉米 · 土耳其科尼亚（2025）", recolte: "增产", memeEssai: "同一试验", pays: "个国家加入我们的网络", titre: "田间测量" },
  id: { eau: "air irigasi", essai: "Jagung · Konya, Turki (2025)", recolte: "panen lebih banyak", memeEssai: "Uji yang sama", pays: "negara dalam jaringan kami", titre: "Pengukuran di lapangan" },
  de: { eau: "Bewässerungswasser", essai: "Mais · Konya, Türkei (2025)", recolte: "mehr Ernte", memeEssai: "Derselbe Versuch", pays: "Länder in unserem Netzwerk", titre: "Messungen im Feld" },
  it: { eau: "di acqua d'irrigazione", essai: "Mais · Konya, Turchia (2025)", recolte: "di raccolto in più", memeEssai: "Stessa prova", pays: "paesi nella nostra rete", titre: "Misure in campo" },
  el: { eau: "νερό άρδευσης", essai: "Καλαμπόκι · Ικόνιο, Τουρκία (2025)", recolte: "περισσότερη σοδειά", memeEssai: "Ίδια δοκιμή", pays: "χώρες στο δίκτυό μας", titre: "Μετρήσεις στο χωράφι" },
  tr: { eau: "sulama suyu", essai: "Mısır · Konya, Türkiye (2025)", recolte: "daha fazla hasat", memeEssai: "Aynı deneme", pays: "ülkede ağımız var", titre: "Tarladaki ölçümler" },
  pl: { eau: "wody do nawadniania", essai: "Kukurydza · Konya, Turcja (2025)", recolte: "więcej plonu", memeEssai: "To samo doświadczenie", pays: "krajów w naszej sieci", titre: "Pomiary w polu" },
  hr: { eau: "vode za navodnjavanje", essai: "Kukuruz · Konya, Turska (2025)", recolte: "više uroda", memeEssai: "Isti pokus", pays: "zemalja u našoj mreži", titre: "Mjerenja na polju" },
  ca: { eau: "d'aigua de reg", essai: "Blat de moro · Konya, Turquia (2025)", recolte: "més collita", memeEssai: "El mateix assaig", pays: "països a la nostra xarxa", titre: "Mesures al camp" },
};

export default function HeroMesures() {
  const { c, language } = useLanguage();
  const t = TEXTES[language] ?? TEXTES.fr;
  const pc = (x: number) =>
    new Intl.NumberFormat(LOCALES[language] ?? "fr-FR", {
      style: "percent",
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
      signDisplay: "always",
    })
      .format(x)
      .replace("-", "−"); // vrai signe moins, pas un trait d'union

  const mesures = [
    { valeur: pc(-0.389), label: t.eau, sous: t.essai, pos: "hero-mesure-a" },
    { valeur: pc(0.171), label: t.recolte, sous: t.memeEssai, pos: "hero-mesure-b" },
    { valeur: c.presentation.stats[1].num, label: t.pays, sous: null, pos: "hero-mesure-c" },
  ];

  return (
    <ul className="hero-mesures" aria-label={t.titre}>
      {mesures.map((m) => (
        <li key={m.pos} className={`hero-mesure ${m.pos}`}>
          <span className="hero-mesure-carte">
            <span className="hero-mesure-valeur">{m.valeur}</span>
            <span className="hero-mesure-label">{m.label}</span>
            {m.sous && <span className="hero-mesure-sous">{m.sous}</span>}
          </span>
          <span className="hero-mesure-fil" aria-hidden="true" />
          <span className="hero-mesure-point" aria-hidden="true" />
        </li>
      ))}
    </ul>
  );
}
