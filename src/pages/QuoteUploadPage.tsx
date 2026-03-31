import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppShell } from "../components/AppShell";
import { Button } from "../components/Button";
import { QuoteIcon, ShieldIcon } from "../components/Icons";
import { ScreenHeader } from "../components/ScreenHeader";
import { SectionCard } from "../components/SectionCard";
import { UploadCard } from "../components/UploadCard";
import { useAnalysis } from "../lib/analysis-context";

export function QuoteUploadPage() {
  const navigate = useNavigate();
  const { setCurrentDraft } = useAnalysis();
  const [fileName, setFileName] = useState<string>("quote_service_1.pdf");

  const handleAnalyze = () => {
    setCurrentDraft({
      type: "quote",
      title: "Brake service quote review",
      summary: fileName,
    });
    navigate("/analyzing?type=quote&id=quote-brakes");
  };

  return (
    <AppShell>
      <div className="page-pad space-y-10">
        <ScreenHeader
          subtitle="Upload your quote and we’ll explain it in simple terms, ensuring you only pay for what you actually need."
          title="Understand your car repair quote."
        />

        <div className="space-y-6">
          <UploadCard
            accept=".pdf,image/*"
            fileName={fileName}
            helper="Upload your quote and we’ll explain it in simple terms"
            onFileChange={(file) => setFileName(file?.name ?? "quote_service_1.pdf")}
            title="Drop your file here"
          />

          <SectionCard
            icon={<ShieldIcon className="h-5 w-5" />}
            title="Fair analysis"
          >
            <p className="text-base leading-7 text-body">
              We look for prices that seem normal, line items that may need explanation, and questions worth asking before you approve the work.
            </p>
          </SectionCard>

          <div className="space-y-4">
            <Button onClick={handleAnalyze}>
              <QuoteIcon className="h-5 w-5" />
              Analyze quote
            </Button>
            <Button onClick={() => navigate(-1)} variant="secondary">
              Back
            </Button>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
