"use client";

import { motion } from "framer-motion";
import { Mouse } from "lucide-react";

export const ScrollIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 1 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none"
    >
      <div className="relative flex flex-col items-center">
        <Mouse className="w-6 h-6 text-muted-foreground animate-pulseSlow" />
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-2 w-1 h-1 bg-foreground rounded-full"
        />
      </div>
    </motion.div>
  );
};
