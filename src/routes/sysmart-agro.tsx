import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Cpu, Droplets, Radio, Sun, Gauge, ClipboardCheck } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { BRAND_IMAGES, SYSMART_FLOW } from "@/lib/site-data";

export const Route = createFileRoute("/sysmart-agro")({
  head: () => ({
    meta: [
      { title: "Sysmart Agro | Flagship IoT Project by SYLUTION" },
      {
        name: "description",
          content:
            "Sysmart Agro is the flagship IoT smart agriculture project of SYLUTION: a field controller with soil and climate sensing, remote irrigation control and a monitoring dashboard. Status: active project.",
        },
        { property: "og:title", content: "Sysmart Agro, IoT smart agriculture project by SYLUTION" },
        {
          property: "og:description",
          content:
            "Field controller, soil and climate sensing, remote irrigation control and dashboards, engineered in Kano, Nigeria. Currently in active development and field deployment.",
        },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SysmartAgroPage,
});

const OBJECTIVES = [
  "Give farmers accurate soil and climate data instead of guesswork.",
  "Automate irrigation so water and fuel are used only when required.",
  "Keep working where mobile coverage and grid power are unreliable.",
  "Stay affordable enough for smallholder and medium scale farms.",
  "Provide a data record that banks and programmes can verify.",
];

const TECHNOLOGIES = [
  { icon: Cpu, title: "Embedded controller", detail: "Custom board around an ESP32 class microcontroller with local control logic." },
  { icon: Droplets, title: "Soil and climate sensing", detail: "Soil moisture, temperature and humidity inputs read on a fixed interval." },
  { icon: Radio, title: "Connectivity", detail: "GSM and Wi-Fi uplink, with LoRa under evaluation for wider field coverage." },
  { icon: Sun, title: "Power", detail: "Solar and battery operation designed for sites without stable grid supply." },
  { icon: Gauge, title: "Dashboard", detail: "Web dashboard for readings, thresholds and pump status." },
  { icon: ClipboardCheck, title: "Control", detail: "Relay driven pump and valve switching, manual override on the device." },
];

const TIMELINE = [
  { phase: "Concept", detail: "Problem definition with farmers around Kano and requirement gathering.", state: "Completed" },
  { phase: "Circuit design", detail: "Schematic, component selection and bench validation.", state: "Completed" },
  { phase: "Engineering build", detail: "Enclosure, controller board, display and sensor integration.", state: "Completed" },
  { phase: "Field testing", detail: "Installation on test plots, endurance and reliability observation.", state: "In progress" },
  { phase: "Pilot deployment", detail: "Small group of farms running the full monitoring and control loop.", state: "Planned" },
  { phase: "Commercial release", detail: "Production units, support and documentation.", state: "Planned" },
];

const ROADMAP = [
  "Longer range LoRa gateway option for clustered farms",
  "Mobile application with offline access to readings",
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
        subtitle="An intelligent IoT powered smart agriculture platform developed by SYLUTION to improve productivity through connected technologies, smart monitoring and intelligent decision support."
        image={BRAND_IMAGES.sysmart}
        compact
      >
        <div className="flex flex-wrap items-center gap-3">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
            <span className="h-2 w-2 rounded-full bg-primary" /> Status: Active Project
          </span>
          <Link
            to="/contact"
            className="btn-base btn-primary"
          >
            Talk to the project team <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/projects"
            className="btn-base btn-ghost"
          >
            All projects
          </Link>
        </div>
      </PageHero>

      <section className="container-x grid gap-12 section-y lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <Reveal>
          <div className="overflow-hidden rounded-3xl shadow-luxe">
            <img
              src={BRAND_IMAGES.sysmart}
              alt="Sysmart Agro field controller installed beside an irrigated crop field"
              width={1248}
              height={832}
              className="h-full w-full object-cover"
            />
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Sysmart Agro controller displaying live soil moisture and pump state during field deployment.
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <SectionHeading
            eyebrow="Project overview"
            title="One box between the farmer and the field"
            description="Sysmart Agro reads what is happening in the soil and the air, decides whether water is needed, switches the pump and reports everything back to a dashboard. The system runs the full monitoring and control loop today on our field sites."
          />
          <ul className="mt-8 space-y-3">
            {OBJECTIVES.map((o) => (
              <li key={o} className="flex gap-3 text-sm text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {o}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="border-y border-border bg-surface section-y">
        <div className="container-x">
          <SectionHeading
            eyebrow="Technologies used"
            title="System architecture"
            description="Every layer of Sysmart Agro is engineered in house, from the board to the dashboard."
            align="center"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TECHNOLOGIES.map((t, i) => (
              <Reveal key={t.title} delay={(i % 3) * 0.07}>
                <div className="card-luxe h-full p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-primary">
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
          title="From sensors to smart decisions"
          description="The Sysmart Agro operational flow, from a reading in the soil to an irrigation decision on the farm."
          align="center"
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
              {[BRAND_IMAGES.sysmart, BRAND_IMAGES.irrigation, BRAND_IMAGES.greenhouse, BRAND_IMAGES.pcb].map((src) => (
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
