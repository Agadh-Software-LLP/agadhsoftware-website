export type SchoolProofMetric = {
  value: string;
  label: string;
  detail: string;
};

export type SchoolIconName =
  | "CalendarClock"
  | "NotebookPen"
  | "FileSpreadsheet"
  | "UserRoundCheck"
  | "ClipboardCheck"
  | "ShieldAlert"
  | "Bell"
  | "MessageSquareHeart"
  | "Users"
  | "House"
  | "BusFront"
  | "WalletCards"
  | "BrainCircuit"
  | "BarChart3"
  | "Bot"
  | "UserPlus";

export type SchoolCapabilityItem = {
  icon: SchoolIconName;
  title: string;
  blurb: string;
  detail: string;
};

export type SchoolCapabilityGroup = {
  title: string;
  items: SchoolCapabilityItem[];
};

export type SchoolAutomationFlow = {
  icon: SchoolIconName;
  title: string;
  from: string;
  to: string;
  summary: string;
};

export type SchoolModuleCard = {
  icon: SchoolIconName;
  title: string;
  benefit: string;
  points: string[];
  image: {
    src: string;
    alt: string;
    position: string;
  };
  cta: {
    label: string;
    href: string;
  };
};

export type SchoolRoleExperience = {
  role: "Admin" | "Teacher" | "Parent";
  panelTitle: string;
  headline: string;
  metric: string;
  points: string[];
};

