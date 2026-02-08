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
        primary: "bg-[#FE5200] hover:bg-[#FF6B35] text-white",
        secondary: "bg-white text-dark hover:bg-gray-100",
        outline: "border-2 border-[#FE5200] text-[#FE5200] hover:bg-[#FE5200] hover:text-white"
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
