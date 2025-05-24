import React, { useRef, useState } from 'react'
import '../assets/styles/Opportunity.css'
import { Link } from 'react-router-dom';
import Australia from '../assets/imgs/Pages/Country-Images/Country-Images/Australia.png';
import { DollarSign, Users, ArrowRight } from "lucide-react";
import Belgium from '../assets/imgs/Pages/Country-Images/Country-Images/Belgium.png';
import Brazil from '../assets/imgs/Pages/Country-Images/Country-Images/brazil.jpg';
import Canada from '../assets/imgs/Pages/Country-Images/Country-Images/Canada.png';
import Denmark from '../assets/imgs/Pages/Country-Images/Country-Images/Denmark.png';
import France from '../assets/imgs/Pages/Country-Images/Country-Images/France.png';
import Germany from '../assets/imgs/Pages/Country-Images/Country-Images/Germany.png';
import Italy from '../assets/imgs/Pages/Country-Images/Country-Images/Italy.png';
import UK from '../assets/imgs/Pages/Country-Images/Country-Images/UK.jpg';
import USA from '../assets/imgs/Pages/Country-Images/Country-Images/usa.jpg';
import Japan from '../assets/imgs/Pages/Country-Images/Country-Images/Japan.jpg';
import NewZealand from '../assets/imgs/Pages/Country-Images/Country-Images/NewZealand.jpg';
import SouthAfrica from '../assets/imgs/Pages/Country-Images/Country-Images/SouthAfrica.jpg';
import EligibilityForm from './EligibilityForm';
import PagesImage from '../assets/imgs/Pages/PagesImage';
import { motion } from "framer-motion";


