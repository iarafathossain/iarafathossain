"use client";

import { ArrowUpRight, Star } from "lucide-react";
import { useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import type { Testimonial } from "./data";

/** Long reviews show this many paragraphs until the reader expands them. */
const PREVIEW_PARAGRAPHS = 2;

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

function Rating({ value }: { value: number }) {
  return (
    <div
      role="img"
      aria-label={`${value} out of 5 stars`}
      className="flex items-center gap-0.5"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          aria-hidden
          className={cn(
            "size-4",
            i < value
              ? "fill-primary text-primary"
              : "fill-transparent text-muted-foreground/40",
          )}
        />
      ))}
    </div>
  );
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({
  testimonial,
  className,
}: TestimonialCardProps) {
  const { name, designation, avatar, platform, platformUrl, rating, review } =
    testimonial;

  const [expanded, setExpanded] = useState(false);
  const isLong = review.length > PREVIEW_PARAGRAPHS;
  const visible =
    isLong && !expanded ? review.slice(0, PREVIEW_PARAGRAPHS) : review;
  const action = rating ? "Reviewed on" : "Recommended on";

  return (
    <Card
      className={cn(
        "gap-0 overflow-hidden py-0 transition-colors",
        "hover:border-primary/50 focus-within:border-primary/50",
        className,
      )}
    >
      {/* Who said it */}
      <header className="flex items-center gap-4 px-6 pt-6 md:px-8">
        <Avatar className="size-12 ring-2 ring-primary ring-offset-2 ring-offset-card">
          {avatar && <AvatarImage src={avatar} alt={`Photo of ${name}`} />}
          <AvatarFallback className="bg-primary/15 font-semibold text-foreground">
            {getInitials(name)}
          </AvatarFallback>
        </Avatar>

        <div className="min-w-0">
          <p className="truncate text-base font-semibold text-foreground">
            {name}
          </p>
          <p className="truncate text-sm text-muted-foreground">
            {designation}
          </p>
        </div>
      </header>

      {/* What they said */}
      <div className="flex flex-col gap-4 px-6 py-6 md:px-8">
        {rating && <Rating value={rating} />}

        <blockquote className="space-y-4 border-l-2 border-primary pl-5">
          {visible.map((paragraph) => (
            <p
              key={paragraph}
              className="max-w-prose text-[0.95rem] leading-relaxed text-foreground/90"
            >
              {paragraph}
            </p>
          ))}
        </blockquote>

        {isLong && (
          <Button
            type="button"
            variant="link"
            size="sm"
            aria-expanded={expanded}
            onClick={() => setExpanded((prev) => !prev)}
            className="h-auto self-start p-0 text-foreground underline decoration-primary decoration-2 underline-offset-4"
          >
            {expanded ? "Show less" : "Read full recommendation"}
          </Button>
        )}
      </div>

      {/* Where it lives */}
      <footer className="flex items-center justify-between gap-4 border-t bg-primary/5 px-6 py-4 md:px-8">
        <span className="text-sm text-muted-foreground">{action}</span>
        <a
          href={platformUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "inline-flex items-center gap-1 rounded-sm text-sm font-semibold text-foreground",
            "underline decoration-primary decoration-2 underline-offset-4",
            "hover:decoration-[3px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
          )}
        >
          {platform}
          <ArrowUpRight className="size-4" aria-hidden />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </footer>
    </Card>
  );
}

export default TestimonialCard;
