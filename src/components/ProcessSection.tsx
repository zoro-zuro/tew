import React from 'react';
import SectionWrapper from './common/SectionWrapper';
import Button from './common/Button';
import { CheckCircle2 } from 'lucide-react';

const ProcessSection: React.FC = () => {
    return (
        <SectionWrapper id="process" dark className="bg-dark">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-20 items-center">
                <div>
                    <h2 className="text-xl md:text-5xl font-bold mb-6 sm:mb-8 text-white leading-tight">
                        Our Systematic <span className="text-primary">Manufacturing</span> Process
                    </h2>
                    <div className="space-y-4 sm:space-y-6">
                        <p className="text-white/70 text-base sm:text-lg leading-relaxed">
                            We follow a rigorous six-step process to ensure every component we manufacture
                            meets the exact specifications of our clients.
                        </p>
                        <ul className="space-y-3 sm:space-y-4">
                            {[
                                "Requirements Analysis & Design Review",
                                "Material Selection & Sourcing",
                                "CNC Tooling & Program Setup",
                                "High-Precision Machining",
                                "Rigorous Quality Inspection",
                                "Just-in-Time Packaging & Delivery"
                            ].map((step, idx) => (
                                <li key={idx} className="flex items-center gap-2 sm:gap-3 text-white/90 text-sm sm:text-base">
                                    <CheckCircle2 className="text-primary flex-shrink-0" size={18} />
                                    <span>{step}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="pt-4 sm:pt-6">
                            <Button variant="primary" className="w-full sm:w-auto px-5 py-2.5 text-[10px] sm:text-sm" aria-label="Learn more about our manufacturing process">
                                Learn More About Process
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="relative mt-6 sm:mt-0">
                    <div className="aspect-[4/3] rounded-xl sm:rounded-2xl border-2 border-primary/30 overflow-hidden relative group">
                        {/* TODO: replaceimg - Technical process illustration or factory photo */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
                        <div className="w-full h-full bg-gray-800 flex items-center justify-center text-white/20 italic text-sm sm:text-base">
                            Industrial Process Visualization
                        </div>
                    </div>

                    <div className="absolute -bottom-6 sm:-bottom-10 -left-4 sm:-left-10 bg-white p-4 sm:p-8 rounded-xl hidden sm:block">
                        <p className="text-dark font-bold text-2xl sm:text-4xl mb-1 text-primary">0.02mm</p>
                        <p className="text-gray-500 font-medium whitespace-nowrap text-xs sm:text-base">Average Precision Rating</p>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default ProcessSection;
