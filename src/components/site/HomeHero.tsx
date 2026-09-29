import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, GraduationCap, MapPin, Sprout } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { DroneFlight } from "@/components/site/DroneFlight";

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
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span aria-hidden="true" className="home-hero__eyebrow-mark" />
            {t("hero.eyebrow")}
          </motion.p>
          <motion.h1
            id="home-hero-title"
            className="home-hero__title"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 0.7, 0.25, 1] }}
          >
            <span>{t("hero.titleLead")}</span>
            <span className="home-hero__title-accent">{t("hero.titleAccent")}</span>
          </motion.h1>
          <motion.p
            className="home-hero__description"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
          >
            {t("hero.sub")}
          </motion.p>
          <motion.div
            className="home-hero__actions"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.23 }}
          >
            <Link to="/sysmart-agro" className="btn-base btn-primary home-hero__primary group">
              {t("hero.cta1")}
              <span className="home-hero__arrow">
                <ArrowRight
                  aria-hidden="true"
                  className="h-5 w-5 transition-transform group-hover:translate-x-0.5"
                />
              </span>
            </Link>
            <Link to="/contact" className="btn-base btn-ghost home-hero__secondary">
              {t("hero.cta2")}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </motion.div>
          <motion.div
            className="home-hero__proof"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.36 }}
          >
            <span className="home-hero__proof-item">
              <MapPin aria-hidden="true" className="h-4 w-4" />
              Kano, Nigeria
            </span>
            <span aria-hidden="true" className="home-hero__proof-divider" />
            <span className="home-hero__proof-item">
              <Sprout aria-hidden="true" className="h-4 w-4" />
              AI · IoT · AgriTech
            </span>
          </motion.div>
          <Link
            to="/training"
            className="mt-4 inline-flex max-w-full items-center gap-2 text-xs font-semibold text-primary underline-offset-4 transition hover:underline sm:max-w-[34rem] sm:text-sm"
          >
            <GraduationCap aria-hidden="true" className="h-4 w-4 shrink-0" />
            <span>{t("hero.trainingCta")}</span>
            <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0" />
          </Link>
        </div>

        <motion.div
          className="home-hero__visual"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.97, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 0.7, 0.25, 1] }}
        >
          <picture className="home-hero__picture">
            <source
              media="(max-width: 767px)"
              srcSet="/brand/green-agritech-hero-mobile.webp"
              type="image/webp"
            />
            <img
              src="/brand/green-agritech-hero-wide.webp"
              alt=""
              aria-hidden="true"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
          <div aria-hidden="true" className="home-hero__image-wash" />
          <DroneFlight />
          <div className="home-hero__visual-caption">
            <span aria-hidden="true" className="home-hero__caption-dot" />
            Practical technology for the field
          </div>
          <div className="home-hero__leaf" aria-hidden="true">
            <Sprout className="h-5 w-5" />
          </div>
        </motion.div>
      </div>
      <div aria-hidden="true" className="home-hero__bottom-line" />
    </section>
  );
}
