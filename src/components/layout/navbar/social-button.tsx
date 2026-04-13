"use client";

import { motion } from "framer-motion";
import React from "react";
import type { SocialLink } from "./interface";

export const SocialButton: React.FC<SocialLink> = ({ label, href, icon }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    whileHover={{ scale: 1.12 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 280, damping: 25 }}
    className="flex items-center justify-center rounded-full text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
  >
    {icon}
  </motion.a>
);
