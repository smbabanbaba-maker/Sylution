import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { f as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { ct as ArrowRight } from "../_libs/lucide-react.mjs";
import { c as BRAND_IMAGES, i as Reveal, s as AI_CAPABILITIES } from "./router-Wf-YWA0T.mjs";
import { n as SectionHeading, t as PageHero } from "./PageHero-BCY8ciXe.mjs";
import { t as CTASection } from "./CTASection-BQDyNKKd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ai-BO7eIVlY.js
var import_jsx_runtime = require_jsx_runtime();
var PIPELINE = [
	{
		step: "01",
		title: "Data",
		detail: "Collect and label agricultural datasets from our own field work and research."
	},
	{
		step: "02",
		title: "Train",
		detail: "Build and benchmark models against measurable operational targets."
	},
	{
		step: "03",
		title: "Deploy",
		detail: "Ship to edge devices and cloud services with monitoring built in."
	},
	{
		step: "04",
		title: "Improve",
		detail: "Retrain continuously as new field data arrives."
	}
];
function AIPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Artificial Intelligence",
			title: "The intelligence behind connected systems",
			subtitle: "Our IoT devices measure the world. Our AI decides what to do about it, on the edge when the network is gone and in the cloud when scale matters.",
			image: BRAND_IMAGES.ai,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/contact",
				className: "btn-base btn-primary",
				children: ["Talk to our AI team ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x section-y",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Capability",
				title: "Applied AI, not demonstrations",
				description: "Every model we ship is measured on a business outcome, accuracy in the field, time saved, downtime avoided or cost removed."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: AI_CAPABILITIES.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i % 3 * .06,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-luxe h-full p-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-bold",
							children: c.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted-foreground",
							children: c.detail
						})]
					})
				}, c.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-surface section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Method",
					title: "From raw telemetry to deployed intelligence",
					align: "center"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-4 md:grid-cols-4",
					children: PIPELINE.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .07,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card-luxe h-full p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-3xl font-extrabold text-gradient-brand",
									children: p.step
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-base font-bold",
									children: p.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: p.detail
								})
							]
						})
					}, p.step))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Edge AI",
					title: "Intelligence that works offline",
					description: "Our models run on low cost edge hardware so a factory, clinic or farm keeps making decisions when connectivity fails, then syncs when it returns."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border",
					children: [
						{
							v: "94%",
							l: "Field accuracy"
						},
						{
							v: "< 3s",
							l: "Inference"
						},
						{
							v: "40k+",
							l: "Labelled images"
						}
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass px-4 py-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xl font-extrabold text-gradient-brand",
							children: s.v
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: s.l
						})]
					}, s.l))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .12,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden rounded-3xl shadow-luxe",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: BRAND_IMAGES.iotLab,
							alt: "SYLUTION engineers validating edge AI hardware",
							loading: "lazy",
							width: 1600,
							height: 1008,
							className: "h-full w-full object-cover"
						})
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {})
	] });
}
//#endregion
export { AIPage as component };
