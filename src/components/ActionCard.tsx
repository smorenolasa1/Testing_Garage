import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "./Icons";

interface ActionCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  cta: string;
  to: string;
}

export function ActionCard({ icon, title, description, cta, to }: ActionCardProps) {
  return (
    <article className="card-surface relative overflow-hidden p-8">
      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-brand-50/70" />
      <div className="relative space-y-7">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
          {icon}
        </div>
        <div className="space-y-3">
          <h2 className="text-[1.65rem] font-bold leading-8 text-ink">{title}</h2>
          <p className="text-base leading-7 text-body">{description}</p>
        </div>
        <Link
          className="inline-flex min-h-16 w-full items-center justify-center gap-3 rounded-full bg-brand-600 px-6 text-base font-semibold text-white shadow-soft transition hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
          to={to}
        >
          {cta}
          <ArrowRightIcon className="h-5 w-5" />
        </Link>
      </div>
    </article>
  );
}
