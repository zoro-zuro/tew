import React, { useState, useEffect, memo, useCallback } from 'react';
import SectionWrapper from './common/SectionWrapper';
import { motion, AnimatePresence } from 'framer-motion';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import hotForgedImg from '../assets/img/capablities/1.jpg';
import machinedImg from '../assets/img/capablities/2.jpg';
import customImg from '../assets/img/capablities/3.png';
import Badge from './common/Badge';

const capabilities = [
    {
        title: "Hot Forged Components",
        shortDesc: "We manufacture steel, brass, aluminum, and copper forged",
        fullDesc: `We manufacture steel, brass, aluminum, and copper forged components engineered for superior controlled hot forging process enhances grain structure, improves load-bearing capacity, and minimizes material waste.
         With in-house tooling, process control, and quality inspection, we deliver consistent, high-volume parts that meet demanding industrial standards—ideal for applications requiring reliability under extreme conditions`,
        image: hotForgedImg
    },
    {
        title: "Machined Components",
        shortDesc: "Our advanced CNC machining capabilities deliver complex",
        fullDesc: `Our advanced CNC machining capabilities enable production with excellent dimensional tolerance accuracy and surface finish.
         We handle a wide range of materials and geometries to meet diverse industrial and automotive requirements. From single prototype to large-scale production, our machining process ensures repeatability, precision, and consistent output—supporting OEMs with dependable components that integrate seamlessly into their assemblies.`,
        image: machinedImg
    },
    {
        title: "Custom Manufacturing",
        shortDesc: "We provide custom manufacturing solutions based on your",
        fullDesc: `We offer end-to-end custom manufacturing solutions built around your drawings, specifications, and production goals. Our OEM engineering team understands collaborate functional requirements with OEMs, optimize designs, and plan efficient manufacturing workflows. 
        From concept support and material selection to full-scale production, Thirmula acts as a long-term manufacturing partner—delivering business flexible solutions tailored to your business needs.`,
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
        <SectionWrapper id="capabilities" className="bg-white px-[94px] pb-0">
            <div className="flex flex-col items-center text-center mb-[28px]">
                <Badge title="Manufacturing Capabilities" />
                <h2 className="font-montserrat text-lg sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#1A1A1A]" style={{ lineHeight: "140%" }}>
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
                            <h3 className="font-montserrat text-[30px] font-[900] text-white mb-2">
                                {cap.title}
                            </h3>
                            <p className="font-regular font-poppins text-[12px] text-white/60 leading-relaxed mb-3" style={{ lineHeight: "140%" }}>
                                {cap.shortDesc}{" "}
                                <span className="text-white">Read More</span>
                            </p>
                            <button

                                className="w-full py-2.5 rounded-lg font-semibold text-xs"
                            >
                                View Details
                            </button>
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
                            className={`w-2 h-2 rounded-full transition-all ${idx === currentSlide ? 'bg-brand w-4' : 'bg-brand/30'
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* Desktop Grid View - Optimized with will-change */}
            <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-[1400px] h-[500px]">
                {capabilities.map((cap, index) => (
                    <div
                        key={index}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                        className="relative h-[400px] sm:h-[500px] sm:rounded-[36px] overflow-hidden group cursor-pointer will-change-transform"
                        style={{ transform: 'translateZ(0)' }}
                    >
                        {/* Background Image with GPU acceleration */}
                        <div className="absolute object-cover inset-0 transition-transform duration-700 will-change-transform">
                            <img
                                src={cap.image}
                                alt={cap.title}
                                className={`w-full h-full object-cover translate-x-0 transition-transform duration-700 will-change-transform`}
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                        {/* Content container */}
                        <div
                            className="absolute bottom-0 left-0 right-0 z-20 p-5 sm:p-8 flex flex-col transition-all duration-500"
                        >
                            <div
                                className="absolute inset-0 -z-10 transition-all duration-500"
                                style={{
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
                                    backdropFilter: 'blur(5px)',
                                    WebkitBackdropFilter: 'blur(5px)',
                                    maskImage: 'linear-gradient(to top, black 50%, transparent 100%)',
                                    WebkitMaskImage: 'linear-gradient(to top, black 50%, transparent 100%)'
                                }}
                            />
                            <h3 className="font-montserrat text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight mb-2 sm:mb-3">
                                {cap.title}
                            </h3>

                            <div className="overflow-hidden transition-all duration-500 ease-out mb-3 sm:mb-4 md:mb-6">
                                <motion.div
                                    initial={false}
                                    animate={{
                                        height: (hoveredIndex === index || expandedIndex === index) ? 'auto' : '24px',
                                        opacity: 1
                                    }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="mb-2 sm:mb-4"
                                >
                                    <p className={`font-normal text-xs sm:text-[12px] leading-relaxed transition-colors duration-500 ${(hoveredIndex === index || expandedIndex === index) ? 'text-white/90' : 'text-white/60'
                                        }`}>
                                        {(hoveredIndex === index || expandedIndex === index) ? (
                                            <span className="block animate-fadeIn">{cap.fullDesc}</span>
                                        ) : (
                                            <span className="line-clamp-2">
                                                {cap.shortDesc} <span className="text-white/80 font-medium whitespace-nowrap">Read more...</span>
                                            </span>
                                        )}
                                    </p>
                                </motion.div>
                            </div>

                            <button
                                className="rounded-[16px] px-[16px] py-[12px] text-white font-medium transition-all hover:bg-[#fe500050]"
                                style={{
                                    background: '#fe500073',


                                    backgroundOrigin: 'border-box',
                                    backgroundClip: 'padding-box, border-box',
                                    boxShadow: '0px -11px 16px 0px #FF5E00 inset, 0px 4px 16px 0px #FF5E0080'
                                }}
                            >
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
});

CapabilitiesSection.displayName = 'CapabilitiesSection';

export default CapabilitiesSection;
