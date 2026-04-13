const DotBGEffect = () => (
  <div
    className="pointer-events-none absolute inset-0 overflow-hidden"
    aria-hidden="true"
  >
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-175 h-100 rounded-full opacity-[0.05] blur-[120px] bg-primary" />
    <div className="absolute bottom-1/4 left-1/4 w-100 h-75 rounded-full opacity-[0.05] blur-[100px] bg-secondary" />

    {/* Subtle dot pattern */}
    <div
      className="absolute inset-0 opacity-[0.1]" // Slightly higher opacity works better for dots
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, var(--foreground) 1.5px, transparent 0)",
        backgroundSize: "32px 32px",
      }}
    />
  </div>
);

export default DotBGEffect;
