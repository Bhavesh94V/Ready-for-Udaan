import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import LogosSection from '../components/LogosSection ';

export default function EmailForm() {
    const [contactData, setContactData] = useState({ fullname: '', email: '', message: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        if (error || success) {
            const timer = setTimeout(() => {
                setError('');
                setSuccess('');
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [error, success]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContactData((prev) => ({ ...prev, [name]: value }));
    };

    const validateForm = () => {
        if (!contactData.fullname.trim() || !contactData.email.trim() || !contactData.message.trim()) {
            setError('All fields are required.');
            return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactData.email)) {
            setError('Invalid email address.');
            return false;
        }
        return true;
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!validateForm()) return;

        setLoading(true);
        const templateParams = {
            to_name: 'Bhavesh Vishwakarma',
            from_name: contactData.fullname,
            user_email: contactData.email,
            reply_to: contactData.email,
            message: contactData.message
        };

        try {
            await emailjs.send('service_3yis346', 'template_xkl1rdv', templateParams, 'L8GmcYhOcLNhacDJz');
            setSuccess('Message sent successfully!');
            setContactData({ fullname: '', email: '', message: '' });
        } catch (err) {
            setError('Failed to send message. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <LogosSection></LogosSection>
            <div className="flex justify-center items-center p-4">

                <div className="bg-[#064974] p-8 rounded-2xl shadow-lg w-full text-center">

                    <h2 className="text-3xl font-bold text-white">Have other questions?</h2>
                    <p className="text-gray-100 mb-6">Our agents will get back to you within 24 hours.</p>

                    <div className='pb-3'>
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        {success && <p className="text-green-500 text-sm">{success}</p>}
                    </div>

                    <form onSubmit={sendEmail} className="space-y-4 max-w-[80%] mx-auto">

                        <div className="flex space-x-4">

                            <input
                                type="text"
                                name="fullname"
                                placeholder="Full name*"
                                value={contactData.fullname}
                                onChange={handleChange}
                                className="w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email*"
                                value={contactData.email}
                                onChange={handleChange}
                                className="w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />

                        </div>

                        <textarea
                            name="message"
                            placeholder="Message"
                            value={contactData.message}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        ></textarea>

                        <p className="text-sm text-gray-300">We care about your data in our <a href="#" className="text-[#06A3DA] underline">privacy policy</a>.</p>

                        <button
                            type="submit"
                            className="w-full bg-[#1b6b9c] text-white py-3 rounded-lg font-semibold hover:bg-[#06A3DA] transition disabled:opacity-50"
                            disabled={loading}
                        >
                            {loading ? 'Sending...' : 'Send Question'}
                        </button>

                    </form>

                </div>

            </div>
        </>
    );
}
