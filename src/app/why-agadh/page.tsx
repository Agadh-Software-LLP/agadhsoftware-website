import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { FeatureGrid } from "@/components/sections/FeatureGrid";

export const metadata: Metadata = {
  title: "Why Agadh",
  description:
    "Why enterprises choose Agadh Software LLP: engineering depth, quality-first delivery, ownership mindset, and long-term maintenance support.",
};

export default function WhyAgadhPage() {
  return (
    <div>
      <PageHero
        title="Why Agadh"
        subtitle="We build trust by delivering correct systems and owning outcomes end-to-end — not just shipping features."
        cta={{ label: "Start a Conversation", href: "/contact" }}
      />

      <section className="bg-white">
        <Container>
          <div className="py-12 sm:py-16">
            <SectionHeading
              eyebrow="Our differentiators"
              title="Built for long-term partnership"
              description={
                "Enterprise clients choose partners who reduce risk. We do that through engineering rigor, transparent communication, and ownership after go-live."
              }
            />

            <div className="mt-8 max-w-3xl space-y-4 text-sm leading-relaxed text-slate-600">
              <p>
                Most software failures happen when fundamentals are skipped: weak
                data models, unclear requirements, poor access control, and no
                plan for operations. We work differently — architect first,
                validate workflows, and build systems that can be operated and
                evolved safely.
              </p>
              <p>
                You get a team that communicates clearly, documents decisions,
                and treats your system like a long-lived asset. That means fewer
                surprises during delivery and fewer production issues after
                launch.
              </p>
            </div>

            <FeatureGrid
              features={[
                {
                  title: "Engineering depth",
                  description:
                    "Architecture-first thinking, strong data models, and pragmatic trade-offs grounded in real constraints.",
                },
                {
                  title: "Quality-first development",
                  description:
                    "Disciplined code reviews, testing strategy, and release hygiene to avoid fragile systems.",
                },
                {
                  title: "Ownership mindset",
                  description:
                    "We take responsibility for delivery, deployments, and stability — with clear accountability.",
                },
                {
                  title: "Long-term maintenance",
                  description:
                    "Monitoring, incident response, and iterative improvements to keep systems healthy over time.",
                },
                {
                  title: "Transparent communication",
                  description:
                    "Clear milestones, frequent demos, and honest status reporting — no surprises.",
                },
                {
                  title: "Correctness & scalability",
                  description:
                    "We design for auditability, reliability, and future growth from the beginning.",
                },
              ]}
            />

            <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
              <div className="max-w-3xl">
                <div className="text-sm font-semibold text-blue-900">
                  What to expect
                </div>
                <div className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                  Clear milestones and visible quality
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  We share a delivery plan early, run regular demos, and keep
                  architecture and operational readiness visible. You always
                  know what&apos;s shipped, what&apos;s next, and what risks exist — with
                  practical mitigation.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
