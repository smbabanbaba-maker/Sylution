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
  const shots = GALLERY.slice(0, 12).filter((_, i) => i % 2 === 0).slice(0, 3);

  return (
    <>
      <PageHero eyebrow={s.tagline} title={s.title} subtitle={s.summary} image={s.image} compact>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="btn-base btn-primary"
          >
            Request a proposal <ArrowRight className="h-4 w-4" />
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
          <SectionHeading eyebrow="What we deliver" title={`Inside our ${s.title.toLowerCase()} practice`} />
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
            <p className="eyebrow">Typical outcomes</p>
            <div className="mt-6 space-y-6">
              {s.outcomes.map((o) => (
                <div key={o.label} className="border-b border-border pb-5 last:border-0 last:pb-0">
                  <p className="font-display text-3xl font-extrabold text-gradient-brand">{o.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{o.label}</p>
                </div>
              ))}
            </div>
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
