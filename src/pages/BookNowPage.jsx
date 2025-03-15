import React from 'react';
import { Clock, MapPin, Mail, Phone } from 'lucide-react';
import "../assets/styles/BookNowPage.css";
import BookNowForm from './BookNowForm';
import PagesImage from '../assets/imgs/Pages/PagesImage';
import { Link } from 'react-router-dom';

export default function BookNowPage() {




  return (
    <div className='bookNowPage pt-5'>


      <div>
        <div class="bg-[#064974] lg:mt-[109px] md:mt-[50px] py-5 bg-custom mt-custom">
          <div class="container BookNowPatter mx-auto text-white">
            <div class="flex flex-col items-start justify-between">
              <div className='border-b border-dashed py-3'>
                <h1 class="text-4xl font-semibold md:mt-[10px]">Book Your Appointment With Ready for Udaan</h1>
              </div>
              <div class="max-w-3xl mt-4 md:mt-0">
                <p class="text-lg text-start">
                  Take the next step towards your dreams with our expert guidance. Book a personalized consultation to explore career opportunities, study options, or immigration pathways tailored to your aspirations.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-gray-100 py-3">
          <div class="container mx-auto">
            <nav class="text-sm text-gray-600">
              <ol class="flex space-x-2">
                <li>
                  <Link to="/" className="text-[#064974] hover:underline cursor-pointer">
                    Flourish Immigration
                  </Link>
                </li>

                <span>/</span>
                <li>
                  <span class="text-[#1b6b9c]">Book An Appointment</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

      </div>


      <BookNowForm></BookNowForm>


      <div className="w-full bg-white shadow-xl overflow-hidden"

      >
        <div className="flex flex-col md:flex-row items-center bg-[#064974]">
          <div className="w-full md:w-1/3">
            <img
              src={PagesImage.BookNowPage}
              alt="Office"
              className="w-full md:rounded-e-full  h-full object-cover"
            />
          </div>

          <div className="w-full md:w-2/3 p-6 bg-[#064974] BookPattern">
            <h3 className="text-xl text-[#06A3DA] font-bold mb-4">India</h3>

            <div className="flex items-center gap-3 mb-2">
              <MapPin className="h-5 w-5 text-[#06A3DA]" />
              <p className="text-[#FFFFFF] text-base">
                B-502, Ananta Square, Near S.P. Ring Road, Ahmedabad-382330
              </p>
            </div>

            <div className="flex items-center gap-3 mb-2">
              <Mail className="h-5 w-5 text-[#06A3DA]" />
              <p className="text-[#FFFFFF] text-base">ready4udaan1@gmail.com</p>
            </div>

            <div className="flex items-center gap-3 mb-2">
              <Phone className="h-5 w-5 text-[#06A3DA]" />
              <p className="text-[#FFFFFF] text-base">+91 955-864-7487</p>
            </div>

            <div className="mt-4 border-t border-[#1b6b9c] pt-4">
              <h4 className="text-lg font-medium mb-2 text-[#06A3DA]">Office Hours</h4>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-[#06A3DA]" />
                <div>
                  <p className="text-sm text-[#FFFFFF]">Monday to Friday: 9:00 am - 7:00 pm</p>
                  <p className="text-sm text-[#FFFFFF]">Saturday: 9:00 am - 6:00 pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}