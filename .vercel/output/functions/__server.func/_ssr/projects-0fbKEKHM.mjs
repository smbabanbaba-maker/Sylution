import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { f as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { ct as ArrowRight } from "../_libs/lucide-react.mjs";
import { c as BRAND_IMAGES, i as Reveal, x as PROJECTS } from "./router-BNw1KFvK.mjs";
import { n as SectionHeading, t as PageHero } from "./PageHero-BkOYD12C.mjs";
import { t as CTASection } from "./CTASection-DTgrXUZd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-0fbKEKHM.js
var import_jsx_runtime = require_jsx_runtime();
var GROUPS = [
	"Active Project",
	"Testing",
	"Under development",
	"Research phase"
];
function ProjectsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Projects",
			title: "What our engineers are building",
			subtitle: "We publish the real stage of every project. Where something is still in research or under development, we say so.",
			image: BRAND_IMAGES.iotLab,
			compact: true
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/sysmart-agro",
				className: "card-luxe group grid gap-0 overflow-hidden lg:grid-cols-[1.1fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: BRAND_IMAGES.sysmart,
					alt: "Sysmart Agro IoT controller in an irrigated field",
					className: "h-72 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] lg:h-full"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-8 sm:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Flagship project"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-3xl font-bold",
							children: "Sysmart Agro"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-muted-foreground",
							children: "An intelligent IoT powered smart agriculture platform combining a field controller, soil and climate sensing, remote irrigation control and a monitoring dashboard."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-6 inline-flex rounded-full bg-primary/15 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-primary",
							children: "Status: Active Project"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-6 flex items-center gap-2 text-sm font-semibold text-primary",
							children: ["Open the project page ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })]
						})
					]
				})]
			}) })
		}),
		GROUPS.map((group) => {
			const items = PROJECTS.filter((p) => p.status === group && p.slug !== "sysmart-agro");
			if (!items.length) return null;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "container-x pb-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: group,
					title: `${group} projects`
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3",
					children: items.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i % 3 * .07,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "card-luxe h-full overflow-hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.image,
								alt: p.name,
								loading: "lazy",
								className: "h-44 w-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "eyebrow",
										children: p.category
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 font-display text-lg font-bold",
										children: p.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-muted-foreground",
										children: p.summary
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-5 inline-flex rounded-full border border-border px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-muted-foreground",
										children: p.status
									})
								]
							})]
						})
					}, p.slug))
				})]
			}, group);
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x pb-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card-luxe p-8 text-center sm:p-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-bold",
						children: "Completed commercial projects"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-3 max-w-xl text-sm text-muted-foreground",
						children: "We only list a project here once it has been delivered and verified. Case studies will be published as deployments complete."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-6 inline-flex rounded-full border border-border px-4 py-2 text-xs font-bold uppercase tracking-wide text-muted-foreground",
						children: "Coming soon"
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {})
	] });
}
//#endregion
export { ProjectsPage as component };
