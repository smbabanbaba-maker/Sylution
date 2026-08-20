import { createFileRoute } from "@tanstack/react-router";
import { Bot, Cpu, Radio, Wrench, CircuitBoard, FlaskConical, Boxes, Rocket } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { RelatedServices } from "@/components/site/RelatedServices";
import { U, BRAND_IMAGES } from "@/lib/site-data";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research & Development, SYLUTION Innovation Centre" },
      {
        name: "description",
        content:
          "Inside the SYLUTION Innovation Centre in Kano: AI, robotics, IoT, engineering, electronics, testing, system development and future agricultural projects.",
      },
      { property: "og:title", content: "Research & Development, SYLUTION Innovation Centre" },
      {
        property: "og:description",
        content: "AI, robotics, IoT, electronics and system development for African agriculture.",
      },
    ],
  }),
  component: Research,
});

const LABS = [
  { icon: Cpu, title: "Artificial Intelligence", text: "Vision models, forecasting and voice advisory trained on locally captured data." },
  { icon: Bot, title: "Robotics", text: "Autonomous and semi-autonomous field machines for spraying, seeding and inspection." },
  { icon: Radio, title: "IoT", text: "LoRa and GSM telemetry, gateway design and long-life battery engineering." },
  { icon: Wrench, title: "Engineering", text: "Mechanical, electrical and civil design for agricultural installations." },
  { icon: CircuitBoard, title: "Electronics", text: "Schematic, PCB, firmware and small-batch assembly in our own workshop." },
  { icon: FlaskConical, title: "Testing", text: "Environmental, durability and accuracy testing before any field release." },
  { icon: Boxes, title: "System Development", text: "3D printing, CNC and rapid iteration from concept to working unit." },
  { icon: Rocket, title: "Future Projects", text: "Autonomous irrigation swarms, farm-level carbon accounting, offline AI advisory." },
];

const PIPELINE = [
  { step: "01", title: "Problem identification", text: "Farmer conversations and field observation define the real problem." },
  { step: "02", title: "Research", text: "Literature, components, costs and local conditions are studied." },
  { step: "03", title: "Engineering", text: "A functional system is designed, built and assembled in our workspace." },
  { step: "04", title: "Testing", text: "Bench testing for accuracy, power, durability and reliability." },
  { step: "05", title: "Field validation", text: "The system runs in real farm conditions and is measured." },
  { step: "06", title: "Product development", text: "Findings are turned into a documented, repeatable product." },
];


function Research() {
  return (
    <>
      <PageHero
        eyebrow="Innovation Centre"
        title="Where the next generation of African farm technology is built"
        subtitle="Our Innovation Centre at the Technology Incubation Centre, Kano, houses electronics benches, a prototyping bay, drone workshop, testing rigs and research labs, all under one roof."
        image={BRAND_IMAGES.electronics}
        compact
      />

      <section className="container-x section-y">
        <SectionHeading
          eyebrow="Capabilities"
          title="Eight disciplines under one roof"
          description="Research at SYLUTION is not theoretical. Every programme is aimed at producing practical solutions for field application."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {LABS.map((l, i) => (
            <Reveal key={l.title} delay={(i % 4) * 0.07}>
              <div className="card-luxe h-full p-7">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-primary">
                  <l.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-display text-lg font-bold">{l.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{l.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface section-y">
        <div className="container-x">
          <SectionHeading eyebrow="Pipeline" title="From research question to system validation in six stages" align="center" />
          <div className="mt-12 grid gap-4 md:grid-cols-5">
            {PIPELINE.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.07}>
                <div className="card-luxe h-full p-6">
                  <p className="font-display text-3xl font-extrabold text-gradient-brand">{p.step}</p>
                  <h3 className="mt-4 font-display text-base font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x section-y">
        <SectionHeading eyebrow="Inside the centre" title="Facilities" />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            { src: BRAND_IMAGES.lab, label: "Laboratory analysis" },
            { src: BRAND_IMAGES.electronics, label: "System instrumentation" },
            { src: BRAND_IMAGES.team, label: "Engineering review" },
          ].map((f, i) => (
            <Reveal key={f.label} delay={i * 0.08}>
              <div className="group relative overflow-hidden rounded-2xl">
                <img
                  src={f.src}
                  alt={f.label}
                  loading="lazy"
                  className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
                <p className="absolute bottom-4 left-5 text-sm font-semibold">{f.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <RelatedServices exclude="research" />
      <CTASection />
    </>
  );
}
