"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import React from "react";

export const HamburgerButton: React.FC<{
  isOpen: boolean;
  onClick: () => void;
}> = ({ isOpen, onClick }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.08 }}
    whileTap={{ scale: 0.92 }}
    transition={{ type: "spring", stiffness: 280, damping: 25 }}
    aria-label={isOpen ? "Close menu" : "Open menu"}
    aria-expanded={isOpen}
    aria-controls="mobile-nav-menu"
    className="
      flex items-center justify-center w-9 h-9 rounded-full
      text-muted-foreground hover:text-foreground
      hover:bg-white/8
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60
    "
  >
    <AnimatePresence mode="wait" initial={false}>
      <motion.span
        key={isOpen ? "close" : "open"}
        initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        exit={{ opacity: 0, rotate: 45, scale: 0.7 }}
        transition={{ duration: 0.18, ease: "easeInOut" }}
        className="flex"
      >
        {isOpen ? (
          <X size={18} strokeWidth={2} />
        ) : (
          <Menu size={18} strokeWidth={2} />
        )}
      </motion.span>
    </AnimatePresence>
  </motion.button>
);
