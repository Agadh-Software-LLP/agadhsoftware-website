import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { industries } from "@/content/industries";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Domains we support: financial services, chit fund / CRP systems, process automation, and custom enterprise platforms.",
};

export default function IndustriesPage() {
  return (
    <div>
      <PageHero
        title="Industries & Solutions"
        subtitle="We build durable systems for domains where correctness, auditability, and reliability matter."
        cta={{ label: "Discuss Your Domain", href: "/contact" }}
      />

      <section className="bg-white">
        <Container>
          <div className="py-12 sm:py-16">
            <SectionHeading
              eyebrow="Where we fit"
              title="Engineering-driven solutions"
              description={
                "We specialize in complex workflows, secure access control, and audit-ready systems for operational scale."
              }
            />

            <div className="mt-8 max-w-3xl space-y-4 text-sm leading-relaxed text-slate-600">
              <p>
                Our strongest fit is in domains where data integrity and process
                correctness are non-negotiable. We map workflows end-to-end,
                design for clear approvals and audit trails, and ensure the
                system remains understandable for operators and administrators.
              </p>
              <p>
                We can support greenfield builds or incremental modernization 
                improving performance, fixing fragile modules, and adding
                observability so teams can operate the system with confidence.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {industries.map((i) => (
                <div
                  key={i.title}
                  className="rounded-xl border border-slate-200 bg-white p-6"
                >
                  <div className="text-base font-semibold text-slate-950">
                    {i.title}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {i.summary}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                <div className="text-sm font-semibold text-slate-950">
                  Workflow automation
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Multi-step processes with approvals, roles, and audit logs 
                  designed for clarity and control.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                <div className="text-sm font-semibold text-slate-950">
                  Secure enterprise platforms
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Access control, data segregation, and traceability  built for
                  compliance-minded operations.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                <div className="text-sm font-semibold text-slate-950">
                  Reporting & auditability
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Consistent data models and accurate reports that match the
                  underlying business workflows.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
