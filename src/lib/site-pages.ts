import type { LangCode } from "@/lib/i18n";
import { SOLUTIONS } from "@/lib/site-data";

export type FinderCategory =
  | "Start here"
  | "Solutions"
  | "Projects & products"
  | "Company"
  | "Learning & updates"
  | "Contact & support"
  | "Policies";

export type SitePage = {
  path: string;
  title: string;
  summary: string;
  category: FinderCategory;
  keywords: string;
  changefreq: "weekly" | "monthly" | "yearly";
  priority: string;
};

const STATIC_PAGES: SitePage[] = [
  {
    path: "/",
    title: "Home",
    summary: "SYLUTION's main page for AgriTech, AI, IoT, electronics and intelligent systems.",
    category: "Start here",
    keywords: "home homepage gida sylution about company start",
    changefreq: "weekly",
    priority: "1.0",
  },
  {
    path: "/explore",
    title: "All pages and site directory",
    summary: "Browse or search every public SYLUTION page by topic.",
    category: "Start here",
    keywords: "explore directory sitemap all pages browse find search site map",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/solutions",
    title: "Solutions",
    summary: "Explore SYLUTION's engineering capabilities, technologies and application areas.",
    category: "Solutions",
    keywords: "solutions services capabilities technologies hanyoyin warware ayyuka",
    changefreq: "weekly",
    priority: "0.9",
  },
  {
    path: "/platforms",
    title: "Products and platforms",
    summary: "Explore SYLUTION products, software platforms and connected technology.",
    category: "Projects & products",
    keywords: "platforms products kayayyaki software devices devices na'urori",
    changefreq: "monthly",
    priority: "0.9",
  },
  {
    path: "/sysmart-agro",
    title: "Sysmart Agro",
    summary:
      "A connected agriculture project exploring farm sensing, irrigation control and monitoring.",
    category: "Projects & products",
    keywords:
      "sysmart smart farm agriculture farming noma irrigation sensors soil crops ruwa ban ruwa",
    changefreq: "weekly",
    priority: "0.95",
  },
  {
    path: "/products",
    title: "Products",
    summary: "Browse product concepts and technology work across SYLUTION's ecosystem.",
    category: "Projects & products",
    keywords: "products kayayyaki devices hardware tools",
    changefreq: "weekly",
    priority: "0.85",
  },
  {
    path: "/projects",
    title: "Projects and case studies",
    summary: "See project summaries, engineering evidence and current development stages.",
    category: "Projects & products",
    keywords: "projects portfolio case studies ayyuka evidence testing development",
    changefreq: "weekly",
    priority: "0.85",
  },
  {
    path: "/marketplace",
    title: "Marketplace",
    summary: "Find information about SYLUTION's marketplace and technology ecosystem.",
    category: "Projects & products",
    keywords: "marketplace market kasuwa buy purchase vendors products",
    changefreq: "monthly",
    priority: "0.5",
  },
  {
    path: "/about",
    title: "About SYLUTION",
    summary: "Learn about the company, its mission, engineering approach and Kano base.",
    category: "Company",
    keywords:
      "about company who we are mission vision kamfani game da mu Kano Nigeria entreprise qui sommes nous الشركة من نحن",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/company-profile",
    title: "Company profile",
    summary: "Download the SYLUTION company profile and learn about its capabilities.",
    category: "Company",
    keywords: "company profile pdf document kamfani bayanin kamfani download",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    path: "/industries",
    title: "Industries served",
    summary: "Explore sectors where SYLUTION applies AI, IoT, electronics and engineering.",
    category: "Company",
    keywords: "industries sectors masana'antu agriculture energy health cities government",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/partners",
    title: "Partners and collaboration",
    summary: "Find collaboration areas for institutions, NGOs, companies and development partners.",
    category: "Company",
    keywords: "partners collaboration partnership abokan hulda NGO university institutions",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    path: "/investors",
    title: "Investor information",
    summary: "Information for investors and organizations interested in SYLUTION's work.",
    category: "Company",
    keywords: "investors investment masu zuba jari funding finance capital",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    path: "/careers",
    title: "Careers and opportunities",
    summary: "Find career and participation information for people interested in SYLUTION.",
    category: "Company",
    keywords:
      "careers jobs vacancies employment aikin yi work opportunities emploi postes offres وظائف",
    changefreq: "weekly",
    priority: "0.6",
  },
  {
    path: "/iot",
    title: "Internet of Things (IoT)",
    summary: "Explore sensors, connected devices, controllers, monitoring and IoT systems.",
    category: "Solutions",
    keywords:
      "iot internet of things internet des objets sensors connected devices na'urori masu auna sigina إنترنت الأشياء",
    changefreq: "weekly",
    priority: "0.95",
  },
  {
    path: "/ai",
    title: "Artificial intelligence (AI)",
    summary: "Explore AI, computer vision, agricultural data and intelligent decision support.",
    category: "Solutions",
    keywords:
      "ai artificial intelligence intelligence artificielle machine learning computer vision basira wucin gadi الذكاء الاصطناعي",
    changefreq: "monthly",
    priority: "0.9",
  },
  {
    path: "/electronics",
    title: "Electronics and embedded systems",
    summary: "Explore circuits, controllers, microcontrollers, firmware and hardware development.",
    category: "Solutions",
    keywords:
      "electronics électronique embedded circuit firmware hardware lantarki na'urorin lantarki إلكترونيات",
    changefreq: "monthly",
    priority: "0.9",
  },
  {
    path: "/research",
    title: "Research and development",
    summary: "Learn about applied research, engineering experiments and field validation.",
    category: "Learning & updates",
    keywords: "research development R&D innovation bincike experiment",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    path: "/training",
    title: "Training and academy",
    summary:
      "Find training information for AI, IoT, agriculture, robotics and practical technology.",
    category: "Learning & updates",
    keywords:
      "training academy courses education skills horo makaranta koyo students formation cours apprentissage التدريب دورات تعليم",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    path: "/gallery",
    title: "Gallery and photos",
    summary: "View SYLUTION photos, events, equipment and project work.",
    category: "Learning & updates",
    keywords: "gallery photos pictures hotuna images events",
    changefreq: "monthly",
    priority: "0.6",
  },
  {
    path: "/news",
    title: "News and updates",
    summary: "Read news and updates about SYLUTION and its work.",
    category: "Learning & updates",
    keywords: "news updates labarai announcements articles actualités أخبار",
    changefreq: "weekly",
    priority: "0.7",
  },
  {
    path: "/loans",
    title: "Farm technology financing",
    summary:
      "Information about financing pathways for irrigation, solar, greenhouses and machinery.",
    category: "Projects & products",
    keywords:
      "loans loan finance financing credit credits bank rance rancen noma farm equipment irrigation prêt prêts financement crédits قروض تمويل",
    changefreq: "monthly",
    priority: "0.5",
  },
  {
    path: "/faq",
    title: "Frequently asked questions",
    summary: "Find answers to common questions about SYLUTION, services and projects.",
    category: "Contact & support",
    keywords:
      "faq questions answers help frequently asked tambayoyi amsoshi taimako questions réponses أسئلة إجابات",
    changefreq: "monthly",
    priority: "0.5",
  },
  {
    path: "/contact",
    title: "Contact SYLUTION",
    summary: "Find contact details, location, email, telephone and WhatsApp.",
    category: "Contact & support",
    keywords:
      "contact phone email address whatsapp Kano tuntube mu waya adireshi support contact téléphone adresse اتصل اتصال هاتف",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/privacy",
    title: "Privacy policy",
    summary: "Read the SYLUTION website privacy policy.",
    category: "Policies",
    keywords: "privacy data protection personal information sirri",
    changefreq: "yearly",
    priority: "0.3",
  },
  {
    path: "/terms",
    title: "Terms of use",
    summary: "Read the terms and conditions for using the SYLUTION website.",
    category: "Policies",
    keywords: "terms conditions legal usage dokoki sharudda",
    changefreq: "yearly",
    priority: "0.3",
  },
];

