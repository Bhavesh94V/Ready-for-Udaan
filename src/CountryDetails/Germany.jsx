import React, { useState } from 'react';
import '../CountryDetails/CountryDetails.css';
import { Plus, Minus, Download } from 'lucide-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faUniversity, faHospital, faGlobe, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import PagesImage from '../assets/imgs/Pages/PagesImage';
import { Link } from 'react-router-dom';

export default function Germany() {
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
      question: "What types of visas are available for Germany?",
      answer: "Germany offers work visas, student visas, job seeker visas, freelancer visas, Blue Cards for skilled professionals, family reunification visas, and permanent residence permits."
    },
    {
      question: "Can I move to Germany without a job offer?",
      answer: "Yes, Germany offers a Job Seeker Visa that allows professionals to stay for up to six months while searching for a job. However, work visas and Blue Cards require a job offer from a German employer."
    },
    {
      question: "How much does a visa for Germany cost?",
      answer: "Visa fees depend on the type. A work visa costs around €75, while a student visa costs approximately €75-€100. The EU Blue Card has additional processing fees."
    },
    {
      question: "Are there any age restrictions for moving to Germany?",
      answer: "No strict age limit applies, but student visas and working holiday visas may have age restrictions. Skilled professionals and retirees can move based on eligibility criteria."
    },
    {
      question: "How long does it take to process a German visa?",
      answer: "Processing times vary. Work and study visas typically take 4-12 weeks, while Blue Cards and permanent residence applications may take longer."
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

              <span className="text-white"> / Germany </span>
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
            <img src="https://img.freepik.com/free-photo/view-dresden-germany_1398-2640.jpg?uid=R183500011&ga=GA1.1.1860702175.1736869206&semt=ais_hybrid" alt="Canada Immigration" className='img-fluid mt-5' />
          </div>
          <div className="country-section-content mt-4 p-6">
            <h1 className="text-3xl font-bold text-primary-blue mb-4">Germany PR & Visa Guide: Everything You Need to Know</h1>

            <p className="text-gray-700 mb-4">
              Germany is one of the most attractive destinations for skilled professionals, students, entrepreneurs, and families.
              With a strong economy, world-class education, and high living standards, Germany offers various immigration pathways for those looking to work, study, or settle permanently.
            </p>

            <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-1">Why Choose Germany?</h2>
            <p className="text-gray-700 mb-4">
              Germany is the largest economy in Europe, offering excellent career opportunities, a high quality of life, and an outstanding healthcare system.
              It provides diverse job markets, affordable education, and a fast-track route to permanent residency and citizenship for eligible applicants.
            </p>

            <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-2">Types of Germany Visas & Immigration Programs</h2>
            <p className="text-gray-700 mb-3">There are multiple immigration pathways, including:</p>

            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong className="text-primary-blue">Job Seeker Visa:</strong> For skilled professionals looking for job opportunities in Germany.</li>
              <li><strong className="text-primary-blue">EU Blue Card:</strong> For highly qualified non-EU workers with a job offer that meets salary and qualification requirements.</li>
              <li><strong className="text-primary-blue">Work Visa:</strong> For individuals who have secured employment with a German company.</li>
              <li><strong className="text-primary-blue">Student Visa:</strong> For international students enrolling in German universities or higher education institutions.</li>
              <li><strong className="text-primary-blue">Freelancer Visa:</strong> For self-employed professionals, freelancers, and entrepreneurs.</li>
              <li><strong className="text-primary-blue">Family Reunification Visa:</strong> If you have a family member residing in Germany, you may apply to join them.</li>
              <li><strong className="text-primary-blue">Permanent Residency (PR):</strong> After legally residing in Germany for a specific period, you may qualify for PR status.</li>
            </ul>

            <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-2">How We Help You</h2>
            <p className="text-gray-700 mb-4">
              Our immigration experts guide you through every step of the process. From selecting the right visa category to document preparation and application submission,
              we ensure a smooth and hassle-free experience. We also provide post-approval support to help you settle in Germany.
            </p>

            <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-3">Step-by-Step Immigration Process</h2>

            <div className="space-y-3">
              <p><span className="font-semibold text-primary-blue">1. Eligibility Assessment:</span> We evaluate your qualifications, experience, and visa eligibility.</p>
              <p><span className="font-semibold text-primary-blue">2. Document Preparation:</span> Our team assists in gathering and verifying all necessary documents.</p>
              <p><span className="font-semibold text-primary-blue">3. Visa Application Submission:</span> We ensure your application is completed correctly and submitted on time.</p>
              <p><span className="font-semibold text-primary-blue">4. Follow-ups & Processing:</span> We track your application and provide updates throughout the process.</p>
              <p><span className="font-semibold text-primary-blue">5. Settlement Assistance:</span> Once approved, we help with relocation, accommodation, and integration into German society.</p>
            </div>

            <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-2">Get Started Today!</h2>
            <p className="text-gray-700 mb-4">
              Planning to move to Germany? Let our experts simplify the process for you. Contact us today for a consultation and take the first step toward your new life in Germany!
            </p>

            <button className="mt-2 px-6 py-3 bg-[#064974] text-white font-semibold rounded-lg shadow-md hover:bg-primary-red-hover transition-all duration-300 ease-in-out">
              Contact Us
            </button>
          </div>

          <div className="country-section-whyChooseUs mt-5 text-start">
            <h1 className="ms-2">Why Settle In Germany?</h1>
            <div className="why-choose-us mt-5">
              <div className="feature">
                <div className="content">
                  <span className="icon">
                    <FontAwesomeIcon icon={faBriefcase} />
                  </span>
                  <h4>Robust Economy & Job Market</h4>
                </div>
              </div>

              <div className="feature">
                <div className="content">
                  <span className="icon">
                    <FontAwesomeIcon icon={faUniversity} />
                  </span>
                  <h4>Top-Quality Education & Research</h4>
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
                    <FontAwesomeIcon icon={faGlobe} />
                  </span>
                  <h4>Central Location in Europe</h4>
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