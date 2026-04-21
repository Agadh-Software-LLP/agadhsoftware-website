"use client";

import { useMemo, useState } from "react";
import {
  GraduationCap,
  LayoutDashboard,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import type { SchoolRoleExperience } from "@/content/school-project-features";

const roleIconMap: Record<SchoolRoleExperience["role"], LucideIcon> = {
  Admin: LayoutDashboard,
  Teacher: GraduationCap,
  Parent: UsersRound,
};

export function RoleExperienceTabs({
  roles,
}: {
  roles: readonly SchoolRoleExperience[];
}) {
  const initialRole = roles[0]?.role ?? "Admin";
  const [activeRole, setActiveRole] =
    useState<SchoolRoleExperience["role"]>(initialRole);

  const active = useMemo(
    () => roles.find((role) => role.role === activeRole) ?? roles[0],
    [activeRole, roles]
  );

  if (!active) return null;

  const ActiveIcon = roleIconMap[active.role];

  return (
    <div className="rounded-3xl border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur sm:p-6">
      <div className="flex flex-wrap gap-2">
        {roles.map((role) => {
          const Icon = roleIconMap[role.role];
          const isActive = role.role === active.role;

          return (
            <button
              key={role.role}
              type="button"
              onClick={() => setActiveRole(role.role)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
                isActive
                  ? "border-blue-300 bg-blue-50 text-blue-900 shadow-sm"
                  : "border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:text-slate-900"
              }`}
            >
              <Icon className="h-4 w-4" />
              {role.role}
            </button>
          );
        })}
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <article className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue-900 shadow-sm">
            <ActiveIcon className="h-5 w-5" />
          </span>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
            {active.panelTitle}
          </p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
            {active.headline}
          </h3>
          <p className="mt-4 rounded-xl border border-blue-100 bg-white px-4 py-3 text-sm text-slate-700">
            {active.metric}
          </p>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Execution Points
          </p>
          <ul className="mt-4 space-y-3">
            {active.points.map((point) => (
              <li key={point} className="flex gap-3 text-sm text-slate-700">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-800" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </div>
  );
}
