import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitContactRequest } from '../components/redux/actions/contactActions';
import '../assets/styles/Pages/ContactUsPage.css';
import LogosSection from '../components/LogosSection ';
import PagesImage from '../assets/imgs/Pages/PagesImage';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  const [formData, setFormData] = useState({ full_name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const contactState = useSelector((state) => state.contact);

  useEffect(() => {
    if (contactState.message) {
      setStatusMessage(contactState.message);
    } else if (contactState.error) {
      setStatusMessage(contactState.error);
    }
  }, [contactState]);

  useEffect(() => {
    if (statusMessage) {
      const timer = setTimeout(() => setStatusMessage(''), 5000);
      return () => clearTimeout(timer);
    }
  }, [statusMessage]);


  // Validation Rules
  const validateForm = () => {
    let newErrors = {};

    if (!formData.full_name.trim()) {
      newErrors.full_name = 'Name is required';
    } else if (!/^[A-Za-z\s]{2,}$/.test(formData.full_name)) {
      newErrors.full_name = 'Name must be at least 2 letters and contain only alphabets';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Real-time validation
    if (errors[name]) {
      validateForm();
    }
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatusMessage('');

    if (!validateForm()) return;

    setLoading(true);
    setIsButtonDisabled(true);

    dispatch(submitContactRequest(formData));

    setFormData({ full_name: '', email: '', phone: '', message: '' });

    setTimeout(() => {
      setIsButtonDisabled(false);
      setLoading(false);
    }, 5000);
  };

  return (
    <>
      <div className="contact-section-Footer pt- bg-transparent">
        
        <div>

          <div className="mt-5">
            <div className="pt-5 relative w-full">
              <div
                className="w-full h-[300px] md:h-[350px] lg:h-[400px] bg-cover bg-center overflow-hidden relative"
                style={{ backgroundImage: `url(${PagesImage.careerImage})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#064974bb] to-[#06a2da99] backdrop-blur-sm flex flex-col justify-center items-center text-white text-center px-6 transition-all duration-500">
                  <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg">
                    Contact Us
                  </h1>

                  <div className="mt-3 flex items-center space-x-2 text-sm md:text-lg font-medium opacity-90">
                    <Link to='/' className="text-gray-200 hover:scale-105 hover:text-white transition duration-300 cursor-pointer">
                      Home
                    </Link>

                    <span className="text-white">/ Contact Us </span>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div class="bg-[#064974] py-3">
            <div class="mx-auto px-3">
              <nav class="text-sm text-gray-600">
                <ol class="flex space-x-2">
                  <li>
                    <Link to="/" className="text-white hover:font-bold hover:underline cursor-pointer">
                      ReadyForUdaan
                    </Link>
                  </li>

                  <span className='text-white'>/</span>
                  <li>
                    <span class="text-white">Contact Us</span>
                  </li>
                </ol>
              </nav>
            </div>
          </div>

        </div>



        <div className="ready-for-udaan-container"
          style={{
            backgroundImage: `url(${PagesImage.pattern1})`,
          }}
        >
          <span className="ready-for-udaan-big-circle"></span>

          <div className="ready-for-udaan-form">
            <div className="ready-for-udaan-contact-info">
              <h3 className="ready-for-udaan-title">Ready to Soar with Udaan?</h3>
              <p className="ready-for-udaan-text">Have questions or need support? We're here to help.</p>

              <div className="ready-for-udaan-info">
                <div className="ready-for-udaan-information">
                  <i className="fas fa-map-marker-alt"></i>
                  <p className="ms-2">Udaan Headquarters, Innovation Road, Tech City, India</p>
                </div>
                <div className="ready-for-udaan-information">
                  <i className="fas fa-envelope"></i>
                  <p>contact@readyforudaan.com</p>
                </div>
                <div className="ready-for-udaan-information">
                  <i className="fas fa-phone"></i>
                  <p>+91 98765 43210</p>
                </div>
              </div>

              <div className="ready-for-udaan-social-media">
                <p>Follow us on:</p>
                <div className="ready-for-udaan-social-icons">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="ready-for-udaan-contact-form">
              <span className="ready-for-udaan-circle one"></span>
              <span className="ready-for-udaan-circle two"></span>

              <form onSubmit={handleSubmit} autoComplete="off">
                <h3 className="ready-for-udaan-title">Get in Touch</h3>
                {statusMessage && <p className="status-message">{statusMessage}</p>}

                <div className="ready-for-udaan-input-container">
                  <input
                    type="text"
                    name="full_name"
                    className="ready-for-udaan-input"
                    placeholder="Name"
                    value={formData.full_name}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.full_name && <p className="error-text">{errors.full_name}</p>}
                </div>

                <div className="ready-for-udaan-input-container">
                  <input
                    type="email"
                    name="email"
                    className="ready-for-udaan-input"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.email && <p className="error-text">{errors.email}</p>}
                </div>

                <div className="ready-for-udaan-input-container">
                  <input
                    type="tel"
                    name="phone"
                    className="ready-for-udaan-input"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.phone && <p className="error-text">{errors.phone}</p>}
                </div>

                <div className="ready-for-udaan-input-container ready-for-udaan-textarea">
                  <textarea
                    name="message"
                    className="ready-for-udaan-input"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                  {errors.message && <p className="error-text">{errors.message}</p>}
                </div>

                <button type="submit" className="ready-for-udaan-btn" disabled={isButtonDisabled}>
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <LogosSection />
    </>
  );
}
