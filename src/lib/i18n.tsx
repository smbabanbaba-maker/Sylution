import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export const LANGS = [
  { code: "en", label: "English", short: "EN" },
  { code: "ha", label: "Hausa", short: "HA" },
  { code: "fr", label: "Français", short: "FR" },
  { code: "ar", label: "العربية", short: "AR" },
] as const;

export type LangCode = (typeof LANGS)[number]["code"];

type Dict = Record<string, string>;

const en: Dict = {
  "nav.home": "Home",
  "nav.about": "About",
  "nav.iot": "IoT",
  "nav.sysmart": "Sysmart Agro",
  "nav.platforms": "Products & Platforms",
  "nav.projects": "Projects",
  "nav.partners": "Partners",
  "nav.investors": "Investors",
  "nav.more": "More",
  "nav.ai": "AI",
  "nav.electronics": "Electronics",
  "nav.products": "Products",
  "nav.industries": "Industries",
  "nav.solutions": "Solutions",
  "nav.research": "R&D",
  "nav.training": "Academy",
  "nav.gallery": "Gallery",
  "nav.news": "News",
  "nav.marketplace": "Marketplace",
  "nav.loans": "Loans",
  "nav.careers": "Careers",
  "nav.contact": "Contact",
  "hero.eyebrow": "AgriTech powered by AI, IoT and Smart Technology · Kano, Nigeria",
  "hero.title": "AgriTech innovation powered by AI, IoT and smart technology",
  "hero.sub":
    "SYLUTION LTD applies artificial intelligence, Internet of Things, electronics, robotics, drone and solar technology to modern agriculture and real world problems in Nigeria.",
  "hero.cta1": "Explore IoT",
  "hero.cta2": "Our Technologies",
  "hero.cta3": "Contact Us",
  "cta.title": "Let's build the next deployment together",
  "cta.sub": "Investors, banks, governments, NGOs, universities and enterprises, talk to our team.",
  "cta.button": "Start a conversation",
  "footer.about":
    "An African technology company engineering Internet of Things devices, artificial intelligence, electronics, robotics and software for industry, energy, cities, healthcare and agriculture.",

  "footer.quick": "Quick Links",
  "footer.solutions": "Solutions",
  "footer.contact": "Contact",
  "footer.rights": "All rights reserved.",
};

const ha: Dict = {
  "nav.home": "Gida",
  "nav.about": "Game da Mu",
  "nav.iot": "IoT",
  "nav.sysmart": "Sysmart Agro",
  "nav.platforms": "Products & Platforms",
  "nav.projects": "Ayyuka",
  "nav.partners": "Abokan Hulɗa",
  "nav.investors": "Masu Zuba Jari",
  "nav.more": "Ƙari",
  "nav.ai": "AI",
  "nav.electronics": "Lantarki",
  "nav.products": "Kayayyaki",
  "nav.industries": "Masana'antu",
  "nav.solutions": "Hanyoyin Warware",
  "nav.research": "Bincike",
  "nav.training": "Makaranta",
  "nav.gallery": "Hotuna",
  "nav.news": "Labarai",
  "nav.marketplace": "Kasuwa",
  "nav.loans": "Rance",
  "nav.careers": "Aikin Yi",
  "nav.contact": "Tuntube Mu",
  "hero.eyebrow": "AgriTech ta hanyar AI, IoT da Fasahar Zamani · Kano, Najeriya",
  "hero.title": "Kirkire-kirkiren AgriTech ta hanyar AI, IoT da fasahar zamani",
  "hero.sub":
    "SYLUTION LTD tana amfani da basirar wucin gadi, IoT, na'urorin lantarki, robotics, jirage marasa matuki da fasahar hasken rana domin noman zamani da matsalolin gaskiya a Najeriya.",
  "hero.cta1": "Duba IoT",
  "hero.cta2": "Fasahohinmu",
  "hero.cta3": "Tuntube Mu",
  "cta.title": "Bari mu gina aiki na gaba tare",
  "cta.sub": "Masu zuba jari, bankuna, gwamnati, NGO, jami'o'i da kamfanoni, ku tuntube mu.",
  "cta.button": "Fara tattaunawa",
  "footer.about":
    "Kamfanin fasaha na Afirka da ke kera na'urorin IoT, basirar wucin gadi, na'urorin lantarki, robotics da manhajoji domin masana'antu, makamashi, birane, lafiya da noma.",

  "footer.quick": "Hanyoyin Sauri",
  "footer.solutions": "Ayyukanmu",
  "footer.contact": "Tuntube Mu",
  "footer.rights": "Duk haƙƙoƙi na kamfanin ne.",
};

