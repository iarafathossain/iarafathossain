import { CalendarDays, MapPin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Experience } from "./data";

interface ExperienceCardProps {
  experience: Experience;
  className?: string;
}

export function ExperienceCard({ experience, className }: ExperienceCardProps) {
  const {
    company,
    role,
    location,
    workMode,
    period,
    duration,
    highlights,
    tech,
  } = experience;

  return (
    <Card
      className={cn(
        "group gap-0 overflow-hidden py-0 transition-colors",
        "hover:border-primary/50 focus-within:border-primary/50",
        "md:grid md:grid-cols-[13rem_1fr]",
        className,
      )}
    >
      {/* Left rail: when + where. Becomes a top bar on mobile. */}
      <div
        className={cn(
          "relative flex flex-col gap-3 bg-primary/10 px-6 py-5",
          "border-b border-primary/20 md:border-b-0 md:border-r",
        )}
      >
        {/* Brand accent edge */}
        <span
          aria-hidden
          className="absolute inset-x-0 top-0 h-1 bg-primary md:inset-y-0 md:right-auto md:h-auto md:w-1"
        />

        <div className="flex items-center gap-2 text-foreground">
          <CalendarDays className="size-4 shrink-0 text-primary" aria-hidden />
          <span className="text-sm font-semibold tabular-nums">{period}</span>
        </div>

        {duration && (
          <p className="text-sm text-muted-foreground md:-mt-1 md:pl-6">
            {duration}
          </p>
        )}

        <div className="flex flex-wrap items-center gap-x-2 gap-y-2 md:mt-auto md:flex-col md:items-start">
          <Badge className="border-transparent bg-primary text-primary-foreground hover:bg-primary">
            {workMode}
          </Badge>
          <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="size-3.5 shrink-0" aria-hidden />
            {location}
          </span>
        </div>
      </div>

      {/* Right: role + what I did */}
      <div className="flex flex-col gap-5 px-6 py-6 md:px-8">
        <header className="space-y-1">
          <h3 className="text-2xl font-bold tracking-tight text-foreground">
            {company}
          </h3>
          <p className="text-base font-medium text-muted-foreground">{role}</p>
        </header>

        <ul className="space-y-3">
          {highlights.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-sm leading-relaxed text-foreground/90"
            >
              <span
                aria-hidden
                className="mt-[0.6rem] h-0.5 w-3 shrink-0 rounded-full bg-primary"
              />
              <span className="max-w-prose">{item}</span>
            </li>
          ))}
        </ul>

        {tech && tech.length > 0 && (
          <ul
            aria-label="Tools and technologies"
            className="flex flex-wrap gap-2 border-t pt-5"
          >
            {tech.map((t) => (
              <li key={t}>
                <Badge variant="outline" className="font-normal">
                  {t}
                </Badge>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Card>
  );
}
