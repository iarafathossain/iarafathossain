import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import { ISkill } from "./interface";

const SkillBadge = ({ skill }: { skill: ISkill }) => (
  <motion.div
    whileHover={{ scale: 1.06 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 500, damping: 20 }}
  >
    <Badge
      variant="secondary"
      className="hover:border-primary/30 hover:bg-secondary/80 transition-all duration-200 text-sm"
    >
      <span className="text-primary/80 mr-1.5 transition-colors duration-200">
        {skill.icon}
      </span>
      {skill.name}
    </Badge>
  </motion.div>
);

export default SkillBadge;
