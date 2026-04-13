import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface MilestoneMotionCardProps {
  custom: number;
  variants: Variants;
  children: ReactNode;
}

export default function MilestoneMotionCard({
  custom,
  variants,
  children,
}: MilestoneMotionCardProps) {
  return (
    <motion.div
      custom={custom}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
