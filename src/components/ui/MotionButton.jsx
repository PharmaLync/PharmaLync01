import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const MotionButton = ({ children, className, onClick, ...props }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block w-full"
        >
            <Button
                onClick={onClick}
                className={cn("transition-all duration-200", className)}
                {...props}
            >
                {children}
            </Button>
        </motion.div>
    );
};

export default MotionButton;
