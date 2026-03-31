import { AppShell } from "../components/AppShell";
import { ScreenHeader } from "../components/ScreenHeader";
import { SectionCard } from "../components/SectionCard";
import { HelpIcon, InfoIcon, ShieldIcon, SparklesIcon } from "../components/Icons";

const faq = [
  {
    title: "How it works",
    body: "Take a photo, upload a quote, or describe a symptom. FairGarage AI turns the information into simple explanations and clear next steps.",
  },
  {
    title: "Who it’s for",
    body: "Drivers who want a calm, understandable explanation before saying yes to a repair. It is especially helpful for people who do not know much about cars.",
  },
  {
    title: "Why it’s useful",
    body: "It can help you spot what seems normal, what may need more explanation, and what questions to ask before approving work.",
  },
];

export function HelpPage() {
  return (
    <AppShell>
      <div className="page-pad space-y-8">
        <ScreenHeader
          subtitle="We’re here to ensure your car repair experience is transparent, fair, and easy to understand."
          title="How can we help?"
        />

        <SectionCard icon={<HelpIcon className="h-5 w-5" />} title="How it works">
          <div className="space-y-4">
            <StepCard
              body="Simply take a photo of your garage quote or repair bill. Our AI reads the technical language for you."
              title="Step 1: Upload your estimate"
            />
            <StepCard
              body="We compare common labor rates and part prices to see if the costs look normal."
              title="Step 2: Instant analysis"
            />
            <StepCard
              body="You receive a simple fairness check and plain-language questions to ask if anything does not look right."
              title="Step 3: Clear advice"
            />
          </div>
        </SectionCard>

        <SectionCard icon={<ShieldIcon className="h-5 w-5" />} title="Who it’s for">
          <div className="rounded-[28px] bg-canvas px-6 py-6">
            <p className="text-base leading-7 text-body">
              FairGarage AI is designed for anyone who feels unsure at the mechanic, especially:
            </p>
            <ul className="mt-5 space-y-4 text-base leading-7 text-ink">
              <li>Drivers who are not car experts and want a clear second opinion.</li>
              <li>Seniors looking for calm, jargon-free explanations.</li>
              <li>Anyone looking to save money and avoid unnecessary repairs.</li>
            </ul>
          </div>
        </SectionCard>

        {faq.map((item, index) => (
          <SectionCard
            icon={
              index === 0 ? (
                <SparklesIcon className="h-5 w-5" />
              ) : index === 1 ? (
                <ShieldIcon className="h-5 w-5" />
              ) : (
                <InfoIcon className="h-5 w-5" />
              )
            }
            key={item.title}
            title={item.title}
          >
            <p className="text-base leading-7 text-body">{item.body}</p>
          </SectionCard>
        ))}
      </div>
    </AppShell>
  );
}

function StepCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-[28px] bg-canvas px-6 py-6">
      <h3 className="text-xl font-bold text-ink">{title}</h3>
      <p className="mt-3 text-base leading-7 text-body">{body}</p>
    </div>
  );
}
