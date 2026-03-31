import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppShell } from "../components/AppShell";
import { Button } from "../components/Button";
import { CameraIcon, InfoIcon, SparklesIcon } from "../components/Icons";
import { ScreenHeader } from "../components/ScreenHeader";
import { SectionCard } from "../components/SectionCard";
import { UploadCard } from "../components/UploadCard";
import { useAnalysis } from "../lib/analysis-context";

export function WarningLightPage() {
  const navigate = useNavigate();
  const { setCurrentDraft } = useAnalysis();
  const [fileName, setFileName] = useState<string>();

  const handleAnalyze = () => {
    setCurrentDraft({
      type: "warning-light",
      title: "Battery warning light review",
      summary: fileName ?? "Dashboard warning light photo",
    });
    navigate("/analyzing?type=warning-light&id=warning-battery");
  };

  return (
    <AppShell>
      <div className="page-pad space-y-10">
        <ScreenHeader
          subtitle="Our AI concierge identifies dashboard symbols instantly to give you peace of mind."
          title="What is your car telling you?"
        />

        <div className="space-y-6">
          <UploadCard
            accept="image/*"
            fileName={fileName}
            helper="Take a clear photo of the warning light or symbol"
            onFileChange={(file) => setFileName(file?.name ?? "dashboard-light.jpg")}
            title="Take a clear photo of the warning light or symbol"
          />

          <SectionCard
            icon={<InfoIcon className="h-5 w-5" />}
            title="Pro tip"
          >
            <p className="text-base leading-7 text-body">
              Try your best to keep the icon centered and clear. Even a slightly blurry photo works for this demo.
            </p>
          </SectionCard>

          <SectionCard
            icon={<SparklesIcon className="h-5 w-5" />}
            title="Reliable"
          >
            <p className="text-base leading-7 text-body">
              We explain warning lights in plain language, with the next step you can take right away.
            </p>
          </SectionCard>

          <div className="space-y-4">
            <Button onClick={handleAnalyze}>
              <CameraIcon className="h-5 w-5" />
              Analyze photo
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
