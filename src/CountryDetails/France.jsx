import React, { useState } from 'react';
import '../CountryDetails/CountryDetails.css';
import { Plus, Minus, Download } from 'lucide-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faUniversity, faLandmark, faUtensils, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import PagesImage from '../assets/imgs/Pages/PagesImage';

export default function France() {
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
      question: "What types of visas are available for France?",
      answer: "France offers work visas, student visas, business visas, talent passports for skilled professionals, family reunification visas, and long-term residence permits."
    },
    {
      question: "Can I move to France without a job offer?",
      answer: "It depends on the visa type. Work visas require a job offer, but highly skilled professionals may qualify for the 'Talent Passport' without one. Entrepreneurs and investors can also apply for self-employment visas."
    },
    {
      question: "How much does a visa for France cost?",
      answer: "Visa fees depend on the type. A work visa typically costs around €99-€250, while student visas start at €50. Long-term residence permits may have additional administrative fees."
    },
    {
      question: "Are there any age restrictions for moving to France?",
      answer: "No strict age limit applies, but specific visas, such as study or working holiday visas, may have age requirements. Retirement visas are available for financially independent individuals."
    },
    {
      question: "How long does it take to process a French visa?",
      answer: "Processing times vary. Short-term visas take 15-30 days, while work and residence permits can take 2-4 months. Fast-track options exist for skilled workers and business professionals."
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

              <span className="text-white"> / France </span>
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
            <img src={PagesImage.cou8} alt="Canada Immigration" className='img-fluid mt-5' />
          </div>
          <div className="country-section-content mt-4 p-6">
            <h1 className="text-3xl font-bold text-primary-blue mb-4">France PR & Visa Guide: Everything You Need to Know</h1>

            <p className="text-gray-700 mb-4">
              France is a top destination for skilled professionals, students, entrepreneurs, and families seeking a vibrant culture, strong economy, and high quality of life.
              With world-class healthcare, education, and career opportunities, France offers various immigration pathways for those looking to work, study, or settle permanently.
            </p>

            <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-1">Why Choose France?</h2>
            <p className="text-gray-700 mb-4">
              France is known for its rich history, thriving economy, and excellent work-life balance. It provides numerous opportunities for professionals, students,
              and investors looking to establish themselves in Europe. With a robust social security system and cultural diversity, France is an ideal place to live and work.
            </p>

            <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-2">Types of France Visas & Immigration Programs</h2>
            <p className="text-gray-700 mb-3">There are multiple immigration pathways, including:</p>

            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong className="text-primary-blue">Talent Passport:</strong> For skilled professionals, researchers, investors, and entrepreneurs contributing to the French economy.</li>
              <li><strong className="text-primary-blue">Work Visa:</strong> For individuals with a job offer from a French employer.</li>
              <li><strong className="text-primary-blue">Student Visa:</strong> For international students enrolling in French universities or higher education institutions.</li>
              <li><strong className="text-primary-blue">Business & Investor Visa:</strong> For entrepreneurs and investors planning to establish a business in France.</li>
              <li><strong className="text-primary-blue">Family Reunification Visa:</strong> If you have a family member residing in France, you may apply to join them.</li>
              <li><strong className="text-primary-blue">Permanent Residency (PR):</strong> After residing in France for five years, you may qualify for permanent residency.</li>
            </ul>

            <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-2">How We Help You</h2>
            <p className="text-gray-700 mb-4">
              Our immigration experts guide you through every step of the process. From choosing the right visa category to document preparation and application submission,
              we ensure a smooth and hassle-free experience. We also provide post-approval support to help you settle in France.
            </p>

            <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-3">Step-by-Step Immigration Process</h2>

            <div className="space-y-3">
              <p><span className="font-semibold text-primary-blue">1. Eligibility Assessment:</span> We evaluate your qualifications, experience, and visa eligibility.</p>
              <p><span className="font-semibold text-primary-blue">2. Document Preparation:</span> Our team assists in gathering and verifying all necessary documents.</p>
              <p><span className="font-semibold text-primary-blue">3. Visa Application Submission:</span> We ensure your application is completed correctly and submitted on time.</p>
              <p><span className="font-semibold text-primary-blue">4. Follow-ups & Processing:</span> We track your application and provide updates throughout the process.</p>
              <p><span className="font-semibold text-primary-blue">5. Settlement Assistance:</span> Once approved, we help with relocation, accommodation, and integration into French society.</p>
            </div>

            <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-2">Get Started Today!</h2>
            <p className="text-gray-700 mb-4">
              Planning to move to France? Let our experts simplify the process for you. Contact us today for a consultation and take the first step toward your new life in France!
            </p>

            <Link to='/ContactPage'>
              <button className="mt-2 px-6 py-3 bg-[#064974] text-white font-semibold rounded-lg shadow-md hover:bg-primary-red-hover transition-all duration-300 ease-in-out">
                Contact Us
              </button>
            </Link>
          </div>

          <div className="country-section-whyChooseUs mt-5 text-start">
            <h1 className="ms-2">Why Settle In France?</h1>
            <div className="why-choose-us mt-5">
              <div className="feature">
                <div className="content">
                  <span className="icon">
                    <FontAwesomeIcon icon={faBriefcase} />
                  </span>
                  <h4>Strong Economy & Career Growth</h4>
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
                    <FontAwesomeIcon icon={faLandmark} />
                  </span>
                  <h4>Rich History & Iconic Landmarks</h4>
                </div>
              </div>

              <div className="feature">
                <div className="content">
                  <span className="icon">
                    <FontAwesomeIcon icon={faUtensils} />
                  </span>
                  <h4>Renowned Cuisine & Lifestyle</h4>
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