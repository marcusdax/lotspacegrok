import { createFileRoute, Link } from "@tanstack/react-router";
import { spaceById, stories } from "@/lib/catalog";
import { relativeDay } from "@/lib/format";
import { FollowButton } from "@/components/follow-button";

export const Route = createFileRoute("/stories")({ component: Stories });

export function Stories() {
  const ordered = [...stories].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
  return (
    <div className="flex flex-col gap-8">
      <header>
        <p className="overline-label">Stories</p>
        <h1 className="mt-2 font-display text-4xl tracking-tight">Origin, process, proof</h1>
        <p className="mt-2 max-w-xl text-sm text-ink-soft">
          Media keeps its identity. A harvest clip is still a farm, a lot, and a timestamp — not a detached reel.
        </p>
      </header>
      <div className="grid gap-6 lg:grid-cols-2">
        {ordered.map((s) => {
          const space = spaceById(s.spaceId);
          return (
            <article key={s.id} className="plate overflow-hidden rounded-[12px]">
              <img src={s.image} alt="" className="aspect-[16/9] w-full object-cover" />
              <div className="flex flex-col gap-3 p-5">
                <div className="flex items-center justify-between gap-2">
                  <p className="overline-label">{s.kind}</p>
                  <p className="text-xs text-muted">{relativeDay(s.publishedAt)}</p>
                </div>
                <h2 className="font-display text-2xl leading-snug">{s.title}</h2>
                <p className="text-sm leading-relaxed text-ink-soft">{s.body}</p>
                {space ? (
                  <div className="mt-1 flex items-center justify-between gap-2">
                    <Link to="/space/$slug" params={{ slug: space.slug }} className="text-sm text-oxblood underline-offset-2 hover:underline">
                      {space.name}
                    </Link>
                    <FollowButton spaceId={space.id} />
                  </div>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
