import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Service-Details/test.css';
import Service from '../components/Service';
import service1 from './Service-MiniSlider-Imgs/service3.jpg';
import WOW from 'wowjs';
import 'animate.css';
import EmailForm from './EmailForm';
import { FaPassport, FaPlane, FaGlobe, FaHandshake, FaUniversity, FaBuilding } from "react-icons/fa";
import PagesImage from '../assets/imgs/Pages/PagesImage';

export default function Service6() {

    useEffect(() => {
        const wow = new WOW.WOW({ live: true });
        wow.init();
    }, []);


    return (
        <div className="ServicesDetailsMain md:mt-5 pt-5">
            <div className="container-fluid p-0 pt-5">

                <div className="pt-4 relative w-full">
                    <div
                        className="w-full h-[300px] md:h-[350px] lg:h-[400px] bg-cover bg-center overflow-hidden relative"
                        style={{ backgroundImage: `url(${PagesImage.careerImage})` }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#064974bb] to-[#06a2da99] backdrop-blur-sm flex flex-col justify-center items-center text-white text-center px-6 transition-all duration-500">
                            <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg">
                                Services
                            </h1>

                            <div className="mt-3 flex items-center space-x-2 text-sm md:text-lg font-medium opacity-90">
                                <Link to='/ServicePage' className="text-gray-200 hover:scale-105 hover:text-white transition duration-300 cursor-pointer">
                                    Services
                                </Link>

                                <span className="text-white">/ Business Visa </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* About Me */}
                <section className="bg-primary-white py-16 px-6 md:px-12 lg:px-24 bg-white">
                    <div className="max-w-7xl mb-2 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="grid grid-cols-2 gap-4 m-5">
                            <img
                                src="https://img.freepik.com/free-photo/businessman-holding-passport-ticket-airport_1150-11014.jpg"
                                alt="Business Visa Process"
                                className="rounded-lg border-5 border-[#1b6b9c] shadow-md w-full h-56 object-cover transition-all duration-300 hover:scale-105"
                                style={{ clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)" }}
                            />
                            <img
                                src="https://img.freepik.com/free-photo/business-meeting-conference-room_53876-101337.jpg"
                                alt="Corporate Visa Services"
                                className="rounded-lg border-5 border-[#1b6b9c] shadow-md w-full h-56 object-cover transition-all duration-300 hover:scale-105"
                                style={{ clipPath: "polygon(0% 0%, 90% 0%, 100% 100%, 10% 100%)" }}
                            />
                            <img
                                src="https://img.freepik.com/free-photo/business-travel-concept-passport-airplane-ticket-laptop-wooden-desk_123827-20257.jpg"
                                alt="Investor & Startup Visa"
                                className="rounded-lg border-5 border-[#1b6b9c] w-full h-64 object-cover shadow-md col-span-2 mx-auto transition-all duration-300 hover:scale-105"
                                style={{ clipPath: "polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)" }}
                            />
                        </div>

                        {/* Right Side - Content */}
                        <div className="mb-auto mt-4">
                            <h3 className="text-text-blue font-semibold uppercase">About Us</h3>
                            <h2 className="text-4xl font-bold text-primary-blue mt-2">
                                Your Trusted Business Visa & Immigration Consultants
                            </h2>
                            <p className="text-primary-black mt-4">
                                Expanding your business globally requires the right visa and immigration strategy. We provide
                                expert guidance for entrepreneurs, investors, and corporate professionals seeking hassle-free
                                business visa approvals. Whether you're attending a conference, setting up a new company, or
                                expanding operations, our team ensures a seamless and efficient visa process.
                            </p>
                            <div className="mt-4 space-y-4">
                                <div className="flex items-start">
                                    <FaPassport className="w-6 h-6 text-primary-red mr-3" />
                                    <p className="text-primary-black">Comprehensive support for business and investor visas.</p>
                                </div>
                                <div className="flex items-start">
                                    <FaPlane className="w-6 h-6 text-primary-red mr-3" />
                                    <p className="text-primary-black">Hassle-free travel documentation and processing.</p>
                                </div>
                                <div className="flex items-start">
                                    <FaGlobe className="w-6 h-6 text-primary-red mr-3" />
                                    <p className="text-primary-black">Expertise in corporate, startup, and entrepreneur visas.</p>
                                </div>
                                <div className="flex items-start">
                                    <FaHandshake className="w-6 h-6 text-primary-red mr-3" />
                                    <p className="text-primary-black">Trusted by global business leaders and investors.</p>
                                </div>
                                <div className="flex items-start">
                                    <p className="text-primary-black">
                                        Whether you're an established business looking for global expansion or an entrepreneur with
                                        a startup idea, we help you navigate visa regulations smoothly. Our experts assist in choosing
                                        the right visa category, preparing documentation, and ensuring compliance with immigration laws.
                                        With a track record of successful approvals, we simplify the process so you can focus on your
                                        business growth without worries.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div className="max-w-7xl mx-auto mt-5 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-3 bg-primary-grey rounded-xl shadow-lg flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-xl">
                            <div className="flex justify-center items-center gap-3">
                                <FaUniversity className="text-[#064974] text-5xl " />
                                <h4 className="text-2xl font-semibold text-primary-black">Our Vision</h4>
                            </div>
                            <p className="text-primary-black mt-3 text-sm leading-relaxed max-w-[80%]">
                                To be the top business visa consultancy, helping entrepreneurs and companies expand globally.
                            </p>
                        </div>

                        <div className="p-3 bg-primary-grey rounded-xl shadow-lg flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-xl">
                            <div className="flex justify-center items-center gap-3">
                                <FaBuilding className="text-[#064974] text-5xl " />
                                <h4 className="text-2xl font-semibold text-primary-black">Our Mission</h4>
                            </div>
                            <p className="text-primary-black mt-3 text-sm leading-relaxed max-w-[80%]">
                                Providing reliable, transparent, and efficient business visa solutions for global professionals.
                            </p>
                        </div>

                        <div className="p-3 bg-primary-grey rounded-xl shadow-lg flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-xl">
                            <div className="flex justify-center items-center gap-3">
                                <FaHandshake className="text-[#064974] text-5xl " />
                                <h4 className="text-2xl font-semibold text-primary-black">Our Values</h4>
                            </div>
                            <p className="text-primary-black mt-3 text-sm leading-relaxed max-w-[80%]">
                                Commitment, integrity, and client success are at the heart of our business visa services.
                            </p>
                        </div>
                    </div>
                </section>

                {/* HeroSection */}
                <section className="relative bg-gray-100 py-12">
                    {/* Background Image Section */}
                    <div className="relative mx-auto max-w-7xl rounded-3xl overflow-hidden">
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Sustainable Engineering"
                                className="w-full h-[500px] rounded object-cover"
                            />
                            <div className="absolute inset-0 rounded-3xl"></div>
                            <div className="absolute top-1/3 left-10 md:left-20 text-white">
                                <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-xl">
                                    Expand Globally <br /> with Hassle-Free <br /> Business Visa Solutions.
                                </h1>
                                <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-gray-200 transition">
                                    Get Your Visa Now
                                </button>
                            </div>
                        </div>

                        {/* Stats Section */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white p-8 rounded-2xl relative -mt-16 mx-6">
                            {/* Stat 1 */}
                            <div className="flex items-center space-x-4">
                                <FaGlobe className="text-blue-700 text-3xl" />
                                <div>
                                    <p className="text-gray-800 font-semibold">
                                        10,000+ successful business visas processed globally.
                                    </p>
                                </div>
                            </div>

                            {/* Stat 2 */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900">100+</h2>
                                <p className="text-gray-600">
                                    Countries covered, providing expert visa assistance.
                                </p>
                            </div>

                            {/* Stat 3 */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900">5000+</h2>
                                <p className="text-gray-600">
                                    Happy entrepreneurs and corporate professionals served.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WhyChooseUs */}
                <section className="bg-primary-grey py-16">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6 lg:px-16">

                        {/* Left Section */}
                        <div>
                            <h3 className="text-text-blue font-semibold text-lg uppercase tracking-wide">
                                [ Why Choose Us ]
                            </h3>
                            <h2 className="text-3xl font-bold text-primary-black mt-2">
                                Your Trusted Business Visa Experts
                            </h2>
                            <p className="text-primary-black mt-4">
                                Expanding your business globally requires the right visa and expert guidance. We specialize in securing
                                business visas for entrepreneurs, investors, and corporate professionals.
                            </p>
                            <p className="text-primary-black mt-4">
                                Whether you're attending international meetings, setting up a business abroad, or exploring new markets,
                                our team ensures a seamless and hassle-free visa application process.
                            </p>
                            <p className="text-primary-black mt-4">
                                Our experienced consultants provide personalized guidance tailored to your business goals, ensuring compliance
                                with all legal and immigration requirements.
                            </p>
                            <p className="text-primary-black mt-4">
                                With a proven track record of success, we help businesses and individuals secure visas with high approval rates.
                            </p>
                        </div>

                        {/* Right Section */}
                        <div className="bg-[#1b6b9c] text-white p-8 rounded-lg shadow-lg">
                            <ul className="space-y-4">
                                <li className="flex items-start space-x-2">
                                    <span className="text-xl">✔</span>
                                    <span>Expert Business Visa Consultation</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-xl">✔</span>
                                    <span>Fast & Hassle-Free Visa Processing</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-xl">✔</span>
                                    <span>Visa Assistance for Over 100+ Countries</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-xl">✔</span>
                                    <span>High Success Rate for Business & Investor Visas</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-xl">✔</span>
                                    <span>End-to-End Support from Documentation to Approval</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-xl">✔</span>
                                    <span>100% Transparency & No Hidden Fees</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-xl">✔</span>
                                    <span>Specialized Assistance for Startups & Entrepreneurs</span>
                                </li>
                            </ul>

                            <div className="mt-6 text-center">
                                <Link to='/AboutPage' className="bg-primary-red text-white font-semibold border-2 uppercase text-sm px-6 py-2 rounded-lg shadow-md hover:bg-primary-red-hover transition-all">
                                    Learn More About Business Visas
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container-fluid feature py-5 bg-gray-100">
                    <div className="px-5 md:px-10 lg:px-16">
                        {/* Section Header */}
                        <div className="text-center mx-auto pb-10 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "800px" }}>
                            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">
                                Business Visa <span className="text-[#B21E24]"> & Corporate Immigration Solutions</span>
                            </h1>
                            <p className="mt-3 text-gray-600 font-medium text-sm md:text-base">
                                We provide expert guidance for business professionals and entrepreneurs seeking seamless entry into global markets.
                                Our dedicated team ensures a smooth business visa process, from documentation to approval.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Image Section */}
                            <div className="relative rounded-full overflow-hidden flex justify-center items-center">
                                <div className="relative w-full max-w-sm max-h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden rounded-full">
                                    <img src={service1} className="w-full h-full object-cover rounded-xl transform transition-all duration-500 hover:scale-105" alt="Business Visa" />
                                    <div className="absolute inset-0 bg-[#1b6b9c] opacity-30 hover:opacity-50 transition-all duration-300 rounded-xl"></div>
                                </div>
                            </div>

                            {/* Features Left */}
                            <div className="space-y-6">
                                <div className="feature-item relative flex items-center bg-white p-6 rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 group">
                                    <div className="absolute inset-0 bg-[#064974] transition-all duration-500 ease-in-out rounded-2xl scale-0 origin-top-left group-hover:scale-100"></div>
                                    <i className="fas fa-briefcase text-4xl text-[#B21E24] transition-all duration-300 relative z-10 group-hover:text-white"></i>
                                    <div className="ml-5 relative z-10">
                                        <h5 className="text-lg font-semibold text-gray-800 group-hover:text-white">Business Visa Consultation</h5>
                                        <p className="text-gray-600 group-hover:text-white text-sm md:text-base">
                                            Get expert consultation to understand the business visa requirements and increase approval chances.
                                        </p>
                                    </div>
                                </div>

                                <div className="feature-item relative flex items-center bg-white p-6 rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 group">
                                    <div className="absolute inset-0 bg-[#064974] transition-all duration-500 ease-in-out rounded-2xl scale-0 origin-top-left group-hover:scale-100"></div>
                                    <i className="fas fa-file-alt text-4xl text-[#B21E24] transition-all duration-300 relative z-10 group-hover:text-white"></i>
                                    <div className="ml-5 relative z-10">
                                        <h5 className="text-lg font-semibold text-gray-800 group-hover:text-white">Business Document Preparation</h5>
                                        <p className="text-gray-600 group-hover:text-white text-sm md:text-base">
                                            We assist in preparing all necessary business documents and financial statements required for visa approval.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Features Right */}
                            <div className="space-y-6">
                                <div className="feature-item relative flex items-center bg-white p-6 rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 group">
                                    <div className="absolute inset-0 bg-[#064974] transition-all duration-500 ease-in-out rounded-2xl scale-0 origin-top-left group-hover:scale-100"></div>
                                    <i className="fas fa-user-tie text-4xl text-[#B21E24] transition-all duration-300 relative z-10 group-hover:text-white"></i>
                                    <div className="ml-5 relative z-10">
                                        <h5 className="text-lg font-semibold text-gray-800 group-hover:text-white">Investor & Entrepreneur Visa Support</h5>
                                        <p className="text-gray-600 group-hover:text-white text-sm md:text-base">
                                            Tailored solutions for investors and entrepreneurs planning to establish or expand their business abroad.
                                        </p>
                                    </div>
                                </div>

                                <div className="feature-item relative flex items-center bg-white p-6 rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 group">
                                    <div className="absolute inset-0 bg-[#064974] transition-all duration-500 ease-in-out rounded-2xl scale-0 origin-top-left group-hover:scale-100"></div>
                                    <i className="fas fa-globe text-4xl text-[#B21E24] transition-all duration-300 relative z-10 group-hover:text-white"></i>
                                    <div className="ml-5 relative z-10">
                                        <h5 className="text-lg font-semibold text-gray-800 group-hover:text-white">Corporate Immigration Solutions</h5>
                                        <p className="text-gray-600 group-hover:text-white text-sm md:text-base">
                                            Assistance in work permits, corporate sponsorships, and cross-border business travel facilitation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="mx-auto px-4">
                    <div className="bg-white py-16 px-4 md:px-8 lg:px-24">
                        {/* Section Header */}
                        <h4 className="text-gray-600 uppercase font-semibold text-sm text-center md:text-left">
                            Hassle-Free & Professional
                        </h4>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 text-center md:text-left">
                            Secure Your Business Visa with Ease
                        </h2>

                        <div className="mt-10 flex flex-col-reverse lg:flex-row items-center gap-6">
                            {/* Text Section */}
                            <div className="flex-1 w-full">
                                <div className="bg-[#1D3D50] text-white p-6 md:p-8 rounded-xl">
                                    <p className="text-lg md:text-2xl font-semibold leading-snug">
                                        The entire process was smooth and well-guided,
                                        ensuring my business trip was hassle-free.
                                    </p>
                                    <p className="mt-4 text-gray-300 text-sm md:text-base">
                                        Their expertise in handling business visa applications made it easy for me to focus on my meetings and plans.
                                        The documentation and approval process felt seamless.
                                    </p>

                                    <button className="mt-6 bg-white text-[#1D3D50] font-medium px-4 md:px-5 py-2 rounded-lg shadow-md hover:bg-gray-200">
                                        Apply for Business Visa
                                    </button>
                                </div>
                            </div>

                            {/* Stats Section */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1 w-full">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900">98% Visa Approval Rate</h3>
                                    <p className="text-gray-600 mt-1 text-sm md:text-base">
                                        High success rate for business professionals.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900">48-Hour Processing Time</h3>
                                    <p className="text-gray-600 mt-1 text-sm md:text-base">
                                        Quick and efficient business visa processing.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900">1000+ Satisfied Business Clients</h3>
                                    <p className="text-gray-600 mt-1 text-sm md:text-base">
                                        Trusted by entrepreneurs and corporate travelers.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900">24/7 Assistance & Support</h3>
                                    <p className="text-gray-600 mt-1 text-sm md:text-base">
                                        Personalized support at every step of the process.
                                    </p>
                                </div>
                            </div>

                            {/* Image Section */}
                            <div className="flex-1 hidden md:block w-full">
                                <img
                                    src={service1}
                                    alt="Business Travel"
                                    className="rounded-xl shadow-lg w-full object-cover max-h-[400px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <Service></Service>
                <EmailForm></EmailForm>


            </div>

        </div>
    );
}