import type { Lang } from "./content";

export type LegalText = {
  privacyTitle: string;
  privacyDescription: string;
  legalTitle: string;
  legalDescription: string;
  back: string;
  privacyUpdated: string;
  legalUpdated: string;
  controller: string;
  collected: string;
  purpose: string;
  access: string;
  retention: string;
  cookies: string;
  rights: string;
  publisher: string;
  director: string;
  host: string;
  intellectual: string;
  credits: string;
  personalData: string;
  companyId: string;
  toComplete: string;
  phone: string;
  email: string;
  privacyIntro: string;
  collectedBody: string;
  purposeBody: string;
  accessBody: string;
  retentionBody: string;
  cookiesBody: string;
  rightsBody: string;
  publisherBody: string;
  directorBody: string;
  intellectualBody: string;
  creditsBody: string;
  personalDataBody: string;
};

export const LEGAL_TEXT: Record<Lang, LegalText> = {
  fr: {
    privacyTitle: "Politique de confidentialité",
    privacyDescription: "Données personnelles collectées, accès, durée de conservation et exercice de vos droits.",
    legalTitle: "Mentions légales",
    legalDescription: "Éditeur, directeur de la publication, hébergeur et propriété intellectuelle du site Green Solutions.",
    back: "Retour au site",
    privacyUpdated: "Dernière mise à jour : 20 septembre 2026",
    legalUpdated: "Dernière mise à jour : 16 septembre 2026",
    controller: "Qui est responsable de ces données",
    collected: "Ce que les formulaires collectent",
    purpose: "Pourquoi nous traitons ces données",
    access: "Qui y a accès",
    retention: "Combien de temps nous les gardons",
    cookies: "Cookies et mesure d’audience",
    rights: "Vos droits",
    publisher: "Éditeur du site",
    director: "Directeur de la publication",
    host: "Hébergeur",
    intellectual: "Propriété intellectuelle",
    credits: "Crédits photographiques",
    personalData: "Données personnelles",
    companyId: "Numéro d’identification des entreprises (IDE)",
    toComplete: "à compléter",
    phone: "Téléphone",
    email: "Courriel",
    privacyIntro: "Ce site ne dépose aucun cookie de son fait et n’utilise aucun outil de mesure d’audience. Les seules données personnelles que nous recevons sont celles que vous nous transmettez dans nos formulaires de contact et de demande de partenariat. Une vidéo YouTube est intégrée à la page consacrée au Paulownia ; c’est la seule exception, détaillée ci-dessous.",
    collectedBody: "Selon le formulaire utilisé, nous pouvons recevoir votre nom, le nom de votre société et son site internet, votre adresse postale complète, votre numéro de téléphone, votre adresse électronique et le message que vous écrivez. Ces informations ne sont pas enregistrées dans une base de données : le formulaire les transmet directement par courriel.",
    purposeBody: "Ces données servent uniquement à vous répondre et à poursuivre l’échange que vous avez engagé. Elles ne sont ni vendues, ni cédées à des fins commerciales, ni utilisées pour de la prospection non sollicitée. La base légale est notre intérêt légitime à répondre aux personnes qui nous écrivent, au sens de l’article 6.1.f du RGPD.",
    accessBody: "Les messages sont reçus et lus par Michel-Paul Correa et Gabriel Bonnat, dirigeants de Green Solutions. Resend assure l’envoi des courriels et Vercel héberge le site. Ces prestataires sont établis aux États-Unis ; les transferts s’effectuent dans le cadre des garanties prévues par le droit européen de la protection des données.",
    retentionBody: "Les messages sont conservés pendant trois ans à compter de notre dernier échange, puis supprimés.",
    cookiesBody: "Le site n’utilise ni traceur, ni outil statistique, ni bouton de réseau social. Google Fonts fournit les polices et peut recevoir votre adresse IP lors du chargement. La page Paulownia intègre YouTube via youtube-nocookie.com : aucun cookie n’est déposé avant la lecture, mais votre adresse IP peut être transmise à Google et la lecture peut enregistrer des données sur votre appareil.",
    rightsBody: "Vous pouvez demander l’accès, la rectification, l’effacement, la limitation du traitement, vous y opposer ou demander la portabilité de vos données. Écrivez à contact@evergreen-ecosorb.com ; nous répondons dans un délai d’un mois. Si nécessaire, vous pouvez saisir l’autorité de protection des données compétente, notamment la CNIL en France.",
    publisherBody: "GREEN SOLUTIONS GROUPE AIM SA, 46, route de la Condémine, 1475 Forel, Suisse. Société anonyme de droit suisse.",
    directorBody: "Michel-Paul Correa, en sa qualité de dirigeant.",
    intellectualBody: "L’ensemble des contenus de ce site — textes, images, schémas, marques et logos — est protégé par le droit de la propriété intellectuelle. EVERGREEN®, ECOSORB®, ECOFERT®, NAPEMA®, Water Vital® et Paulownia ALTIFOLIA® sont des marques déposées. Toute reproduction ou représentation, totale ou partielle, sans autorisation écrite préalable est interdite.",
    creditsBody: "Photographies de Paulownia : Zeynel Cebeci et Codex, publiées sur Wikimedia Commons sous licence CC BY-SA 4.0.",
    personalDataBody: "Le traitement des données transmises via les formulaires est décrit dans notre politique de confidentialité.",
  },
  en: {
    privacyTitle: "Privacy Policy",
    privacyDescription: "Personal data collected, access, retention periods and how to exercise your rights.",
    legalTitle: "Legal Notice",
    legalDescription: "Website publisher, publication director, hosting provider and intellectual-property information.",
    back: "Back to the site",
    privacyUpdated: "Last updated: 20 September 2026",
    legalUpdated: "Last updated: 16 September 2026",
    controller: "Who is responsible for your data",
    collected: "Information collected through the forms",
    purpose: "Why we process this information",
    access: "Who has access",
    retention: "How long we keep the data",
    cookies: "Cookies and audience measurement",
    rights: "Your rights",
    publisher: "Website publisher",
    director: "Publication director",
    host: "Hosting provider",
    intellectual: "Intellectual property",
    credits: "Photo credits",
    personalData: "Personal data",
    companyId: "Business identification number (UID)",
    toComplete: "to be completed",
    phone: "Telephone",
    email: "Email",
    privacyIntro: "This website does not set its own cookies and does not use audience-measurement tools. The only personal data we receive is information you submit through our contact and partnership forms. A YouTube video is embedded on the Paulownia page; this is the only exception and is explained below.",
    collectedBody: "Depending on the form used, we may receive your name, company name and website, full postal address, telephone number, email address and the message you submit. This information is not stored in a database; the form sends it directly by email.",
    purposeBody: "We use this information only to reply to you and continue the exchange you initiated. It is not sold, transferred for commercial purposes or used for unsolicited marketing. The legal basis is our legitimate interest in responding to people who contact us under Article 6(1)(f) GDPR.",
    accessBody: "Messages are received and read by Michel-Paul Correa and Gabriel Bonnat, directors of Green Solutions. Resend sends the emails and Vercel hosts the website. Both providers are established in the United States; transfers are carried out under the safeguards required by European data-protection law.",
    retentionBody: "Messages are kept for three years from our last exchange and are then deleted.",
    cookiesBody: "The website uses no tracking or analytics tools and no social-media buttons. Google Fonts supplies the typefaces and may receive your IP address while they load. The Paulownia page embeds YouTube through youtube-nocookie.com: no cookie is set before playback, but your IP address may be transmitted to Google and playback may store data on your device.",
    rightsBody: "You may request access, correction, deletion, restriction of processing, object to processing or request data portability. Email contact@evergreen-ecosorb.com; we will reply within one month. If necessary, you may complain to the competent data-protection authority, including the CNIL in France.",
    publisherBody: "GREEN SOLUTIONS GROUPE AIM SA, 46, route de la Condémine, 1475 Forel, Switzerland. Swiss public limited company.",
    directorBody: "Michel-Paul Correa, in his capacity as company director.",
    intellectualBody: "All content on this website — text, images, diagrams, trademarks and logos — is protected by intellectual-property law. EVERGREEN®, ECOSORB®, ECOFERT®, NAPEMA®, Water Vital® and Paulownia ALTIFOLIA® are registered trademarks. Any full or partial reproduction without prior written permission is prohibited.",
    creditsBody: "Paulownia photographs: Zeynel Cebeci and Codex, published on Wikimedia Commons under the CC BY-SA 4.0 licence.",
    personalDataBody: "The processing of data submitted through the forms is described in our Privacy Policy.",
  },
  es: {
    privacyTitle: "Política de privacidad", privacyDescription: "Datos personales recogidos, acceso, conservación y ejercicio de sus derechos.", legalTitle: "Aviso legal", legalDescription: "Editor, responsable de publicación, alojamiento y propiedad intelectual del sitio.", back: "Volver al sitio", privacyUpdated: "Última actualización: 20 de septiembre de 2026", legalUpdated: "Última actualización: 16 de septiembre de 2026",
    controller: "Responsable del tratamiento", collected: "Datos que recogen los formularios", purpose: "Por qué tratamos estos datos", access: "Quién tiene acceso", retention: "Durante cuánto tiempo conservamos los datos", cookies: "Cookies y medición de audiencia", rights: "Sus derechos", publisher: "Editor del sitio", director: "Responsable de publicación", host: "Alojamiento", intellectual: "Propiedad intelectual", credits: "Créditos fotográficos", personalData: "Datos personales", companyId: "Número de identificación empresarial (IDE)", toComplete: "por completar", phone: "Teléfono", email: "Correo electrónico",
    privacyIntro: "Este sitio no instala cookies propias ni utiliza herramientas de medición de audiencia. Los únicos datos personales que recibimos son los que usted facilita mediante los formularios de contacto y de colaboración. En la página dedicada a la Paulownia se integra un vídeo de YouTube; es la única excepción y se explica a continuación.",
    collectedBody: "Según el formulario, podemos recibir su nombre, empresa y sitio web, dirección postal completa, teléfono, correo electrónico y mensaje. Estos datos no se almacenan en una base de datos: el formulario los envía directamente por correo electrónico.",
    purposeBody: "Los utilizamos únicamente para responderle y continuar el contacto iniciado por usted. No se venden, no se ceden con fines comerciales ni se utilizan para marketing no solicitado. La base jurídica es nuestro interés legítimo en responder a quienes nos contactan conforme al artículo 6.1.f del RGPD.",
    accessBody: "Los mensajes son recibidos y leídos por Michel-Paul Correa y Gabriel Bonnat, directivos de Green Solutions. Resend envía los correos y Vercel aloja el sitio. Ambos proveedores están establecidos en Estados Unidos y las transferencias se realizan con las garantías exigidas por la normativa europea.",
    retentionBody: "Los mensajes se conservan durante tres años desde nuestro último intercambio y después se eliminan.",
    cookiesBody: "El sitio no utiliza rastreadores, herramientas estadísticas ni botones de redes sociales. Google Fonts proporciona las tipografías y puede recibir su IP durante la carga. La página Paulownia integra YouTube mediante youtube-nocookie.com: no se instala ninguna cookie antes de reproducir el vídeo, aunque la IP puede transmitirse a Google y la reproducción puede almacenar datos en su dispositivo.",
    rightsBody: "Puede solicitar acceso, rectificación, supresión, limitación, oposición o portabilidad. Escriba a contact@evergreen-ecosorb.com; responderemos en un mes. Si es necesario, puede reclamar ante la autoridad competente de protección de datos, incluida la CNIL francesa.",
    publisherBody: "GREEN SOLUTIONS GROUPE AIM SA, 46, route de la Condémine, 1475 Forel, Suiza. Sociedad anónima de derecho suizo.", directorBody: "Michel-Paul Correa, en calidad de directivo.", intellectualBody: "Todos los contenidos del sitio — textos, imágenes, esquemas, marcas y logotipos — están protegidos por la normativa de propiedad intelectual. EVERGREEN®, ECOSORB®, ECOFERT®, NAPEMA®, Water Vital® y Paulownia ALTIFOLIA® son marcas registradas. Queda prohibida cualquier reproducción total o parcial sin autorización escrita previa.", creditsBody: "Fotografías de Paulownia: Zeynel Cebeci y Codex, publicadas en Wikimedia Commons bajo licencia CC BY-SA 4.0.", personalDataBody: "El tratamiento de los datos enviados mediante los formularios se describe en nuestra Política de privacidad.",
  },
  pt: {
    privacyTitle: "Política de privacidade", privacyDescription: "Dados pessoais recolhidos, acesso, conservação e exercício dos seus direitos.", legalTitle: "Aviso legal", legalDescription: "Editor, responsável pela publicação, alojamento e propriedade intelectual do site.", back: "Voltar ao site", privacyUpdated: "Última atualização: 20 de setembro de 2026", legalUpdated: "Última atualização: 16 de setembro de 2026",
    controller: "Responsável pelo tratamento", collected: "Dados recolhidos pelos formulários", purpose: "Porque tratamos estes dados", access: "Quem tem acesso", retention: "Durante quanto tempo conservamos os dados", cookies: "Cookies e medição de audiência", rights: "Os seus direitos", publisher: "Editor do site", director: "Responsável pela publicação", host: "Alojamento", intellectual: "Propriedade intelectual", credits: "Créditos fotográficos", personalData: "Dados pessoais", companyId: "Número de identificação da empresa (IDE)", toComplete: "a completar", phone: "Telefone", email: "E-mail",
    privacyIntro: "Este site não instala cookies próprios nem utiliza ferramentas de medição de audiência. Os únicos dados pessoais que recebemos são os enviados através dos formulários de contacto e parceria. A página dedicada à Paulownia integra um vídeo do YouTube; é a única exceção e é explicada abaixo.",
    collectedBody: "Consoante o formulário, podemos receber o seu nome, empresa e site, morada completa, telefone, e-mail e mensagem. Estes dados não são guardados numa base de dados: o formulário envia-os diretamente por e-mail.",
    purposeBody: "Usamos estes dados apenas para lhe responder e continuar o contacto que iniciou. Não são vendidos, cedidos para fins comerciais nem usados em marketing não solicitado. A base jurídica é o nosso interesse legítimo em responder a quem nos contacta, nos termos do artigo 6.º, n.º 1, alínea f), do RGPD.",
    accessBody: "As mensagens são recebidas e lidas por Michel-Paul Correa e Gabriel Bonnat, dirigentes da Green Solutions. A Resend envia os e-mails e a Vercel aloja o site. Ambos os fornecedores estão estabelecidos nos Estados Unidos e as transferências seguem as garantias exigidas pelo direito europeu.",
    retentionBody: "As mensagens são conservadas durante três anos após o nosso último contacto e depois eliminadas.",
    cookiesBody: "O site não utiliza rastreadores, ferramentas estatísticas nem botões de redes sociais. O Google Fonts fornece os tipos de letra e pode receber o seu IP durante o carregamento. A página Paulownia integra YouTube através de youtube-nocookie.com: nenhum cookie é instalado antes da reprodução, mas o IP pode ser transmitido à Google e a reprodução pode guardar dados no dispositivo.",
    rightsBody: "Pode solicitar acesso, retificação, apagamento, limitação, oposição ou portabilidade. Escreva para contact@evergreen-ecosorb.com; responderemos no prazo de um mês. Se necessário, pode reclamar junto da autoridade competente de proteção de dados, incluindo a CNIL francesa.",
    publisherBody: "GREEN SOLUTIONS GROUPE AIM SA, 46, route de la Condémine, 1475 Forel, Suíça. Sociedade anónima de direito suíço.", directorBody: "Michel-Paul Correa, na qualidade de dirigente.", intellectualBody: "Todo o conteúdo do site — textos, imagens, esquemas, marcas e logótipos — é protegido pela legislação de propriedade intelectual. EVERGREEN®, ECOSORB®, ECOFERT®, NAPEMA®, Water Vital® e Paulownia ALTIFOLIA® são marcas registadas. É proibida qualquer reprodução total ou parcial sem autorização escrita prévia.", creditsBody: "Fotografias de Paulownia: Zeynel Cebeci e Codex, publicadas no Wikimedia Commons sob licença CC BY-SA 4.0.", personalDataBody: "O tratamento dos dados enviados através dos formulários está descrito na nossa Política de privacidade.",
  },
  ar: {
    privacyTitle: "سياسة الخصوصية", privacyDescription: "البيانات الشخصية التي نجمعها ومن يمكنه الوصول إليها ومدة الاحتفاظ بها وكيفية ممارسة حقوقكم.", legalTitle: "الإشعارات القانونية", legalDescription: "بيانات ناشر الموقع ومسؤول النشر والاستضافة والملكية الفكرية.", back: "العودة إلى الموقع", privacyUpdated: "آخر تحديث: 20 سبتمبر 2026", legalUpdated: "آخر تحديث: 16 سبتمبر 2026",
    controller: "الجهة المسؤولة عن البيانات", collected: "البيانات التي تجمعها النماذج", purpose: "لماذا نعالج هذه البيانات", access: "من يمكنه الوصول", retention: "مدة الاحتفاظ بالبيانات", cookies: "ملفات تعريف الارتباط وقياس الجمهور", rights: "حقوقكم", publisher: "ناشر الموقع", director: "مسؤول النشر", host: "الاستضافة", intellectual: "الملكية الفكرية", credits: "حقوق الصور", personalData: "البيانات الشخصية", companyId: "رقم تعريف الشركة (IDE)", toComplete: "يُستكمل لاحقًا", phone: "الهاتف", email: "البريد الإلكتروني",
    privacyIntro: "لا يضع هذا الموقع ملفات تعريف ارتباط خاصة به ولا يستخدم أدوات قياس الجمهور. والبيانات الشخصية الوحيدة التي نتلقاها هي ما ترسلونه عبر نماذج الاتصال والشراكة. تتضمن صفحة Paulownia فيديو من YouTube؛ وهذه هي الحالة الاستثنائية الوحيدة الموضحة أدناه.",
    collectedBody: "قد نتلقى الاسم واسم الشركة والموقع والعنوان الكامل ورقم الهاتف والبريد الإلكتروني والرسالة. لا تُخزَّن هذه البيانات في قاعدة بيانات؛ بل يرسلها النموذج مباشرة عبر البريد الإلكتروني.",
    purposeBody: "نستخدمها فقط للرد عليكم ومتابعة التواصل الذي بدأتموه. لا تُباع ولا تُنقل لأغراض تجارية ولا تُستخدم في تسويق غير مطلوب. والأساس القانوني هو مصلحتنا المشروعة في الرد على من يتواصل معنا وفق المادة 6(1)(f) من اللائحة العامة لحماية البيانات.",
    accessBody: "يتلقى الرسائل ويقرأها Michel-Paul Correa وGabriel Bonnat، وهما من مسؤولي Green Solutions. تتولى Resend إرسال الرسائل وتستضيف Vercel الموقع. يقع المزودان في الولايات المتحدة وتتم عمليات النقل وفق الضمانات المطلوبة بموجب القانون الأوروبي.",
    retentionBody: "تُحفظ الرسائل ثلاث سنوات من تاريخ آخر تواصل ثم تُحذف.",
    cookiesBody: "لا يستخدم الموقع أدوات تتبع أو إحصاءات أو أزرار شبكات اجتماعية. يوفر Google Fonts الخطوط وقد يتلقى عنوان IP أثناء التحميل. وتستخدم صفحة Paulownia مشغل YouTube عبر youtube-nocookie.com؛ فلا يُضبط أي ملف تعريف ارتباط قبل التشغيل، لكن قد يُنقل عنوان IP إلى Google وقد يخزن التشغيل بيانات على جهازكم.",
    rightsBody: "يمكنكم طلب الوصول أو التصحيح أو الحذف أو تقييد المعالجة أو الاعتراض عليها أو طلب نقل البيانات. راسلونا على contact@evergreen-ecosorb.com وسنرد خلال شهر. ويمكنكم عند الحاجة تقديم شكوى إلى سلطة حماية البيانات المختصة، بما في ذلك CNIL في فرنسا.",
    publisherBody: "GREEN SOLUTIONS GROUPE AIM SA، 46 route de la Condémine، 1475 Forel، سويسرا. شركة مساهمة خاضعة للقانون السويسري.", directorBody: "Michel-Paul Correa بصفته مديرًا.", intellectualBody: "جميع محتويات الموقع — النصوص والصور والرسوم والعلامات والشعارات — محمية بحقوق الملكية الفكرية. EVERGREEN® وECOSORB® وECOFERT® وNAPEMA® وWater Vital® وPaulownia ALTIFOLIA® علامات تجارية مسجلة. يُحظر النسخ الكلي أو الجزئي دون موافقة خطية مسبقة.", creditsBody: "صور Paulownia: Zeynel Cebeci وCodex، منشورة على Wikimedia Commons بموجب ترخيص CC BY-SA 4.0.", personalDataBody: "توضح سياسة الخصوصية كيفية معالجة البيانات المرسلة عبر النماذج.",
  },
  zh: {
    privacyTitle: "隐私政策", privacyDescription: "个人数据收集、访问权限、保存期限以及您如何行使相关权利。", legalTitle: "法律声明", legalDescription: "网站发布方、发布负责人、托管服务商及知识产权信息。", back: "返回网站", privacyUpdated: "最后更新：2026年9月20日", legalUpdated: "最后更新：2026年9月16日",
    controller: "数据控制方", collected: "表单收集的信息", purpose: "我们为何处理这些数据", access: "谁可以访问", retention: "保存期限", cookies: "Cookie 与受众统计", rights: "您的权利", publisher: "网站发布方", director: "发布负责人", host: "托管服务商", intellectual: "知识产权", credits: "图片鸣谢", personalData: "个人数据", companyId: "企业识别号（IDE）", toComplete: "待补充", phone: "电话", email: "电子邮箱",
    privacyIntro: "本网站不会自行设置 Cookie，也不使用受众统计工具。我们收到的个人数据仅限于您通过联系表单或合作申请表提交的信息。Paulownia 页面嵌入了一段 YouTube 视频，这是唯一的例外，说明如下。",
    collectedBody: "根据表单，我们可能收到您的姓名、公司及网站、完整地址、电话号码、电子邮箱和留言。这些信息不会存储在数据库中；表单会将其直接通过电子邮件发送。",
    purposeBody: "这些信息仅用于回复您并继续您主动发起的沟通。数据不会出售、不会用于商业转让，也不会用于未经请求的营销。法律依据是我们根据 GDPR 第6(1)(f)条回应联系人的合法利益。",
    accessBody: "消息由 Green Solutions 管理人员 Michel-Paul Correa 和 Gabriel Bonnat 接收和阅读。Resend 负责发送邮件，Vercel 负责托管网站。两家服务商均位于美国，数据传输遵循欧洲数据保护法规要求的保障机制。",
    retentionBody: "消息自最后一次沟通之日起保存三年，之后删除。",
    cookiesBody: "网站不使用跟踪工具、统计工具或社交媒体按钮。Google Fonts 提供字体，加载时可能接收您的 IP 地址。Paulownia 页面通过 youtube-nocookie.com 嵌入 YouTube；播放前不会设置 Cookie，但 IP 地址可能传输给 Google，播放也可能在设备上存储数据。",
    rightsBody: "您可以申请访问、更正、删除、限制处理、反对处理或申请数据可携带。请发送邮件至 contact@evergreen-ecosorb.com，我们将在一个月内回复。如有需要，您可以向有管辖权的数据保护机构投诉，包括法国 CNIL。",
    publisherBody: "GREEN SOLUTIONS GROUPE AIM SA，地址：46, route de la Condémine, 1475 Forel, Switzerland。瑞士股份有限公司。", directorBody: "Michel-Paul Correa，以公司负责人身份。", intellectualBody: "本网站所有文字、图片、示意图、商标和标识均受知识产权法保护。EVERGREEN®、ECOSORB®、ECOFERT®、NAPEMA®、Water Vital® 和 Paulownia ALTIFOLIA® 均为注册商标。未经事先书面许可，禁止全部或部分复制。", creditsBody: "Paulownia 图片：Zeynel Cebeci 和 Codex，发布于 Wikimedia Commons，采用 CC BY-SA 4.0 许可。", personalDataBody: "通过表单提交的数据处理方式详见我们的隐私政策。",
  },
  id: {
    privacyTitle: "Kebijakan Privasi", privacyDescription: "Data pribadi yang dikumpulkan, akses, masa penyimpanan, dan cara menggunakan hak Anda.", legalTitle: "Pemberitahuan Hukum", legalDescription: "Penerbit situs, penanggung jawab publikasi, hosting, dan hak kekayaan intelektual.", back: "Kembali ke situs", privacyUpdated: "Terakhir diperbarui: 20 September 2026", legalUpdated: "Terakhir diperbarui: 16 September 2026",
    controller: "Pihak yang bertanggung jawab atas data", collected: "Data yang dikumpulkan melalui formulir", purpose: "Mengapa kami memproses data", access: "Siapa yang memiliki akses", retention: "Berapa lama data disimpan", cookies: "Cookie dan pengukuran audiens", rights: "Hak Anda", publisher: "Penerbit situs", director: "Penanggung jawab publikasi", host: "Penyedia hosting", intellectual: "Hak kekayaan intelektual", credits: "Kredit foto", personalData: "Data pribadi", companyId: "Nomor identifikasi perusahaan (IDE)", toComplete: "akan dilengkapi", phone: "Telepon", email: "Email",
    privacyIntro: "Situs ini tidak memasang cookie sendiri dan tidak menggunakan alat pengukuran audiens. Data pribadi yang kami terima hanya informasi yang Anda kirim melalui formulir kontak dan kemitraan. Halaman Paulownia menyematkan satu video YouTube; ini satu-satunya pengecualian dan dijelaskan di bawah.",
    collectedBody: "Kami dapat menerima nama, perusahaan dan situs web, alamat lengkap, nomor telepon, email, dan pesan Anda. Informasi ini tidak disimpan dalam basis data; formulir mengirimkannya langsung melalui email.",
    purposeBody: "Data digunakan hanya untuk membalas dan melanjutkan komunikasi yang Anda mulai. Data tidak dijual, tidak dialihkan untuk tujuan komersial, dan tidak digunakan untuk pemasaran yang tidak diminta. Dasar hukumnya adalah kepentingan sah kami untuk menanggapi orang yang menghubungi kami berdasarkan Pasal 6(1)(f) GDPR.",
    accessBody: "Pesan diterima dan dibaca oleh Michel-Paul Correa dan Gabriel Bonnat, pimpinan Green Solutions. Resend mengirim email dan Vercel menghosting situs. Kedua penyedia berbasis di Amerika Serikat dan transfer dilakukan dengan perlindungan yang diwajibkan oleh hukum Eropa.",
    retentionBody: "Pesan disimpan selama tiga tahun sejak komunikasi terakhir, kemudian dihapus.",
    cookiesBody: "Situs tidak menggunakan pelacak, alat statistik, atau tombol media sosial. Google Fonts menyediakan font dan dapat menerima alamat IP saat dimuat. Halaman Paulownia menyematkan YouTube melalui youtube-nocookie.com; tidak ada cookie sebelum video diputar, tetapi IP dapat dikirim ke Google dan pemutaran dapat menyimpan data di perangkat.",
    rightsBody: "Anda dapat meminta akses, koreksi, penghapusan, pembatasan, keberatan, atau portabilitas data. Kirim email ke contact@evergreen-ecosorb.com; kami akan menjawab dalam satu bulan. Jika perlu, Anda dapat mengajukan keluhan kepada otoritas perlindungan data yang berwenang, termasuk CNIL di Prancis.",
    publisherBody: "GREEN SOLUTIONS GROUPE AIM SA, 46, route de la Condémine, 1475 Forel, Swiss. Perseroan terbatas menurut hukum Swiss.", directorBody: "Michel-Paul Correa, dalam kapasitasnya sebagai pimpinan.", intellectualBody: "Seluruh konten situs — teks, gambar, diagram, merek, dan logo — dilindungi hukum kekayaan intelektual. EVERGREEN®, ECOSORB®, ECOFERT®, NAPEMA®, Water Vital®, dan Paulownia ALTIFOLIA® adalah merek terdaftar. Dilarang menggandakan seluruh atau sebagian konten tanpa izin tertulis sebelumnya.", creditsBody: "Foto Paulownia: Zeynel Cebeci dan Codex, dipublikasikan di Wikimedia Commons dengan lisensi CC BY-SA 4.0.", personalDataBody: "Pemrosesan data yang dikirim melalui formulir dijelaskan dalam Kebijakan Privasi kami.",
  },
  de: {
    privacyTitle: "Datenschutzerklärung", privacyDescription: "Erhobene personenbezogene Daten, Zugriff, Speicherdauer und Ihre Rechte.", legalTitle: "Impressum", legalDescription: "Angaben zum Websitebetreiber, Verantwortlichen, Hosting und geistigen Eigentum.", back: "Zurück zur Website", privacyUpdated: "Letzte Aktualisierung: 20. September 2026", legalUpdated: "Letzte Aktualisierung: 16. September 2026",
    controller: "Verantwortlicher für die Daten", collected: "Welche Daten die Formulare erfassen", purpose: "Warum wir diese Daten verarbeiten", access: "Wer Zugriff hat", retention: "Wie lange wir die Daten aufbewahren", cookies: "Cookies und Reichweitenmessung", rights: "Ihre Rechte", publisher: "Websitebetreiber", director: "Inhaltlich Verantwortlicher", host: "Hosting", intellectual: "Geistiges Eigentum", credits: "Bildnachweise", personalData: "Personenbezogene Daten", companyId: "Unternehmens-Identifikationsnummer (UID)", toComplete: "noch zu ergänzen", phone: "Telefon", email: "E-Mail",
    privacyIntro: "Diese Website setzt keine eigenen Cookies und verwendet keine Tools zur Reichweitenmessung. Wir erhalten ausschließlich Daten, die Sie über das Kontakt- oder Partnerformular übermitteln. Auf der Paulownia-Seite ist ein YouTube-Video eingebettet; dies ist die einzige Ausnahme und wird unten erläutert.",
    collectedBody: "Wir können Ihren Namen, Firma und Website, vollständige Anschrift, Telefonnummer, E-Mail-Adresse und Nachricht erhalten. Diese Angaben werden nicht in einer Datenbank gespeichert; das Formular sendet sie direkt per E-Mail.",
    purposeBody: "Wir verwenden die Daten ausschließlich zur Beantwortung Ihrer Anfrage und zur Fortsetzung des von Ihnen begonnenen Austauschs. Sie werden weder verkauft noch kommerziell weitergegeben oder für unerwünschte Werbung genutzt. Rechtsgrundlage ist unser berechtigtes Interesse gemäß Art. 6 Abs. 1 lit. f DSGVO.",
    accessBody: "Die Nachrichten werden von Michel-Paul Correa und Gabriel Bonnat, Verantwortlichen von Green Solutions, gelesen. Resend versendet die E-Mails, Vercel hostet die Website. Beide Anbieter sitzen in den USA; Übermittlungen erfolgen unter den gesetzlich vorgesehenen europäischen Garantien.",
    retentionBody: "Nachrichten werden drei Jahre ab unserem letzten Austausch gespeichert und anschließend gelöscht.",
    cookiesBody: "Die Website verwendet keine Tracker, Statistiktools oder Social-Media-Schaltflächen. Google Fonts stellt die Schriftarten bereit und kann beim Laden Ihre IP-Adresse erhalten. Die Paulownia-Seite bindet YouTube über youtube-nocookie.com ein; vor der Wiedergabe wird kein Cookie gesetzt, Ihre IP kann jedoch an Google übertragen und bei der Wiedergabe können Daten auf Ihrem Gerät gespeichert werden.",
    rightsBody: "Sie können Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch oder Datenübertragbarkeit verlangen. Schreiben Sie an contact@evergreen-ecosorb.com; wir antworten innerhalb eines Monats. Bei Bedarf können Sie sich an die zuständige Datenschutzbehörde wenden, einschließlich der französischen CNIL.",
    publisherBody: "GREEN SOLUTIONS GROUPE AIM SA, 46, route de la Condémine, 1475 Forel, Schweiz. Aktiengesellschaft nach Schweizer Recht.", directorBody: "Michel-Paul Correa in seiner Funktion als Geschäftsführer.", intellectualBody: "Sämtliche Inhalte dieser Website — Texte, Bilder, Grafiken, Marken und Logos — sind urheber- und markenrechtlich geschützt. EVERGREEN®, ECOSORB®, ECOFERT®, NAPEMA®, Water Vital® und Paulownia ALTIFOLIA® sind eingetragene Marken. Jede vollständige oder teilweise Vervielfältigung ohne vorherige schriftliche Genehmigung ist untersagt.", creditsBody: "Paulownia-Fotografien: Zeynel Cebeci und Codex, veröffentlicht auf Wikimedia Commons unter CC BY-SA 4.0.", personalDataBody: "Die Verarbeitung der über die Formulare übermittelten Daten ist in unserer Datenschutzerklärung beschrieben.",
  },
  it: {
    privacyTitle: "Informativa sulla privacy", privacyDescription: "Dati personali raccolti, accesso, tempi di conservazione e modalità di esercizio dei diritti.", legalTitle: "Note legali", legalDescription: "Editore del sito, responsabile della pubblicazione, hosting e proprietà intellettuale.", back: "Torna al sito", privacyUpdated: "Ultimo aggiornamento: 20 settembre 2026", legalUpdated: "Ultimo aggiornamento: 16 settembre 2026",
    controller: "Titolare del trattamento", collected: "Dati raccolti dai moduli", purpose: "Perché trattiamo questi dati", access: "Chi può accedere", retention: "Per quanto tempo conserviamo i dati", cookies: "Cookie e misurazione dell’audience", rights: "I vostri diritti", publisher: "Editore del sito", director: "Responsabile della pubblicazione", host: "Hosting", intellectual: "Proprietà intellettuale", credits: "Crediti fotografici", personalData: "Dati personali", companyId: "Numero d’identificazione dell’impresa (IDE)", toComplete: "da completare", phone: "Telefono", email: "E-mail",
    privacyIntro: "Questo sito non installa cookie propri e non utilizza strumenti di misurazione dell’audience. Riceviamo soltanto i dati inviati tramite i moduli di contatto e partnership. Nella pagina Paulownia è incorporato un video YouTube; è l’unica eccezione e viene descritta di seguito.",
    collectedBody: "Possiamo ricevere nome, azienda e sito web, indirizzo completo, telefono, e-mail e messaggio. Questi dati non vengono salvati in un database: il modulo li invia direttamente via e-mail.",
    purposeBody: "Li utilizziamo soltanto per rispondervi e proseguire il contatto da voi avviato. Non vengono venduti, ceduti a fini commerciali o utilizzati per comunicazioni indesiderate. La base giuridica è il nostro legittimo interesse ai sensi dell’art. 6, par. 1, lett. f) GDPR.",
    accessBody: "I messaggi sono letti da Michel-Paul Correa e Gabriel Bonnat, dirigenti di Green Solutions. Resend invia le e-mail e Vercel ospita il sito. Entrambi i fornitori hanno sede negli Stati Uniti e i trasferimenti avvengono con le garanzie previste dal diritto europeo.",
    retentionBody: "I messaggi vengono conservati per tre anni dall’ultimo scambio e poi eliminati.",
    cookiesBody: "Il sito non utilizza tracciatori, strumenti statistici o pulsanti social. Google Fonts fornisce i caratteri e può ricevere il vostro IP durante il caricamento. La pagina Paulownia integra YouTube tramite youtube-nocookie.com: nessun cookie viene installato prima della riproduzione, ma l’IP può essere trasmesso a Google e la riproduzione può memorizzare dati sul dispositivo.",
    rightsBody: "Potete chiedere accesso, rettifica, cancellazione, limitazione, opposizione o portabilità. Scrivete a contact@evergreen-ecosorb.com; risponderemo entro un mese. Se necessario, potete rivolgervi all’autorità competente per la protezione dei dati, compresa la CNIL francese.",
    publisherBody: "GREEN SOLUTIONS GROUPE AIM SA, 46, route de la Condémine, 1475 Forel, Svizzera. Società anonima di diritto svizzero.", directorBody: "Michel-Paul Correa, in qualità di dirigente.", intellectualBody: "Tutti i contenuti del sito — testi, immagini, schemi, marchi e loghi — sono protetti dalla normativa sulla proprietà intellettuale. EVERGREEN®, ECOSORB®, ECOFERT®, NAPEMA®, Water Vital® e Paulownia ALTIFOLIA® sono marchi registrati. È vietata qualsiasi riproduzione totale o parziale senza previa autorizzazione scritta.", creditsBody: "Fotografie di Paulownia: Zeynel Cebeci e Codex, pubblicate su Wikimedia Commons con licenza CC BY-SA 4.0.", personalDataBody: "Il trattamento dei dati inviati tramite i moduli è descritto nella nostra Informativa sulla privacy.",
  },
  el: {
    privacyTitle: "Πολιτική απορρήτου", privacyDescription: "Προσωπικά δεδομένα που συλλέγονται, πρόσβαση, χρόνος διατήρησης και άσκηση δικαιωμάτων.", legalTitle: "Νομικές πληροφορίες", legalDescription: "Στοιχεία εκδότη, υπευθύνου δημοσίευσης, φιλοξενίας και πνευματικής ιδιοκτησίας.", back: "Επιστροφή στον ιστότοπο", privacyUpdated: "Τελευταία ενημέρωση: 20 Σεπτεμβρίου 2026", legalUpdated: "Τελευταία ενημέρωση: 16 Σεπτεμβρίου 2026",
    controller: "Υπεύθυνος επεξεργασίας", collected: "Δεδομένα που συλλέγουν οι φόρμες", purpose: "Γιατί τα επεξεργαζόμαστε", access: "Ποιοι έχουν πρόσβαση", retention: "Χρόνος διατήρησης", cookies: "Cookies και μέτρηση κοινού", rights: "Τα δικαιώματά σας", publisher: "Εκδότης ιστοτόπου", director: "Υπεύθυνος δημοσίευσης", host: "Φιλοξενία", intellectual: "Πνευματική ιδιοκτησία", credits: "Φωτογραφικές πιστώσεις", personalData: "Προσωπικά δεδομένα", companyId: "Αριθμός αναγνώρισης επιχείρησης (IDE)", toComplete: "προς συμπλήρωση", phone: "Τηλέφωνο", email: "E-mail",
    privacyIntro: "Ο ιστότοπος δεν τοποθετεί δικά του cookies και δεν χρησιμοποιεί εργαλεία μέτρησης κοινού. Λαμβάνουμε μόνο τα δεδομένα που υποβάλλετε μέσω των φορμών επικοινωνίας και συνεργασίας. Στη σελίδα Paulownia υπάρχει ενσωματωμένο βίντεο YouTube· αυτή είναι η μόνη εξαίρεση και εξηγείται παρακάτω.",
    collectedBody: "Μπορούμε να λάβουμε όνομα, εταιρεία και ιστότοπο, πλήρη διεύθυνση, τηλέφωνο, e-mail και μήνυμα. Τα στοιχεία δεν αποθηκεύονται σε βάση δεδομένων· η φόρμα τα στέλνει απευθείας με e-mail.",
    purposeBody: "Τα χρησιμοποιούμε μόνο για να απαντήσουμε και να συνεχίσουμε την επικοινωνία που ξεκινήσατε. Δεν πωλούνται, δεν διαβιβάζονται για εμπορικούς σκοπούς και δεν χρησιμοποιούνται για ανεπιθύμητη προώθηση. Νομική βάση είναι το έννομο συμφέρον μας βάσει του άρθρου 6 παρ. 1 στ΄ του GDPR.",
    accessBody: "Τα μηνύματα διαβάζονται από τους Michel-Paul Correa και Gabriel Bonnat, στελέχη της Green Solutions. Η Resend αποστέλλει τα e-mail και η Vercel φιλοξενεί τον ιστότοπο. Και οι δύο πάροχοι εδρεύουν στις ΗΠΑ και οι διαβιβάσεις γίνονται με τις απαιτούμενες ευρωπαϊκές εγγυήσεις.",
    retentionBody: "Τα μηνύματα διατηρούνται για τρία χρόνια από την τελευταία επικοινωνία και στη συνέχεια διαγράφονται.",
    cookiesBody: "Ο ιστότοπος δεν χρησιμοποιεί trackers, εργαλεία στατιστικών ή κουμπιά κοινωνικών δικτύων. Το Google Fonts παρέχει τις γραμματοσειρές και μπορεί να λαμβάνει την IP σας κατά τη φόρτωση. Η σελίδα Paulownia ενσωματώνει YouTube μέσω youtube-nocookie.com: δεν τοποθετείται cookie πριν από την αναπαραγωγή, αλλά η IP μπορεί να διαβιβαστεί στην Google και η αναπαραγωγή να αποθηκεύσει δεδομένα στη συσκευή.",
    rightsBody: "Μπορείτε να ζητήσετε πρόσβαση, διόρθωση, διαγραφή, περιορισμό, εναντίωση ή φορητότητα. Γράψτε στο contact@evergreen-ecosorb.com· θα απαντήσουμε εντός ενός μήνα. Εφόσον χρειάζεται, μπορείτε να προσφύγετε στην αρμόδια αρχή προστασίας δεδομένων, συμπεριλαμβανομένης της γαλλικής CNIL.",
    publisherBody: "GREEN SOLUTIONS GROUPE AIM SA, 46, route de la Condémine, 1475 Forel, Ελβετία. Ανώνυμη εταιρεία ελβετικού δικαίου.", directorBody: "Michel-Paul Correa, υπό την ιδιότητά του ως διευθυντής.", intellectualBody: "Όλο το περιεχόμενο του ιστοτόπου — κείμενα, εικόνες, διαγράμματα, εμπορικά σήματα και λογότυπα — προστατεύεται από τη νομοθεσία περί πνευματικής ιδιοκτησίας. EVERGREEN®, ECOSORB®, ECOFERT®, NAPEMA®, Water Vital® και Paulownia ALTIFOLIA® είναι καταχωρισμένα σήματα. Απαγορεύεται κάθε ολική ή μερική αναπαραγωγή χωρίς προηγούμενη γραπτή άδεια.", creditsBody: "Φωτογραφίες Paulownia: Zeynel Cebeci και Codex, δημοσιευμένες στο Wikimedia Commons με άδεια CC BY-SA 4.0.", personalDataBody: "Η επεξεργασία των δεδομένων που αποστέλλονται μέσω των φορμών περιγράφεται στην Πολιτική απορρήτου.",
  },
  tr: {
    privacyTitle: "Gizlilik Politikası", privacyDescription: "Toplanan kişisel veriler, erişim, saklama süresi ve haklarınızı kullanma yolları.", legalTitle: "Yasal Bilgiler", legalDescription: "Site yayıncısı, yayın sorumlusu, barındırma ve fikri mülkiyet bilgileri.", back: "Siteye dön", privacyUpdated: "Son güncelleme: 20 Eylül 2026", legalUpdated: "Son güncelleme: 16 Eylül 2026",
    controller: "Verilerden sorumlu taraf", collected: "Formların topladığı bilgiler", purpose: "Verileri neden işliyoruz", access: "Kimler erişebilir", retention: "Verileri ne kadar süre saklıyoruz", cookies: "Çerezler ve ziyaretçi ölçümü", rights: "Haklarınız", publisher: "Site yayıncısı", director: "Yayın sorumlusu", host: "Barındırma", intellectual: "Fikri mülkiyet", credits: "Fotoğraf kredileri", personalData: "Kişisel veriler", companyId: "Şirket kimlik numarası (IDE)", toComplete: "tamamlanacak", phone: "Telefon", email: "E-posta",
    privacyIntro: "Bu site kendi çerezlerini yerleştirmez ve ziyaretçi ölçüm araçları kullanmaz. Yalnızca iletişim ve iş ortaklığı formlarında sizin sunduğunuz verileri alırız. Paulownia sayfasında bir YouTube videosu bulunur; tek istisna budur ve aşağıda açıklanır.",
    collectedBody: "Adınız, şirketiniz ve web siteniz, tam adresiniz, telefon numaranız, e-posta adresiniz ve mesajınız alınabilir. Bu veriler bir veri tabanına kaydedilmez; form bunları doğrudan e-posta ile gönderir.",
    purposeBody: "Verileri yalnızca size yanıt vermek ve başlattığınız iletişimi sürdürmek için kullanırız. Satılmaz, ticari amaçla devredilmez ve istenmeyen pazarlamada kullanılmaz. Hukuki dayanak GDPR 6(1)(f) kapsamında meşru menfaatimizdir.",
    accessBody: "Mesajlar Green Solutions yöneticileri Michel-Paul Correa ve Gabriel Bonnat tarafından okunur. Resend e-postaları gönderir, Vercel siteyi barındırır. Her iki sağlayıcı da ABD’dedir ve aktarımlar Avrupa hukukunun gerektirdiği güvencelerle yapılır.",
    retentionBody: "Mesajlar son iletişimden itibaren üç yıl saklanır ve ardından silinir.",
    cookiesBody: "Site izleyici, istatistik aracı veya sosyal medya düğmesi kullanmaz. Google Fonts yazı tiplerini sağlar ve yükleme sırasında IP adresinizi alabilir. Paulownia sayfası YouTube’u youtube-nocookie.com üzerinden kullanır; video oynatılmadan önce çerez yerleştirilmez, ancak IP Google’a aktarılabilir ve oynatma cihazınıza veri kaydedebilir.",
    rightsBody: "Erişim, düzeltme, silme, kısıtlama, itiraz veya veri taşınabilirliği talep edebilirsiniz. contact@evergreen-ecosorb.com adresine yazın; bir ay içinde yanıt veririz. Gerekirse Fransa’daki CNIL dâhil yetkili veri koruma makamına başvurabilirsiniz.",
    publisherBody: "GREEN SOLUTIONS GROUPE AIM SA, 46, route de la Condémine, 1475 Forel, İsviçre. İsviçre hukukuna tabi anonim şirket.", directorBody: "Michel-Paul Correa, yönetici sıfatıyla.", intellectualBody: "Sitedeki tüm metinler, görseller, şemalar, markalar ve logolar fikri mülkiyet hukukuyla korunur. EVERGREEN®, ECOSORB®, ECOFERT®, NAPEMA®, Water Vital® ve Paulownia ALTIFOLIA® tescilli markalardır. Önceden yazılı izin olmadan tam veya kısmi çoğaltma yasaktır.", creditsBody: "Paulownia fotoğrafları: Zeynel Cebeci ve Codex, Wikimedia Commons’ta CC BY-SA 4.0 lisansı ile yayımlanmıştır.", personalDataBody: "Formlar aracılığıyla gönderilen verilerin işlenmesi Gizlilik Politikamızda açıklanmaktadır.",
  },
  pl: {
    privacyTitle: "Polityka prywatności", privacyDescription: "Gromadzone dane osobowe, dostęp, okres przechowywania i sposób korzystania z praw.", legalTitle: "Informacje prawne", legalDescription: "Wydawca strony, osoba odpowiedzialna za publikację, hosting i własność intelektualna.", back: "Powrót do strony", privacyUpdated: "Ostatnia aktualizacja: 20 września 2026", legalUpdated: "Ostatnia aktualizacja: 16 września 2026",
    controller: "Administrator danych", collected: "Dane zbierane przez formularze", purpose: "Dlaczego przetwarzamy dane", access: "Kto ma dostęp", retention: "Jak długo przechowujemy dane", cookies: "Pliki cookie i pomiar odbiorców", rights: "Twoje prawa", publisher: "Wydawca strony", director: "Osoba odpowiedzialna za publikację", host: "Hosting", intellectual: "Własność intelektualna", credits: "Autorzy zdjęć", personalData: "Dane osobowe", companyId: "Numer identyfikacyjny przedsiębiorstwa (IDE)", toComplete: "do uzupełnienia", phone: "Telefon", email: "E-mail",
    privacyIntro: "Ta strona nie ustawia własnych plików cookie i nie korzysta z narzędzi do pomiaru odbiorców. Otrzymujemy wyłącznie dane przesłane przez formularz kontaktowy i formularz współpracy. Na stronie Paulownia znajduje się film z YouTube; to jedyny wyjątek i jest opisany poniżej.",
    collectedBody: "Możemy otrzymać imię i nazwisko, nazwę firmy i stronę internetową, pełny adres, numer telefonu, adres e-mail i wiadomość. Dane nie są zapisywane w bazie; formularz wysyła je bezpośrednio pocztą elektroniczną.",
    purposeBody: "Używamy danych wyłącznie do odpowiedzi i kontynuowania kontaktu rozpoczętego przez użytkownika. Nie są sprzedawane, przekazywane komercyjnie ani wykorzystywane w niezamówionym marketingu. Podstawą prawną jest nasz prawnie uzasadniony interes zgodnie z art. 6 ust. 1 lit. f RODO.",
    accessBody: "Wiadomości czytają Michel-Paul Correa i Gabriel Bonnat, przedstawiciele Green Solutions. Resend wysyła e-maile, a Vercel hostuje stronę. Obaj dostawcy mają siedziby w USA, a transfery odbywają się z zabezpieczeniami wymaganymi przez prawo europejskie.",
    retentionBody: "Wiadomości przechowujemy przez trzy lata od ostatniego kontaktu, a następnie je usuwamy.",
    cookiesBody: "Strona nie używa trackerów, narzędzi statystycznych ani przycisków mediów społecznościowych. Google Fonts dostarcza fonty i może otrzymać adres IP podczas ładowania. Strona Paulownia osadza YouTube przez youtube-nocookie.com; przed odtworzeniem nie jest ustawiany plik cookie, ale IP może zostać przekazane Google, a odtwarzanie może zapisać dane na urządzeniu.",
    rightsBody: "Możesz żądać dostępu, sprostowania, usunięcia, ograniczenia, sprzeciwu lub przeniesienia danych. Napisz na contact@evergreen-ecosorb.com; odpowiemy w ciągu miesiąca. W razie potrzeby możesz złożyć skargę do właściwego organu ochrony danych, w tym francuskiej CNIL.",
    publisherBody: "GREEN SOLUTIONS GROUPE AIM SA, 46, route de la Condémine, 1475 Forel, Szwajcaria. Spółka akcyjna prawa szwajcarskiego.", directorBody: "Michel-Paul Correa, jako członek kierownictwa.", intellectualBody: "Cała zawartość strony — teksty, obrazy, schematy, znaki towarowe i logotypy — jest chroniona prawem własności intelektualnej. EVERGREEN®, ECOSORB®, ECOFERT®, NAPEMA®, Water Vital® i Paulownia ALTIFOLIA® są zarejestrowanymi znakami towarowymi. Pełne lub częściowe kopiowanie bez uprzedniej pisemnej zgody jest zabronione.", creditsBody: "Zdjęcia Paulownia: Zeynel Cebeci i Codex, opublikowane w Wikimedia Commons na licencji CC BY-SA 4.0.", personalDataBody: "Zasady przetwarzania danych przesyłanych przez formularze opisano w naszej Polityce prywatności.",
  },
  hr: {
    privacyTitle: "Politika privatnosti", privacyDescription: "Prikupljeni osobni podaci, pristup, rok čuvanja i način ostvarivanja vaših prava.", legalTitle: "Pravne informacije", legalDescription: "Izdavač stranice, odgovorna osoba, hosting i intelektualno vlasništvo.", back: "Povratak na stranicu", privacyUpdated: "Posljednje ažuriranje: 20. rujna 2026.", legalUpdated: "Posljednje ažuriranje: 16. rujna 2026.",
    controller: "Tko je odgovoran za podatke", collected: "Podaci koje obrasci prikupljaju", purpose: "Zašto obrađujemo podatke", access: "Tko ima pristup", retention: "Koliko dugo čuvamo podatke", cookies: "Kolačići i mjerenje publike", rights: "Vaša prava", publisher: "Izdavač stranice", director: "Odgovorna osoba za objavu", host: "Hosting", intellectual: "Intelektualno vlasništvo", credits: "Fotografske zasluge", personalData: "Osobni podaci", companyId: "Identifikacijski broj poduzeća (IDE)", toComplete: "treba dopuniti", phone: "Telefon", email: "E-pošta",
    privacyIntro: "Ova stranica ne postavlja vlastite kolačiće i ne koristi alate za mjerenje publike. Primamo samo podatke koje pošaljete putem obrasca za kontakt ili partnerstvo. Na stranici o paulovniji ugrađen je YouTube video; to je jedina iznimka i objašnjena je u nastavku.",
    collectedBody: "Možemo primiti ime i prezime, naziv tvrtke i web-stranicu, punu adresu, telefon, e-poštu i poruku. Podaci se ne spremaju u bazu; obrazac ih izravno šalje e-poštom.",
    purposeBody: "Podatke koristimo samo da bismo odgovorili i nastavili komunikaciju koju ste pokrenuli. Ne prodaju se, ne ustupaju komercijalno i ne koriste za neželjeni marketing. Pravna osnova naš je legitimni interes prema članku 6. stavku 1. točki (f) GDPR-a.",
    accessBody: "Poruke čitaju Michel-Paul Correa i Gabriel Bonnat, rukovoditelji Green Solutionsa. Resend šalje e-poruke, a Vercel hostira stranicu. Oba pružatelja imaju sjedište u SAD-u, a prijenosi se provode uz zaštitne mjere koje zahtijeva europsko pravo.",
    retentionBody: "Poruke čuvamo tri godine od posljednjeg kontakta, a zatim ih brišemo.",
    cookiesBody: "Stranica ne koristi alate za praćenje, statistiku ni gumbe društvenih mreža. Google Fonts poslužuje fontove i pri učitavanju može primiti IP adresu. Stranica o paulovniji ugrađuje YouTube putem youtube-nocookie.com; prije reprodukcije nema kolačića, ali IP se može prenijeti Googleu i reprodukcija može spremiti podatke na uređaj.",
    rightsBody: "Možete zatražiti pristup, ispravak, brisanje, ograničenje, prigovor ili prenosivost podataka. Pišite na contact@evergreen-ecosorb.com; odgovorit ćemo u roku od mjesec dana. Po potrebi se možete obratiti nadležnom tijelu za zaštitu podataka, uključujući francusku CNIL.",
    publisherBody: "GREEN SOLUTIONS GROUPE AIM SA, 46, route de la Condémine, 1475 Forel, Švicarska. Dioničko društvo prema švicarskom pravu.", directorBody: "Michel-Paul Correa, u svojstvu rukovoditelja.", intellectualBody: "Sav sadržaj stranice — tekstovi, slike, sheme, žigovi i logotipi — zaštićen je pravima intelektualnog vlasništva. EVERGREEN®, ECOSORB®, ECOFERT®, NAPEMA®, Water Vital® i Paulownia ALTIFOLIA® registrirani su žigovi. Zabranjeno je potpuno ili djelomično kopiranje bez prethodnog pisanog odobrenja.", creditsBody: "Fotografije paulovnije: Zeynel Cebeci i Codex, objavljene na Wikimedia Commonsu pod licencom CC BY-SA 4.0.", personalDataBody: "Obrada podataka poslanih putem obrazaca opisana je u našoj Politici privatnosti.",
  },
  ca: {
    privacyTitle: "Política de privacitat", privacyDescription: "Dades personals recollides, accés, termini de conservació i exercici dels vostres drets.", legalTitle: "Avís legal", legalDescription: "Editor del lloc, responsable de publicació, allotjament i propietat intel·lectual.", back: "Tornar al lloc", privacyUpdated: "Última actualització: 20 de setembre de 2026", legalUpdated: "Última actualització: 16 de setembre de 2026",
    controller: "Responsable del tractament", collected: "Dades que recullen els formularis", purpose: "Per què tractem aquestes dades", access: "Qui hi té accés", retention: "Quant de temps conservem les dades", cookies: "Cookies i mesura d’audiència", rights: "Els vostres drets", publisher: "Editor del lloc", director: "Responsable de publicació", host: "Allotjament", intellectual: "Propietat intel·lectual", credits: "Crèdits fotogràfics", personalData: "Dades personals", companyId: "Número d’identificació de l’empresa (IDE)", toComplete: "pendent de completar", phone: "Telèfon", email: "Correu electrònic",
    privacyIntro: "Aquest lloc no instal·la cookies pròpies ni utilitza eines de mesura d’audiència. Només rebem les dades que ens envieu mitjançant els formularis de contacte i col·laboració. A la pàgina dedicada a la Paulownia hi ha un vídeo de YouTube integrat; és l’única excepció i s’explica a continuació.",
    collectedBody: "Podem rebre el nom, l’empresa i el lloc web, l’adreça completa, el telèfon, el correu electrònic i el missatge. Les dades no s’emmagatzemen en cap base de dades; el formulari les envia directament per correu electrònic.",
    purposeBody: "Les utilitzem únicament per respondre-us i continuar el contacte que heu iniciat. No es venen, no es cedeixen amb finalitats comercials ni s’utilitzen per a màrqueting no sol·licitat. La base jurídica és el nostre interès legítim segons l’article 6.1.f del RGPD.",
    accessBody: "Els missatges són llegits per Michel-Paul Correa i Gabriel Bonnat, responsables de Green Solutions. Resend envia els correus i Vercel allotja el lloc. Tots dos proveïdors són als Estats Units i les transferències es fan amb les garanties exigides pel dret europeu.",
    retentionBody: "Conservem els missatges durant tres anys des de l’últim contacte i després els eliminem.",
    cookiesBody: "El lloc no utilitza rastrejadors, eines estadístiques ni botons de xarxes socials. Google Fonts proporciona les tipografies i pot rebre la vostra IP durant la càrrega. La pàgina Paulownia integra YouTube mitjançant youtube-nocookie.com; abans de reproduir el vídeo no s’instal·la cap cookie, però la IP pot ser transmesa a Google i la reproducció pot desar dades al dispositiu.",
    rightsBody: "Podeu sol·licitar accés, rectificació, supressió, limitació, oposició o portabilitat. Escriviu a contact@evergreen-ecosorb.com; respondrem en el termini d’un mes. Si cal, podeu presentar una reclamació davant l’autoritat competent de protecció de dades, inclosa la CNIL francesa.",
    publisherBody: "GREEN SOLUTIONS GROUPE AIM SA, 46, route de la Condémine, 1475 Forel, Suïssa. Societat anònima de dret suís.", directorBody: "Michel-Paul Correa, en qualitat de directiu.", intellectualBody: "Tots els continguts del lloc — textos, imatges, esquemes, marques i logotips — estan protegits per la normativa de propietat intel·lectual. EVERGREEN®, ECOSORB®, ECOFERT®, NAPEMA®, Water Vital® i Paulownia ALTIFOLIA® són marques registrades. Queda prohibida qualsevol reproducció total o parcial sense autorització escrita prèvia.", creditsBody: "Fotografies de Paulownia: Zeynel Cebeci i Codex, publicades a Wikimedia Commons amb llicència CC BY-SA 4.0.", personalDataBody: "El tractament de les dades enviades mitjançant els formularis es descriu a la nostra Política de privacitat.",
  },
};
