import React from 'react';
import SectionWrapper from './common/SectionWrapper';
import Button from './common/Button';

const CTASection: React.FC = () => {
    return (
        <SectionWrapper id="contact" className="bg-white">
            <div className="bg-primary rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-10 md:p-20 text-center relative overflow-hidden">
                {/* Abstract background shapes */}
                <div className="absolute top-0 left-0 w-32 sm:w-64 h-32 sm:h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-32 sm:w-64 h-32 sm:h-64 bg-black/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>

                <div className="relative z-10 max-w-3xl mx-auto">
                    <h2 className="text-xl sm:text-3xl md:text-6xl font-black text-white mb-4 sm:mb-8 leading-tight">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-white/80 text-sm sm:text-xl mb-8 sm:mb-12 px-2 sm:px-0">
                        Connect with our engineering experts today for a free consultation
                        and quote for your manufacturing requirements.
                    </p>
                    <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-6">
                        <Button variant="primary" className="text-xs sm:text-xl px-5 sm:px-12 py-2.5 sm:py-5 font-bold w-full sm:w-auto">
                            Talk to an Expert
                        </Button>
                        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-xs sm:text-xl px-5 sm:px-12 py-2.5 sm:py-5 font-bold w-full sm:w-auto">
                            Download Brochure
                        </Button>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default CTASection;
