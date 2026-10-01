import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CONTACT, U, BRAND_IMAGES } from "@/lib/site-data";
import { formatProgrammeFee, getTrainingProgramme } from "@/lib/training-programmes";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact SYLUTION, TIC Kano, Nigeria" },
      {
        name: "description",
        content: `Contact SYLUTION at ${CONTACT.address}. Email ${CONTACT.email} or call ${CONTACT.phones.join(" or ")}.`,
      },
      { property: "og:title", content: "Contact SYLUTION" },
      {
        property: "og:description",
        content: "Talk to our team about projects, partnerships, training and financing.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sending, setSending] = useState(false);
  const [subject, setSubject] = useState("AI, data or software");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("programme");
    if (!slug) return;
    const programme = getTrainingProgramme(slug);
    if (!programme) return;
    setSubject("Training academy");
    setMessage(
      `Hello SYLUTION Academy, I am interested in ${programme.title}. Listed tuition: ${formatProgrammeFee(programme.fee)}. Please confirm the next cohort date, available places and what the fee includes.`,
    );
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you need"
        subtitle="Ask about engineering services, Sysmart Agro, products in development, training, research or partnership. This form sends an enquiry—not an online order, course enrolment or loan application. We aim to reply within two working days."
        image={BRAND_IMAGES.drone}
        compact
      />

      <section className="container-x section-y grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <Reveal>
          <SectionHeading eyebrow="Reach us" title="Head office & Innovation Centre" />
          <ul className="mt-8 space-y-5">
            <li className="card-luxe flex gap-4 p-6">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-semibold">Address</p>
                <p className="mt-1 text-sm text-muted-foreground">{CONTACT.address}</p>
              </div>
            </li>
            <li className="card-luxe flex gap-4 p-6">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-semibold">Email</p>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="mt-1 block text-sm text-muted-foreground hover:text-foreground"
                >
                  {CONTACT.email}
                </a>
              </div>
            </li>
            <li className="card-luxe flex gap-4 p-6">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-semibold">Phone</p>
                {CONTACT.phones.map((p) => (
                  <a
                    key={p}
                    href={`tel:${p}`}
                    className="mt-1 block text-sm text-muted-foreground hover:text-foreground"
                  >
                    {p}
                  </a>
                ))}
              </div>
            </li>
            <li className="card-luxe flex gap-4 p-6">
              <img
                src="/brand/social/whatsapp.svg"
                alt=""
                aria-hidden="true"
                className="mt-0.5 h-5 w-5 shrink-0 object-contain"
              />
              <div>
                <p className="text-sm font-semibold">WhatsApp</p>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-1 block text-sm text-muted-foreground hover:text-foreground"
                >
                  Chat with our team
                </a>
              </div>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.12}>
          <form
            id="academy-contact"
            className="card-luxe space-y-5 p-6 sm:p-8 lg:p-10"
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const submission = new FormData(form);
              submission.set(
                "_subject",
                `New contact message: ${String(submission.get("subject") ?? "General enquiry")}`,
              );
              submission.set("_replyto", String(submission.get("email") ?? ""));
              submission.set("_template", "table");
              setSending(true);

              try {
                const response = await fetch(`https://formsubmit.co/ajax/${CONTACT.email}`, {
                  method: "POST",
                  headers: { Accept: "application/json" },
                  body: submission,
                });
                if (!response.ok) throw new Error("Email service rejected the message");
                form.reset();
                setSubject("AI, data or software");
                setMessage("");
                toast.success("Message sent", {
                  description: "Thank you. Our team will respond within two working days.",
                });
              } catch {
                toast.error("Unable to send the message", {
                  description: `Please email ${CONTACT.email} directly or try again shortly.`,
                });
              } finally {
                setSending(false);
              }
            }}
          >
            <h2 className="font-display text-xl font-bold tracking-tight">Send an enquiry</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full name" name="name" />
              <Field label="Organisation" name="org" required={false} />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Email" name="email" type="email" />
              <Field label="Phone" name="phone" type="tel" required={false} />
            </div>
            <div>
              <label htmlFor="subject" className="field-label">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                className="field-input"
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
              >
                {[
                  "AI, data or software",
                  "IoT sensors and monitoring",
                  "Electronics and embedded systems",
                  "Robotics and automation",
                  "Drone technology",
                  "Solar and energy",
                  "Smart agriculture and irrigation",
                  "Sysmart Agro project",
                  "Training academy",
                  "Research or partnership",
                  "Investor or strategic investment enquiry",
                  "Marketplace feedback (not an order)",
                  "Farm-finance partnership concept (not an application)",
                  "Careers",
                  "Other",
                ].map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="message" className="field-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Tell us about your site, system, crop, process or project objective."
                className="field-input"
              />
            </div>
            <button type="submit" disabled={sending} className="btn-base btn-primary mt-2 w-full">
              {sending ? "Sending…" : "Send enquiry"} <Send className="h-4 w-4" />
            </button>
          </form>
        </Reveal>
      </section>

      <section className="container-x pb-20 lg:pb-28">
        <Reveal>
          <div className="media-frame">
            <iframe
              title="SYLUTION location, Kano, Nigeria"
              src="https://www.google.com/maps?q=Technology%20Incubation%20Centre%20Kano%20Nigeria&output=embed"
              className="h-[26rem] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = true,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="field-label">
        {label}
      </label>
      <input id={name} name={name} type={type} required={required} className="field-input" />
    </div>
  );
}
