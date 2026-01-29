import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';

const MotionCard = ({ children, className, onClick, delay = 0, noHover = false, ...props }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1], // Custom calm easing
                delay: delay
            }}
            whileHover={!noHover ? {
                y: -4,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            } : {}}
            whileTap={!noHover ? { scale: 0.98 } : {}}
            onClick={onClick}
            className="h-full"
        >
            <Card className={cn("h-full transition-colors duration-300", className)} {...props}>
                {children}
            </Card>
        </motion.div>
    );
};

export default MotionCard;
