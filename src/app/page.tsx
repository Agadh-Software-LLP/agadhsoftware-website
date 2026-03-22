"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { InfiniteCarousel } from "@/components/sections/InfiniteCarousel";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section - ArisGlobal Style */}
      <section className="relative bg-gradient-to-r from-blue-950 via-blue-900 to-teal-900 text-white overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-teal-500/20 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />
          <div className="absolute top-1/2 right-1/4 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />
        </div>

        <Container>
          <div className="py-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left content */}
              <div className="max-w-2xl">
                <div className="inline-block rounded-full bg-cyan-400/20 px-4 py-2 text-sm font-semibold text-cyan-300 mb-6 border border-cyan-400/30">
                  ✨ Startup. Enterprise Grade.
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6">
                  <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">Build Deep.</span>
                  <br />
                  <span className="text-white">Build Right.</span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8 max-w-xl font-light">
                  A small team of engineers committed to correctness, scalability, and long-term partnership. We design, build, and own systems end-to-end.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-8 py-3 text-sm font-bold text-slate-900 hover:bg-cyan-300 shadow-lg hover:shadow-cyan-400/50 transition-all duration-200"
                  >
                    Book a Demo
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center rounded-full border-2 border-cyan-400/50 bg-transparent px-8 py-3 text-sm font-semibold text-white hover:bg-white/10 hover:border-cyan-400 transition-all duration-200"
                  >
                    Explore Services →
                  </Link>
                </div>
              </div>

              {/* Right visual element */}
              <div className="hidden lg:flex items-center justify-center">
                <div className="relative w-full max-w-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 blur-2xl rounded-3xl" />
                  <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 text-center">
                    <div className="text-6xl mb-4">🚀</div>
                    <h3 className="text-2xl font-bold mb-2">Fast. Reliable. Scalable.</h3>
                    <p className="text-slate-300 text-sm">Enterprise-grade solutions for modern challenges</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Trusted Partner Section */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="flex flex-col items-center justify-center gap-12">
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xl sm:text-2xl text-slate-700 text-center font-medium"
            >
              Agadh Software is trusted by industry leaders:
            </motion.h3>

            {/* Infinite Scrolling Carousel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full"
            >
              <InfiniteCarousel />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Core Services Section */}
      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Our Core Capabilities
            </h2>
            <p className="text-lg text-slate-600">
              Engineering depth with ownership. Built for scalability, security, and long-term success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏗️",
                title: "Architecture-First Design",
                desc: "We model domains, data, and workflows before writing code — reducing churn and improving reliability.",
              },
              {
                icon: "✓",
                title: "Quality-Driven Delivery",
                desc: "Code reviews, testing strategy, and disciplined releases — built for long-term maintainability.",
              },
              {
                icon: "🤝",
                title: "Long-Term Partnership",
                desc: "Stable ownership after go-live: monitoring, support, enhancements, and roadmap execution.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="inline-block text-xs font-semibold text-cyan-700 bg-cyan-100 px-4 py-2 rounded-full mb-4">
              ⭐ Our Products &amp; Projects
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
              Built with purpose, delivered with care
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Real-world systems we&apos;ve designed, built, and own end-to-end.
            </p>
          </div>

          <div className="space-y-12">
            {/* Smart Auto Wash */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 lg:p-12">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-700 bg-cyan-100 px-3 py-1 rounded-full mb-4">
                    🚗 Smart App
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    Smart Auto Wash
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    A full-featured mobile and web application for modern car wash businesses — streamlining bookings, real-time status tracking, staff management, and secure payment processing in one integrated platform.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {["Online booking & slot management", "Real-time wash status updates", "Revenue analytics & reporting"].map(
                      (item, i) => (
                        <li key={i} className="flex gap-3 text-slate-600">
                          <span className="text-cyan-600 font-bold">✓</span>
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                  <Link
                    href="/case-study/smart-auto-wash"
                    className="inline-flex items-center gap-2 text-cyan-600 font-bold hover:text-cyan-700 transition-colors"
                  >
                    View App Details →
                  </Link>
                </div>
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm flex items-center justify-center">
                  <div className="w-full bg-gradient-to-br from-cyan-50 to-blue-50 flex items-center justify-center py-12">
                    <div className="text-center p-8">
                      <div className="text-7xl mb-4">🚗</div>
                      <p className="text-slate-600 font-semibold text-lg">Smart Auto Wash</p>
                      <p className="text-slate-500 text-sm mt-1">Car Wash Management Platform</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Smart Car Wash Platform — AI */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 lg:p-12">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-violet-700 bg-violet-100 px-3 py-1 rounded-full mb-4">
                    🤖 AI Platform
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    Smart Car Wash Platform
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    An AI-first operations platform built and running in production — number plate detection, live queue management, revenue leakage analytics, anomaly alerts, and WhatsApp re-engagement campaigns.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "AI number plate detection & smart entry",
                      "Live queue & operational anomaly alerts",
                      "Revenue leakage analytics & WhatsApp campaigns",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 text-slate-600">
                        <span className="text-violet-600 font-bold">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/case-study/smart-car-wash-platform"
                    className="inline-flex items-center gap-2 text-violet-600 font-bold hover:text-violet-700 transition-colors"
                  >
                    View Platform Details →
                  </Link>
                </div>
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm flex items-center justify-center">
                  <div className="w-full bg-gradient-to-br from-violet-50 to-blue-50 flex items-center justify-center py-12">
                    <div className="text-center p-8">
                      <div className="text-7xl mb-4">🧠</div>
                      <p className="text-slate-600 font-semibold text-lg">Smart Car Wash Platform</p>
                      <p className="text-slate-500 text-sm mt-1">AI-Powered Operations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Kodachadri Chits CRP */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 lg:p-12">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full mb-4">
                    🏦 Enterprise Platform
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    Kodachadri Chits — CRP Platform
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    A core platform initiative focusing on scalability, security, auditability, and operational clarity. Delivered with emphasis on user experience, data integrity, and operational excellence.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {["End-to-end ownership", "Scalable architecture", "Data integrity focus"].map(
                      (item, i) => (
                        <li key={i} className="flex gap-3 text-slate-600">
                          <span className="text-cyan-600 font-bold">✓</span>
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                  <Link
                    href="/case-study/kodachadri-chits-crp"
                    className="inline-flex items-center gap-2 text-cyan-600 font-bold hover:text-cyan-700 transition-colors"
                  >
                    View Full Case Study →
                  </Link>
                </div>
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
                  <div className="relative aspect-[16/9] w-full bg-gradient-to-br from-blue-50 to-slate-50">
                    <Image
                      src="/logos/kodachchadri_crm.png"
                      alt="Kodachadri Chits"
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-contain p-6 sm:p-8"
                      priority
                    />
                  </div>
                  <div className="border-t border-slate-200 bg-white/70 px-4 py-3 text-center">
                    <p className="text-sm leading-relaxed text-slate-600">
                      Enterprise-grade CRP platform for modern fintech
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Why Agadh Software
            </h2>
            <p className="text-lg text-slate-600">
              Proven expertise and commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { num: "2", label: "Active Projects" },
              { num: "5", label: "Team Members" },
              { num: "100%", label: "Client Satisfaction" },
              { num: "∞", label: "Commitment" },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl border border-slate-200 text-center hover:border-cyan-300 hover:bg-cyan-50/30 transition-all duration-300"
              >
                <div className="text-4xl lg:text-5xl font-bold text-cyan-600 mb-2">
                  {stat.num}
                </div>
                <p className="text-slate-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-blue-950 via-blue-900 to-teal-900 text-white overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-40">
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-teal-500/20 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
        </div>

        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Ready to build something impactful?
            </h2>
            <p className="text-lg text-slate-200 mb-10">
              Tell us about your next project. We&apos;ll respond with a clear plan and a pragmatic path to delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-8 py-3 text-sm font-bold text-slate-900 hover:bg-cyan-300 shadow-lg hover:shadow-cyan-400/50 transition-all duration-200"
              >
                Book a Demo</Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border-2 border-cyan-400/50 bg-transparent px-8 py-3 text-sm font-semibold text-white hover:bg-white/10 hover:border-cyan-400 transition-all duration-200"
              >
                Learn More →</Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
