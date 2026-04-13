import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import ContextBlock from "./context-block";
import MacOsDots from "./macos-dots";

interface ArchitecturePatternCardProps {
  custom: number;
  variants: Variants;
  filePath: string;
  contextTitle: string;
  contextDescription: string;
  children: ReactNode;
}

export default function ArchitecturePatternCard({
  custom,
  variants,
  filePath,
  contextTitle,
  contextDescription,
  children,
}: ArchitecturePatternCardProps) {
  return (
    <motion.div
      custom={custom}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      className="flex h-full flex-col"
    >
      <Card
        className="h-full flex flex-col rounded-xl overflow-hidden border border-border/60 bg-card/45 backdrop-blur-md shadow-2xl"
        style={{
          boxShadow:
            "inset 0 1px 0 color-mix(in oklch, var(--primary) 7%, transparent), 0 24px 70px -36px color-mix(in oklch, var(--primary) 18%, transparent)",
        }}
      >
        <CardHeader className="flex flex-row items-center gap-3 px-4 py-3 space-y-0 bg-background/40">
          <MacOsDots />

          <div className="flex-1 flex justify-center">
            <span className="max-w-75 truncate text-sm text-muted-foreground bg-muted/65 border border-border/60 rounded-md px-3 py-0.5 font-mono tracking-wide">
              {filePath}
            </span>
          </div>

          <Badge
            variant="outline"
            className="text-xs uppercase tracking-widest text-muted-foreground border-border/70 bg-transparent px-2 py-0 font-mono"
          >
            typescript
          </Badge>
        </CardHeader>

        <Separator className="bg-border/50" />

        <CardContent className="flex-1 px-5 py-5">
          <pre
            className="font-mono text-sm leading-6 overflow-x-hidden whitespace-pre-wrap wrap-break-word [counter-reset:line]"
            style={{ tabSize: 2 }}
          >
            <code>{children}</code>
          </pre>
        </CardContent>
      </Card>

      <ContextBlock title={contextTitle} desc={contextDescription} />
    </motion.div>
  );
}
