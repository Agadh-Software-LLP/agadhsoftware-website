export type Owner = Readonly<{
  name: string;
  role: string;
  bio: string;
  imageSrc?: string;
}>;

export const owners: readonly Owner[] = [
  {
    name: "Ankitha D",
    role: "Co-founder & Engineering",
    bio: "Leads architecture and delivery quality. Focused on correctness, scalability, and building maintainable systems.",
  },
  {
    name: "Neeta Ambi",
    role: "Co-founder & Product",
    bio: "Drives product thinking and customer outcomes. Ensures features map to real workflows and measurable impact.",
  },
  {
    name: "Avinash B K",
    role: "Co-founder & Operations",
    bio: "Owns execution and long-term partnership. Focused on reliable delivery, support, and sustainable operations.",
  },
] as const;
