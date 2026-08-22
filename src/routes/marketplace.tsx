import { createFileRoute, Link } from "@tanstack/react-router";
import { ShoppingBag, Truck, BadgeCheck, Timer } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
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
        title={<>A future place to discover and connect around farm technology</>}
        subtitle="We are exploring a marketplace direction where farmers, cooperatives and agribusinesses can discover technology categories and begin informed conversations with suppliers and service providers."
        image={BRAND_IMAGES.harvest}
        compact
      >
        <span className="glass inline-flex items-center gap-3 rounded-full px-5 py-2.5 text-sm font-semibold">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
          </span>
          Future product initiative
        </span>
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
              <h3 className="font-display text-xl font-bold">Want early access?</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Tell us what technology or service you want to explore and we will record your
                interest as the initiative develops.
              </p>
            </div>
            <Link
              to="/contact"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.04]"
            >
              Register interest
            </Link>
          </div>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
