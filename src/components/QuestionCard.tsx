import { ArrowRightIcon } from "./Icons";

export function QuestionCard({ question }: { question: string }) {
  return (
    <div className="flex min-h-[88px] items-center justify-between gap-4 rounded-[26px] bg-white px-5 py-4 shadow-soft ring-1 ring-slate-100">
      <p className="text-base font-semibold leading-6 text-ink">{question}</p>
      <ArrowRightIcon className="h-5 w-5 shrink-0 text-brand-600" />
    </div>
  );
}
