import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { INDUSTRIES, BRAND_IMAGES } from "@/lib/site-data";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve | SYLUTION Technology" },
      {
        name: "description",
        content:
          "SYLUTION is developing IoT, AI and electronics solutions for agriculture, energy, and connected environments.",
      },
      { property: "og:title", content: "Industries served by SYLUTION" },
      {
        property: "og:description",
        content: "Technology is our business. We are engineering connected systems for diverse applications.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Technology is our business, industry is where it lands"
        subtitle="The same connected foundation of sensing, networking, intelligence and control is tuned to the realities of each sector we serve."
        image={BRAND_IMAGES.city}
        compact
      />

      <section className="container-x section-y">
        <SectionHeading eyebrow="Sectors" title={`${INDUSTRIES.length} industries, one engineering standard`} />
        <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-3">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.name} delay={(i % 3) * 0.06}>
              <article className="card-luxe group flex h-full flex-col overflow-hidden">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={ind.image}
                    alt={ind.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-bold">{ind.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{ind.detail}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
