import { ShieldCheck } from "lucide-react";
import type { TrustTier } from "@/lib/types";
import { TIER_LABEL } from "@/lib/format";
import { cn } from "@/lib/utils";

export function VerificationSeal({
  tier,
  compact,
}: {
  tier: TrustTier;
  compact?: boolean;
}) {
  const tone =
    tier === "audit" ? "text-sage-deep bg-sage-tint" : tier === "agent" ? "text-brass-text bg-brass-tint" : "text-ink-soft bg-recessed";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px] font-medium",
        tone,
      )}
    >
      <ShieldCheck className="size-3.5" strokeWidth={1.75} />
      {compact ? (tier === "audit" ? "Audit" : tier === "agent" ? "Agent" : "Self") : TIER_LABEL[tier]}
    </span>
  );
}
