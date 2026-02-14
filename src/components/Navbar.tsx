import React, { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './common/Button';
import { cn } from '../lib/utils';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/img/logo.png';
import logoContact from '../assets/img/logo_contact.png';

const Navbar: React.FC = memo(() => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const isContactPage = location.pathname === '/contact';

    const currentLogo = isContactPage ? logoContact : logoImg;

    const navItems = [
        { name: 'HOME', href: '#home', id: 'home' },
        { name: 'CAPABILITIES', href: '#capabilities', id: 'capabilities' },
        { name: 'ABOUT US', href: '#about', id: 'about' },
        { name: "FACILITIES", href: '#services', id: 'services' }
    ];

    const handleNavClick = (href: string) => {
        setMobileMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="relative z-50 w-full py-4 sm:py-6 lg:pt-[68px] md:pb-0" style={{ background: isContactPage ? "transparent" : "#000" }}>
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-[88px]">
                {/* Desktop Layout - As shown in image */}
                <div className="hidden lg:flex items-center justify-between">
                    {/* Logo - Left side */}
                    <div className="flex items-center">
                        <img
                            src={currentLogo}
                            alt="TEW Logo"
                            className="h-[50px] w-[72px] sm:h-[68px] sm:w-[98px] object-contain"
                        />
                    </div>


                    {/* Center Pill Nav */}
                    <div className="p-[1px] rounded-[30px]" style={{
                        background: isContactPage
                            ? "rgba(18, 6, 0, 0.05)"
                            : "linear-gradient(to bottom, #2e2e2e, rgba(254, 82, 0, 0.2))",
                        backdropFilter: "blur(8px)",
                        border: "1px solid rgba(0, 0, 0, 0.1)"
                    }}>
                        <div className="flex items-center rounded-[28px] px-[26px] py-[12px] gap-[36px]" style={{
                            background: isContactPage ? "rgba(18, 6, 0, 0.05)" : "#1a1a1a"
                        }}>
                            {navItems.map((item, idx) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick(item.href);
                                    }}
                                    className={cn(
                                        "text-[24px] font-[400] font-bebas transition-all hover:text-white/50 relative px-[12px] py-[8px] letter-spacing-[14%]",
                                        idx === 0 ? "text-white/80" : "text-white/30"
                                    )}
                                    style={{ letterSpacing: "4%", color: isContactPage ? "rgba(0, 0, 0, 0.4)" : "" }}
                                >
                                    {item.name}
                                    {idx === 0 && (
                                        <motion.div
                                            layoutId="nav-indicator"
                                            className="absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden rounded-full"
                                        >
                                            <div className="absolute inset-0 bg-[#FE5200]/20" />
                                            <motion.div
                                                className="absolute top-0 bottom-0 w-full bg-gradient-to-r from-transparent via-[#FE5200] to-transparent"
                                                initial={{ x: '-100%' }}
                                                animate={{ x: ['-100%', '100%', '-100%'] }}
                                                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                            />
                                        </motion.div>
                                    )}
                                </a>
                            ))}
                        </div>
                    </div>


                    {/* Contact Button - Right side (as shown in image) */}
                    <Link to="/contact" className="group">
                        <div className="relative inline-block bg-black/10 rounded-[23px]">


                            <div
                                className="relative rounded-[22px]"
                                style={{
                                    width: '160px', // 138px + 4px left + 4px right
                                    height: '68px', // 50px + 4px top + 4px bottom
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    backdropFilter: 'blur(10px)',
                                    borderRadius: '22px',
                                    padding: '1px',
                                }}
                            >

                                <div
                                    className="absolute inset-0 rounded-[22px]"
                                    style={{
                                        background: 'linear-gradient(45deg, rgba(254, 82, 0, 0.4) 0%, rgba(37, 36, 36, 0.3) 100%)',
                                        borderRadius: '22px',
                                        padding: '1px',
                                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                        WebkitMaskComposite: 'xor',
                                        maskComposite: 'exclude',
                                    }}
                                />
                            </div>


                            <div
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl transition-all duration-300 group-hover:shadow-[inset_0px_-11px_16px_0px_rgba(255,243,237,0.3),0px_5px_20px_0px_rgba(254,82,0,0.6)] shadow-[inset_0px_-11px_16px_0px_rgba(255,243,237,0.3)]"
                                style={{
                                    width: '140px',
                                    height: '50px',
                                    borderRadius: '16px',
                                    padding: '12px 16px',
                                    background: 'rgba(254, 82, 0, 1)',
                                    border: '1px solid transparent',
                                    backgroundImage: `linear-gradient(rgba(254, 82, 0, 1), rgba(254, 82, 0, 1)), 
                                                          linear-gradient(180deg, #FFA880 0%, #FE5200 100%)`,
                                    backgroundOrigin: 'border-box',
                                    backgroundClip: 'padding-box, border-box',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '10px'
                                }}
                            >
                                <span className="font-montserrat font-extrabold text-[18px] text-white" style={{ lineHeight: "140%" }}>
                                    Contact Us
                                </span>
                            </div>

                        </div>

                    </Link>

                    {/* <Link to="/contact">


                        <div className='p-[2px] rounded-[24px] bg-clip-padding bg-gradient-to-bl from-[#fff]/20 to-[#FE5200]/40'>
                            <button className='p-[9px] bg-[#191919] backdrop-blur-5px rounded-[22px] '>
                                <div className=" relative hover:shadow-[inset_0px_-10px_16px_0px_rgba(255,243,237,0.3),0px_5px_20px_0px_rgba(254,82,0,0.6)] p-[1px] before:content-[''] before:absolute before:-inset-[4px] before:rounded-[22px] before:hover:border-[4px] before:border-[#FE5200]/35 rounded-[18px] bg-clip-padding bg-gradient-to-r from-[#FFA880] to-[#FE5200]" >
                                    <div className=" px-[16px] py-[12px] font-montserrat font-extrabold text-[18px] text-white bg-[#FE5200] rounded-[16px] " style={{ lineHeight: "140%", boxShadow: "0px -11px 16px 0px #FFF3ED4D inset" }}>
                                        Contact Us
                                    </div>
                                </div>
                            </button>
                        </div>
                    </Link> */}
                </div>

                {/* Mobile Nav */}
                <div className="lg:hidden flex items-center justify-between">
                    <div className="flex items-center">
                        <img
                            src={currentLogo}
                            alt="TEW Logo"
                            className="h-[50px] w-[72px] sm:h-[68px] sm:w-[98px] object-contain"
                        />
                    </div>

                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="bg-[#0A0A0A]/40 border border-brand/10 p-2 rounded-xl text-white"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div >

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {
                    mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className="lg:hidden fixed top-20 left-4 right-4 z-40 bg-[#0A0A0A]/95 backdrop-blur-xl border border-brand/20 rounded-2xl p-6"
                        >
                            <div className="flex flex-col gap-4">
                                {navItems.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavClick(item.href);
                                        }}
                                        className="text-white font-bold text-sm py-2 px-4 rounded-xl hover:bg-white/10 transition-colors"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                                <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}>
                                    <Button
                                        variant="primary"
                                        className="w-full py-2.5 rounded-xl font-black text-[11px] text-white mt-2"
                                    >
                                        Contact Us
                                    </Button>
                                </a>
                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence >
        </nav >
    );
});

Navbar.displayName = 'Navbar';

export default Navbar;
