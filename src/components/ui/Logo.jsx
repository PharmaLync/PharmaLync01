import React from 'react';
import { cn } from '@/lib/utils';

const Logo = ({ variant = 'full', size = 'md', className }) => {
    // Determine path based on preference (can be props later if needed, defaulting to light/white friendly one)
    // Assuming 'light' background means we need the colored/dark logo.
    // Based on user prompt: 
    // Light Background Version (image_377cf2.png) -> logo-light.png (Use this for white backgrounds).
    const logoSrc = "/assets/logo-light.png";

    // Size variants
    const sizeClasses = {
        sm: "h-8",
        md: "h-12",
        lg: "h-20"
    };

    return (
        <div className={cn("relative inline-block", className)}>
            <img
                src={logoSrc}
                alt="PharmaLync Logo"
                className={cn(
                    "object-contain transition-all duration-300",
                    sizeClasses[size]
                )}
            />
        </div>
    );
};

export default Logo;
