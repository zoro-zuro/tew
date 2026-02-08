import React, { useState } from 'react';
import SectionWrapper from './common/SectionWrapper';

import { motion, AnimatePresence } from 'framer-motion';
import Badge from './common/Badge';

const faqs = [
    {
        question: "What industries do you serve?",
        answer: "We serve a wide range of industries including automotive, aerospace, heavy machinery, energy, and general engineering sectors that require high-precision forged and machined components."
    },
    {
        question: "Do you provide custom manufacturing?",
        answer: "Yes, we specialize in custom OEM solutions. We work closely with your engineering teams to manufacture components according to your specific technical drawings and quality requirements."
    },
    {
        question: "What materials do you forge?",
        answer: "We work with a variety of materials including carbon steel, alloy steel, stainless steel, aluminum, brass, and copper, depending on the application and strength requirements."
    },
    {
        question: "What is your production capacity?",
        answer: "Our facilities have a combined capacity of over 10,000 tons per year, equipped with advanced forging lines and high-precision CNC machining centers."
    },
    {
        question: "Do you follow quality standards?",
        answer: "Yes, we are ISO certified and follow stringent quality management systems at every stage of production—from raw material inspection to final component testing."
    },
    {
        question: "How can I request a quote?",
        answer: "You can use our online quotation form above or contact our sales team directly with your technical drawings and volume requirements."
    },
    {
        question: "Do you support prototype runs?",
        answer: "Yes, we support prototyping and low-volume initial runs to help clients validate their designs before moving into full-scale mass production."
    },
    {
        question: "How do you ensure manufacturing quality?",
        answer: "We utilize advanced metrology equipment, including CMM and spectral analysis, combined with rigorous in-process checks to ensure every component meets the specified tolerances."
    }
];

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
    return (
        <div className={`mb-3 sm:mb-[16px] border-[2px] border-black/10 rounded-[20px] ${isOpen ? 'shadow-md' : ''}`}>
            <button
                onClick={onClick}
                className="w-full shadow-sm px-4 sm:px-[20px] py-3 sm:py-[12px] flex items-center justify-between group transition-all hover:border-brand/20 text-left"
            >
                <span className="text-[#1A1A1A] font-poppins font-bold sm:font-[700] line-height-700 text-xs sm:text-lg md:text-[20px]">
                    {question}
                </span>

                {isOpen ? (
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="10" y="16" width="16" height="4" rx="2" fill="#2E2E2E" />
                    </svg>

                ) : (
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="10" y="16" width="16" height="4" rx="2" fill="#2E2E2E" />
                        <rect x="20" y="10" width="16" height="4" rx="2" transform="rotate(90 20 10)" fill="#2E2E2E" />
                    </svg>

                )}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="px-4 sm:px-8 py-4 sm:py-6 text-[#1A1A1A]/60 font-medium leading-relaxed border-x border-b border-gray-50 rounded-b-xl sm:rounded-b-2xl -mt-2 bg-white text-xs sm:text-sm">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <SectionWrapper id="faq" className="bg-white relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-16">

                {/* Left: FAQ List - Full width on mobile */}
                <div className="lg:col-span-7 order-2 lg:order-1">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </div>

                {/* Right: Text Content - Sticky on desktop */}
                <div className="lg:col-span-5 order-1 lg:order-2 mb-4 lg:mb-0 relative h-full">
                    <div className="lg:sticky lg:top-24 lg:pl-10">
                        <Badge title="FAQ'S" />

                        <h2 className="heading text-[#2e2e2e]">
                            Answers You Can Trust
                        </h2>

                        <p className="text-[#2e2e2e]/60 font-poppins font-medium md:line-hieght-170 sm:text-[14px]">
                            Clear answers to common questions about our OEM
                            manufacturing capabilities, end-to-end processes, quality
                            assurance practices, and how we work as a reliable
                            manufacturing partner for industrial businesses.
                        </p>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default FAQSection;
