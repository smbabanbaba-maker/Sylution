import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  CircleHelp,
  GraduationCap,
  Handshake,
  Users,
} from "lucide-react";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { BRAND_IMAGES, FAQS, TRAINING_PROGRAMMES } from "@/lib/site-data";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/training")({
  head: () => ({
    meta: [
      { title: "Hands-on AI, IoT and AgriTech Training in Kano | SYLUTION Academy" },
      {
        name: "description",
        content:
          "Practical training in AI, IoT, ESP32/Arduino, electronics, smart irrigation, drones, robotics and modern agriculture. Taught in English or Hausa in Kano; ask SYLUTION about programme availability and group cohorts.",
      },
      {
        property: "og:title",
        content: "SYLUTION Academy | Practical AI, IoT and AgriTech Training",
      },
      {
        property: "og:description",
        content:
          "Hands-on AI, IoT, electronics, drone and modern-agriculture training for students, farmers, technicians and institutions. Taught in English or Hausa in Kano.",
      },
    ],
  }),
  component: Training,
});

function Training() {
  const { tr } = useLang();

  return (
    <>
      <PageHero
        eyebrow="SYLUTION Academy"
        title="Practical training in AI, IoT and smart agriculture"
        subtitle="Learn AI tools, IoT sensors, ESP32/Arduino, electronics, smart irrigation, drones, robotics and modern agriculture through guided, hands-on projects. For youth, women, farmers, students, technicians and institutions. Taught in English or Hausa in Kano."
        image={BRAND_IMAGES.trainingBanner}
        compact
      >
        <a href="#programmes" className="btn-base btn-primary">
          {tr("See the nine programmes")} <ArrowRight className="h-4 w-4" />
        </a>
        <Link to="/contact" className="btn-base btn-ghost">
          {tr("Ask about training")} <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      <section id="programmes" className="container-x scroll-mt-24 section-y">
        <SectionHeading
          eyebrow="Programmes"
          title="Nine practical programmes, one hands-on approach"
          description="Choose from AI and connected sensors to smart farming, drones and automation. Every programme includes guided practice on real equipment."
        />
        <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-3">
          {TRAINING_PROGRAMMES.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.07}>
              <article className="card-luxe group flex h-full flex-col overflow-hidden">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary">
                    <GraduationCap className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.detail}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface section-y">
        <div className="container-x">
          <SectionHeading
            eyebrow="Core curriculum"
            title="From intelligent systems to practical field skills"
            description="The training pathway connects the foundations of technology with supervised application in agriculture and real-world operating environments."
          />
          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[
              {
                title: "AI in Agriculture",
                detail: "AI foundations, tools and agricultural data intelligence.",
              },
              {
                title: "IoT & Sensors",
                detail: "Sensors, connected devices, monitoring systems and smart agriculture.",
              },
              {
                title: "Smart Irrigation",
                detail: "Sensor-based irrigation, drip systems and water-efficiency concepts.",
              },
              {
                title: "Greenhouse Technology",
                detail:
                  "Climate monitoring, irrigation integration and controlled-environment farming.",
              },
              {
                title: "Solar Agriculture",
                detail:
                  "Solar power, battery management and off-grid support for connected systems.",
              },
              {
                title: "Drone Technology",
                detail: "Farm observation, mapping, monitoring and practical demonstrations.",
              },
              {
                title: "Robotics & Automation",
                detail: "Robotics, sensors, automation and practical project work.",
              },
              {
                title: "Electronics & Embedded Systems",
                detail:
                  "ESP32, Arduino, circuits, controllers and sensor projects from zero to working system.",
              },
            ].map((module, i) => (
              <Reveal key={module.title} delay={(i % 4) * 0.05}>
                <article className="h-full border border-border bg-background/70 p-5">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary/10 text-primary">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold">{module.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{module.detail}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x section-y">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionHeading
              eyebrow="Training structure"
              title="Learn, build, test and document"
              description="Every cohort can be shaped around its audience, equipment access and practical objective."
            />
            <div className="mt-8 space-y-5">
              {[
                [
                  "01",
                  "Foundations",
                  "Understand the problem, the technology and the safety principles before practical work.",
                ],
                [
                  "02",
                  "Demonstration",
                  "See how sensors, controllers, software and agricultural systems work together.",
                ],
                [
                  "03",
                  "Hands-on practice",
                  "Build or operate guided projects with supervised practical sessions on real equipment.",
                ],
                [
                  "04",
                  "Review and next steps",
                  "Document learning, assess progress and identify a suitable project, cohort or partnership path.",
                ],
              ].map(([number, title, detail]) => (
                <div key={number} className="flex gap-4 border-b border-border pb-5">
                  <span className="font-display text-sm font-extrabold text-primary">{number}</span>
                  <div>
                    <h3 className="font-display text-base font-bold">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-border bg-surface p-7">
            <div className="flex items-center gap-3 text-primary">
              <Users className="h-5 w-5" />
              <span className="text-xs font-bold uppercase tracking-[0.18em]">
                Expected learning outcomes
              </span>
            </div>
            <ul className="mt-6 space-y-4 text-sm leading-6 text-muted-foreground">
              {[
                "A clearer understanding of AI, IoT and engineering concepts in agriculture.",
                "Practical exposure to sensors, controllers, electronics and connected systems.",
                "Improved confidence in documenting, testing and discussing a technology project.",
                "A grounded next step for further learning, mentorship or partnership discussion.",
              ].map((outcome) => (
                <li key={outcome} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7 border-t border-border pt-6">
              <div className="flex items-center gap-3 text-primary">
                <BadgeCheck className="h-5 w-5" />
                <span className="text-xs font-bold uppercase tracking-[0.18em]">
                  Certificate of Completion
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Participants who meet the required attendance and assessment standards receive a
                certificate of completion.
              </p>
            </div>
            <div className="mt-7 border-t border-border pt-6">
              <div className="flex items-center gap-3 text-primary">
                <Handshake className="h-5 w-5" />
                <span className="text-xs font-bold uppercase tracking-[0.18em]">
                  Partnership opportunities
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Institutions, sponsors and development organisations can contact SYLUTION to discuss
                cohorts, equipment support, training spaces, mentorship or programme collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="registration" className="border-y border-border bg-surface section-y">
        <div className="container-x grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Registration"
              title="Ask about training or request a cohort"
              description="This form sends an enquiry, not an instant enrolment. Select ‘Training academy’ and tell us your topic, audience and group size; the team will confirm availability and next steps within two working days."
            />
            <Link to="/contact" className="btn-base btn-primary mt-7">
              {tr("Send a training enquiry")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div>
            <div className="flex items-center gap-3 text-primary">
              <CircleHelp className="h-5 w-5" />
              <span className="text-xs font-bold uppercase tracking-[0.18em]">Training FAQ</span>
            </div>
            <div className="mt-5 divide-y divide-border border-y border-border">
              {FAQS.filter((item) =>
                [
                  "Who can join your training programmes?",
                  "How do I start a project or partnership with SYLUTION?",
                  "Where is SYLUTION based?",
                ].includes(item.q),
              ).map((item) => (
                <details key={item.q} className="group py-4">
                  <summary className="cursor-pointer list-none pr-6 font-display text-sm font-bold marker:hidden">
                    {item.q}
                  </summary>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface section-y">
        <div className="container-x grid grid-cols-2 gap-10 lg:grid-cols-3">
          {[
            { value: "Hands on", label: "Practical sessions on real equipment" },
            { value: "2", label: "Languages of instruction: English and Hausa" },
            { value: "Open", label: "Youth, women, students and institutions welcome" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <p className="font-display text-4xl font-extrabold text-gradient-brand">{s.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
