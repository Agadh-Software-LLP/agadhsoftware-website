import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import {
  ArrowRight,
  BarChart3,
  Bell,
  Bot,
  BrainCircuit,
  BusFront,
  CalendarClock,
  CheckCircle2,
  ClipboardCheck,
  FileSpreadsheet,
  House,
  LockKeyhole,
  MessageSquareHeart,
  NotebookPen,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  UserPlus,
  UserRoundCheck,
  Users,
  WalletCards,
  type LucideIcon,
} from "lucide-react";
import { RoleExperienceTabs } from "@/components/sections/RoleExperienceTabs";
import {
  type SchoolIconName,
  schoolProjectsContent,
} from "@/content/school-project-features";

export const metadata: Metadata = {
  title: "AgadhEducare | School Management SaaS",
  description:
    "Premium school management SaaS website showcasing capability map, AI intelligence, automation workflows, and enterprise-ready operations.",
};

const iconMap: Record<SchoolIconName, LucideIcon> = {
  CalendarClock,
  NotebookPen,
  FileSpreadsheet,
  UserRoundCheck,
  ClipboardCheck,
  ShieldAlert,
  Bell,
  MessageSquareHeart,
  Users,
  House,
  BusFront,
  WalletCards,
  BrainCircuit,
  BarChart3,
  Bot,
  UserPlus,
};

