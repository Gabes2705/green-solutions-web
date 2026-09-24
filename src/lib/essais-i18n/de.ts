import type { Traduction } from "./types";

/** Les essais de terrain en allemand. */
export const de: Traduction = {
  habillage: {
    retour: "← Alle Versuche",
    tousLesEssais: "Alle Versuche ansehen →",
    lireRapport: "Vollständigen Bericht lesen (PDF)",
    resultatsEyebrow: "Ergebnisse",
    resultatsTitre: "Was der Versuch gemessen hat",
    imagesEyebrow: "In Bildern",
    imagesTitre: "Vorher, nachher: der gemessene Unterschied",
    mecaniqueEyebrow: "So funktioniert es",
    mecaniqueTitre: "Das Wasser bleibt dort, wo die Pflanze es braucht",
    mecaniqueTexte:
      "In den Boden nahe den Wurzeln eingemischt, saugt sich der Wasserspeicher bei jeder Bewässerung und bei jedem Regen voll, statt das Wasser verdunsten oder versickern zu lassen. Danach gibt er es der Pflanze zurück, Tag für Tag. Man gießt seltener, und die Pflanze leidet zwischen zwei Wassergaben keinen Durst.",
    videoLegende: "Samen keimen: Die Wurzeln wachsen nach unten, dem Wasser im Boden entgegen.",
    videoAlt: "Zeitrafferaufnahme keimender Mungbohnen, die Wurzeln sind in der Erde zu sehen",
    videoMot: "Video",
    videoAccelere: "im Zeitraffer",
    ficheEyebrow: "Versuchsblatt",
    ficheTitre: "Wo, wann, durch wen",
    culture: "Kultur",
    lieu: "Ort",
    periode: "Zeitraum",
    conduitPar: "Durchgeführt von",
    produits: "Produkte",
    methodeEyebrow: "Methode",
    methodeTitre: "Wie der Versuch durchgeführt wurde",
    observationsEyebrow: "Beobachtungen",
    observationsTitre: "Was bleibt",
    autresEyebrow: "Weitere Versuche",
    autresTitre: "Dieselben Produkte, andere Kulturen",
    hubEyebrow: "Feldversuche",
    hubTitre: "Weniger Wasser, mehr Ernte: die gemessenen Ergebnisse",
    hubChapeau:
      "Universitäten, Forschungszentren und Betriebe haben den Wasserspeicher EVERGREEN getestet, allein oder mit dem Dünger ECOFERT, an sieben Kulturen in sechs Ländern. Jede Seite nennt die Zahlen des Berichts und verweist auf das vollständige Dokument.",
    hubPrincipe:
      "Das Prinzip ist überall dasselbe: Der Wasserspeicher hält Wasser nahe den Wurzeln und gibt es der Pflanze nach und nach zurück. Je nach Kultur und Klima messen die Versuche bis zu 82 % weniger Wasser und bis zu 93 % mehr Ernte.",
    hubTermines: "Abgeschlossene Versuche",
    hubEnCours: "Laufende Versuche mit Universitäten",
    hubGuides: "Unsere Leitfäden",
    hubCreditPhoto: "Titelfoto:",
    guideProduit: "Zur Produktseite",
    guidePreuvesEyebrow: "Nachweise aus dem Feld",
    guidePreuvesTitre: "Die Versuche, die es gemessen haben",
    guideResultatsEyebrow: "Ergebnisse aus dem Feld",
    guideResultatsTitre: "Was die Versuche gemessen haben",
    guideComparaisonEyebrow: "Vergleich",
    guideFaqEyebrow: "Häufige Fragen",
    guideFaqTitre: "Was man uns oft fragt",
    guideOui: "Ja",
    guideNon: "Nein",
    guideCritere: "Kriterium",
  },
  essais: {
    "palmiers-dattiers-emirats-icba": {
      titre: "Dattelpalmen in den Emiraten: 82 % weniger Bewässerungswasser",
      description:
        "EVERGREEN-Versuch des ICBA in Dubai an 27 Dattelpalmen in sandigem Boden: 82 % Bewässerungswasser gespart und 20 % mehr Datteln.",
      culture: "Dattelpalme",
      lieu: "Forschungsstation des ICBA, Dubai",
      pays: "Vereinigte Arabische Emirate",
      periode: "Saison 2020-2021",
      conduit: "ICBA — International Center for Biosaline Agriculture",
      produits: "EVERGREEN (Wasserspeicher)",
      chapeau:
        "In den Emiraten fallen rund 50 mm Regen im Jahr, und fast die gesamte Landwirtschaft hängt an der Bewässerung. Das ICBA hat EVERGREEN im Freiland getestet, in sandigem, salzhaltigem Boden, an etwa 8 Jahre alten Dattelpalmen.",
      resultats: [
        "Bewässerungswasser über die ganze Saison",
        "Wasser in den letzten 7 Monaten, ohne Stress für die Bäume",
        "mehr Datteln bei 300 g je Baum",
        "Bewässerungsrhythmus der behandelten Bäume",
      ],
      protocole: [
        "27 Dattelpalmen im Abstand von 8 × 8 m auf der Forschungsstation des ICBA.",
        "EVERGREEN zu Saisonbeginn in die oberen 50 cm des Bodens eingearbeitet, in mehreren Dosen je Baum (darunter 300 g, 500 g und 1000 g).",
        "Bewässerung gesteuert durch Sonden, die die Bodenfeuchte in Echtzeit messen.",
        "Vergleich mit Kontrollbäumen ohne EVERGREEN.",
      ],
      constats: [
        "Die behandelten Bäume zeigten während der Saison kein Anzeichen von Trockenheit oder Schaden.",
        "Die verfügbaren Nährstoffe im Boden sind mit EVERGREEN deutlich höher: Wasser und Mineralstoffe bleiben in der Wurzelzone, statt in die Tiefe zu versickern.",
        "Die biologische Aktivität des Bodens (Atmung und mikrobielle Biomasse) nimmt zu.",
        "Das ICBA bestätigt alle unter Feldbedingungen erzielten Ergebnisse.",
      ],
      graphiques: [
        {
          titre: "Bewässerungswasser über die Saison (Index, Kontrolle = 100)",
          barres: ["Ohne EVERGREEN", "Mit EVERGREEN"],
        },
        { titre: "Dattelertrag (Index, Kontrolle = 100)", barres: ["Ohne EVERGREEN", "300 g je Baum"] },
      ],
    },
    "pasteques-mexique": {
      titre: "Wassermelonen in Mexiko: 60,5 % weniger Wasser und 30 % mehr Ernte",
      description:
        "EVERGREEN-Versuch an 2600 Wassermelonenpflanzen in Hermosillo (Sonora, Mexiko) bei 45 °C: 60,5 % Wasser gespart und eine um 30 % höhere Ernte.",
      culture: "Wassermelone (Sorte Charleston)",
      lieu: "Hermosillo, Sonora",
      pays: "Mexiko",
      periode: "15. Februar – 2. August 2023",
      conduit: "Feldversuch von Green Solutions",
      produits: "EVERGREEN (Wasserspeicher)",
      chapeau:
        "Sonora führt die mexikanische Wassermelonenproduktion an, wurde 2023 aber hart von der Dürre getroffen. Der Versuch sollte messen, wie viel Wasser EVERGREEN in einer sehr trockenen Region mit Tagesmitteln von 45 °C einspart.",
      resultats: [
        "Bewässerungswasser",
        "mehr Ernte als die zu 100 % bewässerte Parzelle",
        "durchschnittlicher Zuckergehalt der Früchte",
        "EVERGREEN je Pflanze",
      ],
      protocole: [
        "2600 Wassermelonenpflanzen.",
        "Kontrollparzelle ohne EVERGREEN, zu 100 % bewässert.",
        "Behandelte Parzelle mit 5 g EVERGREEN je Pflanze (2 g mehr als die üblich empfohlenen 3 g).",
      ],
      constats: [
        "Extrem heißes, trockenes Klima auf trockenem Boden.",
        "Die Dosis hängt von der Bodenart (tonig, sandig, steinig, kalkhaltig) und der Bewässerungsart ab (Brunnen, Tropfbewässerung, Regen).",
        "Andere mögliche Methode: 15 bis 20 g EVERGREEN je laufenden Meter, je nach Sorte.",
      ],
      graphiques: [
        { titre: "Bewässerungswasser (Index, Kontrolle = 100)", barres: ["Ohne EVERGREEN", "5 g je Pflanze"] },
        { titre: "Ernte (Index, Kontrolle = 100)", barres: ["Ohne EVERGREEN", "5 g je Pflanze"] },
      ],
    },
    "coton-turquie-hatay": {
      titre: "Baumwolle in der Türkei: Ertrag unter Wasserstress fast verdoppelt",
      description:
        "EVERGREEN-Demonstration an Baumwolle in der Region Hatay (Türkei) 2025: Ertrag von 2,53 auf 4,88 t/ha (+93 %) trotz schwerer Wasserknappheit.",
      culture: "Baumwolle",
      lieu: "Betrieb Mistikoğlu Tarım, Amik-Ebene, Hatay",
      pays: "Türkei",
      periode: "Saison 2025",
      conduit: "Green Solutions mit der Genossenschaft Teknik Tarım",
      produits: "EVERGREEN (Wasserspeicher), unter die Wurzelzone eingespritzt",
      chapeau:
        "Die Region Hatay leidet unter chronischem Wassermangel, großer Hitze und einem vom Erdbeben 2023 beschädigten Bewässerungsnetz. Im Juli 2025 erlebte die Amik-Ebene eine beispiellose Wasserkrise. Dort wurde der Versuch durchgeführt.",
      resultats: [
        "Ertrag: 4,88 t/ha gegenüber 2,53 t/ha",
        "Wasserproduktivität, mindestens",
        "Bruttoeinkommen (3300 $ gegenüber 1710 $)",
        "Reingewinn, abzüglich Produkt und Ausbringung",
      ],
      protocole: [
        "EVERGREEN mit den Injektionsgeräten von Green Solutions unter die Wurzelzone eingespritzt, in die für die Aussaat vorbereiteten Dämme.",
        "Mehrere Dosen im Vergleich: 48, 55, 58 und 62 kg/ha.",
        "Vergleich mit einer unbehandelten Kontrollfläche.",
        "Übliche Bewässerung der Region: Überstauung aus offenen Kanälen.",
      ],
      constats: [
        "Die behandelte Baumwolle behielt trotz Wassermangels besseres Wachstum und mehr Biomasse.",
        "Der Unterschied zeigt sich schon in den ersten Wochen, einer entscheidenden Phase für den Endertrag der Baumwolle.",
      ],
      graphiques: [
        { titre: "Baumwollertrag (t/ha)", barres: ["Kontrollfläche", "Mit EVERGREEN"] },
        { titre: "Bruttoeinkommen (USD/ha)", barres: ["Kontrollfläche", "Mit EVERGREEN"] },
      ],
    },
    "mais-turquie-konya": {
      titre: "Mais in der Türkei: 39 % weniger Wasser und 17 % mehr Ertrag",
      description:
        "EVERGREEN-Demonstration an Mais in Konya (TIGEM, Türkei) 2025: 528 mm Bewässerung statt 864 mm und 12 060 kg/ha gegenüber 10 300 kg/ha.",
      culture: "Mais",
      lieu: "Staatsbetrieb TIGEM, Konya",
      pays: "Türkei",
      periode: "Mai – September 2025",
      conduit: "Green Solutions und D.I.S., Messungen der Bewässerungsabteilung von TIGEM",
      produits: "Wasserspeicher EVERGREEN, unter der Saatreihe ausgebracht",
      chapeau:
        "Das Ziel war einfach: gleich viel oder mehr erzeugen, mit weniger Wasser. Der Wasserspeicher wurde mit von D.I.S. gebauten Maschinen genau unter der Saatreihe in bestimmter Tiefe eingespritzt, anschließend wurde die Bewässerung der behandelten Flächen bewusst reduziert.",
      resultats: [
        "Wasser: 528 mm statt 864 mm",
        "Ertrag: 12 060 kg/ha gegenüber 10 300 kg/ha",
        "Wasserproduktivität: 22,8 kg Mais je m³ gegenüber 11,9",
        "Dosis mit dem besten Ergebnis",
      ],
      protocole: [
        "Eine Kontrollfläche und drei Flächen mit 39, 51 und 74 kg/ha.",
        "Ausbringung am 14. und 15. Mai 2025, direkt unter der Saatreihe.",
        "Bewässerung der behandelten Flächen um 50 %, dann um 30 % reduziert, je nach Wachstumsphase.",
        "Ernte am 16. September 2025 auf vergleichbaren Abschnitten.",
      ],
      constats: [
        "Gemessene Erträge: Kontrolle 10 300 kg/ha; 39 kg/ha → 11 200 kg/ha; 51 kg/ha → 10 300 kg/ha; 74 kg/ha → 12 060 kg/ha.",
        "Genauigkeit zählt: zu flach, zu tief oder neben der Saatreihe ausgebracht, verliert das Produkt an Wirkung.",
        "Für den Betrieb bedeuten 39 % weniger Wasser eine Ersparnis von 13 629 türkischen Lira je Hektar und Jahr.",
      ],
      graphiques: [
        { titre: "Bewässerungswasser über 4 Monate (mm)", barres: ["Kontrollfläche", "Behandelte Flächen"] },
        {
          titre: "Maisertrag je nach Dosis (kg/ha)",
          barres: ["Kontrolle", "39 kg/ha", "51 kg/ha", "74 kg/ha"],
        },
      ],
    },
    "canne-a-sucre-indonesie": {
      titre: "Zuckerrohr auf Java: 55 % mehr Ernte mit EVERGREEN und ECOFERT",
      description:
        "Von der Universität Jember begleiteter Versuch an Zuckerrohr auf Java (Indonesien): 34 % mehr Tonnage bei 2,5 g je Pflanze und 55 % bei 5 g, mit mehr Zucker.",
      culture: "Zuckerrohr (Sorte B82.0333)",
      lieu: "Jember, Java",
      pays: "Indonesien",
      periode: "Februar – Juli 2024",
      conduit: "Universität Jember und indonesisches Zuckerrohr-Forschungszentrum",
      produits: "EVERGREEN (Wasserspeicher) und der biostimulierende Dünger ECO (ECOFERT)",
      chapeau:
        "Der Versuch verglich drei Parzellen auf tonigem Boden: eine Kontrollparzelle, eine mit 2,5 g EVERGREEN je Pflanze und eine mit 5 g; die beiden letzten erhielten zusätzlich den biostimulierenden Dünger ECO.",
      resultats: [
        "Tonnage bei 5 g je Pflanze",
        "Tonnage bei 2,5 g je Pflanze",
        "Saccharosegehalt bei der Ernte (5 g gegenüber Kontrolle)",
        "Halmhöhe nach 8 Monaten, gegenüber 111 cm bei der Kontrolle",
      ],
      protocole: [
        "Drei Parzellen von je einem Viertelhektar.",
        "EVERGREEN nahe den Wurzeln eingebracht, wenn das Rohr 3 Monate alt ist.",
        "ECO-Dünger gespritzt bei der Pflanzung, 3 Monate später und 8 Monate nach der Pflanzung.",
        "Dosen je Hektar: 50 kg EVERGREEN und 500 ml Dünger.",
      ],
      constats: [
        "Gesamttonnage: 6950 t bei der Kontrolle, 9330 t bei 2,5 g je Pflanze, 10 800 t bei 5 g je Pflanze.",
        "Halmdurchmesser nach 8 Monaten: 2,47 cm bei der Kontrolle, 2,78 cm bei 2,5 g und 2,88 cm bei 5 g.",
        "Saccharosegehalt: 14 bei der Kontrolle, 16 bei 2,5 g und 18 bei 5 g.",
      ],
      graphiques: [
        { titre: "Geerntete Tonnage (t)", barres: ["Kontrolle", "2,5 g je Pflanze", "5 g je Pflanze"] },
        {
          titre: "Saccharosegehalt bei der Ernte",
          barres: ["Kontrolle", "2,5 g je Pflanze", "5 g je Pflanze"],
        },
      ],
    },
    "pommes-de-terre-afrique-du-sud": {
      titre: "Kartoffeln in Südafrika: 31 % mehr Ertrag, 52 % weniger Wasser",
      description:
        "EVERGREEN- und ECOFERT-Versuch an Kartoffeln in Bloemfontein (Südafrika), 2025-2026: Ertrag von 12 auf 15,7 t/ha und 52 % Wasser gespart.",
      culture: "Kartoffel (Sorte Buffelspoort BP13)",
      lieu: "Bloemfontein",
      pays: "Südafrika",
      periode: "September 2025 – Januar 2026",
      conduit: "Afrinest Farm Group (Tzaneen, Limpopo)",
      produits: "EVERGREEN (Wasserspeicher) und ECOFERT (Bio-Dünger)",
      chapeau:
        "Dieser Pilotversuch maß die gemeinsame Wirkung von EVERGREEN im Boden und ECOFERT als Spritzung auf Ertrag und Qualität der Kartoffeln.",
      resultats: [
        "Gesamtertrag",
        "statt 12 t/ha",
        "Wasser",
        "EVERGREEN in der Pflanzfurche",
      ],
      protocole: [
        "Reihen von 10 m, fünfmal wiederholt.",
        "Lehmiger Boden (Avalon) mit 15 bis 18 % Ton; 26 667 Pflanzen je Hektar.",
        "Pflanzung von Hand am 22. September 2025; Ernte vom 25. bis 31. Januar 2026.",
        "EVERGREEN von Hand in die Pflanzfurche gelegt; ECOFERT mit 700 ml/ha gespritzt.",
        "Konventionelle Bewässerung.",
      ],
      constats: [
        "Größere und gleichmäßigere Knollen.",
        "Weniger Risiko für die Ernte und ein höheres Einkommen für den Betrieb.",
      ],
      graphiques: [
        { titre: "Ertrag (t/ha)", barres: ["Ohne Behandlung", "EVERGREEN + ECOFERT"] },
        {
          titre: "Bewässerungswasser (Index, Kontrolle = 100)",
          barres: ["Ohne Behandlung", "EVERGREEN + ECOFERT"],
        },
      ],
    },
    "soja-chine-shandong": {
      titre: "Soja in China: 11 % mehr Ertrag mit einem Superabsorber",
      description:
        "Blockversuch mit dem Institut für Boden und Dünger von Shandong (China): schnellerer Aufgang und ein um 11,2 bis 11,4 % höherer Sojaertrag.",
      culture: "Soja (Sorte Ludou II)",
      lieu: "Taian, Provinz Shandong",
      pays: "China",
      periode: "Juni – Oktober 2017",
      conduit: "Institut für Boden und Dünger von Shandong, mit Summit Enterprise",
      produits: "Superabsorbierendes Polymer EVERGREEN",
      chapeau:
        "Im Sommer, zur Saat der Sojabohne, ist Shandong heiß mit starker Verdunstung. Der Versuch maß die Wirkung des in die Saatreihe gelegten Superabsorbers auf Aufgang, Wüchsigkeit, Ertrag und Einkommen.",
      resultats: [
        "Ertrag",
        "schnellerer Aufgang",
        "Keimrate",
        "Soja je Acre",
      ],
      protocole: [
        "Blockanlage: Parzellen von 30 m², jede Behandlung viermal wiederholt.",
        "Gleiche Düngung auf allen Parzellen: Mehrnährstoffdünger und Kompost in der Saatreihe.",
        "Drei Behandlungen: Kontrolle ohne Superabsorber, 1,6 kg und 2 kg Superabsorber je 30-m²-Parzelle.",
      ],
      constats: [
        "Die Ertragssteigerung erreicht ein statistisch gesichertes Niveau.",
        "Einkommensgewinn von 62,9 bis 66,1 Yuan je Acre gegenüber der Kontrolle.",
      ],
      graphiques: [
        {
          titre: "Sojaertrag (Index, Kontrolle = 100)",
          barres: ["Ohne Superabsorber", "Mit Superabsorber"],
        },
      ],
    },
  },
  enCours: [
    {
      titre: "Rotahorne in der Stadt — University of Florida",
      texte:
        "Das Klein-Arborikulturlabor (Gainesville) testet EVERGREEN an 90 Rotahornen, gepflanzt im April 2025: 30 mit dem Gel im Pflanzloch, 30 mit dem Gel in den Boden rund um den Baum eingemischt, 30 ohne Gel. Studie über 2 Jahre.",
    },
    {
      titre: "Aufforstung mit Douglasien — Oregon State University",
      texte:
        "Die Forschungskooperative VMRC testet EVERGREEN auf zwei Aufforstungsflächen mit unterschiedlich starkem Wasserdefizit, nahe Coquille und Roseburg: je 48 Setzlinge mit Gel und 48 ohne. Pflanzung im Februar 2025, Studie über 2 Jahre.",
    },
  ],
};
