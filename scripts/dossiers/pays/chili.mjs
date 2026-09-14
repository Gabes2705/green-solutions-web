export default {
  slug: "chili",
  fichier: "chili",
  palette: "vigne",
  locale: "es-CL",
  langue: "espagnol",
  pied: "Green Solutions · Estudio de mercado Chile",

  cover: {
    eyebrow: "ESTUDIO DE MERCADO",
    title: "Chile",
    subtitle:
      "Fruta de exportación, viñedos y hortalizas bajo una sequía de más de una década.\nLo que cambia la hidrorretención en una agricultura de contraestación.",
    footer: "Green Solutions · contact@evergreen-ecosorb.com",
    photo: 0,
  },

  chiffres: {
    kicker: "EL MERCADO EN RESUMEN",
    title: "Una agricultura exportadora en un país largo y seco",
    items: [
      { value: "≈ 3 %", label: "del PIB lo aporta el sector silvoagropecuario" },
      { value: "≈ 1,1 M ha", label: "de superficie bajo riego, sobre todo en el centro" },
      { value: "≈ 20 000 M", label: "de dólares en exportaciones silvoagropecuarias al año" },
      { value: "≈ 9 %", label: "del empleo nacional depende del sector" },
    ],
    note:
      "La agricultura chilena vive de la contraestación: exporta fruta al hemisferio norte cuando allá es invierno, con más de 25 acuerdos comerciales vigentes. Esa ventaja comercial descansa sobre un recurso hídrico que lleva más de una década por debajo de lo normal en la zona central.",
  },

  contrainte: {
    kicker: "LA RESTRICCIÓN",
    title: "Más de una década de megasequía en la zona central",
    photo: 3,
    caption: "Parronal bajo riego, valle central",
    bullets: [
      "Desde 2010 la zona central acumula déficits de precipitación del orden de 20 a 40 % año tras año: es el episodio seco más prolongado del que se tenga registro en el país.",
      "La agricultura concentra cerca del 72 % del agua de uso consuntivo: cualquier tensión sobre el recurso se traduce primero en restricciones de riego.",
      "El gradiente de lluvia es extremo: menos de 10 mm al año en el desierto de Atacama, del orden de 300 mm en Santiago y más de 1 500 mm en la zona lluviosa del sur.",
      "Los embalses de Coquimbo y del valle central han operado varias temporadas muy por debajo de su capacidad, y decenas de comunas siguen bajo decreto de escasez hídrica.",
      "La respuesta pública —embalses, revestimiento de canales, desalación en el norte— actúa sobre la oferta. La hidrorretención actúa sobre la demanda, dentro del predio.",
    ],
  },

  usages: {
    kicker: "ADÓNDE VA EL AGUA",
    title: "El riego concentra casi tres cuartos de la extracción",
    type: "doughnut",
    data: [
      {
        name: "Uso consuntivo del agua",
        labels: ["Agricultura", "Agua potable", "Industria y minería"],
        values: [72, 11, 17],
      },
    ],
    opts: { showLegend: true, showValue: true, dataLabelFormatCode: '0"%"', holeSize: 55 },
    reading: {
      head: "Lo que implica",
      body:
        "Con casi tres cuartos del uso consuntivo, el riego es el único frente donde un ahorro moderado mueve volúmenes grandes: bajar un 10 % el consumo agrícola equivale a cerca de dos tercios de toda el agua potable del país.\n\nPor eso el esfuerzo se concentra en el predio, y no en los demás usos.",
    },
  },

  productions: {
    kicker: "LOS RUBROS",
    title: "Cinco producciones concentran el volumen agrícola",
    type: "bar",
    data: [
      {
        name: "Producción anual (millones de toneladas)",
        labels: ["Uva*", "Trigo", "Manzana", "Papa", "Maíz"],
        values: [2.6, 1.3, 1.2, 1.1, 1.0],
      },
    ],
    opts: { barDir: "col", dataLabelFormatCode: "0.0", showLegend: false },
    reading: {
      head: "Lectura",
      body:
        "* Uva vinífera y de mesa en conjunto: la vinífera aporta la mayor parte del volumen, la de mesa el mayor valor por hectárea.\n\nLa fruta de exportación —cerezas, uva de mesa, manzanas, paltas— se riega prácticamente en su totalidad. Ahí el ahorro de agua se convierte directamente en margen.",
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
        "Certificado SOHISCERT y EU Bio, condición de acceso a los pliegos de los compradores europeos.",
        "De 1 a 4 frascos de 140 ml por hectárea, compatible con los equipos de fertirriego ya instalados.",
      ],
    },
    note:
      "Los dos productos se venden por separado, pero fueron concebidos para reforzarse: el hidrorretenedor prolonga la disponibilidad del agua y el fertilizante valoriza esa agua disponible sin degradar el suelo.",
  },

  economies: {
    kicker: "ÓRDENES DE MAGNITUD",
    title: "Ahorro de agua esperado según el método de riego",
    type: "bar",
    data: [
      {
        name: "Rango bajo (%)",
        labels: ["Goteo", "Microaspersión", "Pivote", "Surco"],
        values: [40, 45, 50, 55],
      },
      {
        name: "Rango alto (%)",
        labels: ["Goteo", "Microaspersión", "Pivote", "Surco"],
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
        photo: 1,
        head: "Coquimbo",
        metric: "Del orden de 100 mm de lluvia al año",
        lines: [
          "Uva de mesa, uva pisquera, cítricos y palta: casi toda la superficie ya se riega por goteo y no queda margen de ahorro en el método mismo.",
          "Los embalses del Limarí y del Elqui han operado temporadas enteras a una fracción de su capacidad, con turnos de agua y superficie arrancada.",
          "Suelos delgados y pedregosos, de baja retención: el agua aplicada percola antes de que la raíz alcance a aprovecharla.",
        ],
      },
      {
        photo: 4,
        head: "Valparaíso — Aconcagua",
        metric: "≈ 60 % de la palta nacional",
        lines: [
          "Concentra la mayor parte del palto del país, cultivo de alta exigencia hídrica y plantado con frecuencia en laderas de cerro.",
          "La cuenca del Petorca es el caso emblemático del conflicto por el agua: la presión regulatoria y reputacional es máxima.",
          "Exportadores expuestos a las auditorías hídricas de los compradores europeos y norteamericanos.",
        ],
      },
      {
        photo: 2,
        head: "O'Higgins y Maule",
        metric: "≈ 50 000 ha de viñedos en Maule",
        lines: [
          "Corazón del cerezo de exportación a China y del manzano: fruta de alto valor donde el estrés hídrico en cuaja y llenado cuesta calibre.",
          "Viñedos del secano interior y costero, sin riego o con riego deficitario: el hidrorretenedor actúa donde no hay infraestructura.",
          "Predios medianos y grandes, con capacidad técnica para conducir un ensayo con parcela testigo.",
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
      "La regla de dosificación es la misma en todas partes: 3 gramos por litro de tierra útil. Lo que cambia de un predio a otro es el volumen de suelo que las raíces exploran realmente.",
  },

  risques: {
    kicker: "LO QUE HAY QUE ANTICIPAR",
    title: "Riesgos identificados y respuestas",
    left: {
      head: "Riesgos",
      lines: [
        "Variabilidad entre temporadas: un año lluvioso, ligado a El Niño, enmascara el interés del producto.",
        "Parque de riego ya muy tecnificado: el comprador pregunta qué aporta el producto por sobre el goteo.",
        "Competencia de polímeros baratos a base de sodio, que dejaron mal recuerdo en suelos salinos.",
        "Trámites de registro e ingreso de insumos ante el SAG, y liquidez de los predios tras varias temporadas secas.",
      ],
    },
    right: {
      head: "Respuestas",
      lines: [
        "Conducir el ensayo sobre un ciclo completo con parcela testigo, para objetivar la ganancia incluso en año favorable.",
        "Medir el ahorro sobre el goteo mismo: la hidrorretención actúa en el suelo, no en el método de aplicación.",
        "Documentar la formulación: potasio y no sodio, compatible con cultivos alimentarios.",
        "Escalonar el compromiso: el efecto útil de 3 a 4 años amortiza el costo sobre varias temporadas.",
      ],
    },
    note:
      "Análisis de acrilamida (laboratorio Polymex, ISO 9001, contenido inferior a 3,0 µg/g), screening REACH / SVHC (SGS) y certificado SOHISCERT vigente hasta el 4 de septiembre de 2027, disponibles a solicitud.",
  },

  closing: {
    photo: 5,
    title: "Cuéntenos cómo es su predio",
    body:
      "Cultivo, método de riego, tipo de suelo, volumen de agua que consume hoy. Volvemos con la combinación de tecnologías correspondiente, las dosis y los ensayos ya realizados en situaciones comparables.\n\nUna primera conversación no compromete a nada.",
    contact: "contact@evergreen-ecosorb.com · 821 Chemin des Clapiers, 83220 Le Pradet, France",
  },
};
