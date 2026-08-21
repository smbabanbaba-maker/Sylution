import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./PageHero";
import { CASE_STUDIES } from "@/lib/site-data";

export function CaseStudies({ compact = false }: { compact?: boolean }) {
  return (
    <section className="container-x section-y">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Case studies"
          title="Evidence-led engineering snapshots"
          description="A clear view of what we are building, the technical problem it addresses and the current stage of validation."
        />
        {!compact && (
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
            View all projects <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {CASE_STUDIES.map((study, i) => (
          <Reveal key={study.slug} delay={i * 0.08}>
            <article className="card-luxe group flex h-full flex-col overflow-hidden">
              <div className="relative h-52 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/90 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-primary">
                  {study.stage}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="eyebrow">{study.category}</p>
                <h3 className="mt-3 font-display text-xl font-bold leading-tight">{study.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{study.summary}</p>
                <div className="mt-5 border-t border-border pt-5">
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-primary">Technical evidence</p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground">{study.evidence}</p>
                </div>
                <div className="mt-5 flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{study.nextStep}</span>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
        Status labels describe the current engineering stage. They are not claims of commercial availability or completed client deployment.
      </p>
    </section>
  );
}
