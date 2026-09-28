import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { agentTasks, spaces } from "@/lib/catalog";
import { money } from "@/lib/format";
import { useLotspace } from "@/lib/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/agent")({ component: Agent });

function Agent() {
  const offline = useLotspace((s) => s.offline);
  const sync = useLotspace((s) => s.syncOffline);
  const queue = useLotspace((s) => s.queueOffline);
  const pending = offline.filter((o) => !o.synced).length;
  const farmers = spaces.filter((s) => s.role === "farmer" || s.role === "coop");

  return (
    <div className="flex flex-col gap-8">
      <header>
        <p className="overline-label">Field Agent console</p>
        <h1 className="mt-2 font-display text-4xl tracking-tight">Territory as visible work</h1>
        <p className="mt-2 max-w-xl text-sm text-ink-soft">
          Offline capture, then ledger. Commissions are pending, earned, or paid — never informal.
        </p>
      </header>

      <section className="grid gap-3 sm:grid-cols-4">
        <Pulse k="Pending verifications" v="7" />
        <Pulse k="Follow-ups" v="4" />
        <Pulse k="Photos to sync" v={String(pending)} />
        <Pulse k="Commissions pending" v={money(186)} />
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="plate rounded-[12px] p-5">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-2xl">Today</h2>
            <Button
              size="sm"
              variant="navy"
              onClick={() => {
                sync();
                toast("Queue synced · canonical IDs returned");
              }}
            >
              Sync now
            </Button>
          </div>
          <ul className="mt-4 flex flex-col gap-2">
            {agentTasks.map((t) => (
              <li
                key={t.id}
                className={cn(
                  "flex items-center justify-between rounded-[8px] bg-recessed px-3 py-3 text-sm",
                  t.status === "done" && "opacity-50",
                )}
              >
                <span>
                  <span className="block font-medium">{t.title}</span>
                  <span className="text-xs text-muted">
                    {t.kind} · {t.due}
                  </span>
                </span>
                <span className="text-xs uppercase tracking-wider text-brass-text">{t.status}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="plate rounded-[12px] p-5">
          <h2 className="font-display text-2xl">Offline queue</h2>
          <p className="mt-1 text-xs text-muted">Saved locally versus verified on ledger — two different states.</p>
          <ul className="mt-4 flex flex-col gap-2">
            {offline.map((o) => (
              <li key={o.id} className="flex items-center justify-between rounded-[8px] bg-recessed px-3 py-2 text-sm">
                <span>{o.label}</span>
                <span className={cn("text-xs", o.synced ? "text-sage-deep" : "text-brass-text")}>
                  {o.synced ? "Verified on ledger" : "Saved locally"}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            <Button
              size="sm"
              variant="secondary"
              onClick={() => {
                queue("farmer", "New farmer capture · Cư M'gar");
                toast("Queued with client operation ID");
              }}
            >
              Capture farmer
            </Button>
            <Button
              size="sm"
              variant="secondary"
              onClick={() => {
                queue("lot", "New lot · cherry photo");
                toast("Lot capture queued");
              }}
            >
              Capture lot
            </Button>
          </div>
        </article>
      </section>

      <section>
        <h2 className="font-display text-2xl">Territory</h2>
        <div className="mt-4 overflow-hidden rounded-[12px] bg-surface shadow-[var(--shadow-plate)]">
          <table className="w-full text-sm">
            <thead className="bg-recessed text-left text-xs uppercase tracking-wider text-ink-soft">
              <tr>
                <th className="px-4 py-3">Space</th>
                <th className="px-4 py-3">District</th>
                <th className="px-4 py-3">Tier</th>
                <th className="px-4 py-3">Farmgate</th>
              </tr>
            </thead>
            <tbody>
              {farmers.map((f) => (
                <tr key={f.id} className="border-t border-hairline">
                  <td className="px-4 py-3 font-medium">{f.name}</td>
                  <td className="px-4 py-3 text-ink-soft">{f.district}</td>
                  <td className="px-4 py-3">{f.verification}</td>
                  <td className="px-4 py-3 font-mono">{f.farmgateAvg ? money(f.farmgateAvg) : "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="plate rounded-[12px] p-5">
        <h2 className="font-display text-2xl">Earnings</h2>
        <dl className="mt-4 grid gap-3 sm:grid-cols-3">
          <div className="rounded-[8px] bg-recessed p-3">
            <dt className="overline-label">Pending</dt>
            <dd className="mt-1 font-mono text-xl">{money(186)}</dd>
          </div>
          <div className="rounded-[8px] bg-recessed p-3">
            <dt className="overline-label">Earned</dt>
            <dd className="mt-1 font-mono text-xl">{money(940)}</dd>
          </div>
          <div className="rounded-[8px] bg-recessed p-3">
            <dt className="overline-label">Paid</dt>
            <dd className="mt-1 font-mono text-xl">{money(2210)}</dd>
          </div>
        </dl>
      </section>
    </div>
  );
}

function Pulse({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-[12px] bg-navy px-4 py-3 text-inverse">
      <p className="text-[11px] uppercase tracking-[0.16em] text-brass">{k}</p>
      <p className="mt-1 font-mono text-2xl">{v}</p>
    </div>
  );
}
