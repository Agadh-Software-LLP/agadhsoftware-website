export const caseStudies = {
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
