import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { ICoreSkill } from "./interface";

interface CoreSkillProps {
  skill: ICoreSkill;
}

const CoreSkill = ({ skill }: CoreSkillProps) => (
  <TooltipProvider delayDuration={200}>
    <Tooltip>
      <TooltipTrigger asChild>
        <motion.div
          whileHover={{ scale: 1.06, y: -2 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 18 }}
          className="group relative flex items-center gap-2.5 px-5 py-3 rounded-xl
              bg-zinc-900/70 border border-zinc-800/60 backdrop-blur-md cursor-default
              hover:border-indigo-500/50 hover:bg-zinc-800/60
              transition-colors duration-300"
          style={{
            boxShadow: "0 0 0 0 transparent",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow =
              "0 0 18px 0 rgba(99,102,241,0.15)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow =
              "0 0 0 0 transparent";
          }}
        >
          <span className="text-indigo-400 group-hover:text-indigo-300 transition-colors duration-200">
            {skill.icon}
          </span>
          <span className="text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors duration-200 whitespace-nowrap">
            {skill.name}
          </span>
        </motion.div>
      </TooltipTrigger>
      <TooltipContent
        side="bottom"
        className="bg-zinc-900 border-zinc-700/60 text-zinc-300 text-xs"
      >
        {skill.description}
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export default CoreSkill;
