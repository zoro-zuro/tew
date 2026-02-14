import React, { memo } from 'react';
import { motion } from 'framer-motion';

import { useInViewPort } from '../hooks/useInViewPort';
import oGif from '../assets/gif/o-gif.gif';
import heroImg from '../assets/img/hero-img.png';
import heroBgGif from '../assets/bg/hero-gif.gif';
import heroCardLeft from '../assets/img/hero-card-left.png';
import heroCardRight from '../assets/img/hero-card-right.png';
import Badge from './common/Badge';

// Memoized to prevent re-renders
const Hero: React.FC = memo(() => {
    const { ref: heroRef, isInViewport } = useInViewPort<HTMLElement>();

    // Generate static random values once (not on every render)
    const sparkles = React.useMemo(() =>
        [...Array(8)].map((_, i) => ({
            id: i,
            width: Math.random() * 3 + 2,
            left: `${15 + (i * 10)}%`,
            top: `${10 + (i * 8)}%`,
            delay: i * 0.6,
            duration: 2.5 + (i % 2),
        })), []
    );

    const smokeWisps = React.useMemo(() =>
        [...Array(6)].map((_, i) => ({
            id: i,
            width: 200 + (i % 3) * 60,
            height: 140 + (i % 3) * 40,
            left: `${(i * 18) - 5}%`,
            delay: i * 1.2,
            duration: 12 + (i % 3) * 3,
        })), []
    );

    return (
        <section id="home" ref={heroRef} className="relative min-h-fit md:min-h-[130vh] bg-black overflow-hidden flex flex-col items-center">
            {/* Background GIF with Overlay - GPU accelerated */}
            <div className="absolute inset-0 z-0 opacity-40 will-change-transform">
                {isInViewport && (
                    <img
                        src={heroBgGif}
                        alt="Production Background"
                        className="w-full h-full object-cover"
                        loading="eager"
                        decoding="async"
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
            </div>

            {/* Optimized Sparkles - Reduced to 8 with GPU acceleration */}
            <div className="absolute inset-0 pointer-events-none will-change-transform">
                {sparkles.map((sparkle) => (
                    <div
                        key={sparkle.id}
                        className="absolute bg-brand rounded-full blur-[1px] animate-sparkle"
                        style={{
                            width: `${sparkle.width}px`,
                            height: `${sparkle.width}px`,
                            left: sparkle.left,
                            top: sparkle.top,
                            animationDelay: `${sparkle.delay}s`,
                            animationDuration: `${sparkle.duration}s`,
                            transform: 'translateZ(0)',
                            willChange: 'transform, opacity',
                        }}
                    />
                ))}
            </div>

            {/* Optimized Smokey Overlay - Reduced to 6 wisps */}
            <div className="absolute bottom-0 left-0 w-full h-[300px] sm:h-[520px] pointer-events-none z-[3] overflow-hidden will-change-transform">
                <div className="absolute bottom-0 left-0 w-full h-[100px] sm:h-[170px] bg-gradient-to-t from-[#FF4500]/40 via-brand/25 to-transparent blur-[50px]" />

                {smokeWisps.map((wisp) => (
                    <div
                        key={wisp.id}
                        className="absolute rounded-full blur-[100px] animate-smoke"
                        style={{
                            background: wisp.id % 2 === 0
                                ? 'radial-gradient(circle, rgba(255,69,0,0.3) 0%, rgba(254,88,10,0.15) 50%, transparent 80%)'
                                : 'radial-gradient(circle, rgba(254,88,10,0.25) 0%, rgba(255,69,0,0.12) 50%, transparent 80%)',
                            width: `${wisp.width}px`,
                            height: `${wisp.height}px`,
                            left: wisp.left,
                            bottom: '-80px',
                            animationDelay: `${wisp.delay}s`,
                            animationDuration: `${wisp.duration}s`,
                            transform: 'translateZ(0)',
                            willChange: 'transform, opacity',
                        }}
                    />
                ))}
            </div>

            {/* Hero Body Content */}
            <div className="relative z-10 md:w-full w-[95%] max-w-[1440px] flex flex-col items-center text-center px-8 sm:px-6 pt-28 sm:pt-[77px] sm:pb-[160px]">
                {/* Badge - Simplified animation */}
                <Badge title="#1 on OEM manufacturing" textColor='text-white' />

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="font-montserrat max-w-[1200px] text-[18px] md:text-[47px] lg:text-[48px] font-extrabold text-white tracking-tight mb-4 md:mb-[12px] px-2 sm:px-6"
                    style={{ lineHeight: "140%" }}
                >
                    <div className="whitespace-nowrap">
                        Complete{' '}
                        <span className="inline-flex items-center align-middle">
                            <div className="relative w-[16px] md:w-[60px] lg:w-[42px] hover:w-[50px] md:hover:w-[74px] lg:hover:w-[74px] h-[16px] md:h-[60px] lg:h-[42px] mx-0.5 md:mx-1 transition-all duration-500 ease-in-out rounded-full">
                                <img
                                    src={oGif}
                                    alt="O"
                                    className="absolute inset-0 w-full h-full object-cover rounded-full border-[2px] sm:border-[4px] border-white shadow-[0_0_20px_rgba(254,88,10,0.3)]"
                                    loading="eager"
                                    decoding="async"
                                />
                            </div>
                            EM
                        </span>{' '}
                        Manufacturing Solutions
                    </div>
                    <div className="text-white/90">
                        for Industrial Engineering Needs
                    </div>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="max-w-[750px] font-poppins text-white/40 text-[11px] md:text-[14px] md:font-regular leading-tight md:leading-relaxed text-center md:mb-[36px] mb-4"
                >
                    Thirumala Engineering Works is a trusted OEM partner, delivering forged and precision-machined
                    components with end-to-end engineering solutions for industrial brands, all under one roof.
                </motion.p>

                {/* Primary CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                >
                    <a href="#capabilities" className="group">
                        <div className="relative inline-block">
                            {/* Glass Container - Auto width via padding */}
                            <div
                                style={{
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    backdropFilter: 'blur(5px)',
                                    borderRadius: '20px',
                                    padding: '6px',
                                    display: 'inline-flex', // Fits content
                                }}
                            >
                                {/* Main Button - Auto width */}
                                <div
                                    className="transition-all duration-300 shadow-[inset_0px_-11px_16px_0px_rgba(255,243,237,0.3),0px_4px_16px_0px_rgba(255,94,0,0.5)] group-hover:shadow-[inset_0px_-11px_16px_0px_rgba(255,243,237,0.3),0px_6px_24px_0px_rgba(255,94,0,0.7)]"
                                    style={{
                                        minWidth: '140px', // Minimum width to maintain presence, but grows
                                        height: '50px',
                                        borderRadius: '16px',
                                        padding: '0 24px', // Horizontal padding for text
                                        background: 'rgba(254, 82, 0, 1)',
                                        border: '1px solid transparent',
                                        backgroundImage: `linear-gradient(rgba(254, 82, 0, 1), rgba(254, 82, 0, 1)), 
                                                          linear-gradient(180deg, #FFA880 0%, #FE5200 100%)`,
                                        backgroundOrigin: 'border-box',
                                        backgroundClip: 'padding-box, border-box',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    <span className="font-montserrat font-extrabold text-[14px] md:text-[18px] text-white" style={{ lineHeight: "140%" }}>
                                        Explore Capabilities
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                </motion.div>

                {/* Main Visual Tool Container */}
                <div className="relative w-full mt-8 sm:mt-14 pb-[100px] sm:pb-[10px]">
                    {/* Floating Cards - Only animate on desktop, simplified */}
                    <motion.div

                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute left-[5%] sm:left-[10%] bottom-[30%] sm:-bottom-[20%] z-20 w-[100px] sm:w-[140px] md:w-[160px] hidden md:block scale-[0.8] will-change-transform"
                        style={{ transform: 'translateZ(0)' }}
                    >
                        <img
                            src={heroCardLeft}
                            alt="ISO Certified Manufacturing"
                            className="w-full h-auto drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                            loading="lazy"
                            decoding="async"
                        />
                    </motion.div>

                    <motion.div

                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute right-8 lg:right-[10%] bottom-[25%] z-20 w-[100px] sm:w-[140px] md:w-[160px] hidden md:block will-change-transform"
                        style={{ transform: 'translateZ(0)' }}
                    >
                        <img
                            src={heroCardRight}
                            alt="Recognized Industrial Supplier"
                            className="w-full h-auto drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                            loading="lazy"
                            decoding="async"
                        />
                    </motion.div>
                </div>
            </div>

            {/* Hammer Image - Bottom Background Overlay */}
            <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -bottom-[100px] sm:bottom-[200px] md:-bottom-[435px] md:left-[74px] md:right-0 left-0 w-full max-w-[1200px] z-[5] will-change-transform"
                style={{ transform: 'translateZ(0)' }}
            >
                <img
                    src={heroImg}
                    alt="Industrial Tool"
                    className="w-full h-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
                    loading="eager"
                    decoding="async"
                />
            </motion.div>

            {/* Bottom Overlap - White Rounded */}
            <div className="absolute bottom-0 left-0 w-full h-4 sm:h-6 md:h-[64px] bg-white rounded-t-[64px] sm:rounded-t-[64px] z-30 shadow-[0_-30px_60px_rgba(0,0,0,0.15)]" />
        </section>
    );
});

Hero.displayName = 'Hero';

export default Hero;
