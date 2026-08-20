import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { f as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as ChartLine, at as Banknote, v as ShieldCheck, z as FileCheckCorner } from "../_libs/lucide-react.mjs";
import { c as BRAND_IMAGES, i as Reveal } from "./router-BNw1KFvK.mjs";
import { n as SectionHeading, t as PageHero } from "./PageHero-BkOYD12C.mjs";
import { t as CTASection } from "./CTASection-DTgrXUZd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/loans-BiEQKJUm.js
var import_jsx_runtime = require_jsx_runtime();
var STEPS = [
	{
		icon: FileCheckCorner,
		title: "Apply in minutes",
		text: "A short digital form with document upload from any phone."
	},
	{
		icon: ChartLine,
		title: "Data-backed scoring",
		text: "Farm records and telemetry strengthen the application."
	},
	{
		icon: ShieldCheck,
		title: "Partner underwriting",
		text: "Reviewed by licensed banks and development funders."
	},
	{
		icon: Banknote,
		title: "Equipment disbursed",
		text: "Funds released against verified equipment and installation."
	}
];
function Loans() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Loan Application",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Financing for farm technology ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-gradient-brand",
				children: " coming soon"
			})] }),
			subtitle: "We are working with banks and development partners to make irrigation, solar, greenhouses and machinery affordable through structured, transparent financing.",
			image: BRAND_IMAGES.team,
			compact: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "glass inline-flex items-center gap-3 rounded-full px-5 py-2.5 text-sm font-semibold",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "relative flex h-2.5 w-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" })]
				}), "Applications open soon"]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x section-y",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "How it will work",
					title: "Four steps from application to installed equipment",
					align: "center"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
					children: STEPS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .07,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card-luxe h-full p-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-6 w-6" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-6 text-xs font-bold tracking-[0.2em] text-muted-foreground",
									children: ["0", i + 1]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 font-display text-lg font-bold",
									children: s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm text-muted-foreground",
									children: s.text
								})
							]
						})
					}, s.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .2,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-luxe mt-14 flex flex-wrap items-center justify-between gap-6 p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl font-bold",
							children: "Are you a lender or development partner?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "We are onboarding underwriting partners for the first financing cohort."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.04]",
							children: "Talk to our team"
						})]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {})
	] });
}
//#endregion
export { Loans as component };
