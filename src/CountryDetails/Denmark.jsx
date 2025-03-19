import React, { useState } from 'react';
import '../CountryDetails/CountryDetails.css';
import { Plus, Minus, Download } from 'lucide-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faUniversity, faHeartbeat, faBiking, faSmile, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import PagesImage from '../assets/imgs/Pages/PagesImage';
import { Link } from 'react-router-dom';

export default function Denmark() {
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
      question: "What are the visa options for Denmark?",
      answer: "Denmark offers various visa options, including work visas, student visas, business visas, family reunification visas, and the Denmark Green Card scheme for skilled professionals."
    },
    {
      question: "Do I need a job offer to move to Denmark?",
      answer: "Yes, for most work-related visas, a job offer from a Danish employer is required. However, highly skilled professionals may qualify for the Pay Limit Scheme without one."
    },
    {
      question: "What is the cost of a Danish visa?",
      answer: "Visa fees vary depending on the type. A work visa generally costs around DKK 3,025, while student visas and residence permits may have different fees."
    },
    {
      question: "Is there an age limit for moving to Denmark?",
      answer: "There is no strict age limit for moving to Denmark, but certain visa categories, such as study permits, may have age-related eligibility criteria."
    },
    {
      question: "How long does the visa process take?",
      answer: "Processing times depend on the visa type. Work visas typically take 1-3 months, while student and family reunification visas may take longer."
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

              <span className="text-white"> / Denmark</span>
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
            <img src={PagesImage.cou5} className='img-fluid mt-5' />
          </div>
          <div className="country-section-content mt-4 p-6">
            <h1 className="text-3xl font-bold text-primary-blue mb-4">Denmark PR & Visa Guide: Everything You Need to Know</h1>

            <p className="text-gray-700 mb-4">
              Denmark is one of the happiest countries in the world, known for its excellent work-life balance, strong economy, and high standard of living.
              Whether you are a skilled professional, entrepreneur, student, or family member of a Danish resident, there are various visa options for immigration.
            </p>

            <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-1">Why Choose Denmark?</h2>
            <p className="text-gray-700 mb-4">
              Denmark offers a high quality of life, a strong social welfare system, and a booming job market.
              The country is home to leading industries, top universities, and a welcoming environment for skilled immigrants and investors.
            </p>

            <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-2">Types of Denmark Visas & Immigration Programs</h2>
            <p className="text-gray-700 mb-3">There are multiple immigration pathways, including:</p>

            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong className="text-primary-blue">Positive List Scheme:</strong> For skilled workers in high-demand professions such as IT, engineering, and healthcare.</li>
              <li><strong className="text-primary-blue">Pay Limit Scheme:</strong> For high-salary professionals with job offers in Denmark.</li>
              <li><strong className="text-primary-blue">Start-up Denmark Visa:</strong> For entrepreneurs looking to establish innovative businesses in Denmark.</li>
              <li><strong className="text-primary-blue">Study Visa:</strong> For international students enrolling in Danish universities and institutions.</li>
              <li><strong className="text-primary-blue">Family Reunification Visa:</strong> If you have a Danish resident or citizen family member, you may be eligible to join them.</li>
              <li><strong className="text-primary-blue">Permanent Residency (PR):</strong> After legally residing in Denmark for at least eight years (or four under special circumstances), you can apply for PR.</li>
            </ul>

            <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-2">How We Help You</h2>
            <p className="text-gray-700 mb-4">
              Our expert immigration consultants guide you through the visa and PR process, ensuring accuracy and timely submission of documents.
              We provide step-by-step support for work permits, family reunification, business visas, and permanent residency applications.
            </p>

            <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-3">Step-by-Step Immigration Process</h2>

            <div className="space-y-3">
              <p><span className="font-semibold text-primary-blue">1. Eligibility Assessment:</span> We evaluate your qualifications and visa options based on your profile.</p>
              <p><span className="font-semibold text-primary-blue">2. Document Preparation:</span> We help you gather and verify all required documents for your visa application.</p>
              <p><span className="font-semibold text-primary-blue">3. Visa Application Submission:</span> Our team ensures your application is completed accurately and submitted on time.</p>
              <p><span className="font-semibold text-primary-blue">4. Follow-ups & Processing:</span> We keep track of your application and provide updates throughout the process.</p>
              <p><span className="font-semibold text-primary-blue">5. Settlement Assistance:</span> Once approved, we help you with relocation, accommodation, and integration into Danish society.</p>
            </div>

            <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-2">Get Started Today!</h2>
            <p className="text-gray-700 mb-4">
              Planning to move to Denmark? Let our experts simplify the process for you. Contact us today for a consultation and take the first step toward your new life in Denmark!
            </p>

            <Link to='/ContactPage'>
              <button className="mt-2 px-6 py-3 bg-[#064974] text-white font-semibold rounded-lg shadow-md hover:bg-primary-red-hover transition-all duration-300 ease-in-out">
                Contact Us
              </button>
            </Link>
          </div>

          <div className="country-section-whyChooseUs mt-5 text-start">
            <h1 className="ms-2">Why Settle In Denmark?</h1>
            <div className="why-choose-us mt-5">
              <div className="feature">
                <div className="content">
                  <span className="icon">
                    <FontAwesomeIcon icon={faUniversity} />
                  </span>
                  <h4>High-Quality Education System</h4>
                </div>
              </div>

              <div className="feature">
                <div className="content">
                  <span className="icon">
                    <FontAwesomeIcon icon={faHeartbeat} />
                  </span>
                  <h4>Excellent Healthcare & Welfare</h4>
                </div>
              </div>

              <div className="feature">
                <div className="content">
                  <span className="icon">
                    <FontAwesomeIcon icon={faBiking} />
                  </span>
                  <h4>Eco-Friendly & Sustainable Living</h4>
                </div>
              </div>

              <div className="feature">
                <div className="content">
                  <span className="icon">
                    <FontAwesomeIcon icon={faSmile} />
                  </span>
                  <h4>Happiest Country in the World</h4>
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