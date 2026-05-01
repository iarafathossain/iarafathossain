"use client";

import React from "react";
import { Project } from "./interface";

function getYouTubeVideoId(url: string) {
  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname.includes("youtu.be")) {
      return parsedUrl.pathname.slice(1);
    }

    if (parsedUrl.hostname.includes("youtube.com")) {
      return parsedUrl.searchParams.get("v");
    }
  } catch {
    return null;
  }

  return null;
}

function BrowserChrome({
  children,
  url,
  accent,
}: {
  children: React.ReactNode;
  url: string;
  accent: string;
}) {
  return (
    <div className="rounded-xl overflow-hidden border border-border/60 shadow-2xl bg-background flex flex-col">
      <div className="flex items-center gap-3 px-4 py-2.5 bg-muted/50 border-b border-border/60 shrink-0">
        <div className="flex items-center gap-1.5">
          <span
            className="w-2.5 h-2.5 rounded-full"
            style={{ background: "var(--window-control-close)" }}
          />
          <span
            className="w-2.5 h-2.5 rounded-full"
            style={{ background: "var(--window-control-warn)" }}
          />
          <span
            className="w-2.5 h-2.5 rounded-full"
            style={{ background: "var(--window-control-ok)" }}
          />
        </div>
        <div className="flex-1 flex items-center justify-center text-[10px] font-mono text-muted-foreground bg-background/60 rounded-md px-3 py-1 border border-border/40 max-w-75 mx-auto truncate">
          <span
            className="w-1.5 h-1.5 rounded-full mr-1.5 shrink-0"
            style={{ background: accent }}
          />
          {url}
        </div>
      </div>
      {children}
    </div>
  );
}

export type ProjectMediaDisplayProps = {
  project: Project;
  viewportHeight?: string;
  compact?: boolean;
};

export default function ProjectMediaDisplay({
  project,
  viewportHeight = "420px",
}: ProjectMediaDisplayProps) {
  const youtubeVideoId = getYouTubeVideoId(project.videoUrl);

  return (
    <BrowserChrome
      url={project.liveUrl.replace("https://", "")}
      accent={project.accentColor}
    >
      <div
        className="w-full bg-background overflow-hidden"
        style={{ height: viewportHeight }}
      >
        {youtubeVideoId ? (
          <iframe
            src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&controls=1&rel=0`}
            title={`${project.title} demo video`}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <video
            key={project.videoUrl}
            src={project.videoUrl}
            autoPlay
            muted
            loop
            playsInline
            controls
            className="w-full h-full object-cover"
          />
        )}
      </div>
    </BrowserChrome>
  );
}
