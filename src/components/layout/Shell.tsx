"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { site } from "@/content/site";
import { navPanels } from "@/content/nav-panels";
import { Container } from "@/components/layout/Container";

type NavItem = Readonly<{ href: string; label: string }>;

type HomeMenuItem = Readonly<{ key: string; href: string; label: string }>;

const homeMenu: readonly HomeMenuItem[] = [
  { key: "home", href: "/", label: "Home" },
  { key: "services", href: "/services", label: "Services" },
  { key: "solutions", href: "/industries", label: "Solutions" },
  { key: "about", href: "/about", label: "About Us" },
  { key: "contact", href: "/contact", label: "Contact" },
];

function HeroContent() {
  return (
    <div className="min-w-0">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
        {site.name}
      </h1>
      <div className="mt-2 text-base font-semibold tracking-wide text-white/70 sm:text-lg">
        {site.tagline}
      </div>
      <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
        We build deep, scalable software systems and deliver them right — from
        idea to long-term maintenance.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-blue-950 hover:bg-slate-100"
        >
          Start a Project
        </Link>
        <Link
          href="/services"
          className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
        >
          Explore Services
        </Link>
      </div>

      <div className="mt-10 grid gap-3 rounded-xl border border-white/10 bg-white/5 p-5 text-sm text-white/80 sm:grid-cols-2">
        <div>
          <div className="font-semibold text-white">Correctness</div>
          <div className="mt-1">Strong data & workflow foundations.</div>
        </div>
        <div>
          <div className="font-semibold text-white">Security</div>
          <div className="mt-1">Access control and auditability.</div>
        </div>
      </div>
    </div>
  );
}

