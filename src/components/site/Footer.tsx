import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin, Youtube, MessageCircle, Music2, Send, Twitter } from "lucide-react";
import { LOGO_SRC, CONTACT, SOLUTIONS } from "@/lib/site-data";
import { toast } from "sonner";
import { useLang } from "@/lib/i18n";

const SOCIAL_ICONS: Record<string, typeof Facebook> = {
  Facebook,
  Instagram,
  LinkedIn: Linkedin,
  TikTok: Music2,
  YouTube: Youtube,
  X: Twitter,
  WhatsApp: MessageCircle,
};

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="footer-shell relative mt-24 overflow-hidden border-t border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[46rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]"
      />
      <div className="container-x relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <img src={LOGO_SRC} alt="SYLUTION logo" className="h-12 w-12 rounded-md object-contain" />
              <span className="font-display text-xl font-extrabold tracking-tight">SYLUTION</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
{t("footer.about")}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {CONTACT.socials.map((s) => {
                const Icon = SOCIAL_ICONS[s.name];
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={s.name}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <FooterCol
            title={t("footer.quick")}
            links={[
              { label: "Home", to: "/" },
              { label: "About", to: "/about" },
              { label: "Products & Platforms", to: "/platforms" },
              { label: "Sysmart Agro", to: "/sysmart-agro" },
              { label: "Projects", to: "/projects" },
              { label: "Partners", to: "/partners" },
              { label: "Investors", to: "/investors" },
              { label: "Gallery", to: "/gallery" },
              { label: "News", to: "/news" },
              { label: "Careers", to: "/careers" },
              { label: "Contact", to: "/contact" },
              { label: "FAQ", to: "/faq" },
            ]}
          />

          <FooterCol
            title={t("footer.solutions")}
            links={SOLUTIONS.slice(0, 8).map((s) => ({
              label: s.title,
              to: "/solutions/$slug",
              params: { slug: s.slug },
            }))}
          />

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em]">{t("footer.contact")}</h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{CONTACT.address}</span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-foreground">
                  {CONTACT.email}
                </a>
              </li>
              {CONTACT.phones.map((p) => (
                <li key={p} className="flex gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <a href={`tel:${p}`} className="hover:text-foreground">
                    {p}
                  </a>
                </li>
              ))}
            </ul>

            <form
              className="mt-6"
              onSubmit={(e) => {
                e.preventDefault();
                e.currentTarget.reset();
                toast.success("Subscribed", { description: "You are on the SYLUTION newsletter list." });
              }}
            >
              <label htmlFor="newsletter" className="eyebrow">
                Newsletter
              </label>
              <div className="mt-6 flex overflow-hidden rounded-full border border-white/15 bg-white/10">
                <input
                  id="newsletter"
                  type="email"
                  required
                  placeholder="Your email address"
                  className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm text-white outline-none placeholder:text-white/50"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="grid w-12 place-items-center bg-primary text-primary-foreground transition-opacity hover:opacity-90"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 SYLUTION LTD. {t("footer.rights")}</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-foreground">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-foreground">
              Terms
            </Link>
            <Link to="/faq" className="hover:text-foreground">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; to: string; params?: Record<string, string> }[];
}) {
  return (
    <div>
      <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em]">{title}</h3>
      <ul className="mt-5 space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              to={l.to}
              params={l.params as never}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
