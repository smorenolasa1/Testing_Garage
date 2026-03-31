import { ActionCard } from "../components/ActionCard";
import { AppShell } from "../components/AppShell";
import { CameraIcon, QuoteIcon, ShieldIcon, SymptomIcon } from "../components/Icons";
import { ScreenHeader } from "../components/ScreenHeader";
import { SectionCard } from "../components/SectionCard";

export function HomePage() {
  return (
    <AppShell>
      <div className="page-pad space-y-12">
        <ScreenHeader
          subtitle="Describe what you notice, upload a quote, or take a photo of a warning light. We explain it in simple language."
          title="What’s happening with your car?"
        />

        <div className="space-y-8">
          <ActionCard
            cta="Write what you notice"
            description="For example: It makes a noise when braking"
            icon={<SymptomIcon className="h-7 w-7" />}
            title="Describe the symptom"
            to="/symptom"
          />
          <ActionCard
            cta="Take photo"
            description="Take a photo of a symbol or light on your dashboard"
            icon={<CameraIcon className="h-7 w-7" />}
            title="Photo of warning light"
            to="/warning-light"
          />
          <ActionCard
            cta="Upload quote"
            description="Upload a photo or PDF of the quote and we’ll check if it looks reasonable"
            icon={<QuoteIcon className="h-7 w-7" />}
            title="Upload workshop quote"
            to="/quote"
          />
        </div>

        <SectionCard
          description="Our AI is tuned to explain things in everyday language so you can feel informed, calm, and ready for the next step."
          icon={<ShieldIcon className="h-5 w-5" />}
          title="Simple explanations. No technical jargon."
        >
          <div className="mt-6 overflow-hidden rounded-[28px] bg-[radial-gradient(circle_at_top_left,_rgba(70,139,255,0.16),_transparent_42%),linear-gradient(135deg,_#dfeeff,_#ffffff_65%)] p-6">
            <div className="rounded-[24px] bg-white/85 p-5 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
                Human-centered advice
              </p>
              <p className="mt-3 text-lg font-semibold leading-8 text-ink">
                Built for drivers who just want a clear answer.
              </p>
            </div>
          </div>
        </SectionCard>
      </div>
    </AppShell>
  );
}
