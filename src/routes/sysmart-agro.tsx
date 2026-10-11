import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, ClipboardCheck, Cpu, Droplets, Gauge, Radio, Sun } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { StatusBadge } from "@/components/site/StatusKey";
import { BRAND_IMAGES, SYSMART_FLOW, SYSMART_OVERVIEW } from "@/lib/site-data";
import { SITE_ORIGIN } from "@/lib/seo";

const SYSMART_URL = `${SITE_ORIGIN}/sysmart-agro`;
const SYSMART_CONTROLLER_IMAGE = `${SITE_ORIGIN}${BRAND_IMAGES.sysmartController}`;

export const Route = createFileRoute("/sysmart-agro")({
  head: () => ({
    links: [{ rel: "canonical", href: SYSMART_URL }],
    meta: [
      { title: "Sysmart Agro | Flagship IoT Project by SYLUTION" },
      {
        name: "description",
        content:
          "Explore the Sysmart Agro field controller and SYLUTION's smart-agriculture design scope for farm sensing, fertigation and irrigation. The project remains in development and field testing.",
      },
      { property: "og:title", content: "Sysmart Agro, IoT smart agriculture project by SYLUTION" },
      {
        property: "og:description",
        content:
          "A Kano-built smart-agriculture project with a custom field-controller concept. Sensing, fertigation and irrigation capabilities remain under development and field validation.",
      },
      { property: "og:url", content: SYSMART_URL },
      { property: "og:image", content: SYSMART_CONTROLLER_IMAGE },
      {
        property: "og:image:alt",
        content: "SYSMART Agro field-controller engineering concept shown from multiple angles",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: SYSMART_CONTROLLER_IMAGE },
    ],
  }),
  component: SysmartAgroPage,
});

const CORE_CAPABILITIES = [
  {
    icon: Droplets,
    title: "Field monitoring and fertigation",
    detail:
      "Designed to give operators a clearer view of root-zone conditions and the water delivered to crops.",
    features: [
      "Soil and substrate moisture around crop roots",
      "Greenhouse temperature and relative humidity",
      "Fertigation-water pH and electrical conductivity (EC)",
      "Water-level and other key field readings",
    ],
  },
  {
    icon: Gauge,
    title: "Irrigation and control",
    detail:
      "A controller concept for supervising irrigation equipment and applying configured operating rules.",
    features: [
      "Monitor pumps, valves and irrigation activity",
      "Pump and solenoid-valve control under field validation",
      "Configured schedules and crop-specific thresholds",
      "Multi-zone irrigation planning and local manual override",
    ],
  },
  {
    icon: Radio,
    title: "Connected farm operations",
    detail:
      "The intended data layer helps teams review conditions, system activity and resource-use decisions.",
    features: [
      "Remote monitoring through a connected dashboard",
      "Alerts for readings outside configured ranges",
      "Historical readings and system activity records",
      "GSM/Wi-Fi development; LoRa remains under evaluation",
      "Solar integration for suitable off-grid sites",
      "Farm data to inform irrigation and water-use decisions",
    ],
  },
] as const;

const FARM_TYPES = [
  "Commercial greenhouses",
  "Irrigated and vegetable farms",
  "Hydroponic and soilless systems",
  "Agricultural research projects",
  "Smart-farm demonstrations",
  "Government agriculture programmes",
  "Agricultural companies and institutions",
];

const TIMELINE = [
  {
    phase: "Concept",
    detail: "Problem definition with farmers around Kano and requirement gathering.",
    state: "Completed",
  },
  {
    phase: "Circuit design",
    detail: "Schematic, component selection and bench validation.",
    state: "Completed",
  },
  {
    phase: "Engineering build",
    detail: "Enclosure, controller board, display and sensor integration.",
    state: "Completed",
  },
  {
    phase: "Field testing",
    detail: "Installation on test plots, endurance and reliability observation.",
    state: "In progress",
  },
  {
    phase: "Pilot deployment",
    detail: "Small group of farms running the full monitoring and control loop.",
    state: "Planned",
  },
  {
    phase: "Commercial release",
    detail: "Production units, support and documentation.",
    state: "Planned",
  },
];

const ROADMAP = [
  "Longer range LoRa gateway option for clustered farms",
  "Public mobile app and offline access to readings (planned, not released)",
  "Multi zone irrigation scheduling",
  "Predictive advice from accumulated field data",
  "Local manufacturing and assembly of production units",
];

