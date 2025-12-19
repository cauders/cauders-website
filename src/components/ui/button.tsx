
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xs ring-offset-background transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-normal",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-black hover:text-primary",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-black hover:text-primary",
        outline:
          "border border-input bg-background hover:bg-black hover:text-primary",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-black hover:text-primary",
        ghost: "hover:bg-black hover:text-primary",
        link: "text-primary underline-offset-4 hover:underline",
        zinc: "bg-zinc text-white hover:bg-black hover:text-primary",
      },
      size: {
        default: "h-10 px-5 md:text-xs",
        sm: "h-9 rounded-md px-4 md:px-3 text-xs",
        lg: "h-11 rounded-md px-10 md:px-8 md:text-xs",
        icon: "h-10 w-10",
        zinc: "h-7 px-8 md:h-8 md:px-12 font-medium",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }), "rounded-full")}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
