import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Briefcase, ArrowRight, Heart, Rocket, GraduationCap } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { CAREERS, CONTACT, U, BRAND_IMAGES } from "@/lib/site-data";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers, Work at SYLUTION in Kano, Nigeria" },
      {
        name: "description",
        content:
          "Join SYLUTION. Open roles in embedded systems, machine learning, agronomy, drone instruction, solar installation and partnerships in Kano, Nigeria.",
      },
      { property: "og:title", content: "Careers at SYLUTION" },
      { property: "og:description", content: "Build agricultural technology that reaches real farms across Africa." },
    ],
  }),
  component: Careers,
});

const PERKS = [
  { icon: Rocket, title: "Real deployment", text: "Your work ships to farms within the same season." },
  { icon: GraduationCap, title: "Continuous learning", text: "Access to every Academy programme we run." },
  { icon: Heart, title: "Purpose", text: "Technology measured in farmer income, not vanity metrics." },
];

function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build technology that feeds a continent"
        subtitle="We hire engineers, agronomists, pilots and builders who want their work measured in hectares served and harvests improved."
        image={BRAND_IMAGES.team}
        compact
      />

      <section className="container-x section-y">
        <SectionHeading eyebrow="Why SYLUTION" title="What you get here" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {PERKS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.07}>
              <div className="card-luxe h-full p-7">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-primary">
                  <p.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-display text-lg font-bold">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20">
          <SectionHeading eyebrow="Open roles" title="Positions currently accepting applications" />
          <div className="mt-10 space-y-3">
            {CAREERS.map((c, i) => (
              <Reveal key={c.role} delay={i * 0.05}>
                <a
                  href={`mailto:${CONTACT.email}?subject=Application: ${encodeURIComponent(c.role)}`}
                  className="card-luxe group flex flex-wrap items-center justify-between gap-4 p-6"
                >
                  <div>
                    <h3 className="font-display text-lg font-bold">{c.role}</h3>
                    <p className="mt-2 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <Briefcase className="h-3.5 w-3.5" /> {c.team} · {c.type}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" /> {c.location}
                      </span>
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Apply <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Not seeing your role? Send your CV to{" "}
            <a href={`mailto:${CONTACT.email}`} className="text-primary hover:underline">
              {CONTACT.email}
            </a>
            .
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
