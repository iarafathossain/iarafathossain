const SquareBGEffect = () => (
  <div
    className="pointer-events-none absolute inset-0 overflow-hidden"
    aria-hidden="true"
  >
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-175 h-100 rounded-full opacity-[0.05] blur-[120px] bg-primary" />
    <div className="absolute bottom-1/4 left-1/4 w-100 h-75 rounded-full opacity-[0.05] blur-[100px] bg-secondary" />
    {/* Subtle grid pattern */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage:
          "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />
  </div>
);

export default SquareBGEffect;
