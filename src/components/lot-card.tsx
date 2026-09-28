import { Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { spaceById } from "@/lib/catalog";
import { kg, money, STATE_LABEL } from "@/lib/format";
import type { Lot } from "@/lib/types";
import { cn } from "@/lib/utils";
import { farmgateIsLedgered } from "@/lib/matching";
import { CupScore } from "./cup-score";
import { VerificationSeal } from "./verification-seal";

export function LotCard({
  lot,
  why,
  dense,
}: {
  lot: Lot;
  why?: string | null;
  dense?: boolean;
}) {
  const space = spaceById(lot.spaceId);
  const ledgered = farmgateIsLedgered(lot);
  return (
    <Link
      to="/lots/$id"
      params={{ id: lot.id }}
      className={cn(
        "group plate plate-hover block overflow-hidden rounded-[12px] text-left",
        dense ? "" : "",
      )}
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-recessed">
        <img
          src={lot.image}
          alt=""
          className="size-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          <span className="rounded-full bg-navy/90 px-2 py-1 font-mono text-[11px] text-inverse">
            {lot.code}
          </span>
          {lot.braveFew ? (
            <span className="rounded-full bg-brass-tint/95 px-2 py-1 text-[11px] font-medium text-brass-text">
              Brave Few
            </span>
          ) : null}
        </div>
        <div className="absolute bottom-3 right-3">
          <CupScore value={lot.score} size="sm" />
        </div>
      </div>
      <div className="flex flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-xl leading-snug text-ink">{lot.title}</h3>
            <p className="mt-1 flex items-center gap-1 text-sm text-ink-soft">
              <MapPin className="size-3.5" strokeWidth={1.75} />
              {lot.district} · {space?.name}
            </p>
          </div>
          {space ? <VerificationSeal tier={space.verification} compact /> : null}
        </div>
        <dl className="grid grid-cols-3 gap-2 text-sm">
          <div className="rounded-[6px] bg-recessed px-2.5 py-2">
            <dt className="overline-label">Farmgate</dt>
            <dd className="mt-1 font-mono text-ink">
              {money(lot.farmgate)}
              {!ledgered ? <span className="block text-[10px] text-muted">indicative</span> : null}
            </dd>
          </div>
          <div className="rounded-[6px] bg-recessed px-2.5 py-2">
            <dt className="overline-label">Available</dt>
            <dd className="mt-1 font-mono text-ink">{lot.kgAvailable ? kg(lot.kgAvailable) : "—"}</dd>
          </div>
          <div className="rounded-[6px] bg-recessed px-2.5 py-2">
            <dt className="overline-label">State</dt>
            <dd className="mt-1 text-ink">{STATE_LABEL[lot.state]}</dd>
          </div>
        </dl>
        <p className="text-sm text-ink-soft">
          {lot.varietal} · {lot.process} · {lot.harvest}
        </p>
        {why ? <p className="border-l-2 border-oxblood pl-3 text-sm text-ink-soft">{why}</p> : null}
      </div>
    </Link>
  );
}
