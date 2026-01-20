import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Lightbulb, Zap, Target, Mail, Search, Share2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getTips } from '../services/tipsApi';

// --- ICONS FOR SOCIAL MEDIA ---
const XLogo = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
);
const LinkedInLogo = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4 fill-current"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.6.6 0 00.08.4V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg>
);
const ThreadsLogo = () => (
    <svg viewBox="0 0 192 192" aria-hidden="true" className="w-4 h-4 fill-current"><path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7729 53.6019 64.2532 67.8494C56.4124 88.0865 64.9142 107.808 82.6821 115.057C92.2797 118.963 98.6324 117.166 102.502 113.844C106.849 110.06 108.673 103.518 107.13 95.9455C106.336 92.1285 103.95 89.4757 99.8828 88.7509C95.4298 87.944 91.5649 90.7937 90.8143 95.8239C90.3444 98.9868 91.5173 101.996 93.6496 103.882C94.2184 104.402 94.2583 105.291 93.7386 105.86C93.2189 106.428 92.3294 106.468 91.7606 105.949C88.6375 103.186 86.9189 98.7845 87.608 94.1362C88.8953 85.3409 96.0955 80.0818 104.341 81.5658C110.884 82.7296 114.721 86.9831 116.002 93.2185C118.571 105.882 114.39 116.353 106.262 123.327C99.2743 129.324 88.455 131.785 75.3204 126.438C52.4839 117.126 42.1932 91.7724 52.3421 65.5702C59.9079 46.0375 78.4907 33.7292 99.7161 33.7292C100.106 33.7292 100.495 33.7315 100.884 33.736C134.666 33.9526 154.061 54.3908 156.02 90.5652C156.12 92.4278 157.734 93.8445 159.597 93.7439C161.459 93.6434 162.876 92.0294 162.775 90.1668C160.597 49.7212 138.406 26.1958 100.835 25.9619C100.287 25.9555 99.7394 25.9523 99.1917 25.9523C73.8748 25.9523 50.8409 41.5307 41.0264 66.8282C29.0838 97.6698 41.2295 127.536 68.0469 138.45C84.3999 145.107 98.508 141.838 107.973 133.714C114.298 128.286 118.683 121.054 120.443 113.111C121.231 113.447 122.015 113.791 122.793 114.143C124.475 114.903 126.449 114.152 127.209 112.47C127.969 110.789 127.218 108.815 125.536 108.055C124.621 107.641 123.699 107.236 122.771 106.84C122.846 106.182 122.9 105.518 122.932 104.848C123.284 96.9634 121.571 89.2316 117.65 82.2016C135.05 84.8143 151.782 109.842 150.938 139.102C150.885 140.963 152.343 142.523 154.204 142.577C156.066 142.63 157.625 141.173 157.679 139.311C158.749 102.324 136.216 75.9538 116.368 70.8988C117.399 63.8587 116.593 56.6358 113.633 50.2318C113.633 50.2318 113.633 50.2318 113.633 50.2318C113.633 50.2318 113.633 50.2318 113.633 50.2318C114.391 50.2318 115.149 50.2318 115.908 50.2318C136.257 50.2318 152.057 60.3703 153.513 81.3344C153.642 83.1931 155.263 84.5804 157.121 84.4513C158.98 84.3223 160.367 82.7011 160.238 80.8424C158.307 53.0567 137.404 43.4549 115.908 43.4549C115.149 43.4549 114.391 43.4549 113.633 43.4549C127.351 44.5714 140.598 57.3976 141.537 88.9883ZM113.633 50.2318L113.633 50.2318C113.633 50.2318 113.633 50.2318 113.633 50.2318Z"></path></svg>
);

// --- ANIMATED HERO BACKGROUND ---
const HeroAnimation = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] opacity-40 mix-blend-screen" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] opacity-30 mix-blend-screen" />
        {[...Array(6)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute rounded-full bg-blue-500/20 blur-xl"
                initial={{ x: Math.random() * window.innerWidth, y: Math.random() * 400, scale: 0.5 }}
                animate={{ y: [0, -30, 0], x: [0, 20, -20, 0], scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 8 + Math.random() * 5, repeat: Infinity, ease: "easeInOut" }}
                style={{ width: 100 + Math.random() * 150, height: 100 + Math.random() * 150 }}
            />
        ))}
    </div>
);

