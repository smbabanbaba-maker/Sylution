import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { f as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Landmark, B as Factory, L as FlaskConical, N as Handshake, P as GraduationCap, ct as ArrowRight, et as Building2 } from "../_libs/lucide-react.mjs";
import { c as BRAND_IMAGES, i as Reveal, u as CONTACT } from "./router-Wf-YWA0T.mjs";
import { n as SectionHeading, t as PageHero } from "./PageHero-BCY8ciXe.mjs";
import { t as CTASection } from "./CTASection-BQDyNKKd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/partners-yCjeYxCX.js
var import_jsx_runtime = require_jsx_runtime();
var TYPES = [
	{
		icon: GraduationCap,
		title: "Universities and polytechnics",
		detail: "Joint laboratories, student projects, internships and curriculum support in IoT and embedded systems."
	},
	{
		icon: FlaskConical,
		title: "Research institutions",
		detail: "Instrumentation, data collection platforms and co authored applied research."
	},
	{
		icon: Factory,
		title: "Industry",
		detail: "Machine telemetry, automation and monitoring deployed on your plant or site."
	},
	{
		icon: Landmark,
		title: "Government programmes",
		detail: "Infrastructure monitoring, programme instrumentation and verifiable field data."
	},
	{
		icon: Building2,
		title: "NGOs and development partners",
		detail: "Technology delivery and measurement for funded rural and climate programmes."
	},
	{
		icon: Handshake,
		title: "Technology suppliers",
		detail: "Components, modules, connectivity and distribution partnerships."
	}
];
var STEPS = [
	{
		n: "01",
		t: "Introduction",
		d: "Send us a short note about your organisation and the outcome you want."
	},
	{
		n: "02",
		t: "Technical discussion",
		d: "Our engineers review feasibility, constraints and the work involved."
	},
	{
		n: "03",
		t: "Scope and agreement",
		d: "We define deliverables, responsibilities and a realistic timeline."
	},
	{
		n: "04",
		t: "Delivery",
		d: "Engineering, deployment, training and continued support."
	}
];
function PartnersPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Partners",
			title: "Collaboration built on engineering",
			subtitle: "SYLUTION works with academic, industrial, public and development organisations. We list partnerships only once an agreement exists, so this page shows how to start one rather than logos we have not earned.",
			image: BRAND_IMAGES.techTraining,
			compact: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/contact",
				className: "btn-base btn-primary",
				children: ["Start a partnership conversation ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x section-y",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Who we work with",
				title: "Six collaboration pathways",
				description: "Each pathway has a different starting point, but all of them run through our engineering team in Kano."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: TYPES.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i % 3 * .07,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-luxe h-full p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(t.icon, { className: "h-6 w-6" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-6 font-display text-lg font-bold",
								children: t.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground",
								children: t.detail
							})
						]
					})
				}, t.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-surface section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Process",
					title: "How a partnership begins",
					align: "center"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-4 md:grid-cols-4",
					children: STEPS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .07,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card-luxe h-full p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-3xl font-extrabold text-gradient-brand",
									children: s.n
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-base font-bold",
									children: s.t
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: s.d
								})
							]
						})
					}, s.n))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card-luxe grid gap-8 p-8 sm:p-12 lg:grid-cols-[1.1fr_1fr] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Partner enquiries",
					title: "Reach the partnership desk"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 space-y-2 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: CONTACT.address }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${CONTACT.email}`,
							className: "font-semibold text-primary",
							children: CONTACT.email
						}) }),
						CONTACT.phones.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `tel:${p}`,
							className: "hover:text-foreground",
							children: p
						}) }, p))
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-2xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: BRAND_IMAGES.team,
						alt: "SYLUTION engineering team in a working session",
						loading: "lazy",
						className: "h-64 w-full object-cover"
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {})
	] });
}
//#endregion
export { PartnersPage as component };
