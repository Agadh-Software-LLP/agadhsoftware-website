import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { schoolProjectsContent } from "@/content/school-project-features";

export const metadata: Metadata = {
  title: "School Projects",
  description:
    "School platform showcase focused on outcomes, product screens, rollout speed, and demo conversion.",
};

const screenHighlights: Array<{ title: string; position: string }> = [
  { title: "Attendance & Homework", position: "12% center" },
  { title: "Academics & Fees", position: "44% center" },
  { title: "Chat & Parent Profile", position: "78% center" },
];

const rolloutSteps: Array<{
  title: "Discover" | "Configure" | "Launch";
  copy: string;
}> = [
  {
    title: "Discover",
    copy: "Map priorities, workflows, and stakeholder goals.",
  },
  {
    title: "Configure",
    copy: "Set roles, automations, and communication templates.",
  },
  {
    title: "Launch",
    copy: "Go live with training, monitoring, and support.",
  },
];

export default function SchoolProjectsPage() {
  return (
    <div className="bg-slate-50">
      <PageHero
        eyebrow={schoolProjectsContent.hero.eyebrow}
        title="ParentConnect for Outcome-Driven Schools"
        subtitle="One operating layer for academics, communication, and day-to-day execution."
        ctas={[
          { label: "Book Demo", href: "/contact?intent=demo", variant: "primary" },
          { label: "View Screens", href: "#screens", variant: "secondary" },
        ]}
        variant="full"
      />

      <section className="border-y border-slate-200 bg-white">
        <Container>
          <div className="py-10 sm:py-12">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                  Leadership Impact
                </p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                  Value Visible in Seconds
                </h2>
              </div>
              <p className="max-w-xl text-sm text-slate-600">
                Fast scan outcomes that school leaders care about.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {schoolProjectsContent.proofMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-4 shadow-sm"
                >
                  <div className="text-2xl font-bold tracking-tight text-blue-950">
                    {metric.value}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-slate-900">{metric.label}</div>
                  <div className="mt-2 text-xs leading-relaxed text-slate-600">
                    {metric.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="capability-map" className="bg-slate-50">
        <Container>
          <div className="py-12 sm:py-16">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                Capability Map
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Core Modules, No Long Reading
              </h2>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                Pick modules and activate in phases.
              </p>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              {schoolProjectsContent.featureGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"
                >
                  <h3 className="text-lg font-semibold tracking-tight text-slate-950 sm:text-xl">
                    {group.title}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.features.map((feature) => (
                      <li
                        key={feature.title}
                        className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-900 sm:text-sm"
                      >
                        {feature.title}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="screens" className="border-y border-slate-200 bg-white">
        <Container>
          <div className="py-12 sm:py-16">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                Product Screens
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                See ParentConnect in Action
              </h2>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                A quick visual pass of daily school workflows.
              </p>
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-900/95 shadow-md">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src="/school-projects/parentconnect-mobile-suite.png"
                    alt="ParentConnect mobile screenshots showing academics, fees, chat, and profile"
                    fill
                    sizes="(min-width: 1024px) 62vw, 100vw"
                    className="object-contain p-4 sm:p-6"
                  />
                </div>
                <div className="border-t border-slate-700 bg-slate-900 px-4 py-3 text-xs font-medium text-slate-200 sm:text-sm">
                  Unified mobile suite for parents and school teams.
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/school-projects/school-context.jpg"
                    alt="School environment context for ParentConnect deployment"
                    fill
                    sizes="(min-width: 1024px) 38vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="border-t border-slate-200 bg-white px-4 py-3 text-xs font-medium text-slate-700 sm:text-sm">
                  Built for real school operations and communication.
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {screenHighlights.map((shot) => (
                <div
                  key={shot.title}
                  className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
                >
                  <div className="relative aspect-[4/5] w-full bg-slate-100">
                    <Image
                      src="/school-projects/parentconnect-mobile-suite.png"
                      alt={shot.title}
                      fill
                      sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 100vw"
                      className="object-cover"
                      style={{ objectPosition: shot.position }}
                    />
                  </div>
                  <div className="border-t border-slate-200 px-4 py-3 text-sm font-semibold text-slate-800">
                    {shot.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50">
        <Container>
          <div className="py-12 sm:py-16">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                Rollout Plan
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                3 Steps to Go Live
              </h2>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                Move from planning to adoption quickly.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {rolloutSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="text-xs font-bold uppercase tracking-[0.22em] text-blue-700">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-2 text-xl font-semibold text-slate-950">{step.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{step.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-gradient-to-br from-blue-950 via-slate-950 to-slate-950 text-white">
        <Container>
          <div className="py-14 sm:py-20">
            <div className="mx-auto max-w-3xl rounded-3xl border border-white/15 bg-white/5 p-8 text-center backdrop-blur sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
                Ready to Evaluate
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Book a Live ParentConnect Walkthrough
              </h2>
              <p className="mt-3 text-sm text-white/80 sm:text-base">
                See your exact workflows mapped in a focused demo, then receive a rollout plan.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Link
                  href="/contact?intent=demo"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-950 hover:bg-slate-100 transition-colors"
                >
                  Book Demo
                </Link>
                <Link
                  href="/contact?intent=proposal"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-white bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  Request Proposal
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
