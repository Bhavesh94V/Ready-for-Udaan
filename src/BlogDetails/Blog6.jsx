import React from 'react'
import Comment from './Comment';
import { Link, useParams } from 'react-router-dom';
import PagesImage from '../assets/imgs/Pages/PagesImage';

export default function Blog6() {

    const blogs = [
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
                            src={PagesImage.blogimage6}
                            alt="Immigration Policies 2025"
                            className="w-full rounded-lg"
                        />
                        <div className="flex items-center mt-4 text-gray-600 text-sm">
                            <span className="mr-2">👤 Johan Leo</span>
                            <span>📅 12 August 2024</span>
                        </div>
                        <h1 className="text-3xl font-bold mt-4">
                            Immigration Policies 2025: Key Updates & Changes
                        </h1>
                        <p className="text-gray-700 mt-4 leading-relaxed">
                            As countries worldwide adjust to evolving economic and labor market needs,
                            *immigration policies in 2025* are undergoing significant transformations.
                            Many nations are introducing new rules to attract skilled workers, streamline
                            visa processes, and address global migration challenges. Here’s a detailed
                            overview of the latest changes in key immigration policies worldwide.
                        </p>

                        <h2 className="text-2xl font-bold mt-6">1️⃣ United States: Streamlined Work Visas & Green Card Reforms</h2>
                        <p className="text-gray-700 mt-4 leading-relaxed">
                            The U.S. is implementing changes in its *H-1B visa program* and *Green Card backlog*:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mt-2">
                            <li>🇺🇸 *H-1B Visa* – Higher cap for STEM professionals & faster processing</li>
                            <li>📝 *Green Card Reforms* – Faster employment-based applications</li>
                            <li>💻 *Digital Nomad Visa* – New option for remote workers</li>
                            <li>🚀 *Startup Visa Initiative* – To attract global entrepreneurs</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-6">2️⃣ Canada: Expanding Express Entry & Work Permits</h2>
                        <p className="text-gray-700 mt-4 leading-relaxed">
                            Canada continues to *prioritize skilled immigration* with these updates:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mt-2">
                            <li>🇨🇦 *Express Entry Changes* – More invitations for healthcare & tech jobs</li>
                            <li>🎓 *Post-Graduation Work Permit* – Extended for key industries</li>
                            <li>🏡 *Family Sponsorship* – Faster processing for dependents</li>
                            <li>📈 *Provincial Nominee Programs (PNP)* – Increased allocations</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-6">3️⃣ United Kingdom: New Work Visa Categories</h2>
                        <p className="text-gray-700 mt-4 leading-relaxed">
                            The UK is updating its *Skilled Worker Visa* and introducing new routes:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mt-2">
                            <li>🇬🇧 *Salary Threshold Increase* – Higher requirements for work visas</li>
                            <li>📜 *Global Business Mobility Visa* – For international transfers</li>
                            <li>💼 *Shortage Occupation List Updates* – More sectors included</li>
                            <li>🚀 *Innovator Founder Visa* – Revised rules for startups</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-6">4️⃣ Australia: Fast-Track PR for Skilled Workers</h2>
                        <p className="text-gray-700 mt-4 leading-relaxed">
                            Australia is making it easier for high-demand professionals to get permanent residency:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mt-2">
                            <li>🇦🇺 *Global Talent Visa* – More priority occupations added</li>
                            <li>📅 *482 Visa Changes* – Direct PR pathway for key workers</li>
                            <li>🌟 *Points-Based System* – More points for regional work</li>
                            <li>💻 *Tech Industry Visas* – Special incentives for IT professionals</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-6">5️⃣ Germany & EU: Simplifying Work & Student Visas</h2>
                        <p className="text-gray-700 mt-4 leading-relaxed">
                            Germany and other European nations are *modernizing their visa policies*:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mt-2">
                            <li>🇩🇪 *EU Blue Card Expansion* – Lower salary requirements</li>
                            <li>📚 *Student Visa Flexibility* – Easier transition to work visas</li>
                            <li>🌍 *Schengen Visa Updates* – Faster approval for frequent travelers</li>
                            <li>🏢 *Job Seeker Visa* – Extended duration & relaxed eligibility</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-6">6️⃣ Digital Nomad & Remote Work Visas on the Rise</h2>
                        <p className="text-gray-700 mt-4 leading-relaxed">
                            More countries are introducing *remote work visas* to attract digital nomads:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mt-2">
                            <li>🌴 *Portugal & Spain* – Long-term remote work visas available</li>
                            <li>🏝 *Bali & Thailand* – Special digital nomad visa programs</li>
                            <li>💻 *Dubai & Estonia* – Strong infrastructure for remote workers</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-6">Final Thoughts</h2>
                        <p className="text-gray-700 mt-4 leading-relaxed">
                            Immigration policies in *2025* are evolving to meet global workforce demands
                            while balancing security and economic needs. Whether you're a skilled worker,
                            student, or digital nomad, staying updated with these changes can help you
                            navigate your immigration journey smoothly. 🌎✈
                            *Plan ahead and explore your options today!*
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