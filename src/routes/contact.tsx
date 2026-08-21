import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CONTACT, U, BRAND_IMAGES } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact SYLUTION, TIC Kano, Nigeria" },
      {
        name: "description",
        content:
          "Contact SYLUTION at the Technology Incubation Centre, Form Center, Kano State, Nigeria. Email officialsylution@gmail.com or call +2349117957946.",
      },
      { property: "og:title", content: "Contact SYLUTION" },
      { property: "og:description", content: "Talk to our team about projects, partnerships, training and financing." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sending, setSending] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your project"
        subtitle="Whether you manage two hectares or twenty thousand, represent a bank, a ministry, an NGO or a university, our team will respond within two working days."
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
                <a href={`mailto:${CONTACT.email}`} className="mt-1 block text-sm text-muted-foreground hover:text-foreground">
                  {CONTACT.email}
                </a>
              </div>
            </li>
            <li className="card-luxe flex gap-4 p-6">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-semibold">Phone</p>
                {CONTACT.phones.map((p) => (
                  <a key={p} href={`tel:${p}`} className="mt-1 block text-sm text-muted-foreground hover:text-foreground">
                    {p}
                  </a>
                ))}
              </div>
            </li>
            <li className="card-luxe flex gap-4 p-6">
              <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
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
            className="card-luxe space-y-5 p-6 sm:p-8 lg:p-10"
            onSubmit={(e) => {
              e.preventDefault();
              setSending(true);
              const form = e.currentTarget;
              setTimeout(() => {
                setSending(false);
                form.reset();
                toast.success("Message sent", {
                  description: "Thank you. Our team will respond within two working days.",
                });
              }, 700);
            }}
          >
            <h2 className="font-display text-xl font-bold tracking-tight">Send us a message</h2>
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
              >
                {["Technical Assessment", "Project enquiry", "Partnership", "Training", "Financing", "Careers", "Other"].map((o) => (
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
                placeholder="Tell us about your site, system, crop, process or project objective."
                className="field-input"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="btn-base btn-primary mt-2 w-full"
            >
              {sending ? "Sending…" : "Send message"} <Send className="h-4 w-4" />
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
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="field-input"
      />
    </div>
  );
}
