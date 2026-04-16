"use client";

import Link from "next/link";
import React from "react";
import type { NavItem } from "./interface";

export const DesktopNavLink: React.FC<{
  item: NavItem;
  isActive: boolean;
  onSelect: () => void;
}> = ({ item, isActive, onSelect }) => (
  <Link
    href={item.href}
    onClick={onSelect}
    className="relative flex items-center gap-1.5 px-3.5 py-1.5
      text-base select-none transition-all duration-150 group
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
  >
    <span className="relative inline-flex flex-col items-center">
      <span
        className={`transition-colors duration-150 ${
          isActive
            ? "text-primary font-semibold"
            : "text-muted-foreground group-hover:text-primary group-hover:font-semibold"
        }`}
      >
        {item.label}
      </span>

      <span
        aria-hidden="true"
        className={`mt-1 h-0.5 w-3 rounded-full bg-primary transition-all duration-200 ${
          isActive
            ? "opacity-100 scale-x-100"
            : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
        }`}
      />
    </span>
  </Link>
);
