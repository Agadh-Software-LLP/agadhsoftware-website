export type EducareIconName =
  | "GraduationCap"
  | "Users"
  | "ClipboardCheck"
  | "CalendarClock"
  | "FileSpreadsheet"
  | "Trophy"
  | "WalletCards"
  | "Smartphone"
  | "BookOpenCheck"
  | "Bell"
  | "MessageSquareHeart"
  | "BusFront"
  | "BarChart3"
  | "ShieldCheck"
  | "Sparkles"
  | "School"
  | "UserRoundCheck"
  | "Heart"
  | "Eye"
  | "TrendingUp"
  | "Building2"
  | "Smile";

export type EducareProofMetric = {
  value: string;
  label: string;
  detail: string;
};

export type EducareFeatureCategory = {
  icon: EducareIconName;
  title: string;
  description: string;
  highlights: string[];
};

export type EducareBenefit = {
  icon: EducareIconName;
  title: string;
  description: string;
};

export type EducareScreenshot = {
  src: string;
  title: string;
  caption: string;
};

export type EducareScreenshotGroup = {
  id: string;
  title: string;
  description: string;
  shape: "desktop" | "phone";
  items: EducareScreenshot[];
  footnote?: string;
};

export type EducareWhyPoint = {
  icon: EducareIconName;
  title: string;
  description: string;
};

