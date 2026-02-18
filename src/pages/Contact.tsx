import React, { useState } from 'react';
import Badge from '../components/common/Badge';
import contact from '../assets/img/contact_location.png';
import factory from '../assets/img/factory_icon.png';
import instaIcon from '../assets/img/social_media_icons/instagram.png';
import linkedinIcon from '../assets/img/social_media_icons/linkedin.png';
import whatsappIcon from '../assets/img/social_media_icons/whatsapp.png';
import youtubeIcon from '../assets/img/social_media_icons/youtube.png';
import { useMutation } from 'convex/react';
import { api } from '../../convex/_generated/api';

const Contact = () => {
    const saveContact = useMutation(api.contacts.saveContact);
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (status === 'submitting') return;

        setStatus('submitting');
        try {
            await saveContact({
                ...formData,
                source: 'contact_page'
            });
            setStatus('success');
            setFormData({
                fullName: '',
                companyName: '',
                businessEmail: '',
                phoneNumber: '',
                message: ''
            });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error('Failed to send message:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <div className="mx-4 sm:mx-[92px] my-8 sm:my-[65px] min-h-screen flex flex-col items-center justify-center">

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

                <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-[36px] px-2 sm:px-[40px]">
                    <div className='flex flex-col gap-[8px]'>
                        <label className="label-text">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            required
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
                            required
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
                            required
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
                            {status === 'success' ? 'Message sent successfully!' : status === 'error' ? 'Something went wrong. Please try again.' : "You'll receive a response in your inbox instantly."}
                        </p>
                        <button
                            type="submit"
                            disabled={status === 'submitting'}
                            className="w-full py-2 px-4 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-[10px] sm:text-base text-white transition duration-300  ease-in-out disabled:opacity-50"
                            style={{
                                background: '#FE5200',
                                border: '1px solid transparent',
                                backgroundImage: 'linear-gradient(#FE5200, #FE5200), linear-gradient(180deg, #FFA880 0%, #FE5200 100%)',
                                backgroundOrigin: 'border-box',
                                backgroundClip: 'padding-box, border-box',
                                boxShadow: '0px -11px 16px 0px #FFF3ED4D inset'
                            }}
                        >
                            {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Message Sent' : 'Send Your Queries'}
                        </button>
                    </div>


                </form>
            </div>

            {/* Footer Section */}
            <div className="w-full mt-12 sm:mt-[92px]">
                {/* Top Row - Map and Address Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 min-h-[410px]">
                    {/* Map */}
                    <div className="relative bg-gray-100 rounded-2xl overflow-hidden h-[250px] sm:h-full">
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

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] h-full ">
                                {/* Office Address */}
                                <div className="relative overflow-hidden rounded-2xl p-6 h-full bg-transparent group  bg-gradient-to-b from-primary/10 to-transparent">
                                    {/* Ellipse Gradient Background */}
                                    <div className="ellipse-glow-container">
                                        <div className="ellipse-glow-base" />
                                        <div className="ellipse-glow-hover" />
                                    </div>
                                    {/* Border decorations */}
                                    <div className="absolute top-0 left-[1.5rem] right-[1.5rem] h-[2px] bg-[#FE5200]/40" />
                                    <div className="absolute top-0 left-0 w-[1.5rem] h-[1.5rem] border-t-2 border-l-2 border-[#FE5200]/40 rounded-tl-2xl" />
                                    <div className="absolute top-0 right-0 w-[1.5rem] h-[1.5rem] border-t-2 border-r-2 border-[#FE5200]/40 rounded-tr-2xl" />
                                    <div className="absolute top-[1.5rem] left-0 w-[2px] h-[calc(100%-3rem)] bg-gradient-to-b from-[#FE5200]/40 to-transparent" />
                                    <div className="absolute top-[1.5rem] right-0 w-[2px] h-[calc(100%-3rem)] bg-gradient-to-b from-[#FE5200]/40 to-transparent" />

                                    <div className="w-[80px] h-[80px] flex items-center justify-center p-[8px] animated-premium-border mb-[30px]">
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



                                {/* Factory Address */}
                                <div className="relative overflow-hidden rounded-2xl p-6 h-full bg-transparent group bg-gradient-to-b from-primary/10 to-transparent">
                                    {/* Ellipse Gradient Background */}
                                    <div className="ellipse-glow-container">
                                        <div className="ellipse-glow-base" />
                                        <div className="ellipse-glow-hover" />
                                    </div>
                                    {/* Border decorations */}
                                    <div className="absolute top-0 left-[1.5rem] right-[1.5rem] h-[2px] bg-[#FE5200]/40" />
                                    <div className="absolute top-0 left-0 w-[1.5rem] h-[1.5rem] border-t-2 border-l-2 border-[#FE5200]/40 rounded-tl-2xl" />
                                    <div className="absolute top-0 right-0 w-[1.5rem] h-[1.5rem] border-t-2 border-r-2 border-[#FE5200]/40 rounded-tr-2xl" />
                                    <div className="absolute top-[1.5rem] left-0 w-[2px] h-[calc(100%-3rem)] bg-gradient-to-b from-[#FE5200]/40 to-transparent" />
                                    <div className="absolute top-[1.5rem] right-0 w-[2px] h-[calc(100%-3rem)] bg-gradient-to-b from-[#FE5200]/40 to-transparent" />

                                    <div className="w-[80px] h-[80px] flex items-center justify-center mb-[30px] p-[8px] animated-premium-border">
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
                        <div className="relative overflow-hidden rounded-2xl p-6 h-full bg-transparent group bg-gradient-to-b from-primary/10 to-transparent">
                            {/* Ellipse Gradient Background */}
                            <div className="ellipse-glow-container">
                                <div className="ellipse-glow-base" />
                                <div className="ellipse-glow-hover" />
                            </div>
                            {/* Border decorations */}
                            <div className="absolute top-0 left-[1.5rem] right-[1.5rem] h-[2px] bg-[#FE5200]/40" />
                            <div className="absolute top-0 left-0 w-[1.5rem] h-[1.5rem] border-t-2 border-l-2 border-[#FE5200]/40 rounded-tl-2xl" />
                            <div className="absolute top-0 right-0 w-[1.5rem] h-[1.5rem] border-t-2 border-r-2 border-[#FE5200]/40 rounded-tr-2xl" />
                            <div className="absolute top-[1.5rem] left-0 w-[2px] h-[calc(100%-3rem)] bg-gradient-to-b from-[#FE5200]/40 to-transparent" />
                            <div className="absolute top-[1.5rem] right-0 w-[2px] h-[calc(100%-3rem)] bg-gradient-to-b from-[#FE5200]/40 to-transparent" />

                            <div className="flex gap-[24px] w-full">
                                <div className="w-[80px] h-[80px] p-[8px] animated-premium-border flex items-center justify-center flex-shrink-0">
                                    <svg width="56" height="44" viewBox="0 0 56 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.00021 10.5707L20.6135 22.9813C23.1815 24.6907 24.4642 25.5467 25.8509 25.88C27.0775 26.1733 28.3549 26.1733 29.5789 25.88C30.9655 25.5467 32.2482 24.6907 34.8162 22.9813L53.4295 10.5707M14.8002 42H40.6295C45.1095 42 47.3495 42 49.0615 41.128C50.5658 40.3606 51.7886 39.1368 52.5549 37.632C53.4295 35.92 53.4295 33.68 53.4295 29.2V14.8C53.4295 10.32 53.4295 8.08 52.5575 6.368C51.7906 4.86277 50.5668 3.63898 49.0615 2.872C47.3495 2 45.1095 2 40.6295 2H14.8002C10.3202 2 8.08021 2 6.36821 2.872C4.86397 3.63943 3.64116 4.86318 2.87488 6.368C2.00021 8.08 2.00021 10.32 2.00021 14.8V29.2C2.00021 33.68 2.00021 35.92 2.87221 37.632C3.63919 39.1372 4.86298 40.361 6.36821 41.128C8.08021 42 10.3202 42 14.8002 42Z" stroke="#2E2E2E" stroke-opacity="0.9" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                </div>
                                <div>
                                    <h4 className="font-montserrat font-extrabold text-[14px] leading-[145%] letter-spacing-[4%] text-[#FE5200]/80">Our Mail</h4>
                                    <p className="font-poppins font-[600] text-[16px] leading-[145%] letter-spacing-[0%] text-[#2e2e2e]">info@thirumolaang.com</p>
                                    <p className="font-poppins font-[600] text-[16px] leading-[145%] letter-spacing-[0%] text-[#2e2e2e]">thirumolaang@gmail.com</p>
                                </div>
                            </div>
                        </div>


                        {/* Phone */}
                        <div className="relative overflow-hidden rounded-2xl p-6 h-full bg-transparent group bg-gradient-to-b from-primary/10 to-transparent">
                            {/* Ellipse Gradient Background */}
                            <div className="ellipse-glow-container">
                                <div className="ellipse-glow-base" />
                                <div className="ellipse-glow-hover" />
                            </div>
                            {/* Border decorations */}
                            <div className="absolute top-0 left-[1.5rem] right-[1.5rem] h-[2px] bg-[#FE5200]/40" />
                            <div className="absolute top-0 left-0 w-[1.5rem] h-[1.5rem] border-t-2 border-l-2 border-[#FE5200]/40 rounded-tl-2xl" />
                            <div className="absolute top-0 right-0 w-[1.5rem] h-[1.5rem] border-t-2 border-r-2 border-[#FE5200]/40 rounded-tr-2xl" />
                            <div className="absolute top-[1.5rem] left-0 w-[2px] h-[calc(100%-3rem)] bg-gradient-to-b from-[#FE5200]/40 to-transparent" />
                            <div className="absolute top-[1.5rem] right-0 w-[2px] h-[calc(100%-3rem)] bg-gradient-to-b from-[#FE5200]/40 to-transparent" />

                            <div className="flex gap-[25px] w-full">
                                <div className="w-[80px] h-[80px] p-[8px] animated-premium-border flex items-center justify-center flex-shrink-0">
                                    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M28.4 2C34.1287 2 39.6227 4.27571 43.6735 8.32649C47.7243 12.3773 50 17.8713 50 23.6M28.4 11.6C31.5826 11.6 34.6348 12.8643 36.8853 15.1147C39.1357 17.3652 40.4 20.4174 40.4 23.6M30.3968 36.9632C30.8925 37.1908 31.4509 37.2428 31.9801 37.1107C32.5092 36.9785 32.9776 36.67 33.308 36.236L34.16 35.12C34.6071 34.5239 35.1869 34.04 35.8534 33.7068C36.5199 33.3735 37.2548 33.2 38 33.2H45.2C46.473 33.2 47.6939 33.7057 48.5941 34.6059C49.4943 35.5061 50 36.727 50 38V45.2C50 46.473 49.4943 47.6939 48.5941 48.5941C47.6939 49.4943 46.473 50 45.2 50C33.7426 50 22.7546 45.4486 14.653 37.347C6.55142 29.2454 2 18.2574 2 6.8C2 5.52696 2.50571 4.30606 3.40589 3.40589C4.30606 2.50571 5.52696 2 6.8 2H14C15.273 2 16.4939 2.50571 17.3941 3.40589C18.2943 4.30606 18.8 5.52696 18.8 6.8V14C18.8 14.7452 18.6265 15.4801 18.2933 16.1466C17.96 16.8131 17.4761 17.3929 16.88 17.84L15.7568 18.6824C15.3162 19.0188 15.0056 19.4974 14.8779 20.0368C14.7501 20.5763 14.8131 21.1433 15.056 21.6416C18.336 28.3037 23.7306 33.6915 30.3968 36.9632Z" stroke="#2E2E2E" stroke-opacity="0.9" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                </div>
                                <div>
                                    <h4 className="font-montserrat font-extrabold text-[14px] leading-[145%] letter-spacing-[4%] text-[#FE5200]/80">Our Phone</h4>
                                    <p className="font-poppins font-[600] text-[16px] leading-[145%] letter-spacing-[0%] text-[#2e2e2e]">+91 94400 20332</p>
                                    <p className="font-poppins font-[600] text-[16px] leading-[145%] letter-spacing-[0%] text-[#2e2e2e]">+91 86378 17507</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Social Icons */}
                    <div className="bg-[#FFF3ED]/60 rounded-[16px] flex flex-wrap sm:flex-nowrap gap-4 sm:gap-[48px] py-4 sm:py-[22px] px-4 sm:px-[20px] w-full items-center justify-center">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link-expand group">
                            <div className="social-icon-wrapper">
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="social-icon-svg">
                                    <g clip-path="url(#clip0_947_424)">
                                        <rect width="48" height="48" rx="6" fill="white" fill-opacity="0.7" />
                                        <rect x="0.324324" y="0.324324" width="47.3514" height="47.3514" rx="5.67568" stroke="url(#paint0_linear_947_424)" stroke-width="0.648649" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0283 7.14856C11.885 7.14856 10.7885 7.60273 9.98011 8.41117C9.17167 9.2196 8.7175 10.3161 8.7175 11.4594C8.7175 12.6027 9.17167 13.6991 9.98011 14.5076C10.7885 15.316 11.885 15.7702 13.0283 15.7702C14.1716 15.7702 15.2681 15.316 16.0765 14.5076C16.8849 13.6991 17.3391 12.6027 17.3391 11.4594C17.3391 10.3161 16.8849 9.2196 16.0765 8.41117C15.2681 7.60273 14.1716 7.14856 13.0283 7.14856ZM11.0689 11.4594C11.0689 10.9397 11.2753 10.4413 11.6428 10.0738C12.0102 9.70635 12.5086 9.49991 13.0283 9.49991C13.548 9.49991 14.0464 9.70635 14.4139 10.0738C14.7813 10.4413 14.9878 10.9397 14.9878 11.4594C14.9878 11.9791 14.7813 12.4774 14.4139 12.8449C14.0464 13.2124 13.548 13.4188 13.0283 13.4188C12.5086 13.4188 12.0102 13.2124 11.6428 12.8449C11.2753 12.4774 11.0689 11.9791 11.0689 11.4594ZM8.7175 17.7296C8.7175 17.4178 8.84136 17.1188 9.06185 16.8983C9.28233 16.6778 9.58137 16.554 9.89317 16.554H16.1634C16.4753 16.554 16.7743 16.6778 16.9948 16.8983C17.2153 17.1188 17.3391 17.4178 17.3391 17.7296V38.108C17.3391 38.4198 17.2153 38.7189 16.9948 38.9393C16.7743 39.1598 16.4753 39.2837 16.1634 39.2837H9.89317C9.58137 39.2837 9.28233 39.1598 9.06185 38.9393C8.84136 38.7189 8.7175 38.4198 8.7175 38.108V17.7296ZM11.0689 18.9053V36.9323H14.9878V18.9053H11.0689ZM19.6905 17.7296C19.6905 17.4178 19.8143 17.1188 20.0348 16.8983C20.2553 16.6778 20.5543 16.554 20.8661 16.554H27.1364C27.4482 16.554 27.7473 16.6778 27.9677 16.8983C28.1882 17.1188 28.3121 17.4178 28.3121 17.7296V18.41L28.994 18.1168C30.1698 17.6146 31.417 17.2999 32.6903 17.1841C37.0403 16.7891 40.8526 20.2064 40.8526 24.5956V38.108C40.8526 38.4198 40.7288 38.7189 40.5083 38.9393C40.2878 39.1598 39.9888 39.2837 39.677 39.2837H33.4067C33.0949 39.2837 32.7958 39.1598 32.5754 38.9393C32.3549 38.7189 32.231 38.4198 32.231 38.108V27.135C32.231 26.6154 32.0246 26.117 31.6571 25.7495C31.2896 25.382 30.7912 25.1756 30.2716 25.1756C29.7519 25.1756 29.2535 25.382 28.886 25.7495C28.5185 26.117 28.3121 26.6154 28.3121 27.135V38.108C28.3121 38.4198 28.1882 38.7189 27.9677 38.9393C27.7473 39.1598 27.4482 39.2837 27.1364 39.2837H20.8661C20.5543 39.2837 20.2553 39.1598 20.0348 38.9393C19.8143 38.7189 19.6905 38.4198 19.6905 38.108V17.7296ZM22.0418 18.9053V36.9323H25.9607V27.135C25.9607 25.9917 26.4149 24.8953 27.2233 24.0868C28.0318 23.2784 29.1283 22.8242 30.2716 22.8242C31.4149 22.8242 32.5113 23.2784 33.3198 24.0868C34.1282 24.8953 34.5824 25.9917 34.5824 27.135V36.9323H38.5013V24.5956C38.5013 21.6109 35.8976 19.2533 32.9051 19.5261C31.877 19.6193 30.8699 19.8732 29.9204 20.2785L27.6004 21.2739C27.4215 21.3508 27.2262 21.382 27.0323 21.3647C26.8383 21.3475 26.6516 21.2823 26.489 21.1751C26.3265 21.0678 26.1931 20.9219 26.1009 20.7503C26.0087 20.5788 25.9605 20.387 25.9607 20.1923V18.9053H22.0418Z" fill="#2E2E2E" fill-opacity="0.9" />
                                    </g>
                                    <defs>
                                        <linearGradient id="paint0_linear_947_424" x1="48" y1="0" x2="0" y2="48" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#FF5E00" />
                                            <stop offset="0.25" stop-color="white" />
                                            <stop offset="0.49599" stop-color="white" />
                                            <stop offset="0.745192" stop-color="white" />
                                            <stop offset="1" stop-color="#FF5E00" />
                                        </linearGradient>
                                        <clipPath id="clip0_947_424">
                                            <rect width="48" height="48" rx="6" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                <img src={linkedinIcon} alt="LinkedIn" className="social-icon-png" />
                            </div>
                            <span className="social-name">LinkedIn</span>
                        </a>
                        <a href="https://wa.me/yournumber" target="_blank" rel="noopener noreferrer" className=" social-link-expand group">
                            <div className="social-icon-wrapper">
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="social-icon-svg">
                                    <g clip-path="url(#clip0_825_621)">
                                        <rect width="48" height="48" rx="6" fill="white" fill-opacity="0.7" />
                                        <rect x="0.324324" y="0.324324" width="47.3514" height="47.3514" rx="5.67568" stroke="url(#paint0_linear_825_621)" stroke-width="0.648649" />
                                        <path d="M35.0527 12.8854C33.6153 11.434 31.9035 10.2832 30.0169 9.50006C28.1303 8.7169 26.1067 8.31705 24.0641 8.32381C15.5051 8.32381 8.52946 15.2995 8.52946 23.8584C8.52946 26.6017 9.25054 29.2665 10.5986 31.6179L8.40405 39.6752L16.6338 37.5119C18.9068 38.7503 21.4619 39.4087 24.0641 39.4087C32.623 39.4087 39.5986 32.433 39.5986 23.8741C39.5986 19.72 37.9841 15.8168 35.0527 12.8854ZM24.0641 36.7752C21.7441 36.7752 19.4711 36.1481 17.4803 34.9725L17.01 34.6903L12.1192 35.9757L13.4203 31.2103L13.1068 30.7244C11.8175 28.6662 11.1331 26.287 11.1316 23.8584C11.1316 16.7417 16.9316 10.9417 24.0484 10.9417C27.497 10.9417 30.7419 12.2898 33.1716 14.7352C34.3749 15.9326 35.3285 17.357 35.977 18.9258C36.6255 20.4946 36.956 22.1765 36.9495 23.8741C36.9808 30.9908 31.1808 36.7752 24.0641 36.7752ZM31.1495 27.119C30.7576 26.9308 28.8451 25.9903 28.5003 25.8492C28.1397 25.7238 27.8889 25.6611 27.6224 26.0373C27.3559 26.4292 26.6192 27.3071 26.3997 27.5579C26.1803 27.8244 25.9451 27.8557 25.5532 27.6519C25.1614 27.4638 23.9073 27.0406 22.4338 25.7238C21.2738 24.6892 20.5057 23.4195 20.2705 23.0276C20.0511 22.6357 20.2392 22.4319 20.443 22.2281C20.6154 22.0557 20.8349 21.7735 21.023 21.5541C21.2111 21.3346 21.2895 21.1622 21.4149 20.9114C21.5403 20.6449 21.4776 20.4254 21.3835 20.2373C21.2895 20.0492 20.5057 18.1368 20.1922 17.353C19.8786 16.6006 19.5495 16.6946 19.3143 16.679H18.5619C18.2954 16.679 17.8878 16.773 17.5273 17.1649C17.1824 17.5568 16.1792 18.4973 16.1792 20.4098C16.1792 22.3222 17.5743 24.1719 17.7624 24.4227C17.9505 24.6892 20.5057 28.6081 24.3932 30.2854C25.3181 30.693 26.0392 30.9281 26.6035 31.1006C27.5284 31.3984 28.3749 31.3514 29.0489 31.2573C29.8013 31.1476 31.3532 30.3168 31.6668 29.4076C31.9959 28.4984 31.9959 27.7303 31.8862 27.5579C31.7765 27.3854 31.5413 27.3071 31.1495 27.119Z" fill="#2E2E2E" fill-opacity="0.9" />
                                    </g>
                                    <defs>
                                        <linearGradient id="paint0_linear_825_621" x1="48" y1="0" x2="0" y2="48" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#FF5E00" />
                                            <stop offset="0.25" stop-color="white" />
                                            <stop offset="0.49599" stop-color="white" />
                                            <stop offset="0.745192" stop-color="white" />
                                            <stop offset="1" stop-color="#FF5E00" />
                                        </linearGradient>
                                        <clipPath id="clip0_825_621">
                                            <rect width="48" height="48" rx="6" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                <img src={whatsappIcon} alt="WhatsApp" className="social-icon-png" />
                            </div>
                            <span className="social-name">WhatsApp</span>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link-expand group">
                            <div className="social-icon-wrapper">
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="social-icon-svg">
                                    <g clip-path="url(#clip0_825_622)">
                                        <rect width="48" height="48" rx="6" fill="white" fill-opacity="0.7" />
                                        <rect x="0.324324" y="0.324324" width="47.3514" height="47.3514" rx="5.67568" stroke="url(#paint0_linear_825_622)" stroke-width="0.648649" />
                                        <path d="M17.4168 8.3241H30.5844C35.6006 8.3241 39.6763 12.3998 39.6763 17.416V30.5836C39.6763 32.9949 38.7184 35.3074 37.0133 37.0125C35.3083 38.7176 32.9957 39.6754 30.5844 39.6754H17.4168C12.4006 39.6754 8.32495 35.5998 8.32495 30.5836V17.416C8.32495 15.0047 9.28284 12.6921 10.9879 10.9871C12.693 9.28199 15.0055 8.3241 17.4168 8.3241ZM17.1033 11.4592C15.6066 11.4592 14.1713 12.0538 13.113 13.1121C12.0546 14.1704 11.4601 15.6058 11.4601 17.1025V30.8971C11.4601 34.0165 13.9839 36.5403 17.1033 36.5403H30.8979C32.3946 36.5403 33.83 35.9458 34.8883 34.8874C35.9466 33.8291 36.5412 32.3938 36.5412 30.8971V17.1025C36.5412 13.983 34.0174 11.4592 30.8979 11.4592H17.1033ZM32.2304 13.8106C32.75 13.8106 33.2484 14.017 33.6159 14.3845C33.9834 14.752 34.1898 15.2504 34.1898 15.77C34.1898 16.2897 33.9834 16.7881 33.6159 17.1556C33.2484 17.5231 32.75 17.7295 32.2304 17.7295C31.7107 17.7295 31.2123 17.5231 30.8448 17.1556C30.4773 16.7881 30.2709 16.2897 30.2709 15.77C30.2709 15.2504 30.4773 14.752 30.8448 14.3845C31.2123 14.017 31.7107 13.8106 32.2304 13.8106ZM24.0006 16.1619C26.0794 16.1619 28.0729 16.9877 29.5428 18.4576C31.0127 19.9275 31.8385 21.921 31.8385 23.9998C31.8385 26.0785 31.0127 28.0721 29.5428 29.542C28.0729 31.0118 26.0794 31.8376 24.0006 31.8376C21.9219 31.8376 19.9283 31.0118 18.4584 29.542C16.9886 28.0721 16.1628 26.0785 16.1628 23.9998C16.1628 21.921 16.9886 19.9275 18.4584 18.4576C19.9283 16.9877 21.9219 16.1619 24.0006 16.1619ZM24.0006 19.2971C22.7534 19.2971 21.5572 19.7925 20.6753 20.6745C19.7934 21.5564 19.2979 22.7525 19.2979 23.9998C19.2979 25.247 19.7934 26.4432 20.6753 27.3251C21.5572 28.207 22.7534 28.7025 24.0006 28.7025C25.2479 28.7025 26.444 28.207 27.3259 27.3251C28.2079 26.4432 28.7033 25.247 28.7033 23.9998C28.7033 22.7525 28.2079 21.5564 27.3259 20.6745C26.444 19.7925 25.2479 19.2971 24.0006 19.2971Z" fill="#2E2E2E" fill-opacity="0.9" />
                                    </g>
                                    <defs>
                                        <linearGradient id="paint0_linear_825_622" x1="48" y1="0" x2="0" y2="48" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#FF5E00" />
                                            <stop offset="0.25" stop-color="white" />
                                            <stop offset="0.49599" stop-color="white" />
                                            <stop offset="0.745192" stop-color="white" />
                                            <stop offset="1" stop-color="#FF5E00" />
                                        </linearGradient>
                                        <clipPath id="clip0_825_622">
                                            <rect width="48" height="48" rx="6" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                <img src={instaIcon} alt="Instagram" className="social-icon-png" />
                            </div>
                            <span className="social-name">Instagram</span>
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className=" social-link-expand group">
                            <div className="social-icon-wrapper">
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="social-icon-svg">
                                    <g clip-path="url(#clip0_825_623)">
                                        <rect width="48" height="48" rx="6" fill="white" fill-opacity="0.7" />
                                        <rect x="0.324324" y="0.324324" width="47.3514" height="47.3514" rx="5.67568" stroke="url(#paint0_linear_825_623)" stroke-width="0.648649" />
                                        <path d="M40.523 15.2527C40.3272 14.5196 39.9426 13.8505 39.4077 13.3122C38.8727 12.774 38.206 12.3853 37.4741 12.185C34.7857 11.4592 24.0008 11.4592 24.0008 11.4592C24.0008 11.4592 13.2159 11.4592 10.5276 12.185C9.79561 12.3853 9.12893 12.774 8.59397 13.3122C8.05901 13.8505 7.67447 14.5196 7.47865 15.2527C6.75757 17.9615 6.75757 23.6079 6.75757 23.6079C6.75757 23.6079 6.75757 29.2543 7.47865 31.963C7.67423 32.6965 8.05867 33.3659 8.59364 33.9044C9.12861 34.443 9.79542 34.8319 10.5276 35.0323C13.2175 35.7565 24.0008 35.7565 24.0008 35.7565C24.0008 35.7565 34.7857 35.7565 37.4741 35.0323C38.2062 34.8319 38.873 34.443 39.408 33.9044C39.943 33.3659 40.3274 32.6965 40.523 31.963C41.2441 29.2574 41.2441 23.6079 41.2441 23.6079C41.2441 23.6079 41.2441 17.9615 40.523 15.2527ZM20.4738 28.7354V18.4819L29.4873 23.6094L20.4738 28.7354Z" stroke="#2E2E2E" stroke-opacity="0.9" stroke-width="2.35135" stroke-miterlimit="10" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <linearGradient id="paint0_linear_825_623" x1="48" y1="0" x2="0" y2="48" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#FF5E00" />
                                            <stop offset="0.25" stop-color="white" />
                                            <stop offset="0.49599" stop-color="white" />
                                            <stop offset="0.745192" stop-color="white" />
                                            <stop offset="1" stop-color="#FF5E00" />
                                        </linearGradient>
                                        <clipPath id="clip0_825_623">
                                            <rect width="48" height="48" rx="6" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                <img src={youtubeIcon} alt="YouTube" className="social-icon-png" />
                            </div>
                            <span className="social-name">YouTube</span>
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
                            backgroundImage: 'linear-gradient(#FE5200, #FE5200), linear-gradient(180deg, #FFA880 0%, #FE5200 100%)',
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
