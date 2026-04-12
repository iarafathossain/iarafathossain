import { Badge } from "../ui/badge";

type TechPillProps = {
  label: string;
};

export default function TechPill({ label }: TechPillProps) {
  return (
    <Badge
      variant="secondary"
      className="hover:border-primary/30 hover:bg-secondary/80 transition-all duration-200 text-sm"
    >
      {label}
    </Badge>
  );
}
