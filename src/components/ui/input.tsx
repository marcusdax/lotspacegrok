import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-[6px] bg-surface px-3 text-sm text-ink shadow-[0_0_0_1px_var(--color-muted)] placeholder:text-muted",
        "focus-visible:shadow-[0_0_0_2px_var(--color-oxblood)]",
        className,
      )}
      {...props}
    />
  );
}
