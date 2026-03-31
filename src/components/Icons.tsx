import type { ReactNode } from "react";
import { classNames } from "../lib/utils";

interface IconProps {
  className?: string;
}

function SvgWrap({
  className,
  children,
  viewBox = "0 0 24 24",
}: IconProps & { children: ReactNode; viewBox?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={classNames("h-5 w-5", className)}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox={viewBox}
    >
      {children}
    </svg>
  );
}

export const HomeIcon = ({ className }: IconProps) => (
  <SvgWrap className={className}>
    <path d="M3 10.5L12 3l9 7.5" />
    <path d="M5.5 9.5V20h13V9.5" />
  </SvgWrap>
);

export const HistoryIcon = ({ className }: IconProps) => (
  <SvgWrap className={className}>
    <path d="M4 12a8 8 0 1 0 2.34-5.66" />
    <path d="M4 4v4h4" />
    <path d="M12 8v4l2.5 2.5" />
  </SvgWrap>
);

export const HelpIcon = ({ className }: IconProps) => (
  <SvgWrap className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M9.8 9.4a2.3 2.3 0 1 1 4.3 1.1c-.6.8-1.4 1.2-1.8 2" />
    <path d="M12 17h.01" />
  </SvgWrap>
);

export const SparklesIcon = ({ className }: IconProps) => (
  <SvgWrap className={className}>
    <path d="M12 3l1.4 4.1L17.5 8.5l-4.1 1.4L12 14l-1.4-4.1L6.5 8.5l4.1-1.4L12 3z" />
    <path d="M18 15l.8 2.2L21 18l-2.2.8L18 21l-.8-2.2L15 18l2.2-.8L18 15z" />
  </SvgWrap>
);

export const SymptomIcon = ({ className }: IconProps) => (
  <SvgWrap className={className}>
    <path d="M5 7h14" />
    <path d="M5 12h9" />
    <path d="M5 17h7" />
    <path d="M16.5 15.5l2 2 3-4" />
  </SvgWrap>
);

export const CameraIcon = ({ className }: IconProps) => (
  <SvgWrap className={className}>
    <path d="M4 8h4l1.5-2h5L16 8h4v11H4z" />
    <circle cx="12" cy="13.5" r="3.5" />
  </SvgWrap>
);

export const QuoteIcon = ({ className }: IconProps) => (
  <SvgWrap className={className}>
    <path d="M7 4h7l5 5v11H7z" />
    <path d="M14 4v5h5" />
    <path d="M10 13h6" />
    <path d="M10 17h4" />
  </SvgWrap>
);

export const UploadIcon = ({ className }: IconProps) => (
  <SvgWrap className={className}>
    <path d="M12 16V6" />
    <path d="M8.5 9.5L12 6l3.5 3.5" />
    <path d="M5 18.5h14" />
  </SvgWrap>
);

export const ShieldIcon = ({ className }: IconProps) => (
  <SvgWrap className={className}>
    <path d="M12 3l7 3v5c0 4.5-3 7.9-7 10-4-2.1-7-5.5-7-10V6z" />
  </SvgWrap>
);

export const ArrowRightIcon = ({ className }: IconProps) => (
  <SvgWrap className={className}>
    <path d="M5 12h14" />
    <path d="M13.5 7.5L18 12l-4.5 4.5" />
  </SvgWrap>
);

export const CheckIcon = ({ className }: IconProps) => (
  <SvgWrap className={className}>
    <path d="M5 13l4 4L19 7" />
  </SvgWrap>
);

export const AlertIcon = ({ className }: IconProps) => (
  <SvgWrap className={className}>
    <path d="M12 4l8 14H4z" />
    <path d="M12 9v4" />
    <path d="M12 16h.01" />
  </SvgWrap>
);

export const InfoIcon = ({ className }: IconProps) => (
  <SvgWrap className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" />
    <path d="M12 7h.01" />
  </SvgWrap>
);

export const GarageIcon = ({ className }: IconProps) => (
  <SvgWrap className={className}>
    <path d="M4 10l8-6 8 6" />
    <path d="M6 10v9h12v-9" />
    <path d="M9 19v-5h6v5" />
  </SvgWrap>
);
