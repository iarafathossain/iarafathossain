"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import React from "react";

export const ResumeButton: React.FC = () => (
  <motion.a
    href="https://drive.google.com/file/d/1VWb68Tdp5kESPW7gpfKa39T8Bky0YArg/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.94 }}
    transition={{ type: "spring", stiffness: 280, damping: 25 }}
    className="
      relative inline-flex items-center gap-1.5
      rounded-full px-4 py-1.5
      text-sm font-semibold tracking-wide
      bg-primary text-primary-foreground
      shadow-[0_0_16px_-2px_hsl(var(--primary)/0.55)]
      hover:shadow-[0_0_22px_0px_hsl(var(--primary)/0.65)]
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60
    "
  >
    Resume
    <ArrowUpRight size={15} strokeWidth={2.5} />
  </motion.a>
);
