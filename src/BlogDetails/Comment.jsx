import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, addDoc, onSnapshot, query, orderBy, doc, deleteDoc } from 'firebase/firestore';

export default function Comment() {
    const [comments, setComments] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');

    useEffect(() => {
        const urlParts = window.location.pathname.split('/');
        const blogId = urlParts[urlParts.length - 1];

        const q = query(collection(db, 'comments'), orderBy("date", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const updatedComments = snapshot.docs
                .map(doc => ({ id: doc.id, ...doc.data() }))
                .filter(comment => comment.blogId === blogId);

            setComments(updatedComments);
            localStorage.setItem("comments", JSON.stringify(updatedComments));
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const savedComments = localStorage.getItem("comments");
        if (savedComments) {
            setComments(JSON.parse(savedComments));
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email || !text) return alert('All fields are required');

        const urlParts = window.location.pathname.split('/');
        const blogId = urlParts[urlParts.length - 1];

        await addDoc(collection(db, 'comments'), {
            blogId,
            name,
            email,
            text,
            date: new Date().toISOString()
        });

        setName('');
        setEmail('');
        setText('');
    };

    return (
        <div className="max-w-7xl mx-auto px-6 py-10">
            <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                    <h1 className="text-3xl font-bold text-primary-blue">Comments</h1>

                    {/* Comment List */}
                    <div className="mt-6 space-y-4">
                        {comments.map((comment) => (
                            <div key={comment.id} className="bg-gray-50 p-5 rounded-lg shadow-md">
                                <div className="flex justify-between items-center">
                                    <h3 className="font-semibold text-primary-blue">{comment.name}</h3>
                                    <p className="text-sm text-gray-500">
                                        {new Date(comment.date).toLocaleDateString()}
                                    </p>
                                </div>
                                <p className="text-gray-700 mt-2">{comment.text}</p>
                            </div>
                        ))}
                    </div>

                    {/* Comment Form */}
                    <div className="mt-10">
                        <h2 className="text-2xl font-semibold text-primary-blue">Leave A Comment</h2>
                        <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-lg shadow-md mt-4">
                            <div className="mb-4">
                                <label className="block font-medium text-gray-700">Your Name</label>
                                <input
                                    type="text"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:outline-none"
                                    placeholder="Enter your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block font-medium text-gray-700">Your Email</label>
                                <input
                                    type="email"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:outline-none"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block font-medium text-gray-700">Comment</label>
                                <textarea
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:outline-none"
                                    placeholder="Write your comment..."
                                    rows="4"
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-[#1b6b9c] text-white px-6 py-3 rounded-lg font-semibold tracking-wide hover:bg-primary-blue-hover transition-all duration-300"
                            >
                                POST COMMENT
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}