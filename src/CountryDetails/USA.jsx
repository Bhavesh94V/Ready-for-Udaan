import React, { useState } from 'react';
import '../CountryDetails/CountryDetails.css';
import { Plus, Minus, Download } from 'lucide-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faUniversity, faHospital, faCity, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import PagesImage from '../assets/imgs/Pages/PagesImage';
import { Link } from 'react-router-dom';

export default function USA() {
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
      question: "What types of visas are available for the USA?",
      answer: "The USA offers work visas (H-1B, L-1, O-1, etc.), student visas (F-1, M-1, J-1), investor visas (EB-5), family-based visas, tourist visas (B-1/B-2), and green card options for permanent residency."
    },
    {
      question: "Can I move to the USA without a job offer?",
      answer: "Yes, visas like the EB-5 Investor Visa, Diversity Visa Lottery, and family-sponsored visas allow immigration without a job offer. However, most work visas require employer sponsorship."
    },
    {
      question: "How much does a visa for the USA cost?",
      answer: "Visa costs vary. A work visa (H-1B) has fees ranging from $190–$500+, student visas (F-1) cost around $185, and green card application fees can exceed $1,200."
    },
    {
      question: "Are there any age restrictions for moving to the USA?",
      answer: "There are no general age restrictions, but some visas, like the Diversity Visa Lottery, require applicants to meet education or work experience criteria."
    },
    {
      question: "How long does it take to process a USA visa?",
      answer: "Processing times vary. Tourist and student visas take a few weeks, work visas can take months, and green cards or family sponsorships may take several years."
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

              <span className="text-white"> / United States</span>
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
            <img src={PagesImage.cou7} alt="Canada Immigration" className='img-fluid mt-5' />
          </div>
          <div className="country-section-content mt-4 p-6">
            <h1 className="text-3xl font-bold text-primary-blue mb-4">USA PR & Visa Guide: Everything You Need to Know</h1>

            <p className="text-gray-700 mb-4">
              The United States is one of the most desirable destinations for skilled professionals, students, entrepreneurs, and families.
              With a strong economy, world-renowned universities, and endless career opportunities, the USA offers multiple immigration pathways
              for those looking to work, study, or settle permanently.
            </p>

            <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-1">Why Choose the USA?</h2>
            <p className="text-gray-700 mb-4">
              The USA provides exceptional career growth, a high quality of life, diverse cultural experiences, and access to top-tier education.
              With a well-established immigration system, individuals from around the world can find suitable visa options to achieve their
              professional and personal goals in the USA.
            </p>

            <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-2">Types of USA Visas & Immigration Programs</h2>
            <p className="text-gray-700 mb-3">There are multiple immigration pathways, including:</p>

            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong className="text-primary-blue">H-1B Visa:</strong> For skilled professionals in specialty occupations with a U.S. job offer.</li>
              <li><strong className="text-primary-blue">L-1 Visa:</strong> For employees transferring within the same company from an international branch to a U.S. office.</li>
              <li><strong className="text-primary-blue">O-1 Visa:</strong> For individuals with extraordinary ability in fields such as science, arts, education, or business.</li>
              <li><strong className="text-primary-blue">EB-5 Investor Visa:</strong> For entrepreneurs investing in U.S. businesses to obtain a Green Card.</li>
              <li><strong className="text-primary-blue">F-1 Student Visa:</strong> For international students enrolling in U.S. universities and colleges.</li>
              <li><strong className="text-primary-blue">Family-Sponsored Green Card:</strong> For spouses, parents, children, and relatives of U.S. citizens or permanent residents.</li>
              <li><strong className="text-primary-blue">Employment-Based Green Card:</strong> For professionals and workers who qualify under EB-1, EB-2, or EB-3 visa categories.</li>
            </ul>

            <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-2">How We Help You</h2>
            <p className="text-gray-700 mb-4">
              Our immigration specialists provide end-to-end support, from choosing the right visa to application processing and post-approval assistance.
              Whether you need help with work visas, study permits, Green Card applications, or investor visas, we ensure a smooth and efficient process.
            </p>

            <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-3">Step-by-Step Immigration Process</h2>

            <div className="space-y-3">
              <p><span className="font-semibold text-primary-blue">1. Eligibility Assessment:</span> We evaluate your profile, qualifications, and visa eligibility.</p>
              <p><span className="font-semibold text-primary-blue">2. Document Preparation:</span> Our team helps gather and verify all necessary documents for your visa application.</p>
              <p><span className="font-semibold text-primary-blue">3. Visa Application Submission:</span> We ensure your application is accurately completed and submitted on time.</p>
              <p><span className="font-semibold text-primary-blue">4. Follow-ups & Processing:</span> We track your application and provide updates throughout the process.</p>
              <p><span className="font-semibold text-primary-blue">5. Settlement Assistance:</span> Once approved, we assist with relocation, accommodation, and job search in the USA.</p>
            </div>

            <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-2">Get Started Today!</h2>
            <p className="text-gray-700 mb-4">
              Planning to move to the USA? Let our experts simplify the process for you. Contact us today for a consultation and take the first step toward your new life in the United States!
            </p>

            <Link to='/ContactPage'>
              <button className="mt-2 px-6 py-3 bg-[#064974] text-white font-semibold rounded-lg shadow-md hover:bg-primary-red-hover transition-all duration-300 ease-in-out">
                Contact Us
              </button>
            </Link>
          </div>

          <div className="country-section-whyChooseUs mt-5 text-start">
            <h1 className="ms-2">Why Settle In the USA?</h1>
            <div className="why-choose-us mt-5">
              <div className="feature">
                <div className="content">
                  <span className="icon">
                    <FontAwesomeIcon icon={faBriefcase} />
                  </span>
                  <h4>Thriving Economy & Job Market</h4>
                </div>
              </div>

              <div className="feature">
                <div className="content">
                  <span className="icon">
                    <FontAwesomeIcon icon={faUniversity} />
                  </span>
                  <h4>Top-Ranked Universities & Research</h4>
                </div>
              </div>

              <div className="feature">
                <div className="content">
                  <span className="icon">
                    <FontAwesomeIcon icon={faHospital} />
                  </span>
                  <h4>Advanced Healthcare System</h4>
                </div>
              </div>

              <div className="feature">
                <div className="content">
                  <span className="icon">
                    <FontAwesomeIcon icon={faCity} />
                  </span>
                  <h4>Diverse Culture & Modern Lifestyle</h4>
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