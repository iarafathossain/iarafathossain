import { ReactNode } from "react";

export default function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase text-zinc-500 mb-3">
      <span className="w-5 h-px bg-zinc-700" />
      {children}
      <span className="w-5 h-px bg-zinc-700" />
    </span>
  );
}
