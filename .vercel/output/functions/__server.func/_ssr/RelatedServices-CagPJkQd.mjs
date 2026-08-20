import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { f as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { st as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { S as SOLUTIONS, i as Reveal } from "./router-BNw1KFvK.mjs";
import { n as SectionHeading } from "./PageHero-BkOYD12C.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/RelatedServices-CagPJkQd.js
var import_jsx_runtime = require_jsx_runtime();
function RelatedServices({ exclude }) {
	const related = SOLUTIONS.filter((s) => s.slug !== exclude).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-x section-y",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Related",
			title: "Explore related services"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 grid gap-5 md:grid-cols-3",
			children: related.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * .08,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/solutions/$slug",
					params: { slug: s.slug },
					className: "card-luxe group block h-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative h-44 overflow-hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: s.image,
							alt: s.title,
							loading: "lazy",
							className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"aria-hidden": true,
							className: "absolute inset-0 bg-gradient-to-t from-background/75 to-transparent"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "flex items-center justify-between gap-2 font-display text-lg font-bold",
							children: [s.title, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 text-primary transition-transform group-hover:translate-x-1" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: s.tagline
						})]
					})]
				})
			}, s.slug))
		})]
	});
}
//#endregion
export { RelatedServices as t };
