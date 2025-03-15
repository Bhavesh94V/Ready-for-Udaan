import React from "react";
import "../assets/styles/Blog.css";
import img1 from '../assets/imgs/Blog/blogimage1.png'
import img2 from '../assets/imgs/Blog/blogimage2.png'
import img3 from '../assets/imgs/Blog/blogimage3.jpg'
import { Link } from "react-router-dom";

const blogPosts = [
    {
        img: img1,
        date: "15 JAN",
        title: "Udaan: Your Global Journey",
        description:
            "Step into a world of global opportunities with expert guidance for studying abroad. Secure your future with the right choices.",
        link: "/Blog/1",
    },
    {
        img: img2,
        date: "20 FEB",
        title: "Udaan: Future Begins Here",
        description:
            "Unlock career growth with top international education and expert visa assistance. Start your journey towards success today.",
        link: "/Blog/2",
    },
    {
        img: img3,
        date: "05 JUN",
        title: "Udaan: Dream, Apply, Fly",
        description:
            "Navigate your study abroad journey smoothly with trusted guidance and support. Make your dreams a reality with Udaan.",
        link: "/Blog/3",
    },
];

export default function Blog() {
    return (
        <div className="blog-container">
            <h1 className="blog-main-title mb-4">News Updates</h1>
            <h2 className="blog-title mb-5">Latest Blog Posts</h2>
            <div className="blog-grid">
                {blogPosts.map((blog, index) => (
                    <div key={index} className="blog-card">
                        <div className="blog-img-container">
                            <img src={blog.img} alt={blog.title} className="blog-img" />
                            <div className="blog-date">{blog.date}</div>
                        </div>
                        <div className="blog-content">
                            <h3 className="blog-heading">{blog.title}</h3>
                            <p className="blog-description">{blog.description}</p>
                            <hr />
                            <Link to={blog.link} className="blog-readmore">
                                Read More →
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}