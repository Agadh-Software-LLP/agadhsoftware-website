import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ContactForm } from "@/components/sections/ContactForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Agadh Software LLP to start a project. Let’s build something deep and right.",
};

export default function ContactPage() {
  return (
    <div>
      <PageHero
        title="Contact"
        subtitle="Let’s build something deep and right. Tell us what you’re building and what outcomes you need."
      />

      <section className="bg-white">
        <Container>
          <div className="py-12 sm:py-16">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <SectionHeading
                  eyebrow="Start here"
                  title="Talk to our team"
                  description={
                    "Share context, constraints, and timelines. We’ll respond with a clear plan and next steps."
                  }
                />

                <div className="mt-8 space-y-4 text-sm leading-relaxed text-slate-600">
                  <div>
                    <div className="text-sm font-semibold text-slate-950">
                      Email
                    </div>
                    <div className="mt-1">{site.contact.email}</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-950">
                      Phone
                    </div>
                    <div className="mt-1">{site.contact.phone}</div>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <div className="text-sm font-semibold text-slate-950">
                      Note
                    </div>
                    <div className="mt-2">
                      These are placeholders. Replace with real contact info
                      when ready.
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
