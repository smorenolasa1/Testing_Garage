import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AppShell } from "../components/AppShell";
import { ProgressSteps } from "../components/ProgressSteps";
import { SparklesIcon } from "../components/Icons";
import { useAnalysis } from "../lib/analysis-context";

const steps = [
  "Reading information",
  "Understanding the issue",
  "Preparing your result",
];

export function AnalyzingPage() {
  const navigate = useNavigate();
  const { addHistoryEntry } = useAnalysis();
  const [searchParams] = useSearchParams();
  const [activeIndex, setActiveIndex] = useState(0);
  const resultId = searchParams.get("id") ?? "quote-brakes";

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setActiveIndex(1), 900),
      window.setTimeout(() => setActiveIndex(2), 1800),
      window.setTimeout(() => {
        addHistoryEntry(resultId);
        navigate(`/result?id=${resultId}`, { replace: true });
      }, 2800),
    ];

    return () => timers.forEach(window.clearTimeout);
  }, [addHistoryEntry, navigate, resultId]);

  return (
    <AppShell>
      <div className="page-pad flex min-h-[calc(100vh-160px)] flex-col items-center justify-center space-y-10">
        <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-float">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-brand-100 border-t-brand-600 text-brand-700 animate-spin">
            <SparklesIcon className="h-7 w-7 animate-none" />
          </div>
        </div>
        <div className="space-y-4 text-center">
          <h1 className="text-[2rem] font-extrabold leading-10 text-ink">We’re checking this now</h1>
          <p className="mx-auto max-w-[18rem] text-lg leading-8 text-body">
            This usually takes a few seconds.
          </p>
        </div>
        <div className="w-full max-w-[342px]">
          <ProgressSteps activeIndex={activeIndex} steps={steps} />
        </div>
      </div>
    </AppShell>
  );
}
