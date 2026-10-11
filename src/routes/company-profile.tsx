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
      { title: "SYLUTION Company Profile 2026 PDF | IoT, AI and Electronics" },
      {
        name: "description",
        content:
          "Download the 2026 SYLUTION company profile PDF: engineering capabilities, Sysmart Agro, partnerships, current stage and contact details in Kano, Nigeria.",
      },
      { property: "og:title", content: "Download the SYLUTION company profile" },
      {
        property: "og:description",
        content:
          "The 2026 nine-page profile of SYLUTION, an IoT, AI and electronics engineering company operating from the Technology Incubation Centre, Kano.",
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
          name: "SYLUTION Company Profile 2026",
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
  "Company snapshot, operating model and current position",
  "Six engineering capabilities and the connected systems approach",
  "AgriTech applications and the Sysmart Agro flagship project",
  "Engineering readiness, validation, partnerships and strategic fit",
  "Contact details and important engagement notice",
];

function CompanyProfilePage() {
  return (
    <>
      <PageHero
        eyebrow="Company profile"
        title="Download the SYLUTION profile"
        subtitle="A nine-page 2026 briefing covering SYLUTION’s capabilities, Sysmart Agro, engineering approach, partnerships and current position."
        image={BRAND_IMAGES.iotLab}
        compact
      >
        <div className="flex flex-wrap gap-3">
          <a
            href={PDF_PATH}
            download="SYLUTION_Company_Profile_Premium_2026.pdf"
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
            <Link to="/iot" className="btn-base btn-ghost">
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
                <p className="font-display text-base font-bold">SYLUTION Company Profile 2026</p>
                <p className="text-xs text-muted-foreground">PDF, 9 pages, English</p>
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
              download="SYLUTION_Company_Profile_Premium_2026.pdf"
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
