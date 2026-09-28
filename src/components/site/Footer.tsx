import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { CONTACT, LOGO_SRC, SOLUTIONS } from "@/lib/site-data";
import { useLang } from "@/lib/i18n";

const SOCIAL_MARKS: Record<string, string> = {
  Facebook: "/brand/social/facebook.svg",
  Instagram: "/brand/social/instagram.svg",
  LinkedIn: "/brand/social/linkedin.svg",
  TikTok: "/brand/social/tiktok.svg",
  X: "/brand/social/x.svg",
  WhatsApp: "/brand/social/whatsapp.svg",
};

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="footer-shell mt-20 border-t border-border">
      <div className="container-x py-14 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_1fr_1.15fr] lg:gap-12">
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-3 rounded-full"
              aria-label="SYLUTION home"
            >
              <img
                src={LOGO_SRC}
                alt=""
                aria-hidden="true"
                className="h-11 w-11 rounded-xl bg-white p-1.5 object-contain"
              />
              <span className="font-display text-lg font-extrabold tracking-[0.1em]">SYLUTION</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-muted-foreground">
              {t("footer.about")}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {CONTACT.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`SYLUTION on ${social.name}`}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/5 transition-colors hover:border-white/50 hover:bg-white/10"
                >
                  <img
                    src={SOCIAL_MARKS[social.name]}
                    alt=""
                    aria-hidden="true"
                    className="h-4 w-4 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

          <FooterCol
            title={t("footer.quick")}
            links={[
              { label: "About", to: "/about" },
              { label: "Sysmart Agro", to: "/sysmart-agro" },
              { label: "Projects", to: "/projects" },
              { label: "Training", to: "/training" },
              { label: "News", to: "/news" },
              { label: "Careers", to: "/careers" },
            ]}
          />

          <FooterCol
            title={t("footer.solutions")}
            links={SOLUTIONS.slice(0, 6).map((solution) => ({
              label: solution.title,
              to: "/solutions/$slug",
              params: { slug: solution.slug },
            }))}
          />

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em]">
              {t("footer.contact")}
            </h3>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-muted-foreground">
              <li className="flex gap-3">
                <MapPin aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-primary" />
                <span>{CONTACT.address}</span>
              </li>
              <li className="flex gap-3">
                <Mail aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-primary" />
                <a href={`mailto:${CONTACT.email}`} className="break-all hover:text-white">
                  {CONTACT.email}
                </a>
              </li>
              {CONTACT.phones.slice(0, 1).map((phone) => (
                <li key={phone} className="flex gap-3">
                  <Phone aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  <a href={`tel:${phone}`} className="hover:text-white">
                    {phone}
                  </a>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[var(--leaf)]"
            >
              {t("nav.contact")} <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} SYLUTION LTD. {t("footer.rights")}
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link to="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-white">
              Terms
            </Link>
            <Link to="/faq" className="hover:text-white">
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
      <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em]">{title}</h3>
      <ul className="mt-5 space-y-3 text-sm">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              to={link.to}
              params={link.params as never}
              className="text-muted-foreground transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
