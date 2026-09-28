import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FINDER_TEXT, getFinderCategoryLabel, searchSitePages } from "@/lib/site-pages";
import { useLang } from "@/lib/i18n";

export function SiteSearch() {
  const { lang } = useLang();
  const copy = FINDER_TEXT[lang];
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const results = useMemo(() => searchSitePages(query).slice(0, 8), [query]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target;
      const isTyping =
        target instanceof HTMLElement &&
        (target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName));
      const shortcut = (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k";
      if (shortcut || (event.key === "/" && !isTyping)) {
        event.preventDefault();
        setOpen(true);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  function changeOpen(nextOpen: boolean) {
    setOpen(nextOpen);
    if (!nextOpen) setQuery("");
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={copy.button}
        aria-haspopup="dialog"
        aria-keyshortcuts="Control+K Meta+K /"
        title={`${copy.button} (Ctrl+K)`}
        className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border bg-card/70 backdrop-blur transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <Search aria-hidden="true" className="h-5 w-5" />
      </button>

      <Dialog open={open} onOpenChange={changeOpen}>
        <DialogContent className="max-w-2xl gap-0 overflow-hidden p-0 sm:rounded-2xl">
          <DialogHeader className="border-b border-border px-5 py-4 pr-12">
            <DialogTitle>{copy.title}</DialogTitle>
            <DialogDescription>{copy.description}</DialogDescription>
          </DialogHeader>

          <div className="flex items-center gap-3 border-b border-border px-5 py-3">
            <Search aria-hidden="true" className="h-5 w-5 shrink-0 text-muted-foreground" />
            <input
              autoFocus
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" && results[0]) {
                  window.location.assign(results[0].path);
                }
              }}
              placeholder={copy.placeholder}
              aria-label={copy.button}
              className="min-h-11 w-full bg-transparent text-base text-foreground outline-none placeholder:text-muted-foreground"
            />
          </div>

          <div className="max-h-[55vh] overflow-y-auto p-2" aria-live="polite">
            {results.length ? (
              <ul className="space-y-1">
                {results.map((page) => (
                  <li key={page.path}>
                    <a
                      href={page.path}
                      onClick={() => changeOpen(false)}
                      className="flex items-start justify-between gap-4 rounded-xl px-3 py-3 text-left transition-colors hover:bg-accent focus-visible:bg-accent focus-visible:outline-none"
                    >
                      <span className="min-w-0">
                        <span className="block font-semibold text-foreground">{page.title}</span>
                        <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                          {page.summary}
                        </span>
                      </span>
                      <span className="shrink-0 pt-1 text-[0.65rem] font-semibold uppercase tracking-wide text-muted-foreground">
                        {getFinderCategoryLabel(page.category, lang)}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="px-4 py-10 text-center text-sm text-muted-foreground">
                {copy.noResults}
              </p>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border px-5 py-3 text-xs text-muted-foreground">
            <span>{copy.tip}</span>
            <a
              href="/explore"
              onClick={() => changeOpen(false)}
              className="font-semibold text-primary underline-offset-4 hover:underline"
            >
              {copy.allPages}
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
