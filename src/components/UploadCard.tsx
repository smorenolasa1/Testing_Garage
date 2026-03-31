import type { ChangeEvent } from "react";
import { UploadIcon } from "./Icons";
import { Button } from "./Button";

interface UploadCardProps {
  title: string;
  helper: string;
  fileName?: string;
  accept?: string;
  onFileChange: (file?: File) => void;
}

export function UploadCard({
  title,
  helper,
  fileName,
  accept,
  onFileChange,
}: UploadCardProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onFileChange(event.target.files?.[0]);
  };

  return (
    <div className="card-surface border-dashed border-brand-100 bg-gradient-to-b from-white to-brand-50/30 p-8 text-center">
      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-brand-50 text-brand-700 ring-1 ring-brand-100">
        <UploadIcon className="h-8 w-8" />
      </div>
      <div className="space-y-3">
        <h2 className="text-2xl font-bold text-ink">{title}</h2>
        <p className="text-base leading-7 text-body">{helper}</p>
      </div>
      <label className="mt-8 block">
        <span className="sr-only">Choose a file to upload</span>
        <input accept={accept} className="sr-only" onChange={handleChange} type="file" />
        <Button className="mx-auto max-w-[220px]" variant="secondary">
          Choose file
        </Button>
      </label>
      {fileName ? (
        <div className="mt-6 rounded-3xl bg-white px-4 py-4 text-left ring-1 ring-brand-100">
          <p className="text-sm font-semibold text-ink">{fileName}</p>
          <p className="mt-1 text-sm text-body">Selected and ready for demo analysis</p>
        </div>
      ) : (
        <div className="mt-6 rounded-3xl bg-white px-4 py-5 text-sm text-body ring-1 ring-brand-100">
          Drop your file here or browse from your phone
        </div>
      )}
    </div>
  );
}
