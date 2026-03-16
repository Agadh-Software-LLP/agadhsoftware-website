import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "@/components/layout/Container";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/50 bg-gradient-to-b from-slate-50 to-white">
      <Container>
        <div className="flex flex-col gap-12 py-16 md:py-20">
          {/* Main footer content */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand section */}
            <div className="space-y-3 lg:col-span-2">
              <div className="text-lg font-bold text-slate-950">{site.name}</div>
              <div className="text-sm leading-relaxed text-slate-600">
                {site.coreMessage}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <div className="text-sm font-semibold text-slate-950 mb-4">
                Navigation
              </div>
              <div className="space-y-2">
                {site.nav.slice(0, -1).map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-sm text-slate-600 hover:text-slate-950 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact sections */}
            <div>
              <div className="text-sm font-semibold text-slate-950 mb-4">
                Contact
              </div>
              <div className="space-y-2">
                <Link
                  href={`mailto:${site.contact.email}`}
                  className="block text-sm text-slate-600 hover:text-slate-950 transition-colors break-all"
                >
                  {site.contact.email}
                </Link>
                <div className="text-sm text-slate-600">
                  {site.contact.phone}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-slate-200/50 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="text-sm text-slate-600">
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </div>
            <div className="flex gap-6">
              <Link
                href="/contact"
                className="text-sm font-semibold text-blue-900 hover:text-blue-950 transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/"
                className="text-sm font-semibold text-blue-900 hover:text-blue-950 transition-colors"
              >
                Back to Top
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
