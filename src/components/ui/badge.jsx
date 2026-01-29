import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
        variants: {
            variant: {
                default:
                    "border-transparent bg-teal-700 text-white shadow hover:bg-teal-700/80",
                secondary:
                    "border-transparent bg-teal-100 text-teal-900 hover:bg-teal-100/80",
                destructive:
                    "border-transparent bg-medical-red text-white shadow hover:bg-red-600/80",
                outline: "text-teal-950",
                success:
                    "border-transparent bg-medical-green text-white shadow hover:bg-green-600/80",
                glass:
                    "border-white/20 bg-white/30 backdrop-blur-md text-white shadow-sm",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

function Badge({ className, variant, ...props }) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props} />
    )
}

export { Badge, badgeVariants }
