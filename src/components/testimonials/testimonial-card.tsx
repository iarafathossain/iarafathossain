"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ExternalLink, Quote, Star } from "lucide-react";
import Image from "next/image";
import FreelancerLogoFull from "./freelancer-logo-full";
import { Testimonial } from "./interface";

export default function TestimonialCard({ data }: { data: Testimonial }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="relative flex flex-col h-full rounded-2xl overflow-hidden bg-card/40 backdrop-blur-lg border border-border shadow-sm hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30 transition-all duration-300 group"
    >
      <Quote className="absolute top-6 right-6 w-16 h-16 text-foreground/3 -rotate-12 group-hover:text-primary/10 transition-colors duration-500" />

      <div className="p-8 pb-6 grow flex flex-col z-10">
        <div className="flex justify-between items-start mb-4">
          <div className="flex gap-4 items-center">
            <Image
              src={data.avatar}
              alt={data.name}
              width={48}
              height={48}
              className="w-12 h-12 rounded-full border border-border object-cover"
            />
            <div>
              <h4 className="text-foreground font-semibold text-base">
                {data.name}
              </h4>
              <div className="flex items-center gap-2">
                {data.flag && (
                  <Image
                    src={data.flag}
                    alt={`${data.designation} flag`}
                    width={20}
                    height={14}
                    className="w-5 h-auto mt-1"
                  />
                )}
                <p className="text-muted-foreground text-sm">
                  {data.designation}
                </p>
              </div>
            </div>
          </div>

          {data.price && (
            <span className="text-primary font-mono text-sm font-semibold tracking-tight">
              {data.price}
            </span>
          )}
        </div>

        <div className="mt-2">
          <div className="flex text-primary text-sm mb-2.5 gap-0.5">
            {[...Array(data.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <h3 className="text-foreground font-bold text-lg leading-snug">
            {data.title}
          </h3>
        </div>

        <blockquote className="text-muted-foreground text-md leading-relaxed grow italic border-l-2 border-border pl-4 mt-3">
          &quot;{data.quote}&quot;
        </blockquote>

        <div className="flex flex-wrap gap-2.5 mt-6 pt-4 border-t border-border/50">
          {data.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="bg-secondary/50 text-secondary-foreground border-border text-[11px] font-medium tracking-wide hover:bg-secondary hover:text-foreground transition-colors cursor-default"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {data.platform && (
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto w-full border-t border-border bg-secondary/10 px-8 py-3 flex items-center justify-between hover:bg-primary/5 transition-colors group/link cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground font-medium tracking-wide">
              Verify on
            </span>
            <FreelancerLogoFull />
          </div>
          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover/link:text-primary group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-all" />
        </a>
      )}
    </motion.div>
  );
}
