import { createFileRoute, Link } from "@tanstack/react-router";
import { Banknote, FileCheck2, LineChart, ShieldCheck } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { U, BRAND_IMAGES } from "@/lib/site-data";

export const Route = createFileRoute("/loans")({
  head: () => ({
    meta: [
      { title: "Loan Application, Coming Soon | SYLUTION" },
      {
        name: "description",
        content:
          "SYLUTION is building an equipment and input financing application for farmers and agribusinesses, in partnership with banks and development funders.",
      },
      { property: "og:title", content: "Loan Application, Coming Soon | SYLUTION" },
      { property: "og:description", content: "Farm technology financing designed with banks and development partners." },
    ],
  }),
  component: Loans,
});

const STEPS = [
  { icon: FileCheck2, title: "Apply in minutes", text: "A short digital form with document upload from any phone." },
  { icon: LineChart, title: "Data-backed scoring", text: "Farm records and telemetry strengthen the application." },
  { icon: ShieldCheck, title: "Partner underwriting", text: "Reviewed by licensed banks and development funders." },
  { icon: Banknote, title: "Equipment disbursed", text: "Funds released against verified equipment and installation." },
];

function Loans() {
  return (
    <>
      <PageHero
        eyebrow="Loan Application"
        title={
          <>
            Financing for farm technology <span className="text-gradient-brand"> coming soon</span>
          </>
        }
        subtitle="We are working with banks and development partners to make irrigation, solar, greenhouses and machinery affordable through structured, transparent financing."
        image={BRAND_IMAGES.team}
        compact
      >
        <span className="glass inline-flex items-center gap-3 rounded-full px-5 py-2.5 text-sm font-semibold">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
          </span>
          Applications open soon
        </span>
      </PageHero>

      <section className="container-x section-y">
        <SectionHeading eyebrow="How it will work" title="Four steps from application to installed equipment" align="center" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
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
              <h3 className="font-display text-xl font-bold">Are you a lender or development partner?</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We are onboarding underwriting partners for the first financing cohort.
              </p>
            </div>
            <Link
              to="/contact"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.04]"
            >
              Talk to our team
            </Link>
          </div>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
