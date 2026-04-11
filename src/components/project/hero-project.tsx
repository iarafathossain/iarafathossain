"use client";

import { Badge } from "@/components/ui/badge";
import {
  ArrowUpRight,
  BookOpen,
  Code as Github,
  ExternalLink,
  Layers,
  Server,
} from "lucide-react";
import { motion } from "framer-motion";
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
              className="text-[10px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 rounded-md border-0"
              style={{
                background: project.accentColor + "20",
                color: project.accentColor,
              }}
            >
              {project.type}
            </Badge>
            <Badge
              variant="outline"
              className="text-[10px] font-semibold tracking-[0.12em] uppercase px-2.5 py-1 rounded-md border-zinc-700/50 text-zinc-500"
            >
              Hero Project
            </Badge>
          </div>

          <h3
            className="text-3xl xl:text-4xl font-black tracking-tight text-zinc-100 leading-[1.1]"
            style={{
              fontFamily: "'DM Mono', 'Fira Code', monospace",
              letterSpacing: "-0.03em",
            }}
          >
            {project.title}
          </h3>
        </div>

        <p className="text-zinc-400 text-sm leading-relaxed max-w-lg">
          {project.description}
        </p>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-zinc-600">
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
            <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-zinc-600">
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

        <div className="h-px bg-zinc-800/60" />

        <div className="flex flex-wrap items-center gap-2.5">
          <GlowButton href={project.liveUrl} accent={project.accentColor}>
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
              background: project.accentColor + "20",
              border: `1px solid ${project.accentColor}30`,
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
            <span className="text-[10px] text-zinc-600">
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
