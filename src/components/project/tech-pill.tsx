type TechPillProps = {
  label: string;
  compact?: boolean;
};

export default function TechPill({ label, compact = false }: TechPillProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full font-medium
        text-muted-foreground bg-secondary/60 border border-border/40
        hover:text-foreground hover:border-border/80 transition-all duration-150
        ${compact ? "px-2 py-0.5 text-[10px]" : "px-2.5 py-1 text-[11px]"}`}
    >
      {label}
    </span>
  );
}
