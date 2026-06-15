import { createFileRoute, Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-8xl font-extrabold tracking-tighter text-hologram">404</h1>
        <h2 className="mt-4 text-xl font-bold uppercase tracking-widest">Lost in the feed</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          This page got swiped into the void.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-lime px-6 py-3 text-xs font-bold uppercase tracking-widest text-void hover:scale-105 transition-transform"
          >
            Back to base
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "KRINASSO — Hyper-Social Growth Engine" },
      { name: "description", content: "KRINASSO is a social media marketing agency turning feeds into frenzy. Strategy, content, and paid social for brands ready to dominate the FYP." },
      { name: "author", content: "KRINASSO" },
      { property: "og:title", content: "KRINASSO — Hyper-Social Growth Engine" },
      { property: "og:description", content: "We turn feeds into frenzy. Social-first strategy, viral content, and paid amplification." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@krinasso" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="grain">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
