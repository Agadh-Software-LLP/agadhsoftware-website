import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import {
  ArrowRight,
  BarChart3,
  Bell,
  BookOpenCheck,
  Building2,
  BusFront,
  CalendarClock,
  CheckCircle2,
  ClipboardCheck,
  Eye,
  FileSpreadsheet,
  GraduationCap,
  Heart,
  LucideIcon,
  MessageSquareHeart,
  School,
  ShieldCheck,
  Smartphone,
  Smile,
  Sparkles,
  TrendingUp,
  Trophy,
  UserRoundCheck,
  Users,
  WalletCards,
} from "lucide-react";
import {
  type EducareIconName,
  schoolProjectsContent,
} from "@/content/school-project-features";

export const metadata: Metadata = {
  title: "Agadh Educare | Complete Digital Transformation for Schools and Colleges",
  description:
    "Agadh Educare is a complete education management platform that connects management, teachers, parents, and students in one place — improving transparency, communication, and operational efficiency.",
};

const iconMap: Record<EducareIconName, LucideIcon> = {
  GraduationCap,
  Users,
  ClipboardCheck,
  CalendarClock,
  FileSpreadsheet,
  Trophy,
  WalletCards,
  Smartphone,
  BookOpenCheck,
  Bell,
  MessageSquareHeart,
  BusFront,
  BarChart3,
  ShieldCheck,
  Sparkles,
  School,
  UserRoundCheck,
  Heart,
  Eye,
  TrendingUp,
  Building2,
  Smile,
};

function Icon({ name, className }: { name: EducareIconName; className?: string }) {
  const Cmp = iconMap[name];
  return <Cmp className={className} />;
}

