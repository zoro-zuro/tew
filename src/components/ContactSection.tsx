import React, { useState } from 'react';
import SectionWrapper from './common/SectionWrapper';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { ChevronDown } from 'lucide-react';
import Badge from './common/Badge';
import { Link } from 'react-router-dom';
import { useMutation } from 'convex/react';
import { api } from '../../convex/_generated/api';

const requirements = [
    { id: 'forging', label: 'Hot Forging Components' },
    { id: 'machined', label: 'Machined Components' },
    { id: 'custom', label: 'Custom OEM Solutions' }
];

const ContactSection: React.FC = () => {
    const saveContact = useMutation(api.contacts.saveContact);
    const [selectedReq, setSelectedReq] = useState('forging');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const [formData, setFormData] = useState({
        companyName: '',
        fullName: '',
        businessEmail: '',
        phoneNumber: '',
        location: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (formStatus === 'submitting') return;

        setFormStatus('submitting');
        try {
            await saveContact({
                ...formData,
                requirement: requirements.find(r => r.id === selectedReq)?.label,
                source: 'contact_section'
            });
            setFormStatus('success');
            setFormData({
                companyName: '',
                fullName: '',
                businessEmail: '',
                phoneNumber: '',
                location: ''
            });
            setTimeout(() => setFormStatus('idle'), 5000);
        } catch (error) {
            console.error('Failed to send quote request:', error);
            setFormStatus('error');
            setTimeout(() => setFormStatus('idle'), 5000);
        }
    };

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
                    <div className="w-full lg:w-[45%] space-y-3 sm:flex sm:flex-col sm:items-start sm:justify-between">
                        <div className="flex flex-col w-full">
                            <Badge title='Get a Quote' textColor='text-white' />

                            <h2 className="heading">
                                {selectedReq === 'forging' ? 'Hot Forging' : selectedReq === 'machined' ? 'Machined' : 'Custom'}<br className="hidden sm:block" />
                                <span className="sm:hidden"> </span>Manufacturing Quote
                            </h2>

                            <p className="font-poppins text-white/60 font-medium leading-relaxed text-xs sm:text-[14px] max-w-full ">
                                Request high-strength forged components in steel, brass, aluminum, or copper — built for industrial durability and performance.
                            </p>

                            {/* Mobile Dropdown - Below title and contact card */}
                            <div className="sm:hidden">
                                <div className="relative">
                                    <label className="text-white text-[10px] mb-1 block">Select Type</label>
                                    <button
                                        type="button"
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
                                                    type="button"
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
                        </div>


                        {/* Contact Card - Desktop Only */}
                        <div className="hidden sm:block justify-self-end">
                            <div className="flex flex-col border border-primary/10 p-[16px] rounded-[16px] w-fit gap-[16px]" style={{ background: "#FF5E000D", }}>
                                <p className="font-poppins font-medium text-white/60 text-[14px]" style={{ lineHeight: "170%" }}>
                                    "Have questions before submitting?<br />
                                    Talk to our engineering team"
                                </p>
                                <Link to="/contact">
                                    <button
                                        type="button"
                                        className="relative w-full font-montserrat py-[12px] rounded-[16px] font-semibold text-[16px] text-white transition-all duration-300 shadow-[inset_0px_-11px_16px_0px_rgba(255,243,237,0.3),0px_4px_16px_0px_rgba(255,94,0,0.4)] hover:shadow-[inset_0px_-11px_16px_0px_rgba(255,243,237,0.3),0px_5px_20px_0px_rgba(254,82,0,0.6)] before:content-[''] before:absolute before:-inset-[4px] before:rounded-[20px] before:hover:border-[4px] before:border-[#FE5200]/35"
                                        style={{
                                            background: '#FE5200',
                                            border: '1px solid transparent',
                                            backgroundImage: `linear-gradient(#FE5200, #FE5200), linear-gradient(180deg, #FFA880 0%, #FE5200 100%)`,
                                            backgroundOrigin: 'border-box',
                                            backgroundClip: 'padding-box, border-box'
                                        }}
                                    >
                                        Contact Us
                                    </button>
                                </Link>

                            </div>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="w-full lg:w-[55%] space-y-3 sm:space-y-6">
                        <form className="space-y-2.5 sm:space-y-5" onSubmit={handleSubmit}>
                            <div className="space-y-3 sm:space-y-4">
                                {[
                                    { label: 'Company Name', name: 'companyName', placeholder: 'e.g., ABC Engineering Pvt. Ltd.' },
                                    { label: 'Full Name', name: 'fullName', placeholder: 'e.g., Ramesh Kumar' },
                                    { label: 'Business Email', name: 'businessEmail', placeholder: 'e.g., ramesh@company.com', type: 'email' },
                                    { label: 'Phone Number', name: 'phoneNumber', placeholder: 'e.g., 9876543210', type: 'tel' },
                                    { label: 'Enter City / State / Country', name: 'location', placeholder: 'e.g., Chennai, Tamil Nadu, India' }
                                ].map((field) => (
                                    <div key={field.name} className="space-y-1 sm:space-y-1.5">
                                        <label className="text-white/90 text-[10px] sm:text-xs font-medium uppercase tracking-wider">{field.label}</label>
                                        <input
                                            type={field.type || 'text'}
                                            name={field.name}
                                            required
                                            value={(formData as any)[field.name]}
                                            onChange={handleInputChange}
                                            placeholder={field.placeholder}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-white text-xs sm:text-sm placeholder:text-white/20 focus:outline-none focus:border-brand/40 transition-all"
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="pt-2 sm:pt-4">
                                <button
                                    type="submit"
                                    disabled={formStatus === 'submitting'}
                                    className={cn(
                                        "relative w-full py-2.5 px-4 sm:py-3.5 rounded-lg sm:rounded-xl font-bold text-[10px] sm:text-[18px] font-montserrat font-extrabold leading-[145%] tracking-widest text-white transition-all duration-300 disabled:opacity-50",
                                        "before:content-[''] before:absolute before:-inset-[4px] before:rounded-[12px] sm:before:rounded-[16px] before:transition-all before:duration-300 before:hover:border-[4px]",
                                        formStatus === 'success'
                                            ? "before:border-[#22c55e]/35 shadow-[0px_4px_16px_0px_rgba(34,197,94,0.4)]"
                                            : "before:border-[#FE5200]/35 shadow-[0px_4px_16px_0px_rgba(255,94,0,0.4)]"
                                    )}
                                    style={{
                                        background: formStatus === 'success' ? '#22c55e' : '#FE5200',
                                        border: '1px solid transparent',
                                        backgroundImage: formStatus === 'success'
                                            ? 'linear-gradient(#22c55e, #22c55e), linear-gradient(180deg, #86efac 0%, #22c55e 100%)'
                                            : `linear-gradient(#FE5200, #FE5200), linear-gradient(180deg, #FFA880 0%, #FE5200 100%)`,
                                        backgroundOrigin: 'border-box',
                                        backgroundClip: 'padding-box, border-box',
                                        boxShadow: formStatus === 'success'
                                            ? 'inset 0px -11px 16px 0px rgba(134, 239, 172, 0.3)'
                                            : 'inset 0px -11px 16px 0px rgba(255, 243, 237, 0.3)'
                                    }}
                                >
                                    {formStatus === 'idle' && "Get Your Quotation Now"}
                                    {formStatus === 'submitting' && (
                                        <div className="flex gap-1 justify-center items-center h-[24px]">
                                            {[0, 1, 2].map((i) => (
                                                <motion.div
                                                    key={i}
                                                    className="w-1.5 h-1.5 bg-white rounded-full"
                                                    animate={{ y: [0, -6, 0] }}
                                                    transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
                                                />
                                            ))}
                                        </div>
                                    )}
                                    {formStatus === 'success' && "Check Your Inbox"}
                                    {formStatus === 'error' && "Error! Try Again"}
                                </button>
                            </div>

                            {/* Contact Card - Mobile Only */}
                            <div className="sm:hidden mt-6 mb-2 bg-primary/10 border border-primary/30 p-4 rounded-xl space-y-3">
                                <p className="text-white/50 text-[10px] leading-relaxed">
                                    "Have questions? <span className="text-white/70">Talk to our team"</span>
                                </p>
                                <Link to="/contact">
                                    <button
                                        type="button"
                                        className="relative w-full py-2.5 rounded-lg font-semibold text-[10px] text-white transition-all duration-300 shadow-[inset_0px_-11px_16px_0px_rgba(255,243,237,0.3),0px_2px_12px_0px_rgba(255,94,0,0.3)] hover:shadow-[inset_0px_-11px_16px_0px_rgba(255,243,237,0.3),0px_5px_20px_0px_rgba(254,82,0,0.6)] before:content-[''] before:absolute before:-inset-[4px] before:rounded-[20px] before:hover:border-[4px] before:border-[#FE5200]/35 active:scale-95"
                                        style={{
                                            background: '#FE5200',
                                            border: '1px solid transparent',
                                            backgroundImage: `linear-gradient(#FE5200, #FE5200), linear-gradient(180deg, #FFA880 0%, #FE5200 100%)`,
                                            backgroundOrigin: 'border-box',
                                            backgroundClip: 'padding-box, border-box'
                                        }}
                                    >
                                        Contact Us
                                    </button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default ContactSection;
