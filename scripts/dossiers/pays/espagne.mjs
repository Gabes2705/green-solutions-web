export default {
  slug: "espagne",
  fichier: "espagne",
  palette: "vigne",
  locale: "es-ES",
  langue: "espagnol",
  pied: "Green Solutions · Estudio de mercado España",

  cover: {
    eyebrow: "ESTUDIO DE MERCADO",
    title: "España",
    officiel: "REINO DE ESPAÑA",
    lieu: "Madrid · 2026",
    marques: "ECOSORB® · ECOFERT® · NAPEMA® · PAULOWNIA",
    mention: "Septiembre de 2026 · Documento confidencial · Para uso exclusivo del destinatario",
    subtitle:
      "Olivar, hortícola bajo plástico y cítricos con el mayor regadío de Europa.\nLo que cambia la hidrorretención donde el método de riego ya no deja margen.",
    footer: "Green Solutions · contact@evergreen-ecosorb.com",
    photo: 3,
  },

  chiffres: {
    kicker: "EL MERCADO EN RESUMEN",
    title: "La huerta de Europa, sobre un recurso que se agota",
    items: [
      { value: "≈ 23,7 M ha", label: "de superficie agrícola utilizada" },
      { value: "≈ 3,9 M ha", label: "de regadío, el parque más extenso de la Unión Europea" },
      { value: "≈ 45 %", label: "del aceite de oliva del mundo sale de España" },
      { value: "≈ 60 %", label: "del valor de la producción vegetal procede del regadío" },
    ],
    note:
      "El regadío ocupa alrededor del 16 % de la superficie cultivada y genera cerca del 60 % del valor de la producción vegetal: la agricultura española que exporta es, casi en su totalidad, agricultura de riego. Esa concentración de valor sobre una fracción de la superficie es exactamente lo que vuelve crítico cada metro cúbico.",
  },

  contrainte: {
    kicker: "LA RESTRICCIÓN",
    title: "El método de riego ya está optimizado; el suelo no",
    photo: 2,
    caption: "Olivar en la campiña andaluza",
    bullets: [
      "España riega por goteo más de la mitad de su superficie regada, la proporción más alta de Europa: la vía de la eficiencia en la aplicación está prácticamente agotada.",
      "La agricultura concentra en torno al 80 % de la extracción de agua: cualquier tensión sobre el recurso se traduce primero en recortes de dotación.",
      "El gradiente de lluvia es extremo: más de 1 500 mm al año en la cornisa cantábrica, por debajo de 250 mm en el sureste peninsular.",
      "Entre 2022 y 2024, embalses de las cuencas del Guadalquivir y del interior de Cataluña operaron temporadas enteras por debajo de una cuarta parte de su capacidad, con dotaciones de riego recortadas o suspendidas.",
      "La respuesta pública —desalación, regeneración, modernización de regadíos, trasvases— actúa sobre la oferta. La hidrorretención actúa sobre la demanda, dentro de la parcela.",
    ],
  },

  usages: {
    kicker: "ADÓNDE VA EL AGUA",
    title: "El regadío concentra cuatro quintas partes de la extracción",
    type: "doughnut",
    data: [
      {
        name: "Extracción de agua",
        labels: ["Agricultura", "Abastecimiento urbano", "Industria"],
        values: [80, 13, 7],
      },
    ],
    opts: { showLegend: true, showValue: true, dataLabelFormatCode: '0"%"', holeSize: 55 },
    reading: {
      head: "Lo que implica",
      body:
        "Bajar un 10 % el consumo agrícola libera más volumen que suprimir por completo el uso industrial del país.\n\nPor eso el esfuerzo se concentra en la parcela, y no en los demás usos.",
    },
  },

  productions: {
    kicker: "LOS CULTIVOS",
    title: "Cinco producciones concentran el volumen",
    type: "bar",
    data: [
      {
        name: "Producción anual (millones de toneladas)",
        labels: ["Cereales*", "Hortalizas", "Aceituna*", "Cítricos", "Uva"],
        values: [20.0, 14.0, 6.5, 6.5, 6.0],
      },
    ],
    opts: { barDir: "col", dataLabelFormatCode: "0.0", showLegend: false },
    reading: {
      head: "Lectura",
      body:
        "* Cereal y aceituna son los dos rubros que más oscilan de una campaña a otra, porque dependen de la lluvia: la cosecha de aceituna de 2022/23 cayó a menos de la mitad de una campaña normal.\n\nHortalizas y cítricos se riegan en su práctica totalidad y se destinan a la exportación. Ahí el ahorro de agua se convierte directamente en margen.",
    },
  },

  solutions: {
    kicker: "NUESTRA RESPUESTA",
    title: "Dos tecnologías para dos restricciones distintas",
    left: {
      head: "EVERGREEN® — retener el agua",
      lines: [
        "Hidrorretenedor a base de potasio, incorporado en la zona radicular a la plantación o en la reposición de plantas.",
        "Capta el agua de lluvia o de riego y la devuelve a la planta de forma gradual, suprimiendo el estrés hídrico en las etapas críticas.",
        "Capacidad de absorción del orden de 300 veces su peso; efecto útil de 3 a 4 años en el suelo.",
        "Se degrada entre 20 y 25 % al año, sin acumulación ni riesgo de sobredosis.",
      ],
    },
    right: {
      head: "ECOFERT® — nutrir sin agotar el suelo",
      lines: [
        "Fertilizante en microdosis de aminoácidos, nitrógeno, fósforo y potasio, obtenido de recursos renovables.",
        "No quelante: no empobrece el complejo arcillo-húmico y no incrementa la salinidad ni el contenido de nitratos.",
        "Certificado por SOHISCERT, entidad andaluza, y conforme a la normativa europea de producción ecológica.",
        "De 1 a 4 frascos de 140 ml por hectárea, compatible con los equipos de fertirriego ya instalados.",
      ],
    },
    note:
      "Los dos productos se venden por separado, pero fueron concebidos para reforzarse: el hidrorretenedor prolonga la disponibilidad del agua y el fertilizante valoriza esa agua disponible sin degradar el suelo. En zona vulnerable a nitratos, el carácter no quelante y la microdosis del segundo importan tanto como el ahorro de agua del primero.",
  },

  economies: {
    kicker: "ÓRDENES DE MAGNITUD",
    title: "Ahorro de agua esperado según el método de riego",
    type: "bar",
    data: [
      {
        name: "Rango bajo (%)",
        labels: ["Goteo", "Microaspersión", "Pivote", "Gravedad"],
        values: [40, 45, 50, 55],
      },
      {
        name: "Rango alto (%)",
        labels: ["Goteo", "Microaspersión", "Pivote", "Gravedad"],
        values: [55, 60, 65, 70],
      },
    ],
    opts: { barDir: "col", barGrouping: "clustered", dataLabelFormatCode: '0"%"' },
    reading: {
      head: "Leer con prudencia",
      body:
        "Estos rangos son indicativos y se apoyan en las ganancias documentadas de nuestros hidrorretenedores.\n\nEl resultado real depende del suelo, del clima y del cultivo. Estas cifras dan un orden de magnitud: en ningún caso constituyen un valor garantizado, contractual ni absoluto.",
    },
  },

  regions: {
    kicker: "TRES ZONAS PRIORITARIAS",
    title: "Dónde iniciar los primeros ensayos",
    items: [
      {
        photo: 3,
        head: "Jaén y Córdoba",
        metric: "≈ 1,6 M ha de olivar en Andalucía",
        lines: [
          "Mayor concentración de olivar del mundo, con buena parte aún en secano: el hidrorretenedor actúa donde no hay riego.",
          "Las campañas 2022/23 y 2023/24 mostraron lo que cuesta una floración sin agua.",
          "Tejido cooperativo denso: el ensayo se decide en grupo, no finca por finca.",
        ],
      },
      {
        photo: 0,
        head: "Murcia — Campo de Cartagena",
        metric: "Hortícola de exportación",
        lines: [
          "La huerta de exportación por excelencia, con dotaciones dependientes del trasvase Tajo-Segura y sometidas a recortes reiterados.",
          "El Mar Menor ha impuesto el marco regulatorio más estricto del país en materia de nitratos: reducir aportes sin perder rendimiento es la exigencia central.",
          "Riego localizado generalizado: el margen de ahorro ya no está en el método, sino en lo que el suelo es capaz de retener.",
        ],
      },
      {
        photo: 4,
        head: "Almería — Campo de Dalías",
        metric: "≈ 33 000 ha de invernadero",
        lines: [
          "La mayor superficie de cultivo bajo plástico del mundo, sobre acuíferos sobreexplotados y con intrusión salina en la franja costera.",
          "Ciclos cortos y rotaciones rápidas: el ensayo da resultado en una campaña, no en cuatro años.",
          "Compradores del norte de Europa que auditan la huella hídrica de sus proveedores y piden trazabilidad documental.",
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
        body: "Análisis del suelo, del método de riego y del cultivo. Sin compromiso en esta etapa.",
      },
      {
        head: "Parcela piloto",
        body: "Un ensayo comparativo en una parcela, con parcela testigo conducida de forma idéntica.",
      },
      {
        head: "Medición",
        body: "Registro de consumo de agua y de rendimiento durante un ciclo de cultivo completo.",
      },
      {
        head: "Extensión",
        body: "Ampliación gradual a las demás parcelas sobre la base de los resultados constatados.",
      },
    ],
    note:
      "La regla de dosificación es la misma en todas partes: 3 gramos por litro de tierra útil. Lo que cambia de una finca a otra es el volumen de suelo que las raíces exploran realmente.",
  },

  risques: {
    kicker: "LO QUE HAY QUE ANTICIPAR",
    title: "Riesgos identificados y respuestas",
    left: {
      head: "Riesgos",
      lines: [
        "Variabilidad entre campañas: un año lluvioso enmascara el interés del producto.",
        "Parque de riego ya muy tecnificado: el comprador pregunta qué aporta el producto por encima del goteo que ya tiene instalado.",
        "Marco europeo sobre microplásticos añadidos intencionadamente: cualquier polímero agrícola queda bajo escrutinio.",
        "Competencia de polímeros baratos a base de sodio, que dejaron mal recuerdo en suelos ya salinizados.",
      ],
    },
    right: {
      head: "Respuestas",
      lines: [
        "Conducir el ensayo sobre un ciclo completo con parcela testigo, para objetivar la ganancia incluso en año favorable.",
        "Medir el ahorro sobre el goteo mismo: la hidrorretención actúa en el suelo, no en el método de aplicación.",
        "Aportar la documentación de degradación —entre 20 y 25 % al año, sin acumulación— y el screening REACH / SVHC.",
        "Documentar la formulación: potasio y no sodio, compatible con cultivos alimentarios y con suelos salinos.",
      ],
    },
    note:
      "Análisis de acrilamida (laboratorio Polymex, ISO 9001, contenido inferior a 3,0 µg/g), screening REACH / SVHC (SGS) y certificado SOHISCERT vigente hasta el 4 de septiembre de 2027, disponibles a solicitud. SOHISCERT tiene su sede en Sevilla: el organismo que nos certifica es el mismo que audita a buena parte de sus vecinos.",
  },

  closing: {
    photo: 1,
    title: "Cuéntenos cómo es su finca",
    body:
      "Cultivo, método de riego, tipo de suelo, volumen de agua que consume hoy. Volvemos con la combinación de tecnologías correspondiente, las dosis y los ensayos ya realizados en situaciones comparables.\n\nUna primera conversación no compromete a nada.",
    contact: "contact@evergreen-ecosorb.com · Green Solutions Groupe AIM SA, 46, route de la Condémine, 1475 Forel, Suiza",
  },
};