// --- TIP CARD COMPONENT ---
const TipCard = ({ tip, idx }) => {
    const [isShareOpen, setIsShareOpen] = useState(false);
    const menuRef = useRef(null);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsShareOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Sharing Functions
    const shareUrl = window.location.href;
    // Prepare the full text the user wants to post (Title + Tip + Link)
    const fullPostContent = `${tip.title}\n\n${tip.content}\n\nShared via Outmate Labs: ${shareUrl}`;

    const handleShare = (platform) => {
        let url = '';
        switch (platform) {
            case 'twitter':
                // X (Twitter) Intent
                url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(fullPostContent)}`;
                break;
            case 'linkedin':
                // LinkedIn Feed share allows pre-filling text via the 'text' parameter (unlike share-offsite)
                url = `https://www.linkedin.com/feed/?shareActive=true&text=${encodeURIComponent(fullPostContent)}`;
                break;
            case 'threads':
                // Threads Intent
                url = `https://www.threads.net/intent/post?text=${encodeURIComponent(fullPostContent)}`;
                break;
            default: break;
        }

        if (url) {
            window.open(url, '_blank', 'noopener,noreferrer');
        }
        setIsShareOpen(false);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group relative"
        >
            {/* Card Header (Removed Read Time) */}
            <div className="flex justify-between items-start mb-6">
                <span className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wide border ${tip.category === 'aeo' ? 'bg-purple-50 text-purple-700 border-purple-100' :
                        tip.category === 'outbound' ? 'bg-orange-50 text-orange-700 border-orange-100' :
                            tip.category === 'gtm' ? 'bg-blue-50 text-blue-700 border-blue-100' :
                                'bg-green-50 text-green-700 border-green-100'
                    }`}>
                    {tip.category}
                </span>
                {/* REMOVED READ TIME BADGE HERE */}
            </div>

            {/* Title & Content */}
            <h3 className="text-xl font-display font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {tip.title}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                {tip.content}
            </p>

            {/* Card Footer: Simplified Author (Left) & Share (Right) */}
            <div className="mt-8 pt-5 border-t border-gray-100 flex items-center justify-between relative">

                {/* 1. Author Info - CLEANED UP (Only Name) */}
                <div className="flex items-center">
                    <span className="text-sm font-bold text-gray-900">{tip.author || 'Contributor'}</span>
                </div>

                {/* 2. Share Button (Right) */}
                <div className="relative" ref={menuRef}>
                    <button
                        onClick={() => setIsShareOpen(!isShareOpen)}
                        className="p-2 rounded-full text-gray-400 hover:text-black hover:bg-gray-50 transition-colors"
                        title="Share this tip"
                    >
                        <Share2 size={18} />
                    </button>

                    {/* Share Menu Popup */}
                    <AnimatePresence>
                        {isShareOpen && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                                className="absolute bottom-full right-0 mb-2 w-32 bg-white rounded-xl shadow-xl border border-gray-100 p-1.5 z-20 flex flex-col gap-1"
                            >
                                <button onClick={() => handleShare('twitter')} className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-gray-700 hover:bg-black hover:text-white transition-colors">
                                    <XLogo /> X
                                </button>
                                <button onClick={() => handleShare('linkedin')} className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-gray-700 hover:bg-[#0077b5] hover:text-white transition-colors">
                                    <LinkedInLogo /> LinkedIn
                                </button>
                                <button onClick={() => handleShare('threads')} className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-gray-700 hover:bg-black hover:text-white transition-colors">
                                    <ThreadsLogo /> Threads
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

            </div>
        </motion.div>
    );
};

// --- FAQ COMPONENT ---
const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-200">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
            >
                <span className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                    {question}
                </span>
                <div className={`p-2 rounded-full transition-colors ${isOpen ? 'bg-blue-50 text-blue-600' : 'bg-gray-50 text-gray-400 group-hover:bg-gray-100'}`}>
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
            </button>
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                className="overflow-hidden"
            >
                <p className="text-gray-600 pb-6 leading-relaxed pr-8">{answer}</p>
            </motion.div>
        </div>
    );
};

// --- MAIN PAGE ---
const OutboundTipsPage = () => {
    const [tips, setTips] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = [
        { id: 'All', label: 'All Tips', icon: <Lightbulb size={16} /> },
        { id: 'aeo', label: 'AEO', icon: <Search size={16} /> },
        { id: 'outbound', label: 'Outbound', icon: <Zap size={16} /> },
        { id: 'gtm', label: 'GTM Strategy', icon: <Target size={16} /> },
        { id: 'email-marketing', label: 'Email Marketing', icon: <Mail size={16} /> },
        { id: 'linkedin-outreach', label: 'LinkedIn Outreach', icon: <LinkedInLogo /> },
    ];

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const data = await getTips(selectedCategory === 'All' ? '' : selectedCategory);
            setTips(data);
            setLoading(false);
        };
        fetchData();
    }, [selectedCategory]);

    return (
        <div className="w-full min-h-screen bg-[#f4f4f4] font-sans flex flex-col">
            <Navbar />

            <div className="w-full pt-28 px-4 md:px-6 mb-8">
                <div className="max-w-[1280px] mx-auto bg-black rounded-[2.5rem] overflow-hidden relative shadow-2xl">
                    <HeroAnimation />
                    <div className="relative z-10 px-6 py-20 md:py-32 flex flex-col items-center text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-4xl"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-white text-xs font-bold uppercase tracking-wider mb-8 backdrop-blur-md">
                                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                                Outmate Labs Knowledge Hub
                            </div>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium text-white mb-8 leading-[1.1] tracking-tight">
                                Tips when learning and <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-white">
                                    doing GTM Fundamentals
                                </span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                                Master the art of modern Go-To-Market. We curate high-impact tactics across outbound,
                                AEO, and email strategy to help you execute with precision and speed.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            <section className="w-full max-w-[1280px] mx-auto px-6 py-12">
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${selectedCategory === cat.id
                                    ? 'bg-black text-white shadow-lg scale-105'
                                    : 'bg-white text-gray-500 hover:text-black border border-gray-200 hover:border-black/20'
                                }`}
                        >
                            {cat.icon}
                            {cat.label}
                        </button>
                    ))}
                </div>

                {loading ? (
                    <div className="text-center py-32">
                        <div className="animate-spin w-8 h-8 border-2 border-gray-200 border-t-black rounded-full mx-auto mb-4"></div>
                        <div className="text-gray-400 text-sm">Loading insights...</div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {tips.map((tip, idx) => (
                            <TipCard key={tip._id} tip={tip} idx={idx} />
                        ))}
                    </div>
                )}

                {!loading && tips.length === 0 && (
                    <div className="text-center py-24 bg-white rounded-3xl border border-dashed border-gray-300">
                        <p className="text-gray-500 font-medium">No tips found for this category yet.</p>
                        <button onClick={() => setSelectedCategory('All')} className="mt-4 text-blue-600 text-sm font-bold hover:underline">View all tips</button>
                    </div>
                )}
            </section>

            <section className="py-24 bg-white border-t border-gray-100 mt-auto">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-medium text-gray-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-gray-500 text-lg">Common questions about GTM and Outbound strategy.</p>
                    </div>

                    <div className="bg-[#fafafa] rounded-[2rem] p-8 md:p-12 border border-gray-100">
                        <FaqItem
                            question="What is the difference between Outbound and AEO?"
                            answer="Outbound is pushing your message to prospects (Cold Email/Calls), while AEO (Answer Engine Optimization) is optimizing your content so AI models like ChatGPT and Perplexity recommend you when users ask questions."
                        />
                        <FaqItem
                            question="How often is this tips library updated?"
                            answer="We update our database weekly based on the latest trends in algorithm changes, email deliverability protocols, and GTM strategies."
                        />
                        <FaqItem
                            question="Can I contribute a tip to Outmate Labs?"
                            answer="Yes! We encourage community contributions. Please reach out to team@outmate.co with your insight. If selected, we will credit you as the author."
                        />
                        <FaqItem
                            question="Why is 'Niche Down' important for GTM?"
                            answer="Trying to sell to everyone results in selling to no one. Niching down allows you to speak directly to specific pain points, increasing conversion rates significantly."
                        />
                        <FaqItem
                            question="Are these tips suitable for early-stage startups?"
                            answer="Absolutely. Most of these strategies are designed for 'Zero to One' growth phases where resource efficiency and high impact are critical."
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default OutboundTipsPage;