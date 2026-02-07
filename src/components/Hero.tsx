import React from 'react';
import { motion } from 'framer-motion';
import Button from './common/Button';
import { useInViewPort } from '../hooks/useInViewPort';
import oGif from '../assets/gif/o-gif.gif';
import heroImg from '../assets/img/hero-img.png';
import heroBgGif from '../assets/bg/hero-gif.gif';
import heroCardLeft from '../assets/img/hero-card-left.png';
import heroCardRight from '../assets/img/hero-card-right.png';

const Hero: React.FC = () => {
    const { ref: heroRef, isInViewport } = useInViewPort<HTMLElement>();

    return (
        <section id="home" ref={heroRef} className="relative min-h-fit md:min-h-[130vh] bg-black overflow-hidden flex flex-col items-center">
            {/* Background GIF with Overlay - Only plays when in viewport */}
            <div className="absolute inset-0 z-0 opacity-40">
                {isInViewport && (
                    <img
                        src={heroBgGif}
                        alt="Production Background"
                        className="w-full h-full object-cover"
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
            </div>

            {/* Sparkles/Embers background effect */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute bg-brand rounded-full blur-[1px] animate-sparkle"
                        style={{
                            width: Math.random() * 4 + 2 + 'px',
                            height: Math.random() * 4 + 2 + 'px',
                            left: Math.random() * 100 + '%',
                            top: Math.random() * 100 + '%',
                            animationDelay: Math.random() * 5 + 's',
                            animationDuration: Math.random() * 3 + 2 + 's',
                        }}
                    />
                ))}
            </div>

            {/* Smokey Overlay - Rising from burning flames */}
            <div className="absolute bottom-0 left-0 w-full h-[300px] sm:h-[520px] pointer-events-none z-[3] overflow-hidden">
                {/* Hot base glow - simulating heat source */}
                <div className="absolute bottom-0 left-0 w-full h-[100px] sm:h-[170px] bg-gradient-to-t from-[#FF4500]/40 via-brand/25 to-transparent blur-[50px]" />

                {/* Rising smoke wisps - varied sizes and timing for organic feel */}
                {[...Array(10)].map((_, i) => (
                    <div
                        key={`smoke-${i}`}
                        className="absolute rounded-full blur-[120px] animate-smoke"
                        style={{
                            background: i % 2 === 0
                                ? 'radial-gradient(circle, rgba(255,69,0,0.35) 0%, rgba(254,88,10,0.2) 40%, transparent 70%)'
                                : 'radial-gradient(circle, rgba(254,88,10,0.3) 0%, rgba(255,69,0,0.18) 40%, transparent 70%)',
                            width: `${250 + (i % 3) * 80}px`,
                            height: `${180 + (i % 3) * 60}px`,
                            left: `${(i * 11) - 3}%`,
                            bottom: '-100px',
                            animationDelay: `${i * 1.5}s`,
                            animationDuration: `${10 + (i % 4) * 2}s`,
                        }}
                    />
                ))}

                {/* Subtle smoke tendrils - finer detail */}
                {[...Array(6)].map((_, i) => (
                    <div
                        key={`tendril-${i}`}
                        className="absolute rounded-full blur-[80px] animate-smoke opacity-80"
                        style={{
                            background: 'radial-gradient(circle, rgba(178,34,34,0.25) 0%, rgba(254,88,10,0.15) 50%, transparent 80%)',
                            width: '200px',
                            height: '150px',
                            left: `${(i * 18) + 5}%`,
                            bottom: '-60px',
                            animationDelay: `${i * 2.3}s`,
                            animationDuration: '14s',
                        }}
                    />
                ))}
            </div>

            {/* Hero Body Content */}
            <div className="relative z-10 w-full max-w-[1440px] flex flex-col items-center text-center px-4 sm:px-6 pt-20 sm:pt-24 md:pt-32 pb-[120px] sm:pb-[240px]">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 bg-[#FE580A]/10 border border-[#FE580A]/20 rounded-full px-4 sm:px-5 py-2 mb-6 sm:mb-10"
                >
                    <div className="relative w-2 h-2">
                        <div className="absolute inset-0 rounded-full bg-brand" />
                        <div className="absolute inset-0 rounded-full bg-brand animate-ripple" />
                    </div>
                    <span className="text-brand text-[8px] font-semibold md:font-extrabold md:text-xs tracking-widest uppercase">#1 on OEM manufacturing</span>
                </motion.div>

                {/* Main Headline - FORCED TWO LINES */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="font-montserrat max-w-[1200px] text-[18px] md:text-[54px] lg:text-[48px] font-extrabold text-white leading-[1.15] tracking-tight mb-4 md:mb-8 px-2 sm:px-6"
                >
                    <div className="whitespace-nowrap">
                        Complete{' '}
                        <span className="inline-flex items-center align-middle">
                            <div className="relative w-[16px] md:w-[60px] lg:w-[42px] h-[16px] md:h-[60px] lg:h-[42px] mx-0.5 md:mx-1">
                                <img
                                    src={oGif}
                                    alt="O"
                                    className="absolute inset-0 w-full h-full object-cover rounded-full border-[2px] sm:border-[4px] border-white shadow-[0_0_20px_rgba(254,88,10,0.3)]"
                                />
                            </div>
                            EM
                        </span>{' '}
                        Manufacturing
                    </div>
                    <div className="text-white/90">
                        Solutions for Industrial Needs
                    </div>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="max-w-[750px] text-white/40 text-[12px] md:text-[14px] font-medium leading-relaxed mb-8 sm:mb-12"
                >
                    Thirumala Engineering Works is a trusted OEM partner, delivering forged and precision-machined
                    components with end-to-end engineering solutions for industrial brands, all under one roof.
                </motion.p>

                {/* Primary CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <a href="#capabilities">
                        <Button
                            variant="primary"
                            className="px-8 sm:px-12 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-black text-base sm:text-xl"
                        >
                            Explore Capabilities
                        </Button>
                    </a>
                </motion.div>

                {/* Main Visual Tool Container */}
                <div className="relative w-full max-w-[1400px] mt-8 sm:mt-16 pb-[100px] sm:pb-[170px]">

                    {/* Floating Cards - Image Based */}
                    {/* Left Card */}
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute left-[5%] sm:left-[10%] bottom-[30%] sm:bottom-[40%] z-20 w-[100px] sm:w-[140px] md:w-[160px] hidden md:block scale-[0.8]"
                    >
                        <img
                            src={heroCardLeft}
                            alt="ISO Certified Manufacturing"
                            className="w-full h-auto drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                        />
                    </motion.div>

                    {/* Right Card */}
                    <motion.div
                        animate={{ y: [0, 15, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute right-8 lg:right-[10%] bottom-[25%] z-20 w-[100px] sm:w-[140px] md:w-[160px] hidden md:block"
                    >
                        <img
                            src={heroCardRight}
                            alt="Recognized Industrial Supplier"
                            className="w-full h-auto drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                        />
                    </motion.div>
                </div>
            </div>

            {/* Hammer Image - Bottom Background Overlay */}
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute bottom-0 sm:bottom-[200px] md:-bottom-[380px] left-0 sm:-translate-y-1/2 w-full max-w-[1200px] z-[5]"
            >
                <img
                    src={heroImg}
                    alt="Industrial Tool"
                    className="w-full h-auto scale-[0.5] sm:scale-[0.8] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
                />
            </motion.div>

            {/* Bottom Overlap - White Rounded */}
            <div className="absolute bottom-0 left-0 w-full h-4 sm:h-6 md:h-12 bg-white rounded-t-[32px] sm:rounded-t-[64px] z-30 shadow-[0_-30px_60px_rgba(0,0,0,0.15)]" />
        </section>
    );
};

export default Hero;
