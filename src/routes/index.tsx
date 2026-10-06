import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Brain,
  Bot,
  CircuitBoard,
  Gauge,
  GraduationCap,
  Plane,
  Radio,
  Sprout,
  Sun,
  Smartphone,
  Handshake,
  Landmark,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { HomeHero } from "@/components/site/HomeHero";
import { SectionHeading } from "@/components/site/PageHero";
import { CaseStudies } from "@/components/site/CaseStudies";
import { StatusBadge } from "@/components/site/StatusKey";
import { useLang } from "@/lib/i18n";
import { BRAND_IMAGES, CONTACT, SYSMART_OVERVIEW } from "@/lib/site-data";

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

const SYSMART_ICONS = [Sprout, CircuitBoard, Radio, Gauge];

const SYSMART_TICKER_ITEMS = [
  ...SYSMART_OVERVIEW.map((item, index) => ({
    ...item,
    icon: SYSMART_ICONS[index] ?? Sprout,
  })),
  {
    title: "Mobile app · roadmap",
    detail:
      "Mobile access, offline readings and multi-zone scheduling are planned, not available to download yet.",
    icon: Smartphone,
  },
];

function Home() {
  return (
    <>
      <HomeHero />

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
        <SysmartAgroFeature />
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

      <HomeOpportunitySection />
    </>
  );
}

function SysmartAgroFeature() {
  return (
    <Reveal delay={0.12}>
      <section
        id="home-sysmart-agro"
        aria-labelledby="home-sysmart-agro-title"
        className="mt-14 overflow-hidden rounded-[2rem] border border-primary/15 bg-card shadow-luxe"
      >
        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[250px] bg-foreground sm:min-h-[360px]">
            <img
              src={BRAND_IMAGES.sysmart}
              alt="Illustrative Sysmart Agro controller concept beside an irrigated crop"
              width={1248}
              height={832}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent"
            />
            <span className="absolute left-5 top-5">
              <StatusBadge status="Active Project" />
            </span>
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/75">
                Flagship AgriTech project
              </p>
              <p className="mt-2 font-display text-2xl font-extrabold text-white">Sysmart Agro</p>
              <p className="mt-1 max-w-md text-sm leading-relaxed text-white/80">
                A field-to-dashboard system under development in Kano.
              </p>
            </div>
          </div>
          <div className="p-5 sm:p-8 lg:p-10">
            <p className="eyebrow">Built around real farm conditions</p>
            <h2
              id="home-sysmart-agro-title"
              className="mt-4 font-display text-2xl font-bold leading-tight sm:text-3xl"
            >
              How the Sysmart Agro platform is being built
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Sysmart Agro connects field sensors, a controller and irrigation hardware with a
              monitoring dashboard. The project is in development and field testing. A public mobile
              app and offline access are roadmap items—not live services.
            </p>
            <div
              className="sysmart-ticker mt-6 rounded-2xl"
              role="region"
              aria-label="Sysmart Agro features and roadmap"
              tabIndex={0}
            >
              <div className="sysmart-ticker__track">
                {[0, 1].map((copy) => (
                  <div key={copy} className="sysmart-ticker__group" aria-hidden={copy === 1}>
                    {SYSMART_TICKER_ITEMS.map((item) => {
                      const Icon = item.icon;
                      return (
                        <article
                          key={item.title}
                          className="sysmart-ticker__item flex items-start gap-3 rounded-2xl border border-border bg-background p-3"
                        >
                          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                            <Icon className="h-4 w-4" aria-hidden="true" />
                          </span>
                          <span className="min-w-0">
                            <span className="block font-display text-sm font-bold leading-tight">
                              {item.title}
                            </span>
                            <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                              {item.detail}
                            </span>
                          </span>
                        </article>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/sysmart-agro" className="btn-base btn-primary group">
                Explore Sysmart Agro
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/contact" className="btn-base btn-ghost">
                Contact SYLUTION
              </Link>
            </div>
          </div>
        </div>
        <p className="border-t border-border bg-surface px-5 py-3 text-xs text-muted-foreground sm:px-8">
          Illustrative product visualization; the display reading is not live system data.
        </p>
      </section>
    </Reveal>
  );
}

function HomeOpportunitySection() {
  const { t } = useLang();
  const opportunities = [
    {
      icon: Handshake,
      title: "home.opportunities.partners.title",
      detail: "home.opportunities.partners.detail",
      action: "home.opportunities.partners.action",
      to: "/partners" as const,
    },
    {
      icon: Landmark,
      title: "home.opportunities.investors.title",
      detail: "home.opportunities.investors.detail",
      action: "home.opportunities.investors.action",
      to: "/investors" as const,
    },
  ];

  return (
    <section className="container-x section-y" aria-labelledby="home-opportunities-title">
      <div className="mb-8 max-w-3xl">
        <p className="eyebrow">{t("home.opportunities.eyebrow")}</p>
        <h2
          id="home-opportunities-title"
          className="mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl"
        >
          {t("home.opportunities.title")}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {t("home.opportunities.subtitle")}
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {opportunities.map((opportunity) => (
          <Link
            key={opportunity.to}
            to={opportunity.to}
            className="card-luxe group flex h-full items-start gap-5 p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-8"
          >
            <span
              aria-hidden="true"
              className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary/15 text-primary"
            >
              <opportunity.icon className="h-6 w-6" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-display text-lg font-bold">{t(opportunity.title)}</span>
              <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
                {t(opportunity.detail)}
              </span>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                {t(opportunity.action)}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
