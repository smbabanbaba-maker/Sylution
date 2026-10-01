import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export const LANGS = [
  { code: "en", label: "English", short: "EN", flag: "gb" },
  { code: "ha", label: "Hausa", short: "HA", flag: "ng" },
  { code: "fr", label: "Français", short: "FR", flag: "fr" },
  { code: "ar", label: "العربية", short: "AR", marker: "ar" },
] as const;

export type LangCode = (typeof LANGS)[number]["code"];

type Dict = Record<string, string>;

const en: Dict = {
  "nav.home": "Home",
  "nav.about": "About",
  "nav.iot": "IoT",
  "nav.sysmart": "Sysmart Agro",
  "nav.platforms": "Our work",
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
  "nav.loans": "Farm finance concept",
  "nav.careers": "Careers",
  "nav.contact": "Contact",
  "language.choose": "Choose a language",
  "hero.eyebrow": "Engineering & hands-on training · Kano, Nigeria",
  "hero.paths.location": "Kano · Nigeria",
  "hero.titleLead": "We build practical technology.",
  "hero.titleAccent": "We teach people to use it.",
  "hero.sub":
    "We build custom AI, IoT, electronics, robotics and software systems, and teach these skills hands-on in Kano.",
  "hero.showcase.label": "SYLUTION work in action",
  "hero.showcase.carousel": "carousel",
  "hero.showcase.choose": "Choose an area to explore",
  "hero.showcase.pause": "Pause image rotation",
  "hero.showcase.play": "Resume image rotation",
  "hero.showcase.show": "Show",
  "hero.showcase.engineering.tab": "Engineering",
  "hero.showcase.engineering.kicker": "ENGINEERING · AI · IoT",
  "hero.showcase.engineering.title": "Technology built for real needs.",
  "hero.showcase.engineering.detail": "Custom AI, IoT, electronics, robotics and software systems.",
  "hero.showcase.engineering.action": "Explore engineering services",
  "hero.showcase.engineering.alt":
    "Electronics work on a circuit board at a Kano technology centre",
  "hero.showcase.sysmart.tab": "Sysmart Agro",
  "hero.showcase.sysmart.kicker": "PROJECT IN DEVELOPMENT",
  "hero.showcase.sysmart.title": "Smart farming, built with technology.",
  "hero.showcase.sysmart.detail":
    "Sysmart Agro is in development and is not available for online orders.",
  "hero.showcase.sysmart.action": "Explore the project",
  "hero.showcase.sysmart.alt": "Sysmart Agro smart-agriculture controller concept beside crop rows",
  "hero.showcase.academy.tab": "Academy training",
  "hero.showcase.academy.kicker": "SYLUTION ACADEMY",
  "hero.showcase.academy.title": "Learn technology by doing.",
  "hero.showcase.academy.detail":
    "Hands-on learning in electronics, IoT and modern agriculture. Ask about dates.",
  "hero.showcase.academy.action": "Ask about training dates",
  "hero.showcase.academy.alt":
    "A practical discussion about crops during agriculture training in Kano",
  "hero.paths.heading": "Choose where to start",
  "hero.paths.overline": "What SYLUTION does",
  "hero.paths.services.label": "Engineering service",
  "hero.paths.services.title": "Custom systems",
  "hero.paths.services.detail": "AI, IoT, electronics, robotics and software for real needs.",
  "hero.paths.products.label": "Project in development",
  "hero.paths.products.title": "Products & projects",
  "hero.paths.products.detail": "Sysmart Agro is in development—not yet available to order online.",
  "hero.paths.training.label": "SYLUTION Academy",
  "hero.paths.training.title": "Practical training",
  "hero.paths.training.detail": "Hands-on AI, IoT, electronics and smart farming. Ask about dates.",
  "home.opportunities.eyebrow": "Work with SYLUTION",
  "home.opportunities.title": "Build practical technology with us.",
  "home.opportunities.subtitle":
    "Explore engineering partnerships or review SYLUTION’s current stage and investor information.",
  "home.opportunities.partners.title": "For partners",
  "home.opportunities.partners.detail":
    "Collaboration paths for universities, industry, government, development organisations and research teams.",
  "home.opportunities.partners.action": "Explore partnerships",
  "home.opportunities.investors.title": "For investors",
  "home.opportunities.investors.detail":
    "See the company profile, Sysmart Agro’s current stage and stated priorities for capital.",
  "home.opportunities.investors.action": "View investor information",
  "cta.title": "Discuss a service, project or training need",
  "cta.sub":
    "Send an enquiry and we will confirm scope and availability. This is not an order, course booking or loan application.",
  "cta.button": "Send an enquiry",
  "footer.about":
    "A technology engineering and training company based in Kano, Nigeria. We build AI, IoT and electronics systems, with smart agriculture as our main focus.",

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
  "nav.platforms": "Ayyukanmu",
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
  "nav.loans": "Tunani kan kuɗin noma",
  "nav.careers": "Aikin Yi",
  "nav.contact": "Tuntube Mu",
  "language.choose": "Zaɓi yare",
  "hero.eyebrow": "Injiniyanci da horo na aiki da hannu · Kano, Najeriya",
  "hero.paths.location": "Kano · Najeriya",
  "hero.titleLead": "Muna gina fasahar aiki.",
  "hero.titleAccent": "Muna koya wa mutane amfani da ita.",
  "hero.sub":
    "Muna gina tsarin AI, IoT, lantarki, robotics da manhajoji; muna kuma koyar da amfani da su ta aiki da hannu a Kano.",
  "hero.showcase.label": "Ayyukan SYLUTION a aikace",
  "hero.showcase.carousel": "jerin hotuna mai canzawa",
  "hero.showcase.choose": "Zaɓi fannin da kake son dubawa",
  "hero.showcase.pause": "Dakatar da sauya hotuna",
  "hero.showcase.play": "Ci gaba da sauya hotuna",
  "hero.showcase.show": "Nuna",
  "hero.showcase.engineering.tab": "Injiniyanci",
  "hero.showcase.engineering.kicker": "INJINIYANCI · AI · IoT",
  "hero.showcase.engineering.title": "Fasahar da aka ƙera don ainihin buƙatu.",
  "hero.showcase.engineering.detail":
    "Tsarukan AI, IoT, lantarki, robotics da manhajoji bisa buƙata.",
  "hero.showcase.engineering.action": "Duba sabis na injiniyanci",
  "hero.showcase.engineering.alt": "Aikin lantarki a kan allon da'ira a wata cibiyar fasaha a Kano",
  "hero.showcase.sysmart.tab": "Sysmart Agro",
  "hero.showcase.sysmart.kicker": "AIKIN DA KE CI GABA",
  "hero.showcase.sysmart.title": "Fasahar noma mai wayo.",
  "hero.showcase.sysmart.detail":
    "Ana ci gaba da gina Sysmart Agro; ba a shirya sayar da shi ta yanar gizo ba.",
  "hero.showcase.sysmart.action": "Duba aikin Sysmart Agro",
  "hero.showcase.sysmart.alt": "Misalin na'urar Sysmart Agro ta noma mai wayo kusa da amfanin gona",
  "hero.showcase.academy.tab": "Horo",
  "hero.showcase.academy.kicker": "MAKARANTAR SYLUTION",
  "hero.showcase.academy.title": "Koyo ta hanyar aikatawa.",
  "hero.showcase.academy.detail":
    "Horo kan lantarki, IoT da noman zamani; tambaye mu ranakun da ake da su.",
  "hero.showcase.academy.action": "Tambaya kan ranakun horo",
  "hero.showcase.academy.alt": "Tattaunawa ta aiki game da amfanin gona yayin horon noma a Kano",
  "hero.paths.heading": "Zaɓi inda za ka fara",
  "hero.paths.overline": "Abin da SYLUTION ke yi",
  "hero.paths.services.label": "Sabis na injiniyanci",
  "hero.paths.services.title": "Tsarukan da aka ƙera bisa buƙata",
  "hero.paths.services.detail": "AI, IoT, lantarki, robotics da manhajoji don ainihin buƙatu.",
  "hero.paths.products.label": "Aikin da ke ci gaba",
  "hero.paths.products.title": "Kayayyaki da ayyuka",
  "hero.paths.products.detail":
    "Sysmart Agro yana kan gini; ba a shirya sayar da shi ta yanar gizo ba.",
  "hero.paths.training.label": "Makarantar SYLUTION",
  "hero.paths.training.title": "Horo na aiki da hannu",
  "hero.paths.training.detail": "AI, IoT, lantarki da noman zamani. A tambaye mu ranakun horo.",
  "home.opportunities.eyebrow": "Yi aiki tare da SYLUTION",
  "home.opportunities.title": "Mu gina fasahar aiki tare.",
  "home.opportunities.subtitle":
    "Duba hanyoyin haɗin gwiwar injiniyanci, ko karanta matsayin SYLUTION da bayanan masu sha'awar saka jari.",
  "home.opportunities.partners.title": "Ga abokan haɗin gwiwa",
  "home.opportunities.partners.detail":
    "Hanyoyin haɗin gwiwa ga jami'o'i, masana'antu, gwamnati, ƙungiyoyin ci gaba da masu bincike.",
  "home.opportunities.partners.action": "Duba hanyoyin haɗin gwiwa",
  "home.opportunities.investors.title": "Ga masu zuba jari",
  "home.opportunities.investors.detail":
    "Duba bayanin kamfani, matsayin Sysmart Agro na yanzu, da abin da kamfani ya bayyana cewa zai yi da jari.",
  "home.opportunities.investors.action": "Duba bayanan masu zuba jari",
  "cta.title": "Tattauna bukatar sabis, aiki ko horo",
  "cta.sub":
    "Aika tambaya domin mu tabbatar da abin da ake bukata da samuwa. Wannan ba oda ba ce, ba rajistar horo ko neman rance ba.",
  "cta.button": "Aika tambaya",
  "footer.about":
    "Kamfanin injiniyan fasaha da horo ne a Kano, Najeriya. Muna gina tsarin AI, IoT da lantarki, tare da mayar da hankali kan noma na zamani.",

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
  "nav.platforms": "Nos activités",
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
  "nav.loans": "Projet de financement agricole",
  "nav.careers": "Carrières",
  "nav.contact": "Contact",
  "language.choose": "Choisir une langue",
  "hero.eyebrow": "Ingénierie et formation pratique · Kano, Nigeria",
  "hero.paths.location": "Kano · Nigeria",
  "hero.titleLead": "Nous créons une technologie utile.",
  "hero.titleAccent": "Nous apprenons à l'utiliser.",
  "hero.sub":
    "Nous créons des systèmes d’IA, d’IoT, d’électronique, de robotique et des logiciels, et nous enseignons ces compétences à Kano.",
  "hero.showcase.label": "Les activités de SYLUTION",
  "hero.showcase.carousel": "carrousel",
  "hero.showcase.choose": "Choisir un domaine à découvrir",
  "hero.showcase.pause": "Mettre en pause le défilement",
  "hero.showcase.play": "Reprendre le défilement",
  "hero.showcase.show": "Afficher",
  "hero.showcase.engineering.tab": "Ingénierie",
  "hero.showcase.engineering.kicker": "INGÉNIERIE · IA · IoT",
  "hero.showcase.engineering.title": "Une technologie conçue pour des besoins réels.",
  "hero.showcase.engineering.detail":
    "Systèmes sur mesure en IA, IoT, électronique, robotique et logiciels.",
  "hero.showcase.engineering.action": "Découvrir nos services",
  "hero.showcase.engineering.alt":
    "Travail électronique sur une carte dans un centre technologique à Kano",
  "hero.showcase.sysmart.tab": "Sysmart Agro",
  "hero.showcase.sysmart.kicker": "PROJET EN DÉVELOPPEMENT",
  "hero.showcase.sysmart.title": "L'agriculture intelligente, par la technologie.",
  "hero.showcase.sysmart.detail":
    "Sysmart Agro est en développement et n'est pas encore disponible à la commande en ligne.",
  "hero.showcase.sysmart.action": "Découvrir le projet",
  "hero.showcase.sysmart.alt":
    "Concept du contrôleur Sysmart Agro pour l'agriculture intelligente, dans un champ",
  "hero.showcase.academy.tab": "Formation",
  "hero.showcase.academy.kicker": "SYLUTION ACADEMY",
  "hero.showcase.academy.title": "Apprendre la technologie par la pratique.",
  "hero.showcase.academy.detail":
    "Formation en électronique, IoT et agriculture moderne. Demandez les dates.",
  "hero.showcase.academy.action": "Demander les dates",
  "hero.showcase.academy.alt":
    "Échange pratique autour des cultures lors d'une formation agricole à Kano",
  "hero.paths.heading": "Choisissez par où commencer",
  "hero.paths.overline": "Les activités de SYLUTION",
  "hero.paths.services.label": "Service d'ingénierie",
  "hero.paths.services.title": "Systèmes sur mesure",
  "hero.paths.services.detail":
    "IA, IoT, électronique, robotique et logiciels pour des besoins concrets.",
  "hero.paths.products.label": "Projet en développement",
  "hero.paths.products.title": "Produits et projets",
  "hero.paths.products.detail":
    "Sysmart Agro est en développement et n’est pas encore disponible à la commande.",
  "hero.paths.training.label": "SYLUTION Academy",
  "hero.paths.training.title": "Formation pratique",
  "hero.paths.training.detail":
    "IA, IoT, électronique et agriculture intelligente. Demandez les dates.",
  "home.opportunities.eyebrow": "Travailler avec SYLUTION",
  "home.opportunities.title": "Construisons ensemble une technologie utile.",
  "home.opportunities.subtitle":
    "Découvrez nos partenariats d’ingénierie ou consultez les informations actuelles de SYLUTION pour les investisseurs.",
  "home.opportunities.partners.title": "Pour les partenaires",
  "home.opportunities.partners.detail":
    "Des pistes de collaboration pour les universités, l’industrie, les pouvoirs publics, les organismes de développement et la recherche.",
  "home.opportunities.partners.action": "Découvrir les partenariats",
  "home.opportunities.investors.title": "Pour les investisseurs",
  "home.opportunities.investors.detail":
    "Consultez le profil de l’entreprise, l’état actuel de Sysmart Agro et les priorités de financement annoncées.",
  "home.opportunities.investors.action": "Voir les informations investisseurs",
  "cta.title": "Parlons de votre besoin en service, projet ou formation",
  "cta.sub":
    "Envoyez une demande pour confirmer le périmètre et les disponibilités. Ce n'est ni une commande, ni une inscription, ni une demande de prêt.",
  "cta.button": "Envoyer une demande",
  "footer.about":
    "Entreprise d'ingénierie technologique et de formation basée à Kano, au Nigeria. Nous créons des systèmes d'IA, d'IoT et d'électronique, principalement pour l'agriculture intelligente.",

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
  "nav.platforms": "أعمالنا",
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
  "nav.loans": "مبادرة تمويل زراعي",
  "nav.careers": "الوظائف",
  "nav.contact": "اتصل بنا",
  "language.choose": "اختر اللغة",
  "hero.eyebrow": "الهندسة والتدريب العملي · كانو، نيجيريا",
  "hero.paths.location": "كانو · نيجيريا",
  "hero.titleLead": "نبني تقنيات عملية.",
  "hero.titleAccent": "ونعلّم الناس كيفية استخدامها.",
  "hero.sub":
    "نبني أنظمة الذكاء الاصطناعي وإنترنت الأشياء والإلكترونيات والروبوتات والبرمجيات، وندرب على استخدامها عملياً في كانو.",
  "hero.showcase.label": "أنشطة SYLUTION",
  "hero.showcase.carousel": "عرض متتابع للصور",
  "hero.showcase.choose": "اختر مجالًا للتعرّف عليه",
  "hero.showcase.pause": "إيقاف تبديل الصور",
  "hero.showcase.play": "استئناف تبديل الصور",
  "hero.showcase.show": "عرض",
  "hero.showcase.engineering.tab": "الهندسة",
  "hero.showcase.engineering.kicker": "الهندسة · الذكاء الاصطناعي · إنترنت الأشياء",
  "hero.showcase.engineering.title": "تقنيات عملية لتلبية احتياجات حقيقية.",
  "hero.showcase.engineering.detail":
    "أنظمة مخصصة للذكاء الاصطناعي وإنترنت الأشياء والإلكترونيات والروبوتات والبرمجيات.",
  "hero.showcase.engineering.action": "استكشف الخدمات الهندسية",
  "hero.showcase.engineering.alt": "عمل إلكتروني على لوحة في مركز تقني بمدينة كانو",
  "hero.showcase.sysmart.tab": "Sysmart Agro",
  "hero.showcase.sysmart.kicker": "مشروع قيد التطوير",
  "hero.showcase.sysmart.title": "تقنيات للزراعة الذكية.",
  "hero.showcase.sysmart.detail":
    "مشروع Sysmart Agro قيد التطوير، ولم يصبح متاحًا للطلب عبر الإنترنت.",
  "hero.showcase.sysmart.action": "تعرّف على المشروع",
  "hero.showcase.sysmart.alt": "تصور لوحدة تحكم Sysmart Agro للزراعة الذكية بجوار المزروعات",
  "hero.showcase.academy.tab": "التدريب العملي",
  "hero.showcase.academy.kicker": "أكاديمية SYLUTION",
  "hero.showcase.academy.title": "تعلّم التقنية بالممارسة.",
  "hero.showcase.academy.detail":
    "تدريب عملي على الإلكترونيات وإنترنت الأشياء والزراعة الحديثة. اسأل عن المواعيد.",
  "hero.showcase.academy.action": "اسأل عن مواعيد التدريب",
  "hero.showcase.academy.alt": "نقاش عملي حول المحاصيل خلال نشاط تدريب زراعي في كانو",
  "hero.paths.heading": "اختر من أين تبدأ",
  "hero.paths.overline": "ما تقدمه SYLUTION",
  "hero.paths.services.label": "خدمات هندسية",
  "hero.paths.services.title": "أنظمة حسب الحاجة",
  "hero.paths.services.detail":
    "أنظمة الذكاء الاصطناعي وإنترنت الأشياء والإلكترونيات والروبوتات حسب الحاجة.",
  "hero.paths.products.label": "مشروع قيد التطوير",
  "hero.paths.products.title": "المنتجات والمشاريع",
  "hero.paths.products.detail":
    "مشروع Sysmart Agro قيد التطوير، ولم يصبح متاحاً للشراء عبر الإنترنت بعد.",
  "hero.paths.training.label": "أكاديمية SYLUTION",
  "hero.paths.training.title": "تدريب عملي",
  "hero.paths.training.detail":
    "الذكاء الاصطناعي وإنترنت الأشياء والإلكترونيات والزراعة الذكية. اسأل عن المواعيد.",
  "home.opportunities.eyebrow": "تعاون مع SYLUTION",
  "home.opportunities.title": "لنبنِ معًا تقنيات عملية.",
  "home.opportunities.subtitle":
    "اكتشف فرص التعاون الهندسي أو اطّلع على المرحلة الحالية ومعلومات المستثمرين لدى SYLUTION.",
  "home.opportunities.partners.title": "للشركاء",
  "home.opportunities.partners.detail":
    "مسارات تعاون للجامعات والصناعة والجهات الحكومية ومؤسسات التنمية وفرق البحث.",
  "home.opportunities.partners.action": "استكشف فرص الشراكة",
  "home.opportunities.investors.title": "للمستثمرين",
  "home.opportunities.investors.detail":
    "اطّلع على ملف الشركة والمرحلة الحالية لمشروع Sysmart Agro وأولويات استخدام رأس المال المعلنة.",
  "home.opportunities.investors.action": "عرض معلومات المستثمرين",
  "cta.title": "تحدث معنا عن خدمة أو مشروع أو تدريب",
  "cta.sub":
    "أرسل استفسارًا لنتأكد من النطاق والتوفر. هذا ليس طلب شراء أو تسجيلًا في دورة أو طلب قرض.",
  "cta.button": "أرسل استفسارًا",
  "footer.about":
    "شركة للهندسة التقنية والتدريب مقرها كانو، نيجيريا. نبني أنظمة الذكاء الاصطناعي وإنترنت الأشياء والإلكترونيات، مع تركيز رئيسي على الزراعة الذكية.",

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
    "Real projects, real farms, real results":
      "Ayyuka na gaskiya, gonaki na gaskiya, sakamako na gaskiya",
    Newsroom: "Sashen Labarai",
    "Latest from SYLUTION": "Sabbin labarai daga SYLUTION",
    // About
    "About SYLUTION": "Game da SYLUTION",
    "Built in Kano. Engineered for the continent.":
      "An gina shi a Kano. An kera shi don nahiyar Afirka.",
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
    "From question to deployed product in five gates":
      "Daga tambaya zuwa kayan aiki cikin matakai biyar",
    "Inside the centre": "Cikin cibiyar",
    Facilities: "Kayan aiki",
    // Training
    "SYLUTION Academy": "Makarantar SYLUTION",
    "Technology only creates value when people can run it":
      "Fasaha tana amfani ne kawai idan mutane sun iya sarrafa ta",
    "Practical training in AI, IoT and smart agriculture":
      "Koyon AI, IoT da noma na zamani ta hanyar aiki da hannu",
    "Learn AI tools, IoT sensors, ESP32/Arduino, electronics, smart irrigation, drones, robotics and modern agriculture through guided, hands-on projects. For youth, women, farmers, students, technicians and institutions. Taught in English or Hausa in Kano.":
      "Koyi kayan aikin AI, na'urorin IoT, ESP32/Arduino, lantarki, ban ruwa mai sarrafa kansa, drones, robotics da noma na zamani ta ayyukan gwaji tare da kulawa. Horon ya dace da matasa, mata, manoma, ɗalibai, ƙwararru da cibiyoyi; ana koyar da shi da Hausa ko Turanci a Kano.",
    Programmes: "Shirye-shirye",
    "15 practical programmes, clearly priced": "Shirye-shiryen fasaha 15 masu bayyana farashinsu",
    "Choose a programme to see its tuition, modules, duration and practical work. Confirm cohort dates and inclusions with the Academy.":
      "Zaɓi shiri don duba kuɗin horo, darussa, tsawon lokaci da aikin gwaji. Tabbatar da ranakun rukuni da abin da kuɗin ya ƙunsa tare da makarantar.",
    "Browse all 15 programmes": "Duba duk shirye-shirye 15",
    "Ask about training": "Tambayi game da horo",
    "Ask about training or request a cohort": "Tambayi game da horo ko neman horon rukuni",
    "This form sends an enquiry, not an instant enrolment. Select ‘Training academy’ and tell us your topic, audience and group size; the team will confirm availability and next steps within two working days.":
      "Wannan fom ɗin tambaya ne, ba shiga horo kai tsaye ba. Zaɓi ‘Training academy’ kuma ka bayyana fannin da kake so, waɗanda za su halarta da girman rukuni; ƙungiyarmu za ta tabbatar da samuwa da mataki na gaba cikin kwanakin aiki biyu.",
    "Send a training enquiry": "Aika tambayar horo",
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
    "Six technology pillars, one integrated system":
      "Six piliers technologiques, un système intégré",
    "In the field": "Sur le terrain",
    "Real projects, real farms, real results":
      "De vrais projets, de vraies fermes, de vrais résultats",
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
    "From question to deployed product in five gates":
      "De la question au produit déployé en cinq étapes",
    "Inside the centre": "À l'intérieur du centre",
    Facilities: "Installations",
    "SYLUTION Academy": "Académie SYLUTION",
    "Technology only creates value when people can run it":
      "La technologie ne crée de valeur que si les gens savent l'utiliser",
    "Practical training in AI, IoT and smart agriculture":
      "Formation pratique en IA, IoT et agriculture intelligente",
    "Learn AI tools, IoT sensors, ESP32/Arduino, electronics, smart irrigation, drones, robotics and modern agriculture through guided, hands-on projects. For youth, women, farmers, students, technicians and institutions. Taught in English or Hausa in Kano.":
      "Apprenez les outils d'IA, les capteurs IoT, ESP32/Arduino, l'électronique, l'irrigation intelligente, les drones, la robotique et l'agriculture moderne grâce à des projets pratiques encadrés. Pour les jeunes, les femmes, les agriculteurs, les étudiants, les techniciens et les institutions. Formation en anglais ou en haoussa à Kano.",
    Programmes: "Programmes",
    "15 practical programmes, clearly priced": "15 programmes pratiques, avec des tarifs clairs",
    "Choose a programme to see its tuition, modules, duration and practical work. Confirm cohort dates and inclusions with the Academy.":
      "Choisissez un programme pour consulter les frais, les modules, la durée et les travaux pratiques. Confirmez les dates de session et les inclusions auprès de l'Académie.",
    "Browse all 15 programmes": "Voir les 15 programmes",
    "Ask about training": "Se renseigner sur la formation",
    "Ask about training or request a cohort": "Se renseigner ou demander une session de groupe",
    "This form sends an enquiry, not an instant enrolment. Select ‘Training academy’ and tell us your topic, audience and group size; the team will confirm availability and next steps within two working days.":
      "Ce formulaire envoie une demande, il ne confirme pas une inscription immédiate. Choisissez « Training academy » et indiquez le sujet, le public et la taille du groupe ; notre équipe confirmera les disponibilités et la suite sous deux jours ouvrés.",
    "Send a training enquiry": "Envoyer une demande de formation",
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
    "Designed around trust, not just transactions":
      "Conçu autour de la confiance, pas seulement des transactions",
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
    "It started with one irrigation block and a stubborn question":
      "بدأ الأمر بحقل ري واحد وسؤال عنيد",
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
    "Practical training in AI, IoT and smart agriculture":
      "تدريب عملي في الذكاء الاصطناعي وإنترنت الأشياء والزراعة الذكية",
    "Learn AI tools, IoT sensors, ESP32/Arduino, electronics, smart irrigation, drones, robotics and modern agriculture through guided, hands-on projects. For youth, women, farmers, students, technicians and institutions. Taught in English or Hausa in Kano.":
      "تعلّم أدوات الذكاء الاصطناعي، وحساسات إنترنت الأشياء، وESP32/Arduino، والإلكترونيات، والري الذكي، والطائرات المسيّرة، والروبوتات والزراعة الحديثة من خلال مشاريع عملية بإشراف. التدريب موجّه للشباب والنساء والمزارعين والطلاب والفنيين والمؤسسات، ويُقدّم بالإنجليزية أو الهوسا في كانو.",
    Programmes: "البرامج",
    "15 practical programmes, clearly priced": "15 برنامجًا عمليًا بأسعار واضحة",
    "Choose a programme to see its tuition, modules, duration and practical work. Confirm cohort dates and inclusions with the Academy.":
      "اختر برنامجًا للاطلاع على الرسوم والوحدات والمدة والتطبيق العملي. أكّد مواعيد المجموعة وما تشمله الرسوم مع الأكاديمية.",
    "Browse all 15 programmes": "استعرض البرامج الخمسة عشر",
    "Ask about training": "استفسر عن التدريب",
    "Ask about training or request a cohort": "استفسر عن التدريب أو اطلب مجموعة تدريبية",
    "This form sends an enquiry, not an instant enrolment. Select ‘Training academy’ and tell us your topic, audience and group size; the team will confirm availability and next steps within two working days.":
      "يرسل هذا النموذج استفسارًا ولا يؤكد التسجيل فورًا. اختر «Training academy» وأخبرنا بالموضوع والجمهور وحجم المجموعة؛ سيؤكد الفريق التوفر والخطوات التالية خلال يومي عمل.",
    "Send a training enquiry": "أرسل استفسارًا عن التدريب",
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
    "Practical technology training, with clear prices and pathways":
      "Koyon fasaha ta aikace-aikace, tare da bayyanannun farashi da matakai",
    "How to request a place": "Yadda ake neman gurbi",
    "programmes to explore": "shirye-shiryen da za a bincika",
    "typical course duration": "tsawon lokacin kwas da aka saba",
    "published tuition; institutional quote by scope":
      "farashin horo; cibiyoyi su nemi ƙididdiga bisa buƙata",
    "Compare the topic, level, duration and fee. Open any programme for its full overview, modules, practical work and learning outcomes.":
      "Kwatanta fanni, mataki, lokaci da kuɗi. Buɗe kowane shiri don cikakken bayani, darussa, aikin gwaji da sakamakon koyo.",
    "Course catalogue": "Jerin kwasa-kwasai",
    "Search programmes": "Nemo shirye-shirye",
    "Search by course, skill or technology": "Nema da sunan kwas, ƙwarewa ko fasaha",
    "Filter programmes by subject": "Tace shirye-shirye bisa fanni",
    "All programmes": "Dukkan shirye-shirye",
    "Engineering & AI": "Injiniyanci da AI",
    "Smart agriculture": "Noma mai amfani da fasaha",
    Professional: "Na ƙwararru",
    "programmes shown": "shirye-shirye da aka nuna",
    "View full programme": "Duba cikakken shiri",
    Tuition: "Kuɗin horo",
    "No programmes match your search": "Babu shiri da ya dace da bincikenku",
    "Clear filters": "Share tacewa",
    "Before you request a place": "Kafin neman gurbi",
    "A clear enquiry first. Your place is confirmed with the Academy.":
      "A fara da tambaya bayyananniya. Makarantar za ta tabbatar da gurbin ku.",
    "The Apply button opens SYLUTION's contact details and a prefilled enquiry. It does not take payment or confirm enrolment. Ask about the next cohort, available places and what equipment or materials the listed tuition covers.":
      "Maɓallin Apply zai buɗe bayanan tuntuɓar SYLUTION da saƙon tambaya da aka riga aka cika. Ba ya karɓar kuɗi ko tabbatar da rajista. Tambayi ranakun rukuni na gaba, guraben da ake da su da kayan aikin da kuɗin ya ƙunsa.",
    "Contact the Academy": "Tuntuɓi makarantar",
    "Choose a programme": "Zaɓi shiri",
    "Review its modules, practical work, fee and duration.":
      "Duba darussansa, aikin gwaji, kuɗi da tsawon lokaci.",
    "Ask about dates": "Tambayi ranakun horo",
    "Contact us to confirm the next cohort, place and fee inclusions.":
      "Tuntuɓe mu don tabbatar da rukuni na gaba, gurbi da abin da kuɗin ya ƙunsa.",
    "Confirm with SYLUTION": "Tabbatarwa da SYLUTION",
    "The Academy confirms next steps; a request is not an enrolment.":
      "Makarantar za ta bayyana mataki na gaba; tambaya ba rajista ba ce.",
    Questions: "Tambayoyi",
    "Good to know before you start": "Abubuwan da ya kamata ku sani kafin farawa",
    "We confirm dates and cohort details directly, so you can ask before making a commitment.":
      "Muna tabbatar da ranaku da bayanan rukuni kai tsaye, don ku yi tambaya kafin yanke shawara.",
    "Tuition fee": "Kuɗin kwas",
    Duration: "Tsawon lokaci",
    "2–8 weeks": "Makonni 2–8",
    "2 weeks": "Makonni 2",
    "3 weeks": "Makonni 3",
    "4 weeks": "Makonni 4",
    "6 weeks": "Makonni 6",
    "8 weeks": "Makonni 8",
    "1 day to 8 weeks": "Rana 1 zuwa makonni 8",
    "Course level": "Matakin kwas",
    "Course format": "Tsarin horo",
    "Confirm format with the Academy": "Tabbatar da tsarin horo da makarantar",
    "What you will build or do": "Abin da za ku ƙera ko yi",
    "Who this is for": "Waɗanda kwas ɗin ya dace da su",
    "Learning outcomes": "Abubuwan da za ku iya bayan koyo",
    "Programme at a glance": "Taƙaitaccen bayani kan shirin",
    "Training is based in Kano. Ask whether this cohort is available in English or Hausa.":
      "Ana gudanar da horo a Kano. Tambayi ko za a koyar da wannan rukuni da Turanci ko Hausa.",
    "Course outline": "Tsarin kwas",
    "What you will learn": "Abin da za ku koya",
    "A clear view of the topics and practical work covered in this programme.":
      "Bayyanannen jerin batutuwa da aikin gwaji da wannan shiri ya ƙunsa.",
    Certificate: "Takardar shaida",
    "The fee is quoted after SYLUTION understands your group, scope and delivery needs.":
      "Za a ƙayyade kuɗin bayan SYLUTION ta fahimci rukuni, girman aiki da buƙatun gudanarwa.",
    "Confirm the next cohort date, available places and what equipment or materials are covered by the listed tuition.":
      "Tabbatar da ranar rukuni na gaba, guraben da ake da su da kayan aikin da kuɗin horo ya ƙunsa.",
    "An enquiry is not a confirmed enrolment or payment. SYLUTION will explain the next step after checking availability.":
      "Tambaya ba rajista ko biyan kuɗi ba ce. SYLUTION za ta bayyana mataki na gaba bayan duba samuwa.",
    "Ready to ask about this programme?": "Kuna son tambaya game da wannan shirin?",
    "Open our contact page to see the Academy's phone, WhatsApp and email. The enquiry form will already include this programme and its listed fee.":
      "Buɗe shafin tuntuɓa don ganin waya, WhatsApp da imel na makarantar. Fom ɗin tambaya zai riga ya ƙunshi wannan shiri da kuɗinsa.",
    "Apply / ask about dates": "Nemi gurbi / tambayi ranaku",
    "Message Academy on WhatsApp": "Aika saƙo ga makaranta ta WhatsApp",
    "Keep exploring": "Ci gaba da bincike",
    "Related programmes": "Shirye-shirye masu alaƙa",
    "Compare another course before contacting the Academy.":
      "Kwatanta wani kwas kafin tuntuɓar makarantar.",
    "Return to all programmes": "Koma ga duk shirye-shirye",
    "Custom quote": "Ƙididdigar kuɗi ta musamman",
    Foundational: "Matakin farko",
    Intermediate: "Matsakaici",
    "Foundational to intermediate": "Daga matakin farko zuwa matsakaici",
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
    "Practical technology training, with clear prices and pathways":
      "Des formations technologiques pratiques, avec des tarifs et des parcours clairs",
    "How to request a place": "Comment demander une place",
    "programmes to explore": "programmes à découvrir",
    "typical course duration": "durée habituelle d'une formation",
    "published tuition; institutional quote by scope":
      "tarifs publiés ; devis institutionnel selon le périmètre",
    "Compare the topic, level, duration and fee. Open any programme for its full overview, modules, practical work and learning outcomes.":
      "Comparez le sujet, le niveau, la durée et le tarif. Ouvrez un programme pour consulter sa présentation, ses modules, ses travaux pratiques et ses objectifs pédagogiques.",
    "Course catalogue": "Catalogue des formations",
    "Search programmes": "Rechercher des programmes",
    "Search by course, skill or technology": "Rechercher par formation, compétence ou technologie",
    "Filter programmes by subject": "Filtrer les programmes par sujet",
    "All programmes": "Tous les programmes",
    "Engineering & AI": "Ingénierie et IA",
    "Smart agriculture": "Agriculture intelligente",
    Professional: "Professionnel",
    "programmes shown": "programmes affichés",
    "View full programme": "Voir le programme complet",
    Tuition: "Frais de formation",
    "No programmes match your search": "Aucun programme ne correspond à votre recherche",
    "Clear filters": "Effacer les filtres",
    "Before you request a place": "Avant de demander une place",
    "A clear enquiry first. Your place is confirmed with the Academy.":
      "Commencez par une demande claire. L'Académie confirmera votre place.",
    "The Apply button opens SYLUTION's contact details and a prefilled enquiry. It does not take payment or confirm enrolment. Ask about the next cohort, available places and what equipment or materials the listed tuition covers.":
      "Le bouton de demande ouvre les coordonnées de SYLUTION et un message prérempli. Il ne déclenche aucun paiement et ne confirme pas l'inscription. Renseignez-vous sur la prochaine session, les places disponibles et le matériel compris dans les frais affichés.",
    "Contact the Academy": "Contacter l'Académie",
    "Choose a programme": "Choisir un programme",
    "Review its modules, practical work, fee and duration.":
      "Consultez ses modules, ses travaux pratiques, son tarif et sa durée.",
    "Ask about dates": "Demander les dates",
    "Contact us to confirm the next cohort, place and fee inclusions.":
      "Contactez-nous pour confirmer la prochaine session, les places et les éléments inclus dans les frais.",
    "Confirm with SYLUTION": "Confirmer avec SYLUTION",
    "The Academy confirms next steps; a request is not an enrolment.":
      "L'Académie confirme la suite ; une demande ne vaut pas inscription.",
    Questions: "Questions",
    "Good to know before you start": "À savoir avant de commencer",
    "We confirm dates and cohort details directly, so you can ask before making a commitment.":
      "Nous confirmons directement les dates et les détails des sessions afin que vous puissiez vous renseigner avant de vous engager.",
    "Tuition fee": "Frais de formation",
    Duration: "Durée",
    "2–8 weeks": "2 à 8 semaines",
    "2 weeks": "2 semaines",
    "3 weeks": "3 semaines",
    "4 weeks": "4 semaines",
    "6 weeks": "6 semaines",
    "8 weeks": "8 semaines",
    "1 day to 8 weeks": "1 jour à 8 semaines",
    "Course level": "Niveau",
    "Course format": "Format de la formation",
    "Confirm format with the Academy": "Confirmer le format avec l'Académie",
    "What you will build or do": "Ce que vous réaliserez",
    "Who this is for": "À qui s'adresse cette formation",
    "Learning outcomes": "Objectifs pédagogiques",
    "Programme at a glance": "La formation en bref",
    "Training is based in Kano. Ask whether this cohort is available in English or Hausa.":
      "Les formations ont lieu à Kano. Demandez si cette session est proposée en anglais ou en haoussa.",
    "Course outline": "Programme détaillé",
    "What you will learn": "Ce que vous apprendrez",
    "A clear view of the topics and practical work covered in this programme.":
      "Un aperçu clair des thèmes et des travaux pratiques de cette formation.",
    Certificate: "Attestation",
    "The fee is quoted after SYLUTION understands your group, scope and delivery needs.":
      "Un devis sera établi après analyse de votre groupe, du périmètre et des modalités souhaitées.",
    "Confirm the next cohort date, available places and what equipment or materials are covered by the listed tuition.":
      "Confirmez la date de la prochaine session, les places disponibles et le matériel compris dans les frais affichés.",
    "An enquiry is not a confirmed enrolment or payment. SYLUTION will explain the next step after checking availability.":
      "Une demande ne confirme ni inscription ni paiement. SYLUTION vous indiquera la suite après vérification des disponibilités.",
    "Ready to ask about this programme?": "Vous souhaitez des renseignements sur cette formation ?",
    "Open our contact page to see the Academy's phone, WhatsApp and email. The enquiry form will already include this programme and its listed fee.":
      "Consultez notre page Contact pour le téléphone, WhatsApp et l'e-mail de l'Académie. Le formulaire inclura déjà cette formation et son tarif affiché.",
    "Apply / ask about dates": "Demander une place / les dates",
    "Message Academy on WhatsApp": "Écrire à l'Académie sur WhatsApp",
    "Keep exploring": "Poursuivre la découverte",
    "Related programmes": "Formations associées",
    "Compare another course before contacting the Academy.":
      "Comparez une autre formation avant de contacter l'Académie.",
    "Return to all programmes": "Retour à tous les programmes",
    "Custom quote": "Devis personnalisé",
    Foundational: "Fondamental",
    Intermediate: "Intermédiaire",
    "Foundational to intermediate": "Du niveau fondamental à intermédiaire",
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
    "Practical technology training, with clear prices and pathways":
      "تدريب تقني عملي بأسعار ومسارات واضحة",
    "How to request a place": "كيفية طلب مقعد",
    "programmes to explore": "برنامجًا للاستكشاف",
    "typical course duration": "المدة المعتادة للدورة",
    "published tuition; institutional quote by scope":
      "الرسوم المنشورة؛ وتسعير المؤسسات حسب نطاق العمل",
    "Compare the topic, level, duration and fee. Open any programme for its full overview, modules, practical work and learning outcomes.":
      "قارن الموضوع والمستوى والمدة والرسوم. افتح أي برنامج للاطلاع على نبذته ووحداته والتطبيق العملي ومخرجات التعلم.",
    "Course catalogue": "دليل الدورات",
    "Search programmes": "ابحث في البرامج",
    "Search by course, skill or technology": "ابحث باسم الدورة أو المهارة أو التقنية",
    "Filter programmes by subject": "تصفية البرامج حسب المجال",
    "All programmes": "كل البرامج",
    "Engineering & AI": "الهندسة والذكاء الاصطناعي",
    "Smart agriculture": "الزراعة الذكية",
    Professional: "مهني",
    "programmes shown": "برنامجًا معروضًا",
    "View full programme": "عرض تفاصيل البرنامج",
    Tuition: "رسوم التدريب",
    "No programmes match your search": "لا توجد برامج تطابق بحثك",
    "Clear filters": "مسح عوامل التصفية",
    "Before you request a place": "قبل طلب مقعد",
    "A clear enquiry first. Your place is confirmed with the Academy.":
      "ابدأ باستفسار واضح. تؤكد الأكاديمية توفر المقعد.",
    "The Apply button opens SYLUTION's contact details and a prefilled enquiry. It does not take payment or confirm enrolment. Ask about the next cohort, available places and what equipment or materials the listed tuition covers.":
      "يفتح زر التقديم بيانات التواصل مع SYLUTION واستفسارًا مُعدًا مسبقًا. لا يتم الدفع أو تأكيد التسجيل عبره. اسأل عن موعد المجموعة القادمة والمقاعد المتاحة والمعدات أو المواد التي تشملها الرسوم المنشورة.",
    "Contact the Academy": "تواصل مع الأكاديمية",
    "Choose a programme": "اختر برنامجًا",
    "Review its modules, practical work, fee and duration.":
      "راجع وحداته والتطبيق العملي والرسوم والمدة.",
    "Ask about dates": "استفسر عن المواعيد",
    "Contact us to confirm the next cohort, place and fee inclusions.":
      "تواصل معنا لتأكيد المجموعة القادمة والمقعد وما تشمله الرسوم.",
    "Confirm with SYLUTION": "أكد مع SYLUTION",
    "The Academy confirms next steps; a request is not an enrolment.":
      "توضح الأكاديمية الخطوة التالية؛ فالاستفسار لا يُعد تسجيلًا.",
    Questions: "أسئلة",
    "Good to know before you start": "معلومات مهمة قبل البدء",
    "We confirm dates and cohort details directly, so you can ask before making a commitment.":
      "نؤكد المواعيد وتفاصيل المجموعة مباشرة حتى تتمكن من الاستفسار قبل الالتزام.",
    "Tuition fee": "رسوم الدورة",
    Duration: "المدة",
    "2–8 weeks": "من أسبوعين إلى 8 أسابيع",
    "2 weeks": "أسبوعان",
    "3 weeks": "3 أسابيع",
    "4 weeks": "4 أسابيع",
    "6 weeks": "6 أسابيع",
    "8 weeks": "8 أسابيع",
    "1 day to 8 weeks": "من يوم واحد إلى 8 أسابيع",
    "Course level": "مستوى الدورة",
    "Course format": "نمط الدورة",
    "Confirm format with the Academy": "أكد النمط مع الأكاديمية",
    "What you will build or do": "ما ستصممه أو تنفذه",
    "Who this is for": "الفئة المناسبة لهذه الدورة",
    "Learning outcomes": "مخرجات التعلم",
    "Programme at a glance": "نظرة سريعة على البرنامج",
    "Training is based in Kano. Ask whether this cohort is available in English or Hausa.":
      "يقام التدريب في كانو. استفسر عما إذا كانت هذه المجموعة متاحة بالإنجليزية أو الهوسا.",
    "Course outline": "محتوى الدورة",
    "What you will learn": "ما ستتعلمه",
    "A clear view of the topics and practical work covered in this programme.":
      "عرض واضح للموضوعات والتطبيق العملي في هذا البرنامج.",
    Certificate: "الشهادة",
    "The fee is quoted after SYLUTION understands your group, scope and delivery needs.":
      "تحدد الرسوم بعد أن تفهم SYLUTION المجموعة ونطاق العمل واحتياجات التنفيذ.",
    "Confirm the next cohort date, available places and what equipment or materials are covered by the listed tuition.":
      "أكد موعد المجموعة القادمة والمقاعد المتاحة والمعدات أو المواد التي تشملها الرسوم المنشورة.",
    "An enquiry is not a confirmed enrolment or payment. SYLUTION will explain the next step after checking availability.":
      "الاستفسار لا يؤكد التسجيل أو الدفع. توضح SYLUTION الخطوة التالية بعد التحقق من التوفر.",
    "Ready to ask about this programme?": "هل ترغب في الاستفسار عن هذا البرنامج؟",
    "Open our contact page to see the Academy's phone, WhatsApp and email. The enquiry form will already include this programme and its listed fee.":
      "افتح صفحة التواصل لمعرفة هاتف الأكاديمية وواتساب والبريد الإلكتروني. سيتضمن نموذج الاستفسار هذا البرنامج ورسومه المنشورة مسبقًا.",
    "Apply / ask about dates": "قدّم طلبًا / استفسر عن المواعيد",
    "Message Academy on WhatsApp": "راسل الأكاديمية عبر واتساب",
    "Keep exploring": "تابع الاستكشاف",
    "Related programmes": "برامج ذات صلة",
    "Compare another course before contacting the Academy.":
      "قارن دورة أخرى قبل التواصل مع الأكاديمية.",
    "Return to all programmes": "العودة إلى جميع البرامج",
    "Custom quote": "عرض سعر مخصص",
    Foundational: "تأسيسي",
    Intermediate: "متوسط",
    "Foundational to intermediate": "من التأسيسي إلى المتوسط",
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
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem("sylution-lang") as LangCode | null;
    if (stored && stored in DICTS) setLang(stored);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("sylution-lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const t = (key: string) => DICTS[lang][key] ?? en[key] ?? key;
  const tr = (text: string) =>
    lang === "en" ? text : (PHRASES[lang][text] ?? EXTRA[lang][text] ?? text);

  return <LangContext.Provider value={{ lang, setLang, t, tr }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