const SOLUTION_ALIASES: Record<string, string> = {
  "artificial-intelligence":
    "AI machine learning basira wucin gadi intelligence artificielle الذكاء الاصطناعي",
  iot: "sensors internet of things internet des objets na'urori إنترنت الأشياء",
  electronics: "electronics électronique lantarki hardware circuits إلكترونيات",
  "embedded-systems": "firmware microcontroller embedded systems",
  robotics: "robots robot mutum-mutumi automation",
  "drone-technology": "drones drone jirage marasa matuki aerial mapping",
  "solar-technology": "solar sun rana hasken rana power electricity",
  "smart-agriculture": "farming farm noma agriculture crops agriculture intelligente زراعة",
  "precision-agriculture": "precision farming noma ruwa fertilizer",
  "digital-agriculture": "digital farming noma records data",
  "smart-irrigation": "irrigation water ruwa ban ruwa pumps الري مياه",
  "drip-irrigation": "drip water irrigation ruwa ban ruwa",
  greenhouse: "greenhouse farming noma climate",
  "livestock-technology": "livestock animals dabbobi kiwo",
  "agricultural-data": "farm data bayanai farming",
  "farmer-training": "training courses horo farmers farmers noma formation apprentissage التدريب",
  research: "research innovation bincike",
};

export const SITE_PAGES: SitePage[] = [
  ...STATIC_PAGES,
  ...SOLUTIONS.map((solution): SitePage => ({
    path: `/solutions/${solution.slug}`,
    title: solution.title,
    summary: solution.summary,
    category: "Solutions",
    keywords: [
      solution.title,
      solution.tagline,
      solution.summary,
      solution.capabilities.join(" "),
      SOLUTION_ALIASES[solution.slug] ?? "",
    ].join(" "),
    changefreq: "monthly",
    priority: "0.7",
  })),
];

