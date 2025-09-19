import { cva } from "class-variance-authority";
import cn from "@/libs/utils/cn";

const buttonVariants = cva(
  "inline-flex items-center text-base justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-[var(--primary)] text-white",
        outline:
          "bg-transparent text-[var(--primary)] border-2 border-[var(--primary)] font-bold",
        ghost: "bg-transparent",
      },
      size: {
        default: "h-12 px-6 has-[>svg:last-child]:pr-3",
        sm: "h-10 px-4 has-[>svg]:pr-2.5 text-sm",
        lg: "h-14 px-6 has-[>svg]:pr-4 text-xl ",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
