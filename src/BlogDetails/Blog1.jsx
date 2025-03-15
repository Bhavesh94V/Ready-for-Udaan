import React from 'react'
import Comment from './Comment';
import { Link, useParams } from 'react-router-dom';
import PagesImage from '../assets/imgs/Pages/PagesImage';

export default function Blog1() {

  const blogs = [
    {
      id: 2,
      title: "Student Visa Process: Step-by-Step Application",
      desc: "A comprehensive step-by-step guide to help students successfully apply for study visas abroad.",
      image: PagesImage.blogimage2,
    },
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
  ];


  const { blogId } = useParams();
  const blogIdNumber = Number(blogId); // Convert string to number

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
              src={PagesImage.blogimage1}
              alt="Work Visa Guide"
              className="w-full rounded-lg"
            />
            <div className="flex items-center mt-4 text-gray-600 text-sm">
              <span className="mr-2">👤 Johan Leo</span>
              <span>📅 12 August 2024</span>
            </div>
            <h1 className="text-3xl font-bold mt-4">
              Understanding Work Visas: A Complete Guide
            </h1>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Planning to work abroad? A work visa is your key to unlocking global career opportunities.
              Whether you're eyeing a tech job in Canada, a finance role in the UK, or hospitality work in Australia,
              understanding the visa process is crucial. This guide will walk you through everything you need to know about obtaining a work visa.
            </p>

            <h2 className="text-2xl font-bold mt-6">What is a Work Visa?</h2>
            <p className="text-gray-700 mt-4 leading-relaxed">
              A work visa is an official document issued by a country’s government that permits foreign nationals
              to work legally within its borders. Work visas vary based on duration, employer sponsorship, and
              job type, and they often require specific qualifications.
            </p>

            <h2 className="text-2xl font-bold mt-6">Types of Work Visas</h2>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Depending on your destination, there are different types of work visas:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mt-2">
              <li><strong>Skilled Worker Visa</strong> – For professionals with specialized skills (e.g., tech, healthcare).</li>
              <li><strong>Temporary Work Visa</strong> – For short-term employment or seasonal jobs.</li>
              <li><strong>Employer-Sponsored Visa</strong> – When a company hires and sponsors your visa.</li>
              <li><strong>Entrepreneur Visa</strong> – For individuals planning to start a business abroad.</li>
              <li><strong>Freelancer or Digital Nomad Visa</strong> – For remote workers and self-employed professionals.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-6">How to Apply for a Work Visa</h2>
            <p className="text-gray-700 mt-4 leading-relaxed">
              While the process may vary by country, the general steps include:
            </p>
            <ol className="list-decimal pl-6 text-gray-700 mt-2">
              <li><strong>Find a job offer</strong> – Many countries require employer sponsorship.</li>
              <li><strong>Check eligibility</strong> – Ensure you meet work experience, education, and skill requirements.</li>
              <li><strong>Gather documents</strong> – Passport, job contract, qualification proofs, medical records, etc.</li>
              <li><strong>Submit your application</strong> – Online or at the respective consulate/embassy.</li>
              <li><strong>Attend visa interview</strong> – Some countries require an interview for verification.</li>
              <li><strong>Wait for approval</strong> – Processing time varies from weeks to months.</li>
            </ol>

            <h2 className="text-2xl font-bold mt-6">Top Countries for Work Visas</h2>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Some of the best countries offering work opportunities and streamlined visa processes include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mt-2">
              <li>🇨🇦 *Canada* – Express Entry, Global Talent Stream</li>
              <li>🇺🇸 *USA* – H-1B Visa, L-1 Visa</li>
              <li>🇦🇺 *Australia* – Skilled Worker Visa, TSS Visa</li>
              <li>🇬🇧 *UK* – Skilled Worker Visa, Health & Care Visa</li>
              <li>🇩🇪 *Germany* – Job Seeker Visa, Blue Card</li>
            </ul>

            <h2 className="text-2xl font-bold mt-6">Final Thoughts</h2>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Getting a work visa can be a game-changer for your career, opening doors to global opportunities.
              Make sure to research country-specific requirements and prepare your documents in advance.
              If you’re ready to take the leap, start your application today!
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

      < Comment ></Comment >
    </>
  )
}