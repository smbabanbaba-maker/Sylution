import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Brain,
  Bot,
  CircuitBoard,
  Cpu,
  Droplets,
  GraduationCap,
  Plane,
  Radio,
  ShieldCheck,
  Sparkles,
  Sprout,
  Sun,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { CaseStudies } from "@/components/site/CaseStudies";
import { TechnicalAssessmentCTA } from "@/components/site/TechnicalAssessmentCTA";
import {
  SOLUTIONS,
  STATS,
  NEWS,
  GALLERY,
  BRAND_IMAGES,
  AGRITECH_AREAS,
  EXHIBITION_IMAGES,
  PRODUCT_CATEGORIES,
} from "@/lib/site-data";
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
      {
        property: "og:title",
        content: "SYLUTION LTD | AgriTech Innovation Powered by AI, IoT & Smart Technology",
      },
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
  {
    icon: Brain,
    title: "Artificial Intelligence",
    detail: "Agricultural intelligence & decision support",
    slug: "artificial-intelligence",
  },
  {
    icon: Radio,
    title: "Internet of Things",
    detail: "Connected devices, sensors & automation",
    slug: "iot",
  },
  {
    icon: CircuitBoard,
    title: "Electronics",
    detail: "Controllers, embedded systems & hardware",
    slug: "electronics",
  },
  { icon: Bot, title: "Robotics", detail: "Automation & intelligent machines", slug: "robotics" },
  {
    icon: Plane,
    title: "Drone Technology",
    detail: "Agricultural observation & data collection",
    slug: "drone-technology",
  },
  {
    icon: Sun,
    title: "Solar Technology",
    detail: "Powering smart systems in real environments",
    slug: "solar-technology",
  },
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

const TECHNOLOGY_FLOW = [
  {
    step: "01",
    label: "Sense",
    title: "Sensors & Electronics",
    detail: "Measure the field and the machine.",
    icon: CircuitBoard,
  },
  {
    step: "02",
    label: "Connect",
    title: "IoT & Connectivity",
    detail: "Move useful signals from remote sites.",
    icon: Radio,
  },
  {
    step: "03",
    label: "Intelligence",
    title: "AI & Data",
    detail: "Turn readings into clearer decisions.",
    icon: Brain,
  },
  {
    step: "04",
    label: "Automate",
    title: "Control & Robotics",
    detail: "Close the loop with practical action.",
    icon: Bot,
  },
  {
    step: "05",
    label: "Impact",
    title: "Smart Agriculture",
    detail: "Apply engineering to real systems.",
    icon: Sprout,
  },
];

const SYSMART_SYSTEM = [
  { label: "Field", detail: "Agricultural conditions", icon: Sprout },
  { label: "Sensors", detail: "Soil & climate sensing", icon: Activity },
  { label: "IoT", detail: "Connected controller", icon: Radio },
  { label: "AI / Data", detail: "Agricultural intelligence", icon: Brain },
  { label: "Irrigation", detail: "Smart control", icon: Droplets },
  { label: "Monitoring", detail: "Live dashboard", icon: Cpu },
];

const PROOF_POINTS = [
  { value: "Kano", label: "Nigeria" },
  { value: "Active", label: "Projects" },
  { value: "Engineering", label: "& R&D" },
  { value: "Technology", label: "Training" },
  { value: "Strategic", label: "Partnerships" },
];

const TRAINING_AREAS = [
  "AI",
  "IoT",
  "Robotics",
  "Electronics",
  "Drone Technology",
  "Modern Agriculture",
  "Smart Farming",
];

