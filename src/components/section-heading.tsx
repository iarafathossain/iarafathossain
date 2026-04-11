import { forwardRef, ReactNode } from "react";
import SectionLabel from "./skill/section-label";

interface SectionHeadingProps {
  label: string;
  title: ReactNode;
  description: string;
  className?: string;
}

const SectionHeading = forwardRef<HTMLDivElement, SectionHeadingProps>(
  ({ label, title, description, className = "" }, ref) => {
    return (
      <div ref={ref} className={`mb-16 text-center ${className}`}>
        <SectionLabel>{label}</SectionLabel>

        <h2
          className="text-4xl sm:text-5xl font-black tracking-tight text-zinc-100 mt-2"
          style={{
            fontFamily: "'DM Mono', 'Fira Code', 'Courier New', monospace",
            letterSpacing: "-0.03em",
          }}
        >
          {title}
        </h2>

        <p className="mt-3 text-zinc-500 text-sm max-w-md mx-auto leading-relaxed">
          {description}
        </p>
      </div>
    );
  },
);

SectionHeading.displayName = "SectionHeading";

export default SectionHeading;
