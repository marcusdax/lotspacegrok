import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { spaceById, threads } from "@/lib/catalog";
import { relativeDay } from "@/lib/format";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useLotspace } from "@/lib/store";
import type { Message } from "@/lib/types";

export const Route = createFileRoute("/messages")({ component: Messages });

function Messages() {
  const [active, setActive] = useState(threads[0]?.id);
  const [draft, setDraft] = useState("");
  const [extra, setExtra] = useState<Record<string, Message[]>>({});
  const persona = useLotspace((s) => s.personaId);
  const thread = threads.find((t) => t.id === active) ?? threads[0];
  const mine = extra[thread.id] ?? [];
  const all = [...thread.messages, ...mine];

  return (
    <div className="flex flex-col gap-6">
      <header>
        <p className="overline-label">Messages / Deals</p>
        <h1 className="mt-2 font-display text-4xl tracking-tight">A thread that can become a trade</h1>
      </header>
      <div className="grid overflow-hidden rounded-[12px] bg-surface shadow-[var(--shadow-plate)] lg:grid-cols-[16rem_1fr]">
        <ul className="border-b border-hairline lg:border-b-0 lg:border-r">
          {threads.map((t) => (
            <li key={t.id}>
              <button
                className={cn(
                  "flex w-full flex-col items-start px-4 py-3 text-left hover:bg-hover",
                  t.id === thread.id && "bg-recessed",
                )}
                onClick={() => setActive(t.id)}
              >
                <span className="text-sm font-medium">{t.title}</span>
                <span className="text-xs text-muted">{t.messages.at(-1)?.body.slice(0, 48)}</span>
              </button>
            </li>
          ))}
        </ul>
        <div className="flex min-h-96 flex-col">
          <div className="flex items-center justify-between gap-2 border-b border-hairline px-4 py-3">
            <div>
              <p className="font-medium">{thread.title}</p>
              <p className="text-xs text-muted">
                {thread.participantIds.map((id) => spaceById(id)?.name).join(" · ")}
              </p>
            </div>
            {thread.lotId ? (
              <Button asChild variant="secondary" size="sm">
                <Link to="/lots/$id" params={{ id: thread.lotId }}>
                  Open lot
                </Link>
              </Button>
            ) : null}
          </div>
          <ul className="flex flex-1 flex-col gap-3 overflow-y-auto p-4">
            {all.map((m) => {
              const from = spaceById(m.fromId);
              return (
                <li key={m.id} className="max-w-[36rem]">
                  <p className="text-[11px] text-muted">
                    {from?.name} · {relativeDay(m.at)} · {m.kind}
                  </p>
                  <p className="mt-1 rounded-[8px] bg-recessed px-3 py-2 text-sm leading-relaxed">{m.body}</p>
                </li>
              );
            })}
          </ul>
          <form
            className="flex gap-2 border-t border-hairline p-3"
            onSubmit={(e) => {
              e.preventDefault();
              if (!draft.trim()) return;
              const fromId =
                persona === "farmer"
                  ? "sp-mai"
                  : persona === "agent"
                    ? "sp-bao"
                    : persona === "roaster"
                      ? "sp-karmic"
                      : "sp-linh";
              const msg: Message = {
                id: `x-${Date.now()}`,
                fromId,
                body: draft.trim(),
                at: new Date().toISOString(),
                kind: "chat",
              };
              setExtra((ex) => ({
                ...ex,
                [thread.id]: [...(ex[thread.id] ?? []), msg],
              }));
              setDraft("");
            }}
          >
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              className="h-11 flex-1 rounded-[6px] bg-canvas px-3 text-sm shadow-[0_0_0_1px_var(--color-muted)]"
              placeholder="Write — prices belong in structured offers"
            />
            <Button type="submit">Send</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
