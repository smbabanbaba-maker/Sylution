import { createFileRoute } from "@tanstack/react-router";
import { Compass, Target, Gem, Users } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { STATS, U, BRAND_IMAGES } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About SYLUTION, Our Story, Vision, Mission and Values" },
      {
        name: "description",
        content:
          "The story of SYLUTION: an African innovation company at TIC Kano building agricultural technology, with our vision, mission, core values and leadership approach.",
      },
      { property: "og:title", content: "About SYLUTION" },
      {
        property: "og:description",
        content: "Our story, vision, mission and core values as an African agricultural innovation company.",
      },
    ],
  }),
  component: About,
});

const TIMELINE = [
  { year: "2024", title: "The idea begins", text: "The SYLUTION idea takes shape in Kano, around AI, IoT and agriculture." },
  { year: "2024", title: "Early development", text: "First learning, research and electronics experiments begin in earnest." },
  { year: "2025", title: "Prototype work", text: "Sensor nodes, controllers and dashboard prototypes are built and tested." },
  { year: "2025", title: "Sysmart Agro", text: "Our flagship smart farming system enters prototype and testing." },
  { year: "2026", title: "Company registration and growth", text: "SYLUTION LTD operates from the Technology Incubation Centre, Kano." },
];


const VALUES = [
  { icon: Gem, title: "Excellence", text: "Nothing leaves our workshop until it survives the field, not just the bench." },
  { icon: Users, title: "Farmer first", text: "Every product starts with a farmer interview and ends with farmer results." },
  { icon: Compass, title: "Integrity", text: "Honest measurement, honest reporting, honest pricing, with every partner." },
  { icon: Target, title: "Impact", text: "We measure ourselves in yield, water saved, energy displaced and income gained." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About SYLUTION"
        title="Built in Kano. Engineered for the continent."
        subtitle="SYLUTION is an innovation company working at the intersection of agriculture, engineering and artificial intelligence, creating technology that African farms can actually own, run and profit from."
        image={BRAND_IMAGES.harvest}
        compact
      />

      <section className="container-x grid gap-14 section-y lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="overflow-hidden rounded-3xl shadow-luxe">
            <img
              src={BRAND_IMAGES.drone}
              alt="SYLUTION team planning a deployment"
              loading="lazy"
              className="h-[28rem] w-full object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading
            eyebrow="Our story"
            title="It started with one irrigation block and a stubborn question"
            description="Why should a farmer in northern Nigeria pay more for water, fuel and inputs than a farmer anywhere else, and get less certainty in return?"
          />
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              We began by installing sensor-driven irrigation on a small block of land near Kano, running it against a
              conventional plot season after season. The data was unambiguous: less water, less diesel, more yield.
            </p>
            <p>
              That result funded the next system, then the next. Today SYLUTION designs its own electronics,
              writes its own software, flies its own drones, trains thousands of farmers and delivers full projects
              for banks, governments, NGOs, universities and private estates.
            </p>
            <p>
              We remain a Nigerian company with a continental ambition, proving that world-class agricultural
              technology can be conceived, engineered and supported from Africa itself.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="border-y border-border bg-surface section-y">
        <div className="container-x grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <p className="font-display text-4xl font-extrabold text-gradient-brand">{s.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x grid gap-6 section-y md:grid-cols-2">
        <Reveal>
          <div className="card-luxe h-full p-8">
            <p className="eyebrow">Vision</p>
            <h2 className="mt-4 font-display text-2xl font-bold">
              An Africa where every farm is precise, powered and profitable.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We see a continent where technology is not imported as a favour but engineered locally, maintained
              locally and owned by the people who work the land.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="card-luxe h-full p-8">
            <p className="eyebrow">Mission</p>
            <h2 className="mt-4 font-display text-2xl font-bold">
              To design, build and deploy agricultural technology that measurably raises income.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We deliver irrigation, energy, intelligence and training as one integrated service, installed
              properly, supported locally and proven with data.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="container-x pb-20">
        <SectionHeading eyebrow="Core values" title="Four commitments that govern every project" align="center" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.07}>
              <div className="card-luxe h-full p-7">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-primary">
                  <v.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-display text-lg font-bold">{v.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x pb-20">
        <SectionHeading eyebrow="Milestones" title="How we grew" />
        <div className="mt-12 space-y-3">
          {TIMELINE.map((item, i) => (
            <Reveal key={item.year} delay={i * 0.06}>
              <div className="grid gap-4 rounded-2xl border border-border bg-surface p-6 sm:grid-cols-[7rem_1fr] sm:items-center">
                <p className="font-display text-2xl font-extrabold text-gradient-brand">{item.year}</p>
                <div>
                  <h3 className="font-display text-base font-bold">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>


      <CTASection />
    </>
  );
}
