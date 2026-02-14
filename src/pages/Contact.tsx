import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Badge from '../components/common/Badge';
import contact from '../assets/img/contact_location.png';
import factory from '../assets/img/factory_icon.png';
const Contact = () => {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
    const [formData, setFormData] = useState({
        fullName: '',
        companyName: '',
        businessEmail: '',
        phoneNumber: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="mx-[92px] my-[65px] min-h-screen flex flex-col items-center justify-center">

            <div className=" w-full max-w-[600px]">
                <div className="w-full flex items-center justify-center">
                    <Badge title='Contact Us' />
                </div>

                <div className="text-center text-[#2e2e2e] mb-[28px]">
                    <h1 className="heading text-[#2e2e2e]">
                        Let's Build Your
                    </h1>
                    <h1 className="heading text-[#2e2e2e]">
                        Manufacturing Solution
                    </h1>
                </div>

                <form className="space-y-[36px] px-[40px]">
                    <div className='flex flex-col gap-[8px]'>
                        <label className="label-text">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            placeholder="Enter your full name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                        />
                    </div>

                    <div className='flex flex-col gap-[8px]'>
                        <label className="label-text">
                            Company Name
                        </label>
                        <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleInputChange}
                            placeholder="Enter your company name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                        />
                    </div>

                    <div className='flex flex-col gap-[8px]'>
                        <label className="label-text">
                            Business Email
                        </label>
                        <input
                            type="email"
                            name="businessEmail"
                            value={formData.businessEmail}
                            onChange={handleInputChange}
                            placeholder="Enter your business email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                        />
                    </div>

                    <div className='flex flex-col gap-[8px]'>
                        <label className="label-text">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            placeholder="Enter your contact number"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                        />
                    </div>

                    <div className='flex flex-col gap-[8px]'>
                        <label className=" label-text ">
                            Message
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Enter any additional details, special requirements, or questions for our team..."
                            rows={5}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm resize-none"
                        />

                    </div>

                    <div className="flex flex-col items-center gap-[8px]">
                        <p className="font-poppins text-[12px] text-[#2e2e2e]/60 font-bold" style={{ lineHeight: "145%", letterSpacing: "1%" }}>
                            You'll receive a response in your inbox instantly.
                        </p>
                        <button
                            className="w-full py-2 px-4 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-[10px] sm:text-base text-white transition duration-300  ease-in-out "
                            style={{
                                background: '#FE5200',
                                border: '1px solid transparent',
                                backgroundImage: `linear-gradient(#FE5200, #FE5200), linear-gradient(180deg, #FFA880 0%, #FE5200 100%)`,
                                backgroundOrigin: 'border-box',
                                backgroundClip: 'padding-box, border-box',
                                boxShadow: '0px -11px 16px 0px #FFF3ED4D inset'
                            }}
                        >

                            Send Your Queries
                        </button>
                    </div>


                </form>
            </div>

            {/* Footer Section */}
            <div className="w-full mt-[92px]">
                {/* Top Row - Map and Address Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 h-[410px]">
                    {/* Map */}
                    <div className="relative bg-gray-100 rounded-2xl overflow-hidden h-full">
                        <img
                            src={contact}
                            alt="Location Map"
                            className="w-full h-full object-cover"
                        />
                        <div className='absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100'>
                            <p className='font-monserrat font-extrabold text-[18px] leading-[145%] text-white'>See On Gmap</p>
                        </div>
                    </div>

                    {/* Address Cards */}
                    <div className="flex flex-col h-full gap-[8px]">
                        <div className="h-full">

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] h-full">
                                {/* Office Address */}
                                <div className="p-[1px] cols-span-1 bg-gradient-to-b from-[#FF5E00] to-transparent rounded-2xl">
                                    <div className="rounded-2xl p-6 h-full " style={{
                                        background: "linear-gradient(180deg, #FFDAC8 0%, rgba(255, 255, 255, 0) 100%)"
                                    }}>
                                        <div className="w-[80px] h-[80px] flex bg-[#FFFFFF]/70 items-center justify-center p-[8px] rounded-[8px] mb-[30px]">
                                            <svg width="59" height="50" viewBox="0 0 59 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M41.6107 48.752C42.3373 48.0307 58.6667 31.6347 58.6667 18C58.6667 13.2261 56.7702 8.64773 53.3946 5.27208C50.0189 1.89642 45.4406 0 40.6667 0C35.8928 0 31.3144 1.89642 27.9387 5.27208C24.5631 8.64773 22.6667 13.2261 22.6667 18C22.6667 28.8347 32.972 41.4107 37.5733 46.4773H24V35.8107C24 35.457 23.8595 35.1179 23.6095 34.8679C23.3594 34.6178 23.0203 34.4773 22.6667 34.4773H13.3333C12.9797 34.4773 12.6406 34.6178 12.3905 34.8679C12.1405 35.1179 12 35.457 12 35.8107V46.4773H5.33333V29.1253C5.36533 29.1253 5.392 29.144 5.424 29.144H17.3333C17.687 29.144 18.0261 29.0035 18.2761 28.7535C18.5262 28.5034 18.6667 28.1643 18.6667 27.8107V11.8107C18.6667 11.457 18.5262 11.1179 18.2761 10.8679C18.0261 10.6178 17.687 10.4773 17.3333 10.4773H5.424C5.392 10.4773 5.36533 10.4933 5.33333 10.496V7.81067C5.33333 6.7498 5.75476 5.73238 6.50491 4.98224C7.25505 4.23209 8.27247 3.81067 9.33333 3.81067H25.3333C25.687 3.81067 26.0261 3.67019 26.2761 3.42014C26.5262 3.17009 26.6667 2.83096 26.6667 2.47733C26.6667 2.12371 26.5262 1.78457 26.2761 1.53452C26.0261 1.28448 25.687 1.144 25.3333 1.144H9.33333C7.56587 1.14612 5.87141 1.84918 4.62163 3.09896C3.37184 4.34874 2.66878 6.04321 2.66667 7.81067V46.4773H1.33333C0.979711 46.4773 0.640573 46.6178 0.390524 46.8679C0.140476 47.1179 0 47.457 0 47.8107C0 48.1643 0.140476 48.5034 0.390524 48.7535C0.640573 49.0035 0.979711 49.144 1.33333 49.144H40.6667C41.0031 49.1444 41.3266 49.0144 41.5693 48.7813C41.58 48.7707 41.596 48.7667 41.6067 48.756L41.6107 48.752ZM5.424 26.4773C5.392 26.4773 5.36533 26.4933 5.33333 26.496V21.144H15.8373C15.8923 21.137 15.9467 21.1259 16 21.1107V26.4773H5.424ZM5.424 13.144H16V18.5107C15.9467 18.4955 15.8923 18.4843 15.8373 18.4773H5.33333V13.1253C5.36533 13.128 5.392 13.144 5.424 13.144ZM40.6667 2.756C44.72 2.7489 48.6107 4.34984 51.4852 7.20762C54.3598 10.0654 55.9834 13.9467 56 18C56 28.76 44.1333 42.192 40.6667 45.888C37.2 42.1933 25.3333 28.7693 25.3333 18C25.3499 13.9467 26.9736 10.0654 29.8481 7.20762C32.7226 4.34984 36.6133 2.7489 40.6667 2.756ZM14.6667 37.144H21.3333V46.4773H14.6667V37.144Z" fill="black" />
                                                <path d="M49.3333 18.4773C49.3333 16.7632 48.825 15.0876 47.8727 13.6624C46.9204 12.2372 45.5669 11.1263 43.9833 10.4704C42.3996 9.81442 40.6571 9.6428 38.9759 9.9772C37.2947 10.3116 35.7505 11.137 34.5384 12.3491C33.3264 13.5611 32.5009 15.1054 32.1665 16.7866C31.8321 18.4677 32.0038 20.2103 32.6597 21.7939C33.3157 23.3776 34.4265 24.7311 35.8517 25.6834C37.277 26.6357 38.9526 27.144 40.6667 27.144C42.9643 27.1412 45.1671 26.2272 46.7918 24.6025C48.4165 22.9778 49.3305 20.775 49.3333 18.4773ZM34.6667 18.4773C34.6667 17.2907 35.0186 16.1306 35.6779 15.1439C36.3371 14.1572 37.2742 13.3882 38.3706 12.9341C39.4669 12.4799 40.6733 12.3611 41.8372 12.5926C43.0011 12.8241 44.0702 13.3956 44.9093 14.2347C45.7484 15.0738 46.3199 16.1429 46.5514 17.3068C46.7829 18.4707 46.6641 19.6771 46.2099 20.7734C45.7558 21.8698 44.9868 22.8069 44.0001 23.4662C43.0134 24.1254 41.8534 24.4773 40.6667 24.4773C39.0759 24.4756 37.5508 23.8429 36.426 22.718C35.3011 21.5932 34.6684 20.0681 34.6667 18.4773Z" fill="black" />
                                            </svg>

                                        </div>

                                        <div className="flex flex-col gap-[8px]">
                                            <h3 className="font-montserrat font-extrabold text-[20px] leading-[145%] text-[#FE5200]/70 letter-spacing-[4%]">Office Address</h3>
                                            <p className="font-poppins text-[16px] font-semibold text-[#2e2e2e] leading-[145%] letter-spacing-[0%]">
                                                No. 18/152, Guindy Industrial Estate, Chennai - 600032.
                                            </p>
                                        </div>
                                    </div>
                                </div>


                                {/* Factory Address */}
                                <div className="p-[1px] cols-span-1 bg-gradient-to-b from-[#FF5E00] to-transparent rounded-2xl">
                                    <div className="rounded-2xl p-6 h-full " style={{
                                        background: "linear-gradient(180deg, #FFDAC8 0%, rgba(255, 255, 255, 0) 100%)"
                                    }}>
                                        <div className="w-[80px] h-[80px] rounded-[8px] flex items-center justify-center mb-[30px] bg-[#fff]/70 p-[8px]">
                                            <img src={factory} alt="Factory" className="w-full h-full object-contain" />
                                        </div>
                                        <div className="flex flex-col gap-[8px]">
                                            <h3 className="font-montserrat font-extrabold text-[20px] leading-[145%] text-[#FE5200]/70 letter-spacing-[4%]">Factory Address</h3>
                                            <p className="font-poppins text-[16px] font-semibold text-[#2e2e2e] leading-[145%] letter-spacing-[0%]">
                                                Dp - 27, Sido, Kolathur, Industrial Estate, Tiruvallur, Tamil Nadu - 602 003.
                                            </p>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className="w-full cols-span-1 bg-[#FFF3ED99]/60 rounded-[16px] flex items-center justify-center p-6">
                            <div className="h-full font-montserrat font-extrabold text-[20px] leading-[145%] text-[#FE5200]/70 letter-spacing-[4%] mr-[16px] mb-2">“</div>
                            <p className="relative font-poppins font-semibold text-[14px] leading-[145%] text-[#2e2e2e]/90 text-center letter-spacing-[0%] letter-spacing-[1%]">Complete OEM manufacturing, engineered for reliability. <br />Forged and machined components built to perform at scale.</p>
                            <div className="h-full font-montserrat font-extrabold text-[20px] leading-[145%] text-[#FE5200]/70 letter-spacing-[4%] ml-[16px] rotate-[-180deg] mt-2">“</div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Bottom Row - Contact Info and CTA */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-[60%_40%] gap-[16px]">
                <div className="flex flex-col gap-[8px]">
                    {/* Contact Info */}


                    <div className="grid grid-cols-1 sm:grid-cols-[53%_45%] gap-[16px] h-full">

                        {/* Email */}
                        <div className="p-[1px] cols-span-1 bg-gradient-to-b from-[#FF5E00] to-transparent rounded-2xl">
                            <div className="rounded-2xl p-6 h-full " style={{
                                background: "linear-gradient(180deg, #FFDAC8 0%, rgba(255, 255, 255, 0) 100%)"
                            }}>
                                <div className="flex gap-[24px] w-full">
                                    <div className="w-[80px] h-[80px] rounded-[8px] p-[8px] bg-[#fff]/70 flex items-center justify-center flex-shrink-0">
                                        <svg width="56" height="44" viewBox="0 0 56 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.00021 10.5707L20.6135 22.9813C23.1815 24.6907 24.4642 25.5467 25.8509 25.88C27.0775 26.1733 28.3549 26.1733 29.5789 25.88C30.9655 25.5467 32.2482 24.6907 34.8162 22.9813L53.4295 10.5707M14.8002 42H40.6295C45.1095 42 47.3495 42 49.0615 41.128C50.5658 40.3606 51.7886 39.1368 52.5549 37.632C53.4295 35.92 53.4295 33.68 53.4295 29.2V14.8C53.4295 10.32 53.4295 8.08 52.5575 6.368C51.7906 4.86277 50.5668 3.63898 49.0615 2.872C47.3495 2 45.1095 2 40.6295 2H14.8002C10.3202 2 8.08021 2 6.36821 2.872C4.86397 3.63943 3.64116 4.86318 2.87488 6.368C2.00021 8.08 2.00021 10.32 2.00021 14.8V29.2C2.00021 33.68 2.00021 35.92 2.87221 37.632C3.63919 39.1372 4.86298 40.361 6.36821 41.128C8.08021 42 10.3202 42 14.8002 42Z" stroke="#2E2E2E" stroke-opacity="0.9" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                    </div>
                                    <div>
                                        <h4 className="text-xs font-semibold text-gray-900 uppercase mb-1">Mail Us</h4>
                                        <p className="text-sm text-gray-600">info@thirumolaang.com</p>
                                        <p className="text-sm text-gray-600">thirumolaang@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="p-[1px] cols-span-1 bg-gradient-to-b from-[#FF5E00] to-transparent rounded-2xl">
                            <div className="rounded-2xl p-6 h-full " style={{
                                background: "linear-gradient(180deg, #FFDAC8 0%, rgba(255, 255, 255, 0) 100%)"
                            }}>
                                <div className="flex gap-[25px] w-full">
                                    <div className="w-[80px] h-[80px] p-[8px] bg-[#fff]/70 rounded-[8px] flex items-center justify-center flex-shrink-0">
                                        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M28.4 2C34.1287 2 39.6227 4.27571 43.6735 8.32649C47.7243 12.3773 50 17.8713 50 23.6M28.4 11.6C31.5826 11.6 34.6348 12.8643 36.8853 15.1147C39.1357 17.3652 40.4 20.4174 40.4 23.6M30.3968 36.9632C30.8925 37.1908 31.4509 37.2428 31.9801 37.1107C32.5092 36.9785 32.9776 36.67 33.308 36.236L34.16 35.12C34.6071 34.5239 35.1869 34.04 35.8534 33.7068C36.5199 33.3735 37.2548 33.2 38 33.2H45.2C46.473 33.2 47.6939 33.7057 48.5941 34.6059C49.4943 35.5061 50 36.727 50 38V45.2C50 46.473 49.4943 47.6939 48.5941 48.5941C47.6939 49.4943 46.473 50 45.2 50C33.7426 50 22.7546 45.4486 14.653 37.347C6.55142 29.2454 2 18.2574 2 6.8C2 5.52696 2.50571 4.30606 3.40589 3.40589C4.30606 2.50571 5.52696 2 6.8 2H14C15.273 2 16.4939 2.50571 17.3941 3.40589C18.2943 4.30606 18.8 5.52696 18.8 6.8V14C18.8 14.7452 18.6265 15.4801 18.2933 16.1466C17.96 16.8131 17.4761 17.3929 16.88 17.84L15.7568 18.6824C15.3162 19.0188 15.0056 19.4974 14.8779 20.0368C14.7501 20.5763 14.8131 21.1433 15.056 21.6416C18.336 28.3037 23.7306 33.6915 30.3968 36.9632Z" stroke="#2E2E2E" stroke-opacity="0.9" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                    </div>
                                    <div>
                                        <h4 className="text-xs font-semibold text-gray-900 uppercase mb-1">Our Phone</h4>
                                        <p className="text-sm text-gray-600">+91 94400 20332</p>
                                        <p className="text-sm text-gray-600">+91 86378 17507</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="bg-[#FFF3ED]/60 rounded-[16px] flex gap-[48px] py-[22px] px-[200px] w-full items-center justify-center">
                        <a href="#" className="p-[6px] w-[48px] h-[48px] bg-[#fff]/70 rounded-[8px] flex items-center justify-center hover:bg-orange-100 transition-colors">
                            <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.31081 0C3.16751 0 2.07104 0.454174 1.26261 1.26261C0.454174 2.07104 0 3.16751 0 4.31081C0 5.45411 0.454174 6.55058 1.26261 7.35901C2.07104 8.16745 3.16751 8.62162 4.31081 8.62162C5.45411 8.62162 6.55058 8.16745 7.35901 7.35901C8.16745 6.55058 8.62162 5.45411 8.62162 4.31081C8.62162 3.16751 8.16745 2.07104 7.35901 1.26261C6.55058 0.454174 5.45411 0 4.31081 0ZM2.35135 4.31081C2.35135 3.79113 2.55779 3.29273 2.92526 2.92526C3.29273 2.55779 3.79113 2.35135 4.31081 2.35135C4.83049 2.35135 5.32889 2.55779 5.69636 2.92526C6.06383 3.29273 6.27027 3.79113 6.27027 4.31081C6.27027 4.83049 6.06383 5.32889 5.69636 5.69636C5.32889 6.06383 4.83049 6.27027 4.31081 6.27027C3.79113 6.27027 3.29273 6.06383 2.92526 5.69636C2.55779 5.32889 2.35135 4.83049 2.35135 4.31081ZM0 10.5811C0 10.2693 0.123865 9.97023 0.344347 9.74975C0.564829 9.52927 0.863867 9.40541 1.17568 9.40541H7.44595C7.75775 9.40541 8.05679 9.52927 8.27727 9.74975C8.49776 9.97023 8.62162 10.2693 8.62162 10.5811V30.9595C8.62162 31.2713 8.49776 31.5703 8.27727 31.7908C8.05679 32.0113 7.75775 32.1351 7.44595 32.1351H1.17568C0.863867 32.1351 0.564829 32.0113 0.344347 31.7908C0.123865 31.5703 0 31.2713 0 30.9595V10.5811ZM2.35135 11.7568V29.7838H6.27027V11.7568H2.35135ZM10.973 10.5811C10.973 10.2693 11.0968 9.97023 11.3173 9.74975C11.5378 9.52927 11.8368 9.40541 12.1486 9.40541H18.4189C18.7307 9.40541 19.0298 9.52927 19.2502 9.74975C19.4707 9.97023 19.5946 10.2693 19.5946 10.5811V11.2614L20.2765 10.9683C21.4523 10.466 22.6995 10.1513 23.9728 10.0356C28.3228 9.64054 32.1351 13.0578 32.1351 17.447V30.9595C32.1351 31.2713 32.0113 31.5703 31.7908 31.7908C31.5703 32.0113 31.2713 32.1351 30.9595 32.1351H24.6892C24.3774 32.1351 24.0783 32.0113 23.8579 31.7908C23.6374 31.5703 23.5135 31.2713 23.5135 30.9595V19.9865C23.5135 19.4668 23.3071 18.9684 22.9396 18.6009C22.5721 18.2335 22.0737 18.027 21.5541 18.027C21.0344 18.027 20.536 18.2335 20.1685 18.6009C19.801 18.9684 19.5946 19.4668 19.5946 19.9865V30.9595C19.5946 31.2713 19.4707 31.5703 19.2502 31.7908C19.0298 32.0113 18.7307 32.1351 18.4189 32.1351H12.1486C11.8368 32.1351 11.5378 32.0113 11.3173 31.7908C11.0968 31.5703 10.973 31.2713 10.973 30.9595V10.5811ZM13.3243 11.7568V29.7838H17.2432V19.9865C17.2432 18.8432 17.6974 17.7467 18.5058 16.9383C19.3143 16.1298 20.4108 15.6757 21.5541 15.6757C22.6974 15.6757 23.7938 16.1298 24.6023 16.9383C25.4107 17.7467 25.8649 18.8432 25.8649 19.9865V29.7838H29.7838V17.447C29.7838 14.4624 27.1801 12.1048 24.1876 12.3775C23.1595 12.4708 22.1524 12.7247 21.2029 13.1299L18.8829 14.1253C18.704 14.2022 18.5087 14.2334 18.3148 14.2162C18.1208 14.1989 17.9341 14.1337 17.7715 14.0265C17.609 13.9193 17.4756 13.7733 17.3834 13.6018C17.2912 13.4302 17.243 13.2385 17.2432 13.0437V11.7568H13.3243Z" fill="#2E2E2E" fill-opacity="0.9" />
                            </svg>


                        </a>
                        <a href="#" className="p-[6px] w-[48px] h-[48px] bg-[#fff]/70 rounded-[8px] flex items-center justify-center hover:bg-orange-100 transition-colors">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.6486 4.56171C25.2113 3.1103 23.4994 1.95949 21.6129 1.17633C19.7263 0.393165 17.7027 -0.00668281 15.66 8.44843e-05C7.10108 8.44843e-05 0.125406 6.97576 0.125406 15.5347C0.125406 18.2779 0.846487 20.9428 2.19459 23.2941L0 31.3514L8.22973 29.1882C10.5027 30.4266 13.0578 31.085 15.66 31.085C24.2189 31.085 31.1946 24.1093 31.1946 15.5504C31.1946 11.3963 29.58 7.49306 26.6486 4.56171ZM15.66 28.4514C13.34 28.4514 11.067 27.8244 9.07622 26.6487L8.60595 26.3666L3.71514 27.652L5.01622 22.8866L4.7027 22.4006C3.41345 20.3425 2.72902 17.9633 2.72757 15.5347C2.72757 8.41792 8.52757 2.61792 15.6443 2.61792C19.093 2.61792 22.3378 3.96603 24.7676 6.41144C25.9709 7.60884 26.9244 9.03326 27.5729 10.6021C28.2214 12.1709 28.552 13.8528 28.5454 15.5504C28.5768 22.6671 22.7768 28.4514 15.66 28.4514ZM22.7454 18.7952C22.3535 18.6071 20.4411 17.6666 20.0962 17.5255C19.7357 17.4001 19.4849 17.3374 19.2184 17.7136C18.9519 18.1055 18.2151 18.9833 17.9957 19.2341C17.7762 19.5006 17.5411 19.532 17.1492 19.3282C16.7573 19.1401 15.5032 18.7168 14.0297 17.4001C12.8697 16.3655 12.1016 15.0958 11.8665 14.7039C11.647 14.312 11.8351 14.1082 12.0389 13.9044C12.2114 13.732 12.4308 13.4498 12.6189 13.2304C12.807 13.0109 12.8854 12.8385 13.0108 12.5877C13.1362 12.3212 13.0735 12.1017 12.9795 11.9136C12.8854 11.7255 12.1016 9.81306 11.7881 9.02927C11.4746 8.27684 11.1454 8.3709 10.9103 8.35522H10.1578C9.89135 8.35522 9.48378 8.44927 9.12324 8.84117C8.77838 9.23306 7.77514 10.1736 7.77514 12.086C7.77514 13.9985 9.17027 15.8482 9.35838 16.099C9.54649 16.3655 12.1016 20.2844 15.9892 21.9617C16.9141 22.3693 17.6351 22.6044 18.1995 22.7768C19.1243 23.0747 19.9708 23.0277 20.6449 22.9336C21.3973 22.8239 22.9492 21.9931 23.2627 21.0839C23.5919 20.1747 23.5919 19.4066 23.4822 19.2341C23.3724 19.0617 23.1373 18.9833 22.7454 18.7952Z" fill="#2E2E2E" fill-opacity="0.9" />
                            </svg>

                        </a>
                        <a href="#" className="p-[6px] w-[48px] h-[48px] bg-[#fff]/70 rounded-[8px] flex items-center justify-center hover:bg-orange-100 transition-colors">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.09189 0H22.2595C27.2757 0 31.3514 4.07568 31.3514 9.09189V22.2595C31.3514 24.6708 30.3935 26.9833 28.6884 28.6884C26.9833 30.3935 24.6708 31.3514 22.2595 31.3514H9.09189C4.07568 31.3514 0 27.2757 0 22.2595V9.09189C0 6.68057 0.957893 4.36801 2.66295 2.66295C4.36801 0.957893 6.68057 0 9.09189 0ZM8.77838 3.13514C7.2817 3.13514 5.84632 3.72969 4.788 4.788C3.72969 5.84632 3.13514 7.2817 3.13514 8.77838V22.573C3.13514 25.6924 5.65892 28.2162 8.77838 28.2162H22.573C24.0697 28.2162 25.505 27.6217 26.5634 26.5634C27.6217 25.505 28.2162 24.0697 28.2162 22.573V8.77838C28.2162 5.65892 25.6924 3.13514 22.573 3.13514H8.77838ZM23.9054 5.48649C24.4251 5.48649 24.9235 5.69293 25.291 6.0604C25.6584 6.42787 25.8649 6.92627 25.8649 7.44595C25.8649 7.96563 25.6584 8.46402 25.291 8.83149C24.9235 9.19896 24.4251 9.40541 23.9054 9.40541C23.3857 9.40541 22.8873 9.19896 22.5199 8.83149C22.1524 8.46402 21.9459 7.96563 21.9459 7.44595C21.9459 6.92627 22.1524 6.42787 22.5199 6.0604C22.8873 5.69293 23.3857 5.48649 23.9054 5.48649ZM15.6757 7.83784C17.7544 7.83784 19.748 8.66361 21.2179 10.1335C22.6877 11.6034 23.5135 13.597 23.5135 15.6757C23.5135 17.7544 22.6877 19.748 21.2179 21.2179C19.748 22.6877 17.7544 23.5135 15.6757 23.5135C13.597 23.5135 11.6034 22.6877 10.1335 21.2179C8.66361 19.748 7.83784 17.7544 7.83784 15.6757C7.83784 13.597 8.66361 11.6034 10.1335 10.1335C11.6034 8.66361 13.597 7.83784 15.6757 7.83784ZM15.6757 10.973C14.4284 10.973 13.2323 11.4684 12.3504 12.3504C11.4684 13.2323 10.973 14.4284 10.973 15.6757C10.973 16.9229 11.4684 18.1191 12.3504 19.001C13.2323 19.8829 14.4284 20.3784 15.6757 20.3784C16.9229 20.3784 18.1191 19.8829 19.001 19.001C19.8829 18.1191 20.3784 16.9229 20.3784 15.6757C20.3784 14.4284 19.8829 13.2323 19.001 12.3504C18.1191 11.4684 16.9229 10.973 15.6757 10.973Z" fill="#2E2E2E" fill-opacity="0.9" />
                            </svg>

                        </a>
                        <a href="#" className="p-[6px] w-[48px] h-[48px] bg-[#fff]/70 rounded-[8px] flex items-center justify-center hover:bg-orange-100 transition-colors">
                            <svg width="37" height="27" viewBox="0 0 37 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M34.9411 4.96917C34.7453 4.23599 34.3607 3.56693 33.8257 3.02868C33.2908 2.49042 32.6241 2.10176 31.8921 1.90144C29.2038 1.17566 18.4189 1.17566 18.4189 1.17566C18.4189 1.17566 7.63404 1.17566 4.94566 1.90144C4.2137 2.10176 3.54702 2.49042 3.01206 3.02868C2.4771 3.56693 2.09256 4.23599 1.89674 4.96917C1.17566 7.67793 1.17566 13.3243 1.17566 13.3243C1.17566 13.3243 1.17566 18.9707 1.89674 21.6794C2.09232 22.4129 2.47676 23.0823 3.01173 23.6208C3.5467 24.1594 4.21351 24.5483 4.94566 24.7487C7.63561 25.473 18.4189 25.473 18.4189 25.473C18.4189 25.473 29.2038 25.473 31.8921 24.7487C32.6243 24.5483 33.2911 24.1594 33.8261 23.6208C34.3611 23.0823 34.7455 22.4129 34.9411 21.6794C35.6622 18.9738 35.6621 13.3243 35.6621 13.3243C35.6621 13.3243 35.6622 7.67793 34.9411 4.96917ZM14.8919 18.4518V8.19836L23.9054 13.3259L14.8919 18.4518Z" stroke="#2E2E2E" stroke-opacity="0.9" stroke-width="2.35135" stroke-miterlimit="10" stroke-linejoin="round" />
                            </svg>

                        </a>
                    </div>
                </div>


                {/* CTA Card */}

                <div className="rounded-[24px] px-[58px] py-[24px] shadow-[inset_4px_4px_8px_0px_rgba(0,0,0,0.1)]
 flex flex-col justify-center items-center text-center">


                    <h3 className="text-xl font-bold text-gray-900 mb-2">Request</h3>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Manufacturing Quote</h3>

                    <button
                        onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="w-full max-w-[300px] py-4 px-6 rounded-xl font-semibold text-sm text-white transition-all duration-300"
                        style={{
                            background: '#FE5200',
                            border: '1px solid transparent',
                            backgroundImage: `linear-gradient(#FE5200, #FE5200), linear-gradient(180deg, #FFA880 0%, #FE5200 100%)`,
                            backgroundOrigin: 'border-box',
                            backgroundClip: 'padding-box, border-box',
                            boxShadow: '0px -11px 16px 0px #FFF3ED4D inset'
                        }}
                    >
                        Get Your Quotation
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Contact;
