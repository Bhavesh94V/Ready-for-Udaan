import React from 'react'
import Comment from './Comment';
import { Link, useParams } from 'react-router-dom';
import PagesImage from '../assets/imgs/Pages/PagesImage';

export default function Blog2() {

  const blogs = [
    {
      id: 3,
      title: "How to Apply for a Permanent Residency",
      desc: "Learn about the eligibility criteria, required documents, and the application process for obtaining permanent residency.",
      image: PagesImage.blogimage3,
    },
    {
      id: 4,
      title: "Visitor Visa Tips: Hassle-Free Travel Planning",
      desc: "Expert advice and key tips to ensure a smooth and successful visitor visa application and travel experience.",
      image: PagesImage.blogimage4,
    },
    {
      id: 5,
      title: "Job Opportunities Abroad: Securing Sponsorship",
      desc: "Explore global job markets, find opportunities abroad, and understand the process of securing employer sponsorship.",
      image: PagesImage.blogimage5,
    },
    {
      id: 6,
      title: "Immigration Policies 2025: Key Updates & Changes",
      desc: "Stay informed about the latest immigration policy updates, new regulations, and significant changes for 2025.",
      image: PagesImage.blogimage6,
    },
    {
      id: 1,
      title: "Understanding Work Visas: A Complete Guide",
      desc: "Get a complete understanding of different types of work visas, eligibility requirements, and the application process.",
      image: PagesImage.blogimage1,
    },
  ];


  const { blogId } = useParams();
  const blogIdNumber = Number(blogId);

  const currentIndex = blogs.findIndex((blog) => blog.id === blogIdNumber);

  const nextBlogs = [];
  if (currentIndex === -1) {
    nextBlogs.push(...blogs.slice(0, 5));
  } else {
    for (let i = 1; i <= 5; i++) {
      nextBlogs.push(blogs[(currentIndex + i) % blogs.length]);
    }
  }


  return (
    <>

      {/* Section 1 */}
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


      {/* Section 2 */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-6">

          <div className="md:col-span-2">
            <img
              src={PagesImage.blogimage2}
              alt="Student Visa Process"
              className="w-full rounded-lg"
            />
            <div className="flex items-center mt-4 text-gray-600 text-sm">
              <span className="mr-2">👤 Johan Leo</span>
              <span>📅 12 August 2024</span>
            </div>
            <h1 className="text-3xl font-bold mt-4">
              Student Visa Process: Step-by-Step Application
            </h1>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Dreaming of studying abroad? Obtaining a student visa is a crucial step in your journey
              to international education. Whether you're aiming for the USA, Canada, UK, Australia, or
              another country, the process can seem complex. This guide simplifies it into clear,
              step-by-step instructions to help you get started.
            </p>

            <h2 className="text-2xl font-bold mt-6">Step 1: Choose Your Destination & Course</h2>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Before applying for a student visa, decide on the country and institution where you want to study.
              Research universities, programs, tuition fees, scholarships, and the visa requirements of your chosen destination.
            </p>

            <h2 className="text-2xl font-bold mt-6">Step 2: Secure Admission to a Recognized Institution</h2>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Most countries require you to have an official acceptance letter from a recognized university or college.
              Ensure you meet the admission requirements, such as academic qualifications, English language tests
              (IELTS, TOEFL, or equivalent), and other prerequisites.
            </p>

            <h2 className="text-2xl font-bold mt-6">Step 3: Gather Required Documents</h2>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Each country has specific document requirements for student visas. Generally, you’ll need:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mt-2">
              <li>Valid Passport (with at least six months validity)</li>
              <li>Letter of Acceptance from the university</li>
              <li>Proof of Sufficient Funds (bank statements, sponsorship letters)</li>
              <li>English Proficiency Test Scores (IELTS, TOEFL, PTE)</li>
              <li>Medical Examination & Health Insurance</li>
              <li>Statement of Purpose (SOP) explaining your study plans</li>
              <li>Visa Application Form & Fees</li>
            </ul>

            <h2 className="text-2xl font-bold mt-6">Step 4: Apply for Your Student Visa</h2>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Once you have all the documents, submit your student visa application through the
              embassy or consulate of your chosen country. Some countries allow online applications,
              while others require in-person submission.
            </p>

            <h2 className="text-2xl font-bold mt-6">Step 5: Attend the Visa Interview</h2>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Many countries require students to attend a visa interview. During the interview,
              the visa officer will ask about your study plans, financial stability, and post-study intentions.
              Be honest and confident while answering.
            </p>

            <h2 className="text-2xl font-bold mt-6">Step 6: Wait for Approval & Prepare for Travel</h2>
            <p className="text-gray-700 mt-4 leading-relaxed">
              After submitting your application, wait for visa processing. Once approved,
              review the visa details, book your flight, arrange accommodation, and familiarize
              yourself with the new country's rules and culture.
            </p>

            <h2 className="text-2xl font-bold mt-6">Final Thoughts</h2>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Applying for a student visa may seem challenging, but with proper planning,
              it can be a smooth process. Start early, follow the guidelines carefully,
              and soon, you’ll be on your way to an exciting academic journey abroad!
            </p>
          </div>

          {/* Sidebar */}

          <div>
            {/* Categories */}
            <div className="bg-gray-100 p-4 rounded-lg mb-6">
              <h2 className="text-lg font-bold mb-2">Categories</h2>
              <div className="flex p-1 flex-wrap gap-2">
                {[
                  'Dream Destinations',
                  'Settle Abroad',
                  'Work Without Borders',
                  'Your PR Journey',
                  'Smart Travel Hacks',
                  'Future of Immigration',
                  'Success Beyond Borders'
                ].map((category) => (
                  <span key={category} className="bg-[#1b6b9c] text-white hover:scale-105 cursor-pointer transition-all px-3 py-1 text-sm rounded-md">
                    {category}
                  </span>
                ))}
              </div>
            </div>
            {/* Tags */}
            <div className="bg-gray-100 p-4 rounded-lg mb-6">
              <h2 className="text-lg font-bold mb-2">Tags</h2>
              <div className="flex p-1 flex-wrap gap-2">
                {['Visa Guidance', 'Study Abroad', 'Work Permit', 'PR Process', 'Travel Tips', 'Immigration News', 'Success Stories'].map((tag) => (
                  <span key={tag} className="bg-[#1b6b9c] text-white hover:scale-105 cursor-pointer transition-all px-3 py-1 text-sm rounded-md">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            {/* Popular Blog */}


            <div className="bg-gray-100 p-4 rounded-lg">
              <h2 className="text-lg font-bold mb-2">Popular Blogs</h2>
              <div className="space-y-5">
                {nextBlogs.map((blog, index) => (
                  <Link to={`/blog/${blog.id}`} key={index} className="block">
                    <div className="flex hover:scale-105 cursor-pointer my-2 rounded transition-all hover:text-white hover:bg-[#064974] p-2 items-start gap-3">
                      <img src={blog.image} alt={blog.title} className="rounded-md max-w-24" />
                      <div>
                        <h3 className="text-sm font-semibold">{blog.title}</h3>
                        <p className="text-xs">{blog.desc}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>


          </div>
        </div>
      </div >

      {/* Section 3 */}
      < Comment ></Comment >
    </>
  )
}