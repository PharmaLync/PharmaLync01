import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "bg-teal-700 text-white shadow hover:bg-teal-800",
                destructive: "bg-medical-red text-white shadow-sm hover:bg-red-600",
                outline: "border border-teal-700 bg-transparent shadow-sm hover:bg-teal-50 text-teal-700",
                secondary: "bg-teal-100 text-teal-900 shadow-sm hover:bg-teal-200",
                ghost: "hover:bg-slate-100 hover:text-slate-900",
                link: "text-teal-700 underline-offset-4 hover:underline",
                glass: "bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 shadow-sm",
            },
            size: {
                default: "h-12 px-6 py-3",
                sm: "h-9 rounded-xl px-3 text-xs",
                lg: "h-14 rounded-2xl px-8 text-base",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
        <Comp
            className={cn(buttonVariants({ variant, size, className }))}
            ref={ref}
            {...props}
        />
    )
})
Button.displayName = "Button"

export { Button, buttonVariants }
