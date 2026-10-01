import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, CalendarDays, Clock3, GraduationCap, Search } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { FAQS } from "@/lib/site-data";
import {
  formatProgrammeFee,
  PROGRAMME_CATEGORIES,
  TRAINING_PROGRAMMES,
  type ProgrammeCategory,
} from "@/lib/training-programmes";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/training")({
  head: () => ({
    meta: [
      { title: "15 Practical Technology Courses & Fees | SYLUTION Academy" },
      {
        name: "description",
        content:
          "Explore 15 practical courses in AI, IoT, robotics, electronics, smart agriculture, irrigation, drones and solar. See tuition, modules and how to enquire about the next cohort.",
      },
      { property: "og:title", content: "SYLUTION Academy | Courses, Fees & Practical Training" },
      {
        property: "og:description",
        content:
          "Compare 15 hands-on technology and AgriTech programmes, their tuition, duration, modules and practical outcomes. Ask SYLUTION to confirm the next cohort.",
      },
    ],
  }),
  component: Training,
});

function Training() {
  const { tr } = useLang();
  const [category, setCategory] = useState<ProgrammeCategory | "all">("all");
  const [query, setQuery] = useState("");
  const courses = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return TRAINING_PROGRAMMES.filter((programme) => {
      const inCategory = category === "all" || programme.category === category;
      const searchable = [
        programme.title,
        programme.summary,
        programme.overview,
        programme.category,
        programme.modules.join(" "),
      ]
        .join(" ")
        .toLowerCase();
      return inCategory && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [category, query]);

  return (
    <>
      <PageHero
        eyebrow={<>{tr("SYLUTION Academy")} · Kano, Nigeria</>}
        title={tr("Practical technology training, with clear prices and pathways")}
        subtitle={tr(
          "Choose a programme to see its tuition, what you will learn and the practical work. Training is hands-on; ask us to confirm the next cohort and what each fee includes.",
        )}
        compact
      >
        <a href="#programmes" className="btn-base btn-primary">
          {tr("Browse all 15 programmes")} <ArrowRight className="h-4 w-4" />
        </a>
        <a href="#how-to-apply" className="btn-base btn-ghost">
          {tr("How to request a place")}
        </a>
      </PageHero>

      <section className="container-x -mt-5 relative z-10 pb-10">
        <div className="grid gap-3 rounded-3xl border border-border bg-background p-5 shadow-lg shadow-black/5 sm:grid-cols-3 sm:p-7">
          <Stat value="15" label={tr("programmes to explore")} />
          <Stat value={tr("2–8 weeks")} label={tr("typical course duration")} />
          <Stat value="₦50,000+" label={tr("published tuition; institutional quote by scope")} />
        </div>
      </section>

      <section id="programmes" className="container-x scroll-mt-24 section-y pt-8">
        <SectionHeading
          eyebrow={tr("Course catalogue")}
          title={tr("15 practical programmes, clearly priced")}
          description={tr(
            "Compare the topic, level, duration and fee. Open any programme for its full overview, modules, practical work and learning outcomes.",
          )}
        />

        <div className="mt-9 grid gap-4 rounded-3xl border border-border bg-surface p-4 sm:p-5 lg:grid-cols-[minmax(15rem,0.8fr)_1.2fr] lg:items-center">
          <label className="relative block">
            <span className="sr-only">{tr("Search programmes")}</span>
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={tr("Search by course, skill or technology")}
              className="field-input pl-11"
            />
          </label>
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label={tr("Filter programmes by subject")}
          >
            <FilterButton
              active={category === "all"}
              label={tr("All programmes")}
              onClick={() => setCategory("all")}
            />
            {PROGRAMME_CATEGORIES.map((item) => (
              <FilterButton
                key={item}
                active={category === item}
                label={tr(item)}
                onClick={() => setCategory(item)}
              />
            ))}
          </div>
        </div>

        <p className="mt-5 text-sm text-muted-foreground" aria-live="polite">
          {courses.length} {tr("programmes shown")}
        </p>

        {courses.length ? (
          <div className="mt-4 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {courses.map((programme, index) => (
              <Reveal key={programme.slug} delay={(index % 3) * 0.04}>
                <Link
                  to="/training-programmes/$slug"
                  params={{ slug: programme.slug }}
                  aria-label={`${tr("View full programme")}: ${programme.title}`}
                  className="card-luxe group flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={programme.image}
                      alt={programme.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent"
                    />
                    <span className="absolute bottom-3 left-4 rounded-full border border-white/30 bg-black/45 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-white backdrop-blur">
                      {tr(programme.category)}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h3 className="font-display text-lg font-bold leading-snug tracking-tight group-hover:text-primary">
                      {programme.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">
                      {programme.summary}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-border pt-4 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <Clock3 className="h-3.5 w-3.5 text-primary" /> {tr(programme.duration)}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <GraduationCap className="h-3.5 w-3.5 text-primary" /> {tr(programme.level)}
                      </span>
                    </div>
                    <div className="mt-4 flex items-end justify-between gap-3">
                      <div>
                        <p className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-muted-foreground">
                          {tr("Tuition")}
                        </p>
                        <p className="mt-0.5 font-display text-xl font-extrabold text-primary">
                          {tr(formatProgrammeFee(programme.fee))}
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground">
                        {tr("View full programme")} <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mt-5 rounded-3xl border border-dashed border-border bg-surface p-10 text-center">
            <p className="font-display text-lg font-bold">
              {tr("No programmes match your search")}
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setCategory("all");
              }}
              className="btn-base btn-ghost mt-4"
            >
              {tr("Clear filters")}
            </button>
          </div>
        )}
      </section>

      <section id="how-to-apply" className="border-y border-border bg-surface section-y">
        <div className="container-x grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="eyebrow">{tr("Before you request a place")}</p>
            <h2 className="mt-4 max-w-xl font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              {tr("A clear enquiry first. Your place is confirmed with the Academy.")}
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
              {tr(
                "The Apply button opens SYLUTION's contact details and a prefilled enquiry. It does not take payment or confirm enrolment. Ask about the next cohort, available places and what equipment or materials the listed tuition covers.",
              )}
            </p>
            <Link to="/contact" className="btn-base btn-primary mt-6">
              {tr("Contact the Academy")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <ProcessCard
              number="01"
              title={tr("Choose a programme")}
              detail={tr("Review its modules, practical work, fee and duration.")}
            />
            <ProcessCard
              number="02"
              title={tr("Ask about dates")}
              detail={tr("Contact us to confirm the next cohort, place and fee inclusions.")}
            />
            <ProcessCard
              number="03"
              title={tr("Confirm with SYLUTION")}
              detail={tr("The Academy confirms next steps; a request is not an enrolment.")}
            />
          </div>
        </div>
      </section>

      <section className="container-x section-y">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <SectionHeading
              eyebrow={tr("Questions")}
              title={tr("Good to know before you start")}
              description={tr(
                "We confirm dates and cohort details directly, so you can ask before making a commitment.",
              )}
            />
          </div>
          <div className="divide-y divide-border border-y border-border">
            {FAQS.filter((item) =>
              [
                "Who can join your training programmes?",
                "Where is SYLUTION based?",
                "What does SYLUTION do?",
              ].includes(item.q),
            ).map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="cursor-pointer list-none pr-6 font-display text-base font-bold marker:hidden">
                  {tr(item.q)}
                </summary>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
                  {tr(item.a)}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex items-center gap-3 border-border px-2 py-1 sm:border-r last:border-r-0">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
        <CalendarDays className="h-5 w-5" />
      </span>
      <div>
        <p className="font-display text-lg font-extrabold leading-tight">{value}</p>
        <p className="mt-1 text-xs leading-5 text-muted-foreground">{label}</p>
      </div>
    </div>
  );
}

function FilterButton({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
        active
          ? "border-primary bg-primary text-white"
          : "border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground"
      }`}
    >
      {label}
    </button>
  );
}

function ProcessCard({ number, title, detail }: { number: string; title: string; detail: string }) {
  return (
    <article className="rounded-2xl border border-border bg-background p-5">
      <span className="text-xs font-extrabold tracking-[0.16em] text-primary">{number}</span>
      <h3 className="mt-3 font-display text-base font-bold">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{detail}</p>
    </article>
  );
}
