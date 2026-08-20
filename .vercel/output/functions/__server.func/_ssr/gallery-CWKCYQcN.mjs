import { o as __toESM } from "../_runtime.mjs";
import { c as require_react, s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as cn, c as BRAND_IMAGES, h as GALLERY_CATEGORIES, i as Reveal, m as GALLERY } from "./router-BNw1KFvK.mjs";
import { t as PageHero } from "./PageHero-BkOYD12C.mjs";
import { t as CTASection } from "./CTASection-DTgrXUZd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-CWKCYQcN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Gallery() {
	const [active, setActive] = (0, import_react.useState)("All");
	const [lightbox, setLightbox] = (0, import_react.useState)(null);
	const items = active === "All" ? GALLERY : GALLERY.filter((g) => g.category === active);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Gallery",
			title: "The work, as it actually looks",
			subtitle: "Fields, workshops, laboratories, classrooms and skies, a visual record of SYLUTION projects across Nigeria.",
			image: BRAND_IMAGES.drone,
			compact: true
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x section-y",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: GALLERY_CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setActive(c),
					className: cn("rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300", active === c ? "border-primary bg-primary text-primary-foreground shadow-glow" : "border-border text-muted-foreground hover:bg-accent hover:text-foreground"),
					children: c
				}, c))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4",
				children: items.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i % 3 * .06,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setLightbox(GALLERY.indexOf(g)),
						className: "group relative block w-full overflow-hidden rounded-2xl text-left",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: g.src,
								alt: g.caption,
								loading: "lazy",
								className: cn("w-full object-cover transition-transform duration-700 group-hover:scale-105", i % 3 === 0 ? "h-80" : i % 3 === 1 ? "h-64" : "h-96")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"aria-hidden": true,
								className: "absolute inset-0 bg-gradient-to-t from-background/85 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-x-0 bottom-0 translate-y-4 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow",
									children: g.category
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm font-semibold",
									children: g.caption
								})]
							})
						]
					})
				}, `${g.src}-${i}`))
			})]
		}),
		lightbox !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed inset-0 z-[60] grid place-items-center bg-background/90 p-5 backdrop-blur-xl",
			onClick: () => setLightbox(null),
			role: "dialog",
			"aria-modal": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "max-w-4xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: GALLERY[lightbox].src,
					alt: GALLERY[lightbox].caption,
					className: "max-h-[75vh] w-full rounded-2xl object-contain shadow-luxe"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
					className: "mt-4 text-center text-sm text-muted-foreground",
					children: GALLERY[lightbox].caption
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {})
	] });
}
//#endregion
export { Gallery as component };
