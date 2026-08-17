import { o as __toESM } from "../_runtime.mjs";
import { c as require_react, s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { C as Phone, D as MapPin, O as Mail, T as MessageCircle, y as Send } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { c as BRAND_IMAGES, i as Reveal, u as CONTACT } from "./router-Wf-YWA0T.mjs";
import { n as SectionHeading, t as PageHero } from "./PageHero-BCY8ciXe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-BxCRzIwa.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Contact() {
	const [sending, setSending] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Contact",
			title: "Let's talk about your project",
			subtitle: "Whether you manage two hectares or twenty thousand, represent a bank, a ministry, an NGO or a university, our team will respond within two working days.",
			image: BRAND_IMAGES.drone,
			compact: true
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x section-y grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Reach us",
				title: "Head office & Innovation Centre"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-8 space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "card-luxe flex gap-4 p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 h-5 w-5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold",
							children: "Address"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: CONTACT.address
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "card-luxe flex gap-4 p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mt-0.5 h-5 w-5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold",
							children: "Email"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${CONTACT.email}`,
							className: "mt-1 block text-sm text-muted-foreground hover:text-foreground",
							children: CONTACT.email
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "card-luxe flex gap-4 p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mt-0.5 h-5 w-5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold",
							children: "Phone"
						}), CONTACT.phones.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `tel:${p}`,
							className: "mt-1 block text-sm text-muted-foreground hover:text-foreground",
							children: p
						}, p))] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "card-luxe flex gap-4 p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "mt-0.5 h-5 w-5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold",
							children: "WhatsApp"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `https://wa.me/${CONTACT.whatsapp}`,
							target: "_blank",
							rel: "noreferrer noopener",
							className: "mt-1 block text-sm text-muted-foreground hover:text-foreground",
							children: "Chat with our team"
						})] })]
					})
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .12,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "card-luxe space-y-5 p-6 sm:p-8 lg:p-10",
					onSubmit: (e) => {
						e.preventDefault();
						setSending(true);
						const form = e.currentTarget;
						setTimeout(() => {
							setSending(false);
							form.reset();
							toast.success("Message sent", { description: "Thank you. Our team will respond within two working days." });
						}, 700);
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl font-bold tracking-tight",
							children: "Send us a message"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Full name",
								name: "name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Organisation",
								name: "org",
								required: false
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Email",
								name: "email",
								type: "email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Phone",
								name: "phone",
								type: "tel",
								required: false
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "subject",
							className: "field-label",
							children: "Subject"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							id: "subject",
							name: "subject",
							className: "field-input",
							children: [
								"Project enquiry",
								"Partnership",
								"Training",
								"Financing",
								"Careers",
								"Other"
							].map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: o }, o))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "message",
							className: "field-label",
							children: "Message"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							id: "message",
							name: "message",
							required: true,
							rows: 5,
							placeholder: "Tell us about your site, crop and objective.",
							className: "field-input"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							disabled: sending,
							className: "btn-base btn-primary mt-2 w-full",
							children: [
								sending ? "Sending…" : "Send message",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" })
							]
						})
					]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x pb-20 lg:pb-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "media-frame",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					title: "SYLUTION location, Kano, Nigeria",
					src: "https://www.google.com/maps?q=Technology%20Incubation%20Centre%20Kano%20Nigeria&output=embed",
					className: "h-[26rem] w-full",
					loading: "lazy",
					referrerPolicy: "no-referrer-when-downgrade"
				})
			}) })
		})
	] });
}
function Field({ label, name, type = "text", required = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		htmlFor: name,
		className: "field-label",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		id: name,
		name,
		type,
		required,
		className: "field-input"
	})] });
}
//#endregion
export { Contact as component };
