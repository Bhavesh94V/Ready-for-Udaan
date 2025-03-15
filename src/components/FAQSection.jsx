import { useState } from "react";
import { Search, ChevronDown, X, MessageCircleQuestion } from "lucide-react";
import { motion } from "framer-motion";

export default function FAQSection() {
    const [searchQuery, setSearchQuery] = useState("");
    const [expandedItem, setExpandedItem] = useState(null);
    const [activeCategory, setActiveCategory] = useState("all");

    const categories = [
        { id: "all", name: "All Questions" },
        { id: "services", name: "Our Services" },
        { id: "process", name: "Working Process" },
        { id: "pricing", name: "Pricing & Terms" },
    ];

    const faqs = [
        // Services Category
        { id: 1, question: "What services does your consultancy offer?", answer: "We provide expert guidance for visa applications, PR, work permits, and study abroad programs.", category: "services" },
        { id: 2, question: "Do you help with student visas?", answer: "Yes, we assist students with admission guidance, visa filing, and interview preparation.", category: "services" },
        { id: 3, question: "Can you help with work permits?", answer: "Absolutely! We help professionals apply for work permits and job seeker visas globally.", category: "services" },
        { id: 4, question: "Do you assist with permanent residency applications?", answer: "Yes, we guide applicants through PR processes like Express Entry and PNP programs.", category: "services" },

        // Pricing Category
        { id: 5, question: "How do you charge for your services?", answer: "Our pricing varies based on the service type, country, and complexity of the case.", category: "pricing" },
        { id: 6, question: "Do you offer installment payment options?", answer: "Yes, we provide flexible installment plans for eligible clients.", category: "pricing" },
        { id: 7, question: "Are there any hidden charges?", answer: "No, we maintain complete transparency in our pricing with no hidden fees.", category: "pricing" },
        { id: 8, question: "Do you offer a refund if my visa is rejected?", answer: "Refund policies depend on the service agreement; some fees may be non-refundable.", category: "pricing" },

        // Process Category
        { id: 9, question: "How long does the immigration process take?", answer: "Processing times vary based on visa type, country, and individual case complexity.", category: "process" },
        { id: 10, question: "What documents are required for visa applications?", answer: "Common documents include passports, educational credentials, financial proofs, and work experience letters.", category: "process" },
        { id: 11, question: "Can you speed up the application process?", answer: "We ensure timely submission and proper documentation, but processing speed depends on authorities.", category: "process" },
        { id: 12, question: "What happens if my visa application is refused?", answer: "We analyze the rejection reasons and provide guidance on reapplication or appeal options.", category: "process" },

        // Remote Services Category
        { id: 13, question: "Do you offer remote consultation?", answer: "Yes, we provide online consultations via video calls, emails, and chat support.", category: "remote services" },
        { id: 14, question: "Can I apply for a visa without visiting your office?", answer: "Absolutely! Our entire process can be handled remotely, including document submission and guidance.", category: "remote services" },
        { id: 15, question: "How do I contact your team for support?", answer: "You can reach us via email, WhatsApp, or phone during our business hours.", category: "remote services" },
        { id: 16, question: "Do you assist clients outside India?", answer: "Yes, we help clients worldwide with their immigration and visa needs.", category: "remote services" }
    ];


    const filteredFaqs = faqs
        .filter((faq) =>
            (activeCategory === "all" || faq.category === activeCategory) &&
            (searchQuery === "" || faq.question.toLowerCase().includes(searchQuery.toLowerCase()))
        )
        .slice(0, activeCategory === "all" ? 6 : faqs.length); // "all" me max 6 dikhaye


    const toggleAccordion = (id) => {
        setExpandedItem((prev) => (prev === id ? null : id));
    };

    return (
        <div className="max-w-5xl mx-auto py-16 px-4">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-[#064974] relative inline-block">
                    Frequently Asked Questions
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-text-blue -translate-y-2"></span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Find answers to common questions about our consultancy services, process, and pricing.
                </p>
            </div>

            <div className="mb-10 relative flex items-center">
                <Search className="absolute left-3 text-gray-400" size={20} />
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for answers..."
                    className="pl-10 pr-10 py-3 border-2 border-gray-200 focus:border-text-blue focus:ring-1 focus:ring-text-blue rounded-xl text-lg w-full"
                />
                {searchQuery && (
                    <button
                        className="absolute right-3 text-gray-400 hover:text-gray-600"
                        onClick={() => setSearchQuery("")}
                    >
                        <X size={20} />
                    </button>
                )}
            </div>

            <div className="flex flex-wrap gap-2 mb-8 justify-center">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        className={`px-6 py-2 transition-all rounded-full border-2 ${activeCategory === category.id
                            ? "bg-[#064974] text-white border-[#1b6b9c] border"
                            : "border-gray-200 hover:border-text-blue hover:text-text-blue"
                            }`}
                        onClick={() => setActiveCategory(category.id)}
                    >
                        {category.name}
                    </button>
                ))}
            </div>

            {
                filteredFaqs.length > 0 ? (
                    <div className="grid gap-4 md:grid-cols-1">
                        {
                            filteredFaqs.map((faq) => (
                                <motion.div
                                    key={faq.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-white rounded-xl shadow-md hover:shadow-lg border-l-4 border-[#06a3da]"
                                >
                                    <div
                                        className={`py-4 px-5 cursor-pointer ${expandedItem === faq.id ? "bg-[#064974] rounded-t-lg text-white" : ""}`}
                                        onClick={() => toggleAccordion(faq.id)}
                                    >
                                        <div className="flex justify-between items-center">
                                            <h3 className="font-semibold text-lg flex items-center">
                                                <MessageCircleQuestion className="text-blue mr-2" size={20} />
                                                {faq.question}
                                            </h3>
                                            <ChevronDown
                                                className={`text-text-blue transition-transform ${expandedItem === faq.id ? "rotate-180" : ""}`}
                                                size={20}
                                            />
                                        </div>
                                    </div>
                                    {expandedItem === faq.id && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="text-gray-600 border-t py-4 px-5">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </motion.div>
                            ))
                        }
                    </div>
                ) : (
                    <div className="text-center py-12 bg-gray-50 rounded-xl border border-gray-200">
                        <MessageCircleQuestion className="mx-auto text-text-blue mb-4" size={40} />
                        <h4 className="text-xl font-medium text-gray-700">No questions found</h4>
                        <p className="text-gray-500">Try changing your search or selecting a different category.</p>
                    </div>
                )
            }
        </div>
    );
}
