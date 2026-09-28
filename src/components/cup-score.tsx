import { cupTier, score } from "@/lib/format";
import { cn } from "@/lib/utils";

export function CupScore({ value, size = "md" }: { value: number; size?: "sm" | "md" | "lg" }) {
  if (!value) {
    return <span className="font-mono text-sm text-muted">—</span>;
  }
  const tier = cupTier(value);
  const tone =
    tier === "outstanding"
      ? "bg-brass-tint text-ink"
      : tier === "excellent"
        ? "bg-oxblood text-inverse"
        : tier === "specialty"
          ? "bg-sage text-inverse"
          : "bg-recessed text-ink-soft";
  return (
    <span
      className={cn(
        "inline-flex items-baseline gap-1 rounded-full font-mono font-medium",
        size === "lg" ? "px-3 py-1.5 text-lg" : size === "sm" ? "px-2 py-0.5 text-xs" : "px-2.5 py-1 text-sm",
        tone,
      )}
    >
      {score(value)}
    </span>
  );
}
