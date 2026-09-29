import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { CaseStudies } from "@/components/site/CaseStudies";
import { StatusBadge, StatusKey } from "@/components/site/StatusKey";
import { displayStatus } from "@/lib/status";
import { BRAND_IMAGES, PROJECTS } from "@/lib/site-data";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects | SYLUTION IoT, AI and Electronics Engineering" },
      {
        name: "description",
        content:
          "Current development and research projects at SYLUTION, including the Sysmart Agro smart agriculture platform, environmental monitoring nodes and educational robotics.",
      },
      { property: "og:title", content: "SYLUTION projects, from research to active development" },
      {
        property: "og:description",
        content:
          "An honest view of what SYLUTION is building: active projects, research work and systems under development in Kano, Nigeria.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

const GROUPS = ["In development", "Testing / field validation", "Research"] as const;

function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects and research"
        title="What our engineers are building and testing"
        subtitle="These are internal projects and research—not a product shop or a list of completed client deployments. Each item is labelled by its current engineering stage."
        image={BRAND_IMAGES.iotLab}
        compact
      />

      <section className="container-x section-y">
        <StatusKey />
        <Reveal>
          <Link
            to="/sysmart-agro"
            className="card-luxe group grid gap-0 overflow-hidden lg:grid-cols-[1.1fr_1fr]"
          >
            <img
              src={BRAND_IMAGES.sysmart}
              alt="Sysmart Agro IoT controller in an irrigated field"
              className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] lg:h-full"
            />
            <div className="p-8 sm:p-10">
              <p className="eyebrow">Flagship project</p>
              <h2 className="mt-4 font-display text-3xl font-bold">Sysmart Agro</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                An intelligent IoT powered smart agriculture platform combining a field controller,
                soil and climate sensing, remote irrigation control and a monitoring dashboard.
              </p>
              <span className="mt-6 inline-flex">
                <StatusBadge status="Active Project" />
              </span>
              <span className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary">
                Open the project page{" "}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </Reveal>
      </section>

      {GROUPS.map((group) => {
        const items = PROJECTS.filter(
          (p) => displayStatus(p.status) === group && p.slug !== "sysmart-agro",
        );
        if (!items.length) return null;
        return (
          <section key={group} className="container-x pb-20">
            <SectionHeading eyebrow={group} title={`Projects: ${group.toLowerCase()}`} />
            <div className="mt-10 grid grid-cols-2 gap-5 lg:grid-cols-3">
              {items.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 3) * 0.07}>
                  <article className="card-luxe h-full overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="h-44 w-full object-cover"
                    />
                    <div className="p-6">
                      <p className="eyebrow">{p.category}</p>
                      <h3 className="mt-3 font-display text-lg font-bold">{p.name}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {p.summary}
                      </p>
                      <span className="mt-5 inline-flex rounded-full border border-border px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-muted-foreground">
                        <StatusBadge status={p.status} />
                      </span>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>
        );
      })}

      <CaseStudies compact />

      <section className="container-x pb-20">
        <div className="card-luxe p-8 text-center sm:p-12">
          <h2 className="font-display text-2xl font-bold">Completed commercial projects</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
            We only list a project here once it has been delivered and verified. Case studies will
            be published as deployments complete.
          </p>
          <span className="mt-6 inline-flex rounded-full border border-border px-4 py-2 text-xs font-bold uppercase tracking-wide text-muted-foreground">
            Future commercial listing
          </span>
        </div>
      </section>

      <CTASection />
    </>
  );
}
