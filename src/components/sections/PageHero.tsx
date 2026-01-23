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
      ? "inline-flex items-center justify-center rounded-md border border-white/30 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
      : "inline-flex items-center justify-center rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-blue-950 hover:bg-slate-100";

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
      <section className="border-b border-slate-200 bg-gradient-to-b from-blue-950 to-slate-950 text-white">
        <Container>
          <div className="py-14 sm:py-20">
            <div className="max-w-3xl">
              {eyebrow ? (
                <div className="text-sm font-semibold tracking-wide text-white/70">
                  {eyebrow}
                </div>
              ) : null}
              <h1 className="mt-3 whitespace-pre-line text-3xl font-semibold tracking-tight sm:text-5xl">
                {title}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
                {subtitle}
              </p>

              {resolvedCtas.length > 0 ? (
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  {resolvedCtas.map((c) => (
                    <CtaLink key={c.href + c.label} cta={c} />
                  ))}
                </div>
              ) : null}

              <div className="mt-10 grid gap-3 rounded-xl border border-white/10 bg-white/5 p-5 text-sm text-white/80 sm:grid-cols-3">
                <div>
                  <div className="font-semibold text-white">Correctness</div>
                  <div className="mt-1">Strong data & workflow foundations.</div>
                </div>
                <div>
                  <div className="font-semibold text-white">Security</div>
                  <div className="mt-1">Access control and auditability.</div>
                </div>
                <div>
                  <div className="font-semibold text-white">Ownership</div>
                  <div className="mt-1">End-to-end delivery and maintenance.</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="border-b border-slate-200 bg-slate-50">
      <Container>
        <div className="py-12 sm:py-16">
          {eyebrow ? (
            <div className="text-sm font-semibold text-blue-900">{eyebrow}</div>
          ) : null}
          <h1 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
            {subtitle}
          </p>
          {resolvedCtas.length > 0 ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {resolvedCtas.map((c) => (
                <Link
                  key={c.href + c.label}
                  href={c.href}
                  className={
                    (c.variant ?? "primary") === "secondary"
                      ? "inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 hover:border-slate-400"
                      : "inline-flex items-center justify-center rounded-md bg-blue-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-950"
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
