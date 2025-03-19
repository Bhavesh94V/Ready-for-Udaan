import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { ChevronDown, ChevronUp } from "lucide-react";
import slider1 from "../assets/imgs/HomeSlider/img1.jpg";
import slider2 from "../assets/imgs/HomeSlider/img2.jpg";
import slider3 from "../assets/imgs/HomeSlider/img3.jpg";
import { Link } from "react-router-dom";

const slides = [
    {
        title: "Fly Towards Your Dream",
        subtitle: "Your Immigration Journey Starts Here",
        description:
            "Take the first step towards a brighter future with expert immigration guidance. Whether it's study, work, or permanent residency, we make your transition seamless with our trusted consultancy services.",
        image: slider1,
        gradient: "from-cyan-700 via-blue-700 to-indigo-700",
        buttonText: "Contact Us",
        link: '/ContactPage'
    },
    {
        title: "Study & Settle Abroad",
        subtitle: "Unlock Global Opportunities",
        description:
            "Pursue world-class education and build a successful career in top destinations like Canada, Australia, UK, and USA. Let us guide you through visa applications, university admissions, and settlement support.",
        image: slider2,
        gradient: "from-cyan-700 via-blue-700 to-indigo-700",
        buttonText: "Book Appointment",
        link: '/BookNowPage'
    },
    {
        title: "Migrate With Confidence",
        subtitle: "Expert Visa & PR Consultation",
        description:
            "Turn your migration dreams into reality with our professional visa assistance. From work permits to permanent residency, we provide hassle-free solutions tailored to your needs.",
        image: slider3,
        gradient: "from-cyan-700 via-blue-700 to-indigo-700",
        buttonText: "Check Eligibility",
        link: '/CareersPage'
    },
];


export default function VerticalSlider() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [initialDelay, setInitialDelay] = useState(true);

    useEffect(() => {
        let interval;
        if (initialDelay) {
            setTimeout(() => {
                setInitialDelay(false);
            }, 5000);
        } else {
            interval = setInterval(() => {
                setActiveIndex((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
            }, 5000);
        }
        return () => clearInterval(interval);
    }, [initialDelay]);

    const handleNext = () => {
        setActiveIndex((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
        setInitialDelay(false);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : slides.length - 1));
        setInitialDelay(false);
    };

    return (
        <div className="relative h-screen w-full overflow-hidden bg-black text-white">
            <div className="absolute left-1/2 bottom-8 z-30 flex gap-4 -translate-x-1/2 md:bottom-12">
                <button onClick={handlePrev} className="p-3 rounded-full bg-white/30 backdrop-blur-md hover:bg-white hover:text-black transition-all flex items-center">
                    <ChevronUp className="w-5 h-5" />
                </button>
                <button onClick={handleNext} className="p-3 rounded-full bg-white/30 backdrop-blur-md hover:bg-white hover:text-black transition-all flex items-center">
                    <ChevronDown className="w-5 h-5" />
                </button>
            </div>

            <motion.div
                className="h-full w-full"
                animate={{ translateY: `-${activeIndex * 100}vh` }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                {slides.map((slide, index) => (
                    <div key={index} className="relative h-screen w-full flex items-center justify-center ps-4 overflow-hidden">
                        <div className="absolute inset-0">
                            <img src={slide.image} alt={slide.title} className="h-full w-full object-cover brightness-90" />
                            <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} opacity-60`} />
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="relative z-10 text-center px-6 md:px-12 max-w-2xl "
                        >
                            <p className="mb-2 text-xs uppercase tracking-widest text-gray-300 md:text-sm">
                                <Typewriter words={[slide.subtitle]} loop={false} cursor cursorStyle="|" typeSpeed={50} />
                            </p>
                            <h2 className="mb-2 text-3xl font-extrabold md:text-5xl text-white drop-shadow-lg">
                                <Typewriter words={[slide.title]} loop={false} cursor cursorStyle="|" typeSpeed={50} delaySpeed={1000} />
                            </h2>
                            <p className="text-sm md:text-lg text-gray-200 max-w-xl mx-auto leading-relaxed">
                                {slide.description}
                            </p>

                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    to={slide.link}
                                    className="mt-4 px-4 py-2 md:px-6 md:py-3 font-bold text-[#064974] bg-white rounded-full inline-block"
                                >
                                    {slide.buttonText}
                                </Link>
                            </motion.div>

                        </motion.div>
                    </div>
                ))}
            </motion.div>

            <div className="absolute right-4 top-1/2 z-20 flex flex-col gap-2 -translate-y-1/2 md:right-8">
                {slides.map((_, index) => (
                    <button key={index} onClick={() => setActiveIndex(index)} className={`h-2 w-2 md:h-3 md:w-3 rounded-full transition-all duration-300 ${activeIndex === index ? "w-6 bg-white" : "bg-white/50"}`} />
                ))}
            </div>
        </div>
    );
}