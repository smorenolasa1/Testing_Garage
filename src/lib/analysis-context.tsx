import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";
import { mockResults, sampleHistory } from "../data/mockAnalyses";
import type { AnalysisDraft, AnalysisResult, HistoryEntry } from "../types/analysis";

interface AnalysisContextValue {
  history: HistoryEntry[];
  currentDraft: AnalysisDraft | null;
  setCurrentDraft: (draft: AnalysisDraft | null) => void;
  getResultById: (id: string) => AnalysisResult | undefined;
  addHistoryEntry: (resultId: string) => void;
}

const STORAGE_KEY = "fairgarage-history";

const AnalysisContext = createContext<AnalysisContextValue | null>(null);

export function AnalysisProvider({ children }: PropsWithChildren) {
  const [history, setHistory] = useState<HistoryEntry[]>(sampleHistory);
  const [currentDraft, setCurrentDraft] = useState<AnalysisDraft | null>(null);

  useEffect(() => {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return;

    try {
      const parsed = JSON.parse(raw) as HistoryEntry[];
      if (Array.isArray(parsed) && parsed.length > 0) {
        setHistory(parsed);
      }
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  }, [history]);

  const value = useMemo<AnalysisContextValue>(
    () => ({
      history,
      currentDraft,
      setCurrentDraft,
      getResultById: (id) => mockResults[id],
      addHistoryEntry: (resultId) => {
        const result = mockResults[resultId];
        if (!result) return;

        setHistory((existing) => {
          const withoutDuplicate = existing.filter((item) => item.id !== resultId);
          return [result, ...withoutDuplicate];
        });
      },
    }),
    [currentDraft, history],
  );

  return <AnalysisContext.Provider value={value}>{children}</AnalysisContext.Provider>;
}

export function useAnalysis() {
  const context = useContext(AnalysisContext);
  if (!context) {
    throw new Error("useAnalysis must be used inside AnalysisProvider");
  }
  return context;
}
