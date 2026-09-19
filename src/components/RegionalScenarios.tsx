"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import type { Lang } from "@/lib/content";
import styles from "./RegionalScenarios.module.css";

type CoreLang = "fr" | "en" | "es" | "pt" | "ar" | "zh";
type Localized = Record<CoreLang, string>;
type Crop = { id: string; name: Localized; baseline: number; gain: number };
type RegionalCase = {
  id: string;
  region: Localized;
  country: Localized;
  image: string;
  currency: "EUR" | "XOF" | "USD";
  crops: Crop[];
};

type ScenarioState = {
  cropId: string;
  area: number;
  gain: number;
  salePrice: string;
  solutionCost: string;
};

const supported = new Set<Lang>(["fr", "en", "es", "pt", "ar", "zh"]);

const COPY: Record<CoreLang, {
  eyebrow: string;
  title: string;
  intro: string;
  hypothesis: string;
  crop: string;
  area: string;
  growth: string;
  salePrice: string;
  solutionCost: string;
  baselineYield: string;
  projectedYield: string;
  additionalVolume: string;
  additionalRevenue: string;
  netGain: string;
  profitability: string;
  blank: string;
  disclaimer: string;
}> = {
  fr: {
    eyebrow: "4 contextes · un modèle à chiffrer",
    title: "Du gain agronomique à la rentabilité locale",
    intro: "Choisissez une culture, ajustez le gain de rendement et renseignez les prix lorsque vos équipes les auront validés. Les calculs se mettent à jour immédiatement.",
    hypothesis: "Hypothèse de travail à valider",
    crop: "Culture",
    area: "Surface",
    growth: "Progression de rendement",
    salePrice: "Prix de vente de la récolte / t",
    solutionCost: "Coût Green Solutions / ha",
    baselineYield: "Rendement témoin",
    projectedYield: "Rendement projeté",
    additionalVolume: "Production additionnelle",
    additionalRevenue: "Chiffre d’affaires additionnel",
    netGain: "Gain net estimé",
    profitability: "Rentabilité estimée",
    blank: "À renseigner",
    disclaimer: "Simulation non contractuelle. Les pourcentages sont des hypothèses modifiables ; les prix sont volontairement laissés vides jusqu’à validation par vos équipes.",
  },
  en: {
    eyebrow: "4 contexts · one model to price",
    title: "From agronomic gain to local profitability",
    intro: "Choose a crop, adjust the yield gain and enter prices once your teams have validated them. Calculations update immediately.",
    hypothesis: "Working assumption to validate",
    crop: "Crop",
    area: "Area",
    growth: "Yield progression",
    salePrice: "Crop selling price / t",
    solutionCost: "Green Solutions cost / ha",
    baselineYield: "Control yield",
    projectedYield: "Projected yield",
    additionalVolume: "Additional production",
    additionalRevenue: "Additional revenue",
    netGain: "Estimated net gain",
    profitability: "Estimated ROI",
    blank: "To be entered",
    disclaimer: "Non-contractual simulation. Percentages are adjustable assumptions; prices are intentionally blank pending validation by your teams.",
  },
  es: {
    eyebrow: "4 contextos · un modelo por valorar",
    title: "De la mejora agronómica a la rentabilidad local",
    intro: "Elija un cultivo, ajuste la mejora del rendimiento e introduzca los precios cuando sus equipos los validen. Los cálculos se actualizan al instante.",
    hypothesis: "Hipótesis de trabajo por validar",
    crop: "Cultivo",
    area: "Superficie",
    growth: "Progresión del rendimiento",
    salePrice: "Precio de venta de la cosecha / t",
    solutionCost: "Coste Green Solutions / ha",
    baselineYield: "Rendimiento testigo",
    projectedYield: "Rendimiento proyectado",
    additionalVolume: "Producción adicional",
    additionalRevenue: "Ingresos adicionales",
    netGain: "Ganancia neta estimada",
    profitability: "Rentabilidad estimada",
    blank: "Por completar",
    disclaimer: "Simulación no contractual. Los porcentajes son hipótesis ajustables; los precios se dejan vacíos hasta su validación por los equipos.",
  },
  pt: {
    eyebrow: "4 contextos · um modelo a quantificar",
    title: "Do ganho agronómico à rentabilidade local",
    intro: "Escolha uma cultura, ajuste o ganho de rendimento e indique os preços quando as equipas os validarem. Os cálculos atualizam-se de imediato.",
    hypothesis: "Hipótese de trabalho a validar",
    crop: "Cultura",
    area: "Área",
    growth: "Progressão do rendimento",
    salePrice: "Preço de venda da colheita / t",
    solutionCost: "Custo Green Solutions / ha",
    baselineYield: "Rendimento de controlo",
    projectedYield: "Rendimento projetado",
    additionalVolume: "Produção adicional",
    additionalRevenue: "Receita adicional",
    netGain: "Ganho líquido estimado",
    profitability: "Rentabilidade estimada",
    blank: "A preencher",
    disclaimer: "Simulação não contratual. As percentagens são hipóteses ajustáveis; os preços ficam propositadamente vazios até validação pelas equipas.",
  },
  ar: {
    eyebrow: "4 سياقات · نموذج واحد للتسعير",
    title: "من التحسن الزراعي إلى الربحية المحلية",
    intro: "اختر المحصول واضبط زيادة الإنتاج، ثم أدخل الأسعار بعد اعتمادها من فرقكم. تتحدث الحسابات فوراً.",
    hypothesis: "فرضية عمل تحتاج إلى اعتماد",
    crop: "المحصول",
    area: "المساحة",
    growth: "نمو الإنتاج",
    salePrice: "سعر بيع المحصول / طن",
    solutionCost: "تكلفة Green Solutions / هكتار",
    baselineYield: "إنتاج الشاهد",
    projectedYield: "الإنتاج المتوقع",
    additionalVolume: "الإنتاج الإضافي",
    additionalRevenue: "الإيراد الإضافي",
    netGain: "صافي الربح المقدر",
    profitability: "العائد المقدر",
    blank: "يُستكمل لاحقاً",
    disclaimer: "محاكاة غير تعاقدية. النسب فرضيات قابلة للتعديل، والأسعار متروكة فارغة عمداً إلى حين اعتماد فرقكم.",
  },
  zh: {
    eyebrow: "4 种环境 · 1 个待定价模型",
    title: "从农艺增益到本地盈利能力",
    intro: "选择作物、调整增产幅度，并在团队确认后填写价格，计算结果会即时更新。",
    hypothesis: "待验证的工作假设",
    crop: "作物",
    area: "面积",
    growth: "产量增幅",
    salePrice: "作物销售价格 / 吨",
    solutionCost: "Green Solutions 成本 / 公顷",
    baselineYield: "对照产量",
    projectedYield: "预计产量",
    additionalVolume: "新增产量",
    additionalRevenue: "新增收入",
    netGain: "预计净收益",
    profitability: "预计投资回报率",
    blank: "待填写",
    disclaimer: "本模拟不构成合同承诺。百分比为可调整假设；价格在团队确认前特意留空。",
  },
};

