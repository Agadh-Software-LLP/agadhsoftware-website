import type { ReactNode } from "react";

export type NavPanel = {
  title: string;
  description: string;
  bullets?: string[];
  cta?: { label: string; href: string };
};

export const navPanels: Record<string, NavPanel> = {
  "/": {
    title: "Home",
    description:
      "An enterprise-ready software partner focused on correctness, scalability, and long-term ownership.",
    bullets: ["Engineering depth", "Quality-first delivery", "Ownership end-to-end"],
    cta: { label: "Talk to Us", href: "/contact" },
  },
  "/about": {
    title: "About",
    description:
      "Engineering-first mindset with a partnership approach — we optimize for long-term system health.",
    bullets: [
      "Architecture-first approach",
      "Clear communication and honest trade-offs",
      "Disciplined delivery practices",
    ],
    cta: { label: "Learn about Agadh", href: "/about" },
  },
  "/services": {
    title: "Services",
    description:
      "Custom software delivery across design, development, deployment, and long-term support.",
    bullets: [
      "Custom software development",
      "Enterprise systems",
      "Maintenance and support",
    ],
    cta: { label: "Explore services", href: "/services" },
  },
  "/industries": {
    title: "Industries",
    description:
      "We deliver solutions for domains where auditability, reliability, and data integrity are critical.",
    bullets: [
      "Financial services",
      "Chit fund / CRP systems",
      "Process automation",
    ],
    cta: { label: "View industries", href: "/industries" },
  },
  "/case-study/kodachadri-chits-crp": {
    title: "Case Study",
    description:
      "Kodachadri Chits — CRP platform engineered for correctness, scalability, and secure operations.",
    bullets: [
      "Domain modeling and architecture",
      "Security and auditability",
      "Ongoing maintenance model",
    ],
    cta: { label: "Read case study", href: "/case-study/kodachadri-chits-crp" },
  },
  "/why-agadh": {
    title: "Why Agadh",
    description:
      "Enterprises choose partners who reduce delivery risk — we do it with rigor and ownership.",
    bullets: [
      "Engineering depth",
      "Quality-first development",
      "Transparent communication",
    ],
    cta: { label: "Why Agadh", href: "/why-agadh" },
  },
  "/tech-stack": {
    title: "Tech Stack",
    description:
      "Modern backend, frontend, cloud, and DevOps capabilities chosen for maintainability.",
    bullets: ["Java / Spring Boot", "React / Next.js", "AWS / Azure"],
    cta: { label: "View tech stack", href: "/tech-stack" },
  },
  "/contact": {
    title: "Contact",
    description:
      "Start a conversation. We’ll respond with a clear plan and pragmatic next steps.",
    bullets: ["Project discovery", "Architecture review", "Delivery planning"],
    cta: { label: "Contact", href: "/contact" },
  },
};
