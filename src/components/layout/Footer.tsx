import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "@/components/layout/Container";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container>
        <div className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <div className="text-sm font-semibold text-slate-950">{site.name}</div>
            <div className="text-sm text-slate-600">{site.coreMessage}</div>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-700 hover:text-slate-950"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="text-sm text-slate-600">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}
