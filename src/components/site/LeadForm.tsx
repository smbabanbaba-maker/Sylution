import { useState } from "react";
import { Send, Mail, Phone, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { CONTACT } from "@/lib/site-data";
import { Reveal } from "./Reveal";

const NEEDS = [
  "IoT deployment",
  "Artificial intelligence",
  "Electronics and PCB",
  "Industrial automation",
  "Drone technology",
  "Renewable energy",
  "Training academy",
  "Partnership or investment",
  "Other",
];

export function LeadForm() {
  const [sending, setSending] = useState(false);

  return (
    <section id="lead" className="section-y border-t border-border bg-surface">
      <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
        <Reveal>
          <p className="eyebrow">Talk to an engineer</p>
          <h2 className="mt-5 text-[1.75rem] font-bold leading-[1.15] sm:text-4xl">
            Tell us what you need, we reply within two working days
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Share a few details about your site, process or product idea. Our engineering team reviews every enquiry
            and comes back with a technical direction, not a sales script.
          </p>
          <ul className="mt-8 space-y-3.5 text-sm text-muted-foreground">
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-primary" /> {CONTACT.email}
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-primary" /> {CONTACT.phones[0]}
            </li>
            <li className="flex items-center gap-3">
              <ShieldCheck className="h-4 w-4 shrink-0 text-primary" /> Your details are used only to answer your enquiry.
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.12}>
          <form
            className="card-luxe space-y-5 p-6 sm:p-8 lg:p-10"
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const fd = new FormData(form);
              const name = String(fd.get("lead-name") ?? "").trim();
              const email = String(fd.get("lead-email") ?? "").trim();
              const phone = String(fd.get("lead-phone") ?? "").trim();
              const need = String(fd.get("lead-need") ?? "").trim();
              const message = String(fd.get("lead-message") ?? "").trim();

              if (name.length < 2 || name.length > 100) {
                toast.error("Please enter your full name.");
                return;
              }
              if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) {
                toast.error("Please enter a valid email address.");
                return;
              }
              if (phone.length < 7 || phone.length > 25) {
                toast.error("Please enter a valid phone number.");
                return;
              }
              if (message.length > 1000) {
                toast.error("Please shorten your message.");
                return;
              }

              setSending(true);
              const submission = new FormData();
              submission.set("name", name);
              submission.set("email", email);
              submission.set("phone", phone);
              submission.set("interest", need);
              submission.set("message", message || "(no additional details)");
              submission.set("_subject", `New enquiry from ${name} (${need})`);
              submission.set("_replyto", email);
              submission.set("_template", "table");

              try {
                const response = await fetch(`https://formsubmit.co/ajax/${CONTACT.email}`, {
                  method: "POST",
                  headers: { Accept: "application/json" },
                  body: submission,
                });
                if (!response.ok) throw new Error("Email service rejected the enquiry");
                form.reset();
                toast.success("Enquiry sent", {
                  description: "Thank you. Our team will respond within two working days.",
                });
              } catch {
                toast.error("Unable to send the enquiry", {
                  description: `Please email ${CONTACT.email} directly or try again shortly.`,
                });
              } finally {
                setSending(false);
              }
            }}
          >
            <h3 className="font-display text-xl font-bold tracking-tight">Request a callback</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <LeadField label="Full name" name="lead-name" autoComplete="name" maxLength={100} />
              <LeadField label="Email" name="lead-email" type="email" autoComplete="email" maxLength={255} />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <LeadField label="Phone number" name="lead-phone" type="tel" autoComplete="tel" maxLength={25} />
              <div>
                <label
                  htmlFor="lead-need"
                  className="field-label"
                >
                  What do you need
                </label>
                <select
                  id="lead-need"
                  name="lead-need"
                  className="field-input"
                >
                  {NEEDS.map((n) => (
                    <option key={n}>{n}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label
                htmlFor="lead-message"
                className="field-label"
              >
                Details (optional)
              </label>
              <textarea
                id="lead-message"
                name="lead-message"
                rows={3}
                maxLength={1000}
                placeholder="Site, process, quantity or objective."
                className="field-input"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="btn-base btn-primary mt-2 w-full"
            >
              {sending ? "Preparing…" : "Send my enquiry"} <Send className="h-4 w-4" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function LeadField({
  label,
  name,
  type = "text",
  autoComplete,
  maxLength,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  maxLength?: number;
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
        required
        autoComplete={autoComplete}
        maxLength={maxLength}
        className="field-input"
      />
    </div>
  );
}
