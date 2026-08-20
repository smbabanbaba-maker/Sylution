import { o as __toESM } from "../_runtime.mjs";
import { c as require_react, s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { f as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as useScroll, r as useTransform } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { G as Cpu, S as Plane, Y as CircuitBoard, ct as ArrowRight, h as Sparkles, p as Sun, st as ArrowUpRight, v as ShieldCheck } from "../_libs/lucide-react.mjs";
import { C as STATS, E as useLang, S as SOLUTIONS, c as BRAND_IMAGES, f as EXHIBITION_IMAGES, i as Reveal, m as GALLERY, o as AGRITECH_AREAS, y as NEWS } from "./router-BNw1KFvK.mjs";
import { n as SectionHeading } from "./PageHero-BkOYD12C.mjs";
import { t as CTASection } from "./CTASection-DTgrXUZd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DxkIiYIg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PILLARS = [
	{
		icon: Sparkles,
		title: "Artificial Intelligence",
		slug: "artificial-intelligence"
	},
	{
		icon: Cpu,
		title: "Internet of Things",
		slug: "iot"
	},
	{
		icon: CircuitBoard,
		title: "Electronics and Embedded Systems",
		slug: "electronics"
	},
	{
		icon: ShieldCheck,
		title: "Robotics",
		slug: "robotics"
	},
	{
		icon: Plane,
		title: "Drone Technology",
		slug: "drone-technology"
	},
	{
		icon: Sun,
		title: "Solar Technology",
		slug: "solar-technology"
	}
];
var AUDIENCES = [
	"Farmers",
	"Agripreneurs",
	"Youth",
	"Women",
	"Cooperatives",
	"Universities",
	"Research Institutions",
	"Government Institutions",
	"NGOs",
	"Development Organisations"
];
function Home() {
	const { t } = useLang();
	const heroRef = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: heroRef,
		offset: ["start start", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
	const fade = useTransform(scrollYProgress, [0, 1], [1, 0]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			ref: heroRef,
			className: "relative isolate min-h-[100svh] overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					style: { y },
					className: "absolute inset-0 -z-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: BRAND_IMAGES.greenhouse,
						alt: "SYLUTION IoT laboratory in Kano, Nigeria",
						className: "absolute inset-0 h-full w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
						className: "relative h-full w-full object-cover",
						autoPlay: true,
						muted: true,
						loop: true,
						playsInline: true,
						poster: BRAND_IMAGES.greenhouse,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
							src: "https://videos.pexels.com/video-files/2946776/2946776-uhd_2560_1440_24fps.mp4",
							type: "video/mp4"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "veil-side absolute inset-0 -z-10"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "pointer-events-none absolute -left-24 top-1/3 -z-10 h-80 w-80 rounded-full bg-primary/25 blur-[130px] animate-float-slow"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					style: { opacity: fade },
					className: "container-x flex min-h-[100svh] flex-col justify-center pb-20 pt-28 sm:pb-24 sm:pt-32",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
							className: "eyebrow",
							initial: {
								opacity: 0,
								y: 16
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { duration: .7 },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": true,
								className: "h-px w-8 shrink-0 bg-primary"
							}), t("hero.eyebrow")]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
							className: "mt-6 max-w-4xl text-[2.35rem] font-extrabold leading-[1.04] sm:text-6xl lg:text-[4.25rem]",
							initial: {
								opacity: 0,
								y: 28
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .9,
								delay: .1,
								ease: [
									.22,
									.7,
									.25,
									1
								]
							},
							children: t("hero.title")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							className: "mt-6 max-w-2xl text-[0.975rem] leading-relaxed text-muted-foreground sm:mt-7 sm:text-lg",
							initial: {
								opacity: 0,
								y: 24
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .9,
								delay: .2
							},
							children: t("hero.sub")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							className: "mt-9 grid grid-cols-1 gap-3 sm:flex sm:flex-wrap",
							initial: {
								opacity: 0,
								y: 24
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .9,
								delay: .3
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/research",
									className: "btn-base btn-primary group",
									children: [t("hero.cta1"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/solutions",
									className: "btn-base btn-ghost",
									children: t("hero.cta2")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "btn-base btn-ghost",
									children: t("hero.cta3")
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							className: "mt-14 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border shadow-luxe sm:grid-cols-4",
							initial: {
								opacity: 0,
								y: 30
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .9,
								delay: .42
							},
							children: STATS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-card/80 px-5 py-6 backdrop-blur-xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-2xl font-extrabold text-gradient-brand sm:text-3xl",
									children: s.value
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: s.label
								})]
							}, s.label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							className: "mt-12 hidden items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:flex",
							initial: { opacity: 0 },
							animate: { opacity: 1 },
							transition: {
								duration: 1,
								delay: .9
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": true,
								className: "relative h-10 w-px overflow-hidden bg-border",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-x-0 top-0 h-4 animate-scroll-cue bg-primary" })
							}), "Scroll to explore"]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-surface py-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "animate-marquee flex shrink-0 gap-10 whitespace-nowrap pr-10",
					children: [...AUDIENCES, ...AUDIENCES].map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-10 text-sm font-semibold tracking-wide text-muted-foreground",
						children: [a, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" })]
					}, i))
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card-luxe grid overflow-hidden lg:grid-cols-[1.1fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: BRAND_IMAGES.sysmart,
					alt: "Sysmart Agro IoT controller monitoring soil moisture in the field",
					loading: "lazy",
					className: "aspect-[16/10] w-full object-cover lg:aspect-auto lg:h-full"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-8 sm:p-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "eyebrow",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": true,
								className: "h-px w-8 shrink-0 bg-primary"
							}), "Flagship project"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl",
							children: "Sysmart Agro"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base",
							children: "Our IoT powered smart agriculture platform: a field controller with soil and climate sensing, remote irrigation control and a live monitoring dashboard, engineered end to end in Kano."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-6 inline-flex rounded-full bg-primary/15 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-primary",
							children: "Status: Active Project"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/sysmart-agro",
								className: "btn-base btn-primary",
								children: ["Explore the project ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/projects",
								className: "btn-base btn-ghost",
								children: "All projects"
							})]
						})
					]
				})]
			}) })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-surface section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Exhibitions and engagement",
						title: "Showing the work in the real world",
						description: "Photographs from exhibitions, stakeholder demonstrations and innovation events where the Sysmart Agro system was presented.",
						align: "center"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
						children: EXHIBITION_IMAGES.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i % 3 * .07,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
								className: "group relative h-full overflow-hidden rounded-3xl border border-border shadow-luxe",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: e.src,
										alt: e.caption,
										loading: "lazy",
										className: "h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105 lg:h-80"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										"aria-hidden": true,
										className: "absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
										className: "absolute inset-x-0 bottom-0 p-5 text-xs font-medium leading-relaxed sm:text-sm",
										children: e.caption
									})
								]
							})
						}, e.src))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/gallery",
							className: "btn-base btn-ghost",
							children: ["See the full gallery ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x grid gap-14 section-y lg:grid-cols-2 lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Who we are",
					title: "AgriTech innovation powered by AI, IoT and smart technology",
					description: "SYLUTION LTD is a Nigerian technology innovation company applying Artificial Intelligence, Internet of Things, electronics, robotics, drone technology and smart technologies to modern agriculture and real world problems."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 space-y-4",
					children: [
						{
							icon: Sparkles,
							text: "AI, IoT and engineering form our technology foundation."
						},
						{
							icon: ShieldCheck,
							text: "AgriTech is our main application area, from irrigation to livestock."
						},
						{
							icon: Sparkles,
							text: "Systems are engineered and tested in house, and status is labelled honestly."
						}
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "pt-2 text-sm text-muted-foreground",
							children: item.text
						})]
					}, item.text))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/about",
					className: "mt-9 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all",
					children: ["Read our story ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .15,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden rounded-3xl shadow-luxe",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: BRAND_IMAGES.pcb,
							alt: "Electronics prototyping work at SYLUTION in Kano, Nigeria",
							className: "h-[30rem] w-full object-cover",
							loading: "lazy"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass absolute -bottom-8 -left-4 w-56 rounded-2xl p-5 shadow-luxe sm:-left-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-3xl font-extrabold text-gradient-brand",
							children: "2024"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: "The official development journey and engineering foundation of SYLUTION began."
						})]
					})]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-surface section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "AgriTech",
						title: "AI + IoT + Engineering, applied to agriculture",
						description: "Our technology foundation exists to solve agricultural problems. These are the areas where we apply it."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-2",
						children: [
							[
								"AI",
								"IoT",
								"Engineering"
							].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-primary/15 px-4 py-1.5 text-sm font-semibold text-primary",
								children: x
							}, x)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "px-1 py-1.5 text-sm font-semibold text-muted-foreground",
								children: "to"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground",
								children: "AgriTech"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/industries",
						className: "btn-base btn-ghost mt-8",
						children: ["Explore AgriTech ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .12,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-3 sm:grid-cols-2",
						children: AGRITECH_AREAS.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-2xl border border-border bg-card px-5 py-4 text-sm font-medium",
							children: a
						}, a))
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x section-y",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Technology foundation",
					title: "Six technology pillars, one connected system",
					description: "Each pillar works alone and works better together, from a single connected sensor to an AI advised farm."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: PILLARS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .06,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/solutions/$slug",
							params: { slug: p.slug },
							className: "card-luxe group flex h-full flex-col p-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-primary transition-transform duration-500 group-hover:scale-110",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, { className: "h-6 w-6" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-6 font-display text-xl font-bold",
									children: p.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 flex-1 text-sm leading-relaxed text-muted-foreground",
									children: SOLUTIONS.find((s) => s.slug === p.slug)?.summary
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary",
									children: ["Learn more ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })]
								})
							]
						})
					}, p.slug))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/solutions",
						className: "btn-base btn-ghost",
						children: [
							"View all ",
							SOLUTIONS.length,
							" solutions ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
						]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative mt-10 overflow-hidden section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "In the field",
						title: "Our technology work in pictures",
						description: "Images from our systems, technology development, training sessions and agricultural activities.",
						align: "center"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid grid-cols-2 gap-3 md:grid-cols-4",
						children: GALLERY.filter((g) => g.category !== "Exhibitions").slice(0, 8).map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * .05,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group relative overflow-hidden rounded-2xl",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: g.src,
										alt: g.caption,
										loading: "lazy",
										className: "h-44 w-full object-cover transition-transform duration-700 group-hover:scale-110 sm:h-56"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										"aria-hidden": true,
										className: "absolute inset-0 bg-gradient-to-t from-background/85 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "absolute inset-x-0 bottom-0 translate-y-3 p-4 text-xs font-medium opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100",
										children: g.caption
									})
								]
							})
						}, `${g.src}-${i}`))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/gallery",
							className: "btn-base btn-primary",
							children: ["Open the full gallery ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x section-y",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Newsroom",
					title: "Latest from SYLUTION"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/news",
					className: "inline-flex items-center gap-2 text-sm font-semibold text-primary",
					children: ["All news ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-5 md:grid-cols-3",
				children: NEWS.slice(0, 3).map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .08,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "card-luxe h-full overflow-hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: n.image,
							alt: n.title,
							loading: "lazy",
							className: "h-48 w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow",
									children: n.category
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 font-display text-lg font-bold leading-snug",
									children: n.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm text-muted-foreground",
									children: n.excerpt
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-xs text-muted-foreground",
									children: new Date(n.date).toLocaleDateString("en-GB", {
										day: "numeric",
										month: "long",
										year: "numeric"
									})
								})
							]
						})]
					})
				}, n.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {})
	] });
}
//#endregion
export { Home as component };
