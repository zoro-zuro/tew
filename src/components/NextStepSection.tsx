import React from 'react';
import Button from './common/Button';

const NextStepSection: React.FC = () => {
    return (
        <section className="bg-white pb-8 sm:pb-12 px-4 sm:px-6">
            <div
                className="mx-auto bg-[#FFFBF9] rounded-[20px] sm:rounded-[28px] p-5 sm:p-9 flex flex-col md:flex-row items-center justify-between shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
                style={{ maxWidth: '1095px', minHeight: 'auto', gap: '20px' }}
            >
                {/* Left Side Content */}
                <div className="flex-1 space-y-3 sm:space-y-4 w-full">
                    <div className="flex items-center gap-2 bg-brand/5 w-fit px-3 sm:px-4 py-1.5 rounded-full">
                        <div className="relative w-2 h-2">
                            <div className="absolute inset-0 rounded-full bg-brand" />
                            <div className="absolute inset-0 rounded-full bg-brand animate-ripple" />
                        </div>
                        <span className="text-black text-[10px] sm:text-xs font-medium">Next Step</span>
                    </div>

                    <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-[#1A1A1A] leading-tight tracking-tight">
                        You're Clear on the Process.<br className="hidden sm:block" />Let's Apply It.
                    </h2>

                    <p className="text-[#1A1A1A]/50 font-normal leading-relaxed text-xs sm:text-sm max-w-full sm:max-w-[450px]">
                        Share your component details with confidence, choose the right
                        manufacturing category, provide inputs, and we'll handle the
                        rest with precision.
                    </p>
                </div>

                {/* Right Side Action */}
                <div className="flex-1 w-full flex flex-col items-center gap-2 sm:gap-3 mt-4 sm:mt-0">
                    <p className="text-[#1A1A1A] text-[11px] sm:text-[13px] text-center mb-1 font-medium">
                        Takes only a few minutes to submit.
                    </p>
                    <Button
                        variant="primary"
                        className="w-full px-5 sm:px-8 py-2.5 sm:py-4 rounded-xl font-semibold text-[10px] sm:text-sm"
                    >
                        Share Your Requirement
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default NextStepSection;
