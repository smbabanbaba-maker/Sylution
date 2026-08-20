import { o as __toESM } from "../_runtime.mjs";
import { c as require_react, s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as useRouterState, c as Outlet, d as createRootRouteWithContext, f as Link, i as HeadContent, l as lazyRouteComponent, m as notFound, p as useRouter, r as Scripts, s as createRouter, u as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { n as useReducedMotion, o as AnimatePresence, t as useInView } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { C as Phone, D as MapPin, E as Menu, O as Mail, T as MessageCircle, V as Facebook, Z as ChevronDown, j as Instagram, k as Linkedin, n as Youtube, r as X, s as Twitter, v as ShieldCheck, w as Music2, y as Send } from "../_libs/lucide-react.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-data-BdkF6m4g.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var LANGS = [
	{
		code: "en",
		label: "English",
		short: "EN"
	},
	{
		code: "ha",
		label: "Hausa",
		short: "HA"
	},
	{
		code: "fr",
		label: "Français",
		short: "FR"
	},
	{
		code: "ar",
		label: "العربية",
		short: "AR"
	}
];
var en = {
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
	"hero.sub": "SYLUTION LTD applies artificial intelligence, Internet of Things, electronics, robotics, drone and solar technology to modern agriculture and real world problems in Nigeria.",
	"hero.cta1": "Explore IoT",
	"hero.cta2": "Our Technologies",
	"hero.cta3": "Contact Us",
	"cta.title": "Let's build the next deployment together",
	"cta.sub": "Investors, banks, governments, NGOs, universities and enterprises, talk to our team.",
	"cta.button": "Start a conversation",
	"footer.about": "An African technology company engineering Internet of Things devices, artificial intelligence, electronics, robotics and software for industry, energy, cities, healthcare and agriculture.",
	"footer.quick": "Quick Links",
	"footer.solutions": "Solutions",
	"footer.contact": "Contact",
	"footer.rights": "All rights reserved."
};
var DICTS = {
	en,
	ha: {
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
		"hero.sub": "SYLUTION LTD tana amfani da basirar wucin gadi, IoT, na'urorin lantarki, robotics, jirage marasa matuki da fasahar hasken rana domin noman zamani da matsalolin gaskiya a Najeriya.",
		"hero.cta1": "Duba IoT",
		"hero.cta2": "Fasahohinmu",
		"hero.cta3": "Tuntube Mu",
		"cta.title": "Bari mu gina aiki na gaba tare",
		"cta.sub": "Masu zuba jari, bankuna, gwamnati, NGO, jami'o'i da kamfanoni, ku tuntube mu.",
		"cta.button": "Fara tattaunawa",
		"footer.about": "Kamfanin fasaha na Afirka da ke kera na'urorin IoT, basirar wucin gadi, na'urorin lantarki, robotics da manhajoji domin masana'antu, makamashi, birane, lafiya da noma.",
		"footer.quick": "Hanyoyin Sauri",
		"footer.solutions": "Ayyukanmu",
		"footer.contact": "Tuntube Mu",
		"footer.rights": "Duk haƙƙoƙi na kamfanin ne."
	},
	fr: {
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
		"hero.sub": "SYLUTION LTD applique l'intelligence artificielle, l'IoT, l'électronique, la robotique, les drones et le solaire à l'agriculture moderne et aux problèmes réels au Nigeria.",
		"hero.cta1": "Découvrir l'IoT",
		"hero.cta2": "Nos technologies",
		"hero.cta3": "Nous contacter",
		"cta.title": "Construisons ensemble le prochain déploiement",
		"cta.sub": "Investisseurs, banques, gouvernements, ONG, universités et entreprises.",
		"cta.button": "Démarrer la conversation",
		"footer.about": "Une entreprise technologique africaine qui conçoit des objets connectés, de l'intelligence artificielle, de l'électronique, de la robotique et des logiciels pour l'industrie, l'énergie, les villes, la santé et l'agriculture.",
		"footer.quick": "Liens rapides",
		"footer.solutions": "Solutions",
		"footer.contact": "Contact",
		"footer.rights": "Tous droits réservés."
	},
	ar: {
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
		"hero.sub": "تطبق شركة SYLUTION LTD الذكاء الاصطناعي وإنترنت الأشياء والإلكترونيات والروبوتات والطائرات المسيّرة والطاقة الشمسية على الزراعة الحديثة والمشكلات الواقعية في نيجيريا.",
		"hero.cta1": "استكشف إنترنت الأشياء",
		"hero.cta2": "تقنياتنا",
		"hero.cta3": "اتصل بنا",
		"cta.title": "لنبنِ المشروع القادم معًا",
		"cta.sub": "المستثمرون والبنوك والحكومات والمنظمات والجامعات والشركات.",
		"cta.button": "ابدأ المحادثة",
		"footer.about": "شركة تقنية أفريقية تهندس أجهزة إنترنت الأشياء والذكاء الاصطناعي والإلكترونيات والروبوتات والبرمجيات للصناعة والطاقة والمدن والصحة والزراعة.",
		"footer.quick": "روابط سريعة",
		"footer.solutions": "الحلول",
		"footer.contact": "اتصل بنا",
		"footer.rights": "جميع الحقوق محفوظة."
	}
};
/**
* Phrase dictionary: English sentence -> translation.
* Used by shared UI (page heroes, section headings, buttons) so switching the
* language translates page content, not only the navigation.
*/
var PHRASES = {
	ha: {
		"Who we are": "Su waye mu",
		"An innovation company built in Africa, engineered for the world": "Kamfanin kirkire-kirkire da aka gina a Afirka, don duniya baki daya",
		Capabilities: "Iyawarmu",
		"Six technology pillars, one integrated system": "Ginshikai shida na fasaha, tsari guda daya",
		"In the field": "A gona",
		"Real projects, real farms, real results": "Ayyuka na gaskiya, gonaki na gaskiya, sakamako na gaskiya",
		Newsroom: "Sashen Labarai",
		"Latest from SYLUTION": "Sabbin labarai daga SYLUTION",
		"About SYLUTION": "Game da SYLUTION",
		"Built in Kano. Engineered for the continent.": "An gina shi a Kano. An kera shi don nahiyar Afirka.",
		"SYLUTION is an innovation company working at the intersection of agriculture, engineering and artificial intelligence, creating technology that African farms can actually own, run and profit from.": "SYLUTION kamfani ne na kirkire-kirkire da ke hada noma, injiniyanci da basirar wucin gadi, yana kera fasahar da gonakin Afirka za su iya mallaka, sarrafawa da samun riba a kanta.",
		"Our story": "Tarihinmu",
		"It started with one irrigation block and a stubborn question": "Ya fara ne da filin ban ruwa guda daya da tambaya mai wuya",
		"Core values": "Ka'idojinmu",
		"Four commitments that govern every project": "Alkawura hudu da ke jagorantar kowane aiki",
		Milestones: "Nasarorinmu",
		"How we grew": "Yadda muka bunkasa",
		Solutions: "Ayyukanmu",
		"Engineered capabilities that work together": "Fasahohi da aka kera don yin aiki tare",
		"Full catalogue": "Cikakken jerin",
		Related: "Masu alaka",
		"Explore related services": "Duba sauran ayyuka masu alaka",
		"Innovation Centre": "Cibiyar Kirkire-Kirkire",
		"Where the next generation of African farm technology is built": "Inda ake gina fasahar noma ta gaba a Afirka",
		"Eight disciplines under one roof": "Fannoni takwas a rufi guda",
		Pipeline: "Matakan Aiki",
		"From question to deployed product in five gates": "Daga tambaya zuwa kayan aiki cikin matakai biyar",
		"Inside the centre": "Cikin cibiyar",
		Facilities: "Kayan aiki",
		"SYLUTION Academy": "Makarantar SYLUTION",
		"Technology only creates value when people can run it": "Fasaha tana amfani ne kawai idan mutane sun iya sarrafa ta",
		Programmes: "Shirye-shirye",
		"Eleven programmes, one practical standard": "Shirye-shirye goma sha daya, matsayi guda na aiki",
		Gallery: "Hotuna",
		"The work, as it actually looks": "Aikin, kamar yadda yake a zahiri",
		"What we are building, shipping and proving": "Abin da muke ginawa, kaddamarwa da tabbatarwa",
		"More stories": "Kara labarai",
		"Recent updates": "Sabbin bayanai",
		Careers: "Aikin Yi",
		"Build technology that feeds a continent": "Gina fasahar da take ciyar da nahiya",
		"Why SYLUTION": "Me ya sa SYLUTION",
		"What you get here": "Abin da za ka samu a nan",
		"Open roles": "Guraben aiki",
		"Positions currently accepting applications": "Mukaman da ake karbar takardu a yanzu",
		Contact: "Tuntube Mu",
		"Let's talk about your project": "Bari mu tattauna aikinka",
		"Reach us": "Yadda za a same mu",
		"Head office & Innovation Centre": "Babban ofis da Cibiyar Kirkire-Kirkire",
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
		"Four steps from application to installed equipment": "Matakai hudu daga nema zuwa girka kayan aiki"
	},
	fr: {
		"Who we are": "Qui sommes-nous",
		"An innovation company built in Africa, engineered for the world": "Une entreprise d'innovation née en Afrique, conçue pour le monde",
		Capabilities: "Compétences",
		"Six technology pillars, one integrated system": "Six piliers technologiques, un système intégré",
		"In the field": "Sur le terrain",
		"Real projects, real farms, real results": "De vrais projets, de vraies fermes, de vrais résultats",
		Newsroom: "Actualités",
		"Latest from SYLUTION": "Dernières nouvelles de SYLUTION",
		"About SYLUTION": "À propos de SYLUTION",
		"Built in Kano. Engineered for the continent.": "Conçu à Kano. Pensé pour le continent.",
		"SYLUTION is an innovation company working at the intersection of agriculture, engineering and artificial intelligence, creating technology that African farms can actually own, run and profit from.": "SYLUTION est une entreprise d'innovation à la croisée de l'agriculture, de l'ingénierie et de l'intelligence artificielle, créant des technologies que les fermes africaines peuvent réellement posséder, exploiter et rentabiliser.",
		"Our story": "Notre histoire",
		"It started with one irrigation block and a stubborn question": "Tout a commencé avec une parcelle irriguée et une question tenace",
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
		"Where the next generation of African farm technology is built": "Là où se construit la prochaine génération de technologies agricoles africaines",
		"Eight disciplines under one roof": "Huit disciplines sous un même toit",
		Pipeline: "Processus",
		"From question to deployed product in five gates": "De la question au produit déployé en cinq étapes",
		"Inside the centre": "À l'intérieur du centre",
		Facilities: "Installations",
		"SYLUTION Academy": "Académie SYLUTION",
		"Technology only creates value when people can run it": "La technologie ne crée de valeur que si les gens savent l'utiliser",
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
		"Four steps from application to installed equipment": "Quatre étapes, de la demande à l'équipement installé"
	},
	ar: {
		"Who we are": "من نحن",
		"An innovation company built in Africa, engineered for the world": "شركة ابتكار بُنيت في أفريقيا وهُندست للعالم",
		Capabilities: "قدراتنا",
		"Six technology pillars, one integrated system": "ستة أعمدة تقنية، نظام واحد متكامل",
		"In the field": "في الميدان",
		"Real projects, real farms, real results": "مشاريع حقيقية، مزارع حقيقية، نتائج حقيقية",
		Newsroom: "غرفة الأخبار",
		"Latest from SYLUTION": "أحدث أخبار SYLUTION",
		"About SYLUTION": "عن SYLUTION",
		"Built in Kano. Engineered for the continent.": "صُنعت في كانو. هُندست للقارة.",
		"SYLUTION is an innovation company working at the intersection of agriculture, engineering and artificial intelligence, creating technology that African farms can actually own, run and profit from.": "شركة SYLUTION شركة ابتكار تعمل عند تقاطع الزراعة والهندسة والذكاء الاصطناعي، وتصنع تقنيات تستطيع المزارع الأفريقية امتلاكها وتشغيلها والربح منها.",
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
		"Where the next generation of African farm technology is built": "حيث يُبنى الجيل القادم من تقنيات الزراعة الأفريقية",
		"Eight disciplines under one roof": "ثمانية تخصصات تحت سقف واحد",
		Pipeline: "مسار العمل",
		"From question to deployed product in five gates": "من السؤال إلى منتج مُطبَّق عبر خمس مراحل",
		"Inside the centre": "داخل المركز",
		Facilities: "المرافق",
		"SYLUTION Academy": "أكاديمية SYLUTION",
		"Technology only creates value when people can run it": "التقنية لا تصنع قيمة إلا حين يستطيع الناس تشغيلها",
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
		"Four steps from application to installed equipment": "أربع خطوات من الطلب إلى تركيب المعدات"
	}
};
/** Additional phrases introduced by the technology pages. */
var EXTRA = {
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
		"Connected devices, engineered and manufactured locally": "Na'urori masu hade da juna, an kera su a nan gida",
		Catalogue: "Jerin Kayayyaki",
		"Devices and systems": "Na'urori da tsarin aiki",
		Industries: "Masana'antu",
		"Technology is our business, industry is where it lands": "Fasaha ita ce aikinmu, masana'antu su ne inda take sauka",
		Sectors: "Bangarori",
		"Technology pillars": "Ginshikan fasaha",
		"Coming soon": "Nan ba da jimawa ba"
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
		"Connected devices, engineered and manufactured locally": "Des objets connectés conçus et fabriqués localement",
		Catalogue: "Catalogue",
		"Devices and systems": "Appareils et systèmes",
		Industries: "Secteurs",
		"Technology is our business, industry is where it lands": "La technologie est notre métier, l'industrie est son terrain",
		Sectors: "Secteurs",
		"Technology pillars": "Piliers technologiques",
		"Coming soon": "Bientôt disponible"
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
		"Technology is our business, industry is where it lands": "التقنية عملنا، والقطاعات هي ميدان تطبيقها",
		Sectors: "القطاعات",
		"Technology pillars": "الركائز التقنية",
		"Coming soon": "قريبًا"
	}
};
var LangContext = (0, import_react.createContext)({
	lang: "en",
	setLang: () => {},
	t: (k) => en[k] ?? k,
	tr: (s) => s
});
function LanguageProvider({ children }) {
	const [lang, setLang] = (0, import_react.useState)("en");
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		const stored = window.localStorage.getItem("sylution-lang");
		if (stored && stored in DICTS) setLang(stored);
	}, []);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		window.localStorage.setItem("sylution-lang", lang);
		document.documentElement.lang = lang;
		document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
	}, [lang]);
	const t = (key) => DICTS[lang][key] ?? en[key] ?? key;
	const tr = (text) => lang === "en" ? text : PHRASES[lang][text] ?? EXTRA[lang][text] ?? text;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangContext.Provider, {
		value: {
			lang,
			setLang,
			t,
			tr
		},
		children
	});
}
var useLang = () => (0, import_react.useContext)(LangContext);
var BRAND_IMAGES = {
	greenhouse: "/brand/sylution-greenhouse.png",
	drone: "/brand/sylution-drone.png",
	control: "/brand/sylution-control.png",
	training: "/brand/sylution-training.jpg",
	solar: "/brand/sylution-solar.jpg",
	lab: "/brand/sylution-lab.jpg",
	irrigation: "/brand/sylution-irrigation.jpg",
	electronics: "/brand/sylution-electronics.jpg",
	team: "/brand/sylution-team.jpg",
	harvest: "/brand/sylution-harvest.jpg",
	pcb: "/brand/tech-pcb.jpg",
	iotLab: "/brand/tech-iot-lab.jpg",
	robotics: "/brand/tech-robotics.jpg",
	ai: "/brand/tech-ai.jpg",
	techTraining: "/brand/tech-training.jpg",
	device: "/brand/tech-device.jpg",
	city: "/brand/tech-city.jpg",
	sysmart: "/brand/sysmart-agro.png",
	exhibition1: "/brand/exhibition-1.jpg",
	exhibition2: "/brand/exhibition-2.jpg",
	exhibition3: "/brand/exhibition-3.jpg",
	exhibition4: "/brand/exhibition-4.jpg",
	exhibition5: "/brand/exhibition-5.jpg"
};
var LOGO_SRC = "/brand/sylution-logo.webp";
var CONTACT = {
	company: "SYLUTION LTD",
	legalName: "SYLUTION LTD",
	address: "Technology Incubation Centre (TIC), Farm Centre, Kano, Nigeria",
	email: "officialsylution@gmail.com",
	phones: ["+2349117957946", "+2349063436048"],
	whatsapp: "2349063436048",
	hours: "Monday to Friday, 9:00 to 17:00 WAT",
	socials: [
		{
			name: "Facebook",
			href: "https://www.facebook.com/profile.php?id=61553057467392"
		},
		{
			name: "LinkedIn",
			href: "https://www.linkedin.com/company/sylution/"
		},
		{
			name: "Instagram",
			href: "https://www.instagram.com/official_sylution"
		},
		{
			name: "TikTok",
			href: "https://www.tiktok.com/@sylution"
		},
		{
			name: "X",
			href: "https://x.com/sylution_ng"
		},
		{
			name: "WhatsApp",
			href: "https://wa.me/2349063436048"
		}
	]
};
var STATUS = (status) => [
	{
		label: "Current status",
		value: status
	},
	{
		label: "Engineering",
		value: "In house, Kano"
	},
	{
		label: "Availability",
		value: "On request"
	}
];
var SOLUTIONS = [
	{
		slug: "artificial-intelligence",
		title: "Artificial Intelligence",
		tagline: "Intelligence for agriculture",
		image: BRAND_IMAGES.ai,
		summary: "AI systems, agricultural intelligence, computer vision, analytics and intelligent decision support built on data collected in the field.",
		capabilities: [
			"Computer vision for crop and field imagery",
			"Agricultural data intelligence",
			"Predictive analytics and advisory",
			"Anomaly detection on live sensor data",
			"Edge inference on low cost hardware"
		],
		outcomes: STATUS("Active Development")
	},
	{
		slug: "iot",
		title: "Internet of Things",
		tagline: "Sensing, connecting, automating",
		image: BRAND_IMAGES.iotLab,
		summary: "Sensors, connected devices, embedded systems, smart monitoring, data collection and automation designed for farms and remote sites.",
		capabilities: [
			"Sensor node and controller design",
			"GSM, Wi-Fi and wireless connectivity",
			"Data collection and cloud storage",
			"Offline capable field operation",
			"Realtime dashboards and alerts"
		],
		outcomes: STATUS("Field Deployment & Testing")
	},
	{
		slug: "electronics",
		title: "Electronics and Embedded Systems",
		tagline: "Controllers, sensors, firmware",
		image: BRAND_IMAGES.pcb,
		summary: "Controllers, sensors, microcontrollers, hardware prototypes and smart electronic systems designed and assembled in our Kano workspace.",
		capabilities: [
			"Circuit and PCB design",
			"ESP32, STM32 and Arduino platforms",
			"Firmware and low power design",
			"Sensor selection and calibration",
			"Prototype assembly and testing"
		],
		outcomes: STATUS("In Development")
	},
	{
		slug: "embedded-systems",
		title: "Embedded Firmware",
		tagline: "Software close to the hardware",
		image: BRAND_IMAGES.electronics,
		summary: "Low power firmware and control software for microcontroller class hardware, written for reliability in dust, heat and unstable power.",
		capabilities: [
			"Bare metal and RTOS firmware",
			"Battery and power optimisation",
			"Sensor drivers and protocols",
			"Over the air update support",
			"Hardware in the loop testing"
		],
		outcomes: STATUS("In Development")
	},
	{
		slug: "robotics",
		title: "Robotics",
		tagline: "Education, automation, machines",
		image: BRAND_IMAGES.robotics,
		summary: "Robotics education, automation and intelligent machines, from teaching kits to experimental agricultural mechanisms.",
		capabilities: [
			"Robotics education and kits",
			"Mechatronic design and actuation",
			"Automation experiments",
			"Sensor guided motion",
			"Practical student projects"
		],
		outcomes: STATUS("Development")
	},
	{
		slug: "drone-technology",
		title: "Drone Technology",
		tagline: "Aerial observation and mapping",
		image: BRAND_IMAGES.drone,
		summary: "Agricultural observation, mapping, monitoring, data collection and practical drone training for farms and institutions.",
		capabilities: [
			"Farm observation and monitoring",
			"Mapping and imagery collection",
			"Agricultural data capture",
			"Practical demonstrations",
			"Drone technology training"
		],
		outcomes: STATUS("Development")
	},
	{
		slug: "solar-technology",
		title: "Solar Technology",
		tagline: "Clean power for connected systems",
		image: BRAND_IMAGES.solar,
		summary: "Solar powered technology supporting agricultural and IoT systems where grid power is weak, expensive or unavailable.",
		capabilities: [
			"Solar powered device platforms",
			"Battery and charge management",
			"Pump and motor power support",
			"Energy monitoring",
			"Off grid installation support"
		],
		outcomes: STATUS("Development")
	},
	{
		slug: "smart-agriculture",
		title: "Smart Agriculture",
		tagline: "AI and IoT applied to farming",
		image: BRAND_IMAGES.greenhouse,
		summary: "Our main application area: sensor driven irrigation, greenhouse monitoring, farm dashboards and AI advisory built on one connected core.",
		capabilities: [
			"Smart irrigation control",
			"Greenhouse monitoring",
			"Soil, weather and tank sensing",
			"AI crop advisory research",
			"Farm records and monitoring"
		],
		outcomes: STATUS("Active Development & Field Deployment")
	},
	{
		slug: "precision-agriculture",
		title: "Precision Agriculture",
		tagline: "Right input, right place, right time",
		image: BRAND_IMAGES.drone,
		summary: "Field zoning, aerial imagery and data guided operations so every unit of water and input goes where it returns most.",
		capabilities: [
			"Field zoning and sampling maps",
			"Aerial imagery analysis",
			"Data guided input planning",
			"Yield and performance tracking",
			"Input cost analytics"
		],
		outcomes: STATUS("Active Research")
	},
	{
		slug: "digital-agriculture",
		title: "Digital Agriculture",
		tagline: "One record for every field",
		image: BRAND_IMAGES.control,
		summary: "Farm management records, traceability and digital data that make an operation measurable for farmers, lenders and partners.",
		capabilities: [
			"Farm management records",
			"Input and harvest traceability",
			"Digital farmer registries",
			"Reporting for partners",
			"Offline first mobile use"
		],
		outcomes: STATUS("Development")
	},
	{
		slug: "smart-irrigation",
		title: "Smart Irrigation",
		tagline: "Water, delivered by data",
		image: BRAND_IMAGES.irrigation,
		summary: "Controllers and sensors that read soil moisture and climate, then deliver the water each block actually needs.",
		capabilities: [
			"Soil moisture sensor networks",
			"Solar capable pump automation",
			"Drip and sprinkler control",
			"Mobile scheduling on weak networks",
			"Dry run and leak protection"
		],
		outcomes: STATUS("Active Development & Field Deployment")
	},
	{
		slug: "drip-irrigation",
		title: "Drip Irrigation",
		tagline: "Efficient water delivery",
		image: BRAND_IMAGES.irrigation,
		summary: "Efficient irrigation technology that puts water at the root zone, with the option to connect it to sensors and smart control.",
		capabilities: [
			"Drip layout and design support",
			"Filtration and pressure management",
			"Fertigation compatibility",
			"Sensor and controller integration",
			"Installation and maintenance guidance"
		],
		outcomes: STATUS("Testing")
	},
	{
		slug: "greenhouse",
		title: "Greenhouse Technology",
		tagline: "Controlled environment farming",
		image: BRAND_IMAGES.greenhouse,
		summary: "Modern greenhouse agriculture with technology integration for climate monitoring, irrigation and year round production.",
		capabilities: [
			"Greenhouse setup guidance",
			"Climate and humidity monitoring",
			"Ventilation and cooling control",
			"Irrigation and fertigation integration",
			"Remote monitoring"
		],
		outcomes: STATUS("Development")
	},
	{
		slug: "livestock-technology",
		title: "Livestock Technology",
		tagline: "Modern livestock management",
		image: BRAND_IMAGES.harvest,
		summary: "Technology assisted livestock monitoring, environment sensing and digital record keeping for modern livestock management.",
		capabilities: [
			"Environment and shelter monitoring",
			"Water and feed monitoring concepts",
			"IoT for livestock research",
			"Digital livestock records",
			"Alerts and reporting"
		],
		outcomes: STATUS("Research phase")
	},
	{
		slug: "agricultural-data",
		title: "Agricultural Data",
		tagline: "From readings to decisions",
		image: BRAND_IMAGES.control,
		summary: "Data collection, storage and visualisation that turn continuous field readings into dashboards and evidence.",
		capabilities: [
			"Time series data pipelines",
			"Farm and block level dashboards",
			"Data quality and validation",
			"Reporting and exports",
			"Model ready datasets"
		],
		outcomes: STATUS("Development")
	},
	{
		slug: "farmer-training",
		title: "Technology Training",
		tagline: "Technology only works when people do",
		image: BRAND_IMAGES.techTraining,
		summary: "Practical, hands on training in AI, IoT, modern agriculture, livestock technology, robotics and drone technology.",
		capabilities: [
			"Hands on practical sessions",
			"English, Hausa and French delivery",
			"Youth and women programmes",
			"Student and institution cohorts",
			"Follow up and mentorship"
		],
		outcomes: STATUS("Ongoing")
	},
	{
		slug: "research",
		title: "Research and Innovation",
		tagline: "Evidence before deployment",
		image: BRAND_IMAGES.lab,
		summary: "Applied research in AI, IoT, electronics, robotics and smart agriculture, moving from problem to prototype to field validation.",
		capabilities: [
			"Applied engineering research",
			"Dataset creation and labelling",
			"Prototype development",
			"Bench and field testing",
			"Documentation and reporting"
		],
		outcomes: STATUS("Ongoing research")
	}
];
var IOT_APPLICATIONS = [
	{
		group: "Smart Agriculture",
		items: [
			"Smart Agriculture IoT",
			"Smart Irrigation Controllers",
			"Greenhouse Monitoring",
			"Soil and Climate Sensing",
			"Farm Automation"
		]
	},
	{
		group: "Agricultural Monitoring",
		items: [
			"Weather Monitoring",
			"Water Level and Tank Monitoring",
			"Livestock Monitoring",
			"Environmental Monitoring",
			"Remote Farm Supervision"
		]
	},
	{
		group: "Energy and Power",
		items: [
			"Solar Powered Devices",
			"Energy Monitoring",
			"Pump and Motor Control",
			"Battery and Power Management",
			"Off Grid Operation"
		]
	},
	{
		group: "Platform and Intelligence",
		items: [
			"Sensor Networks",
			"Wireless Communication",
			"Cloud Data Collection",
			"Edge Computing",
			"Dashboards and Realtime Monitoring"
		]
	}
];
var IOT_STACK = [
	{
		layer: "01",
		title: "Sense",
		detail: "Rugged sensor nodes measure soil, climate, energy, water, motion, location and machine state."
	},
	{
		layer: "02",
		title: "Connect",
		detail: "LoRaWAN, NB-IoT, GSM and Wi-Fi gateways move data reliably from remote sites with weak coverage."
	},
	{
		layer: "03",
		title: "Compute",
		detail: "Edge controllers act locally in milliseconds and keep working when the network drops."
	},
	{
		layer: "04",
		title: "Analyse",
		detail: "Cloud pipelines, machine learning and computer vision turn raw streams into predictions."
	},
	{
		layer: "05",
		title: "Act",
		detail: "Dashboards, alerts and automated control close the loop on pumps, valves, motors and alarms."
	}
];
var AI_CAPABILITIES = [
	{
		title: "Agricultural AI",
		detail: "Crop stress detection, irrigation advisory and yield insight research."
	},
	{
		title: "Computer Vision",
		detail: "Detection and counting from camera and drone imagery."
	},
	{
		title: "Machine Learning",
		detail: "Models trained on locally collected, domain specific data."
	},
	{
		title: "Predictive Analytics",
		detail: "Forecasting water need, failure risk and crop performance."
	},
	{
		title: "AI Automation",
		detail: "Closed loop control driven by model output rather than manual checks."
	},
	{
		title: "AI Assistants",
		detail: "Voice and chat advisory in English, Hausa and French."
	},
	{
		title: "Decision Support",
		detail: "Ranked recommendations with the evidence behind them."
	},
	{
		title: "Agricultural Data",
		detail: "Clean, structured farm records that models and people can both use."
	}
];
var ELECTRONICS_CAPABILITIES = [
	{
		title: "PCB Design",
		detail: "Multilayer layout, signal integrity and design for manufacture."
	},
	{
		title: "Circuit Design",
		detail: "Analogue, digital and power electronics from concept to schematic."
	},
	{
		title: "Embedded Hardware",
		detail: "ESP32, STM32, Arduino and Raspberry Pi based platforms."
	},
	{
		title: "Sensors",
		detail: "Selection, calibration and conditioning for harsh environments."
	},
	{
		title: "Product Design",
		detail: "Enclosures, thermal design and ingress protection."
	},
	{
		title: "Device Manufacturing",
		detail: "Assembly, programming and batch production."
	},
	{
		title: "Testing Laboratory",
		detail: "Functional, thermal, power and endurance testing."
	},
	{
		title: "Firmware Development",
		detail: "Reliable low power firmware with secure updates."
	}
];
BRAND_IMAGES.iotLab, BRAND_IMAGES.ai, BRAND_IMAGES.pcb, BRAND_IMAGES.robotics, BRAND_IMAGES.electronics, BRAND_IMAGES.irrigation;
var PRODUCTS = [
	{
		name: "Sysmart Agro controller",
		detail: "Smart agriculture controller for sensing, irrigation control and monitoring.",
		image: BRAND_IMAGES.sysmart,
		status: "Active Project"
	},
	{
		name: "Smart sensors",
		detail: "Soil moisture, temperature, humidity and water level sensor nodes.",
		image: BRAND_IMAGES.iotLab,
		status: "Testing"
	},
	{
		name: "Smart irrigation unit",
		detail: "Solar capable scheduling and control for irrigation blocks.",
		image: BRAND_IMAGES.irrigation,
		status: "Testing"
	},
	{
		name: "Drip irrigation technology",
		detail: "Efficient water delivery systems for farms and greenhouses.",
		image: BRAND_IMAGES.irrigation,
		status: "Testing"
	},
	{
		name: "Greenhouse technology",
		detail: "Modern greenhouse agriculture with technology integration.",
		image: BRAND_IMAGES.greenhouse,
		status: "Development"
	},
	{
		name: "Agricultural drone technology",
		detail: "Farm observation, mapping and monitoring applications.",
		image: BRAND_IMAGES.drone,
		status: "Development"
	},
	{
		name: "Educational robotics kit",
		detail: "Teaching kit covering microcontrollers, sensors and actuation.",
		image: BRAND_IMAGES.robotics,
		status: "Development"
	},
	{
		name: "Solar powered technology",
		detail: "Solar support for IoT devices and agricultural systems.",
		image: BRAND_IMAGES.solar,
		status: "Development"
	}
];
var INDUSTRIES = [
	{
		name: "Agriculture",
		detail: "Smart, precision and digital agriculture technology.",
		image: BRAND_IMAGES.greenhouse
	},
	{
		name: "Irrigation and water",
		detail: "Sensor driven irrigation, drip systems and water efficiency.",
		image: BRAND_IMAGES.irrigation
	},
	{
		name: "Livestock",
		detail: "Technology assisted livestock monitoring and digital records.",
		image: BRAND_IMAGES.harvest
	},
	{
		name: "Greenhouse farming",
		detail: "Controlled environment agriculture and technology integration.",
		image: BRAND_IMAGES.greenhouse
	},
	{
		name: "Education and training",
		detail: "Practical AI, IoT, robotics and AgriTech capacity building.",
		image: BRAND_IMAGES.techTraining
	},
	{
		name: "Research institutions",
		detail: "Instrumentation, datasets and joint applied research.",
		image: BRAND_IMAGES.lab
	},
	{
		name: "Solar and energy",
		detail: "Solar powered technology supporting agricultural and IoT systems.",
		image: BRAND_IMAGES.solar
	},
	{
		name: "Agribusiness and cooperatives",
		detail: "Farm data, monitoring and technology adoption support.",
		image: BRAND_IMAGES.control
	}
];
var EXHIBITION_IMAGES = [
	{
		src: BRAND_IMAGES.exhibition1,
		caption: "Presenting the Sysmart Agro prototype to visitors at an agricultural technology exhibition"
	},
	{
		src: BRAND_IMAGES.exhibition2,
		caption: "Demonstrating live sensor readings from the Sysmart Agro controller"
	},
	{
		src: BRAND_IMAGES.exhibition3,
		caption: "Officials and guests visiting the SYLUTION exhibition stand"
	},
	{
		src: BRAND_IMAGES.exhibition4,
		caption: "Discussing smart agriculture technology with stakeholders on site"
	},
	{
		src: BRAND_IMAGES.exhibition5,
		caption: "SYLUTION team attending a technology and innovation conference"
	}
];
var GALLERY = [
	{
		src: BRAND_IMAGES.sysmart,
		category: "Sysmart Agro",
		caption: "Sysmart Agro field deployment and monitoring"
	},
	...EXHIBITION_IMAGES.map((e) => ({
		src: e.src,
		category: "Exhibitions",
		caption: e.caption
	})),
	{
		src: BRAND_IMAGES.iotLab,
		category: "IoT",
		caption: "Sensor node and connectivity testing"
	},
	{
		src: BRAND_IMAGES.pcb,
		category: "Electronics",
		caption: "Circuit board inspection and assembly"
	},
	{
		src: BRAND_IMAGES.ai,
		category: "AI",
		caption: "Agricultural data and model review"
	},
	{
		src: BRAND_IMAGES.robotics,
		category: "Robotics",
		caption: "Robotics and automation development"
	},
	{
		src: BRAND_IMAGES.device,
		category: "Products",
		caption: "IoT controller and sensor systems"
	},
	{
		src: BRAND_IMAGES.drone,
		category: "Drone",
		caption: "Agricultural drone technology for farm observation"
	},
	{
		src: BRAND_IMAGES.techTraining,
		category: "Training",
		caption: "Practical IoT and electronics training session"
	},
	{
		src: BRAND_IMAGES.training,
		category: "Training",
		caption: "Youth and women technology training"
	},
	{
		src: BRAND_IMAGES.solar,
		category: "Solar",
		caption: "Solar power supporting agricultural technology"
	},
	{
		src: BRAND_IMAGES.greenhouse,
		category: "Greenhouse",
		caption: "Greenhouse technology for controlled environment farming"
	},
	{
		src: BRAND_IMAGES.irrigation,
		category: "Irrigation",
		caption: "Drip and smart irrigation technology"
	},
	{
		src: BRAND_IMAGES.harvest,
		category: "Agriculture",
		caption: "Field and harvest activities"
	},
	{
		src: BRAND_IMAGES.lab,
		category: "Research",
		caption: "Research, testing and validation work"
	}
];
var GALLERY_CATEGORIES = [
	"All",
	"Exhibitions",
	"Sysmart Agro",
	"IoT",
	"Electronics",
	"AI",
	"Robotics",
	"Products",
	"Drone",
	"Training",
	"Solar",
	"Greenhouse",
	"Irrigation",
	"Agriculture",
	"Research"
];
var NEWS = [
	{
		slug: "sysmart-agro-active-development",
		title: "Sysmart Agro advances through active field development",
		date: "2026-06-18",
		category: "Projects",
		image: BRAND_IMAGES.sysmart,
		excerpt: "Our smart agriculture system is being actively developed and deployed with soil and climate sensing, smart irrigation control and live monitoring capabilities."
	},
	{
		slug: "iot-sensor-development",
		title: "New IoT sensor node under development",
		date: "2026-05-02",
		category: "Technology",
		image: BRAND_IMAGES.iotLab,
		excerpt: "Work continues on a low power node for soil, temperature, humidity and water level measurement in Nigerian farm conditions."
	},
	{
		slug: "agritech-training-sessions",
		title: "AgriTech and technology training sessions continue",
		date: "2026-03-27",
		category: "Training",
		image: BRAND_IMAGES.techTraining,
		excerpt: "Practical sessions in IoT, AI, modern agriculture and drone technology for youth, women, farmers and students."
	},
	{
		slug: "computer-vision-research",
		title: "Computer vision research for crop stress detection",
		date: "2026-02-11",
		category: "Research",
		image: BRAND_IMAGES.ai,
		excerpt: "An early research effort on image based detection of crop stress, intended to run on low cost edge hardware."
	},
	{
		slug: "drone-technology-programme",
		title: "Agricultural drone technology programme progresses",
		date: "2026-01-15",
		category: "Projects",
		image: BRAND_IMAGES.drone,
		excerpt: "Farm observation, mapping and monitoring workflows are being developed alongside practical training demonstrations."
	},
	{
		slug: "greenhouse-and-drip-irrigation",
		title: "Greenhouse and drip irrigation technology work",
		date: "2025-12-04",
		category: "AgriTech",
		image: BRAND_IMAGES.greenhouse,
		excerpt: "Controlled environment agriculture and efficient irrigation remain active areas of our technology development."
	}
];
var STATS = [
	{
		value: "AI",
		label: "Artificial intelligence foundation"
	},
	{
		value: "IoT",
		label: "Connected devices and sensing"
	},
	{
		value: "AgriTech",
		label: "Our main application area"
	},
	{
		value: "Kano",
		label: "Based at TIC, Farm Centre"
	}
];
var TRAINING_PROGRAMMES = [
	{
		title: "Artificial Intelligence",
		detail: "AI foundations, AI tools and agricultural data intelligence.",
		image: BRAND_IMAGES.ai
	},
	{
		title: "Internet of Things",
		detail: "Sensors, connected devices, monitoring systems and smart agriculture.",
		image: BRAND_IMAGES.iotLab
	},
	{
		title: "ESP32 and Arduino",
		detail: "Hands on microcontroller and sensor projects from zero to prototype.",
		image: BRAND_IMAGES.electronics
	},
	{
		title: "Modern Agriculture",
		detail: "Smart farming, precision agriculture and digital agriculture practices.",
		image: BRAND_IMAGES.greenhouse
	},
	{
		title: "Livestock Technology",
		detail: "Modern livestock management, monitoring and digital records.",
		image: BRAND_IMAGES.harvest
	},
	{
		title: "Robotics and Automation",
		detail: "Robotics, sensors, automation and practical projects.",
		image: BRAND_IMAGES.robotics
	},
	{
		title: "Drone Technology",
		detail: "Farm observation, mapping, monitoring and practical demonstrations.",
		image: BRAND_IMAGES.drone
	},
	{
		title: "Smart Irrigation",
		detail: "Sensor based irrigation, drip systems and water efficiency.",
		image: BRAND_IMAGES.irrigation
	},
	{
		title: "Youth and Women Empowerment",
		detail: "Dedicated sessions, equipment access and mentorship.",
		image: BRAND_IMAGES.training
	}
];
var FAQS = [
	{
		q: "What does SYLUTION do?",
		a: "SYLUTION LTD is a Nigerian technology innovation company applying Artificial Intelligence, Internet of Things, electronics, robotics, drone technology and smart technologies to modern agriculture and real world problems. AgriTech is our main application area."
	},
	{
		q: "Where is SYLUTION based?",
		a: "Our base is the Technology Incubation Centre (TIC), Farm Centre, Kano State, Nigeria."
	},
	{
		q: "Do you build hardware or only software?",
		a: "Both. We design circuits and sensor systems, write firmware, build prototypes and develop the dashboards and software that sit on top of them."
	},
	{
		q: "What is Sysmart Agro?",
		a: "Sysmart Agro is our flagship AI and IoT powered smart agriculture project, combining field sensors, a smart controller, data collection, AI analysis and a monitoring dashboard. It is currently in active development and field deployment."
	},
	{
		q: "Are your products commercially available?",
		a: "Our projects are in active development, testing, or field deployment stages. We label the status of every project honestly and provide updates as they advance through our engineering pipeline."
	},
	{
		q: "Who can join your training programmes?",
		a: "Youth, women, farmers, students and agripreneurs. Training covers AI, IoT, modern agriculture, livestock technology, robotics and drone technology."
	},
	{
		q: "How do I start a project or partnership with SYLUTION?",
		a: "Contact us with a short description of your organisation and objective. We respond and usually begin with a technical discussion."
	}
];
var CAREERS = [
	{
		role: "Embedded Systems Engineer",
		type: "Full-time",
		location: "Kano, Nigeria",
		team: "Electronics"
	},
	{
		role: "IoT Solutions Engineer",
		type: "Full-time",
		location: "Kano, Nigeria",
		team: "IoT"
	},
	{
		role: "Machine Learning Engineer",
		type: "Hybrid",
		location: "Abuja / Remote",
		team: "AI Research"
	},
	{
		role: "PCB Design Engineer",
		type: "Full-time",
		location: "Kano, Nigeria",
		team: "Hardware"
	},
	{
		role: "Automation and Controls Engineer",
		type: "Full-time",
		location: "Field-based",
		team: "Industrial"
	},
	{
		role: "Full Stack Software Engineer",
		type: "Hybrid",
		location: "Remote",
		team: "Platform"
	},
	{
		role: "Drone Pilot and Instructor",
		type: "Full-time",
		location: "Kano, Nigeria",
		team: "Academy"
	},
	{
		role: "Partnerships Manager",
		type: "Full-time",
		location: "Kano, Nigeria",
		team: "Growth"
	}
];
var PROJECTS = [
	{
		slug: "sysmart-agro",
		name: "Sysmart Agro",
		category: "Flagship project",
		status: "Active Project",
		image: BRAND_IMAGES.sysmart,
		summary: "An IoT powered smart agriculture platform combining a field controller, soil and climate sensing and remote irrigation control."
	},
	{
		slug: "smart-irrigation-controller",
		name: "Smart irrigation controller",
		category: "Hardware",
		status: "Testing",
		image: BRAND_IMAGES.irrigation,
		summary: "Solar powered controller that automates pumps and valves from soil moisture thresholds."
	},
	{
		slug: "environmental-monitoring-node",
		name: "Environmental monitoring node",
		category: "IoT research",
		status: "Research phase",
		image: BRAND_IMAGES.iotLab,
		summary: "Low power node for temperature, humidity, air quality and water level measurement."
	},
	{
		slug: "energy-monitoring-unit",
		name: "Energy monitoring unit",
		category: "Electronics",
		status: "Under development",
		image: BRAND_IMAGES.solar,
		summary: "Metering board for solar, grid and generator systems with remote reporting."
	},
	{
		slug: "educational-robotics-kit",
		name: "Educational robotics kit",
		category: "Academy",
		status: "Under development",
		image: BRAND_IMAGES.robotics,
		summary: "Teaching kit for schools and universities covering microcontrollers, sensors and actuation."
	},
	{
		slug: "computer-vision-crop-inspection",
		name: "Computer vision crop inspection",
		category: "AI research",
		status: "Research phase",
		image: BRAND_IMAGES.ai,
		summary: "Image based detection of crop stress, running on edge hardware without internet."
	}
];
var SYSMART_FLOW = [
	{
		step: "Sensors",
		detail: "Soil moisture, temperature, humidity and water level sensing in the field."
	},
	{
		step: "IoT controller",
		detail: "A solar capable controller reads the sensors and drives pumps and valves."
	},
	{
		step: "Connectivity",
		detail: "GSM and wireless links move readings out of the farm."
	},
	{
		step: "Data collection",
		detail: "Readings are timestamped and queued, including when the network drops."
	},
	{
		step: "Cloud database",
		detail: "Field data is stored as a continuous record per farm and per block."
	},
	{
		step: "AI analysis",
		detail: "Models study the readings to flag stress, waste and irrigation needs."
	},
	{
		step: "Dashboard",
		detail: "The farmer and our team see live status, history and alerts."
	},
	{
		step: "Smart decision",
		detail: "Irrigation and control actions run automatically or on approval."
	}
];
var AGRITECH_AREAS = [
	"Smart Agriculture",
	"Precision Agriculture",
	"Digital Agriculture",
	"Smart Irrigation",
	"Greenhouse Technology",
	"Drip Irrigation",
	"Agricultural Monitoring",
	"Livestock Technology",
	"Farm Automation",
	"Agricultural Data",
	"Modern Farming"
];
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-B0yD2mue.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
var styles_default = "/assets/styles-Bs9XEmLV.css";
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var MAIN = [
	{
		to: "/",
		key: "nav.home"
	},
	{
		to: "/about",
		key: "nav.about"
	},
	{
		to: "/iot",
		key: "nav.iot"
	},
	{
		to: "/platforms",
		key: "nav.platforms"
	},
	{
		to: "/sysmart-agro",
		key: "nav.sysmart"
	},
	{
		to: "/projects",
		key: "nav.projects"
	},
	{
		to: "/ai",
		key: "nav.ai"
	},
	{
		to: "/electronics",
		key: "nav.electronics"
	},
	{
		to: "/products",
		key: "nav.products"
	},
	{
		to: "/industries",
		key: "nav.industries"
	},
	{
		to: "/research",
		key: "nav.research"
	},
	{
		to: "/training",
		key: "nav.training"
	},
	{
		to: "/gallery",
		key: "nav.gallery"
	},
	{
		to: "/news",
		key: "nav.news"
	},
	{
		to: "/partners",
		key: "nav.partners"
	},
	{
		to: "/investors",
		key: "nav.investors"
	},
	{
		to: "/careers",
		key: "nav.careers"
	}
];
var PRIMARY = [
	"/platforms",
	"/iot",
	"/ai",
	"/electronics",
	"/products",
	"/sysmart-agro"
];
var HIDDEN_FROM_MORE = ["/", "/about"];
function Nav() {
	const { t, lang, setLang } = useLang();
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [solOpen, setSolOpen] = (0, import_react.useState)(false);
	const [moreOpen, setMoreOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-all duration-500", scrolled ? "glass shadow-[0_10px_30px_-24px_oklch(0.2_0.02_265/0.5)]" : "bg-transparent"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x flex h-16 items-center justify-between gap-3 lg:h-[4.5rem]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex shrink-0 items-center gap-2.5 rounded-full transition-opacity hover:opacity-90",
					onClick: () => setOpen(false),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: LOGO_SRC,
						alt: "SYLUTION logo",
						className: "h-9 w-9 rounded-md object-contain lg:h-11 lg:w-11"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-base font-extrabold tracking-tight lg:text-lg",
						children: "SYLUTION"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-0.5 xl:flex",
					children: [
						MAIN.slice(0, 2).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLink, {
							to: item.to,
							label: t(item.key)
						}, item.to)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							onMouseEnter: () => setSolOpen(true),
							onMouseLeave: () => setSolOpen(false),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/solutions",
								"aria-expanded": solOpen,
								className: "flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent/60 hover:text-foreground",
								children: [t("nav.solutions"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("h-3.5 w-3.5 transition-transform duration-300", solOpen && "rotate-180") })]
							}), solOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute left-1/2 top-full w-[46rem] -translate-x-1/2 pt-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-3 gap-1 rounded-3xl border border-border bg-popover/95 p-3 shadow-luxe backdrop-blur-xl animate-in fade-in-0 zoom-in-95 duration-200",
									children: SOLUTIONS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/solutions/$slug",
										params: { slug: s.slug },
										className: "rounded-2xl px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
										children: s.title
									}, s.slug))
								})
							})]
						}),
						MAIN.filter((i) => PRIMARY.includes(i.to)).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLink, {
							to: item.to,
							label: t(item.key)
						}, item.to)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							onMouseEnter: () => setMoreOpen(true),
							onMouseLeave: () => setMoreOpen(false),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								"aria-expanded": moreOpen,
								className: "flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent/60 hover:text-foreground",
								children: [t("nav.more"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("h-3.5 w-3.5 transition-transform duration-300", moreOpen && "rotate-180") })]
							}), moreOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute right-0 top-full w-56 pt-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid gap-1 rounded-3xl border border-border bg-popover/95 p-3 shadow-luxe backdrop-blur-xl animate-in fade-in-0 zoom-in-95 duration-200",
									children: MAIN.filter((i) => !PRIMARY.includes(i.to) && !HIDDEN_FROM_MORE.includes(i.to)).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: item.to,
										className: "rounded-2xl px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
										children: t(item.key)
									}, item.to))
								})
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hidden items-center gap-0.5 rounded-full border border-border px-1 py-1 md:flex",
							children: LANGS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setLang(l.code),
								className: cn("rounded-full px-2.5 py-1 text-[0.68rem] font-bold tracking-wide transition-all duration-300", lang === l.code ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"),
								"aria-label": l.label,
								children: l.short
							}, l.code))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							className: "btn-base btn-primary hidden px-5 py-2.5 lg:inline-flex",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), t("nav.contact")]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border bg-card/70 backdrop-blur transition-colors hover:bg-accent xl:hidden",
							onClick: () => setOpen((v) => !v),
							"aria-expanded": open,
							"aria-label": open ? "Close menu" : "Open menu",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
						})
					]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "glass max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain border-t border-border animate-in fade-in-0 slide-in-from-top-2 duration-300 xl:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x space-y-1 py-5",
				children: [
					[...MAIN, {
						to: "/contact",
						key: "nav.contact"
					}].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						onClick: () => setOpen(false),
						className: "flex min-h-11 items-center rounded-xl px-3 text-[0.975rem] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground active:bg-accent",
						children: t(item.key)
					}, item.to)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pt-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow px-3 pb-2",
							children: t("nav.solutions")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 gap-1",
							children: SOLUTIONS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/solutions/$slug",
								params: { slug: s.slug },
								onClick: () => setOpen(false),
								className: "flex min-h-11 items-center rounded-xl px-3 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
								children: s.title
							}, s.slug))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-1 pt-4",
						children: LANGS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setLang(l.code),
							className: cn("min-h-11 flex-1 rounded-full border border-border text-xs font-bold transition-colors", lang === l.code ? "bg-primary text-primary-foreground" : "text-muted-foreground"),
							children: l.short
						}, l.code))
					})
				]
			})
		})]
	});
}
function NavLink({ to, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		activeOptions: { exact: to === "/" },
		activeProps: { className: "text-foreground" },
		inactiveProps: { className: "text-muted-foreground" },
		className: "rounded-full px-3 py-2 text-sm font-medium transition-colors hover:bg-accent/60 hover:text-foreground",
		children: label
	});
}
function Reveal({ children, delay = 0, y = 28, className }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-80px"
	});
	const reduce = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		ref,
		className,
		initial: {
			opacity: 0,
			y: reduce ? 0 : y
		},
		animate: inView ? {
			opacity: 1,
			y: 0
		} : void 0,
		transition: {
			duration: reduce ? .001 : .7,
			delay: reduce ? 0 : delay,
			ease: [
				.22,
				.7,
				.25,
				1
			]
		},
		children
	});
}
var NEEDS = [
	"IoT deployment",
	"Artificial intelligence",
	"Electronics and PCB",
	"Industrial automation",
	"Drone technology",
	"Renewable energy",
	"Training academy",
	"Partnership or investment",
	"Other"
];
function LeadForm() {
	const [sending, setSending] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "lead",
		className: "section-y border-t border-border bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Talk to an engineer"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-5 text-[1.75rem] font-bold leading-[1.15] sm:text-4xl",
					children: "Tell us what you need, we reply within two working days"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-base leading-relaxed text-muted-foreground",
					children: "Share a few details about your site, process or product idea. Our engineering team reviews every enquiry and comes back with a technical direction, not a sales script."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-8 space-y-3.5 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 shrink-0 text-primary" }),
								" ",
								CONTACT.email
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 shrink-0 text-primary" }),
								" ",
								CONTACT.phones[0]
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 shrink-0 text-primary" }), " Your details are used only to answer your enquiry."]
						})
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .12,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "card-luxe space-y-5 p-6 sm:p-8 lg:p-10",
					onSubmit: (e) => {
						e.preventDefault();
						const form = e.currentTarget;
						const fd = new FormData(form);
						const name = String(fd.get("lead-name") ?? "").trim();
						const email = String(fd.get("lead-email") ?? "").trim();
						const phone = String(fd.get("lead-phone") ?? "").trim();
						const need = String(fd.get("lead-need") ?? "").trim();
						const message = String(fd.get("lead-message") ?? "").trim();
						if (name.length < 2 || name.length > 100) {
							toast.error("Please enter your full name.");
							return;
						}
						if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) {
							toast.error("Please enter a valid email address.");
							return;
						}
						if (phone.length < 7 || phone.length > 25) {
							toast.error("Please enter a valid phone number.");
							return;
						}
						if (message.length > 1e3) {
							toast.error("Please shorten your message.");
							return;
						}
						setSending(true);
						const body = [
							`Name: ${name}`,
							`Email: ${email}`,
							`Phone: ${phone}`,
							`Interest: ${need}`,
							"",
							message || "(no additional details)"
						].join("\n");
						const href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(`New enquiry from ${name} (${need})`)}&body=${encodeURIComponent(body)}`;
						window.setTimeout(() => {
							setSending(false);
							form.reset();
							window.location.href = href;
							toast.success("Enquiry ready to send", { description: "Your email app is opening with the details filled in for our team." });
						}, 500);
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl font-bold tracking-tight",
							children: "Request a callback"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadField, {
								label: "Full name",
								name: "lead-name",
								autoComplete: "name",
								maxLength: 100
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadField, {
								label: "Email",
								name: "lead-email",
								type: "email",
								autoComplete: "email",
								maxLength: 255
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadField, {
								label: "Phone number",
								name: "lead-phone",
								type: "tel",
								autoComplete: "tel",
								maxLength: 25
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "lead-need",
								className: "field-label",
								children: "What do you need"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								id: "lead-need",
								name: "lead-need",
								className: "field-input",
								children: NEEDS.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: n }, n))
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "lead-message",
							className: "field-label",
							children: "Details (optional)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							id: "lead-message",
							name: "lead-message",
							rows: 3,
							maxLength: 1e3,
							placeholder: "Site, process, quantity or objective.",
							className: "field-input"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							disabled: sending,
							className: "btn-base btn-primary mt-2 w-full",
							children: [
								sending ? "Preparing…" : "Send my enquiry",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" })
							]
						})
					]
				})
			})]
		})
	});
}
function LeadField({ label, name, type = "text", autoComplete, maxLength }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		htmlFor: name,
		className: "field-label",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		id: name,
		name,
		type,
		required: true,
		autoComplete,
		maxLength,
		className: "field-input"
	})] });
}
var SOCIAL_ICONS = {
	Facebook,
	Instagram,
	LinkedIn: Linkedin,
	TikTok: Music2,
	YouTube: Youtube,
	X: Twitter,
	WhatsApp: MessageCircle
};
function Footer() {
	const { t } = useLang();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative mt-24 overflow-hidden border-t border-border bg-surface",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute -top-40 left-1/2 h-80 w-[46rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x relative py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: LOGO_SRC,
								alt: "SYLUTION logo",
								className: "h-12 w-12 rounded-md object-contain"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-xl font-extrabold tracking-tight",
								children: "SYLUTION"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground",
							children: t("footer.about")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 flex flex-wrap gap-2",
							children: CONTACT.socials.map((s) => {
								const Icon = SOCIAL_ICONS[s.name];
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: s.href,
									target: "_blank",
									rel: "noreferrer noopener",
									"aria-label": s.name,
									className: "grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
								}, s.name);
							})
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
						title: t("footer.quick"),
						links: [
							{
								label: "Home",
								to: "/"
							},
							{
								label: "About",
								to: "/about"
							},
							{
								label: "Products & Platforms",
								to: "/platforms"
							},
							{
								label: "Sysmart Agro",
								to: "/sysmart-agro"
							},
							{
								label: "Projects",
								to: "/projects"
							},
							{
								label: "Partners",
								to: "/partners"
							},
							{
								label: "Investors",
								to: "/investors"
							},
							{
								label: "Gallery",
								to: "/gallery"
							},
							{
								label: "News",
								to: "/news"
							},
							{
								label: "Careers",
								to: "/careers"
							},
							{
								label: "Contact",
								to: "/contact"
							},
							{
								label: "FAQ",
								to: "/faq"
							}
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
						title: t("footer.solutions"),
						links: SOLUTIONS.slice(0, 8).map((s) => ({
							label: s.title,
							to: "/solutions/$slug",
							params: { slug: s.slug }
						}))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-sm font-bold uppercase tracking-[0.2em]",
							children: t("footer.contact")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-5 space-y-3 text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: CONTACT.address })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `mailto:${CONTACT.email}`,
										className: "hover:text-foreground",
										children: CONTACT.email
									})]
								}),
								CONTACT.phones.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `tel:${p}`,
										className: "hover:text-foreground",
										children: p
									})]
								}, p))
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "mt-6",
							onSubmit: (e) => {
								e.preventDefault();
								e.currentTarget.reset();
								toast.success("Subscribed", { description: "You are on the SYLUTION newsletter list." });
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "newsletter",
								className: "eyebrow",
								children: "Newsletter"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex overflow-hidden rounded-full border border-border bg-background",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "newsletter",
									type: "email",
									required: true,
									placeholder: "Your email address",
									className: "min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm outline-none placeholder:text-muted-foreground"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									"aria-label": "Subscribe",
									className: "grid w-12 place-items-center bg-primary text-primary-foreground transition-opacity hover:opacity-90",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" })
								})]
							})]
						})
					] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["© 2026 SYLUTION LTD. ", t("footer.rights")] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/privacy",
							className: "hover:text-foreground",
							children: "Privacy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/terms",
							className: "hover:text-foreground",
							children: "Terms"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/faq",
							className: "hover:text-foreground",
							children: "FAQ"
						})
					]
				})]
			})]
		})]
	});
}
function FooterCol({ title, links }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
		className: "font-display text-sm font-bold uppercase tracking-[0.2em]",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-5 space-y-2.5 text-sm",
		children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: l.to,
			params: l.params,
			className: "text-muted-foreground transition-colors hover:text-foreground",
			children: l.label
		}) }, l.label))
	})] });
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "btn-base btn-primary",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "btn-base btn-primary",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "btn-base btn-ghost",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$27 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "SYLUTION | IoT, AI and Electronics Technology Company" },
			{
				name: "description",
				content: "SYLUTION is an Internet of Things, Artificial Intelligence, Electronics and Technology Innovation company based at TIC Kano, Nigeria, serving 15 industries."
			},
			{
				name: "author",
				content: "SYLUTION"
			},
			{
				name: "theme-color",
				content: "#f2f1ee"
			},
			{
				property: "og:site_name",
				content: "SYLUTION"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				property: "og:title",
				content: "SYLUTION | IoT, AI and Electronics Technology Company"
			},
			{
				name: "twitter:title",
				content: "SYLUTION | IoT, AI and Electronics Technology Company"
			},
			{
				property: "og:description",
				content: "SYLUTION is an Internet of Things, Artificial Intelligence, Electronics and Technology Innovation company based at TIC Kano, Nigeria, serving 15 industries."
			},
			{
				name: "twitter:description",
				content: "SYLUTION is an Internet of Things, Artificial Intelligence, Electronics and Technology Innovation company based at TIC Kano, Nigeria, serving 15 industries."
			},
			{
				property: "og:image",
				content: "/brand/sylution-logo.webp"
			},
			{
				name: "twitter:image",
				content: "/brand/sylution-logo.webp"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Manrope:wght@400;500;600;700&display=swap"
			},
			{
				rel: "preconnect",
				href: "https://images.unsplash.com"
			},
			{
				rel: "icon",
				href: "/brand/sylution-logo.webp",
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$27.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LanguageProvider, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollTop, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteProgress, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main",
				className: "min-h-screen",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTransition, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadForm, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingWhatsApp, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
				position: "top-right",
				richColors: true
			})
		] })
	});
}
function RouteProgress() {
	const pending = useRouterState({ select: (s) => s.status === "pending" });
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setMounted(true), []);
	if (!mounted) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `h-full origin-left bg-primary transition-[transform,opacity] duration-500 ease-out ${pending ? "scale-x-90 opacity-100" : "scale-x-0 opacity-0"}` })
	});
}
function PageTransition({ children }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
		mode: "wait",
		initial: false,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				opacity: 0,
				y: 12
			},
			animate: {
				opacity: 1,
				y: 0
			},
			transition: {
				duration: .45,
				ease: [
					.22,
					.7,
					.25,
					1
				]
			},
			children
		}, pathname)
	});
}
function ScrollTop() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	(0, import_react.useEffect)(() => {
		window.scrollTo({
			top: 0,
			behavior: "instant"
		});
	}, [pathname]);
	return null;
}
function FloatingWhatsApp() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: `https://wa.me/${CONTACT.whatsapp}`,
		target: "_blank",
		rel: "noreferrer noopener",
		"aria-label": "Chat with SYLUTION on WhatsApp",
		className: "fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-glow transition-transform duration-300 hover:scale-110 active:scale-95",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-6 w-6" })
	});
}
var $$splitComponentImporter$25 = () => import("./routes-Bq--AqHF.mjs");
var Route$26 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "SYLUTION LTD | AgriTech Innovation Powered by AI, IoT & Smart Technology" },
		{
			name: "description",
			content: "SYLUTION LTD is a Nigerian technology innovation company applying AI, IoT, electronics, robotics, drone and smart technology to modern agriculture and real world problems."
		},
		{
			property: "og:title",
			content: "SYLUTION LTD | AgriTech Innovation Powered by AI, IoT & Smart Technology"
		},
		{
			property: "og:description",
			content: "AI, IoT and engineering applied to AgriTech, from our base at the Technology Incubation Centre, Farm Centre, Kano, Nigeria."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$25, "component")
});
var $$splitComponentImporter$24 = () => import("./about-IaLivGO3.mjs");
var Route$25 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About SYLUTION, Our Story, Vision, Mission and Values" },
		{
			name: "description",
			content: "The story of SYLUTION: an African innovation company at TIC Kano building agricultural technology, with our vision, mission, core values and leadership approach."
		},
		{
			property: "og:title",
			content: "About SYLUTION"
		},
		{
			property: "og:description",
			content: "Our story, vision, mission and core values as an African agricultural innovation company."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$24, "component")
});
var $$splitComponentImporter$23 = () => import("./ai-DsfPJIyT.mjs");
var Route$24 = createFileRoute("/ai")({
	head: () => ({ meta: [
		{ title: "Artificial Intelligence Engineering | SYLUTION" },
		{
			name: "description",
			content: "Computer vision, machine learning, and predictive analytics under research by SYLUTION to enhance the intelligence of agricultural and connected systems."
		},
		{
			property: "og:title",
			content: "Artificial Intelligence at SYLUTION"
		},
		{
			property: "og:description",
			content: "Models trained on locally collected data, with research into edge and cloud deployment."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$23, "component")
});
var $$splitComponentImporter$22 = () => import("./careers-u88KK-c0.mjs");
var Route$23 = createFileRoute("/careers")({
	head: () => ({ meta: [
		{ title: "Careers, Work at SYLUTION in Kano, Nigeria" },
		{
			name: "description",
			content: "Join SYLUTION. Open roles in embedded systems, machine learning, agronomy, drone instruction, solar installation and partnerships in Kano, Nigeria."
		},
		{
			property: "og:title",
			content: "Careers at SYLUTION"
		},
		{
			property: "og:description",
			content: "Build agricultural technology that reaches real farms across Africa."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$22, "component")
});
var PDF_PATH = "/sylution-company-profile.pdf";
var $$splitComponentImporter$21 = () => import("./company-profile-Dx9uWt9I.mjs");
var Route$22 = createFileRoute("/company-profile")({
	head: () => ({
		meta: [
			{ title: "SYLUTION Company Profile PDF | IoT, AI and Electronics" },
			{
				name: "description",
				content: "Download the SYLUTION company profile PDF: IoT first engineering, artificial intelligence, electronics, capabilities, industries served and contact details in Kano, Nigeria."
			},
			{
				property: "og:title",
				content: "Download the SYLUTION company profile"
			},
			{
				property: "og:description",
				content: "A five page profile of SYLUTION, an IoT, AI and electronics engineering company operating from the Technology Incubation Centre, Kano."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "DigitalDocument",
				name: "SYLUTION Company Profile",
				description: "Company profile of SYLUTION, an Internet of Things, artificial intelligence and electronics engineering company based in Kano, Nigeria.",
				fileFormat: "application/pdf",
				url: PDF_PATH,
				inLanguage: "en",
				publisher: {
					"@type": "Organization",
					name: "SYLUTION"
				}
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$21, "component")
});
var $$splitComponentImporter$20 = () => import("./contact-DIbuEE4E.mjs");
var Route$21 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact SYLUTION, TIC Kano, Nigeria" },
		{
			name: "description",
			content: "Contact SYLUTION at the Technology Incubation Centre, Form Center, Kano State, Nigeria. Email officialsylution@gmail.com or call +2349117957946."
		},
		{
			property: "og:title",
			content: "Contact SYLUTION"
		},
		{
			property: "og:description",
			content: "Talk to our team about projects, partnerships, training and financing."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$20, "component")
});
var $$splitComponentImporter$19 = () => import("./electronics-D1geB7Si.mjs");
var Route$20 = createFileRoute("/electronics")({
	head: () => ({ meta: [
		{ title: "Electronics Engineering and PCB Design | SYLUTION" },
		{
			name: "description",
			content: "PCB design, circuit design, embedded hardware, sensors, firmware and device manufacturing engineered and assembled at the SYLUTION workshop in Kano, Nigeria."
		},
		{
			property: "og:title",
			content: "Electronics Engineering at SYLUTION"
		},
		{
			property: "og:description",
			content: "From schematic to production: boards, firmware, enclosures and testing under one roof."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$19, "component")
});
var $$splitComponentImporter$18 = () => import("./faq-BWTRCOQx.mjs");
var Route$19 = createFileRoute("/faq")({
	head: () => ({
		meta: [
			{ title: "FAQ, Frequently Asked Questions | SYLUTION" },
			{
				name: "description",
				content: "Answers about SYLUTION: where we are based, who we serve, how our technology works offline, institutional partnerships and how to start a project."
			},
			{
				property: "og:title",
				content: "FAQ, SYLUTION"
			},
			{
				property: "og:description",
				content: "Common questions about our solutions, projects and partnerships."
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: FAQS.map((f) => ({
					"@type": "Question",
					name: f.q,
					acceptedAnswer: {
						"@type": "Answer",
						text: f.a
					}
				}))
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$18, "component")
});
var $$splitComponentImporter$17 = () => import("./gallery-BwmVb-jp.mjs");
var Route$18 = createFileRoute("/gallery")({
	head: () => ({ meta: [
		{ title: "Gallery, SYLUTION Projects, Drones, Farms and Labs" },
		{
			name: "description",
			content: "Photographs from SYLUTION prototypes, technology development, exhibitions, training sessions and agricultural activities in Nigeria."
		},
		{
			property: "og:title",
			content: "Gallery, SYLUTION"
		},
		{
			property: "og:description",
			content: "Real photographs from our prototypes, workspace, exhibitions and training sessions."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
var $$splitComponentImporter$16 = () => import("./industries-DHG_HuyK.mjs");
var Route$17 = createFileRoute("/industries")({
	head: () => ({ meta: [
		{ title: "Industries We Serve | SYLUTION Technology" },
		{
			name: "description",
			content: "SYLUTION is developing IoT, AI and electronics solutions for agriculture, energy, and connected environments."
		},
		{
			property: "og:title",
			content: "Industries served by SYLUTION"
		},
		{
			property: "og:description",
			content: "Technology is our business. We are engineering connected systems for diverse applications."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var $$splitComponentImporter$15 = () => import("./investors-kZI84nbz.mjs");
var Route$16 = createFileRoute("/investors")({
	head: () => ({ meta: [
		{ title: "Investors | SYLUTION IoT and Electronics Engineering" },
		{
			name: "description",
			content: "Investor information for SYLUTION, an IoT, AI and electronics engineering company in Kano, Nigeria: what we build, where we are today and how to request a conversation."
		},
		{
			property: "og:title",
			content: "Invest in SYLUTION"
		},
		{
			property: "og:description",
			content: "An early stage African technology company building IoT hardware, AI and electronics in house. Company profile available for download."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./iot-p6mNWnFj.mjs");
var Route$15 = createFileRoute("/iot")({
	head: () => ({ meta: [
		{ title: "Internet of Things (IoT) Solutions | SYLUTION" },
		{
			name: "description",
			content: "SYLUTION designs and develops IoT systems, including gateways, edge controllers, and cloud monitoring platforms for agriculture and demanding environments."
		},
		{
			property: "og:title",
			content: "Internet of Things at SYLUTION"
		},
		{
			property: "og:description",
			content: "Connected sensors, gateways, edge computing and cloud dashboards engineered in Kano, Nigeria for demanding environments."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./loans-H8vVf_ga.mjs");
var Route$14 = createFileRoute("/loans")({
	head: () => ({ meta: [
		{ title: "Loan Application, Coming Soon | SYLUTION" },
		{
			name: "description",
			content: "SYLUTION is building an equipment and input financing application for farmers and agribusinesses, in partnership with banks and development funders."
		},
		{
			property: "og:title",
			content: "Loan Application, Coming Soon | SYLUTION"
		},
		{
			property: "og:description",
			content: "Farm technology financing designed with banks and development partners."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./marketplace-Cng3x7FH.mjs");
var Route$13 = createFileRoute("/marketplace")({
	head: () => ({ meta: [
		{ title: "Marketplace, Coming Soon | SYLUTION" },
		{
			name: "description",
			content: "The SYLUTION Marketplace will connect farmers with verified equipment, inputs, spare parts and buyers. Launching soon from Kano, Nigeria."
		},
		{
			property: "og:title",
			content: "SYLUTION Marketplace, Coming Soon"
		},
		{
			property: "og:description",
			content: "Verified agricultural equipment, inputs and buyers in one trusted platform."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./news-BIRIkoSp.mjs");
var Route$12 = createFileRoute("/news")({
	head: () => ({ meta: [
		{ title: "News, SYLUTION Announcements and Projects" },
		{
			name: "description",
			content: "Announcements, project milestones, research results and partnership news from SYLUTION, the agricultural innovation company based in Kano, Nigeria."
		},
		{
			property: "og:title",
			content: "News, SYLUTION"
		},
		{
			property: "og:description",
			content: "Project milestones, research results and partnerships from SYLUTION."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./partners-DfzN2Cz0.mjs");
var Route$11 = createFileRoute("/partners")({
	head: () => ({ meta: [
		{ title: "Partners and Collaboration | SYLUTION" },
		{
			name: "description",
			content: "Partner with SYLUTION on IoT, AI and electronics engineering: universities, research institutions, industry, government programmes, NGOs and technology suppliers."
		},
		{
			property: "og:title",
			content: "Partner with SYLUTION"
		},
		{
			property: "og:description",
			content: "Collaboration pathways for universities, industry, government, NGOs and suppliers working with an IoT and electronics engineering company in Kano, Nigeria."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./platforms-BsiwAzRb.mjs");
var Route$10 = createFileRoute("/platforms")({
	head: () => ({
		meta: [
			{ title: "Products & Technology Platforms | SYLUTION LTD" },
			{
				name: "description",
				content: "Sysmart Agro, SYLUTION Academy, SYLUTION IoT and SYLUTION AI are the products, platforms and programmes operating under SYLUTION LTD."
			},
			{
				property: "og:title",
				content: "Products & Technology Platforms | SYLUTION LTD"
			},
			{
				property: "og:description",
				content: "The SYLUTION ecosystem: one Nigerian innovation company, four technology platforms."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://www.sylution.com.ng/platforms"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./privacy-Deut7AUz.mjs");
var Route$9 = createFileRoute("/privacy")({
	head: () => ({ meta: [
		{ title: "Privacy Policy, SYLUTION" },
		{
			name: "description",
			content: "How SYLUTION collects, uses, stores and protects personal and farm data across our website, applications and field deployments."
		},
		{
			property: "og:title",
			content: "Privacy Policy, SYLUTION"
		},
		{
			property: "og:description",
			content: "Our commitments on personal data, farm data and security."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./products-8pNCYv3P.mjs");
var Route$8 = createFileRoute("/products")({
	head: () => ({ meta: [
		{ title: "Technology Products and Devices | SYLUTION" },
		{
			name: "description",
			content: "The SYLUTION product catalogue: IoT controllers, smart sensors, irrigation units, industrial controllers, energy monitors, trackers and research projects."
		},
		{
			property: "og:title",
			content: "SYLUTION Products"
		},
		{
			property: "og:description",
			content: "Connected devices designed and developed in Nigeria."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./projects-Ba4LnxbK.mjs");
var Route$7 = createFileRoute("/projects")({
	head: () => ({ meta: [
		{ title: "Projects | SYLUTION IoT, AI and Electronics Engineering" },
		{
			name: "description",
			content: "Current development and research projects at SYLUTION, including the Sysmart Agro smart agriculture platform, environmental monitoring nodes and educational robotics."
		},
		{
			property: "og:title",
			content: "SYLUTION projects, from research to active development"
		},
		{
			property: "og:description",
			content: "An honest view of what SYLUTION is building: active projects, research work and systems under development in Kano, Nigeria."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./research-PfY_3ajb.mjs");
var Route$6 = createFileRoute("/research")({
	head: () => ({ meta: [
		{ title: "Research & Development, SYLUTION Innovation Centre" },
		{
			name: "description",
			content: "Inside the SYLUTION Innovation Centre in Kano: AI, robotics, IoT, engineering, electronics, testing, prototype development and future agricultural projects."
		},
		{
			property: "og:title",
			content: "Research & Development, SYLUTION Innovation Centre"
		},
		{
			property: "og:description",
			content: "AI, robotics, IoT, electronics and prototype development for African agriculture."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var BASE_URL = "";
var Route$5 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...[
			{
				path: "/",
				changefreq: "weekly",
				priority: "1.0"
			},
			{
				path: "/platforms",
				changefreq: "monthly",
				priority: "0.9"
			},
			{
				path: "/about",
				changefreq: "monthly",
				priority: "0.8"
			},
			{
				path: "/iot",
				changefreq: "weekly",
				priority: "0.95"
			},
			{
				path: "/ai",
				changefreq: "monthly",
				priority: "0.9"
			},
			{
				path: "/electronics",
				changefreq: "monthly",
				priority: "0.9"
			},
			{
				path: "/products",
				changefreq: "weekly",
				priority: "0.85"
			},
			{
				path: "/company-profile",
				changefreq: "monthly",
				priority: "0.7"
			},
			{
				path: "/sysmart-agro",
				changefreq: "weekly",
				priority: "0.95"
			},
			{
				path: "/projects",
				changefreq: "weekly",
				priority: "0.85"
			},
			{
				path: "/partners",
				changefreq: "monthly",
				priority: "0.7"
			},
			{
				path: "/investors",
				changefreq: "monthly",
				priority: "0.7"
			},
			{
				path: "/industries",
				changefreq: "monthly",
				priority: "0.8"
			},
			{
				path: "/solutions",
				changefreq: "weekly",
				priority: "0.9"
			},
			...SOLUTIONS.map((s) => ({
				path: `/solutions/${s.slug}`,
				changefreq: "monthly",
				priority: "0.7"
			})),
			{
				path: "/research",
				changefreq: "monthly",
				priority: "0.7"
			},
			{
				path: "/training",
				changefreq: "monthly",
				priority: "0.7"
			},
			{
				path: "/gallery",
				changefreq: "monthly",
				priority: "0.6"
			},
			{
				path: "/news",
				changefreq: "weekly",
				priority: "0.7"
			},
			{
				path: "/marketplace",
				changefreq: "monthly",
				priority: "0.5"
			},
			{
				path: "/loans",
				changefreq: "monthly",
				priority: "0.5"
			},
			{
				path: "/careers",
				changefreq: "weekly",
				priority: "0.6"
			},
			{
				path: "/faq",
				changefreq: "monthly",
				priority: "0.5"
			},
			{
				path: "/contact",
				changefreq: "monthly",
				priority: "0.8"
			},
			{
				path: "/privacy",
				changefreq: "yearly",
				priority: "0.3"
			},
			{
				path: "/terms",
				changefreq: "yearly",
				priority: "0.3"
			}
		].map((e) => [
			`  <url>`,
			`    <loc>${BASE_URL}${e.path}</loc>`,
			e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
			e.priority ? `    <priority>${e.priority}</priority>` : null,
			`  </url>`
		].filter(Boolean).join("\n")),
		`</urlset>`
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$4 = () => import("./sysmart-agro-B1wamwJr.mjs");
var Route$4 = createFileRoute("/sysmart-agro")({
	head: () => ({ meta: [
		{ title: "Sysmart Agro | Flagship IoT Project by SYLUTION" },
		{
			name: "description",
			content: "Sysmart Agro is the flagship IoT smart agriculture project of SYLUTION: a field controller with soil and climate sensing, remote irrigation control and a monitoring dashboard. Status: active project."
		},
		{
			property: "og:title",
			content: "Sysmart Agro, IoT smart agriculture project by SYLUTION"
		},
		{
			property: "og:description",
			content: "Field controller, soil and climate sensing, remote irrigation control and dashboards, engineered in Kano, Nigeria. Currently in active development and field deployment."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./terms-Cbcg-LOl.mjs");
var Route$3 = createFileRoute("/terms")({
	head: () => ({ meta: [
		{ title: "Terms of Service, SYLUTION" },
		{
			name: "description",
			content: "Terms governing the use of the SYLUTION website, quotations, project delivery, warranties, training programmes and intellectual property."
		},
		{
			property: "og:title",
			content: "Terms of Service, SYLUTION"
		},
		{
			property: "og:description",
			content: "The terms that govern our website, quotations and project delivery."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./training-BYiugiKm.mjs");
var Route$2 = createFileRoute("/training")({
	head: () => ({ meta: [
		{ title: "SYLUTION Academy, Drone, AI, Solar and Agritech Training" },
		{
			name: "description",
			content: "SYLUTION Academy delivers hands-on training in drones, AI, robotics, smart irrigation, solar, greenhouse, agribusiness, digital agriculture, youth and women programmes."
		},
		{
			property: "og:title",
			content: "SYLUTION Academy, Agricultural Technology Training"
		},
		{
			property: "og:description",
			content: "Practical training programmes delivered in English, Hausa and French at our Kano centre."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./solutions-CqYYUe5S.mjs");
var Route$1 = createFileRoute("/solutions/")({
	head: () => ({ meta: [
		{ title: "Technology Solutions | SYLUTION" },
		{
			name: "description",
			content: "Explore SYLUTION solutions: IoT, AI, electronics, embedded systems, robotics, automation, software, drones, energy and smart agriculture technology."
		},
		{
			property: "og:title",
			content: "Solutions, SYLUTION"
		},
		{
			property: "og:description",
			content: "Engineered technology capabilities delivered end to end across Nigeria and West Africa."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("../_slug-Ca4lR3S-.mjs");
var Route = createFileRoute("/solutions/$slug")({
	loader: ({ params }) => {
		const solution = SOLUTIONS.find((s) => s.slug === params.slug);
		if (!solution) throw notFound();
		return solution;
	},
	head: ({ loaderData }) => ({ meta: loaderData ? [
		{ title: `${loaderData.title}, SYLUTION` },
		{
			name: "description",
			content: loaderData.summary.slice(0, 155)
		},
		{
			property: "og:title",
			content: `${loaderData.title}, SYLUTION`
		},
		{
			property: "og:description",
			content: loaderData.summary.slice(0, 155)
		}
	] : [] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$26.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$27
});
var AboutRoute = Route$25.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$27
});
var AiRoute = Route$24.update({
	id: "/ai",
	path: "/ai",
	getParentRoute: () => Route$27
});
var CareersRoute = Route$23.update({
	id: "/careers",
	path: "/careers",
	getParentRoute: () => Route$27
});
var CompanyProfileRoute = Route$22.update({
	id: "/company-profile",
	path: "/company-profile",
	getParentRoute: () => Route$27
});
var ContactRoute = Route$21.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$27
});
var ElectronicsRoute = Route$20.update({
	id: "/electronics",
	path: "/electronics",
	getParentRoute: () => Route$27
});
var FaqRoute = Route$19.update({
	id: "/faq",
	path: "/faq",
	getParentRoute: () => Route$27
});
var GalleryRoute = Route$18.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => Route$27
});
var IndustriesRoute = Route$17.update({
	id: "/industries",
	path: "/industries",
	getParentRoute: () => Route$27
});
var InvestorsRoute = Route$16.update({
	id: "/investors",
	path: "/investors",
	getParentRoute: () => Route$27
});
var IotRoute = Route$15.update({
	id: "/iot",
	path: "/iot",
	getParentRoute: () => Route$27
});
var LoansRoute = Route$14.update({
	id: "/loans",
	path: "/loans",
	getParentRoute: () => Route$27
});
var MarketplaceRoute = Route$13.update({
	id: "/marketplace",
	path: "/marketplace",
	getParentRoute: () => Route$27
});
var NewsRoute = Route$12.update({
	id: "/news",
	path: "/news",
	getParentRoute: () => Route$27
});
var PartnersRoute = Route$11.update({
	id: "/partners",
	path: "/partners",
	getParentRoute: () => Route$27
});
var PlatformsRoute = Route$10.update({
	id: "/platforms",
	path: "/platforms",
	getParentRoute: () => Route$27
});
var PrivacyRoute = Route$9.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$27
});
var ProductsRoute = Route$8.update({
	id: "/products",
	path: "/products",
	getParentRoute: () => Route$27
});
var ProjectsRoute = Route$7.update({
	id: "/projects",
	path: "/projects",
	getParentRoute: () => Route$27
});
var ResearchRoute = Route$6.update({
	id: "/research",
	path: "/research",
	getParentRoute: () => Route$27
});
var SitemapDotxmlRoute = Route$5.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$27
});
var SysmartAgroRoute = Route$4.update({
	id: "/sysmart-agro",
	path: "/sysmart-agro",
	getParentRoute: () => Route$27
});
var TermsRoute = Route$3.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$27
});
var TrainingRoute = Route$2.update({
	id: "/training",
	path: "/training",
	getParentRoute: () => Route$27
});
var SolutionsIndexRoute = Route$1.update({
	id: "/solutions/",
	path: "/solutions/",
	getParentRoute: () => Route$27
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	AiRoute,
	CareersRoute,
	CompanyProfileRoute,
	ContactRoute,
	ElectronicsRoute,
	FaqRoute,
	GalleryRoute,
	IndustriesRoute,
	InvestorsRoute,
	IotRoute,
	LoansRoute,
	MarketplaceRoute,
	NewsRoute,
	PartnersRoute,
	PlatformsRoute,
	PrivacyRoute,
	ProductsRoute,
	ProjectsRoute,
	ResearchRoute,
	SitemapDotxmlRoute,
	SysmartAgroRoute,
	TermsRoute,
	TrainingRoute,
	SolutionsSlugRoute: Route.update({
		id: "/solutions/$slug",
		path: "/solutions/$slug",
		getParentRoute: () => Route$27
	}),
	SolutionsIndexRoute
};
var routeTree = Route$27._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { STATS as C, useLang as E, SOLUTIONS as S, TRAINING_PROGRAMMES as T, IOT_APPLICATIONS as _, cn as a, PRODUCTS as b, BRAND_IMAGES as c, ELECTRONICS_CAPABILITIES as d, EXHIBITION_IMAGES as f, INDUSTRIES as g, GALLERY_CATEGORIES as h, Reveal as i, CAREERS as l, GALLERY as m, Route as n, AGRITECH_AREAS as o, FAQS as p, PDF_PATH as r, AI_CAPABILITIES as s, router_exports as t, CONTACT as u, IOT_STACK as v, SYSMART_FLOW as w, PROJECTS as x, NEWS as y };
