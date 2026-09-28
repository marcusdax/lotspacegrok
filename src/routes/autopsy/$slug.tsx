import { createFileRoute, Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { FollowButton } from "@/components/follow-button";
import { VerificationSeal } from "@/components/verification-seal";
import { Button } from "@/components/ui/button";
import { Waterfall } from "@/components/waterfall";
import { autopsyBySlug, spaceById } from "@/lib/catalog";
import { money, score } from "@/lib/format";
import { farmgateIsLedgered } from "@/lib/matching";
import { useLotspace } from "@/lib/store";

export const Route = createFileRoute("/autopsy/$slug")({ component: Autopsy });

function Autopsy() {
  const { slug } = Route.useParams();
  const lot = autopsyBySlug(slug);
  const addTip = useLotspace((s) => s.addTip);
  if (!lot) return <p>No autopsy for this QR.</p>;
  const space = spaceById(lot.spaceId);
  const ledgered = farmgateIsLedgered(lot);

  const beats = [
    { n: "01", t: "Face", d: space?.name ?? "Producer" },
    { n: "02", t: "Place", d: `${lot.district} · ${lot.origin} · ${lot.harvest}` },
    { n: "03", t: "Coffee", d: `${lot.varietal} · ${lot.process}${lot.score ? ` · ${score(lot.score)}` : ""}` },
    { n: "04", t: "Money", d: ledgered ? `${money(lot.farmgate)} farmgate, receipt-backed` : "Indicative only" },
    { n: "05", t: "Proof", d: lot.eudr ? "EUDR geolocation on file" : "Compliance still open" },
  ];

  return (
    <div className="mx-auto flex max-w-lg flex-col gap-6">
      <p className="overline-label">Economic Autopsy · QR destination</p>
      <div className="overflow-hidden rounded-[16px]">
        <img src={lot.image} alt="" className="aspect-[16/10] w-full object-cover" />
      </div>
      <div>
        <h1 className="font-display text-3xl leading-tight">{lot.title}</h1>
        {space ? (
          <p className="mt-2 flex flex-wrap items-center gap-2 text-sm">
            {space.name}
            <VerificationSeal tier={space.verification} compact />
          </p>
        ) : null}
      </div>

      <ol className="flex flex-col gap-3">
        {beats.map((b) => (
          <li key={b.n} className="grid grid-cols-[3rem_1fr] gap-3 rounded-[12px] bg-surface p-4 shadow-[var(--shadow-plate)]">
            <span className="font-mono text-xs text-brass-text">{b.n}</span>
            <div>
              <p className="text-sm font-medium">{b.t}</p>
              <p className="text-sm text-ink-soft">{b.d}</p>
            </div>
          </li>
        ))}
      </ol>

      <section className="plate rounded-[12px] p-5">
        <h2 className="font-display text-xl">The money</h2>
        <p className="mb-4 mt-1 text-xs text-muted">A farmgate number without a receipt is commentary.</p>
        <Waterfall steps={lot.waterfall} />
      </section>

      <section className="plate rounded-[12px] p-5">
        <h2 className="font-display text-xl">Reproducibility</h2>
        <dl className="mt-3 space-y-2 text-sm">
          <div className="flex justify-between gap-4">
            <dt className="text-ink-soft">Who grew it?</dt>
            <dd>{space?.name}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-ink-soft">How was it processed?</dt>
            <dd className="text-right">{lot.processNotes}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-ink-soft">Where, exactly?</dt>
            <dd className="font-mono">
              {lot.geo.lat.toFixed(3)}, {lot.geo.lng.toFixed(3)}
            </dd>
          </div>
        </dl>
      </section>

      <div className="flex flex-col gap-2">
        {space ? <FollowButton spaceId={space.id} /> : null}
        <div className="grid grid-cols-4 gap-2">
          {[3, 5, 8, 12].map((n) => (
            <Button
              key={n}
              variant="navy"
              onClick={() => {
                if (!space) return;
                addTip(space.id, n, lot.id);
                toast(`Tip ${money(n)} settled · fee ${money(n * 0.03)}`);
              }}
            >
              Tip {money(n, 0)}
            </Button>
          ))}
        </div>
        <p className="text-center text-xs text-muted">3% rail fee shown at settlement. Idempotent. No ads.</p>
        <Button asChild variant="secondary">
          <Link to="/lots/$id" params={{ id: lot.id }}>
            Full lot record
          </Link>
        </Button>
      </div>
    </div>
  );
}
