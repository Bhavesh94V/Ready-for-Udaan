import React, { useState } from 'react';
import '../CountryDetails/CountryDetails.css';
import { Plus, Minus, Download } from 'lucide-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faUniversity, faHospital, faLandmark, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import PagesImage from '../assets/imgs/Pages/PagesImage';

export default function Italy() {
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
            question: "What types of visas are available for Italy?",
            answer: "Italy offers work visas, student visas, self-employment visas, investor visas, family reunification visas, and the Elective Residence Visa for retirees."
        },
        {
            question: "Can I move to Italy without a job offer?",
            answer: "Yes, Italy provides options like the self-employment visa and the Elective Residence Visa for financially independent individuals. However, a work visa typically requires a job offer from an Italian employer."
        },
        {
            question: "How much does a visa for Italy cost?",
            answer: "Visa fees vary by type. A work visa usually costs around €116, while student visas are approximately €50. Investor visas and elective residence visas may have additional financial requirements."
        },
        {
            question: "Are there any age restrictions for moving to Italy?",
            answer: "No strict age limit applies, but certain visas, like student and working holiday visas, have age restrictions. Retirees and skilled professionals can apply based on financial stability and qualifications."
        },
        {
            question: "How long does it take to process an Italian visa?",
            answer: "Processing times vary. Work and student visas typically take 1-3 months, while investor and family reunification visas may take longer."
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

                            <span className="text-white"> / Italy </span>
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
                        <img src={PagesImage.cou13} className='img-fluid mt-5' />
                    </div>
                    <div className="country-section-content mt-4 p-6">
                        <h1 className="text-3xl font-bold text-primary-blue mb-4">Italy PR & Visa Guide: Everything You Need to Know</h1>

                        <p className="text-gray-700 mb-4">
                            Italy is a top destination for professionals, students, investors, and families looking for a rich cultural experience, a high standard of living, and career opportunities.
                            Whether you’re planning to work, study, start a business, or settle permanently, Italy offers multiple immigration pathways.
                        </p>

                        <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-1">Why Choose Italy?</h2>
                        <p className="text-gray-700 mb-4">
                            Italy is known for its world-class healthcare, vibrant cities, historic landmarks, and strong economy.
                            With excellent work opportunities, a business-friendly environment, and top-ranked universities, Italy is an ideal destination for skilled professionals, entrepreneurs, and students.
                        </p>

                        <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-2">Types of Italy Visas & Immigration Programs</h2>
                        <p className="text-gray-700 mb-3">Italy offers various visa options, including:</p>

                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li><strong className="text-primary-blue">Work Visa:</strong> For skilled professionals who have secured a job offer from an Italian employer.</li>
                            <li><strong className="text-primary-blue">EU Blue Card:</strong> For highly skilled non-EU workers who meet specific salary and qualification criteria.</li>
                            <li><strong className="text-primary-blue">Self-Employed Visa:</strong> For entrepreneurs, freelancers, and business owners looking to start or expand their business in Italy.</li>
                            <li><strong className="text-primary-blue">Investor Visa:</strong> For individuals who make a significant investment in Italy’s economy.</li>
                            <li><strong className="text-primary-blue">Student Visa:</strong> For international students enrolling in Italy’s universities or higher education institutions.</li>
                            <li><strong className="text-primary-blue">Family Reunification Visa:</strong> For family members of Italian residents or citizens who wish to join them.</li>
                            <li><strong className="text-primary-blue">Permanent Residency (PR):</strong> After legally residing in Italy for five years, individuals may qualify for permanent residency.</li>
                        </ul>

                        <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-2">How We Help You</h2>
                        <p className="text-gray-700 mb-4">
                            Our immigration consultants assist you at every step of the process. From selecting the right visa category to preparing your documents and submitting applications,
                            we ensure a hassle-free experience. We also provide post-approval support for your relocation to Italy.
                        </p>

                        <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-3">Step-by-Step Immigration Process</h2>

                        <div className="space-y-3">
                            <p><span className="font-semibold text-primary-blue">1. Eligibility Assessment:</span> We analyze your skills, qualifications, and eligibility for Italian visas.</p>
                            <p><span className="font-semibold text-primary-blue">2. Document Preparation:</span> Our team helps you gather and verify all necessary documents.</p>
                            <p><span className="font-semibold text-primary-blue">3. Visa Application Submission:</span> We ensure your application is accurately completed and submitted on time.</p>
                            <p><span className="font-semibold text-primary-blue">4. Follow-ups & Processing:</span> We track your application and provide updates on its progress.</p>
                            <p><span className="font-semibold text-primary-blue">5. Settlement Assistance:</span> Once approved, we help you with relocation, housing, and integrating into life in Italy.</p>
                        </div>

                        <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-2">Get Started Today!</h2>
                        <p className="text-gray-700 mb-4">
                            Planning to move to Italy? Let our experts simplify the process for you. Contact us today for a consultation and take the first step toward your new life in Italy!
                        </p>

                        <Link to='/ContactPage'>
                            <button className="mt-2 px-6 py-3 bg-[#064974] text-white font-semibold rounded-lg shadow-md hover:bg-primary-red-hover transition-all duration-300 ease-in-out">
                                Contact Us
                            </button>
                        </Link>
                    </div>

                    <div className="country-section-whyChooseUs mt-5 text-start">
                        <h1 className="ms-2">Why Settle In Italy?</h1>
                        <div className="why-choose-us mt-5">
                            <div className="feature">
                                <div className="content">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faBriefcase} />
                                    </span>
                                    <h4>Strong Economy & Business Opportunities</h4>
                                </div>
                            </div>

                            <div className="feature">
                                <div className="content">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faUniversity} />
                                    </span>
                                    <h4>Renowned Universities & Education</h4>
                                </div>
                            </div>

                            <div className="feature">
                                <div className="content">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faHospital} />
                                    </span>
                                    <h4>High-Quality Healthcare System</h4>
                                </div>
                            </div>

                            <div className="feature">
                                <div className="content">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faLandmark} />
                                    </span>
                                    <h4>Rich Culture & Historic Landmarks</h4>
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