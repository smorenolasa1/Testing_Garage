import { Link } from "react-router-dom";
import { StatusBadge } from "./StatusBadge";
import { typeLabel } from "../lib/utils";
import type { HistoryEntry } from "../types/analysis";

export function HistoryCard({ entry }: { entry: HistoryEntry }) {
  return (
    <Link
      className="card-surface block p-6 transition hover:-translate-y-0.5"
      to={`/result?id=${entry.id}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-body">{entry.date}</p>
          <h2 className="mt-2 text-xl font-bold text-ink">{entry.title}</h2>
          <p className="mt-3 text-sm uppercase tracking-[0.16em] text-brand-700">
            {typeLabel[entry.type]}
          </p>
        </div>
        <StatusBadge status={entry.status} />
      </div>
      <p className="mt-4 text-base leading-7 text-body">{entry.summary}</p>
    </Link>
  );
}
