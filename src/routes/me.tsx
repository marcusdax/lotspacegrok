import { createFileRoute, Navigate } from "@tanstack/react-router";
import { spaceById } from "@/lib/catalog";
import { usePersona } from "@/lib/store";

export const Route = createFileRoute("/me")({ component: Me });

function Me() {
  const persona = usePersona();
  const space = spaceById(persona.spaceId);
  if (!space) return <p>Space missing.</p>;
  return <Navigate to="/space/$slug" params={{ slug: space.slug }} />;
}
