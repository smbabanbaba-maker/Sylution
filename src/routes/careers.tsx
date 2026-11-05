import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/careers")({
  beforeLoad: () => {
    throw redirect({ to: "/contact" });
  },
});
