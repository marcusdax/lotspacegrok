import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[background-color,color,box-shadow,transform] duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] disabled:pointer-events-none disabled:opacity-45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oxblood active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-oxblood text-inverse hover:bg-oxblood-deep",
        navy: "bg-navy text-inverse hover:bg-ink",
        secondary:
          "bg-surface text-ink shadow-[0_0_0_1px_var(--color-hairline)] hover:bg-hover",
        ghost: "bg-transparent text-ink hover:bg-hover",
        brass: "bg-brass-tint text-brass-text hover:bg-brass-tint/80",
        sage: "bg-sage text-inverse hover:bg-sage-deep",
        danger: "bg-danger text-inverse",
        link: "text-oxblood underline underline-offset-[3px] hover:text-oxblood-deep h-auto px-0",
      },
      size: {
        sm: "h-9 px-3 text-sm rounded-[6px]",
        md: "h-11 px-4 text-sm rounded-[6px]",
        lg: "h-12 px-5 text-base rounded-[8px]",
        icon: "size-11 rounded-[6px]",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export function Button({
  className,
  variant,
  size,
  asChild,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}
