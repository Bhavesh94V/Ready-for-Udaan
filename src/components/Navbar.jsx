import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../assets/styles/Navbar.css';
import brandLogo from '../assets/imgs/Brand-Logo/Brand-Logo4.png';
import WOW from 'wowjs';
import 'animate.css';

const navbarConfig = {
    contactInfo: [
        { icon: "fas fa-phone-alt", text: "+91 955-864-7487 / +91 955-864-7487" },
        { icon: "fas fa-envelope", text: "ready4udaan1@gmail.com", href: "mailto:readyforudaan1@gmail.com" },
    ],
    socialMedia: ["twitter", "facebook-f", "linkedin-in", "instagram"],
    navLinks: [
        { name: "Home", to: "/" },
        {
            name: "About",
            to: "/AboutPage"
        },
        {
            name: "Services",
            to: "/ServicePage",
            dropdown: [
                { name: "Work Visa", to: "/service/work-visa" },
                { name: "Visitor Visa", to: "/service/visitor-visa" },
                { name: "Study Visa", to: "/service/study-visa" },
                { name: "Permanent Residency", to: "/service/permanent-residency" },
                { name: "Investment Visa", to: "/service/investment-visa" },
                { name: "Business Visa", to: "/service/business-visa" },
            ],
        },
        {
            name: "Opportunity",
            to: "/CareersPage",
        },
        {
            name: "Blog",
            to: "/BlogPage",
            dropdown: [
                { name: "Work Visas", to: "/blog/1" },
                { name: "Student Visa Process", to: "/blog/2" },
                { name: "Permanent Residency", to: "/blog/3" },
                { name: "Visitor Visa Tips", to: "/blog/4" },
                { name: "Job Opportunities Abroad", to: "/blog/5" },
                { name: "Immigration Policies 2025", to: "/blog/6" },
            ],
        },
        { name: "Contact Us", to: "/ContactPage" },
    ],
};

export default function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null)
    const [visibleItems, setVisibleItems] = useState([])
    const [isMobile, setIsMobile] = useState(false)
    const dropdownRefs = useRef([])

    useEffect(() => {
        const wow = new WOW.WOW({ live: true })
        wow.init()

        const checkMobile = () => {
            setIsMobile(window.innerWidth < 992)
        }

        checkMobile()
        window.addEventListener("resize", checkMobile)

        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            if (location.pathname === "/") {
                setIsScrolled(window.scrollY > 300)
            } else {
                setIsScrolled(true)
            }
        }

        handleScroll()

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [location.pathname])

    useEffect(() => {
        if (activeDropdown !== null) {
            const link = navbarConfig.navLinks[activeDropdown]
            if (link && link.dropdown) {
                setVisibleItems([])

                link.dropdown.forEach((_, index) => {
                    setTimeout(
                        () => {
                            setVisibleItems((prev) => [...prev, index])
                        },
                        100 * (index + 1),
                    )
                })
            }
        } else {
            setVisibleItems([])
        }
    }, [activeDropdown])

    const closeNavbar = () => {
        const navbarCollapse = document.getElementById("navbarCollapse")
        if (navbarCollapse && navbarCollapse.classList.contains("show")) {
            navbarCollapse.classList.remove("show")
        }
        setActiveDropdown(null)
    }

    const handleMouseEnter = (index) => {
        if (!isMobile) {
            setActiveDropdown(index)
        }
    }

    const handleMouseLeave = (index) => {
        if (!isMobile) {
            // Small delay to allow moving to dropdown
            setTimeout(() => {
                if (!dropdownRefs.current[index]?.contains(document.activeElement)) {
                    setActiveDropdown(null)
                }
            }, 100)
        }
    }

    // For mobile, keep the click behavior
    const toggleDropdown = (index) => {
        if (isMobile) {
            setActiveDropdown(activeDropdown === index ? null : index)
        }
    }


    return (

        <div className={`navbar-container ${isScrolled ? "scrolled" : ""}`}>
            {/* Top Bar */}
            <div className="bg-[#064974] text-white py-3 px-5 hidden md:block">
                <div className="mx-auto flex flex-col md:flex-row items-center justify-between">
                    {/* Left Section - Contact Info */}
                    <div className="flex items-center space-x-6">
                        {navbarConfig.contactInfo.map((info, index) => (
                            <a key={index} href={info.href} className="flex items-center text-[15px] hover:text-[#06a3da] transition">
                                <i className={`${info.icon} mr-2`}></i>
                                {info.text}
                            </a>
                        ))}
                    </div>

                    {/* Right Section - Social Media Icons */}
                    <div className="flex items-center space-x-4">
                        {navbarConfig.socialMedia.map((platform, index) => (
                            <React.Fragment key={index}>
                                <a href="#" className="hover:text-[#06a3da] transition">
                                    <i className={`fab fa-${platform}`}></i>
                                </a>
                                {index < navbarConfig.socialMedia.length - 1 && <span> | </span>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>

            {/* Navbar */}
            <div className="container-fluid nav-bar relative p-0 ">
                <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-0 py-lg-0">
                    <a onClick={() => navigate("/")} className="navbar-brand p- " style={{ cursor: "pointer" }}>
                        <img
                            src={brandLogo || "/placeholder.svg"}
                            className="img-fluid animate_animated animate_zoomIn"
                            alt="Brand Logo"
                        />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">
                            {navbarConfig.navLinks.map((link, idx) => (
                                <Link
                                    key={idx}
                                    className="nav-item position-relative"
                                    onMouseEnter={() => handleMouseEnter(idx)}
                                    onMouseLeave={() => handleMouseLeave(idx)}
                                    ref={(el) => (dropdownRefs.current[idx] = el)}
                                    to={link.to}
                                >
                                    {link.dropdown ? (
                                        <>
                                            <div
                                                className="nav-link visible animate_animated animate_zoomIn cursor-pointer d-flex align-items-center"
                                                onClick={() => toggleDropdown(idx)} >
                                                {link.name}
                                                <i
                                                    className={`fas fa-chevron-down ml-1 text-xs transition-transform duration-300 ${activeDropdown === idx ? "rotate-180" : ""}`}
                                                    style={{ fontSize: "10px", marginLeft: "5px" }}
                                                ></i>
                                            </div>
                                            {activeDropdown === idx && (
                                                <div className="dropdown-menu position-absolute rounded-md p-0 min-w-[200px] z-10">
                                                    {link.dropdown.map((dropdownItem, dropIdx) => (
                                                        <Link
                                                            key={dropIdx}
                                                            to={dropdownItem.to}
                                                            className={`dropdown-item py-2 px-4 hover:scale-105 transition-all bg-[#064974] text-white block ${visibleItems.includes(dropIdx) ? "dropdown-item-visible" : ""}`}
                                                            style={{ textDecoration: "none" }}
                                                            onClick={closeNavbar}
                                                        >
                                                            {dropdownItem.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <Link
                                            to={link.to}
                                            className="nav-item nav-link visible animate_animated animate_zoomIn"
                                            style={{ textDecoration: "none" }}
                                            onClick={closeNavbar}
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </Link>
                            ))}
                        </div>
                        <Link
                            to={"/BookNowPage"}
                            className="btn Discovernow rounded-pill py-2 px-4 px-lg-3 mb-3 mb-md-3 mb-lg-0 visible animate_animated animate_zoomIn"
                            onClick={closeNavbar}
                        >
                            Book Your Consultation
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    );
}