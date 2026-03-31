interface ProgressStepsProps {
  steps: string[];
  activeIndex: number;
}

export function ProgressSteps({ steps, activeIndex }: ProgressStepsProps) {
  return (
    <ol className="space-y-4">
      {steps.map((step, index) => {
        const isActive = index <= activeIndex;

        return (
          <li
            className={`flex items-center gap-4 rounded-3xl px-5 py-4 ${
              isActive ? "bg-white text-ink shadow-soft" : "bg-white/60 text-body"
            }`}
            key={step}
          >
            <div
              className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold ${
                isActive ? "bg-brand-600 text-white" : "bg-brand-50 text-brand-700"
              }`}
            >
              {index + 1}
            </div>
            <span className="text-base font-semibold">{step}</span>
          </li>
        );
      })}
    </ol>
  );
}
