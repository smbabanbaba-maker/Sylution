import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap, ArrowRight } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { TRAINING_PROGRAMMES, U, BRAND_IMAGES } from "@/lib/site-data";

export const Route = createFileRoute("/training")({
  head: () => ({
    meta: [
      { title: "SYLUTION Academy, Drone, AI, Solar and Agritech Training" },
      {
        name: "description",
        content:
          "SYLUTION Academy delivers hands-on training in drones, AI, robotics, smart irrigation, solar, greenhouse, agribusiness, digital agriculture, youth and women programmes.",
      },
      { property: "og:title", content: "SYLUTION Academy, Agricultural Technology Training" },
      {
        property: "og:description",
        content: "Practical certification programmes taught in English, Hausa and French at our Kano centre.",
      },
    ],
  }),
  component: Training,
});

function Training() {
  return (
    <>
      <PageHero
        eyebrow="SYLUTION Academy"
        title="Technology only creates value when people can run it"
        subtitle="Practical, certified training for farmers, technicians, students, cooperatives and institutions, delivered in English, Hausa and French, on real equipment, in real fields."
        image={BRAND_IMAGES.training}
        compact
      >
        <Link
          to="/contact"
          className="btn-base btn-primary"
        >
          Enrol or request a cohort <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      <section className="container-x section-y">
        <SectionHeading
          eyebrow="Programmes"
          title="Eleven programmes, one practical standard"
          description="Every programme mixes classroom fundamentals with supervised hands-on operation, and closes with assessment and certification."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TRAINING_PROGRAMMES.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.07}>
              <article className="card-luxe group flex h-full flex-col overflow-hidden">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary">
                    <GraduationCap className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.detail}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface section-y">
        <div className="container-x grid gap-10 lg:grid-cols-3">
          {[
            { value: "Hands on", label: "Practical sessions on real equipment" },
            { value: "3", label: "Languages of instruction: English, Hausa, French" },
            { value: "Open", label: "Youth, women, students and institutions welcome" },
          ].map((s, i) => (

            <Reveal key={s.label} delay={i * 0.08}>
              <p className="font-display text-4xl font-extrabold text-gradient-brand">{s.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
