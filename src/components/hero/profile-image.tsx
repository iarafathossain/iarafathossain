"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const ProfileImage = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex items-center justify-center p-4 mb-6 pointer-events-none"
    >
      {/* Soft Outer Glow */}
      <div className="absolute inset-0 rounded-full bg-linear-to-r from-green-500/40 to-cyan-500/10 opacity-5 blur-3xl animate-pulse"></div>

      {/* Sharp Gradient Border Ring */}
      <div className="relative z-10 w-50 h-50 md:w-60 md:h-60 rounded-full p-0.75 bg-linear-to-r from-green-500 to-cyan-500 shadow-2xl">
        {/* Inner Black Container to mask the image */}
        <div className="w-full h-full bg-black rounded-full overflow-hidden relative">
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
