import React from 'react';
import Badge from './common/Badge';

const NextStepSection: React.FC = () => {
    return (
        <section className="bg-white pb-8 sm:pb-12 px-4 sm:px-6">
            <div
                className="mx-auto max-w-[1095px] min-h-auto gap-[30px] md:gap-[160px] bg-[#fff3ed]/30 rounded-[20px] sm:rounded-[26px] p-5 sm:p-[36px] flex flex-col md:flex-row items-center justify-between shadow-[0_6px_12px_0px_rgba(0,0,0,0.1)]
"

            >
                {/* Left Side Content */}
                <div className="flex-1 space-y-3 sm:space-y-4 w-full">
                    <Badge title="Next Step" />

                    <h2 className="heading">
                        You're Clear on the Process.<br className="hidden sm:block" />Let's Apply It.
                    </h2>

                    <p className=" font-poppins text-[#2e2e2e]/60 font-medium sm:text-sm max-w-full ">
                        Share your component details with confidence, choose the right
                        manufacturing category, provide inputs, and we'll handle the
                        rest with precision.
                    </p>
                </div>

                {/* Right Side Action */}
                <div className="flex flex-col items-center gap-2 sm:gap-[8px] mt-4 sm:mt-0">
                    <p className="text-[#2e2e2e]/80 font-poppins font-[700] text-[11px] sm:text-[12px] text-center">
                        Takes only a few minutes to submit.
                    </p>
                    <button
                        onClick={() => {
                            const contactSection = document.getElementById('contact');
                            if (contactSection) {
                                contactSection.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        className="w-full px-5  py-2.5 sm:px-[76px] sm:py-[16px] rounded-xl font-semibold text-[10px] sm:text-[18px] font-moserrat text-white transition-all duration-300 shadow-[inset_0px_-11px_16px_0px_#FFF3ED4D,0px_4px_16px_0px_#FF5E0080] hover:shadow-[inset_0px_-11px_16px_0px_#FFF3ED4D,0px_4px_16px_0px_#FF5E0080,0_0_0_6px_rgba(254,82,0,0.1)]"
                        style={{
                            background: '#FE5200',
                            border: '1px solid transparent',
                            backgroundImage: `linear-gradient(#FE5200, #FE5200), linear-gradient(180deg, #FFA880 0%, #FE5200 100%)`,
                            backgroundOrigin: 'border-box',
                            backgroundClip: 'padding-box, border-box'
                        }}
                    >
                        Share Your Requirement
                    </button>
                </div>
            </div>
        </section>
    );
};

export default NextStepSection;
