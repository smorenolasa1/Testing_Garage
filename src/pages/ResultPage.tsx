import { useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AppShell } from "../components/AppShell";
import { Button } from "../components/Button";
import { QuestionCard } from "../components/QuestionCard";
import { ResultCard } from "../components/ResultCard";
import { SectionCard } from "../components/SectionCard";
import { AlertIcon, CheckIcon, HelpIcon, InfoIcon } from "../components/Icons";
import { useAnalysis } from "../lib/analysis-context";

export function ResultPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { getResultById } = useAnalysis();
  const id = searchParams.get("id") ?? "quote-brakes";
  const result = useMemo(() => getResultById(id), [getResultById, id]);

  if (!result) {
    return (
      <AppShell>
        <div className="page-pad">
          <SectionCard title="Result not found">
            <p className="text-base leading-7 text-body">
              This demo result is not available. Please return home and try another analysis path.
            </p>
            <div className="mt-6">
              <Button onClick={() => navigate("/")}>Go home</Button>
            </div>
          </SectionCard>
        </div>
      </AppShell>
    );
  }

  return (
    <AppShell>
      <div className="page-pad space-y-8">
        <ResultCard result={result} />

        <SectionCard icon={<InfoIcon className="h-5 w-5" />} title="Possible causes">
          <div className="space-y-4">
            {result.possibleCauses.map((cause) => (
              <div className="rounded-[28px] bg-canvas px-5 py-5" key={cause.title}>
                <h3 className="text-lg font-bold text-ink">{cause.title}</h3>
                <p className="mt-2 text-base leading-7 text-body">{cause.detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard icon={<CheckIcon className="h-5 w-5" />} title="What seems okay">
          <ul className="space-y-4">
            {result.whatSeemsOkay.map((item) => (
              <li className="rounded-[24px] bg-emerald-50 px-5 py-4 text-base leading-7 text-ink" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard icon={<AlertIcon className="h-5 w-5" />} title="What may need review">
          <ul className="space-y-4">
            {result.reviewItems.map((item) => (
              <li className="rounded-[24px] bg-amber-50 px-5 py-4 text-base leading-7 text-ink" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard icon={<HelpIcon className="h-5 w-5" />} title="Questions to ask the workshop">
          <div className="space-y-4">
            {result.questions.map((question) => (
              <QuestionCard key={question} question={question} />
            ))}
          </div>
        </SectionCard>

        <section className="card-surface p-6 text-center">
          <h2 className="text-2xl font-bold text-ink">What you can do next</h2>
          <div className="mt-6 space-y-3">
            {result.nextSteps.map((step, index) => (
              <Button key={step} variant={index === 0 ? "primary" : "secondary"}>
                {step}
              </Button>
            ))}
          </div>
        </section>
      </div>
    </AppShell>
  );
}
