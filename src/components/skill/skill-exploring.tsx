import { motion } from "framer-motion";
import { forwardRef } from "react";
import { Badge } from "../ui/badge";
import { EXPLORING_GROUPS } from "./data";

const SkillExploring = forwardRef<HTMLDivElement>(({}, ref) => (
  <div ref={ref} className="opacity-90">
    <div className="flex items-center justify-center gap-2 mb-6">
      <span className="text-base">🌱</span>
      <span className="text-lg font-semibold tracking-widest uppercase text-muted-foreground">
        Currently Exploring
      </span>
    </div>

    <div className="flex flex-col items-center sm:flex-row sm:items-center justify-center gap-8 sm:gap-16">
      {EXPLORING_GROUPS.map((group) => (
        <div
          key={group.groupTitle}
          className="flex flex-col items-center gap-3"
        >
          <div className="flex items-center gap-1.5 text-muted-foreground">
            {group.icon}
            <span className="text-lg font-medium tracking-wide">
              {group.groupTitle}
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {group.skills.map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.04 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                }}
              >
                <Badge
                  variant="outline"
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium text-muted-foreground border-border bg-transparent hover:text-foreground hover:border-primary/50 transition-all duration-200 cursor-default"
                >
                  <span className="opacity-70">{skill.icon}</span>
                  {skill.name}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
));

SkillExploring.displayName = "SkillExploring";

export default SkillExploring;
