import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy } from "lucide-react";
import Image from "next/image";

export default function HultPrizeCard() {
  return (
    <Card className="w-full overflow-hidden rounded-xl border border-border bg-card/40 shadow-2xl shadow-primary/5 backdrop-blur-md">
      <CardContent className="p-0">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative h-64 min-h-64 overflow-hidden md:h-auto">
            <Image
              src="/hult-price.jpg"
              alt="Hult Prize presenting a sustainable business model to expert judges"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            <div className="absolute inset-0 bg-linear-to-tr from-primary/40 via-primary/5 to-transparent mix-blend-overlay" />
            <div className="absolute inset-0 bg-linear-to-t from-card/90 via-card/30 to-transparent md:hidden" />
            <div className="absolute inset-0 hidden bg-linear-to-r from-transparent via-transparent to-card/60 md:block" />
          </div>

          <div className="flex flex-col justify-center gap-5 px-8 py-10">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10">
                <Trophy size={18} className="text-primary" strokeWidth={1.75} />
              </span>
              <Badge
                variant="secondary"
                className="border-0 bg-primary/10 text-xs tracking-wide text-primary hover:bg-primary/15"
              >
                Entrepreneurship and Leadership
              </Badge>
            </div>

            <div>
              <h3 className="text-2xl font-bold leading-tight tracking-tight text-foreground md:text-3xl">
                Hult Prize
                <br />
                Runner-Up
              </h3>
              <p className="mt-1.5 text-sm font-medium tracking-wide text-primary">
                University Level Competition
              </p>
            </div>

            <div className="h-px w-12 rounded-full bg-primary/40" />

            <p className="text-sm leading-relaxed text-muted-foreground">
              Recognized for developing a sustainable business model and
              pitching to a panel of expert judges. Proved the ability to bridge
              the gap between technical solutions and business viability.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
