import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { f as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { G as Cpu, P as GraduationCap, ct as ArrowRight, m as Sprout, nt as Brain } from "../_libs/lucide-react.mjs";
import { c as BRAND_IMAGES, i as Reveal } from "./router-Wf-YWA0T.mjs";
import { n as SectionHeading, t as PageHero } from "./PageHero-BCY8ciXe.mjs";
import { t as CTASection } from "./CTASection-BQDyNKKd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/platforms-ClkD0ZtJ.js
var import_jsx_runtime = require_jsx_runtime();
var PLATFORMS = [
	{
		name: "SYSMART AGRO",
		tagline: "AI + IoT Powered Smart Agriculture",
		icon: Sprout,
		image: BRAND_IMAGES.sysmart,
		category: "AgriTech Platform",
		status: "Prototype / Development",
		description: "A technology platform applying IoT sensors, connected controllers, agricultural data and AI to modern agriculture and livestock production.",
		to: "/sysmart-agro",
		cta: "Explore Sysmart Agro"
	},
	{
		name: "SYLUTION ACADEMY",
		tagline: "AgriTech & Technology Training",
		icon: GraduationCap,
		image: BRAND_IMAGES.techTraining,
		category: "Training Programme",
		status: "Training Programme",
		description: "Practical training for youth, women, farmers, students and agripreneurs in AI, IoT, robotics, electronics, digital agriculture, livestock technology and drone technology.",
		to: "/training",
		cta: "Explore Training"
	},
	{
		name: "SYLUTION IoT",
		tagline: "Connected Technology & IoT Systems",
		icon: Cpu,
		image: BRAND_IMAGES.iotLab,
		category: "Technology Initiative",
		status: "Technology Initiative",
		description: "Sensors, smart devices, embedded systems, IoT connectivity, agricultural monitoring, data collection and smart automation.",
		to: "/iot",
		cta: "Explore IoT"
	},
	{
		name: "SYLUTION AI",
		tagline: "Artificial Intelligence & Intelligent Systems",
		icon: Brain,
		image: BRAND_IMAGES.ai,
		category: "Technology Initiative",
		status: "Technology Initiative",
		description: "AI applications, agricultural intelligence, computer vision, data analysis, decision support and intelligent automation.",
		to: "/ai",
		cta: "Explore AI"
	}
];
function PlatformsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Products & Platforms",
			title: "One innovation company, four technology platforms",
			subtitle: "Sysmart Agro, SYLUTION Academy, SYLUTION IoT and SYLUTION AI are products, platforms and programmes operating under SYLUTION LTD. They are not separately incorporated companies.",
			image: BRAND_IMAGES.control,
			compact: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/contact",
				className: "btn-base btn-primary",
				children: ["Partner with us ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x section-y",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "The ecosystem",
				title: "How the SYLUTION family fits together",
				description: "A single parent brand, a shared technology foundation and platforms that apply it to modern agriculture."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 card-luxe p-6 sm:p-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow justify-center",
								children: "Parent company"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-2xl font-extrabold sm:text-3xl",
								children: "SYLUTION LTD"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: "Nigerian AgriTech & Technology Innovation Company"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "mx-auto my-8 h-10 w-px bg-border"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-3 sm:grid-cols-4",
						children: [
							"Artificial Intelligence",
							"Internet of Things",
							"AgriTech",
							"Smart Technology"
						].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-2xl border border-border bg-surface px-4 py-3 text-center text-sm font-semibold",
							children: f
						}, f))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "mx-auto my-8 h-10 w-px bg-border"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
						children: PLATFORMS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: p.to,
							className: "group rounded-2xl border border-border bg-background px-4 py-4 text-center transition-colors hover:border-primary",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, { className: "mx-auto h-5 w-5 text-primary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 font-display text-sm font-bold",
									children: p.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: p.category
								})
							]
						}, p.name))
					})
				]
			}) })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-surface section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Platforms",
					title: "Products & technology platforms"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-5 md:grid-cols-2",
					children: PLATFORMS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i % 2 * .08,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "card-luxe group flex h-full flex-col overflow-hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative h-48 overflow-hidden",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.image,
									alt: p.name,
									loading: "lazy",
									className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "glass absolute left-4 top-4 rounded-full px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider",
									children: p.status
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-1 flex-col p-7",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-11 w-11 place-items-center rounded-2xl bg-primary/15 text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, { className: "h-5 w-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-5 font-display text-lg font-extrabold tracking-tight",
										children: p.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm font-semibold text-primary",
										children: p.tagline
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 flex-1 text-sm leading-relaxed text-muted-foreground",
										children: p.description
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
										className: "mt-5 grid grid-cols-2 gap-3 text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-xl border border-border p-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
												className: "text-muted-foreground",
												children: "Category"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
												className: "mt-1 font-semibold",
												children: p.category
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-xl border border-border p-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
												className: "text-muted-foreground",
												children: "Status"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
												className: "mt-1 font-semibold",
												children: p.status
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: p.to,
										className: "btn-base btn-primary mt-6 self-start",
										children: [
											p.cta,
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
										]
									})
								]
							})]
						})
					}, p.name))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x section-y",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Future platforms",
				title: "Built to grow",
				description: "The SYLUTION ecosystem is structured so new products, platforms and programmes can join it as they are developed.",
				align: "center"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-3",
				children: [
					"Future AI Products",
					"New IoT Products",
					"Marketplace"
				].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-dashed border-border p-6 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-sm font-bold",
						children: f
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground",
						children: "Coming soon"
					})]
				}, f))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {})
	] });
}
//#endregion
export { PlatformsPage as component };
