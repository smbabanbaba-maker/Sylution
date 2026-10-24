import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Brain, CircuitBoard, GraduationCap } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";

const PATHWAYS = [
  {
    id: "products",
    href: "/sysmart-agro" as const,
    icon: CircuitBoard,
    label: "hero.paths.products.label",
    title: "hero.paths.products.title",
    detail: "hero.paths.products.detail",
  },
  {
    id: "services",
    href: "/solutions" as const,
    icon: Brain,
    label: "hero.paths.services.label",
    title: "hero.paths.services.title",
    detail: "hero.paths.services.detail",
  },
  {
    id: "academy",
    href: "/training" as const,
    icon: GraduationCap,
    label: "hero.paths.training.label",
    title: "hero.paths.training.title",
    detail: "hero.paths.training.detail",
  },
] as const;

export function HomeHero() {
  const { t } = useLang();
  const reduceMotion = useReducedMotion();

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
          <motion.div
            className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            <Link to="/contact" className="btn-base btn-primary group">
              Discuss a software project
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </Link>
            <a
              href="#software-development"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/35 bg-black/25 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Explore what we build
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </motion.div>
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

          <div className="home-hero__paths-list">
            {PATHWAYS.map((pathway, index) => (
              <Link
                key={pathway.id}
                to={pathway.href}
                className="home-hero__path"
                data-featured={index === 0 ? "true" : undefined}
                aria-label={`${t(pathway.label)}: ${t(pathway.title)}`}
              >
                <span className="home-hero__path-number" aria-hidden="true">
                  0{index + 1}
                </span>
                <span className="home-hero__path-icon" aria-hidden="true">
                  <pathway.icon />
                </span>
                <span className="home-hero__path-copy">
                  <span className="home-hero__path-label">{t(pathway.label)}</span>
                  <strong>{t(pathway.title)}</strong>
                  <span className="home-hero__path-detail">{t(pathway.detail)}</span>
                </span>
                <ArrowUpRight className="home-hero__path-arrow" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
      <div aria-hidden="true" className="home-hero__bottom-line" />
    </section>
  );
}
