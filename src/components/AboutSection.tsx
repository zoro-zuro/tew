import React, { memo } from 'react';
import Button from './common/Button';
import { useInViewPort } from '../hooks/useInViewPort';
import testimonyGif from '../assets/gif/testimony-gif.gif';
import happyCustomerIcon from '../assets/img/happycustomer.png';
import tonsYearsIcon from '../assets/img/tonsyears.png';
import machinesIcon from '../assets/img/machines.png';
import companiesLogo from '../assets/img/companies-logo.png';
import ashokLeylandLogo from '../assets/img/marquee-logos/ashok_leyland_logo.svg.png';
import larsenToubroLogo from '../assets/img/marquee-logos/larsen__toubro_logo.svg.png';
import tataSteelLogo from '../assets/img/marquee-logos/tata_steel_logo.svg.png';
import tvsLogo from '../assets/img/marquee-logos/tvs_motor_company_logo.svg.png';
import bajajLogo from '../assets/img/marquee-logos/bajaj_auto_ltd_logo.svg.png';
import boschLogo from '../assets/img/marquee-logos/bosch_india_logo.svg.png';

// Static data outside component
const logos = [
    { src: ashokLeylandLogo, alt: 'Ashok Leyland' },
    { src: larsenToubroLogo, alt: 'Larsen & Toubro' },
    { src: tataSteelLogo, alt: 'Tata Steel' },
    { src: tvsLogo, alt: 'TVS' },
    { src: bajajLogo, alt: 'Bajaj' },
    { src: boschLogo, alt: 'Bosch' },
];

