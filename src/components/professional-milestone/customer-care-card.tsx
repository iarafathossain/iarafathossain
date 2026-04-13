import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Headset } from "lucide-react";

export default function CustomerCareCard() {
  return (
    <Card className="group relative w-full rounded-xl border border-border bg-card/50 shadow-sm hover:shadow-primary/10 backdrop-blur-md hover:border-primary/30 transition-all duration-300">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <CardContent className="p-6">
        <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
          <div className="flex items-start gap-5 md:items-center">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 shadow-[0_0_16px_color-mix(in_oklch,var(--primary)_25%,transparent)]">
              <Headset size={22} strokeWidth={1.5} className="text-primary" />
            </span>

            <div className="flex flex-col gap-1.5">
              <h3 className="text-base font-semibold leading-snug text-foreground">
                Customer Care Executive
                <span className="font-normal text-muted-foreground">
                  {" "}
                  at Steadfast Courier
                </span>
              </h3>
              <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
                Developed high-level conflict resolution, patience, and user
                empathy by translating complex user issues into actionable
                insights.
              </p>
            </div>
          </div>

          <div className="shrink-0 pl-0 md:pl-6">
            <Badge
              variant="outline"
              className="whitespace-nowrap border-primary/50 bg-primary/5 text-xs tracking-wide text-primary"
            >
              User Empathy and Communication - 6 Months
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
