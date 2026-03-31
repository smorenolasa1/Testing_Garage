interface ScreenHeaderProps {
  title: string;
  subtitle: string;
  eyebrow?: string;
}

export function ScreenHeader({ title, subtitle, eyebrow }: ScreenHeaderProps) {
  return (
    <header className="space-y-5">
      {eyebrow ? (
        <div className="inline-flex items-center rounded-full bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-brand-700 ring-1 ring-brand-100">
          {eyebrow}
        </div>
      ) : null}
      <div className="space-y-4">
        <h1 className="max-w-[12ch] text-[2rem] font-extrabold leading-[1.12] text-ink">
          {title}
        </h1>
        <p className="max-w-[32ch] text-lg leading-8 text-body">{subtitle}</p>
      </div>
    </header>
  );
}