function RightPanel({ activeHref }: { activeHref: string }) {
  const panel = navPanels[activeHref] ?? navPanels["/"];
  const isHome = activeHref === "/";

  // Spread layout (no outer box) so content can use full banner space.
  if (isHome) {
    return <HeroContent />;
  }

  return (
    <div className="h-full">
      <div className="flex h-full flex-col">
        <div className="max-w-4xl">
          <div className="text-sm font-semibold text-white/80">{panel.title}</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {panel.title}
          </h2>
          <div className="mt-4 text-sm leading-relaxed text-white/75 sm:text-base">
            {panel.description}
          </div>

          {panel.bullets?.length ? (
            <ul className="mt-7 space-y-2 text-sm text-white/85">
              {panel.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-white/80" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        {panel.cta ? (
          <div className="mt-auto pt-10">
            <Link
              href={panel.cta.href}
              className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-blue-950 hover:bg-slate-100"
            >
              {panel.cta.label}
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function Shell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string>("/");

  const isHomeRoute = pathname === "/";

  const nav = useMemo<readonly NavItem[]>(() => {
    return site.nav;
  }, []);

  useEffect(() => {
    // Disable browser scroll restoration so Home always lands at the banner.
    // This avoids returning to a previous mid-page scroll position like "How we work".
    if (typeof window !== "undefined") {
      try {
        window.history.scrollRestoration = "manual";
      } catch {
        // ignore
      }
    }
  }, []);

  useEffect(() => {
    // Keep selection aligned with route.
    setActiveHref(pathname);

    if (pathname === "/") {
      // Do NOT force-scroll on every Home render.
      // Only scroll to top when we explicitly request opening the menu from another page.
      let shouldOpen = false;
      try {
        shouldOpen = sessionStorage.getItem("agadh:openMenuOnHome") === "1";
        if (shouldOpen) sessionStorage.removeItem("agadh:openMenuOnHome");
      } catch {
        // ignore
      }

      if (shouldOpen) {
        requestAnimationFrame(() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant" as ScrollBehavior,
          });
        });
        setOpen(true);
        setActiveHref("/");
      }

      return;
    }

    setOpen(false);
  }, [pathname, router]);

  useEffect(() => {
    if (!open) return;

    let startY = window.scrollY;
    const threshold = 12;

    const onScroll = () => {
      const delta = Math.abs(window.scrollY - startY);
      if (delta >= threshold) {
        setOpen(false);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  const handleSelect = (href: string) => {
    setActiveHref(href);
    router.push(href);
    setOpen(false);
  };

  const handleHamburgerClick = () => {
    // Required UX: from any inner page, go to Home banner and open the panel there.
    if (!isHomeRoute) {
      try {
        sessionStorage.setItem("agadh:openMenuOnHome", "1");
      } catch {
        // ignore
      }
      router.push("/");
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });

    setOpen((v) => {
      const next = !v;
      if (next) setActiveHref("/");
      return next;
    });
  };

  return (
    <div className="min-h-dvh bg-white text-slate-950">
      {/* Header */}
      <header
        className="sticky top-0 z-50 bg-gradient-to-b from-blue-950 to-slate-950 text-white"
        style={{ height: "4rem" }}
      >
        <Container>
          <div className="flex items-center justify-between py-4">
            <Link
              href="/"
              scroll={false}
              className="min-w-0"
            >
              <div className="truncate text-sm font-semibold tracking-tight text-white">
                Agadh Software LLP
              </div>
              <div className="truncate text-xs font-medium text-white/75">
                Build Deep. Build Right.
              </div>
            </Link>

            <button
              type="button"
              onClick={handleHamburgerClick}
              className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <span className="relative h-4 w-5">
                <span className="absolute left-0 top-0 block h-0.5 w-5 rounded bg-white" />
                <span className="absolute left-0 top-1.5 block h-0.5 w-5 rounded bg-white" />
                <span className="absolute left-0 top-3 block h-0.5 w-5 rounded bg-white" />
              </span>
            </button>
          </div>
        </Container>
      </header>

      {/* HOME BANNER AREA (only on /) */}
      {isHomeRoute ? (
        <section className="relative z-[45] bg-gradient-to-b from-blue-950 to-slate-950 text-white">
          <Container>
            <div className="py-6 sm:py-10">
              <div className="relative min-h-[calc(100dvh-4rem)]">
                {/* Slide-in left panel (Home only) */}
                <div
                  className={
                    "fixed top-16 left-0 z-[60] w-72 max-w-[80vw] transition-transform duration-300 ease-out md:w-64 " +
                    (open ? "translate-x-0" : "-translate-x-full")
                  }
                >
                  <div className="h-[calc(100dvh-4rem)] rounded-r-xl border border-white/10 bg-slate-950/80 p-3 backdrop-blur">
                    <nav className="space-y-1">
                      {homeMenu.map((item) => {
                        const active = activeHref === item.href;
                        return (
                          <Link
                            key={item.key}
                            href={item.href}
                            onClick={() => {
                              setActiveHref(item.href);
                              setOpen(false);
                            }}
                            onMouseEnter={() => setActiveHref(item.href)}
                            onFocus={() => setActiveHref(item.href)}
                            className={
                              "block w-full rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors " +
                              (active
                                ? "bg-white/15 text-white"
                                : "text-white/85 hover:bg-white/10 hover:text-white")
                            }
                          >
                            {item.label}
                          </Link>
                        );
                      })}
                    </nav>
                  </div>
                </div>

                {/* Right content */}
                <div
                  className={
                    "relative z-[55] min-h-[calc(100dvh-4rem)] transition-[margin-left,opacity,transform] duration-300 ease-out " +
                    (open ? "md:ml-64 ml-0" : "ml-0")
                  }
                >
                  <RightPanel activeHref={open ? activeHref : "/"} />
                </div>

                {/* Mobile: when open, show content below menu to avoid cramped width */}
                {open ? (
                  <div className="relative z-[55] mt-6 md:hidden">
                    <RightPanel activeHref={activeHref} />
                  </div>
                ) : null}
              </div>
            </div>
          </Container>
        </section>
      ) : null}

      {/* Page content */}
      <div className={open ? "relative z-[30]" : ""}>{children}</div>

      {/* Click-away backdrop: keep BEHIND interactive UI so it doesn't swallow clicks */}
      {open ? (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 z-20 bg-black/20"
          onClick={() => setOpen(false)}
        />
      ) : null}
    </div>
  );
}
