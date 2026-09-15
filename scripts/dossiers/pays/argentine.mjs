export default {
  slug: "argentine",
  fichier: "argentine",
  palette: "plaine",
  locale: "es-AR",
  langue: "espagnol",
  pied: "Green Solutions · Dossier de mercado Argentina",

  cover: {
    eyebrow: "DOSSIER DE MERCADO",
    title: "Argentina",
    officiel: "REPÚBLICA ARGENTINA",
    lieu: "Buenos Aires · 2026",
    marques: "ECOSORB® · ECOFERT® · NAPEMA® · PAULOWNIA",
    mention: "Septiembre de 2026 · Documento confidencial · Para uso exclusivo del destinatario",
    subtitle:
      "Granos, vid y fruta de exportación bajo una restricción hídrica creciente.\nLo que la hidro-retención cambia para una agricultura exportadora.",
    footer: "Green Solutions · contact@evergreen-ecosorb.com",
    photo: 4,
  },

  chiffres: {
    kicker: "EL MERCADO EN SÍNTESIS",
    title: "Un gigante agroexportador expuesto a la sequía",
    items: [
      { value: "≈ 60 %", label: "del valor exportado en bienes viene del agro" },
      { value: "≈ 40 M ha", label: "sembradas con cultivos extensivos cada campaña" },
      { value: "≈ 2,1 M ha", label: "bajo riego, cerca del 5 % de la superficie sembrada" },
      { value: "≈ 7 %", label: "del PIB aportado en forma directa por el agro" },
    ],
    note:
      "El sector agropecuario aporta en forma directa alrededor del 7 % del PIB, y cerca del 20 % si se suma la agroindustria. La producción se concentra en pocos cultivos y en pocas provincias: una sequía regional tiene efecto macroeconómico inmediato sobre el ingreso de divisas.",
  },

  contrainte: {
    kicker: "LA LIMITACIÓN",
    title: "La sequía dejó de ser una excepción de calendario",
    photo: 3,
    caption: "Lote bajo riego por pivote, región pampeana",
    bullets: [
      "La campaña 2022/23 fue la más seca en décadas: la soja cayó a unos 20 millones de toneladas, menos de la mitad de un año normal, y el maíz a cerca de 34 millones.",
      "Las pérdidas de exportación de esa sola campaña fueron estimadas en el orden de 20 000 millones de dólares, sobre un complejo agroindustrial que sostiene la balanza comercial.",
      "La agricultura moviliza del orden del 74 % del agua extraída del país: toda tensión sobre el recurso se traduce primero en restricciones al riego.",
      "El gradiente pluviométrico es extremo: de más de 1 500 mm anuales en Misiones a menos de 200 mm en Mendoza, San Juan y el norte patagónico.",
      "La respuesta pública trabaja sobre la oferta — embalses, revestimiento de canales, riego tecnificado. La hidro-retención actúa sobre la demanda, en el lote.",
    ],
  },

  usages: {
    kicker: "ADÓNDE VA EL AGUA",
    title: "El riego concentra la mayor parte de la extracción",
    type: "doughnut",
    data: [
      {
        name: "Extracciones",
        labels: ["Agricultura", "Agua potable", "Industria"],
        values: [74, 15, 11],
      },
    ],
    opts: { showLegend: true, showValue: true, dataLabelFormatCode: '0"%"', holeSize: 55 },
    reading: {
      head: "Lo que esto implica",
      body:
        "Reducir un 10 % el consumo agrícola libera un volumen equivalente a cerca de dos tercios de todo el uso industrial del país.\n\nPor eso el esfuerzo se concentra en el lote y no en los demás usos. En las provincias áridas de Cuyo la participación del riego supera el 80 %.",
    },
  },

  productions: {
    kicker: "LOS CULTIVOS",
    title: "Cinco cultivos concentran el volumen producido",
    type: "bar",
    data: [
      {
        name: "Producción anual (millones de toneladas)*",
        labels: ["Maíz", "Soja", "Trigo", "Cebada", "Girasol"],
        values: [50, 45, 18, 5, 4],
      },
    ],
    opts: { barDir: "col", dataLabelFormatCode: "0", showLegend: false },
    reading: {
      head: "Lectura",
      body:
        "Maíz y soja concentran el volumen y son mayoritariamente de secano: el rendimiento sigue directamente a la lluvia de diciembre y enero.\n\n* Los volúmenes varían mucho entre campañas. En 2022/23 la soja cayó a cerca de 20 millones de toneladas.",
    },
  },

  solutions: {
    kicker: "NUESTRA RESPUESTA",
    title: "Dos tecnologías para dos limitaciones distintas",
    left: {
      head: "EVERGREEN® — retener el agua",
      lines: [
        "Hidro-retenedor a base de potasio, colocado en la zona radicular en la siembra o en la plantación.",
        "Capta el agua de lluvia o de riego y la devuelve a la planta a medida que la necesita, suprimiendo el estrés hídrico en las etapas críticas.",
        "Capacidad de absorción del orden de 300 veces su peso; vida útil de 3 a 4 años en el suelo.",
        "Se degrada entre 20 y 25 % por año, sin acumulación ni riesgo de sobredosis.",
      ],
    },
    right: {
      head: "ECOFERT® — nutrir sin agotar",
      lines: [
        "Fertilizante en microdosis de aminoácidos, nitrógeno, fósforo y potasio, de origen renovable.",
        "No quelante: no empobrece el complejo arcillo-húmico ni aumenta la salinidad ni el contenido de nitratos.",
        "Certificado SOHISCERT y EU Bio — condición de acceso a los pliegos de los compradores europeos.",
        "De 1 a 4 frascos de 140 ml por hectárea, compatible con los equipos de fertirriego existentes.",
      ],
    },
    note:
      "Los dos productos se venden por separado pero fueron concebidos para reforzarse: el hidro-retenedor prolonga la disponibilidad del agua, el fertilizante valoriza esa agua disponible sin degradar el suelo.",
  },

  economies: {
    kicker: "ÓRDENES DE MAGNITUD",
    title: "Ahorro de agua esperado según el método de riego",
    type: "bar",
    data: [
      {
        name: "Rango inferior (%)",
        labels: ["Goteo", "Aspersión", "Pivote central", "Manto / surco"],
        values: [40, 50, 50, 55],
      },
      {
        name: "Rango superior (%)",
        labels: ["Goteo", "Aspersión", "Pivote central", "Manto / surco"],
        values: [55, 65, 65, 70],
      },
    ],
    opts: { barDir: "col", barGrouping: "clustered", dataLabelFormatCode: '0"%"' },
    reading: {
      head: "Leer con prudencia",
      body:
        "Estos rangos son indicativos y se apoyan en las mejoras documentadas de nuestros hidro-retenedores.\n\nEl resultado real depende del suelo, del clima y del cultivo. Las cifras dan un orden de magnitud: en ningún caso constituyen un valor garantizado, contractual ni absoluto.",
    },
  },

  regions: {
    kicker: "TRES ZONAS PRIORITARIAS",
    title: "Dónde conviene iniciar los primeros ensayos",
    items: [
      {
        photo: 1,
        head: "Cuyo — Mendoza y San Juan",
        metric: "≈ 190 000 ha de viñedo",
        lines: [
          "Menos de 200 mm de lluvia al año: toda la producción depende del deshielo andino y del riego por manto o por goteo.",
          "Vid, olivo y frutales de alto valor unitario, con destino de exportación y pliegos de calidad exigentes.",
          "Suelos arenosos y pedregosos de baja capacidad de retención, donde el efecto del hidro-retenedor es directamente medible.",
        ],
      },
      {
        photo: 5,
        head: "Pampa Húmeda",
        metric: "≈ 30 M ha sembradas",
        lines: [
          "Corazón de la producción de soja, maíz y trigo, repartido entre Buenos Aires, Córdoba y Santa Fe.",
          "Producción casi enteramente de secano: el riesgo no es la falta de riego sino el veranillo de enero.",
          "Estructuras grandes y profesionalizadas, capaces de conducir un ensayo comparativo con lote testigo.",
        ],
      },
      {
        photo: 2,
        head: "Alto Valle del Río Negro",
        metric: "≈ 40 000 ha de pepita",
        lines: [
          "Peras y manzanas para exportación en un valle que recibe cerca de 200 mm de lluvia al año.",
          "Riego gravitacional heredado, con márgenes de mejora importantes en la eficiencia de aplicación.",
          "Ventana de exportación a contraestación hacia Europa y Brasil: la calibración del fruto condiciona el precio.",
        ],
      },
    ],
  },

  deploiement: {
    kicker: "CÓMO TRABAJAMOS",
    title: "Un despliegue por etapas, medido en cada paso",
    items: [
      {
        head: "Diagnóstico",
        body: "Análisis del suelo, del método de riego y del cultivo. Sin ningún compromiso en esta etapa.",
      },
      {
        head: "Lote piloto",
        body: "Un ensayo comparativo sobre un lote, con lote testigo conducido de manera idéntica.",
      },
      {
        head: "Medición",
        body: "Registro de consumo de agua y de rendimiento a lo largo de un ciclo productivo completo.",
      },
      {
        head: "Extensión",
        body: "Ampliación progresiva a los demás lotes sobre la base de los resultados observados.",
      },
    ],
    note:
      "La regla de dosificación es la misma en todas partes: 3 gramos por litro de tierra útil. Lo que cambia de un lote a otro es el volumen de suelo que las raíces exploran efectivamente.",
  },

  risques: {
    kicker: "QUÉ HAY QUE PREVER",
    title: "Riesgos identificados y nuestras respuestas",
    left: {
      head: "Riesgos",
      lines: [
        "Variabilidad interanual de las lluvias: una campaña húmeda oculta el interés del producto.",
        "Volatilidad cambiaria y de los costos de importación, que complica la previsibilidad del precio en pesos.",
        "Antecedentes de polímeros de baja calidad a base de sodio, que dejaron mala reputación entre los productores.",
        "Decisión de compra dispersa entre productor, ingeniero agrónomo y distribuidor de insumos.",
      ],
    },
    right: {
      head: "Respuestas",
      lines: [
        "Conducir el ensayo sobre un ciclo completo con lote testigo, para objetivar la mejora incluso en un año favorable.",
        "Escalonar el compromiso: la vida útil de 3 a 4 años amortiza el costo sobre varias campañas.",
        "Documentar la formulación: potasio y nunca sodio, compatible con cultivos alimentarios.",
        "Trabajar a través de cooperativas, distribuidores de insumos y asesores técnicos, y entregar el protocolo de ensayo por anticipado.",
      ],
    },
    note:
      "Análisis de acrilamida (laboratorio Polymex, ISO 9001, contenido inferior a 3,0 µg/g) y screening REACH / SVHC (SGS) disponibles a pedido, junto con el certificado SOHISCERT vigente hasta el 4 de septiembre de 2027.",
  },

  closing: {
    photo: 3,
    title: "Cuéntenos cómo es su lote",
    body:
      "Cultivo, método de riego, tipo de suelo y volumen de agua que aplica hoy. Volvemos con la combinación de tecnologías correspondiente, las dosis, y los ensayos ya conducidos en situaciones comparables.\n\nUna primera conversación no compromete a nada.",
    contact: "contact@evergreen-ecosorb.com · Green Solutions Groupe AIM SA, 46, route de la Condémine, 1475 Forel, Suiza",
  },
};
