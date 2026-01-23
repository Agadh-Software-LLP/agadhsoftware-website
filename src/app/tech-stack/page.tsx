import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { techStack } from "@/content/tech-stack";

export const metadata: Metadata = {
  title: "Tech Stack",
  description:
    "Backend, frontend, database, cloud, and DevOps technologies we deliver with — designed for enterprise durability.",
};

function Pill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-700">
      {label}
    </span>
  );
}

export default function TechStackPage() {
  return (
    <div>
      <PageHero
        title="Technology Stack"
        subtitle="Modern engineering across backend, frontend, cloud, and DevOps  chosen for correctness, performance, and maintainability."
        cta={{ label: "Discuss Architecture", href: "/contact" }}
      />

      <section className="bg-white">
        <Container>
          <div className="py-12 sm:py-16">
            <SectionHeading
              eyebrow="Capabilities"
              title="Tools we build with"
              description={
                "We select technologies based on business constraints  security needs, integration complexity, scale, and team maturity  and we optimize for simplicity in operations."
              }
            />

            <div className="mt-8 max-w-3xl space-y-4 text-sm leading-relaxed text-slate-600">
              <p>
                Our default choices are proven frameworks and cloud services that
                reduce long-term maintenance burden. We standardize conventions
                (coding, deployments, monitoring) so delivery stays predictable.
              </p>
              <p>
                The exact stack is always tailored to your domain and existing
                ecosystem. We aim for the smallest set of technologies that can
                satisfy correctness, performance, and auditability.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <div className="text-sm font-semibold text-slate-950">Backend</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {techStack.backend.map((t) => (
                    <Pill key={t} label={t} />
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <div className="text-sm font-semibold text-slate-950">Frontend</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {techStack.frontend.map((t) => (
                    <Pill key={t} label={t} />
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <div className="text-sm font-semibold text-slate-950">Databases</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {techStack.databases.map((t) => (
                    <Pill key={t} label={t} />
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <div className="text-sm font-semibold text-slate-950">Cloud & DevOps</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[...techStack.cloud, ...techStack.devops].map((t) => (
                    <Pill key={t} label={t} />
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                <div className="text-sm font-semibold text-slate-950">
                  Testing & reviews
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Automated tests where they add value, disciplined code reviews,
                  and clear standards  built into delivery.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                <div className="text-sm font-semibold text-slate-950">
                  Observability
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Logging, metrics, and alerts so your team can operate the
                  system confidently and respond quickly.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                <div className="text-sm font-semibold text-slate-950">
                  Secure by default
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Identity, authorization, audits, and data protections included
                  early  not bolted on after launch.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
