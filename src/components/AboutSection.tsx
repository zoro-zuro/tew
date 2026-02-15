import React, { memo } from 'react';

import { useInViewPort } from '../hooks/useInViewPort';
import testimonyGif from '../assets/gif/testimony-gif.gif';
import happyCustomerIcon from '../assets/img/happycustomer.png';
import tonsYearsIcon from '../assets/img/tonsyears.png';
import machinesIcon from '../assets/img/machines.png';
import companiesLogo from '../assets/img/companies-logo.png';
import ashokLeylandLogo from '../assets/img/marquee-logos/ashok_leyland_logo.svg.png';
import larsenToubroLogo from '../assets/img/marquee-logos/larsen__toubro_logo.svg.png';
import tataSteelLogo from '../assets/img/marquee-logos/tata_steel_logo.svg.png';
import tvsLogo from '../assets/img/marquee-logos/tvs_motor_company_logo.svg.png';
import bajajLogo from '../assets/img/marquee-logos/bajaj_auto_ltd_logo.svg.png';
import boschLogo from '../assets/img/marquee-logos/bosch_india_logo.svg.png';
import experienceBadge from '../assets/img/experience-badge.png';

import locationLogo from '../assets/img/location-log.png';

// Static data outside component
const logos = [
    { src: ashokLeylandLogo, alt: 'Ashok Leyland' },
    { src: larsenToubroLogo, alt: 'Larsen & Toubro' },
    { src: tataSteelLogo, alt: 'Tata Steel' },
    { src: tvsLogo, alt: 'TVS' },
    { src: bajajLogo, alt: 'Bajaj' },
    { src: boschLogo, alt: 'Bosch' },
];

