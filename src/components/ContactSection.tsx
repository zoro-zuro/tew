import React, { useState } from 'react';
import SectionWrapper from './common/SectionWrapper';
import { motion } from 'framer-motion';
import Button from './common/Button';
import { cn } from '../lib/utils';
import { ChevronDown } from 'lucide-react';

const requirements = [
    { id: 'forging', label: 'Hot Forging Components' },
    { id: 'machined', label: 'Machined Components' },
    { id: 'custom', label: 'Custom OEM Solutions' }
];

const ContactSection: React.FC = () => {
    const [selectedReq, setSelectedReq] = useState('forging');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const selectedLabel = requirements.find(r => r.id === selectedReq)?.label || '';

    return (
        <SectionWrapper id="contact" dark className="bg-black">
            <div className="mx-auto w-full max-w-[1213px] min-h-auto sm:min-h-[687px] px-4 sm:px-6">
                {/* Top Selector Segment - Hidden on mobile */}
                <div className="hidden sm:block text-center mb-6 sm:mb-12">
                    <h3 className="text-white font-semibold text-base sm:text-lg mb-4 sm:mb-8">Select Manufacturing Requirement</h3>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-12">
                        {requirements.map((req) => (
                            <button
                                key={req.id}
                                onClick={() => setSelectedReq(req.id)}
                                className="group flex items-center gap-3 cursor-pointer justify-center sm:justify-start"
                            >
                                <div className={cn(
                                    "w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all duration-300 flex-shrink-0",
                                    selectedReq === req.id ? "border-brand" : "border-white/30 group-hover:border-white/50"
                                )}>
                                    {selectedReq === req.id && (
                                        <motion.div
                                            layoutId="req-active-dot"
                                            className="w-2 h-2 bg-brand rounded-full"
                                        />
                                    )}
                                </div>
                                <span className={cn(
                                    "text-xs sm:text-sm font-medium transition-colors text-left",
                                    selectedReq === req.id ? "text-white" : "text-white/50 group-hover:text-white/70"
                                )}>
                                    {req.label}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-2 sm:gap-12">
                    {/* Left Column */}
                    <div className="w-full lg:w-[45%] space-y-3 sm:space-y-6">
                        <div className="flex items-center gap-2 bg-brand/5 w-fit px-3 py-1.5 rounded-full">
                            <div className="relative w-2 h-2">
                                <div className="absolute inset-0 rounded-full bg-brand" />
                                <div className="absolute inset-0 rounded-full bg-brand animate-ripple" />
                            </div>
                            <span className="text-white text-xs font-medium">Get a Quote</span>
                        </div>

                        <h2 className="text-lg sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                            {selectedReq === 'forging' ? 'Hot Forging' : selectedReq === 'machined' ? 'Machined' : 'Custom'}<br className="hidden sm:block" />
                            <span className="sm:hidden"> </span>Manufacturing Quote
                        </h2>

                        <p className="text-white/50 font-normal leading-relaxed text-xs sm:text-sm max-w-full sm:max-w-[380px]">
                            Request high-strength forged components in steel, brass, aluminum, or copper — built for industrial durability and performance.
                        </p>

                        {/* Mobile Dropdown - Below title and contact card */}
                        <div className="sm:hidden">
                            <div className="relative">
                                <label className="text-white text-[10px] mb-1 block">Select Type</label>
                                <button
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                    className="w-full flex items-center justify-between bg-white/5 border border-white/20 rounded-lg px-3 py-2 text-white text-xs"
                                >
                                    <span>{selectedLabel}</span>
                                    <ChevronDown size={14} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                                </button>
                                {dropdownOpen && (
                                    <div className="absolute top-full left-0 right-0 mt-1 bg-[#1a1a1a] border border-white/20 rounded-lg overflow-hidden z-10">
                                        {requirements.map((req) => (
                                            <button
                                                key={req.id}
                                                onClick={() => {
                                                    setSelectedReq(req.id);
                                                    setDropdownOpen(false);
                                                }}
                                                className={`w-full text-left px-3 py-2 text-xs transition-colors ${selectedReq === req.id ? 'bg-brand/20 text-brand' : 'text-white/70 hover:bg-white/5'
                                                    }`}
                                            >
                                                {req.label}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Contact Card - Desktop Only */}
                        <div className="hidden sm:block pt-8">
                            <div className="bg-primary/10 border border-primary/30 p-6 rounded-2xl max-w-[280px] space-y-4">
                                <p className="text-white/50 text-xs leading-relaxed">
                                    "Have questions before submitting?<br />
                                    <span className="text-white/70">Talk to our engineering team"</span>
                                </p>
                                <Button variant="primary" className="w-full py-3 rounded-xl font-semibold text-sm">
                                    Contact Us
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="w-full lg:w-[55%] space-y-4 sm:space-y-6">
                        <form className="space-y-3 sm:space-y-5" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-3 sm:space-y-5">
                                {[
                                    { label: 'Company Name', placeholder: 'e.g., ABC Engineering Pvt. Ltd.' },
                                    { label: 'Full Name', placeholder: 'e.g., Ramesh Kumar' },
                                    { label: 'Business Email', placeholder: 'e.g., ramesh@company.com' },
                                    { label: 'Phone Number', placeholder: 'e.g., 9876543210' },
                                    { label: 'Enter City / State / Country', placeholder: 'e.g., Chennai, Tamil Nadu, India' }
                                ].map((field) => (
                                    <div key={field.label} className="space-y-1 sm:space-y-2">
                                        <label className="text-white/90 text-[10px] sm:text-sm font-medium">{field.label}</label>
                                        <input
                                            type="text"
                                            placeholder={field.placeholder}
                                            className="w-full bg-transparent border border-white/20 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white text-xs sm:text-sm placeholder:text-white/30 focus:outline-none focus:border-brand/50 transition-colors"
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="pt-2 sm:pt-4">
                                <Button variant="primary" className="w-full py-2 px-4 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-[10px] sm:text-base">
                                    Get Your Quotation Now
                                </Button>
                            </div>

                            {/* Contact Card - Mobile Only */}
                            <div className="sm:hidden mt-16 mb-4 bg-primary/10 border border-primary/30 p-4 rounded-xl space-y-3">
                                <p className="text-white/50 text-[10px] leading-relaxed">
                                    "Have questions? <span className="text-white/70">Talk to our team"</span>
                                </p>
                                <Button variant="primary" className="w-full py-2.5 rounded-lg font-semibold text-[10px]">
                                    Contact Us
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default ContactSection;
