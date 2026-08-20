import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Cpu,
  Plane,
  Sun,
  ShieldCheck,
  Sparkles,
  CircuitBoard,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { SOLUTIONS, STATS, NEWS, GALLERY, U, BRAND_IMAGES, AGRITECH_AREAS, EXHIBITION_IMAGES } from "@/lib/site-data";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SYLUTION LTD | AgriTech Innovation Powered by AI, IoT & Smart Technology" },
      {
        name: "description",
        content:
          "SYLUTION LTD is a Nigerian technology innovation company applying AI, IoT, electronics, robotics, drone and smart technology to modern agriculture and real world problems.",
      },
      { property: "og:title", content: "SYLUTION LTD | AgriTech Innovation Powered by AI, IoT & Smart Technology" },
      {
        property: "og:description",
        content:
          "AI, IoT and engineering applied to AgriTech, from our base at the Technology Incubation Centre, Farm Centre, Kano, Nigeria.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const PILLARS = [
  { icon: Sparkles, title: "Artificial Intelligence", slug: "artificial-intelligence" },
  { icon: Cpu, title: "Internet of Things", slug: "iot" },
  { icon: CircuitBoard, title: "Electronics and Embedded Systems", slug: "electronics" },
  { icon: ShieldCheck, title: "Robotics", slug: "robotics" },
  { icon: Plane, title: "Drone Technology", slug: "drone-technology" },
  { icon: Sun, title: "Solar Technology", slug: "solar-technology" },
];


const AUDIENCES = [
  "Farmers",
  "Agripreneurs",
  "Youth",
  "Women",
  "Cooperatives",
  "Universities",
  "Research Institutions",
  "Government Institutions",
  "NGOs",
  "Development Organisations",
];

