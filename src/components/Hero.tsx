import React, { memo, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

import { useInViewPort } from '../hooks/useInViewPort';
import oGif from '../assets/gif/o-gif.gif';
import heroImg from '../assets/img/hero-img.png';
import heroBgGif from '../assets/bg/hero-gif.gif';
import heroCardLeft from '../assets/img/hero-card-left.png';
import heroCardRight from '../assets/img/hero-card-right.png';
import Badge from './common/Badge';

// Separate component for the interactive floating cards
const InteractiveCard = ({ src, alt, className, rotation = 0 }: { src: string, alt: string, className: string, rotation?: number }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    // Motion values for X/Y translation
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Spring physics for smooth movement and return
    const springX = useSpring(x, { stiffness: 150, damping: 20 });
    const springY = useSpring(y, { stiffness: 150, damping: 20 });

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Calculate distance from center
        const distanceX = event.clientX - centerX;
        const distanceY = event.clientY - centerY;

        // Map distance to max 30px movement
        // We use a small factor to ensure we don't hit 30px instantly
        const moveX = Math.max(-30, Math.min(30, distanceX * 0.2));
        const moveY = Math.max(-30, Math.min(30, distanceY * 0.2));

        x.set(moveX);
        y.set(moveY);
    };

    const handleMouseLeave = () => {
        // Return to original position
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                x: springX,
                y: springY,
                rotate: rotation,
                transformStyle: 'preserve-3d'
            }}
            className={className}
        >
            <div className="relative group p-[1px] rounded-[24px]">
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-auto rounded-[24px] relative z-10 scale-0.9 md:scale-[1.7]"
                    style={{
                        backgroundColor: 'rgba(0,0,0,0.2)'
                    }}
                    loading="lazy"
                    decoding="async"
                />
            </div>
        </motion.div>
    );
};

const Hero: React.FC = memo(() => {
    const { ref: heroRef, isInViewport } = useInViewPort<HTMLElement>();

    // Generate static random values once
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
        <section id="home" ref={heroRef} className="relative px-6 md:px-0 min-h-[425px] md:min-h-[780px] bg-black overflow-hidden flex flex-col items-center">
            {/* Background GIF with Overlay */}
            <div className="absolute inset-0 z-0 opacity-40 md:opacity-40 select-none will-change-transform">
                {isInViewport && (
                    <img
                        src={heroBgGif}
                        alt="Production Background"
                        className="w-full h-full object-cover"
                        loading="eager"
                        decoding="async"
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/20 to-black" />
            </div>

            {/* Optimized Sparkles */}
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

            {/* Smokey Overlay */}
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

            {/* Background Visual Cards Layer */}
            <div className="absolute inset-0 z-[2] flex flex-col items-center pointer-events-none overflow-hidden">
                <div className="relative w-full h-full max-w-[1440px] mx-auto">
                    <InteractiveCard
                        src={heroCardLeft}
                        alt="ISO Certified Manufacturing"
                        className="absolute left-[8%] sm:left-[8%] bottom-[8%] sm:bottom-[25%] pointer-events-auto z-20 w-[100px] sm:w-[140px] md:w-[160px] scale-[0.8] md:scale-100"
                        rotation={-5}
                    />
                    <InteractiveCard
                        src={heroCardRight}
                        alt="Recognized Industrial Supplier"
                        className="absolute right-[10px] sm:right-8 lg:right-[10%] top-[55%] md:top-[60%] lg:top-[40%] pointer-events-auto z-20 w-[100px] sm:w-[140px] md:w-[160px] scale-[0.8] md:scale-100"
                        rotation={5}
                    />
                </div>
            </div>

            {/* Hero Body Content */}
            <div className="relative z-10 md:w-full w-[95%] max-w-[1440px] flex flex-col items-center text-center px-4 sm:px-6 pt-20 sm:pt-[77px] pointer-events-none">
                <div className="pointer-events-auto">
                    <Badge title="#1 on OEM manufacturing" textColor='text-white' />
                </div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="font-montserrat max-w-[1200px] text-[16px] md:text-[47px] lg:text-[48px] font-extrabold text-white tracking-tight mb-2 md:mb-[12px] px-2 sm:px-6 pointer-events-auto"
                    style={{ lineHeight: "130%" }}
                >
                    <div className="whitespace-nowrap">
                        Complete{' '}
                        <span className="inline-flex items-center align-middle group cursor-default">
                            <div className="relative w-[16px] md:w-[60px] lg:w-[42px] group-hover:w-[50px] md:group-hover:w-[74px] lg:group-hover:w-[74px] h-[16px] md:h-[60px] lg:h-[42px] mx-0.5 md:mx-1 transition-all duration-500 ease-in-out rounded-full">
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
                    <div className="text-white/90">for Industrial Engineering Needs</div>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="max-w-[750px] font-poppins text-white/40 text-[10px] md:text-[14px] leading-[1.2] md:leading-relaxed text-center md:mb-[36px] mb-2"
                >
                    Thirumala Engineering Works is a trusted OEM partner, delivering forged and precision-machined
                    components with end-to-end engineering solutions for industrial brands, all under one roof.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                    className="pointer-events-auto"
                >
                    <a href="#capabilities" className="group">
                        <div className="relative inline-block">
                            <div style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(5px)', borderRadius: '20px', padding: '6px', display: 'inline-flex' }}>
                                <div
                                    className="transition-all duration-300 shadow-[inset_0px_-11px_16px_0px_rgba(255,243,237,0.3),0px_4px_16px_0px_rgba(255,94,0,0.5)] group-hover:shadow-[inset_0px_-11px_16px_0px_rgba(255,243,237,0.3),0px_6px_24px_0px_rgba(255,94,0,0.7)]"
                                    style={{
                                        minWidth: window.innerWidth < 768 ? '120px' : '140px',
                                        height: window.innerWidth < 768 ? '42px' : '50px',
                                        borderRadius: '16px',
                                        padding: '0 24px',
                                        background: 'rgba(254, 82, 0, 1)',
                                        border: '1px solid transparent',
                                        backgroundImage: `linear-gradient(rgba(254, 82, 0, 1), rgba(254, 82, 0, 1)), linear-gradient(180deg, #FFA880 0%, #FE5200 100%)`,
                                        backgroundOrigin: 'border-box',
                                        backgroundClip: 'padding-box, border-box',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    <span className="font-montserrat font-extrabold text-[12px] md:text-[18px] text-white" style={{ lineHeight: "130%" }}>
                                        Explore Capabilities
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                </motion.div>
            </div>

            {/* Hammer Image */}
            <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -bottom-[140px] sm:-bottom-[120px] md:-bottom-[420px] left-0 md:left-[74px] min-[1340px]:left-[calc(50%-596px)] w-full max-w-[1200px] z-[5] will-change-transform"
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

            {/* Bottom Overlap */}
            <div className="absolute bottom-0 left-0 w-full h-4 sm:h-6 md:h-[64px] bg-white rounded-t-[64px] z-30 shadow-[0_-30px_60px_rgba(0,0,0,0.15)]" />
        </section>
    );
});

Hero.displayName = 'Hero';

export default Hero;
