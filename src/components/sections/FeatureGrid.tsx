import type { ReactNode } from "react";

export type Feature = {
  title: ReactNode;
  description: ReactNode;
};

export function FeatureGrid({ features }: { features: Feature[] }) {
  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((f, idx) => (
        <div
          key={idx}
          className="group relative overflow-hidden rounded-lg border border-slate-200/60 bg-white p-6 shadow-sm hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5"
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100" />
          <div className="text-base font-semibold text-slate-950">{f.title}</div>
          <div className="mt-3 text-sm leading-relaxed text-slate-600">
            {f.description}
          </div>
        </div>
      ))}
    </div>
  );
}
