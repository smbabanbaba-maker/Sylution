import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, LineChart, Cpu, Users, ShieldCheck, Globe2 } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { BRAND_IMAGES, CONTACT } from "@/lib/site-data";

export const Route = createFileRoute("/investors")({
  head: () => ({
    meta: [
      { title: "Investors | SYLUTION IoT and Electronics Engineering" },
      {
        name: "description",
        content:
          "Investor information for SYLUTION, an IoT, AI and electronics engineering company in Kano, Nigeria: what we build, where we are today and how to request a conversation.",
      },
      { property: "og:title", content: "Invest in SYLUTION" },
      {
        property: "og:description",
        content:
          "An early stage African technology company building IoT hardware, AI and electronics in house. Company profile available for download.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: InvestorsPage,
});

const WHY = [
  { icon: Cpu, title: "In house engineering", detail: "Hardware, firmware, connectivity, cloud and interfaces are built by one team, not outsourced." },
  { icon: Globe2, title: "Underserved market", detail: "Industrial and agricultural operations across West Africa still run without instrumentation." },
  { icon: LineChart, title: "Product pathway", detail: "A flagship platform, Sysmart Agro, in active development and field deployment." },
  { icon: Users, title: "Talent pipeline", detail: "Our academy trains the engineers we and our partners will need." },
  { icon: ShieldCheck, title: "Honest reporting", detail: "We publish real project stages. No inflated deployment or revenue figures." },
  { icon: Download, title: "Documentation", detail: "A company profile is available now, with further material shared on request." },
];

const STAGE = [
  { label: "Company stage", value: "Early stage, engineering led" },
  { label: "Flagship product", value: "Sysmart Agro, active project" },
  { label: "Base", value: "Technology Incubation Centre, Kano" },
  { label: "Capital use", value: "Prototyping, field pilots, production tooling" },
];

function InvestorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Investors"
        title="Backing African engineering"
        subtitle="SYLUTION is an early stage IoT, AI and electronics engineering company open to strategic investment and partnerships. This page describes where we genuinely are and what capital would be used for."
        image={BRAND_IMAGES.pcb}
        compact
      >
        <div className="flex flex-wrap gap-3">
          <Link
            to="/company-profile"
            className="btn-base btn-primary"
          >
            Download the company profile <Download className="h-4 w-4" />
          </Link>
          <Link
            to="/contact"
            className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:scale-[1.04]"
          >
            Request a conversation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </PageHero>

      <section className="container-x section-y">
        <div className="grid gap-px overflow-hidden rounded-3xl border border-border sm:grid-cols-2 lg:grid-cols-4">
          {STAGE.map((s) => (
            <div key={s.label} className="glass px-6 py-7">
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{s.label}</p>
              <p className="mt-2 font-display text-base font-bold">{s.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x pb-20">
        <SectionHeading
          eyebrow="Investment case"
          title="Why SYLUTION"
          description="Six reasons an investor or development financier should look closely at what we are building."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w, i) => (
            <Reveal key={w.title} delay={(i % 3) * 0.07}>
              <div className="card-luxe h-full p-7">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-primary">
                  <w.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-display text-lg font-bold">{w.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface section-y">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Documents"
              title="What is available today"
              description="More detailed material, including technical documentation and financial planning, is shared directly after an introductory conversation."
            />
            <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Company profile PDF, available for immediate download
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Sysmart Agro project overview and current status
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Investor deck and financial model, on request
              </li>
            </ul>
            <div className="mt-8 space-y-1 text-sm text-muted-foreground">
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
          </Reveal>
          <Reveal delay={0.12}>
            <div className="overflow-hidden rounded-3xl shadow-luxe">
              <img
                src={BRAND_IMAGES.iotLab}
                alt="SYLUTION engineers validating IoT hardware in the laboratory"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
