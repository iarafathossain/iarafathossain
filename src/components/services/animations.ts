import type { Variants } from "framer-motion";
import { SECTION_CARD_MOTION } from "../shared/section-animations";

export const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export const cardVariants: Variants = SECTION_CARD_MOTION;
