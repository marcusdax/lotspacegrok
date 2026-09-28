import { useLotspace } from "@/lib/store";
import { Button } from "./ui/button";

export function FollowButton({ spaceId }: { spaceId: string }) {
  const followed = useLotspace((s) => s.followed.includes(spaceId));
  const toggle = useLotspace((s) => s.toggleFollow);
  return (
    <Button
      variant={followed ? "secondary" : "primary"}
      size="sm"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle(spaceId);
      }}
    >
      {followed ? "Following" : "Follow"}
    </Button>
  );
}