export const schoolProjectsContent = {
  brandName: "AgadhEducare",
  hero: {
    eyebrow: "AgadhEducare",
    title: "Run your entire school from one intelligent platform",
    subtitle:
      "Attendance, Timetable, Homework, Hostel, Fees - automated and simplified.",
    ctas: [
      { label: "Book Demo", href: "/contact?intent=demo", variant: "primary" as const },
      { label: "View Product", href: "#capability-map", variant: "secondary" as const },
    ],
    points: [
      "AI-driven workflows across academics, operations, and finance",
      "Built for admins, teachers, and parents in one connected experience",
      "Enterprise-grade governance with role controls and audit visibility",
    ],
  },
  trustBar: {
    title: "Trusted by 100+ schools",
    logos: [
      "North Valley School",
      "Greenfield Academy",
      "Horizon Public School",
      "Springdale Institutions",
      "Riverstone Group",
    ],
    badges: ["Role-based access", "Audit-ready logs", "Data encryption"],
  },
  proofMetrics: [
    {
      value: "100+",
      label: "Schools in active rollout",
      detail: "Designed for campuses that need multi-team coordination every day.",
    },
    {
      value: "80%",
      label: "Manual effort reduction target",
      detail: "Automations remove repetitive follow-up work for admin teams.",
    },
    {
      value: "< 2 min",
      label: "Absence-to-parent alert cycle",
      detail: "Real-time communication keeps parents and teams in sync.",
    },
    {
      value: "24x7",
      label: "Leadership visibility",
      detail: "Action dashboards and AI summaries for faster school decisions.",
    },
  ] satisfies SchoolProofMetric[],
  capabilityMap: {
    title: "Capability Map",
    description:
      "A complete school operating layer delivered in focused modules. Start where you need impact, then expand.",
    groups: [
      {
        title: "Academic",
        items: [
          {
            icon: "CalendarClock",
            title: "Smart Timetable",
            blurb: "Auto-generate balanced schedules in minutes.",
            detail:
              "Teacher load and period distribution stay controlled across classes.",
          },
          {
            icon: "NotebookPen",
            title: "Homework Engine",
            blurb: "Create, assign, and track work from one panel.",
            detail:
              "Automated reminders reduce missed submissions and follow-up effort.",
          },
          {
            icon: "FileSpreadsheet",
            title: "Exams and Results",
            blurb: "Govern exam setup, marks, and publishing.",
            detail:
              "Class-level analytics highlight where intervention is needed quickly.",
          },
        ],
      },
      {
        title: "Students",
        items: [
          {
            icon: "UserRoundCheck",
            title: "Student Lifecycle",
            blurb: "Admission to progression in one record.",
            detail:
              "Profile, guardianship, and history remain synchronized throughout the year.",
          },
          {
            icon: "ClipboardCheck",
            title: "Attendance Intelligence",
            blurb: "One-click capture with escalation rules.",
            detail:
              "Absence patterns trigger auto alerts before they become long-term risk.",
          },
          {
            icon: "ShieldAlert",
            title: "Behavior Tracking",
            blurb: "Capture incidents with context and actions.",
            detail:
              "Trends and severity rules help teams respond early and consistently.",
          },
        ],
      },
      {
        title: "Communication",
        items: [
          {
            icon: "Bell",
            title: "Smart Notifications",
            blurb: "Broadcast critical updates instantly.",
            detail:
              "Automated reminders for fees, PTM, and events reduce manual coordination.",
          },
          {
            icon: "MessageSquareHeart",
            title: "Parent App",
            blurb: "Academics, fees, and communication in one app.",
            detail:
              "Parents get real-time status without calling school staff repeatedly.",
          },
          {
            icon: "Users",
            title: "PTM Orchestration",
            blurb: "Priority scheduling with fewer no-shows.",
            detail:
              "AI-assisted prioritization surfaces students who require immediate review.",
          },
        ],
      },
      {
        title: "Operations",
        items: [
          {
            icon: "House",
            title: "Hostel Operations",
            blurb: "Incident tracking and SLA-based response.",
            detail:
              "Wardens and admins get clear action timelines and accountability.",
          },
          {
            icon: "BusFront",
            title: "Transport Tracking",
            blurb: "Live route visibility with pickup updates.",
            detail:
              "Parents and transport teams stay aligned on movement and exceptions.",
          },
          {
            icon: "WalletCards",
            title: "Fee Automation",
            blurb: "Billing, reminders, and tracking in one flow.",
            detail:
              "Finance teams get cleaner collection visibility and lower reconciliation effort.",
          },
        ],
      },
      {
        title: "Admin Intelligence",
        items: [
          {
            icon: "BrainCircuit",
            title: "Risk Analysis",
            blurb: "Detect at-risk students and workflow blockers.",
            detail:
              "Signals combine attendance, academics, behavior, and financial activity.",
          },
          {
            icon: "BarChart3",
            title: "Analytics Dashboard",
            blurb: "Department-level trends in one command center.",
            detail:
              "Leadership sees actionable KPIs without waiting for manual reports.",
          },
          {
            icon: "Bot",
            title: "Automation Rules",
            blurb: "Run key workflows without repetitive admin work.",
            detail:
              "Configure triggers once and keep routine operations continuously running.",
          },
        ],
      },
    ] satisfies SchoolCapabilityGroup[],
  },
  automation: {
    title: "Automation that saves hours every day",
    description:
      "High-friction school workflows become consistent, faster, and traceable without manual chasing.",
    flows: [
      {
        icon: "UserPlus",
        title: "Onboarding automation",
        from: "Add Student",
        to: "Parent account auto-created",
        summary:
          "Guardian access, class linking, and communication readiness happen immediately.",
      },
      {
        icon: "CalendarClock",
        title: "Timetable automation",
        from: "Generate Timetable",
        to: "Teacher allocation auto-assigned",
        summary:
          "Balanced schedules reduce conflict checks and manual rescheduling loops.",
      },
      {
        icon: "NotebookPen",
        title: "Homework automation",
        from: "Publish Homework",
        to: "Student reminders auto-triggered",
        summary:
          "Assignments, due-date nudges, and parent visibility stay synchronized.",
      },
    ] satisfies SchoolAutomationFlow[],
  },
  modules: {
    title: "Product module showcase",
    description:
      "Each module is built for real school usage with low training friction and strong execution clarity.",
    cards: [
      {
        icon: "ClipboardCheck",
        title: "Attendance",
        benefit: "One-click marking with instant escalation for absences.",
        points: [
          "Daily attendance board",
          "Auto absence alerts",
          "Class-level trend view",
        ],
        image: {
          src: "/school-projects/agadheducare-mobile-suite.png",
          alt: "AgadhEducare attendance module preview",
          position: "12% center",
        },
        cta: { label: "Explore", href: "/contact?intent=demo" },
      },
      {
        icon: "CalendarClock",
        title: "Timetable",
        benefit: "Auto-generated schedule planning with teacher load balancing.",
        points: [
          "Conflict-aware generation",
          "Rapid revision updates",
          "Shareable class schedule",
        ],
        image: {
          src: "/school-projects/agadheducare-mobile-suite.png",
          alt: "AgadhEducare timetable module preview",
          position: "43% center",
        },
        cta: { label: "Explore", href: "/contact?intent=demo" },
      },
      {
        icon: "NotebookPen",
        title: "Homework",
        benefit: "AI-supported assignment lifecycle from publishing to reminders.",
        points: ["AI suggestions", "Submission tracking", "Late follow-up prompts"],
        image: {
          src: "/school-projects/agadheducare-mobile-suite.png",
          alt: "AgadhEducare homework module preview",
          position: "76% center",
        },
        cta: { label: "Explore", href: "/contact?intent=demo" },
      },
      {
        icon: "House",
        title: "Hostel",
        benefit: "Smart incident and response tracking for hostel safety operations.",
        points: ["Severity categories", "Escalation workflow", "Resolution audit trail"],
        image: {
          src: "/school-projects/school-context.jpg",
          alt: "AgadhEducare hostel operations module preview",
          position: "center",
        },
        cta: { label: "Explore", href: "/contact?intent=demo" },
      },
      {
        icon: "Bell",
        title: "Notifications",
        benefit: "Automated communication across parents, teachers, and leadership.",
        points: ["Event reminders", "PTM nudges", "Critical alerts"],
        image: {
          src: "/school-projects/agadheducare-mobile-suite.png",
          alt: "AgadhEducare notifications module preview",
          position: "90% center",
        },
        cta: { label: "Explore", href: "/contact?intent=demo" },
      },
    ] satisfies SchoolModuleCard[],
  },
  dashboard: {
    title: "Admin Command Center",
    description:
      "Leadership teams get one operational cockpit with live actions, AI insights, and execution metrics.",
    actionsRequired: [
      "2 students show combined attendance and grade-risk signals",
      "Teacher overload detected in Grade 8 mathematics",
      "18 pending fee follow-ups scheduled for automated reminders",
    ],
    insights: [
      "PTM attendance improved 22% week-over-week after nudges",
      "Homework completion up by 16% in monitored classes",
      "Transport exception response time reduced by 31%",
    ],
    metrics: [
      { label: "Attendance Today", value: "96.8%" },
      { label: "Open Alerts", value: "07" },
      { label: "Fee Collection", value: "88%" },
    ],
  },
  aiAssistant: {
    title: "Your school's AI assistant",
    description:
      "Actionable prompts and recommendations help teams prioritize what matters first.",
    examples: [
      {
        signal: "2 students at risk",
        action: "Recommend counseling + parent call plan with class teacher.",
      },
      {
        signal: "Teacher overload detected",
        action: "Suggest timetable rebalance across available faculty capacity.",
      },
      {
        signal: "Suggest revision homework",
        action: "Generate targeted assignments from recent exam performance trends.",
      },
    ],
  },
  roleExperience: {
    title: "Role-based experience",
    description:
      "Every stakeholder gets focused workflows without UI clutter or unnecessary steps.",
    items: [
      {
        role: "Admin",
        panelTitle: "Admin View",
        headline: "Govern operations, compliance, and outcomes from one place.",
        metric: "Leadership dashboard updates every 15 minutes",
        points: [
          "Cross-module KPIs with drill-down visibility",
          "Audit logs and approval traceability",
          "Automation rule control for repeat workflows",
        ],
      },
      {
        role: "Teacher",
        panelTitle: "Teacher View",
        headline: "Execute class workflows quickly with fewer manual tasks.",
        metric: "Daily class operations handled in under 10 minutes",
        points: [
          "Attendance and homework in one timeline",
          "Exam entry and publishing checkpoints",
          "Priority student alerts surfaced automatically",
        ],
      },
      {
        role: "Parent",
        panelTitle: "Parent View",
        headline: "Stay informed in real time without fragmented communication.",
        metric: "Instant visibility on attendance, homework, and key notices",
        points: [
          "Unified app for fees, academics, and PTM updates",
          "Secure parent-teacher communication channel",
          "Auto reminders for events and due actions",
        ],
      },
    ] satisfies SchoolRoleExperience[],
  },
  benefits: [
    {
      value: "Save 80%",
      title: "admin effort",
      detail: "Automations reduce repetitive operational tasks across departments.",
    },
    {
      value: "Reduce errors",
      title: "in manual workflows",
      detail: "Rule-based execution minimizes missed follow-ups and data inconsistency.",
    },
    {
      value: "Improve outcomes",
      title: "with early intervention",
      detail: "AI risk signals help schools act before performance drops become severe.",
    },
    {
      value: "Real-time visibility",
      title: "for every stakeholder",
      detail: "Admins, teachers, and parents stay aligned on one shared platform.",
    },
  ],
  pricing: {
    title: "Simple plans for every stage",
    description:
      "Choose a starting plan and expand by module depth, campus count, and workflow complexity.",
    tiers: [
      {
        name: "Starter",
        subtitle: "For growing schools",
        points: [
          "Core academics and attendance",
          "Parent communication workflows",
          "Guided onboarding support",
        ],
        featured: false,
        cta: { label: "Start Free Trial", href: "/contact?intent=demo" },
      },
      {
        name: "Pro",
        subtitle: "For scaling institutions",
        points: [
          "Automation and analytics layers",
          "AI assistant recommendations",
          "Priority success support",
        ],
        featured: true,
        cta: { label: "Request Demo", href: "/contact?intent=demo" },
      },
      {
        name: "Enterprise",
        subtitle: "For multi-campus groups",
        points: [
          "Advanced governance and audit controls",
          "Custom integrations and rollout planning",
          "Dedicated account success team",
        ],
        featured: false,
        cta: { label: "Request Demo", href: "/contact?intent=proposal" },
      },
    ],
  },
  teaser: {
    eyebrow: "AgadhEducare",
    title: "Enterprise-grade school intelligence with AI-driven operations",
    description:
      "From capability maps to real-time parent workflows, AgadhEducare helps school teams automate execution and lead with data.",
    highlights: [
      "AI student risk scoring and interventions",
      "PTM, homework, and attendance automation",
      "Real-time transport and hostel safety workflows",
      "Audit-ready compliance and security visibility",
    ],
    primaryCta: { label: "Explore EduCare", href: "/educare" },
    secondaryCta: { label: "Book Demo", href: "/contact?intent=demo" },
  },
  closing: {
    title: "See AgadhEducare in a live workflow walkthrough",
    description:
      "Get a focused demo mapped to your school size, process maturity, and reporting priorities.",
    cta: { label: "Book Demo", href: "/contact?intent=demo" },
  },
} as const;
