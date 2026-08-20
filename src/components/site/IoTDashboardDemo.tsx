import { useEffect, useMemo, useRef, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Activity, AlertTriangle, CheckCircle2, Cpu, Gauge, Signal, Thermometer, Zap } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./PageHero";

type Point = {
  t: string;
  temperature: number;
  vibration: number;
  power: number;
  health: number;
};

const MAX_POINTS = 28;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function makeSeed(): Point[] {
  const now = Date.now();
  const seed: Point[] = [];
  for (let i = MAX_POINTS - 1; i >= 0; i--) {
    const d = new Date(now - i * 3000);
    seed.push({
      t: d.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit" }),
      temperature: 41 + Math.sin(i / 3) * 2.4,
      vibration: 2.4 + Math.cos(i / 4) * 0.5,
      power: 6.1 + Math.sin(i / 5) * 0.8,
      health: clamp(96 - i * 0.18, 60, 100),
    });
  }
  return seed;
}

export function IoTDashboardDemo() {
  const [data, setData] = useState<Point[]>(() => makeSeed());
  const [live, setLive] = useState(true);
  const drift = useRef(0);

  useEffect(() => {
    if (!live) return;
    const id = window.setInterval(() => {
      setData((prev) => {
        const last = prev[prev.length - 1];
        drift.current += 0.06;
        const next: Point = {
          t: new Date().toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          }),
          temperature: clamp(last.temperature + (Math.random() - 0.42) * 1.1, 34, 68),
          vibration: clamp(last.vibration + (Math.random() - 0.44) * 0.28, 1.2, 7.5),
          power: clamp(last.power + (Math.random() - 0.5) * 0.4, 3.5, 9.5),
          health: clamp(last.health - Math.random() * 0.35, 42, 100),
        };
        return [...prev.slice(-(MAX_POINTS - 1)), next];
      });
    }, 2200);
    return () => window.clearInterval(id);
  }, [live]);

  const latest = data[data.length - 1];

  const forecast = useMemo(() => {
    const window = data.slice(-10);
    const first = window[0];
    const slopePerTick = (latest.health - first.health) / Math.max(window.length - 1, 1);
    const decline = Math.max(slopePerTick, 0.05);
    const ticksToThreshold = (latest.health - 70) / decline;
    const hours = clamp(Math.round((ticksToThreshold * 2.2) / 60 + 6), 2, 720);
    return {
      hours,
      confidence: clamp(Math.round(78 + latest.health / 8), 60, 99),
    };
  }, [data, latest.health]);

  const status =
    latest.temperature > 58 || latest.vibration > 5.6
      ? { label: "Attention", tone: "warn" as const }
      : { label: "Nominal", tone: "ok" as const };

  const kpis = [
    { icon: Thermometer, label: "Motor temperature", value: `${latest.temperature.toFixed(1)} °C`, sub: "Threshold 58 °C" },
    { icon: Activity, label: "Vibration RMS", value: `${latest.vibration.toFixed(2)} mm/s`, sub: "Threshold 5.6 mm/s" },
    { icon: Zap, label: "Power draw", value: `${latest.power.toFixed(2)} kW`, sub: "Rated 9.5 kW" },
    { icon: Gauge, label: "Asset health", value: `${latest.health.toFixed(0)} %`, sub: "Model confidence " + forecast.confidence + " %" },
  ];

  return (
    <section id="dashboard" className="border-y border-border bg-surface section-y">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Live demo"
            title="SYLUTION IoT dashboard, running now"
            description="A simulated pump station streaming telemetry every few seconds, with anomaly thresholds and a predictive maintenance estimate produced from the live trend."
          />
          <button
            type="button"
            onClick={() => setLive((v) => !v)}
            className="btn-base btn-ghost"
          >
            <span
              className={`h-2 w-2 rounded-full ${live ? "animate-pulse bg-primary" : "bg-muted-foreground/50"}`}
              aria-hidden
            />
            {live ? "Pause stream" : "Resume stream"}
          </button>
        </div>

        <Reveal>
          <div className="card-luxe mt-12 overflow-hidden p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/15 text-primary">
                  <Cpu className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-base font-bold">Gateway SYL-GW-014</p>
                  <p className="text-xs text-muted-foreground">Kano industrial water pumping station, 6 sensor nodes</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs">
                <span className="inline-flex items-center gap-2 text-muted-foreground">
                  <Signal className="h-4 w-4 text-primary" /> NB-IoT, -71 dBm
                </span>
                <span
                  className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-semibold ${
                    status.tone === "ok" ? "bg-primary/10 text-primary" : "bg-destructive/10 text-destructive"
                  }`}
                >
                  {status.tone === "ok" ? <CheckCircle2 className="h-4 w-4" /> : <AlertTriangle className="h-4 w-4" />}
                  {status.label}
                </span>
              </div>
            </div>

            <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-border sm:grid-cols-2 lg:grid-cols-4">
              {kpis.map((k) => (
                <div key={k.label} className="glass px-5 py-5">
                  <p className="flex items-center gap-2 text-xs text-muted-foreground">
                    <k.icon className="h-4 w-4 text-primary" />
                    {k.label}
                  </p>
                  <p className="mt-2 font-display text-2xl font-extrabold text-gradient-brand">{k.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{k.sub}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-border p-5">
                <p className="text-sm font-semibold">Temperature and vibration</p>
                <p className="mt-1 text-xs text-muted-foreground">Rolling window, one sample every 2.2 seconds</p>
                <div className="mt-4 h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 6, right: 8, left: -18, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.5} />
                      <XAxis dataKey="t" tick={{ fontSize: 10 }} minTickGap={40} stroke="currentColor" opacity={0.5} />
                      <YAxis tick={{ fontSize: 10 }} stroke="currentColor" opacity={0.5} />
                      <Tooltip
                        contentStyle={{
                          borderRadius: 12,
                          border: "1px solid hsl(var(--border))",
                          fontSize: 12,
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="temperature"
                        name="Temp °C"
                        stroke="var(--color-primary)"
                        strokeWidth={2}
                        dot={false}
                        isAnimationActive={false}
                      />
                      <Line
                        type="monotone"
                        dataKey="vibration"
                        name="Vibration mm/s"
                        stroke="currentColor"
                        strokeWidth={1.6}
                        opacity={0.55}
                        dot={false}
                        isAnimationActive={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="rounded-2xl border border-border p-5">
                <p className="text-sm font-semibold">Asset health and predictive maintenance</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Degradation model trained on vibration, thermal and load signatures
                </p>
                <div className="mt-4 h-40">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 6, right: 8, left: -18, bottom: 0 }}>
                      <defs>
                        <linearGradient id="healthFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="var(--color-primary)" stopOpacity={0.35} />
                          <stop offset="100%" stopColor="var(--color-primary)" stopOpacity={0.02} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.5} />
                      <XAxis dataKey="t" tick={{ fontSize: 10 }} minTickGap={50} stroke="currentColor" opacity={0.5} />
                      <YAxis domain={[40, 100]} tick={{ fontSize: 10 }} stroke="currentColor" opacity={0.5} />
                      <Tooltip
                        contentStyle={{
                          borderRadius: 12,
                          border: "1px solid hsl(var(--border))",
                          fontSize: 12,
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="health"
                        name="Health %"
                        stroke="var(--color-primary)"
                        strokeWidth={2}
                        fill="url(#healthFill)"
                        isAnimationActive={false}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 rounded-xl bg-primary/8 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">Predicted service window</p>
                  <p className="mt-2 text-sm">
                    Bearing wear trend suggests maintenance in approximately{" "}
                    <strong>{forecast.hours} hours</strong> at {forecast.confidence} percent confidence. A work order
                    would be raised automatically and sent to the maintenance team.
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-6 text-xs text-muted-foreground">
              Simulated Data — Demonstration Interface. This dashboard illustrates the SYLUTION monitoring interface using data generated in your browser.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
