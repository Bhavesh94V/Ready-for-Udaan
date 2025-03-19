import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Service-Details/test.css';
import Service from '../components/Service';
import WOW from 'wowjs';
import 'animate.css';
import EmailForm from './EmailForm';
import { FaPassport, FaPlane, FaGlobe, FaHandshake, FaUniversity, FaBuilding } from "react-icons/fa";
import PagesImage from '../assets/imgs/Pages/PagesImage';

export default function Service4() {

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

                                <span className="text-white">/ Parmanent Residency </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* About Me */}
                <section className="bg-primary-white py-16 px-6 md:px-12 lg:px-24 bg-white">
                    <div className="max-w-7xl mb-2 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                        {/* Left Side - Images */}
                        <div className="grid grid-cols-2 gap-4 m-5">
                            <img
                                src={PagesImage.s41}
                                alt="PR Visa Process"
                                className="rounded-lg border-5 border-[#1b6b9c] shadow-md w-full h-56 object-cover transition-all duration-300 hover:scale-105"
                                style={{ clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)" }}
                            />
                            <img
                                src={PagesImage.s42}
                                alt="Family PR Benefits"
                                className="rounded-lg border-5 border-[#1b6b9c] shadow-md w-full h-56 object-cover transition-all duration-300 hover:scale-105"
                                style={{ clipPath: "polygon(0% 0%, 90% 0%, 100% 100%, 10% 100%)" }}
                            />
                            <img
                                src={PagesImage.s43}
                                alt="Expert PR Consultation"
                                className="rounded-lg border-5 border-[#1b6b9c] w-full h-64 object-cover shadow-md col-span-2 mx-auto transition-all duration-300 hover:scale-105"
                                style={{ clipPath: "polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)" }}
                            />
                        </div>

                        {/* Right Side - Content */}
                        <div className="">
                            <h3 className="text-text-blue font-semibold uppercase">About Permanent Residency</h3>
                            <h2 className="text-4xl font-bold text-primary-blue mt-2">
                                Secure Your Future with a Permanent Residency Visa
                            </h2>
                            <p className="text-primary-black mt-4">
                                Our expert immigration consultants specialize in assisting individuals and families in obtaining **Permanent Residency (PR) Visas**. Whether you seek better career opportunities, quality education, or a secure future for your family, we streamline the PR process for multiple countries.
                            </p>
                            <div className="mt-4 space-y-4">
                                <div className="flex items-start">
                                    <FaPassport className="w-6 h-6 text-primary-red mr-3" />
                                    <p className="text-primary-black">Fast-track your PR application with expert guidance.</p>
                                </div>
                                <div className="flex items-start">
                                    <FaPlane className="w-6 h-6 text-primary-red mr-3" />
                                    <p className="text-primary-black">Work, study, and settle in top destinations worldwide.</p>
                                </div>
                                <div className="flex items-start">
                                    <FaGlobe className="w-6 h-6 text-primary-red mr-3" />
                                    <p className="text-primary-black">Global PR solutions tailored to your needs.</p>
                                </div>
                                <div className="flex items-start">
                                    <FaHandshake className="w-6 h-6 text-primary-red mr-3" />
                                    <p className="text-primary-black">End-to-end support, from eligibility assessment to approval.</p>
                                </div>
                                <div className="flex items-start">
                                    <p className="text-primary-black">
                                        We simplify the PR application process, helping you secure long-term residency benefits such as healthcare, social security, and unrestricted work rights. Get started today and take the first step toward your dream life abroad.
                                    </p>
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
                                To help individuals and families build successful futures through hassle-free PR applications.
                            </p>
                        </div>

                        <div className="p-3 bg-primary-grey rounded-xl shadow-lg flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-xl">
                            <div className="flex justify-center items-center gap-3">
                                <FaBuilding className="text-[#064974] text-5xl " />
                                <h4 className="text-2xl font-semibold text-primary-black">Our Mission</h4>
                            </div>
                            <p className="text-primary-black mt-3 text-sm leading-relaxed max-w-[80%]">
                                Providing professional PR consultancy with transparency, efficiency, and integrity.
                            </p>
                        </div>

                        <div className="p-3 bg-primary-grey rounded-xl shadow-lg flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-xl">
                            <div className="flex justify-center items-center gap-3">
                                <FaHandshake className="text-[#064974] text-5xl " />
                                <h4 className="text-2xl font-semibold text-primary-black">Our Values</h4>
                            </div>
                            <p className="text-primary-black mt-3 text-sm leading-relaxed max-w-[80%]">
                                Commitment, accuracy, and personalized solutions for your PR journey.
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
                                src={PagesImage.s44}
                                alt="Sustainable Engineering"
                                className="w-full h-[500px] rounded object-cover"
                            />
                            <div className="absolute inset-0 rounded-3xl"></div>
                            <div className="absolute top-1/3 left-10 md:left-20 text-white">
                                <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-xl">
                                    Secure Your Future <br /> with Permanent <br /> Residency Solutions.
                                </h1>

                            </div>
                        </div>

                        {/* Stats Section */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white p-8 rounded-2xl  relative -mt-16 mx-6">
                            {/* Stat 1 */}
                            <div className="flex items-center space-x-4">
                                <FaPlane className="text-green-700 text-3xl" />
                                <div>
                                    <p className="text-gray-800 font-semibold">10,000+ successful permanent residency applications worldwide.</p>
                                </div>
                            </div>

                            {/* Stat 2 */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900">98%</h2>
                                <p className="text-gray-600">Approval rate for qualified applicants.</p>
                            </div>

                            {/* Stat 3 */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900">50+</h2>
                                <p className="text-gray-600">
                                    Countries covered with PR and immigration solutions.
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
                                Secure Your Future with Permanent Residency
                            </h2>
                            <p className="text-primary-black mt-4">
                                We specialize in helping individuals and families achieve their dream of permanent residency in top destinations worldwide.
                                Our team of experts simplifies the application process, ensuring a smooth and successful journey toward your new life.
                            </p>
                            <p className="text-primary-black mt-4">
                                Whether you are applying through Express Entry, family sponsorship, skilled migration, or investment programs,
                                we provide expert guidance tailored to your unique profile.
                            </p>
                            <p className="text-primary-black mt-4">
                                Our commitment is to offer transparent and efficient immigration solutions, making the transition to your new country hassle-free.
                            </p>
                            <p className="text-primary-black mt-4">
                                With years of experience and a high success rate, we ensure that every application is handled with precision and care.
                            </p>
                        </div>

                        {/* Right Section */}
                        <div className="bg-[#1b6b9c] text-white p-8 rounded-lg shadow-lg">
                            <ul className="space-y-4">
                                <li className="flex items-start space-x-2">
                                    <span className="text-xl">✔</span>
                                    <span>Expert Guidance on PR Applications</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-xl">✔</span>
                                    <span>High Success Rate for PR Approvals</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-xl">✔</span>
                                    <span>Hassle-Free Documentation and Submission</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-xl">✔</span>
                                    <span>Dedicated Support for Every Step of the Process</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-xl">✔</span>
                                    <span>100% Transparency in Services and Fees</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-xl">✔</span>
                                    <span>Visa, Work, and Settlement Assistance</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-xl">✔</span>
                                    <span>Personalized Profile Evaluation and PR Roadmap</span>
                                </li>
                            </ul>

                            <div className="mt-6 text-center">
                                <Link to='/AboutPage' className="bg-primary-red text-white font-semibold border-2 uppercase text-sm px-6 py-2 rounded-lg shadow-md hover:bg-primary-red-hover transition-all">
                                    Learn More About PR Process
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
                                Permanent Residency <span className="text-[#B21E24]"> & Immigration Assistance</span>
                            </h1>
                            <p className="mt-3 text-gray-600 font-medium text-sm md:text-base">
                                Secure your future with expert guidance on Permanent Residency. We provide end-to-end assistance to ensure a
                                successful PR application, helping you transition smoothly to a new country.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Image Section */}
                            <div className="relative rounded-full overflow-hidden flex justify-center items-center">
                                <div className="relative w-full max-w-sm max-h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden rounded-full">
                                    <img src={PagesImage.s45} className="w-full h-full object-cover rounded-xl transform transition-all duration-500 hover:scale-105" alt="Permanent Residency" />
                                    <div className="absolute inset-0 bg-[#1b6b9c] opacity-30 hover:opacity-50 transition-all duration-300 rounded-xl"></div>
                                </div>
                            </div>

                            {/* Features Left */}
                            <div className="space-y-6">
                                <div className="feature-item relative flex items-center bg-white p-6 rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 group">
                                    <div className="absolute inset-0 bg-[#064974] transition-all duration-500 ease-in-out rounded-2xl scale-0 origin-top-left group-hover:scale-100"></div>
                                    <i className="fas fa-passport text-4xl text-[#B21E24] transition-all duration-300 relative z-10 group-hover:text-white"></i>
                                    <div className="ml-5 relative z-10">
                                        <h5 className="text-lg font-semibold text-gray-800 group-hover:text-white">Eligibility Assessment</h5>
                                        <p className="text-gray-600 group-hover:text-white text-sm md:text-base">
                                            Get a personalized assessment to determine your eligibility for Permanent Residency and understand the best pathway for you.
                                        </p>
                                    </div>
                                </div>

                                <div className="feature-item relative flex items-center bg-white p-6 rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 group">
                                    <div className="absolute inset-0 bg-[#064974] transition-all duration-500 ease-in-out rounded-2xl scale-0 origin-top-left group-hover:scale-100"></div>
                                    <i className="fas fa-file-signature text-4xl text-[#B21E24] transition-all duration-300 relative z-10 group-hover:text-white"></i>
                                    <div className="ml-5 relative z-10">
                                        <h5 className="text-lg font-semibold text-gray-800 group-hover:text-white">PR Documentation Assistance</h5>
                                        <p className="text-gray-600 group-hover:text-white text-sm md:text-base">
                                            Our experts help you with document preparation, verification, and submission for a hassle-free PR application.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Features Right */}
                            <div className="space-y-6">
                                <div className="feature-item relative flex items-center bg-white p-6 rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 group">

                                    <div className="absolute inset-0 bg-[#064974] transition-all duration-500 ease-in-out rounded-2xl scale-0 origin-top-left group-hover:scale-100"></div>

                                    <i className="fas fa-handshake text-4xl text-[#B21E24] transition-all duration-300 relative z-10 group-hover:text-white"></i>

                                    <div className="ml-5 relative z-10">
                                        <h5 className="text-lg font-semibold text-gray-800 group-hover:text-white">Job & Settlement Support</h5>

                                        <p className="text-gray-600 group-hover:text-white text-sm md:text-base">

                                            We guide you through job search and settlement options, making your transition to a new country seamless.
                                        </p>
                                    </div>
                                </div>

                                <div className="feature-item relative flex items-center bg-white p-6 rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 group">
                                    <div className="absolute inset-0 bg-[#064974] transition-all duration-500 ease-in-out rounded-2xl scale-0 origin-top-left group-hover:scale-100"></div>
                                    <i className="fas fa-clipboard-check text-4xl text-[#B21E24] transition-all duration-300 relative z-10 group-hover:text-white"></i>
                                    <div className="ml-5 relative z-10">
                                        <h5 className="text-lg font-semibold text-gray-800 group-hover:text-white">Express Entry & PNP Support</h5>
                                        <p className="text-gray-600 group-hover:text-white text-sm md:text-base">
                                            Our team provides expert assistance for Express Entry and Provincial Nominee Programs (PNP) to enhance your chances of PR approval.
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
                            Hassle-Free & Reliable Process
                        </h4>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 text-center md:text-left">
                            Simplify Your Permanent Residency Journey
                        </h2>

                        <div className="mt-10 flex flex-col-reverse lg:flex-row items-center gap-6">
                            {/* Text Section */}
                            <div className="flex-1 w-full">
                                <div className="bg-[#1D3D50] text-white p-6 md:p-8 rounded-xl">
                                    <p className="text-lg md:text-2xl font-semibold leading-snug">
                                        The entire PR process was smooth and well-guided, making it stress-free for me.
                                    </p>
                                    <p className="mt-4 text-gray-300 text-sm md:text-base">
                                        Their expert team ensures every step is handled efficiently, providing a seamless experience for applicants.
                                    </p>

                                    <Link to='/BookNowPage'>
                                        <button className="mt-6 bg-white text-[#1D3D50] font-medium px-4 md:px-5 py-2 rounded-lg shadow-md hover:bg-gray-200">
                                            Apply for PR Now
                                        </button>
                                    </Link>
                                </div>
                            </div>

                            {/* Stats Section */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1 w-full">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900">98% Success Rate</h3>
                                    <p className="text-gray-600 mt-1 text-sm md:text-base">
                                        High approval rate for PR applications.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900">Fast Processing</h3>
                                    <p className="text-gray-600 mt-1 text-sm md:text-base">
                                        Get expert guidance to avoid delays.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900">Personalized Guidance</h3>
                                    <p className="text-gray-600 mt-1 text-sm md:text-base">
                                        Step-by-step support for your PR journey.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900">Legal & Documentation Support</h3>
                                    <p className="text-gray-600 mt-1 text-sm md:text-base">
                                        Ensure error-free applications with expert assistance.
                                    </p>
                                </div>
                            </div>

                            {/* Image Section */}
                            <div className="flex-1 hidden md:block w-full overflow-hidden">
                                <img
                                    src={PagesImage.s46}
                                    alt="Permanent Residency Process"
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