const t = (fr: string, en: string, es: string, pt: string, ar: string, zh: string): Localized => ({ fr, en, es, pt, ar, zh });

const CASES: RegionalCase[] = [
  {
    id: "europe",
    region: t("Europe", "Europe", "Europa", "Europa", "أوروبا", "欧洲"),
    country: t("Espagne", "Spain", "España", "Espanha", "إسبانيا", "西班牙"),
    image: "/images/dossiers/espagne/1.webp",
    currency: "EUR",
    crops: [
      { id: "olive", name: t("Olivier", "Olive", "Olivo", "Oliveira", "الزيتون", "橄榄"), baseline: 3.2, gain: 25 },
      { id: "grape", name: t("Vigne", "Grape", "Vid", "Vinha", "العنب", "葡萄"), baseline: 7.5, gain: 18 },
      { id: "wheat", name: t("Blé", "Wheat", "Trigo", "Trigo", "القمح", "小麦"), baseline: 6, gain: 14 },
    ],
  },
  {
    id: "sahel",
    region: t("Sahel", "Sahel", "Sahel", "Sahel", "منطقة الساحل", "萨赫勒地区"),
    country: t("Sénégal", "Senegal", "Senegal", "Senegal", "السنغال", "塞内加尔"),
    image: "/images/dossiers/senegal/1.webp",
    currency: "XOF",
    crops: [
      { id: "millet", name: t("Mil", "Millet", "Mijo", "Milheto", "الدخن", "小米"), baseline: 1.1, gain: 40 },
      { id: "sorghum", name: t("Sorgho", "Sorghum", "Sorgo", "Sorgo", "الذرة الرفيعة", "高粱"), baseline: 1.4, gain: 35 },
      { id: "groundnut", name: t("Arachide", "Groundnut", "Cacahuete", "Amendoim", "الفول السوداني", "花生"), baseline: 1.2, gain: 30 },
    ],
  },
  {
    id: "desert",
    region: t("Zone désertique", "Desert", "Zona desértica", "Zona desértica", "منطقة صحراوية", "沙漠地区"),
    country: t("Oman", "Oman", "Omán", "Omã", "عُمان", "阿曼"),
    image: "/images/dossiers/oman/6.webp",
    currency: "USD",
    crops: [
      { id: "date", name: t("Palmier dattier", "Date palm", "Palmera datilera", "Tamareira", "نخيل التمر", "椰枣"), baseline: 7, gain: 28 },
      { id: "citrus", name: t("Agrumes", "Citrus", "Cítricos", "Citrinos", "الحمضيات", "柑橘"), baseline: 18, gain: 24 },
      { id: "greenhouse", name: t("Maraîchage sous serre", "Greenhouse vegetables", "Hortalizas de invernadero", "Hortícolas em estufa", "خضروات محمية", "温室蔬菜"), baseline: 55, gain: 20 },
    ],
  },
  {
    id: "tropical",
    region: t("Zone tropicale", "Tropics", "Zona tropical", "Zona tropical", "منطقة استوائية", "热带地区"),
    country: t("Côte d’Ivoire", "Côte d’Ivoire", "Costa de Marfil", "Costa do Marfim", "ساحل العاج", "科特迪瓦"),
    image: "/images/dossiers/cote-divoire/1.webp",
    currency: "XOF",
    crops: [
      { id: "cocoa", name: t("Cacao", "Cocoa", "Cacao", "Cacau", "الكاكاو", "可可"), baseline: 0.8, gain: 25 },
      { id: "banana", name: t("Banane", "Banana", "Banano", "Banana", "الموز", "香蕉"), baseline: 28, gain: 20 },
      { id: "coffee", name: t("Café", "Coffee", "Café", "Café", "البن", "咖啡"), baseline: 0.9, gain: 22 },
    ],
  },
];

