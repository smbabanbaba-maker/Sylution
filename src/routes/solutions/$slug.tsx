import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { RelatedServices } from "@/components/site/RelatedServices";
import { SOLUTIONS, GALLERY, type Solution } from "@/lib/site-data";

export const Route = createFileRoute("/solutions/$slug")({
  loader: ({ params }) => {
    const solution = SOLUTIONS.find((s) => s.slug === params.slug);
    if (!solution) throw notFound();
    return solution;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title}, SYLUTION` },
          { name: "description", content: loaderData.summary.slice(0, 155) },
          { property: "og:title", content: `${loaderData.title}, SYLUTION` },
          { property: "og:description", content: loaderData.summary.slice(0, 155) },
        ]
      : [],
  }),
  component: SolutionPage,
});

function SolutionPage() {
  const s = Route.useLoaderData() as Solution;
  const shots = GALLERY.slice(0, 12)
    .filter((_, i) => i % 2 === 0)
    .slice(0, 3);

  return (
    <>
      <PageHero eyebrow={s.tagline} title={s.title} subtitle={s.summary} image={s.image} compact>
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="btn-base btn-primary">
            Ask about this service <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/solutions"
            className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
          >
            All solutions
          </Link>
        </div>
      </PageHero>

      <section className="container-x grid gap-14 section-y lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <SectionHeading
            eyebrow="What this capability covers"
            title={`How we use ${s.title.toLowerCase()}`}
          />
          <ul className="mt-8 space-y-4">
            {s.capabilities.map((c) => (
              <li key={c} className="flex gap-4 rounded-2xl border border-border bg-surface p-4">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                  <Check className="h-4 w-4" />
                </span>
                <span className="pt-0.5 text-sm">{c}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="card-luxe p-8">
            <p className="eyebrow">How to start</p>
            <h2 className="mt-4 font-display text-xl font-bold">
              A scoped conversation, not an instant order
            </h2>
            <ol className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <li>
                <strong className="text-foreground">1. Tell us the problem.</strong> Share your
                site, system, location and goal.
              </li>
              <li>
                <strong className="text-foreground">2. Confirm fit and availability.</strong> Our
                team will explain what is feasible and what stage any related project has reached.
              </li>
              <li>
                <strong className="text-foreground">3. Agree the next step.</strong> Any proposal or
                delivery plan follows only after the scope is understood.
              </li>
            </ol>
            <Link to="/contact" className="btn-base btn-primary mt-7">
              Send a service enquiry <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-6 overflow-hidden rounded-2xl">
            <img src={s.image} alt={s.title} loading="lazy" className="h-64 w-full object-cover" />
          </div>
        </Reveal>
      </section>

      <section className="container-x pb-10">
        <SectionHeading eyebrow="Gallery" title="From the field" />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {shots.map((g, i) => (
            <Reveal key={`${g.src}-${i}`} delay={i * 0.08}>
              <div className="group overflow-hidden rounded-2xl">
                <img
                  src={g.src}
                  alt={g.caption}
                  loading="lazy"
                  className="h-60 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <RelatedServices exclude={s.slug} />
      <CTASection />
    </>
  );
}
