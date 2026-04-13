import React from "react";

export const PulsingDot: React.FC = () => (
  <span className="relative hidden xl:flex h-1.5 w-1.5 shrink-0" aria-hidden>
    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
  </span>
);
