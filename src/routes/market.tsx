import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { LotCard } from "@/components/lot-card";
import { lots } from "@/lib/catalog";
import { explainMatch, rankedMarket } from "@/lib/matching";
import { cn } from "@/lib/utils";
import type { LotState } from "@/lib/types";

export const Route = createFileRoute("/market")({ component: Market });

const live: LotState[] = ["available", "sample_requested", "sample_sent", "offer", "negotiation"];

function Market() {
  const [process, setProcess] = useState<"all" | "Washed" | "Natural" | "Red honey" | "Anaerobic natural">("all");
  const [onlyLive, setOnlyLive] = useState(true);
  const [brave, setBrave] = useState(false);

  const rows = useMemo(() => {
    return rankedMarket().filter((l) => {
      if (onlyLive && !live.includes(l.state) && l.state !== "price_locked") return false;
      if (process !== "all" && l.process !== process) return false;
      if (brave && !l.braveFew) return false;
      return true;
    });
  }, [process, onlyLive, brave]);

  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="overline-label">Market</p>
          <h1 className="mt-2 font-display text-4xl tracking-tight">The offer sheet, live</h1>
          <p className="mt-2 max-w-xl text-sm text-ink-soft">
            Ranked by availability, fit, freshness, trust, and logistics — never by likes. Every farmgate
            figure is ledger-backed or labeled as commentary.
          </p>
        </div>
        <p className="font-mono text-sm text-muted">{rows.length} lots · {lots.length} in catalog</p>
      </header>

      <div className="flex flex-wrap gap-2">
        {(["all", "Washed", "Natural", "Red honey", "Anaerobic natural"] as const).map((p) => (
          <button
            key={p}
            onClick={() => setProcess(p)}
            className={cn(
              "h-10 rounded-full px-4 text-sm",
              process === p ? "bg-navy text-inverse" : "bg-recessed text-ink-soft hover:bg-hover",
            )}
          >
            {p === "all" ? "All processes" : p}
          </button>
        ))}
        <button
          onClick={() => setOnlyLive((v) => !v)}
          className={cn(
            "h-10 rounded-full px-4 text-sm",
            onlyLive ? "bg-oxblood text-inverse" : "bg-recessed text-ink-soft",
          )}
        >
          Tradable
        </button>
        <button
          onClick={() => setBrave((v) => !v)}
          className={cn(
            "h-10 rounded-full px-4 text-sm",
            brave ? "bg-brass-tint text-brass-text" : "bg-recessed text-ink-soft",
          )}
        >
          Brave Few
        </button>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {rows.map((lot) => (
          <LotCard key={lot.id} lot={lot} why={explainMatch(lot)} />
        ))}
      </div>
      {rows.length === 0 ? (
        <p className="rounded-[12px] bg-recessed px-4 py-8 text-center text-sm text-ink-soft">
          No lots match these constraints. Relax a filter — ranking never invents supply.
        </p>
      ) : null}
    </div>
  );
}
