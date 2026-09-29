import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Brain,
  Bot,
  CircuitBoard,
  GraduationCap,
  Plane,
  Radio,
  Sprout,
  Sun,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { HomeHero } from "@/components/site/HomeHero";
import { SectionHeading } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { CaseStudies } from "@/components/site/CaseStudies";
import { StatusBadge } from "@/components/site/StatusKey";
import { BRAND_IMAGES, CONTACT } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SYLUTION LTD | Engineering Services, Products & Practical Training" },
      {
        name: "description",
        content:
          "SYLUTION is a Kano-based engineering and training company. We build custom AI, IoT, electronics, robotics and software systems; develop smart-agriculture projects; and teach practical technology skills.",
      },
      {
        property: "og:title",
        content: "SYLUTION LTD | Engineering Services, Products & Practical Training",
      },
      {
        property: "og:description",
        content:
          "Custom AI, IoT and engineering services; smart-agriculture projects with clear development stages; and practical technology training in Kano, Nigeria.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:url", content: "https://www.sylution.com.ng/" },
    ],
    links: [{ rel: "canonical", href: "https://www.sylution.com.ng/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://www.sylution.com.ng/#organization",
              name: CONTACT.legalName,
              url: "https://www.sylution.com.ng/",
              logo: "https://www.sylution.com.ng/brand/sylution-logo-dark-red.webp",
              email: CONTACT.email,
              telephone: CONTACT.phones[0],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Technology Incubation Centre (TIC), Farm Centre",
                addressLocality: "Kano",
                addressCountry: "NG",
              },
              sameAs: CONTACT.socials.map((social) => social.href),
            },
            {
              "@type": "WebSite",
              "@id": "https://www.sylution.com.ng/#website",
              url: "https://www.sylution.com.ng/",
              name: "SYLUTION LTD",
              publisher: { "@id": "https://www.sylution.com.ng/#organization" },
              inLanguage: ["en", "ha", "fr", "ar"],
            },
          ],
        }),
      },
    ],
  }),
  component: Home,
});

const PILLARS = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    detail: "Agricultural intelligence & decision support",
    slug: "artificial-intelligence",
  },
  {
    icon: Radio,
    title: "Internet of Things",
    detail: "Connected devices, sensors & automation",
    slug: "iot",
  },
  {
    icon: CircuitBoard,
    title: "Electronics",
    detail: "Controllers, embedded systems & hardware",
    slug: "electronics",
  },
  { icon: Bot, title: "Robotics", detail: "Automation & intelligent machines", slug: "robotics" },
  {
    icon: Plane,
    title: "Drone Technology",
    detail: "Agricultural observation & data collection",
    slug: "drone-technology",
  },
  {
    icon: Sun,
    title: "Solar Technology",
    detail: "Powering smart systems in real environments",
    slug: "solar-technology",
  },
];

function Home() {
  return (
    <>
      <HomeHero />

      {/* SYSMART AGRO PRODUCT STORY */}
      <section className="border-y border-border bg-surface section-y">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <Reveal>
              <div className="media-frame relative aspect-[4/3]">
                <img
                  src={BRAND_IMAGES.sysmart}
                  alt="Sysmart Agro controller operating beside an irrigated crop field"
                  loading="lazy"
                />
                <span className="absolute left-5 top-5">
                  <StatusBadge status="Active Project" />
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="eyebrow">
                <span aria-hidden className="h-px w-8 shrink-0 bg-primary" /> Flagship project
              </p>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl">
                Sysmart Agro
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Sysmart Agro is our flagship smart-agriculture project: an IoT controller, soil and
                climate sensing, irrigation control and monitoring. It is in development and field
                testing, not available to purchase online.
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {["IoT controller", "Soil & climate sensing", "Smart irrigation control"].map(
                  (feature) => (
                    <span
                      key={feature}
                      className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ),
                )}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/sysmart-agro" className="btn-base btn-primary group">
                  Explore the project{" "}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/projects" className="btn-base btn-ghost">
                  View all projects
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-x section-y">
        <SectionHeading
          eyebrow="Our services"
          title="Technology services for real-world systems"
          description="Explore the specialist services SYLUTION brings together—from intelligent software and connected devices to practical engineering for agriculture, industry and energy."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <Link
                to="/solutions/$slug"
                params={{ slug: p.slug }}
                className="group card-luxe flex h-full flex-col p-7"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-primary transition-transform duration-300 group-hover:scale-110">
                    <p.icon className="h-6 w-6" />
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.detail}
                </p>
                <span className="mt-6 text-sm font-semibold text-primary">Learn more</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TRAINING */}
      <section className="container-x section-y">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <Reveal>
            <div className="media-frame aspect-[4/3]">
              <img
                src={BRAND_IMAGES.training}
                alt="SYLUTION practical technology training session"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="eyebrow">
              <span aria-hidden className="h-px w-8 shrink-0 bg-primary" /> SYLUTION Academy
            </p>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl">
              Learn practical AI, IoT and smart-agriculture skills
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Hands-on training for youth, women, farmers, students and technicians—covering AI
              tools, IoT sensors, ESP32/Arduino, electronics, drones, robotics and modern
              agriculture. Sessions are taught in English or Hausa in Kano; ask us to confirm dates
              and availability.
            </p>
            <Link to="/training" className="btn-base btn-ghost mt-8">
              See training programmes <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CaseStudies />

      <CTASection />
    </>
  );
}
