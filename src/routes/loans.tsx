import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Handshake, Leaf, Sun, Tractor } from "lucide-react";
import { CTASection } from "@/components/site/CTASection";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { BRAND_IMAGES } from "@/lib/site-data";

export const Route = createFileRoute("/loans")({
  head: () => ({
    meta: [
      { title: "Farm Technology Finance Partnerships | SYLUTION" },
      {
        name: "description",
        content:
          "SYLUTION is exploring responsible financing partnerships for farm technology. No loan applications are open through this website at this time.",
      },
      { name: "robots", content: "noindex, follow" },
      { property: "og:title", content: "Farm Technology Finance Partnerships | SYLUTION" },
      {
        property: "og:description",
        content: "An early-stage partnership initiative. No loan applications are currently open.",
      },
    ],
  }),
  component: Loans,
});

const AREAS = [
  {
    icon: Leaf,
    title: "Irrigation & water",
    text: "Exploring finance pathways for irrigation technology and water systems.",
  },
  {
    icon: Sun,
    title: "Solar energy",
    text: "Considering solar equipment and energy systems for farm operations.",
  },
  {
    icon: Tractor,
    title: "Farm equipment",
    text: "Discussing machinery and greenhouse technology with potential partners.",
  },
];

function Loans() {
  return (
    <>
      <PageHero
        eyebrow="Partnership initiative"
        title="Building a responsible path to farm technology."
        subtitle="SYLUTION is exploring equipment-financing pathways for irrigation, solar, greenhouses and machinery with banks and development partners."
        image={BRAND_IMAGES.irrigation}
        compact
      >
        <span className="status-pill status-pill--planned">
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[var(--coral)]" />
          Planning stage · no applications open
        </span>
      </PageHero>

      <section className="container-x section-y">
        <SectionHeading
          eyebrow="Areas under discussion"
          title="Designed with partners, not promised prematurely."
          description="Any future financing would depend on independently agreed terms, eligible equipment and participating finance providers."
        />
        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {AREAS.map((area, index) => (
            <Reveal key={area.title} delay={index * 0.05}>
              <article className="card-luxe h-full p-6 sm:p-7">
                <span className="capability-icon">
                  <area.icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold">{area.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{area.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="notice-panel mt-8 flex flex-col gap-4 sm:flex-row sm:items-start">
            <Handshake aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div>
              <h3 className="font-display font-bold">
                Important: this is not a loan application page.
              </h3>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                No applications are open, and financing is not being offered or guaranteed through
                this website. We welcome enquiries from banks, development partners and institutions
                interested in discussing a future programme.
              </p>
            </div>
          </div>
        </Reveal>
        <div className="mt-7">
          <Link to="/contact" className="btn-base btn-primary">
            Discuss a partnership <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
