import Contact from "@/components/Contact";
import CountryStudies from "@/components/CountryStudies";
import Essais from "@/components/Essais";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Objections from "@/components/Objections";
import Presentation from "@/components/Presentation";
import Produits from "@/components/Produits";
import ProofBar from "@/components/ProofBar";
import Reseau from "@/components/Reseau";
import Resources from "@/components/Resources";
import SmoothAnchors from "@/components/SmoothAnchors";
import Statement from "@/components/Statement";
import Team from "@/components/Team";
import TechChain from "@/components/TechChain";
import TenirAvancer from "@/components/TenirAvancer";

export const dynamicParams = true;

export function generateStaticParams() {
  return [
    { lang: "fr" },
    { lang: "en" },
    { lang: "es" },
    { lang: "pt" },
    { lang: "ar" },
    { lang: "zh" },
    { lang: "id" },
    { lang: "de" },
  ];
}

export default function Home() {
  return (
    <main>
      <SmoothAnchors />
      <Hero />
      <Reseau />
      <CountryStudies />
      <ProofBar />
      <Presentation />
      <TenirAvancer />
      <Produits />
      <Essais />
      <Objections />
      <TechChain />
      <CtaBand />
      <Team />
      <Resources />
      <Statement />
      <Contact />
      <Footer />
    </main>
  );
}
