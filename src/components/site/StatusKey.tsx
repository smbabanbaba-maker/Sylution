import { displayStatus, STATUS_KEY } from "@/lib/status";

export function StatusBadge({ status }: { status: string }) {
  const label = displayStatus(status);
  return (
    <span
      aria-label={`Stage: ${label}`}
      className="inline-flex w-fit rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-primary"
    >
      {label}
    </span>
  );
}

export function StatusKey() {
  return (
    <aside
      aria-labelledby="status-key-title"
      className="mt-8 rounded-2xl border border-border bg-background/70 p-5 sm:p-6"
    >
      <h3 id="status-key-title" className="font-display text-base font-bold">
        How to read these status labels
      </h3>
      <dl className="mt-4 grid gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
        {STATUS_KEY.map((item) => (
          <div key={item.label}>
            <dt className="text-xs font-bold text-primary">{item.label}</dt>
            <dd className="mt-1 text-xs leading-relaxed text-muted-foreground">
              {item.explanation}
            </dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}
