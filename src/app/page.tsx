import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { site } from "@/content/site";

export default function Home() {
  return (
    <div>
      <section className="bg-white">
        <Container>
          <div className="py-12 sm:py-16">
            <SectionHeading
              eyebrow="How we work"
              title="Engineering depth with ownership mindset"
              description={
                "We prioritize correctness and strong foundations. We design, build, deploy, and maintain systems end-to-end — with clear communication and measurable quality."
              }
            />

            <FeatureGrid
              features={[
                {
                  title: "Architecture-first",
                  description:
                    "We model domains, data, and workflows before writing code — reducing churn and improving reliability.",
                },
                {
                  title: "Quality-first delivery",
                  description:
                    "Code reviews, testing strategy, and disciplined releases — built for long-term maintainability.",
                },
                {
                  title: "Long-term partnership",
                  description:
                    "Stable ownership after go-live: monitoring, support, enhancements, and roadmap execution.",
                },
              ]}
            />
          </div>
        </Container>
      </section>

      <section className="bg-slate-50">
        <Container>
          <div className="py-12 sm:py-16">
            <SectionHeading
              eyebrow="Highlighted work"
              title="Kodachadri Chits — CRP Platform"
              description={
                "A core platform initiative focusing on scalability, security, auditability, and operational clarity — owned end-to-end from design to maintenance."
              }
            />
            <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="max-w-2xl text-sm leading-relaxed text-slate-600">
                  Planning and building a full CRP (Core business platform) for
                  chit operations — with an engineering-driven approach to
                  correctness and long-term evolution.
                </div>
                <Link
                  href="/case-study/kodachadri-chits-crp"
                  className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 hover:border-slate-400"
                >
                  View Case Study
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container>
          <div className="py-12 sm:py-16">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
              <div className="max-w-2xl">
                <div className="text-sm font-semibold text-blue-900">
                  Next step
                </div>
                <div className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                  Let’s build something deep and right.
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Tell us what you’re building. We’ll respond with a clear plan
                  and a pragmatic path to delivery.
                </p>
                <div className="mt-7">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-md bg-blue-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-950"
                  >
                    Talk to Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