export const schoolProjectsContent = {
  brandName: "Agadh Educare",

  hero: {
    eyebrow: "Agadh Educare",
    title:
      "Complete Digital Transformation for Schools and Colleges",
    titleHighlight: "Digital Transformation",
    subtitle:
      "A smart, AI-powered education management platform that connects management, teachers, parents and students in one place. Empowering institutions to improve transparency, communication and academic excellence every single day.",
    ctas: [
      { label: "Book a Demo", href: "/contact?intent=demo", variant: "primary" as const },
      { label: "See Features", href: "#features", variant: "secondary" as const },
    ],
    points: [
      { icon: "Sparkles" as EducareIconName, label: "AI-powered insights for smarter decision-making" },
      { icon: "ShieldCheck" as EducareIconName, label: "Complete visibility of academic and administrative activities" },
      { icon: "Users" as EducareIconName, label: "Stronger communication between school and parents" },
      { icon: "TrendingUp" as EducareIconName, label: "Better learning outcomes and student growth" },
      { icon: "CalendarClock" as EducareIconName, label: "Saves time, reduces manual work and improves efficiency" },
      { icon: "Smile" as EducareIconName, label: "Simple, professional and easy for everyone to use" },
    ],
    aiHighlight: {
      icon: "Sparkles" as EducareIconName,
      title: "AI That Works for Your Institution",
      description:
        "Agadh EduCare uses the power of AI to understand patterns, provide smart insights and help your institution stay ahead in today's digital education era.",
    },
  },

  trustBar: {
    title: "Built for Indian schools and colleges",
    badges: [
      "Web portal for management",
      "Mobile app for parents",
      "Mobile app for teachers",
    ],
    note:
      "Designed for chairmen, principals, administrators, teachers, and parents.",
  },

  proofMetrics: [
    {
      value: "One Platform",
      label: "For the entire institution",
      detail:
        "Management, teachers, parents, and students stay connected in a single place.",
    },
    {
      value: "Real-Time",
      label: "Updates and notifications",
      detail:
        "Parents and management see what is happening on campus as it happens.",
    },
    {
      value: "Multi-Child",
      label: "Support for parents",
      detail:
        "Parents with more than one child in the institution can switch between profiles in one tap.",
    },
    {
      value: "Daily",
      label: "Visibility for parents",
      detail:
        "Attendance, timetable, homework, exams, results, and fees in one place.",
    },
  ] satisfies EducareProofMetric[],

  overview: {
    eyebrow: "Project Overview",
    title: "One platform for the whole institution",
    description:
      "Agadh Educare is a complete digital transformation platform built for modern schools and colleges. From admission to alumni, it brings academics, communication, finance and operations into one connected experience \u2014 improving transparency between management, teachers, parents and students, and making daily work simpler, faster and more professional.",
    pillars: [
      {
        icon: "Building2" as EducareIconName,
        title: "For Management",
        description:
          "Monitor every academic and operational activity of the institution from a single dashboard.",
      },
      {
        icon: "GraduationCap" as EducareIconName,
        title: "For Teachers",
        description:
          "Update daily academic activities, attendance, homework, and student progress in just a few taps.",
      },
      {
        icon: "Heart" as EducareIconName,
        title: "For Parents",
        description:
          "Stay connected with your child's education every single day — wherever you are.",
      },
      {
        icon: "Smile" as EducareIconName,
        title: "For Students",
        description:
          "A clearer view of timetable, homework, exams, and results — without confusion.",
      },
    ],
    valueLine:
      "Improves transparency, communication, and operational efficiency — all in one place.",
  },

  features: {
    eyebrow: "Main Features",
    title: "Every school workflow, under one roof",
    description:
      "From admission to alumni, Agadh Educare brings academics, care, communication, finance and operations into one connected experience for the whole institution.",
    categories: [
      { icon: "Building2", title: "Institution Digital Transformation", description: "A complete shift from paper registers and scattered tools to one professional, digital platform.", highlights: ["One single source of truth for the institution", "Less paperwork and manual coordination", "Modern, professional experience for every stakeholder"] },
      { icon: "BarChart3", title: "Management Dashboard", description: "A clean command centre for chairmen, principals and administrators to monitor the institution every day.", highlights: ["Today's attendance and pending fees at a glance", "Upcoming events and important alerts", "Risk signals that need attention"] },
      { icon: "Users", title: "Student Management", description: "A complete and organized record of every student in the institution.", highlights: ["Student profiles and personal details", "Class and section assignment", "Parent and guardian information"] },
      { icon: "GraduationCap", title: "Teacher Management", description: "Manage teaching staff, departments, subjects and class allocations with ease.", highlights: ["Teacher directory and roles", "Subject and class allocation", "Daily teacher activity overview"] },
      { icon: "School", title: "Class & Section Management", description: "Organize classes, sections and subjects to match your institution's structure.", highlights: ["Class and section setup", "Subject mapping for every class", "Class teacher assignment"] },
      { icon: "ClipboardCheck", title: "Attendance Tracking", description: "Quick, accurate attendance with daily visibility for parents and management.", highlights: ["Daily classroom attendance", "Instant absence alerts to parents", "Class-wise and section-wise summaries"] },
      { icon: "CalendarClock", title: "Timetable Management", description: "Publish a clear weekly timetable that everyone can view from the app.", highlights: ["Weekly class schedule", "Subject-wise periods", "Always available to parents and students"] },
      { icon: "BookOpenCheck", title: "Academic Activities", description: "Capture homework, assignments and classroom activities every day.", highlights: ["Daily homework updates", "Activity notes for the class", "Submission tracking"] },
      { icon: "FileSpreadsheet", title: "Exam Schedule", description: "Plan and share exam schedules with parents and students well in advance.", highlights: ["Term and exam planning", "Subject-wise exam dates", "Auto-shared with parents"] },
      { icon: "Trophy", title: "Result Tracking", description: "Publish results and report cards in a structured, easy-to-read format.", highlights: ["Subject-wise marks", "Term and final results", "Parent-friendly report cards"] },
      { icon: "WalletCards", title: "Fee Information", description: "Give parents clear visibility on fee status, dues and receipts.", highlights: ["Fee status per child", "Pending and paid details", "Gentle automatic reminders"] },
      { icon: "Bell", title: "Notifications", description: "Send important updates, circulars and announcements to the right people instantly.", highlights: ["Class-wide and school-wide alerts", "Event and holiday reminders", "Personalized child updates"] },
      { icon: "MessageSquareHeart", title: "Parent Communication", description: "Bridge the gap between teachers, parents and management with smooth, school-moderated communication.", highlights: ["Teacher-parent messaging", "Important circulars", "Quick, friendly responses"] },
      { icon: "Smartphone", title: "Parent Mobile App", description: "A dedicated mobile app that keeps parents connected with their child every day.", highlights: ["All academic information in one app", "Instant notifications", "Multi-child profile support"] },
      { icon: "GraduationCap", title: "Teacher Mobile App", description: "A focused mobile app that helps teachers manage their daily classroom work.", highlights: ["Mark attendance on the go", "Share homework and updates", "Communicate with parents"] },
      { icon: "UserRoundCheck", title: "Multi-Child Profile", description: "Parents with more than one child in the institution can switch between profiles instantly.", highlights: ["Single login for the whole family", "One-tap child switcher", "Separate updates for each child"] },
      { icon: "BusFront", title: "Live Transport Tracking", description: "Real-time bus location and arrival updates that keep parents and the transport team in sync.", highlights: ["Live bus location on a map", "Pickup and drop confirmations", "Peace of mind for parents"] },
      { icon: "Heart", title: "Behaviour & Care", description: "A gentle, honest record of how every child is growing \u2014 not just their marks.", highlights: ["Positive and improvement notes", "Class-level trends", "Early signals before parent meetings"] },
      { icon: "ShieldCheck", title: "Hostel Safety", description: "Outpass, visitor logs, room transfers and incident reports \u2014 all tracked and traceable.", highlights: ["Outpass requests and approvals", "Visitor and incident logs", "Room and transfer management"] },
      { icon: "CalendarClock", title: "Events & PTM", description: "Plan school events and parent-teacher meetings with self-service slot booking and reminders.", highlights: ["School events and holidays", "PTM slot booking", "Automatic reminders"] },
    ] satisfies EducareFeatureCategory[],
  },

  aiSmart: {
    eyebrow: "Smart Intelligence",
    title: "AI-Powered Smart Features",
    description:
      "Agadh Educare uses AI thoughtfully — to make daily work simpler for teachers, give parents better visibility into their child's growth and help management make smarter, faster decisions.",
    items: [
      { icon: "TrendingUp", title: "Smart Student Progress Insights", description: "Friendly insights help track academic progress and spot what is improving and what needs attention." },
      { icon: "Bell", title: "Intelligent Notifications for Parents", description: "Important updates reach the right parent at the right time, without noise or clutter." },
      { icon: "Eye", title: "Better Attendance & Performance Visibility", description: "Easy-to-read patterns across attendance, exams and behaviour for every class and child." },
      { icon: "MessageSquareHeart", title: "Simpler Teacher-Parent Communication", description: "AI assists in keeping conversations clear, polite and focused on the child." },
      { icon: "Sparkles", title: "Quick Access to Important Information", description: "Smart summaries bring the most useful information forward — so no one has to search for it." },
      { icon: "BarChart3", title: "Data-Driven Decisions for Management", description: "Daily insights help leadership make better decisions for the institution, faster." },
    ] satisfies EducareBenefit[],
    note:
      "Used responsibly — AI assists people; it does not replace teachers, parents or administrators.",
  },

  parentApp: {
    eyebrow: "Parent App",
    title: "Stay close to your child's education — every day",
    description:
      "The Agadh Educare Parent App brings attendance, timetable, homework, exams, results, fees and notifications into one simple place. AI-assisted insights help parents better understand their child's progress, build trust with the institution and never feel out of the loop.",
    image: "/educare/mobile/m01_parent_home.png",
    benefits: [
      { icon: "Eye", title: "View Daily Education Updates", description: "See what your child is studying, what was taught, and what was assigned each day." },
      { icon: "ClipboardCheck", title: "Track Attendance", description: "Know if your child is present, absent, or late — the moment it is marked." },
      { icon: "CalendarClock", title: "View Timetable", description: "Always have your child's class timetable ready in your pocket." },
      { icon: "FileSpreadsheet", title: "Check Exam Schedules", description: "Get all exam dates and subjects in advance — never miss an important date." },
      { icon: "Trophy", title: "View Results", description: "See term and final results, with subject-wise marks, in a clean layout." },
      { icon: "WalletCards", title: "View Fee Status", description: "Check fees paid and fees pending without calling the office." },
      { icon: "Bell", title: "Receive Notifications", description: "Important announcements, holidays, and emergencies reach you instantly." },
      { icon: "UserRoundCheck", title: "Multiple Children Support", description: "If you have more than one child in the institution, switch between them with a single tap." },
    ] satisfies EducareBenefit[],
  },

  teacherApp: {
    eyebrow: "Teacher App",
    title: "Make daily classroom work simpler",
    description:
      "The Agadh Educare Teacher App reduces paperwork and helps teachers focus on what matters most — teaching. AI-supported tools help teachers manage academic updates more efficiently, keeping daily updates, attendance, homework and communication in one place.",
    image: "/educare/mobile/m10_teacher_home.png",
    benefits: [
      { icon: "BookOpenCheck", title: "Manage Daily Academic Updates", description: "Capture what was taught, what was assigned, and what's planned next." },
      { icon: "ClipboardCheck", title: "Update Attendance Easily", description: "Mark classroom attendance quickly and accurately on the mobile." },
      { icon: "GraduationCap", title: "Share Homework & Activities", description: "Assign homework and classroom activities — parents see them instantly." },
      { icon: "MessageSquareHeart", title: "Communicate Important Updates", description: "Send clear messages to parents without phone calls or paper notes." },
      { icon: "TrendingUp", title: "Track Student Progress", description: "Keep an eye on each student's academic and behavioral progress." },
    ] satisfies EducareBenefit[],
  },

  managementBenefits: {
    eyebrow: "For Management",
    title: "Run your institution with clarity and confidence",
    description:
      "Agadh Educare gives chairmen, principals and administrators a single, professional view of the entire institution — with AI-driven insights that provide better visibility into overall institution performance.",
    items: [
      { icon: "Building2", title: "Better Operational Control", description: "Get a clear, centralized view of school or college operations every single day." },
      { icon: "Sparkles", title: "Less Manual Work", description: "Replace paperwork, registers, and manual follow-ups with simple digital workflows." },
      { icon: "Smile", title: "Improved Parent Satisfaction", description: "Parents stay informed and confident, which improves trust in the institution." },
      { icon: "Bell", title: "Faster Communication", description: "Reach the entire community — parents, teachers, students — in seconds." },
      { icon: "Eye", title: "Better Transparency", description: "Every academic activity, attendance, and result is visible and traceable." },
      { icon: "BarChart3", title: "Centralized Monitoring", description: "Monitor classes, teachers, attendance, and fees from a single dashboard." },
      { icon: "ShieldCheck", title: "Professional Digital Image", description: "Project a modern, well-managed image to parents, students, and visitors." },
      { icon: "TrendingUp", title: "Faster Decisions", description: "Daily insights help leadership make better decisions, faster." },
    ] satisfies EducareBenefit[],
  },

  screenshots: {
    eyebrow: "Inside the Platform",
    title: "Key Screens Across the Platform",
    description:
      "A handpicked look at the management portal, parent app and teacher app — designed to be simple, professional and easy to use.",
    groups: [
      {
        id: "admin",
        title: "Management Portal",
        description: "A clean web portal for chairmen, principals and administrators to run the entire institution.",
        shape: "desktop",
        items: [
          { src: "/educare/web/10_dashboard.png", title: "Daily Dashboard", caption: "An at-a-glance view of the institution's daily activity." },
          { src: "/educare/web/30_students.png", title: "Student Records", caption: "Organized profiles for every student in the institution." },
          { src: "/educare/web/33_timetable.png", title: "Timetable", caption: "Plan and publish weekly timetables in minutes." },
          { src: "/educare/web/40_attendance.png", title: "Attendance", caption: "Daily attendance with instant updates to parents." },
          { src: "/educare/web/44_results.png", title: "Results", caption: "Publish term and final results in a clean format." },
          { src: "/educare/web/70_fees.png", title: "Fee Management", caption: "Clear visibility into fee status across the institution." },
        ],
        footnote: "Agadh Educare Management Portal includes many more screens covering academics, behaviour, hostel, transport, communication and administration workflows.",
      },
      {
        id: "parent",
        title: "Parent App",
        description: "Everything a parent needs to stay connected with their child's daily education.",
        shape: "phone",
        items: [
          { src: "/educare/mobile/m01_parent_home.png", title: "Parent Home", caption: "A simple home screen with everything that matters." },
          { src: "/educare/mobile/mq01_parent_attendance.png", title: "Attendance", caption: "Track your child's daily attendance." },
          { src: "/educare/mobile/mq02_parent_homework.png", title: "Homework", caption: "View daily homework and classroom activities." },
          { src: "/educare/mobile/mq10_parent_results.png", title: "Results", caption: "Subject-wise marks and term results." },
          { src: "/educare/mobile/mq05_parent_fees.png", title: "Fees", caption: "Pending and paid fee status at a glance." },
        ],
        footnote: "Agadh Educare Parent App includes many more screens covering timetable, exams, PTM, leave, hostel, live bus tracking and weekly summary.",
      },
      {
        id: "teacher",
        title: "Teacher App",
        description: "A focused mobile experience that helps teachers manage daily classroom work.",
        shape: "phone",
        items: [
          { src: "/educare/mobile/m10_teacher_home.png", title: "Teacher Home", caption: "Daily classes and pending tasks at a glance." },
          { src: "/educare/mobile/m11_teacher_attendance.png", title: "Class Attendance", caption: "Mark attendance quickly and accurately." },
          { src: "/educare/mobile/m12_teacher_homework.png", title: "Homework", caption: "Share homework and activities with parents." },
          { src: "/educare/mobile/m13_teacher_chat.png", title: "Communication", caption: "Communicate important updates to parents." },
          { src: "/educare/mobile/m14_teacher_profile.png", title: "Teacher Profile", caption: "Manage profile and account settings." },
        ],
        footnote: "Agadh Educare Teacher App includes many more teacher screens designed for end-to-end classroom management.",
      },
    ] satisfies EducareScreenshotGroup[],
  },

  whyChoose: {
    eyebrow: "Why Choose Agadh Educare",
    title: "A trusted partner for your institution's digital journey",
    description:
      "Agadh Educare is built specifically for the way Indian schools and colleges operate — practical, reliable, and easy for everyone.",
    points: [
      { icon: "School", title: "Built for Indian Schools and Colleges", description: "Designed around the real workflows of Indian institutions — not adapted from generic software." },
      { icon: "Smile", title: "Easy for Parents and Teachers", description: "A clean, simple interface that requires no training for parents or staff." },
      { icon: "Heart", title: "Improves Trust", description: "Daily transparency builds long-term trust between parents and the institution." },
      { icon: "Sparkles", title: "Complete Digitization", description: "Supports the full digital transformation of academic and operational activities." },
      { icon: "TrendingUp", title: "Faster Decisions", description: "Helps management make confident, data-backed decisions every day." },
      { icon: "Eye", title: "Daily Visibility for Parents", description: "Parents always know how their child is doing — without asking." },
    ] satisfies EducareWhyPoint[],
  },

  closing: {
    eyebrow: "Get Started",
    title: "Bring Agadh Educare to your institution",
    description:
      "See how Agadh Educare can transform your school or college. Book a free demo with our team and experience the platform firsthand.",
    primaryCta: { label: "Book a Demo", href: "/contact?intent=demo" },
    secondaryCta: { label: "Talk to Us", href: "/contact" },
  },

  // Used by the home page teaser section.
  teaser: {
    eyebrow: "Agadh Educare",
    title: "Complete digital transformation for schools and colleges",
    description:
      "Agadh Educare connects management, teachers, parents, and students in one place — improving transparency, communication, and operational efficiency.",
    highlights: [
      "Daily visibility of every child's education for parents",
      "Simple mobile apps for parents and teachers",
      "Centralized dashboard for institution leadership",
      "Built for Indian schools and colleges",
    ],
    primaryCta: { label: "Explore Educare", href: "/educare" },
    secondaryCta: { label: "Book Demo", href: "/contact?intent=demo" },
  },
} as const;

export type SchoolProjectsContent = typeof schoolProjectsContent;
