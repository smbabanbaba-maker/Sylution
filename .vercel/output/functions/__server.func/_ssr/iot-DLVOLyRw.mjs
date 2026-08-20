import { o as __toESM } from "../_runtime.mjs";
import { c as require_react, s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { f as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { G as Cpu, I as Gauge, X as CircleCheck, a as Wifi, ct as ArrowRight, d as Thermometer, g as Signal, l as TriangleAlert, lt as Activity, q as Cloud, t as Zap, v as ShieldCheck, x as Radio } from "../_libs/lucide-react.mjs";
import { _ as IOT_APPLICATIONS, c as BRAND_IMAGES, i as Reveal, v as IOT_STACK } from "./router-BNw1KFvK.mjs";
import { n as SectionHeading, t as PageHero } from "./PageHero-BkOYD12C.mjs";
import { t as CTASection } from "./CTASection-DTgrXUZd.mjs";
import { a as Area, c as ResponsiveContainer, i as XAxis, l as Tooltip, n as LineChart, o as Line, r as YAxis, s as CartesianGrid, t as AreaChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/iot-DLVOLyRw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function clamp(value, min, max) {
	return Math.min(max, Math.max(min, value));
}
function makeSeed() {
	const now = Date.now();
	const seed = [];
	for (let i = 27; i >= 0; i--) {
		const d = /* @__PURE__ */ new Date(now - i * 3e3);
		seed.push({
			t: d.toLocaleTimeString("en-GB", {
				hour: "2-digit",
				minute: "2-digit",
				second: "2-digit"
			}),
			temperature: 41 + Math.sin(i / 3) * 2.4,
			vibration: 2.4 + Math.cos(i / 4) * .5,
			power: 6.1 + Math.sin(i / 5) * .8,
			health: clamp(96 - i * .18, 60, 100)
		});
	}
	return seed;
}
function IoTDashboardDemo() {
	const [data, setData] = (0, import_react.useState)(() => makeSeed());
	const [live, setLive] = (0, import_react.useState)(true);
	const drift = (0, import_react.useRef)(0);
	(0, import_react.useEffect)(() => {
		if (!live) return;
		const id = window.setInterval(() => {
			setData((prev) => {
				const last = prev[prev.length - 1];
				drift.current += .06;
				const next = {
					t: (/* @__PURE__ */ new Date()).toLocaleTimeString("en-GB", {
						hour: "2-digit",
						minute: "2-digit",
						second: "2-digit"
					}),
					temperature: clamp(last.temperature + (Math.random() - .42) * 1.1, 34, 68),
					vibration: clamp(last.vibration + (Math.random() - .44) * .28, 1.2, 7.5),
					power: clamp(last.power + (Math.random() - .5) * .4, 3.5, 9.5),
					health: clamp(last.health - Math.random() * .35, 42, 100)
				};
				return [...prev.slice(-27), next];
			});
		}, 2200);
		return () => window.clearInterval(id);
	}, [live]);
	const latest = data[data.length - 1];
	const forecast = (0, import_react.useMemo)(() => {
		const window = data.slice(-10);
		const first = window[0];
		const slopePerTick = (latest.health - first.health) / Math.max(window.length - 1, 1);
		const decline = Math.max(slopePerTick, .05);
		const ticksToThreshold = (latest.health - 70) / decline;
		return {
			hours: clamp(Math.round(ticksToThreshold * 2.2 / 60 + 6), 2, 720),
			confidence: clamp(Math.round(78 + latest.health / 8), 60, 99)
		};
	}, [data, latest.health]);
	const status = latest.temperature > 58 || latest.vibration > 5.6 ? {
		label: "Attention",
		tone: "warn"
	} : {
		label: "Nominal",
		tone: "ok"
	};
	const kpis = [
		{
			icon: Thermometer,
			label: "Motor temperature",
			value: `${latest.temperature.toFixed(1)} °C`,
			sub: "Threshold 58 °C"
		},
		{
			icon: Activity,
			label: "Vibration RMS",
			value: `${latest.vibration.toFixed(2)} mm/s`,
			sub: "Threshold 5.6 mm/s"
		},
		{
			icon: Zap,
			label: "Power draw",
			value: `${latest.power.toFixed(2)} kW`,
			sub: "Rated 9.5 kW"
		},
		{
			icon: Gauge,
			label: "Asset health",
			value: `${latest.health.toFixed(0)} %`,
			sub: "Model confidence " + forecast.confidence + " %"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "dashboard",
		className: "border-y border-border bg-surface section-y",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Live demo",
					title: "SYLUTION IoT dashboard, running now",
					description: "A simulated pump station streaming telemetry every few seconds, with anomaly thresholds and a predictive maintenance estimate produced from the live trend."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setLive((v) => !v),
					className: "btn-base btn-ghost",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `h-2 w-2 rounded-full ${live ? "animate-pulse bg-primary" : "bg-muted-foreground/50"}`,
						"aria-hidden": true
					}), live ? "Pause stream" : "Resume stream"]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card-luxe mt-12 overflow-hidden p-6 sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-11 w-11 place-items-center rounded-2xl bg-primary/15 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-base font-bold",
								children: "Gateway SYL-GW-014"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Kano industrial water pumping station, 6 sensor nodes"
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4 text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2 text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Signal, { className: "h-4 w-4 text-primary" }), " NB-IoT, -71 dBm"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: `inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-semibold ${status.tone === "ok" ? "bg-primary/10 text-primary" : "bg-destructive/10 text-destructive"}`,
								children: [status.tone === "ok" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-4 w-4" }), status.label]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-px overflow-hidden rounded-2xl border border-border sm:grid-cols-2 lg:grid-cols-4",
						children: kpis.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass px-5 py-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-center gap-2 text-xs text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(k.icon, { className: "h-4 w-4 text-primary" }), k.label]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 font-display text-2xl font-extrabold text-gradient-brand",
									children: k.value
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: k.sub
								})
							]
						}, k.label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid gap-6 lg:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold",
									children: "Temperature and vibration"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: "Rolling window, one sample every 2.2 seconds"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 h-64",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
										width: "100%",
										height: "100%",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
											data,
											margin: {
												top: 6,
												right: 8,
												left: -18,
												bottom: 0
											},
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
													strokeDasharray: "3 3",
													stroke: "hsl(var(--border))",
													opacity: .5
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
													dataKey: "t",
													tick: { fontSize: 10 },
													minTickGap: 40,
													stroke: "currentColor",
													opacity: .5
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
													tick: { fontSize: 10 },
													stroke: "currentColor",
													opacity: .5
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
													borderRadius: 12,
													border: "1px solid hsl(var(--border))",
													fontSize: 12
												} }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
													type: "monotone",
													dataKey: "temperature",
													name: "Temp °C",
													stroke: "var(--color-primary)",
													strokeWidth: 2,
													dot: false,
													isAnimationActive: false
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
													type: "monotone",
													dataKey: "vibration",
													name: "Vibration mm/s",
													stroke: "currentColor",
													strokeWidth: 1.6,
													opacity: .55,
													dot: false,
													isAnimationActive: false
												})
											]
										})
									})
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold",
									children: "Asset health and predictive maintenance"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: "Degradation model trained on vibration, thermal and load signatures"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 h-40",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
										width: "100%",
										height: "100%",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
											data,
											margin: {
												top: 6,
												right: 8,
												left: -18,
												bottom: 0
											},
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
													id: "healthFill",
													x1: "0",
													y1: "0",
													x2: "0",
													y2: "1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
														offset: "0%",
														stopColor: "var(--color-primary)",
														stopOpacity: .35
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
														offset: "100%",
														stopColor: "var(--color-primary)",
														stopOpacity: .02
													})]
												}) }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
													strokeDasharray: "3 3",
													stroke: "hsl(var(--border))",
													opacity: .5
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
													dataKey: "t",
													tick: { fontSize: 10 },
													minTickGap: 50,
													stroke: "currentColor",
													opacity: .5
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
													domain: [40, 100],
													tick: { fontSize: 10 },
													stroke: "currentColor",
													opacity: .5
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
													borderRadius: 12,
													border: "1px solid hsl(var(--border))",
													fontSize: 12
												} }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
													type: "monotone",
													dataKey: "health",
													name: "Health %",
													stroke: "var(--color-primary)",
													strokeWidth: 2,
													fill: "url(#healthFill)",
													isAnimationActive: false
												})
											]
										})
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 rounded-xl bg-primary/8 p-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-semibold uppercase tracking-wider text-primary",
										children: "Predicted service window"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-2 text-sm",
										children: [
											"Bearing wear trend suggests maintenance in approximately",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [forecast.hours, " hours"] }),
											" at ",
											forecast.confidence,
											" percent confidence. A work order would be raised automatically and sent to the maintenance team."
										]
									})]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-xs text-muted-foreground",
						children: "Simulated Data — Demonstration Interface. This dashboard illustrates the SYLUTION monitoring interface using data generated in your browser."
					})
				]
			}) })]
		})
	});
}
var HIGHLIGHTS = [
	{
		icon: Radio,
		title: "Sensing",
		detail: "Rugged nodes for soil, climate, water, energy, motion and machine state."
	},
	{
		icon: Wifi,
		title: "Connectivity",
		detail: "LoRaWAN, NB-IoT, GSM and Wi-Fi engineered for weak coverage areas."
	},
	{
		icon: Cpu,
		title: "Edge computing",
		detail: "Local control in milliseconds, fully functional when the network drops."
	},
	{
		icon: Cloud,
		title: "Cloud platform",
		detail: "Device management, storage, APIs and secure over the air updates."
	},
	{
		icon: Gauge,
		title: "Dashboards",
		detail: "Realtime monitoring, alerts and reporting on any device."
	},
	{
		icon: ShieldCheck,
		title: "Security",
		detail: "Encrypted transport, signed firmware and role based access control."
	}
];
function IoTPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Internet of Things",
			title: "The connected core of SYLUTION",
			subtitle: "Everything we engineer starts with a device that senses, a network that carries the data and a platform that turns it into action. IoT is not one of our services, it is the heart of the company.",
			image: BRAND_IMAGES.iotLab,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						className: "btn-base btn-primary",
						children: ["Discuss a deployment ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/products",
						className: "glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:scale-[1.04]",
						children: "See our devices"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/company-profile",
						className: "btn-base btn-ghost",
						children: "Download company profile"
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IoTDashboardDemo, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x section-y",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Capability",
				title: "Six layers, engineered in house",
				description: "Hardware, firmware, connectivity, cloud and interface are built by the same team, so nothing is left to a third party integration."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: HIGHLIGHTS.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i % 3 * .07,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-luxe h-full p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(h.icon, { className: "h-6 w-6" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-6 font-display text-lg font-bold",
								children: h.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground",
								children: h.detail
							})
						]
					})
				}, h.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-surface section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Architecture",
					title: "How a SYLUTION IoT system works",
					description: "From the sensor in the field to the decision on the screen, five layers that keep working with or without a network.",
					align: "center"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-4 md:grid-cols-5",
					children: IOT_STACK.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .07,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card-luxe relative h-full p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-3xl font-extrabold text-gradient-brand",
									children: s.layer
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-base font-bold",
									children: s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: s.detail
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": true,
									className: "absolute right-4 top-6 hidden h-px w-6 bg-primary/40 md:block"
								})
							]
						})
					}, s.layer))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x section-y",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Applications",
				title: "Target applications for our connected systems",
				description: "One platform, many industries. Each application uses the same tested device, network and cloud foundation."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3",
				children: IOT_APPLICATIONS.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i % 3 * .07,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-luxe h-full p-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-bold",
							children: g.group
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-2.5",
							children: g.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3 text-sm text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }), item]
							}, item))
						})]
					})
				}, g.group))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x pb-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-3xl shadow-luxe",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: BRAND_IMAGES.device,
						alt: "SYLUTION industrial IoT controller and sensor nodes",
						loading: "lazy",
						width: 1600,
						height: 1008,
						className: "h-full w-full object-cover"
					})
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: .12,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Hardware",
						title: "Devices designed for dust, heat and unstable power",
						description: "Sealed enclosures, wide temperature tolerance, and surge protection, validated through rigorous testing in our Kano laboratory."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border sm:grid-cols-4",
						children: [
							{
								v: "Target Spec",
								l: "99.2% Uptime"
							},
							{
								v: "Target Spec",
								l: "18mo Battery"
							},
							{
								v: "Target Spec",
								l: "12km Range"
							},
							{
								v: "Target Spec",
								l: "IP67 Protection"
							}
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass px-4 py-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-xl font-extrabold text-gradient-brand",
								children: s.v
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: s.l
							})]
						}, s.l))
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {})
	] });
}
//#endregion
export { IoTPage as component };
