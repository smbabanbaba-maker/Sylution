import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { F as Gem, K as Compass, f as Target, o as Users } from "../_libs/lucide-react.mjs";
import { C as STATS, c as BRAND_IMAGES, i as Reveal } from "./router-CcDw5ofK.mjs";
import { n as SectionHeading, t as PageHero } from "./PageHero-BCY8ciXe.mjs";
import { t as CTASection } from "./CTASection-B4m8hUj8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-C2WffRof.js
var import_jsx_runtime = require_jsx_runtime();
var TIMELINE = [
	{
		year: "2024",
		title: "The idea begins",
		text: "The SYLUTION idea takes shape in Kano, around AI, IoT and agriculture."
	},
	{
		year: "2024",
		title: "Early development",
		text: "First learning, research and electronics experiments begin in earnest."
	},
	{
		year: "2025",
		title: "Prototype work",
		text: "Sensor nodes, controllers and dashboard prototypes are built and tested."
	},
	{
		year: "2025",
		title: "Sysmart Agro",
		text: "Our flagship smart farming system enters prototype and testing."
	},
	{
		year: "2026",
		title: "Company registration and growth",
		text: "SYLUTION LTD operates from the Technology Incubation Centre, Kano."
	}
];
var VALUES = [
	{
		icon: Gem,
		title: "Excellence",
		text: "Nothing leaves our workshop until it survives the field, not just the bench."
	},
	{
		icon: Users,
		title: "Farmer first",
		text: "Every product starts with a farmer interview and ends with farmer results."
	},
	{
		icon: Compass,
		title: "Integrity",
		text: "Honest measurement, honest reporting, honest pricing, with every partner."
	},
	{
		icon: Target,
		title: "Impact",
		text: "We measure ourselves in yield, water saved, energy displaced and income gained."
	}
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "About SYLUTION",
			title: "Built in Kano. Engineered for the continent.",
			subtitle: "SYLUTION is an innovation company working at the intersection of agriculture, engineering and artificial intelligence, creating technology that African farms can actually own, run and profit from.",
			image: BRAND_IMAGES.harvest,
			compact: true
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x grid gap-14 section-y lg:grid-cols-2 lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-3xl shadow-luxe",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: BRAND_IMAGES.drone,
					alt: "SYLUTION team planning a deployment",
					loading: "lazy",
					className: "h-[28rem] w-full object-cover"
				})
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: .1,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Our story",
					title: "It started with one irrigation block and a stubborn question",
					description: "Why should a farmer in northern Nigeria pay more for water, fuel and inputs than a farmer anywhere else, and get less certainty in return?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We began by installing sensor-driven irrigation on a small block of land near Kano, running it against a conventional plot season after season. The data was unambiguous: less water, less diesel, more yield." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "That result funded the next system, then the next. Today SYLUTION designs its own electronics, writes its own software, and conducts research into drone technology and smart agriculture to support farmers and institutions." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We remain a Nigerian company with a continental ambition, proving that world-class agricultural technology can be conceived, engineered and supported from Africa itself." })
					]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-surface section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-x grid grid-cols-2 gap-8 lg:grid-cols-4",
				children: STATS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: i * .06,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-4xl font-extrabold text-gradient-brand",
						children: s.value
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: s.label
					})]
				}, s.label))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x grid gap-6 section-y md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card-luxe h-full p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Vision"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-2xl font-bold",
						children: "An Africa where every farm is precise, powered and profitable."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-muted-foreground",
						children: "We see a continent where technology is not imported as a favour but engineered locally, maintained locally and owned by the people who work the land."
					})
				]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .1,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-luxe h-full p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Mission"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-2xl font-bold",
							children: "To design, build and deploy agricultural technology that measurably raises income."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-muted-foreground",
							children: "We deliver irrigation, energy, intelligence and training as one integrated service, installed properly, supported locally and proven with data."
						})
					]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x pb-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Core values",
				title: "Four commitments that govern every project",
				align: "center"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
				children: VALUES.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .07,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-luxe h-full p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(v.icon, { className: "h-6 w-6" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-6 font-display text-lg font-bold",
								children: v.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted-foreground",
								children: v.text
							})
						]
					})
				}, v.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x pb-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Milestones",
				title: "How we grew"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 space-y-3",
				children: TIMELINE.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .06,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 rounded-2xl border border-border bg-surface p-6 sm:grid-cols-[7rem_1fr] sm:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl font-extrabold text-gradient-brand",
							children: item.year
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-base font-bold",
							children: item.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: item.text
						})] })]
					})
				}, item.year))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {})
	] });
}
//#endregion
export { About as component };
