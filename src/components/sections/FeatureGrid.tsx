import type { ReactNode } from "react";

export type Feature = {
  title: ReactNode;
  description: ReactNode;
};

export function FeatureGrid({ features }: { features: Feature[] }) {
  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((f, idx) => (
        <div
          key={idx}
          className="rounded-xl border border-slate-200 bg-white p-6"
        >
          <div className="text-base font-semibold text-slate-950">{f.title}</div>
          <div className="mt-2 text-sm leading-relaxed text-slate-600">
            {f.description}
          </div>
        </div>
      ))}
    </div>
  );
}
