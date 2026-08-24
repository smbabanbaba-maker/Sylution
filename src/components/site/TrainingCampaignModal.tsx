import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, GraduationCap, X } from "lucide-react";

const DISMISSAL_KEY = "sylution-training-campaign-dismissed";

export function TrainingCampaignModal() {
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);
  const dismiss = useCallback(() => {
    window.sessionStorage.setItem(DISMISSAL_KEY, "1");
    setOpen(false);
  }, []);

  useEffect(() => {
    if (window.location.pathname !== "/") return;
    if (window.sessionStorage.getItem(DISMISSAL_KEY) === "1") return;

    const timer = window.setTimeout(() => {
      previouslyFocusedRef.current = document.activeElement as HTMLElement | null;
      setOpen(true);
    }, 1500);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        dismiss();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      window.setTimeout(() => previouslyFocusedRef.current?.focus(), 0);
    };
  }, [dismiss, open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] grid place-items-center bg-black/55 px-4 py-6 backdrop-blur-sm sm:px-6"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) dismiss();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="training-campaign-title"
        aria-describedby="training-campaign-description"
        className="relative grid max-h-[min(690px,calc(100dvh-3rem))] w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/20 bg-white shadow-2xl motion-safe:animate-[campaign-enter_500ms_cubic-bezier(.22,.7,.25,1)] dark:bg-[#151619] sm:grid-cols-[0.92fr_1.08fr] sm:overflow-hidden"
      >
        <div className="relative min-h-[190px] overflow-hidden sm:min-h-[520px]">
          <img
            src="/brand/tech-training.jpg"
            alt="Practical SYLUTION smart agriculture technology training"
            className="h-full min-h-[190px] w-full object-cover sm:min-h-[520px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/25 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] backdrop-blur-sm">
              <BadgeCheck className="h-3.5 w-3.5 text-[#ff6b67]" /> Active programme
            </span>
            <p className="mt-3 max-w-xs text-sm font-medium leading-6 text-white/90">
              Practical technology for people building the future of agriculture.
            </p>
          </div>
        </div>

        <div className="relative flex flex-col justify-center p-6 pt-14 sm:p-10 sm:pt-10">
          <button
            ref={closeButtonRef}
            type="button"
            onClick={dismiss}
            aria-label="Close SYLUTION Smart Agriculture Training campaign"
            className="absolute right-4 top-4 inline-grid h-10 w-10 place-items-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:right-6 sm:top-6"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="mb-5 flex items-center gap-3 text-primary">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10">
              <GraduationCap className="h-5 w-5" />
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.18em]">SYLUTION Academy</span>
          </div>
          <h2
            id="training-campaign-title"
            className="max-w-lg font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-4xl"
          >
            SYLUTION SMART AGRICULTURE TRAINING
          </h2>
          <p className="mt-4 text-sm font-bold leading-6 text-primary">
            AI · IoT · Smart Irrigation · Greenhouse · Drone · Solar · Robotics
          </p>
          <p
            id="training-campaign-description"
            className="mt-4 max-w-md text-base leading-7 text-muted-foreground"
          >
            Practical technology training for farmers, youth, women, students and agripreneurs.
          </p>

          <div className="mt-7 flex flex-wrap gap-2 text-xs font-semibold text-foreground">
            {["Hands-on learning", "Supervised practice", "English · Hausa"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-muted/60 px-3 py-2"
                >
                  {item}
                </span>
              ),
            )}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link to="/training" onClick={dismiss} className="btn-base btn-primary justify-center">
              Explore Training <ArrowRight className="h-4 w-4" />
            </Link>
            <button type="button" onClick={dismiss} className="btn-base btn-ghost justify-center">
              Close
            </button>
          </div>
          <p className="mt-5 text-xs leading-5 text-muted-foreground">
            Open to individuals, institutions and partners seeking practical agriculture technology
            skills.
          </p>
        </div>
      </div>
    </div>
  );
}
