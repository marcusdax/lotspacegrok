import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { CupScore } from "@/components/cup-score";
import { Button } from "@/components/ui/button";
import { competition, lotById } from "@/lib/catalog";
import { score } from "@/lib/format";
import { useLotspace } from "@/lib/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/cupping")({ component: Cupping });

const axes = ["fragrance", "flavor", "aftertaste", "acidity", "body", "balance"] as const;

function Cupping() {
  const votes = useLotspace((s) => s.votes);
  const vote = useLotspace((s) => s.vote);
  const revealed = useLotspace((s) => s.revealedComp);
  const setRevealed = useLotspace((s) => s.setRevealed);
  const [active, setActive] = useState(competition[0].id);
  const entry = competition.find((c) => c.id === active)!;
  const lot = lotById(entry.lotId)!;

  const tableScore = useMemo(() => {
    const vals = axes.map((ax) => votes[`${entry.id}:${ax}`] ?? 7.5);
    return vals.reduce((a, b) => a + b, 0) / vals.length;
  }, [votes, entry.id]);

  return (
    <div className="flex flex-col gap-8">
      <header>
        <p className="overline-label">Reputation · Cupping</p>
        <h1 className="mt-2 font-display text-4xl tracking-tight">Evidence, not vanity points</h1>
        <p className="mt-2 max-w-xl text-sm text-ink-soft">
          Scores stay unrounded. Competitions are seasonal and tied to discovery — farmers do not “level up” dignity.
        </p>
      </header>

      <section className="plate rounded-[12px] p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-display text-2xl">Blind vessels · Harvest season 2026</h2>
          <Button variant={revealed ? "secondary" : "navy"} onClick={() => setRevealed(!revealed)}>
            {revealed ? "Hide identities" : "Reveal after judging"}
          </Button>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {competition.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={cn(
                "h-10 rounded-full px-4 text-sm",
                c.id === active ? "bg-navy text-inverse" : "bg-recessed",
              )}
            >
              {revealed ? lotById(c.lotId)?.code : c.anonymousCode}
            </button>
          ))}
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div>
            <p className="text-sm text-ink-soft">
              {revealed ? (
                <>
                  {lot.title} ·{" "}
                  <Link to="/lots/$id" params={{ id: lot.id }} className="text-oxblood underline-offset-2 hover:underline">
                    {lot.code}
                  </Link>
                </>
              ) : (
                "Identity withheld until the table agrees."
              )}
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {axes.map((ax) => (
                <label key={ax} className="text-sm">
                  <span className="capitalize">{ax}</span>
                  <input
                    type="range"
                    min={6}
                    max={9}
                    step={0.08}
                    value={votes[`${entry.id}:${ax}`] ?? 7.5}
                    className="mt-2 w-full accent-oxblood"
                    onChange={(e) => vote(`${entry.id}:${ax}`, Number(e.target.value))}
                  />
                  <span className="font-mono text-xs text-muted">
                    {score(votes[`${entry.id}:${ax}`] ?? 7.5)}
                  </span>
                </label>
              ))}
            </div>
          </div>
          <div className="rounded-[8px] bg-recessed p-4">
            <p className="overline-label">Table composite</p>
            <p className="mt-2 font-display text-4xl">{score(tableScore)}</p>
            <p className="mt-2 text-xs text-muted">
              Local table math only. Canonical cupping lives on the lot record
              {revealed ? ` (${score(lot.score)})` : ""}.
            </p>
            {revealed ? (
              <div className="mt-4">
                <CupScore value={lot.score} />
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
}