const fr: Dict = {
  "nav.home": "Accueil",
  "nav.about": "À propos",
  "nav.iot": "IoT",
  "nav.sysmart": "Sysmart Agro",
  "nav.platforms": "Produits & Plateformes",
  "nav.projects": "Projets",
  "nav.partners": "Partenaires",
  "nav.investors": "Investisseurs",
  "nav.more": "Plus",
  "nav.ai": "IA",
  "nav.electronics": "Électronique",
  "nav.products": "Produits",
  "nav.industries": "Secteurs",
  "nav.solutions": "Solutions",
  "nav.research": "R&D",
  "nav.training": "Académie",
  "nav.gallery": "Galerie",
  "nav.news": "Actualités",
  "nav.marketplace": "Marché",
  "nav.loans": "Crédits",
  "nav.careers": "Carrières",
  "nav.contact": "Contact",
  "hero.eyebrow": "AgriTech portée par l'IA, l'IoT et les technologies intelligentes · Kano, Nigeria",
  "hero.title": "Innovation AgriTech portée par l'IA, l'IoT et les technologies intelligentes",
  "hero.sub":
    "SYLUTION LTD applique l'intelligence artificielle, l'IoT, l'électronique, la robotique, les drones et le solaire à l'agriculture moderne et aux problèmes réels au Nigeria.",
  "hero.cta1": "Découvrir l'IoT",
  "hero.cta2": "Nos technologies",
  "hero.cta3": "Nous contacter",
  "cta.title": "Construisons ensemble le prochain déploiement",
  "cta.sub": "Investisseurs, banques, gouvernements, ONG, universités et entreprises.",
  "cta.button": "Démarrer la conversation",
  "footer.about":
    "Une entreprise technologique africaine qui conçoit des objets connectés, de l'intelligence artificielle, de l'électronique, de la robotique et des logiciels pour l'industrie, l'énergie, les villes, la santé et l'agriculture.",

  "footer.quick": "Liens rapides",
  "footer.solutions": "Solutions",
  "footer.contact": "Contact",
  "footer.rights": "Tous droits réservés.",
};

const ar: Dict = {
  "nav.home": "الرئيسية",
  "nav.about": "من نحن",
  "nav.iot": "إنترنت الأشياء",
  "nav.sysmart": "سيسمارت أجرو",
  "nav.platforms": "المنتجات والمنصات",
  "nav.projects": "المشاريع",
  "nav.partners": "الشركاء",
  "nav.investors": "المستثمرون",
  "nav.more": "المزيد",
  "nav.ai": "الذكاء الاصطناعي",
  "nav.electronics": "الإلكترونيات",
  "nav.products": "المنتجات",
  "nav.industries": "القطاعات",
  "nav.solutions": "الحلول",
  "nav.research": "البحث والتطوير",
  "nav.training": "الأكاديمية",
  "nav.gallery": "المعرض",
  "nav.news": "الأخبار",
  "nav.marketplace": "السوق",
  "nav.loans": "التمويل",
  "nav.careers": "الوظائف",
  "nav.contact": "اتصل بنا",
  "hero.eyebrow": "تقنيات زراعية مدعومة بالذكاء الاصطناعي وإنترنت الأشياء · كانو، نيجيريا",
  "hero.title": "ابتكار زراعي مدعوم بالذكاء الاصطناعي وإنترنت الأشياء والتقنيات الذكية",
  "hero.sub":
    "تطبق شركة SYLUTION LTD الذكاء الاصطناعي وإنترنت الأشياء والإلكترونيات والروبوتات والطائرات المسيّرة والطاقة الشمسية على الزراعة الحديثة والمشكلات الواقعية في نيجيريا.",
  "hero.cta1": "استكشف إنترنت الأشياء",
  "hero.cta2": "تقنياتنا",
  "hero.cta3": "اتصل بنا",
  "cta.title": "لنبنِ المشروع القادم معًا",
  "cta.sub": "المستثمرون والبنوك والحكومات والمنظمات والجامعات والشركات.",
  "cta.button": "ابدأ المحادثة",
  "footer.about":
    "شركة تقنية أفريقية تهندس أجهزة إنترنت الأشياء والذكاء الاصطناعي والإلكترونيات والروبوتات والبرمجيات للصناعة والطاقة والمدن والصحة والزراعة.",

  "footer.quick": "روابط سريعة",
  "footer.solutions": "الحلول",
  "footer.contact": "اتصل بنا",
  "footer.rights": "جميع الحقوق محفوظة.",
};

