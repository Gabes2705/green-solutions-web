// Las siete páginas que completan el dossier de Argentina (ver build.mjs).
export default {
  paysTitre: "Argentina",

  economie: {
    kicker: "ECONOMÍA Y SEGURIDAD ALIMENTARIA",
    title: "Un exportador de alimentos que depende de la lluvia",
    items: [
      { value: "N.º 1", label: "exportador mundial de harina y aceite de soja" },
      { value: "≈ 20 000 M", label: "de dólares de pérdidas atribuidas a la sequía 2022/23" },
      { value: "≈ 70 %", label: "del vino argentino se elabora en Mendoza" },
      { value: "≈ 400 M", label: "de personas alimentadas con lo que produce el país, según el sector" },
    ],
    note:
      "Los derechos de exportación de granos financian una parte del gasto público: cada mala campaña se traduce en menos divisas. Las economías regionales —vid, frutas, olivo, hortalizas— dependen en cambio del riego en zonas áridas, donde el agua de deshielo disminuye.",
  },

  filieres: [
    {
      kicker: "PRIMER SECTOR",
      title: "Vid en Cuyo: menos nieve, menos agua de riego",
      photo: 6,
      bullets: [
        "Mendoza y San Juan concentran la mayor parte del viñedo del país, regado con agua de los ríos andinos.",
        "Las nevadas más escasas en la cordillera reducen los caudales de verano y los turnos de riego asignados.",
        "Muchos viñedos todavía riegan por surco o por manto, con pérdidas altas por infiltración y evaporación.",
        "La reconversión a goteo es la ocasión natural para incorporar un retenedor de agua en la línea de plantación.",
        "Un rendimiento estable y una madurez regular son lo que pagan las bodegas y los mercados de exportación.",
      ],
    },
    {
      kicker: "SEGUNDO SECTOR",
      title: "Olivo y frutales: las economías regionales bajo riego",
      photo: 3,
      bullets: [
        "El olivo se extiende por Catamarca, La Rioja, San Juan y Mendoza, sobre suelos pobres y con muy poca lluvia.",
        "El Alto Valle de Río Negro y Neuquén es la gran zona de peras y manzanas de exportación del país.",
        "Las plantaciones nuevas dependen del bombeo de agua subterránea, cuyo costo energético crece cada año.",
        "Heladas y golpes de calor se suman al estrés hídrico en floración y cuaje.",
        "NAPEMA® trata las plagas sin residuos, una exigencia de los compradores europeos de fruta fresca.",
      ],
    },
  ],

  rendement: ["raisin", "olives", "pommes", "tomates", "pommesDeTerre"],

  sources: [
    "INDEC: comercio exterior y cuentas nacionales.",
    "Bolsa de Cereales de Buenos Aires y Bolsa de Comercio de Rosario: campañas y sequía 2022/23.",
    "Instituto Nacional de Vitivinicultura (INV): superficie y elaboración por provincia.",
    "FAO (FAOSTAT, AQUASTAT) y Banco Mundial (WDI).",
  ],
};
