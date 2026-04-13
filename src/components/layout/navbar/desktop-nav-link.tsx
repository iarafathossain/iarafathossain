"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import type { NavItem } from "./interface";
import { PulsingDot } from "./pulsing-dot";

export const DesktopNavLink: React.FC<{
  item: NavItem;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}> = ({ item, isHovered, onMouseEnter, onMouseLeave }) => (
  <Link
    href={item.href}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className={`
      relative flex items-center gap-1.5 rounded-full px-3.5 py-1.5
      text-base select-none
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60
      ${
        item.highlight
          ? "text-primary font-medium"
          : "text-muted-foreground hover:text-foreground"
      }
    `}
  >
    {isHovered && (
      <motion.span
        layoutId="nav-hover-pill"
        className="absolute inset-0 rounded-full bg-white/6 border border-white/5 backdrop-blur-md shadow-sm shadow-black/10"
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 24,
          mass: 0.9,
          duration: 0.35,
        }}
      />
    )}

    {item.highlight && <PulsingDot />}
    <span className="relative z-10">{item.label}</span>
  </Link>
);
