import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { f as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { T as MessageCircle, ct as ArrowRight } from "../_libs/lucide-react.mjs";
import { E as useLang, i as Reveal, u as CONTACT } from "./router-BNw1KFvK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CTASection-DTgrXUZd.js
var import_jsx_runtime = require_jsx_runtime();
function CTASection() {
	const { t } = useLang();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-x section-y",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "card-luxe relative px-6 py-16 text-center sm:px-14 lg:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-x-0 -top-24 h-56 bg-primary/25 blur-[100px]"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow justify-center",
						children: "SYLUTION"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mx-auto mt-5 max-w-2xl text-[1.75rem] font-bold leading-[1.15] sm:text-4xl lg:text-[2.6rem]",
						children: t("cta.title")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg",
						children: t("cta.sub")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-wrap justify-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							className: "btn-base btn-primary",
							children: [t("cta.button"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `https://wa.me/${CONTACT.whatsapp}`,
							target: "_blank",
							rel: "noreferrer noopener",
							className: "btn-base btn-ghost",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), "WhatsApp"]
						})]
					})
				]
			})]
		}) })
	});
}
//#endregion
export { CTASection as t };