const AboutSection: React.FC = memo(() => {
    const { ref: sectionRef, isInViewport } = useInViewPort<HTMLElement>();

    return (
        <section id="about" ref={sectionRef} className="relative bg-white pt-8 sm:pt-16">
            {/* Stats Bar Component */}
            <div className="max-w-[1050px] mx-auto -translate-y-1/2 sm:-translate-y-1/2 relative z-30 px-4 sm:px-6">
                <div className="relative bg-gradient-to-b from-brand/25 via-brand/5 to-transparent backdrop-blur-sm rounded-[1.5rem] sm:rounded-[2rem] p-4 sm:p-8 md:p-10 overflow-hidden">
                    {/* Border decorations */}
                    <div className="absolute top-0 left-[1rem] sm:left-[2rem] right-[1rem] sm:right-[2rem] h-[1px] bg-brand/40" />
                    <div className="absolute top-0 left-0 w-[1rem] sm:w-[2rem] h-[1rem] sm:h-[2rem] border-t border-l border-brand/40 rounded-tl-[1.5rem] sm:rounded-tl-[2rem]" />
                    <div className="absolute top-0 right-0 w-[1rem] sm:w-[2rem] h-[1rem] sm:h-[2rem] border-t border-r border-brand/40 rounded-tr-[1.5rem] sm:rounded-tr-[2rem]" />
                    <div className="absolute top-[1rem] sm:top-[2rem] left-0 w-[1px] h-[calc(50%-1rem)] sm:h-[calc(50%-2rem)] bg-gradient-to-b from-brand/40 to-transparent" />
                    <div className="absolute top-[1rem] sm:top-[2rem] right-0 w-[1px] h-[calc(50%-1rem)] sm:h-[calc(50%-2rem)] bg-gradient-to-b from-brand/40 to-transparent" />
                    
                    {/* Stats Grid */}
                    <div className="flex flex-row items-center justify-center gap-3 sm:gap-[30px] md:gap-[100px] w-full px-2 sm:px-[41px]">
                        <div className="flex items-center gap-2 sm:gap-5 flex-1 justify-center">
                            <div className="w-8 sm:w-[78px] h-8 sm:h-[78px] flex items-center justify-center flex-shrink-0">
                                <img src={happyCustomerIcon} alt="Happy Clients" className="w-full h-full object-contain" loading="lazy" decoding="async" />
                            </div>
                            <div className="flex flex-col items-start">
                                <h3 className="text-lg sm:text-[40px] font-[700] text-brand leading-none">500+</h3>
                                <p className="text-gray-500 font-medium text-[10px] sm:text-base">Clients</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 sm:gap-5 flex-1 justify-center">
                            <div className="w-8 sm:w-[78px] h-8 sm:h-[78px] flex items-center justify-center flex-shrink-0">
                                <img src={tonsYearsIcon} alt="Tons Per Year" className="w-full h-full object-contain" loading="lazy" decoding="async" />
                            </div>
                            <div className="flex flex-col items-start">
                                <h3 className="text-base sm:text-[30px] font-[700] text-brand leading-none">10k+</h3>
                                <p className="text-gray-500 font-medium text-[10px] sm:text-base">Tons/Yr</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 sm:gap-5 flex-1 justify-center">
                            <div className="w-8 sm:w-[78px] h-8 sm:h-[78px] flex items-center justify-center flex-shrink-0">
                                <img src={machinesIcon} alt="Machines" className="w-full h-full object-contain" loading="lazy" decoding="async" />
                            </div>
                            <div className="flex flex-col items-start">
                                <h3 className="text-lg sm:text-[40px] font-[700] text-brand leading-none">100+</h3>
                                <p className="text-gray-500 font-medium text-[10px] sm:text-base">Machines</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
                <div className="flex flex-col md:flex-row gap-8 sm:gap-8 items-start">
                    <div className="w-full md:w-[60%] space-y-3 sm:space-y-6 pt-2 sm:pt-4">
                        <div className="flex items-center gap-2 bg-brand/5 w-fit px-3 sm:px-4 py-1.5 rounded-full">
                            <div className="relative w-2 h-2">
                                <div className="absolute inset-0 rounded-full bg-brand" />
                                <div className="absolute inset-0 rounded-full bg-brand animate-ripple" />
                            </div>
                            <span className="text-black text-[10px] sm:text-xs font-medium">About Thirumala</span>
                        </div>

                        <h2 className="font-montserrat text-[18px] sm:text-[30px] font-bold text-[#1A1A1A] leading-[1.3] tracking-tight">
                            Your Reliable OEM Manufacturing Partner
                        </h2>

                        <div className="space-y-3 sm:space-y-4 text-[#1A1A1A]/70 font-normal leading-relaxed max-w-[560px] text-[11px] sm:text-[15px]">
                            <p className="line-clamp-2 sm:line-clamp-none">
                                Thirumala Engineering Works is a complete OEM manufacturing company built to
                                serve industries that require precision, scale, and consistency. We specialize in
                                delivering high-quality forged and machined components for engineering brands,
                                manufacturers, and industrial enterprises.
                            </p>
                            <p className="hidden sm:block">
                                With a fully equipped in-house infrastructure of forging units, machining facilities, and
                                quality control systems, we offer end-to-end manufacturing under one roof reducing
                                dependency, lead time, and operational risk for our clients.
                            </p>
                        </div>

                        <div className="pt-2 sm:pt-4 flex flex-row items-center gap-3 sm:gap-8">
                            <Button variant="primary" className="px-4 sm:px-8 py-2 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-[10px] sm:text-sm whitespace-nowrap">
                                Know Us More
                            </Button>

                            <div className="flex flex-col items-start">
                                <p className="text-[8px] sm:text-[10px] font-bold text-black/50 uppercase tracking-[0.15em]">100+ Clients</p>
                                <img src={companiesLogo} alt="Manufacturing Clients" className="h-[28px] sm:h-[50px] w-[auto] object-contain translate-x-[-2px] sm:translate-x-[-8px] drop-shadow-sm" loading="lazy" decoding="async" />
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:block w-full md:w-[calc(40%)] h-[300px] sm:h-[448px] relative mt-8 sm:mt-0">
                        <div className="relative rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
                            {isInViewport && (
                                <img src={testimonyGif} alt="Factory Process" className="w-full h-[300px] sm:h-[448px] object-cover" loading="lazy" decoding="async" />
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Marquee - Optimized with CSS transform */}
            <div className="relative w-full h-[60px] sm:h-[88px] overflow-hidden mt-12 sm:mt-16 will-change-transform" style={{ transform: 'translateZ(0)' }}>
                <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

                <div className="flex items-center h-full animate-marquee whitespace-nowrap will-change-transform" style={{ transform: 'translateZ(0)' }}>
                    {[...Array(4)].map((_, setIndex) => (
                        <div key={setIndex} className="flex items-center gap-8 sm:gap-24 px-4 sm:px-12 shrink-0">
                            {logos.map((logo, idx) => (
                                <img key={`${setIndex}-${idx}`} src={logo.src} alt={logo.alt} className="h-5 sm:h-12 w-auto object-contain opacity-90 sm:grayscale sm:opacity-60 sm:hover:grayscale-0 sm:hover:opacity-100 transition-all duration-300" loading="lazy" decoding="async" />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});

AboutSection.displayName = 'AboutSection';

export default AboutSection;