export default function SchoolProjectsPage() {
  return (
    <div className="relative bg-white pb-24 sm:pb-0">
      <section className="relative overflow-hidden border-b border-white/20 bg-gradient-to-br from-blue-950 via-indigo-900 to-amber-800 text-white">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-28 -left-20 h-72 w-72 rounded-full bg-indigo-400/25 blur-3xl" />
          <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-amber-300/20 blur-3xl" />
          <div className="absolute top-1/3 right-1/4 h-64 w-64 rounded-full bg-blue-300/20 blur-3xl" />
        </div>

        <Container>
          <div className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:py-24">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">
                {schoolProjectsContent.hero.eyebrow}
              </span>
              <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {schoolProjectsContent.hero.title}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-blue-100 sm:text-lg">
                {schoolProjectsContent.hero.subtitle}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {schoolProjectsContent.hero.ctas.map((cta) => (
                  <Link
                    key={cta.href + cta.label}
                    href={cta.href}
                    className={
                      cta.variant === "secondary"
                        ? "inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/15 transition-colors"
                        : "inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-950 hover:bg-blue-50 transition-colors"
                    }
                  >
                    {cta.label}
                  </Link>
                ))}
              </div>

              <ul className="mt-8 space-y-3">
                {schoolProjectsContent.hero.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-blue-50 sm:text-base">
                    <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-amber-200" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mx-auto w-full max-w-xl">
              <div className="rounded-[28px] border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-xl sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-100">
                  Animated dashboard preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                  Admin Command Center
                </h2>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {schoolProjectsContent.dashboard.metrics.map((metric) => (
                    <div key={metric.label} className="rounded-xl border border-white/20 bg-white/10 p-3">
                      <p className="text-lg font-bold text-white">{metric.value}</p>
                      <p className="mt-1 text-xs text-blue-100">{metric.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 space-y-2 rounded-2xl border border-white/20 bg-black/20 p-4">
                  {schoolProjectsContent.dashboard.actionsRequired.map((action) => (
                    <div key={action} className="flex items-start gap-2 text-sm text-blue-50">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                      <span>{action}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -left-3 top-7 hidden rounded-xl border border-white/30 bg-white px-3 py-2 text-xs font-semibold text-slate-900 shadow-md sm:flex">
                Attendance sync: live
              </div>
              <div className="absolute -right-4 top-1/2 hidden -translate-y-1/2 rounded-xl border border-white/20 bg-amber-200 px-3 py-2 text-xs font-semibold text-amber-950 shadow-md sm:flex">
                AI Alerts: 2 high-priority
              </div>
              <div className="absolute right-8 -bottom-4 hidden rounded-xl border border-white/20 bg-indigo-100 px-3 py-2 text-xs font-semibold text-indigo-900 shadow-md sm:flex">
                Timetable ready for publish
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <Container>
          <div className="grid gap-6 py-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">Trust</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                {schoolProjectsContent.trustBar.title}
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {schoolProjectsContent.trustBar.logos.map((logo) => (
                  <span
                    key={logo}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600"
                  >
                    {logo}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-1">
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700">
                <ShieldCheck className="h-4 w-4 text-blue-800" />
                <span>{schoolProjectsContent.trustBar.badges[0]}</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700">
                <CheckCircle2 className="h-4 w-4 text-blue-800" />
                <span>{schoolProjectsContent.trustBar.badges[1]}</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700">
                <LockKeyhole className="h-4 w-4 text-blue-800" />
                <span>{schoolProjectsContent.trustBar.badges[2]}</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container>
          <div className="py-14 sm:py-18">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {schoolProjectsContent.proofMetrics.map((metric) => (
                <article
                  key={metric.label}
                  className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white via-blue-50/40 to-amber-50/40 p-5 shadow-sm"
                >
                  <p className="text-3xl font-bold tracking-tight text-blue-950">{metric.value}</p>
                  <p className="mt-2 text-sm font-semibold text-slate-900">{metric.label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{metric.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="capability-map" className="border-y border-slate-200 bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <Container>
          <div className="py-16 sm:py-20">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                Capability Map
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Product depth with clear module ownership
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                {schoolProjectsContent.capabilityMap.description}
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {schoolProjectsContent.capabilityMap.groups.map((group, index) => (
                <article
                  key={group.title}
                  className={`rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 ${
                    index === schoolProjectsContent.capabilityMap.groups.length - 1
                      ? "lg:col-span-2"
                      : ""
                  }`}
                >
                  <h3 className="text-xl font-semibold tracking-tight text-slate-950">{group.title}</h3>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {group.items.map((item) => {
                      const Icon = iconMap[item.icon];

                      return (
                        <div
                          key={item.title}
                          className="group rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
                        >
                          <div className="flex items-start gap-3">
                            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-900">
                              <Icon className="h-4 w-4" />
                            </span>
                            <div>
                              <h4 className="text-sm font-semibold text-slate-900 sm:text-base">
                                {item.title}
                              </h4>
                              <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                                {item.blurb}
                              </p>
                              <p className="mt-1 text-xs leading-relaxed text-slate-500 md:max-h-0 md:overflow-hidden md:transition-all md:duration-300 md:group-hover:max-h-20">
                                {item.detail}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="automation" className="bg-white">
        <Container>
          <div className="py-16 sm:py-20">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                Smart Automation
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                {schoolProjectsContent.automation.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                {schoolProjectsContent.automation.description}
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {schoolProjectsContent.automation.flows.map((flow) => {
                const Icon = iconMap[flow.icon];

                return (
                  <article
                    key={flow.title}
                    className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-indigo-50/30 to-amber-50/30 p-5 shadow-sm"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-blue-900 shadow-sm">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 text-lg font-semibold text-slate-950">{flow.title}</h3>
                    <p className="mt-3 flex items-center gap-2 text-sm font-medium text-slate-700">
                      <span>{flow.from}</span>
                      <ArrowRight className="h-4 w-4 text-blue-700" />
                      <span>{flow.to}</span>
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{flow.summary}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section id="modules" className="border-y border-slate-200 bg-slate-50">
        <Container>
          <div className="py-16 sm:py-20">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                Product Modules
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                {schoolProjectsContent.modules.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                {schoolProjectsContent.modules.description}
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {schoolProjectsContent.modules.cards.map((module) => {
                const Icon = iconMap[module.icon];

                return (
                  <article
                    key={module.title}
                    className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="relative aspect-[16/10] w-full bg-slate-100">
                      <Image
                        src={module.image.src}
                        alt={module.image.alt}
                        fill
                        sizes="(min-width: 1280px) 30vw, (min-width: 768px) 46vw, 100vw"
                        className="object-cover"
                        style={{ objectPosition: module.image.position }}
                      />
                    </div>

                    <div className="p-5">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-blue-900">
                        <Icon className="h-4 w-4" />
                      </span>
                      <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-950">
                        {module.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{module.benefit}</p>

                      <ul className="mt-4 space-y-2">
                        {module.points.map((point) => (
                          <li key={point} className="flex items-start gap-2 text-sm text-slate-700">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-800" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        href={module.cta.href}
                        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-800 hover:text-blue-950"
                      >
                        {module.cta.label}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section id="command-center" className="bg-slate-950 text-white">
        <Container>
          <div className="grid gap-8 py-16 sm:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
                Dashboard Preview
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                {schoolProjectsContent.dashboard.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-blue-100 sm:text-base">
                {schoolProjectsContent.dashboard.description}
              </p>

              <div className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-200">
                  Live Metrics
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-3">
                  {schoolProjectsContent.dashboard.metrics.map((metric) => (
                    <div key={metric.label} className="rounded-xl border border-white/15 bg-black/15 p-3">
                      <p className="text-xl font-bold">{metric.value}</p>
                      <p className="mt-1 text-xs text-blue-100">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <article className="rounded-2xl border border-white/15 bg-white/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-200">
                  Actions Required
                </p>
                <ul className="mt-4 space-y-3">
                  {schoolProjectsContent.dashboard.actionsRequired.map((action) => (
                    <li key={action} className="flex items-start gap-2 text-sm text-blue-50">
                      <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-2xl border border-white/15 bg-white/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-200">
                  AI Insights
                </p>
                <ul className="mt-4 space-y-3">
                  {schoolProjectsContent.dashboard.insights.map((insight) => (
                    <li key={insight} className="flex items-start gap-2 text-sm text-blue-50">
                      <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-indigo-200" />
                      <span>{insight}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </Container>
      </section>

      <section id="ai" className="border-y border-slate-200 bg-gradient-to-br from-blue-50 via-indigo-50 to-amber-50">
        <Container>
          <div className="py-16 sm:py-20">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                AI Intelligence
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                {schoolProjectsContent.aiAssistant.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                {schoolProjectsContent.aiAssistant.description}
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {schoolProjectsContent.aiAssistant.examples.map((example) => (
                <article
                  key={example.signal}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <p className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-blue-800">
                    <Sparkles className="h-3.5 w-3.5" />
                    AI Signal
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-slate-950">{example.signal}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{example.action}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="roles" className="bg-white">
        <Container>
          <div className="py-16 sm:py-20">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                Role Experience
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                {schoolProjectsContent.roleExperience.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                {schoolProjectsContent.roleExperience.description}
              </p>
            </div>

            <div className="mt-8">
              <RoleExperienceTabs roles={schoolProjectsContent.roleExperience.items} />
            </div>
          </div>
        </Container>
      </section>

      <section id="benefits" className="border-y border-slate-200 bg-slate-50">
        <Container>
          <div className="py-16 sm:py-20">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                Benefits
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Outcomes that leadership teams can measure
              </h2>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {schoolProjectsContent.benefits.map((benefit) => (
                <article
                  key={benefit.value + benefit.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <p className="text-2xl font-bold tracking-tight text-blue-950">{benefit.value}</p>
                  <p className="mt-2 text-sm font-semibold text-slate-900">{benefit.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{benefit.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="pricing" className="bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-white">
        <Container>
          <div className="py-16 sm:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">Pricing and CTA</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                {schoolProjectsContent.pricing.title}
              </h2>
              <p className="mt-4 text-sm text-blue-100 sm:text-base">
                {schoolProjectsContent.pricing.description}
              </p>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {schoolProjectsContent.pricing.tiers.map((tier) => (
                <article
                  key={tier.name}
                  className={`rounded-3xl border p-6 ${
                    tier.featured
                      ? "border-amber-300/60 bg-gradient-to-b from-amber-200/10 to-white/5 shadow-lg"
                      : "border-white/15 bg-white/5"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-200">{tier.name}</p>
                  <h3 className="mt-2 text-xl font-semibold">{tier.subtitle}</h3>

                  <ul className="mt-5 space-y-3">
                    {tier.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-blue-50">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-200" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={tier.cta.href}
                    className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-blue-950 hover:bg-blue-50 transition-colors"
                  >
                    {tier.cta.label}
                  </Link>
                </article>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/contact?intent=demo"
                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-950 hover:bg-blue-50 transition-colors"
              >
                Start Free Trial
              </Link>
              <Link
                href="/contact?intent=proposal"
                className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/15 transition-colors"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <div className="fixed bottom-4 left-0 right-0 z-40 px-4 sm:hidden">
        <Link
          href="/contact?intent=demo"
          className="inline-flex w-full items-center justify-center rounded-full bg-blue-900 px-6 py-3 text-sm font-semibold text-white shadow-lg"
        >
          Book Demo
        </Link>
      </div>
    </div>
  );
}
