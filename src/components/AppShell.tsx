import type { PropsWithChildren, ReactNode } from "react";
import { BottomNav } from "./BottomNav";
import { GarageIcon, SparklesIcon } from "./Icons";

interface AppShellProps extends PropsWithChildren {
  headerAction?: ReactNode;
}

export function AppShell({ children, headerAction }: AppShellProps) {
  return (
    <div className="min-h-screen bg-canvas bg-hero">
      <div className="mx-auto min-h-screen max-w-[430px] bg-transparent">
        <header className="sticky top-0 z-10 border-b border-white/80 bg-canvas/95 px-6 py-4 backdrop-blur">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                <GarageIcon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-ink">FairGarage AI</p>
                <p className="text-xs text-body">Simple help for car repairs</p>
              </div>
            </div>
            {headerAction ?? (
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-brand-700">
                <SparklesIcon className="h-4 w-4" />
              </div>
            )}
          </div>
        </header>
        <main>{children}</main>
        <BottomNav />
      </div>
    </div>
  );
}
