import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { PRODUCTS, BRAND_IMAGES } from "@/lib/site-data";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Technology Products and Devices | SYLUTION" },
      {
        name: "description",
        content:
          "The SYLUTION product catalogue: IoT controllers, smart sensors, irrigation units, industrial controllers, energy monitors, trackers and research prototypes.",
      },
      { property: "og:title", content: "SYLUTION Products" },
      {
        property: "og:description",
        content: "Connected devices designed and developed in Nigeria.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Connected devices, engineered and manufactured locally"
        subtitle="Every product in this catalogue is designed in our own labs and tested in our own centre for real-world reliability."
        image={BRAND_IMAGES.device}
        compact
      >
        <Link
          to="/contact"
          className="btn-base btn-primary"
        >
          Request a specification sheet <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      <section className="container-x section-y">
        <SectionHeading eyebrow="Catalogue" title="Devices and systems" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.name} delay={(i % 4) * 0.06}>
              <article className="card-luxe group flex h-full flex-col overflow-hidden">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="glass absolute left-3 top-3 rounded-full px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider">
                    {p.status}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-base font-bold">{p.name}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.detail}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface section-y">
        <div className="container-x text-center">
          <SectionHeading
            eyebrow="Marketplace"
            title="Coming soon"
            description="An online marketplace for SYLUTION devices, spare parts and partner technology is in development."
            align="center"
          />
          <Link
            to="/marketplace"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-accent"
          >
            Join the waitlist <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
