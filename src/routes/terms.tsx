import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CONTACT, U, BRAND_IMAGES } from "@/lib/site-data";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service, SYLUTION" },
      {
        name: "description",
        content:
          "Terms governing the use of the SYLUTION website, quotations, project delivery, warranties, training programmes and intellectual property.",
      },
      { property: "og:title", content: "Terms of Service, SYLUTION" },
      { property: "og:description", content: "The terms that govern our website, quotations and project delivery." },
    ],
  }),
  component: Terms,
});

const SECTIONS = [
  {
    h: "Acceptance",
    p: "By accessing this website or engaging SYLUTION for services, you agree to these terms. If you do not agree, please do not use the site.",
  },
  {
    h: "Website content",
    p: "Content is provided for general information. Specifications, yields and performance figures are indicative and depend on site conditions; they do not form a contractual guarantee.",
  },
  {
    h: "Quotations and projects",
    p: "Formal quotations are valid for 30 days unless stated otherwise. Project scope, milestones, payment schedule and acceptance criteria are governed by the signed contract, which prevails over any content on this site.",
  },
  {
    h: "Warranty and support",
    p: "Equipment carries the manufacturer warranty passed through to the client, plus our installation workmanship warranty for the period stated in the contract. Warranty excludes misuse, unauthorised modification and force majeure damage.",
  },
  {
    h: "Training programmes",
    p: "Places on Academy programmes are confirmed on payment or written sponsor confirmation. Certificates are issued on completion of the required attendance and assessment.",
  },
  {
    h: "Intellectual property",
    p: "The SYLUTION name, logo, site content, software and documentation are owned by SYLUTION and may not be reproduced without written permission.",
  },
  {
    h: "Liability",
    p: "To the extent permitted by Nigerian law, our liability arising from any engagement is limited to the fees paid for the relevant service.",
  },
  { h: "Governing law", p: "These terms are governed by the laws of the Federal Republic of Nigeria." },
];

function Terms() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        subtitle="Last updated 1 January 2026. These terms govern the use of this website and our services."
        image={BRAND_IMAGES.team}
        compact
      />
      <section className="container-x max-w-3xl space-y-8 section-y">
        {SECTIONS.map((s) => (
          <div key={s.h}>
            <h2 className="font-display text-xl font-bold">{s.h}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.p}</p>
          </div>
        ))}
        <div>
          <h2 className="font-display text-xl font-bold">Contact</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            SYLUTION, {CONTACT.address} {" "}
            <a href={`mailto:${CONTACT.email}`} className="text-primary hover:underline">
              {CONTACT.email}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
