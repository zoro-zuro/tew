import React from 'react';
import SectionWrapper from './common/SectionWrapper';

const Comparison: React.FC = () => {
    const features = [
        { name: "Precision Machining", thirumala: true, others: "Standard" },
        { name: "Material Versatility", thirumala: "Full Range (Steel, Al, Ti)", others: "Limited" },
        { name: "Delivery Speed", thirumala: "2x Faster", others: "Industry Standard" },
        { name: "Quality Certification", thirumala: "ISO 9001:2015", others: "Partial" },
        { name: "Customer Support", thirumala: "24/7 Dedicated", others: "Ticketing" },
    ];

    return (
        <SectionWrapper id="comparison" className="bg-white">
            <div className="text-center mb-10 sm:mb-16 px-4">
                <h2 className="text-xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">Why Choose Us?</h2>
                <p className="text-accent-gray text-sm sm:text-lg">See how we compare to standard manufacturing providers</p>
            </div>

            <div className="overflow-x-auto px-4 sm:px-0 -mx-4 sm:mx-0">
                <table className="w-full border-collapse min-w-[500px] sm:min-w-0">
                    <thead>
                        <tr className="border-b-2 border-primary">
                            <th className="py-4 sm:py-6 px-2 sm:px-4 text-left font-bold text-sm sm:text-xl">Service Factor</th>
                            <th className="py-4 sm:py-6 px-2 sm:px-4 text-left font-bold text-sm sm:text-xl text-primary">Thirumala Solutions</th>
                            <th className="py-4 sm:py-6 px-2 sm:px-4 text-left font-bold text-sm sm:text-xl text-accent-gray">Other Providers</th>
                        </tr>
                    </thead>
                    <tbody>
                        {features.map((feature, idx) => (
                            <tr key={idx} className="border-b border-gray-100 hover:bg-light-gray transition-colors">
                                <td className="py-4 sm:py-6 px-2 sm:px-4 font-semibold text-[10px] sm:text-base">{feature.name}</td>
                                <td className="py-4 sm:py-6 px-2 sm:px-4 text-primary font-bold text-[10px] sm:text-base">
                                    {feature.thirumala === true ? "✅ Available" : feature.thirumala}
                                </td>
                                <td className="py-4 sm:py-6 px-2 sm:px-4 text-accent-gray text-[10px] sm:text-base">{feature.others}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </SectionWrapper>
    );
};

export default Comparison;
