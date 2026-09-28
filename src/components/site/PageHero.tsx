import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { MapPin } from "lucide-react";
import { useLang } from "@/lib/i18n";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  children,
  compact,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  image: string;
  children?: ReactNode;
  compact?: boolean;
}) {
  const { tr } = useLang();
  const reduceMotion = useReducedMotion();

  return (
    <section className={`page-hero ${compact ? "page-hero--compact" : ""}`}>
      <div className="container-x page-hero-layout">
        <div className="page-hero-copy">
          <motion.p
            className="eyebrow"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <span aria-hidden="true" className="h-px w-7 shrink-0 bg-primary" />
            {tr(eyebrow)}
          </motion.p>
          <motion.h1
            className="mt-5 max-w-3xl font-display text-[2.35rem] font-extrabold leading-[1.04] tracking-[-0.045em] text-foreground sm:text-5xl lg:text-[3.7rem]"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            {typeof title === "string" ? tr(title) : title}
          </motion.h1>
          {subtitle && (
            <motion.p
              className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {tr(subtitle)}
            </motion.p>
          )}
          {children && (
            <motion.div
              className="mt-7 flex flex-wrap gap-3"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              {children}
            </motion.div>
          )}
        </div>

        <motion.div
          className="page-hero-media"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.08 }}
        >
          <img src={image} alt="" aria-hidden="true" fetchPriority="high" decoding="async" />
          <div className="page-hero-media-shade" aria-hidden="true" />
          <div className="page-hero-location">
            <MapPin aria-hidden="true" className="h-4 w-4" /> Kano, Nigeria
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  const { tr } = useLang();
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.5 }}
    >
      <p className={`eyebrow ${align === "center" ? "justify-center" : ""}`}>
        <span aria-hidden="true" className="mr-2 inline-block h-px w-6 bg-primary align-middle" />
        {tr(eyebrow)}
      </p>
      <h2 className="mt-3 font-display text-[1.75rem] font-bold leading-[1.12] tracking-[-0.035em] sm:text-4xl">
        {tr(title)}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-muted-foreground">{tr(description)}</p>
      )}
    </motion.div>
  );
}
