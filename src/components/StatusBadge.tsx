import type { AnalysisStatus } from "../types/analysis";
import { statusTone } from "../lib/utils";

export function StatusBadge({ status }: { status: AnalysisStatus }) {
  const tone = statusTone[status];
  return (
    <span className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-bold ${tone.chip}`}>
      <span className={`h-2.5 w-2.5 rounded-full ${tone.pill}`} />
      {tone.text}
    </span>
  );
}
