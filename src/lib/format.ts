import type { LotState, Role, TrustTier } from "./types";

export function money(n: number, digits = 2) {
  return `$${n.toFixed(digits)}`;
}

export function lb(n: number) {
  return `${n.toFixed(2)} / lb`;
}

export function score(n: number) {
  return n.toFixed(2);
}

export function kg(n: number) {
  return `${n.toLocaleString("en-US")} kg`;
}

export function hashShort(h: string) {
  return `${h.slice(0, 8)}…${h.slice(-4)}`;
}

export const ROLE_LABEL: Record<Role, string> = {
  farmer: "Smallholder",
  agent: "Field Agent",
  coop: "Cooperative",
  exporter: "Exporter",
  roaster: "Roaster",
  consumer: "Consumer",
};

export const TIER_LABEL: Record<TrustTier, string> = {
  self: "Self-declared",
  agent: "Agent-verified",
  audit: "Audit-verified",
};

export const STATE_LABEL: Record<LotState, string> = {
  draft: "Draft",
  captured: "Agent captured",
  pending: "Pending verification",
  verified: "Verified",
  available: "Available",
  sample_requested: "Sample requested",
  sample_sent: "Sample sent",
  offer: "Offer open",
  negotiation: "Negotiation",
  price_locked: "Price-locked",
  contracted: "Contracted",
  fulfillment: "Fulfillment",
  delivered: "Delivered",
  archived: "Archived",
};

export const LOT_STATES: LotState[] = [
  "draft",
  "captured",
  "pending",
  "verified",
  "available",
  "sample_requested",
  "sample_sent",
  "offer",
  "negotiation",
  "price_locked",
  "contracted",
  "fulfillment",
  "delivered",
  "archived",
];

export function cupTier(n: number): "outstanding" | "excellent" | "specialty" | "below" {
  if (n >= 90) return "outstanding";
  if (n >= 85) return "excellent";
  if (n >= 80) return "specialty";
  return "below";
}

export function relativeDay(iso: string) {
  const d = new Date(iso);
  const now = new Date("2026-09-27T12:00:00+07:00");
  const diff = Math.round((now.getTime() - d.getTime()) / 86400000);
  if (diff <= 0) return "Today";
  if (diff === 1) return "Yesterday";
  if (diff < 7) return `${diff} days ago`;
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
}