const AboutSection: React.FC = memo(() => {
    const { ref: sectionRef, isInViewport } = useInViewPort<HTMLElement>();

    return (
        <section id="about" ref={sectionRef} className="relative bg-white pt-4 sm:pt-[64px]">
            {/* Stats Bar Component */}
            <div className="max-w-[1050px] mx-auto -translate-y-1/2 sm:-translate-y-1/2 relative z-30 px-4 sm:px-6 ">
                <div className="relative bg-gradient-to-b from-brand/25 via-brand/5 to-transparent backdrop-blur-sm rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden mt-4 sm:mt-[64px]">
                    {/* Border decorations */}
                    <div className="absolute top-0 left-[1rem] sm:left-[2rem] right-[1rem] sm:right-[2rem] h-[2px] bg-brand/40" />
                    <div className="absolute top-0 left-0 w-[1rem] sm:w-[2rem] h-[1rem] sm:h-[2rem] border-t-2 border-l-2 border-brand/40 rounded-tl-[1.5rem] sm:rounded-tl-[2rem]" />
                    <div className="absolute top-0 right-0 w-[1rem] sm:w-[2rem] h-[1rem] sm:h-[2rem] border-t-2 border-r-2 border-brand/40 rounded-tr-[1.5rem] sm:rounded-tr-[2rem]" />
                    <div className="absolute top-[1rem] sm:top-[2rem] left-0 w-[2px] h-[calc(80%-1rem)] sm:h-[calc(80%-2rem)] bg-gradient-to-b from-brand/40 to-transparent" />
                    <div className="absolute top-[1rem] sm:top-[2rem] right-0 w-[2px] h-[calc(80%-1rem)] sm:h-[calc(80%-2rem)] bg-gradient-to-b from-brand/40 to-transparent" />

                    {/* Stats Grid */}
                    {/* Stats Grid */}
                    <div className="flex flex-row items-center justify-center gap-0 sm:gap-[30px] md:gap-[128px] w-full py-2 px-1 sm:p-[64px]">
                        <div className="flex items-center gap-1 sm:gap-[24px] flex-1 justify-center w-full">
                            <div className="w-5 sm:w-[78px] h-5 sm:h-[78px] flex items-center justify-center flex-shrink-0">
                                <img src={happyCustomerIcon} alt="Happy Clients" className="w-full h-full object-contain" loading="lazy" decoding="async" />
                            </div>
                            <div className="flex flex-col items-start gap-0.5 sm:gap-[8px] font-poppins">
                                <h3 className="text-[10px] sm:text-[40px] font-bold text-brand leading-none">500+</h3>
                                <p className="text-gray-600 font-medium text-[7px]  sm:text-[16px] whitespace-nowrap" style={{ letterSpacing: "0.4%", lineHeight: "120%" }}>Happy Clients</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-1 sm:gap-[24px] flex-1 justify-center">
                            <div className="w-5 sm:w-[78px] h-5 sm:h-[78px] flex items-center justify-center flex-shrink-0">
                                <img src={tonsYearsIcon} alt="Tons Per Year" className="w-full h-full object-contain" loading="lazy" decoding="async" />
                            </div>
                            <div className="flex flex-col items-start gap-0.5 sm:gap-[8px] font-poppins">
                                <h3 className="text-[10px] sm:text-[40px] font-bold  text-brand leading-none">10,000+</h3>
                                <p className="text-gray-600 font-medium text-[7px] sm:text-[16px] " style={{ letterSpacing: "0.4%", lineHeight: "120%" }}>Tons/Year</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-1 sm:gap-[24px] flex-1 justify-center">
                            <div className="w-5 sm:w-[78px] h-5 sm:h-[78px] flex items-center justify-center flex-shrink-0">
                                <img src={machinesIcon} alt="Machines" className="w-full h-full object-contain" loading="lazy" decoding="async" />
                            </div>
                            <div className="flex flex-col items-start gap-0.5 sm:gap-[8px] font-poppins">
                                <h3 className="text-[10px] sm:text-[40px] font-poppins font-bold text-brand leading-none">100+</h3>
                                <p className="text-gray-600 font-medium text-[7px] sm:text-[16px]" style={{ letterSpacing: "0.4%", lineHeight: "120%" }}>Machines</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" md:px-[94px] px-6 md:px-0">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-[50px] w-full">
                    <div className="w-full pt-1 sm:pt-4 md:min-w-[675px] lg:w-[65%]">
                        <div className="mb-2 flex items-center gap-2 bg-brand/10 w-fit px-3 sm:px-[14px] py-1.5 sm:py-[8px] rounded-full">
                            <div className="relative w-2 h-2">
                                <div className="absolute inset-0 rounded-full bg-brand" />
                                <div className="absolute inset-0 rounded-full bg-brand animate-ripple" />
                            </div>
                            <span className="text-black text-[10px] sm:text-xs font-medium">About Thirumala</span>
                        </div>

                        <h2 className="font-montserrat text-[13px] sm:text-[32px] font-bold text-[#1A1A1A] leading-[1.2] tracking-tight mb-[8px]" style={{ lineHeight: "130%" }}>
                            Your Reliable OEM Manufacturing Partner
                        </h2>

                        <div className=" font-poppins space-y-3 sm:space-y-[12px] text-justified text-[#2e2e2e]/60 font-medium leading-relaxed max-w-[700px] text-[9px] sm:text-[16px] mb-[30px] sm:mb-[54px]" style={{ lineHeight: "145%", letterSpacing: "2%" }}>
                            <p className="w-full text-justify">
                                Thirumala Engineering Works is a complete OEM manufacturing company built to
                                serve industries that require precision, scale, and consistency. We specialize in
                                delivering high-quality forged and machined components for engineering brands,
                                manufacturers, and industrial enterprises.
                            </p>
                            <p className="hidden sm:block w-full text-justify">
                                With a fully equipped in-house infrastructure of forging units, machining facilities, and
                                quality control systems, we offer end-to-end manufacturing under one roof reducing
                                dependency, lead time, and operational risk for our clients.
                            </p>
                        </div>

                        <div className="pt-2 sm:pt-0 flex flex-row items-center gap-3 sm:gap-[40px]">
                            <button
                                className="group relative flex items-center justify-center gap-0 hover:gap-3 px-3 py-1.5 sm:px-6 sm:py-3 rounded-[16px] font-montserrat font-bold text-[10px] sm:text-[18px] text-white transition-all duration-300 ease-in-out whitespace-nowrap shadow-[inset_0px_-11px_16px_0px_#FFF3ED4D,0px_4px_16px_0px_#FF5E0080] hover:shadow-[inset_0px_-11px_16px_0px_#FFF3ED4D,0px_4px_16px_0px_#FF5E0080,0_0_0_6px_rgba(254,82,0,0.1)]"
                                style={{
                                    background: '#FE5200',
                                    border: '1px solid transparent',
                                    backgroundImage: `linear-gradient(#FE5200, #FE5200), linear-gradient(180deg, #FFA880 0%, #FE5200 100%)`,
                                    backgroundOrigin: 'border-box',
                                    backgroundClip: 'padding-box, border-box'
                                }}
                            >
                                <span>Know Us More ...</span>
                                <div className="w-0 overflow-hidden group-hover:w-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[18px] sm:h-[18px] w-[12px] h-[12px] text-white">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </div>
                            </button>

                            <div className="flex flex-col items-center gap-[8px]">
                                <p className="font-poppins text-[8px] sm:text-[12px] font-bold text-[#2e2e2e]/90" style={{ lineHeight: "140%" }}>100+ MANUFACTURING CLIENTS</p>
                                <img src={companiesLogo} alt="Manufacturing Clients" className="h-[28px] sm:h-[50px] w-[auto] object-contain drop-shadow-sm" loading="lazy" decoding="async" />
                            </div>
                        </div>
                    </div>

                    <div className="block  w-full lg:w-[60%] h-[200px] sm:h-[420px] relative mt-8 sm:mt-0">
                        <div className="relative rounded-[1.5rem] sm:rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
                            {isInViewport && (
                                <img src={testimonyGif} alt="Factory Process" className="w-full h-full sm:h-[420px] object-cover" loading="lazy" decoding="async" />
                            )}
                        </div>
                        {/* Experience Badge (Top Right) */}
                        <div
                            className="absolute -top-[22px] sm:-top-[78px] -right-[22px] sm:-right-[70px] rotate-[10deg] z-20 w-24 sm:w-48 h-24 sm:h-48 block"
                        >
                            <img src={experienceBadge} alt="16 Years Experience" className="w-full h-full object-contain drop-shadow-2xl" />
                        </div>

                        {/* Employees Badge (Top Left) */}
                        <div className="absolute w-fit top-2 sm:top-[30px] -left-4 sm:-left-9 bg-white px-3 sm:pl-4 sm:pr-0 py-2 sm:py-3 rounded-[32px] hover:rounded-[18px] shadow-lg flex flex-col items-start border border-gray-100 z-20 transition-all duration-500 overflow-hidden group">
                            <div className="flex items-center gap-2 sm:gap-3 whitespace-nowrap">
                                <svg viewBox="0 0 33 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 scale-0.6 md:scale-1 w-6 h-6 md:w-10 md:h-10">
                                    <path d="M12.1666 3.82187C12.2772 3.73187 12.3916 3.64687 12.5104 3.56499C12.647 3.47703 12.8124 3.44571 12.9717 3.47767C13.131 3.50964 13.2716 3.60238 13.3637 3.73623C13.4558 3.87008 13.4921 4.03453 13.465 4.19473C13.4379 4.35492 13.3495 4.49826 13.2185 4.59437C13.1264 4.65812 13.0368 4.72499 12.9497 4.79499C12.8201 4.8915 12.658 4.934 12.4976 4.91357C12.3373 4.89314 12.1911 4.81137 12.0897 4.68543C11.9884 4.55948 11.9398 4.39917 11.9541 4.23815C11.9684 4.07712 12.0446 3.92792 12.1666 3.82187ZM10.2747 6.72624C10.4106 6.17729 10.6359 5.65446 10.9416 5.17874C11.032 5.0417 11.1728 4.94575 11.3334 4.91162C11.494 4.87749 11.6615 4.90792 11.7999 4.99635C11.9382 5.08477 12.0362 5.22408 12.0727 5.38416C12.1091 5.54425 12.0811 5.71225 11.9947 5.85187C11.7631 6.21266 11.5921 6.60894 11.4885 7.02499C11.4481 7.18505 11.3459 7.32261 11.2044 7.40763C11.0629 7.49265 10.8935 7.51822 10.7332 7.47876C10.5729 7.43931 10.4347 7.33802 10.3488 7.19703C10.2629 7.05604 10.2363 6.88679 10.2747 6.72624ZM9.63037 32.5006H7.75537C7.58961 32.5006 7.43064 32.4348 7.31343 32.3176C7.19622 32.2003 7.13037 32.0414 7.13037 31.8756C7.13037 31.7099 7.19622 31.5509 7.31343 31.4337C7.43064 31.3165 7.58961 31.2506 7.75537 31.2506H9.63037C9.79613 31.2506 9.9551 31.3165 10.0723 31.4337C10.1895 31.5509 10.2554 31.7099 10.2554 31.8756C10.2554 32.0414 10.1895 32.2003 10.0723 32.3176C9.9551 32.4348 9.79613 32.5006 9.63037 32.5006ZM24.6304 32.5006H22.7554C22.5896 32.5006 22.4306 32.4348 22.3134 32.3176C22.1962 32.2003 22.1304 32.0414 22.1304 31.8756C22.1304 31.7099 22.1962 31.5509 22.3134 31.4337C22.4306 31.3165 22.5896 31.2506 22.7554 31.2506H24.6304C24.7961 31.2506 24.9551 31.3165 25.0723 31.4337C25.1895 31.5509 25.2554 31.7099 25.2554 31.8756C25.2554 32.0414 25.1895 32.2003 25.0723 32.3176C24.9551 32.4348 24.7961 32.5006 24.6304 32.5006Z" fill="black" />
                                    <path d="M30.5229 25.6387C28.8985 23.5806 22.2066 21.4237 20.7997 20.9875C20.7443 20.1065 20.6412 19.2292 20.491 18.3594C21.5535 17.3233 22.2885 15.9981 22.6047 14.5481C23.0175 14.2425 23.3628 13.8551 23.6191 13.41C23.8388 13.0534 23.9834 12.6558 24.0441 12.2414C24.1048 11.827 24.0803 11.4046 23.9722 11C24.2843 10.8837 24.5536 10.6752 24.7445 10.4023C24.9354 10.1294 25.0388 9.80491 25.041 9.47187C25.0424 9.15053 24.9533 8.83529 24.7837 8.56234C24.6141 8.28939 24.371 8.06979 24.0822 7.92875C24.056 6.4024 23.5555 4.92202 22.6502 3.69285C21.7449 2.46368 20.4796 1.5466 19.0297 1.06875C18.9668 0.767748 18.8025 0.497436 18.5644 0.302932C18.3262 0.108428 18.0285 0.00150187 17.721 0H14.7741C14.4778 0.00175493 14.1904 0.101727 13.957 0.284263C13.7236 0.4668 13.5572 0.721593 13.4841 1.00875C11.9941 1.47266 10.6877 2.39327 9.74959 3.64037C8.81149 4.88747 8.28921 6.39793 8.2566 7.95812C7.98168 8.10421 7.75166 8.3223 7.59115 8.58905C7.43063 8.8558 7.34567 9.16118 7.34535 9.4725C7.34716 9.80108 7.44763 10.1215 7.63374 10.3923C7.81984 10.6631 8.083 10.8718 8.3891 10.9912C8.25899 11.5812 8.28702 12.195 8.47035 12.7706C8.71904 13.5323 9.2219 14.1855 9.89473 14.6206C10.2302 16.0468 10.941 17.3573 11.9535 18.4162C11.8069 19.2688 11.7064 20.1286 11.6522 20.9919C10.196 21.4269 3.65848 23.4656 2.04098 25.46C0.578479 27.2625 0.0559789 33.6475 0.000978922 34.3694C-0.00817505 34.5328 0.0471534 34.6933 0.155073 34.8164C0.262993 34.9395 0.414889 35.0153 0.578117 35.0276C0.741346 35.0398 0.902877 34.9876 1.02799 34.882C1.15311 34.7765 1.23183 34.6261 1.24723 34.4631C1.38785 32.61 1.98035 27.5194 3.0116 26.2469C3.5491 25.5844 4.93348 24.8469 6.50535 24.1694V29.3756H5.88035C5.71459 29.3756 5.55562 29.4415 5.43841 29.5587C5.3212 29.6759 5.25535 29.8349 5.25535 30.0006V34.4162C5.25535 34.582 5.3212 34.741 5.43841 34.8582C5.55562 34.9754 5.71459 35.0412 5.88035 35.0412C6.04611 35.0412 6.20509 34.9754 6.3223 34.8582C6.43951 34.741 6.50535 34.582 6.50535 34.4162V30.6262H25.8804V34.4162C25.8804 34.582 25.9462 34.741 26.0634 34.8582C26.1806 34.9754 26.3396 35.0412 26.5054 35.0412C26.6711 35.0412 26.8301 34.9754 26.9473 34.8582C27.0645 34.741 27.1304 34.582 27.1304 34.4162V30.0012C27.1304 29.8355 27.0645 29.6765 26.9473 29.5593C26.8301 29.4421 26.6711 29.3762 26.5054 29.3762H25.8804V24.2012C27.5254 24.9231 28.9891 25.7137 29.541 26.4137C30.5291 27.6656 31.0285 32.6419 31.1378 34.4537C31.1509 34.6168 31.2274 34.7683 31.3509 34.8756C31.4744 34.9829 31.635 35.0375 31.7984 35.0277C31.9617 35.0179 32.1146 34.9444 32.2244 34.8231C32.3341 34.7018 32.3919 34.5422 32.3853 34.3787C32.3435 33.6725 31.9304 27.4225 30.5229 25.6394V25.6387ZM16.1897 25.6762H16.1985C17.8222 25.6762 19.8597 23.2875 20.6641 22.255C20.9141 22.3344 21.2016 22.4281 21.5054 22.53V29.3756H10.8804V22.5431C11.1861 22.4435 11.4928 22.3466 11.8004 22.2525C12.5879 23.2856 14.5772 25.6681 16.1897 25.6762ZM19.5954 21.59C18.5641 22.8881 17.0185 24.4269 16.1997 24.4269H16.196C15.3835 24.4225 13.8622 22.8719 12.8585 21.5756C12.8943 20.8371 12.9698 20.101 13.0847 19.3706C14.9804 20.5606 17.5366 20.2663 19.346 19.2113C19.4722 19.9991 19.5554 20.7931 19.5954 21.59ZM8.91535 9.04C9.53035 9.0125 9.51535 8.38 9.51098 8.1725L9.5066 7.91625C9.54269 6.68342 9.94824 5.48985 10.6707 4.49024C11.3932 3.49063 12.3992 2.73107 13.5585 2.31L14.081 6.38625C14.1023 6.55068 14.188 6.69992 14.3194 6.80113C14.3844 6.85125 14.4587 6.88806 14.5379 6.90948C14.6172 6.93089 14.6999 6.93648 14.7813 6.92594C14.8627 6.91539 14.9413 6.88891 15.0124 6.84801C15.0836 6.80711 15.1461 6.75258 15.1962 6.68755C15.2463 6.62252 15.2831 6.54826 15.3045 6.469C15.3259 6.38974 15.3315 6.30704 15.321 6.22562L14.6879 1.3275C14.6913 1.30675 14.7017 1.2878 14.7174 1.27381C14.7331 1.25982 14.7531 1.25163 14.7741 1.25062H17.721C17.7421 1.25149 17.7623 1.25961 17.7781 1.27362C17.7939 1.28762 17.8044 1.30665 17.8079 1.3275L17.1741 6.22562C17.1636 6.30709 17.1692 6.38983 17.1906 6.46912C17.212 6.54842 17.2489 6.62272 17.299 6.68777C17.3491 6.75283 17.4116 6.80738 17.4828 6.8483C17.5541 6.88921 17.6326 6.9157 17.7141 6.92625C17.8786 6.94755 18.0449 6.90262 18.1763 6.80135C18.2413 6.75121 18.2959 6.68874 18.3368 6.61752C18.3777 6.5463 18.4042 6.46771 18.4147 6.38625L18.9335 2.37125C20.0608 2.80359 21.0338 3.56203 21.7282 4.54976C22.4226 5.5375 22.807 6.70974 22.8322 7.91687C22.8322 8.06812 22.8264 8.21812 22.8147 8.36687C22.8081 8.45387 22.8197 8.54129 22.8488 8.62353C22.878 8.70578 22.9239 8.78103 22.9838 8.84446C23.0438 8.90789 23.1162 8.95811 23.1967 8.99189C23.2771 9.02567 23.3637 9.04227 23.451 9.04062C23.6172 9 23.7903 9.27437 23.7903 9.47187C23.7903 9.76312 23.4735 9.88062 23.2866 9.90375C20.9392 10.1691 18.5789 10.3039 16.2166 10.3075C13.8385 10.3029 11.4625 10.1681 9.0991 9.90375C8.9116 9.88062 8.59535 9.76312 8.59535 9.47187C8.59218 9.37442 8.62208 9.27877 8.68018 9.20047C8.73828 9.12217 8.82117 9.0652 8.91535 9.04ZM11.0622 14.1025C11.0442 14.0114 11.0062 13.9254 10.9509 13.8508C10.8955 13.7762 10.8242 13.7149 10.7422 13.6712C10.233 13.3952 9.84662 12.9372 9.66035 12.3887C9.54057 12.01 9.52588 11.6058 9.61785 11.2194C11.9316 11.4662 14.5604 11.5575 16.2166 11.5575C17.8454 11.5575 20.4354 11.4669 22.7366 11.2231C22.8192 11.4828 22.8439 11.7574 22.8091 12.0277C22.7742 12.2979 22.6805 12.5573 22.5347 12.7875C22.3301 13.1394 22.044 13.4369 21.7004 13.655C21.6272 13.7022 21.5647 13.7642 21.5169 13.8369C21.4691 13.9097 21.4371 13.9916 21.4229 14.0775C21.2768 14.946 20.9394 15.7712 20.4352 16.4933C19.9309 17.2154 19.2724 17.8163 18.5072 18.2525C18.4079 18.3044 16.0472 19.5112 14.0216 18.4681C13.254 17.984 12.5948 17.3463 12.0855 16.5951C11.5762 15.8439 11.2278 14.9948 11.0622 14.1025ZM7.75535 29.3762V23.6569C8.37608 23.4146 9.00119 23.1838 9.63035 22.9644V29.3762H7.75535ZM24.6304 29.3762H22.7554V22.9644C23.3554 23.18 23.9916 23.42 24.6304 23.6756V29.3762Z" fill="black" />
                                    <path d="M16.1853 9.5319C14.8703 9.5319 12.9791 9.41315 11.1266 9.21565C10.9652 9.19402 10.8186 9.11026 10.718 8.98218C10.6175 8.85411 10.5709 8.69184 10.5881 8.52992C10.6054 8.368 10.6852 8.21921 10.8105 8.11522C10.9358 8.01123 11.0968 7.96026 11.2591 7.97315C13.0703 8.16628 14.9116 8.28128 16.1853 8.2819C17.6928 8.2819 19.726 8.1219 21.1272 7.97315C21.2892 7.96105 21.4495 8.01249 21.5743 8.11657C21.699 8.22066 21.7783 8.36921 21.7953 8.53076C21.8124 8.6923 21.7659 8.85415 21.6657 8.98199C21.5655 9.10984 21.4194 9.19365 21.2585 9.21565C20.5647 9.29003 18.1447 9.53128 16.1853 9.5319Z" fill="black" />
                                </svg>

                                <div>
                                    <p className="text-sm sm:text-base font-bold text-black">25,000+</p>
                                    <p className="text-[9px] sm:text-[12px] font-regular text-black/40 tracking-wide">Employee</p>
                                </div>
                            </div>
                            <div className="max-h-0 group-hover:max-h-[100px] transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                                <p className="text-[7px] sm:text-[12px] font-medium text-black/80 mt-1 sm:mt-2 leading-tight w-20 sm:w-32">
                                    Skilled Workforce Across Operations
                                </p>
                            </div>
                        </div>

                        {/* Location Badge (Bottom Right) */}
                        <div className="absolute w-fit top-[150px] sm:top-[380px] -right-1 bg-white px-3 sm:pl-4 sm:pr-0 py-2 sm:py-3 rounded-[32px] hover:rounded-[18px] shadow-lg flex flex-col items-start border border-gray-100 z-20 transition-all duration-500 overflow-hidden group">
                            <div className="flex items-center gap-2 sm:gap-3 whitespace-nowrap">
                                <div className="shrink-0 w-6 h-6 md:w-10 md:h-10 flex items-center justify-center">
                                    <img src={locationLogo} alt="Location" className="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <p className="text-sm sm:text-base font-bold text-black">15+</p>
                                    <p className="text-[9px] sm:text-[12px] font-regular text-black/40  tracking-wide">Location</p>
                                </div>
                            </div>
                            <div className="max-h-0 group-hover:max-h-[100px] transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 w-full">
                                <p className="text-[7px] sm:text-[12px] font-medium text-black/80 mt-1 sm:mt-2 leading-tight whitespace-normal w-20 sm:w-32">
                                    Wide Industrial <br />Presence Across Regions
                                </p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            {/* Marquee - Company Logos - Seamless Infinite Loop */}
            <div className="relative w-full h-[60px] sm:h-[88px] overflow-hidden mt-12 sm:mt-[64px]">
                <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

                <div className="marquee-container h-full">
                    <div className="marquee-content items-center h-full">
                        {/* First set of logos */}
                        <div className="flex items-center gap-8 sm:gap-[88px] px-4 sm:px-12 shrink-0">
                            {logos.map((logo, idx) => (
                                <img key={`first-${idx}`} src={logo.src} alt={logo.alt} className=" w-auto object-contain" loading="lazy" decoding="async" />
                            ))}
                        </div>
                        {/* Second set of logos (duplicate for seamless loop) */}
                        <div className="flex items-center gap-8 sm:gap-[88px] px-4 sm:px-12 shrink-0">
                            {logos.map((logo, idx) => (
                                <img key={`second-${idx}`} src={logo.src} alt={logo.alt} className="h-5 sm:h-12 w-auto object-contain" loading="lazy" decoding="async" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

AboutSection.displayName = 'AboutSection';

export default AboutSection;
