"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

export const BackgroundEffects = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Drifting text keywords with GSAP
    const elements = containerRef.current.querySelectorAll(".float-element");
    elements.forEach((el) => {
      const xStart = gsap.utils.random(-30, 30);
      const yStart = gsap.utils.random(-30, 30);
      const duration = gsap.utils.random(15, 25);
      const delay = gsap.utils.random(0, 10);

      gsap.set(el, { x: xStart, y: yStart });

      gsap.to(el, {
        duration,
        ease: "sine.inOut",
        repeat: -1,
        delay,
        x: yStart,
        y: xStart,
        yoyo: true,
      });
    });

    // Slow radial glow shift
    const bgGlow = containerRef.current.querySelector(".bg-glow");
    if (bgGlow) {
      gsap.fromTo(
        bgGlow,
        { opacity: 0.4 },
        {
          opacity: 0.7,
          duration: 8,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        },
      );
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-background"
    >
      {/* Central glow using primary theme color */}
      <div className="bg-glow absolute top-1/4 left-1/2 -translate-x-1/2 w-150 h-150 rounded-full bg-primary/10 blur-[150px]" />

      {/* Floating Keywords */}
      <span
        className="float-element text-3xl font-extrabold text-foreground/5 dark:text-foreground/5 absolute"
        style={{ top: "15%", left: "10%" }}
      >
        JavaScript
      </span>
      <span
        className="float-element text-4xl font-extrabold text-foreground/5 dark:text-foreground/5 absolute"
        style={{ top: "65%", left: "15%" }}
      >
        TypeScript
      </span>
      <span
        className="float-element text-5xl font-extrabold text-foreground/5 dark:text-foreground/5 absolute"
        style={{ top: "25%", right: "20%" }}
      >
        React
      </span>
      <span
        className="float-element text-3xl font-extrabold text-foreground/5 dark:text-foreground/5 absolute"
        style={{ top: "50%", right: "10%" }}
      >
        Next.js
      </span>
      <span
        className="float-element text-4xl font-extrabold text-foreground/5 dark:text-foreground/5 absolute"
        style={{ top: "80%", right: "25%" }}
      >
        React
      </span>
      <span
        className="float-element text-2xl font-extrabold text-foreground/5 dark:text-foreground/5 absolute"
        style={{ top: "35%", left: "25%" }}
      >
        Next.js
      </span>
    </div>
  );
};
