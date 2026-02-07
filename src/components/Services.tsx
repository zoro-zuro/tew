import React, { useState, useEffect, memo, useCallback } from 'react';
import SectionWrapper from './common/SectionWrapper';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './common/Button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import hotForgedImg from '../assets/img/capablities/1.jpg';
import machinedImg from '../assets/img/capablities/2.jpg';
import customImg from '../assets/img/capablities/3.png';

const capabilities = [
    {
        title: "Hot Forged Components",
        shortDesc: "We manufacture steel, brass, aluminum, and copper forged",
        fullDesc: "We manufacture steel, brass, aluminum, and copper forged components with precision and durability. Our hot forging process ensures superior strength and reliability for industrial applications.",
        image: hotForgedImg
    },
    {
        title: "Machined Components",
        shortDesc: "Our advanced CNC machining capabilities deliver complex",
        fullDesc: "Our advanced CNC machining capabilities deliver complex precision components with tight tolerances. From prototyping to high-volume production, we ensure exceptional quality and consistency.",
        image: machinedImg
    },
    {
        title: "Custom Manufacturing",
        shortDesc: "We provide custom manufacturing solutions based on your",
        fullDesc: "We provide custom manufacturing solutions based on your specific requirements. From design to delivery, we work closely with you to create bespoke components that meet your exact specifications.",
        image: customImg
    }
];

const CapabilitiesSection: React.FC = memo(() => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 640);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile, { passive: true });
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Auto-play for mobile carousel
    useEffect(() => {
        if (!isMobile) return;
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % capabilities.length);
        }, 5000); // Increased from 4000 to reduce CPU usage
        return () => clearInterval(interval);
    }, [isMobile]);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % capabilities.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + capabilities.length) % capabilities.length);
    }, []);

    const cap = capabilities[currentSlide];

    return (
        <SectionWrapper id="capabilities" className="bg-white">
            <div className="text-center mb-8 sm:mb-16 px-4">
                <div className="inline-flex items-center gap-2 bg-brand/5 px-4 sm:px-5 py-2 rounded-full mb-4 sm:mb-6">
                    <div className="relative w-2 sm:w-2.5 h-2 sm:h-2.5">
                        <div className="absolute inset-0 rounded-full bg-brand" />
                        <div className="absolute inset-0 rounded-full bg-brand animate-ripple" />
                    </div>
                    <span className="text-black text-xs sm:text-sm font-medium">Manufacturing Capabilities</span>
                </div>
                <h2 className="font-montserrat text-lg sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#1A1A1A] tracking-tight">
                    Built for Industrial Scale
                </h2>
            </div>

            {/* Mobile Carousel View - Optimized */}
            <div className="sm:hidden relative max-w-[400px] mx-auto px-4">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }} // Reduced duration
                        className="relative h-[320px] rounded-[1.5rem] overflow-hidden will-change-transform"
                        style={{ transform: 'translateZ(0)' }}
                    >
                        <div className="absolute inset-0">
                            <img
                                src={cap.image}
                                alt={cap.title}
                                className="w-full h-full object-cover"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />

                        <div className="absolute inset-0 z-20 p-5 flex flex-col justify-end">
                            <h3 className="font-montserrat text-lg font-bold text-white leading-tight mb-2">
                                {cap.title}
                            </h3>
                            <p className="font-normal text-xs text-white/80 leading-relaxed line-clamp-2 mb-3">
                                {cap.shortDesc}
                            </p>
                            <Button
                                variant="primary"
                                className="w-full py-2.5 rounded-lg font-semibold text-xs"
                            >
                                View Details
                            </Button>
                        </div>
                    </motion.div>
                </AnimatePresence>

                <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-lg z-30"
                >
                    <ChevronLeft size={18} className="text-black" />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-lg z-30"
                >
                    <ChevronRight size={18} className="text-black" />
                </button>

                <div className="flex justify-center gap-2 mt-4">
                    {capabilities.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            className={`w-2 h-2 rounded-full transition-all ${
                                idx === currentSlide ? 'bg-brand w-4' : 'bg-brand/30'
                            }`}
                        />
                    ))}
                </div>
            </div>

            {/* Desktop Grid View - Optimized with will-change */}
            <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-[1400px] mx-auto px-4 sm:px-6">
                {capabilities.map((cap, index) => (
                    <div
                        key={index}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                        className="relative h-[400px] sm:h-[500px] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden group cursor-pointer will-change-transform"
                        style={{ transform: 'translateZ(0)' }}
                    >
                        {/* Background Image with GPU acceleration */}
                        <div className="absolute inset-0 transition-transform duration-700 will-change-transform">
                            <img
                                src={cap.image}
                                alt={cap.title}
                                className={`w-full h-full object-cover transition-transform duration-700 will-change-transform ${
                                    (hoveredIndex === index || expandedIndex === index) ? 'scale-110' : 'scale-100'
                                }`}
                                loading="lazy"
                                decoding="async"
                            />
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />

                        <div className="absolute inset-0 z-20 p-5 sm:p-8 flex flex-col justify-end">
                            <h3 className="font-montserrat text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight mb-2 sm:mb-3">
                                {cap.title}
                            </h3>

                            <div className="overflow-hidden transition-all duration-500 ease-out mb-3 sm:mb-4 md:mb-6">
                                <div
                                    className="mb-2 sm:mb-4"
                                    style={{
                                        height: (hoveredIndex === index || expandedIndex === index) ? 'auto' : '24px',
                                    }}
                                >
                                    <p className={`font-normal text-xs sm:text-sm leading-relaxed transition-colors duration-500 ${
                                        (hoveredIndex === index || expandedIndex === index) ? 'text-white/90' : 'text-white/60'
                                    }`}>
                                        {(hoveredIndex === index || expandedIndex === index) ? cap.fullDesc : (
                                            <>{cap.shortDesc} <span className="text-white/80 font-medium">Read more...</span></>
                                        )}
                                    </p>
                                </div>
                            </div>

                            <Button
                                variant={(hoveredIndex === index || expandedIndex === index) ? 'primary' : undefined}
                                className={`w-full py-3 sm:py-3.5 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 ${
                                    (hoveredIndex === index || expandedIndex === index)
                                        ? ''
                                        : 'bg-white/20 text-white backdrop-blur-sm hover:bg-white/30'
                                }`}
                            >
                                View Details
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
});

CapabilitiesSection.displayName = 'CapabilitiesSection';

export default CapabilitiesSection;
