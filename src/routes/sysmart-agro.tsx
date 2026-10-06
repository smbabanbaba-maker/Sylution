import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Cpu, Droplets, Radio, Sun, Gauge, ClipboardCheck } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { StatusBadge } from "@/components/site/StatusKey";
import { BRAND_IMAGES, SYSMART_FLOW, SYSMART_OVERVIEW } from "@/lib/site-data";

export const Route = createFileRoute("/sysmart-agro")({
  head: () => ({
    meta: [
      { title: "Sysmart Agro | Flagship IoT Project by SYLUTION" },
      {
        name: "description",
        content:
          "Sysmart Agro is SYLUTION's smart-agriculture project in development and field testing, connecting farm sensors, an IoT controller, irrigation hardware and dashboard work. Its public mobile app is not yet released.",
      },
      { property: "og:title", content: "Sysmart Agro, IoT smart agriculture project by SYLUTION" },
      {
        property: "og:description",
        content:
          "A Kano-built smart-agriculture development project. Field sensing, a controller and irrigation hardware are under development and field testing; the public mobile app remains on the roadmap.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SysmartAgroPage,
});

const TECHNOLOGIES = [
  {
    icon: Cpu,
    title: "Embedded controller",
    detail: "Custom board around an ESP32 class microcontroller with local control logic.",
  },
  {
    icon: Droplets,
    title: "Soil and climate sensing",
    detail: "Soil moisture, temperature and humidity inputs read on a fixed interval.",
  },
  {
    icon: Radio,
    title: "Connectivity",
    detail: "GSM and Wi-Fi uplink, with LoRa under evaluation for wider field coverage.",
  },
  {
    icon: Sun,
    title: "Power",
    detail: "Solar and battery operation designed for sites without stable grid supply.",
  },
  {
    icon: Gauge,
    title: "Dashboard",
    detail:
      "Dashboard work covers field readings, thresholds and pump status; there is no public app release yet.",
  },
  {
    icon: ClipboardCheck,
    title: "Control",
    detail: "Relay driven pump and valve switching, manual override on the device.",
  },
];

function technologyAccent(title: string) {
  if (title === "Soil and climate sensing" || title === "Connectivity")
    return "bg-primary/15 text-primary";
  if (title === "Power") return "bg-primary/15 text-primary";
  return "bg-primary/15 text-primary";
}

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
        subtitle="Sysmart Agro connects field sensors, an IoT controller, irrigation hardware and dashboard work. The project is in development and field testing; a public mobile app is not yet released."
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

      <section className="container-x grid gap-12 section-y lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <Reveal>
          <div className="overflow-hidden rounded-3xl shadow-luxe">
            <img
              src={BRAND_IMAGES.sysmart}
              alt="Illustrative Sysmart Agro controller concept beside an irrigated crop field"
              width={1248}
              height={832}
              className="h-full w-full object-cover"
            />
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Illustrative product visualization; the screen reading is not a live field feed.
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <SectionHeading
            eyebrow="Project overview"
            title="A field-to-dashboard system in development"
            description="The project is being developed to connect soil and climate readings with an IoT controller, irrigation hardware and dashboard work. Pump and valve control remain under field validation; mobile app access is a roadmap item, not a live service."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {SYSMART_OVERVIEW.map((item) => (
              <article key={item.title} className="card-luxe p-5">
                <h3 className="font-display text-sm font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="border-y border-border bg-surface section-y">
        <div className="container-x">
          <SectionHeading
            eyebrow="Technologies used"
            title="System architecture"
            description="Hardware, connectivity and dashboard layers are being integrated; each capability remains subject to its stated testing or roadmap stage."
            align="center"
          />
          <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-3">
            {TECHNOLOGIES.map((t, i) => (
              <Reveal key={t.title} delay={(i % 3) * 0.07}>
                <div className="card-luxe h-full p-7">
                  <span
                    className={`grid h-12 w-12 place-items-center rounded-2xl ${technologyAccent(t.title)}`}
                  >
                    <t.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-display text-lg font-bold">{t.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.detail}</p>
                </div>
              </Reveal>
            ))}
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