export default function EducarePage() {
  const c = schoolProjectsContent;

  return (
    <div className="relative bg-white pb-24 sm:pb-0">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/20 bg-gradient-to-br from-blue-950 via-indigo-900 to-amber-800 text-white">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-28 -left-20 h-72 w-72 rounded-full bg-indigo-400/25 blur-3xl" />
          <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-amber-300/20 blur-3xl" />
          <div className="absolute top-1/3 right-1/4 h-64 w-64 rounded-full bg-blue-300/20 blur-3xl" />
        </div>

        <Container>
          <div className="grid gap-10 py-12 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:py-16">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">
                {c.hero.eyebrow}
              </span>
              <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                {c.hero.titleHighlight && c.hero.title.includes(c.hero.titleHighlight)
                  ? (() => {
                      const [before, after] = c.hero.title.split(c.hero.titleHighlight);
                      return (
                        <>
                          {before}
                          <span className="bg-gradient-to-r from-amber-300 to-amber-400 bg-clip-text text-transparent">
                            {c.hero.titleHighlight}
                          </span>
                          {after}
                        </>
                      );
                    })()
                  : c.hero.title}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-blue-100 sm:text-lg">
                {c.hero.subtitle}
              </p>

              <ul className="mt-7 space-y-3">
                {c.hero.points.map((point) => (
                  <li
                    key={typeof point === "string" ? point : point.label}
                    className="flex items-start gap-3 text-sm text-blue-50 sm:text-base"
                  >
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-amber-200 ring-1 ring-white/15">
                      {typeof point === "string" ? (
                        <Sparkles className="h-3.5 w-3.5" />
                      ) : (
                        <Icon name={point.icon} className="h-3.5 w-3.5" />
                      )}
                    </span>
                    <span>{typeof point === "string" ? point : point.label}</span>
                  </li>
                ))}
              </ul>

              {c.hero.aiHighlight ? (
                <div className="mt-8 flex items-start gap-4 rounded-2xl border border-amber-300/30 bg-white/5 p-5 backdrop-blur">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg ring-1 ring-white/20">
                    <Icon name={c.hero.aiHighlight.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-amber-200 sm:text-base">
                      {c.hero.aiHighlight.title}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-blue-100 sm:text-sm">
                      {c.hero.aiHighlight.description}
                    </p>
                  </div>
                </div>
              ) : null}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {c.hero.ctas.map((cta) => (
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
            </div>

            {/* Hero visual: stacked device frames */}
            <div className="relative mx-auto w-full max-w-xl">
              <div className="relative rounded-[28px] border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-xl sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-100">
                  One platform • Three experiences
                </p>
                <div className="mt-4 overflow-hidden rounded-2xl border border-white/15 bg-black/20">
                  <Image
                    src="/educare/web/10_dashboard.png"
                    alt="Agadh Educare management portal preview"
                    width={1280}
                    height={760}
                    className="h-auto w-full"
                    priority
                  />
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="overflow-hidden rounded-2xl border border-white/15 bg-black/20">
                    <Image
                      src="/educare/mobile/m01_parent_home.png"
                      alt="Agadh Educare parent app"
                      width={540}
                      height={1170}
                      className="h-auto w-full"
                    />
                    <p className="px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-100">
                      Parent App
                    </p>
                  </div>
                  <div className="overflow-hidden rounded-2xl border border-white/15 bg-black/20">
                    <Image
                      src="/educare/mobile/m10_teacher_home.png"
                      alt="Agadh Educare teacher app"
                      width={540}
                      height={1170}
                      className="h-auto w-full"
                    />
                    <p className="px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-100">
                      Teacher App
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* TRUST BAR */}
      <section data-export-hide className="border-y border-slate-200 bg-white">
        <Container>
          <div className="grid gap-6 py-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">For Institutions</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                {c.trustBar.title}
              </h2>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">{c.trustBar.note}</p>
            </div>

            <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-1">
              {c.trustBar.badges.map((badge, i) => {
                const Ic = [Building2, Smartphone, GraduationCap][i] ?? CheckCircle2;
                return (
                  <div
                    key={badge}
                    className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700"
                  >
                    <Ic className="h-4 w-4 text-blue-800" />
                    <span>{badge}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* PROOF METRICS */}
      <section className="bg-white">
        <Container>
          <div className="py-14 sm:py-16">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {c.proofMetrics.map((metric) => (
                <article
                  key={metric.label}
                  className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white via-blue-50/40 to-amber-50/40 p-5 shadow-sm"
                >
                  <p className="text-2xl font-bold tracking-tight text-blue-950">{metric.value}</p>
                  <p className="mt-2 text-sm font-semibold text-slate-900">{metric.label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{metric.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* PROJECT OVERVIEW */}
      <section id="overview" className="border-y border-slate-200 bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <Container>
          <div className="py-16 sm:py-20">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">{c.overview.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                {c.overview.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                {c.overview.description}
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {c.overview.pillars.map((pillar) => (
                <article
                  key={pillar.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-900">
                    <Icon name={pillar.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-slate-950">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{pillar.description}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-5 sm:p-6">
              <p className="flex items-start gap-3 text-sm font-semibold text-blue-950 sm:text-base">
                <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                <span>{c.overview.valueLine}</span>
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* MAIN FEATURES */}
      <section id="features" className="bg-white">
        <Container>
          <div className="py-16 sm:py-20">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">{c.features.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                {c.features.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                {c.features.description}
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {c.features.categories.map((feat) => (
                <article
                  key={feat.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-900">
                    <Icon name={feat.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-slate-950 sm:text-lg">{feat.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{feat.description}</p>
                  <ul className="mt-4 space-y-2">
                    {feat.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-xs text-slate-700 sm:text-sm">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-800" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* AI SMART FEATURES */}
      <section id="ai" className="border-y border-slate-200 bg-gradient-to-br from-indigo-50 via-blue-50 to-amber-50">
        <Container>
          <div className="py-16 sm:py-20">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-800 shadow-sm">
                <Sparkles className="h-3.5 w-3.5" />
                {c.aiSmart.eyebrow}
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                {c.aiSmart.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                {c.aiSmart.description}
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {c.aiSmart.items.map((item) => (
                <article
                  key={item.title}
                  className="group rounded-2xl border border-white bg-white/85 p-5 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-sm">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-slate-950 sm:text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
                </article>
              ))}
            </div>

            {c.aiSmart.note ? (
              <p className="mt-8 text-xs italic text-slate-600 sm:text-sm">
                {c.aiSmart.note}
              </p>
            ) : null}
          </div>
        </Container>
      </section>

      {/* PARENT APP */}
      <section id="parent-app" className="border-y border-slate-200 bg-gradient-to-br from-blue-50 via-indigo-50 to-amber-50">
        <Container>
          <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="order-2 lg:order-1">
              <div className="relative mx-auto max-w-xs">
                <div className="rounded-[36px] border border-slate-200 bg-white p-2 shadow-2xl">
                  <Image
                    src={c.parentApp.image}
                    alt="Agadh Educare parent app home screen"
                    width={540}
                    height={1170}
                    className="h-auto w-full rounded-[28px]"
                  />
                </div>
                <div className="absolute -right-4 top-10 hidden rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-900 shadow-md sm:flex">
                  Multi-child support
                </div>
                <div className="absolute -left-4 bottom-12 hidden rounded-xl border border-amber-200 bg-amber-100 px-3 py-2 text-xs font-semibold text-amber-900 shadow-md sm:flex">
                  Daily updates
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">{c.parentApp.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                {c.parentApp.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                {c.parentApp.description}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {c.parentApp.benefits.map((b) => (
                  <div
                    key={b.title}
                    className="rounded-2xl border border-white bg-white/80 p-4 shadow-sm backdrop-blur"
                  >
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-blue-900">
                      <Icon name={b.icon} className="h-4 w-4" />
                    </span>
                    <h3 className="mt-3 text-sm font-semibold text-slate-950 sm:text-base">{b.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">{b.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* TEACHER APP */}
      <section id="teacher-app" className="bg-white">
        <Container>
          <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">{c.teacherApp.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                {c.teacherApp.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                {c.teacherApp.description}
              </p>

              <div className="mt-8 space-y-3">
                {c.teacherApp.benefits.map((b) => (
                  <div
                    key={b.title}
                    className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-900">
                      <Icon name={b.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-950 sm:text-base">{b.title}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">{b.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="relative mx-auto max-w-xs">
                <div className="rounded-[36px] border border-slate-200 bg-white p-2 shadow-2xl">
                  <Image
                    src={c.teacherApp.image}
                    alt="Agadh Educare teacher app home screen"
                    width={540}
                    height={1170}
                    className="h-auto w-full rounded-[28px]"
                  />
                </div>
                <div className="absolute -left-4 top-10 hidden rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-900 shadow-md sm:flex">
                  Quick attendance
                </div>
                <div className="absolute -right-4 bottom-12 hidden rounded-xl border border-emerald-200 bg-emerald-100 px-3 py-2 text-xs font-semibold text-emerald-900 shadow-md sm:flex">
                  Less paperwork
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* MANAGEMENT BENEFITS */}
      <section id="management" className="border-y border-slate-200 bg-slate-50">
        <Container>
          <div className="py-16 sm:py-20">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">{c.managementBenefits.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                {c.managementBenefits.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                {c.managementBenefits.description}
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {c.managementBenefits.items.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-900">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-slate-950 sm:text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* SCREENSHOTS */}
      <section id="screenshots" className="bg-white">
        <Container>
          <div className="py-16 sm:py-20">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">{c.screenshots.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                {c.screenshots.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                {c.screenshots.description}
              </p>
            </div>

            <div className="mt-12 space-y-16">
              {c.screenshots.groups.map((group) => (
                <div key={group.id}>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <div className="max-w-2xl">
                      <h3 className="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
                        {group.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600 sm:text-base">{group.description}</p>
                    </div>
                    <span className="inline-flex w-fit items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-blue-800">
                      {group.shape === "desktop" ? "Web Portal" : "Mobile App"}
                    </span>
                  </div>

                  {group.shape === "desktop" ? (
                    <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                      {group.items.map((item) => (
                        <figure
                          key={item.src}
                          className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                          <div className="relative aspect-[16/10] w-full bg-slate-100">
                            <Image
                              src={item.src}
                              alt={item.title}
                              fill
                              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                              className="object-cover object-top"
                            />
                          </div>
                          <figcaption className="p-4">
                            <p className="text-sm font-semibold text-slate-950">{item.title}</p>
                            <p className="mt-1 text-xs text-slate-600">{item.caption}</p>
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                  ) : (
                    <div className="mt-6 grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
                      {group.items.map((item) => (
                        <figure key={item.src} className="flex flex-col">
                          <div className="rounded-[28px] border border-slate-200 bg-white p-1.5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                            <div className="relative aspect-[9/19] w-full overflow-hidden rounded-[22px] bg-slate-100">
                              <Image
                                src={item.src}
                                alt={item.title}
                                fill
                                sizes="(min-width: 1024px) 18vw, (min-width: 640px) 28vw, 45vw"
                                className="object-cover"
                              />
                            </div>
                          </div>
                          <figcaption className="mt-3 text-center">
                            <p className="text-xs font-semibold text-slate-950 sm:text-sm">{item.title}</p>
                            <p className="mt-1 text-[11px] leading-snug text-slate-600 sm:text-xs">{item.caption}</p>
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                  )}
                  {group.footnote ? (
                    <div className="mt-6 flex items-start gap-3 rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 via-indigo-50 to-amber-50 px-5 py-4 shadow-sm">
                      <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-blue-600 text-white">
                        <Icon name="Sparkles" className="h-3.5 w-3.5" />
                      </span>
                      <p className="text-sm font-medium text-slate-800 sm:text-base">
                        {group.footnote}
                      </p>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* WHY CHOOSE */}
      <section id="why" className="border-y border-slate-200 bg-gradient-to-br from-blue-50 via-indigo-50 to-amber-50">
        <Container>
          <div className="py-16 sm:py-20">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">{c.whyChoose.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                {c.whyChoose.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                {c.whyChoose.description}
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {c.whyChoose.points.map((p) => (
                <article
                  key={p.title}
                  className="rounded-2xl border border-white bg-white/90 p-5 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-900 text-white">
                    <Icon name={p.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-slate-950 sm:text-lg">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.description}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CLOSING CTA */}
      <section id="cta" className="bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-white">
        <Container>
          <div className="py-16 sm:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">{c.closing.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{c.closing.title}</h2>
              <p className="mt-4 text-sm text-blue-100 sm:text-base">{c.closing.description}</p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Link
                  href={c.closing.primaryCta.href}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-7 py-3 text-sm font-semibold text-blue-950 hover:bg-blue-50 transition-colors"
                >
                  {c.closing.primaryCta.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href={c.closing.secondaryCta.href}
                  className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 px-7 py-3 text-sm font-semibold text-white hover:bg-white/15 transition-colors"
                >
                  {c.closing.secondaryCta.label}
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-4 left-0 right-0 z-40 px-4 sm:hidden">
        <Link
          href="/contact?intent=demo"
          className="inline-flex w-full items-center justify-center rounded-full bg-blue-900 px-6 py-3 text-sm font-semibold text-white shadow-lg"
        >
          Book a Demo
        </Link>
      </div>
    </div>
  );
}
