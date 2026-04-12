"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  ExternalLink,
  Code as Github,
  Layers,
  Server,
} from "lucide-react";
import GlowButton from "./glow-button";
import { Project } from "./interface";
import ProjectMediaDisplay from "./project-media-display";
import TechPill from "./tech-pill";

export default function HeroProject({ project }: { project: Project }) {
  return (
    <div className="hero-project grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 items-center">
      <div className="w-full">
        <ProjectMediaDisplay project={project} viewportHeight="440px" />
      </div>

      <div className="flex flex-col gap-5">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Badge
              className="text-xs font-bold tracking-[0.15em] uppercase px-2.5 py-1 rounded-md border-0"
              style={{
                background: `color-mix(in oklch, ${project.accentColor} 12%, transparent)`,
                color: project.accentColor,
              }}
            >
              {project.type}
            </Badge>
            <Badge
              variant="outline"
              className="text-xs font-semibold tracking-[0.12em] uppercase px-2.5 py-1 rounded-md border-border text-muted-foreground"
            >
              Hero Project
            </Badge>
          </div>

          <h3
            className="text-3xl xl:text-4xl font-black tracking-tight text-foreground leading-[1.1]"
            style={{
              letterSpacing: "-0.03em",
            }}
          >
            {project.title}
          </h3>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed max-w-lg">
          {project.description}
        </p>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
              <Layers className="w-3 h-3" />
              Frontend
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.frontendStack.map((t) => (
                <TechPill key={t} label={t} />
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
                <TechPill key={t} label={t} />
              ))}
            </div>
          </div>
        </div>

        <div className="h-px bg-border/60" />

        <div className="flex flex-wrap items-center gap-2.5">
          <GlowButton href={project.liveUrl}>
            <ExternalLink className="w-3.5 h-3.5" />
            Live Site
          </GlowButton>

          <GlowButton
            href={project.githubUrlFrontend}
            variant="outline"
            accent={project.accentColor}
          >
            <Github className="w-3.5 h-3.5" />
            Frontend
          </GlowButton>

          <GlowButton
            href={project.githubUrlBackend}
            variant="outline"
            accent={project.accentColor}
          >
            <Github className="w-3.5 h-3.5" />
            Backend
          </GlowButton>
        </div>

        <motion.a
          href={project.deepDiveUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ x: 4 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="group inline-flex items-center gap-2.5 self-start"
        >
          <span
            className="flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200 group-hover:scale-110"
            style={{
              background: `color-mix(in oklch, ${project.accentColor} 12%, transparent)`,
              border: `1px solid color-mix(in oklch, ${project.accentColor} 18%, transparent)`,
            }}
          >
            <BookOpen
              className="w-3.5 h-3.5"
              style={{ color: project.accentColor }}
            />
          </span>
          <span className="flex flex-col">
            <span
              className="text-sm font-semibold group-hover:underline underline-offset-2"
              style={{ color: project.accentColor }}
            >
              Read the Technical Deep Dive
            </span>
            <span className="text-xs text-muted-foreground">
              Architecture · Decisions · Challenges
            </span>
          </span>
          <ArrowUpRight
            className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all duration-200"
            style={{ color: project.accentColor }}
          />
        </motion.a>
      </div>
    </div>
  );
}
