import { LOT_STATES, STATE_LABEL } from "@/lib/format";
import type { LotState } from "@/lib/types";
import { cn } from "@/lib/utils";

const visible: LotState[] = [
  "captured",
  "pending",
  "verified",
  "available",
  "sample_sent",
  "offer",
  "price_locked",
  "contracted",
  "delivered",
];

export function LotMachine({ current }: { current: LotState }) {
  const idx = LOT_STATES.indexOf(current);
  return (
    <ol className="flex flex-wrap gap-1.5">
      {visible.map((s) => {
        const i = LOT_STATES.indexOf(s);
        const on = i <= idx && idx >= 0;
        const here = s === current;
        return (
          <li
            key={s}
            className={cn(
              "rounded-full px-2.5 py-1 text-[11px]",
              here ? "bg-oxblood text-inverse" : on ? "bg-navy text-inverse" : "bg-recessed text-muted",
            )}
          >
            {STATE_LABEL[s]}
          </li>
        );
      })}
    </ol>
  );
}
