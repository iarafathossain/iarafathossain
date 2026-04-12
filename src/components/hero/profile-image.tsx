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
      {/* Soft Outer Glow */}
      <div className="absolute inset-0 rounded-full bg-primary/20 opacity-15 blur-[80px] animate-pulse"></div>

      {/* Subtle rotating gradient ring */}
      <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full shadow-2xl shadow-primary/20">
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, color-mix(in oklch, var(--primary) 28%, transparent) 95deg, transparent 185deg, color-mix(in oklch, var(--primary) 20%, transparent) 260deg, transparent 360deg)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 12, ease: "linear", repeat: Infinity }}
        />

        {/* Ring thickness mask */}
        <div className="absolute inset-0.5 rounded-full bg-background" />

        {/* Inner Container to mask the image */}
        <div className="absolute inset-1.5 bg-background rounded-full overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              src="/arafat.png"
              alt="Arafat Hossain"
              fill
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
