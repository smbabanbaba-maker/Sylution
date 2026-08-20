import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { c as BRAND_IMAGES, i as Reveal, y as NEWS } from "./router-BNw1KFvK.mjs";
import { n as SectionHeading, t as PageHero } from "./PageHero-BkOYD12C.mjs";
import { t as CTASection } from "./CTASection-DTgrXUZd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/news-YxzN6q4r.js
var import_jsx_runtime = require_jsx_runtime();
function News() {
	const [lead, ...rest] = NEWS;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Newsroom",
			title: "What we are building, shipping and proving",
			subtitle: "Milestones from our projects, research programmes, academy cohorts and partnerships.",
			image: BRAND_IMAGES.team,
			compact: true
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x section-y",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "card-luxe grid overflow-hidden lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: lead.image,
						alt: lead.title,
						className: "h-72 w-full object-cover lg:h-full"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-8 lg:p-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: lead.category
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 font-display text-2xl font-bold leading-snug sm:text-3xl",
								children: lead.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm leading-relaxed text-muted-foreground",
								children: lead.excerpt
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-xs text-muted-foreground",
								children: new Date(lead.date).toLocaleDateString("en-GB", {
									day: "numeric",
									month: "long",
									year: "numeric"
								})
							})
						]
					})]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "More stories",
					title: "Recent updates"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3",
					children: rest.map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i % 3 * .07,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "card-luxe group h-full overflow-hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-48 overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: n.image,
									alt: n.title,
									loading: "lazy",
									className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "eyebrow",
										children: n.category
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 font-display text-lg font-bold leading-snug",
										children: n.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm text-muted-foreground",
										children: n.excerpt
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-xs text-muted-foreground",
										children: new Date(n.date).toLocaleDateString("en-GB", {
											day: "numeric",
											month: "long",
											year: "numeric"
										})
									})
								]
							})]
						})
					}, n.slug))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {})
	] });
}
//#endregion
export { News as component };
