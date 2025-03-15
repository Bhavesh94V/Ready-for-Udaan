import './App.css';
import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import ServicePage from "./pages/ServicePage";
import BlogPage from "./pages/BlogPage";
import CareersPage from "./pages/CareersPage";
import ContactPage from "./pages/ContactPage";
import BookNowPage from "./pages/BookNowPage";
import BackToTop from "./components/BackToTop";
import AnimatedLoader from "./components/AnimatedLoader ";
import Blog1 from './BlogDetails/Blog1';
import Blog2 from './BlogDetails/Blog2';
import Blog3 from './BlogDetails/Blog3';
import Blog4 from './BlogDetails/Blog4';
import Blog5 from './BlogDetails/Blog5';
import Blog6 from './BlogDetails/Blog6';

import CanadaDetails from './CountryDetails/CanadaDetails';
import AustraliaDetails from './CountryDetails/AustraliaDetails';
import SouthAfrica from './CountryDetails/SouthAfrica';
import Belgium from './CountryDetails/Belgium';
import Denmark from './CountryDetails/Denmark';
import USA from './CountryDetails/USA';
import France from './CountryDetails/France';
import Germany from './CountryDetails/Germany';
import Japan from './CountryDetails/Japan';
import Brazil from './CountryDetails/Brazil';
import NewZealand from './CountryDetails/NewZealand';
import Italy from './CountryDetails/Italy';
import UK from './CountryDetails/UK';


import FormIcons from './components/FormIcons';
import AppWrapper from './components/PopUpForm';

import Service1 from './Service-Details/Service1';
import Service2 from './Service-Details/Service2';
import Service3 from './Service-Details/Service3';
import Service4 from './Service-Details/Service4';
import Service5 from './Service-Details/Service5';
import Service6 from './Service-Details/Service6';
import Footer from './components/Footer';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <div className="App">
      {loading && <AnimatedLoader />}
      <Navbar />

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/ServicePage" element={<ServicePage />} />
        <Route path="/BlogPage" element={<BlogPage />} />
        <Route path="/CareersPage" element={<CareersPage />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/BookNowPage" element={<BookNowPage />} />

        <Route path="/service/work-visa" element={<Service1></Service1>} />
        <Route path="/service/visitor-visa" element={<Service2></Service2>} />
        <Route path="/service/study-visa" element={<Service3></Service3>} />
        <Route path="/service/permanent-residency" element={<Service4></Service4>} />
        <Route path="/service/investment-visa" element={<Service5></Service5>} />
        <Route path="/service/business-visa" element={<Service6></Service6>} />


        {/* Blog Routes */}
        <Route path="/Blog/1" element={<Blog1 />} />
        <Route path="/Blog/2" element={<Blog2 />} />
        <Route path="/Blog/3" element={<Blog3 />} />
        <Route path="/Blog/4" element={<Blog4 />} />
        <Route path="/Blog/5" element={<Blog5 />} />
        <Route path="/Blog/6" element={<Blog6 />} />



        {/* Country Routes */}
        <Route path="/country/Canada" element={<CanadaDetails />} />
        <Route path="/country/Australia" element={<AustraliaDetails />} />
        <Route path="/country/SouthAfrica" element={<SouthAfrica />} />
        <Route path="/country/Belgium" element={<Belgium />} />
        <Route path="/country/Denmark" element={<Denmark />} />
        <Route path="/country/USA" element={<USA />} />
        <Route path="/country/France" element={<France />} />
        <Route path="/country/Germany" element={<Germany />} />
        <Route path="/country/Japan" element={<Japan />} />
        <Route path="/country/Brazil" element={<Brazil />} />
        <Route path="/country/NewZealand" element={<NewZealand />} />
        <Route path="/country/Italy" element={<Italy />} />
        <Route path="/country/UK" element={<UK />} />
      </Routes>

      {!loading && <FormIcons />}
      {!loading && <AppWrapper />}

      <BackToTop />

      <Footer></Footer>
    </div>
  );
}

export default App;
