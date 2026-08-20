import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { AI_CAPABILITIES, BRAND_IMAGES } from "@/lib/site-data";

export const Route = createFileRoute("/ai")({
  head: () => ({
    meta: [
      { title: "Artificial Intelligence Engineering | SYLUTION" },
      {
        name: "description",
        content:
          "Computer vision, machine learning, and predictive analytics under research by SYLUTION to enhance the intelligence of agricultural and connected systems.",
      },
      { property: "og:title", content: "Artificial Intelligence at SYLUTION" },
      {
        property: "og:description",
        content: "Models trained on locally collected data, with research into edge and cloud deployment.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AIPage,
});

const PIPELINE = [
  { step: "01", title: "Data", detail: "Collect and label agricultural datasets from our own field work and research." },
  { step: "02", title: "Train", detail: "Build and benchmark models against measurable operational targets." },
  { step: "03", title: "Deploy", detail: "Ship to edge devices and cloud services with monitoring built in." },
  { step: "04", title: "Improve", detail: "Retrain continuously as new field data arrives." },
];

function AIPage() {
  return (
    <>
      <PageHero
        eyebrow="Artificial Intelligence"
        title="The intelligence behind connected systems"
        subtitle="Our IoT devices measure the world. Our AI decides what to do about it, on the edge when the network is gone and in the cloud when scale matters."
        image={BRAND_IMAGES.ai}
      >
        <Link
          to="/contact"
          className="btn-base btn-primary"
        >
          Talk to our AI team <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      <section className="container-x section-y">
        <SectionHeading
          eyebrow="Capability"
          title="Focusing on Applied AI"
          description="Our AI research is measured against real-world targets: accuracy in the field, operational efficiency, and cost reduction."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {AI_CAPABILITIES.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 0.06}>
              <div className="card-luxe h-full p-7">
                <h3 className="font-display text-lg font-bold">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface section-y">
        <div className="container-x">
          <SectionHeading eyebrow="Method" title="From raw telemetry to deployed intelligence" align="center" />
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {PIPELINE.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.07}>
                <div className="card-luxe h-full p-6">
                  <p className="font-display text-3xl font-extrabold text-gradient-brand">{p.step}</p>
                  <h3 className="mt-4 font-display text-base font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x section-y">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Edge AI"
              title="Intelligence that works offline"
              description="Our models run on low cost edge hardware so a factory, clinic or farm keeps making decisions when connectivity fails, then syncs when it returns."
            />
            <div className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border">
              {[
                { v: "Target", l: "94% Field Accuracy" },
                { v: "Target", l: "<3s Inference" },
                { v: "Target", l: "40k+ Labelled Images" },
              ].map((s) => (
                <div key={s.l} className="glass px-4 py-5">
                  <p className="font-display text-xl font-extrabold text-gradient-brand">{s.v}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{s.l}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="overflow-hidden rounded-3xl shadow-luxe">
              <img
                src={BRAND_IMAGES.iotLab}
                alt="SYLUTION engineers validating edge AI hardware"
                loading="lazy"
                width={1600}
                height={1008}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
