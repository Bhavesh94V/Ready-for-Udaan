import React from 'react';
import { Link } from 'react-router-dom';
import { FaBriefcase, FaPlane, FaGraduationCap } from 'react-icons/fa';
import '../assets/styles/Service.css';

const services = [
    { id: 1, title: "Work Visa", desc: "Explore global job opportunities with our expert guidance.", icon: <FaBriefcase />, link: "/service/work-visa" },
    { id: 2, title: "Visitor Visa", desc: "Travel hassle-free with our visitor visa services.", icon: <FaPlane />, link: "/service/visitor-visa" },
    { id: 3, title: "Study Visa", desc: "Turn your dreams into reality by studying abroad.", icon: <FaGraduationCap />, link: "/service/study-visa" },
    { id: 4, title: "Permanent Residency", desc: "Secure your future with a hassle-free permanent residency process.", icon: <FaBriefcase />, link: "/service/permanent-residency" },
    { id: 5, title: "Investment Visa", desc: "Expand your global reach with strategic investment visa solutions.", icon: <FaPlane />, link: "/service/investment-visa" },
    { id: 6, title: "Business Visa", desc: "Unlock international business opportunities with our expert assistance.", icon: <FaGraduationCap />, link: "/service/business-visa" }
];

export default function Service() {
    return (

        <div className='service-section'>
            <div className="service-container">
                <div className="service-header">
                    <h1 className="service-title">Expert Immigration Solutions</h1>
                    <h2 className="service-subtitle">Our Top Services</h2>
                </div>
                <div className="service-grid">
                    {services.map((service) => (
                        <div key={service.id} className="service-card">
                            <div className="service-icon">{service.icon}</div>
                            <div className="service-content">
                                <h3 className="service-name">{service.title}</h3>
                                <p className="service-desc">{service.desc}</p>
                            </div>
                            <Link to={service.link} className="read-more">
                                Read More <span className="arrow">→</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
}
