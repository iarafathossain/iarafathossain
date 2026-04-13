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
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="flex h-full flex-col"
    >
      <Card
        className="group relative h-full flex flex-col rounded-xl overflow-hidden border border-border bg-card/50 backdrop-blur-md shadow-sm hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300"
        style={{
          boxShadow:
            "inset 0 1px 0 color-mix(in oklch, var(--primary) 7%, transparent), 0 24px 70px -36px color-mix(in oklch, var(--primary) 18%, transparent)",
        }}
      >
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
