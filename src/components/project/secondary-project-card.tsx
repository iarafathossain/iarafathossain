"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  ExternalLink,
  Code as Github,
  Layers,
  Server,
} from "lucide-react";
import { Tag } from "../shared/tag";
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
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
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
        className="h-full bg-card/50 border border-border backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-primary/30 shadow-sm hover:shadow-primary/10 flex flex-col group"
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

          <ul className="list-disc pl-5 space-y-1">
            {project.highlights.map((h, i) => (
              <li
                key={i}
                className="text-muted-foreground text-base leading-relaxed"
              >
                {h}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                <Layers className="w-3 h-3" />
                Frontend
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.frontendStack.map((t) => (
                  <Tag key={t.id} text={t.name} />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                <Server className="w-3 h-3" />
                Backend
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.backendStack.map((t) => (
                  <Tag key={t.id} text={t.name} />
                ))}
              </div>
            </div>
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
