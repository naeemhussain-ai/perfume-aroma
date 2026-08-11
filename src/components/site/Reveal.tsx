import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";
import type { ElementType, ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
}) {
  const { ref, shown } = useReveal();
  return (
    <Tag
      ref={ref as never}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", shown && "reveal-in", className)}
    >
      {children}
    </Tag>
  );
}

export function Label({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "label-xs inline-flex items-center gap-3 text-muted-foreground",
        className,
      )}
    >
      <span className="h-px w-8 bg-current opacity-40" />
      {children}
    </span>
  );
}
