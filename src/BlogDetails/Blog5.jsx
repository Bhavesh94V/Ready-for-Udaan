import React from 'react'
import Comment from './Comment';
import { Link, useParams } from 'react-router-dom';
import PagesImage from '../assets/imgs/Pages/PagesImage';

export default function Blog5() {

    const blogs = [

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
        {
            id: 4,
            title: "Visitor Visa Tips: Hassle-Free Travel Planning",
            desc: "Expert advice and key tips to ensure a smooth and successful visitor visa application and travel experience.",
            image: PagesImage.blogimage4,
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
                            src={PagesImage.blogimage5}
                            alt="Job Opportunities Abroad"
                            className="w-full rounded-lg"
                        />
                        <div className="flex items-center mt-4 text-gray-600 text-sm">
                            <span className="mr-2">👤 Johan Leo</span>
                            <span>📅 12 August 2024</span>
                        </div>
                        <h1 className="text-3xl font-bold mt-4">
                            Job Opportunities Abroad: Securing Sponsorship
                        </h1>
                        <p className="text-gray-700 mt-4 leading-relaxed">
                            Working abroad is a dream for many, offering better career prospects,
                            higher salaries, and a chance to experience different cultures. However,
                            securing a *job with visa sponsorship* can be challenging.
                            This guide will help you understand the process and increase your chances
                            of landing a sponsored job abroad.
                        </p>

                        <h2 className="text-2xl font-bold mt-6">1️⃣ Research Countries That Offer Sponsored Work Visas</h2>
                        <p className="text-gray-700 mt-4 leading-relaxed">
                            Some countries actively *hire foreign workers* and provide visa sponsorship.
                            Research the best options based on your skills and profession.
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mt-2">
                            <li>🇺🇸 USA – H-1B Visa (Skilled workers), L-1 Visa (Intra-company transfers)</li>
                            <li>🇬🇧 UK – Skilled Worker Visa, Global Talent Visa</li>
                            <li>🇨🇦 Canada – Express Entry, LMIA-based Work Permits</li>
                            <li>🇦🇺 Australia – Employer-Sponsored Visas (482, 186, 494)</li>
                            <li>🇩🇪 Germany – EU Blue Card for skilled professionals</li>
                            <li>🇳🇿 New Zealand – Accredited Employer Work Visa</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-6">2️⃣ Find Employers Offering Visa Sponsorship</h2>
                        <p className="text-gray-700 mt-4 leading-relaxed">
                            Not all companies sponsor work visas. Focus on organizations actively hiring
                            foreign talent. You can find these employers through:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mt-2">
                            <li>💼 *Job Portals* – LinkedIn, Indeed, Glassdoor, WorkAbroad</li>
                            <li>📌 *Government Websites* – Skilled migration portals</li>
                            <li>🎯 *Recruitment Agencies* – Specializing in international hires</li>
                            <li>🏢 *Company Career Pages* – Directly apply to global companies</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-6">3️⃣ Build an International-Friendly Resume & Cover Letter</h2>
                        <p className="text-gray-700 mt-4 leading-relaxed">
                            Your resume should be *optimized for global job markets* and highlight skills
                            that make you a strong candidate for sponsorship.
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mt-2">
                            <li>✔ Use *ATS-friendly formatting* (Applicant Tracking System)</li>
                            <li>✔ Highlight *in-demand skills & certifications*</li>
                            <li>✔ Mention *willingness to relocate* and visa status</li>
                            <li>✔ Include *professional experience in global companies* (if any)</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-6">4️⃣ Apply for Jobs with a Strong Strategy</h2>
                        <p className="text-gray-700 mt-4 leading-relaxed">
                            To increase your chances of securing a sponsored job, follow these strategies:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mt-2">
                            <li>📬 Apply to *jobs that specifically mention visa sponsorship*</li>
                            <li>🤝 Network with *expats & professionals in your field*</li>
                            <li>🎓 Improve your *language proficiency* (IELTS, TOEFL, etc.)</li>
                            <li>🌟 Gain *international certifications* relevant to your industry</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-6">5️⃣ Prepare for Sponsorship Interviews</h2>
                        <p className="text-gray-700 mt-4 leading-relaxed">
                            If an employer is considering sponsoring your visa, they will ask
                            additional questions about your relocation plans. Be prepared for:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mt-2">
                            <li>✅ Why do you want to work in [Country Name]?</li>
                            <li>✅ Do you understand the visa sponsorship process?</li>
                            <li>✅ How soon can you relocate?</li>
                            <li>✅ Will you need assistance with family relocation?</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-6">6️⃣ Explore Alternative Pathways</h2>
                        <p className="text-gray-700 mt-4 leading-relaxed">
                            If direct sponsorship is difficult, consider alternative methods:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mt-2">
                            <li>🎓 *Study & Work* – Student visa with work rights</li>
                            <li>💼 *Internships & Trainee Programs* – Can lead to sponsorship</li>
                            <li>📑 *Freelance or Remote Work Visas* – Some countries offer these</li>
                            <li>🏠 *Family or Spouse Sponsorship* – If you have a spouse abroad</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-6">7️⃣ Stay Updated on Immigration Policies</h2>
                        <p className="text-gray-700 mt-4 leading-relaxed">
                            Work visa policies frequently change. Stay informed by:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mt-2">
                            <li>📰 Following *official immigration websites*</li>
                            <li>📢 Joining *expat & job seeker communities*</li>
                            <li>📅 Attending *job fairs & visa webinars*</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-6">Final Thoughts</h2>
                        <p className="text-gray-700 mt-4 leading-relaxed">
                            Landing a *sponsored job abroad* requires patience, persistence, and
                            strategic planning. By focusing on the right countries, networking
                            effectively, and optimizing your applications, you can increase
                            your chances of securing a dream job overseas. 🌎💼
                            *Start your journey today!*
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