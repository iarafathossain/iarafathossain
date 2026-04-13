import type { Variants } from "framer-motion";

export const navbarVariants: Variants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 260, damping: 28 },
  },
  hidden: {
    y: "-150%",
    opacity: 0,
    transition: { type: "spring", stiffness: 300, damping: 32 },
  },
};

export const mobileMenuVariants: Variants = {
  closed: {
    opacity: 0,
    scale: 0.96,
    y: -8,
    transition: { duration: 0.22, ease: [0.32, 0, 0.67, 0] },
  },
  open: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.28,
      ease: [0.33, 1, 0.68, 1],
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

export const mobileItemVariants: Variants = {
  closed: { opacity: 0, x: -14, filter: "blur(4px)" },
  open: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 340, damping: 26 },
  },
};

export const socialIconVariants: Variants = {
  closed: { opacity: 0, y: 8 },
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 340, damping: 26 },
  },
};
