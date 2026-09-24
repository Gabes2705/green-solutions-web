import type { Traduction } from "./types";

/** Les essais de terrain en italien. */
export const it: Traduction = {
  habillage: {
    retour: "← Tutte le sperimentazioni",
    tousLesEssais: "Vedi tutte le sperimentazioni →",
    lireRapport: "Leggi il rapporto completo (PDF)",
    resultatsEyebrow: "Risultati",
    resultatsTitre: "Ciò che la sperimentazione ha misurato",
    imagesEyebrow: "In immagini",
    imagesTitre: "Prima e dopo: la differenza misurata",
    mecaniqueEyebrow: "Come funziona",
    mecaniqueTitre: "L'acqua resta dove la pianta ne ha bisogno",
    mecaniqueTexte:
      "Mescolato al suolo vicino alle radici, l'idroritentore si riempie d'acqua a ogni irrigazione o pioggia, invece di lasciarla evaporare o scendere in profondità. Poi la restituisce alla pianta, giorno dopo giorno. Si irriga meno spesso e la pianta non soffre la sete tra due irrigazioni.",
    videoLegende: "Dei semi germinano: le radici scendono a cercare l'acqua nel suolo.",
    videoAlt: "Video accelerato di semi di fagiolo mungo che germinano, con le radici visibili nella terra",
    videoMot: "Video",
    videoAccelere: "accelerato",
    ficheEyebrow: "Scheda della prova",
    ficheTitre: "Dove, quando, da chi",
    culture: "Coltura",
    lieu: "Luogo",
    periode: "Periodo",
    conduitPar: "Condotta da",
    produits: "Prodotti",
    methodeEyebrow: "Metodo",
    methodeTitre: "Come è stata condotta la prova",
    observationsEyebrow: "Osservazioni",
    observationsTitre: "Ciò che conta ricordare",
    autresEyebrow: "Altre sperimentazioni",
    autresTitre: "Gli stessi prodotti, su altre colture",
    hubEyebrow: "Sperimentazioni in campo",
    hubTitre: "Meno acqua, più raccolto: i risultati misurati",
    hubChapeau:
      "Università, centri di ricerca e aziende agricole hanno provato l'idroritentore EVERGREEN, da solo o con il fertilizzante ECOFERT, su sette colture e in sei paesi. Ogni pagina riporta i numeri del rapporto e rimanda al documento completo.",
    hubPrincipe:
      "Il principio è lo stesso ovunque: l'idroritentore trattiene l'acqua vicino alle radici e la restituisce alla pianta poco a poco. A seconda della coltura e del clima, le prove misurano fino al 82 % di acqua in meno e fino al 93 % di raccolto in più.",
    hubTermines: "Le sperimentazioni concluse",
    hubEnCours: "Le sperimentazioni in corso con le università",
    hubGuides: "Le nostre guide",
    hubCreditPhoto: "Foto di copertina:",
    guideProduit: "Vedi la scheda prodotto",
    guidePreuvesEyebrow: "Prove sul campo",
    guidePreuvesTitre: "Le sperimentazioni che lo hanno misurato",
    guideResultatsEyebrow: "Risultati in campo",
    guideResultatsTitre: "Ciò che le prove hanno misurato",
    guideComparaisonEyebrow: "Confronto",
    guideFaqEyebrow: "Domande frequenti",
    guideFaqTitre: "Quello che ci chiedono più spesso",
    guideOui: "Sì",
    guideNon: "No",
    guideCritere: "Criterio",
  },
  essais: {
    "palmiers-dattiers-emirats-icba": {
      titre: "Palme da dattero negli Emirati: 82 % di acqua irrigua in meno",
      description:
        "Prova EVERGREEN condotta dall'ICBA a Dubai su 27 palme da dattero in suolo sabbioso: 82 % di acqua irrigua risparmiata e 20 % di datteri in più.",
      culture: "Palma da dattero",
      lieu: "Stazione di ricerca dell'ICBA, Dubai",
      pays: "Emirati Arabi Uniti",
      periode: "Stagione 2020-2021",
      conduit: "ICBA — International Center for Biosaline Agriculture",
      produits: "EVERGREEN (idroritentore)",
      chapeau:
        "Negli Emirati cadono circa 50 mm di pioggia all'anno e quasi tutta l'agricoltura dipende dall'irrigazione. L'ICBA ha provato EVERGREEN in pieno campo, in suolo sabbioso e salino, su palme da dattero di circa 8 anni.",
      resultats: [
        "di acqua irrigua sull'intera stagione",
        "di acqua negli ultimi 7 mesi, senza stress per gli alberi",
        "di datteri in più con 300 g per albero",
        "frequenza di irrigazione degli alberi trattati",
      ],
      protocole: [
        "27 palme da dattero piantate a 8 × 8 m, nella stazione di ricerca dell'ICBA.",
        "EVERGREEN incorporato nei primi 50 cm di suolo a inizio stagione, a più dosi per albero (tra cui 300 g, 500 g e 1000 g).",
        "Irrigazione guidata da sonde che misurano l'umidità del suolo in tempo reale.",
        "Confronto con alberi testimone senza EVERGREEN.",
      ],
      constats: [
        "Gli alberi trattati non hanno mostrato alcun segno di siccità o danno durante la stagione.",
        "Gli elementi nutritivi disponibili nel suolo sono nettamente più alti con EVERGREEN: acqua e minerali restano nella zona delle radici invece di scendere in profondità.",
        "L'attività biologica del suolo (respirazione e biomassa microbica) aumenta.",
        "L'ICBA conferma tutti i risultati ottenuti in condizioni di pieno campo.",
      ],
      graphiques: [
        {
          titre: "Acqua irrigua sulla stagione (indice, testimone = 100)",
          barres: ["Senza EVERGREEN", "Con EVERGREEN"],
        },
        { titre: "Resa in datteri (indice, testimone = 100)", barres: ["Senza EVERGREEN", "300 g per albero"] },
      ],
    },
    "pasteques-mexique": {
      titre: "Angurie in Messico: 60,5 % di acqua in meno e 30 % di raccolto in più",
      description:
        "Prova EVERGREEN su 2600 piante di anguria a Hermosillo (Sonora, Messico), a 45 °C: 60,5 % di acqua risparmiata e un raccolto superiore del 30 %.",
      culture: "Anguria (varietà Charleston)",
      lieu: "Hermosillo, Sonora",
      pays: "Messico",
      periode: "15 febbraio – 2 agosto 2023",
      conduit: "Prova in campo di Green Solutions",
      produits: "EVERGREEN (idroritentore)",
      chapeau:
        "Il Sonora guida la produzione messicana di angurie, ma è stato colpito duramente dalla siccità nel 2023. La prova doveva misurare l'acqua risparmiata con EVERGREEN in una regione molto arida, con giornate a 45 °C di media.",
      resultats: [
        "di acqua irrigua",
        "di raccolto rispetto alla parcella irrigata al 100 %",
        "di tenore zuccherino medio nei frutti",
        "di EVERGREEN per pianta",
      ],
      protocole: [
        "2600 piante di anguria.",
        "Parcella testimone senza EVERGREEN, irrigata al 100 %.",
        "Parcella trattata con 5 g di EVERGREEN per pianta (2 g in più dei 3 g abitualmente consigliati).",
      ],
      constats: [
        "Clima estremamente caldo e secco, su suolo arido.",
        "La dose dipende dal tipo di suolo (argilloso, sabbioso, sassoso, calcareo) e dal metodo di irrigazione (pozzo, goccia a goccia, pioggia).",
        "Altro metodo possibile: 15-20 g di EVERGREEN per metro lineare, secondo la varietà.",
      ],
      graphiques: [
        { titre: "Acqua irrigua (indice, testimone = 100)", barres: ["Senza EVERGREEN", "5 g per pianta"] },
        { titre: "Raccolto (indice, testimone = 100)", barres: ["Senza EVERGREEN", "5 g per pianta"] },
      ],
    },
    "coton-turquie-hatay": {
      titre: "Cotone in Turchia: resa quasi raddoppiata sotto stress idrico",
      description:
        "Dimostrazione EVERGREEN su cotone nella regione di Hatay (Turchia) nel 2025: resa da 2,53 a 4,88 t/ha (+93 %) nonostante una grave carenza d'acqua.",
      culture: "Cotone",
      lieu: "Azienda Mistikoğlu Tarım, piana di Amik, Hatay",
      pays: "Turchia",
      periode: "Stagione 2025",
      conduit: "Green Solutions con la cooperativa Teknik Tarım",
      produits: "EVERGREEN (idroritentore), iniettato sotto la zona delle radici",
      chapeau:
        "La regione di Hatay soffre di carenza idrica cronica, forte calura e una rete irrigua danneggiata dal sisma del 2023. Nel luglio 2025 la piana di Amik ha vissuto una crisi idrica senza precedenti. È lì che la prova è stata condotta.",
      resultats: [
        "di resa: 4,88 t/ha contro 2,53 t/ha",
        "di produttività dell'acqua, come minimo",
        "di reddito lordo (3300 $ contro 1710 $)",
        "di beneficio netto, dedotti prodotto e applicazione",
      ],
      protocole: [
        "EVERGREEN iniettato sotto la zona delle radici con gli attrezzi di iniezione di Green Solutions, nelle porche preparate per la semina.",
        "Più dosi a confronto: 48, 55, 58 e 62 kg/ha.",
        "Confronto con una zona testimone non trattata.",
        "Irrigazione abituale della regione: per sommersione da canali aperti.",
      ],
      constats: [
        "Il cotone trattato ha mantenuto una crescita migliore e più biomassa nonostante la mancanza d'acqua.",
        "La differenza si vede fin dalle prime settimane, periodo decisivo per la resa finale del cotone.",
      ],
      graphiques: [
        { titre: "Resa in cotone (t/ha)", barres: ["Zona testimone", "Con EVERGREEN"] },
        { titre: "Reddito lordo (USD/ha)", barres: ["Zona testimone", "Con EVERGREEN"] },
      ],
    },
    "mais-turquie-konya": {
      titre: "Mais in Turchia: 39 % di acqua in meno e 17 % di resa in più",
      description:
        "Dimostrazione EVERGREEN su mais a Konya (TIGEM, Turchia) nel 2025: 528 mm di irrigazione invece di 864 mm, e 12 060 kg/ha contro 10 300 kg/ha.",
      culture: "Mais",
      lieu: "Azienda di Stato TIGEM, Konya",
      pays: "Turchia",
      periode: "Maggio – settembre 2025",
      conduit: "Green Solutions e D.I.S., misure del reparto irrigazione di TIGEM",
      produits: "Idroritentore EVERGREEN, applicato sotto la linea di semina",
      chapeau:
        "L'obiettivo era semplice: produrre altrettanto, o di più, con meno acqua. L'idroritentore è stato iniettato appena sotto la linea di semina, a una profondità precisa, con macchine progettate da D.I.S., poi l'irrigazione delle zone trattate è stata volutamente ridotta.",
      resultats: [
        "di acqua: 528 mm invece di 864 mm",
        "di resa: 12 060 kg/ha contro 10 300 kg/ha",
        "produttività dell'acqua: 22,8 kg di mais per m³ contro 11,9",
        "dose che dà il risultato migliore",
      ],
      protocole: [
        "Una zona testimone e tre zone trattate a 39, 51 e 74 kg/ha.",
        "Applicazione il 14 e 15 maggio 2025, direttamente sotto la linea di semina.",
        "Irrigazione delle zone trattate ridotta del 50 %, poi del 30 %, secondo le fasi di crescita.",
        "Raccolta il 16 settembre 2025, su settori comparabili.",
      ],
      constats: [
        "Rese misurate: testimone 10 300 kg/ha; 39 kg/ha → 11 200 kg/ha; 51 kg/ha → 10 300 kg/ha; 74 kg/ha → 12 060 kg/ha.",
        "La precisione conta: un'applicazione troppo superficiale, troppo profonda o spostata rispetto alla linea di semina riduce l'effetto.",
        "Per l'azienda, 39 % di acqua in meno significa risparmiare 13 629 lire turche per ettaro all'anno.",
      ],
      graphiques: [
        { titre: "Acqua irrigua su 4 mesi (mm)", barres: ["Zona testimone", "Zone trattate"] },
        {
          titre: "Resa in mais secondo la dose (kg/ha)",
          barres: ["Testimone", "39 kg/ha", "51 kg/ha", "74 kg/ha"],
        },
      ],
    },
    "canne-a-sucre-indonesie": {
      titre: "Canna da zucchero a Giava: 55 % di raccolto in più con EVERGREEN ed ECOFERT",
      description:
        "Prova seguita dall'Università di Jember su canna da zucchero a Giava (Indonesia): +34 % di tonnellaggio con 2,5 g per pianta e +55 % con 5 g, con più zucchero.",
      culture: "Canna da zucchero (varietà B82.0333)",
      lieu: "Jember, Giava",
      pays: "Indonesia",
      periode: "Febbraio – luglio 2024",
      conduit: "Università di Jember e centro indonesiano di ricerca sulla canna da zucchero",
      produits: "EVERGREEN (idroritentore) e fertilizzante biostimolante ECO (ECOFERT)",
      chapeau:
        "La prova confrontava tre parcelle su suolo argilloso: una parcella testimone, una con 2,5 g di EVERGREEN per pianta e una con 5 g, le ultime due con in più il fertilizzante biostimolante ECO.",
      resultats: [
        "di tonnellaggio con 5 g per pianta",
        "di tonnellaggio con 2,5 g per pianta",
        "tenore di saccarosio alla raccolta (5 g contro testimone)",
        "altezza del culmo a 8 mesi, contro 111 cm del testimone",
      ],
      protocole: [
        "Tre parcelle da un quarto di ettaro.",
        "EVERGREEN interrato vicino alle radici quando la canna ha 3 mesi.",
        "Fertilizzante ECO nebulizzato all'impianto, 3 mesi dopo, poi 8 mesi dopo l'impianto.",
        "Dosi per ettaro: 50 kg di EVERGREEN e 500 ml di fertilizzante.",
      ],
      constats: [
        "Tonnellaggio totale: 6950 t per il testimone, 9330 t con 2,5 g per pianta, 10 800 t con 5 g per pianta.",
        "Diametro del culmo a 8 mesi: 2,47 cm per il testimone, 2,78 cm con 2,5 g e 2,88 cm con 5 g.",
        "Tenore di saccarosio: 14 per il testimone, 16 con 2,5 g e 18 con 5 g.",
      ],
      graphiques: [
        { titre: "Tonnellaggio raccolto (t)", barres: ["Testimone", "2,5 g per pianta", "5 g per pianta"] },
        {
          titre: "Tenore di saccarosio alla raccolta",
          barres: ["Testimone", "2,5 g per pianta", "5 g per pianta"],
        },
      ],
    },
    "pommes-de-terre-afrique-du-sud": {
      titre: "Patate in Sudafrica: 31 % di resa in più, 52 % di acqua in meno",
      description:
        "Prova EVERGREEN ed ECOFERT su patate a Bloemfontein (Sudafrica), 2025-2026: resa da 12 a 15,7 t/ha e 52 % di acqua risparmiata.",
      culture: "Patata (varietà Buffelspoort BP13)",
      lieu: "Bloemfontein",
      pays: "Sudafrica",
      periode: "Settembre 2025 – gennaio 2026",
      conduit: "Afrinest Farm Group (Tzaneen, Limpopo)",
      produits: "EVERGREEN (idroritentore) ed ECOFERT (fertilizzante biologico)",
      chapeau:
        "Questa prova pilota misurava l'effetto combinato di EVERGREEN nel suolo e di ECOFERT nebulizzato sulla resa e sulla qualità delle patate.",
      resultats: [
        "di resa totale",
        "invece di 12 t/ha",
        "di acqua",
        "di EVERGREEN nel solco di impianto",
      ],
      protocole: [
        "File di 10 m, ripetute 5 volte.",
        "Suolo limoso (Avalon) con 15-18 % di argilla; 26 667 piante per ettaro.",
        "Impianto manuale il 22 settembre 2025; raccolta dal 25 al 31 gennaio 2026.",
        "EVERGREEN posato a mano nel solco di impianto; ECOFERT nebulizzato a 700 ml/ha.",
        "Irrigazione convenzionale.",
      ],
      constats: [
        "Tuberi più grossi e più uniformi.",
        "Meno rischi sulla produzione e un reddito più alto per l'azienda.",
      ],
      graphiques: [
        { titre: "Resa (t/ha)", barres: ["Senza trattamento", "EVERGREEN + ECOFERT"] },
        {
          titre: "Acqua irrigua (indice, testimone = 100)",
          barres: ["Senza trattamento", "EVERGREEN + ECOFERT"],
        },
      ],
    },
    "soja-chine-shandong": {
      titre: "Soia in Cina: 11 % di resa in più con un superassorbente",
      description:
        "Prova a blocchi randomizzati con l'Istituto dei suoli e dei fertilizzanti dello Shandong (Cina): emergenza più rapida e resa di soia superiore dell'11,2-11,4 %.",
      culture: "Soia (varietà Ludou II)",
      lieu: "Taian, provincia dello Shandong",
      pays: "Cina",
      periode: "Giugno – ottobre 2017",
      conduit: "Istituto dei suoli e dei fertilizzanti dello Shandong, con Summit Enterprise",
      produits: "Polimero superassorbente EVERGREEN",
      chapeau:
        "D'estate, al momento della semina della soia, lo Shandong è caldo con forte evaporazione. La prova misurava l'effetto del superassorbente posto nella linea di semina su emergenza, vigore, resa e reddito.",
      resultats: [
        "di resa",
        "di emergenza più rapida",
        "di tasso di germinazione",
        "di soia per acro",
      ],
      protocole: [
        "Blocchi randomizzati: parcelle di 30 m², ogni trattamento ripetuto 4 volte.",
        "Stessa concimazione su tutte le parcelle: concime composto e compost nella linea di semina.",
        "Tre trattamenti: testimone senza superassorbente, 1,6 kg e 2 kg di superassorbente per parcella di 30 m².",
      ],
      constats: [
        "L'aumento di resa raggiunge un livello statisticamente significativo.",
        "Guadagno di reddito di 62,9-66,1 yuan per acro rispetto al testimone.",
      ],
      graphiques: [
        {
          titre: "Resa in soia (indice, testimone = 100)",
          barres: ["Senza superassorbente", "Con superassorbente"],
        },
      ],
    },
  },
  enCours: [
    {
      titre: "Aceri rossi in città — Università della Florida",
      texte:
        "Il laboratorio di arboricoltura Klein (Gainesville) prova EVERGREEN su 90 aceri rossi piantati nell'aprile 2025: 30 con il gel nella buca d'impianto, 30 con il gel mescolato al suolo attorno all'albero, 30 senza gel. Studio di 2 anni.",
    },
    {
      titre: "Rimboschimento con abeti di Douglas — Oregon State University",
      texte:
        "La cooperativa di ricerca VMRC prova EVERGREEN su due siti di rimboschimento con deficit idrici diversi, vicino a Coquille e Roseburg: 48 giovani piante con gel e 48 senza, su ciascun sito. Impianto nel febbraio 2025, studio di 2 anni.",
    },
  ],
};
