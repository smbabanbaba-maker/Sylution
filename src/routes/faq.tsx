import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQS, U, BRAND_IMAGES } from "@/lib/site-data";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ, Frequently Asked Questions | SYLUTION" },
      {
        name: "description",
        content:
          "Answers about SYLUTION: where we are based, who we serve, how our technology works offline, institutional partnerships and how to start a project.",
      },
      { property: "og:title", content: "FAQ, SYLUTION" },
      { property: "og:description", content: "Common questions about our solutions, projects and partnerships." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Faq,
});

function Faq() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Questions we are asked most"
        subtitle="If your question is not answered here, our team is one message away."
        image={BRAND_IMAGES.irrigation}
        compact
      />

      <section className="container-x max-w-3xl section-y">
        <Reveal>
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="card-luxe border-0 px-6">
                <AccordionTrigger className="py-5 text-left font-display text-base font-bold hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
