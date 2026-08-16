import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { SOLUTIONS } from "@/lib/site-data";

// TODO: replace with your project URL once a project name or custom domain is set.
const BASE_URL = "";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/platforms", changefreq: "monthly", priority: "0.9" },

          { path: "/about", changefreq: "monthly", priority: "0.8" },
          { path: "/iot", changefreq: "weekly", priority: "0.95" },
          { path: "/ai", changefreq: "monthly", priority: "0.9" },
          { path: "/electronics", changefreq: "monthly", priority: "0.9" },
          { path: "/products", changefreq: "weekly", priority: "0.85" },
          { path: "/company-profile", changefreq: "monthly", priority: "0.7" },
          { path: "/sysmart-agro", changefreq: "weekly", priority: "0.95" },
          { path: "/projects", changefreq: "weekly", priority: "0.85" },
          { path: "/partners", changefreq: "monthly", priority: "0.7" },
          { path: "/investors", changefreq: "monthly", priority: "0.7" },
          { path: "/industries", changefreq: "monthly", priority: "0.8" },
          { path: "/solutions", changefreq: "weekly", priority: "0.9" },

          ...SOLUTIONS.map((s) => ({
            path: `/solutions/${s.slug}`,
            changefreq: "monthly" as const,
            priority: "0.7",
          })),
          { path: "/research", changefreq: "monthly", priority: "0.7" },
          { path: "/training", changefreq: "monthly", priority: "0.7" },
          { path: "/gallery", changefreq: "monthly", priority: "0.6" },
          { path: "/news", changefreq: "weekly", priority: "0.7" },
          { path: "/marketplace", changefreq: "monthly", priority: "0.5" },
          { path: "/loans", changefreq: "monthly", priority: "0.5" },
          { path: "/careers", changefreq: "weekly", priority: "0.6" },
          { path: "/faq", changefreq: "monthly", priority: "0.5" },
          { path: "/contact", changefreq: "monthly", priority: "0.8" },
          { path: "/privacy", changefreq: "yearly", priority: "0.3" },
          { path: "/terms", changefreq: "yearly", priority: "0.3" },
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
