"use client";

import SectionHeading from "@/components/section-heading";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import BentoCard from "./bento-card";
import CoreSkill from "./core-skill";
import { BENTO_CATEGORIES, CORE_STACK } from "./data";
import SectionLabel from "./section-label";
import SkillExploring from "./skill-exploring";

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const coreRowRef = useRef<HTMLDivElement>(null);
  const bentoRef = useRef<HTMLDivElement>(null);
  const exploringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          once: true,
        },
      });

      // Core row slide-in
      gsap.from(coreRowRef.current, {
        opacity: 0,
        y: 24,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: coreRowRef.current,
          start: "top 85%",
          once: true,
        },
      });

      // Bento cards stagger
      const bentoCards = bentoRef.current?.querySelectorAll(".bento-card");
      if (bentoCards?.length) {
        gsap.from(bentoCards, {
          opacity: 0,
          y: 32,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bentoRef.current,
            start: "top 82%",
            once: true,
          },
        });
      }

      // Exploring section
      gsap.from(exploringRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: exploringRef.current,
          start: "top 88%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0a0a0a] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-175 h-100 rounded-full opacity-[0.035] blur-[120px] bg-indigo-500" />
        <div className="absolute bottom-1/4 left-1/4 w-100 h-75 rounded-full opacity-[0.025] blur-[100px] bg-emerald-500" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* ── Section Heading ─────────────────────────────────────────────── */}
        <SectionHeading
          ref={headingRef}
          label="What I Work With"
          title="Tech Arsenal"
          description="A curated stack I rely on — from pixel-perfect frontends to production-grade APIs."
        />

        {/* ── Tier 1: Core Stack ──────────────────────────────────────────── */}
        <div className="mb-14">
          <div className="flex items-center justify-center mb-6">
            <SectionLabel>Core Stack</SectionLabel>
          </div>
          <div ref={coreRowRef} className="flex flex-wrap justify-center gap-3">
            {CORE_STACK.map((skill) => (
              <CoreSkill key={skill.name} skill={skill} />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="relative my-10 flex items-center gap-4">
          <div className="flex-1 h-px bg-linear-to-r from-transparent via-zinc-800 to-transparent" />
          <span className="text-zinc-700 text-sm tracking-widest uppercase font-mono">
            Categories
          </span>
          <div className="flex-1 h-px bg-linear-to-r from-transparent via-zinc-800 to-transparent" />
        </div>

        {/* ── Tier 2: Bento Grid ──────────────────────────────────────────── */}
        <div ref={bentoRef} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {BENTO_CATEGORIES.map((category) => (
            <BentoCard key={category.title} category={category} />
          ))}
        </div>

        {/* Divider */}
        <div className="relative my-10 flex items-center gap-4">
          <div className="flex-1 h-px bg-linear-to-r from-transparent via-zinc-800/50 to-transparent" />
          <span className="text-zinc-700 text-sm tracking-widest uppercase font-mono">
            On the Horizon
          </span>
          <div className="flex-1 h-px bg-linear-to-r from-transparent via-zinc-800/50 to-transparent" />
        </div>

        {/* ── Tier 3: Currently Exploring ─────────────────────────────────── */}
        <SkillExploring ref={exploringRef} />
      </div>
    </section>
  );
}
