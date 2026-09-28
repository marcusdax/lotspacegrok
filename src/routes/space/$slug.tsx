import { createFileRoute, Link } from "@tanstack/react-router";
import { FollowButton } from "@/components/follow-button";
import { LedgerChain } from "@/components/ledger-chain";
import { LotCard } from "@/components/lot-card";
import { VerificationSeal } from "@/components/verification-seal";
import { Button } from "@/components/ui/button";
import { lotsForSpace, spaceBySlug, storiesForSpace } from "@/lib/catalog";
import { money, ROLE_LABEL } from "@/lib/format";
import { useLotspace } from "@/lib/store";

export const Route = createFileRoute("/space/$slug")({ component: SpacePage });

function SpacePage() {
  const { slug } = Route.useParams();
  const space = spaceBySlug(slug);
  const tips = useLotspace((s) => s.tips);
  if (!space) {
    return <p className="text-ink-soft">This Space is not on the ledger.</p>;
  }
  const lots = lotsForSpace(space.id);
  const stories = storiesForSpace(space.id);
  const myTips = tips.filter((t) => t.spaceId === space.id);
  const tipTotal = myTips.reduce((a, t) => a + t.amount, 0);

  return (
    <div className="flex flex-col gap-8">
      <section className="overflow-hidden rounded-[16px] bg-navy text-inverse">
        <div className="relative h-56 md:h-72">
          <img src={space.cover} alt="" className="size-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-3 p-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="overline-label text-brass">
                {ROLE_LABEL[space.role]} · @{space.handle}
              </p>
              <h1 className="mt-1 font-display text-4xl tracking-tight">{space.name}</h1>
              <p className="mt-1 text-sm text-inverse/80">
                {space.district}, {space.origin}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <VerificationSeal tier={space.verification} />
              <FollowButton spaceId={space.id} />
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-wrap gap-2">
        {space.badges.map((b) => (
          <span key={b} className="rounded-full bg-recessed px-3 py-1 text-xs text-ink-soft">
            {b}
          </span>
        ))}
      </div>

      <section className="grid gap-4 sm:grid-cols-3">
        <Stat label="Followers" value={space.followers.toLocaleString()} />
        {space.farmgateAvg ? <Stat label="Farmgate avg" value={`${money(space.farmgateAvg)} / lb`} /> : null}
        {space.hectares ? <Stat label="Hectares" value={String(space.hectares)} /> : null}
        {space.members ? <Stat label="Members" value={String(space.members)} /> : null}
        {space.agentName ? <Stat label="Field Agent" value={space.agentName} /> : null}
        {tipTotal ? <Stat label="Tips received (you)" value={money(tipTotal)} /> : null}
      </section>

      <p className="max-w-3xl text-base leading-relaxed text-ink-soft">{space.bio}</p>

      <section>
        <h2 className="font-display text-2xl">Lots</h2>
        <div className="mt-4 grid gap-5 md:grid-cols-2">
          {lots.map((l) => (
            <LotCard key={l.id} lot={l} />
          ))}
          {lots.length === 0 ? <p className="text-sm text-muted">No lots published.</p> : null}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl">Stories</h2>
          <ul className="mt-4 flex flex-col gap-3">
            {stories.map((s) => (
              <li key={s.id} className="plate rounded-[12px] p-4">
                <p className="overline-label">{s.kind}</p>
                <p className="mt-1 font-medium">{s.title}</p>
                <p className="mt-1 text-sm text-ink-soft">{s.body}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-2xl">Ledger spine</h2>
          <div className="mt-4 plate rounded-[12px] p-4">
            <LedgerChain limit={4} />
          </div>
          <Button asChild variant="link" className="mt-2">
            <Link to="/trust">Full hash chain</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[12px] bg-recessed px-4 py-3">
      <p className="overline-label">{label}</p>
      <p className="mt-1 font-mono text-lg">{value}</p>
    </div>
  );
}
