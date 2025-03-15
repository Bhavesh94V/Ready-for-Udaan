import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Pages/AboutPage.css';
import bgImage from '../assets/imgs/AboutArea/bginner.jpg';
import australiaImg from '../assets/imgs/Pages/australia.jpg';
import unitedStatesImg from '../assets/imgs/Pages/unitedtStates.jpg';
import losAngelesImg from '../assets/imgs/Pages/losAngelus.jpg';
import dubaiImg from '../assets/imgs/Pages/dubai.jpg';
import WOW from 'wowjs';
import 'animate.css';
import PagesImage from '../assets/imgs/Pages/PagesImage';
import FAQSection from '../components/FAQSection';

export default function AboutPage() {

  useEffect(() => {
    const wow = new WOW.WOW({
      live: false,
    });
    wow.init();
  }, []);

  const teamMembers = [
    {
      name: "Emma",
      role: "Visa Specialist",
      imgSrc: 'https://img.freepik.com/free-photo/portrait-friendly-looking-happy-attractive-male-model-with-moustache-beard-wearing-trendy-transparent-glasses-smiling-broadly-while-listening-interesting-story-waiting-mom-give-meal_176420-22400.jpg?uid=R183500011&ga=GA1.1.1860702175.1736869206&semt=ais_hybrid',
      facebookLink: "",
      instagramLink: "",
      twitterLink: "",
    },
    {
      name: "Robert",
      role: "Legal Advisor",
      imgSrc: 'https://img.freepik.com/free-photo/picture-dissatisfied-grumpy-young-afro-american-woman-with-long-straight-hair-expressing-her-disagreement-keeping-arms-folded-looking-with-serious-skeptical-facial-expression_344912-1026.jpg?uid=R183500011&ga=GA1.1.1860702175.1736869206&semt=ais_hybrid',
      facebookLink: "",
      instagramLink: "",
      twitterLink: "",
    },
    {
      name: "Chris",
      role: "Career Guide",
      imgSrc: 'https://img.freepik.com/free-photo/beautiful-male-half-length-portrait-isolated-white-studio-background-young-emotional-hindu-man-blue-shirt-facial-expression-human-emotions-advertising-concept-standing-smiling_155003-25250.jpg?uid=R183500011&ga=GA1.1.1860702175.1736869206&semt=ais_hybrid',
      facebookLink: "",
      instagramLink: "",
      twitterLink: "",
    },
    {
      name: "Scarlett",
      role: "Investment Expert",
      imgSrc: 'https://img.freepik.com/free-photo/young-smiling-man-with-crossed-arms-white_231208-13001.jpg?uid=R183500011&ga=GA1.1.1860702175.1736869206&semt=ais_hybrid',
      facebookLink: "",
      instagramLink: "",
      twitterLink: "",
    },
  ];

  const faq1 = [
    {
      question: "What is Udaan, and how does it work?",
      answer:
        "Udaan is an immigration and visa consultancy service that helps individuals with Work Visa, Study Visa, and Visitor Visa applications. We assist in document preparation, application submission, and approval processes.",
    },
    {
      question: "Which visas does Udaan support?",
      answer:
        "Udaan specializes in Work Visa, Study Visa, and Visitor Visa services, ensuring a smooth application process for our clients.",
    },
    {
      question: "How long does the visa application process take?",
      answer:
        "The processing time depends on the visa type and country. Work and Study Visas may take several weeks, while Visitor Visas are usually processed faster. We provide estimated timelines during consultation.",
    },
    {
      question: "What documents are required for a visa application?",
      answer:
        "The required documents vary by visa type but generally include a valid passport, financial proof, educational certificates (for Study Visa), job offer letter (for Work Visa), and other supporting documents.",
    },
  ];

  const faq2 = [
    {
      question: "Does Udaan guarantee visa approval?",
      answer:
        "While we ensure the best guidance and accurate documentation, visa approval depends on the respective country’s immigration policies. However, we maximize your chances of approval with expert consultation.",
    },
    {
      question: "How can I track my visa application status?",
      answer:
        "Once your application is submitted, we provide regular updates and tracking details. You can also contact our team for the latest status of your application.",
    },
    {
      question: "Does Udaan provide post-visa assistance?",
      answer:
        "Yes, we offer post-visa assistance, including travel guidance, accommodation help, and any other support needed after visa approval.",
    },
    {
      question: "How do I get started with Udaan?",
      answer:
        "Simply book a consultation with us, and our experts will guide you through the entire process, from eligibility assessment to application submission.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const images = [
    {
      src: australiaImg,
      alt: 'Australia',
      text: 'Experience the stunning landscapes, unique wildlife, and vibrant cities of Australia.',
      link: '/Australia'
    },
    {
      src: unitedStatesImg,
      alt: 'United States',
      text: 'Explore the diverse culture, innovation, and iconic landmarks of the United States.',
      link: '/country/USA'
    },
    {
      src: losAngelesImg,
      alt: 'Los Angeles',
      text: 'Discover the glamour of Hollywood, sunny beaches, and cultural diversity in Los Angeles.',
      link: '/LosAngeles'
    },
    {
      src: dubaiImg,
      alt: 'Dubai',
      text: 'A global hub of luxury, modern architecture, and endless business opportunities.',
      link: '/Dubai'
    },
    {
      src: australiaImg,
      alt: 'Australia',
      text: 'From the Great Barrier Reef to the Outback, Australia offers breathtaking experiences.',
      link: '/Australia'
    },
    {
      src: unitedStatesImg,
      alt: 'United States',
      text: 'A land of opportunities, diverse landscapes, and world-renowned attractions.',
      link: '/USA'
    },
    {
      src: losAngelesImg,
      alt: 'Los Angeles',
      text: 'The entertainment capital, famous for movies, tech startups, and lively culture.',
      link: '/LosAngeles'
    },
    {
      src: dubaiImg,
      alt: 'Dubai',
      text: 'Where tradition meets innovation – home to world-class skyscrapers and attractions.',
      link: '/Dubai'
    }
  ];


  return (
    <div className="AboutPageMain md:mt-5 pt-5 bg-transparent" style={{ backgroundImage: ` url(${bgImage}) ` }}>
      <div className="about-section-container mt-5">

        <div className="relative w-full">
          <div
            className="w-full h-[300px] md:h-[350px] lg:h-[400px] bg-cover bg-center rounded-2xl overflow-hidden relative"
            style={{ backgroundImage: `url(${PagesImage.careerImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#064974bb] to-[#06a2da99] backdrop-blur-sm flex flex-col justify-center items-center text-white text-center px-6 transition-all duration-500">
              <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg">
                About Us
              </h1>

              <div className="mt-3 flex items-center space-x-2 text-sm md:text-lg font-medium opacity-90">
                <Link to='/' className="text-gray-200 hover:scale-105 hover:text-white transition duration-300 cursor-pointer">
                  Home
                </Link>

                <span className="text-white">/ About Us</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center p-10 sm:p-6 mt-5">
          <div className="flex flex-col md:flex-row max-w-[1350px] rounded-lg items-center text-center md:text-left relative">

            <div className="relative flex flex-col md:flex-row items-center gap-4 md:gap-6 md:mr-6">

              <div className="relative flex flex-col items-center">

                <img
                  src="https://img.freepik.com/free-vector/design-community-concept-illustration_114360-1402.jpg?uid=R183500011&ga=GA1.1.1860702175.1736869206&semt=ais_hybrid"
                  alt="Business Discussion"
                  className="w-full max-w-[650px] h-auto rounded-lg sm:w-[80%] md:w-[600px]"
                />

              </div>
            </div>

            <div className="max-w-[600px] mt-6 md:mt-0 px-4 text-start">
              <h4 className="text-[#064974] text-lg mb-2 uppercase font-semibold tracking-wide">
                Know Our Company
              </h4>
              <h2 className="text-[#1b6b9c] text-2xl md:text-3xl font-bold mb-4 leading-tight">
                Global Success Starts With Right Guidance
              </h2>
              <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed">
                <strong>Ready for Udaan</strong> is more than just an immigration consultancy—we are your
                <strong> strategic partners</strong> in achieving global success. Whether you aspire to study, work,
                or settle abroad, our expert guidance ensures a <strong>smooth, efficient, and successful transition</strong>.
              </p>
              <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed">
                With years of experience and a commitment to excellence, we simplify the immigration process, ensuring
                every step is <strong>transparent, stress-free, and efficient</strong>. Our team of experts works
                tirelessly to turn your dreams into reality.
              </p>


              <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-6">
                <li className="flex flex-col items-center bg-white shadow-md cursor-pointer rounded-lg p-4 md:p-6 w-full transition-all duration-300 hover:shadow-xl hover:scale-105">
                  <div className="bg-gradient-to-r from-[#064974] to-[#1b6b9c] text-white p-2 md:p-3 rounded-full shadow-md">
                    <i className="fa-solid fa-globe text-lg md:text-2xl"></i>
                  </div>
                  <span className="text-gray-800 text-sm md:text-base font-semibold mt-2 md:mt-3 text-center">
                    Immigration & Visa Guidance
                  </span>
                </li>

                <li className="flex flex-col items-center bg-white shadow-md cursor-pointer rounded-lg p-4 md:p-6 w-full transition-all duration-300 hover:shadow-xl hover:scale-105">
                  <div className="bg-gradient-to-r from-[#064974] to-[#1b6b9c] text-white p-2 md:p-3 rounded-full shadow-md">
                    <i className="fa-solid fa-user-shield text-lg md:text-2xl"></i>
                  </div>
                  <span className="text-gray-800 text-sm md:text-base font-semibold mt-2 md:mt-3 text-center">
                    End-to-End Support
                  </span>
                </li>

                <li className="flex flex-col items-center bg-white shadow-md cursor-pointer rounded-lg p-4 md:p-6 w-full transition-all duration-300 hover:shadow-xl hover:scale-105">
                  <div className="bg-gradient-to-r from-[#064974] to-[#1b6b9c] text-white p-2 md:p-3 rounded-full shadow-md">
                    <i className="fa-solid fa-thumbs-up text-lg md:text-2xl"></i>
                  </div>
                  <span className="text-gray-800 text-sm md:text-base font-semibold mt-2 md:mt-3 text-center">
                    High Success Rate
                  </span>
                </li>
              </ul>

              <div className="flex flex-col md:flex-row gap-4">
                <button className="bg-[#064974] hover:bg-[#1b6b9c] text-white px-4 md:px-6 py-3 md:py-3 rounded-md text-sm md:text-base font-semibold shadow-lg transition-all duration-300">
                  <i className="fa-solid fa-phone mr-2"></i> Call Us Today!
                </button>
              </div>
            </div>

          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12 mt-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#064974] uppercase tracking-wide">
              From Vision to Reality
            </h2>
            <p className="text-[#1b6b9c] text-base md:text-lg mt-2">
              We transform ideas into success with expertise, integrity, and tailored solutions.
            </p>
          </div>

          <div className="w-full max-w-[1300px] m-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="flex flex-col text-start gap-4 md:gap-6">
              <div className="bg-[#064974] p-4 md:p-6 rounded-xl shadow-md">
                <h3 className="text-[#06A3DA] font-semibold text-base md:text-lg bg-white px-3 md:px-4 py-2 rounded-lg inline-block">
                  Our Vision
                </h3>
                <p className="text-white mt-2 text-sm md:text-base">
                  Our mission is to provide the best fully tested products and solutions for our customers.
                </p>
              </div>

              <div className="bg-[#064974] p-4 md:p-6 rounded-xl shadow-md">
                <h3 className="text-[#06A3DA] font-semibold text-base md:text-lg bg-white px-3 md:px-4 py-2 rounded-lg inline-block">
                  Our Mission
                </h3>
                <p className="text-white mt-2 text-sm md:text-base">
                  We strive to be a trusted partner in making international dreams a reality through integrity,
                  expertise, and personalized support.
                </p>
              </div>

              <div className="bg-[#064974] p-4 md:p-6 rounded-xl shadow-md text-white">
                <h3 className="bg-white text-[#06A3DA] font-semibold text-base md:text-lg px-3 md:px-4 py-2 rounded-lg inline-block">
                  Our History
                </h3>
                <p className="mt-2 text-sm md:text-base">
                  Established with a passion for making overseas dreams a reality, Ready for Udaan has helped countless individuals navigate their global journey with confidence.
                </p>
              </div>
            </div>

            <div
              className="relative text-white p-6 md:p-10 rounded-xl flex flex-col justify-center items-center text-center"
              style={{
                backgroundImage: "url('https://img.freepik.com/free-photo/businessman-big-office_53876-144319.jpg?uid=R183500011&ga=GA1.1.1860702175.1736869206&semt=ais_hybrid')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                position: "relative",
                zIndex: 1,
              }}
            >
              <div className="absolute inset-0 bg-[#064974] opacity-60 rounded-xl z-0"></div>

              <div className="relative z-10 px-4 md:px-6">
                <h2 className="text-xl md:text-2xl font-bold">Your Global Journey Starts Here</h2>
                <p className="mt-2 md:mt-3 text-gray-300 text-sm md:text-base">
                  From visas to settlement, we make your immigration process simple, fast, and hassle-free.
                  Let’s turn your dreams into reality!
                </p>
                <button className="mt-4 md:mt-5 bg-[#06A3DA] hover:bg-[#1b6b9c] px-4 md:px-5 py-2 rounded-full text-white">
                  Contact Us Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-center mb-12 mt-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#064974] uppercase tracking-wide">
              Meet Our Team
            </h2>
            <p className="text-[#1b6b9c] text-base md:text-lg mt-2">
              The experts behind our success, innovation, and excellence.
            </p>
          </div>
          <div className="team-main">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-profile-card">
                <div className="team-img-container">
                  <img src={member.imgSrc} alt={member.name} className="team-img" />
                </div>
                <div className="team-caption">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <div className="team-social-links">
                    <a href={member.facebookLink} className="team-social-link">
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a href={member.instagramLink} className="team-social-link">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href={member.twitterLink} className="team-social-link">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='bg-white'>
        <div className="max-w-5xl mx-auto p-6 ">

          <FAQSection></FAQSection>

          <div className="bg-[#064974] p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-white mt-4 mb-2">Still have questions?</h3>
            <p className="text-white mb-4">
              Didn’t find the answer you were looking for? Our team is here to help! <br />
              Feel free to contact us or give us a call for assistance.
            </p>

            {/* Buttons for Chat and Call */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-[#1b6b9c] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#064974] transition">
                Contact Us
              </button>
              <a
                href="tel:+91 955-864-7487"
                className="bg-[#1b6b9c] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#064974] transition"
              >
                Call Us : +91 955-864-7487
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}