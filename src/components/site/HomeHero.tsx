import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowUpRight, BookOpen, Code2, Sprout } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";

type CategoryId = "software" | "agriculture" | "education";

const PATHWAYS = [
  {
    id: "software",
    number: "01",
    icon: Code2,
    title: "Software & Digital Technology",
    kicker: "Digital solutions",
    summary: "Apps, websites, AI and software systems built around real needs.",
    introduction:
      "We design and develop practical digital products for businesses, organisations and emerging technology projects.",
    services: [
      { name: "Websites & web applications", detail: "Modern business websites, portals, dashboards and customer-facing web platforms." },
      { name: "Mobile app development", detail: "Android and iOS application experiences, from concept and interface to implementation." },
      { name: "Custom software systems", detail: "Business process tools, management systems and tailored digital workflows." },
      { name: "Artificial intelligence", detail: "AI-powered assistants, automation and intelligent features integrated into useful products." },
      { name: "Connected digital systems", detail: "IoT dashboards, data monitoring and integrations between software and devices." },
    ],
    href: "/solutions",
    action: "Explore digital services",
  },
  {
    id: "agriculture",
    number: "02",
    icon: Sprout,
    title: "Agriculture & Engineering",
    kicker: "Smart agriculture",
    summary: "Greenhouse systems, smart irrigation, electronics and IoT.",
    introduction:
      "We apply engineering and connected technologies to farming and real-world operating conditions, including Sysmart Agro initiatives.",
    services: [
      { name: "Greenhouse technology", detail: "Greenhouse planning, crop-environment monitoring and automation concepts." },
      { name: "Smart and solar irrigation", detail: "Water-management controls, drip irrigation and solar-powered system integration." },
      { name: "Precision agriculture & IoT", detail: "Sensors, farm data dashboards, alerts and field monitoring systems." },
      { name: "Electronics & robotics", detail: "Embedded controllers, prototypes, automation hardware and engineering integration." },
      { name: "Drones & climate-smart solutions", detail: "Agricultural observation, technology exploration and resource-efficient approaches." },
    ],
    href: "/sysmart-agro",
    action: "Explore Sysmart Agro",
  },
  {
    id: "education",
    number: "03",
    icon: BookOpen,
    title: "Education & Business Development",
    kicker: "Skills and enterprise",
    summary: "Hands-on technology learning, startup support and digital skills.",
    introduction:
      "We help people and organisations understand, apply and build with technology through practical learning and entrepreneurship support.",
    services: [
      { name: "STEM & technical education", detail: "Practical electronics, robotics, coding, IoT and engineering sessions." },
      { name: "Digital skills training", detail: "Website creation, software tools, AI literacy and applied digital workflows." },
      { name: "AgriTech training", detail: "Introduction to smart irrigation, sensors and technology-supported agriculture." },
      { name: "Startup & business development", detail: "Technology-focused entrepreneurship, prototyping and digital business support." },
      { name: "Youth & women empowerment", detail: "Accessible practical training and capacity-building programmes." },
    ],
    href: "/training",
    action: "Explore training programmes",
  },
] as const;
export function HomeHero() {
  const { t } = useLang();
  const reduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<CategoryId | null>(null);
  const selectedCategory = PATHWAYS.find((item) => item.id === activeCategory);

  return (
    <section className="home-hero" aria-labelledby="home-hero-title">
      <picture aria-hidden="true" className="home-hero__backdrop">
        <source media="(max-width: 639px)" srcSet="/brand/sylution-home-hero-mobile-premium.webp" />
        <img
          src="/brand/sylution-home-hero-desktop-premium.webp"
          alt=""
          fetchPriority="high"
          decoding="async"
        />
      </picture>
      <div aria-hidden="true" className="home-hero__overlay" />
      <div aria-hidden="true" className="home-hero__glow" />
      <div className="container-x home-hero__layout">
        <div className="home-hero__copy">
          <motion.p
            className="home-hero__eyebrow"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span aria-hidden="true" className="home-hero__eyebrow-mark" />
            {t("hero.eyebrow")}
          </motion.p>
          <motion.h1
            id="home-hero-title"
            className="home-hero__title"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.06, ease: [0.22, 0.7, 0.25, 1] }}
          >
            <span>{t("hero.titleLead")}</span>
            <span className="home-hero__title-accent">{t("hero.titleAccent")}</span>
          </motion.h1>
          <motion.p
            className="home-hero__description"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.13 }}
          >
            {t("hero.sub")}
          </motion.p>
        </div>

        <motion.div
          className="home-hero__paths"
          role="region"
          aria-label={t("hero.paths.heading")}
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.17, ease: [0.22, 0.7, 0.25, 1] }}
        >
          <div className="home-hero__paths-heading">
            <div>
              <p className="home-hero__paths-overline">{t("hero.paths.overline")}</p>
              <h2 className="home-hero__paths-title">{t("hero.paths.heading")}</h2>
            </div>
            <span className="home-hero__paths-location">{t("hero.paths.location")}</span>
          </div>

          <div className="home-hero__paths-list home-hero__path-categories" aria-label="Explore SYLUTION's core areas">
            {PATHWAYS.map((pathway) => (
              <button
                key={pathway.id}
                type="button"
                className="home-hero__path home-hero__category"
                data-active={activeCategory === pathway.id ? "true" : undefined}
                aria-expanded={activeCategory === pathway.id}
                aria-controls="home-hero-category-details"
                onClick={() => setActiveCategory((current) => current === pathway.id ? null : pathway.id)}
              >
                <span className="home-hero__category-icon" aria-hidden="true">
                  <pathway.icon />
                </span>
                <span className="home-hero__category-title">{pathway.title}</span>
                <span className="home-hero__category-open" aria-hidden="true">
                  <ArrowUpRight />
                </span>
              </button>
            ))}
          </div>

          <div
            id="home-hero-category-details"
            className="home-hero__category-details"
            hidden={!selectedCategory}
            aria-live="polite"
          >
            {selectedCategory && (
              <div className="home-hero__category-details-inner" key={selectedCategory.id}>
                <div className="home-hero__category-details-top">
                  <span className="home-hero__category-kicker">{selectedCategory.kicker}</span>
                  <button
                    type="button"
                    className="home-hero__category-close"
                    aria-label="Close service details"
                    onClick={() => setActiveCategory(null)}
                  >
                    Close <span aria-hidden="true">×</span>
                  </button>
                </div>
                <h3 className="home-hero__category-details-title">{selectedCategory.title}</h3>
                <p className="home-hero__category-intro">{selectedCategory.introduction}</p>
                <ul className="home-hero__category-service-list">
                  {selectedCategory.services.map((service) => (
                    <li key={service.name}>
                      <strong>{service.name}</strong>
                      <span>{service.detail}</span>
                    </li>
                  ))}
                </ul>
                <div className="home-hero__category-actions">
                  <Link to={selectedCategory.href} className="home-hero__category-cta">
                    {selectedCategory.action} <ArrowRight aria-hidden="true" />
                  </Link>
                  <Link to="/contact" className="home-hero__category-contact">
                    Discuss your project <ArrowUpRight aria-hidden="true" />
                  </Link>
                </div>
                <p className="home-hero__category-note">Solutions and training are scoped to each enquiry; availability and project stage are confirmed before engagement.</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
      <div aria-hidden="true" className="home-hero__bottom-line" />
    </section>
  );
}
