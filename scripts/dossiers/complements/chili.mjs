// Las siete páginas que completan el dossier de Chile (ver build.mjs).
export default {
  paysTitre: "Chile",

  economie: {
    kicker: "ECONOMÍA Y SEGURIDAD ALIMENTARIA",
    title: "Un exportador de fruta fresca hacia el mundo entero",
    items: [
      { value: "N.º 1", label: "exportador mundial de cerezas frescas" },
      { value: "≈ 90 %", label: "de las cerezas chilenas exportadas se venden en China" },
      { value: "> 60", label: "economías con un acuerdo comercial vigente con Chile" },
    ],
    note:
      "La fruta fresca —cerezas, uva de mesa, arándanos, manzanas y paltas— sostiene las exportaciones agrícolas junto al vino. Ese modelo depende del riego en valles donde el Código de Aguas, reformado en 2022, prioriza el consumo humano y limita los nuevos derechos.",
  },

  filieres: [
    {
      kicker: "PRIMER SECTOR",
      title: "Palta en laderas: árboles caros de mantener sin agua",
      photo: 3,
      bullets: [
        "La palta Hass se planta en laderas de Valparaíso, Coquimbo y la Región Metropolitana, regadas por goteo.",
        "En Petorca y La Ligua la escasez de agua obligó a abandonar huertos y abrió un debate nacional sobre su uso.",
        "Un palto adulto no tolera cortes largos de riego: el estrés hídrico hace caer la fruta y compromete la temporada siguiente.",
        "Los suelos de ladera, delgados y con pendiente, retienen poca agua entre dos riegos.",
        "EVERGREEN® en la plantación o en la línea de goteo mantiene el agua en la zona de raíces.",
      ],
    },
    {
      kicker: "SEGUNDO SECTOR",
      title: "Uva de mesa y cerezas: exportar con menos agua",
      photo: 0,
      bullets: [
        "La uva de mesa se concentra de Atacama a O'Higgins; la cereza avanza de O'Higgins hacia el Maule y más al sur.",
        "Los compradores de Asia, Estados Unidos y Europa pagan calibre, firmeza y condición tras semanas de viaje.",
        "Las dotaciones de los canalistas bajan en años secos y la extracción subterránea está cada vez más limitada.",
        "Un riego regular durante el crecimiento del fruto evita partiduras y problemas de calibre.",
        "NAPEMA® controla plagas sin residuos, un requisito de los protocolos fitosanitarios de exportación.",
      ],
    },
  ],

  rendement: ["avocats", "raisin", "pommes", "myrtilles", "tomates"],

  sources: [
    "Banco Central de Chile: cuentas nacionales y exportaciones.",
    "ODEPA: boletines de exportaciones silvoagropecuarias y de fruta fresca.",
    "Dirección General de Aguas: Código de Aguas y decretos de escasez hídrica.",
    "FAO (FAOSTAT, AQUASTAT) y Banco Mundial (WDI).",
  ],
};
