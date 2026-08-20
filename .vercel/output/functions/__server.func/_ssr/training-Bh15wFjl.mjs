import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { f as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { P as GraduationCap, ct as ArrowRight } from "../_libs/lucide-react.mjs";
import { T as TRAINING_PROGRAMMES, c as BRAND_IMAGES, i as Reveal } from "./router-BNw1KFvK.mjs";
import { n as SectionHeading, t as PageHero } from "./PageHero-BkOYD12C.mjs";
import { t as CTASection } from "./CTASection-DTgrXUZd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/training-Bh15wFjl.js
var import_jsx_runtime = require_jsx_runtime();
function Training() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "SYLUTION Academy",
			title: "Technology only creates value when people can run it",
			subtitle: "Practical, hands-on training for farmers, technicians, students, and institutions, delivered on real equipment in real-world field conditions.",
			image: BRAND_IMAGES.training,
			compact: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/contact",
				className: "btn-base btn-primary",
				children: ["Enrol or request a cohort ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x section-y",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Programmes",
				title: "Eleven programmes, one practical standard",
				description: "Every programme mixes classroom fundamentals with supervised hands-on operation, focusing on practical skill acquisition."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: TRAINING_PROGRAMMES.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i % 3 * .07,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "card-luxe group flex h-full flex-col overflow-hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative h-40 overflow-hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.image,
								alt: p.title,
								loading: "lazy",
								className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"aria-hidden": true,
								className: "absolute inset-0 bg-gradient-to-t from-background/70 to-transparent"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-1 flex-col p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-lg font-bold",
									children: p.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 flex-1 text-sm text-muted-foreground",
									children: p.detail
								})
							]
						})]
					})
				}, p.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-surface section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-x grid gap-10 lg:grid-cols-3",
				children: [
					{
						value: "Hands on",
						label: "Practical sessions on real equipment"
					},
					{
						value: "3",
						label: "Languages of instruction: English, Hausa, French"
					},
					{
						value: "Open",
						label: "Youth, women, students and institutions welcome"
					}
				].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: i * .08,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-4xl font-extrabold text-gradient-brand",
						children: s.value
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: s.label
					})]
				}, s.label))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {})
	] });
}
//#endregion
export { Training as component };
