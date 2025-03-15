import React, { useState } from 'react';
import '../CountryDetails/CountryDetails.css';
import { Plus, Minus, Download } from 'lucide-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faUniversity, faHospital, faMountain, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import PagesImage from '../assets/imgs/Pages/PagesImage';

export default function NewZealand() {
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
            question: "What types of visas are available for New Zealand?",
            answer: "New Zealand offers work visas, student visas, skilled migrant visas, entrepreneur visas, investor visas, family reunification visas, and working holiday visas."
        },
        {
            question: "Can I move to New Zealand without a job offer?",
            answer: "Yes, New Zealand offers the Skilled Migrant Visa, which allows qualified professionals to apply for residency based on skills and experience. However, most work visas require a job offer from a New Zealand employer."
        },
        {
            question: "How much does a visa for New Zealand cost?",
            answer: "Visa fees vary. A work visa typically costs around NZD 495–635, while student visas cost approximately NZD 375. Investor and entrepreneur visas have higher application fees."
        },
        {
            question: "Are there any age restrictions for moving to New Zealand?",
            answer: "Some visas, like the Skilled Migrant Visa, have an age limit of 55 years. Working holiday visas are generally limited to individuals aged 18-30 or 35, depending on nationality."
        },
        {
            question: "How long does it take to process a New Zealand visa?",
            answer: "Processing times vary. Work and student visas typically take 4-8 weeks, while skilled migrant and investor visas may take several months."
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

                            <span className="text-white"> / NewZealand </span>
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
                        <img src="https://img.freepik.com/premium-photo/auckland-city-view_122035-1278.jpg?uid=R183500011&ga=GA1.1.1860702175.1736869206&semt=ais_hybrid" alt="Canada Immigration" className='img-fluid mt-5' />
                    </div>
                    <div className="country-section-content mt-4 p-6">
                        <h1 className="text-3xl font-bold text-primary-blue mb-4">New Zealand PR & Visa Guide: Everything You Need to Know</h1>

                        <p className="text-gray-700 mb-4">
                            New Zealand is one of the most sought-after destinations for professionals, students, investors, and families.
                            With its stunning landscapes, high-quality healthcare, strong economy, and excellent education system, New Zealand offers various immigration pathways for those looking to build a future there.
                        </p>

                        <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-1">Why Choose New Zealand?</h2>
                        <p className="text-gray-700 mb-4">
                            New Zealand is known for its high quality of life, friendly communities, and work-life balance.
                            It has a strong job market for skilled professionals, business-friendly policies for entrepreneurs, and a world-class education system for students.
                            Additionally, it is ranked as one of the safest and most peaceful countries in the world.
                        </p>

                        <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-2">Types of New Zealand Visas & Immigration Programs</h2>
                        <p className="text-gray-700 mb-3">New Zealand offers multiple visa categories, including:</p>

                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li><strong className="text-primary-blue">Skilled Migrant Visa:</strong> For skilled professionals who meet New Zealand’s work experience, qualifications, and age requirements.</li>
                            <li><strong className="text-primary-blue">Work to Residence Visa:</strong> For those who have a job offer from an accredited New Zealand employer.</li>
                            <li><strong className="text-primary-blue">Entrepreneur Visa:</strong> For individuals looking to start or invest in a business in New Zealand.</li>
                            <li><strong className="text-primary-blue">Investor Visa:</strong> For individuals willing to invest a significant amount in New Zealand’s economy.</li>
                            <li><strong className="text-primary-blue">Student Visa:</strong> For international students enrolling in New Zealand’s universities or institutions.</li>
                            <li><strong className="text-primary-blue">Family Reunification Visa:</strong> For partners, spouses, or children of New Zealand citizens or permanent residents.</li>
                            <li><strong className="text-primary-blue">Permanent Residency (PR):</strong> After meeting residency conditions, individuals can apply for PR, allowing them to live and work in New Zealand indefinitely.</li>
                        </ul>

                        <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-2">How We Help You</h2>
                        <p className="text-gray-700 mb-4">
                            Our immigration consultants guide you through the process, from choosing the right visa category to document preparation and application submission.
                            We ensure a smooth and efficient immigration journey, providing expert support at every step.
                        </p>

                        <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-3">Step-by-Step Immigration Process</h2>

                        <div className="space-y-3">
                            <p><span className="font-semibold text-primary-blue">1. Eligibility Assessment:</span> We evaluate your skills, qualifications, and visa eligibility.</p>
                            <p><span className="font-semibold text-primary-blue">2. Document Preparation:</span> We help you collect and verify all necessary documents.</p>
                            <p><span className="font-semibold text-primary-blue">3. Visa Application Submission:</span> Our team ensures your application is complete and submitted correctly.</p>
                            <p><span className="font-semibold text-primary-blue">4. Follow-ups & Processing:</span> We track your application and provide updates throughout the process.</p>
                            <p><span className="font-semibold text-primary-blue">5. Settlement Assistance:</span> Once approved, we assist with relocation, accommodation, and integration into New Zealand’s lifestyle.</p>
                        </div>

                        <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-2">Get Started Today!</h2>
                        <p className="text-gray-700 mb-4">
                            Planning to move to New Zealand? Let our experts simplify the process for you. Contact us today for a consultation and take the first step toward your new life in New Zealand!
                        </p>

                        <button className="mt-2 px-6 py-3 bg-[#064974] text-white font-semibold rounded-lg shadow-md hover:bg-primary-red-hover transition-all duration-300 ease-in-out">
                            Contact Us
                        </button>
                    </div>

                    <div className="country-section-whyChooseUs mt-5 text-start">
                        <h1 className="ms-2">Why Settle In New Zealand?</h1>
                        <div className="why-choose-us mt-5">
                            <div className="feature">
                                <div className="content">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faBriefcase} />
                                    </span>
                                    <h4>Stable Economy & Job Market</h4>
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
                                        <FontAwesomeIcon icon={faMountain} />
                                    </span>
                                    <h4>Beautiful Nature & High Living Standards</h4>
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