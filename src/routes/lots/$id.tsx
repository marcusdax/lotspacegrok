import { createFileRoute, Link } from "@tanstack/react-router";
import { Bookmark, BookmarkCheck } from "lucide-react";
import { toast } from "sonner";
import { CupScore } from "@/components/cup-score";
import { CuppingRadar } from "@/components/cupping-radar";
import { FollowButton } from "@/components/follow-button";
import { LotMachine } from "@/components/lot-machine";
import { Button } from "@/components/ui/button";
import { Waterfall } from "@/components/waterfall";
import { lotById, spaceById } from "@/lib/catalog";
import { kg, money, score, STATE_LABEL } from "@/lib/format";
import { explainMatch, farmgateIsLedgered } from "@/lib/matching";
import { useLotspace } from "@/lib/store";

export const Route = createFileRoute("/lots/$id")({ component: LotPage });

function LotPage() {
  const { id } = Route.useParams();
  const lot = lotById(id);
  const saved = useLotspace((s) => s.saved.includes(id));
  const toggleSave = useLotspace((s) => s.toggleSave);
  const requestSample = useLotspace((s) => s.requestSample);
  const samples = useLotspace((s) => s.samples);
  const placeOffer = useLotspace((s) => s.placeOffer);
  const offers = useLotspace((s) => s.offers.filter((o) => o.lotId === id));

  if (!lot) return <p>Lot not on the ledger.</p>;
  const space = spaceById(lot.spaceId);
  const ledgered = farmgateIsLedgered(lot);
  const sampled = samples.some((s) => s.lotId === lot.id);
  const why = explainMatch(lot);

  return (
    <div className="flex flex-col gap-8">
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="overflow-hidden rounded-[16px]">
          <img src={lot.image} alt="" className="aspect-[4/3] w-full object-cover" />
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-mono text-xs text-brass-text">{lot.code}</p>
          <h1 className="font-display text-4xl tracking-tight">{lot.title}</h1>
          {space ? (
            <Link to="/space/$slug" params={{ slug: space.slug }} className="text-sm text-oxblood underline-offset-2 hover:underline">
              {space.name} · {lot.district}
            </Link>
          ) : null}
          <div className="flex flex-wrap items-center gap-2">
            <CupScore value={lot.score} size="lg" />
            {lot.braveFew ? (
              <span className="rounded-full bg-brass-tint px-3 py-1 text-xs text-brass-text">Brave Few</span>
            ) : null}
            {lot.eudr ? (
              <span className="rounded-full bg-sage-tint px-3 py-1 text-xs text-sage-deep">EUDR geolocated</span>
            ) : (
              <span className="rounded-full bg-danger-tint px-3 py-1 text-xs text-danger">EUDR pending</span>
            )}
            <span className="rounded-full bg-recessed px-3 py-1 text-xs">{STATE_LABEL[lot.state]}</span>
          </div>
          <p className="text-sm leading-relaxed text-ink-soft">{lot.story}</p>
          {why ? <p className="border-l-2 border-oxblood pl-3 text-sm text-ink-soft">{why}</p> : null}

          <dl className="grid grid-cols-2 gap-3">
            <Fact label="Farmgate" value={`${money(lot.farmgate)} / lb`} hint={ledgered ? "Ledger-backed" : "Not yet authoritative"} />
            <Fact label="FOB" value={lot.fob ? `${money(lot.fob)} / lb` : "—"} />
            <Fact label="Available" value={lot.kgAvailable ? kg(lot.kgAvailable) : "Sold through"} />
            <Fact label="Bags" value={String(lot.bags)} />
            <Fact label="Varietal" value={lot.varietal} />
            <Fact label="Process" value={lot.process} />
            <Fact label="Altitude" value={lot.altitude} />
            <Fact label="Harvest" value={lot.harvest} />
          </dl>

          <div className="flex flex-wrap gap-2">
            {space ? <FollowButton spaceId={space.id} /> : null}
            <Button
              variant="secondary"
              onClick={() => {
                toggleSave(lot.id);
                toast(saved ? "Removed from saved lots" : "Saved to your taste graph");
              }}
            >
              {saved ? <BookmarkCheck className="size-4" /> : <Bookmark className="size-4" />}
              {saved ? "Saved" : "Save"}
            </Button>
            <Button
              variant="navy"
              disabled={sampled || lot.state === "pending"}
              onClick={() => {
                requestSample(lot.id);
                toast("Sample request written to Samples context");
              }}
            >
              {sampled ? "Sample requested" : "Request sample"}
            </Button>
            <Button asChild variant="brass">
              <Link to="/autopsy/$slug" params={{ slug: lot.autopsySlug }}>
                Economic Autopsy
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <LotMachine current={lot.state} />

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="plate rounded-[12px] p-5">
          <h2 className="font-display text-2xl">Cupping</h2>
          <p className="mt-1 text-xs text-muted">
            Unrounded SCA-style telemetry{lot.qGrader ? ` · ${lot.qGrader}` : ""}
            {lot.score ? ` · composite ${score(lot.score)}` : ""}
          </p>
          <CuppingRadar sensory={lot.sensory} />
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {lot.sensory.notes.map((n) => (
              <li key={n} className="rounded-full bg-recessed px-2.5 py-1 text-xs">
                {n}
              </li>
            ))}
          </ul>
        </article>
        <article className="plate rounded-[12px] p-5">
          <h2 className="font-display text-2xl">Price waterfall</h2>
          <p className="mb-4 mt-1 text-xs text-muted">
            Displayed numbers reference receipts. Chat cannot become the price.
          </p>
          <Waterfall steps={lot.waterfall} />
        </article>
      </section>

      <section className="plate rounded-[12px] p-5">
        <h2 className="font-display text-2xl">Process</h2>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{lot.processNotes}</p>
        <p className="mt-3 font-mono text-xs text-muted">
          {lot.geo.lat.toFixed(3)}° N, {lot.geo.lng.toFixed(3)}° E
        </p>
      </section>

      <section className="plate rounded-[12px] p-5">
        <h2 className="font-display text-2xl">Place an offer</h2>
        <p className="mt-1 text-sm text-ink-soft">
          Structured negotiation only. Free-form text is never the authoritative price.
        </p>
        <form
          className="mt-4 flex flex-wrap gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            const price = Number(fd.get("price"));
            const bags = Number(fd.get("bags"));
            if (!price || !bags) return;
            placeOffer(lot.id, price, bags);
            toast(`Offer ${money(price)} × ${bags} bags recorded`);
            e.currentTarget.reset();
          }}
        >
          <label className="text-sm">
            $/lb
            <input
              name="price"
              type="number"
              step="0.01"
              min={0}
              defaultValue={lot.farmgate}
              className="mt-1 block h-11 w-28 rounded-[6px] bg-surface px-3 font-mono shadow-[0_0_0_1px_var(--color-muted)]"
            />
          </label>
          <label className="text-sm">
            Bags
            <input
              name="bags"
              type="number"
              min={1}
              defaultValue={Math.min(5, lot.bags || 1)}
              className="mt-1 block h-11 w-24 rounded-[6px] bg-surface px-3 font-mono shadow-[0_0_0_1px_var(--color-muted)]"
            />
          </label>
          <Button type="submit" className="self-end" disabled={lot.kgAvailable === 0}>
            Record offer
          </Button>
        </form>
        {offers.length ? (
          <ul className="mt-4 space-y-2 text-sm">
            {offers.map((o) => (
              <li key={o.id} className="font-mono text-ink-soft">
                {money(o.price)} · {o.bags} bags · {o.status}
              </li>
            ))}
          </ul>
        ) : null}
      </section>
    </div>
  );
}

function Fact({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="rounded-[8px] bg-recessed px-3 py-2">
      <p className="overline-label">{label}</p>
      <p className="mt-1 font-mono text-sm">{value}</p>
      {hint ? <p className="text-[11px] text-muted">{hint}</p> : null}
    </div>
  );
}
