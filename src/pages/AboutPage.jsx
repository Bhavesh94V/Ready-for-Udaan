import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Pages/AboutPage.css';
import dubaiImg from '../assets/imgs/Pages/dubai.jpg';
import WOW from 'wowjs';
import 'animate.css';
import PagesImage from '../assets/imgs/Pages/PagesImage';
import FAQSection from '../components/FAQSection';
import aboutUs from '../../src/assets/imgs/About-us/aboutUs.png'

export default function AboutPage() {

  useEffect(() => {
    const wow = new WOW.WOW({
      live: false,
    });
    wow.init();
  }, []);

  const teamMembers = [
    {
      name: "Emma",
      role: "Visa Specialist",
      imgSrc: PagesImage.client1,
      facebookLink: "",
      instagramLink: "",
      twitterLink: "",
    },
    {
      name: "Robert",
      role: "Legal Advisor",
      imgSrc: PagesImage.client2,
      facebookLink: "",
      instagramLink: "",
      twitterLink: "",
    },
    {
      name: "Chris",
      role: "Career Guide",
      imgSrc: PagesImage.client3,
      facebookLink: "",
      instagramLink: "",
      twitterLink: "",
    },
    {
      name: "Scarlett",
      role: "Investment Expert",
      imgSrc: PagesImage.client4,
      facebookLink: "",
      instagramLink: "",
      twitterLink: "",
    },
  ];

  return (
    <div className="AboutPageMain md:mt-5 pt-5 bg-transparent">
      <div className="about-section-container mt-5">

        <div className="relative w-full">
          <div
            className="w-full h-[300px] md:h-[350px] lg:h-[400px] bg-cover bg-center overflow-hidden relative"
            style={{ backgroundImage: `url(${PagesImage.careerImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#064974bb] to-[#06a2da99] backdrop-blur-sm flex flex-col justify-center items-center text-white text-center px-6 transition-all duration-500">
              <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg">
                About Us
              </h1>

              <div className="mt-3 flex items-center space-x-2 text-sm md:text-lg font-medium opacity-90">
                <Link to='/' className="text-gray-200 hover:scale-105 hover:text-white transition duration-300 cursor-pointer">
                  Home
                </Link>

                <span className="text-white">/ About Us</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center p-10 sm:p-6 mt-5">
          <div className="flex flex-col md:flex-row max-w-[1350px] rounded-lg items-center text-center md:text-left relative">

            <div className="relative flex flex-col md:flex-row items-center gap-4 md:gap-6 md:mr-6">

              <div className="relative flex flex-col items-center">

                <img
                  src={aboutUs}
                  alt="Business Discussion"
                  className="w-full max-w-[650px] h-auto rounded-lg sm:w-[80%] md:w-[600px]"
                />

              </div>
            </div>

            <div className="max-w-[600px] mt-6 md:mt-0 px-4 text-start">
              <h4 className="text-[#064974] text-lg mb-2 uppercase font-semibold tracking-wide">
                Know Our Company
              </h4>
              <h2 className="text-[#1b6b9c] text-2xl md:text-3xl font-bold mb-4 leading-tight">
                Global Success Starts With Right Guidance
              </h2>
              <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed">
                <strong>Ready for Udaan</strong> is your trusted immigration partner, ensuring a <strong>smooth and stress-free</strong> journey to study, work, or settle abroad. With <strong>expert guidance</strong> and a commitment to excellence, we simplify the process, turning your dreams into reality.
              </p>

              <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-6">
                <li className="flex flex-col items-center bg-white shadow-md cursor-pointer rounded-lg p-4 md:p-6 w-full transition-all duration-300 hover:shadow-xl hover:scale-105">
                  <div className="bg-gradient-to-r from-[#064974] to-[#1b6b9c] text-white p-2 md:p-3 rounded-full shadow-md">
                    <i className="fa-solid fa-globe text-lg md:text-2xl"></i>
                  </div>
                  <span className="text-gray-800 text-sm md:text-base font-semibold mt-2 md:mt-3 text-center">
                    Immigration & Visa Guidance
                  </span>
                </li>

                <li className="flex flex-col items-center bg-white shadow-md cursor-pointer rounded-lg p-4 md:p-6 w-full transition-all duration-300 hover:shadow-xl hover:scale-105">
                  <div className="bg-gradient-to-r from-[#064974] to-[#1b6b9c] text-white p-2 md:p-3 rounded-full shadow-md">
                    <i className="fa-solid fa-user-shield text-lg md:text-2xl"></i>
                  </div>
                  <span className="text-gray-800 text-sm md:text-base font-semibold mt-2 md:mt-3 text-center">
                    End-to-End Support
                  </span>
                </li>

                <li className="flex flex-col items-center bg-white shadow-md cursor-pointer rounded-lg p-4 md:p-6 w-full transition-all duration-300 hover:shadow-xl hover:scale-105">
                  <div className="bg-gradient-to-r from-[#064974] to-[#1b6b9c] text-white p-2 md:p-3 rounded-full shadow-md">
                    <i className="fa-solid fa-thumbs-up text-lg md:text-2xl"></i>
                  </div>
                  <span className="text-gray-800 text-sm md:text-base font-semibold mt-2 md:mt-3 text-center">
                    High Success Rate
                  </span>
                </li>
              </ul>

              <div className="flex flex-col md:flex-row gap-4">

                <Link to='/BookNowPage'>

                  <button className="bg-[#064974] hover:bg-[#1b6b9c] text-white px-4 md:px-6 py-3 md:py-3 rounded-md text-sm md:text-base font-semibold shadow-lg transition-all duration-300">
                    <i className="fa-solid fa-phone mr-2"></i> Book Appointment Today!
                  </button>

                </Link>

              </div>
            </div>

          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12 mt-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#064974] uppercase tracking-wide">
              From Vision to Reality
            </h2>
            <p className="text-[#1b6b9c] text-base md:text-lg mt-2">
              We transform ideas into success with expertise, integrity, and tailored solutions.
            </p>
          </div>

          <div className="w-full max-w-[1300px] m-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="flex flex-col text-start gap-4 md:gap-6">
              <div className="bg-[#064974] p-4 md:p-6 rounded-xl shadow-md">
                <h3 className="text-[#06A3DA] font-semibold text-base md:text-lg bg-white px-3 md:px-4 py-2 rounded-lg inline-block">
                  Our Vision
                </h3>
                <p className="text-white mt-2 text-sm md:text-base">
                  Our mission is to provide the best fully tested products and solutions for our customers.
                </p>
              </div>

              <div className="bg-[#064974] p-4 md:p-6 rounded-xl shadow-md">
                <h3 className="text-[#06A3DA] font-semibold text-base md:text-lg bg-white px-3 md:px-4 py-2 rounded-lg inline-block">
                  Our Mission
                </h3>
                <p className="text-white mt-2 text-sm md:text-base">
                  We strive to be a trusted partner in making international dreams a reality through integrity,
                  expertise, and personalized support.
                </p>
              </div>

              <div className="bg-[#064974] p-4 md:p-6 rounded-xl shadow-md text-white">
                <h3 className="bg-white text-[#06A3DA] font-semibold text-base md:text-lg px-3 md:px-4 py-2 rounded-lg inline-block">
                  Our History
                </h3>
                <p className="mt-2 text-sm md:text-base">
                  Established with a passion for making overseas dreams a reality, Ready for Udaan has helped countless individuals navigate their global journey with confidence.
                </p>
              </div>
            </div>

            <div
              className="relative text-white p-6 md:p-10 rounded-xl flex flex-col justify-center items-center text-center"
              style={{
                backgroundImage: "url('https://img.freepik.com/free-photo/businessman-big-office_53876-144319.jpg?uid=R183500011&ga=GA1.1.1860702175.1736869206&semt=ais_hybrid')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                position: "relative",
                zIndex: 1,
              }}
            >
              <div className="absolute inset-0 bg-[#064974] opacity-60 rounded-xl z-0"></div>

              <div className="relative z-10 px-4 md:px-6">
                <h2 className="text-xl md:text-2xl font-bold">Your Global Journey Starts Here</h2>
                <p className="mt-2 md:mt-3 text-gray-300 text-sm md:text-base">
                  From visas to settlement, we make your immigration process simple, fast, and hassle-free.
                  Let’s turn your dreams into reality!
                </p>
                <Link to='/ContactPage'>
                  <button className="mt-4 md:mt-5 bg-[#06A3DA] hover:bg-[#1b6b9c] px-4 md:px-5 py-2 rounded-full text-white">
                    Contact Us Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-center mb-12 mt-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#064974] uppercase tracking-wide">
              Meet Our Team
            </h2>
            <p className="text-[#1b6b9c] text-base md:text-lg mt-2">
              The experts behind our success, innovation, and excellence.
            </p>
          </div>
          <div className="team-main">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-profile-card">
                <div className="team-img-container">
                  <img src={member.imgSrc} alt={member.name} className="team-img" />
                </div>
                <div className="team-caption">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <div className="team-social-links">
                    <a href={member.facebookLink} className="team-social-link">
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a href={member.instagramLink} className="team-social-link">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href={member.twitterLink} className="team-social-link">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='bg-white'>
        <div className="max-w-5xl mx-auto p-6 ">

          <FAQSection></FAQSection>

          <div className="bg-[#064974] p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-white mt-4 mb-2">Still have questions?</h3>
            <p className="text-white mb-4">
              Didn’t find the answer you were looking for? Our team is here to help! <br />
              Feel free to contact us or give us a call for assistance.
            </p>

            {/* Buttons for Chat and Call */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to='/ContactPage'>
                <button className="bg-[#1b6b9c] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#064974] transition">
                  Contact Us
                </button>
              </Link>
              <a
                className="bg-[#1b6b9c] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#064974] transition"
              >
                Call Us : +91 955-864-7487
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}