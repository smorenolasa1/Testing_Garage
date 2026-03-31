import type { AnalysisStatus, AnalysisType } from "../types/analysis";

export const classNames = (...parts: Array<string | false | null | undefined>) =>
  parts.filter(Boolean).join(" ");

export const typeLabel: Record<AnalysisType, string> = {
  symptom: "Symptom",
  "warning-light": "Warning light",
  quote: "Quote",
};

export const statusTone: Record<
  AnalysisStatus,
  { chip: string; pill: string; text: string }
> = {
  reasonable: {
    chip: "bg-emerald-50 text-success ring-1 ring-emerald-200",
    pill: "bg-emerald-500",
    text: "Looks reasonable",
  },
  review: {
    chip: "bg-amber-50 text-warning ring-1 ring-amber-200",
    pill: "bg-amber-400",
    text: "Review carefully",
  },
  expensive: {
    chip: "bg-rose-50 text-danger ring-1 ring-rose-200",
    pill: "bg-rose-500",
    text: "Possibly expensive",
  },
};