const INITIAL_STATE: ScenarioState[] = CASES.map((regionalCase) => ({
  cropId: regionalCase.crops[0].id,
  area: 1,
  gain: regionalCase.crops[0].gain,
  salePrice: "",
  solutionCost: "",
}));

function parseOptionalNumber(value: string) {
  if (!value.trim()) return null;
  const parsed = Number(value.replace(",", "."));
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : null;
}

export default function RegionalScenarios() {
  const { language } = useLanguage();
  const currentLanguage: CoreLang = supported.has(language) ? language as CoreLang : "en";
  const copy = COPY[currentLanguage];
  const [states, setStates] = useState(INITIAL_STATE);
  const numberFormatter = useMemo(() => new Intl.NumberFormat(currentLanguage, { maximumFractionDigits: 1 }), [currentLanguage]);

  const updateState = (index: number, patch: Partial<ScenarioState>) => {
    setStates((current) => current.map((item, itemIndex) => itemIndex === index ? { ...item, ...patch } : item));
  };

  return (
    <section className={styles.section} aria-labelledby="regional-scenarios-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <div>
            <p className={styles.eyebrow}>{copy.eyebrow}</p>
            <h2 id="regional-scenarios-title">{copy.title}</h2>
          </div>
          <p>{copy.intro}</p>
        </header>

        <div className={styles.grid}>
          {CASES.map((regionalCase, index) => {
            const state = states[index];
            const crop = regionalCase.crops.find((item) => item.id === state.cropId) ?? regionalCase.crops[0];
            const projectedYield = crop.baseline * (1 + state.gain / 100);
            const additionalVolume = (projectedYield - crop.baseline) * state.area;
            const salePrice = parseOptionalNumber(state.salePrice);
            const solutionCost = parseOptionalNumber(state.solutionCost);
            const additionalRevenue = salePrice === null ? null : additionalVolume * salePrice;
            const investment = solutionCost === null ? null : solutionCost * state.area;
            const netGain = additionalRevenue === null || investment === null ? null : additionalRevenue - investment;
            const roi = netGain === null || investment === null || investment <= 0 ? null : netGain / investment * 100;
            const moneyFormatter = new Intl.NumberFormat(currentLanguage, { style: "currency", currency: regionalCase.currency, maximumFractionDigits: 0 });

            return (
              <article className={styles.card} key={regionalCase.id}>
                <div className={styles.imageWrap}>
                  <Image src={regionalCase.image} alt={`${regionalCase.country[currentLanguage]} — ${crop.name[currentLanguage]}`} fill sizes="(max-width: 720px) 94vw, (max-width: 1100px) 46vw, 590px" />
                  <div className={styles.location}>
                    <span>{regionalCase.region[currentLanguage]}</span>
                    <strong>{regionalCase.country[currentLanguage]}</strong>
                  </div>
                </div>

                <div className={styles.cardBody}>
                  <span className={styles.hypothesis}>{copy.hypothesis}</span>
                  <div className={styles.inputs}>
                    <label>
                      <span>{copy.crop}</span>
                      <select
                        value={state.cropId}
                        onChange={(event) => {
                          const nextCrop = regionalCase.crops.find((item) => item.id === event.target.value) ?? regionalCase.crops[0];
                          updateState(index, { cropId: nextCrop.id, gain: nextCrop.gain });
                        }}
                      >
                        {regionalCase.crops.map((item) => <option value={item.id} key={item.id}>{item.name[currentLanguage]}</option>)}
                      </select>
                    </label>
                    <label>
                      <span>{copy.area}</span>
                      <span className={styles.inputUnit}><input type="number" min="0.1" step="0.1" value={state.area} onChange={(event) => updateState(index, { area: Math.max(0.1, Number(event.target.value) || 0.1) })} /><b>ha</b></span>
                    </label>
                  </div>

                  <label className={styles.rangeField}>
                    <span><b>{copy.growth}</b><output>+{state.gain}%</output></span>
                    <input type="range" min="0" max="100" step="1" value={state.gain} onChange={(event) => updateState(index, { gain: Number(event.target.value) })} />
                  </label>

                  <div className={styles.priceInputs}>
                    <label>
                      <span>{copy.salePrice}</span>
                      <span className={styles.inputUnit}><input inputMode="decimal" value={state.salePrice} placeholder={copy.blank} onChange={(event) => updateState(index, { salePrice: event.target.value })} /><b>{regionalCase.currency}</b></span>
                    </label>
                    <label>
                      <span>{copy.solutionCost}</span>
                      <span className={styles.inputUnit}><input inputMode="decimal" value={state.solutionCost} placeholder={copy.blank} onChange={(event) => updateState(index, { solutionCost: event.target.value })} /><b>{regionalCase.currency}</b></span>
                    </label>
                  </div>

                  <div className={styles.results}>
                    <div><span>{copy.baselineYield}</span><strong>{numberFormatter.format(crop.baseline)} t/ha</strong></div>
                    <div><span>{copy.projectedYield}</span><strong className={styles.positive}>{numberFormatter.format(projectedYield)} t/ha</strong></div>
                    <div><span>{copy.additionalVolume}</span><strong className={styles.positive}>+{numberFormatter.format(additionalVolume)} t</strong></div>
                    <div><span>{copy.additionalRevenue}</span><strong>{additionalRevenue === null ? "—" : moneyFormatter.format(additionalRevenue)}</strong></div>
                    <div><span>{copy.netGain}</span><strong>{netGain === null ? "—" : moneyFormatter.format(netGain)}</strong></div>
                    <div className={styles.roiRow}>
                      <span>{copy.profitability}</span>
                      <strong className={roi !== null && roi >= 0 ? styles.positive : ""}>{roi === null ? "—" : `${roi >= 0 ? "+" : ""}${numberFormatter.format(roi)}%`}</strong>
                      <i aria-hidden="true"><b style={{ width: `${roi === null ? 0 : Math.max(0, Math.min(100, roi / 2))}%` }} /></i>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <p className={styles.disclaimer}>{copy.disclaimer}</p>
      </div>
    </section>
  );
}
