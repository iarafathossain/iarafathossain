"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const ProfileImage = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex items-center justify-center p-4 mb-8 pointer-events-none"
    >
      {/* Soft Outer Glow - Now uses theme primary color */}
      <div className="absolute inset-0 rounded-full bg-primary/20 opacity-15 blur-[80px] animate-pulse"></div>

      {/* Sharp Gradient Border Ring - Drastically Increased Size */}
      <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full p-1 bg-linear-to-b from-primary via-primary/50 to-transparent shadow-2xl shadow-primary/20">
        {/* Inner Container to mask the image */}
        <div className="w-full h-full bg-background rounded-full overflow-hidden relative">
          <Image
            src="/arafat.png"
            alt="Arafat Hossain"
            fill
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
    </motion.div>
  );
};
