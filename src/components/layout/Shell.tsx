"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Container } from "@/components/layout/Container";

type HomeMenuItem = Readonly<{ key: string; href: string; label: string }>;

const homeMenu: readonly HomeMenuItem[] = [
  { key: "home", href: "/", label: "Home" },
  { key: "services", href: "/services", label: "Services" },
  { key: "solutions", href: "/industries", label: "Solutions" },
  { key: "school", href: "/educare", label: "EduCare" },
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
                  href="/contact?intent=demo"
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
                  href="/contact?intent=demo"
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