export const FINDER_CATEGORIES: FinderCategory[] = [
  "Start here",
  "Solutions",
  "Projects & products",
  "Company",
  "Learning & updates",
  "Contact & support",
  "Policies",
];

const CATEGORY_LABELS: Record<LangCode, Record<FinderCategory, string>> = {
  en: {
    "Start here": "Start here",
    Solutions: "Solutions",
    "Projects & products": "Projects & products",
    Company: "Company",
    "Learning & updates": "Learning & updates",
    "Contact & support": "Contact & support",
    Policies: "Policies",
  },
  ha: {
    "Start here": "A fara nan",
    Solutions: "Fasahohi da ayyuka",
    "Projects & products": "Ayyuka da kayayyaki",
    Company: "Kamfani",
    "Learning & updates": "Koyo da labarai",
    "Contact & support": "Tuntuɓa da taimako",
    Policies: "Manufofi",
  },
  fr: {
    "Start here": "Commencer ici",
    Solutions: "Solutions",
    "Projects & products": "Projets et produits",
    Company: "Entreprise",
    "Learning & updates": "Formation et actualités",
    "Contact & support": "Contact et assistance",
    Policies: "Politiques",
  },
  ar: {
    "Start here": "ابدأ من هنا",
    Solutions: "الحلول",
    "Projects & products": "المشاريع والمنتجات",
    Company: "الشركة",
    "Learning & updates": "التعلم والأخبار",
    "Contact & support": "التواصل والدعم",
    Policies: "السياسات",
  },
};

export function getFinderCategoryLabel(category: FinderCategory, lang: LangCode) {
  return CATEGORY_LABELS[lang][category];
}

export const FINDER_TEXT: Record<
  LangCode,
  {
    button: string;
    title: string;
    description: string;
    placeholder: string;
    noResults: string;
    allPages: string;
    pageCount: string;
    tip: string;
    directoryTitle: string;
    directoryDescription: string;
  }
