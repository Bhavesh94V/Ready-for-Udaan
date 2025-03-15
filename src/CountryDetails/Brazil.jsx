import React, { useState } from 'react';
import '../CountryDetails/CountryDetails.css';
import { Plus, Minus, Download } from 'lucide-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faUniversity, faTree, faBiking, faMusic, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import PagesImage from '../assets/imgs/Pages/PagesImage';

export default function Brazil() {
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
            question: "What are the visa options for Brazil?",
            answer: "Brazil offers various visa options, including work visas, student visas, business visas, tourist visas, and permanent residence for investors and family reunification."
        },
        {
            question: "Do I need a job offer to move to Brazil?",
            answer: "Yes, for most work-related visas, a job offer from a Brazilian employer is required. However, investors and entrepreneurs can apply for a business visa without one."
        },
        {
            question: "What is the cost of a Brazilian visa?",
            answer: "Visa fees vary by type. A work visa typically costs around BRL 1,200, while tourist and student visas have different fees depending on nationality."
        },
        {
            question: "Is there an age limit for moving to Brazil?",
            answer: "There is no strict age limit for moving to Brazil, but certain visa categories, such as student and retirement visas, may have specific age-related criteria."
        },
        {
            question: "How long does the visa process take?",
            answer: "Processing times vary. Work and student visas typically take 2-3 months, while permanent residency applications may take longer."
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

                            <span className="text-white"> / Brazil </span>
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
                        <img src="https://img.freepik.com/free-photo/aerial-photo-rio-de-janeiro-surrounded-by-sea-hills-sunlight-brazil_181624-11362.jpg?uid=R183500011&ga=GA1.1.1860702175.1736869206&semt=ais_hybrid" alt="Canada Immigration" className='img-fluid mt-5' />
                    </div>
                    <div className="country-section-content mt-4 p-6">
                        <h1 className="text-3xl font-bold text-primary-blue mb-4">Brazil PR & Visa Guide: Everything You Need to Know</h1>

                        <p className="text-gray-700 mb-4">
                            Brazil is a vibrant country known for its rich culture, diverse economy, and stunning natural landscapes.
                            Whether you’re a skilled professional, entrepreneur, investor, student, or looking to reunite with family, Brazil offers various visa pathways for immigration.
                        </p>

                        <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-1">Why Choose Brazil?</h2>
                        <p className="text-gray-700 mb-4">
                            Brazil has a rapidly growing economy, excellent business opportunities, and a welcoming environment for foreigners.
                            The country offers an affordable cost of living, high-quality education, and a great quality of life, making it an attractive destination for expatriates.
                        </p>

                        <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-2">Types of Brazil Visas & Immigration Programs</h2>
                        <p className="text-gray-700 mb-3">Brazil provides several visa options depending on your purpose of stay:</p>

                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li><strong className="text-primary-blue">Work Visa:</strong> For professionals with a job offer from a Brazilian employer.</li>
                            <li><strong className="text-primary-blue">Investor Visa:</strong> For individuals investing a minimum amount in a Brazilian business or property.</li>
                            <li><strong className="text-primary-blue">Entrepreneur Visa:</strong> For business owners planning to establish or expand their business in Brazil.</li>
                            <li><strong className="text-primary-blue">Student Visa:</strong> For international students enrolling in Brazilian universities or educational institutions.</li>
                            <li><strong className="text-primary-blue">Family Reunification Visa:</strong> For spouses, children, or dependents of Brazilian citizens or residents.</li>
                            <li><strong className="text-primary-blue">Retirement Visa:</strong> For retirees with a stable pension or income willing to settle in Brazil.</li>
                            <li><strong className="text-primary-blue">Permanent Residency (PR):</strong> After meeting certain residency requirements, individuals can apply for PR in Brazil.</li>
                        </ul>

                        <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-2">How We Help You</h2>
                        <p className="text-gray-700 mb-4">
                            Our immigration specialists assist you in choosing the right visa, preparing documents, and navigating the entire application process.
                            We ensure a hassle-free experience, offering guidance on job searches, business opportunities, and residency applications.
                        </p>

                        <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-3">Step-by-Step Immigration Process</h2>

                        <div className="space-y-3">
                            <p><span className="font-semibold text-primary-blue">1. Eligibility Assessment:</span> We evaluate your qualifications, work experience, and visa eligibility.</p>
                            <p><span className="font-semibold text-primary-blue">2. Document Preparation:</span> Our team helps you gather and verify all necessary documents.</p>
                            <p><span className="font-semibold text-primary-blue">3. Visa Application Submission:</span> We ensure your application is correctly completed and submitted on time.</p>
                            <p><span className="font-semibold text-primary-blue">4. Follow-ups & Processing:</span> We track your application and provide updates throughout the process.</p>
                            <p><span className="font-semibold text-primary-blue">5. Settlement Assistance:</span> Once approved, we help with relocation, accommodation, and integration into Brazilian society.</p>
                        </div>

                        <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-2">Get Started Today!</h2>
                        <p className="text-gray-700 mb-4">
                            Looking to move to Brazil? Our experts will simplify the immigration process for you. Contact us today for a consultation and take the first step toward your new life in Brazil!
                        </p>

                        <button className="mt-2 px-6 py-3 bg-[#064974] text-white font-semibold rounded-lg shadow-md hover:bg-primary-red-hover transition-all duration-300 ease-in-out">
                            Contact Us
                        </button>
                    </div>

                    <div className="country-section-whyChooseUs mt-5 text-start">
                        <h1 className="ms-2">Why Settle In Brazil?</h1>
                        <div className="why-choose-us mt-5">
                            <div className="feature">
                                <div className="content">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faBriefcase} />
                                    </span>
                                    <h4>Growing Economy & Job Opportunities</h4>
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
                                        <FontAwesomeIcon icon={faTree} />
                                    </span>
                                    <h4>Stunning Nature & Biodiversity</h4>
                                </div>
                            </div>

                            <div className="feature">
                                <div className="content">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faMusic} />
                                    </span>
                                    <h4>Vibrant Culture & Festivals</h4>
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