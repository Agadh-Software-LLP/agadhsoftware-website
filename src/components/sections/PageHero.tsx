import Link from "next/link";
import { Container } from "@/components/layout/Container";
import type { ReactNode } from "react";

type Cta = { label: string; href: string; variant?: "primary" | "secondary" };

type PageHeroProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  subtitle: string;
  cta?: Cta;
  ctas?: Cta[];
  variant?: "standard" | "full";
};

function CtaLink({ cta }: { cta: Cta }) {
  const variant = cta.variant ?? "primary";
  const className =
    variant === "secondary"
      ? "inline-flex items-center justify-center rounded-lg border-2 border-white bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-all duration-200"
      : "inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-950 hover:bg-slate-100 shadow-md hover:shadow-lg transition-all duration-200";

  return (
    <Link href={cta.href} className={className}>
      {cta.label}
    </Link>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  cta,
  ctas,
  variant = "standard",
}: PageHeroProps) {
  const resolvedCtas = ctas ?? (cta ? [cta] : []);

  if (variant === "full") {
    return (
      <section className="relative border-b border-slate-200/50 bg-gradient-to-b from-blue-950 via-slate-950 to-slate-950 text-white">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-blue-900/40 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-900/20 blur-3xl" />
        </div>

        <Container>
          <div className="py-16 sm:py-24">
            <div className="max-w-3xl">
              {eyebrow ? (
                <div className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/80">
                  {eyebrow}
                </div>
              ) : null}
              <h1 className="mt-4 whitespace-pre-line text-4xl font-bold tracking-tight sm:text-6xl">
                {title}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-white/80 sm:text-xl">
                {subtitle}
              </p>

              {resolvedCtas.length > 0 ? (
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  {resolvedCtas.map((c) => (
                    <CtaLink key={c.href + c.label} cta={c} />
                  ))}
                </div>
              ) : null}

              <div className="mt-12 grid gap-4 rounded-xl border border-white/10 bg-white/5 p-6 text-sm text-white/80 sm:grid-cols-3 backdrop-blur">
                <div>
                  <div className="font-semibold text-white">Correctness</div>
                  <div className="mt-2">Strong data & workflow foundations.</div>
                </div>
                <div>
                  <div className="font-semibold text-white">Security</div>
                  <div className="mt-2">Access control and auditability.</div>
                </div>
                <div>
                  <div className="font-semibold text-white">Ownership</div>
                  <div className="mt-2">End-to-end delivery and maintenance.</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="relative border-b border-slate-200 bg-gradient-to-br from-slate-50 to-white">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-blue-50 to-transparent blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-tr from-blue-50 to-transparent blur-3xl" />
      </div>

      <Container>
        <div className="py-16 sm:py-24">
          {eyebrow ? (
            <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-900">
              {eyebrow}
            </div>
          ) : null}
          <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
            {subtitle}
          </p>
          {resolvedCtas.length > 0 ? (
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              {resolvedCtas.map((c) => (
                <Link
                  key={c.href + c.label}
                  href={c.href}
                  className={
                    (c.variant ?? "primary") === "secondary"
                      ? "inline-flex items-center justify-center rounded-lg border-2 border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:border-slate-400 hover:bg-slate-50 transition-all duration-200"
                      : "inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-900 to-blue-800 px-6 py-3 text-sm font-semibold text-white hover:from-blue-950 hover:to-blue-900 shadow-lg hover:shadow-xl transition-all duration-200"
                  }
                >
                  {c.label}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
