import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { site } from "@/content/site";
import { owners } from "@/content/owners";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Agadh Software LLP: an engineering-first software partner focused on correctness, scalability, and long-term ownership.",
};

export default function AboutPage() {
  return (
    <div>
      <PageHero
        title="About Agadh Software"
        subtitle="An engineering-first software development partner built for long-term ownership and enterprise reliability."
        cta={{ label: "Talk to Us", href: "/contact" }}
      />

      <section className="bg-white">
        <Container>
          <div className="py-12 sm:py-16">
            <SectionHeading
              eyebrow="Our mindset"
              title="Build strong foundations. Avoid shortcuts."
              description={
                "We focus on deep understanding of the domain, correctness in data and workflows, and architectures that stay maintainable as your business grows."
              }
            />

            <div className="mt-8 max-w-3xl space-y-4 text-sm leading-relaxed text-slate-600">
              <p>{site.coreMessage}</p>
              <p>
                We operate with a partnership mindset: we aim to become the team
                that owns outcomes — not just deliverables. That means clear
                communication, careful engineering trade-offs, and disciplined
                delivery practices.
              </p>
              <p>
                As an IT solutions company, we help teams modernize legacy
                systems, build new digital products, and improve operational
                workflows using secure, scalable, and cost-aware engineering.
              </p>
            </div>

            <FeatureGrid
              features={[
                {
                  title: "Engineering depth",
                  description:
                    "We prioritize domain modeling, architecture, and reliability practices that reduce long-term risk.",
                },
                {
                  title: "Quality-first",
                  description:
                    "Testing strategy, strong reviews, and release discipline — built into delivery, not added later.",
                },
                {
                  title: "Ownership",
                  description:
                    "We support systems after go-live with monitoring, maintenance, and a pragmatic roadmap.",
                },
              ]}
            />

            <div className="mt-12">
              <SectionHeading
                eyebrow="Leadership"
                title="Meet the owners"
                description="A small team with high ownership — we stay close to delivery and accountable for outcomes."
              />

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {owners.map((owner) => (
                  <div
                    key={owner.name}
                    className="rounded-2xl border border-slate-200 bg-white p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-slate-100 ring-1 ring-slate-200">
                        {owner.imageSrc ? (
                          <Image
                            src={owner.imageSrc}
                            alt={owner.name}
                            fill
                            sizes="56px"
                            className="object-cover"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center text-sm font-semibold text-slate-700">
                            {owner.name.slice(0, 1).toUpperCase()}
                          </div>
                        )}
                      </div>

                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-slate-950">
                          {owner.name}
                        </div>
                        <div className="mt-0.5 text-xs font-medium text-slate-600">
                          {owner.role}
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-slate-600">
                      {owner.bio}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50">
        <Container>
          <div className="py-12 sm:py-16">
            <SectionHeading
              eyebrow="What we do"
              title="End-to-end IT solutions for enterprises"
              description={
                "We design and deliver full-stack systems — from backend architecture to user experiences — with security, reliability, and maintainability as default requirements."
              }
            />

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="text-sm font-semibold text-slate-950">
                  Custom software development
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Greenfield product builds, internal tools, and core platforms
                  with clear domain boundaries, correct data flows, and scalable
                  APIs.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="text-sm font-semibold text-slate-950">
                  Modernization & reliability
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Incremental modernization of legacy modules, performance
                  improvements, security hardening, and observability so systems
                  stay healthy after go-live.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="text-sm font-semibold text-slate-950">
                  Architecture & engineering leadership
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Architecture reviews, solution design, technical roadmaps, and
                  hands-on engineering leadership to align delivery with business
                  outcomes.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="text-sm font-semibold text-slate-950">
                  Long-term ownership
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Release management, monitoring, support, and enhancements — a
                  stable team that continues to own your system as it evolves.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container>
          <div className="py-12 sm:py-16">
            <SectionHeading
              eyebrow="How we engage"
              title="Simple, transparent delivery model"
              description={
                "We keep scope, risks, and decisions visible. You get predictable execution with clear milestones and measurable quality."
              }
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="text-sm font-semibold text-slate-950">
                  1) Discovery
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Domain understanding, constraints, success metrics, and a
                  delivery plan that reduces risk early.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="text-sm font-semibold text-slate-950">
                  2) Build
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Architecture-first implementation with reviews, testing, and a
                  release cadence aligned to your operations.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="text-sm font-semibold text-slate-950">
                  3) Own
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Monitoring, maintenance, enhancements, and roadmap support —
                  we stay accountable for outcomes post-launch.
                </p>
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-8 sm:p-10">
              <div className="max-w-2xl">
                <div className="text-sm font-semibold text-blue-900">
                  Work with us
                </div>
                <div className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                  If you need a team that owns delivery end-to-end.
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Share your goals, timelines, and constraints. We’ll respond with
                  a pragmatic plan and a clear path to a stable system.
                </p>
                <div className="mt-7">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-md bg-blue-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-950"
                  >
                    Start a conversation
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
