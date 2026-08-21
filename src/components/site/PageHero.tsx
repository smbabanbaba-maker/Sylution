import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
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
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <img src={image} alt="" aria-hidden loading="eager" className="hero-image-live h-full w-full object-cover object-center" />
      </div>
      <div aria-hidden className="veil-side absolute inset-0 -z-10" />
      <div aria-hidden className="circuit-overlay pointer-events-none absolute inset-0 -z-10" />
      <div aria-hidden className="signal-sweep pointer-events-none -z-10" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-10 -z-10 h-72 w-72 rounded-full bg-primary/25 blur-[110px] animate-float-slow"
      />
      <div className={`container-x ${compact ? "pb-16 pt-28 sm:pt-32 lg:pb-24 lg:pt-44" : "pb-20 pt-32 sm:pt-36 lg:pb-32 lg:pt-52"}`}>
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span aria-hidden className="h-px w-8 shrink-0 bg-primary" />
          {tr(eyebrow)}
        </motion.p>
        <motion.h1
          className="mt-5 max-w-4xl text-[2.1rem] font-extrabold leading-[1.06] sm:text-5xl lg:text-[3.75rem]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 0.7, 0.25, 1] }}
        >
          {typeof title === "string" ? tr(title) : title}
        </motion.h1>
        {subtitle && (
          <motion.p
            className="mt-6 max-w-2xl text-[0.975rem] leading-relaxed text-muted-foreground sm:text-lg"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.16 }}
          >
            {tr(subtitle)}
          </motion.p>
        )}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.24 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            {children}
          </motion.div>
        )}
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
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.65, ease: [0.22, 0.7, 0.25, 1] }}
    >
      <p className={`eyebrow ${align === "center" ? "justify-center" : ""}`}>
        <span aria-hidden className="mr-2 inline-block h-px w-6 bg-primary align-middle" />
        {tr(eyebrow)}
      </p>
      <h2 className="mt-4 text-[1.75rem] font-bold leading-[1.15] sm:text-4xl">{tr(title)}</h2>
      {description && <p className="mt-5 text-base leading-relaxed text-muted-foreground">{tr(description)}</p>}
    </motion.div>
  );
}
