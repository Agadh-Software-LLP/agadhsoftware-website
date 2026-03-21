import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { caseStudies } from "@/content/case-studies";

export const metadata: Metadata = {
  title: "Smart Auto Wash — Car Wash Management App",
  description:
    "A full-featured mobile and web application for managing car wash operations — bookings, payments, staff scheduling, and real-time status tracking.",
};

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-600">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-blue-900" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function SmartAutoWashPage() {
  const cs = caseStudies.smartAutoWash;

  return (
    <div>
      <PageHero
        title={cs.title}
        subtitle={cs.subtitle}
        cta={{ label: "Talk to Us", href: "/contact" }}
      />

      <section className="bg-white">
        <Container>
          <div className="py-12 sm:py-16">
            <div className="max-w-3xl space-y-10">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm leading-relaxed text-slate-600">
                <div className="text-sm font-semibold text-slate-950">
                  Overview
                </div>
                <p className="mt-2">{cs.overview}</p>
              </div>

              <div>
                <SectionHeading
                  eyebrow="Context"
                  title="Business challenge"
                  description="Car wash businesses need a unified platform to manage bookings, staff, and customer experience efficiently."
                />
                <BulletList items={cs.challenge} />
              </div>

              <div>
                <SectionHeading
                  eyebrow="Delivery"
                  title="End-to-end approach"
                  description="We built a mobile-first, real-time platform that connects customers, staff, and business owners in a single ecosystem."
                />
                <BulletList items={cs.approach} />
              </div>

              <div>
                <SectionHeading
                  eyebrow="Product"
                  title="Key features"
                  description="Every feature is designed to reduce friction for customers and operational overhead for business owners."
                />
                <BulletList items={cs.features} />
              </div>

              <div>
                <SectionHeading
                  eyebrow="Engineering"
                  title="Architecture, scalability & security"
                  description="Designed for reliability under peak loads with secure access control and offline capability."
                />
                <BulletList items={cs.architectureFocus} />
              </div>

              <div>
                <SectionHeading
                  eyebrow="Operations"
                  title="Ongoing maintenance & support model"
                  description="Cloud-hosted with continuous monitoring, auto-scaling, and zero-downtime deployments."
                />
                <BulletList items={cs.operationsModel} />
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-sm leading-relaxed text-slate-600">
                <div className="text-sm font-semibold text-slate-950">
                  Outcomes we optimize for
                </div>
                <ul className="mt-3 space-y-2">
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-900" />
                    <span>
                      Frictionless customer booking experience with real-time
                      status updates.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-900" />
                    <span>
                      Efficient staff and capacity management for business
                      owners.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-900" />
                    <span>
                      Reliable payments and data integrity across all
                      transactions.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-sm leading-relaxed text-slate-600">
                {cs.disclaimer}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
