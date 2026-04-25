import type { ReactNode } from "react";

type Gutter = "default" | "none";

export function Container({
  children,
  gutter = "default",
}: {
  children: ReactNode;
  gutter?: Gutter;
}) {
  const padding =
    gutter === "none" ? "" : "px-4 sm:px-6 lg:px-8";
  return (
    <div className={`mx-auto w-full max-w-6xl ${padding}`.trim()}>
      {children}
    </div>
  );
}
