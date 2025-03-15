import React from "react";
import consultancy from '../assets/imgs/AboutArea/consultancy.jpg'
import "../assets/styles/AboutArea.css";

const AboutArea = () => {
    return (
        <section className="py-12 px-6 md:px-12 lg:px-20 bg-gray-50 whychoosePattern">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="">
                    <span className="text-3xl font-semibold text-[#064974] px-1 py-1 rounded-full">
                        Why Choose Udaan?
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
                        Empowering Dreams, <br /> Elevating Journeys
                    </h2>
                    <p className="text-gray-600 mt-4">
                        At <span className="font-semibold text-[#064974]">Udaan</span>, we believe in turning aspirations into achievements.
                        Whether you dream of studying in top universities, working in global firms, or settling abroad with your family,
                        <span className="font-semibold">our expert consultants</span> guide you at every step with seamless visa solutions.
                    </p>
                    {/* <p className="text-gray-600 mt-3">
                        Our dedicated team ensures transparency, hassle-free documentation, and faster approvals to give wings to your dreams.  
                        Join 10,000+ happy clients who trusted us for their <span className="font-semibold">visa & immigration needs</span>.
                    </p> */}

                    {/* Progress Bars */}
                    <div className="mt-6">
                        <div className="flex justify-between text-sm font-medium text-gray-900">
                            <span>Visa Success Rate</span> <span>95%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                            <div className="bg-[#064974] h-2.5 rounded-full" style={{ width: "95%" }}></div>
                        </div>

                        <div className="flex justify-between text-sm font-medium text-gray-900 mt-4">
                            <span>Client Satisfaction</span> <span>98%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                            <div className="bg-[#064974] h-2.5 rounded-full" style={{ width: "98%" }}></div>
                        </div>

                        <div className="flex justify-between text-sm font-medium text-gray-900 mt-4">
                            <span>Global Reach</span> <span>30+ Countries</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                            <div className="bg-[#064974] h-2.5 rounded-full" style={{ width: "100%" }}></div>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <button className="mt-6 bg-[#064974] text-white py-3 px-6 rounded-full flex items-center gap-2 hover:bg-[#1b6b9c] transition">
                        Join Now
                    </button>
                </div>

                {/* Right Image Section */}
                <div className="relative">
                    <img
                        src={consultancy}
                        alt="Global Immigration"
                        className="rounded-lg shadow-lg"
                    />
                    <div className="badge-container">
                        <span className="badge-icon">🚀</span>
                        <div>
                            <span className="badge-title">5000+</span>
                            <p className="badge-text">Successful Clients</p>
                        </div>
                    </div>
                    {/* Pattern Animation */}
                    {/* <div className="pattern-container">
                        <img src={pattern} alt="Pattern Design" className="pattern-animation" />
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default AboutArea;