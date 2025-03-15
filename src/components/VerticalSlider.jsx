import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import slider1 from "../assets/imgs/HomeSlider/img1.jpg";
import slider2 from "../assets/imgs/HomeSlider/img2.jpg";
import slider3 from "../assets/imgs/HomeSlider/img3.jpg";

const slides = [
    {
        title: "Explore The Future",
        subtitle: "Innovation starts here",
        description: "Discover the next generation of digital experiences.",
        image: slider1,
        gradient: "from-cyan-700 via-blue-700 to-indigo-700",
    },
    {
        title: "Create & Inspire",
        subtitle: "Unleash your creativity",
        description: "Build something amazing with powerful tools.",
        image: slider2,
        gradient: "from-cyan-700 via-blue-700 to-indigo-700",
    },
    {
        title: "Connect & Grow",
        subtitle: "Join the community",
        description: "Be part of something bigger than yourself.",
        image: slider3,
        gradient: "from-cyan-700 via-blue-700 to-indigo-700",
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
            }, 5000); // 5-second delay for the first slide
        } else {
            interval = setInterval(() => {
                setActiveIndex((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
            }, 5000); // Normal 3-second interval after the first slide
        }
        return () => clearInterval(interval);
    }, [initialDelay]);

    const handleNext = () => {
        setActiveIndex((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
        setInitialDelay(false); // Stop initial delay when user interacts
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : slides.length - 1));
        setInitialDelay(false);
    };

    return (
        <div className="relative h-screen w-full overflow-hidden bg-black text-white">
            {/* Navigation Buttons */}
            <div className="absolute left-1/2 bottom-8 z-30 flex gap-4 -translate-x-1/2 md:bottom-12">
                <button onClick={handlePrev} className="p-3 rounded-full bg-white/30 backdrop-blur-md hover:bg-white hover:text-black transition-all flex items-center">
                    <ChevronUp className="w-5 h-5" />
                </button>
                <button onClick={handleNext} className="p-3 rounded-full bg-white/30 backdrop-blur-md hover:bg-white hover:text-black transition-all flex items-center">
                    <ChevronDown className="w-5 h-5" />
                </button>
            </div>

            {/* Slides Container */}
            <div className="h-full w-full transition-transform duration-700 ease-in-out" style={{ transform: `translateY(-${activeIndex * 100}vh)` }}>
                {slides.map((slide, index) => (
                    <div key={index} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <img src={slide.image} alt={slide.title} className="h-full w-full object-cover brightness-90" />
                            <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} opacity-60`} />
                        </div>

                        {/* Content */}
                        <div className="relative z-10 text-center px-6 md:px-12 max-w-2xl mx-auto">
                            <p className="mb-2 text-xs uppercase tracking-widest text-gray-300 md:text-sm">{slide.subtitle}</p>
                            <h2 className="mb-2 text-3xl font-extrabold md:text-5xl text-white drop-shadow-lg">{slide.title}</h2>
                            <p className="text-sm md:text-lg text-gray-200 max-w-xl mx-auto leading-relaxed">{slide.description}</p>
                            <button className="mt-4 px-4 py-2 md:px-6 md:py-3 bg-white text-black rounded-full hover:scale-105 transition-all shadow-lg">Learn More</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Indicators */}
            <div className="absolute right-4 top-1/2 z-20 flex flex-col gap-2 -translate-y-1/2 md:right-8">
                {slides.map((_, index) => (
                    <button key={index} onClick={() => setActiveIndex(index)} className={`h-2 w-2 md:h-3 md:w-3 rounded-full transition-all duration-300 ${activeIndex === index ? "w-6 bg-white" : "bg-white/50"}`} />
                ))}
            </div>
        </div>
    );
}