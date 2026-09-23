import type { Traduction } from "./types";

/** Les essais de terrain en portugais. */
export const pt: Traduction = {
  habillage: {
    retour: "← Todos os ensaios",
    tousLesEssais: "Ver todos os ensaios →",
    lireRapport: "Ler o relatório completo (PDF)",
    resultatsEyebrow: "Resultados",
    resultatsTitre: "O que o ensaio mediu",
    imagesEyebrow: "Em imagens",
    imagesTitre: "Antes e depois: a diferença medida",
    mecaniqueEyebrow: "Como funciona",
    mecaniqueTitre: "A água fica onde a planta precisa dela",
    mecaniqueTexte:
      "Misturado ao solo junto às raízes, o hidrorretentor enche-se de água em cada rega ou chuvada, em vez de a deixar evaporar ou infiltrar-se em profundidade. Depois devolve-a à planta, dia após dia. Rega-se menos vezes e a planta não passa sede entre duas regas.",
    ficheEyebrow: "Ficha do ensaio",
    ficheTitre: "Onde, quando, por quem",
    culture: "Cultura",
    lieu: "Local",
    periode: "Período",
    conduitPar: "Realizado por",
    produits: "Produtos",
    methodeEyebrow: "Método",
    methodeTitre: "Como o ensaio foi conduzido",
    observationsEyebrow: "Observações",
    observationsTitre: "O que fica",
    autresEyebrow: "Outros ensaios",
    autresTitre: "Os mesmos produtos, noutras culturas",
    hubEyebrow: "Ensaios de campo",
    hubTitre: "Menos água, mais colheita: os resultados medidos",
    hubChapeau:
      "Universidades, centros de investigação e explorações testaram o hidrorretentor EVERGREEN, sozinho ou com o fertilizante ECOFERT, em sete culturas e em seis países. Cada página retoma os números do relatório e remete para o documento completo.",
    hubPrincipe:
      "O princípio é o mesmo em toda a parte: o hidrorretentor guarda a água junto às raízes e devolve-a à planta pouco a pouco. Consoante a cultura e o clima, os ensaios medem até 82 % menos água e até 93 % mais colheita.",
    hubTermines: "Os ensaios concluídos",
    hubEnCours: "Os ensaios em curso com universidades",
    hubGuides: "Os nossos guias",
    hubCreditPhoto: "Foto do cabeçalho:",
    guideProduit: "Ver a ficha do produto",
    guidePreuvesEyebrow: "Provas de campo",
    guidePreuvesTitre: "Os ensaios que o mediram",
    guideResultatsEyebrow: "Resultados de campo",
    guideResultatsTitre: "O que os ensaios mediram",
    guideComparaisonEyebrow: "Comparação",
    guideFaqEyebrow: "Perguntas frequentes",
    guideFaqTitre: "O que nos perguntam mais vezes",
    guideOui: "Sim",
    guideNon: "Não",
    guideCritere: "Critério",
  },
  essais: {
    "palmiers-dattiers-emirats-icba": {
      titre: "Palmeiras-tamareiras nos Emirados: menos 82 % de água de rega",
      description:
        "Ensaio EVERGREEN conduzido pelo ICBA no Dubai em 27 palmeiras-tamareiras em solo arenoso: 82 % de água de rega poupada e mais 20 % de tâmaras.",
      culture: "Palmeira-tamareira",
      lieu: "Estação de investigação do ICBA, Dubai",
      pays: "Emirados Árabes Unidos",
      periode: "Campanha de 2020-2021",
      conduit: "ICBA — International Center for Biosaline Agriculture",
      produits: "EVERGREEN (hidrorretentor)",
      chapeau:
        "Nos Emirados caem cerca de 50 mm de chuva por ano e quase toda a agricultura depende da rega. O ICBA testou o EVERGREEN ao ar livre, em solo arenoso e salino, em palmeiras-tamareiras com cerca de 8 anos.",
      resultats: [
        "de água de rega em toda a campanha",
        "de água nos últimos 7 meses, sem stress para as árvores",
        "mais tâmaras com 300 g por árvore",
        "frequência de rega das árvores tratadas",
      ],
      protocole: [
        "27 palmeiras-tamareiras plantadas a 8 × 8 m, na estação de investigação do ICBA.",
        "EVERGREEN incorporado nos primeiros 50 cm de solo no início da campanha, em várias doses por árvore (entre elas 300 g, 500 g e 1000 g).",
        "Rega comandada por sondas que medem a humidade do solo em tempo real.",
        "Comparação com árvores testemunha sem EVERGREEN.",
      ],
      constats: [
        "As árvores tratadas não mostraram qualquer sinal de seca ou dano durante a campanha.",
        "Os nutrientes disponíveis no solo são nitidamente mais elevados com EVERGREEN: a água e os minerais ficam na zona das raízes em vez de se infiltrarem em profundidade.",
        "A atividade biológica do solo (respiração e biomassa microbiana) aumenta.",
        "O ICBA confirma todos os resultados obtidos em condições de campo.",
      ],
      graphiques: [
        {
          titre: "Água de rega na campanha (índice, testemunha = 100)",
          barres: ["Sem EVERGREEN", "Com EVERGREEN"],
        },
        { titre: "Produção de tâmaras (índice, testemunha = 100)", barres: ["Sem EVERGREEN", "300 g por árvore"] },
      ],
    },
    "pasteques-mexique": {
      titre: "Melancias no México: menos 60,5 % de água e mais 30 % de colheita",
      description:
        "Ensaio EVERGREEN em 2600 plantas de melancia em Hermosillo (Sonora, México), a 45 °C: 60,5 % de água poupada e uma colheita 30 % superior.",
      culture: "Melancia (variedade Charleston)",
      lieu: "Hermosillo, Sonora",
      pays: "México",
      periode: "15 de fevereiro – 2 de agosto de 2023",
      conduit: "Ensaio de campo da Green Solutions",
      produits: "EVERGREEN (hidrorretentor)",
      chapeau:
        "Sonora lidera a produção de melancia no México, mas foi duramente atingido pela seca em 2023. O ensaio deveria medir a água poupada com EVERGREEN numa região muito árida, com dias a 45 °C em média.",
      resultats: [
        "de água de rega",
        "mais colheita do que a parcela regada a 100 %",
        "de teor médio de açúcar nos frutos",
        "de EVERGREEN por planta",
      ],
      protocole: [
        "2600 plantas de melancia.",
        "Parcela testemunha sem EVERGREEN, regada a 100 %.",
        "Parcela tratada com 5 g de EVERGREEN por planta (2 g acima dos 3 g habitualmente aconselhados).",
      ],
      constats: [
        "Clima extremamente quente e seco, em solo árido.",
        "A dose depende do tipo de solo (argiloso, arenoso, pedregoso, calcário) e do modo de rega (poço, gota a gota, chuva).",
        "Outro método possível: 15 a 20 g de EVERGREEN por metro linear, consoante a variedade.",
      ],
      graphiques: [
        { titre: "Água de rega (índice, testemunha = 100)", barres: ["Sem EVERGREEN", "5 g por planta"] },
        { titre: "Colheita (índice, testemunha = 100)", barres: ["Sem EVERGREEN", "5 g por planta"] },
      ],
    },
    "coton-turquie-hatay": {
      titre: "Algodão na Turquia: produção quase duplicada sob stress hídrico",
      description:
        "Demonstração EVERGREEN em algodão na região de Hatay (Turquia) em 2025: produção de 2,53 para 4,88 t/ha (+93 %) apesar de uma grave falta de água.",
      culture: "Algodão",
      lieu: "Exploração Mistikoğlu Tarım, planície de Amik, Hatay",
      pays: "Turquia",
      periode: "Campanha de 2025",
      conduit: "Green Solutions com a cooperativa Teknik Tarım",
      produits: "EVERGREEN (hidrorretentor), injetado sob a zona das raízes",
      chapeau:
        "A região de Hatay sofre de falta de água crónica, calor intenso e uma rede de rega danificada pelo sismo de 2023. Em julho de 2025 a planície de Amik viveu uma crise de água sem precedentes. Foi aí que o ensaio decorreu.",
      resultats: [
        "de produção: 4,88 t/ha contra 2,53 t/ha",
        "de produtividade da água, no mínimo",
        "de receita bruta (3300 $ contra 1710 $)",
        "de benefício líquido, descontados produto e aplicação",
      ],
      protocole: [
        "EVERGREEN injetado sob a zona das raízes com as ferramentas de injeção da Green Solutions, nos camalhões preparados para a sementeira.",
        "Várias doses comparadas: 48, 55, 58 e 62 kg/ha.",
        "Comparação com uma zona testemunha sem tratamento.",
        "Rega habitual da região: por alagamento a partir de canais abertos.",
      ],
      constats: [
        "O algodão tratado manteve melhor crescimento e mais biomassa apesar da falta de água.",
        "A diferença nota-se logo nas primeiras semanas, período decisivo para a produção final do algodão.",
      ],
      graphiques: [
        { titre: "Produção de algodão (t/ha)", barres: ["Zona testemunha", "Com EVERGREEN"] },
        { titre: "Receita bruta (USD/ha)", barres: ["Zona testemunha", "Com EVERGREEN"] },
      ],
    },
    "mais-turquie-konya": {
      titre: "Milho na Turquia: menos 39 % de água e mais 17 % de produção",
      description:
        "Demonstração EVERGREEN em milho em Konya (TIGEM, Turquia) em 2025: 528 mm de rega em vez de 864 mm, e 12 060 kg/ha contra 10 300 kg/ha.",
      culture: "Milho",
      lieu: "Exploração do Estado TIGEM, Konya",
      pays: "Turquia",
      periode: "Maio – setembro de 2025",
      conduit: "Green Solutions e D.I.S., medições do departamento de rega da TIGEM",
      produits: "Hidrorretentor EVERGREEN, aplicado sob a linha de sementeira",
      chapeau:
        "O objetivo era simples: produzir o mesmo, ou mais, com menos água. O hidrorretentor foi injetado mesmo sob a linha de sementeira, a uma profundidade precisa, com máquinas concebidas pela D.I.S., e depois a rega das zonas tratadas foi reduzida de propósito.",
      resultats: [
        "de água: 528 mm em vez de 864 mm",
        "de produção: 12 060 kg/ha contra 10 300 kg/ha",
        "produtividade da água: 22,8 kg de milho por m³ contra 11,9",
        "dose que dá o melhor resultado",
      ],
      protocole: [
        "Uma zona testemunha e três zonas tratadas a 39, 51 e 74 kg/ha.",
        "Aplicação a 14 e 15 de maio de 2025, diretamente sob a linha de sementeira.",
        "Rega das zonas tratadas reduzida em 50 %, depois em 30 %, consoante as fases de crescimento.",
        "Colheita a 16 de setembro de 2025, em sectores comparáveis.",
      ],
      constats: [
        "Produções medidas: testemunha 10 300 kg/ha; 39 kg/ha → 11 200 kg/ha; 51 kg/ha → 10 300 kg/ha; 74 kg/ha → 12 060 kg/ha.",
        "A precisão conta: uma aplicação demasiado superficial, demasiado profunda ou desviada da linha de sementeira reduz o efeito.",
        "Para a exploração, menos 39 % de água representa poupar 13 629 liras turcas por hectare e por ano.",
      ],
      graphiques: [
        { titre: "Água de rega em 4 meses (mm)", barres: ["Zona testemunha", "Zonas tratadas"] },
        {
          titre: "Produção de milho consoante a dose (kg/ha)",
          barres: ["Testemunha", "39 kg/ha", "51 kg/ha", "74 kg/ha"],
        },
      ],
    },
    "canne-a-sucre-indonesie": {
      titre: "Cana-de-açúcar em Java: mais 55 % de colheita com EVERGREEN e ECOFERT",
      description:
        "Ensaio acompanhado pela Universidade de Jember em cana-de-açúcar em Java (Indonésia): mais 34 % de tonelagem com 2,5 g por planta e mais 55 % com 5 g, com mais açúcar.",
      culture: "Cana-de-açúcar (variedade B82.0333)",
      lieu: "Jember, Java",
      pays: "Indonésia",
      periode: "Fevereiro – julho de 2024",
      conduit: "Universidade de Jember e centro indonésio de investigação da cana-de-açúcar",
      produits: "EVERGREEN (hidrorretentor) e fertilizante bioestimulante ECO (ECOFERT)",
      chapeau:
        "O ensaio comparou três parcelas em solo argiloso: uma parcela testemunha, uma com 2,5 g de EVERGREEN por planta e outra com 5 g, recebendo estas duas últimas também o fertilizante bioestimulante ECO.",
      resultats: [
        "de tonelagem com 5 g por planta",
        "de tonelagem com 2,5 g por planta",
        "teor de sacarose à colheita (5 g contra testemunha)",
        "altura do colmo aos 8 meses, contra 111 cm da testemunha",
      ],
      protocole: [
        "Três parcelas de um quarto de hectare.",
        "EVERGREEN enterrado junto às raízes quando a cana tem 3 meses.",
        "Fertilizante ECO pulverizado na plantação, 3 meses depois e 8 meses após a plantação.",
        "Doses por hectare: 50 kg de EVERGREEN e 500 ml de fertilizante.",
      ],
      constats: [
        "Tonelagem total: 6950 t para a testemunha, 9330 t com 2,5 g por planta, 10 800 t com 5 g por planta.",
        "Diâmetro do colmo aos 8 meses: 2,47 cm para a testemunha, 2,78 cm com 2,5 g e 2,88 cm com 5 g.",
        "Teor de sacarose: 14 para a testemunha, 16 com 2,5 g e 18 com 5 g.",
      ],
      graphiques: [
        { titre: "Tonelagem colhida (t)", barres: ["Testemunha", "2,5 g por planta", "5 g por planta"] },
        {
          titre: "Teor de sacarose à colheita",
          barres: ["Testemunha", "2,5 g por planta", "5 g por planta"],
        },
      ],
    },
    "pommes-de-terre-afrique-du-sud": {
      titre: "Batatas na África do Sul: mais 31 % de produção, menos 52 % de água",
      description:
        "Ensaio EVERGREEN e ECOFERT em batata em Bloemfontein (África do Sul), 2025-2026: produção de 12 para 15,7 t/ha e 52 % de água poupada.",
      culture: "Batata (variedade Buffelspoort BP13)",
      lieu: "Bloemfontein",
      pays: "África do Sul",
      periode: "Setembro de 2025 – janeiro de 2026",
      conduit: "Afrinest Farm Group (Tzaneen, Limpopo)",
      produits: "EVERGREEN (hidrorretentor) e ECOFERT (fertilizante biológico)",
      chapeau:
        "Este ensaio-piloto mediu o efeito conjunto do EVERGREEN no solo e do ECOFERT pulverizado sobre a produção e a qualidade das batatas.",
      resultats: [
        "de produção total",
        "em vez de 12 t/ha",
        "de água",
        "de EVERGREEN no sulco de plantação",
      ],
      protocole: [
        "Linhas de 10 m, repetidas 5 vezes.",
        "Solo limoso (Avalon) com 15 a 18 % de argila; 26 667 plantas por hectare.",
        "Plantação manual a 22 de setembro de 2025; colheita de 25 a 31 de janeiro de 2026.",
        "EVERGREEN colocado à mão no sulco de plantação; ECOFERT pulverizado a 700 ml/ha.",
        "Rega convencional.",
      ],
      constats: [
        "Tubérculos maiores e mais uniformes.",
        "Menos risco na produção e um rendimento mais alto para o agricultor.",
      ],
      graphiques: [
        { titre: "Produção (t/ha)", barres: ["Sem tratamento", "EVERGREEN + ECOFERT"] },
        {
          titre: "Água de rega (índice, testemunha = 100)",
          barres: ["Sem tratamento", "EVERGREEN + ECOFERT"],
        },
      ],
    },
    "soja-chine-shandong": {
      titre: "Soja na China: mais 11 % de produção com um superabsorvente",
      description:
        "Ensaio em blocos casualizados com o Instituto de Solos e Fertilizantes de Shandong (China): emergência mais rápida e produção de soja superior em 11,2 a 11,4 %.",
      culture: "Soja (variedade Ludou II)",
      lieu: "Taian, província de Shandong",
      pays: "China",
      periode: "Junho – outubro de 2017",
      conduit: "Instituto de Solos e Fertilizantes de Shandong, com a Summit Enterprise",
      produits: "Polímero superabsorvente EVERGREEN",
      chapeau:
        "No verão, quando se semeia a soja, Shandong é quente e com forte evaporação. O ensaio mediu o efeito do superabsorvente colocado na linha de sementeira sobre a emergência, o vigor, a produção e o rendimento.",
      resultats: [
        "de produção",
        "de emergência mais rápida",
        "de taxa de germinação",
        "de soja por acre",
      ],
      protocole: [
        "Blocos casualizados: parcelas de 30 m², cada tratamento repetido 4 vezes.",
        "A mesma adubação em todas as parcelas: adubo composto e composto orgânico na linha de sementeira.",
        "Três tratamentos: testemunha sem superabsorvente, 1,6 kg e 2 kg de superabsorvente por parcela de 30 m².",
      ],
      constats: [
        "O aumento de produção atinge um nível estatisticamente significativo.",
        "Ganho de rendimento de 62,9 a 66,1 yuans por acre face à testemunha.",
      ],
      graphiques: [
        {
          titre: "Produção de soja (índice, testemunha = 100)",
          barres: ["Sem superabsorvente", "Com superabsorvente"],
        },
      ],
    },
  },
  enCours: [
    {
      titre: "Áceres-vermelhos na cidade — Universidade da Flórida",
      texte:
        "O laboratório de arboricultura Klein (Gainesville) testa o EVERGREEN em 90 áceres-vermelhos plantados em abril de 2025: 30 com o gel na cova de plantação, 30 com o gel misturado ao solo à volta da árvore, 30 sem gel. Estudo de 2 anos.",
    },
    {
      titre: "Reflorestação com abetos de Douglas — Universidade Estadual do Oregon",
      texte:
        "A cooperativa de investigação VMRC testa o EVERGREEN em dois locais de reflorestação com défices de água contrastados, perto de Coquille e de Roseburg: 48 plantas com gel e 48 sem gel, em cada local. Plantação em fevereiro de 2025, estudo de 2 anos.",
    },
  ],
};
