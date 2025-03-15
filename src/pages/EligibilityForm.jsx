import React, { useEffect, useState } from 'react';
import '../assets/styles/Opportunity.css';
import { FaUserCheck, FaFileAlt, FaHandHoldingUsd, FaClipboardCheck, FaChartLine, FaHeadset } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { submitEligibilityRequest } from '../components/redux/actions/contactActions';

export default function EligibilityForm() {

    const countries = ["Canada", "Australia", "USA", "UK", "Germany", "Paris", "New Zealand"];
    const enquiries = ["Study Visa", "Work Visa", "Business Visa", "PR", "Tourist Visa", "Permanent Residency"];
    const educations = ["High School", "Diploma", "Bachelor's", "Master's"];

    const dispatch = useDispatch();
    const { loading, message, error } = useSelector((state) => state.eligibility);

    const [formData, setFormData] = useState({
        firstName: "", lastName: "", contact: "", email: "",
        country: "", enquiry: "", education: "", dob: "", sex: "", cv: null
    });

    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        if (message || error) {
            setShowMessage(true);
            const timer = setTimeout(() => setShowMessage(false), 5000);
            return () => clearTimeout(timer);
        }
    }, [message, error]);

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'file' ? files[0] : value
        });
    };

    const validateForm = () => {
        const { firstName, lastName, contact, email, country, enquiry, education, dob, sex, cv } = formData;
        const phoneRegex = /^[0-9]{10}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!firstName || !lastName || !contact || !email || !country || !enquiry || !education || !dob || !sex || !cv) {
            alert("All fields are required.");
            return false;
        }
        if (!phoneRegex.test(contact)) {
            alert("Invalid contact number. It should be 10 digits.");
            return false;
        }
        if (!emailRegex.test(email)) {
            alert("Invalid email format.");
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        const formDataToSend = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            formDataToSend.append(key, value);
        });

        dispatch(submitEligibilityRequest(formDataToSend));
        setFormData({
            firstName: "", middleName: "", lastName: "",
            contact: "", email: "", country: "",
            enquiry: "", education: "", dob: "",
            sex: "", cv: null
        });
    };

    return (
        <div className="CareersPage md:mt-5 pt-5">
            {/* Top Section Title */}
            <div className="text-center text-[#064974] py-6 px-4 rounded-t-lg">
                <h1 className="text-4xl font-extrabold">Unlock Your Future with Us!</h1>
                <p className="mt-2 text-lg font-medium">
                    Find out if you are eligible and take the first step towards your dream career!
                </p>
            </div>

            <div className='flex flex-col lg:flex-row bg-white lg:px-5 pb-5'>

                {/* Sidebar Text Section */}
                <div className="lg:w-2/3 mt-4 p-4 rounded-lg text-[#064974]">
                    <h2 className="text-3xl font-bold">Why Check Your Eligibility with Us?</h2>
                    <p className="mt-3 text-lg">
                        Ensure a smooth and successful journey towards your goals by checking your eligibility with our expert guidance.
                        Whether you are planning to work, study, or settle abroad, knowing your eligibility is the first step towards the right path.
                    </p>
                    <ul className="mt-3 text-start">
                        <li>✔ Instant eligibility assessment with accurate results</li>
                        <li>✔ Expert evaluation based on the latest immigration rules</li>
                        <li>✔ Hassle-free and quick process with minimal paperwork</li>
                        <li>✔ Personalized advice to improve your success rate</li>
                        {/* <li>✔ Assistance in documentation and application filing</li>
                        <li>✔ Dedicated support to resolve any queries or concerns</li> */}
                    </ul>
                    <p className="mt-4 text-lg">
                        Don't miss the opportunity to turn your dreams into reality. Take the first step towards a brighter future by
                        checking your eligibility today!
                    </p>
                    <p className="mt-4 font-bold text-2xl text-[#064974]">
                        Fill out the form now and let us help you achieve your goals with ease!
                    </p>
                </div>

                {/* Form Section */}
                <div className="form-container mt-4 lg:w-2/3">
                    <h2 className="form-title text-[#064974] text-start">Check Your Eligibility</h2>
                    <form onSubmit={handleSubmit} className="form">
                        <div className="form-row">
                            <div className="form-group">
                                <label>First Name :</label>
                                <input type="text" name="firstName" value={formData.firstName} placeholder='First Name' onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>Middle Name :</label>
                                <input type="text" name="middleName" value={formData.middleName} placeholder='Middle Name' onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Last Name :</label>
                                <input type="text" name="lastName" value={formData.lastName} placeholder='Last Name' onChange={handleChange} required />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Contact No :</label>
                                <input type="text" name="contact" value={formData.contact} placeholder='Contact No' onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>Email ID :</label>
                                <input type="email" name="email" value={formData.email} placeholder='Email Address' onChange={handleChange} required />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Country :</label>
                                <select name="country" value={formData.country} onChange={handleChange} required>
                                    <option value="">Select Country</option>
                                    {countries.map((c) => (
                                        <option key={c} value={c}>{c}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Enquiry Type :</label>
                                <select name="enquiry" value={formData.enquiry} onChange={handleChange} required>
                                    <option value="">Select Enquiry Type</option>
                                    {enquiries.map((e) => (
                                        <option key={e} value={e}>{e}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Education :</label>
                                <select name="education" value={formData.education} onChange={handleChange} required>
                                    <option value="">Select Education</option>
                                    {educations.map((edu) => (
                                        <option key={edu} value={edu}>{edu}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Date of Birth :</label>
                                <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
                            </div>
                        </div>

                        <div className="form-group full-width">
                            <label>Sex :</label>
                            <div className="radio-group">
                                {["Male", "Female", "Other"].map((gender) => (
                                    <label key={gender}>
                                        <input type="radio" name="sex" value={gender} checked={formData.sex === gender} onChange={handleChange} required /> {gender}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="form-group full-width">
                            <label>Upload CV :</label>
                            <input type="file" name="cv" accept=".pdf,.doc,.docx" onChange={handleChange} required />
                        </div>

                        <button type="submit" className="submit-btn" disabled={loading}>
                            {loading ? 'Submitting...' : 'Submit'}
                        </button>

                        {showMessage && message && <p className="message-success">{message}</p>}
                        {showMessage && error && <p className="message-error">{error}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
}