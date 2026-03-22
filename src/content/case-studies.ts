export type AiFeatureBlock = {
  id: string;
  title: string;
  problem: string;
  feature: string;
  outcome: string;
};

export const caseStudies = {
  smartCarWashPlatform: {
    title: "Smart Car Wash Platform — AI-Powered Operations",
    subtitle:
      "A production-ready, AI-first car wash management platform — from intelligent vehicle entry to automated revenue analytics and WhatsApp re-engagement campaigns.",
    overview:
      "The Smart Car Wash Platform brings AI capabilities to every touchpoint of a car wash business. Built and deployed in production, it replaces manual workflows with intelligent automation: number plate detection, live queue management, anomaly alerts, revenue leakage analytics, and personalised WhatsApp campaigns — all in one integrated system.",
    aiFeatures: [
      {
        id: "plate-detection",
        title: "AI-Powered Number Plate Detection",
        problem:
          "Staff waste time manually typing plate numbers, causing errors and slow vehicle entry during peak hours.",
        feature:
          "Scan or upload a vehicle image and the platform auto-fills the plate number using AI vision, with graceful fallback to manual entry.",
        outcome:
          "Faster vehicle check-in, reduced data-entry errors, and shorter queue wait times at peak hours.",
      },
      {
        id: "smart-vehicle-entry",
        title: "Smart Vehicle Entry",
        problem:
          "Operators have no quick visibility of a customer's history or value at the point of entry.",
        feature:
          "Auto-fetches customer history, loyalty tags (VIP / churn risk), and AI-generated wash recommendations the moment a plate is recognised.",
        outcome:
          "Staff can greet customers by name, upsell the right package, and retain high-value customers with zero manual lookup.",
      },
      {
        id: "live-queue",
        title: "Live Queue Management",
        problem:
          "Without real-time visibility, jobs pile up, staff lose track of priorities, and customers are left waiting without updates.",
        feature:
          "Real-time status board with a full flow — queued → washing → drying → completed — visible to staff and customers alike.",
        outcome:
          "Reduced idle time, transparent customer experience, and measurably shorter average turnaround.",
      },
      {
        id: "ai-job-summaries",
        title: "AI Job Summaries",
        problem:
          "Reviewing completed jobs for quality and billing disputes requires manual note-taking that rarely happens in practice.",
        feature:
          "Automatically generates a one-line natural-language summary when a wash job is marked complete.",
        outcome:
          "Instant audit trail, faster dispute resolution, and searchable job history without extra staff effort.",
      },
      {
        id: "anomaly-alerts",
        title: "Operational Anomaly Alerts",
        problem:
          "Stuck jobs, queue spikes, and revenue drops go unnoticed until they become serious operational problems.",
        feature:
          "Detects anomalies across job duration, queue depth, and revenue patterns and sends real-time notifications to managers.",
        outcome:
          "Issues surfaced within minutes rather than hours, enabling rapid intervention and preventing revenue loss.",
      },
      {
        id: "revenue-leakage",
        title: "Revenue Leakage Analytics",
        problem:
          "No-shows and cancelled bookings quietly erode revenue with no visibility into the true financial impact.",
        feature:
          "Tracks no-show rates, estimates lost revenue per period, and shows trend breakdowns across service types and time slots.",
        outcome:
          "Clear dollar value of leakage, enabling targeted action — dynamic pricing, deposit policies, or SMS reminders.",
      },
      {
        id: "whatsapp-campaigns",
        title: "WhatsApp Re-Engagement Campaigns",
        problem:
          "Lapsed customers drift away silently; generic blast messages have low open and conversion rates.",
        feature:
          "Identifies lapsed segments, generates personalised AI-drafted messages per customer, and sends re-engagement campaigns via WhatsApp.",
        outcome:
          "Higher re-activation rates compared to generic SMS, with measurable lift in monthly active customers.",
      },
      {
        id: "rbac",
        title: "Role-Based Access Control",
        problem:
          "Flat access means staff can accidentally (or intentionally) access sensitive pricing, analytics, or customer data.",
        feature:
          "Granular admin / super-admin / user roles with menu-level and feature-level gating enforced server-side.",
        outcome:
          "Audit-ready access logs, reduced risk of data leakage, and confident compliance with privacy requirements.",
      },
      {
        id: "dashboard-intelligence",
        title: "Dashboard Intelligence Widgets",
        problem:
          "Operations decisions are made on gut feel because raw numbers don't translate into actionable insight.",
        feature:
          "AI insight cards, short-term demand forecasting, and leakage metrics surface directly on the management dashboard.",
        outcome:
          "Faster, evidence-based decisions on staffing, pricing, and promotions without needing a data analyst.",
      },
      {
        id: "end-to-end-workflow",
        title: "End-to-End Car Wash Workflow",
        problem:
          "Disconnected tools for booking, payment, communication, and history create operational gaps and customer friction.",
        feature:
          "Unified workflow from entry to completion: booking linkage, wash execution, job history, and automatic customer communication in one system.",
        outcome:
          "Zero handoff gaps, complete customer timeline, and a single source of truth for every vehicle interaction.",
      },
    ] as AiFeatureBlock[],
    disclaimer:
      "This case study describes features built and running in production. Specific customer data and proprietary model details are kept confidential.",
  },
  smartAutoWash: {
    title: "Smart Auto Wash — Car Wash Management App",
    subtitle:
      "A full-featured mobile and web application for managing car wash operations — from bookings and payments to staff scheduling and real-time status tracking.",
    overview:
      "Smart Auto Wash is a purpose-built platform for modern car wash businesses. It streamlines every aspect of operations: customer bookings, vehicle tracking, payment processing, and staff management — all in one integrated solution.",
    challenge: [
      "Unify booking, payment, and vehicle tracking workflows into a single seamless platform.",
      "Provide customers with real-time wash status updates and transparent pricing.",
      "Enable business owners to manage staff schedules, slots, and capacity efficiently.",
    ],
    approach: [
      "Mobile-first design for customers with an intuitive booking flow.",
      "Real-time updates using websockets for live wash progress tracking.",
      "Secure payment gateway integration with support for multiple payment methods.",
    ],
    features: [
      "Online booking with time-slot selection and service package options.",
      "Real-time wash status and notifications for customers.",
      "Staff and shift management dashboard for business owners.",
      "Revenue analytics and daily/weekly/monthly reporting.",
      "Loyalty program and discount management.",
    ],
    architectureFocus: [
      "Scalable backend designed to handle concurrent bookings across multiple locations.",
      "Role-based access control for customers, staff, and administrators.",
      "Offline-capable mobile app with data sync for low-connectivity environments.",
    ],
    operationsModel: [
      "Cloud-hosted with auto-scaling to handle peak hours and promotional surges.",
      "Continuous monitoring and alerting for booking and payment failures.",
      "Regular feature releases with zero-downtime deployments.",
    ],
    disclaimer:
      "This overview is a high-level summary of the Smart Auto Wash platform. Specific implementation details and customer data are kept confidential.",
  },
  kodachadriChitsCrp: {
    title: "Kodachadri Chits – CRP Platform",
    subtitle:
      "A core business platform for chit operations with an engineering-first approach to correctness, scalability, and security.",
    challenge: [
      "Modernize and unify operational workflows into a single platform.",
      "Design for auditability, access control, and future growth.",
      "Enable reliable operations with clear ownership and long-term maintenance.",
    ],
    approach: [
      "Discovery and domain modeling to align workflows and data.",
      "Architecture designed for modularity and long-term evolution.",
      "Quality gates: code review rigor, testing strategy, and release discipline.",
    ],
    architectureFocus: [
      "Role-based access control and secure authentication.",
      "Data integrity, audit trails, and reporting foundations.",
      "Scalability planning with observability and performance baselines.",
    ],
    operationsModel: [
      "Planned releases with tracking and transparent communication.",
      "Monitoring and incident response with root-cause analysis.",
      "Continuous improvements to reliability and maintainability.",
    ],
    disclaimer:
      "This case study is a high-level overview and does not include confidential customer data.",
  },
} as const;
