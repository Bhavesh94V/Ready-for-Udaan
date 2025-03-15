import React, { useState } from 'react';
import '../CountryDetails/CountryDetails.css';
import { Plus, Minus, Download } from 'lucide-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faUniversity, faHospital, faToriiGate, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import PagesImage from '../assets/imgs/Pages/PagesImage';
import { Link } from 'react-router-dom';

export default function Japan() {
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
      question: "What types of visas are available for Japan?",
      answer: "Japan offers work visas, student visas, business manager visas, highly skilled professional visas, family reunification visas, and the specified skills visa for certain industries."
    },
    {
      question: "Can I move to Japan without a job offer?",
      answer: "In most cases, a job offer is required for a work visa. However, Japan offers a Highly Skilled Professional Visa and Business Manager Visa for entrepreneurs and investors without a job offer."
    },
    {
      question: "How much does a visa for Japan cost?",
      answer: "Visa fees depend on the type. A work visa typically costs around ¥3,000–¥6,000, while student visas have similar pricing. Investor and highly skilled visas may involve additional documentation costs."
    },
    {
      question: "Are there any age restrictions for moving to Japan?",
      answer: "There are no strict age restrictions, but some visa categories, such as working holiday visas, have age limits. Skilled professionals and retirees can apply based on qualifications and financial stability."
    },
    {
      question: "How long does it take to process a Japanese visa?",
      answer: "Processing times vary. Work and student visas typically take 2-4 weeks, while permanent residency and highly skilled visas may take several months."
    }
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

              <span className="text-white"> / Japan </span>
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
            <img src="https://img.freepik.com/free-photo/aerial-view-tokyo-cityscape-with-fuji-mountain-japan_335224-148.jpg?uid=R183500011&ga=GA1.1.1860702175.1736869206&semt=ais_hybrid" alt="Canada Immigration" className='img-fluid mt-5' />
          </div>
          <div className="country-section-content mt-4 p-6">
            <h1 className="text-3xl font-bold text-primary-blue mb-4">Japan PR & Visa Guide: Everything You Need to Know</h1>

            <p className="text-gray-700 mb-4">
              Japan is a highly developed nation with a strong economy, world-class infrastructure, and a unique cultural heritage.
              It offers excellent career opportunities, high-quality education, and a safe, modern living environment for skilled professionals, students, investors, and families looking to relocate.
            </p>

            <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-1">Why Choose Japan?</h2>
            <p className="text-gray-700 mb-4">
              Japan is home to some of the world's most advanced industries, including technology, robotics, and finance.
              It has a well-structured immigration system that allows professionals and entrepreneurs to settle with long-term visas and a pathway to permanent residency.
            </p>

            <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-2">Types of Japan Visas & Immigration Programs</h2>
            <p className="text-gray-700 mb-3">Japan offers various visa categories based on work, study, business, and residency, including:</p>

            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong className="text-primary-blue">Highly Skilled Professional Visa:</strong> For individuals with exceptional skills in IT, finance, engineering, or research fields.</li>
              <li><strong className="text-primary-blue">Work Visa:</strong> For foreign professionals with job offers from Japanese employers.</li>
              <li><strong className="text-primary-blue">Student Visa:</strong> For international students enrolling in Japanese universities or language schools.</li>
              <li><strong className="text-primary-blue">Investor/Business Manager Visa:</strong> For entrepreneurs and investors starting a business in Japan.</li>
              <li><strong className="text-primary-blue">Specified Skilled Worker Visa:</strong> For workers in industries facing labor shortages, such as construction, healthcare, and hospitality.</li>
              <li><strong className="text-primary-blue">Spouse or Dependent Visa:</strong> For family members of Japanese citizens or foreign residents.</li>
              <li><strong className="text-primary-blue">Permanent Residency (PR):</strong> After meeting residency requirements, individuals can apply for PR for long-term settlement.</li>
            </ul>

            <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-2">How We Help You</h2>
            <p className="text-gray-700 mb-4">
              Our immigration experts guide you through the Japan visa application process, ensuring that all documentation and requirements are met.
              We provide assistance in job searches, business setup, and permanent residency applications to make your transition to Japan as smooth as possible.
            </p>

            <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-3">Step-by-Step Immigration Process</h2>

            <div className="space-y-3">
              <p><span className="font-semibold text-primary-blue">1. Eligibility Assessment:</span> We evaluate your qualifications, experience, and visa eligibility.</p>
              <p><span className="font-semibold text-primary-blue">2. Document Preparation:</span> Our team assists in gathering and verifying all necessary documents.</p>
              <p><span className="font-semibold text-primary-blue">3. Visa Application Submission:</span> We ensure your application is completed correctly and submitted on time.</p>
              <p><span className="font-semibold text-primary-blue">4. Follow-ups & Processing:</span> We track your application and provide updates throughout the process.</p>
              <p><span className="font-semibold text-primary-blue">5. Settlement Assistance:</span> Once approved, we help with relocation, accommodation, and integration into Japanese society.</p>
            </div>

            <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-2">Get Started Today!</h2>
            <p className="text-gray-700 mb-4">
              Planning to move to Japan? Let our experts simplify the process for you. Contact us today for a consultation and take the first step toward your new life in Japan!
            </p>

            <button className="mt-2 px-6 py-3 bg-[#064974] text-white font-semibold rounded-lg shadow-md hover:bg-primary-red-hover transition-all duration-300 ease-in-out">
              Contact Us
            </button>
          </div>

          <div className="country-section-whyChooseUs mt-5 text-start">
            <h1 className="ms-2">Why Settle In Japan?</h1>
            <div className="why-choose-us mt-5">
              <div className="feature">
                <div className="content">
                  <span className="icon">
                    <FontAwesomeIcon icon={faBriefcase} />
                  </span>
                  <h4>Advanced Economy & Job Market</h4>
                </div>
              </div>

              <div className="feature">
                <div className="content">
                  <span className="icon">
                    <FontAwesomeIcon icon={faUniversity} />
                  </span>
                  <h4>World-Class Education & Research</h4>
                </div>
              </div>

              <div className="feature">
                <div className="content">
                  <span className="icon">
                    <FontAwesomeIcon icon={faHospital} />
                  </span>
                  <h4>Excellent Healthcare System</h4>
                </div>
              </div>

              <div className="feature">
                <div className="content">
                  <span className="icon">
                    <FontAwesomeIcon icon={faToriiGate} />
                  </span>
                  <h4>Cultural & Tech Growth</h4>
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