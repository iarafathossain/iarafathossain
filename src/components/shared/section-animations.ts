import type { Variants } from "framer-motion";

export const SECTION_HEADING_MOTION: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const SECTION_CARD_MOTION: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const SECTION_GSAP_HEADING = {
  opacity: 0,
  y: 28,
  duration: 0.75,
  ease: "power3.out",
  start: "top 85%",
  once: true,
};

export const SECTION_GSAP_BLOCK = {
  opacity: 0,
  y: 24,
  duration: 0.7,
  ease: "power2.out",
  start: "top 85%",
  once: true,
};

export const HERO_CONTAINER_MOTION: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.35,
    },
  },
};

export const HERO_ITEM_MOTION: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