function SysmartAgroPage() {
  return (
    <>
      <PageHero
        eyebrow="Flagship project"
        title="Sysmart Agro"
        subtitle="SYLUTION's smart-agriculture, irrigation and farm-monitoring platform in development—designed to connect field sensing, an IoT controller, irrigation hardware and data tools."
        image={BRAND_IMAGES.sysmart}
        compact
      >
        <div className="flex flex-wrap items-center gap-3">
          <StatusBadge status="Active Project" />
          <span className="text-sm font-semibold">
            In development and field testing—not for online purchase.
          </span>
          <Link to="/contact" className="btn-base btn-primary">
            Talk to the project team <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/projects" className="btn-base btn-ghost">
            All projects
          </Link>
        </div>
      </PageHero>

      <section
        id="field-controller"
        className="sysmart-quiet-section container-x grid gap-12 section-y lg:grid-cols-[1.05fr_1fr] lg:items-start"
      >
        <Reveal>
          <figure>
            <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-luxe">
              <img
                src={BRAND_IMAGES.sysmartController}
                alt="SYSMART Agro field-controller design concept, with front, side, back and enclosure views"
                width={1536}
                height={1024}
                loading="lazy"
                className="aspect-[3/2] h-auto w-full object-contain"
              />
            </div>
            <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">
              Engineering concept image. Display readings are illustrative—not live farm data—and
              enclosure dimensions may change as testing continues.
            </figcaption>
          </figure>
        </Reveal>
        <Reveal delay={0.12}>
          <SectionHeading
            eyebrow="Hardware component · Sysmart Agro"
            title="The Sysmart Agro field controller"
            description="A custom enclosure concept for bringing field-sensing and irrigation-control electronics together. Sensor integration, connectivity and pump/valve operation continue through development and field validation."
          />
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <StatusBadge status="Testing" />
            <span className="text-sm font-semibold text-muted-foreground">
              Prototype scope · not available to order
            </span>
          </div>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {SYSMART_OVERVIEW.map((item) => (
              <article key={item.title} className="card-luxe p-5">
                <h3 className="font-display text-sm font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
              </article>
            ))}
          </div>
          <div className="mt-5 rounded-2xl border border-primary/20 bg-primary/5 p-4">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
              Enclosure design reference
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Approximately 200 × 220 × 90 mm as illustrated; final dimensions may change after
              prototype and field testing.
            </p>
          </div>
        </Reveal>
      </section>

      <section
        id="capability-scope"
        className="sysmart-quiet-section border-y border-border bg-surface section-y"
      >
        <div className="container-x">
          <SectionHeading
            eyebrow="Designed capability scope"
            title="From crop conditions to irrigation decisions"
            description="The intended platform combines sensing, irrigation equipment and farm data. The features below describe the design scope; they should not be read as a claim that every function is already live."
            align="center"
          />
          <div className="mt-8 flex items-start gap-3 rounded-2xl border border-primary/20 bg-primary/5 p-4 sm:p-5">
            <ClipboardCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              <span className="font-bold text-foreground">Development status:</span> Sensor readings
              and the controller are in field testing; pump/valve rules, connectivity and dashboard
              functions remain under validation or development. Alerts, historical records,
              multi-zone operation and solar integration are design capabilities. The public mobile
              app is not released and the system is not available for online purchase.
            </p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {CORE_CAPABILITIES.map((group) => (
              <Reveal key={group.title}>
                <article className="card-luxe h-full p-6 sm:p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-primary">
                    <group.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold">{group.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {group.detail}
                  </p>
                  <ul className="mt-5 space-y-3">
                    {group.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm leading-relaxed"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <article className="rounded-3xl bg-foreground p-7 text-white shadow-luxe sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">
                Our goal
              </p>
              <h3 className="mt-4 font-display text-2xl font-bold leading-tight">
                Practical smart farming for African conditions.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                By combining sensing, automation, IoT connectivity and agricultural data, SYLUTION
                aims to help farms improve operational visibility, manage water and inputs more
                efficiently, and make better-informed decisions.
              </p>
            </article>
            <article className="card-luxe p-7 sm:p-8">
              <h3 className="font-display text-lg font-bold">Designed for</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Different farm and institutional settings, with final configurations scoped to site
                needs.
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {FARM_TYPES.map((farmType) => (
                  <li
                    key={farmType}
                    className="rounded-full border border-border bg-surface px-3 py-2 text-xs font-semibold"
                  >
                    {farmType}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="container-x section-y">
        <SectionHeading
          eyebrow="How it works"
          title="How the system is designed to work"
          description="The intended flow from a field reading to an irrigation decision. Several software and control layers remain under development or field validation."
          align="center"
        />
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {SYSMART_FLOW.map((f, i) => (
            <Reveal key={f.step} delay={(i % 4) * 0.07}>
              <div className="card-luxe relative h-full p-6">
                <span className="font-display text-xs font-extrabold uppercase tracking-[0.2em] text-primary">
                  Step {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-base font-bold">{f.step}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x section-y">
        <SectionHeading
          eyebrow="Development timeline"
          title="Where the project stands today"
          description="We publish the real state of each phase. Nothing here is marked complete before it is."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {TIMELINE.map((p, i) => (
            <Reveal key={p.phase} delay={(i % 3) * 0.07}>
              <div className="card-luxe h-full p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-base font-bold">{p.phase}</h3>
                  <span
                    className={`rounded-full px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide ${
                      p.state === "Completed"
                        ? "bg-primary/15 text-primary"
                        : p.state === "In progress"
                          ? "bg-foreground/10 text-foreground"
                          : "border border-border text-muted-foreground"
                    }`}
                  >
                    {p.state}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface section-y">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow="Future roadmap" title="What comes next" />
            <ul className="mt-8 space-y-3">
              {ROADMAP.map((r) => (
                <li key={r} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {r}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.12}>
            <SectionHeading eyebrow="Gallery" title="Project images" />
            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                BRAND_IMAGES.sysmart,
                BRAND_IMAGES.irrigation,
                BRAND_IMAGES.greenhouse,
                BRAND_IMAGES.pcb,
              ].map((src) => (
                <div key={src} className="overflow-hidden rounded-2xl">
                  <img
                    src={src}
                    alt="Sysmart Agro development and field environment"
                    loading="lazy"
                    className="h-40 w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
