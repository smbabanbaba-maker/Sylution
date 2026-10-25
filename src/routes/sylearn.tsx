import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink, GraduationCap, ShieldCheck } from "lucide-react";

const SYLEARN_BOT_URL = "https://t.me/SYLearn_Bot";
const SYLEARN_APP_URL = "https://sylutionacademy.vercel.app/";

export const Route = createFileRoute("/sylearn")({
  head: () => ({
    meta: [
      { title: "SYLearn — Official Digital Skills Academy & Telegram Bot | SYLUTION" },
      {
        name: "description",
        content:
          "SYLearn Digital Skills Academy is a learning project from SYLUTION. Find its official Telegram bot @SYLearn_Bot and the SYLearn learning application.",
      },
      { property: "og:title", content: "Official SYLearn Telegram Bot | SYLUTION" },
      {
        property: "og:description",
        content:
          "SYLUTION confirms that @SYLearn_Bot is the official Telegram bot for SYLearn Digital Skills Academy.",
      },
    ],
  }),
  component: SYLearnOfficialPage,
});

function SYLearnOfficialPage() {
  return (
    <main className="container-x pb-14 pt-12 sm:pt-20">
      <div className="mx-auto max-w-4xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-bold tracking-wide text-primary">
          <ShieldCheck className="h-4 w-4" aria-hidden="true" />
          Official SYLUTION product information
        </div>
        <h1 className="mt-6 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
          SYLearn
          <span className="block text-primary">Digital Skills Academy</span>
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
          SYLearn is a digital learning initiative by SYLUTION, a technology engineering
          and training company based in Kano, Nigeria. It helps learners explore
          programming, design, robotics, data and other practical digital skills.
        </p>

        <section
          aria-label="Official SYLearn Telegram identity"
          className="mt-9 rounded-3xl border border-border bg-surface p-5 shadow-lg shadow-black/5 sm:p-8"
        >
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
              <GraduationCap className="h-6 w-6" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <h2 className="font-display text-lg font-extrabold sm:text-xl">
                Our official Telegram bot
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                SYLUTION confirms that the Telegram account below is the official
                SYLearn Digital Skills Academy bot operated for our learning project.
              </p>
              <p className="mt-4 break-all text-xl font-extrabold text-foreground">
                @SYLearn_Bot
              </p>
              <a
                href={SYLEARN_BOT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base btn-primary mt-5 inline-flex items-center gap-2"
              >
                Open official SYLearn Bot
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
              <p className="mt-4 break-all text-xs text-muted-foreground">
                Official bot URL:{" "}
                <a
                  href={SYLEARN_BOT_URL}
                  className="font-semibold underline underline-offset-4 hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://t.me/SYLearn_Bot
                </a>
              </p>
            </div>
          </div>
        </section>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <a
            href={SYLEARN_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-border bg-background p-5 transition-colors hover:border-primary/30"
          >
            <h2 className="font-display text-base font-bold">SYLearn learning app</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Browse free, credited video lessons and learning activities.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-primary">
              Visit SYLearn <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </a>
          <Link
            to="/training"
            className="group rounded-2xl border border-border bg-background p-5 transition-colors hover:border-primary/30"
          >
            <h2 className="font-display text-base font-bold">SYLUTION hands-on training</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Explore separate in-person practical technology programmes in Kano.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-primary">
              Training programmes <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </Link>
        </div>

        <p className="mt-7 text-xs leading-6 text-muted-foreground">
          This page confirms affiliation with SYLUTION only. It does not claim that
          the bot currently holds a Telegram verification badge. Telegram alone
          decides whether to grant official verification.
        </p>
      </div>
    </main>
  );
}
