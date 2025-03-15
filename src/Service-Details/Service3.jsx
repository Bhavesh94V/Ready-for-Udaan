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

export default function Service3() {

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

                                <span className="text-white">/ Study Visa </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* About Me */}
                <section className="bg-primary-white py-16 px-6 md:px-12 lg:px-24 bg-white">
                    <div className="max-w-7xl mb-2 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                        <div className="grid grid-cols-2 gap-4 m-5">
                            <img
                                src="https://img.freepik.com/free-photo/statue-liberty-with-cloudy-beautiful-sky_181624-1112.jpg"
                                alt="Visa Process"
                                className="rounded-lg border-5 border-[#1b6b9c] shadow-md w-full h-56 object-cover transition-all duration-300 hover:scale-105"
                                style={{ clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)" }}
                            />
                            <img
                                src="https://img.freepik.com/free-photo/ukrainian-passport-online-visa-immigration-citizens-ukraine-travel-concept_169016-66527.jpg"
                                alt="Passport Services"
                                className="rounded-lg border-5 border-[#1b6b9c] shadow-md w-full h-56 object-cover transition-all duration-300 hover:scale-105"
                                style={{ clipPath: "polygon(0% 0%, 90% 0%, 100% 100%, 10% 100%)" }}
                            />
                            <img
                                src="https://img.freepik.com/free-photo/close-up-doctor-writing-prescription_23-2148231340.jpg"
                                alt="Legal Documentation"
                                className="rounded-lg border-5 border-[#1b6b9c] w-full h-64 object-cover shadow-md col-span-2 mx-auto transition-all duration-300 hover:scale-105"
                                style={{ clipPath: "polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)" }}
                            />

                        </div>


                        {/* Right Side - Content */}
                        <div className="">
                            <h3 className="text-text-blue font-semibold uppercase">About Us</h3>
                            <h2 className="text-4xl font-bold text-primary-blue mt-2">
                                Turn Your Study Abroad Dreams into Reality!
                            </h2>
                            <p className="text-primary-black mt-4">
                                Our expert team assists students in securing study visas for top destinations, ensuring a hassle-free application process and admission to prestigious universities.
                            </p>
                            <div className="mt-4 space-y-4">
                                <div className="flex items-start">
                                    <FaUniversity className="w-6 h-6 text-primary-red mr-3" />
                                    <p className="text-primary-black">Admission guidance for universities worldwide.</p>
                                </div>
                                <div className="flex items-start">
                                    <FaGlobe className="w-6 h-6 text-primary-red mr-3" />
                                    <p className="text-primary-black">Assistance with student visa applications and documentation.</p>
                                </div>
                                <div className="flex items-start">
                                    <FaPlane className="w-6 h-6 text-primary-red mr-3" />
                                    <p className="text-primary-black">Pre-departure and post-arrival support.</p>
                                </div>
                                <div className="flex items-start">
                                    <FaHandshake className="w-6 h-6 text-primary-red mr-3" />
                                    <p className="text-primary-black">Reliable services trusted by thousands of students.</p>
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
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Sustainable Engineering"
                                className="w-full h-[500px] rounded object-cover"
                            />
                            <div className="absolute inset-0 rounded-3xl"></div>
                            <div className="absolute top-1/3 left-10 md:left-20 text-white">
                                <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-xl">
                                    Unlock Your Future <br /> with a Study Visa <br /> for Top Destinations.
                                </h1>
                                <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-gray-200 transition">
                                    Apply Now
                                </button>
                            </div>
                        </div>

                        {/* Stats Section */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white p-8 rounded-2xl  relative -mt-16 mx-6">
                            {/* Stat 1 */}
                            <div className="flex items-center space-x-4">
                                <FaPlane className="text-green-700 text-3xl" />
                                <div>
                                    <p className="text-gray-800 font-semibold">Assistance for over 10+ study destinations worldwide.</p>
                                </div>
                            </div>

                            {/* Stat 2 */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900">5000+</h2>
                                <p className="text-gray-600">successful student visa approvals every year.</p>
                            </div>

                            {/* Stat 3 */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900">100%</h2>
                                <p className="text-gray-600">
                                    guidance and support from application to visa approval.
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
                                Your Trusted Study Visa Consultants
                            </h2>
                            <p className="text-primary-black mt-4">
                                We specialize in helping students fulfill their dreams of studying abroad by providing expert visa guidance and support.
                            </p>
                            <p className="text-primary-black mt-4">
                                From choosing the right university to securing your visa approval, our dedicated team ensures a hassle-free experience.
                            </p>
                            <p className="text-primary-black mt-4">
                                Our mission is to make global education accessible by providing personalized study visa solutions tailored to your needs.
                            </p>
                            <p className="text-primary-black mt-4">
                                We are fully licensed and have years of experience in successfully processing study visa applications.
                            </p>
                        </div>

                        {/* Right Section */}
                        <div className="bg-[#1b6b9c] text-white p-8 rounded-lg shadow-lg">
                            <ul className="space-y-4">
                                <li className="flex items-start space-x-2">
                                    <span className="text-xl">✔</span>
                                    <span>Expert Study Visa Consultation</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-xl">✔</span>
                                    <span>Proven Success in University Admissions</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-xl">✔</span>
                                    <span>Guidance on Choosing the Right Course & University</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-xl">✔</span>
                                    <span>100% Transparent & Reliable Process</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-xl">✔</span>
                                    <span>Complete Assistance for Visa Application & Interview</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-xl">✔</span>
                                    <span>Scholarship & Financial Aid Support</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-xl">✔</span>
                                    <span>End-to-End Support for a Successful Study Abroad Journey</span>
                                </li>
                            </ul>

                            <div className="mt-6 text-center">
                                <Link to='/AboutPage' className="bg-primary-red text-white font-semibold border-2 uppercase text-sm px-6 py-2 rounded-lg shadow-md hover:bg-primary-red-hover transition-all">
                                    Learn More About Study Visa
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
                                Study Visa <span className="text-[#B21E24]"> & Admission Support</span>
                            </h1>
                            <p className="mt-3 text-gray-600 font-medium text-sm md:text-base">
                                We provide expert assistance in securing your study visa and guiding you through the admission process
                                to top universities worldwide. Let us simplify your journey to academic success!
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Image Section */}
                            <div className="relative rounded-full overflow-hidden flex justify-center items-center">
                                <div className="relative w-full max-w-sm max-h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden rounded-full">
                                    <img src={service1} className="w-full h-full object-cover rounded-xl transform transition-all duration-500 hover:scale-105" alt="Study Visa" />
                                    <div className="absolute inset-0 bg-[#1b6b9c] opacity-30 hover:opacity-50 transition-all duration-300 rounded-xl"></div>
                                </div>
                            </div>

                            {/* Features Left */}
                            <div className="space-y-6">
                                <div className="feature-item relative flex items-center bg-white p-6 rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 group">
                                    <div className="absolute inset-0 bg-[#064974] transition-all duration-500 ease-in-out rounded-2xl scale-0 origin-top-left group-hover:scale-100"></div>
                                    <i className="fas fa-university text-4xl text-[#B21E24] transition-all duration-300 relative z-10 group-hover:text-white"></i>
                                    <div className="ml-5 relative z-10">
                                        <h5 className="text-lg font-semibold text-gray-800 group-hover:text-white">University Selection</h5>
                                        <p className="text-gray-600 group-hover:text-white text-sm md:text-base">
                                            Get personalized guidance in choosing the best university based on your academic profile and career goals.
                                        </p>
                                    </div>
                                </div>

                                <div className="feature-item relative flex items-center bg-white p-6 rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 group">
                                    <div className="absolute inset-0 bg-[#064974] transition-all duration-500 ease-in-out rounded-2xl scale-0 origin-top-left group-hover:scale-100"></div>
                                    <i className="fas fa-file-alt text-4xl text-[#B21E24] transition-all duration-300 relative z-10 group-hover:text-white"></i>
                                    <div className="ml-5 relative z-10">
                                        <h5 className="text-lg font-semibold text-gray-800 group-hover:text-white">Application Assistance</h5>
                                        <p className="text-gray-600 group-hover:text-white text-sm md:text-base">
                                            We assist in preparing and submitting your university applications to increase your chances of admission.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Features Right */}
                            <div className="space-y-6">
                                <div className="feature-item relative flex items-center bg-white p-6 rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 group">
                                    <div className="absolute inset-0 bg-[#064974] transition-all duration-500 ease-in-out rounded-2xl scale-0 origin-top-left group-hover:scale-100"></div>
                                    <i className="fas fa-graduation-cap text-4xl text-[#B21E24] transition-all duration-300 relative z-10 group-hover:text-white"></i>
                                    <div className="ml-5 relative z-10">
                                        <h5 className="text-lg font-semibold text-gray-800 group-hover:text-white">Scholarship Guidance</h5>
                                        <p className="text-gray-600 group-hover:text-white text-sm md:text-base">
                                            Learn about available scholarships and financial aid options to make studying abroad affordable.
                                        </p>
                                    </div>
                                </div>

                                <div className="feature-item relative flex items-center bg-white p-6 rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 group">
                                    <div className="absolute inset-0 bg-[#064974] transition-all duration-500 ease-in-out rounded-2xl scale-0 origin-top-left group-hover:scale-100"></div>
                                    <i className="fas fa-passport text-4xl text-[#B21E24] transition-all duration-300 relative z-10 group-hover:text-white"></i>
                                    <div className="ml-5 relative z-10">
                                        <h5 className="text-lg font-semibold text-gray-800 group-hover:text-white">Visa Documentation Support</h5>
                                        <p className="text-gray-600 group-hover:text-white text-sm md:text-base">
                                            Ensure all necessary documents are in place for a hassle-free student visa application process, including financial proof and academic records.
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
                            Hassle-Free & Reliable
                        </h4>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 text-center md:text-left">
                            Simplifying Your Study Visa Process
                        </h2>

                        <div className="mt-10 flex flex-col-reverse lg:flex-row items-center gap-6">
                            {/* Text Section */}
                            <div className="flex-1 w-full">
                                <div className="bg-[#1D3D50] text-white p-6 md:p-8 rounded-xl">
                                    <p className="text-lg md:text-2xl font-semibold leading-snug">
                                        The entire study visa process was smooth and stress-free,
                                        allowing me to focus on my future.
                                    </p>
                                    <p className="mt-4 text-gray-300 text-sm md:text-base">
                                        Their expert guidance made visa approval easier, ensuring
                                        a seamless transition for students aspiring to study abroad.
                                    </p>

                                    <button className="mt-6 bg-white text-[#1D3D50] font-medium px-4 md:px-5 py-2 rounded-lg shadow-md hover:bg-gray-200">
                                        Apply Now
                                    </button>
                                </div>
                            </div>

                            {/* Stats Section */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1 w-full">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900">98% Visa Approval Rate</h3>
                                    <p className="text-gray-600 mt-1 text-sm md:text-base">
                                        High success rate in securing study visas worldwide.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900">24/7 Expert Assistance</h3>
                                    <p className="text-gray-600 mt-1 text-sm md:text-base">
                                        Round-the-clock guidance from experienced visa consultants.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900">92% First-Application Approval</h3>
                                    <p className="text-gray-600 mt-1 text-sm md:text-base">
                                        Most students get their visa approved on the first attempt.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900">1000+ Students Assisted</h3>
                                    <p className="text-gray-600 mt-1 text-sm md:text-base">
                                        Helping students achieve their dream of studying abroad.
                                    </p>
                                </div>
                            </div>

                            {/* Image Section */}
                            <div className="flex-1 hidden md:block w-full">
                                <img
                                    src={service1}
                                    alt="Study Abroad"
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



