import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { E as useLang } from "./router-Wf-YWA0T.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageHero-BCY8ciXe.js
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ eyebrow, title, subtitle, image, children, compact }) {
	const { tr } = useLang();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 -z-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: image,
					alt: "",
					"aria-hidden": true,
					loading: "eager",
					className: "h-full w-full object-cover object-center"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "veil-side absolute inset-0 -z-10"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute -right-24 top-10 -z-10 h-72 w-72 rounded-full bg-primary/25 blur-[110px] animate-float-slow"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `container-x ${compact ? "pb-16 pt-28 sm:pt-32 lg:pb-24 lg:pt-44" : "pb-20 pt-32 sm:pt-36 lg:pb-32 lg:pt-52"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
						className: "eyebrow",
						initial: {
							opacity: 0,
							y: 14
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { duration: .6 },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							className: "h-px w-8 shrink-0 bg-primary"
						}), tr(eyebrow)]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
						className: "mt-5 max-w-4xl text-[2.1rem] font-extrabold leading-[1.06] sm:text-5xl lg:text-[3.75rem]",
						initial: {
							opacity: 0,
							y: 24
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .75,
							delay: .08,
							ease: [
								.22,
								.7,
								.25,
								1
							]
						},
						children: typeof title === "string" ? tr(title) : title
					}),
					subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						className: "mt-6 max-w-2xl text-[0.975rem] leading-relaxed text-muted-foreground sm:text-lg",
						initial: {
							opacity: 0,
							y: 24
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .75,
							delay: .16
						},
						children: tr(subtitle)
					}),
					children && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 24
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .75,
							delay: .24
						},
						className: "mt-9 flex flex-wrap gap-3",
						children
					})
				]
			})
		]
	});
}
function SectionHeading({ eyebrow, title, description, align = "left" }) {
	const { tr } = useLang();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `eyebrow ${align === "center" ? "justify-center" : ""}`,
				children: tr(eyebrow)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 text-[1.75rem] font-bold leading-[1.15] sm:text-4xl",
				children: tr(title)
			}),
			description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-base leading-relaxed text-muted-foreground",
				children: tr(description)
			})
		]
	});
}
//#endregion
export { SectionHeading as n, PageHero as t };
