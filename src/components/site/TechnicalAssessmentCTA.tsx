import { ArrowRight, ClipboardCheck, Cpu, MapPinned } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";

const ASSESSMENT_POINTS = [
  { icon: MapPinned, label: "Understand the site, process or farm objective" },
  { icon: Cpu, label: "Review the right AI, IoT, electronics or AgriTech direction" },
  { icon: ClipboardCheck, label: "Leave with a practical next-step conversation" },
];

export function TechnicalAssessmentCTA() {
  return (
    <section className="container-x section-y-sm">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-10 shadow-luxe sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-14 lg:py-12">
          <div aria-hidden className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-primary/8 blur-3xl" />
          <div className="relative max-w-2xl">
            <p className="eyebrow">Technical Assessment</p>
            <h2 className="mt-4 font-display text-2xl font-bold leading-tight sm:text-3xl">
              Start with the problem. Leave with an engineering direction.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Share your site, process, farm or project idea with SYLUTION. We will use the first conversation to understand the requirement and identify a practical technical path.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {ASSESSMENT_POINTS.map((point) => (
                <div key={point.label} className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
                  <point.icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{point.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mt-8 shrink-0 lg:mt-0">
            <Link to="/contact" className="btn-base btn-primary">
              Request an assessment <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
