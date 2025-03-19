import React, { useState } from 'react';
import '../CountryDetails/CountryDetails.css';
import { Plus, Minus, Download } from 'lucide-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountain, faBusinessTime, faUsers, faHandshake, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import PagesImage from '../assets/imgs/Pages/PagesImage';

export default function SouthAfrica() {
  const countries = [
    {
      name: "Canada Visa",
      path: "/country/Canada"
    },
    {
      name: "Australia Visa",
      path: "/country/Australia"
    },
    {
      name: "UK Visa",
      path: "/country/UK"
    },
    {
      name: "New Zealand Visa",
      path: "/country/NewZealand"
    },
    {
      name: "USA Visa",
      path: "/country/USA"
    },
    {
      name: "Denmark Visa",
      path: "/country/Denmark"
    },
    {
      name: "Belgium Visa",
      path: "/country/Belgium"
    },
    {
      name: "France Visa",
      path: "/country/France"
    },
    {
      name: "Germany Visa",
      path: "/country/Germany"
    },
    {
      name: "Japan Visa",
      path: "/country/Japan"
    },
    {
      name: "Brazil Visa",
      path: "/country/Brazil"
    },
    {
      name: "South Africa Visa",
      path: "/country/SouthAfrica"
    },
  ];

  const faqs = [
    {
      question: "What are the ways to move to South Africa?",
      answer: "You can move to South Africa through work visas, study permits, business visas, or family sponsorship. The most common long-term visas are the Critical Skills Visa, General Work Visa, and Business Visa.",
    },
    {
      question: "Do I need a job offer to get a visa for South Africa?",
      answer: "For work visas like the General Work Visa, a job offer is required. However, the Critical Skills Visa allows you to move without one if your profession is in demand.",
    },
    {
      question: "How much does it cost to apply for a South African visa?",
      answer: "Visa costs vary depending on the type. A Critical Skills Visa costs around ZAR 1,520, while other visas may have different fees. You also need funds for living expenses and medical insurance.",
    },
    {
      question: "What is the age limit for moving to South Africa?",
      answer: "There is no strict age limit for most visas, but certain programs may have age preferences, especially for work-related visas.",
    },
    {
      question: "How long does the visa process take?",
      answer: "Processing times vary. Work and study visas usually take 6-12 weeks, while permanent residency applications can take longer, sometimes over a year.",
    },
  ];

  const downloads = [
    { title: "Udaan's Brochures", size: "3.9 KB", link: "/path/to/toefl.pdf" },
    { title: "Terms & Conditions", size: "3.9 KB", link: "/path/to/terms.pdf" },
  ];

  const [showAll, setShowAll] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <div className="country-details-section md:mt-5 pt-5">
      <div className="relative w-full mt-5">
        <div
          className="w-full h-[300px] md:h-[350px] lg:h-[400px] bg-cover bg-center overflow-hidden relative"
          style={{ backgroundImage: `url(${PagesImage.careerImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#064974bb] to-[#06a2da99] backdrop-blur-sm flex flex-col justify-center items-center text-white text-center px-6 transition-all duration-500">
            <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg">
              Opportunity
            </h1>

            <div className="mt-3 flex items-center space-x-2 text-sm md:text-lg font-medium opacity-90">
              <Link to='/CareersPage' className="text-gray-200 hover:scale-105 hover:text-white transition duration-300 cursor-pointer">
                Opportunity
              </Link>

              <span className="text-white"> / South Africa </span>
            </div>
          </div>
        </div>
      </div>

      <div className="Country-And-Details-Section">


        <div className="Country-container-section">
          <div className="country-list">
            {countries.slice(0, showAll ? countries.length : 6).map((country, index) => (
              <Link to={country.path} key={index} className="country-item">
                <i className="fa-solid fa-arrow-right"></i>
                <span className="country-list-name-section">{country.name}</span>
              </Link>
            ))}

            <div className="toggle-button">
              {!showAll ? (
                <button className='plus-section' onClick={() => setShowAll(true)}>
                  <span>More Countries</span>
                  <Plus size={20} className='ms-2' />
                </button>
              ) : (
                <button className='plus-section' onClick={() => setShowAll(false)}>
                  <span>Less Countries</span>
                  <Minus size={20} className='ms-2' />
                </button>
              )}
            </div>
          </div>

          <div className="downloads-container p-5">
            <h3 className="downloads-title">Brochures & Policies</h3>
            <div className="downloads-list ms-4">
              {downloads.map((file, index) => (
                <a key={index} href={file.link} download className="download-item">
                  <div className="download-icon">
                    <Download size={28} />
                  </div>
                  <div className="download-info">
                    <p className="download-title">{file.title}</p>
                    <p className="download-size">{file.size}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="Country-Paragraph-Section">
          <div className="country-section-image">
            <img src={PagesImage.cou3} alt="Canada Immigration" className='img-fluid mt-5' />
          </div>
          <div className="country-section-content mt-4 p-6">
            <h1 className="text-3xl font-bold text-primary-blue mb-4">South Africa PR & Visa Guide: Everything You Need to Know</h1>

            <p className="text-gray-700 mb-4">
              South Africa is a beautiful country known for its diverse culture, thriving economy, and high quality of life.
              Whether you are a skilled professional, entrepreneur, student, or retiree, South Africa offers various visa options for immigration.
            </p>

            <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-1">Why Choose South Africa?</h2>
            <p className="text-gray-700 mb-4">
              With its stunning landscapes, booming industries, and affordable cost of living, South Africa is an attractive destination for immigrants.
              The country provides a range of opportunities for skilled workers, business investors, and students looking to build a future in a dynamic environment.
            </p>

            <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-2">Types of South Africa Visas & Immigration Programs</h2>
            <p className="text-gray-700 mb-3">There are multiple immigration pathways, including:</p>

            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong className="text-primary-blue">General Work Visa:</strong> For skilled professionals with job offers from South African employers.</li>
              <li><strong className="text-primary-blue">Critical Skills Visa:</strong> For individuals with expertise in high-demand occupations in South Africa.</li>
              <li><strong className="text-primary-blue">Business Visa:</strong> For entrepreneurs looking to establish or invest in a business in South Africa.</li>
              <li><strong className="text-primary-blue">Study Visa:</strong> For international students enrolling in South African universities.</li>
              <li><strong className="text-primary-blue">Retirement Visa:</strong> For retirees who wish to settle in South Africa with proof of financial means.</li>
              <li><strong className="text-primary-blue">Spousal & Relative Visa:</strong> If you have a South African citizen or permanent resident family member, they can sponsor your immigration.</li>
            </ul>

            <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-2">How We Help You</h2>
            <p className="text-gray-700 mb-4">
              Our expert immigration consultants guide you through every step, ensuring your paperwork is accurate, deadlines are met, and your chances of approval are maximized.
              Whether you need assistance with work permits, permanent residency, or business visas, we are here to help.
            </p>

            <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-3">Step-by-Step Immigration Process</h2>

            <div className="space-y-3">
              <p><span className="font-semibold text-primary-blue">1. Eligibility Assessment:</span> We evaluate your qualifications and visa options based on your profile.</p>
              <p><span className="font-semibold text-primary-blue">2. Document Preparation:</span> Our team helps you gather and verify all required documents for your visa application.</p>
              <p><span className="font-semibold text-primary-blue">3. Visa Application Submission:</span> We ensure your application is completed accurately and submitted on time.</p>
              <p><span className="font-semibold text-primary-blue">4. Follow-ups & Processing:</span> We keep track of your application and provide updates throughout the process.</p>
              <p><span className="font-semibold text-primary-blue">5. Settlement Assistance:</span> Once approved, we help you with relocation, accommodation, and job search in South Africa.</p>
            </div>

            <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-2">Get Started Today!</h2>
            <p className="text-gray-700 mb-4">
              If you are planning to move to South Africa, don't navigate the complex immigration process alone. Contact us today for expert guidance and take the first step toward your new life!
            </p>

            <Link to='/ContactPage'>
              <button className="mt-2 px-6 py-3 bg-[#064974] text-white font-semibold rounded-lg shadow-md hover:bg-primary-red-hover transition-all duration-300 ease-in-out">
                Contact Us
              </button>
            </Link>
          </div>

          <div className="country-section-whyChooseUs mt-5 text-start">
            <h1 className="ms-2">Why Settle In South Africa?</h1>
            <div className="why-choose-us mt-5">
              <div className="feature">
                <div className="content">
                  <span className="icon">
                    <FontAwesomeIcon icon={faMountain} />
                  </span>
                  <h4>Stunning Landscapes & Wildlife</h4>
                </div>
              </div>
              <div className="feature">
                <div className="content">
                  <span className="icon">
                    <FontAwesomeIcon icon={faBusinessTime} />
                  </span>
                  <h4>Growing Economy & Business Opportunities</h4>
                </div>
              </div>
              <div className="feature">
                <div className="content">
                  <span className="icon">
                    <FontAwesomeIcon icon={faUsers} />
                  </span>
                  <h4>Diverse & Friendly Communities</h4>
                </div>
              </div>
              <div className="feature">
                <div className="content">
                  <span className="icon">
                    <FontAwesomeIcon icon={faHandshake} />
                  </span>
                  <h4>Affordable Living & Quality Lifestyle</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="faqs-section">
            <h1 className="faqs-title">Frequently Asked Questions</h1>
            <div className="faqs-container">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <div className="faq-question" onClick={() => toggleFAQ(index)}>
                    <span>{faq.question}</span>
                    <FontAwesomeIcon icon={openIndex === index ? faMinus : faPlus} className="faq-icon" />
                  </div>
                  {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}