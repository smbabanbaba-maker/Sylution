import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { ELECTRONICS_CAPABILITIES, BRAND_IMAGES } from "@/lib/site-data";

export const Route = createFileRoute("/electronics")({
  head: () => ({
    meta: [
      { title: "Electronics Engineering and PCB Design | SYLUTION" },
      {
        name: "description",
        content:
          "PCB design, circuit design, embedded hardware, sensors, firmware and device manufacturing engineered and assembled at the SYLUTION workshop in Kano, Nigeria.",
      },
      { property: "og:title", content: "Electronics Engineering at SYLUTION" },
      {
        property: "og:description",
        content: "From schematic to production: boards, firmware, enclosures and testing under one roof.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ElectronicsPage,
});

const PLATFORMS = ["ESP32", "STM32", "Arduino", "Raspberry Pi", "nRF52", "LoRa SX127x"];

function ElectronicsPage() {
  return (
    <>
      <PageHero
        eyebrow="Electronics"
        title="Boards designed, built and tested in Kano"
        subtitle="Schematic capture, multilayer PCB layout, firmware, enclosure and small batch manufacturing, delivered by one team so hardware and software are never out of step."
        image={BRAND_IMAGES.pcb}
      >
        <Link
          to="/contact"
          className="btn-base btn-primary"
        >
          Start a hardware project <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      <section className="container-x section-y">
        <SectionHeading
          eyebrow="Capability"
          title="Full electronics product development"
          description="We take a product from an idea on a whiteboard to a tested, documented and manufacturable device."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ELECTRONICS_CAPABILITIES.map((c, i) => (
            <Reveal key={c.title} delay={(i % 4) * 0.06}>
              <div className="card-luxe h-full p-7">
                <h3 className="font-display text-base font-bold">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface section-y">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Platforms"
              title="The silicon we build on"
              description="Chosen for availability, cost and long term support in African supply chains."
            />
            <div className="mt-8 flex flex-wrap gap-2.5">
              {PLATFORMS.map((p) => (
                <span
                  key={p}
                  className="rounded-full border border-border px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                >
                  {p}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="overflow-hidden rounded-3xl shadow-luxe">
              <img
                src={BRAND_IMAGES.electronics}
                alt="Electronics assembly and bench testing at SYLUTION"
                loading="lazy"
                width={1600}
                height={1008}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-x section-y">
        <SectionHeading eyebrow="Standards" title="Built to survive the environment it ships into" align="center" />
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border sm:grid-cols-4">
          {[
            { v: "Target Spec", l: "6-Week Cycle" },
            { v: "Target Spec", l: "-10 to 60 C Range" },
            { v: "Target Spec", l: "100% Test Coverage" },
            { v: "Target Spec", l: "98.4% Yield" },
          ].map((s) => (
            <div key={s.l} className="glass px-4 py-6 text-center">
              <p className="font-display text-lg font-extrabold text-gradient-brand">{s.v}</p>
              <p className="mt-1 text-xs text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
