import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { f as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { G as Cpu, I as Gauge, J as ClipboardCheck, U as Droplets, ct as ArrowRight, p as Sun, x as Radio } from "../_libs/lucide-react.mjs";
import { c as BRAND_IMAGES, i as Reveal, w as SYSMART_FLOW } from "./router-BNw1KFvK.mjs";
import { n as SectionHeading, t as PageHero } from "./PageHero-BkOYD12C.mjs";
import { t as CTASection } from "./CTASection-DTgrXUZd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sysmart-agro-0hcq0kyC.js
var import_jsx_runtime = require_jsx_runtime();
var OBJECTIVES = [
	"Give farmers accurate soil and climate data instead of guesswork.",
	"Automate irrigation so water and fuel are used only when required.",
	"Keep working where mobile coverage and grid power are unreliable.",
	"Stay affordable enough for smallholder and medium scale farms.",
	"Provide a data record that banks and programmes can verify."
];
var TECHNOLOGIES = [
	{
		icon: Cpu,
		title: "Embedded controller",
		detail: "Custom board around an ESP32 class microcontroller with local control logic."
	},
	{
		icon: Droplets,
		title: "Soil and climate sensing",
		detail: "Soil moisture, temperature and humidity inputs read on a fixed interval."
	},
	{
		icon: Radio,
		title: "Connectivity",
		detail: "GSM and Wi-Fi uplink, with LoRa under evaluation for wider field coverage."
	},
	{
		icon: Sun,
		title: "Power",
		detail: "Solar and battery operation designed for sites without stable grid supply."
	},
	{
		icon: Gauge,
		title: "Dashboard",
		detail: "Web dashboard for readings, thresholds and pump status."
	},
	{
		icon: ClipboardCheck,
		title: "Control",
		detail: "Relay driven pump and valve switching, manual override on the device."
	}
];
var TIMELINE = [
	{
		phase: "Concept",
		detail: "Problem definition with farmers around Kano and requirement gathering.",
		state: "Completed"
	},
	{
		phase: "Circuit design",
		detail: "Schematic, component selection and bench validation.",
		state: "Completed"
	},
	{
		phase: "Engineering build",
		detail: "Enclosure, controller board, display and sensor integration.",
		state: "Completed"
	},
	{
		phase: "Field testing",
		detail: "Installation on test plots, endurance and reliability observation.",
		state: "In progress"
	},
	{
		phase: "Pilot deployment",
		detail: "Small group of farms running the full monitoring and control loop.",
		state: "Planned"
	},
	{
		phase: "Commercial release",
		detail: "Production units, support and documentation.",
		state: "Planned"
	}
];
var ROADMAP = [
	"Longer range LoRa gateway option for clustered farms",
	"Mobile application with offline access to readings",
	"Multi zone irrigation scheduling",
	"Predictive advice from accumulated field data",
	"Local manufacturing and assembly of production units"
];
function SysmartAgroPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Flagship project",
			title: "Sysmart Agro",
			subtitle: "An intelligent IoT powered smart agriculture platform developed by SYLUTION to improve productivity through connected technologies, smart monitoring and intelligent decision support.",
			image: BRAND_IMAGES.sysmart,
			compact: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-primary" }), " Status: Active Project"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						className: "btn-base btn-primary",
						children: ["Talk to the project team ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/projects",
						className: "btn-base btn-ghost",
						children: "All projects"
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x grid gap-12 section-y lg:grid-cols-[1.05fr_1fr] lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-3xl shadow-luxe",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: BRAND_IMAGES.sysmart,
					alt: "Sysmart Agro field controller installed beside an irrigated crop field",
					width: 1248,
					height: 832,
					className: "h-full w-full object-cover"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-xs text-muted-foreground",
				children: "Sysmart Agro controller displaying live soil moisture and pump state during field deployment."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: .12,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Project overview",
					title: "One box between the farmer and the field",
					description: "Sysmart Agro reads what is happening in the soil and the air, decides whether water is needed, switches the pump and reports everything back to a dashboard. The system runs the full monitoring and control loop today on our field sites."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 space-y-3",
					children: OBJECTIVES.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3 text-sm text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }), o]
					}, o))
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-surface section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Technologies used",
					title: "System architecture",
					description: "Every layer of Sysmart Agro is engineered in house, from the board to the dashboard.",
					align: "center"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: TECHNOLOGIES.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i % 3 * .07,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card-luxe h-full p-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(t.icon, { className: "h-6 w-6" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-6 font-display text-lg font-bold",
									children: t.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted-foreground",
									children: t.detail
								})
							]
						})
					}, t.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x section-y",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "How it works",
				title: "From sensors to smart decisions",
				description: "The Sysmart Agro operational flow, from a reading in the soil to an irrigation decision on the farm.",
				align: "center"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: SYSMART_FLOW.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i % 4 * .07,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-luxe relative h-full p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-display text-xs font-extrabold uppercase tracking-[0.2em] text-primary",
								children: ["Step ", String(i + 1).padStart(2, "0")]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-base font-bold",
								children: f.step
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: f.detail
							})
						]
					})
				}, f.step))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x section-y",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Development timeline",
				title: "Where the project stands today",
				description: "We publish the real state of each phase. Nothing here is marked complete before it is."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3",
				children: TIMELINE.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i % 3 * .07,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-luxe h-full p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-base font-bold",
								children: p.phase
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `rounded-full px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide ${p.state === "Completed" ? "bg-primary/15 text-primary" : p.state === "In progress" ? "bg-foreground/10 text-foreground" : "border border-border text-muted-foreground"}`,
								children: p.state
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted-foreground",
							children: p.detail
						})]
					})
				}, p.phase))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border bg-surface section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x grid gap-12 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Future roadmap",
					title: "What comes next"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 space-y-3",
					children: ROADMAP.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3 text-sm text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }), r]
					}, r))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: .12,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Gallery",
						title: "Project images"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid grid-cols-2 gap-3",
						children: [
							BRAND_IMAGES.sysmart,
							BRAND_IMAGES.irrigation,
							BRAND_IMAGES.greenhouse,
							BRAND_IMAGES.pcb
						].map((src) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden rounded-2xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src,
								alt: "Sysmart Agro development and field environment",
								loading: "lazy",
								className: "h-40 w-full object-cover transition-transform duration-700 hover:scale-105"
							})
						}, src))
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {})
	] });
}
//#endregion
export { SysmartAgroPage as component };
