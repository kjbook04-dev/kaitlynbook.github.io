import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
  className?: string;
}

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border/70 bg-background px-3 py-1 text-xs font-semibold text-muted-foreground",
        className
      )}
    >
      {children}
    </span>
  );
}
