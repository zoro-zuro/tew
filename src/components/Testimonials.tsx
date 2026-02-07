import React from 'react';
import SectionWrapper from './common/SectionWrapper';
import { Quote } from 'lucide-react';

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



const TestimonialCard = ({ item }: { item: typeof testimonials[0] }) => (
    <div className="bg-white p-5 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border border-brand/20 shadow-sm mb-2 flex flex-col h-full">
        <Quote className="text-brand w-6 h-6 sm:w-8 sm:h-8 mb-3 sm:mb-4 fill-brand opacity-60" />
        <h3 className="text-base sm:text-xl font-bold text-[#1A1A1A] mb-2 sm:mb-3 leading-tight">
            {item.title}
        </h3>
        <p className="text-[#1A1A1A]/60 font-normal leading-relaxed mb-4 sm:mb-6 flex-grow text-xs sm:text-sm">
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
                <h4 className="font-bold text-[#1A1A1A] text-xs sm:text-sm">{item.author}</h4>
                <p className="text-[10px] sm:text-xs font-medium text-gray-400">{item.role}</p>
            </div>
        </div>
    </div>
);

const Testimonials: React.FC = () => {
    return (
        <SectionWrapper id="testimonials" className="bg-white overflow-hidden">
            <div className="text-center mb-10 sm:mb-16 px-4">
                <div className="flex items-center gap-2 bg-brand/5 w-fit px-3 sm:px-4 py-1.5 rounded-full mx-auto mb-4 sm:mb-6">
                    <div className="relative w-2 h-2">
                        <div className="absolute inset-0 rounded-full bg-brand" />
                        <div className="absolute inset-0 rounded-full bg-brand animate-ripple" />
                    </div>
                    <span className="text-black text-[10px] sm:text-xs font-medium">Testimonials</span>
                </div>
                <h2 className="font-montserrat text-xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#1A1A1A] tracking-tight">
                    Trusted by Leading Industrial Brands
                </h2>
            </div>

            {/* Mobile View - Single Row Horizontal Marquee */}
            <div className="sm:hidden relative overflow-hidden px-4">
                {/* Left/Right Faders */}
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

                <div className="animate-marquee flex gap-3 py-2">
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

            {/* Desktop/Tablet View - Marquee */}
            <div
                className="hidden sm:block relative mx-auto overflow-hidden"
                style={{ width: '900px', height: '700px' }}
            >
                {/* Top/Bottom Faders */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent z-20 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none" />

                <div className="grid grid-cols-2 gap-8 h-full">
                    {/* Column 1 - Downwards */}
                    <div className="relative overflow-hidden h-full py-2">
                        <div className="animate-marquee-vertical flex flex-col gap-4">
                            {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
                                <TestimonialCard key={i} item={t} />
                            ))}
                        </div>
                    </div>

                    {/* Column 2 - Reverse/Upwards */}
                    <div className="relative overflow-hidden h-full py-2">
                        <div className="animate-marquee-vertical flex flex-col gap-4 [animation-direction:reverse]">
                            {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
                                <TestimonialCard key={i} item={t} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Testimonials;
