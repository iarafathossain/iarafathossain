import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export const Tag = ({ text }: { text: string }) => (
  <motion.div
    whileHover={{ scale: 1.06 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 500, damping: 20 }}
  >
    <Badge
      variant="secondary"
      className="hover:border-primary/30 hover:bg-secondary/80 transition-all duration-200 text-sm"
    >
      {text}
    </Badge>
  </motion.div>
);
