import Link from "next/link";
import React from "react";

export const BrandLogo: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <Link
    href="/"
    onClick={onClick}
    className="shrink-0 font-mono text-lg font-bold tracking-tight text-foreground hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded-sm"
    aria-label="arafathossain — home"
  >
    <span className="text-primary">&lt;</span>
    <span className="text-foreground">arafathossain</span>
    <span className="text-primary">&nbsp;/&gt;</span>
  </Link>
);
