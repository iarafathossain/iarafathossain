"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AnimatePresence,
  cubicBezier,
  motion,
  useReducedMotion,
} from "framer-motion";
import { Circle, Images, Play } from "lucide-react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Project } from "./interface";

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
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
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
  compact = false,
}: ProjectMediaDisplayProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [activeTab, setActiveTab] = useState("video");
  const prefersReducedMotion = useReducedMotion();
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const advanceImage = useCallback(() => {
    setDirection(1);
    setCurrentIndex(
      (prev) => (prev + 1) % project.fullPageImageUrlArray.length,
    );
  }, [project.fullPageImageUrlArray.length]);

  useEffect(() => {
    if (activeTab !== "showcase") return;
    intervalRef.current = setInterval(advanceImage, 4000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [activeTab, advanceImage]);

  const variants = {
    enter: (dir: number) => ({
      y: dir > 0 ? "-100%" : "100%",
      opacity: prefersReducedMotion ? 0 : 1,
    }),
    center: {
      y: "0%",
      opacity: 1,
      transition: { duration: 0.65, ease: cubicBezier(0.32, 0.72, 0, 1) },
    },
    exit: (dir: number) => ({
      y: dir > 0 ? "100%" : "-100%",
      opacity: prefersReducedMotion ? 0 : 1,
      transition: { duration: 0.65, ease: cubicBezier(0.32, 0.72, 0, 1) },
    }),
  };

  return (
    <Tabs
      value={activeTab}
      onValueChange={setActiveTab}
      className="w-full flex flex-col gap-3"
    >
      <TabsList
        className={`self-start flex gap-1 bg-muted/70 border border-border/50 backdrop-blur-md p-1 rounded-xl ${compact ? "h-8" : "h-9"}`}
      >
        <TabsTrigger
          value="video"
          className={`flex items-center gap-1.5 rounded-lg font-medium text-muted-foreground data-[state=active]:bg-background data-[state=active]:text-foreground hover:text-foreground/80 transition-all duration-200 ${compact ? "text-[10px] px-2.5 py-1" : "text-xs px-3 py-1.5"}`}
        >
          <Play className={compact ? "w-2.5 h-2.5" : "w-3 h-3"} />
          Demo Video
        </TabsTrigger>
        <TabsTrigger
          value="showcase"
          className={`flex items-center gap-1.5 rounded-lg font-medium text-muted-foreground data-[state=active]:bg-background data-[state=active]:text-foreground hover:text-foreground/80 transition-all duration-200 ${compact ? "text-[10px] px-2.5 py-1" : "text-xs px-3 py-1.5"}`}
        >
          <Images className={compact ? "w-2.5 h-2.5" : "w-3 h-3"} />
          Feature Showcase
        </TabsTrigger>
      </TabsList>

      <TabsContent value="video" className="m-0 mt-0">
        <BrowserChrome
          url={project.liveUrl.replace("https://", "")}
          accent={project.accentColor}
        >
          <div
            className="w-full bg-background overflow-hidden"
            style={{ height: viewportHeight }}
          >
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
          </div>
        </BrowserChrome>
      </TabsContent>

      <TabsContent value="showcase" className="m-0 mt-0">
        <BrowserChrome
          url={project.liveUrl.replace("https://", "")}
          accent={project.accentColor}
        >
          <div
            className="relative w-full overflow-hidden bg-background"
            style={{ height: viewportHeight }}
          >
            <AnimatePresence
              custom={direction}
              mode="popLayout"
              initial={false}
            >
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 w-full overflow-y-hidden"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.fullPageImageUrlArray[currentIndex]}
                  alt={`${project.title} screenshot ${currentIndex + 1}`}
                  className="w-full object-cover object-top"
                  style={{ height: "auto", minHeight: "100%" }}
                  draggable={false}
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
              {project.fullPageImageUrlArray.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > currentIndex ? 1 : -1);
                    setCurrentIndex(i);
                    if (intervalRef.current) clearInterval(intervalRef.current);
                  }}
                  className="transition-all duration-200 focus:outline-none"
                  aria-label={`Go to screenshot ${i + 1}`}
                >
                  <Circle
                    className={`transition-all duration-200 ${
                      i === currentIndex ? "w-2 h-2" : "w-1.5 h-1.5"
                    }`}
                    style={{
                      fill:
                        i === currentIndex
                          ? project.accentColor
                          : "rgba(150,150,150,0.5)",
                      stroke: "none",
                    }}
                  />
                </button>
              ))}
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none bg-linear-to-t from-background to-transparent" />
          </div>
        </BrowserChrome>
      </TabsContent>
    </Tabs>
  );
}
