import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type Tone = "ink" | "oxblood" | "brass" | "sage" | "muted" | "danger";

const tones: Record<Tone, string> = {
  ink: "bg-navy text-inverse",
  oxblood: "bg-oxblood text-inverse",
  brass: "bg-brass-tint text-brass-text",
  sage: "bg-sage-tint text-sage-deep",
  muted: "bg-recessed text-ink-soft",
  danger: "bg-danger-tint text-danger",
};

export function Badge({
  className,
  tone = "muted",
  ...props
}: HTMLAttributes<HTMLSpanElement> & { tone?: Tone }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-medium tracking-wide",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}
