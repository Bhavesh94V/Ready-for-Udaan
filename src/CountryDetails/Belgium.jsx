import React, { useState } from 'react';
import '../CountryDetails/CountryDetails.css';
import { Plus, Minus, Download } from 'lucide-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faUniversity, faGlobeEurope, faBiking, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import PagesImage from '../assets/imgs/Pages/PagesImage';

export default function Belgium() {
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
      question: "What are the visa options for Belgium?",
      answer: "Belgium offers work visas, student visas, business visas, and family reunification visas. The most popular options are the EU Blue Card and Single Permit for workers."
    },
    {
      question: "Do I need a job offer to move to Belgium?",
      answer: "Yes, for most work-related visas, a job offer is required. However, entrepreneurs and investors can apply for a self-employment visa without one."
    },
    {
      question: "What is the cost of a Belgian visa?",
      answer: "Visa fees vary by type. A work visa typically costs around €180, while student visas and residence permits may have different fees."
    },
    {
      question: "Is there an age limit for moving to Belgium?",
      answer: "There is no strict age limit, but some visa programs may prioritize younger applicants for work and study permits."
    },
    {
      question: "How long does the visa process take?",
      answer: "Processing times vary. Work and student visas take around 6-12 weeks, while permanent residency applications can take over a year."
    },
  ]

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

              <span className="text-white"> / Belgium </span>
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
            <img src="https://img.freepik.com/premium-photo/ghent-old-town-belgium_63253-2180.jpg?uid=R183500011&ga=GA1.1.1860702175.1736869206&semt=ais_hybrid" alt="Canada Immigration" className='img-fluid mt-5' />
          </div>
          <div className="country-section-content mt-4 p-6">
            <h1 className="text-3xl font-bold text-primary-blue mb-4">Belgium PR & Visa Guide: Everything You Need to Know</h1>

            <p className="text-gray-700 mb-4">
              Belgium is a top destination for skilled professionals, students, entrepreneurs, and families looking for a high quality of life, excellent healthcare, and career opportunities.
              Whether you want to settle permanently, work in a thriving economy, or study at prestigious universities, Belgium offers multiple immigration pathways.
            </p>

            <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-1">Why Choose Belgium?</h2>
            <p className="text-gray-700 mb-4">
              Belgium is known for its strong economy, diverse culture, and central location in Europe. It offers excellent work-life balance, world-class education, and a high standard of living.
              The country provides opportunities for skilled professionals, business investors, and students to build a successful future in the heart of Europe.
            </p>

            <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-2">Types of Belgium Visas & Immigration Programs</h2>
            <p className="text-gray-700 mb-3">There are multiple immigration pathways, including:</p>

            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong className="text-primary-blue">Work Permit (Single Permit):</strong> For skilled professionals with a job offer from a Belgian employer.</li>
              <li><strong className="text-primary-blue">EU Blue Card:</strong> For highly skilled non-EU workers who meet salary and qualification requirements.</li>
              <li><strong className="text-primary-blue">Self-Employed Visa:</strong> For entrepreneurs, freelancers, and business owners looking to establish a business in Belgium.</li>
              <li><strong className="text-primary-blue">Student Visa:</strong> For international students enrolling in Belgian universities or higher education institutions.</li>
              <li><strong className="text-primary-blue">Dependent & Family Reunification Visa:</strong> If you have a family member who is a Belgian resident or citizen, you may apply to join them.</li>
              <li><strong className="text-primary-blue">Permanent Residency (PR):</strong> After legally residing in Belgium for five years, you may qualify for permanent residency.</li>
            </ul>

            <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-2">How We Help You</h2>
            <p className="text-gray-700 mb-4">
              Our immigration experts guide you through every step of the process. From selecting the right visa category to document preparation and application submission,
              we ensure a smooth and hassle-free experience. We also provide post-approval support to help you settle in Belgium.
            </p>

            <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-3">Step-by-Step Immigration Process</h2>

            <div className="space-y-3">
              <p><span className="font-semibold text-primary-blue">1. Eligibility Assessment:</span> We assess your qualifications, work experience, and eligibility for Belgian visas.</p>
              <p><span className="font-semibold text-primary-blue">2. Document Preparation:</span> We help you gather and verify all necessary documents for your application.</p>
              <p><span className="font-semibold text-primary-blue">3. Visa Application Submission:</span> Our team ensures your application is completed accurately and submitted on time.</p>
              <p><span className="font-semibold text-primary-blue">4. Follow-ups & Processing:</span> We keep track of your application and provide updates throughout the process.</p>
              <p><span className="font-semibold text-primary-blue">5. Settlement Assistance:</span> Once approved, we help you with relocation, accommodation, and integration into Belgian society.</p>
            </div>

            <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-2">Get Started Today!</h2>
            <p className="text-gray-700 mb-4">
              Planning to move to Belgium? Let our experts simplify the process for you. Contact us today for a consultation and take the first step toward your new life in Belgium!
            </p>

            <button className="mt-2 px-6 py-3 bg-[#064974] text-white font-semibold rounded-lg shadow-md hover:bg-primary-red-hover transition-all duration-300 ease-in-out">
              Contact Us
            </button>
          </div>

          <div className="country-section-whyChooseUs mt-5 text-start">
            <h1 className="ms-2">Why Settle In Belgium?</h1>
            <div className="why-choose-us mt-5">
              <div className="feature">
                <div className="content">
                  <span className="icon">
                    <FontAwesomeIcon icon={faBuilding} />
                  </span>
                  <h4>Strong Job Market & Economy</h4>
                </div>
              </div>
              <div className="feature">
                <div className="content">
                  <span className="icon">
                    <FontAwesomeIcon icon={faUniversity} />
                  </span>
                  <h4>Top-Ranked Universities</h4>
                </div>
              </div>
              <div className="feature">
                <div className="content">
                  <span className="icon">
                    <FontAwesomeIcon icon={faGlobeEurope} />
                  </span>
                  <h4>Central Location in Europe</h4>
                </div>
              </div>
              <div className="feature">
                <div className="content">
                  <span className="icon">
                    <FontAwesomeIcon icon={faBiking} />
                  </span>
                  <h4>Excellent Public Transport & Lifestyle</h4>
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