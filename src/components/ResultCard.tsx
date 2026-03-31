import { StatusBadge } from "./StatusBadge";
import type { AnalysisResult } from "../types/analysis";

export function ResultCard({ result }: { result: AnalysisResult }) {
  return (
    <section className="card-surface space-y-6 p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-3">
          <StatusBadge status={result.status} />
          <div>
            <h1 className="text-[2rem] font-extrabold leading-10 text-ink">{result.title}</h1>
            <p className="mt-3 text-base leading-7 text-body">{result.shortSummary}</p>
          </div>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <Metric label="Estimated market range" value={result.estimatedRange ?? "Not available"} />
        <Metric label="Your quote total" value={result.quoteTotal ?? "Not provided"} />
        <Metric label="Difference vs market" value={result.difference ?? "Within normal range"} />
      </div>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl bg-canvas px-4 py-5">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-body">{label}</p>
      <p className="mt-3 text-xl font-bold text-ink">{value}</p>
    </div>
  );
}
