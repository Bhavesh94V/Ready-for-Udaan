import React, { useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../assets/styles/Testimonial.css'
import WOW from 'wowjs';
import 'animate.css';
import PagesImage from '../assets/imgs/Pages/PagesImage';

export default function Testimonial() {
  useEffect(() => {
    const wow = new WOW.WOW({ live: false });
    wow.init();
  }, []);

  const testimonials = [
    {
      name: "Amit Sharma",
      role: "Software Engineer, Canada",
      image: PagesImage.client1,
      text: "Ready for Udaan made my immigration process smooth and stress-free. Their expert guidance helped me secure my work visa in record time!",
      rating: 5,
    },
    {
      name: "Priya Mehta",
      role: "Student, Australia",
      image: PagesImage.client2,
      text: "With Ready for Udaan, I got my student visa without any hassle. Their team provided step-by-step support, and now I'm pursuing my dream education in Australia!",
      rating: 4.5,
    },
    {
      name: "Rahul Verma",
      role: "Business Owner, UK",
      image: PagesImage.client3,
      text: "Starting my business in the UK seemed impossible, but Ready for Udaan made it happen. Their consultancy services were outstanding!",
      rating: 5,
    },
  ];

  return (
    <section className="py-12">
      <div className="text-center max-w-2xl mx-auto">
        <h3 className="text-5xl text-[#064974] font-bold mb-4">What Our Clients Say</h3>
        <p className="text-[#1b6b9c] font-semibold mb-6">
          Our clients trust us for their journey abroad. Here’s what they have to say about their experience with Ready for Udaan.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-[#064974] p-6 rounded-lg shadow-lg max-w-xs text-center">
            <div className="flex justify-center h-20 mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="rounded-full shadow-lg"
              />
            </div>
            <h5 className="text-xl text-white font-bold mb-2">{testimonial.name}</h5>
            <h6 className="text-white mb-3">{testimonial.role}</h6>
            <p className="text-white font-semibold italic">“{testimonial.text}”</p>
            <div className="flex justify-center mt-4">
              {[...Array(5)].map((_, i) => (
                <i
                  key={i}
                  className={`text-yellow-500 ${i + 1 <= Math.floor(testimonial.rating)
                    ? 'fas fa-star'
                    : i < testimonial.rating
                      ? 'fas fa-star-half-alt'
                      : 'far fa-star'
                    }`}
                ></i>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}