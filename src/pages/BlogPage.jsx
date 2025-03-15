import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import blogimage1 from '../assets/imgs/Blog/blogimage1.png'
import blogimage2 from '../assets/imgs/Blog/blogimage2.png'
import blogimage3 from '../assets/imgs/Blog/blogimage3.jpg'
import blogimage4 from '../assets/imgs/Blog/blogimage4.jpeg'
import blogimage5 from '../assets/imgs/Blog/blogimage5.png'
import blogimage6 from '../assets/imgs/Blog/blogimage6.jpg'
import PagesImage from "../assets/imgs/Pages/PagesImage";

const newsData = [
  {
    id: 1,
    title: "Understanding Work Visas: A Complete Guide",
    category: "Work",
    author: "Ready For Udaan",
    image: blogimage1
  },
  {
    id: 2,
    title: "Student Visa Process: Step-by-Step Application",
    category: "Study",
    author: "Ready For Udaan",
    image: blogimage2
  },
  {
    id: 3,
    title: "How to Apply for a Permanent Residency",
    category: "PR",
    author: "Ready For Udaan",
    image: blogimage3
  },
  {
    id: 4,
    title: "Visitor Visa Tips: Hassle-Free Travel Planning",
    category: "Visitor",
    author: "Ready For Udaan",
    image: blogimage4
  },
  {
    id: 5,
    title: "Job Opportunities Abroad: Securing Sponsorship",
    category: "Work",
    author: "Ready For Udaan",
    image: blogimage5
  },
  {
    id: 6,
    title: "Immigration Policies 2025: Key Updates & Changes",
    category: "PR",
    author: "Ready For Udaan",
    image: blogimage6
  },
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNews = newsData.filter((news) => {
    const matchesCategory = selectedCategory ? news.category === selectedCategory : true;
    const matchesSearch = news.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="md:mt-5">

      <div className="mt-5">
        <div className="pt-5 relative w-full">
          <div
            className="w-full h-[300px] md:h-[350px] lg:h-[400px] bg-cover bg-center overflow-hidden relative"
            style={{ backgroundImage: `url(${PagesImage.careerImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#064974bb] to-[#06a2da99] backdrop-blur-sm flex flex-col justify-center items-center text-white text-center px-6 transition-all duration-500">
              <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg">
                Blogs
              </h1>

              <div className="mt-3 flex items-center space-x-2 text-sm md:text-lg font-medium opacity-90">
                <Link to='/' className="text-gray-200 hover:scale-105 hover:text-white transition duration-300 cursor-pointer">
                  Home
                </Link>

                <span className="text-white">/ Blog </span>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Hero Section */}
      <div className="mb-5">
        <div className="bg-gradient-to-r from-[#064974] to-[#0a5a8c]">
          <div className="">
            <div className="p-10 flex flex-col md:flex-row items-center gap-8 max-w-7xl mx-auto rounded-lg">
              {/* Left Section */}
              <div className="flex-1">
                <h1 className="text-5xl font-bold w-fit text-white relative">
                  Soar High with Udaan.
                  <span className="absolute left-0 -bottom-1 w-full h-1 bg-blue-400"></span>
                </h1>
                <p className="text-gray-200 mt-2">Guiding You Towards a Brighter Future &mdash; Just now</p>

                <h2 className="text-2xl font-bold mt-4 text-white">Empowering Dreams: Your Pathway to Success.</h2>
                <p className="text-gray-200 mt-2">
                  Ready for Udaan is your ultimate guide to achieving success in education, career, and life.
                  We provide insights, resources, and expert guidance to help you soar high.
                </p>
                <p className="text-gray-200 mt-2">
                  Whether you're a student, a professional, or an entrepreneur, our platform offers tailored
                  advice and strategies to help you navigate your journey with confidence.
                </p>
                <p className="text-gray-200 mt-2">
                  With the right guidance and determination, nothing is out of reach.
                  At Ready for Udaan, we believe that every dream is valid and achievable.
                  Let us be your companion in turning aspirations into reality, helping you
                  overcome obstacles and embrace new opportunities with confidence.
                </p>
              </div>
              {/* Right Section (Image) */}
              <div className="flex-1">
                <img
                  src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
                  alt="Ready for Udaan"
                  className="rounded-lg w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Blog Section */}
      <div className="bg-gray-100 min-h-screen p-5">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
            <h1 className="text-3xl font-bold">Latest News</h1>

            {/* Category Filters */}
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className="bg-gray-500 text-white px-4 py-2 rounded-md"
              >
                All
              </button>
              {
                ["Work", "Study", "PR"].map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-md transition ${selectedCategory === category ? "bg-[#1b6b9c] text-white" : "bg-[#064974] text-white"
                      }`}
                  >
                    {category}
                  </button>
                ))
              }
            </div>

            {/* Search Box */}
            <div className="relative w-64">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border px-4 py-2 rounded-md w-full pr-10"
              />
              <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
              filteredNews.length > 0 ? (
                filteredNews.map((news) => (
                  <div key={news.id} className="bg-white h-[400px] rounded-lg shadow-md">
                    <img src={news.image} alt={news.title} className="rounded-md w-full h-50 object-cover" />
                    <div className="px-4 pt-4 pb-0">
                      <p className="text-gray-500 mt-2">{news.author}</p>
                      <h2 className="text-lg font-bold mt-2">{news.title}</h2>
                      <p className="text-sm text-gray-600 mt-1">{news.category}</p>
                      <Link to={`/blog/${news.id}`} className="block mt-3 text-blue-500 hover:underline">
                        Read More
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500 text-lg col-span-full">No articles found.</p>
              )
            }
          </div>
        </div>
      </div>
    </div >
  );
}