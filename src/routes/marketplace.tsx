import { createFileRoute, Link } from "@tanstack/react-router";
import { ShoppingBag, Truck, BadgeCheck, Timer } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { U, BRAND_IMAGES } from "@/lib/site-data";

export const Route = createFileRoute("/marketplace")({
  head: () => ({
    meta: [
      { title: "Marketplace, Coming Soon | SYLUTION" },
      {
        name: "description",
        content:
          "The SYLUTION Marketplace will connect farmers with verified equipment, inputs, spare parts and buyers. Launching soon from Kano, Nigeria.",
      },
      { property: "og:title", content: "SYLUTION Marketplace, Coming Soon" },
      { property: "og:description", content: "Verified agricultural equipment, inputs and buyers in one trusted platform." },
    ],
  }),
  component: Marketplace,
});

const FEATURES = [
  { icon: BadgeCheck, title: "Verified suppliers", text: "Every listing inspected and rated by our field team." },
  { icon: Truck, title: "Logistics built in", text: "Delivery and installation scheduled at checkout." },
  { icon: ShoppingBag, title: "Spare parts", text: "Genuine components for irrigation, solar and machinery." },
  { icon: Timer, title: "Live availability", text: "Real stock levels from our service points." },
];

function Marketplace() {
  return (
    <>
      <PageHero
        eyebrow="Marketplace"
        title={
          <>
            A trusted place to buy, sell and service farm technology{" "}
            <span className="text-gradient-brand"> coming soon</span>
          </>
        }
        subtitle="We are building a marketplace where farmers, cooperatives and agribusinesses can source verified equipment, inputs and spare parts, and reach buyers with confidence."
        image={BRAND_IMAGES.harvest}
        compact
      >
        <span className="glass inline-flex items-center gap-3 rounded-full px-5 py-2.5 text-sm font-semibold">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
          </span>
          Launching soon
        </span>
      </PageHero>

      <section className="container-x section-y">
        <SectionHeading eyebrow="What to expect" title="Designed around trust, not just transactions" align="center" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
                Tell us what you plan to buy or sell and we will contact you before launch.
              </p>
            </div>
            <Link
              to="/contact"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.04]"
            >
              Join the waitlist
            </Link>
          </div>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
