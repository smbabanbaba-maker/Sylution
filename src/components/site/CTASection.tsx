import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";
import { CONTACT } from "@/lib/site-data";
import { useLang } from "@/lib/i18n";

export function CTASection() {
  const { t } = useLang();
  return (
    <section className="container-x section-y">
      <Reveal>
        <div className="card-luxe relative px-6 py-16 text-center sm:px-14 lg:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 -top-24 h-56 bg-primary/25 blur-[100px]"
          />
          <div className="relative">
            <p className="eyebrow justify-center">SYLUTION</p>
            <h2 className="mx-auto mt-5 max-w-2xl text-[1.75rem] font-bold leading-[1.15] sm:text-4xl lg:text-[2.6rem]">
              {t("cta.title")}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">{t("cta.sub")}</p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="btn-base btn-primary"
              >
                {t("cta.button")}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-base btn-ghost"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
