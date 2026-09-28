import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/site-data";
import { useLang } from "@/lib/i18n";

export function CTASection() {
  const { t } = useLang();
  return (
    <section className="container-x section-y">
      <div className="cta-panel">
        <div className="cta-panel-orbit" aria-hidden="true" />
        <div className="relative z-10 max-w-2xl">
          <p className="eyebrow text-white/70">SYLUTION · KANO</p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
            {t("cta.title")}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-white/75">{t("cta.sub")}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact" className="btn-base btn-accent">
              {t("cta.button")} <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-base btn-on-dark"
            >
              <MessageCircle aria-hidden="true" className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
        <span className="cta-panel-index" aria-hidden="true">
          01 / ENGINEERED IN KANO
        </span>
      </div>
    </section>
  );
}
