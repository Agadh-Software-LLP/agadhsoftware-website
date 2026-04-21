import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { schoolProjectsContent } from "@/content/school-project-features";

export const metadata: Metadata = {
  title: "School Projects",
  description:
    "School operations platform capabilities across academics, parent engagement, safety, finance, and compliance.",
};

export default function SchoolProjectsPage() {
  return (
    <div>
      <PageHero
        eyebrow={schoolProjectsContent.hero.eyebrow}
        title={schoolProjectsContent.hero.title}
        subtitle={schoolProjectsContent.hero.subtitle}
        ctas={[...schoolProjectsContent.hero.ctas]}
        variant="full"
      />

      <section className="bg-white border-b border-slate-100">
        <Container>
          <div className="py-12 sm:py-16">
            <SectionHeading
              eyebrow="Leadership Impact"
              title={schoolProjectsContent.intro.title}
              description={schoolProjectsContent.intro.description}
            />

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {schoolProjectsContent.proofMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-5"
                >
                  <div className="text-2xl font-bold text-blue-950">{metric.value}</div>
                  <div className="mt-2 text-sm font-semibold text-slate-900">
                    {metric.label}
                  </div>
                  <div className="mt-2 text-sm leading-relaxed text-slate-600">
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
            <SectionHeading
              eyebrow="Capability Map"
              title="Core product blocks built for day-to-day school execution"
              description="Each capability area addresses operational friction while improving visibility for principals, coordinators, and parent communication teams."
            />

            <div className="mt-10 space-y-10">
              {schoolProjectsContent.featureGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
                >
                  <h3 className="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
                    {group.title}
                  </h3>
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
                    {group.description}
                  </p>
                  <FeatureGrid features={group.features} />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white border-t border-slate-100">
        <Container>
          <div className="py-12 sm:py-16">
            <SectionHeading
              eyebrow="Product Screens"
              title="ParentConnect screenshots from core school workflows"
              description="A quick view of how parents and school teams interact across academics, fees, chat, and profile management."
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/school-projects/parentconnect-mobile-suite.png"
                    alt="ParentConnect mobile screenshots showing academics, fees, chat, and profile"
                    fill
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="object-contain"
                  />
                </div>
                <div className="border-t border-slate-200 bg-white px-4 py-3 text-sm text-slate-600">
                  Unified parent app experience for daily academic and communication workflows.
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/school-projects/school-context.jpg"
                    alt="School environment context for ParentConnect deployment"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="border-t border-slate-200 bg-white px-4 py-3 text-sm text-slate-600">
                  Designed for real school operations, stakeholder communication, and execution at scale.
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Attendance & Homework",
                  position: "12% center",
                },
                {
                  title: "Academics & Fees",
                  position: "44% center",
                },
                {
                  title: "Chat & Parent Profile",
                  position: "78% center",
                },
              ].map((shot) => (
                <div
                  key={shot.title}
                  className="overflow-hidden rounded-xl border border-slate-200 bg-white"
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
                  <div className="border-t border-slate-200 px-4 py-3 text-sm font-medium text-slate-700">
                    {shot.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-gradient-to-br from-blue-950 via-slate-950 to-slate-950 text-white">
        <Container>
          <div className="py-14 sm:py-20">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {schoolProjectsContent.closing.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
                {schoolProjectsContent.closing.description}
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={schoolProjectsContent.closing.cta.href}
                  className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-950 hover:bg-slate-100 shadow-md hover:shadow-lg transition-all duration-200"
                >
                  {schoolProjectsContent.closing.cta.label}
                </Link>
                <Link
                  href="/contact?intent=proposal"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-white bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-all duration-200"
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
