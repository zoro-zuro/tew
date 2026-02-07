import React, { useState } from 'react';
import SectionWrapper from './common/SectionWrapper';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
        <div className="mb-3 sm:mb-4">
            <button
                onClick={onClick}
                className="w-full bg-white border border-gray-200 shadow-sm rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between group transition-all hover:border-brand/20 hover:shadow-md text-left"
            >
                <span className="text-[#1A1A1A] font-bold sm:font-black text-xs sm:text-lg md:text-xl tracking-tight pr-4">
                    {question}
                </span>
                <div className="bg-gray-200 p-1.5 sm:p-2 rounded-lg group-hover:bg-brand/10 transition-colors flex-shrink-0">
                    {isOpen ? (
                        <Minus size={16} className="text-brand sm:w-5 sm:h-5" />
                    ) : (
                        <Plus size={16} className="text-[#1A1A1A]/40 group-hover:text-brand sm:w-5 sm:h-5" />
                    )}
                </div>
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
        <SectionWrapper id="faq" className="bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-16 items-start">
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
                <div className="lg:col-span-5 lg:pl-10 lg:sticky lg:top-24 order-1 lg:order-2 mb-4 lg:mb-0">
                    <div className="flex items-center gap-2 bg-brand/5 w-fit px-3 sm:px-4 py-1.5 rounded-full mb-4 sm:mb-8">
                        <div className="relative w-2 h-2">
                            <div className="absolute inset-0 rounded-full bg-brand" />
                            <div className="absolute inset-0 rounded-full bg-brand animate-ripple" />
                        </div>
                        <span className="text-black text-[10px] sm:text-xs font-medium">FAQ's</span>
                    </div>

                    <h2 className="text-lg sm:text-2xl md:text-[32px] font-black text-[#1A1A1A] leading-tight mb-3 sm:mb-4">
                        Answers You Can Trust
                    </h2>

                    <p className="text-[#1A1A1A]/40 font-medium leading-relaxed text-xs sm:text-sm">
                        Clear answers to common questions about our OEM manufacturing capabilities,
                        end-to-end processes, quality assurance practices, and how we work as a
                        reliable manufacturing partner for industrial businesses.
                    </p>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default FAQSection;
