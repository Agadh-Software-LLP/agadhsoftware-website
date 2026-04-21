export type SchoolFeature = {
  title: string;
  description: string;
};

export type SchoolFeatureGroup = {
  title: string;
  description: string;
  features: SchoolFeature[];
};

export type SchoolProofMetric = {
  value: string;
  label: string;
  detail: string;
};

export const schoolProjectsContent = {
  hero: {
    eyebrow: "School Projects",
    title: "School Operations Platform Built for Outcomes",
    subtitle:
      "A single operating system for academics, parent communication, safety workflows, and compliance visibility. Designed for leadership teams that need measurable outcomes, not fragmented tools.",
    ctas: [
      { label: "Book Demo", href: "/contact?intent=demo", variant: "primary" as const },
      {
        label: "Explore Capability Map",
        href: "#capability-map",
        variant: "secondary" as const,
      },
    ],
  },
  intro: {
    title: "Why this matters for school leadership",
    description:
      "Leadership teams need a complete view across attendance, results, behavior, transport, hostel, and finance. ParentConnect centralizes these workflows and automates the repetitive parts so staff can focus on student outcomes.",
  },
  proofMetrics: [
    {
      value: "< 24h",
      label: "Attendance escalation cycle",
      detail: "Faster parent communication on same-day absence signals.",
    },
    {
      value: "Up to 60%",
      label: "PTM no-show reduction target",
      detail: "Automated reminders and priority scheduling for high-risk students.",
    },
    {
      value: "Up to 40%",
      label: "Fee collection lift target",
      detail: "Automated billing, reminders, and defaulter tracking workflows.",
    },
    {
      value: "100%",
      label: "Audit trail coverage",
      detail: "Action-level accountability for governance and compliance reviews.",
    },
  ] satisfies SchoolProofMetric[],
  featureGroups: [
    {
      title: "Academic performance intelligence",
      description:
        "Identify intervention opportunities early and equip teachers with clear, actionable data.",
      features: [
        {
          title: "AI student risk scoring",
          description:
            "Combine attendance, grades, behavior, and fee patterns to surface students needing attention before outcomes decline.",
        },
        {
          title: "Exam and result governance",
          description:
            "Manage exam setup, controlled result publishing rules, and class-level performance analysis in one flow.",
        },
        {
          title: "Homework lifecycle automation",
          description:
            "Track assignment publication, submission windows, overdue follow-ups, and parent reminders without manual chasing.",
        },
      ],
    },
    {
      title: "Parent engagement and communication",
      description:
        "Keep families informed through real-time, multi-channel communication and context-rich updates.",
      features: [
        {
          title: "Real-time parent teacher communication",
          description:
            "In-app chat with moderation, read status, and structured updates that reduce communication gaps.",
        },
        {
          title: "Intelligent PTM scheduling",
          description:
            "Prioritize students who need intervention first, auto-send reminders, and reduce coordination overhead.",
        },
        {
          title: "Event and exam reminders",
          description:
            "Automate reminders across in-app, email, SMS, and WhatsApp so critical dates are not missed.",
        },
      ],
    },
    {
      title: "Operations and financial control",
      description:
        "Reduce administrative load with workflow automation across attendance, fees, and daily operations.",
      features: [
        {
          title: "Attendance auto-absence workflows",
          description:
            "Automatically flag missing attendance by cutoff and trigger immediate parent notifications.",
        },
        {
          title: "Fee operations automation",
          description:
            "Automate invoice generation, reminder sequences, and collection visibility for finance teams.",
        },
        {
          title: "AI executive summaries",
          description:
            "Generate digestible trend summaries for leadership across academics, behavior, and collections.",
        },
      ],
    },
    {
      title: "Safety, transport, and compliance",
      description:
        "Strengthen trust with operational visibility and governance-ready records.",
      features: [
        {
          title: "Transport live updates",
          description:
            "Provide bus movement visibility and pickup or drop confirmations for parent confidence.",
        },
        {
          title: "Hostel incident management",
          description:
            "Track incidents with severity logic, response SLAs, and escalation workflows for faster resolution.",
        },
        {
          title: "Audit and security logging",
          description:
            "Maintain traceable user activity and security events for internal controls and external audits.",
        },
      ],
    },
  ] satisfies SchoolFeatureGroup[],
  teaser: {
    eyebrow: "School Projects",
    title: "Enterprise-grade school management, built for measurable outcomes",
    description:
      "From AI risk scoring to fee automation and parent communication, we build integrated school platforms that leadership teams can run with confidence.",
    highlights: [
      "AI student risk scoring and interventions",
      "PTM, homework, and attendance automation",
      "Real-time transport and hostel safety workflows",
      "Audit-ready compliance and security visibility",
    ],
    primaryCta: { label: "View School Projects", href: "/school-projects" },
    secondaryCta: { label: "Book Demo", href: "/contact?intent=demo" },
  },
  closing: {
    title: "See ParentConnect in a live workflow walkthrough",
    description:
      "Get a focused demo mapped to your school size, process maturity, and reporting priorities.",
    cta: { label: "Book Demo", href: "/contact?intent=demo" },
  },
} as const;
