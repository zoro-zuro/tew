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
import { motion } from 'framer-motion';

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
                            className={`relative w-full py-2 px-4 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-[10px] sm:text-base text-white transition duration-300 ease-in-out disabled:opacity-50 before:content-[''] before:absolute before:-inset-[4px] before:rounded-[12px] sm:before:rounded-[16px] before:transition-all before:duration-300 before:hover:border-[4px] ${status === 'success'
                                    ? "before:border-[#22c55e]/35 shadow-[0px_4px_16px_0px_rgba(34,197,94,0.4)]"
                                    : "before:border-[#FE5200]/35 shadow-[0px_4px_16px_0px_rgba(255,94,0,0.4)]"
                                }`}
                            style={{
                                background: status === 'success' ? '#22c55e' : '#FE5200',
                                border: '1px solid transparent',
                                backgroundImage: status === 'success'
                                    ? 'linear-gradient(#22c55e, #22c55e), linear-gradient(180deg, #86efac 0%, #22c55e 100%)'
                                    : 'linear-gradient(#FE5200, #FE5200), linear-gradient(180deg, #FFA880 0%, #FE5200 100%)',
                                backgroundOrigin: 'border-box',
                                backgroundClip: 'padding-box, border-box',
                                boxShadow: status === 'success'
                                    ? 'inset 0px -11px 16px 0px rgba(134, 239, 172, 0.3)'
                                    : 'inset 0px -11px 16px 0px rgba(255, 243, 237, 0.3)'
                            }}
                        >
                            {status === 'submitting' ? (
                                <div className="flex gap-1 justify-center items-center h-[24px]">
                                    {[0, 1, 2].map((i) => (
                                        <motion.div
                                            key={i}
                                            className="w-1.5 h-1.5 bg-white rounded-full"
                                            animate={{ y: [0, -6, 0] }}
                                            transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
                                        />
                                    ))}
                                </div>
                            ) : status === 'success' ? (
                                'Check Your Inbox'
                            ) : (
                                'Send Your Queries'
                            )}
                        </button>
                    </div>
                </form>
            </div>

            {/* Footer Section */}
            <div className="w-full mt-12 sm:mt-[92px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 min-h-[410px]">
                    <div className="relative bg-gray-100 rounded-2xl overflow-hidden h-[250px] sm:h-full">
                        <img src={contact} alt="Location Map" className="w-full h-full object-cover" />
                        <div className='absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100'>
                            <p className='font-monserrat font-extrabold text-[18px] leading-[145%] text-white'>See On Gmap</p>
                        </div>
                    </div>

                    <div className="flex flex-col h-full gap-[8px]">
                        <div className="h-full">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] h-full">
                                {/* Office Address */}
                                <div className="relative overflow-hidden rounded-2xl p-6 h-full bg-transparent group bg-gradient-to-b from-primary/10 to-transparent">
                                    <div className="ellipse-glow-container">
                                        <div className="ellipse-glow-base" />
                                        <div className="ellipse-glow-hover" />
                                    </div>
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
                                        <p className="font-poppins text-[16px] font-semibold text-[#2e2e2e] leading-[145%] letter-spacing-[0%]"> No. 18/152, Guindy Industrial Estate, Chennai - 600032.</p>
                                    </div>
                                </div>

                                {/* Factory Address */}
                                <div className="relative overflow-hidden rounded-2xl p-6 h-full bg-transparent group bg-gradient-to-b from-primary/10 to-transparent">
                                    <div className="ellipse-glow-container">
                                        <div className="ellipse-glow-base" />
                                        <div className="ellipse-glow-hover" />
                                    </div>
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
                                        <p className="font-poppins text-[16px] font-semibold text-[#2e2e2e] leading-[145%] letter-spacing-[0%]">Dp - 27, Sido, Kolathur, Industrial Estate, Tiruvallur, Tamil Nadu - 602 003.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full cols-span-1 bg-[#FFF3ED99]/60 rounded-[16px] flex items-center justify-center p-6">
                            <div className="h-full font-montserrat font-extrabold text-[20px] leading-[145%] text-[#FE5200]/70 letter-spacing-[4%] mr-[16px] mb-2">“</div>
                            <p className="relative font-poppins font-semibold text-[14px] leading-[145%] text-[#2e2e2e]/90 text-center letter-spacing-[1%]">Complete OEM manufacturing, engineered for reliability. <br />Forged and machined components built to perform at scale.</p>
                            <div className="h-full font-montserrat font-extrabold text-[20px] leading-[145%] text-[#FE5200]/70 letter-spacing-[4%] ml-[16px] rotate-[-180deg] mt-2">“</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Row - Contact Info and CTA */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-[60%_40%] gap-[16px]">
                <div className="flex flex-col gap-[8px]">
                    <div className="grid grid-cols-1 sm:grid-cols-[53%_45%] gap-[16px] h-full">
                        {/* Email */}
                        <div className="relative overflow-hidden rounded-2xl p-6 h-full bg-transparent group bg-gradient-to-b from-primary/10 to-transparent">
                            <div className="ellipse-glow-container">
                                <div className="ellipse-glow-base" />
                                <div className="ellipse-glow-hover" />
                            </div>
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
                                    <p className="font-poppins font-[600] text-[16px] leading-[145%] text-[#2e2e2e]">info@thirumolaang.com</p>
                                    <p className="font-poppins font-[600] text-[16px] leading-[145%] text-[#2e2e2e]">thirumolaang@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="relative overflow-hidden rounded-2xl p-6 h-full bg-transparent group bg-gradient-to-b from-primary/10 to-transparent">
                            <div className="ellipse-glow-container">
                                <div className="ellipse-glow-base" />
                                <div className="ellipse-glow-hover" />
                            </div>
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
                                    <p className="font-poppins font-[600] text-[16px] leading-[145%] text-[#2e2e2e]">+91 94400 20332</p>
                                    <p className="font-poppins font-[600] text-[16px] leading-[145%] text-[#2e2e2e]">+91 86378 17507</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="bg-[#FFF3ED]/60 rounded-[16px] flex flex-wrap sm:flex-nowrap gap-4 sm:gap-[48px] py-4 sm:py-[22px] px-4 sm:px-[20px] w-full items-center justify-center">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link-expand group">
                            <div className="social-icon-wrapper">
                                <img src={linkedinIcon} alt="LinkedIn" className="social-icon-png" />
                            </div>
                            <span className="social-name">LinkedIn</span>
                        </a>
                        <a href="https://wa.me/yournumber" target="_blank" rel="noopener noreferrer" className="social-link-expand group">
                            <div className="social-icon-wrapper">
                                <img src={whatsappIcon} alt="WhatsApp" className="social-icon-png" />
                            </div>
                            <span className="social-name">WhatsApp</span>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link-expand group">
                            <div className="social-icon-wrapper">
                                <img src={instaIcon} alt="Instagram" className="social-icon-png" />
                            </div>
                            <span className="social-name">Instagram</span>
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link-expand group">
                            <div className="social-icon-wrapper">
                                <img src={youtubeIcon} alt="YouTube" className="social-icon-png" />
                            </div>
                            <span className="social-name">YouTube</span>
                        </a>
                    </div>
                </div>

                {/* CTA Card */}
                <div className="rounded-[24px] px-[58px] py-[24px] shadow-[inset_4px_4px_8px_0px_rgba(0,0,0,0.1)] flex flex-col justify-center items-center text-center">
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
