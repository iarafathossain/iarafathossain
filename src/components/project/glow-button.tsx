"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type GlowButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "default" | "ghost" | "outline";
  accent?: string;
  compact?: boolean;
};

export default function GlowButton({
  href,
  children,
  variant = "default",
  accent = "#6366f1",
  compact = false,
}: GlowButtonProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 500, damping: 25 }}
      onMouseEnter={(e) => {
        if (variant === "default") {
          (e.currentTarget as HTMLElement).style.boxShadow =
            `0 0 18px 0 ${accent}50`;
        }
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "";
      }}
    >
      <Button
        variant={
          variant === "default"
            ? "default"
            : variant === "ghost"
              ? "ghost"
              : "outline"
        }
        size={compact ? "sm" : "default"}
        asChild={false}
        className={`flex items-center gap-1.5 font-semibold transition-all duration-200
          ${compact ? "h-8 px-3 text-xs" : "h-9 px-4 text-sm"}
          ${
            variant === "default"
              ? "text-white border-0"
              : variant === "outline"
                ? "bg-transparent border-zinc-700/60 text-zinc-300 hover:text-white hover:bg-zinc-800/60"
                : "bg-transparent text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/40"
          }`}
        style={
          variant === "default"
            ? { background: `linear-gradient(135deg, ${accent}, ${accent}cc)` }
            : {}
        }
      >
        {children}
      </Button>
    </motion.a>
  );
}
