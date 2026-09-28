import { createFileRoute, Link } from "@tanstack/react-router";
import { FollowButton } from "@/components/follow-button";
import { SpaceCard } from "@/components/space-card";
import { lots, spaceById, spaces, stories } from "@/lib/catalog";
import { relativeDay } from "@/lib/format";
import { useLotspace } from "@/lib/store";

export const Route = createFileRoute("/following")({ component: Following });

function Following() {
  const followed = useLotspace((s) => s.followed);
  const mine = spaces.filter((s) => followed.includes(s.id));
  const feed = [...stories]
    .filter((s) => followed.includes(s.spaceId))
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
  const discover = spaces.filter((s) => !followed.includes(s.id)).slice(0, 4);

  return (
    <div className="flex flex-col gap-10">
      <header>
        <p className="overline-label">Following</p>
        <h1 className="mt-2 font-display text-4xl tracking-tight">Your relationship graph</h1>
        <p className="mt-2 max-w-xl text-sm text-ink-soft">
          Chronological on purpose. A follow is a relationship signal, not an algorithm subscription.
        </p>
      </header>

      {mine.length === 0 ? (
        <p className="rounded-[12px] bg-recessed px-4 py-8 text-center text-sm">
          Follow one farm. Discovery is cheaper than scrolling.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {mine.map((s) => (
            <SpaceCard key={s.id} id={s.id} followSlot={<FollowButton spaceId={s.id} />} />
          ))}
        </div>
      )}

      <section className="flex flex-col gap-4">
        <h2 className="font-display text-2xl">From people you chose</h2>
        <ul className="flex flex-col divide-y divide-hairline rounded-[12px] bg-surface shadow-[var(--shadow-plate)]">
          {feed.map((s) => {
            const space = spaceById(s.spaceId);
            const lot = s.lotId ? lots.find((l) => l.id === s.lotId) : undefined;
            return (
              <li key={s.id} className="px-5 py-4">
                <p className="text-xs text-muted">
                  {space?.name} · {relativeDay(s.publishedAt)}
                </p>
                <p className="mt-1 font-medium">{s.title}</p>
                <p className="mt-1 text-sm text-ink-soft">{s.body}</p>
                {lot ? (
                  <Link
                    to="/lots/$id"
                    params={{ id: lot.id }}
                    className="mt-2 inline-block font-mono text-xs text-oxblood"
                  >
                    {lot.code}
                  </Link>
                ) : null}
              </li>
            );
          })}
        </ul>
      </section>

      <section>
        <h2 className="font-display text-2xl">Discover one more farm</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {discover.map((s) => (
            <SpaceCard key={s.id} id={s.id} followSlot={<FollowButton spaceId={s.id} />} />
          ))}
        </div>
      </section>
    </div>
  );
}
