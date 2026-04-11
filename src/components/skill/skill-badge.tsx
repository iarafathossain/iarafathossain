import { motion } from "framer-motion";
import React from "react";
import { Badge } from "../ui/badge";
import { ISkill } from "./interface";

const SkillBadge = ({ skill, accent }: { skill: ISkill; accent: string }) => (
  <motion.div
    whileHover={{ scale: 1.06 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 500, damping: 20 }}
  >
    <Badge
      variant="outline"
      className="group flex items-center gap-1.5 p-4 rounded-full
          text-sm font-medium text-zinc-400
          bg-zinc-900/60 border-zinc-700/50 backdrop-blur-sm
          hover:text-zinc-100 hover:bg-zinc-800/80 cursor-default
          transition-all duration-200"
      style={
        {
          "--accent-color": accent,
        } as React.CSSProperties
      }
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = accent + "80";
        el.style.boxShadow = `0 0 10px 0 ${accent}25`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "";
        el.style.boxShadow = "";
      }}
    >
      <span
        className="transition-colors duration-200"
        style={{ color: accent + "cc" }}
      >
        {skill.icon}
      </span>
      {skill.name}
    </Badge>
  </motion.div>
);

export default SkillBadge;
