import { createContext, useContext, type ReactNode } from "react";

// Legacy translated dictionaries were retired in favor of xnx3/translate.
// Keep the existing translation hook's English copy for stable React rendering
// and to avoid rewriting unrelated site components.
export type LangCode = "en" | "ha" | "fr" | "ar";

const en: Record<string, string> = {
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
  "hero.eyebrow": "Software development · Web & mobile apps · Kano, Nigeria",
  "hero.paths.location": "Kano · Nigeria",
  "hero.titleLead": "We build software.",
  "hero.titleAccent": "Websites, apps & AI.",
  "hero.sub":
    "From modern websites and mobile apps to custom business software and AI-powered systems, SYLUTION builds digital solutions for real needs. We also develop AgriTech and teach practical technology skills."
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
  "hero.paths.products.label": "Flagship AgriTech project",
  "hero.paths.products.title": "Sysmart Agro",
  "hero.paths.products.detail":
    "In development and field testing. A mobile app is planned, not yet available.",
  "hero.paths.training.label": "SYLUTION Academy",
  "hero.paths.training.title": "Practical training",
  "hero.paths.training.detail": "Hands-on AI, IoT, electronics and smart farming. Ask about dates.",
  "home.approach.eyebrow": "A PRACTICAL APPROACH",
  "home.approach.title": "From a real need to a useful system.",
  "home.approach.subtitle":
    "We start with the job and site conditions, define the scope, then build and test a system the team can use.",
  "home.approach.step1.title": "Understand the need",
  "home.approach.step1.detail":
    "Clarify the task, field conditions and constraints before choosing technology.",
  "home.approach.step2.title": "Design the system",
  "home.approach.step2.detail":
    "Select the sensors, electronics, software and power the job needs.",
  "home.approach.step3.title": "Build and test",
  "home.approach.step3.detail":
    "Integrate the parts and test key functions for their intended use.",
  "home.approach.step4.title": "Prepare the people",
  "home.approach.step4.detail": "Explain operation and care, with hands-on training when needed.",
  "home.approach.contact": "Discuss a project",
  "home.approach.services": "Explore engineering services",
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


const langContextValue = {
  lang: "en" as LangCode,
  t: (key: string) => en[key] ?? key,
  tr: (text: string) => text,
};

const LangContext = createContext(langContextValue);

export function LanguageProvider({ children }: { children: ReactNode }) {
  return <LangContext.Provider value={langContextValue}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
