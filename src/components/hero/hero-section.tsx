"use client";

import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  HERO_CONTAINER_MOTION,
  HERO_ITEM_MOTION,
} from "../shared/section-animations";
import { BackgroundEffects } from "./background-effect";
import { ProfileImage } from "./profile-image";
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

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center flex-col text-foreground font-sans selection:bg-primary/30 overflow-hidden bg-background"
    >
      <BackgroundEffects />
      <ScrollIndicator />

      <motion.div
        variants={HERO_CONTAINER_MOTION}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center justify-center text-center px-4 max-w-6xl z-10 w-full"
      >
        <ProfileImage />

        <motion.div
          variants={HERO_ITEM_MOTION}
          className="mb-2 md:mb-5 relative w-full flex flex-col items-center"
        >
          <p className="mb-2 md:mb-4 text-xs sm:text-sm tracking-[0.4em] uppercase text-muted-foreground">
            Hey, I&apos;m
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-[7vw] lg:text-[5.75rem] font-extrabold tracking-tight leading-[0.95] z-20 text-center relative overflow-hidden">
            <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              arafat
            </span>{" "}
            <span className="bg-linear-to-r from-primary/80 to-primary/40 bg-clip-text text-transparent">
              hossain.
            </span>
          </h1>
        </motion.div>

        <motion.p
          variants={HERO_ITEM_MOTION}
          className="text-lg sm:text-xl font-mono tracking-tight text-muted-foreground mb-6 text-center"
        >
          <span className="mr-2">I build</span>
          <span className="text-primary font-semibold">{displayText}</span>
          <span className="inline-block ml-1 text-primary/80 animate-pulse">
            |
          </span>
        </motion.p>

        <motion.div
          variants={HERO_ITEM_MOTION}
          className="mb-6 flex flex-wrap items-center justify-center gap-2"
        >
          <span className="rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-md font-semibold text-secondary-foreground backdrop-blur-sm">
            Full Stack Web Developer
          </span>
          <span className="rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-md font-semibold text-secondary-foreground backdrop-blur-sm">
            Tech + Business Enthusiast
          </span>
        </motion.div>

        <motion.div
          variants={HERO_ITEM_MOTION}
          className="mb-6 flex items-center gap-2 text-primary font-semibold"
        >
          <Circle className="h-3 w-3 fill-current animate-pulse" />
          <span>Available for work</span>
        </motion.div>

        <motion.div
          variants={HERO_ITEM_MOTION}
          className="mb-4 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            href="#contact"
            className="rounded-xl border border-primary/50 bg-primary/10 px-7 py-3 text-xl font-bold text-foreground transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground shadow-lg shadow-primary/5"
          >
            View Featured Projects
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};