const DICTS: Record<LangCode, Dict> = { en, ha, fr, ar };

/**
 * Phrase dictionary: English sentence -> translation.
 * Used by shared UI (page heroes, section headings, buttons) so switching the
 * language translates page content, not only the navigation.
 */
const PHRASES: Record<Exclude<LangCode, "en">, Dict> = {
  ha: {
    // Home
    "Who we are": "Su waye mu",
    "An innovation company built in Africa, engineered for the world":
      "Kamfanin kirkire-kirkire da aka gina a Afirka, don duniya baki daya",
    Capabilities: "Iyawarmu",
    "Six technology pillars, one integrated system": "Ginshikai shida na fasaha, tsari guda daya",
    "In the field": "A gona",
    "Real projects, real farms, real results": "Ayyuka na gaskiya, gonaki na gaskiya, sakamako na gaskiya",
    Newsroom: "Sashen Labarai",
    "Latest from SYLUTION": "Sabbin labarai daga SYLUTION",
    // About
    "About SYLUTION": "Game da SYLUTION",
    "Built in Kano. Engineered for the continent.": "An gina shi a Kano. An kera shi don nahiyar Afirka.",
    "SYLUTION is an innovation company working at the intersection of agriculture, engineering and artificial intelligence, creating technology that African farms can actually own, run and profit from.":
      "SYLUTION kamfani ne na kirkire-kirkire da ke hada noma, injiniyanci da basirar wucin gadi, yana kera fasahar da gonakin Afirka za su iya mallaka, sarrafawa da samun riba a kanta.",
    "Our story": "Tarihinmu",
    "It started with one irrigation block and a stubborn question":
      "Ya fara ne da filin ban ruwa guda daya da tambaya mai wuya",
    "Core values": "Ka'idojinmu",
    "Four commitments that govern every project": "Alkawura hudu da ke jagorantar kowane aiki",
    Milestones: "Nasarorinmu",
    "How we grew": "Yadda muka bunkasa",
    // Solutions
    Solutions: "Ayyukanmu",
    "Engineered capabilities that work together": "Fasahohi da aka kera don yin aiki tare",
    "Full catalogue": "Cikakken jerin",
    Related: "Masu alaka",
    "Explore related services": "Duba sauran ayyuka masu alaka",
    // Research
    "Innovation Centre": "Cibiyar Kirkire-Kirkire",
    "Where the next generation of African farm technology is built":
      "Inda ake gina fasahar noma ta gaba a Afirka",
    "Eight disciplines under one roof": "Fannoni takwas a rufi guda",
    Pipeline: "Matakan Aiki",
    "From question to deployed product in five gates": "Daga tambaya zuwa kayan aiki cikin matakai biyar",
    "Inside the centre": "Cikin cibiyar",
    Facilities: "Kayan aiki",
    // Training
    "SYLUTION Academy": "Makarantar SYLUTION",
    "Technology only creates value when people can run it":
      "Fasaha tana amfani ne kawai idan mutane sun iya sarrafa ta",
    Programmes: "Shirye-shirye",
    "Eleven programmes, one practical standard": "Shirye-shirye goma sha daya, matsayi guda na aiki",
    // Gallery
    Gallery: "Hotuna",
    "The work, as it actually looks": "Aikin, kamar yadda yake a zahiri",
    // News
    "What we are building, shipping and proving": "Abin da muke ginawa, kaddamarwa da tabbatarwa",
    "More stories": "Kara labarai",
    "Recent updates": "Sabbin bayanai",
    // Careers
    Careers: "Aikin Yi",
    "Build technology that feeds a continent": "Gina fasahar da take ciyar da nahiya",
    "Why SYLUTION": "Me ya sa SYLUTION",
    "What you get here": "Abin da za ka samu a nan",
    "Open roles": "Guraben aiki",
    "Positions currently accepting applications": "Mukaman da ake karbar takardu a yanzu",
    // Contact
    Contact: "Tuntube Mu",
    "Let's talk about your project": "Bari mu tattauna aikinka",
    "Reach us": "Yadda za a same mu",
    "Head office & Innovation Centre": "Babban ofis da Cibiyar Kirkire-Kirkire",
    // FAQ / legal / coming soon
    FAQ: "Tambayoyi",
    "Questions we are asked most": "Tambayoyin da ake yawan yi",
    Legal: "Doka",
    "Privacy Policy": "Manufar Sirri",
    "Terms of Service": "Sharuddan Amfani",
    Marketplace: "Kasuwa",
    "Loan Application": "Neman Rance",
    "What to expect": "Abin da za a jira",
    "Designed around trust, not just transactions": "An tsara shi kan amana, ba sayayya kadai ba",
    "How it will work": "Yadda zai yi aiki",
    "Four steps from application to installed equipment":
      "Matakai hudu daga nema zuwa girka kayan aiki",
  },
  fr: {
    "Who we are": "Qui sommes-nous",
    "An innovation company built in Africa, engineered for the world":
      "Une entreprise d'innovation née en Afrique, conçue pour le monde",
    Capabilities: "Compétences",
    "Six technology pillars, one integrated system": "Six piliers technologiques, un système intégré",
    "In the field": "Sur le terrain",
    "Real projects, real farms, real results": "De vrais projets, de vraies fermes, de vrais résultats",
    Newsroom: "Actualités",
    "Latest from SYLUTION": "Dernières nouvelles de SYLUTION",
    "About SYLUTION": "À propos de SYLUTION",
    "Built in Kano. Engineered for the continent.": "Conçu à Kano. Pensé pour le continent.",
    "SYLUTION is an innovation company working at the intersection of agriculture, engineering and artificial intelligence, creating technology that African farms can actually own, run and profit from.":
      "SYLUTION est une entreprise d'innovation à la croisée de l'agriculture, de l'ingénierie et de l'intelligence artificielle, créant des technologies que les fermes africaines peuvent réellement posséder, exploiter et rentabiliser.",
    "Our story": "Notre histoire",
    "It started with one irrigation block and a stubborn question":
      "Tout a commencé avec une parcelle irriguée et une question tenace",
    "Core values": "Nos valeurs",
    "Four commitments that govern every project": "Quatre engagements qui guident chaque projet",
    Milestones: "Étapes clés",
    "How we grew": "Notre croissance",
    Solutions: "Solutions",
    "Engineered capabilities that work together": "Des capacités conçues pour fonctionner ensemble",
    "Full catalogue": "Catalogue complet",
    Related: "Associés",
    "Explore related services": "Découvrir les services associés",
    "Innovation Centre": "Centre d'innovation",
    "Where the next generation of African farm technology is built":
      "Là où se construit la prochaine génération de technologies agricoles africaines",
    "Eight disciplines under one roof": "Huit disciplines sous un même toit",
    Pipeline: "Processus",
    "From question to deployed product in five gates": "De la question au produit déployé en cinq étapes",
    "Inside the centre": "À l'intérieur du centre",
    Facilities: "Installations",
    "SYLUTION Academy": "Académie SYLUTION",
    "Technology only creates value when people can run it":
      "La technologie ne crée de valeur que si les gens savent l'utiliser",
    Programmes: "Programmes",
    "Eleven programmes, one practical standard": "Onze programmes, un même standard pratique",
    Gallery: "Galerie",
    "The work, as it actually looks": "Le travail, tel qu'il est vraiment",
    "What we are building, shipping and proving": "Ce que nous construisons, livrons et prouvons",
    "More stories": "Plus d'articles",
    "Recent updates": "Mises à jour récentes",
    Careers: "Carrières",
    "Build technology that feeds a continent": "Construire la technologie qui nourrit un continent",
    "Why SYLUTION": "Pourquoi SYLUTION",
    "What you get here": "Ce que vous trouverez ici",
    "Open roles": "Postes ouverts",
    "Positions currently accepting applications": "Postes actuellement ouverts aux candidatures",
    Contact: "Contact",
    "Let's talk about your project": "Parlons de votre projet",
    "Reach us": "Nous joindre",
    "Head office & Innovation Centre": "Siège et Centre d'innovation",
    FAQ: "FAQ",
    "Questions we are asked most": "Les questions les plus fréquentes",
    Legal: "Mentions légales",
    "Privacy Policy": "Politique de confidentialité",
    "Terms of Service": "Conditions d'utilisation",
    Marketplace: "Marché",
    "Loan Application": "Demande de crédit",
    "What to expect": "À quoi s'attendre",
    "Designed around trust, not just transactions": "Conçu autour de la confiance, pas seulement des transactions",
    "How it will work": "Comment cela fonctionnera",
    "Four steps from application to installed equipment":
      "Quatre étapes, de la demande à l'équipement installé",
  },
  ar: {
    "Who we are": "من نحن",
    "An innovation company built in Africa, engineered for the world":
      "شركة ابتكار بُنيت في أفريقيا وهُندست للعالم",
    Capabilities: "قدراتنا",
    "Six technology pillars, one integrated system": "ستة أعمدة تقنية، نظام واحد متكامل",
    "In the field": "في الميدان",
    "Real projects, real farms, real results": "مشاريع حقيقية، مزارع حقيقية، نتائج حقيقية",
    Newsroom: "غرفة الأخبار",
    "Latest from SYLUTION": "أحدث أخبار SYLUTION",
    "About SYLUTION": "عن SYLUTION",
    "Built in Kano. Engineered for the continent.": "صُنعت في كانو. هُندست للقارة.",
    "SYLUTION is an innovation company working at the intersection of agriculture, engineering and artificial intelligence, creating technology that African farms can actually own, run and profit from.":
      "شركة SYLUTION شركة ابتكار تعمل عند تقاطع الزراعة والهندسة والذكاء الاصطناعي، وتصنع تقنيات تستطيع المزارع الأفريقية امتلاكها وتشغيلها والربح منها.",
    "Our story": "قصتنا",
    "It started with one irrigation block and a stubborn question": "بدأ الأمر بحقل ري واحد وسؤال عنيد",
    "Core values": "قيمنا الأساسية",
    "Four commitments that govern every project": "أربعة التزامات تحكم كل مشروع",
    Milestones: "محطات",
    "How we grew": "كيف نمونا",
    Solutions: "الحلول",
    "Engineered capabilities that work together": "قدرات مهندسة تعمل معًا",
    "Full catalogue": "الكتالوج الكامل",
    Related: "ذات صلة",
    "Explore related services": "استكشف الخدمات ذات الصلة",
    "Innovation Centre": "مركز الابتكار",
    "Where the next generation of African farm technology is built":
      "حيث يُبنى الجيل القادم من تقنيات الزراعة الأفريقية",
    "Eight disciplines under one roof": "ثمانية تخصصات تحت سقف واحد",
    Pipeline: "مسار العمل",
    "From question to deployed product in five gates": "من السؤال إلى منتج مُطبَّق عبر خمس مراحل",
    "Inside the centre": "داخل المركز",
    Facilities: "المرافق",
    "SYLUTION Academy": "أكاديمية SYLUTION",
    "Technology only creates value when people can run it":
      "التقنية لا تصنع قيمة إلا حين يستطيع الناس تشغيلها",
    Programmes: "البرامج",
    "Eleven programmes, one practical standard": "أحد عشر برنامجًا بمعيار عملي واحد",
    Gallery: "المعرض",
    "The work, as it actually looks": "العمل كما هو على أرض الواقع",
    "What we are building, shipping and proving": "ما نبنيه ونطلقه ونثبته",
    "More stories": "مزيد من الأخبار",
    "Recent updates": "آخر التحديثات",
    Careers: "الوظائف",
    "Build technology that feeds a continent": "ابنِ تقنية تُطعم قارة",
    "Why SYLUTION": "لماذا SYLUTION",
    "What you get here": "ما تحصل عليه هنا",
    "Open roles": "الوظائف المتاحة",
    "Positions currently accepting applications": "وظائف تستقبل الطلبات حاليًا",
    Contact: "اتصل بنا",
    "Let's talk about your project": "لنتحدث عن مشروعك",
    "Reach us": "تواصل معنا",
    "Head office & Innovation Centre": "المقر الرئيسي ومركز الابتكار",
    FAQ: "الأسئلة الشائعة",
    "Questions we are asked most": "أكثر الأسئلة تكرارًا",
    Legal: "قانوني",
    "Privacy Policy": "سياسة الخصوصية",
    "Terms of Service": "شروط الخدمة",
    Marketplace: "السوق",
    "Loan Application": "طلب تمويل",
    "What to expect": "ما الذي تتوقعه",
    "Designed around trust, not just transactions": "مصمم حول الثقة، لا المعاملات فقط",
    "How it will work": "كيف سيعمل",
    "Four steps from application to installed equipment": "أربع خطوات من الطلب إلى تركيب المعدات",
  },
};

