import { motion } from "framer-motion";
import { forwardRef } from "react";
import { Badge } from "../ui/badge";
import { EXPLORING_GROUPS } from "./data";

const SkillExploring = forwardRef<HTMLDivElement>(({}, ref) => (
  <div ref={ref} className="opacity-70">
    <div className="flex items-center justify-center gap-2 mb-6">
      <span className="text-base">🌱</span>
      <span className="text-sm font-semibold tracking-[0.2em] uppercase text-zinc-500">
        Currently Exploring
      </span>
    </div>

    <div className="flex flex-col items-center sm:flex-row sm:items-center justify-center gap-8 sm:gap-16">
      {EXPLORING_GROUPS.map((group) => (
        <div
          key={group.groupTitle}
          className="flex flex-col items-center gap-3"
        >
          <div className="flex items-center gap-1.5 text-zinc-500">
            {group.icon}
            <span className="text-sm font-medium tracking-wide text-zinc-500">
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
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full
                          text-sm font-medium text-zinc-500 border-zinc-800/60
                          bg-transparent hover:text-zinc-400 hover:border-zinc-700
                          transition-all duration-200 cursor-default"
                >
                  <span className="text-zinc-600">{skill.icon}</span>
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
