import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, ChevronDown, Menu, Phone, X } from "lucide-react";
import { LOGO_SRC, SOLUTIONS } from "@/lib/site-data";
import { LANGS, useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const PRIMARY = [
  { to: "/solutions", key: "nav.solutions" },
  { to: "/sysmart-agro", key: "nav.sysmart" },
  { to: "/products", key: "nav.products" },
  { to: "/projects", key: "nav.projects" },
  { to: "/about", key: "nav.about" },
] as const;

const EXPLORE = [
  { to: "/platforms", key: "nav.platforms" },
  { to: "/iot", key: "nav.iot" },
  { to: "/ai", key: "nav.ai" },
  { to: "/electronics", key: "nav.electronics" },
  { to: "/industries", key: "nav.industries" },
  { to: "/training", key: "nav.training" },
  { to: "/research", key: "nav.research" },
  { to: "/gallery", key: "nav.gallery" },
  { to: "/news", key: "nav.news" },
  { to: "/partners", key: "nav.partners" },
  { to: "/investors", key: "nav.investors" },
  { to: "/careers", key: "nav.careers" },
  { to: "/company-profile", label: "Company profile" },
  { to: "/faq", label: "FAQ" },
] as const;

function isPathActive(pathname: string, to: string) {
  return to === "/" ? pathname === "/" : pathname === to || pathname.startsWith(`${to}/`);
}

export function Nav() {
  const { t, lang, setLang } = useLang();
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [mobileOpen, setMobileOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const exploreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
    setExploreOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!exploreOpen) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!exploreRef.current?.contains(event.target as Node)) setExploreOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setExploreOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [exploreOpen]);

  const renderLangButtons = (compact = false) => (
    <div
      className={cn(
        "flex items-center gap-1",
        compact ? "w-full" : "rounded-full border border-border bg-white/70 p-1",
      )}
      role="group"
      aria-label="Choose language"
    >
      {LANGS.map((item) => (
        <button
          key={item.code}
          type="button"
          onClick={() => setLang(item.code)}
          aria-label={item.label}
          aria-pressed={lang === item.code}
          className={cn(
            "min-h-9 rounded-full px-3 text-[0.7rem] font-bold tracking-wide transition-colors",
            compact && "flex-1 border border-border",
            lang === item.code
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:bg-muted hover:text-foreground",
          )}
        >
          {item.short}
        </button>
      ))}
    </div>
  );

  return (
    <header className="site-header sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur-xl">
      <div className="container-x flex h-[4.5rem] items-center justify-between gap-4 lg:h-[5rem]">
        <Link
          to="/"
          className="flex shrink-0 items-center gap-3 rounded-full"
          aria-label="SYLUTION home"
        >
          <span className="brand-mark-shell h-10 w-10 lg:h-11 lg:w-11">
            <img
              src={LOGO_SRC}
              alt=""
              aria-hidden="true"
              className="h-full w-full rounded-lg object-contain"
            />
          </span>
          <span className="font-display text-base font-extrabold tracking-[0.12em] text-foreground sm:text-lg">
            SYLUTION
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 xl:flex">
          {PRIMARY.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              aria-current={isPathActive(pathname, item.to) ? "page" : undefined}
              className="nav-link"
              data-active={isPathActive(pathname, item.to) ? "true" : undefined}
            >
              {t(item.key)}
            </Link>
          ))}
          <div className="relative" ref={exploreRef}>
            <button
              type="button"
              aria-expanded={exploreOpen}
              aria-controls="explore-menu"
              onClick={() => setExploreOpen((value) => !value)}
              className="nav-link inline-flex items-center gap-1.5"
            >
              {t("nav.more")}
              <ChevronDown
                className={cn("h-3.5 w-3.5 transition-transform", exploreOpen && "rotate-180")}
              />
            </button>
            {exploreOpen && (
              <div
                id="explore-menu"
                className="nav-popover absolute right-0 top-full mt-3 w-[30rem] rounded-2xl border border-border bg-card p-4 shadow-luxe"
              >
                <p className="px-2 pb-3 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                  Explore SYLUTION
                </p>
                <div className="grid grid-cols-2 gap-1">
                  {EXPLORE.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setExploreOpen(false)}
                      className="flex min-h-10 items-center justify-between rounded-xl px-3 text-sm text-foreground/80 transition-colors hover:bg-muted hover:text-primary"
                    >
                      {"key" in item ? t(item.key) : item.label}
                      <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5 opacity-50" />
                    </Link>
                  ))}
                  {SOLUTIONS.slice(0, 6).map((solution) => (
                    <Link
                      key={solution.slug}
                      to="/solutions/$slug"
                      params={{ slug: solution.slug }}
                      onClick={() => setExploreOpen(false)}
                      className="flex min-h-10 items-center justify-between rounded-xl px-3 text-sm text-foreground/80 transition-colors hover:bg-muted hover:text-primary"
                    >
                      {solution.title}
                      <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5 opacity-50" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <div className="hidden xl:block">{renderLangButtons()}</div>
          <Link to="/contact" className="btn-base btn-primary hidden min-h-11 px-4 xl:inline-flex">
            <Phone aria-hidden="true" className="h-4 w-4" />
            {t("nav.contact")}
          </Link>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-muted xl:hidden"
            onClick={() => setMobileOpen((value) => !value)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-site-nav"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          >
            {mobileOpen ? (
              <X aria-hidden="true" className="h-5 w-5" />
            ) : (
              <Menu aria-hidden="true" className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-site-nav"
          aria-label="Mobile navigation"
          className="mobile-menu-surface absolute inset-x-0 top-full max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-b border-border shadow-xl xl:hidden"
        >
          <div className="container-x space-y-6 py-5">
            <div className="grid gap-1 sm:grid-cols-2">
              {PRIMARY.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  aria-current={isPathActive(pathname, item.to) ? "page" : undefined}
                  className={cn(
                    "flex min-h-12 items-center rounded-xl px-4 text-base font-semibold",
                    isPathActive(pathname, item.to)
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-muted",
                  )}
                >
                  {t(item.key)}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn-base btn-primary mt-1 sm:col-span-2"
              >
                <Phone aria-hidden="true" className="h-4 w-4" />
                {t("nav.contact")}
              </Link>
            </div>
            <div>
              <p className="eyebrow px-1 pb-2">{t("nav.more")}</p>
              <div className="grid gap-1 sm:grid-cols-2">
                {EXPLORE.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className="flex min-h-11 items-center rounded-xl px-3 text-sm text-foreground/75 hover:bg-muted hover:text-primary"
                  >
                    {"key" in item ? t(item.key) : item.label}
                  </Link>
                ))}
                {SOLUTIONS.map((solution) => (
                  <Link
                    key={solution.slug}
                    to="/solutions/$slug"
                    params={{ slug: solution.slug }}
                    onClick={() => setMobileOpen(false)}
                    className="flex min-h-11 items-center rounded-xl px-3 text-sm text-foreground/75 hover:bg-muted hover:text-primary"
                  >
                    {solution.title}
                  </Link>
                ))}
              </div>
            </div>
            <div>{renderLangButtons(true)}</div>
          </div>
        </nav>
      )}
    </header>
  );
}
