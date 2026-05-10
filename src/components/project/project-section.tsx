"use client";

import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import SectionHeading from "../section-heading";
import {
  SECTION_GSAP_BLOCK,
  SECTION_GSAP_HEADING,
} from "../shared/section-animations";
import SectionShell from "../shared/section-shell";
import SquareBGEffect from "../shared/square-bg-effect";
import { PROJECTS } from "./data";
import HeroProject from "./hero-project";
import SecondaryProjectCard from "./secondary-project-card";

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const [hero, ...secondaryProjects] = PROJECTS;

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

      gsap.from(heroRef.current, {
        opacity: SECTION_GSAP_BLOCK.opacity,
        y: SECTION_GSAP_BLOCK.y,
        duration: SECTION_GSAP_BLOCK.duration,
        ease: SECTION_GSAP_BLOCK.ease,
        scrollTrigger: {
          trigger: heroRef.current,
          start: SECTION_GSAP_BLOCK.start,
          once: SECTION_GSAP_BLOCK.once,
        },
      });

      const cards = gridRef.current?.querySelectorAll(".project-card");
      if (cards?.length) {
        gsap.from(cards, {
          opacity: 0,
          y: 36,
          duration: 0.65,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: SECTION_GSAP_BLOCK.start,
            once: SECTION_GSAP_BLOCK.once,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionShell
      ref={sectionRef}
      id="projects"
      background={<SquareBGEffect />}
    >
      <div className="space-y-12">
        <SectionHeading
          ref={headingRef}
          label="Selected Work"
          title="Featured Projects"
          description="End-to-end products shipped with care — from schema design to deployment pipeline."
        />

        <motion.div
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.setProperty(
              "--card-glow",
              `color-mix(in oklch, var(--primary) 10%, transparent)`,
            );
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.setProperty(
              "--card-glow",
              "transparent",
            );
          }}
          ref={heroRef}
        >
          <div
            className="relative rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm p-6 sm:p-8 xl:p-10 overflow-hidden ring-1 ring-border/50 hover:border-primary/30 hover:ring-primary/30 hover:shadow-primary/10 transition-all duration-300"
            style={{
              boxShadow:
                "inset 0 1px 0 color-mix(in oklch, var(--primary) 5%, transparent), 0 2px 60px 0 color-mix(in oklch, var(--primary) 5%, transparent)",
            }}
          >
            <div
              className="absolute top-0 left-0 w-48 h-48 opacity-[0.06] pointer-events-none rounded-br-full"
              style={{ background: hero.accentColor }}
            />
            <div
              className="absolute bottom-0 right-0 w-32 h-32 opacity-[0.04] pointer-events-none rounded-tl-full"
              style={{ background: hero.accentColor }}
            />

            <HeroProject project={hero} />
          </div>
        </motion.div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {secondaryProjects.map((project) => (
            <SecondaryProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
