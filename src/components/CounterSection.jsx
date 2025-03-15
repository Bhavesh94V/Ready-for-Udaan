import React, { useState, useEffect, useRef } from "react";
import "../assets/styles/FactsAndFeatures.css";

export default function CounterSection() {
    const [counts, setCounts] = useState({ count1: 0, count2: 0, count3: 0, count4: 0 });
    const [startCounting, setStartCounting] = useState(false);
    const counterRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setStartCounting(true);
                }
            },
            { threshold: 0.5 }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!startCounting) return;

        const targetCounts = { count1: 5000, count2: 3000, count3: 50, count4: 100 };
        const duration = 2000;
        const increment = 50;

        const interval = setInterval(() => {
            setCounts((prevCounts) => {
                const updatedCounts = { ...prevCounts };
                let allReached = true;

                Object.keys(targetCounts).forEach((key) => {
                    if (prevCounts[key] < targetCounts[key]) {
                        updatedCounts[key] = Math.min(
                            prevCounts[key] + Math.ceil(targetCounts[key] / (duration / increment)),
                            targetCounts[key]
                        );
                        allReached = false;
                    }
                });

                if (allReached) clearInterval(interval);
                return updatedCounts;
            });
        }, increment);

        return () => clearInterval(interval);
    }, [startCounting]);

    return (
        <section className="counter-wrapper" ref={counterRef}>
            <div className="counter-inner">
                <div className="container text-center text-white">
                    <div className="row g-0">
                        <div className="col-6 col-lg-3 py-5">
                            <i className="fa fa-smile count-icon"></i>
                            <div className="py-2 count">{startCounting ? counts.count1 : 0}+</div>
                            <div>Happy Clients</div>
                        </div>
                        <div className="col-6 col-lg-3 py-5">
                            <i className="fa fa-users count-icon"></i>
                            <div className="py-2 count">{startCounting ? counts.count2 : 0}+</div>
                            <div>Successful Visa Approvals</div>
                        </div>
                        <div className="col-6 col-lg-3 py-5">
                            <i className="fa fa-trophy count-icon"></i>
                            <div className="py-2 count">{startCounting ? counts.count3 : 0}+</div>
                            <div>Recognized Awards & Certifications</div>
                        </div>
                        <div className="col-6 col-lg-3 py-5">
                            <i className="fa fa-briefcase count-icon"></i>
                            <div className="py-2 count">{startCounting ? counts.count4 : 0}+</div>
                            <div>Expert Immigration Consultants</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}