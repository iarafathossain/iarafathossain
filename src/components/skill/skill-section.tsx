"use client";

import SectionHeading from "@/components/section-heading";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import SectionLabel from "../section-label";
import {
  SECTION_GSAP_BLOCK,
  SECTION_GSAP_HEADING,
} from "../shared/section-animations";
import SectionShell from "../shared/section-shell";
import SquareBGEffect from "../shared/square-bg-effect";
import BentoCard from "./bento-card";
import CoreSkill from "./core-skill";
import { BENTO_CATEGORIES, CORE_STACK } from "./data";
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
      gsap.from(headingRef.current, {
        opacity: SECTION_GSAP_HEADING.opacity,
        y: SECTION_GSAP_HEADING.y,
        duration: SECTION_GSAP_HEADING.duration,
        ease: SECTION_GSAP_HEADING.ease,
        scrollTrigger: {
          trigger: headingRef.current,
          start: SECTION_GSAP_HEADING.start,
          once: SECTION_GSAP_HEADING.once,
        },
      });

      gsap.from(coreRowRef.current, {
        opacity: SECTION_GSAP_BLOCK.opacity,
        y: SECTION_GSAP_BLOCK.y,
        duration: SECTION_GSAP_BLOCK.duration,
        ease: SECTION_GSAP_BLOCK.ease,
        scrollTrigger: {
          trigger: coreRowRef.current,
          start: SECTION_GSAP_BLOCK.start,
          once: SECTION_GSAP_BLOCK.once,
        },
      });

      const bentoCards = bentoRef.current?.querySelectorAll(".bento-card");
      if (bentoCards?.length) {
        gsap.from(bentoCards, {
          opacity: 0,
          y: 32,
          duration: 0.65,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bentoRef.current,
            start: SECTION_GSAP_BLOCK.start,
            once: true,
          },
        });
      }

      gsap.from(exploringRef.current, {
        opacity: SECTION_GSAP_BLOCK.opacity,
        y: SECTION_GSAP_BLOCK.y,
        duration: SECTION_GSAP_BLOCK.duration,
        ease: SECTION_GSAP_BLOCK.ease,
        scrollTrigger: {
          trigger: exploringRef.current,
          start: SECTION_GSAP_BLOCK.start,
          once: SECTION_GSAP_BLOCK.once,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionShell ref={sectionRef} id="skills" background={<SquareBGEffect />}>
      <div className="space-y-12">
        <SectionHeading
          ref={headingRef}
          label="What I Work With"
          title="Tech Arsenal"
          description="A curated stack I rely on — from pixel-perfect frontends to production-grade APIs."
        />

        <div>
          <div className="flex items-center justify-center mb-6">
            <SectionLabel>Core Stack</SectionLabel>
          </div>
          <div ref={coreRowRef} className="flex flex-wrap justify-center gap-3">
            {CORE_STACK.map((skill) => (
              <CoreSkill key={skill.name} skill={skill} />
            ))}
          </div>
        </div>

        {/* Divider - Now uses theme borders */}
        <div className="relative flex items-center gap-4">
          <div className="flex-1 h-px bg-linear-to-r from-transparent via-border to-transparent" />
          <span className="text-muted-foreground text-sm tracking-widest uppercase font-mono shrink-0">
            Categories
          </span>
          <div className="flex-1 h-px bg-linear-to-r from-transparent via-border to-transparent" />
        </div>

        <div ref={bentoRef} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {BENTO_CATEGORIES.map((category) => (
            <BentoCard key={category.title} category={category} />
          ))}
        </div>

        {/* Divider */}
        <div className="relative flex items-center gap-4">
          <div className="flex-1 h-px bg-linear-to-r from-transparent via-border to-transparent" />
          <span className="text-muted-foreground text-sm tracking-widest uppercase font-mono shrink-0">
            On the Horizon
          </span>
          <div className="flex-1 h-px bg-linear-to-r from-transparent via-border to-transparent" />
        </div>

        <SkillExploring ref={exploringRef} />
      </div>
    </SectionShell>
  );
}
