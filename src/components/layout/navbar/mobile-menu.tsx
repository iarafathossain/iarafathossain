"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FileText } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  mobileItemVariants,
  mobileMenuVariants,
  socialIconVariants,
} from "./animations";
import { NAV_ITEMS, RESUME_HREF, SOCIAL_LINKS } from "./data";
import { PulsingDot } from "./pulsing-dot";

export const MobileMenu: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  activeHref: string;
  onSelect: (href: string) => void;
}> = ({ isOpen, onClose, activeHref, onSelect }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        key="mobile-menu"
        variants={mobileMenuVariants}
        initial="closed"
        animate="open"
        exit="closed"
        className="
          absolute top-[calc(100%+10px)] left-0 right-0 mx-2
          rounded-2xl overflow-hidden
          bg-background/80 backdrop-blur-xl
          border border-border/60
          shadow-[0_20px_60px_-10px_rgba(0,0,0,0.6)]
        "
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="px-3 py-4 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <motion.div key={item.href} variants={mobileItemVariants}>
              <Link
                href={item.href}
                onClick={() => {
                  onSelect(item.href);
                  onClose();
                }}
                className={`
                  group flex items-center gap-3 w-full rounded-xl px-4 py-3
                  text-sm transition-colors duration-150
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60
                  ${
                    activeHref === item.href
                      ? "text-primary font-semibold bg-primary/10"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/10 hover:font-semibold"
                  }
                `}
              >
                {activeHref === item.href && <PulsingDot />}
                <span className="flex flex-col">
                  <span>{item.label}</span>
                  <span
                    aria-hidden="true"
                    className={`mt-1 h-0.5 w-3 rounded-full bg-primary transition-all duration-200 ${
                      activeHref === item.href
                        ? "opacity-100 scale-x-100"
                        : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                    }`}
                  />
                </span>
                {item.highlight && (
                  <span className="ml-auto text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/30">
                    Portfolio
                  </span>
                )}
              </Link>
            </motion.div>
          ))}

          <motion.hr
            variants={mobileItemVariants}
            className="border-border/50 my-1"
          />

          <motion.div
            variants={socialIconVariants}
            className="flex items-center justify-between px-4 pt-1 pb-2"
          >
            <div className="flex items-center gap-1">
              {SOCIAL_LINKS.map(({ label, href, icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.12 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center justify-center w-9 h-9 rounded-full text-muted-foreground hover:text-foreground hover:bg-white/8 transition-colors"
                >
                  {icon}
                </motion.a>
              ))}
            </div>

            <a
              href={RESUME_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-1.5
                rounded-full px-4 py-2
                text-xs font-semibold
                bg-primary text-primary-foreground
                shadow-[0_0_14px_-2px_hsl(var(--primary)/0.5)]
              "
            >
              <FileText size={13} strokeWidth={2} />
              Resume
            </a>
          </motion.div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);
