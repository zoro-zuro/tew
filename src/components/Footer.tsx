import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useInViewPort } from '../hooks/useInViewPort';
import heroBgGif from '../assets/bg/hero-gif.gif';

const Footer: React.FC = () => {
    const { ref: footerRef, isInViewport } = useInViewPort<HTMLDivElement>();
    
    return (
        <footer className="relative bg-white pt-8 sm:pt-12 pb-8 sm:pb-12 px-4 sm:px-6 md:px-12">
            <div ref={footerRef} className="relative max-w-[1440px] mx-auto bg-black rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden py-8 sm:py-12 px-6 sm:px-16">
                {/* Background GIF with Overlay - Inside Black Card - Only plays when in viewport */}
                <div className="absolute inset-0 z-0 opacity-30">
                    {isInViewport && (
                        <img
                            src={heroBgGif}
                            alt="Footer Background"
                            className="w-full h-full object-cover"
                        />
                    )}
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col lg:flex-row gap-8 sm:gap-16">
                    {/* Brand Section - Left */}
                    <div className="flex flex-col w-full lg:w-auto" style={{ maxWidth: '100%', gap: '16px' }}>
                        {/* Logo */}
                        <div className="flex items-center gap-2 sm:gap-3 lg:gap-[10px]">
                            <div
                                className="bg-[#1A1A1A] border border-white/10 flex items-center justify-center w-[50px] h-[36px] sm:w-[60px] sm:h-[42px] lg:w-[98px] lg:h-[68px] rounded-[10px] sm:rounded-[14px] lg:rounded-[20px] p-1.5 sm:p-2 lg:p-3"
                            >
                                <span
                                    className="text-brand tracking-tighter font-inter font-extrabold text-[16px] sm:text-[20px] lg:text-[36px] leading-none"
                                    style={{
                                        letterSpacing: '-0.05em',
                                        verticalAlign: 'middle'
                                    }}
                                >TEW</span>
                            </div>
                            <div>
                                <h2
                                    className="text-white font-montserrat font-black text-[14px] sm:text-[16px] lg:text-[24px] leading-[130%] lg:leading-[135%] tracking-[0.5%] lg:tracking-[1%]"
                                >
                                    Thirumala<br />Engineering Works
                                </h2>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="flex flex-col gap-2 sm:gap-3">
                            <p className="text-white/50 text-xs sm:text-sm leading-relaxed line-clamp-2">
                                Complete OEM manufacturing partner delivering hot forged and precision-machined components for industrial businesses.
                            </p>
                            <p className="text-white/40 text-[10px] sm:text-xs">
                                ISO-certified OEM manufacturing for industrial applications.
                            </p>
                        </div>

                        {/* Contact Info */}
                        <div className="flex flex-col gap-2 sm:gap-3">
                            <div className="flex items-start gap-2 sm:gap-3 text-white/70">
                                <MapPin className="text-brand mt-0.5 shrink-0" size={12} />
                                <p className="text-[10px] sm:text-xs">No. 18/152, Guindy Industrial Estate, Chennai – 600032.</p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
                                <div className="flex items-center gap-2 text-white/70">
                                    <Phone className="text-brand shrink-0" size={12} />
                                    <p className="text-[10px] sm:text-xs font-medium">+91 88257 17237</p>
                                </div>
                                <div className="flex items-center gap-2 text-white/70">
                                    <Mail className="text-brand shrink-0" size={12} />
                                    <p className="text-[10px] sm:text-xs font-medium">info@thirumalaeng.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Links Section - Right */}
                    <div className="flex-1 flex flex-wrap sm:flex-nowrap justify-start sm:justify-end gap-8 sm:gap-12 lg:gap-20">
                        {/* Capabilities */}
                        <div className="space-y-2 sm:space-y-4">
                            <h4 className="text-white text-xs sm:text-sm font-semibold">Capabilities</h4>
                            <ul className="space-y-2 sm:space-y-3">
                                {[
                                    { name: 'Hot Forged Components', href: '#capabilities' },
                                    { name: 'Machined Components', href: '#capabilities' },
                                    { name: 'Custom OEM Solutions', href: '#capabilities' },
                                    { name: 'End-to-End Manufacturing', href: '#capabilities' },
                                    { name: 'Quality & Inspection', href: '#capabilities' }
                                ].map((item) => (
                                    <li key={item.name}>
                                        <a href={item.href} className="text-white/40 hover:text-brand transition-colors text-[10px] sm:text-xs whitespace-nowrap">{item.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company */}
                        <div className="space-y-2 sm:space-y-4">
                            <h4 className="text-white text-xs sm:text-sm font-semibold">Company</h4>
                            <ul className="space-y-2 sm:space-y-3">
                                {[
                                    { name: 'About Us', href: '#about' },
                                    { name: 'Certifications', href: '#about' },
                                    { name: 'Industries Served', href: '#about' },
                                    { name: 'Careers', href: '#footer' },
                                    { name: 'Contact Us', href: '#contact' }
                                ].map((item) => (
                                    <li key={item.name}>
                                        <a href={item.href} className="text-white/40 hover:text-brand transition-colors text-[10px] sm:text-xs whitespace-nowrap">{item.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Resources */}
                        <div className="space-y-2 sm:space-y-4">
                            <h4 className="text-white text-xs sm:text-sm font-semibold">Resources</h4>
                            <ul className="space-y-2 sm:space-y-3">
                                {[
                                    { name: 'Request a Quote', href: '#contact' },
                                    { name: 'FAQs', href: '#faq' },
                                    { name: 'Supplier Information', href: '#contact' },
                                    { name: 'Privacy Policy', href: '#' },
                                    { name: 'Terms & Conditions', href: '#' }
                                ].map((item) => (
                                    <li key={item.name}>
                                        <a href={item.href} className="text-white/40 hover:text-brand transition-colors text-[10px] sm:text-xs whitespace-nowrap">{item.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="relative z-10 mt-6 sm:mt-10 pt-4 sm:pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
                    <p className="text-white/40 text-[10px] sm:text-xs text-center sm:text-left">
                        © 2025 Thirumala Engineering Works. All rights reserved.
                    </p>
                    <div className="flex gap-4 sm:gap-6">
                        {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map((item) => (
                            <a key={item} href="#" className="text-white/60 hover:text-white transition-colors text-[10px] sm:text-xs">{item}</a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
