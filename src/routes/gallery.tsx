import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { GALLERY, GALLERY_CATEGORIES, U, BRAND_IMAGES } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery, SYLUTION Projects, Drones, Farms and Labs" },
      {
        name: "description",
        content:
          "Photographs from SYLUTION systems, technology development, exhibitions, training sessions and agricultural activities in Nigeria.",
      },
      { property: "og:title", content: "Gallery, SYLUTION" },
      { property: "og:description", content: "Real photographs from our systems, workspace, exhibitions and training sessions." },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const items = active === "All" ? GALLERY : GALLERY.filter((g) => g.category === active);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="The work, as it actually looks"
        subtitle="Fields, workshops, laboratories, classrooms and skies, a visual record of SYLUTION projects across Nigeria."
        image={BRAND_IMAGES.drone}
        compact
      />

      <section className="container-x section-y">
        <div className="flex flex-wrap gap-2">
          {GALLERY_CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
                active === c
                  ? "border-primary bg-primary text-primary-foreground shadow-glow"
                  : "border-border text-muted-foreground hover:bg-accent hover:text-foreground",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {items.map((g, i) => (
            <Reveal key={`${g.src}-${i}`} delay={(i % 3) * 0.06}>
              <button
                onClick={() => setLightbox(GALLERY.indexOf(g))}
                className="group relative block w-full overflow-hidden rounded-2xl text-left"
              >
                <img
                  src={g.src}
                  alt={g.caption}
                  loading="lazy"
                  className={cn(
                    "w-full object-cover transition-transform duration-700 group-hover:scale-105",
                    i % 3 === 0 ? "h-80" : i % 3 === 1 ? "h-64" : "h-96",
                  )}
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-background/85 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 translate-y-4 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="eyebrow">{g.category}</p>
                  <p className="mt-1 text-sm font-semibold">{g.caption}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-background/90 p-5 backdrop-blur-xl"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <figure className="max-w-4xl">
            <img
              src={GALLERY[lightbox].src}
              alt={GALLERY[lightbox].caption}
              className="max-h-[75vh] w-full rounded-2xl object-contain shadow-luxe"
            />
            <figcaption className="mt-4 text-center text-sm text-muted-foreground">
              {GALLERY[lightbox].caption}
            </figcaption>
          </figure>
        </div>
      )}

      <CTASection />
    </>
  );
}
