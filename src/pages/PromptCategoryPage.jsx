import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getPromptsByCategory } from '../services/promptApi';

// --- ICONS & LOGOS ---
const Icons = {
    rocket: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    ),
    chart: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>
    ),
    pen: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
    ),
    cart: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
    ),
    mail: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    ),
    briefcase: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    ),
    default: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    )
};

// --- SUB-COMPONENT: DYNAMIC HERO ---
const CategoryHero = ({ category }) => {
    const icon = Icons[category.iconKey] || Icons.default;

    return (
        <section className="relative pt-32 pb-12 px-4 md:px-6 lg:px-8">
            {/* Centered Box Container */}
            <div className="max-w-[1280px] mx-auto bg-[#0a0a0a] rounded-[2rem] border border-gray-800 shadow-2xl overflow-hidden relative text-white">

                {/* Subtle Background Gradients */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] opacity-40 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px] opacity-40 pointer-events-none"></div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8 md:p-12 lg:p-16 relative z-10">

                    {/* Left: Text Content */}
                    <div className="flex flex-col gap-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit backdrop-blur-sm"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                            <span className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                                Updated for 2025
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-[1.1] tracking-tight"
                        >
                            {category.title} <br />
                            <span className="text-gray-500">Playbook</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-gray-400 max-w-lg leading-relaxed"
                        >
                            {category.description}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap gap-2 text-sm text-gray-500 font-medium pt-2"
                        >
                            <span className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5">Strategy</span>
                            <span className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5">Execution</span>
                            <span className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5">Growth</span>
                        </motion.div>
                    </div>

                    {/* Right: THE NEW "SPEC CARD" DESIGN */}
                    <div className="relative h-[400px] flex items-center justify-center">

                        <motion.div
                            initial={{ opacity: 0, y: 40, rotateX: 10 }}
                            animate={{ opacity: 1, y: 0, rotateX: 0 }}
                            transition={{ duration: 0.8, type: "spring" }}
                            whileHover={{ y: -5, transition: { duration: 0.3 } }}
                            className="w-full max-w-sm bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl relative group"
                        >
                            {/* 1. Card Header */}
                            <div className="flex items-start justify-between mb-8">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-500">
                                    {icon}
                                </div>
                                <div className="text-right">
                                    <div className="text-xs text-gray-400 font-mono uppercase tracking-widest mb-1">Total Prompts</div>
                                    <div className="text-2xl font-bold text-white">{category.promptCount || '10+'}</div>
                                </div>
                            </div>

                            {/* 2. Stats / Bars */}
                            <div className="space-y-5 mb-8">
                                <div>
                                    <div className="flex justify-between text-xs font-medium text-gray-400 mb-2">
                                        <span>Efficiency Rating</span>
                                        <span className="text-green-400">98%</span>
                                    </div>
                                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: "98%" }}
                                            transition={{ delay: 0.5, duration: 1 }}
                                            className="h-full bg-green-500 rounded-full"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between text-xs font-medium text-gray-400 mb-2">
                                        <span>Community Usage</span>
                                        <span className="text-blue-400">High</span>
                                    </div>
                                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: "85%" }}
                                            transition={{ delay: 0.7, duration: 1 }}
                                            className="h-full bg-blue-500 rounded-full"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* 3. Footer / Compatibility */}
                            <div className="pt-6 border-t border-white/10">
                                <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-3">Compatible Models</p>
                                <div className="flex gap-3">
                                    {/* Tiny visual representation of AI logos (Circles) */}
                                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                        <span className="text-xs text-gray-300">ChatGPT</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                        <span className="text-xs text-gray-300">Gemini</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                                        <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                        <span className="text-xs text-gray-300">Claude</span>
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

// --- MAIN PAGE COMPONENT ---
const PromptCategoryPage = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const result = await getPromptsByCategory(slug);
            if (result) setData(result);
            setLoading(false);
        };
        fetchData();
    }, [slug]);

    if (loading) return <div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading...</div>;
    if (!data) return <div className="min-h-screen flex items-center justify-center">Category not found</div>;

    const dateOptions = { month: 'long', year: 'numeric' };
    const currentDate = new Date().toLocaleDateString('en-US', dateOptions);

    return (
        <div className="w-full min-h-screen bg-gray-50 overflow-x-hidden">
            <Navbar />

            <main>
                {/* 1. Dynamic Hero */}
                <CategoryHero category={data.category} />

                {/* 2. Main Content Area */}
                <div className="max-w-[1280px] mx-auto px-6 pb-24">

                    {/* Dynamic Heading */}
                    <div className="mb-10 mt-8">
                        <h2 className="text-2xl font-display font-medium text-gray-900">
                            Best prompts for <span className="text-blue-600">{data.category.title}</span> for {currentDate}
                        </h2>
                        <div className="h-1 w-20 bg-blue-600 mt-3 rounded-full"></div>
                    </div>

                    {/* 3. Prompt Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {data.prompts.map((prompt, index) => (
                            <motion.div
                                key={prompt._id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
                            >
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {prompt.tags.map((tag, i) => (
                                        <span key={i} className="px-2.5 py-1 bg-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-wide rounded-md">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                                    {prompt.title}
                                </h3>

                                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                                    {prompt.description}
                                </p>

                                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                                    <div className="flex items-center gap-1 text-gray-400 text-xs font-medium">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        {prompt.views.toLocaleString()}
                                    </div>

                                    <button
                                        onClick={() => navigate(`/prompts/${slug}/${prompt._id}`)} // ✅ Updated Route
                                        className="px-4 py-2 bg-black text-white text-xs font-bold rounded-lg hover:bg-gray-800 transition-colors"
                                    >
                                        View Prompt
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Empty State */}
                    {data.prompts.length === 0 && (
                        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
                            <p className="text-gray-500">No prompts added to this category yet.</p>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default PromptCategoryPage;