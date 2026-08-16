import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Handshake, GraduationCap, Landmark, Factory, FlaskConical, Building2 } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { BRAND_IMAGES, CONTACT } from "@/lib/site-data";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners and Collaboration | SYLUTION" },
      {
        name: "description",
        content:
          "Partner with SYLUTION on IoT, AI and electronics engineering: universities, research institutions, industry, government programmes, NGOs and technology suppliers.",
      },
      { property: "og:title", content: "Partner with SYLUTION" },
      {
        property: "og:description",
        content:
          "Collaboration pathways for universities, industry, government, NGOs and suppliers working with an IoT and electronics engineering company in Kano, Nigeria.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PartnersPage,
});

const TYPES = [
  { icon: GraduationCap, title: "Universities and polytechnics", detail: "Joint laboratories, student projects, internships and curriculum support in IoT and embedded systems." },
  { icon: FlaskConical, title: "Research institutions", detail: "Instrumentation, data collection platforms and co authored applied research." },
  { icon: Factory, title: "Industry", detail: "Machine telemetry, automation and monitoring deployed on your plant or site." },
  { icon: Landmark, title: "Government programmes", detail: "Infrastructure monitoring, programme instrumentation and verifiable field data." },
  { icon: Building2, title: "NGOs and development partners", detail: "Technology delivery and measurement for funded rural and climate programmes." },
  { icon: Handshake, title: "Technology suppliers", detail: "Components, modules, connectivity and distribution partnerships." },
];

const STEPS = [
  { n: "01", t: "Introduction", d: "Send us a short note about your organisation and the outcome you want." },
  { n: "02", t: "Technical discussion", d: "Our engineers review feasibility, constraints and the work involved." },
  { n: "03", t: "Scope and agreement", d: "We define deliverables, responsibilities and a realistic timeline." },
  { n: "04", t: "Delivery", d: "Engineering, deployment, training and continued support." },
];

function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partners"
        title="Collaboration built on engineering"
        subtitle="SYLUTION works with academic, industrial, public and development organisations. We list partnerships only once an agreement exists, so this page shows how to start one rather than logos we have not earned."
        image={BRAND_IMAGES.techTraining}
        compact
      >
        <Link
          to="/contact"
          className="btn-base btn-primary"
        >
          Start a partnership conversation <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      <section className="container-x section-y">
        <SectionHeading
          eyebrow="Who we work with"
          title="Six collaboration pathways"
          description="Each pathway has a different starting point, but all of them run through our engineering team in Kano."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TYPES.map((t, i) => (
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
      </section>

      <section className="border-y border-border bg-surface section-y">
        <div className="container-x">
          <SectionHeading eyebrow="Process" title="How a partnership begins" align="center" />
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.07}>
                <div className="card-luxe h-full p-6">
                  <p className="font-display text-3xl font-extrabold text-gradient-brand">{s.n}</p>
                  <h3 className="mt-4 font-display text-base font-bold">{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x section-y">
        <div className="card-luxe grid gap-8 p-8 sm:p-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <SectionHeading eyebrow="Partner enquiries" title="Reach the partnership desk" />
            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <p>{CONTACT.address}</p>
              <p>
                <a href={`mailto:${CONTACT.email}`} className="font-semibold text-primary">
                  {CONTACT.email}
                </a>
              </p>
              {CONTACT.phones.map((p) => (
                <p key={p}>
                  <a href={`tel:${p}`} className="hover:text-foreground">
                    {p}
                  </a>
                </p>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img
              src={BRAND_IMAGES.team}
              alt="SYLUTION engineering team in a working session"
              loading="lazy"
              className="h-64 w-full object-cover"
            />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
