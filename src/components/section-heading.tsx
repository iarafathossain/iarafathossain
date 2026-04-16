import { forwardRef, ReactNode } from "react";
import SectionLabel from "./section-label";

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

        <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-wider italic text-foreground mt-2">
          {title}
        </h2>

        <p className="mt-3 text-muted-foreground text-base max-w-md mx-auto leading-relaxed">
          {description}
        </p>
      </div>
    );
  },
);

SectionHeading.displayName = "SectionHeading";

export default SectionHeading;
