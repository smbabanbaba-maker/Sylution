import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Pause, Play } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";

const SHOWCASE = [
  {
    id: "engineering",
    image: "/brand/showcase-engineering.webp",
    href: "/solutions" as const,
    tab: "hero.showcase.engineering.tab",
    kicker: "hero.showcase.engineering.kicker",
    title: "hero.showcase.engineering.title",
    detail: "hero.showcase.engineering.detail",
    action: "hero.showcase.engineering.action",
    alt: "hero.showcase.engineering.alt",
  },
  {
    id: "sysmart",
    image: "/brand/showcase-sysmart.webp",
    href: "/sysmart-agro" as const,
    tab: "hero.showcase.sysmart.tab",
    kicker: "hero.showcase.sysmart.kicker",
    title: "hero.showcase.sysmart.title",
    detail: "hero.showcase.sysmart.detail",
    action: "hero.showcase.sysmart.action",
    alt: "hero.showcase.sysmart.alt",
  },
  {
    id: "academy",
    image: "/brand/showcase-academy.webp",
    href: "/training" as const,
    tab: "hero.showcase.academy.tab",
    kicker: "hero.showcase.academy.kicker",
    title: "hero.showcase.academy.title",
    detail: "hero.showcase.academy.detail",
    action: "hero.showcase.academy.action",
    alt: "hero.showcase.academy.alt",
  },
] as const;

export function HomeHero() {
  const { t } = useLang();
  const [reduceMotion, setReduceMotion] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const activeScene = SHOWCASE[activeIndex];

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => setReduceMotion(preference.matches);
    syncPreference();
    preference.addEventListener("change", syncPreference);
    return () => preference.removeEventListener("change", syncPreference);
  }, []);

  useEffect(() => {
    if (reduceMotion) setPaused(true);
  }, [reduceMotion]);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % SHOWCASE.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [activeIndex, paused]);

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
          className="home-hero__showcase"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.17, ease: [0.22, 0.7, 0.25, 1] }}
        >
          <div
            className="home-hero__showcase-frame"
            role="region"
            aria-label={t("hero.showcase.label")}
            aria-roledescription={t("hero.showcase.carousel")}
          >
            <AnimatePresence initial={false}>
              <motion.img
                key={activeScene.id}
                className="home-hero__showcase-image"
                data-scene={activeScene.id}
                src={activeScene.image}
                alt={t(activeScene.alt)}
                fetchPriority={activeIndex === 0 ? "high" : "auto"}
                decoding="async"
                initial={reduceMotion ? false : { opacity: 0, scale: 1.025 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0 }}
                transition={reduceMotion ? { duration: 0 } : { duration: 0.7, ease: "easeInOut" }}
              />
            </AnimatePresence>
            <div className="home-hero__showcase-shade" aria-hidden="true" />
            <button
              className="home-hero__showcase-toggle"
              type="button"
              aria-label={t(paused ? "hero.showcase.play" : "hero.showcase.pause")}
              title={t(paused ? "hero.showcase.play" : "hero.showcase.pause")}
              onClick={() => setPaused((value) => !value)}
            >
              {paused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}
            </button>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeScene.id}
                className="home-hero__showcase-copy"
                aria-live="off"
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                transition={reduceMotion ? { duration: 0 } : { duration: 0.42, ease: "easeOut" }}
              >
                <span className="home-hero__showcase-kicker">{t(activeScene.kicker)}</span>
                <h2>{t(activeScene.title)}</h2>
                <p>{t(activeScene.detail)}</p>
                <Link to={activeScene.href} className="home-hero__showcase-link">
                  {t(activeScene.action)}
                  <ArrowUpRight aria-hidden="true" />
                </Link>
              </motion.div>
            </AnimatePresence>
            <span className="home-hero__showcase-count" aria-hidden="true">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(SHOWCASE.length).padStart(2, "0")}
            </span>
          </div>

          <div
            className="home-hero__showcase-tabs"
            role="group"
            aria-label={t("hero.showcase.choose")}
          >
            {SHOWCASE.map((scene, index) => (
              <button
                key={scene.id}
                type="button"
                className="home-hero__showcase-tab"
                data-active={activeIndex === index ? "true" : undefined}
                aria-pressed={activeIndex === index}
                aria-label={`${t("hero.showcase.show")} ${t(scene.tab)}`}
                onClick={() => setActiveIndex(index)}
              >
                <span className="home-hero__showcase-tab-number" aria-hidden="true">
                  0{index + 1}
                </span>
                <span className="home-hero__showcase-tab-label">{t(scene.tab)}</span>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
      <div aria-hidden="true" className="home-hero__bottom-line" />
    </section>
  );
}
