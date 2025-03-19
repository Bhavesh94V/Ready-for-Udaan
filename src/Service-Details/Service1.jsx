import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Service-Details/test.css';
import Service from '../components/Service';
import WOW from 'wowjs';
import 'animate.css';
import EmailForm from './EmailForm';
import { FaPassport, FaPlane, FaGlobe, FaHandshake, FaUniversity, FaBuilding } from "react-icons/fa";
import PagesImage from '../assets/imgs/Pages/PagesImage';


export default function Service1() {

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

                                <span className="text-white">/ Work Visa </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* About Me */}
                <section className="bg-primary-white py-16 px-6 md:px-12 lg:px-24 bg-white">
                    <div className="max-w-7xl mb-2 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Images Section */}
                        <div className="grid grid-cols-2 gap-4 m-5">
                            <img
                                src={PagesImage.s11}
                                alt="Work Visa Process"
                                className="rounded-lg border-5 border-[#1b6b9c] shadow-md w-full h-56 object-cover transition-all duration-300 hover:scale-105"
                                style={{ clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)" }}
                            />
                            <img
                                src={PagesImage.s12}
                                alt="Global Career Opportunities"
                                className="rounded-lg border-5 border-[#1b6b9c] shadow-md w-full h-56 object-cover transition-all duration-300 hover:scale-105"
                                style={{ clipPath: "polygon(0% 0%, 90% 0%, 100% 100%, 10% 100%)" }}
                            />
                            <img
                                src={PagesImage.s13}
                                alt="Professional Assistance"
                                className="rounded-lg border-5 border-[#1b6b9c] w-full h-64 object-cover shadow-md col-span-2 mx-auto transition-all duration-300 hover:scale-105"
                                style={{ clipPath: "polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)" }}
                            />
                        </div>

                        {/* Content Section */}
                        <div className="">
                            <h3 className="text-text-blue font-semibold uppercase">Work Visa</h3>
                            <h2 className="text-4xl font-bold text-primary-blue mt-2">
                                Secure Your Dream Job Abroad with Ready for Udaan
                            </h2>
                            <p className="text-primary-black mt-4">
                                Looking for a work visa? **Ready for Udaan** provides expert assistance in securing employment-based visas for various countries. Whether you are a skilled professional, a student looking for work opportunities, or a company hiring international talent, we simplify the visa process for you.
                            </p>
                            <div className="mt-4 space-y-4">
                                <div className="flex items-start">
                                    <FaPassport className="w-6 h-6 text-primary-red mr-3" />
                                    <p className="text-primary-black">Assistance in obtaining work permits and visa approvals.</p>
                                </div>
                                <div className="flex items-start">
                                    <FaPlane className="w-6 h-6 text-primary-red mr-3" />
                                    <p className="text-primary-black">Guidance for smooth relocation and career transition.</p>
                                </div>
                                <div className="flex items-start">
                                    <FaGlobe className="w-6 h-6 text-primary-red mr-3" />
                                    <p className="text-primary-black">Work opportunities in top countries like Canada, UK, USA, Australia, and more.</p>
                                </div>
                                <div className="flex items-start">
                                    <FaHandshake className="w-6 h-6 text-primary-red mr-3" />
                                    <p className="text-primary-black">Strong employer connections and job assistance services.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />

                    {/* Vision, Mission, and Values */}
                    <div className="max-w-7xl mx-auto mt-5 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-3 bg-primary-grey rounded-xl shadow-lg flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-xl">
                            <div className="flex justify-center items-center gap-3">
                                <FaUniversity className="text-[#064974] text-5xl " />
                                <h4 className="text-2xl font-semibold text-primary-black">Our Vision</h4>
                            </div>
                            <p className="text-primary-black mt-3 text-sm leading-relaxed max-w-[80%]">
                                To empower professionals with global career opportunities by simplifying the work visa process.
                            </p>
                        </div>

                        <div className="p-3 bg-primary-grey rounded-xl shadow-lg flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-xl">
                            <div className="flex justify-center items-center gap-3">
                                <FaBuilding className="text-[#064974] text-5xl " />
                                <h4 className="text-2xl font-semibold text-primary-black">Our Mission</h4>
                            </div>
                            <p className="text-primary-black mt-3 text-sm leading-relaxed max-w-[80%]">
                                Providing reliable, transparent, and fast-track work visa solutions for aspiring professionals.
                            </p>
                        </div>

                        <div className="p-3 bg-primary-grey rounded-xl shadow-lg flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-xl">
                            <div className="flex justify-center items-center gap-3">
                                <FaHandshake className="text-[#064974] text-5xl " />
                                <h4 className="text-2xl font-semibold text-primary-black">Our Values</h4>
                            </div>
                            <p className="text-primary-black mt-3 text-sm leading-relaxed max-w-[80%]">
                                Trust, professionalism, and customer satisfaction in every step of your journey.
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
                                src={PagesImage.s14}
                                alt="Sustainable Engineering"
                                className="w-full h-[500px] rounded object-cover"
                            />
                            <div className="absolute inset-0 rounded-3xl"></div>
                            <div className="absolute top-1/3 left-10 md:left-20 text-white">
                                <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-xl">
                                    Unlock Global Career <br /> Opportunities with <br /> Work Visas.
                                </h1>
                              
                            </div>
                        </div>

                        {/* Stats Section */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white p-8 rounded-2xl  relative -mt-16 mx-6">
                            {/* Stat 1 */}
                            <div className="flex items-center space-x-4">
                                <FaPlane className="text-green-700 text-3xl" />
                                <div>
                                    <p className="text-gray-800 font-semibold">Assisting job seekers in 50+ countries.</p>
                                </div>
                            </div>

                            {/* Stat 2 */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900">10,000+</h2>
                                <p className="text-gray-600">successful work visa applications processed.</p>
                            </div>

                            {/* Stat 3 */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900">95%</h2>
                                <p className="text-gray-600">
                                    visa approval rate with expert consultation.
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
                                Your Trusted Partner for Work Visas
                            </h2>
                            <p className="text-primary-black mt-4">
                                Looking to work abroad? We simplify the work visa process, helping professionals and skilled workers
                                secure job opportunities in top destinations worldwide.
                            </p>
                            <p className="text-primary-black mt-4">
                                From visa eligibility assessment to job placements and documentation, we ensure a smooth, hassle-free experience.
                            </p>
                            <p className="text-primary-black mt-4">
                                Whether you're applying for skilled migration, employer-sponsored visas, or temporary work permits, our team of experts
                                will guide you through every step.
                            </p>
                            <p className="text-primary-black mt-4">
                                With a high success rate and personalized support, we help you achieve your dream of working in the country of your choice.
                            </p>
                        </div>

                        {/* Right Section */}
                        <div className="bg-[#1b6b9c] text-white p-8 rounded-lg shadow-lg">
                            <ul className="space-y-4">
                                <li className="flex items-start space-x-2">
                                    <span className="text-xl">✔</span>
                                    <span>Expert Guidance on Work Visa Applications</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-xl">✔</span>
                                    <span>Connections with Top Employers Worldwide</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-xl">✔</span>
                                    <span>1000+ Successful Work Visa Approvals</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-xl">✔</span>
                                    <span>Fast-Track Processing for Eligible Candidates</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-xl">✔</span>
                                    <span>Legal Compliance & Documentation Support</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-xl">✔</span>
                                    <span>Transparent Fees & No Hidden Charges</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-xl">✔</span>
                                    <span>Step-by-Step Assistance Until You Start Working</span>
                                </li>
                            </ul>

                            <div className="mt-6 text-center">
                                <Link to='/BookNowPage' className="bg-primary-red text-white font-semibold border-2 uppercase text-sm px-6 py-2 rounded-lg shadow-md hover:bg-primary-red-hover transition-all">
                                    Explore Work Visa Options
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
                                Secure Your <span className="text-[#B21E24]">Work Visa & Career Abroad</span>
                            </h1>
                            <p className="mt-3 text-gray-600 font-medium text-sm md:text-base">
                                Get expert work visa guidance, legal compliance, document preparation, and job search support for a smooth international career transition.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Image Section */}
                            <div className="relative rounded-full overflow-hidden flex justify-center items-center">
                                <div className="relative w-full max-w-sm max-h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden rounded-full">
                                    <img src={PagesImage.s15} className="w-full h-full object-cover rounded-xl transform transition-all duration-500 hover:scale-105" alt="Work Visa Assistance" />
                                    <div className="absolute inset-0 bg-[#1b6b9c] opacity-30 hover:opacity-50 transition-all duration-300 rounded-xl"></div>
                                </div>
                            </div>

                            {/* Features Left */}
                            <div className="space-y-6">
                                <div className="feature-item relative flex items-center bg-white p-6 rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 group">
                                    <div className="absolute inset-0 bg-[#064974] transition-all duration-500 ease-in-out rounded-2xl scale-0 origin-top-left group-hover:scale-100"></div>
                                    <i className="fas fa-file-signature text-4xl text-[#B21E24] transition-all duration-300 relative z-10 group-hover:text-white"></i>
                                    <div className="ml-5 relative z-10">
                                        <h5 className="text-lg font-semibold text-gray-800 group-hover:text-white">Work Visa Application</h5>
                                        <p className="text-gray-600 group-hover:text-white text-sm md:text-base">
                                            Expert help in preparing and submitting your work visa application accurately.
                                        </p>
                                    </div>
                                </div>

                                <div className="feature-item relative flex items-center bg-white p-6 rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 group">
                                    <div className="absolute inset-0 bg-[#064974] transition-all duration-500 ease-in-out rounded-2xl scale-0 origin-top-left group-hover:scale-100"></div>
                                    <i className="fas fa-briefcase text-4xl text-[#B21E24] transition-all duration-300 relative z-10 group-hover:text-white"></i>
                                    <div className="ml-5 relative z-10">
                                        <h5 className="text-lg font-semibold text-gray-800 group-hover:text-white">Job Search Assistance</h5>
                                        <p className="text-gray-600 group-hover:text-white text-sm md:text-base">
                                            Get expert help finding jobs that match your skills and work visa requirements easily.
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
                                        <h5 className="text-lg font-semibold text-gray-800 group-hover:text-white">Resume & Interview Prep</h5>
                                        <p className="text-gray-600 group-hover:text-white text-sm md:text-base">
                                            Enhance your resume and get interview coaching to secure your dream job abroad.
                                        </p>
                                    </div>
                                </div>

                                <div className="feature-item relative flex items-center bg-white p-6 rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 group">
                                    <div className="absolute inset-0 bg-[#064974] transition-all duration-500 ease-in-out rounded-2xl scale-0 origin-top-left group-hover:scale-100"></div>
                                    <i className="fas fa-globe text-4xl text-[#B21E24] transition-all duration-300 relative z-10 group-hover:text-white"></i>
                                    <div className="ml-5 relative z-10">
                                        <h5 className="text-lg font-semibold text-gray-800 group-hover:text-white">Work Permit & Legal Support</h5>
                                        <p className="text-gray-600 group-hover:text-white text-sm md:text-base">
                                            Ensure you meet all legal work permit requirements with our expert guidance.
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
                            Your Gateway to Global Opportunities
                        </h4>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 text-center md:text-left">
                            Hassle-Free Work Visa Assistance
                        </h2>

                        <div className="mt-10 flex flex-col-reverse lg:flex-row items-center gap-6">
                            {/* Text Section */}
                            <div className="flex-1 w-full">
                                <div className="bg-[#1D3D50] text-white p-6 md:p-8 rounded-xl">
                                    <p className="text-lg md:text-2xl font-semibold leading-snug">
                                        We make your dream of working abroad a reality with seamless visa processing.
                                    </p>
                                    <p className="mt-4 text-gray-300 text-sm md:text-base">
                                        Our expert team ensures a smooth application process, proper documentation,
                                        and employer connections to help you secure a work visa effortlessly.
                                    </p>

                                    <Link to='/BookNowPage'>
                                        <button className="mt-6 bg-white text-[#1D3D50] font-medium px-4 md:px-5 py-2 rounded-lg shadow-md hover:bg-gray-200">

                                            Apply for Work Visa

                                        </button>
                                    </Link>
                                </div>
                            </div>

                            {/* Stats Section */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1 w-full">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900">98% Visa Approval Rate</h3>
                                    <p className="text-gray-600 mt-1 text-sm md:text-base">
                                        Our streamlined process increases your chances of visa success.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900">10,000+ Happy Clients</h3>
                                    <p className="text-gray-600 mt-1 text-sm md:text-base">
                                        Thousands of professionals have successfully relocated with our assistance.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900">Job Placement Assistance</h3>
                                    <p className="text-gray-600 mt-1 text-sm md:text-base">
                                        Get connected with global employers looking for skilled professionals.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900">100% Legal Compliance</h3>
                                    <p className="text-gray-600 mt-1 text-sm md:text-base">
                                        We ensure all documents and processes align with immigration laws.
                                    </p>
                                </div>
                            </div>

                            {/* Image Section */}
                            <div className="flex-1 hidden md:block w-full">
                                <img
                                    src={PagesImage.s16}
                                    alt="Work Visa Assistance"
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