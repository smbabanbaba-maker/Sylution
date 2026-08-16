import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Brain, Cpu, GraduationCap, Sprout } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { BRAND_IMAGES } from "@/lib/site-data";

export const Route = createFileRoute("/platforms")({
  head: () => ({
    meta: [
      { title: "Products & Technology Platforms | SYLUTION LTD" },
      {
        name: "description",
        content:
          "Sysmart Agro, SYLUTION Academy, SYLUTION IoT and SYLUTION AI are the products, platforms and programmes operating under SYLUTION LTD.",
      },
      { property: "og:title", content: "Products & Technology Platforms | SYLUTION LTD" },
      {
        property: "og:description",
        content: "The SYLUTION ecosystem: one Nigerian innovation company, four technology platforms.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PlatformsPage,
});

const PLATFORMS = [
  {
    name: "SYSMART AGRO",
    tagline: "AI + IoT Powered Smart Agriculture",
    icon: Sprout,
    image: BRAND_IMAGES.sysmart,
    category: "AgriTech Platform",
    status: "Prototype / Development",
    description:
      "A technology platform applying IoT sensors, connected controllers, agricultural data and AI to modern agriculture and livestock production.",
    to: "/sysmart-agro",
    cta: "Explore Sysmart Agro",
  },
  {
    name: "SYLUTION ACADEMY",
    tagline: "AgriTech & Technology Training",
    icon: GraduationCap,
    image: BRAND_IMAGES.techTraining,
    category: "Training Programme",
    status: "Training Programme",
    description:
      "Practical training for youth, women, farmers, students and agripreneurs in AI, IoT, robotics, electronics, digital agriculture, livestock technology and drone technology.",
    to: "/training",
    cta: "Explore Training",
  },
  {
    name: "SYLUTION IoT",
    tagline: "Connected Technology & IoT Systems",
    icon: Cpu,
    image: BRAND_IMAGES.iotLab,
    category: "Technology Initiative",
    status: "Technology Initiative",
    description:
      "Sensors, smart devices, embedded systems, IoT connectivity, agricultural monitoring, data collection and smart automation.",
    to: "/iot",
    cta: "Explore IoT",
  },
  {
    name: "SYLUTION AI",
    tagline: "Artificial Intelligence & Intelligent Systems",
    icon: Brain,
    image: BRAND_IMAGES.ai,
    category: "Technology Initiative",
    status: "Technology Initiative",
    description:
      "AI applications, agricultural intelligence, computer vision, data analysis, decision support and intelligent automation.",
    to: "/ai",
    cta: "Explore AI",
  },
] as const;

function PlatformsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products & Platforms"
        title="One innovation company, four technology platforms"
        subtitle="Sysmart Agro, SYLUTION Academy, SYLUTION IoT and SYLUTION AI are products, platforms and programmes operating under SYLUTION LTD. They are not separately incorporated companies."
        image={BRAND_IMAGES.control}
        compact
      >
        <Link to="/contact" className="btn-base btn-primary">
          Partner with us <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      <section className="container-x section-y">
        <SectionHeading
          eyebrow="The ecosystem"
          title="How the SYLUTION family fits together"
          description="A single parent brand, a shared technology foundation and platforms that apply it to modern agriculture."
        />
        <Reveal>
          <div className="mt-12 card-luxe p-6 sm:p-10">
            <div className="text-center">
              <p className="eyebrow justify-center">Parent company</p>
              <h3 className="mt-3 font-display text-2xl font-extrabold sm:text-3xl">SYLUTION LTD</h3>
              <p className="mt-2 text-sm text-muted-foreground">Nigerian AgriTech & Technology Innovation Company</p>
            </div>
            <div aria-hidden className="mx-auto my-8 h-10 w-px bg-border" />
            <div className="grid gap-3 sm:grid-cols-4">
              {["Artificial Intelligence", "Internet of Things", "AgriTech", "Smart Technology"].map((f) => (
                <div
                  key={f}
                  className="rounded-2xl border border-border bg-surface px-4 py-3 text-center text-sm font-semibold"
                >
                  {f}
                </div>
              ))}
            </div>
            <div aria-hidden className="mx-auto my-8 h-10 w-px bg-border" />
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {PLATFORMS.map((p) => (
                <Link
                  key={p.name}
                  to={p.to}
                  className="group rounded-2xl border border-border bg-background px-4 py-4 text-center transition-colors hover:border-primary"
                >
                  <p.icon className="mx-auto h-5 w-5 text-primary" />
                  <p className="mt-2 font-display text-sm font-bold">{p.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{p.category}</p>
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="border-y border-border bg-surface section-y">
        <div className="container-x">
          <SectionHeading eyebrow="Platforms" title="Products & technology platforms" />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {PLATFORMS.map((p, i) => (
              <Reveal key={p.name} delay={(i % 2) * 0.08}>
                <article className="card-luxe group flex h-full flex-col overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="glass absolute left-4 top-4 rounded-full px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider">
                      {p.status}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/15 text-primary">
                      <p.icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-extrabold tracking-tight">{p.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-primary">{p.tagline}</p>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                    <dl className="mt-5 grid grid-cols-2 gap-3 text-xs">
                      <div className="rounded-xl border border-border p-3">
                        <dt className="text-muted-foreground">Category</dt>
                        <dd className="mt-1 font-semibold">{p.category}</dd>
                      </div>
                      <div className="rounded-xl border border-border p-3">
                        <dt className="text-muted-foreground">Status</dt>
                        <dd className="mt-1 font-semibold">{p.status}</dd>
                      </div>
                    </dl>
                    <Link to={p.to} className="btn-base btn-primary mt-6 self-start">
                      {p.cta} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
