import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { f as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { R as FileText, W as Download, X as CircleCheck, ct as ArrowRight } from "../_libs/lucide-react.mjs";
import { c as BRAND_IMAGES, i as Reveal, r as PDF_PATH } from "./router-CcDw5ofK.mjs";
import { n as SectionHeading, t as PageHero } from "./PageHero-BCY8ciXe.mjs";
import { t as CTASection } from "./CTASection-B4m8hUj8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/company-profile-DTfE1DkX.js
var import_jsx_runtime = require_jsx_runtime();
var CONTENTS = [
	"Who we are, vision, mission and key figures",
	"Internet of Things at the core, the six layer stack",
	"Engineering capabilities across hardware and software",
	"Industries served, from manufacturing to government",
	"Research, products, academy and how an engagement starts"
];
function CompanyProfilePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Company profile",
			title: "Download the SYLUTION profile",
			subtitle: "A concise five page document covering who we are, our IoT first engineering stack, our capabilities and the industries we serve. Ideal for procurement teams, investors and partners.",
			image: BRAND_IMAGES.iotLab,
			compact: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: PDF_PATH,
					download: "SYLUTION-Company-Profile.pdf",
					className: "btn-base btn-primary",
					children: ["Download PDF ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: PDF_PATH,
					target: "_blank",
					rel: "noreferrer noopener",
					className: "glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:scale-[1.04]",
					children: "Open in browser"
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x grid gap-10 section-y lg:grid-cols-[1fr_1.05fr] lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Inside the document",
					title: "What the profile covers"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 space-y-4",
					children: CONTENTS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3 text-sm text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-5 w-5 shrink-0 text-primary" }), c]
					}, c))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/iot",
						className: "btn-base btn-ghost",
						children: ["Explore our IoT platform ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .12,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-luxe p-6 sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-6 w-6" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-base font-bold",
								children: "SYLUTION Company Profile"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "PDF, 5 pages, English"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 overflow-hidden rounded-2xl border border-border",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("object", {
								data: PDF_PATH,
								type: "application/pdf",
								className: "h-[30rem] w-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-8 text-center text-sm text-muted-foreground",
									children: [
										"Your browser cannot display the preview.",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: PDF_PATH,
											className: "font-semibold text-primary",
											children: "Download the profile instead"
										}),
										"."
									]
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: PDF_PATH,
							download: "SYLUTION-Company-Profile.pdf",
							className: "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]",
							children: ["Download the profile ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" })]
						})
					]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {})
	] });
}
//#endregion
export { CompanyProfilePage as component };
