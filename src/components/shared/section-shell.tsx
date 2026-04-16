import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";
import { forwardRef } from "react";

type SectionShellProps = HTMLAttributes<HTMLElement> & {
  background?: ReactNode;
  containerClassName?: string;
};

const SectionShell = forwardRef<HTMLElement, SectionShellProps>(
  ({ background, className, containerClassName, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative w-full overflow-hidden bg-muted px-4 py-24 sm:px-6 lg:px-8",
          className,
        )}
        {...props}
      >
        {background}

        <div
          className={cn(
            "relative z-10 mx-auto w-full max-w-6xl px-4",
            containerClassName,
          )}
        >
          {children}
        </div>
      </section>
    );
  },
);

SectionShell.displayName = "SectionShell";

export default SectionShell;
