import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppShell } from "../components/AppShell";
import { Button } from "../components/Button";
import { ScreenHeader } from "../components/ScreenHeader";
import { SectionCard } from "../components/SectionCard";
import { ShieldIcon } from "../components/Icons";
import { useAnalysis } from "../lib/analysis-context";

export function SymptomInputPage() {
  const navigate = useNavigate();
  const { setCurrentDraft } = useAnalysis();
  const [symptom, setSymptom] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [mileage, setMileage] = useState("");

  const handleAnalyze = () => {
    setCurrentDraft({
      type: "symptom",
      title: "Brake vibration symptom review",
      summary: symptom || "The car vibrates when I brake",
    });
    navigate("/analyzing?type=symptom&id=symptom-braking");
  };

  return (
    <AppShell>
      <div className="page-pad space-y-12">
        <ScreenHeader
          subtitle="Describe the issue in your own words. Our AI concierge will help explain what may be happening and what it could cost."
          title="What’s happening with your car?"
        />

        <div className="space-y-8">
          <label className="block">
            <span className="mb-3 block pl-4 text-sm font-bold uppercase tracking-[0.16em] text-body">
              Detailed description
            </span>
            <textarea
              className="card-surface min-h-[232px] w-full px-8 py-7 text-lg leading-8 text-ink outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-brand-100"
              onChange={(event) => setSymptom(event.target.value)}
              placeholder="Example: The car vibrates when I brake"
              value={symptom}
            />
          </label>

          <SectionCard description="These details help provide a more useful estimate, but they are optional." title="Vehicle details">
            <div className="grid grid-cols-2 gap-4">
              <Field label="Brand" onChange={setBrand} placeholder="e.g. BMW" value={brand} />
              <Field label="Model" onChange={setModel} placeholder="e.g. 3 Series" value={model} />
              <Field label="Year" onChange={setYear} placeholder="2021" value={year} />
              <Field label="Mileage" onChange={setMileage} placeholder="45k mi" value={mileage} />
            </div>
          </SectionCard>

          <div className="space-y-4">
            <Button onClick={handleAnalyze}>Analyze</Button>
            <Button onClick={() => navigate(-1)} variant="secondary">
              Back
            </Button>
          </div>

          <SectionCard
            description="We keep your information private and use it only to explain the issue in simple terms."
            icon={<ShieldIcon className="h-5 w-5" />}
            title="Your privacy is protected"
          />
        </div>
      </div>
    </AppShell>
  );
}

interface FieldProps {
  label: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}

function Field({ label, value, placeholder, onChange }: FieldProps) {
  return (
    <label className="rounded-[24px] bg-canvas px-4 py-4">
      <span className="block text-sm font-semibold text-body">{label}</span>
      <input
        className="mt-3 w-full bg-transparent text-base font-semibold text-ink outline-none placeholder:text-slate-400"
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        value={value}
      />
    </label>
  );
}
