import type { ReactNode } from "react";

const SectionLabel = ({ children }: { children: ReactNode }) => (
  <span className="inline-flex items-center gap-1.5 text-lg font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-3">
    <span className="w-4 h-px bg-border" />
    {children}
    <span className="w-4 h-px bg-border" />
  </span>
);

export default SectionLabel;
