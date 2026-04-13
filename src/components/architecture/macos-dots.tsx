export default function MacOsDots() {
  return (
    <div className="flex items-center gap-1.5" aria-hidden>
      <span
        className="block w-3 h-3 rounded-full"
        style={{
          background: "var(--window-control-close)",
          boxShadow:
            "0 0 8px color-mix(in oklch, var(--window-control-close) 65%, transparent)",
        }}
      />
      <span
        className="block w-3 h-3 rounded-full"
        style={{
          background: "var(--window-control-warn)",
          boxShadow:
            "0 0 8px color-mix(in oklch, var(--window-control-warn) 60%, transparent)",
        }}
      />
      <span
        className="block w-3 h-3 rounded-full"
        style={{
          background: "var(--window-control-ok)",
          boxShadow:
            "0 0 8px color-mix(in oklch, var(--window-control-ok) 60%, transparent)",
        }}
      />
    </div>
  );
}
