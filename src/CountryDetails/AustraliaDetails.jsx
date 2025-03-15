import React, { useState } from 'react';
import '../CountryDetails/CountryDetails.css';
import { Plus, Minus, Download } from 'lucide-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faBookOpen, faBriefcase, faGlobeAmericas, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import PagesImage from '../assets/imgs/Pages/PagesImage';
import { Link } from 'react-router-dom';

export default function AustraliaDetails() {
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
            question: "What are the main ways to immigrate to Australia?",
            answer: "You can move to Australia through skilled migration, employer-sponsored visas, student visas, or family sponsorship. The most common PR visas are Subclass 189, 190, and 491.",
        },
        {
            question: "Is a job offer necessary to apply for Australian PR?",
            answer: "No, a job offer is not required, but it can help increase your points. Some visa categories, like employer-sponsored visas, do need a job offer.",
        },
        {
            question: "How much does it cost to move to Australia?",
            answer: "PR application fees start at around AUD $4,640 for a single applicant. You also need funds for living costs, health checks, and other expenses.",
        },
        {
            question: "What is the age limit for Australian immigration?",
            answer: "For most skilled visas, you must be under 45 years old. Younger applicants earn more points in the immigration system.",
        },
        {
            question: "How long does it take to get PR in Australia?",
            answer: "Processing times vary, but skilled visas usually take 6-12 months. Some employer-sponsored or family visas may take longer.",
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

                            <span className="text-white"> / Australia </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Country-And-Details-Section">


                <div className="Country-container-section">
                    <div className="country-list">
                        {
                            countries.slice(0, showAll ? countries.length : 6).map((country, index) => (
                                <Link to={country.path} key={index} className="country-item">
                                    <i className="fa-solid fa-arrow-right"></i>
                                    <span className="country-list-name-section">{country.name}</span>
                                </Link>
                            ))
                        }

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
                        <img src="https://img.freepik.com/premium-photo/melbourne-australia-march-12-melbourne-s-famous-skyline-from-southbank-towards-flinders-st-station-march-12th-2014_1020609-3019.jpg?uid=R183500011&ga=GA1.1.1860702175.1736869206&semt=ais_hybrid" alt="Canada Immigration" className='img-fluid mt-5' />
                    </div>
                    <div className="country-section-content mt-4 p-6">
                        <h1 className="text-3xl font-bold text-primary-blue mb-4">Australia PR & Visa Guide: Everything You Need to Know</h1>

                        <p className="text-gray-700 mb-4">
                            Australia is one of the top destinations for skilled workers, students, and families looking for a high standard of living, excellent career opportunities, and a safe environment.
                            Whether you want to settle permanently, study at world-class universities, or work in a thriving economy, Australia offers multiple immigration pathways.
                        </p>

                        <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-1">Why Choose Australia?</h2>
                        <p className="text-gray-700 mb-4">
                            Australia is known for its strong economy, high quality of life, and diverse culture. With its immigrant-friendly policies, Australia provides numerous opportunities
                            for skilled professionals, students, and business investors to build a successful future.
                        </p>

                        <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-2">Types of Australian Visas & Immigration Programs</h2>
                        <p className="text-gray-700 mb-3">There are multiple immigration pathways, including:</p>

                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li><strong className="text-primary-blue">Skilled Independent Visa (Subclass 189):</strong> For highly skilled workers who do not require state or employer sponsorship.</li>
                            <li><strong className="text-primary-blue">Skilled Nominated Visa (Subclass 190):</strong> Requires nomination by an Australian state or territory government.</li>
                            <li><strong className="text-primary-blue">Skilled Work Regional (Subclass 491):</strong> A pathway for skilled workers to live and work in regional Australia.</li>
                            <li><strong className="text-primary-blue">Student Visa (Subclass 500):</strong> Allows international students to study in Australia's top-ranked universities.</li>
                            <li><strong className="text-primary-blue">Temporary Skill Shortage Visa (Subclass 482):</strong> For skilled workers sponsored by Australian employers.</li>
                            <li><strong className="text-primary-blue">Partner & Family Visas:</strong> If you have an Australian citizen or permanent resident family member, they can sponsor your immigration.</li>
                        </ul>

                        <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-2">How We Help You</h2>
                        <p className="text-gray-700 mb-4">
                            Our team of immigration experts assists you at every stage of the process. From selecting the right visa category to submitting your application and settling in Australia,
                            we ensure that everything is handled professionally to maximize your chances of approval.
                        </p>

                        <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-3">Step-by-Step Immigration Process</h2>

                        <div className="space-y-3">
                            <p><span className="font-semibold text-primary-blue">1. Eligibility Assessment:</span> We evaluate your qualifications, work experience, and eligibility for Australian PR or visa programs.</p>
                            <p><span className="font-semibold text-primary-blue">2. Skills Assessment:</span> We assist in obtaining a positive skills assessment from the relevant Australian authority.</p>
                            <p><span className="font-semibold text-primary-blue">3. Expression of Interest (EOI):</span> We help you submit an EOI through the SkillSelect system for skilled migration programs.</p>
                            <p><span className="font-semibold text-primary-blue">4. Visa Application Submission:</span> Once invited, we ensure your visa application is prepared accurately.</p>
                            <p><span className="font-semibold text-primary-blue">5. Approval & Settlement Support:</span> We guide you through post-approval procedures, including travel, job search, and accommodation in Australia.</p>
                        </div>

                        <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-2">Get Started Today!</h2>
                        <p className="text-gray-700 mb-4">
                            If you're planning to move to Australia, let our experts simplify the process for you. Contact us today for a consultation and take the first step toward your dream life in Australia!
                        </p>

                        <button className="mt-2 px-6 py-3 bg-[#064974] text-white font-semibold rounded-lg shadow-md hover:bg-primary-red-hover transition-all duration-300 ease-in-out">
                            Contact Us
                        </button>
                    </div>

                    <div className="country-section-whyChooseUs mt-5 text-start">
                        <h1 className="ms-2">Why Settle In Australia?</h1>
                        <div className="why-choose-us mt-5">
                            <div className="feature">
                                <div className="content">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faSun} />
                                    </span>
                                    <h4>Beautiful Climate & Lifestyle</h4>
                                </div>
                            </div>
                            <div className="feature">
                                <div className="content">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faBookOpen} />
                                    </span>
                                    <h4>Top-Ranked Universities</h4>
                                </div>
                            </div>
                            <div className="feature">
                                <div className="content">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faBriefcase} />
                                    </span>
                                    <h4>High-Paying Jobs & Opportunities</h4>
                                </div>
                            </div>
                            <div className="feature">
                                <div className="content">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faGlobeAmericas} />
                                    </span>
                                    <h4>Multicultural & Welcoming Society</h4>
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