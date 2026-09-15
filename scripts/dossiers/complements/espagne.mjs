// Las siete páginas que completan el dossier de España (ver build.mjs).
export default {
  paysTitre: "España",

  economie: {
    kicker: "ECONOMÍA Y SEGURIDAD ALIMENTARIA",
    title: "Un sector exportador que sostiene el medio rural",
    items: [
      { value: "≈ 70 000 M€", label: "de exportaciones agroalimentarias en 2023" },
      { value: "N.º 1", label: "exportador mundial de aceite de oliva y de cítricos frescos" },
      { value: "≈ 0,75 M", label: "de personas ocupadas en la agricultura" },
      { value: "≈ 2,5 %", label: "del PIB procede de la agricultura, la ganadería y la pesca" },
    ],
    note:
      "La sequía de 2022–2024 redujo a la mitad la cosecha de aceite en dos campañas seguidas y obligó a recortar las dotaciones de riego en cuencas como la del Guadalquivir y la del Segura. Los fondos europeos financian la modernización de regadíos, pero el agua disponible por hectárea sigue bajando.",
  },

  filieres: [
    {
      kicker: "PRIMER SECTOR",
      title: "Olivar andaluz: la sequía se nota en la almazara",
      photo: 3,
      bullets: [
        "Andalucía reúne la mayor parte del olivar español; Jaén y Córdoba son el corazón del aceite de oliva.",
        "La mayor parte del olivar tradicional es de secano: sin lluvia en primavera, la floración y el cuajado fallan.",
        "Las campañas 2022/23 y 2023/24 dejaron cosechas muy por debajo de la media y precios récord.",
        "El olivar intensivo y superintensivo depende del goteo, con dotaciones que se recortan en sequía.",
        "EVERGREEN® en la plantación o en la línea de goteo mantiene el agua en la zona radicular entre riegos.",
      ],
    },
    {
      kicker: "SEGUNDO SECTOR",
      title: "Hortalizas de Almería y Murcia: cada metro cúbico cuenta",
      photo: 0,
      bullets: [
        "El Campo de Dalías y el Campo de Cartagena abastecen a Europa de tomate, pimiento, pepino y lechuga casi todo el año.",
        "Los acuíferos están sobreexplotados y el trasvase Tajo-Segura se reduce: crece el uso de agua desalada y regenerada.",
        "El agua desalada es más cara: ahorrar agua por hectárea mejora directamente la cuenta del agricultor.",
        "La crisis del Mar Menor ha traído normas estrictas sobre fertilizantes y lixiviados en su entorno.",
        "NAPEMA® controla plagas sin residuos, en cultivos donde la lucha biológica ya es la norma.",
      ],
    },
  ],

  rendement: ["tomates", "poivrons", "olives", "agrumes", "laitues"],

  sources: [
    "INE: Contabilidad Nacional y Encuesta de Población Activa.",
    "Ministerio de Agricultura, Pesca y Alimentación: ESYRCE, anuario de estadística, comercio exterior agroalimentario.",
    "Confederaciones Hidrográficas del Guadalquivir y del Segura: dotaciones de riego.",
    "FAO (FAOSTAT, AQUASTAT) y Banco Mundial (WDI).",
  ],
};