/** Additional phrases introduced by the technology pages. */
const EXTRA: Record<Exclude<LangCode, "en">, Dict> = {
  ha: {
    "Internet of Things": "Internet na Abubuwa (IoT)",
    "The connected core of SYLUTION": "Zuciyar fasahar SYLUTION",
    Architecture: "Tsarin Fasaha",
    "How a SYLUTION IoT system works": "Yadda tsarin IoT na SYLUTION ke aiki",
    Applications: "Inda ake amfani da shi",
    "Where our connected systems are deployed": "Inda ake girka tsarinmu masu hade da juna",
    Capability: "Iyawa",
    "Six layers, engineered in house": "Matakai shida, mu muke kera su",
    "Artificial Intelligence": "Basirar Wucin Gadi",
    "The intelligence behind connected systems": "Basirar da ke bayan tsarin hade",
    Electronics: "Na'urorin Lantarki",
    "Boards designed, built and tested in Kano": "Allunan lantarki da aka kera aka gwada a Kano",
    Products: "Kayayyaki",
    "Connected devices, engineered and manufactured locally":
      "Na'urori masu hade da juna, an kera su a nan gida",
    Catalogue: "Jerin Kayayyaki",
    "Devices and systems": "Na'urori da tsarin aiki",
    Industries: "Masana'antu",
    "Technology is our business, industry is where it lands":
      "Fasaha ita ce aikinmu, masana'antu su ne inda take sauka",
    Sectors: "Bangarori",
    "Technology pillars": "Ginshikan fasaha",
    "Coming soon": "Nan ba da jimawa ba",
  },
  fr: {
    "Internet of Things": "Internet des objets",
    "The connected core of SYLUTION": "Le cœur connecté de SYLUTION",
    Architecture: "Architecture",
    "How a SYLUTION IoT system works": "Comment fonctionne un système IoT SYLUTION",
    Applications: "Applications",
    "Where our connected systems are deployed": "Où nos systèmes connectés sont déployés",
    Capability: "Capacités",
    "Six layers, engineered in house": "Six couches, conçues en interne",
    "Artificial Intelligence": "Intelligence artificielle",
    "The intelligence behind connected systems": "L'intelligence derrière les systèmes connectés",
    Electronics: "Électronique",
    "Boards designed, built and tested in Kano": "Cartes conçues, fabriquées et testées à Kano",
    Products: "Produits",
    "Connected devices, engineered and manufactured locally":
      "Des objets connectés conçus et fabriqués localement",
    Catalogue: "Catalogue",
    "Devices and systems": "Appareils et systèmes",
    Industries: "Secteurs",
    "Technology is our business, industry is where it lands":
      "La technologie est notre métier, l'industrie est son terrain",
    Sectors: "Secteurs",
    "Technology pillars": "Piliers technologiques",
    "Coming soon": "Bientôt disponible",
  },
  ar: {
    "Internet of Things": "إنترنت الأشياء",
    "The connected core of SYLUTION": "القلب المتصل لشركة SYLUTION",
    Architecture: "البنية التقنية",
    "How a SYLUTION IoT system works": "كيف يعمل نظام إنترنت الأشياء لدينا",
    Applications: "التطبيقات",
    "Where our connected systems are deployed": "أين تُنشر أنظمتنا المتصلة",
    Capability: "القدرات",
    "Six layers, engineered in house": "ست طبقات، مهندسة داخليًا",
    "Artificial Intelligence": "الذكاء الاصطناعي",
    "The intelligence behind connected systems": "الذكاء وراء الأنظمة المتصلة",
    Electronics: "الإلكترونيات",
    "Boards designed, built and tested in Kano": "لوحات مصممة ومصنعة ومختبرة في كانو",
    Products: "المنتجات",
    "Connected devices, engineered and manufactured locally": "أجهزة متصلة مصممة ومصنعة محليًا",
    Catalogue: "الكتالوج",
    "Devices and systems": "الأجهزة والأنظمة",
    Industries: "القطاعات",
    "Technology is our business, industry is where it lands":
      "التقنية عملنا، والقطاعات هي ميدان تطبيقها",
    Sectors: "القطاعات",
    "Technology pillars": "الركائز التقنية",
    "Coming soon": "قريبًا",
  },
};

const LangContext = createContext<{

  lang: LangCode;
  setLang: (l: LangCode) => void;
  t: (key: string) => string;
  tr: (text: string) => string;
}>({ lang: "en", setLang: () => {}, t: (k) => en[k] ?? k, tr: (s) => s });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<LangCode>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem("sylution-lang") as LangCode | null;
    if (stored && stored in DICTS) setLang(stored);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("sylution-lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const t = (key: string) => DICTS[lang][key] ?? en[key] ?? key;
  const tr = (text: string) =>
    lang === "en" ? text : PHRASES[lang][text] ?? EXTRA[lang][text] ?? text;


  return <LangContext.Provider value={{ lang, setLang, t, tr }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
