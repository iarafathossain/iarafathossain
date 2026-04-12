const DiagonalBGEffect = () => (
  <div
    className="pointer-events-none absolute inset-0 overflow-hidden flex items-center justify-center"
    aria-hidden="true"
  >
    {/* Wide center spotlight */}
    <div className="absolute w-200 h-100 rounded-[100%] opacity-[0.04] blur-[100px] bg-primary" />

    {/* Subtle diagonal texture */}
    <div
      className="absolute inset-0 opacity-[0.02]"
      style={{
        backgroundImage: `repeating-linear-gradient(
        -45deg, 
        var(--foreground) 0, 
        var(--foreground) 1px, 
        transparent 1px, 
        transparent 24px
      )`,
        maskImage:
          "radial-gradient(circle at center, var(--mask-solid) 30%, transparent 90%)",
        WebkitMaskImage:
          "radial-gradient(circle at center, var(--mask-solid) 30%, transparent 90%)",
      }}
    />
  </div>
);

export default DiagonalBGEffect;
