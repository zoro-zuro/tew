import React, { memo } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '../../lib/utils';

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "variant"> {
    variant?: 'primary' | 'secondary' | 'outline';
}

const Button: React.FC<ButtonProps> = memo(({
    variant = 'primary',
    className = '',
    children,
    ...props
}) => {
    const variants = {
        primary: "bg-gradient-to-br from-[#800000] via-[#FE580A] to-[#FFD700] bg-[length:200%_auto] hover:bg-bottom text-white shadow-lava-glow",
        secondary: "bg-white text-dark hover:bg-gray-100",
        outline: "border-2 border-molten-orange text-molten-orange hover:bg-gradient-to-br hover:from-[#800000] hover:via-[#FE580A] hover:to-[#FFD700] hover:text-white"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.15 }} // Faster animation
            className={cn(
                "px-8 py-3 rounded-md font-medium transition-all duration-300 flex items-center justify-center gap-2 will-change-transform",
                variants[variant],
                className
            )}
            style={{ transform: 'translateZ(0)' }}
            {...props}
        >
            {children}
        </motion.button>
    );
});

Button.displayName = 'Button';

export default Button;
