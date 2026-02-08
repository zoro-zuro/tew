import React from 'react';
// import { MapPin, Phone, Mail } from 'lucide-react';
import { useInViewPort } from '../hooks/useInViewPort';
import heroBgGif from '../assets/bg/hero-gif.gif';
import logoImg from '../assets/img/logo.png';
const Footer: React.FC = () => {
    const { ref: footerRef, isInViewport } = useInViewPort<HTMLDivElement>();

    return (
        <footer className="relative bg-white pt-8 sm:pt-12 pb-4 sm:pb-12 px-4 sm:px-6 md:px-12">
            <div ref={footerRef} className="relative max-w-[1440px] mx-auto bg-black rounded-[1.5rem] sm:rounded-[36px] overflow-hidden py-8 sm:p-[36px] px-6">
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
                            <div className="flex items-center">
                                <img
                                    src={logoImg}
                                    alt="TEW Logo"
                                    className="h-[50px] w-[72px] sm:h-[68px] sm:w-[98px] object-contain"
                                />
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
                        <div className="flex flex-col gap-2 sm:gap-2">
                            <p className="text-white/90 font-poppins text-xs sm:text-[14px] leading-relaxed" style={{ lineHeight: "145%" }}>
                                Complete OEM manufacturing partner delivering hot forged and precision  machined components for industrial and engineering businesses.
                            </p>
                            <p className="text-white/70 text-[10px] sm:text-[12px] font-poppins font-medium" style={{ lineHeight: "135%" }}>
                                ISO-certified OEM manufacturing for industrial applications.
                            </p>
                        </div>

                        {/* Contact Info */}
                        <div className="flex flex-col gap-2 sm:gap-[12px] mt-[22px]">
                            <div className="flex items-start gap-2 sm:gap-[12px] text-white">

                                <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.72 14.64C2.97461 14.5657 3.24829 14.5957 3.48083 14.7232C3.71338 14.8507 3.88574 15.0654 3.96 15.32C4.03426 15.5746 4.00434 15.8483 3.87681 16.0808C3.74929 16.3134 3.53461 16.4857 3.28 16.56C2.78 16.706 2.42 16.86 2.189 17C2.427 17.143 2.803 17.303 3.325 17.452C4.48 17.782 6.133 18 8 18C9.867 18 11.52 17.782 12.675 17.452C13.198 17.303 13.573 17.143 13.811 17C13.581 16.86 13.221 16.706 12.721 16.56C12.4704 16.4825 12.2603 16.3096 12.136 16.0786C12.0117 15.8476 11.9831 15.577 12.0564 15.3251C12.1298 15.0733 12.2991 14.8603 12.528 14.7321C12.7569 14.604 13.0269 14.5709 13.28 14.64C13.948 14.835 14.56 15.085 15.03 15.406C15.465 15.705 16 16.226 16 17C16 17.783 15.452 18.308 15.01 18.607C14.532 18.929 13.907 19.18 13.224 19.375C11.846 19.77 10 20 8 20C6 20 4.154 19.77 2.776 19.375C2.093 19.18 1.468 18.929 0.99 18.607C0.548 18.307 0 17.783 0 17C0 16.226 0.535 15.705 0.97 15.406C1.44 15.085 2.052 14.835 2.72 14.64ZM8 0C9.98912 0 11.8968 0.790176 13.3033 2.1967C14.7098 3.60322 15.5 5.51088 15.5 7.5C15.5 10.068 14.1 12.156 12.65 13.64C12.0736 14.2239 11.4542 14.7638 10.797 15.255C10.203 15.701 8.845 16.537 8.845 16.537C8.58744 16.6834 8.29626 16.7604 8 16.7604C7.70374 16.7604 7.41256 16.6834 7.155 16.537C6.48106 16.1462 5.82938 15.7182 5.203 15.255C4.54484 14.765 3.92534 14.2251 3.35 13.64C1.9 12.156 0.5 10.068 0.5 7.5C0.5 5.51088 1.29018 3.60322 2.6967 2.1967C4.10322 0.790176 6.01088 0 8 0ZM8 2C6.54131 2 5.14236 2.57946 4.11091 3.61091C3.07946 4.64236 2.5 6.04131 2.5 7.5C2.5 9.316 3.496 10.928 4.78 12.24C5.746 13.228 6.81 13.98 7.547 14.442L8 14.716L8.453 14.442C9.189 13.98 10.254 13.228 11.22 12.241C12.504 10.928 13.5 9.317 13.5 7.5C13.5 6.04131 12.9205 4.64236 11.8891 3.61091C10.8576 2.57946 9.45869 2 8 2ZM8 4.5C8.39397 4.5 8.78407 4.5776 9.14805 4.72836C9.51203 4.87913 9.84274 5.1001 10.1213 5.37868C10.3999 5.65726 10.6209 5.98797 10.7716 6.35195C10.9224 6.71593 11 7.10603 11 7.5C11 7.89397 10.9224 8.28407 10.7716 8.64805C10.6209 9.01203 10.3999 9.34274 10.1213 9.62132C9.84274 9.8999 9.51203 10.1209 9.14805 10.2716C8.78407 10.4224 8.39397 10.5 8 10.5C7.20435 10.5 6.44129 10.1839 5.87868 9.62132C5.31607 9.05871 5 8.29565 5 7.5C5 6.70435 5.31607 5.94129 5.87868 5.37868C6.44129 4.81607 7.20435 4.5 8 4.5ZM8 6.5C7.73478 6.5 7.48043 6.60536 7.29289 6.79289C7.10536 6.98043 7 7.23478 7 7.5C7 7.76522 7.10536 8.01957 7.29289 8.20711C7.48043 8.39464 7.73478 8.5 8 8.5C8.26522 8.5 8.51957 8.39464 8.70711 8.20711C8.89464 8.01957 9 7.76522 9 7.5C9 7.23478 8.89464 6.98043 8.70711 6.79289C8.51957 6.60536 8.26522 6.5 8 6.5Z" fill="white" />
                                </svg>

                                <p className="text-[10px] font-poppins font-semibold sm:text-[14px]">No. 18/152, Guindy Industrial Estate, Chennai – 600032.</p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-[40px]">
                                <div className="flex items-center gap-2 text-white">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.375 1C5.875 1 7.875 5.5 7.875 6C7.875 7 6.375 8 5.875 9C5.375 10 6.375 11 7.375 12C7.765 12.39 9.375 14 10.375 13.5C11.375 13 12.375 11.5 13.375 11.5C13.875 11.5 18.375 13.5 18.375 14C18.375 16 16.875 17.5 15.375 18C13.875 18.5 12.875 18.5 10.875 18C8.875 17.5 7.375 17 4.875 14.5C2.375 12 1.875 10.5 1.375 8.5C0.875 6.5 0.875 5.5 1.375 4C1.875 2.5 3.375 1 5.375 1Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M11.375 5.04004C12.035 5.35004 12.635 5.77004 13.135 6.28004C13.625 6.77004 14.035 7.36004 14.335 8.00004" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.375 1.25C13.785 1.62 15.045 2.35 16.045 3.35C17.035 4.35 17.765 5.6 18.125 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    <p className="text-[10px] font-poppins sm:text-[14px] font-medium">+91 88257 17237</p>
                                </div>
                                <div className="flex items-center gap-2 sm:gap-[12px] text-white">
                                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 2C20 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2ZM18 2L10 6.99L2 2H18ZM18 14H2V4L10 9L18 4V14Z" fill="white" />
                                    </svg>

                                    <p className="text-[10px] font-poppins sm:text-[14px] font-medium">info@thirumalaeng.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Links Section - Right */}
                    <div className="flex-1 flex flex-wrap sm:flex-nowrap justify-start sm:justify-end gap-8 sm:gap-[56px]">
                        {/* Capabilities */}
                        <div className="space-y-2 sm:space-y-[10px]">
                            <h4 className="text-white font-poppins text-xs sm:text-[16px] font-semibold translate-x-[8px]" style={{ lineHeight: "28px" }}>Capabilities</h4>
                            <ul className="space-y-2 sm:space-y-[8px]">
                                {[
                                    { name: 'Hot Forged Components', href: '#capabilities' },
                                    { name: 'Machined Components', href: '#capabilities' },
                                    { name: 'Custom OEM Solutions', href: '#capabilities' },
                                    { name: 'End-to-End Manufacturing', href: '#capabilities' },
                                    { name: 'Quality & Inspection', href: '#capabilities' }
                                ].map((item) => (
                                    <li key={item.name}>
                                        <a href={item.href} className="group flex items-center text-white/60 transition-all duration-300 text-[10px] font-poppins sm:text-[14px] whitespace-nowrap">
                                            <span className="w-2 h-2 rounded-full bg-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                            <span className="transform group-hover:translate-x-1 transition-transform duration-300">{item.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company */}
                        <div className="space-y-2 sm:space-y-[10px]">
                            <h4 className="text-white font-poppins text-xs sm:text-[16px] font-semibold translate-x-[8px]" style={{ lineHeight: "28px" }}>Company</h4>
                            <ul className="space-y-2 sm:space-y-[8px]">
                                {[
                                    { name: 'About Us', href: '#about' },
                                    { name: 'Certifications', href: '#about' },
                                    { name: 'Industries Served', href: '#about' },
                                    { name: 'Careers', href: '#footer' },
                                    { name: 'Contact Us', href: '#contact' }
                                ].map((item) => (
                                    <li key={item.name}>
                                        <a href={item.href} className="group flex items-center text-white/60 hover:text-brand transition-all duration-300 text-[10px] font-poppins sm:text-[14px] whitespace-nowrap">
                                            <span className="w-2 h-2 rounded-full bg-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                            <span className="transform group-hover:translate-x-1 transition-transform duration-300">{item.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Resources */}
                        <div className="space-y-2 sm:space-y-[10px]">
                            <h4 className="text-white font-poppins text-xs sm:text-[16px] font-semibold translate-x-[8px]" style={{ lineHeight: "28px" }}>Resources</h4>
                            <ul className="space-y-2 sm:space-y-[8px]">
                                {[
                                    { name: 'Request a Quote', href: '#contact' },
                                    { name: 'FAQs', href: '#faq' },
                                    { name: 'Supplier Information', href: '#contact' },
                                    { name: 'Privacy Policy', href: '#' },
                                    { name: 'Terms & Conditions', href: '#' }
                                ].map((item) => (
                                    <li key={item.name}>
                                        <a href={item.href} className="group flex items-center text-white/60 hover:text-brand transition-all duration-300 text-[10px] font-poppins sm:text-[14px] whitespace-nowrap">
                                            <span className="w-2 h-2 rounded-full bg-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                            <span className="transform group-hover:translate-x-1 transition-transform duration-300">{item.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="relative z-10 mt-6 sm:mt-[48px] pt-4 sm:pt-[18px] border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
                    <p className="text-white font-poppins text-[10px] sm:text-[14px] text-center sm:text-left" style={{ lineHeight: "28px" }}>
                        © 2025 Thirumala Engineering Works. All rights reserved.
                    </p>
                    <div className="flex gap-4 sm:gap-6">
                        {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map((item) => (
                            <a key={item} href="#" className="text-white font-poppins hover:text-white transition-colors text-[10px] sm:text-[14px]" style={{ lineHeight: "28px" }}>{item}</a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
