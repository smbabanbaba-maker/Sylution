import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { BRAND_IMAGES } from "@/lib/site-data";
import {
  FINDER_CATEGORIES,
  FINDER_TEXT,
  getFinderCategoryLabel,
  searchSitePages,
} from "@/lib/site-pages";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/explore")({
  head: () => ({
    meta: [
      { title: "Explore All SYLUTION Pages | Site Directory" },
      {
        name: "description",
        content:
          "Search and browse all SYLUTION pages by topic, including solutions, products, projects, training, news and contact information.",
      },
    ],
  }),
  component: ExplorePage,
});

function ExplorePage() {
  const { lang } = useLang();
  const copy = FINDER_TEXT[lang];
  const [query, setQuery] = useState("");
  const results = useMemo(() => searchSitePages(query), [query]);
  const groups = FINDER_CATEGORIES.map((category) => ({
    category,
    pages: results.filter((page) => page.category === category),
  })).filter((group) => group.pages.length > 0);

  return (
    <>
      <PageHero
        eyebrow={copy.allPages}
        title={copy.directoryTitle}
        subtitle={copy.directoryDescription}
        image={BRAND_IMAGES.iotLab}
        compact
      />

      <section className="container-x section-y">
        <div className="card-luxe mx-auto max-w-3xl p-4 sm:p-6">
          <label htmlFor="site-directory-search" className="mb-3 block text-sm font-semibold">
            {copy.button}
          </label>
          <div className="flex items-center gap-3 rounded-xl border border-border bg-background/70 px-4">
            <Search aria-hidden="true" className="h-5 w-5 shrink-0 text-muted-foreground" />
            <input
              id="site-directory-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={copy.placeholder}
              className="min-h-12 w-full bg-transparent text-base text-foreground outline-none placeholder:text-muted-foreground"
            />
          </div>
          <p className="mt-3 text-sm text-muted-foreground" aria-live="polite">
            {results.length} {copy.pageCount}
          </p>
        </div>

        {groups.length ? (
          <div className="mt-12 space-y-12">
            {groups.map((group) => (
              <section key={group.category} aria-labelledby={`directory-${group.category}`}>
                <h2
                  id={`directory-${group.category}`}
                  className="font-display text-xl font-bold sm:text-2xl"
                >
                  {getFinderCategoryLabel(group.category, lang)}
                </h2>
                <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {group.pages.map((page) => (
                    <a
                      key={page.path}
                      href={page.path}
                      className="card-luxe block p-5 transition-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                        {getFinderCategoryLabel(page.category, lang)}
                      </span>
                      <span className="mt-2 block font-display text-lg font-bold text-foreground">
                        {page.title}
                      </span>
                      <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
                        {page.summary}
                      </span>
                    </a>
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          <p className="mt-12 text-center text-muted-foreground">{copy.noResults}</p>
        )}
      </section>
    </>
  );
}
