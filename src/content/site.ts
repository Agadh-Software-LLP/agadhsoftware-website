export const site = {
  name: "Agadh Software LLP",
  tagline: "Build Deep. Build Right.",
  coreMessage:
    "Agadh Software LLP is a trusted technology partner that builds deep, correct, and scalable software systems and owns them end-to-end.",
  description:
    "Enterprise-grade software engineering partner for custom software development, end-to-end project delivery, and long-term maintenance.",
  contact: {
    email: "support@agadhsoft.com",
    phone: "+91-XXXXXXXXXX",
  },
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/industries", label: "Industries" },
    { href: "/case-study/kodachadri-chits-crp", label: "Case Study" },
    { href: "/why-agadh", label: "Why Agadh" },
    { href: "/tech-stack", label: "Tech Stack" },
    { href: "/contact", label: "Contact" },
  ],
} as const;

export type SiteConfig = typeof site;
