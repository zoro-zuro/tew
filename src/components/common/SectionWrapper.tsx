import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface SectionWrapperProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    dark?: boolean;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
    children,
    className = '',
    id,
    dark = false
}) => {
    return (
        <section
            id={id}
            className={cn(
                "section-padding",
                dark ? 'bg-dark text-white' : 'bg-white text-dark',
                className
            )}
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-[1440px] mx-auto w-full"
            >
                {children}
            </motion.div>
        </section>
    );
};

export default SectionWrapper;
