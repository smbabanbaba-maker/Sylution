import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SOLUTIONS } from "@/lib/site-data";
import { SectionHeading } from "./PageHero";

export function RelatedServices({ exclude }: { exclude?: string }) {
  const related = SOLUTIONS.filter((s) => s.slug !== exclude).slice(0, 3);
  return (
    <section className="container-x section-y">
      <SectionHeading eyebrow="Related" title="Explore related services" />
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {related.map((s, i) => (
          <Reveal key={s.slug} delay={i * 0.08}>
            <Link to="/solutions/$slug" params={{ slug: s.slug }} className="card-luxe group block h-full">
              <div className="relative h-44 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-background/75 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="flex items-center justify-between gap-2 font-display text-lg font-bold">
                  {s.title}
                  <ArrowUpRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.tagline}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
