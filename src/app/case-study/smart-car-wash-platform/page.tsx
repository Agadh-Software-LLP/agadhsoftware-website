import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/layout/Container";
import { caseStudies, type AiFeatureBlock } from "@/content/case-studies";

export const metadata: Metadata = {
  title: "Smart Car Wash Platform — AI-Powered Operations",
  description:
    "A production-ready AI car wash platform featuring number plate detection, live queue management, revenue leakage analytics, WhatsApp campaigns, and more.",
};

const featureIcons: Record<string, string> = {
  "plate-detection": "📸",
  "smart-vehicle-entry": "🚗",
  "live-queue": "⏱️",
  "ai-job-summaries": "🤖",
  "anomaly-alerts": "🔔",
  "revenue-leakage": "📊",
  "whatsapp-campaigns": "💬",
  rbac: "🔒",
  "dashboard-intelligence": "🧠",
  "end-to-end-workflow": "🔄",
};

function FeatureBlock({ block }: { block: AiFeatureBlock }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div className="border-b border-slate-100 bg-gradient-to-r from-blue-950 to-blue-800 px-6 py-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl" role="img" aria-hidden="true">
            {featureIcons[block.id] ?? "✨"}
          </span>
          <h3 className="text-base font-semibold text-white">{block.title}</h3>
        </div>
      </div>
      <div className="divide-y divide-slate-100">
        <div className="px-6 py-4">
          <div className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-rose-600">
            Problem
          </div>
          <p className="text-sm leading-relaxed text-slate-600">
            {block.problem}
          </p>
        </div>
        <div className="px-6 py-4">
          <div className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700">
            Feature
          </div>
          <p className="text-sm leading-relaxed text-slate-700">
            {block.feature}
          </p>
        </div>
        <div className="bg-emerald-50 px-6 py-4">
          <div className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700">
            Measurable Outcome
          </div>
          <p className="text-sm leading-relaxed text-slate-700">
            {block.outcome}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function SmartCarWashPlatformPage() {
  const cs = caseStudies.smartCarWashPlatform;

  return (
    <div>
      {/* Hero */}
      <PageHero
        eyebrow="Case Study — Built & In Production"
        title={cs.title}
        subtitle={cs.subtitle}
        ctas={[
          {
            label: "Book Demo",
            href: "/contact?intent=demo",
            variant: "primary",
          },
          {
            label: "Request Proposal",
            href: "/contact?intent=proposal",
            variant: "secondary",
          },
          {
            label: "Talk to Architect",
            href: "/contact?intent=architect",
            variant: "secondary",
          },
        ]}
        variant="full"
      />

      {/* Overview */}
      <section className="bg-white border-b border-slate-100">
        <Container>
          <div className="py-10 sm:py-14">
            <div className="max-w-3xl rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm leading-relaxed text-slate-600">
              <div className="text-sm font-semibold text-slate-950">
                Overview
              </div>
              <p className="mt-2">{cs.overview}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Feature blocks — Problem → Feature → Outcome */}
      <section className="bg-slate-50">
        <Container>
          <div className="py-12 sm:py-16">
            <div className="mb-10 max-w-2xl">
              <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-900">
                Platform Features
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Problem → Feature → Outcome
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Each capability maps a real operational pain point to the
                feature we built and the measurable impact it delivers.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {cs.aiFeatures.map((block) => (
                <FeatureBlock key={block.id} block={block} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA strip */}
      <section className="bg-gradient-to-br from-blue-950 via-slate-950 to-slate-950 text-white">
        <Container>
          <div className="py-14 sm:py-20">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to see it in action?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
                Book a live demo, get a tailored proposal, or speak directly
                with the architect who built this platform.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact?intent=demo"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-950 hover:bg-slate-100 shadow-md hover:shadow-lg transition-all duration-200"
                >
                  Book Demo
                </Link>
                <Link
                  href="/contact?intent=proposal"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-white bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-all duration-200"
                >
                  Request Proposal
                </Link>
                <Link
                  href="/contact?intent=architect"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-white bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-all duration-200"
                >
                  Talk to Architect
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Disclaimer */}
      <section className="bg-white">
        <Container>
          <div className="py-8">
            <div className="max-w-3xl rounded-xl border border-slate-200 bg-slate-50 p-6 text-sm leading-relaxed text-slate-500">
              {cs.disclaimer}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
