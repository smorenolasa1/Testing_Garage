import { AppShell } from "../components/AppShell";
import { HistoryCard } from "../components/HistoryCard";
import { ScreenHeader } from "../components/ScreenHeader";
import { useAnalysis } from "../lib/analysis-context";

export function HistoryPage() {
  const { history } = useAnalysis();

  return (
    <AppShell>
      <div className="page-pad space-y-8">
        <ScreenHeader
          subtitle="Review your past vehicle help checks and see what needed attention."
          title="Your Analysis History"
        />

        <div className="grid grid-cols-2 gap-4">
          <Metric label="Total scans" value={String(history.length).padStart(2, "0")} />
          <Metric label="Potential issues found" value="18" emphasis />
          <Metric label="Estimated savings" value="$1,420" />
          <Metric label="Peace of mind" value="Higher" />
        </div>

        <div className="space-y-5">
          {history.map((entry) => (
            <HistoryCard entry={entry} key={entry.id} />
          ))}
        </div>
      </div>
    </AppShell>
  );
}

function Metric({
  label,
  value,
  emphasis,
}: {
  label: string;
  value: string;
  emphasis?: boolean;
}) {
  return (
    <div className={`card-surface p-5 ${emphasis ? "bg-brand-700 text-white" : ""}`}>
      <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${emphasis ? "text-white/75" : "text-body"}`}>
        {label}
      </p>
      <p className={`mt-4 text-[1.85rem] font-extrabold ${emphasis ? "text-white" : "text-ink"}`}>{value}</p>
    </div>
  );
}
