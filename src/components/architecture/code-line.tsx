import type { ReactNode } from "react";

export default function CodeLine({ children }: { children?: ReactNode }) {
  return (
    <div className="[counter-increment:line] flex gap-4">
      <span
        className="select-none shrink-0 w-4 text-right text-muted-foreground/60 text-xs leading-6 before:content-[counter(line)]"
        aria-hidden
      />
      <span className="flex-1 min-w-0 whitespace-pre-wrap wrap-break-word">
        {children ?? "\u00A0"}
      </span>
    </div>
  );
}
