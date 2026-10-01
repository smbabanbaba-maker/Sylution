import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Clock3,
  GraduationCap,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import {
  formatProgrammeFee,
  getTrainingProgramme,
  TRAINING_PROGRAMMES,
} from "@/lib/training-programmes";
import { CONTACT } from "@/lib/site-data";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/training-programmes/$slug")({
  loader: ({ params }) => {
    const programme = getTrainingProgramme(params.slug);
    if (!programme) throw notFound();
    return programme;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} | SYLUTION Academy` },
          {
            name: "description",
            content: `${loaderData.summary} ${formatProgrammeFee(loaderData.fee)} tuition · ${loaderData.duration}. Ask SYLUTION to confirm cohort dates and availability.`,
          },
          { property: "og:title", content: `${loaderData.title} | SYLUTION Academy` },
          {
            property: "og:description",
            content: `${loaderData.overview} Tuition: ${formatProgrammeFee(loaderData.fee)}.`,
          },
        ]
      : [],
  }),
  component: TrainingProgrammePage,
});

function TrainingProgrammePage() {
  const programme = Route.useLoaderData();
  const { tr } = useLang();
  const fee = formatProgrammeFee(programme.fee);
  const contactHref = `/contact?programme=${encodeURIComponent(programme.slug)}#academy-contact`;
  const whatsappNumber = CONTACT.whatsapp.replace(/\D/g, "");
  const whatsappMessage = encodeURIComponent(
    `Hello SYLUTION Academy, I would like to ask about ${programme.title} (${fee}). Please confirm the next cohort dates, place availability and what the tuition includes.`,
  );
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const relatedProgrammes = [
    ...TRAINING_PROGRAMMES.filter(
      (item) => item.category === programme.category && item.slug !== programme.slug,
    ),
    ...TRAINING_PROGRAMMES.filter(
      (item) => item.category !== programme.category && item.slug !== programme.slug,
    ),
  ].slice(0, 3);
  const certificate =
    programme.certificateNote ??
    "SYLUTION Certificate of Completion, subject to the Academy's attendance and assessment requirements.";

  return (
    <>
      <PageHero
        eyebrow={
          <>
            {tr("SYLUTION Academy")} · {tr(programme.category)}
          </>
        }
        title={programme.title}
        subtitle={programme.overview}
        compact
      >
        <a href={contactHref} className="btn-base btn-primary">
          {tr("Apply / ask about dates")} <ArrowRight className="h-4 w-4" />
        </a>
        <Link to="/training" className="btn-base btn-ghost">
          <ArrowLeft className="h-4 w-4" /> {tr("All programmes")}
        </Link>
      </PageHero>

      <section className="container-x relative z-10 -mt-5">
        <div className="grid gap-3 rounded-3xl border border-border bg-background p-5 shadow-lg shadow-black/5 sm:grid-cols-2 lg:grid-cols-4 sm:p-6">
          <Fact
            icon={<BadgeCheck className="h-5 w-5" />}
            label={tr("Tuition fee")}
            value={tr(fee)}
          />
          <Fact
            icon={<Clock3 className="h-5 w-5" />}
            label={tr("Duration")}
            value={tr(programme.duration)}
          />
          <Fact
            icon={<GraduationCap className="h-5 w-5" />}
            label={tr("Course level")}
            value={tr(programme.level)}
          />
          <Fact
            icon={<CalendarDays className="h-5 w-5" />}
            label={tr("Course format")}
            value={programme.format ?? tr("Confirm format with the Academy")}
          />
        </div>
      </section>

      <section className="container-x grid gap-6 section-y lg:grid-cols-[1fr_0.8fr]">
        <Reveal>
          <div className="card-luxe h-full p-6 sm:p-8">
            <p className="eyebrow">{tr("What you will build or do")}</p>
            <h2 className="mt-4 font-display text-2xl font-extrabold tracking-tight">
              {programme.practicalWork}
            </h2>
            <div className="mt-7 grid gap-5 border-t border-border pt-6 sm:grid-cols-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-primary">
                  {tr("Who this is for")}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{programme.audience}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-primary">
                  {tr("Learning outcomes")}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{programme.outcome}</p>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="rounded-3xl border border-primary/15 bg-primary/[0.045] p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary">
                <BookOpen className="h-5 w-5" />
              </span>
              <div>
                <p className="eyebrow">{tr("Programme at a glance")}</p>
                <h2 className="mt-1 font-display text-lg font-bold">{tr(programme.category)}</h2>
              </div>
            </div>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">{programme.summary}</p>
            <div className="mt-5 flex items-start gap-3 rounded-2xl border border-border bg-background p-4">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <p className="text-sm leading-6 text-muted-foreground">
                {tr(
                  "Training is based in Kano. Ask whether this cohort is available in English or Hausa.",
                )}
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="border-y border-border bg-surface section-y">
        <div className="container-x">
          <SectionHeading
            eyebrow={tr("Course outline")}
            title={tr("What you will learn")}
            description={tr(
              "A clear view of the topics and practical work covered in this programme.",
            )}
          />
          <ol className="mt-9 grid gap-3 md:grid-cols-2">
            {programme.modules.map((module, index) => (
              <li
                key={module}
                className="flex items-start gap-4 rounded-2xl border border-border bg-background p-4 sm:p-5"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-sm font-extrabold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="pt-1 text-sm leading-6">{module}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-x section-y">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-background p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <h2 className="font-display text-xl font-bold">{tr("Certificate")}</h2>
            </div>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">{certificate}</p>
          </div>
          <div className="rounded-3xl border border-border bg-background p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <CalendarDays className="h-5 w-5 text-primary" />
              <h2 className="font-display text-xl font-bold">{tr("Before you request a place")}</h2>
            </div>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              {programme.fee === null
                ? tr(
                    "The fee is quoted after SYLUTION understands your group, scope and delivery needs.",
                  )
                : tr(
                    "Confirm the next cohort date, available places and what equipment or materials are covered by the listed tuition.",
                  )}
            </p>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              {tr(
                "An enquiry is not a confirmed enrolment or payment. SYLUTION will explain the next step after checking availability.",
              )}
            </p>
          </div>
        </div>
      </section>

      <section id="apply" className="border-y border-border bg-ink text-white section-y">
        <div className="container-x grid gap-9 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/65">
              {tr("SYLUTION Academy")} · Kano, Nigeria
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              {tr("Ready to ask about this programme?")}
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/75">
              {tr(
                "Open our contact page to see the Academy's phone, WhatsApp and email. The enquiry form will already include this programme and its listed fee.",
              )}
            </p>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/85">
              {CONTACT.phones.map((phone) => (
                <a key={phone} className="hover:text-white hover:underline" href={`tel:${phone}`}>
                  {phone}
                </a>
              ))}
              <a className="hover:text-white hover:underline" href={`mailto:${CONTACT.email}`}>
                {CONTACT.email}
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a href={contactHref} className="btn-base btn-primary justify-center">
              {tr("Apply / ask about dates")} <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4" /> {tr("Message Academy on WhatsApp")}
            </a>
          </div>
        </div>
      </section>

      {relatedProgrammes.length > 0 && (
        <section className="container-x section-y">
          <SectionHeading
            eyebrow={tr("Keep exploring")}
            title={tr("Related programmes")}
            description={tr("Compare another course before contacting the Academy.")}
          />
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {relatedProgrammes.map((item) => (
              <Link
                key={item.slug}
                to="/training-programmes/$slug"
                params={{ slug: item.slug }}
                className="card-luxe group flex items-center justify-between gap-4 p-5 transition hover:border-primary/40"
              >
                <div>
                  <p className="text-xs font-semibold text-primary">
                    {tr(formatProgrammeFee(item.fee))}
                  </p>
                  <h3 className="mt-1 font-display font-bold group-hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">{tr(item.duration)}</p>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-primary" />
              </Link>
            ))}
          </div>
          <Link to="/training" className="btn-base btn-ghost mt-7">
            <ArrowLeft className="h-4 w-4" /> {tr("Return to all programmes")}
          </Link>
        </section>
      )}
    </>
  );
}

function Fact({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-border bg-surface p-4">
      <span className="mt-0.5 shrink-0 text-primary">{icon}</span>
      <div className="min-w-0">
        <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-muted-foreground">
          {label}
        </p>
        <p className="mt-1 break-words text-sm font-bold">{value}</p>
      </div>
    </div>
  );
}
