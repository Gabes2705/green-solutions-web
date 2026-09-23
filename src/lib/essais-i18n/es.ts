import type { Traduction } from "./types";

/** Les essais de terrain en espagnol. */
export const es: Traduction = {
  habillage: {
    retour: "← Todos los ensayos",
    tousLesEssais: "Ver todos los ensayos →",
    lireRapport: "Leer el informe completo (PDF)",
    resultatsEyebrow: "Resultados",
    resultatsTitre: "Lo que midió el ensayo",
    imagesEyebrow: "En imágenes",
    imagesTitre: "Antes y después: la diferencia medida",
    mecaniqueEyebrow: "Cómo funciona",
    mecaniqueTitre: "El agua se queda donde la planta la necesita",
    mecaniqueTexte:
      "Mezclado con el suelo junto a las raíces, el hidrorretenedor se llena de agua en cada riego o cada lluvia, en lugar de dejar que se evapore o se filtre en profundidad. Después se la devuelve a la planta, día tras día. Se riega menos a menudo, y la planta no pasa sed entre dos riegos.",
    ficheEyebrow: "Ficha del ensayo",
    ficheTitre: "Dónde, cuándo y quién",
    culture: "Cultivo",
    lieu: "Lugar",
    periode: "Periodo",
    conduitPar: "Realizado por",
    produits: "Productos",
    methodeEyebrow: "Método",
    methodeTitre: "Cómo se realizó el ensayo",
    observationsEyebrow: "Observaciones",
    observationsTitre: "Lo que conviene recordar",
    autresEyebrow: "Otros ensayos",
    autresTitre: "Los mismos productos, en otros cultivos",
    hubEyebrow: "Ensayos de campo",
    hubTitre: "Menos agua, más cosecha: los resultados medidos",
    hubChapeau:
      "Universidades, centros de investigación y explotaciones han probado el hidrorretenedor EVERGREEN, solo o con el fertilizante ECOFERT, en siete cultivos y en seis países. Cada página recoge las cifras del informe y enlaza con el documento completo.",
    hubPrincipe:
      "El principio es el mismo en todas partes: el hidrorretenedor guarda el agua junto a las raíces y se la devuelve a la planta poco a poco. Según el cultivo y el clima, los ensayos miden hasta un 82 % menos de agua y hasta un 93 % más de cosecha.",
    hubTermines: "Los ensayos terminados",
    hubEnCours: "Los ensayos en curso con universidades",
    hubGuides: "Nuestras guías",
    hubCreditPhoto: "Foto de cabecera:",
    guideProduit: "Ver la ficha del producto",
    guidePreuvesEyebrow: "Pruebas de campo",
    guidePreuvesTitre: "Los ensayos que lo midieron",
    guideResultatsEyebrow: "Resultados de campo",
    guideResultatsTitre: "Lo que midieron los ensayos",
    guideComparaisonEyebrow: "Comparación",
    guideFaqEyebrow: "Preguntas frecuentes",
    guideFaqTitre: "Lo que más nos preguntan",
    guideOui: "Sí",
    guideNon: "No",
    guideCritere: "Criterio",
  },
  essais: {
    "palmiers-dattiers-emirats-icba": {
      titre: "Palmeras datileras en los Emiratos: un 82 % menos de agua de riego",
      description:
        "Ensayo EVERGREEN realizado por el ICBA en Dubái con 27 palmeras datileras en suelo arenoso: un 82 % de agua de riego ahorrada y un 20 % más de dátiles.",
      culture: "Palmera datilera",
      lieu: "Estación de investigación del ICBA, Dubái",
      pays: "Emiratos Árabes Unidos",
      periode: "Campaña 2020-2021",
      conduit: "ICBA — International Center for Biosaline Agriculture",
      produits: "EVERGREEN (hidrorretenedor)",
      chapeau:
        "En los Emiratos caen unos 50 mm de lluvia al año y casi toda la agricultura depende del riego. El ICBA probó EVERGREEN al aire libre, en suelo arenoso y salino, con palmeras datileras de unos 8 años.",
      resultats: [
        "de agua de riego en toda la campaña",
        "de agua en los últimos 7 meses, sin estrés para los árboles",
        "más dátiles con 300 g por árbol",
        "frecuencia de riego de los árboles tratados",
      ],
      protocole: [
        "27 palmeras datileras plantadas a 8 × 8 m, en la estación de investigación del ICBA.",
        "EVERGREEN incorporado en los primeros 50 cm de suelo al inicio de la campaña, con varias dosis por árbol (entre ellas 300 g, 500 g y 1000 g).",
        "Riego controlado por sondas que miden la humedad del suelo en tiempo real.",
        "Comparación con árboles testigo sin EVERGREEN.",
      ],
      constats: [
        "Los árboles tratados no mostraron ningún signo de sequía ni daño durante la campaña.",
        "Los nutrientes disponibles en el suelo son claramente mayores con EVERGREEN: el agua y los minerales se quedan en la zona de raíces en lugar de filtrarse en profundidad.",
        "La actividad biológica del suelo (respiración y biomasa microbiana) aumenta.",
        "El ICBA confirma todos los resultados obtenidos en condiciones de campo.",
      ],
      graphiques: [
        {
          titre: "Agua de riego en la campaña (índice, testigo = 100)",
          barres: ["Sin EVERGREEN", "Con EVERGREEN"],
        },
        { titre: "Rendimiento en dátiles (índice, testigo = 100)", barres: ["Sin EVERGREEN", "300 g por árbol"] },
      ],
    },
    "pasteques-mexique": {
      titre: "Sandías en México: un 60,5 % menos de agua y un 30 % más de cosecha",
      description:
        "Ensayo EVERGREEN en 2600 plantas de sandía en Hermosillo (Sonora, México), a 45 °C: un 60,5 % de agua ahorrada y una cosecha un 30 % mayor.",
      culture: "Sandía (variedad Charleston)",
      lieu: "Hermosillo, Sonora",
      pays: "México",
      periode: "15 de febrero – 2 de agosto de 2023",
      conduit: "Ensayo de campo de Green Solutions",
      produits: "EVERGREEN (hidrorretenedor)",
      chapeau:
        "Sonora encabeza la producción de sandía en México, pero la sequía lo golpeó con fuerza en 2023. El ensayo debía medir el agua ahorrada con EVERGREEN en una región muy árida, con días a 45 °C de media.",
      resultats: [
        "de agua de riego",
        "más cosecha que la parcela regada al 100 %",
        "de contenido medio de azúcar en la fruta",
        "de EVERGREEN por planta",
      ],
      protocole: [
        "2600 plantas de sandía.",
        "Parcela testigo sin EVERGREEN, regada al 100 %.",
        "Parcela tratada con 5 g de EVERGREEN por planta (2 g más que los 3 g habitualmente aconsejados).",
      ],
      constats: [
        "Clima extremadamente caluroso y seco, sobre suelo árido.",
        "La dosis depende del tipo de suelo (arcilloso, arenoso, pedregoso, calcáreo) y del modo de riego (pozo, goteo, lluvia).",
        "Otro método posible: 15 a 20 g de EVERGREEN por metro lineal, según la variedad.",
      ],
      graphiques: [
        { titre: "Agua de riego (índice, testigo = 100)", barres: ["Sin EVERGREEN", "5 g por planta"] },
        { titre: "Cosecha (índice, testigo = 100)", barres: ["Sin EVERGREEN", "5 g por planta"] },
      ],
    },
    "coton-turquie-hatay": {
      titre: "Algodón en Turquía: rendimiento casi duplicado con estrés hídrico",
      description:
        "Demostración EVERGREEN en algodón en la región de Hatay (Turquía) en 2025: rendimiento de 2,53 a 4,88 t/ha (+93 %) pese a una grave escasez de agua.",
      culture: "Algodón",
      lieu: "Finca Mistikoğlu Tarım, llanura de Amik, Hatay",
      pays: "Turquía",
      periode: "Campaña 2025",
      conduit: "Green Solutions con la cooperativa Teknik Tarım",
      produits: "EVERGREEN (hidrorretenedor), inyectado bajo la zona de raíces",
      chapeau:
        "La región de Hatay sufre escasez crónica de agua, fuerte calor y una red de riego dañada por el terremoto de 2023. En julio de 2025 la llanura de Amik vivió una crisis de agua sin precedentes. Allí se realizó el ensayo.",
      resultats: [
        "de rendimiento: 4,88 t/ha frente a 2,53 t/ha",
        "de productividad del agua, como mínimo",
        "de ingreso bruto (3300 $ frente a 1710 $)",
        "de beneficio neto, descontados producto y aplicación",
      ],
      protocole: [
        "EVERGREEN inyectado bajo la zona de raíces con las herramientas de inyección de Green Solutions, en los caballones preparados para la siembra.",
        "Varias dosis comparadas: 48, 55, 58 y 62 kg/ha.",
        "Comparación con una zona testigo sin tratamiento.",
        "Riego habitual de la región: por inundación desde canales abiertos.",
      ],
      constats: [
        "El algodón tratado mantuvo mejor crecimiento y más biomasa pese a la falta de agua.",
        "La diferencia se ve desde las primeras semanas, un periodo decisivo para el rendimiento final del algodón.",
      ],
      graphiques: [
        { titre: "Rendimiento en algodón (t/ha)", barres: ["Zona testigo", "Con EVERGREEN"] },
        { titre: "Ingreso bruto (USD/ha)", barres: ["Zona testigo", "Con EVERGREEN"] },
      ],
    },
    "mais-turquie-konya": {
      titre: "Maíz en Turquía: un 39 % menos de agua y un 17 % más de rendimiento",
      description:
        "Demostración EVERGREEN en maíz en Konya (TIGEM, Turquía) en 2025: 528 mm de riego en lugar de 864 mm, y 12 060 kg/ha frente a 10 300 kg/ha.",
      culture: "Maíz",
      lieu: "Explotación estatal TIGEM, Konya",
      pays: "Turquía",
      periode: "Mayo – septiembre de 2025",
      conduit: "Green Solutions y D.I.S., mediciones del departamento de riego de TIGEM",
      produits: "Hidrorretenedor EVERGREEN, aplicado bajo la línea de siembra",
      chapeau:
        "El objetivo era sencillo: producir lo mismo, o más, con menos agua. El hidrorretenedor se inyectó justo bajo la línea de siembra, a una profundidad precisa, con máquinas diseñadas por D.I.S., y después se redujo a propósito el riego de las zonas tratadas.",
      resultats: [
        "de agua: 528 mm en lugar de 864 mm",
        "de rendimiento: 12 060 kg/ha frente a 10 300 kg/ha",
        "productividad del agua: 22,8 kg de maíz por m³ frente a 11,9",
        "dosis que da el mejor resultado",
      ],
      protocole: [
        "Una zona testigo y tres zonas tratadas a 39, 51 y 74 kg/ha.",
        "Aplicación los días 14 y 15 de mayo de 2025, directamente bajo la línea de siembra.",
        "Riego de las zonas tratadas reducido un 50 %, y después un 30 %, según las fases de crecimiento.",
        "Cosecha el 16 de septiembre de 2025, en sectores comparables.",
      ],
      constats: [
        "Rendimientos medidos: testigo 10 300 kg/ha; 39 kg/ha → 11 200 kg/ha; 51 kg/ha → 10 300 kg/ha; 74 kg/ha → 12 060 kg/ha.",
        "La precisión cuenta: una aplicación demasiado superficial, demasiado profunda o desplazada de la línea de siembra reduce el efecto.",
        "Para la explotación, un 39 % menos de agua supone ahorrar 13 629 liras turcas por hectárea y año.",
      ],
      graphiques: [
        { titre: "Agua de riego en 4 meses (mm)", barres: ["Zona testigo", "Zonas tratadas"] },
        {
          titre: "Rendimiento en maíz según la dosis (kg/ha)",
          barres: ["Testigo", "39 kg/ha", "51 kg/ha", "74 kg/ha"],
        },
      ],
    },
    "canne-a-sucre-indonesie": {
      titre: "Caña de azúcar en Java: un 55 % más de cosecha con EVERGREEN y ECOFERT",
      description:
        "Ensayo seguido por la Universidad de Jember en caña de azúcar en Java (Indonesia): un 34 % más de tonelaje con 2,5 g por planta y un 55 % con 5 g, con más azúcar.",
      culture: "Caña de azúcar (variedad B82.0333)",
      lieu: "Jember, Java",
      pays: "Indonesia",
      periode: "Febrero – julio de 2024",
      conduit: "Universidad de Jember y centro indonesio de investigación de la caña de azúcar",
      produits: "EVERGREEN (hidrorretenedor) y fertilizante bioestimulante ECO (ECOFERT)",
      chapeau:
        "El ensayo comparó tres parcelas en suelo arcilloso: una parcela testigo, una con 2,5 g de EVERGREEN por planta y otra con 5 g, recibiendo estas dos últimas también el fertilizante bioestimulante ECO.",
      resultats: [
        "de tonelaje con 5 g por planta",
        "de tonelaje con 2,5 g por planta",
        "contenido de sacarosa en la cosecha (5 g frente al testigo)",
        "altura del tallo a los 8 meses, frente a 111 cm del testigo",
      ],
      protocole: [
        "Tres parcelas de un cuarto de hectárea.",
        "EVERGREEN enterrado junto a las raíces cuando la caña tiene 3 meses.",
        "Fertilizante ECO pulverizado en la plantación, 3 meses después y 8 meses después de la plantación.",
        "Dosis por hectárea: 50 kg de EVERGREEN y 500 ml de fertilizante.",
      ],
      constats: [
        "Tonelaje total: 6950 t para el testigo, 9330 t con 2,5 g por planta y 10 800 t con 5 g por planta.",
        "Diámetro del tallo a los 8 meses: 2,47 cm para el testigo, 2,78 cm con 2,5 g y 2,88 cm con 5 g.",
        "Contenido de sacarosa: 14 para el testigo, 16 con 2,5 g y 18 con 5 g.",
      ],
      graphiques: [
        { titre: "Tonelaje cosechado (t)", barres: ["Testigo", "2,5 g por planta", "5 g por planta"] },
        {
          titre: "Contenido de sacarosa en la cosecha",
          barres: ["Testigo", "2,5 g por planta", "5 g por planta"],
        },
      ],
    },
    "pommes-de-terre-afrique-du-sud": {
      titre: "Patatas en Sudáfrica: un 31 % más de rendimiento y un 52 % menos de agua",
      description:
        "Ensayo EVERGREEN y ECOFERT en patata en Bloemfontein (Sudáfrica), 2025-2026: rendimiento de 12 a 15,7 t/ha y un 52 % de agua ahorrada.",
      culture: "Patata (variedad Buffelspoort BP13)",
      lieu: "Bloemfontein",
      pays: "Sudáfrica",
      periode: "Septiembre de 2025 – enero de 2026",
      conduit: "Afrinest Farm Group (Tzaneen, Limpopo)",
      produits: "EVERGREEN (hidrorretenedor) y ECOFERT (fertilizante ecológico)",
      chapeau:
        "Este ensayo piloto midió el efecto combinado de EVERGREEN en el suelo y de ECOFERT pulverizado sobre el rendimiento y la calidad de las patatas.",
      resultats: [
        "de rendimiento total",
        "en lugar de 12 t/ha",
        "de agua",
        "de EVERGREEN en el surco de plantación",
      ],
      protocole: [
        "Hileras de 10 m, repetidas 5 veces.",
        "Suelo franco (Avalon) con un 15 a 18 % de arcilla; 26 667 plantas por hectárea.",
        "Plantación manual el 22 de septiembre de 2025; cosecha del 25 al 31 de enero de 2026.",
        "EVERGREEN colocado a mano en el surco de plantación; ECOFERT pulverizado a 700 ml/ha.",
        "Riego convencional.",
      ],
      constats: [
        "Tubérculos más grandes y más uniformes.",
        "Menos riesgos en la producción y un ingreso mayor para el agricultor.",
      ],
      graphiques: [
        { titre: "Rendimiento (t/ha)", barres: ["Sin tratamiento", "EVERGREEN + ECOFERT"] },
        {
          titre: "Agua de riego (índice, testigo = 100)",
          barres: ["Sin tratamiento", "EVERGREEN + ECOFERT"],
        },
      ],
    },
    "soja-chine-shandong": {
      titre: "Soja en China: un 11 % más de rendimiento con un superabsorbente",
      description:
        "Ensayo en bloques aleatorios con el Instituto de Suelos y Fertilizantes de Shandong (China): nascencia más rápida y rendimiento de soja un 11,2 a 11,4 % mayor.",
      culture: "Soja (variedad Ludou II)",
      lieu: "Taian, provincia de Shandong",
      pays: "China",
      periode: "Junio – octubre de 2017",
      conduit: "Instituto de Suelos y Fertilizantes de Shandong, con Summit Enterprise",
      produits: "Polímero superabsorbente EVERGREEN",
      chapeau:
        "En verano, cuando se siembra la soja, Shandong es caluroso y con mucha evaporación. El ensayo midió el efecto del superabsorbente colocado en la línea de siembra sobre la nascencia, el vigor, el rendimiento y el ingreso.",
      resultats: [
        "de rendimiento",
        "de nascencia más rápida",
        "de tasa de germinación",
        "de soja por acre",
      ],
      protocole: [
        "Bloques aleatorios: parcelas de 30 m², cada tratamiento repetido 4 veces.",
        "La misma fertilización en todas las parcelas: abono compuesto y compost en la línea de siembra.",
        "Tres tratamientos: testigo sin superabsorbente, 1,6 kg y 2 kg de superabsorbente por parcela de 30 m².",
      ],
      constats: [
        "El aumento de rendimiento alcanza un nivel estadísticamente significativo.",
        "Ganancia de ingreso de 62,9 a 66,1 yuanes por acre frente al testigo.",
      ],
      graphiques: [
        {
          titre: "Rendimiento en soja (índice, testigo = 100)",
          barres: ["Sin superabsorbente", "Con superabsorbente"],
        },
      ],
    },
  },
  enCours: [
    {
      titre: "Arces rojos en ciudad — Universidad de Florida",
      texte:
        "El laboratorio de arboricultura Klein (Gainesville) prueba EVERGREEN en 90 arces rojos plantados en abril de 2025: 30 con el gel en el hoyo de plantación, 30 con el gel mezclado con el suelo alrededor del árbol y 30 sin gel. Estudio de 2 años.",
    },
    {
      titre: "Reforestación con abetos de Douglas — Universidad Estatal de Oregón",
      texte:
        "La cooperativa de investigación VMRC prueba EVERGREEN en dos sitios de reforestación con déficits de agua contrastados, cerca de Coquille y de Roseburg: 48 plantones con gel y 48 sin él en cada sitio. Plantación en febrero de 2025, estudio de 2 años.",
    },
  ],
};
