"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
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

// ArisGlobal-inspired navigation with dark theme
function ModernNav({ activeHref }: { activeHref: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Main Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-black via-blue-950 to-black backdrop-blur-md relative [--tw-gradient-via:lab(9_5.97_-25.64)]   /* mobile */
sm:[--tw-gradient-via:lab(18_6.8_-31)]
md:[--tw-gradient-via:lab(21_7.2_-33)]
lg:[--tw-gradient-via:lab(23_3.56_-29.2)]  /* KEEP THIS */
xl:[--tw-gradient-via:lab(25_4_-31)]
2xl:[--tw-gradient-via:lab(27_5_-33)]">
        <Container>
          <div className="flex h-14 items-center">
            {/* Left 40%: Company logo */}
            <div className="flex flex-none items-center min-w-[210px] sm:min-w-[250px] md:min-w-[280px] lg:min-w-[320px]">
              <Link
                href="/"
                className="relative z-10 flex h-14 items-start overflow-visible"
              >
                <span className="sr-only">Agadh Software</span>
                <div className="relative block h-14 w-[190px] shrink-0 origin-left scale-90 sm:w-[230px] md:w-[260px] lg:w-[290px] lg:scale-100">
                  <div className="absolute left-2 top-px z-10 h-[64px] w-full sm:h-[74px] lg:h-[84px]">
                    <Image
                      src="/logos/company_logo.png"
                      alt="Agadh Software"
                      fill
                      priority
                      sizes="(min-width: 1024px) 290px, (min-width: 768px) 260px, (min-width: 640px) 230px, 190px"
                      className="object-contain object-left origin-left lg:scale-105"
                    />
                  </div>
                </div>
              </Link>
            </div>

            {/* Right 60%: Menu / CTA / Mobile toggle */}
            <div className="flex flex-1 min-w-0 items-center justify-end gap-4 lg:justify-between">
              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-1">
                {homeMenu.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    className={`relative rounded-lg px-4 py-2 text-sm font-normal transition-all ${
                      activeHref === item.href
                        ? "border-b-2 border-cyan-400 bg-white/5 text-cyan-300"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {item.label}
                    {activeHref !== item.href && (
                      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-cyan-400 transition-all group-hover:w-full"></span>
                    )}
                  </Link>
                ))}
              </div>

              {/* Right side: CTA Button + Mobile Menu */}
              <div className="flex items-center gap-4">
                <Link
                  href="/contact"
                  className="hidden sm:inline-flex items-center justify-center rounded-full bg-cyan-400 px-5 py-2 text-sm font-normal text-slate-900 shadow-lg transition-all duration-200 hover:bg-cyan-300 hover:shadow-cyan-400/50"
                >
                  Book a Demo
                </Link>

                {/* Mobile menu button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="rounded-lg p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
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
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4">
              <div className="flex flex-col gap-2">
                {homeMenu.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    className={`px-4 py-2 text-sm font-normal rounded-lg transition-colors ${
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
                  className="mt-2 flex items-center justify-center rounded-full bg-cyan-400 px-6 py-2 text-sm font-normal text-slate-900 hover:bg-cyan-300 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book a Demo
                </Link>
              </div>
            </div>
          )}
        </Container>

        {/* Shadow strip below header (always aligned with header) */}
        <div
          className="pointer-events-none relative z-0 h-7 bg-gradient-to-r from-black via-blue-950 to-teal-950 opacity-95 [--tw-gradient-via:lab(9_5.97_-25.64)]   /* mobile */
sm:[--tw-gradient-via:lab(18_6.8_-31)]
md:[--tw-gradient-via:lab(21_7.2_-33)]
lg:[--tw-gradient-via:lab(23_3.56_-29.2)]  /* KEEP THIS */
xl:[--tw-gradient-via:lab(25_4_-31)]
2xl:[--tw-gradient-via:lab(27_5_-33)]"
        />
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
    <div className="min-h-dvh bg-white text-slate-950">
      {/* Modern Navigation Bar */}
      <ModernNav activeHref={activeHref} />

      {/* Page content */}
      <main>{children}</main>
    </div>
  );
}
