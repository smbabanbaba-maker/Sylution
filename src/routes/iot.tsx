import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Radio, Cpu, Cloud, Gauge, ShieldCheck, Wifi } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { IoTDashboardDemo } from "@/components/site/IoTDashboardDemo";
import { IOT_APPLICATIONS, IOT_STACK, BRAND_IMAGES } from "@/lib/site-data";

export const Route = createFileRoute("/iot")({
  head: () => ({
    meta: [
      { title: "Internet of Things (IoT) Solutions | SYLUTION" },
      {
        name: "description",
        content:
          "SYLUTION designs, manufactures and deploys IoT devices, gateways, edge controllers, cloud platforms and dashboards for agriculture, industry, energy, cities and security.",
      },
      { property: "og:title", content: "Internet of Things at SYLUTION" },
      {
        property: "og:description",
        content:
          "Connected sensors, gateways, edge computing and cloud dashboards engineered in Kano, Nigeria for demanding environments.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: IoTPage,
});

const HIGHLIGHTS = [
  { icon: Radio, title: "Sensing", detail: "Rugged nodes for soil, climate, water, energy, motion and machine state." },
  { icon: Wifi, title: "Connectivity", detail: "LoRaWAN, NB-IoT, GSM and Wi-Fi engineered for weak coverage areas." },
  { icon: Cpu, title: "Edge computing", detail: "Local control in milliseconds, fully functional when the network drops." },
  { icon: Cloud, title: "Cloud platform", detail: "Device management, storage, APIs and secure over the air updates." },
  { icon: Gauge, title: "Dashboards", detail: "Realtime monitoring, alerts and reporting on any device." },
  { icon: ShieldCheck, title: "Security", detail: "Encrypted transport, signed firmware and role based access control." },
];

function IoTPage() {
  return (
    <>
      <PageHero
        eyebrow="Internet of Things"
        title="The connected core of SYLUTION"
        subtitle="Everything we engineer starts with a device that senses, a network that carries the data and a platform that turns it into action. IoT is not one of our services, it is the heart of the company."
        image={BRAND_IMAGES.iotLab}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="btn-base btn-primary"
          >
            Discuss a deployment <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/products"
            className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:scale-[1.04]"
          >
            See our devices
          </Link>
          <Link
            to="/company-profile"
            className="btn-base btn-ghost"
          >
            Download company profile
          </Link>
        </div>
      </PageHero>

      <IoTDashboardDemo />

      <section className="container-x section-y">
        <SectionHeading
          eyebrow="Capability"
          title="Six layers, engineered in house"
          description="Hardware, firmware, connectivity, cloud and interface are built by the same team, so nothing is left to a third party integration."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {HIGHLIGHTS.map((h, i) => (
            <Reveal key={h.title} delay={(i % 3) * 0.07}>
              <div className="card-luxe h-full p-7">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-primary">
                  <h.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-display text-lg font-bold">{h.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{h.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="border-y border-border bg-surface section-y">
        <div className="container-x">
          <SectionHeading
            eyebrow="Architecture"
            title="How a SYLUTION IoT system works"
            description="From the sensor in the field to the decision on the screen, five layers that keep working with or without a network."
            align="center"
          />
          <div className="mt-14 grid gap-4 md:grid-cols-5">
            {IOT_STACK.map((s, i) => (
              <Reveal key={s.layer} delay={i * 0.07}>
                <div className="card-luxe relative h-full p-6">
                  <p className="font-display text-3xl font-extrabold text-gradient-brand">{s.layer}</p>
                  <h3 className="mt-4 font-display text-base font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.detail}</p>
                  <span
                    aria-hidden
                    className="absolute right-4 top-6 hidden h-px w-6 bg-primary/40 md:block"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="container-x section-y">
        <SectionHeading
          eyebrow="Applications"
          title="Where our connected systems are deployed"
          description="One platform, many industries. Each application uses the same tested device, network and cloud foundation."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {IOT_APPLICATIONS.map((g, i) => (
            <Reveal key={g.group} delay={(i % 3) * 0.07}>
              <div className="card-luxe h-full p-7">
                <h3 className="font-display text-lg font-bold">{g.group}</h3>
                <ul className="mt-4 space-y-2.5">
                  {g.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* HARDWARE SHOWCASE */}
      <section className="container-x pb-20">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-3xl shadow-luxe">
              <img
                src={BRAND_IMAGES.device}
                alt="SYLUTION industrial IoT controller and sensor nodes"
                loading="lazy"
                width={1600}
                height={1008}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <SectionHeading
              eyebrow="Hardware"
              title="Devices designed for dust, heat and unstable power"
              description="Sealed enclosures, wide temperature tolerance, surge protection and multi year battery life, validated in our own testing centre before a single unit ships."
            />
            <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border sm:grid-cols-4">
              {[
                { v: "99.2%", l: "Uptime" },
                { v: "18 mo", l: "Battery" },
                { v: "12 km", l: "Range" },
                { v: "IP67", l: "Protection" },
              ].map((s) => (
                <div key={s.l} className="glass px-4 py-5">
                  <p className="font-display text-xl font-extrabold text-gradient-brand">{s.v}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{s.l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
