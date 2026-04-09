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
        ease: "sine.inOut", // Smoother drifting than 'none'
        repeat: -1,
        delay,
        x: yStart,
        y: xStart,
        yoyo: true,
      });
    });

    // Slow radial gradient shift
    const bgGlow = containerRef.current.querySelector(".bg-glow");
    gsap.fromTo(
      bgGlow,
      { opacity: 0.3 },
      {
        opacity: 0.5,
        duration: 8,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      },
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      {/* Dark gradient base */}
      <div className="absolute inset-0 bg-black" />

      {/* Central multi-color glow adjusted for the image reference */}
      <div
        className="bg-glow absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center 30%, rgba(16, 185, 129, 0.15) 0%, rgba(6, 182, 212, 0.1) 25%, rgba(0, 0, 0, 1) 60%)",
        }}
      />

      {/* Floating Keywords - Larger sizes, white with low opacity, and sans font */}
      <span
        className="float-element text-3xl font-bold text-white/5 absolute"
        style={{ top: "15%", left: "10%" }}
      >
        JavaScript
      </span>
      <span
        className="float-element text-4xl font-bold text-white/5 absolute"
        style={{ top: "65%", left: "15%" }}
      >
        TypeScript
      </span>
      <span
        className="float-element text-5xl font-bold text-white/5 absolute"
        style={{ top: "25%", right: "20%" }}
      >
        React
      </span>
      <span
        className="float-element text-3xl font-bold text-white/5 absolute"
        style={{ top: "50%", right: "10%" }}
      >
        Next.js
      </span>
      <span
        className="float-element text-4xl font-bold text-white/5 absolute"
        style={{ top: "80%", right: "25%" }}
      >
        React
      </span>
      <span
        className="float-element text-2xl font-bold text-white/5 absolute"
        style={{ top: "35%", left: "25%" }}
      >
        Next.js
      </span>
    </div>
  );
};
