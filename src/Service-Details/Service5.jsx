import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Service-Details/test.css';
import Service from '../components/Service';
import WOW from 'wowjs';
import 'animate.css';
import EmailForm from './EmailForm';
import { FaPassport, FaPlane, FaGlobe, FaHandshake, FaUniversity, FaBuilding, FaChartLine } from "react-icons/fa";
import PagesImage from '../assets/imgs/Pages/PagesImage';

export default function Service5() {

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

                                <span className="text-white">/ Investment Visa </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* About Me */}
                <section className="bg-primary-white py-16 px-6 md:px-12 lg:px-24 bg-white">
                    <div className="max-w-7xl mb-2 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                        <div className="grid grid-cols-2 gap-4 m-5">
                            <img
                                src={PagesImage.s51}
                                alt="Visa Process"
                                className="rounded-lg border-5 border-[#1b6b9c] shadow-md w-full h-56 object-cover transition-all duration-300 hover:scale-105"
                                style={{ clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)" }}
                            />
                            <img
                                src={PagesImage.s52}
                                alt="Passport Services"
                                className="rounded-lg border-5 border-[#1b6b9c] shadow-md w-full h-56 object-cover transition-all duration-300 hover:scale-105"
                                style={{ clipPath: "polygon(0% 0%, 90% 0%, 100% 100%, 10% 100%)" }}
                            />
                            <img
                                src={PagesImage.s53}
                                alt="Legal Documentation"
                                className="rounded-lg border-5 border-[#1b6b9c] w-full h-64 object-cover shadow-md col-span-2 mx-auto transition-all duration-300 hover:scale-105"
                                style={{ clipPath: "polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)" }}
                            />

                        </div>


                        {/* Right Side - Content */}
                        <div className="mb-auto mt-4">
                            <h3 className="text-text-blue font-semibold uppercase">Investment Immigration</h3>
                            <h2 className="text-4xl font-bold text-primary-blue mt-2">
                                Unlock Global Investment & Residency Opportunities
                            </h2>
                            <p className="text-primary-black mt-4">
                                Secure your future by investing in leading economies worldwide. Our expert consultants guide you through the best investment-based immigration programs tailored to your financial goals.
                            </p>
                            <div className="mt-4 space-y-4">
                                <div className="flex items-start">
                                    <FaChartLine className="w-6 h-6 text-primary-red mr-3" />
                                    <p className="text-primary-black">Expert guidance for investment opportunities.</p>
                                </div>
                                <div className="flex items-start">
                                    <FaBuilding className="w-6 h-6 text-primary-red mr-3" />
                                    <p className="text-primary-black">Secure real estate investment solutions.</p>
                                </div>
                                <div className="flex items-start">
                                    <FaGlobe className="w-6 h-6 text-primary-red mr-3" />
                                    <p className="text-primary-black">Global investment consultancy services.</p>
                                </div>
                                <div className="flex items-start">
                                    <FaHandshake className="w-6 h-6 text-primary-red mr-3" />
                                    <p className="text-primary-black">Trusted by investors worldwide.</p>
                                </div>
                                <div className="flex items-start">
                                    <p className="text-primary-black">
                                        We help you navigate the complexities of investment immigration. Our experts provide tailored strategies to maximize your returns while ensuring compliance with international regulations. Whether it's real estate, business ventures, or other investment opportunities, we offer seamless solutions for your financial growth and residency needs.
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
                            </div>                    <p className="text-primary-black mt-3 text-sm leading-relaxed max-w-[80%]">
                                To be the leading immigration consultancy, making global opportunities accessible to all.
                            </p>
                        </div>

                        <div className="p-3 bg-primary-grey rounded-xl shadow-lg flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-xl">
                            <div className="flex justify-center items-center gap-3">
                                <FaBuilding className="text-[#064974] text-5xl " />
                                <h4 className="text-2xl font-semibold text-primary-black">Our Mission</h4>
                            </div>
                            <p className="text-primary-black mt-3 text-sm leading-relaxed max-w-[80%]">
                                Providing reliable visa and immigration solutions with transparency and professionalism.
                            </p>
                        </div>

                        <div className="p-3 bg-primary-grey rounded-xl shadow-lg flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-xl">
                            <div className="flex justify-center items-center gap-3">
                                <FaHandshake className="text-[#064974] text-5xl " />
                                <h4 className="text-2xl font-semibold text-primary-black">Our Values</h4>
                            </div>                    <p className="text-primary-black mt-3 text-sm leading-relaxed max-w-[80%]">
                                Integrity, commitment, and client satisfaction at the core of our services.
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
                                src={PagesImage.s54}
                                alt="Sustainable Engineering"
                                className="w-full h-[500px] rounded object-cover"
                            />
                            <div className="absolute inset-0 rounded-3xl"></div>
                            <div className="absolute top-1/3 left-10 md:left-20 text-white">
                                <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-xl">
                                    Building Wealth <br /> Through Smart <br /> Investment Strategies.
                                </h1>

                            </div>
                        </div>

                        {/* Stats Section */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white p-8 rounded-2xl  relative -mt-16 mx-6">
                            {/* Stat 1 */}
                            <div className="flex items-center space-x-4">
                                <FaPlane className="text-green-700 text-3xl" />
                                <div>
                                    <p className="text-gray-800 font-semibold">Over $1 Billion invested globally.</p>
                                </div>
                            </div>

                            {/* Stat 2 */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900">15,000+</h2>
                                <p className="text-gray-600">successful investment portfolios managed worldwide.</p>
                            </div>

                            {/* Stat 3 */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900">500+</h2>
                                <p className="text-gray-600">
                                    global partners ensuring secure and profitable investments.
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
                                [ Why Invest With Us ]
                            </h3>
                            <h2 className="text-3xl font-bold text-primary-black mt-2">
                                Your Trusted Investment Partner
                            </h2>
                            <p className="text-primary-black mt-4">
                                We specialize in providing strategic investment solutions to help individuals and businesses achieve financial success.
                                Our team of experts ensures secure, high-yield opportunities tailored to your goals.
                            </p>
                            <p className="text-primary-black mt-4">
                                Whether you're looking for real estate investments, stock market guidance, or international business expansion,
                                we offer expert assistance with transparency and efficiency.
                            </p>
                            <p className="text-primary-black mt-4">
                                Our mission is to make wealth-building accessible by providing personalized investment strategies designed to maximize returns and minimize risks.
                            </p>
                            <p className="text-primary-black mt-4">
                                With years of experience and a proven track record, we help investors navigate global markets with confidence.
                            </p>
                        </div>

                        {/* Right Section */}
                        <div className="bg-[#1b6b9c] text-white p-8 rounded-lg shadow-lg">
                            <ul className="space-y-4">
                                <li className="flex items-start space-x-2">
                                    <span className="text-xl">✔</span>
                                    <span>Expert Financial & Investment Consultation</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-xl">✔</span>
                                    <span>Proven Success with Thousands of Investors</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-xl">✔</span>
                                    <span>Safe & High-Return Investment Opportunities</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-xl">✔</span>
                                    <span>Licensed, Experienced, and Trusted Advisors</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-xl">✔</span>
                                    <span>100% Transparency in Investment Services</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-xl">✔</span>
                                    <span>Customized Wealth Growth Strategies</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-xl">✔</span>
                                    <span>Assistance in Portfolio Management & Risk Mitigation</span>
                                </li>
                            </ul>

                            <div className="mt-6 text-center">
                                <Link to='/AboutPage' className="bg-primary-red text-white font-semibold border-2 uppercase text-sm px-6 py-2 rounded-lg shadow-md hover:bg-primary-red-hover transition-all">
                                    Learn More About Us
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
                                Smart <span className="text-[#B21E24]"> Investment Strategies & Financial Growth</span>
                            </h1>
                            <p className="mt-3 text-gray-600 font-medium text-sm md:text-base">
                                Unlock high-yield investment opportunities with expert guidance. We provide personalized strategies
                                to maximize your wealth while minimizing risks. Start your journey towards financial freedom today!
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Image Section */}
                            <div className="relative rounded-full overflow-hidden flex justify-center items-center">
                                <div className="relative w-full max-w-sm max-h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden rounded-full">
                                    <img src={PagesImage.s55} className="w-full h-full object-cover rounded-xl transform transition-all duration-500 hover:scale-105" alt="Investment" />
                                    <div className="absolute inset-0 bg-[#1b6b9c] opacity-30 hover:opacity-50 transition-all duration-300 rounded-xl"></div>
                                </div>
                            </div>

                            {/* Features Left */}
                            <div className="space-y-6">
                                <div className="feature-item relative flex items-center bg-white p-6 rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 group">
                                    <div className="absolute inset-0 bg-[#064974] transition-all duration-500 ease-in-out rounded-2xl scale-0 origin-top-left group-hover:scale-100"></div>
                                    <i className="fas fa-chart-line text-4xl text-[#B21E24] transition-all duration-300 relative z-10 group-hover:text-white"></i>
                                    <div className="ml-5 relative z-10">
                                        <h5 className="text-lg font-semibold text-gray-800 group-hover:text-white">Market Analysis & Insights</h5>
                                        <p className="text-gray-600 group-hover:text-white text-sm md:text-base">
                                            Get expert insights and market analysis to make informed investment decisions with confidence.
                                        </p>
                                    </div>
                                </div>

                                <div className="feature-item relative flex items-center bg-white p-6 rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 group">
                                    <div className="absolute inset-0 bg-[#064974] transition-all duration-500 ease-in-out rounded-2xl scale-0 origin-top-left group-hover:scale-100"></div>
                                    <i className="fas fa-hand-holding-usd text-4xl text-[#B21E24] transition-all duration-300 relative z-10 group-hover:text-white"></i>
                                    <div className="ml-5 relative z-10">
                                        <h5 className="text-lg font-semibold text-gray-800 group-hover:text-white">Wealth Management Solutions</h5>
                                        <p className="text-gray-600 group-hover:text-white text-sm md:text-base">
                                            Tailored financial plans to grow, manage, and protect your wealth effectively.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Features Right */}
                            <div className="space-y-6">
                                <div className="feature-item relative flex items-center bg-white p-6 rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 group">
                                    <div className="absolute inset-0 bg-[#064974] transition-all duration-500 ease-in-out rounded-2xl scale-0 origin-top-left group-hover:scale-100"></div>
                                    <i className="fas fa-lightbulb text-4xl text-[#B21E24] transition-all duration-300 relative z-10 group-hover:text-white"></i>
                                    <div className="ml-5 relative z-10">
                                        <h5 className="text-lg font-semibold text-gray-800 group-hover:text-white">Investment Portfolio Diversification</h5>
                                        <p className="text-gray-600 group-hover:text-white text-sm md:text-base">
                                            Reduce risks and maximize returns with a diversified investment portfolio strategy.
                                        </p>
                                    </div>
                                </div>

                                <div className="feature-item relative flex items-center bg-white p-6 rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 group">
                                    <div className="absolute inset-0 bg-[#064974] transition-all duration-500 ease-in-out rounded-2xl scale-0 origin-top-left group-hover:scale-100"></div>
                                    <i className="fas fa-building text-4xl text-[#B21E24] transition-all duration-300 relative z-10 group-hover:text-white"></i>
                                    <div className="ml-5 relative z-10">
                                        <h5 className="text-lg font-semibold text-gray-800 group-hover:text-white">Real Estate Investment Opportunities</h5>
                                        <p className="text-gray-600 group-hover:text-white text-sm md:text-base">
                                            Explore profitable real estate investments to build long-term wealth.
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
                            Secure & Profitable Investments
                        </h4>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 text-center md:text-left">
                            Streamline Your Investment Journey
                        </h2>

                        <div className="mt-10 flex flex-col-reverse lg:flex-row items-center gap-6">
                            {/* Text Section */}
                            <div className="flex-1 w-full">
                                <div className="bg-[#1D3D50] text-white p-6 md:p-8 rounded-xl">
                                    <p className="text-lg md:text-2xl font-semibold leading-snug">
                                        A seamless investment process designed to maximize your returns with minimal hassle.
                                    </p>
                                    <p className="mt-4 text-gray-300 text-sm md:text-base">
                                        We provide expert guidance to help you navigate through investment opportunities, ensuring informed and strategic decisions for financial growth.
                                    </p>

                                    <Link to='/BookNowPage'>
                                        <button className="mt-6 bg-white text-[#1D3D50] font-medium px-4 md:px-5 py-2 rounded-lg shadow-md hover:bg-gray-200">
                                            Invest Now
                                        </button>
                                    </Link>
                                </div>
                            </div>

                            {/* Stats Section */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1 w-full">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900">98% Investor Satisfaction</h3>
                                    <p className="text-gray-600 mt-1 text-sm md:text-base">
                                        Our investors trust us for secure and profitable investments.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900">5-Minute Investment Setup</h3>
                                    <p className="text-gray-600 mt-1 text-sm md:text-base">
                                        Quick and easy onboarding process for hassle-free investments.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900">15% Average ROI</h3>
                                    <p className="text-gray-600 mt-1 text-sm md:text-base">
                                        A proven track record of consistent returns on investments.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900">Global Investment Opportunities</h3>
                                    <p className="text-gray-600 mt-1 text-sm md:text-base">
                                        Access to international markets and high-growth sectors.
                                    </p>
                                </div>
                            </div>

                            {/* Image Section */}
                            <div className="flex-1 hidden md:block w-full">
                                <img
                                    src={PagesImage.s56}
                                    alt="Investment"
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