import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { NEWS, U, BRAND_IMAGES } from "@/lib/site-data";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News, SYLUTION Announcements and Projects" },
      {
        name: "description",
        content:
          "Announcements, project milestones, research results and partnership news from SYLUTION, the agricultural innovation company based in Kano, Nigeria.",
      },
      { property: "og:title", content: "News, SYLUTION" },
      { property: "og:description", content: "Project milestones, research results and partnerships from SYLUTION." },
    ],
  }),
  component: News,
});

function News() {
  const [lead, ...rest] = NEWS;
  return (
    <>
      <PageHero
        eyebrow="Newsroom"
        title="What we are building, shipping and proving"
        subtitle="Milestones from our projects, research programmes, academy cohorts and partnerships."
        image={BRAND_IMAGES.team}
        compact
      />

      <section className="container-x section-y">
        <Reveal>
          <article className="card-luxe grid overflow-hidden lg:grid-cols-2">
            <img src={lead.image} alt={lead.title} className="h-72 w-full object-cover lg:h-full" />
            <div className="p-8 lg:p-12">
              <p className="eyebrow">{lead.category}</p>
              <h2 className="mt-4 font-display text-2xl font-bold leading-snug sm:text-3xl">{lead.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{lead.excerpt}</p>
              <p className="mt-6 text-xs text-muted-foreground">
                {new Date(lead.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
              </p>
            </div>
          </article>
        </Reveal>

        <SectionHeading eyebrow="More stories" title="Recent updates" />
        <div className="mt-10 grid grid-cols-2 gap-5 lg:grid-cols-3">
          {rest.map((n, i) => (
            <Reveal key={n.slug} delay={(i % 3) * 0.07}>
              <article className="card-luxe group h-full overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src={n.image}
                    alt={n.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <p className="eyebrow">{n.category}</p>
                  <h3 className="mt-3 font-display text-lg font-bold leading-snug">{n.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{n.excerpt}</p>
                  <p className="mt-4 text-xs text-muted-foreground">
                    {new Date(n.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
