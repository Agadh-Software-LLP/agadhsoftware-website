export type Service = {
  title: string;
  summary: string;
  whatItIs: string;
  howWeDeliver: string[];
  businessValue: string[];
};

export const services: Service[] = [
  {
    title: "Custom Software Development",
    summary: "Bespoke systems designed for correctness, scale, and long-term ownership.",
    whatItIs:
      "We design and build custom software tailored to your business workflows, data models, and compliance needs.",
    howWeDeliver: [
      "Domain modeling and architecture-first approach",
      "Incremental delivery with strong quality gates",
      "Security, performance, and reliability built-in",
    ],
    businessValue: [
      "Reduce operational friction with purpose-built workflows",
      "Lower long-term cost through maintainable architecture",
      "De-risk delivery with engineering depth and transparency",
    ],
  },
  {
    title: "IT Consulting",
    summary: "Engineering-led guidance to unblock delivery and improve system health.",
    whatItIs:
      "We collaborate with your teams to improve architecture, delivery practices, and technical decision-making.",
    howWeDeliver: [
      "Architecture reviews and modernization roadmaps",
      "Performance and reliability assessments",
      "Pragmatic recommendations with clear trade-offs",
    ],
    businessValue: [
      "Make better decisions faster",
      "Improve stability and delivery velocity",
      "Align technology with business outcomes",
    ],
  },
  {
    title: "Web & Mobile Application Development",
    summary: "Responsive user experiences backed by robust APIs and data design.",
    whatItIs:
      "We build modern web applications and mobile-friendly experiences with a focus on usability and durability.",
    howWeDeliver: [
      "Design systems and reusable UI components",
      "Accessible, responsive frontends",
      "API-first integration with secure authentication",
    ],
    businessValue: [
      "Ship interfaces that users trust",
      "Reduce support load through clarity and consistency",
      "Scale features without rewriting foundations",
    ],
  },
  {
    title: "Enterprise Systems",
    summary: "Core platforms with complex workflows, roles, and audit-ready reporting.",
    whatItIs:
      "We engineer enterprise systems that handle mission-critical operations, complex approvals, and compliance needs.",
    howWeDeliver: [
      "Strong data integrity and auditability",
      "Role-based access control and segregation of duties",
      "Observability: logging, metrics, and traceability",
    ],
    businessValue: [
      "Improve governance and accountability",
      "Enable operational scale without fragile processes",
      "Increase uptime and reduce incident risk",
    ],
  },
  {
    title: "Cloud-Ready Applications",
    summary: "Deployable architectures designed for resilience, security, and growth.",
    whatItIs:
      "We build and modernize applications to be cloud-ready, with clear deployment and scaling paths.",
    howWeDeliver: [
      "Containerization and environment parity",
      "Infrastructure-as-code compatible design",
      "Security reviews and hardening",
    ],
    businessValue: [
      "Faster releases and safer rollbacks",
      "Elastic scaling for variable workloads",
      "Better cost control and reliability",
    ],
  },
  {
    title: "Application Maintenance & Support",
    summary: "Stability, enhancements, and proactive improvements over time.",
    whatItIs:
      "We maintain and evolve applications with structured SLAs, continuous improvements, and predictable support.",
    howWeDeliver: [
      "Incident response with root-cause analysis",
      "Planned enhancements and technical debt reduction",
      "Monitoring and reliability improvements",
    ],
    businessValue: [
      "Higher uptime and better user trust",
      "Long-term cost reduction through proactive care",
      "Clear ownership with measurable outcomes",
    ],
  },
  {
    title: "End-to-End Project Ownership",
    summary: "From discovery to delivery to long-term operation — owned by one partner.",
    whatItIs:
      "We take responsibility for the full lifecycle: discovery, architecture, implementation, deployment, and maintenance.",
    howWeDeliver: [
      "Discovery workshops and requirement shaping",
      "Delivery planning with milestones and quality gates",
      "Deployment, monitoring, and ongoing roadmap execution",
    ],
    businessValue: [
      "Single accountable partner",
      "Lower coordination overhead",
      "Continuity and institutional knowledge over time",
    ],
  },
];
