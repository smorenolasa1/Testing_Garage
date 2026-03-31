import type { PropsWithChildren, ReactNode } from "react";

interface SectionCardProps extends PropsWithChildren {
  title?: string;
  description?: string;
  icon?: ReactNode;
  className?: string;
}

export function SectionCard({
  title,
  description,
  icon,
  className = "",
  children,
}: SectionCardProps) {
  return (
    <section className={`card-surface p-6 ${className}`}>
      {title ? (
        <div className="mb-5 flex items-start gap-4">
          {icon ? (
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
              {icon}
            </div>
          ) : null}
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-ink">{title}</h2>
            {description ? <p className="text-sm leading-6 text-body">{description}</p> : null}
          </div>
        </div>
      ) : null}
      {children}
    </section>
  );
}
