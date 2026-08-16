import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, FileText, ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { BRAND_IMAGES } from "@/lib/site-data";

const PDF_PATH = "/sylution-company-profile.pdf";

export const Route = createFileRoute("/company-profile")({
  head: () => ({
    meta: [
      { title: "SYLUTION Company Profile PDF | IoT, AI and Electronics" },
      {
        name: "description",
        content:
          "Download the SYLUTION company profile PDF: IoT first engineering, artificial intelligence, electronics, capabilities, industries served and contact details in Kano, Nigeria.",
      },
      { property: "og:title", content: "Download the SYLUTION company profile" },
      {
        property: "og:description",
        content:
          "A five page profile of SYLUTION, an IoT, AI and electronics engineering company operating from the Technology Incubation Centre, Kano.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "DigitalDocument",
          name: "SYLUTION Company Profile",
          description:
            "Company profile of SYLUTION, an Internet of Things, artificial intelligence and electronics engineering company based in Kano, Nigeria.",
          fileFormat: "application/pdf",
          url: PDF_PATH,
          inLanguage: "en",
          publisher: { "@type": "Organization", name: "SYLUTION" },
        }),
      },
    ],
  }),
  component: CompanyProfilePage,
});

const CONTENTS = [
  "Who we are, vision, mission and key figures",
  "Internet of Things at the core, the six layer stack",
  "Engineering capabilities across hardware and software",
  "Industries served, from manufacturing to government",
  "Research, products, academy and how an engagement starts",
];

function CompanyProfilePage() {
  return (
    <>
      <PageHero
        eyebrow="Company profile"
        title="Download the SYLUTION profile"
        subtitle="A concise five page document covering who we are, our IoT first engineering stack, our capabilities and the industries we serve. Ideal for procurement teams, investors and partners."
        image={BRAND_IMAGES.iotLab}
        compact
      >
        <div className="flex flex-wrap gap-3">
          <a
            href={PDF_PATH}
            download="SYLUTION-Company-Profile.pdf"
            className="btn-base btn-primary"
          >
            Download PDF <Download className="h-4 w-4" />
          </a>
          <a
            href={PDF_PATH}
            target="_blank"
            rel="noreferrer noopener"
            className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:scale-[1.04]"
          >
            Open in browser
          </a>
        </div>
      </PageHero>

      <section className="container-x grid gap-10 section-y lg:grid-cols-[1fr_1.05fr] lg:items-center">
        <Reveal>
          <SectionHeading eyebrow="Inside the document" title="What the profile covers" />
          <ul className="mt-8 space-y-4">
            {CONTENTS.map((c) => (
              <li key={c} className="flex gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                {c}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/iot"
              className="btn-base btn-ghost"
            >
              Explore our IoT platform <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="card-luxe p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-primary">
                <FileText className="h-6 w-6" />
              </span>
              <div>
                <p className="font-display text-base font-bold">SYLUTION Company Profile</p>
                <p className="text-xs text-muted-foreground">PDF, 5 pages, English</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl border border-border">
              <object data={PDF_PATH} type="application/pdf" className="h-[30rem] w-full">
                <div className="p-8 text-center text-sm text-muted-foreground">
                  Your browser cannot display the preview.{" "}
                  <a href={PDF_PATH} className="font-semibold text-primary">
                    Download the profile instead
                  </a>
                  .
                </div>
              </object>
            </div>
            <a
              href={PDF_PATH}
              download="SYLUTION-Company-Profile.pdf"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
            >
              Download the profile <Download className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
