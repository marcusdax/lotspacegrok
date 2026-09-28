import { money } from "@/lib/format";
import type { WaterfallStep } from "@/lib/types";
import { cn } from "@/lib/utils";

export function Waterfall({ steps }: { steps: WaterfallStep[] }) {
  const max = Math.max(...steps.map((s) => s.amount), 1);
  return (
    <ol className="flex flex-col gap-3">
      {steps.map((step, i) => {
        const last = i === steps.length - 1;
        return (
          <li key={step.label} className="grid grid-cols-[1fr_auto] items-end gap-3">
            <div>
              <div className="flex items-baseline justify-between gap-2">
                <span className={cn("text-sm", last ? "font-medium text-ink" : "text-ink-soft")}>
                  {step.label}
                </span>
                <span className="font-mono text-sm text-ink">{money(step.amount)}</span>
              </div>
              <p className="mt-0.5 text-xs text-muted">{step.party}{step.note ? ` · ${step.note}` : ""}</p>
              <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-recessed">
                <div
                  className={cn("h-full rounded-full", last ? "bg-oxblood" : "bg-navy/70")}
                  style={{ width: `${Math.max(8, (step.amount / max) * 100)}%` }}
                />
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
