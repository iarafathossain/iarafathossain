import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Headset } from "lucide-react";

export default function CustomerCareCard() {
  return (
    <Card className="w-full rounded-xl border border-border bg-card/40 shadow-xl shadow-primary/5 backdrop-blur-md">
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
