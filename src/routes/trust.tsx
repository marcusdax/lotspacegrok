import { createFileRoute } from "@tanstack/react-router";
import { LedgerChain } from "@/components/ledger-chain";
import { spaces } from "@/lib/catalog";
import { TIER_LABEL } from "@/lib/format";

export const Route = createFileRoute("/trust")({ component: Trust });

function Trust() {
  return (
    <div className="flex flex-col gap-8">
      <header>
        <p className="overline-label">Admin / Trust</p>
        <h1 className="mt-2 font-display text-4xl tracking-tight">Verification is a language</h1>
        <p className="mt-2 max-w-xl text-sm text-ink-soft">
          Opinions may be posted. Farmgate may not masquerade as ledger truth. Badges mean specific review workflows.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          { t: "Self-declared", d: "Experience and opinion only. No ledger-backed claim language." },
          { t: "Agent-verified", d: "Captured by a recognized Field Agent, subject to audit." },
          { t: "Audit-verified", d: "Eligible for the strongest provenance and compliance presentation." },
        ].map((x) => (
          <article key={x.t} className="plate rounded-[12px] p-5">
            <h2 className="font-display text-xl">{x.t}</h2>
            <p className="mt-2 text-sm text-ink-soft">{x.d}</p>
          </article>
        ))}
      </section>

      <section>
        <h2 className="font-display text-2xl">Space queue</h2>
        <div className="mt-4 overflow-hidden rounded-[12px] bg-surface shadow-[var(--shadow-plate)]">
          <table className="w-full text-sm">
            <thead className="bg-recessed text-left text-xs uppercase tracking-wider text-ink-soft">
              <tr>
                <th className="px-4 py-3">Space</th>
                <th className="px-4 py-3">Role</th>
                <th className="px-4 py-3">Tier</th>
                <th className="px-4 py-3">Agent</th>
              </tr>
            </thead>
            <tbody>
              {spaces.map((s) => (
                <tr key={s.id} className="border-t border-hairline">
                  <td className="px-4 py-3 font-medium">{s.name}</td>
                  <td className="px-4 py-3">{s.role}</td>
                  <td className="px-4 py-3">{TIER_LABEL[s.verification]}</td>
                  <td className="px-4 py-3 text-ink-soft">{s.agentName ?? "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="plate rounded-[12px] p-5">
        <h2 className="font-display text-2xl">Hash-chained audit</h2>
        <p className="mb-4 mt-1 text-sm text-ink-soft">
          Every critical domain action carries actor, object, and previous hash. Nightly WORM export is inherited from the ledger spine.
        </p>
        <LedgerChain />
      </section>
    </div>
  );
}
