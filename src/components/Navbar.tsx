import React, { useState, useEffect, useRef, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './common/Button';
import { cn } from '../lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = memo(() => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    // Use refs to prevent unnecessary re-renders
    const observerRef = useRef<IntersectionObserver | null>(null);

    // Optimized scroll handler with debounce
    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setIsScrolled(window.scrollY > 50);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Optimized section observer
    useEffect(() => {
        const sections = ['home', 'about', 'capabilities', 'testimonials', 'faq'];

        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, {
            root: null,
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0
        });

        sections.forEach((sectionId) => {
            const element = document.getElementById(sectionId);
            if (element && observerRef.current) {
                observerRef.current.observe(element);
            }
        });

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    const navItems = [
        { name: 'HOME', href: '#home', id: 'home' },
        { name: 'ABOUT US', href: '#about', id: 'about' },
        { name: 'CAPABILITIES', href: '#capabilities', id: 'capabilities' },
        { name: 'TESTIMONIALS', href: '#testimonials', id: 'testimonials' },
        { name: "FAQ's", href: '#faq', id: 'faq' }
    ];

    const handleNavClick = useCallback((href: string) => {
        setMobileMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <>
            {/* Sticky Navbar - Optimized */}
            <nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500 will-change-transform",
                    "py-4 sm:py-6 lg:py-8",
                    isScrolled ? "bg-black/30 backdrop-blur-xl md:bg-transparent md:backdrop-blur-none py-3" : "bg-transparent"
                )}
                style={{ transform: 'translateZ(0)' }}
            >
                <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
                    {/* Desktop Layout */}
                    <div className="hidden lg:flex items-center justify-center relative">
                        {/* Logo - GPU accelerated transform */}
                        <div
                            className="flex items-center z-10 will-change-transform"
                            style={{
                                transform: `translateX(${isScrolled ? '-280px' : '-350px'}) scale(${isScrolled ? '0.7' : '1'})`,
                                transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                            }}
                        >
                            <div className="bg-[#0A0A0A] border border-brand/20 p-4 rounded-2xl flex items-center justify-center shadow-2xl">
                                <span className="font-montserrat text-brand font-black text-2xl tracking-tighter">TEW</span>
                            </div>
                        </div>

                        {/* Center Nav Container - GPU accelerated */}
                        <div
                            className="flex items-center justify-center bg-[#0A0A0A]/90 backdrop-blur-xl border border-brand/20 rounded-full absolute left-1/2 will-change-transform"
                            style={{
                                transform: 'translateX(-50%) translateZ(0)',
                                padding: isScrolled ? '12px 160px 12px 110px' : '20px 40px',
                                backgroundColor: isScrolled ? 'rgba(10, 10, 10, 0.32)' : '#0A0A0A',
                                backdropFilter: isScrolled ? 'blur(12px)' : 'blur(0px)',
                                borderRadius: isScrolled ? '12px' : '50px',
                                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                            }}
                        >
                            <div className="flex items-center gap-12">
                                {navItems.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavClick(item.href);
                                        }}
                                        className={cn(
                                            "text-sm font-bold tracking-wide transition-colors hover:text-white relative py-2 whitespace-nowrap",
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
                        </div>

                        {/* Contact Button - GPU accelerated */}
                        <div
                            className="flex items-center z-10 will-change-transform"
                            style={{
                                transform: `translateX(${isScrolled ? '295px' : '450px'}) scale(${isScrolled ? '0.7' : '1'})`,
                                transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                            }}
                        >
                            <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}>
                                <div className="bg-[#0A0A0A]/40 border border-brand/10 p-2 rounded-xl">
                                    <Button
                                        variant="primary"
                                        className="px-10 py-3.5 rounded-xl font-black text-sm text-white"
                                    >
                                        Contact Us
                                    </Button>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Mobile Nav - Fixed white border issue */}
                    <div className="lg:hidden flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="bg-[#0A0A0A] border border-brand/20 p-2 sm:p-4 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-2xl">
                                <span className="font-montserrat text-brand font-black text-md sm:text-2xl tracking-tighter">TEW</span>
                            </div>
                        </div>

                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="bg-[#0A0A0A]/40 border border-brand/10 p-2 rounded-xl text-white will-change-transform active:scale-95 transition-transform"
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
                            transition={{ duration: 0.2 }}
                            className="lg:hidden fixed top-20 left-4 right-4 z-40 bg-[#0A0A0A]/95 backdrop-blur-xl border border-brand/20 rounded-2xl p-6 will-change-transform"
                            style={{ transform: 'translateZ(0)' }}
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
                                        className="text-white font-bold text-sm py-2 px-4 rounded-xl hover:bg-white/10 transition-colors active:scale-95 transform"
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
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
});

Navbar.displayName = 'Navbar';

export default Navbar;
