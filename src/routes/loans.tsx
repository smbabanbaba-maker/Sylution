import { createFileRoute, Link } from "@tanstack/react-router";
import { Banknote, FileCheck2, ShieldCheck } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { StatusBadge } from "@/components/site/StatusKey";
import { U, BRAND_IMAGES } from "@/lib/site-data";

export const Route = createFileRoute("/loans")({
  head: () => ({
    meta: [
      { title: "Farm Technology Financing Concept | SYLUTION" },
      {
        name: "description",
        content:
          "SYLUTION is exploring a partner-led farm-technology financing concept. No loan applications are being accepted, and SYLUTION does not issue loans.",
      },
      { property: "og:title", content: "Farm Technology Financing Concept | SYLUTION" },
      {
        property: "og:description",
        content:
          "A future partner-led concept only; no financing applications are open and SYLUTION is not a lender.",
      },
    ],
  }),
  component: Loans,
});

const NOTICES = [
  {
    icon: FileCheck2,
    title: "Applications are not open",
    text: "There is no loan application form or active financing cohort on this website.",
  },
  {
    icon: ShieldCheck,
    title: "SYLUTION does not issue loans",
    text: "Any future financing would depend on an agreement with a suitable licensed finance partner.",
  },
  {
    icon: Banknote,
    title: "Partnership discussions only",
    text: "Banks and development organisations may contact SYLUTION to discuss a possible future pathway.",
  },
];

function Loans() {
  return (
    <>
      <PageHero
        eyebrow="Farm-finance concept"
        title="Exploring ways to finance farm technology"
        subtitle="SYLUTION is exploring a possible partner-led financing pathway for farm technology. This page is not accepting loan applications; SYLUTION does not lend or make credit decisions."
        image={BRAND_IMAGES.team}
        compact
      >
        <div className="flex flex-wrap items-center gap-3">
          <StatusBadge status="Future initiative" />
          <span className="text-sm font-semibold">No loan applications are open</span>
        </div>
      </PageHero>

      <section className="container-x section-y">
        <SectionHeading
          eyebrow="Current status"
          title="What this page does—and does not—offer"
          align="center"
        />
        <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {NOTICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07}>
              <div className="card-luxe h-full p-7">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-primary">
                  <s.icon className="h-6 w-6" />
                </span>
                <p className="mt-6 text-xs font-bold tracking-[0.2em] text-muted-foreground">
                  0{i + 1}
                </p>
                <h3 className="mt-2 font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="card-luxe mt-14 flex flex-wrap items-center justify-between gap-6 p-8">
            <div>
              <h3 className="font-display text-xl font-bold">
                Are you a lender or development partner?
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We welcome a conversation about a future financing concept. This is not an
                application or a commitment to provide finance.
              </p>
            </div>
            <Link
              to="/contact"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.04]"
            >
              Discuss future collaboration
            </Link>
          </div>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
