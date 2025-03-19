import React, { useState } from 'react';
import '../CountryDetails/CountryDetails.css';
import { Plus, Minus, Download } from 'lucide-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faUniversity, faHospital, faLandmark, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import PagesImage from '../assets/imgs/Pages/PagesImage';
import { Link } from 'react-router-dom';

export default function UK() {
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
            question: "What types of visas are available for the UK?",
            answer: "The UK offers work visas, student visas, skilled worker visas, startup and innovator visas, family visas, ancestry visas, and visitor visas."
        },
        {
            question: "Can I move to the UK without a job offer?",
            answer: "Yes, the UK offers certain visa options like the Global Talent Visa and Innovator Visa, which do not require a job offer. However, most work visas, such as the Skilled Worker Visa, require a job offer from a UK employer."
        },
        {
            question: "How much does a visa for the UK cost?",
            answer: "Visa fees vary. A Skilled Worker Visa typically costs between £610–£1,408, while student visas start at around £363. Investor and innovator visas have higher application fees."
        },
        {
            question: "Are there any age restrictions for moving to the UK?",
            answer: "There are no strict age restrictions, but certain visas, such as the Youth Mobility Scheme visa, are limited to individuals aged 18-30. Work and family visas do not have age limits."
        },
        {
            question: "How long does it take to process a UK visa?",
            answer: "Processing times vary. Work and student visas typically take 3-8 weeks, while settlement and investor visas may take several months."
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

                            <span className="text-white"> / United Kingdom</span>
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
                        <img src={PagesImage.cou6} alt="Canada Immigration" className='img-fluid mt-5' />
                    </div>
                    <div className="country-section-content mt-4 p-6">
                        <h1 className="text-3xl font-bold text-primary-blue mb-4">UK PR & Visa Guide: Everything You Need to Know</h1>

                        <p className="text-gray-700 mb-4">
                            The United Kingdom is one of the most sought-after destinations for skilled professionals, students, business investors, and families.
                            With its strong economy, top-ranked universities, and high standard of living, the UK offers various immigration pathways for those looking to build their future here.
                        </p>

                        <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-1">Why Choose the UK?</h2>
                        <p className="text-gray-700 mb-4">
                            The UK provides excellent career opportunities, world-class healthcare, a diverse cultural environment, and a globally recognized education system.
                            The country offers various visa options for skilled professionals, business investors, students, and family members of UK residents.
                        </p>

                        <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-2">Types of UK Visas & Immigration Programs</h2>
                        <p className="text-gray-700 mb-3">There are multiple immigration pathways, including:</p>

                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li><strong className="text-primary-blue">Skilled Worker Visa:</strong> For professionals with job offers from UK employers in eligible occupations.</li>
                            <li><strong className="text-primary-blue">Health and Care Worker Visa:</strong> For healthcare professionals looking to work in the UK's healthcare sector.</li>
                            <li><strong className="text-primary-blue">Innovator Founder Visa:</strong> For entrepreneurs planning to establish a business in the UK.</li>
                            <li><strong className="text-primary-blue">Student Visa:</strong> For international students enrolling in UK universities and higher education institutions.</li>
                            <li><strong className="text-primary-blue">Family Visa:</strong> For dependents, spouses, and family members of UK residents or British citizens.</li>
                            <li><strong className="text-primary-blue">Indefinite Leave to Remain (ILR) - UK PR:</strong> After legally residing in the UK for five years, you may apply for permanent residency (ILR).</li>
                        </ul>

                        <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-2">How We Help You</h2>
                        <p className="text-gray-700 mb-4">
                            Our immigration specialists provide end-to-end guidance, from visa selection to application processing and settlement support.
                            Whether you need help with work permits, PR applications, or student visas, we ensure a smooth and stress-free process.
                        </p>

                        <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-3">Step-by-Step Immigration Process</h2>

                        <div className="space-y-3">
                            <p><span className="font-semibold text-primary-blue">1. Eligibility Assessment:</span> We evaluate your profile, qualifications, and visa eligibility.</p>
                            <p><span className="font-semibold text-primary-blue">2. Document Preparation:</span> Our team helps gather and verify all necessary documents for your visa application.</p>
                            <p><span className="font-semibold text-primary-blue">3. Visa Application Submission:</span> We ensure your application is accurately completed and submitted on time.</p>
                            <p><span className="font-semibold text-primary-blue">4. Follow-ups & Processing:</span> We track your application and provide updates at every stage.</p>
                            <p><span className="font-semibold text-primary-blue">5. Settlement Assistance:</span> Once approved, we assist with relocation, accommodation, and integration into UK society.</p>
                        </div>

                        <h2 className="text-3xl text-[#064974] font-bold mt-6 mb-2">Get Started Today!</h2>
                        <p className="text-gray-700 mb-4">
                            Planning to move to the UK? Our immigration experts are here to guide you. Contact us today for professional assistance and take the first step toward your new life in the UK!
                        </p>

                        <Link to='/ContactPage'>
                            <button className="mt-2 px-6 py-3 bg-[#064974] text-white font-semibold rounded-lg shadow-md hover:bg-primary-red-hover transition-all duration-300 ease-in-out">
                                Contact Us
                            </button>
                        </Link>
                    </div>

                    <div className="country-section-whyChooseUs mt-5 text-start">
                        <h1 className="ms-2">Why Settle In the UK?</h1>
                        <div className="why-choose-us mt-5">
                            <div className="feature">
                                <div className="content">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faBriefcase} />
                                    </span>
                                    <h4>Strong Economy & Career Opportunities</h4>
                                </div>
                            </div>

                            <div className="feature">
                                <div className="content">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faUniversity} />
                                    </span>
                                    <h4>World-Renowned Universities & Research</h4>
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