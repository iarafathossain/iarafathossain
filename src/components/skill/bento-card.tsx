import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { IBentoCategory } from "./interface";
import SkillBadge from "./skill-badge";

const BentoCard = ({ category }: { category: IBentoCategory }) => (
  <motion.div
    whileHover={{ y: -4 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="bento-card h-full"
  >
    <Card
      className="h-full bg-card/50 border-border backdrop-blur-md
          hover:border-primary/30 transition-all duration-300 overflow-hidden
          relative group shadow-sm hover:shadow-primary/10"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <CardHeader className="pb-3 pt-5 px-5">
        <CardTitle className="flex items-center gap-2.5 text-lg font-semibold text-foreground font-sans">
          <span className="p-1.5 rounded-md text-primary bg-primary/10">
            {category.icon}
          </span>
          {category.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="px-5 pb-5">
        <div className="flex flex-wrap gap-3">
          {category.skills.map((skill) => (
            <SkillBadge key={skill.name} skill={skill} />
          ))}
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

export default BentoCard;
