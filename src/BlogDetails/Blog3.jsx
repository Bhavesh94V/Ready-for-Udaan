import React from 'react'
import Comment from './Comment';
import { Link, useParams } from 'react-router-dom';
import PagesImage from '../assets/imgs/Pages/PagesImage';

export default function Blog3() {

  const blogs = [
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
    {
      id: 2,
      title: "Student Visa Process: Step-by-Step Application",
      desc: "A comprehensive step-by-step guide to help students successfully apply for study visas abroad.",
      image: PagesImage.blogimage2,
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
              src={PagesImage.blogimage3}
              alt="Permanent Residency"
              className="w-full rounded-lg"
            />
            <div className="flex items-center mt-4 text-gray-600 text-sm">
              <span className="mr-2">👤 Johan Leo</span>
              <span>📅 12 August 2024</span>
            </div>
            <h1 className="text-3xl font-bold mt-4">
              How to Apply for a Permanent Residency
            </h1>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Securing Permanent Residency (PR) is a significant step towards
              building a stable future in a new country. It provides long-term
              legal status, work opportunities, and access to various benefits
              such as healthcare, education, and social security. This guide
              will help you understand the PR application process step by step.
            </p>

            <h2 className="text-2xl font-bold mt-6">Step 1: Choose Your Destination & PR Program</h2>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Different countries have unique pathways for PR, such as:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mt-2">
              <li>🇨🇦 Canada – Express Entry, Provincial Nominee Program (PNP), Family Sponsorship</li>
              <li>🇦🇺 Australia – Skilled Migration, Partner Visa, Employer Nomination Scheme</li>
              <li>🇺🇸 USA – Green Card through Employment, Family Sponsorship, Diversity Visa Lottery</li>
              <li>🇬🇧 UK – Indefinite Leave to Remain (ILR) via Work, Family, or Investment</li>
            </ul>

            <h2 className="text-2xl font-bold mt-6">Step 2: Check Eligibility Criteria</h2>
            <p className="text-gray-700 mt-4 leading-relaxed">
              PR eligibility depends on factors like age, work experience,
              education, language proficiency, and family ties. Some programs
              use a points-based system, while others require employer or family
              sponsorship. Research your chosen country's criteria before applying.
            </p>

            <h2 className="text-2xl font-bold mt-6">Step 3: Gather Required Documents</h2>
            <p className="text-gray-700 mt-4 leading-relaxed">
              To apply for PR, you typically need:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mt-2">
              <li>Valid Passport</li>
              <li>Educational Credentials (Degree Certificates, ECA for Canada)</li>
              <li>Proof of Work Experience (Employment Letters, Pay Slips)</li>
              <li>Language Proficiency Test (IELTS, TOEFL, PTE, etc.)</li>
              <li>Medical Examination & Police Clearance Certificate</li>
              <li>Proof of Funds (Bank Statements, Tax Returns)</li>
            </ul>

            <h2 className="text-2xl font-bold mt-6">Step 4: Submit Your PR Application</h2>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Depending on the country, you can apply online or through a
              visa office. Ensure all documents are accurate and properly
              submitted to avoid delays or rejections.
            </p>

            <h2 className="text-2xl font-bold mt-6">Step 5: Attend Biometrics & Interviews (If Required)</h2>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Some countries may require biometric data (fingerprints, photographs)
              or an in-person interview to verify your eligibility and intent.
            </p>

            <h2 className="text-2xl font-bold mt-6">Step 6: Wait for PR Decision & Receive Your Residency</h2>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Processing times vary by country and program, ranging from
              months to years. Once approved, you’ll receive a PR card or
              document granting you permanent resident status.
            </p>

            <h2 className="text-2xl font-bold mt-6">Step 7: Maintain PR Status & Apply for Citizenship</h2>
            <p className="text-gray-700 mt-4 leading-relaxed">
              To keep your PR status, you must follow residency requirements,
              such as living in the country for a certain number of days each year.
              After a few years, you may become eligible to apply for citizenship.
            </p>

            <h2 className="text-2xl font-bold mt-6">Final Thoughts</h2>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Obtaining Permanent Residency is a life-changing decision that
              offers stability, better career opportunities, and a brighter
              future. Start your application today and take one step closer
              to your dream country!
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

      <Comment></Comment>
    </>
  )
}