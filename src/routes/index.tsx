import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Brain, CircuitBoard, Radio, Sprout, Wrench } from "lucide-react";
import { CaseStudies } from "@/components/site/CaseStudies";
import { CTASection } from "@/components/site/CTASection";
import { SectionHeading } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { useLang } from "@/lib/i18n";
import { BRAND_IMAGES, CONTACT } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SYLUTION LTD | Practical AgriTech & Intelligent Systems in Kano" },
      {
        name: "description",
        content:
          "SYLUTION LTD combines AI, IoT, electronics and field engineering to develop practical technology for agriculture, energy and industry in Nigeria.",
      },
      { property: "og:title", content: "SYLUTION LTD | Practical AgriTech & Intelligent Systems" },
      {
        property: "og:description",
        content:
          "AI, IoT and engineering applied to real challenges in agriculture, energy and industry. Based at TIC Kano, Nigeria.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
    ],
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
              logo: "https://www.sylution.com.ng/brand/sylution-logo.webp",
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

const CAPABILITIES = [
  {
    icon: Sprout,
    title: "Smart agriculture",
    description: "Technology for irrigation, greenhouses, farm monitoring and data-led decisions.",
    to: "/solutions/smart-agriculture",
  },
  {
    icon: Radio,
    title: "Connected systems",
    description: "IoT devices, sensors and controllers designed for real operating conditions.",
    to: "/solutions/iot",
  },
  {
    icon: CircuitBoard,
    title: "Electronics & embedded",
    description: "Circuit design, embedded systems and practical hardware development.",
    to: "/solutions/electronics",
  },
  {
    icon: Brain,
    title: "AI & agricultural data",
    description: "Research and software that help turn field information into useful insight.",
    to: "/solutions/artificial-intelligence",
  },
];

function Home() {
  const { t } = useLang();

  return (
    <>
      <section className="home-hero">
        <div className="container-x home-hero-grid">
          <div className="home-hero-copy">
            <p className="eyebrow">
              <span aria-hidden="true" className="h-px w-7 bg-primary" />
              {t("hero.eyebrow")}
            </p>
            <h1 className="mt-5 max-w-3xl font-display text-[2.7rem] font-extrabold leading-[1.02] tracking-[-0.05em] text-foreground sm:text-6xl lg:text-[4.5rem]">
              {t("hero.title")}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {t("hero.sub")}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link to="/sysmart-agro" className="btn-base btn-primary">
                {t("hero.cta1")} <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="btn-base btn-ghost">
                {t("hero.cta3")}
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Designed in Kano
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--coral)]" />
                Agriculture-led engineering
              </span>
            </div>
          </div>

          <div className="home-hero-visual">
            <img
              src={BRAND_IMAGES.irrigation}
              alt="A farmer operating an irrigation controller in a cultivated field"
              fetchPriority="high"
              decoding="async"
            />
            <div className="home-hero-image-shade" aria-hidden="true" />
            <div className="home-hero-image-label">
              <span className="home-label-index">01</span>
              <span>
                Field-ready thinking
                <br />
                <strong>Designed around real conditions</strong>
              </span>
            </div>
            <div className="home-hero-project-card">
              <img src="/brand/sysmart-agro.webp" alt="" aria-hidden="true" />
              <span>
                <strong>SYSMART AGRO</strong>
                <small>Flagship agriculture project</small>
              </span>
              <ArrowUpRight aria-hidden="true" className="ml-auto h-5 w-5 text-primary" />
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Core disciplines" className="discipline-strip">
        <div className="container-x grid grid-cols-2 gap-y-3 py-5 sm:grid-cols-4 sm:gap-4">
          {[
            "Artificial intelligence",
            "Internet of Things",
            "Electronics",
            "Smart agriculture",
          ].map((item, index) => (
            <p
              key={item}
              className="flex items-center gap-2 text-sm font-semibold text-foreground/80"
            >
              <span className="font-display text-[0.65rem] font-bold tracking-widest text-primary">
                0{index + 1}
              </span>
              {item}
            </p>
          ))}
        </div>
      </section>

      <section className="container-x section-y">
        <div className="grid items-center gap-9 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal>
            <div className="feature-photo">
              <img
                src="/brand/sysmart-agro.webp"
                alt="SYSMART AGRO irrigation controller prototype in a field"
                loading="lazy"
                decoding="async"
              />
              <span className="feature-photo-status">
                <span className="h-2 w-2 rounded-full bg-[var(--coral)]" />
                In development & field testing
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow">
              <span aria-hidden="true" className="h-px w-7 bg-primary" />
              Featured project
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-[-0.04em] sm:text-4xl">
              Sysmart Agro
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              A connected agriculture system exploring soil and climate sensing, irrigation control
              and farm monitoring. Designed for the practical realities of farming and currently
              progressing through development and field work.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {["Sense field conditions", "Connect useful data", "Support timely action"].map(
                (step, index) => (
                  <div key={step} className="feature-step">
                    <span>0{index + 1}</span>
                    <p>{step}</p>
                  </div>
                ),
              )}
            </div>
            <Link
              to="/sysmart-agro"
              className="inline-flex min-h-11 items-center gap-2 pt-6 text-sm font-bold text-primary hover:gap-3"
            >
              Explore the project <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="capabilities-section section-y">
        <div className="container-x">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="What we do"
              title="One engineering team. Connected capabilities."
              description="Explore the technologies SYLUTION is developing and applying across agriculture and industry."
            />
            <Link
              to="/solutions"
              className="inline-flex min-h-11 shrink-0 items-center gap-2 text-sm font-bold text-primary"
            >
              All capabilities <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {CAPABILITIES.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04}>
                <Link to={item.to as never} className="capability-card group">
                  <span className="capability-number">0{index + 1}</span>
                  <span className="capability-icon">
                    <item.icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className="capability-link">
                    Explore{" "}
                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x section-y-sm">
        <div className="grid gap-8 rounded-[1.75rem] border border-border bg-card p-6 sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:p-10">
          <div>
            <p className="eyebrow">
              <span aria-hidden="true" className="h-px w-7 bg-primary" />
              How we work
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-[-0.035em] sm:text-3xl">
              From problem to practical engineering.
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Start with the operating context, then build and test around what people actually
              need.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              {
                icon: Sprout,
                title: "Understand",
                text: "Listen to the field and define the real need.",
              },
              {
                icon: Wrench,
                title: "Engineer",
                text: "Design the hardware, software and system.",
              },
              { icon: Radio, title: "Validate", text: "Test, learn and improve before wider use." },
            ].map((item, index) => (
              <div key={item.title} className="process-card">
                <span className="process-card-number">0{index + 1}</span>
                <item.icon aria-hidden="true" className="mt-4 h-5 w-5 text-primary" />
                <h3 className="mt-3 font-display text-base font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CaseStudies />
      <CTASection />
    </>
  );
}
