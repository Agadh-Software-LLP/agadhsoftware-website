import type { ReactNode } from "react";
import Link from "next/link";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

interface ButtonBaseProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

interface ButtonProps extends ButtonBaseProps {
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

interface LinkButtonProps extends ButtonBaseProps {
  href: string;
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  target?: string;
  rel?: string;
}

const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 no-underline cursor-pointer";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-blue-900 to-blue-800 text-white hover:from-blue-950 hover:to-blue-900 shadow-md hover:shadow-lg",
  secondary:
    "bg-gradient-to-r from-slate-200 to-slate-100 text-slate-950 hover:from-slate-300 hover:to-slate-200 shadow-sm hover:shadow-md",
  outline:
    "border-2 border-blue-900 bg-white text-blue-900 hover:bg-blue-50 transition-colors",
  ghost:
    "text-blue-900 hover:bg-blue-50",
};

const sizeStyles: Record<"sm" | "md" | "lg", string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-3 text-base",
};

function getButtonClasses(variant: ButtonVariant = "primary", size: "sm" | "md" | "lg" = "md", disabled?: boolean, className?: string): string {
  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";
  return `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className || ""}`.trim();
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  className,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={getButtonClasses(variant, size, disabled, className)}
    >
      {children}
    </button>
  );
}

export function LinkButton({
  href,
  children,
  variant = "primary",
  size = "md",
  target,
  rel,
  className,
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={getButtonClasses(variant, size, false, className)}
    >
      {children}
    </Link>
  );
}
