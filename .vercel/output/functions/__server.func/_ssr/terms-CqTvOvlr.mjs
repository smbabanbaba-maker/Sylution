import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { c as BRAND_IMAGES, u as CONTACT } from "./router-CcDw5ofK.mjs";
import { t as PageHero } from "./PageHero-BCY8ciXe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/terms-CqTvOvlr.js
var import_jsx_runtime = require_jsx_runtime();
var SECTIONS = [
	{
		h: "Acceptance",
		p: "By accessing this website or engaging SYLUTION for services, you agree to these terms. If you do not agree, please do not use the site."
	},
	{
		h: "Website content",
		p: "Content is provided for general information. Specifications, yields and performance figures are indicative and depend on site conditions; they do not form a contractual guarantee."
	},
	{
		h: "Quotations and projects",
		p: "Formal quotations are valid for 30 days unless stated otherwise. Project scope, milestones, payment schedule and acceptance criteria are governed by the signed contract, which prevails over any content on this site."
	},
	{
		h: "Warranty and support",
		p: "Equipment carries the manufacturer warranty passed through to the client, plus our installation workmanship warranty for the period stated in the contract. Warranty excludes misuse, unauthorised modification and force majeure damage."
	},
	{
		h: "Training programmes",
		p: "Places on Academy programmes are confirmed on payment or written sponsor confirmation. Certificates are issued on completion of the required attendance and assessment."
	},
	{
		h: "Intellectual property",
		p: "The SYLUTION name, logo, site content, software and documentation are owned by SYLUTION and may not be reproduced without written permission."
	},
	{
		h: "Liability",
		p: "To the extent permitted by Nigerian law, our liability arising from any engagement is limited to the fees paid for the relevant service."
	},
	{
		h: "Governing law",
		p: "These terms are governed by the laws of the Federal Republic of Nigeria."
	}
];
function Terms() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Legal",
		title: "Terms of Service",
		subtitle: "Last updated 1 January 2026. These terms govern the use of this website and our services.",
		image: BRAND_IMAGES.team,
		compact: true
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-x max-w-3xl space-y-8 section-y",
		children: [SECTIONS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-xl font-bold",
			children: s.h
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-sm leading-relaxed text-muted-foreground",
			children: s.p
		})] }, s.h)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-xl font-bold",
			children: "Contact"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-3 text-sm leading-relaxed text-muted-foreground",
			children: [
				"SYLUTION, ",
				CONTACT.address,
				" ",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `mailto:${CONTACT.email}`,
					className: "text-primary hover:underline",
					children: CONTACT.email
				})
			]
		})] })]
	})] });
}
//#endregion
export { Terms as component };
