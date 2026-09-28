import { create } from "zustand";
import { persist } from "zustand/middleware";
import { personas } from "./catalog";
import type { OfflineOp, OfferRecord, SampleRequest, TipRecord } from "./types";

type State = {
  personaId: string;
  followed: string[];
  saved: string[];
  tips: TipRecord[];
  samples: SampleRequest[];
  offers: OfferRecord[];
  offline: OfflineOp[];
  revealedComp: boolean;
  votes: Record<string, number>;
  cuppingDraft: Record<string, number>;
  searchOpen: boolean;
  setPersona: (id: string) => void;
  toggleFollow: (spaceId: string) => void;
  toggleSave: (lotId: string) => void;
  addTip: (spaceId: string, amount: number, lotId?: string) => void;
  requestSample: (lotId: string) => void;
  placeOffer: (lotId: string, price: number, bags: number) => void;
  queueOffline: (kind: OfflineOp["kind"], label: string) => void;
  syncOffline: () => void;
  setRevealed: (v: boolean) => void;
  vote: (entryId: string, score: number) => void;
  setSearchOpen: (v: boolean) => void;
};

const seedFollows = ["sp-mai", "sp-hung", "sp-karmic"];

export const useLotspace = create<State>()(
  persist(
    (set, get) => ({
      personaId: "consumer",
      followed: seedFollows,
      saved: ["lot-118"],
      tips: [
        {
          id: "tip-seed",
          spaceId: "sp-mai",
          lotId: "lot-118",
          amount: 8,
          fee: 0.24,
          at: "2026-09-25T20:18:00+07:00",
          key: "TIP-118-linh",
        },
      ],
      samples: [{ id: "sm-seed", lotId: "lot-204", at: "2026-09-20T10:12:00+02:00", status: "sent" }],
      offers: [],
      offline: [
        { id: "off-1", kind: "note", label: "Voice note · Mai terrace 3", at: "2026-09-27T07:12:00+07:00", synced: false },
        { id: "off-2", kind: "lot", label: "Lot photo · honey trays", at: "2026-09-27T07:18:00+07:00", synced: false },
      ],
      revealedComp: false,
      votes: {},
      cuppingDraft: {},
      searchOpen: false,
      setPersona: (id) => {
        if (personas.some((p) => p.id === id)) set({ personaId: id });
      },
      toggleFollow: (spaceId) => {
        const followed = get().followed;
        set({
          followed: followed.includes(spaceId)
            ? followed.filter((id) => id !== spaceId)
            : [...followed, spaceId],
        });
      },
      toggleSave: (lotId) => {
        const saved = get().saved;
        set({
          saved: saved.includes(lotId) ? saved.filter((id) => id !== lotId) : [...saved, lotId],
        });
      },
      addTip: (spaceId, amount, lotId) => {
        const fee = Math.round(amount * 0.03 * 100) / 100;
        const rec: TipRecord = {
          id: `tip-${Date.now()}`,
          spaceId,
          lotId,
          amount,
          fee,
          at: new Date().toISOString(),
          key: `TIP-${spaceId}-${Date.now()}`,
        };
        set({ tips: [rec, ...get().tips] });
      },
      requestSample: (lotId) => {
        if (get().samples.some((s) => s.lotId === lotId)) return;
        set({
          samples: [
            { id: `sm-${Date.now()}`, lotId, at: new Date().toISOString(), status: "requested" },
            ...get().samples,
          ],
        });
      },
      placeOffer: (lotId, price, bags) => {
        set({
          offers: [
            {
              id: `of-${Date.now()}`,
              lotId,
              price,
              bags,
              at: new Date().toISOString(),
              status: "open",
            },
            ...get().offers,
          ],
        });
      },
      queueOffline: (kind, label) => {
        set({
          offline: [
            { id: `op-${Date.now()}`, kind, label, at: new Date().toISOString(), synced: false },
            ...get().offline,
          ],
        });
      },
      syncOffline: () => {
        set({ offline: get().offline.map((o) => ({ ...o, synced: true })) });
      },
      setRevealed: (v) => set({ revealedComp: v }),
      vote: (entryId, score) => set({ votes: { ...get().votes, [entryId]: score } }),
      setSearchOpen: (v) => set({ searchOpen: v }),
    }),
    { name: "lotspace.v1" },
  ),
);

export function usePersona() {
  const id = useLotspace((s) => s.personaId);
  return personas.find((p) => p.id === id) ?? personas[0];
}
