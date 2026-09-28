import { ledger } from "@/lib/catalog";
import { hashShort, relativeDay } from "@/lib/format";

export function LedgerChain({ limit }: { limit?: number }) {
  const rows = limit ? ledger.slice(-limit).reverse() : [...ledger].reverse();
  return (
    <ol className="flex flex-col">
      {rows.map((ev, i) => (
        <li key={ev.id} className="grid grid-cols-[12px_1fr] gap-3">
          <div className="flex flex-col items-center">
            <span className="mt-1.5 size-2.5 rounded-full bg-navy" />
            {i < rows.length - 1 ? <span className="w-px flex-1 bg-hairline" /> : null}
          </div>
          <div className="pb-4">
            <p className="font-mono text-xs text-brass-text">{ev.type}</p>
            <p className="mt-0.5 text-sm text-ink">
              {ev.actor} · {ev.object}
            </p>
            <p className="mt-1 font-mono text-[11px] text-muted">
              {hashShort(ev.hash)} · prev {hashShort(ev.prev)} · {relativeDay(ev.at)}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
