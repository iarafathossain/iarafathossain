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
              bg-card border border-border backdrop-blur-md cursor-default
              hover:border-primary/50 hover:bg-card/80
              transition-colors duration-300 shadow-sm"
        >
          <span className="text-primary/80 group-hover:text-primary transition-colors duration-200">
            {skill.icon}
          </span>
          <span className="text-sm font-medium text-foreground transition-colors duration-200 whitespace-nowrap">
            {skill.name}
          </span>
        </motion.div>
      </TooltipTrigger>
      <TooltipContent
        side="bottom"
        className="bg-popover border-border text-popover-foreground text-xs font-medium"
      >
        {skill.description}
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export default CoreSkill;
