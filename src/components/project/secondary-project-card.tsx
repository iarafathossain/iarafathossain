"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  ExternalLink,
  Code as Github,
} from "lucide-react";
import SkillBadge from "../skill/skill-badge";
import GlowButton from "./glow-button";
import { Project } from "./interface";
import ProjectMediaDisplay from "./project-media-display";

export default function SecondaryProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <motion.div
      className="project-card h-full"
      whileHover={{ scale: 1.015, y: -3 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.setProperty(
          "--card-glow",
          `color-mix(in oklch, ${project.accentColor} 10%, transparent)`,
        );
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.setProperty(
          "--card-glow",
          "transparent",
        );
      }}
    >
      <Card
        className="h-full bg-card/80 border-border/50 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-border/80 flex flex-col group"
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow =
            `0 8px 40px 0 color-mix(in oklch, ${project.accentColor} 8%, transparent)`;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = "";
        }}
        style={{
          boxShadow:
            "inset 0 1px 0 color-mix(in oklch, var(--foreground) 3%, transparent)",
        }}
      >
        <div
          className="h-0.5 w-0 group-hover:w-full transition-all duration-500 ease-out"
          style={{
            background: `linear-gradient(90deg, transparent, color-mix(in oklch, ${project.accentColor} 56%, transparent), transparent)`,
          }}
        />

        <div className="px-4 pt-4 shrink-0">
          <ProjectMediaDisplay
            project={project}
            viewportHeight="260px"
            compact
          />
        </div>

        <CardContent className="flex flex-col gap-4 p-5 flex-1">
          <div className="flex items-start justify-between gap-2">
            <div>
              <Badge
                className="text-xs font-bold tracking-[0.15em] uppercase px-2 py-0.5 rounded mb-2 border-0"
                style={{
                  background: `color-mix(in oklch, ${project.accentColor} 10%, transparent)`,
                  color: project.accentColor,
                }}
              >
                {project.type}
              </Badge>
              <h3
                className="text-lg font-black tracking-tight text-foreground leading-normal"
                style={{
                  letterSpacing: "-0.02em",
                }}
              >
                {project.title}
              </h3>
            </div>
          </div>

          <p className="text-muted-foreground text-base leading-relaxed line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {[
              ...project.frontendStack.slice(0, 3),
              ...project.backendStack.slice(0, 3),
            ].map((t) => (
              <SkillBadge key={t.name} skill={t} />
            ))}
          </div>

          <div className="flex-1" />

          <div className="h-px bg-border/50" />

          <div className="flex flex-wrap items-center gap-2">
            <GlowButton
              href={project.liveUrl}
              accent={project.accentColor}
              compact
            >
              <ExternalLink className="w-3 h-3" />
              Live
            </GlowButton>
            <GlowButton
              href={project.githubUrlFrontend}
              variant="outline"
              accent={project.accentColor}
              compact
            >
              <Github className="w-3 h-3" />
              FE
            </GlowButton>
            <GlowButton
              href={project.githubUrlBackend}
              variant="outline"
              accent={project.accentColor}
              compact
            >
              <Github className="w-3 h-3" />
              BE
            </GlowButton>

            <motion.a
              href={project.deepDiveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 2 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="group ml-auto flex items-center gap-1 text-sm font-semibold transition-colors duration-150"
              style={{
                color: `color-mix(in oklch, ${project.accentColor} 80%, transparent)`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color =
                  project.accentColor;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color =
                  `color-mix(in oklch, ${project.accentColor} 80%, transparent)`;
              }}
            >
              <BookOpen className="w-3 h-3" />
              Deep Dive
              <ArrowUpRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
