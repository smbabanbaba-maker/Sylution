import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { G as Cpu, L as FlaskConical, Y as CircuitBoard, b as Rocket, i as Wrench, it as Bot, rt as Boxes, x as Radio } from "../_libs/lucide-react.mjs";
import { c as BRAND_IMAGES, i as Reveal } from "./router-Wf-YWA0T.mjs";
import { n as SectionHeading, t as PageHero } from "./PageHero-BCY8ciXe.mjs";
import { t as CTASection } from "./CTASection-BQDyNKKd.mjs";
import { t as RelatedServices } from "./RelatedServices-CjNfIw0H.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/research-DMn1hRaZ.js
var import_jsx_runtime = require_jsx_runtime();
var LABS = [
	{
		icon: Cpu,
		title: "Artificial Intelligence",
		text: "Vision models, forecasting and voice advisory trained on locally captured data."
	},
	{
		icon: Bot,
		title: "Robotics",
		text: "Autonomous and semi-autonomous field machines for spraying, seeding and inspection."
	},
	{
		icon: Radio,
		title: "IoT",
		text: "LoRa and GSM telemetry, gateway design and long-life battery engineering."
	},
	{
		icon: Wrench,
		title: "Engineering",
		text: "Mechanical, electrical and civil design for agricultural installations."
	},
	{
		icon: CircuitBoard,
		title: "Electronics",
		text: "Schematic, PCB, firmware and small-batch assembly in our own workshop."
	},
	{
		icon: FlaskConical,
		title: "Testing",
		text: "Environmental, durability and accuracy testing before any field release."
	},
	{
		icon: Boxes,
		title: "Prototype Development",
		text: "3D printing, CNC and rapid iteration from concept to working unit."
	},
	{
		icon: Rocket,
		title: "Future Projects",
		text: "Autonomous irrigation swarms, farm-level carbon accounting, offline AI advisory."
	}
];
var PIPELINE = [
	{
		step: "01",
		title: "Problem identification",
		text: "Farmer conversations and field observation define the real problem."
	},
	{
		step: "02",
		title: "Research",
		text: "Literature, components, costs and local conditions are studied."
	},
	{
		step: "03",
		title: "Prototype",
		text: "A working unit is designed, built and assembled in our workspace."
	},
	{
		step: "04",
		title: "Testing",
		text: "Bench testing for accuracy, power, durability and reliability."
	},
	{
		step: "05",
		title: "Field validation",
		text: "The prototype runs in real farm conditions and is measured."
	},
	{
		step: "06",
		title: "Product development",
		text: "Findings are turned into a documented, repeatable product."
	}
];
function Research() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Innovation Centre",
			title: "Where the next generation of African farm technology is built",
			subtitle: "Our Innovation Centre at the Technology Incubation Centre, Kano, houses electronics benches, a prototyping bay, drone workshop, testing rigs and research labs, all under one roof.",
			image: BRAND_IMAGES.electronics,
			compact: true
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x section-y",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Capabilities",
				title: "Eight disciplines under one roof",
				description: "Research at SYLUTION is not theoretical. Every programme is expected to produce something a farmer can switch on."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
				children: LABS.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i % 4 * .07,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-luxe h-full p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(l.icon, { className: "h-6 w-6" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-6 font-display text-lg font-bold",
								children: l.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted-foreground",
								children: l.text
							})
						]
					})
				}, l.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-surface section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Pipeline",
					title: "From question to deployed product in five gates",
					align: "center"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-4 md:grid-cols-5",
					children: PIPELINE.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .07,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card-luxe h-full p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-3xl font-extrabold text-gradient-brand",
									children: p.step
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-base font-bold",
									children: p.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: p.text
								})
							]
						})
					}, p.step))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x section-y",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Inside the centre",
				title: "Facilities"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-4 md:grid-cols-3",
				children: [
					{
						src: BRAND_IMAGES.lab,
						label: "Laboratory analysis"
					},
					{
						src: BRAND_IMAGES.electronics,
						label: "Prototype instrumentation"
					},
					{
						src: BRAND_IMAGES.team,
						label: "Engineering review"
					}
				].map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .08,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group relative overflow-hidden rounded-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: f.src,
								alt: f.label,
								loading: "lazy",
								className: "h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"aria-hidden": true,
								className: "absolute inset-0 bg-gradient-to-t from-background/70 to-transparent"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "absolute bottom-4 left-5 text-sm font-semibold",
								children: f.label
							})
						]
					})
				}, f.label))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RelatedServices, { exclude: "research" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {})
	] });
}
//#endregion
export { Research as component };
