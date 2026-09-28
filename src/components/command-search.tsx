import { useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { lots, spaces } from "@/lib/catalog";
import { useLotspace } from "@/lib/store";
import { cn } from "@/lib/utils";

export function CommandSearch() {
  const open = useLotspace((s) => s.searchOpen);
  const setOpen = useLotspace((s) => s.setSearchOpen);
  const [q, setQ] = useState("");
  const nav = useNavigate();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(!useLotspace.getState().searchOpen);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setOpen]);

  const results = useMemo(() => {
    const n = q.trim().toLowerCase();
    if (!n) {
      return {
        lots: lots.slice(0, 4),
        spaces: spaces.slice(0, 4),
      };
    }
    return {
      lots: lots.filter((l) =>
        `${l.code} ${l.title} ${l.process} ${l.varietal} ${l.district}`.toLowerCase().includes(n),
      ),
      spaces: spaces.filter((s) =>
        `${s.name} ${s.district} ${s.handle} ${s.role}`.toLowerCase().includes(n),
      ),
    };
  }, [q]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-navy/40 px-4 pt-[12vh]" onClick={() => setOpen(false)}>
      <div
        className="w-full max-w-lg overflow-hidden rounded-[12px] bg-surface shadow-[var(--shadow-navy)]"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label="Search lots and Spaces"
      >
        <input
          autoFocus
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search lots, farms, roasters"
          className="h-12 w-full border-b border-hairline bg-transparent px-4 text-base outline-none placeholder:text-muted"
        />
        <div className="max-h-80 overflow-y-auto p-2">
          <p className="overline-label px-2 py-2">Lots</p>
          {results.lots.map((l) => (
            <button
              key={l.id}
              className={cn(
                "flex w-full items-center justify-between rounded-[6px] px-3 py-2.5 text-left text-sm hover:bg-hover",
              )}
              onClick={() => {
                setOpen(false);
                void nav({ to: "/lots/$id", params: { id: l.id } });
              }}
            >
              <span>{l.title}</span>
              <span className="font-mono text-xs text-muted">{l.code}</span>
            </button>
          ))}
          <p className="overline-label px-2 py-2">Spaces</p>
          {results.spaces.map((s) => (
            <button
              key={s.id}
              className="flex w-full items-center justify-between rounded-[6px] px-3 py-2.5 text-left text-sm hover:bg-hover"
              onClick={() => {
                setOpen(false);
                void nav({ to: "/space/$slug", params: { slug: s.slug } });
              }}
            >
              <span>{s.name}</span>
              <span className="text-xs text-muted">{s.district}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
