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
  { key: "educare", href: "/educare", label: "EduCare" },
  { key: "about", href: "/about", label: "About Us" },
  { key: "contact", href: "/contact", label: "Contact" },
];

// ArisGlobal-inspired navigation with dark theme
function ModernNav({ activeHref }: { activeHref: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Main Navigation Bar */}
      <nav className="sticky top-0 z-50">
        <div className="relative bg-gradient-to-r from-black from-0% via-blue-800 via-65% to-blue-400 to-100%">
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-6 bg-gradient-to-r from-black from-0% via-blue-800 via-65% to-blue-300 to-100%" />

          <div className="relative flex h-24 items-start gap-0">
            <div className="flex h-full items-start pl-[80px] pr-0 pt-[15px]">
              <img
                src="/logos/company_logo.png"
                alt="Agadh Software"
                className="h-16 w-auto flex-shrink-0"
              />
            </div>

            <div className="min-w-0 flex-1">
              <Container gutter="none">
                <div className="flex h-16 items-center justify-between">
                  {/* Desktop Navigation */}
                  <div className="hidden lg:flex items-center gap-1">
                    {homeMenu.map((item) => (
                      <Link
                        key={item.key}
                        href={item.href}
                        className={`px-4 py-2 text-sm font-medium transition-all rounded-lg relative ${
                          activeHref === item.href
                            ? "text-cyan-300 bg-white/5 border-b-2 border-cyan-400"
                            : "text-white/70 hover:text-white"
                        }`}
                      >
                        {item.label}
                        {activeHref !== item.href && (
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
                        )}
                      </Link>
                    ))}
                  </div>

                  {/* Right side: CTA Button + Mobile Menu */}
                  <div className="flex items-center gap-4 ml-auto">
                    <Link
                      href="/contact"
                      className="hidden sm:inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-2.5 text-sm font-bold text-slate-900 hover:bg-cyan-300 transition-all duration-200 shadow-lg hover:shadow-cyan-400/50"
                    >
                      Book a Demo
                    </Link>

                    {/* Mobile menu button */}
                    <button
                      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                      className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors text-white"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </Container>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="bg-gradient-to-r from-black from-0% via-blue-800 via-65% to-blue-400 to-100%">
            <Container>
              <div className="lg:hidden border-t border-white/10 py-4">
                <div className="flex flex-col gap-2">
                  {homeMenu.map((item) => (
                    <Link
                      key={item.key}
                      href={item.href}
                      className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                        activeHref === item.href
                          ? "text-cyan-300 bg-white/10"
                          : "text-white/80 hover:text-white hover:bg-white/5"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link
                    href="/contact"
                    className="mt-2 flex items-center justify-center rounded-full bg-cyan-400 px-6 py-2 text-sm font-bold text-slate-900 hover:bg-cyan-300 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Book a Demo
                  </Link>
                </div>
              </div>
            </Container>
          </div>
        )}
      </nav>
    </>
  );
}

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
  const [activeHref, setActiveHref] = useState<string>("/");

  useEffect(() => {
    setActiveHref(pathname);
  }, [pathname]);

  return (
    <div className="min-h-dvh bg-gradient-to-r from-slate-900 via-blue-900 to-teal-800 text-white">
      {/* Modern Navigation Bar */}
      <ModernNav activeHref={activeHref} />

      {/* Page content */}
      <main>{children}</main>
    </div>
  );
}
