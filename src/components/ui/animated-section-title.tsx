"use client";

import { motion, type Variants } from "framer-motion";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

interface AnimatedSectionTitleProps {
  title: string;
  subtitle: string;
}

const titleContainerVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.14,
    },
  },
};

const subtitleVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut", delay: 0.1 },
  },
};

export function AnimatedSectionTitle({
  title,
  subtitle,
}: AnimatedSectionTitleProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!highlightRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(highlightRef.current, { backgroundPositionX: "-120%" });
      gsap.to(highlightRef.current, {
        backgroundPositionX: "160%",
        duration: 2.6,
        ease: "none",
        repeat: -1,
        repeatDelay: 0.55,
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <motion.div
      ref={rootRef}
      variants={titleContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.55 }}
      className="w-full max-w-4xl text-center"
    >
      <div className="relative inline-flex items-center justify-center">
        <h2 className="relative z-10 text-balance text-4xl font-extrabold tracking-tightest text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          {title}
        </h2>

        <motion.span
          aria-hidden="true"
          className="ml-2 inline-block h-[1em] w-0.5 bg-primary"
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        />
        <span
          ref={highlightRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 34%, color-mix(in oklab, white 85%, var(--primary) 15%) 50%, rgba(255,255,255,0.06) 66%, transparent 100%)",
            backgroundSize: "220% 100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          {title}
        </span>
      </div>

      <motion.p
        variants={subtitleVariants}
        className="mt-5 px-2 text-sm leading-relaxed text-muted-foreground sm:text-base"
      >
        {subtitle}
      </motion.p>
    </motion.div>
  );
}
