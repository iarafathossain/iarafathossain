type TechPillProps = {
  label: string;
  compact?: boolean;
};

export default function TechPill({ label, compact = false }: TechPillProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full font-medium
        text-zinc-400 bg-zinc-800/60 border border-zinc-700/40
        hover:text-zinc-200 hover:border-zinc-600/50 transition-all duration-150
        ${compact ? "px-2 py-0.5 text-[10px]" : "px-2.5 py-1 text-[11px]"}`}
    >
      {label}
    </span>
  );
}
