import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { LOGO_SRC, SOLUTIONS } from "@/lib/site-data";
import { LANGS, useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const MAIN = [
  { to: "/", key: "nav.home" },
  { to: "/about", key: "nav.about" },
  { to: "/iot", key: "nav.iot" },
  { to: "/platforms", key: "nav.platforms" },
  { to: "/sysmart-agro", key: "nav.sysmart" },
  { to: "/projects", key: "nav.projects" },
  { to: "/ai", key: "nav.ai" },
  { to: "/electronics", key: "nav.electronics" },
  { to: "/products", key: "nav.products" },
  { to: "/industries", key: "nav.industries" },
  { to: "/research", key: "nav.research" },
  { to: "/training", key: "nav.training" },
  { to: "/gallery", key: "nav.gallery" },
  { to: "/news", key: "nav.news" },
  { to: "/partners", key: "nav.partners" },
  { to: "/investors", key: "nav.investors" },
  { to: "/careers", key: "nav.careers" },
] as const;

const PRIMARY: string[] = ["/platforms", "/iot", "/ai", "/electronics", "/products", "/sysmart-agro"];
const HIDDEN_FROM_MORE: string[] = ["/", "/about"];


export function Nav() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [solOpen, setSolOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "glass shadow-[0_10px_30px_-24px_oklch(0.2_0.02_265/0.5)]" : "bg-transparent",
      )}
    >
      <div className="container-x flex h-16 items-center justify-between gap-3 lg:h-[4.5rem]">
        <Link to="/" className="group flex shrink-0 items-center gap-3 rounded-full transition-opacity hover:opacity-90" onClick={() => setOpen(false)}>
          <span className="brand-mark-shell h-10 w-10 lg:h-12 lg:w-12">
            <img src={LOGO_SRC} alt="SYLUTION logo" className="h-full w-full rounded-lg object-contain" />
          </span>
          <span className="font-display text-base font-extrabold tracking-[0.12em] lg:text-lg">SYLUTION</span>
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex">
          {MAIN.slice(0, 2).map((item) => (
            <NavLink key={item.to} to={item.to} label={t(item.key)} />
          ))}

          <div
            className="relative"
            onMouseEnter={() => setSolOpen(true)}
            onMouseLeave={() => setSolOpen(false)}
          >
            <Link
              to="/solutions"
              aria-expanded={solOpen}
              className="flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent/60 hover:text-foreground"
            >
              {t("nav.solutions")}
              <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-300", solOpen && "rotate-180")} />
            </Link>
            {solOpen && (
              <div className="absolute left-1/2 top-full w-[46rem] -translate-x-1/2 pt-3">
                <div className="grid grid-cols-3 gap-1 rounded-3xl border border-border bg-popover/95 p-3 shadow-luxe backdrop-blur-xl animate-in fade-in-0 zoom-in-95 duration-200">
                  {SOLUTIONS.map((s) => (
                    <Link
                      key={s.slug}
                      to="/solutions/$slug"
                      params={{ slug: s.slug }}
                      className="rounded-2xl px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {MAIN.filter((i) => PRIMARY.includes(i.to)).map((item) => (
            <NavLink key={item.to} to={item.to} label={t(item.key)} />
          ))}

          <div className="relative" onMouseEnter={() => setMoreOpen(true)} onMouseLeave={() => setMoreOpen(false)}>
            <button
              aria-expanded={moreOpen}
              className="flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent/60 hover:text-foreground"
            >
              {t("nav.more")}
              <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-300", moreOpen && "rotate-180")} />
            </button>
            {moreOpen && (
              <div className="absolute right-0 top-full w-56 pt-3">
                <div className="grid gap-1 rounded-3xl border border-border bg-popover/95 p-3 shadow-luxe backdrop-blur-xl animate-in fade-in-0 zoom-in-95 duration-200">
                  {MAIN.filter((i) => !PRIMARY.includes(i.to) && !HIDDEN_FROM_MORE.includes(i.to)).map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="rounded-2xl px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                    >
                      {t(item.key)}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-0.5 rounded-full border border-border px-1 py-1 md:flex">
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={cn(
                  "rounded-full px-2.5 py-1 text-[0.68rem] font-bold tracking-wide transition-all duration-300",
                  lang === l.code
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
                aria-label={l.label}
              >
                {l.short}
              </button>
            ))}
          </div>

          <Link
            to="/contact"
            className="btn-base btn-primary hidden px-5 py-2.5 lg:inline-flex"
          >
            <Phone className="h-4 w-4" />
            {t("nav.contact")}
          </Link>

          <button
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border bg-card/70 backdrop-blur transition-colors hover:bg-accent xl:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="glass max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain border-t border-border animate-in fade-in-0 slide-in-from-top-2 duration-300 xl:hidden">
          <div className="container-x space-y-1 py-5">
            {[...MAIN, { to: "/contact", key: "nav.contact" } as const].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center rounded-xl px-3 text-[0.975rem] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground active:bg-accent"
              >
                {t(item.key)}
              </Link>
            ))}
            <div className="pt-3">
              <p className="eyebrow px-3 pb-2">{t("nav.solutions")}</p>
              <div className="grid grid-cols-2 gap-1">
                {SOLUTIONS.map((s) => (
                  <Link
                    key={s.slug}
                    to="/solutions/$slug"
                    params={{ slug: s.slug }}
                    onClick={() => setOpen(false)}
                    className="flex min-h-11 items-center rounded-xl px-3 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex gap-1 pt-4">
              {LANGS.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={cn(
                    "min-h-11 flex-1 rounded-full border border-border text-xs font-bold transition-colors",
                    lang === l.code ? "bg-primary text-primary-foreground" : "text-muted-foreground",
                  )}
                >
                  {l.short}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      activeOptions={{ exact: to === "/" }}
      activeProps={{ className: "text-foreground" }}
      inactiveProps={{ className: "text-muted-foreground" }}
      className="rounded-full px-3 py-2 text-sm font-medium transition-colors hover:bg-accent/60 hover:text-foreground"
    >
      {label}
    </Link>
  );
}
