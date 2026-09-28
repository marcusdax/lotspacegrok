import type { ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  Compass,
  LayoutGrid,
  BookOpen,
  Heart,
  UserRound,
  Search,
  ChevronDown,
  Ellipsis,
} from "lucide-react";
import { personas } from "@/lib/catalog";
import { ROLE_LABEL } from "@/lib/format";
import { useLotspace, usePersona } from "@/lib/store";
import { cn } from "@/lib/utils";
import { CompassMark } from "./compass-mark";
import { CommandSearch } from "./command-search";
import { Button } from "./ui/button";
import { useState } from "react";

const nav = [
  { to: "/", label: "Compass", icon: Compass },
  { to: "/market", label: "Market", icon: LayoutGrid },
  { to: "/stories", label: "Stories", icon: BookOpen },
  { to: "/following", label: "Following", icon: Heart },
  { to: "/me", label: "My Space", icon: UserRound },
];

const more = [
  { to: "/messages", label: "Messages" },
  { to: "/agent", label: "Agent" },
  { to: "/cupping", label: "Cupping" },
  { to: "/trust", label: "Trust" },
];

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const persona = usePersona();
  const setPersona = useLotspace((s) => s.setPersona);
  const setSearch = useLotspace((s) => s.setSearchOpen);
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const active = (to: string) =>
    to === "/" ? pathname === "/" : pathname === to || pathname.startsWith(`${to}/`);

  return (
    <div className="min-h-dvh bg-canvas text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-surface focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-40 border-b border-hairline bg-canvas/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4">
          <Link to="/" className="flex items-center gap-2.5">
            <CompassMark className="size-8" />
            <span className="font-display text-xl tracking-tight">LotSpace</span>
          </Link>
          <nav className="ml-4 hidden items-center gap-1 lg:flex" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "flex h-10 items-center gap-2 rounded-[6px] px-3 text-sm",
                  active(item.to) ? "bg-navy text-inverse" : "text-ink-soft hover:bg-hover hover:text-ink",
                )}
              >
                <item.icon className="size-4" strokeWidth={1.75} />
                {item.label}
              </Link>
            ))}
            {more.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "flex h-10 items-center rounded-[6px] px-3 text-sm",
                  active(item.to) ? "bg-navy text-inverse" : "text-ink-soft hover:bg-hover hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <Button variant="secondary" size="icon" aria-label="Search" onClick={() => setSearch(true)}>
              <Search className="size-4" strokeWidth={1.75} />
            </Button>
            <div className="relative lg:hidden">
              <Button
                variant="secondary"
                size="icon"
                aria-label="More"
                aria-expanded={moreOpen}
                onClick={() => {
                  setMoreOpen((v) => !v);
                  setOpen(false);
                }}
              >
                <Ellipsis className="size-4" strokeWidth={1.75} />
              </Button>
              {moreOpen ? (
                <ul className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-[8px] bg-surface py-1 shadow-[var(--shadow-plate-hover)]">
                  {more.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        className="block px-3 py-2.5 text-sm hover:bg-hover"
                        onClick={() => setMoreOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
            <div className="relative">
              <button
                className="flex h-11 items-center gap-2 rounded-[6px] bg-surface px-2.5 shadow-[0_0_0_1px_var(--color-hairline)]"
                onClick={() => {
                  setOpen((v) => !v);
                  setMoreOpen(false);
                }}
                aria-expanded={open}
                aria-haspopup="listbox"
                aria-label={`Viewing as ${persona.name}`}
              >
                <span className="hidden text-left sm:block">
                  <span className="block text-[10px] uppercase tracking-[0.16em] text-brass-text">
                    Viewing as
                  </span>
                  <span className="block max-w-32 truncate text-sm">{persona.name}</span>
                </span>
                <ChevronDown className="size-4 text-ink-soft" />
              </button>
              {open ? (
                <ul
                  className="absolute right-0 z-50 mt-2 w-64 overflow-hidden rounded-[8px] bg-surface py-1 shadow-[var(--shadow-plate-hover)]"
                  role="listbox"
                >
                  {personas.map((p) => (
                    <li key={p.id}>
                      <button
                        className={cn(
                          "flex w-full flex-col items-start px-3 py-2.5 text-left hover:bg-hover",
                          p.id === persona.id && "bg-recessed",
                        )}
                        onClick={() => {
                          setPersona(p.id);
                          setOpen(false);
                        }}
                      >
                        <span className="text-sm font-medium">{p.name}</span>
                        <span className="text-xs text-ink-soft">
                          {ROLE_LABEL[p.role]} · {p.blurb}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </div>
      </header>

      <main id="main" className="mx-auto w-full max-w-6xl px-4 pb-28 pt-6 lg:pb-12">
        {children}
      </main>

      <nav
        className="fixed inset-x-0 bottom-0 z-40 border-t border-hairline bg-canvas/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md lg:hidden"
        aria-label="Mobile"
      >
        <ul className="grid grid-cols-5">
          {nav.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className={cn(
                  "flex h-14 flex-col items-center justify-center gap-0.5 text-[11px]",
                  active(item.to) ? "text-oxblood" : "text-ink-soft",
                )}
              >
                <item.icon className="size-5" strokeWidth={1.75} />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <CommandSearch />
    </div>
  );
}
