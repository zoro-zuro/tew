import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './common/Button';
import { cn } from '../lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Track active section based on scroll position
    useEffect(() => {
        const sections = ['home', 'capabilities', 'about', 'faq', 'testimonials'];
        
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        sections.forEach((sectionId) => {
            const element = document.getElementById(sectionId);
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, []);

    const navItems = [
        { name: 'HOME', href: '#home', id: 'home' },
        { name: 'ABOUT US', href: '#about', id: 'about' },
        { name: 'CAPABILITIES', href: '#capabilities', id: 'capabilities' },
        { name: 'TESTIMONIALS', href: '#testimonials', id: 'testimonials' },
        { name: "FAQ's", href: '#faq', id: 'faq' }
    ];

    return (
        <>
            {/* Sticky Navbar */}
            <nav className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                isScrolled ? "bg-black/30 border-[1px] rounded-2xl sm:rounded-none sm:border-none border-brand/10 m-3 sm:m-0 sm:border-none sm:bg-transparent sm:backdrop-blur-none backdrop-blur-xl py-3" : "bg-transparent py-4 sm:py-6 lg:py-8"
            )}>
                <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
                    {/* Desktop Layout */}
                    <div className="hidden lg:flex items-center justify-center relative">

                        {/* Logo - Outside container initially, moves inside on scroll */}
                        <motion.div
                            className="flex items-center z-10"
                            animate={{
                                x: isScrolled ? -280 : -350,
                                scale: isScrolled ? 0.7 : 1,
                            }}
                            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                        >
                            <div className="bg-[#0A0A0A] border border-brand/20 p-4 rounded-2xl flex items-center justify-center shadow-2xl">
                                <span className="font-montserrat text-brand font-black text-2xl tracking-tighter">TEW</span>
                            </div>
                        </motion.div>

                        {/* Center Nav Container - Extends on scroll to pull in logo/button */}
                        <motion.div
                            className="flex items-center justify-center bg-[#0A0A0A]/90 backdrop-blur-xl border border-brand/20 rounded-full absolute left-1/2 -translate-x-1/2"
                            animate={{
                                paddingLeft: isScrolled ? "110px" : "40px",
                                paddingRight: isScrolled ? "160px" : "40px",
                                paddingTop: isScrolled ? "12px" : "20px",
                                paddingBottom: isScrolled ? "12px" : "20px",
                                backgroundColor: isScrolled ? "#0a0a0a52" : "#0A0A0A",
                                backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
                                borderRadius: isScrolled ? "12px" : "50px",
                            }}
                            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                        >
                            <div className="flex items-center gap-12">
                                {navItems.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className={cn(
                                            "text-sm font-bold tracking-wide transition-all hover:text-white relative py-2 whitespace-nowrap",
                                            activeSection === item.id ? "text-white" : "text-white/40"
                                        )}
                                    >
                                        {item.name}
                                        {activeSection === item.id && (
                                            <motion.div
                                                layoutId="nav-indicator"
                                                className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-brand via-brand/50 to-transparent"
                                                initial={false}
                                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                            />
                                        )}
                                    </a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Contact Button - Outside container initially, moves inside on scroll */}
                        <motion.div
                            className="flex items-center z-10"
                            animate={{
                                x: isScrolled ? 295 : 450,
                                scale: isScrolled ? 0.7 : 1,
                            }}
                            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                        >
                            <a href="#contact">
                                <div className="bg-[#0A0A0A]/40 border border-brand/10 p-2 rounded-xl">
                                    <Button
                                        variant="primary"
                                        className="px-10 py-3.5 rounded-xl font-black text-sm text-white"
                                    >
                                        Contact Us
                                    </Button>
                                </div>
                            </a>
                        </motion.div>
                    </div>

                    {/* Mobile Nav */}
                    <div className="lg:hidden flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center">
                            <div className="bg-[#0A0A0A] border border-brand/20 p-2 sm:p-4 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-2xl">
                                <span className="font-montserrat text-brand font-black text-md sm:text-2xl tracking-tighter">TEW</span>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="bg-[#0A0A0A]/40 border border-brand/10 p-2 rounded-xl text-white"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="lg:hidden fixed top-20 left-4 right-4 z-40 bg-[#0A0A0A]/95 backdrop-blur-xl border border-brand/20 rounded-2xl p-6"
                        >
                            <div className="flex flex-col gap-4">
                                {navItems.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="text-white font-bold text-sm py-2 px-4 rounded-xl hover:bg-white/10 transition-colors"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                                <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                                    <Button
                                        variant="primary"
                                        className="w-full py-2.5 rounded-xl font-black text-[11px] text-white mt-2"
                                    >
                                        Contact Us
                                    </Button>
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
};

export default Navbar;
