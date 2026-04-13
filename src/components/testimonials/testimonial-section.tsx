"use client";

import SectionHeading from "@/components/section-heading";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart, Star } from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import DotBGEffect from "../shared/dot-bg-effect";
import { testimonials } from "./data";
import TestimonialCard from "./testimonial-card";

gsap.registerPlugin(ScrollTrigger);

export default function TestimonialsRedesign() {
  const componentRef = useRef<HTMLElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(componentRef, { once: true, margin: "-100px" });

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const graphics = backgroundRef.current?.querySelectorAll(".bg-graphic");
      if (!graphics) return;

      graphics.forEach((graphic, index) => {
        gsap.to(graphic, {
          y: "random(-50, 50)",
          x: "random(-30, 30)",
          rotation: "random(-15, 15)",
          duration: "random(10, 20)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.5,
        });
      });
    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={componentRef}
      className="relative w-full bg-muted py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <DotBGEffect />
      <div
        ref={backgroundRef}
        className="absolute inset-0 pointer-events-none z-0"
      >
        <div className="absolute top-1/4 left-1/4 w-150 h-150 bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-150 h-150 bg-primary/5 blur-[120px] rounded-full" />

        <Heart className="bg-graphic absolute top-[10%] left-[5%] w-24 h-24 text-foreground/3 rotate-12" />
        <Heart className="bg-graphic absolute top-[70%] left-[8%] w-16 h-16 text-primary/20 -rotate-12" />
        <Star className="bg-graphic absolute top-[30%] right-[10%] w-20 h-20 text-foreground/3 fill-none stroke-current" />
        <Star className="bg-graphic absolute top-[80%] right-[5%] w-14 h-14 text-primary/20 fill-none stroke-current rotate-45" />
        <Heart className="bg-graphic absolute top-[50%] left-[50%] w-32 h-32 text-foreground/15 -rotate-3" />
      </div>

      <div className="z-10 w-full max-w-7xl mx-auto px-6">
        <SectionHeading
          ref={headingRef}
          label="Trusted Feedback"
          title={
            <>
              <span className="sm:hidden">Client & Mentor</span>
              <span className="hidden sm:inline">
                Words From Client & Mentor
              </span>
            </>
          }
          description="A few words from clients and mentors across freelance work and mentorship."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((data, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: index * 0.25,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <TestimonialCard data={data} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
