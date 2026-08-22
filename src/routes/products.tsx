import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, CircleDot } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { PRODUCT_CATEGORIES, PRODUCTS, BRAND_IMAGES } from "@/lib/site-data";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Intelligent Products and Connected Systems | SYLUTION LTD" },
      {
        name: "description",
        content:
          "Explore SYLUTION LTD intelligent products and connected systems across Smart Devices, IoT and Electronics, AgriTech, Robotics and Drone, and Solar and Energy.",
      },
      {
        property: "og:title",
        content: "SYLUTION LTD | Intelligent Products and Connected Systems",
      },
      {
        property: "og:description",
        content:
          "AI, IoT, embedded systems, AgriTech, robotics, drone and solar technology developed for real-world applications.",
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
        eyebrow="Products ecosystem"
        title="Intelligent products, connected systems"
        subtitle="SYLUTION develops technology across AI, IoT, electronics, embedded systems, robotics, drone and solar engineering—with AgriTech as our main application area."
        image={BRAND_IMAGES.device}
        compact
      >
        <div className="flex flex-wrap gap-3">
          <a href="#ecosystem" className="btn-base btn-primary">
            Explore products <ArrowRight className="h-4 w-4" />
          </a>
          <Link to="/contact" className="btn-base btn-ghost">
            Discuss a product
          </Link>
        </div>
      </PageHero>

      <section id="ecosystem" className="container-x section-y">
        <SectionHeading
          eyebrow="Our products"
          title="Intelligent products. Connected systems. Real-world solutions."
          description="A focused product ecosystem for practical engineering—not an online electronics shop. The work moves through design, development, testing, field deployment and improvement, with each category labelled honestly."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-5">
          {PRODUCT_CATEGORIES.map((category, index) => (
            <Reveal key={category.slug} delay={index * 0.06}>
              <article className="card-luxe group flex h-full flex-col overflow-hidden">
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full border border-white/40 bg-white/90 px-2.5 py-1 text-[0.58rem] font-bold uppercase tracking-[0.12em] text-primary">
                    {category.status}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-2 font-display text-base font-bold leading-tight">
                    {category.name}
                  </h2>
                  <p className="mt-3 flex-1 text-xs leading-relaxed text-muted-foreground">
                    {category.detail}
                  </p>
                  <ul className="mt-4 space-y-1.5 text-[0.68rem] text-muted-foreground">
                    {category.items.slice(0, 4).map((item) => (
                      <li key={item} className="flex gap-2">
                        <Check className="mt-0.5 h-3 w-3 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#catalogue"
                    className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-primary"
                  >
                    Explore products <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="catalogue" className="border-y border-border bg-surface section-y">
        <div className="container-x">
          <SectionHeading
            eyebrow="Technology catalogue"
            title="Projects and product directions"
            description="These are the current product and technology directions in our engineering pipeline. Status labels are deliberate: they do not imply commercial availability or completed client deployment."
          />
          <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
            {PRODUCTS.map((product, index) => (
              <Reveal key={product.name} delay={(index % 4) * 0.06}>
                <article className="card-luxe group flex h-full flex-col overflow-hidden">
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full border border-white/40 bg-white/90 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-wider text-primary">
                      {product.status}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-primary">
                      <CircleDot className="h-3 w-3" />
                      {product.category}
                    </div>
                    <h3 className="mt-3 font-display text-base font-bold">{product.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {product.detail}
                    </p>
                    <dl className="mt-5 space-y-2 border-t border-border pt-4 text-xs">
                      <div>
                        <dt className="font-bold uppercase tracking-[0.12em] text-foreground">
                          Technology
                        </dt>
                        <dd className="mt-1 leading-relaxed text-muted-foreground">
                          {product.technology}
                        </dd>
                      </div>
                      <div>
                        <dt className="font-bold uppercase tracking-[0.12em] text-foreground">
                          Application
                        </dt>
                        <dd className="mt-1 leading-relaxed text-muted-foreground">
                          {product.application}
                        </dd>
                      </div>
                    </dl>
                    <Link
                      to="/contact"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                    >
                      Explore with SYLUTION <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x section-y-sm">
        <div className="grid gap-8 rounded-3xl border border-border bg-card p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="eyebrow">Future product pages</p>
            <h2 className="mt-4 font-display text-2xl font-bold sm:text-3xl">
              A clear path from engineering direction to specification
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Future detailed pages can carry product overview, features, specifications,
              technology, use cases, gallery, documentation and partnership information as each
              direction becomes verified and ready.
            </p>
          </div>
          <Link to="/contact" className="btn-base btn-primary">
            Request a specification sheet <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="border-y border-border bg-surface section-y-sm">
        <div className="container-x text-center">
          <SectionHeading
            eyebrow="Marketplace"
            title="Online ordering is coming later"
            description="A future marketplace may support SYLUTION devices, kits and agricultural technology. Until then, contact the team for a technical discussion and current project status."
            align="center"
          />
          <Link
            to="/marketplace"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-accent"
          >
            Visit marketplace <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