function Home() {
  const { t } = useLang();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} className="relative isolate min-h-[100svh] overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 -z-20">
          <img
            src={BRAND_IMAGES.greenhouse}
            alt="SYLUTION IoT laboratory in Kano, Nigeria"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <video
            className="relative h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={BRAND_IMAGES.greenhouse}
          >
            <source
              src="https://videos.pexels.com/video-files/2946776/2946776-uhd_2560_1440_24fps.mp4"
              type="video/mp4"
            />
          </video>
        </motion.div>
        <div aria-hidden className="veil-side absolute inset-0 -z-10" />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-1/3 -z-10 h-80 w-80 rounded-full bg-primary/25 blur-[130px] animate-float-slow"
        />

        <motion.div style={{ opacity: fade }} className="container-x flex min-h-[100svh] flex-col justify-center pb-20 pt-28 sm:pb-24 sm:pt-32">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span aria-hidden className="h-px w-8 shrink-0 bg-primary" />
            {t("hero.eyebrow")}
          </motion.p>

          <motion.h1
            className="mt-6 max-w-4xl text-[2.35rem] font-extrabold leading-[1.04] sm:text-6xl lg:text-[4.25rem]"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 0.7, 0.25, 1] }}
          >
            {t("hero.title")}
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-[0.975rem] leading-relaxed text-muted-foreground sm:mt-7 sm:text-lg"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            {t("hero.sub")}
          </motion.p>

          <motion.div
            className="mt-9 grid grid-cols-1 gap-3 sm:flex sm:flex-wrap"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <Link
              to="/research"
              className="btn-base btn-primary group"
            >
              {t("hero.cta1")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/solutions"
              className="btn-base btn-ghost"
            >
              {t("hero.cta2")}
            </Link>
            <Link
              to="/contact"
              className="btn-base btn-ghost"
            >
              {t("hero.cta3")}
            </Link>
          </motion.div>

          <motion.div
            className="mt-14 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border shadow-luxe sm:grid-cols-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.42 }}
          >
            {STATS.map((s) => (
              <div key={s.label} className="bg-card/80 px-5 py-6 backdrop-blur-xl">
                <p className="font-display text-2xl font-extrabold text-gradient-brand sm:text-3xl">{s.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="mt-12 hidden items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <span aria-hidden className="relative h-10 w-px overflow-hidden bg-border">
              <span className="absolute inset-x-0 top-0 h-4 animate-scroll-cue bg-primary" />
            </span>
            Scroll to explore
          </motion.div>
        </motion.div>
      </section>

      {/* AUDIENCE MARQUEE */}
      <section className="border-y border-border bg-surface py-5">
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex shrink-0 gap-10 whitespace-nowrap pr-10">
            {[...AUDIENCES, ...AUDIENCES].map((a, i) => (
              <span key={i} className="flex items-center gap-10 text-sm font-semibold tracking-wide text-muted-foreground">
                {a}
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FLAGSHIP PROJECT */}
      <section className="container-x section-y">
        <Reveal>
          <div className="card-luxe grid overflow-hidden lg:grid-cols-[1.1fr_1fr]">
            <img
              src={BRAND_IMAGES.sysmart}
              alt="Sysmart Agro IoT controller monitoring soil moisture in the field"
              loading="lazy"
              className="aspect-[16/10] w-full object-cover lg:aspect-auto lg:h-full"
            />
            <div className="p-8 sm:p-12">
              <p className="eyebrow">
                <span aria-hidden className="h-px w-8 shrink-0 bg-primary" />
                Flagship project
              </p>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl">Sysmart Agro</h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Our IoT powered smart agriculture platform: a field controller with soil and climate sensing, remote
                irrigation control and a live monitoring dashboard, engineered end to end in Kano.
              </p>
              <span className="mt-6 inline-flex rounded-full bg-primary/15 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-primary">
                Status: Active Project
              </span>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/sysmart-agro"
                  className="btn-base btn-primary"
                >
                  Explore the project <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/projects"
                  className="btn-base btn-ghost"
                >
                  All projects
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* EXHIBITIONS AND ENGAGEMENT */}
      <section className="border-y border-border bg-surface section-y">
        <div className="container-x">
          <SectionHeading
            eyebrow="Exhibitions and engagement"
            title="Showing the work in the real world"
            description="Photographs from exhibitions, stakeholder demonstrations and innovation events where the Sysmart Agro system was presented."
            align="center"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {EXHIBITION_IMAGES.map((e, i) => (
              <Reveal key={e.src} delay={(i % 3) * 0.07}>
                <figure className="group relative h-full overflow-hidden rounded-3xl border border-border shadow-luxe">
                  <img
                    src={e.src}
                    alt={e.caption}
                    loading="lazy"
                    className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105 lg:h-80"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 p-5 text-xs font-medium leading-relaxed sm:text-sm">
                    {e.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/gallery" className="btn-base btn-ghost">
              See the full gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="container-x grid gap-14 section-y lg:grid-cols-2 lg:items-center">
        <Reveal>
          <SectionHeading
            eyebrow="Who we are"
            title="AgriTech innovation powered by AI, IoT and smart technology"
            description="SYLUTION LTD is a Nigerian technology innovation company applying Artificial Intelligence, Internet of Things, electronics, robotics, drone technology and smart technologies to modern agriculture and real world problems."
          />
          <div className="mt-8 space-y-4">
            {[
              { icon: Sparkles, text: "AI, IoT and engineering form our technology foundation." },
              { icon: ShieldCheck, text: "AgriTech is our main application area, from irrigation to livestock." },
              { icon: Sparkles, text: "Systems are engineered and tested in house, and status is labelled honestly." },
            ].map((item) => (
              <div key={item.text} className="flex gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                  <item.icon className="h-5 w-5" />
                </span>
                <p className="pt-2 text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
          <Link
            to="/about"
            className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
          >
            Read our story <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-luxe">
              <img
                src={BRAND_IMAGES.pcb}
                alt="Electronics prototyping work at SYLUTION in Kano, Nigeria"
                className="h-[30rem] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="glass absolute -bottom-8 -left-4 w-56 rounded-2xl p-5 shadow-luxe sm:-left-8">
              <p className="font-display text-3xl font-extrabold text-gradient-brand">2024</p>
              <p className="mt-1 text-xs text-muted-foreground">
                The official development journey and engineering foundation of SYLUTION began.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* AGRITECH APPLICATION */}
      <section className="border-y border-border bg-surface section-y">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="AgriTech"
              title="AI + IoT + Engineering, applied to agriculture"
              description="Our technology foundation exists to solve agricultural problems. These are the areas where we apply it."
            />
            <div className="mt-8 flex flex-wrap gap-2">
              {["AI", "IoT", "Engineering"].map((x) => (
                <span key={x} className="rounded-full bg-primary/15 px-4 py-1.5 text-sm font-semibold text-primary">
                  {x}
                </span>
              ))}
              <span className="px-1 py-1.5 text-sm font-semibold text-muted-foreground">to</span>
              <span className="rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground">
                AgriTech
              </span>
            </div>
            <Link to="/industries" className="btn-base btn-ghost mt-8">
              Explore AgriTech <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="grid gap-3 sm:grid-cols-2">
              {AGRITECH_AREAS.map((a) => (
                <div key={a} className="rounded-2xl border border-border bg-card px-5 py-4 text-sm font-medium">
                  {a}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* PILLARS */}
      <section className="container-x section-y">
        <SectionHeading
          eyebrow="Technology foundation"
          title="Six technology pillars, one connected system"
          description="Each pillar works alone and works better together, from a single connected sensor to an AI advised farm."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <Link to="/solutions/$slug" params={{ slug: p.slug }} className="card-luxe group flex h-full flex-col p-7">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-primary transition-transform duration-500 group-hover:scale-110">
                  <p.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-display text-xl font-bold">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {SOLUTIONS.find((s) => s.slug === p.slug)?.summary}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Learn more <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <Link
            to="/solutions"
            className="btn-base btn-ghost"
          >
            View all {SOLUTIONS.length} solutions <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* SHOWCASE */}
      <section className="relative mt-10 overflow-hidden section-y">
        <div className="container-x">
          <SectionHeading
            eyebrow="In the field"
            title="Our technology work in pictures"
            description="Images from our systems, technology development, training sessions and agricultural activities."
            align="center"
          />

          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
            {GALLERY.filter((g) => g.category !== "Exhibitions").slice(0, 8).map((g, i) => (
              <Reveal key={`${g.src}-${i}`} delay={i * 0.05}>
                <div className="group relative overflow-hidden rounded-2xl">
                  <img
                    src={g.src}
                    alt={g.caption}
                    loading="lazy"
                    className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-110 sm:h-56"
                  />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-background/85 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <p className="absolute inset-x-0 bottom-0 translate-y-3 p-4 text-xs font-medium opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {g.caption}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/gallery"
              className="btn-base btn-primary"
            >
              Open the full gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="container-x section-y">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Newsroom" title="Latest from SYLUTION" />
          <Link to="/news" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
            All news <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {NEWS.slice(0, 3).map((n, i) => (
            <Reveal key={n.slug} delay={i * 0.08}>
              <article className="card-luxe h-full overflow-hidden">
                <img src={n.image} alt={n.title} loading="lazy" className="h-48 w-full object-cover" />
                <div className="p-6">
                  <p className="eyebrow">{n.category}</p>
                  <h3 className="mt-3 font-display text-lg font-bold leading-snug">{n.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{n.excerpt}</p>
                  <p className="mt-4 text-xs text-muted-foreground">
                    {new Date(n.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>


      <CTASection />
    </>
  );
}
