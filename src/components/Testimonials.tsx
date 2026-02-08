import React, { memo } from 'react';
import SectionWrapper from './common/SectionWrapper';
import { Quote } from 'lucide-react';
import Badge from './common/Badge';

const testimonials = [
    {
        title: "A manufacturing partner we can rely on.",
        text: "Working with Thirumala has simplified our sourcing process. Their ability to handle forging and machining under one roof has reduced lead times and improved production consistency.",
        author: "Tata Engineering",
        role: "OEM Manufacturing Partner",
        logo: "/src/assets/img/companies/tata.svg",
        brandColor: "#0078C1"
    },
    {
        title: "Precision at its best.",
        text: "The components delivered were within microns of tolerance. Their technical expertise helped us optimize our final assembly line performance significantly.",
        author: "Reliance Industry",
        role: "Strategic Component Partner",
        logo: "/src/assets/img/companies/relianceindustrieslimited.svg",
        brandColor: "#0072C6"
    },
    {
        title: "Scale without compromising quality.",
        text: "We needed 50,000 units in 30 days. Thirumala did not just deliver on time but every single piece passed our intensive quality audit on the first go.",
        author: "Mahindra & Mahindra",
        role: "Automotive Supplier",
        logo: "/src/assets/img/companies/mahindra.svg",
        brandColor: "#C41230"
    }
];

const TestimonialCard = memo(({ item }: { item: typeof testimonials[0] }) => (
    <div className="bg-[#fffdfb]  p-5 sm:p-[16px] rounded-[1.5rem] sm:rounded-[16px] border border-brand/30 shadow-sm mb-2 flex flex-col h-full">
        <h3 className='text-[48px] font-montserrat font-bold text-primary'>“</h3>
        <h3 className="heading mb-[12px] text-[24px] text-[#2e2e2e]" style={{ lineHeight: "140%" }}>
            {item.title}
        </h3>
        <p className="text-[#2e2e2e]/70 font-poppins font-regular mb-4 sm:mb-[20px] flex-grow text-xs sm:text-[16px]" style={{ lineHeight: "140%" }}>
            {item.text}
        </p>
        <div className="flex items-center gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-gray-50">
            <div
                className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg p-1 sm:p-1.5"
                style={{ backgroundColor: item.brandColor + '15' }}
            >
                <div
                    className="w-full h-full"
                    style={{
                        maskImage: `url(${item.logo})`,
                        WebkitMaskImage: `url(${item.logo})`,
                        maskSize: 'contain',
                        WebkitMaskSize: 'contain',
                        maskRepeat: 'no-repeat',
                        WebkitMaskRepeat: 'no-repeat',
                        maskPosition: 'center',
                        WebkitMaskPosition: 'center',
                        backgroundColor: item.brandColor
                    }}
                />
            </div>
            <div>
                <h4 className="font-semibold text-[#2e2e2e] text-xs sm:text-[16px] font-poppins" style={{ lineHeight: "140%" }}>{item.author}</h4>
                <p className="text-[10px] text-[#2e2e2e]/40 sm:text-[12px] font-medium text-gray-400 font-poppins" style={{ lineHeight: "140%" }}>{item.role}</p>
            </div>
        </div>
    </div>
));

TestimonialCard.displayName = 'TestimonialCard';

const Testimonials: React.FC = memo(() => {
    return (
        <SectionWrapper id="testimonials" className="bg-white overflow-hidden">
            <div className="felx flex-col items-center justify-center w-full inline-flex text-center mb-[26px] px-4">
                <Badge title="Testimonials" />
                <h2 className="heading">
                    Trusted by Leading Industrial Brands
                </h2>
            </div>

            {/* Mobile View - Single Row Horizontal Marquee - Optimized */}
            <div className="sm:hidden relative overflow-hidden px-4 will-change-transform" style={{ transform: 'translateZ(0)' }}>
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

                <div className="animate-marquee flex gap-3 py-2 will-change-transform" style={{ transform: 'translateZ(0)' }}>
                    {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((item, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 w-[220px] bg-white p-3 rounded-lg border border-brand/10 shadow-sm"
                        >
                            <Quote className="text-brand w-3 h-3 mb-1.5 fill-brand opacity-50" />
                            <h3 className="text-xs font-bold text-[#1A1A1A] mb-1 leading-tight line-clamp-1">
                                {item.title}
                            </h3>
                            <p className="text-[#1A1A1A]/60 font-normal leading-snug mb-2 text-[10px] line-clamp-2">
                                {item.text}
                            </p>
                            <div className="flex items-center gap-1.5 pt-1.5 border-t border-gray-50">
                                <div
                                    className="w-5 h-5 flex items-center justify-center rounded p-0.5"
                                    style={{ backgroundColor: item.brandColor + '15' }}
                                >
                                    <div
                                        className="w-full h-full"
                                        style={{
                                            maskImage: `url(${item.logo})`,
                                            WebkitMaskImage: `url(${item.logo})`,
                                            maskSize: 'contain',
                                            WebkitMaskSize: 'contain',
                                            maskRepeat: 'no-repeat',
                                            WebkitMaskRepeat: 'no-repeat',
                                            maskPosition: 'center',
                                            WebkitMaskPosition: 'center',
                                            backgroundColor: item.brandColor
                                        }}
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#1A1A1A] text-[10px]">{item.author}</h4>
                                    <p className="text-[8px] font-medium text-gray-400">{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Desktop/Tablet View - Marquee - GPU Accelerated */}
            <div
                className="hidden sm:block relative mx-auto overflow-hidden will-change-transform"
                style={{ width: '900px', height: '700px', transform: 'translateZ(0)' }}
            >
                <div className="absolute top-0 left-0 right-0 h-[88px] bg-gradient-to-b from-white to-transparent z-20 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-[88px] bg-gradient-to-t from-white to-transparent z-20 pointer-events-none" />

                <div className="grid grid-cols-2 gap-8 h-full">
                    <div className="relative overflow-hidden h-full py-2">
                        <div className="animate-marquee-vertical flex flex-col gap-4 will-change-transform" style={{ transform: 'translateZ(0)' }}>
                            {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
                                <TestimonialCard key={i} item={t} />
                            ))}
                        </div>
                    </div>

                    <div className="relative overflow-hidden h-full py-2">
                        <div className="animate-marquee-vertical flex flex-col gap-4 [animation-direction:reverse] will-change-transform" style={{ transform: 'translateZ(0)' }}>
                            {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
                                <TestimonialCard key={i} item={t} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
});

Testimonials.displayName = 'Testimonials';

export default Testimonials;
