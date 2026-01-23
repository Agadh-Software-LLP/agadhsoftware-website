// This file is kept for compatibility, but the app now uses `Shell` for header/nav.

import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "@/components/layout/Container";

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <Container>
        <div className="flex h-16 items-center justify-between gap-6">
          <nav className="flex flex-1 items-center justify-start gap-6">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-700 hover:text-slate-950"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="rounded-md bg-blue-900 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-950"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