function Home() {
  const { t } = useLang();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const fade = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  return (
    <>
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative isolate min-h-[100svh] overflow-hidden bg-[var(--soft-white)] text-foreground"
      >
        <motion.div style={{ y }} className="absolute inset-0 -z-20">
          <img
            src={BRAND_IMAGES.sysmart}
            alt="Sysmart Agro smart agriculture system in an irrigated field"
            className="hero-image-live absolute inset-0 h-full w-full object-cover object-center"
            loading="eager"
          />
        </motion.div>
        <div aria-hidden className="veil-side absolute inset-0 -z-10" />
        <div aria-hidden className="circuit-overlay pointer-events-none absolute inset-0 -z-10" />
        <div aria-hidden className="signal-sweep pointer-events-none -z-10" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_32%,color-mix(in_oklab,var(--brand)_18%,transparent),transparent_28%)]"
        />
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-60">
          <span className="absolute left-[12%] top-[34%] h-2 w-2 rounded-full bg-primary shadow-glow" />
          <span className="absolute left-[12.5%] top-[35%] h-px w-[22%] origin-left rotate-[12deg] bg-primary/35" />
          <span className="absolute right-[19%] top-[27%] h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          <span className="absolute right-[18%] top-[28%] h-px w-[17%] origin-left rotate-[155deg] bg-primary/30" />
          <span className="absolute bottom-[23%] left-[45%] h-1.5 w-1.5 rounded-full border border-primary/70" />
          <span className="absolute bottom-[23.35%] left-[45.2%] h-px w-[18%] origin-left rotate-[-8deg] bg-primary/30" />
        </div>

        <motion.div
          style={{ opacity: fade }}
          className="container-x flex min-h-[100svh] flex-col justify-center pb-20 pt-28 sm:pb-24 sm:pt-32"
        >
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
            <Link to="/sysmart-agro" className="btn-base btn-primary group">
              Explore Sysmart Agro
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/contact" className="btn-base btn-ghost">
              Talk to an Engineer
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
                <p className="font-display text-2xl font-extrabold text-gradient-brand sm:text-3xl">
                  {s.value}
                </p>
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
              <span
                key={i}
                className="flex items-center gap-10 text-sm font-semibold tracking-wide text-muted-foreground"
              >
                {a}
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY FLOW */}
      <section className="container-x section-y">
        <SectionHeading
          eyebrow="Technology flow"
          title="From sensing to real-world impact"
          description="A connected engineering foundation that brings field signals, intelligence and practical control into one system."
        />
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-5">
          {TECHNOLOGY_FLOW.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.06}>
              <div className="group relative h-full rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-display text-xs font-extrabold tracking-[0.2em] text-primary">
                    {item.step}
                  </span>
                  <item.icon className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                </div>
                <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-primary">
                  {item.label}
                </p>
                <h3 className="mt-2 font-display text-lg font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                {i < TECHNOLOGY_FLOW.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute -right-3 top-1/2 z-10 hidden h-px w-6 bg-primary/40 md:block"
                  />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SYSMART AGRO PRODUCT STORY */}
      <section className="border-y border-border bg-surface section-y">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <Reveal>
              <div className="media-frame relative aspect-[4/3]">
                <img
                  src={BRAND_IMAGES.sysmart}
                  alt="Sysmart Agro controller operating beside an irrigated crop field"
                  loading="lazy"
                />
                <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/85 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-primary backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Active Project
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="eyebrow">
                <span aria-hidden className="h-px w-8 shrink-0 bg-primary" /> Flagship project
              </p>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl">
                Sysmart Agro
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                SYSMART AGRO is an IoT-powered smart agriculture system combining soil and climate
                sensing, smart irrigation control, monitoring and agricultural intelligence.
              </p>
              <div className="mt-7 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                {SYSMART_SYSTEM.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-border bg-card px-3 py-4"
                  >
                    <item.icon className="h-4 w-4 text-primary" />
                    <p className="mt-3 text-sm font-semibold">{item.label}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/sysmart-agro" className="btn-base btn-primary group">
                  Explore the project{" "}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/projects" className="btn-base btn-ghost">
                  View all projects
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SYSTEM VISUAL */}
      <section className="container-x section-y">
        <SectionHeading
          eyebrow="System view"
          title="Field signals, connected decisions"
          description="The Sysmart Agro flow, presented as a clear operating sequence rather than a claim about commercial availability."
          align="center"
        />
        <div className="relative mt-12 grid grid-cols-2 gap-3 lg:grid-cols-6">
          {SYSMART_SYSTEM.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.05}>
              <div className="card-luxe h-full p-5 text-center">
                <span className="mx-auto grid h-11 w-11 place-items-center rounded-2xl bg-primary/15 text-primary">
                  <item.icon className="h-5 w-5" />
                </span>
                <p className="mt-4 font-display text-sm font-bold">{item.label}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* OUR PRODUCTS */}
      <section className="border-y border-border bg-surface section-y-sm">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Our products"
              title="Intelligent products. Connected systems. Real-world solutions."
              description="A focused ecosystem spanning smart devices, IoT, AgriTech, robotics, drone and solar engineering."
            />
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              Explore Products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-5">
            {PRODUCT_CATEGORIES.map((category, index) => (
              <Reveal key={category.slug} delay={index * 0.05}>
                <Link
                  to="/products"
                  className="group block h-full overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
                >
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full border border-white/40 bg-white/90 px-2 py-1 text-[0.55rem] font-bold uppercase tracking-[0.1em] text-primary">
                      {category.status}
                    </span>
                  </div>
                  <div className="p-4">
                    <p className="text-[0.6rem] font-bold uppercase tracking-[0.16em] text-primary">
                      0{index + 1}
                    </p>
                    <h3 className="mt-2 font-display text-sm font-bold leading-tight">
                      {category.shortName}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-muted-foreground">
                      {category.detail}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-primary">
                      Explore Products{" "}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AGRITECH APPLICATION */}
      <section className="border-y border-border bg-surface section-y">
        <div className="container-x grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="AgriTech"
              title="AI + IoT + Engineering, applied to agriculture"
              description="Our technology foundation exists to solve agricultural problems. These are the areas where we apply it."
            />
            <div className="mt-8 flex flex-wrap gap-2">
              {["AI", "IoT", "Engineering"].map((x) => (
                <span
                  key={x}
                  className="rounded-full bg-primary/15 px-4 py-1.5 text-sm font-semibold text-primary"
                >
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
              {AGRITECH_AREAS.slice(0, 9).map((a, i) => (
                <div
                  key={a}
                  className={`group rounded-2xl border border-border bg-card px-5 py-4 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 ${i === 0 ? "sm:col-span-2 bg-primary/8" : ""}`}
                >
                  <span className="mr-3 inline-block h-1.5 w-1.5 rounded-full bg-primary align-middle transition-transform duration-300 group-hover:scale-150" />
                  {a}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* TECHNOLOGY FOUNDATION */}
      <section className="container-x section-y">
        <SectionHeading
          eyebrow="Technology foundation"
          title="Six pillars, one connected system"
          description="Each pillar works alone and works better together, from a connected sensor to an AI-advised farm."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <Link
                to="/solutions/$slug"
                params={{ slug: p.slug }}
                className="group card-luxe flex h-full flex-col p-7"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-primary transition-transform duration-300 group-hover:scale-110">
                    <p.icon className="h-6 w-6" />
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.detail}
                </p>
                <span className="mt-6 text-sm font-semibold text-primary">Learn more</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ENGINEERING IN THE REAL WORLD */}
      <section className="border-y border-border bg-surface section-y">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Engineering in the real world"
              title="Systems, tools and people at work"
              description="A visual record of SYLUTION technology development, field work, training and agricultural applications."
            />
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              Open the gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-3 md:grid-cols-12 md:grid-rows-2">
            {[
              {
                src: BRAND_IMAGES.sysmart,
                label: "Sysmart Agro",
                className: "md:col-span-5 md:row-span-2",
              },
              { src: BRAND_IMAGES.iotLab, label: "IoT sensors", className: "md:col-span-3" },
              { src: BRAND_IMAGES.pcb, label: "Electronics", className: "md:col-span-4" },
              { src: BRAND_IMAGES.drone, label: "Drone technology", className: "md:col-span-3" },
              {
                src: BRAND_IMAGES.greenhouse,
                label: "Greenhouse & irrigation",
                className: "md:col-span-4",
              },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 0.05} className={item.className}>
                <figure className="group relative h-full min-h-48 overflow-hidden rounded-3xl border border-border bg-card">
                  <img
                    src={item.src}
                    alt={item.label}
                    loading="lazy"
                    className="h-full min-h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 p-5 text-sm font-semibold">
                    {item.label}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINING */}
      <section className="container-x section-y">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <Reveal>
            <div className="media-frame aspect-[4/3]">
              <img
                src={BRAND_IMAGES.training}
                alt="SYLUTION practical technology training session"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="eyebrow">
              <span aria-hidden className="h-px w-8 shrink-0 bg-primary" /> SYLUTION Academy
            </p>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl">
              Building the next generation of technology talent
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Practical training that connects people with AI, IoT, electronics, robotics, drones
              and modern agriculture.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {TRAINING_AREAS.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-muted-foreground"
                >
                  {area}
                </span>
              ))}
            </div>
            <p className="mt-7 text-sm font-semibold text-foreground">
              Youth · Women · Farmers · Students · Agripreneurs
            </p>
            <Link to="/training" className="btn-base btn-ghost mt-8">
              Explore training <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* PROOF / CREDIBILITY */}
      <section className="border-y border-border bg-surface section-y-sm">
        <div className="container-x">
          <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-3 lg:grid-cols-5">
            {PROOF_POINTS.map((point) => (
              <div key={point.label} className="bg-card px-5 py-6 text-center">
                <p className="font-display text-lg font-extrabold text-gradient-brand">
                  {point.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {point.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CaseStudies />

      {/* NEWS */}
      <section className="container-x section-y">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Newsroom"
            title="Latest from SYLUTION"
            description="Selected project, technology and training updates."
          />
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            All news <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3">
          {NEWS.slice(0, 3).map((n, i) => (
            <Reveal key={n.slug} delay={i * 0.08}>
              <article className="card-luxe group h-full overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src={n.image}
                    alt={n.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="eyebrow">{n.category}</p>
                  <h3 className="mt-3 font-display text-lg font-bold leading-snug">{n.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{n.excerpt}</p>
                  <p className="mt-4 text-xs text-muted-foreground">
                    {new Date(n.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* VISUAL ENGAGEMENT */}
      <section className="border-y border-border bg-surface section-y-sm">
        <div className="container-x">
          <SectionHeading
            eyebrow="In the field"
            title="The work, as it actually looks"
            description="Existing SYLUTION images from systems, exhibitions, training and agricultural activities."
            align="center"
          />
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
            {GALLERY.filter((g) => g.category !== "Exhibitions")
              .slice(0, 8)
              .map((g, i) => (
                <Reveal key={`${g.src}-${i}`} delay={i * 0.04}>
                  <div className="group relative overflow-hidden rounded-2xl">
                    <img
                      src={g.src}
                      alt={g.caption}
                      loading="lazy"
                      className="h-40 w-full object-cover transition-transform duration-700 group-hover:scale-110 sm:h-52"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-background/85 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                    <p className="absolute inset-x-0 bottom-0 translate-y-3 p-4 text-xs font-medium opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      {g.caption}
                    </p>
                  </div>
                </Reveal>
              ))}
          </div>
        </div>
      </section>

      <TechnicalAssessmentCTA />
      <CTASection />
    </>
  );
}
