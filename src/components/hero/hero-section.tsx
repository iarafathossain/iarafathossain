"use client";

import { motion } from "framer-motion";
import { Circle, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BackgroundEffects } from "./background-effect";
import { ProfileImage } from "./profile-image";
import { ReviewCard } from "./review-card";
import { ScrollIndicator } from "./scroll-indicator";

const TAGLINES = [
  "scalable web apps",
  "fast, modern UIs",
  "business-focused products",
  "with MERN & PERN",
];

export const HeroSection = () => {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTagline = TAGLINES[taglineIndex];

    // Pause briefly when a word is fully typed or fully deleted.
    if (!isDeleting && displayText === currentTagline) {
      const holdTimeout = setTimeout(() => setIsDeleting(true), 1200);
      return () => clearTimeout(holdTimeout);
    }

    if (isDeleting && displayText === "") {
      const nextWordTimeout = setTimeout(() => {
        setIsDeleting(false);
        setTaglineIndex((prev) => (prev + 1) % TAGLINES.length);
      }, 120);
      return () => clearTimeout(nextWordTimeout);
    }

    const typingSpeed = isDeleting ? 45 : 85;
    const timeout = setTimeout(() => {
      setDisplayText((prev) => {
        if (isDeleting) {
          return prev.slice(0, -1);
        }

        return currentTagline.slice(0, prev.length + 1);
      });
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, taglineIndex]);

  // Container variants for staggered child animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center flex-col text-white font-sans selection:bg-green-600/30 overflow-hidden">
      <BackgroundEffects />
      <ScrollIndicator />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center justify-center text-center px-4 max-w-7xl z-10 w-full"
      >
        <ProfileImage />

        <motion.div
          variants={itemVariants}
          className="mb-5 relative w-full flex flex-col items-center"
        >
          <p className="mb-4 text-[11px] sm:text-xs tracking-[0.4em] uppercase text-zinc-400">
            Hey, I&apos;m
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-[8vw] lg:text-[5.75rem] font-extrabold tracking-tight leading-[0.95] z-20 text-center relative overflow-hidden">
            <span className="bg-linear-to-r from-orange-400 via-amber-300 to-orange-200 bg-clip-text text-transparent">
              arafat
            </span>{" "}
            <span className="bg-linear-to-r from-orange-400 via-amber-300 to-orange-200 bg-clip-text text-transparent">
              hossain.
            </span>
          </h1>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl font-mono tracking-tight text-zinc-400 mb-6 text-center"
        >
          <span className="mr-2 text-zinc-500">I build</span>
          <span className="text-emerald-400">{displayText}</span>
          <span className="inline-block ml-1 text-emerald-300 animate-pulse">
            |
          </span>
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mb-6 flex flex-wrap items-center justify-center gap-2"
        >
          <span className="rounded-full border border-orange-400/40 bg-orange-500/10 px-4 py-1.5 text-sm font-semibold text-orange-300">
            Full Stack Dev
          </span>
          <span className="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-1.5 text-sm font-semibold text-cyan-300">
            Freelancer
          </span>
          <span className="rounded-full border border-fuchsia-400/35 bg-fuchsia-500/10 px-4 py-1.5 text-sm font-semibold text-fuchsia-300">
            Tech + Business Enthusiast
          </span>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mb-4 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            href="#contact"
            className="rounded-xl border border-zinc-600/70 bg-black/40 px-7 py-3 text-xl font-bold text-zinc-100 transition hover:-translate-y-0.5 hover:border-emerald-400/50 hover:text-white"
          >
            <span className="inline-flex items-center gap-2">
              <MessageCircle className="h-5 w-5 animate-pulse" />
              Let&apos;s Connect
            </span>
          </Link>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mb-6 flex items-center gap-2 text-emerald-300 font-semibold"
        >
          <Circle className="h-3 w-3 fill-current text-emerald-400" />
          <span>Available for work</span>
        </motion.div>

        <motion.div variants={itemVariants}>
          <ReviewCard rating={5.0} platform="Freelancer" compact />
        </motion.div>
      </motion.div>
    </section>
  );
};
