import type { Traduction } from "./types";

/** Les essais de terrain en chinois. */
export const zh: Traduction = {
  habillage: {
    retour: "← 所有试验",
    tousLesEssais: "查看全部试验 →",
    lireRapport: "阅读完整报告（PDF）",
    resultatsEyebrow: "结果",
    resultatsTitre: "这项试验测到了什么",
    imagesEyebrow: "图表",
    imagesTitre: "前后对比：实测差距",
    mecaniqueEyebrow: "工作原理",
    mecaniqueTitre: "水留在植物需要的位置",
    mecaniqueTexte:
      "保水剂拌入根系附近的土壤后，每次灌溉或降雨都会吸满水，而不是让水蒸发或渗入深层。随后它把水一天天还给植物。灌溉次数减少，植物在两次灌溉之间也不会缺水。",
    videoLegende: "种子发芽：根系向下深入土壤寻找水分。",
    videoAlt: "绿豆种子发芽的快进视频，可见土中的根系",
    videoMot: "视频",
    videoAccelere: "快进",
    ficheEyebrow: "试验概况",
    ficheTitre: "地点、时间、执行方",
    culture: "作物",
    lieu: "地点",
    periode: "时间",
    conduitPar: "执行方",
    produits: "产品",
    methodeEyebrow: "方法",
    methodeTitre: "试验如何进行",
    observationsEyebrow: "观察",
    observationsTitre: "值得记住的要点",
    autresEyebrow: "其他试验",
    autresTitre: "同样的产品，其他作物",
    hubEyebrow: "田间试验",
    hubTitre: "用水更少，收成更多：实测结果",
    hubChapeau:
      "多所大学、研究中心和农场在六个国家的七种作物上试用了EVERGREEN保水剂，单独使用或与ECOFERT肥料配合使用。每个页面都列出报告中的数据，并链接到完整文件。",
    hubPrincipe:
      "原理处处相同：保水剂把水留在根系附近，再一点点还给植物。视作物和气候而定，试验测得节水最多82%，增产最多93%。",
    hubTermines: "已完成的试验",
    hubEnCours: "与大学合作的在研试验",
    hubGuides: "我们的指南",
    hubCreditPhoto: "页头照片：",
    guideProduit: "查看产品页面",
    guidePreuvesEyebrow: "田间证据",
    guidePreuvesTitre: "测得该结果的试验",
    guideResultatsEyebrow: "田间结果",
    guideResultatsTitre: "试验测到了什么",
    guideComparaisonEyebrow: "对比",
    guideFaqEyebrow: "常见问题",
    guideFaqTitre: "客户最常问的问题",
    guideOui: "是",
    guideNon: "否",
    guideCritere: "比较项",
  },
  essais: {
    "palmiers-dattiers-emirats-icba": {
      titre: "阿联酋椰枣：灌溉用水减少82%",
      description:
        "ICBA在迪拜沙质土壤中对27棵椰枣树开展的EVERGREEN试验：节约82%灌溉用水，椰枣产量提高20%。",
      culture: "椰枣树",
      lieu: "ICBA研究站，迪拜",
      pays: "阿拉伯联合酋长国",
      periode: "2020-2021年生产季",
      conduit: "ICBA — 国际生物盐碱农业中心",
      produits: "EVERGREEN（保水剂）",
      chapeau:
        "阿联酋年降雨量约50毫米，农业几乎完全依赖灌溉。ICBA在露天条件下，于沙质盐碱土中，对树龄约8年的椰枣树试用了EVERGREEN。",
      resultats: [
        "整个生产季的灌溉用水",
        "最后7个月的用水，且树体无胁迫",
        "每棵树施用300克时的椰枣增产",
        "施用树木的灌溉频次",
      ],
      protocole: [
        "27棵椰枣树，株行距8 × 8米，位于ICBA研究站。",
        "生产季开始时将EVERGREEN混入表层50厘米土壤，每棵树设多个剂量（含300克、500克和1000克）。",
        "灌溉由实时测量土壤湿度的传感器控制。",
        "与未施用EVERGREEN的对照树比较。",
      ],
      constats: [
        "施用的树木在整个生产季未出现任何干旱或受损迹象。",
        "施用EVERGREEN后土壤中可利用养分明显更高：水分和矿物质留在根区，而不是渗入深层。",
        "土壤生物活性（呼吸作用与微生物量）提高。",
        "ICBA确认了田间条件下取得的全部结果。",
      ],
      graphiques: [
        {
          titre: "生产季灌溉用水（指数，对照=100）",
          barres: ["未用EVERGREEN", "使用EVERGREEN"],
        },
        { titre: "椰枣产量（指数，对照=100）", barres: ["未用EVERGREEN", "每棵树300克"] },
      ],
    },
    "pasteques-mexique": {
      titre: "墨西哥西瓜：节水60.5%，增产30%",
      description:
        "在埃莫西约（索诺拉州，墨西哥）2600株西瓜上、45 °C条件下开展的EVERGREEN试验：节水60.5%，收成提高30%。",
      culture: "西瓜（查尔斯顿品种）",
      lieu: "埃莫西约，索诺拉州",
      pays: "墨西哥",
      periode: "2023年2月15日 – 8月2日",
      conduit: "Green Solutions田间试验",
      produits: "EVERGREEN（保水剂）",
      chapeau:
        "索诺拉州是墨西哥西瓜产量最高的州，但2023年遭受严重干旱。试验旨在测量在日均气温45 °C的极干旱地区，EVERGREEN能节约多少水。",
      resultats: [
        "灌溉用水",
        "较100%灌溉地块的增产",
        "果实平均糖度",
        "每株施用的EVERGREEN",
      ],
      protocole: [
        "2600株西瓜。",
        "对照地块不施EVERGREEN，按100%灌溉。",
        "处理地块每株施5克EVERGREEN（比通常建议的3克多2克）。",
      ],
      constats: [
        "气候极其炎热干燥，土壤贫瘠。",
        "剂量取决于土壤类型（黏土、沙土、砾质土、石灰质土）和灌溉方式（水井、滴灌、雨养）。",
        "另一种可行方法：按品种每延长米施用15至20克EVERGREEN。",
      ],
      graphiques: [
        { titre: "灌溉用水（指数，对照=100）", barres: ["未用EVERGREEN", "每株5克"] },
        { titre: "收成（指数，对照=100）", barres: ["未用EVERGREEN", "每株5克"] },
      ],
    },
    "coton-turquie-hatay": {
      titre: "土耳其棉花：水分胁迫下产量几乎翻倍",
      description:
        "2025年在土耳其哈塔伊地区棉花上进行的EVERGREEN示范：尽管严重缺水，产量仍从2.53吨/公顷升至4.88吨/公顷（+93%）。",
      culture: "棉花",
      lieu: "Mistikoğlu Tarım农场，阿米克平原，哈塔伊",
      pays: "土耳其",
      periode: "2025年生产季",
      conduit: "Green Solutions与Teknik Tarım合作社",
      produits: "EVERGREEN（保水剂），注入根区下方",
      chapeau:
        "哈塔伊地区长期缺水、酷热，灌溉网络又在2023年地震中受损。2025年7月，阿米克平原经历了空前的水危机。试验正是在那里进行的。",
      resultats: [
        "产量：4.88吨/公顷，对照2.53吨/公顷",
        "水分生产率，至少",
        "毛收入（3300美元，对照1710美元）",
        "扣除产品与施用成本后的净收益",
      ],
      protocole: [
        "用Green Solutions的注射工具，将EVERGREEN注入播种垄下方的根区。",
        "比较多个剂量：48、55、58和62公斤/公顷。",
        "与未处理的对照区比较。",
        "当地常规灌溉方式：从明渠漫灌。",
      ],
      constats: [
        "尽管缺水，处理区棉花仍保持更好的长势和更多生物量。",
        "差距在最初几周即可见，而这段时期对棉花最终产量起决定作用。",
      ],
      graphiques: [
        { titre: "棉花产量（吨/公顷）", barres: ["对照区", "使用EVERGREEN"] },
        { titre: "毛收入（美元/公顷）", barres: ["对照区", "使用EVERGREEN"] },
      ],
    },
    "mais-turquie-konya": {
      titre: "土耳其玉米：节水39%，增产17%",
      description:
        "2025年在科尼亚（TIGEM，土耳其）玉米上进行的EVERGREEN示范：灌溉528毫米而非864毫米，产量12 060公斤/公顷，对照10 300公斤/公顷。",
      culture: "玉米",
      lieu: "TIGEM国有农场，科尼亚",
      pays: "土耳其",
      periode: "2025年5月 – 9月",
      conduit: "Green Solutions与D.I.S.，由TIGEM灌溉部门测量",
      produits: "EVERGREEN保水剂，施于播种线下方",
      chapeau:
        "目标很简单：用更少的水，产量不减甚至更高。保水剂由D.I.S.研制的机械注入播种线正下方的精确深度，随后有意减少处理区的灌溉。",
      resultats: [
        "用水：528毫米，而非864毫米",
        "产量：12 060公斤/公顷，对照10 300公斤/公顷",
        "水分生产率：每立方米产玉米22.8公斤，对照11.9公斤",
        "效果最好的剂量",
      ],
      protocole: [
        "一个对照区，三个处理区，剂量分别为39、51和74公斤/公顷。",
        "2025年5月14日和15日施用，直接置于播种线下方。",
        "处理区灌溉先减少50%，后减少30%，视生长阶段而定。",
        "2025年9月16日在条件相当的地块收获。",
      ],
      constats: [
        "实测产量：对照10 300公斤/公顷；39公斤/公顷 → 11 200公斤/公顷；51公斤/公顷 → 10 300公斤/公顷；74公斤/公顷 → 12 060公斤/公顷。",
        "精度很关键：施用过浅、过深或偏离播种线都会削弱效果。",
        "对农场而言，节水39%相当于每公顷每年节省13 629土耳其里拉。",
      ],
      graphiques: [
        { titre: "4个月灌溉用水（毫米）", barres: ["对照区", "处理区"] },
        {
          titre: "不同剂量的玉米产量（公斤/公顷）",
          barres: ["对照", "39公斤/公顷", "51公斤/公顷", "74公斤/公顷"],
        },
      ],
    },
    "canne-a-sucre-indonesie": {
      titre: "爪哇甘蔗：搭配EVERGREEN与ECOFERT增产55%",
      description:
        "由任抹大学跟踪的爪哇（印度尼西亚）甘蔗试验：每株2.5克时增产34%，每株5克时增产55%，含糖量也更高。",
      culture: "甘蔗（B82.0333品种）",
      lieu: "任抹，爪哇",
      pays: "印度尼西亚",
      periode: "2024年2月 – 7月",
      conduit: "任抹大学与印度尼西亚甘蔗研究中心",
      produits: "EVERGREEN（保水剂）与ECO生物刺激肥料（ECOFERT）",
      chapeau:
        "试验在黏质土壤上比较三块地：对照地块、每株施2.5克EVERGREEN的地块和每株施5克的地块，后两者还施用了ECO生物刺激肥料。",
      resultats: [
        "每株5克时的产量",
        "每株2.5克时的产量",
        "收获时的蔗糖含量（5克对比对照）",
        "第8个月的茎高，对照为111厘米",
      ],
      protocole: [
        "三块四分之一公顷的地块。",
        "甘蔗3个月大时将EVERGREEN埋于根系附近。",
        "ECO肥料在种植时、3个月后以及种植后8个月喷施。",
        "每公顷用量：EVERGREEN 50公斤，肥料500毫升。",
      ],
      constats: [
        "总产量：对照6950吨，每株2.5克为9330吨，每株5克为10 800吨。",
        "第8个月茎粗：对照2.47厘米，2.5克为2.78厘米，5克为2.88厘米。",
        "蔗糖含量：对照14，2.5克为16，5克为18。",
      ],
      graphiques: [
        { titre: "收获总量（吨）", barres: ["对照", "每株2.5克", "每株5克"] },
        {
          titre: "收获时的蔗糖含量",
          barres: ["对照", "每株2.5克", "每株5克"],
        },
      ],
    },
    "pommes-de-terre-afrique-du-sud": {
      titre: "南非马铃薯：增产31%，节水52%",
      description:
        "2025-2026年在布隆方丹（南非）马铃薯上进行的EVERGREEN与ECOFERT试验：产量由12吨/公顷提高到15.7吨/公顷，节水52%。",
      culture: "马铃薯（Buffelspoort BP13品种）",
      lieu: "布隆方丹",
      pays: "南非",
      periode: "2025年9月 – 2026年1月",
      conduit: "Afrinest Farm Group（Tzaneen，林波波省）",
      produits: "EVERGREEN（保水剂）与ECOFERT（有机肥料）",
      chapeau:
        "这项试点试验测量了土壤中的EVERGREEN与喷施的ECOFERT对马铃薯产量和品质的共同作用。",
      resultats: [
        "总产量",
        "而非12吨/公顷",
        "用水",
        "播种沟中的EVERGREEN",
      ],
      protocole: [
        "10米长的种植行，重复5次。",
        "壤土（Avalon），含黏粒15%至18%；每公顷26 667株。",
        "2025年9月22日人工种植；2026年1月25日至31日收获。",
        "EVERGREEN人工施于播种沟；ECOFERT按700毫升/公顷喷施。",
        "常规灌溉。",
      ],
      constats: [
        "薯块更大、更整齐。",
        "生产风险降低，农户收入提高。",
      ],
      graphiques: [
        { titre: "产量（吨/公顷）", barres: ["未处理", "EVERGREEN + ECOFERT"] },
        {
          titre: "灌溉用水（指数，对照=100）",
          barres: ["未处理", "EVERGREEN + ECOFERT"],
        },
      ],
    },
    "soja-chine-shandong": {
      titre: "中国大豆：使用高吸水树脂增产11%",
      description:
        "与山东省土壤肥料研究所（中国）合作的随机区组试验：出苗更快，大豆产量提高11.2%至11.4%。",
      culture: "大豆（鲁豆二号）",
      lieu: "泰安，山东省",
      pays: "中国",
      periode: "2017年6月 – 10月",
      conduit: "山东省土壤肥料研究所，与Summit Enterprise合作",
      produits: "EVERGREEN高吸水树脂",
      chapeau:
        "夏季播种大豆时，山东气温高、蒸发强。试验测量了施于播种行的高吸水树脂对出苗、长势、产量和收益的影响。",
      resultats: [
        "产量",
        "出苗提前",
        "发芽率",
        "每英亩大豆",
      ],
      protocole: [
        "随机区组：每小区30平方米，每个处理重复4次。",
        "各小区施肥相同：播种行内施复合肥和堆肥。",
        "三个处理：不施树脂的对照，每30平方米小区施1.6公斤和2公斤树脂。",
      ],
      constats: [
        "产量提高达到统计显著水平。",
        "与对照相比，每英亩收益增加62.9至66.1元。",
      ],
      graphiques: [
        {
          titre: "大豆产量（指数，对照=100）",
          barres: ["未用高吸水树脂", "使用高吸水树脂"],
        },
      ],
    },
  },
  enCours: [
    {
      titre: "城市红枫 — 佛罗里达大学",
      texte:
        "克莱因树木学实验室（盖恩斯维尔）在2025年4月栽下的90棵红枫上试用EVERGREEN：30棵将凝胶施于种植穴，30棵将凝胶拌入树周土壤，30棵不施凝胶。研究为期两年。",
    },
    {
      titre: "花旗松造林 — 俄勒冈州立大学",
      texte:
        "VMRC研究合作社在科奎尔和罗斯堡附近两处缺水程度不同的造林地试用EVERGREEN：每处48株施凝胶、48株不施。2025年2月栽植，研究为期两年。",
    },
  ],
};
