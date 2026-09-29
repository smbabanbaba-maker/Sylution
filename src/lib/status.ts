export const STATUS_KEY = [
  {
    label: "In development",
    explanation: "Being designed or built; not ready for general purchase.",
  },
  {
    label: "Testing / field validation",
    explanation: "A prototype is being assessed; this does not mean it is for sale.",
  },
  {
    label: "Research",
    explanation: "Exploratory work; no finished product or result is promised.",
  },
  {
    label: "Enquire to confirm availability",
    explanation: "Ask about a service or training date; this is not an instant booking.",
  },
  {
    label: "Future initiative",
    explanation: "Not live yet; no orders or applications are being accepted.",
  },
] as const;

export type StatusLabel = (typeof STATUS_KEY)[number]["label"];

/** Convert the site's varied internal stage wording into one visitor-facing label. */
export function displayStatus(rawStatus: string): StatusLabel {
  const status = rawStatus.toLowerCase();
  if (status.includes("research")) return "Research";
  if (
    status.includes("testing") ||
    status.includes("pilot") ||
    status.includes("field deployment") ||
    status.includes("validation")
  ) {
    return "Testing / field validation";
  }
  if (status.includes("coming") || status.includes("future") || status.includes("not live")) {
    return "Future initiative";
  }
  if (status.includes("ongoing") || status.includes("availability") || status.includes("enquir")) {
    return "Enquire to confirm availability";
  }
  return "In development";
}