> = {
  en: {
    button: "Search the site",
    title: "Search SYLUTION",
    description: "Find a page, service, product or project.",
    placeholder: "Try “training”, “IoT”, “irrigation” or “loans”",
    noResults: "No matching pages. Try another word.",
    allPages: "Browse all pages",
    pageCount: "pages",
    tip: "Press / or Ctrl+K to open search.",
    directoryTitle: "Explore all pages",
    directoryDescription:
      "Browse SYLUTION's public pages by topic or search across the whole site.",
  },
  ha: {
    button: "Nemo a shafin",
    title: "Nemo a SYLUTION",
    description: "Nemo shafi, hidima, kaya ko aiki.",
    placeholder: "Gwada “horo”, “IoT”, “ban ruwa” ko “rance”",
    noResults: "Ba a sami shafin da ya dace ba. Gwada wata kalma.",
    allPages: "Duba dukkan shafuka",
    pageCount: "shafuka",
    tip: "Danna / ko Ctrl+K don buɗe bincike.",
    directoryTitle: "Duba dukkan shafuka",
    directoryDescription: "Duba shafukan SYLUTION bisa batu ko bincika dukkan shafin.",
  },
  fr: {
    button: "Rechercher sur le site",
    title: "Rechercher sur SYLUTION",
    description: "Trouvez une page, un service, un produit ou un projet.",
    placeholder: "Essayez « formation », « IoT », « irrigation » ou « crédits »",
    noResults: "Aucune page correspondante. Essayez un autre mot.",
    allPages: "Parcourir toutes les pages",
    pageCount: "pages",
    tip: "Appuyez sur / ou Ctrl+K pour ouvrir la recherche.",
    directoryTitle: "Explorer toutes les pages",
    directoryDescription: "Parcourez les pages SYLUTION par thème ou recherchez dans tout le site.",
  },
  ar: {
    button: "ابحث في الموقع",
    title: "البحث في SYLUTION",
    description: "اعثر على صفحة أو خدمة أو منتج أو مشروع.",
    placeholder: "جرّب «التدريب» أو «إنترنت الأشياء» أو «الري»",
    noResults: "لا توجد صفحات مطابقة. جرّب كلمة أخرى.",
    allPages: "تصفح جميع الصفحات",
    pageCount: "صفحة",
    tip: "اضغط / أو Ctrl+K لفتح البحث.",
    directoryTitle: "استكشف جميع الصفحات",
    directoryDescription: "تصفح صفحات SYLUTION حسب الموضوع أو ابحث في الموقع كله.",
  },
};

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase();
}

function tokenize(value: string): string[] {
  const words = value.match(/[\p{L}\p{N}]+/gu);
  return words ? Array.from(words) : [];
}

function matchesTerm(words: string[], term: string) {
  return words.some((word) => word === term || (term.length >= 3 && word.startsWith(term)));
}

export function searchSitePages(query: string): SitePage[] {
  const normalizedQuery = normalize(query.trim());
  if (!normalizedQuery) return SITE_PAGES;

  const terms = tokenize(normalizedQuery);
  if (!terms.length) return SITE_PAGES;

  return SITE_PAGES.map((page, order) => {
    const titleWords = tokenize(normalize(page.title));
    const categoryWords = tokenize(normalize(page.category));
    const summaryWords = tokenize(normalize(page.summary));
    const keywordWords = tokenize(normalize(page.keywords));
    const searchableWords = [...titleWords, ...categoryWords, ...summaryWords, ...keywordWords];
    if (!terms.every((term) => matchesTerm(searchableWords, term))) return null;

    const score = terms.reduce((total, term) => {
      if (titleWords.includes(term)) return total + 8;
      if (matchesTerm(titleWords, term)) return total + 6;
      if (keywordWords.includes(term)) return total + 3;
      if (matchesTerm(keywordWords, term)) return total + 2;
      if (matchesTerm(categoryWords, term)) return total + 1;
      return total + 1;
    }, 0);

    return { page, order, score };
  })
    .filter((result): result is { page: SitePage; order: number; score: number } => result !== null)
    .sort((a, b) => b.score - a.score || a.order - b.order)
    .map((result) => result.page);
}
