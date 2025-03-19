import React from "react";
import "animate.css";
import "../assets/styles/Aboutus.css";
import About2 from "../assets/imgs/About-us/about2.jpg";
import PagesImage from "../assets/imgs/Pages/PagesImage";
import { Link } from "react-router-dom";

const AboutUs = () => {

    return (
        <section className="relative aboutPattern flex flex-col md:flex-row items-center gap-12 px-6 md:px-20 py-16">
            {/* Animated Rotating Semi-Circle */}
            <div className="absolute left-[5%] top-[15%] w-[150px] h-[150px] md:w-[200px] md:h-[100px] overflow-hidden rotate-animation">
                <div className="absolute inset-0 bg-[#1b6b9c] to-transparent rounded-t-full"></div>
            </div>

            <div className="relative w-full md:w-1/2 flex justify-center">
                {/* Main Image */}
                <div className="relative w-[90%] md:w-[500px] h-auto max-h-[600px] overflow-hidden shadow-2xl wow fadeInLeft rounded-[0%_80px_0%_80px] z-10 border-5 border-[#1b6b9c]">
                    <img
                        src={About2}
                        alt="Consultation"
                        className="w-full h-auto object-contain"
                    />

                    {/* Success Rate Badge */}
                    <div className="absolute bottom-0 right-2 bg-[#1b6b9c] text-white px-6 py-4 rounded-[0%_30px_0%_30px] animate-slide">
                        <p className="text-3xl font-extrabold">96%</p>
                        <p className="text-sm font-semibold">SUCCESSFUL STORIES</p>
                    </div>
                </div>
            </div>

            {/* Right Content Section */}
            <div className="w-full md:w-1/2 wow fadeInRight" data-wow-duration="1.5s">
                <p className="text-[#1b6b9c] text-sm uppercase tracking-widest">About Udaan</p>
                <h2 className="text-3xl md:text-5xl font-extrabold text-[#000000] leading-tight mt-2 wow bounceIn" data-wow-delay="0.5s">
                    Turning <span className="text-[#064974]">Dreams into Reality</span>
                </h2>
                <p className="text-[#333333] mt-4 leading-relaxed text-sm md:text-base">
                    At <b>Udaan</b>, we are committed to helping individuals achieve their aspirations of studying, working, and
                    settling abroad. With our expert guidance, seamless processes, and unwavering support, we simplify your
                    immigration journey, ensuring a smooth transition to your dream destination.
                </p>

                {/* Features List */}
                <ul className="mt-6 space-y-3">
                    <li className="flex items-center text-[#000000] wow fadeInUp text-sm md:text-base" data-wow-delay="0.3s">
                        <span className="text-[#1b6b9c] text-lg mr-2">✔</span> Expert guidance tailored to your unique needs.
                    </li>
                    <li className="flex items-center text-[#000000] wow fadeInUp text-sm md:text-base" data-wow-delay="0.5s">
                        <span className="text-[#1b6b9c] text-lg mr-2">✔</span> Simplified visa processing with 100% transparency.
                    </li>
                    <li className="flex items-center text-[#000000] wow fadeInUp text-sm md:text-base" data-wow-delay="0.7s">
                        <span className="text-[#1b6b9c] text-lg mr-2">✔</span> End-to-end support from application to approval.
                    </li>
                    <li className="flex items-center text-[#000000] wow fadeInUp text-sm md:text-base" data-wow-delay="0.9s">
                        <span className="text-[#1b6b9c] text-lg mr-2">✔</span> Dedicated professionals to assist you at every step.
                    </li>
                </ul>

                {/* CTA Button */}
                <Link to='/CareersPage'>
                    <button className="mt-6 px-4 py-2 text-white text-base md:text-lg font-medium rounded-full shadow-lg transition transform hover:scale-105 wow zoomIn"
                        data-wow-delay="0.9s"
                        style={{ backgroundColor: "#064974" }}>
                        Start Your Journey →
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default AboutUs;