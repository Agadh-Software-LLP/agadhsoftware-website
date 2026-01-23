import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom software development, enterprise systems, cloud-ready applications, and end-to-end ownership with long-term maintenance.",
};

export default function ServicesPage() {
  return (
    <div>
      <PageHero
        title="Services"
        subtitle="Enterprise-grade software delivery across design, development, deployment, and long-term support."
        cta={{ label: "Start a Project", href: "/contact" }}
      />

      <section className="bg-white">
        <Container>
          <div className="py-12 sm:py-16">
            <SectionHeading
              eyebrow="What we do"
              title="Built for correctness, scale, and longevity"
              description={
                "We help you design and deliver software systems that stay stable as usage grows. Our work covers discovery, architecture, implementation, and long-term ownership  so your teams can move faster without breaking core workflows."
              }
            />

            <div className="mt-8 max-w-3xl space-y-4 text-sm leading-relaxed text-slate-600">
              <p>
                We typically engage when a system needs to be built right the
                first time: strong data models, secure access control, audit
                trails, and clear operational workflows.
              </p>
              <p>
                Whether you are modernizing legacy modules or building a new
                platform, we focus on measurable quality: test strategy,
                disciplined releases, observability, and a maintenance plan
                post-launch.
              </p>
            </div>

            <div className="mt-10 space-y-8">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="rounded-xl border border-slate-200 bg-white p-6"
                >
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold text-slate-950">
                      {s.title}
                    </h3>
                    <p className="text-sm text-slate-600">{s.summary}</p>
                  </div>

                  <div className="mt-6 grid gap-6 lg:grid-cols-3">
                    <div>
                      <div className="text-sm font-semibold text-slate-950">
                        What it is
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {s.whatItIs}
                      </p>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-950">
                        How we deliver
                      </div>
                      <ul className="mt-2 space-y-2 text-sm leading-relaxed text-slate-600">
                        {s.howWeDeliver.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-blue-900" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-950">
                        Business value
                      </div>
                      <ul className="mt-2 space-y-2 text-sm leading-relaxed text-slate-600">
                        {s.businessValue.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-blue-900" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
              <div className="max-w-3xl">
                <div className="text-sm font-semibold text-blue-900">
                  How an engagement works
                </div>
                <div className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                  Discovery  Build  Own
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  We start with requirements and constraints, propose a clear
                  architecture and delivery plan, then implement with reviews,
                  testing, and a predictable release cadence. After go-live, we
                  stay accountable through monitoring, support, and continuous
                  improvements.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
