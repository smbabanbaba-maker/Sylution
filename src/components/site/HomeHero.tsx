import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Cpu, GraduationCap, Sprout } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";

const PATHWAYS = [
  {
    number: "01",
    icon: Cpu,
    title: "hero.paths.services.title",
    label: "hero.paths.services.label",
    detail: "hero.paths.services.detail",
    to: "/solutions" as const,
  },
  {
    number: "02",
    icon: Sprout,
    title: "hero.paths.products.title",
    label: "hero.paths.products.label",
    detail: "hero.paths.products.detail",
    to: "/products" as const,
    featured: true,
  },
  {
    number: "03",
    icon: GraduationCap,
    title: "hero.paths.training.title",
    label: "hero.paths.training.label",
    detail: "hero.paths.training.detail",
    to: "/training" as const,
  },
];

export function HomeHero() {
  const { t } = useLang();
  const reduceMotion = useReducedMotion();

  return (
    <section className="home-hero" aria-labelledby="home-hero-title">
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
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.17, ease: [0.22, 0.7, 0.25, 1] }}
          aria-labelledby="home-hero-paths-title"
        >
          <div className="home-hero__paths-heading">
            <span id="home-hero-paths-title" className="home-hero__paths-overline">
              {t("hero.paths.overline")}
            </span>
            <span className="home-hero__paths-location">{t("hero.paths.location")}</span>
          </div>
          <h2 className="home-hero__paths-title">{t("hero.paths.heading")}</h2>
          <div className="home-hero__paths-list">
            {PATHWAYS.map((path) => (
              <Link
                key={path.number}
                to={path.to}
                className="home-hero__path"
                data-featured={path.featured ? "true" : undefined}
              >
                <span className="home-hero__path-number">{path.number}</span>
                <span className="home-hero__path-icon">
                  <path.icon aria-hidden="true" />
                </span>
                <span className="home-hero__path-copy">
                  <span className="home-hero__path-label">{t(path.label)}</span>
                  <strong>{t(path.title)}</strong>
                  <span className="home-hero__path-detail">{t(path.detail)}</span>
                </span>
                <ArrowUpRight aria-hidden="true" className="home-hero__path-arrow" />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
      <div aria-hidden="true" className="home-hero__bottom-line" />
    </section>
  );
}
