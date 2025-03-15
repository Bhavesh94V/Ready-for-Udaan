import React from 'react'
import Comment from './Comment';
import { Link, useParams } from 'react-router-dom';
import PagesImage from '../assets/imgs/Pages/PagesImage';

export default function Blog4() {

    const blogs = [

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
        {
            id: 3,
            title: "How to Apply for a Permanent Residency",
            desc: "Learn about the eligibility criteria, required documents, and the application process for obtaining permanent residency.",
            image: PagesImage.blogimage3,
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

                                <span classZName="text-white">/ Blog </span>
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
                            src={PagesImage.blogimage4}
                            alt="Visitor Visa Tips"
                            className="w-full rounded-lg"
                        />
                        <div className="flex items-center mt-4 text-gray-600 text-sm">
                            <span className="mr-2">👤 Johan Leo</span>
                            <span>📅 12 August 2024</span>
                        </div>
                        <h1 className="text-3xl font-bold mt-4">
                            Visitor Visa Tips: Hassle-Free Travel Planning
                        </h1>
                        <p className="text-gray-700 mt-4 leading-relaxed">
                            Traveling to a new country is exciting, but securing a visitor visa can sometimes feel overwhelming.
                            Whether you’re visiting for tourism, business, or family reasons, proper preparation ensures a smooth
                            and stress-free visa approval process. Here’s everything you need to know to get your visitor visa
                            without hassle.
                        </p>

                        <h2 className="text-2xl font-bold mt-6">1️⃣ Understand Visa Requirements</h2>
                        <p className="text-gray-700 mt-4 leading-relaxed">
                            Each country has different visitor visa rules. Some nations require pre-approved visas, while others
                            offer visa-on-arrival or electronic travel authorizations (ETAs).
                            Before applying, check:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mt-2">
                            <li>✔ Visa validity & duration</li>
                            <li>✔ Allowed activities (tourism, business, family visits)</li>
                            <li>✔ Processing times & fees</li>
                            <li>✔ Special entry restrictions</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-6">2️⃣ Gather Required Documents</h2>
                        <p className="text-gray-700 mt-4 leading-relaxed">
                            A complete application reduces the chances of rejection. Common documents include:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mt-2">
                            <li>🔹 Valid passport (with at least 6 months validity)</li>
                            <li>🔹 Completed visa application form</li>
                            <li>🔹 Recent passport-sized photographs</li>
                            <li>🔹 Travel itinerary (flight & hotel bookings)</li>
                            <li>🔹 Proof of financial means (bank statements, tax returns)</li>
                            <li>🔹 Invitation letter (if visiting family/friends)</li>
                            <li>🔹 Employment or business proof (for business travelers)</li>
                            <li>🔹 Travel insurance (some countries require it)</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-6">3️⃣ Apply for the Visa Early</h2>
                        <p className="text-gray-700 mt-4 leading-relaxed">
                            Visa processing times vary by country and season. Apply at least *4-8 weeks in advance* to avoid
                            last-minute delays. Some embassies offer express processing for urgent travel, but it comes with
                            additional fees.
                        </p>

                        <h2 className="text-2xl font-bold mt-6">4️⃣ Be Honest & Consistent</h2>
                        <p className="text-gray-700 mt-4 leading-relaxed">
                            Many visa rejections happen due to inconsistencies in the application. Ensure:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mt-2">
                            <li>✅ All information is accurate and matches your documents.</li>
                            <li>✅ Your reason for travel is clearly stated.</li>
                            <li>✅ You have no previous immigration violations.</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-6">5️⃣ Show Strong Ties to Your Home Country</h2>
                        <p className="text-gray-700 mt-4 leading-relaxed">
                            Visa officers need to be sure that you *intend to return* after your trip.
                            Strong home ties may include:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mt-2">
                            <li>🏠 Proof of property ownership</li>
                            <li>💼 A stable job or business</li>
                            <li>👨‍👩‍👧‍👦 Family obligations</li>
                            <li>📚 Ongoing education</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-6">6️⃣ Prepare for the Visa Interview (If Required)</h2>
                        <p className="text-gray-700 mt-4 leading-relaxed">
                            Some countries, like the *USA and Canada*, require an interview for visitor visa applicants.
                            To increase your chances of approval:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mt-2">
                            <li>🔹 Answer questions confidently and truthfully.</li>
                            <li>🔹 Clearly explain your reason for travel and return plans.</li>
                            <li>🔹 Avoid giving unnecessary details that may complicate your case.</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-6">7️⃣ Check Your Visa for Accuracy</h2>
                        <p className="text-gray-700 mt-4 leading-relaxed">
                            Once your visa is approved, double-check all details, including:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mt-2">
                            <li>📆 Visa validity dates</li>
                            <li>🛂 Number of entries allowed</li>
                            <li>🏷 Correct spelling of your name & passport number</li>
                        </ul>
                        <p className="text-gray-700 mt-4 leading-relaxed">
                            Any errors should be reported to the embassy *before traveling*.
                        </p>

                        <h2 className="text-2xl font-bold mt-6">8️⃣ Travel Smart & Follow Visa Rules</h2>
                        <p className="text-gray-700 mt-4 leading-relaxed">
                            Even after receiving a visa, immigration officers at the airport have the
                            final say on your entry. Make sure to:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mt-2">
                            <li>✔ Carry all necessary documents (return tickets, proof of accommodation).</li>
                            <li>✔ Be respectful and cooperative at immigration checkpoints.</li>
                            <li>✔ Follow visa conditions (avoid overstaying or working illegally).</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-6">Final Thoughts</h2>
                        <p className="text-gray-700 mt-4 leading-relaxed">
                            A visitor visa is your ticket to exploring new destinations, reuniting
                            with loved ones, or attending important events abroad. By following
                            these steps, you can ensure a smooth and hassle-free visa process.
                            *Plan ahead, stay organized, and enjoy your journey!* ✈🌍
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

            {/* Section */}
            < Comment ></Comment >
        </>
    )
}