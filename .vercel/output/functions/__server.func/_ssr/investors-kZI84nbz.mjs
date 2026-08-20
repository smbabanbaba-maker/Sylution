import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { f as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as ChartLine, G as Cpu, H as Earth, W as Download, ct as ArrowRight, o as Users, v as ShieldCheck } from "../_libs/lucide-react.mjs";
import { c as BRAND_IMAGES, i as Reveal, u as CONTACT } from "./router-B0yD2mue.mjs";
import { n as SectionHeading, t as PageHero } from "./PageHero-qNkaHWU9.mjs";
import { t as CTASection } from "./CTASection-B1jFNlIi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/investors-kZI84nbz.js
var import_jsx_runtime = require_jsx_runtime();
var WHY = [
	{
		icon: Cpu,
		title: "In house engineering",
		detail: "Hardware, firmware, connectivity, cloud and interfaces are built by one team, not outsourced."
	},
	{
		icon: Earth,
		title: "Underserved market",
		detail: "Industrial and agricultural operations across West Africa still run without instrumentation."
	},
	{
		icon: ChartLine,
		title: "Product pathway",
		detail: "A flagship platform, Sysmart Agro, in active development and field deployment."
	},
	{
		icon: Users,
		title: "Talent pipeline",
		detail: "Our academy trains the engineers we and our partners will need."
	},
	{
		icon: ShieldCheck,
		title: "Honest reporting",
		detail: "We publish real project stages. No inflated deployment or revenue figures."
	},
	{
		icon: Download,
		title: "Documentation",
		detail: "A company profile is available now, with further material shared on request."
	}
];
var STAGE = [
	{
		label: "Company stage",
		value: "Early stage, engineering led"
	},
	{
		label: "Flagship product",
		value: "Sysmart Agro, active project"
	},
	{
		label: "Base",
		value: "Technology Incubation Centre, Kano"
	},
	{
		label: "Capital use",
		value: "Prototyping, field pilots, production tooling"
	}
];
function InvestorsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Investors",
			title: "Backing African engineering",
			subtitle: "SYLUTION is an early stage IoT, AI and electronics engineering company open to strategic investment and partnerships. This page describes where we genuinely are and what capital would be used for.",
			image: BRAND_IMAGES.pcb,
			compact: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/company-profile",
					className: "btn-base btn-primary",
					children: ["Download the company profile ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/contact",
					className: "glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:scale-[1.04]",
					children: ["Request a conversation ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-px overflow-hidden rounded-3xl border border-border sm:grid-cols-2 lg:grid-cols-4",
				children: STAGE.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass px-6 py-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.18em] text-muted-foreground",
						children: s.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-display text-base font-bold",
						children: s.value
					})]
				}, s.label))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x pb-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Investment case",
				title: "Why SYLUTION",
				description: "Six reasons an investor or development financier should look closely at what we are building."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: WHY.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i % 3 * .07,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-luxe h-full p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(w.icon, { className: "h-6 w-6" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-6 font-display text-lg font-bold",
								children: w.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground",
								children: w.detail
							})
						]
					})
				}, w.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-surface section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x grid gap-10 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Documents",
						title: "What is available today",
						description: "More detailed material, including technical documentation and financial planning, is shared directly after an introductory conversation."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-8 space-y-3 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }), "Company profile PDF, available for immediate download"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }), "Sysmart Agro project overview and current status"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }), "Investor deck and financial model, on request"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 space-y-1 text-sm text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${CONTACT.email}`,
							className: "font-semibold text-primary",
							children: CONTACT.email
						}) }), CONTACT.phones.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `tel:${p}`,
							className: "hover:text-foreground",
							children: p
						}) }, p))]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .12,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden rounded-3xl shadow-luxe",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: BRAND_IMAGES.iotLab,
							alt: "SYLUTION engineers validating IoT hardware in the laboratory",
							loading: "lazy",
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
export { InvestorsPage as component };
