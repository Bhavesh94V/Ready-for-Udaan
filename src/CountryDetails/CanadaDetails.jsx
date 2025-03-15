import React, { useState } from 'react';
import '../CountryDetails/CountryDetails.css';
import { Plus, Minus, Download } from 'lucide-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartPulse, faGraduationCap, faBriefcase, faShieldAlt, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import PagesImage from '../assets/imgs/Pages/PagesImage';
import { Link } from 'react-router-dom';

export default function CanadaDetails() {
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
      question: "What is the easiest way to immigrate to Canada?",
      answer: "Express Entry is one of the fastest and most popular immigration pathways for skilled workers. Other options include PNP, Study Permits, and Family Sponsorship.",
    },
    {
      question: "How much money do I need to move to Canada?",
      answer: "For Express Entry, a single applicant typically needs CAD $13,757, while a family of four needs around CAD $25,564. The amount varies based on the program.",
    },
    {
      question: "Do I need a job offer to apply for PR in Canada?",
      answer: "No, a job offer is not mandatory for PR. However, having one can increase your CRS score in Express Entry or qualify you for PNP programs.",
    },
    {
      question: "What is the age limit for Canadian immigration?",
      answer: "There is no strict age limit, but applicants aged 18-35 receive the highest points under Express Entry. Older applicants may need strong work experience or job offers to qualify.",
    },
    {
      question: "How long does the PR process take?",
      answer: "Express Entry takes about 6 months, while PNP and family sponsorship can take 12-18 months.",
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

              <span className="text-white"> / Canada </span>
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
            <img src="https://img.freepik.com/free-photo/ottawa-cityscape_649448-3562.jpg?uid=R183500011&ga=GA1.1.1860702175.1736869206&semt=ais_hybrid" alt="Canada Immigration" className='img-fluid mt-5' />
          </div>
          <div className="country-section-content mt-4 p-6">
            <h1 className="text-3xl font-bold text-primary-blue mb-4">Canada PR & Visa Guide: Everything You Need to Know</h1>

            <p className="text-black mb-4">
              Canada is one of the most welcoming countries in the world, known for its high quality of life, strong economy, and multicultural society.
              Whether you want to move permanently, study at a top university, or explore job opportunities, Canada offers various pathways for immigration.
            </p>

            <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-1">Why Choose Canada?</h2>
            <p className="text-gray-700 mb-4">
              Canada provides a safe and stable environment, excellent healthcare, and a strong job market. With its immigrant-friendly policies,
              the country makes it easier for skilled professionals, students, and families to settle and build a better future.
            </p>

            <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-2">Types of Canada Visas & Immigration Programs</h2>
            <p className="text-gray-700 mb-3">There are multiple immigration pathways, including:</p>

            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong className="text-primary-blue">Express Entry:</strong> The fastest way for skilled workers to get permanent residency.</li>
              <li><strong className="text-primary-blue">Provincial Nominee Program (PNP):</strong> Each province in Canada has its own immigration program to attract skilled workers.</li>
              <li><strong className="text-primary-blue">Student Visa:</strong> For international students looking to study in Canada’s top universities.</li>
              <li><strong className="text-primary-blue">Work Permit:</strong> For individuals seeking employment opportunities in Canada.</li>
              <li><strong className="text-primary-blue">Family Sponsorship:</strong> If you have relatives in Canada, they can sponsor your immigration.</li>
            </ul>

            <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-2">How We Help You</h2>
            <p className="text-gray-700 mb-4">
              Our team of immigration experts assists you throughout the process, from submitting your application to settling in Canada.
              We ensure that your paperwork is handled correctly, deadlines are met, and your chances of approval are maximized.
            </p>

            <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-3">Step-by-Step Immigration Process</h2>

            <div className="space-y-3">
              <p><span className="font-semibold text-primary-blue">1. Eligibility Check:</span> We assess your profile to determine the best immigration pathway for you.</p>
              <p><span className="font-semibold text-primary-blue">2. Document Preparation:</span> Our team helps you gather and verify all required documents.</p>
              <p><span className="font-semibold text-primary-blue">3. Application Submission:</span> We ensure your application is submitted accurately and on time.</p>
              <p><span className="font-semibold text-primary-blue">4. Follow-ups & Updates:</span> We provide regular updates on your application status.</p>
              <p><span className="font-semibold text-primary-blue">5. Settlement Assistance:</span> Once you arrive in Canada, we guide you on accommodation, jobs, and lifestyle adjustments.</p>
            </div>

            <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-2">Get Started Today!</h2>
            <p className="text-gray-700 mb-4">
              If you are planning to move to Canada, don't navigate the complex immigration process alone. Contact us today for a consultation and let our experts guide you every step of the way.
            </p>

            <button className="mt-2 px-6 py-3 bg-[#064974] text-white font-semibold rounded-lg shadow-md hover:bg-primary-red-hover transition-all duration-300 ease-in-out">
              Contact Us
            </button>

          </div>


          <div className="country-section-whyChooseUs mt-4 text-start">
            <h1 className='ms-2'>Why Settle in Canada?</h1>
            <div className="why-choose-us mt-5">
              <div className="feature">
                <div className="content">
                  <span className="icon">
                    <FontAwesomeIcon icon={faShieldAlt} />
                  </span>
                  <h4>Safe & Stable Environment</h4>
                </div>
              </div>
              <div className="feature">
                <div className="content">
                  <span className="icon">
                    <FontAwesomeIcon icon={faGraduationCap} />
                  </span>
                  <h4> Top-Tier Education</h4>
                </div>
              </div>
              <div className="feature">
                <div className="content">
                  <span className="icon">
                    <FontAwesomeIcon icon={faHeartPulse} />
                  </span>
                  <h4>Great Quality of Life</h4>
                </div>
              </div>
              <div className="feature">
                <div className="content">
                  <span className="icon">
                    <FontAwesomeIcon icon={faBriefcase} />
                  </span>
                  <h4>Strong Job Market</h4>
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