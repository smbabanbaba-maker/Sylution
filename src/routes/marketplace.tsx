import { createFileRoute, Link } from "@tanstack/react-router";
import { ShoppingBag, Truck, BadgeCheck, Timer } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { StatusBadge } from "@/components/site/StatusKey";
import { U, BRAND_IMAGES } from "@/lib/site-data";

export const Route = createFileRoute("/marketplace")({
  head: () => ({
    meta: [
      { title: "SYLUTION Marketplace Initiative" },
      {
        name: "description",
        content:
          "SYLUTION is developing a future marketplace direction for farmers, cooperatives and agribusinesses to discover agricultural technology and services from Kano, Nigeria.",
      },
      { property: "og:title", content: "SYLUTION Marketplace Initiative" },
      {
        property: "og:description",
        content:
          "A future marketplace direction for agricultural technology, equipment and services.",
      },
    ],
  }),
  component: Marketplace,
});

const FEATURES = [
  {
    icon: BadgeCheck,
    title: "Clearer discovery",
    text: "A future space to help visitors discover agricultural technology and service categories.",
  },
  {
    icon: Truck,
    title: "Service pathways",
    text: "A future structure for connecting technology enquiries with the right service conversation.",
  },
  {
    icon: ShoppingBag,
    title: "Technology categories",
    text: "Agricultural equipment and connected systems can be organised as the initiative develops.",
  },
  {
    icon: Timer,
    title: "Future availability",
    text: "Product and service availability will be confirmed directly by SYLUTION as the initiative advances.",
  },
];

function Marketplace() {
  return (
    <>
      <PageHero
        eyebrow="Marketplace"
        title={<>A marketplace idea—not a live shop</>}
        subtitle="We are exploring a future way to discover farm technology. There are no live listings, checkout, orders or payments on this page."
        image={BRAND_IMAGES.harvest}
        compact
      >
        <div className="flex flex-wrap items-center gap-3">
          <StatusBadge status="Future initiative" />
          <span className="text-sm font-semibold">No online ordering</span>
        </div>
      </PageHero>

      <section className="container-x section-y">
        <SectionHeading
          eyebrow="What to expect"
          title="Designed around trust, not just transactions"
          align="center"
        />
        <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.07}>
              <div className="card-luxe h-full p-7">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-primary">
                  <f.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-display text-lg font-bold">{f.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="card-luxe mt-14 flex flex-wrap items-center justify-between gap-6 p-8">
            <div>
              <h3 className="font-display text-xl font-bold">Want to shape the idea?</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Share what technology or service you would want to find. This is feedback only—it
                does not create an account, reserve an item or place an order.
              </p>
            </div>
            <Link
              to="/contact"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.04]"
            >
              Share marketplace feedback
            </Link>
          </div>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
