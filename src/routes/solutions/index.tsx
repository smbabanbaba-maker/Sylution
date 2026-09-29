import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { SOLUTIONS, U, BRAND_IMAGES } from "@/lib/site-data";

export const Route = createFileRoute("/solutions/")({
  head: () => ({
    meta: [
      { title: "Technology Solutions | SYLUTION" },
      {
        name: "description",
        content:
          "Explore SYLUTION solutions: IoT, AI, electronics, embedded systems, robotics, automation, software, drones, energy and smart agriculture technology.",
      },
      { property: "og:title", content: "Solutions, SYLUTION" },
      {
        property: "og:description",
        content:
          "Engineered technology capabilities delivered end to end across Nigeria and West Africa.",
      },
    ],
  }),
  component: SolutionsIndex,
});

function SolutionsIndex() {
  return (
    <>
      <PageHero
        eyebrow="Engineering services"
        title="Technology designed around your problem"
        subtitle="We design and develop sensors, controllers, firmware, dashboards and connected systems, with agriculture as our main application area. These pages describe our engineering capabilities—not products in stock. We confirm scope and availability after an enquiry."
        image={BRAND_IMAGES.iotLab}
        compact
      />

      <section className="container-x section-y">
        <SectionHeading
          eyebrow="What we can work on"
          title={`${SOLUTIONS.length} engineering and training areas`}
          description="Choose a capability to see the kind of work it covers. For every enquiry, the team confirms fit, timing and availability before agreeing any work."
        />
        <p className="mt-5 max-w-3xl text-xs leading-relaxed text-muted-foreground">
          A capability page is not a promise that a finished product is ready to order. Product and
          research stages are shown separately on the Products and Projects pages.
        </p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.07}>
              <Link
                to="/solutions/$slug"
                params={{ slug: s.slug }}
                className="card-luxe group flex h-full flex-col overflow-hidden"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="eyebrow">{s.tagline}</p>
                  <h3 className="mt-3 flex items-start justify-between gap-3 font-display text-lg font-bold">
                    {s.title}
                    <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.summary}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
