import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { spaceById } from "@/lib/catalog";
import { ROLE_LABEL } from "@/lib/format";
import { VerificationSeal } from "./verification-seal";

export function SpaceCard({ id, followSlot }: { id: string; followSlot?: ReactNode }) {
  const space = spaceById(id);
  if (!space) return null;
  return (
    <article className="plate overflow-hidden rounded-[12px]">
      <Link to="/space/$slug" params={{ slug: space.slug }} className="block">
        <div className="relative h-28 overflow-hidden bg-recessed">
          <img src={space.cover} alt="" className="size-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 text-inverse">
            <p className="font-display text-lg leading-tight">{space.name}</p>
            <p className="text-xs text-inverse/80">
              {ROLE_LABEL[space.role]} · {space.district}
            </p>
          </div>
        </div>
      </Link>
      <div className="flex items-center justify-between gap-2 p-3">
        <VerificationSeal tier={space.verification} compact />
        {followSlot}
      </div>
    </article>
  );
}
