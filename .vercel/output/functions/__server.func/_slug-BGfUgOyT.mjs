import { s as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { f as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { Q as Check, ct as ArrowRight } from "./_libs/lucide-react.mjs";
import { i as Reveal, m as GALLERY, n as Route } from "./_ssr/router-CcDw5ofK.mjs";
import { n as SectionHeading, t as PageHero } from "./_ssr/PageHero-BCY8ciXe.mjs";
import { t as CTASection } from "./_ssr/CTASection-B4m8hUj8.mjs";
import { t as RelatedServices } from "./_ssr/RelatedServices-DSUZxgU1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-BGfUgOyT.js
var import_jsx_runtime = require_jsx_runtime();
function SolutionPage() {
	const s = Route.useLoaderData();
	const shots = GALLERY.slice(0, 12).filter((_, i) => i % 2 === 0).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: s.tagline,
			title: s.title,
			subtitle: s.summary,
			image: s.image,
			compact: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/contact",
					className: "btn-base btn-primary",
					children: ["Request a proposal ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/solutions",
					className: "glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold",
					children: "All solutions"
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x grid gap-14 section-y lg:grid-cols-[1.1fr_0.9fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "What we deliver",
				title: `Inside our ${s.title.toLowerCase()} practice`
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 space-y-4",
				children: s.capabilities.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-4 rounded-2xl border border-border bg-surface p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary/15 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "pt-0.5 text-sm",
						children: c
					})]
				}, c))
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: .12,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-luxe p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Typical outcomes"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 space-y-6",
						children: s.outcomes.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-b border-border pb-5 last:border-0 last:pb-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-3xl font-extrabold text-gradient-brand",
								children: o.value
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: o.label
							})]
						}, o.label))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 overflow-hidden rounded-2xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: s.image,
						alt: s.title,
						loading: "lazy",
						className: "h-64 w-full object-cover"
					})
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x pb-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Gallery",
				title: "From the field"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-4 md:grid-cols-3",
				children: shots.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .08,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "group overflow-hidden rounded-2xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: g.src,
							alt: g.caption,
							loading: "lazy",
							className: "h-60 w-full object-cover transition-transform duration-700 group-hover:scale-110"
						})
					})
				}, `${g.src}-${i}`))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RelatedServices, { exclude: s.slug }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {})
	] });
}
//#endregion
export { SolutionPage as component };
