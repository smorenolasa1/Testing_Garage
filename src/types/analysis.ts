export type AnalysisType = "symptom" | "warning-light" | "quote";

export type AnalysisStatus = "reasonable" | "review" | "expensive";

export interface HistoryEntry {
  id: string;
  date: string;
  type: AnalysisType;
  status: AnalysisStatus;
  summary: string;
  title: string;
}

export interface ResultItem {
  title: string;
  detail: string;
}

export interface AnalysisResult extends HistoryEntry {
  estimatedRange?: string;
  quoteTotal?: string;
  difference?: string;
  badgeLabel: string;
  shortSummary: string;
  possibleCauses: ResultItem[];
  whatSeemsOkay: string[];
  reviewItems: string[];
  questions: string[];
  nextSteps: string[];
}

export interface AnalysisDraft {
  type: AnalysisType;
  title: string;
  summary: string;
}
