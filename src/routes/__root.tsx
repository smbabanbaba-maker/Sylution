import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { LanguageProvider } from "@/lib/i18n";
import { Nav } from "@/components/site/Nav";
import { LeadForm } from "@/components/site/LeadForm";
import { Footer } from "@/components/site/Footer";
import { CONTACT } from "@/lib/site-data";


function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="btn-base btn-primary"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-base btn-primary"
          >
            Try again
          </button>
          <a
            href="/"
            className="btn-base btn-ghost"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SYLUTION | IoT, AI and Electronics Technology Company" },
      {
        name: "description",
        content:
          "SYLUTION is an Internet of Things, Artificial Intelligence, Electronics and Technology Innovation company based at TIC Kano, Nigeria, serving 15 industries.",
      },
      { name: "author", content: "SYLUTION" },
      { name: "theme-color", content: "#f2f1ee" },
      { property: "og:site_name", content: "SYLUTION" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "SYLUTION | IoT, AI and Electronics Technology Company" },
      { name: "twitter:title", content: "SYLUTION | IoT, AI and Electronics Technology Company" },
      { property: "og:description", content: "SYLUTION is an Internet of Things, Artificial Intelligence, Electronics and Technology Innovation company based at TIC Kano, Nigeria, serving 15 industries." },
      { name: "twitter:description", content: "SYLUTION is an Internet of Things, Artificial Intelligence, Electronics and Technology Innovation company based at TIC Kano, Nigeria, serving 15 industries." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/a7da5b53-2ea9-430f-b543-9257355e7c4e" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/a7da5b53-2ea9-430f-b543-9257355e7c4e" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Manrope:wght@400;500;600;700&display=swap",
      },
      { rel: "preconnect", href: "https://images.unsplash.com" },
      {
        rel: "icon",
        href: "/brand/sylution-logo.webp",
        type: "image/x-icon",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <ScrollTop />
        <RouteProgress />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main" className="min-h-screen">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <PageTransition>
            <Outlet />
          </PageTransition>
        </main>
        <LeadForm />
        <Footer />
        <FloatingWhatsApp />
        <Toaster position="top-right" richColors />
      </LanguageProvider>
    </QueryClientProvider>
  );
}

function RouteProgress() {
  const pending = useRouterState({ select: (s) => s.status === "pending" });
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5">
      <div
        className={`h-full origin-left bg-primary transition-[transform,opacity] duration-500 ease-out ${
          pending ? "scale-x-90 opacity-100" : "scale-x-0 opacity-0"
        }`}
      />
    </div>
  );
}

function PageTransition({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 0.7, 0.25, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

function ScrollTop() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${CONTACT.whatsapp}`}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Chat with SYLUTION on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-glow transition-transform duration-300 hover:scale-110 active:scale-95"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}

