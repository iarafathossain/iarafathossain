import { ReactNode } from "react";

const SectionLabel = ({ children }: { children: ReactNode }) => (
  <span className="inline-flex items-center gap-1.5 text-sm font-semibold tracking-[0.2em] uppercase text-zinc-500 mb-3">
    <span className="w-4 h-px bg-zinc-700" />
    {children}
    <span className="w-4 h-px bg-zinc-700" />
  </span>
);

export default SectionLabel;
