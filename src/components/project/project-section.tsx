"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import SectionHeading from "../section-heading";
import DiagonalBGEffect from "../shared/diagonal-bg-effect";
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
        opacity: 0,
        y: 28,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 88%",
          once: true,
        },
      });

      gsap.from(heroRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 85%",
          once: true,
        },
      });

      const cards = gridRef.current?.querySelectorAll(".project-card");
      if (cards?.length) {
        gsap.from(cards, {
          opacity: 0,
          y: 36,
          duration: 0.65,
          stagger: 0.14,
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 83%",
            once: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-muted py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <DiagonalBGEffect />

      <div className="relative max-w-6xl mx-auto">
        <SectionHeading
          ref={headingRef}
          label="Selected Work"
          title="Featured Projects"
          description="End-to-end products shipped with care — from schema design to deployment pipeline."
        />

        <div ref={heroRef} className="mb-12">
          <div
            className="relative rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm p-6 sm:p-8 xl:p-10 overflow-hidden"
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
        </div>

        <div className="relative my-10 flex items-center gap-4">
          <div className="flex-1 h-px bg-linear-to-r from-transparent via-border to-transparent" />
          <span className="text-muted-foreground text-sm tracking-widest uppercase font-mono shrink-0">
            More Projects
          </span>
          <div className="flex-1 h-px bg-linear-to-r from-transparent via-border to-transparent" />
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {secondaryProjects.map((project) => (
            <SecondaryProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