export default function CareersPage() {

  const countryImages = {
    Canada: Canada,
    Australia: Australia,
    SouthAfrica: SouthAfrica,
    Belgium: Belgium,
    Denmark: Denmark,
    UK: UK,
    USA: USA,
    France: France,
    Germany: Germany,
    Japan: Japan,
    Brazil: Brazil,
    NewZealand: NewZealand,
    Italy: Italy,
  };

  const locations = [
    { name: "All", countries: Object.keys(countryImages) },
    { name: "North America", countries: ["Canada", "USA"] },
    { name: "Europe", countries: ["France", "Germany", "Belgium", "Denmark", "UK"] },
    { name: "Asia", countries: ["Japan"] },
    { name: "South America", countries: ["Brazil"] },
    { name: "Oceania", countries: ["Australia", "NewZealand"] },
    { name: "Africa", countries: ["SouthAfrica"] },
  ];

  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  const careerRef = useRef(null);

  const scrollTocareer = (event) => {
    event.preventDefault();
    if (careerRef.current) {
      careerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="CareersPage md:mt-5 pt-5 ">
      <div className="about-section-container mt-5">


        <div className="relative w-full">
          <div
            className="w-full h-[300px] md:h-[350px] lg:h-[400px] bg-cover bg-center overflow-hidden relative"
            style={{ backgroundImage: `url(${PagesImage.careerImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#064974bb] to-[#06a2da99] backdrop-blur-sm flex flex-col justify-center items-center text-white text-center px-6 transition-all duration-500">
              <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg">
                Opportunity
              </h1>

              <div className="mt-3 flex items-center space-x-2 text-sm md:text-lg font-medium opacity-90">
                <Link to='/' className="text-gray-200 hover:text-white transition duration-300 cursor-pointer">
                  Home
                </Link>
                <span className="text-white">/ Opportunity</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#064974] text-white py-12 md:py-16 px-4 sm:px-6 md:px-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
            <div>
              <h4 className="text-white uppercase text-sm mb-2">Careers & Opportunities</h4>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Unlock Your Potential, Build Your Future, <br />
                <span className="text-red-500">Grow with Us.</span>
              </h2>

              <img
                src={PagesImage.CareersPage1}
                alt="Career Growth"
                className="rounded-lg mt-6 w-full h-auto max-h-[360px] object-cover"
              />

            </div>

            <div>
              <div className="flex flex-col sm:flex-row lg:flex space-y-4 sm:space-y-0 sm:space-x-4">
                <img
                  src={PagesImage.CareersPage2}
                  alt="Career Growth"
                  className="w-full sm:w-1/2 rounded-lg object-cover"
                />
                <img
                  src={PagesImage.CareersPage3}
                  alt="Team Collaboration"
                  className="w-full sm:w-1/2 rounded-lg object-cover"
                />
              </div>

              <p className="text-white mt-6 text-sm md:text-base">
                At our company, we believe in empowering individuals to grow, innovate, and succeed.
                Whether you're a fresh graduate or an experienced professional, we offer a collaborative
                environment where your skills and passion can thrive. Join us to shape the future and build a fulfilling career.
              </p>

              {/* Stats Section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 text-center">
                <div className="p-4 md:p-6 bg-[#064974] rounded-2xl cursor-pointer shadow-lg hover:bg-[#1b6b9c] transition-all duration-300">
                  <h3 className="text-lg md:text-xl font-bold text-white">Career Acceleration</h3>
                  <p className="text-gray-300 text-xs md:text-sm mt-2">Fast-track promotions & leadership training.</p>
                </div>

                <div className="p-4 md:p-6 bg-[#064974] rounded-2xl cursor-pointer shadow-lg hover:bg-[#1b6b9c] transition-all duration-300">
                  <h3 className="text-lg md:text-xl font-bold text-white">Continuous Learning</h3>
                  <p className="text-gray-300 text-xs md:text-sm mt-2">Workshops, courses & mentorship programs.</p>
                </div>

                <div className="p-4 md:p-6 bg-[#064974] rounded-2xl cursor-pointer shadow-lg hover:bg-[#1b6b9c] transition-all duration-300">
                  <h3 className="text-lg md:text-xl font-bold text-white">Inclusive Culture</h3>
                  <p className="text-gray-300 text-xs md:text-sm mt-2">A diverse, supportive & collaborative team.</p>
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
                src={PagesImage.CareersPage1}
                alt="Career Opportunities"
                className="w-52 md:w-full h-auto rounded-xl shadow-lg transform transition duration-500 hover:scale-105"
              />

              {/* Bottom Image */}
              <img
                src={PagesImage.CareersPage2}
                alt="Immigration Consultation"
                className="w-44 md:w-80 h-auto rounded-xl shadow-lg absolute bottom-[-30px] left-[0px] border-4 border-[#064974] transform transition duration-500 hover:scale-105"
              />

              {/* Badge */}
              <div className="absolute top-[-20px] right-[-20px] bg-[#064974] text-white p-5 rounded-full w-20 h-20 flex flex-col items-center justify-center text-xs font-semibold shadow-lg transform transition duration-500 hover:scale-110">
                <DollarSign size={18} />
                2025 • IMMIGRATION CAREERS
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-[#064974] uppercase text-sm font-bold">
                Immigration Career Guidance
              </h4>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mt-2">
                Build Your Career Abroad <br /> With Experts
              </h2>
              <p className="text-gray-600 mt-4">
                Our expert consultants provide guidance on work visa applications, job search strategies, and career growth opportunities for immigrants. Let us help you navigate the pathway to a successful international career.
              </p>

              {/* Features */}
              <div className="mt-6 flex flex-col md:flex-row gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 bg-gray-100 px-4 py-3 rounded-lg"
                >
                  <DollarSign size={18} className="text-[#064974]" />
                  <span className="font-semibold">Work Visa Assistance</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 bg-gray-100 px-4 py-3 rounded-lg"
                >
                  <Users size={18} className="text-[#064974]" />
                  <span className="font-semibold">Personalized Career Consulting</span>
                </motion.div>
              </div>

              {/* Buttons */}
              <div className="mt-6 flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#064974] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#E63946] transition"
                >
                  <Link to='/AboutPage'>
                    Explore More
                  </Link>
                </motion.button>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-[#064974] font-semibold hover:underline"
                >
                  <a href="#" className='flex items-center gap-2' onClick={scrollTocareer}>
                    Explore Opportunities <ArrowRight size={16} />
                  </a>
                </motion.button>
              </div>
            </motion.div>
          </section>
        </div>


        <div className="OpportunitySection my-5" ref={careerRef}>

          <div className="container">
            <div className="content-section my-5">
              <h1 className='font-bold'>Discover Your Perfect Destination <br /> <span className='text-danger'>For a Better Future</span></h1>
            </div>

            {/* Location Tabs */}
            <div className="buttons">
              {locations.map((location) => (
                <button
                  key={location.name}
                  className={`location-button ${selectedLocation.name === location.name ? "active" : ""}`}
                  onClick={() => setSelectedLocation(location)}
                >
                  {location.name}
                </button>
              ))}
            </div>

            {/* Country Grid */}
            <div className="country-grid">
              {selectedLocation.countries.map((country) => (
                <div className="country-card" key={country}>
                  <img src={countryImages[country]} alt={country} className="country-flag ms-2" />
                  <span className="country-name ms-3">
                    <Link to={`/country/${country}`}>{country}</Link>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div >

      <EligibilityForm></EligibilityForm>
    </div >
  )
}