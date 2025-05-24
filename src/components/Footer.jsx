import React, { useState } from "react";
import { motion } from "framer-motion";
import "../assets/styles/Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope, FaArrowRight, FaPaperPlane } from 'react-icons/fa';
import brandLogo from '../assets/imgs/Brand-Logo/Brand-Logo4.png';
import { Link } from "react-router-dom";

function Footer() {
    const [email, setEmail] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            setIsSubscribed(true);
            setEmail("");
            setTimeout(() => setIsSubscribed(false), 3000);
        }
    };

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    const ServiceLinks = [
        { name: "Work Visa", path: "/service/work-visa" },
        { name: "Visitor Visa", path: "/service/visitor-visa" },
        { name: "Study Visa", path: "/service/study-visa" },
        { name: "Permanent Residency", path: "/service/permanent-residency" },
        { name: "Investment Visa", path: "/service/investment-visa" },
        { name: "Business Visa", path: "/service/business-visa" },
    ];
    const CountriesLinks = [
        { name: "Canada", path: "/country/Canada" },
        { name: "Australia", path: "/country/Australia" },
        { name: "United Kingdom", path: "/country/UK" },
        { name: "United States", path: "/country/USA" },
        { name: "New Zealand", path: "/country/NewZealand" },
        { name: "Germany", path: "/country/Germany" },
    ];
    const CompanyLinks = [
        { name: "About US", path: "/AboutPage" },
        { name: "Services", path: "/ServicePage" },
        { name: "Blog", path: "/BlogPage" },
        { name: "Opportunity", path: "/CareersPage" },
        { name: "Contact Us", path: "/ContactPage" },
        { name: "Book Appointment", path: "/BookNowPage" },
    ];

    return (
        <footer className="footer-section">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-logo-section">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="footer-logo"
                        >
                            <div className="logo-circle">
                                <div className="bg-white p-1 rounded-full">
                                    <img
                                        className="w-[50px] h-auto max-w-full mx-auto"
                                        src={brandLogo}
                                        alt="Brand Logo"
                                    />
                                </div>
                            </div>

                            <h2 className="company-name">
                                Udaan
                            </h2>
                        </motion.div>
                        <p className="company-description">
                            Helping you reach new heights with expert consultancy and immigration services. Your journey to success starts with Udaan.
                        </p>
                    </div>

                    <div className="newsletter-section">
                        <h3 className="section-title">Subscribe to our newsletter</h3>
                        <form onSubmit={handleSubscribe} className="newsletter-form">
                            <div className="input-container">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="email-input"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="subscribe-button"
                                >
                                    <FaPaperPlane className="icon-small" />
                                    <span className="button-text">Subscribe</span>
                                </button>
                            </div>
                        </form>
                        {isSubscribed && (
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="success-message"
                            >
                                Thank you for subscribing!
                            </motion.p>
                        )}
                    </div>
                </div>

                {/* Middle section with links */}
                <div className="footer-middle">
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="footer-column"
                    >
                        <h3 className="section-title">Services</h3>
                        <motion.ul variants={container} className="footer-links">
                            {ServiceLinks.map((service) => (
                                <motion.li key={service.name} variants={service.name}>
                                    <Link to={service.path} className="footer-link">
                                        <FaArrowRight className="icon-arrow mr-1" />
                                        {service.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="footer-column"
                    >
                        <h3 className="section-title">Countries</h3>
                        <motion.ul variants={container} className="footer-links">
                            {CountriesLinks.map((Country) => (
                                <motion.li key={Country.name} variants={Country.name}>
                                    <Link to={Country.path} className="footer-link">
                                        <FaArrowRight className="icon-arrow mr-1" />
                                        {Country.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="footer-column"
                    >
                        <h3 className="section-title">Company</h3>
                        <motion.ul variants={container} className="footer-links">
                            {CompanyLinks.map((company) => (
                                <motion.li key={company.name} variants={company.name}>
                                    <Link to={company.path} className="footer-link">
                                        <FaArrowRight className="icon-arrow mr-1" />
                                        {company.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="footer-column"
                    >
                        <h3 className="section-title">Contact Us</h3>
                        <motion.ul variants={container} className="contact-list">
                            <motion.li variants={item} className="contact-item">
                                <FaMapMarkerAlt className="icon contact-icon" />
                                <span>B-502, Ananta Square, Near S.P Ring Road, Ahmedabad-382330</span>
                            </motion.li>
                            <motion.li variants={item} className="contact-item">
                                <FaPhone className="icon contact-icon" />
                                <a href="tel:+91 955-864-7487" className="contact-link">
                                    +91 955-864-7487
                                </a>
                            </motion.li>
                            <motion.li variants={item} className="contact-item">
                                <FaEnvelope className="icon contact-icon" />
                                <a href="mailto:ready4udaan1@gmail.com" className="contact-link">
                                    ready4udaan1@gmail.com
                                </a>
                            </motion.li>
                        </motion.ul>
                    </motion.div>
                </div>

                {/* Bottom section with social links and copyright */}
                <div className="footer-bottom">
                    <div className="social-links">
                        {[
                            { icon: FaFacebook, href: "#" },
                            { icon: FaTwitter, href: "#" },
                            { icon: FaInstagram, href: "https://www.instagram.com/ready_for_udaan_official?igsh=enUzOWYxbHdqZXdt" },
                            { icon: FaLinkedin, href: "#" }
                        ].map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="social-icon-link"
                            >
                                <social.icon className="social-icon" />
                            </motion.a>
                        ))}
                    </div>

                    <div className="copyright-section">
                        <p className="copyright-text">
                            &copy; {new Date().getFullYear()} Ready For Udaan Consultancy & Immigration. All rights reserved.
                        </p>
                        {/* <div className="legal-links">
                            <a href="#" className="legal-link">Privacy Policy</a>
                            <a href="#" className="legal-link">Terms of Service</a>
                            <a href="#" className="legal-link">Sitemap</a>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* Animated wave effect at the bottom */}
            <div className="wave-container">
                <div className="wave-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="wave">
                        <path
                            fill="rgba(6, 182, 212, 0.1)"
                            fillOpacity="1"
                            d="M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,128C672,128,768,160,864,165.3C960,171,1056,149,1152,128C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                        >
                            <animate
                                attributeName="d"
                                dur="10s"
                                repeatCount="indefinite"
                                values="
                  M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,128C672,128,768,160,864,165.3C960,171,1056,149,1152,128C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                  M0,96L48,122.7C96,149,192,203,288,208C384,213,480,171,576,149.3C672,128,768,128,864,149.3C960,171,1056,213,1152,213.3C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                  M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,128C672,128,768,160,864,165.3C960,171,1056,149,1152,128C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z
                "
                            />
                        </path>
                        <path
                            fill="rgba(6, 182, 212, 0.2)"
                            fillOpacity="1"
                            d="M0,256L48,240C96,224,192,192,288,197.3C384,203,480,245,576,261.3C672,277,768,267,864,234.7C960,203,1056,149,1152,138.7C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                        >
                            <animate
                                attributeName="d"
                                dur="15s"
                                repeatCount="indefinite"
                                values="
                  M0,256L48,240C96,224,192,192,288,197.3C384,203,480,245,576,261.3C672,277,768,267,864,234.7C960,203,1056,149,1152,138.7C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                  M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,229.3C672,235,768,213,864,202.7C960,192,1056,192,1152,176C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                  M0,256L48,240C96,224,192,192,288,197.3C384,203,480,245,576,261.3C672,277,768,267,864,234.7C960,203,1056,149,1152,138.7C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z
                "
                            />
                        </path>
                    </svg>
                </div>
            </div>
        </footer>
    );
}

export default Footer;