import React, { useEffect, useRef, useState } from 'react';
import '../assets/styles/Pages/ServicePage.css';
import WOW from 'wowjs';
import 'animate.css';
import { Link } from 'react-router-dom';
import LogosSection from '../components/LogosSection ';
import Service from '../components/Service';
import bgImage from "../assets/imgs/AboutArea/bginner.jpg";
import Testimonial from '../components/Testimonial';
import PagesImage from '../assets/imgs/Pages/PagesImage';
import { Globe, Users, ArrowRight } from "lucide-react";
import FAQSection from '../components/FAQSection';
import { motion } from "framer-motion";


export default function ServicePage() {
  useEffect(() => {
    const wow = new WOW.WOW({ live: true });
    wow.init();
  }, []);

  const servicesRef = useRef(null);

  const scrollToServices = (event) => {
    event.preventDefault();
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }


  return (
    <div className="ServicePageMain md:mt-5 pt-5 bg-transparent" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="mt-5">
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
                <Link to='/' className="text-gray-200 hover:scale-105 hover:text-white transition duration-300 cursor-pointer">
                  Home
                </Link>

                <span className="text-white">/ Our Services </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='my-5'>
        <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side - Images & Badge */}
          <div className="relative w-fit mx-auto">
            {/* Top Image */}
            <img
              src={PagesImage.ServicePage1}
              alt="Immigration Services"
              className="w-52 md:w-full h-auto rounded-xl shadow-lg transform transition duration-500 hover:scale-105"
            />

            {/* Bottom Image */}
            <img
              src={PagesImage.ServicePage2}
              alt="Visa Consultation"
              className="w-44 md:w-80 h-auto rounded-xl shadow-lg absolute bottom-[-30px] left-[0px] border-4 border-[#064974] transform transition duration-500 hover:scale-105"
            />

            {/* Badge */}
            <div className="absolute top-[-20px] right-[-20px] bg-[#064974] text-white p-5 rounded-full w-20 h-20 flex flex-col items-center justify-center text-xs font-semibold shadow-lg transform transition duration-500 hover:scale-110">
              <Globe size={18} />
              2025 • IMMIGRATION EXPERTS
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="text-[#064974] uppercase text-sm font-bold">
              Expert Immigration Guidance
            </h4>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mt-2">
              Your Pathway to a New Life <br /> Begins Here
            </h2>
            <p className="text-gray-600 mt-4">
              Our immigration specialists provide expert guidance on visa applications, work permits, permanent residency, and citizenship pathways. Let us help you navigate the complex immigration process with ease and confidence.
            </p>

            {/* Features */}
            <div className="mt-6 flex flex-col md:flex-row gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-gray-100 px-4 py-3 rounded-lg"
              >
                <Globe size={18} className="text-[#064974]" />
                <span className="font-semibold">Visa & Immigration Assistance</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-gray-100 px-4 py-3 rounded-lg"
              >
                <Users size={18} className="text-[#064974]" />
                <span className="font-semibold">Personalized Consultation</span>
              </motion.div>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex gap-4">
              <Link to='/ContactPage'>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#064974] text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-900 transition"
                >
                  Contact Us
                </motion.button>
              </Link>
              <a href='' onClick={scrollToServices} className='my-auto'>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-[#064974] font-semibold hover:underline"
                >
                  Explore Services <ArrowRight size={16} />
                </motion.button>
              </a>
            </div>
          </motion.div>
        </section>

      </div>

      <div ref={servicesRef} className="mt-20">
        <Service></Service>
      </div>
      <LogosSection />
      <Testimonial></Testimonial>
      <FAQSection></FAQSection>
    </div>
  );
}
