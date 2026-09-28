import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, QrCode, ShieldCheck } from "lucide-react";
import { FollowButton } from "@/components/follow-button";
import { LotCard } from "@/components/lot-card";
import { Button } from "@/components/ui/button";
import { lots, marketPulse, spaceById, stories } from "@/lib/catalog";
import { money, relativeDay } from "@/lib/format";
import { explainMatch, rankedMarket } from "@/lib/matching";
import { usePersona } from "@/lib/store";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const persona = usePersona();
  const featured = rankedMarket().slice(0, 3);
  const pulseStory = stories[0];
  const farm = spaceById("sp-mai")!;

  return (
    <div className="flex flex-col gap-12">
      <section className="relative overflow-hidden rounded-[16px] bg-navy text-inverse shadow-[var(--shadow-navy)]">
        <img
          src="/media/highlands.jpg"
          alt="Mist over arabica highlands in the Central Highlands of Vietnam"
          className="absolute inset-0 size-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/30" />
        <div className="relative grid gap-8 px-6 py-10 md:grid-cols-[1.2fr_0.8fr] md:px-10 md:py-14">
          <div>
            <p className="overline-label text-brass">Folio 01 — Enter the Lot</p>
            <h1 className="mt-4 max-w-xl font-display text-[clamp(2rem,4vw,3.4rem)] leading-[1.1] tracking-[-0.02em]">
              Every farm a Space. Every lot a ledger. Every cup a connection.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-inverse/80">
              LotSpace is the social face of the Auctum Ledger — a living offer sheet where identity,
              provenance, and trade share one surface. You are viewing as {persona.name}.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/market">
                  Open the market <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="bg-inverse/10 text-inverse hover:bg-inverse/20">
                <Link to="/autopsy/$slug" params={{ slug: "mai-washed-0118" }}>
                  Read an Economic Autopsy
                </Link>
              </Button>
            </div>
          </div>
          <aside className="grid grid-cols-2 gap-3 self-end">
            {[
              { k: "Verified farms", v: String(marketPulse.verifiedFarms) },
              { k: "Live lots", v: String(marketPulse.liveLots) },
              { k: "Farmgate index", v: money(marketPulse.farmgateIndex) },
              { k: "Season GMV", v: `$${marketPulse.gmvSeason}M` },
            ].map((m) => (
              <div key={m.k} className="rounded-[8px] bg-inverse/10 px-4 py-3 backdrop-blur-sm">
                <p className="overline-label text-brass">{m.k}</p>
                <p className="mt-1 font-mono text-2xl">{m.v}</p>
              </div>
            ))}
          </aside>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
        <article className="plate overflow-hidden rounded-[16px]">
          <div className="grid md:grid-cols-2">
            <img src={farm.cover} alt="" className="h-56 w-full object-cover md:h-full" />
            <div className="flex flex-col gap-4 p-6">
              <p className="overline-label">Featured Space</p>
              <h2 className="font-display text-3xl leading-tight">{farm.name}</h2>
              <p className="text-sm leading-relaxed text-ink-soft">{farm.bio}</p>
              <dl className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <dt className="text-muted">Farmgate avg</dt>
                  <dd className="font-mono">{money(farm.farmgateAvg ?? 0)} / lb</dd>
                </div>
                <div>
                  <dt className="text-muted">Hectares</dt>
                  <dd className="font-mono">{farm.hectares}</dd>
                </div>
              </dl>
              <div className="mt-auto flex flex-wrap gap-2">
                <FollowButton spaceId={farm.id} />
                <Button asChild variant="secondary" size="sm">
                  <Link to="/space/$slug" params={{ slug: farm.slug }}>
                    Open Space
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </article>
        <article className="plate flex flex-col gap-4 rounded-[16px] p-6">
          <p className="overline-label">Market pulse</p>
          <h2 className="font-display text-2xl">What is tradable now</h2>
          <ul className="flex flex-col gap-3">
            {lots
              .filter((l) => l.state === "available")
              .slice(0, 3)
              .map((l) => (
                <li key={l.id}>
                  <Link
                    to="/lots/$id"
                    params={{ id: l.id }}
                    className="flex items-center justify-between gap-3 rounded-[8px] bg-recessed px-3 py-3 hover:bg-hover"
                  >
                    <span>
                      <span className="block text-sm font-medium">{l.title}</span>
                      <span className="font-mono text-xs text-muted">{l.code}</span>
                    </span>
                    <span className="font-mono text-sm">{money(l.farmgate)}</span>
                  </Link>
                </li>
              ))}
          </ul>
          <Button asChild variant="link">
            <Link to="/market">Match me to lots</Link>
          </Button>
        </article>
      </section>

      <section>
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="overline-label">Living offer sheet</p>
            <h2 className="mt-2 font-display text-3xl">Ranked by fit, not engagement</h2>
          </div>
          <Button asChild variant="secondary">
            <Link to="/market">Full market</Link>
          </Button>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((lot) => (
            <LotCard key={lot.id} lot={lot} why={explainMatch(lot)} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <article className="plate rounded-[16px] p-6 lg:col-span-2">
          <p className="overline-label">Latest story</p>
          <h2 className="mt-2 font-display text-2xl">{pulseStory.title}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">{pulseStory.body}</p>
          <p className="mt-4 text-xs text-muted">{relativeDay(pulseStory.publishedAt)}</p>
          <Button asChild variant="link" className="mt-2">
            <Link to="/stories">Stories feed</Link>
          </Button>
        </article>
        <article className="relative overflow-hidden rounded-[16px] bg-navy p-6 text-inverse">
          <QrCode className="size-8 text-brass" strokeWidth={1.5} />
          <h2 className="mt-4 font-display text-2xl">Scan becomes a relationship</h2>
          <p className="mt-3 text-sm leading-relaxed text-inverse/75">
            Every bag can resolve to face, place, coffee, money, and proof. Tip and follow sit on the same page as the receipt.
          </p>
          <Button asChild variant="brass" className="mt-6">
            <Link to="/autopsy/$slug" params={{ slug: "mai-washed-0118" }}>
              Open autopsy
            </Link>
          </Button>
        </article>
      </section>

      <section className="plate flex flex-col gap-4 rounded-[16px] p-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-3">
          <ShieldCheck className="mt-0.5 size-5 text-sage" />
          <div>
            <p className="font-medium">One Ledger. Four doors.</p>
            <p className="mt-1 max-w-xl text-sm text-ink-soft">
              SMS, offline PWA, this social surface, and Field Agents all write to the same verified record.
              Social objects cannot contradict farmgate.
            </p>
          </div>
        </div>
        <p className="font-mono text-xs text-muted">IVR/SMS MAU {marketPulse.smsMau.toLocaleString()}</p>
      </section>
    </div>
  );
}
