import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { classNames } from "../lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  fullWidth?: boolean;
}

export function Button({
  children,
  className,
  variant = "primary",
  fullWidth = true,
  type = "button",
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className={classNames(
        "inline-flex min-h-16 items-center justify-center gap-3 rounded-full px-6 text-base font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 disabled:cursor-not-allowed disabled:opacity-60",
        fullWidth && "w-full",
        variant === "primary" &&
          "bg-brand-600 text-white shadow-soft hover:bg-brand-700 active:bg-brand-700",
        variant === "secondary" &&
          "bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-100 hover:bg-brand-100",
        variant === "ghost" && "bg-transparent text-ink hover:bg-white/70",
        className,
      )}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
