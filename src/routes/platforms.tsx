import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Brain, Cpu, GraduationCap, Sprout } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { StatusBadge } from "@/components/site/StatusKey";
import { BRAND_IMAGES } from "@/lib/site-data";

export const Route = createFileRoute("/platforms")({
  head: () => ({
    meta: [
      { title: "Our Work: Services, Projects and Training | SYLUTION LTD" },
      {
        name: "description",
        content:
          "SYLUTION LTD provides engineering services and practical training, and develops projects such as Sysmart Agro. No products on this page are available for online purchase.",
      },
      { property: "og:title", content: "SYLUTION | Services, Projects and Training" },
      {
        property: "og:description",
        content:
          "A clear guide to SYLUTION engineering services, product development and practical training in Kano, Nigeria.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.sylution.com.ng/platforms" }],
  }),
  component: PlatformsPage,
});

const PLATFORMS = [
  {
    name: "SYSMART AGRO",
    tagline: "AI + IoT Powered Smart Agriculture",
    icon: Sprout,
    image: BRAND_IMAGES.sysmart,
    category: "AgriTech development project",
    status: "Active Project",
    description:
      "Our flagship smart-agriculture project combines IoT sensors, a connected controller and monitoring. It is in development and field testing—not available to purchase online.",
    to: "/sysmart-agro",
    cta: "View project status",
  },
  {
    name: "SYLUTION ACADEMY",
    tagline: "AgriTech & Technology Training",
    icon: GraduationCap,
    image: BRAND_IMAGES.techTraining,
    category: "Training programme",
    status: "Ongoing",
    description:
      "Hands-on training for youth, women, farmers, students and agripreneurs. Ask the Academy to confirm the next available dates or group cohort.",
    to: "/training",
    cta: "Ask about training",
  },
  {
    name: "SYLUTION IoT",
    tagline: "Connected Technology & IoT Systems",
    icon: Cpu,
    image: BRAND_IMAGES.iotLab,
    category: "Engineering service",
    status: "Service by enquiry",
    description:
      "An engineering service area covering sensors, embedded systems, connected devices, monitoring and automation. Scope and availability are confirmed after an enquiry.",
    to: "/iot",
    cta: "Explore IoT services",
  },
  {
    name: "SYLUTION AI",
    tagline: "Artificial Intelligence & Intelligent Systems",
    icon: Brain,
    image: BRAND_IMAGES.ai,
    category: "Engineering service",
    status: "Service by enquiry",
    description:
      "An engineering service area covering AI applications, computer vision, data analysis and decision support. Scope and availability are confirmed after an enquiry.",
    to: "/ai",
    cta: "Explore AI services",
  },
] as const;

function PlatformsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products, projects and training"
        title="One company. Three clear ways to work with us."
        subtitle="SYLUTION LTD provides engineering services, develops products such as Sysmart Agro, and teaches practical technology skills. AI and IoT are capabilities—not separate companies or products in stock."
        image={BRAND_IMAGES.control}
        compact
      >
        <Link to="/contact" className="btn-base btn-primary">
          Partner with us <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      <section className="container-x section-y">
        <SectionHeading
          eyebrow="How our work fits together"
          title="Different work, one SYLUTION team"
          description="Sysmart Agro is a development project; Academy is practical training; AI and IoT are engineering capabilities. They are not all products for sale."
        />
        <Reveal>
          <div className="mt-12 card-luxe p-6 sm:p-10">
            <div className="text-center">
              <p className="eyebrow justify-center">Parent company</p>
              <h3 className="mt-3 font-display text-2xl font-extrabold sm:text-3xl">
                SYLUTION LTD
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Technology engineering and training company based in Kano
              </p>
            </div>
            <div aria-hidden className="mx-auto my-8 h-10 w-px bg-border" />
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                "Artificial Intelligence",
                "Internet of Things",
                "AgriTech",
                "Smart Technology",
              ].map((f) => (
                <div
                  key={f}
                  className="rounded-2xl border border-border bg-surface px-4 py-3 text-center text-sm font-semibold"
                >
                  {f}
                </div>
              ))}
            </div>
            <div aria-hidden className="mx-auto my-8 h-10 w-px bg-border" />
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
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
          <SectionHeading
            eyebrow="Our work"
            title="A project, practical training and engineering services"
            description="Status labels describe project progress or enquiry availability. A service capability is not the same as a product that is ready to buy."
          />
          <div className="mt-12 grid grid-cols-2 gap-5">
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
                    <span className="absolute left-4 top-4">
                      <StatusBadge status={p.status} />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/15 text-primary">
                      <p.icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-extrabold tracking-tight">
                      {p.name}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-primary">{p.tagline}</p>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>
                    <dl className="mt-5 grid grid-cols-2 gap-3 text-xs">
                      <div className="rounded-xl border border-border p-3">
                        <dt className="text-muted-foreground">Category</dt>
                        <dd className="mt-1 font-semibold">{p.category}</dd>
                      </div>
                      <div className="rounded-xl border border-border p-3">
                        <dt className="text-muted-foreground">Status</dt>
                        <dd className="mt-1">
                          <StatusBadge status={p.status} />
                        </dd>
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

      <section className="container-x section-y">
        <SectionHeading
          eyebrow="Future platforms"
          title="Built to grow"
          description="The marketplace, new AI products and new IoT products are future directions. None are currently open for online purchase or application."
          align="center"
        />
        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-3">
          {["Future AI Products", "New IoT Products", "Marketplace"].map((f) => (
            <div key={f} className="rounded-2xl border border-dashed border-border p-6 text-center">
              <p className="font-display text-sm font-bold">{f}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Future direction
              </p>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
