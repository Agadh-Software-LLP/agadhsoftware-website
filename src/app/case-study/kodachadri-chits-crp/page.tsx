import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { caseStudies } from "@/content/case-studies";

export const metadata: Metadata = {
  title: "Case Study — Kodachadri Chits CRP",
  description:
    "A high-level overview of building a core CRP platform with focus on correctness, scalability, security, and long-term support.",
};

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-600">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-blue-900" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function KodachadriCrpCaseStudyPage() {
  const cs = caseStudies.kodachadriChitsCrp;

  return (
    <div>
      <PageHero
        title={cs.title}
        subtitle={cs.subtitle}
        cta={{ label: "Talk to Us", href: "/contact" }}
      />

      <section className="bg-white">
        <Container>
          <div className="py-12 sm:py-16">
            <div className="max-w-3xl space-y-10">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm leading-relaxed text-slate-600">
                <div className="text-sm font-semibold text-slate-950">
                  Overview
                </div>
                <p className="mt-2">
                  This engagement focuses on building a Core CRP platform that
                  can scale operational workflows while maintaining correctness
                  and auditability. The goal is a system that operators can run
                  confidently  and engineers can evolve without repeated
                  rewrites.
                </p>
              </div>

              <div>
                <SectionHeading
                  eyebrow="Context"
                  title="Business challenge"
                  description="A core platform needs to unify workflows, ensure auditability, and remain maintainable as operations grow."
                />
                <BulletList items={cs.challenge} />
              </div>

              <div>
                <SectionHeading
                  eyebrow="Delivery"
                  title="End-to-end approach"
                  description="We treat the platform as a long-lived system  shaped through discovery, architecture, careful implementation, and reliable operations."
                />
                <BulletList items={cs.approach} />
              </div>

              <div>
                <SectionHeading
                  eyebrow="Engineering"
                  title="Architecture, scalability & security"
                  description="Designed for correctness, secure access control, and strong data integrity with future-ready scalability."
                />
                <BulletList items={cs.architectureFocus} />
              </div>

              <div>
                <SectionHeading
                  eyebrow="Operations"
                  title="Ongoing maintenance & support model"
                  description="Clear ownership after go-live: monitoring, incident response, and iterative improvements over time."
                />
                <BulletList items={cs.operationsModel} />
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-sm leading-relaxed text-slate-600">
                <div className="text-sm font-semibold text-slate-950">
                  Outcomes we optimize for
                </div>
                <ul className="mt-3 space-y-2">
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-900" />
                    <span>
                      Clear operator workflows with approvals and audit trails.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-900" />
                    <span>
                      Data integrity and secure access control across the system.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-900" />
                    <span>
                      A maintainable architecture that can grow with operations.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-sm leading-relaxed text-slate-600">
                {cs.disclaimer}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
