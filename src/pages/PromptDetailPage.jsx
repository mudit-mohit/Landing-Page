import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getPromptById } from '../services/promptApi';

const PromptDetailPage = () => {
  const { promptId } = useParams();
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchPrompt = async () => {
      setLoading(true);
      const data = await getPromptById(promptId);
      if (data) setPrompt(data);
      setLoading(false);
    };
    fetchPrompt();
  }, [promptId]);

  const handleCopy = () => {
    if (prompt?.content) {
      navigator.clipboard.writeText(prompt.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (loading) return <div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading Prompt...</div>;
  if (!prompt) return <div className="min-h-screen flex items-center justify-center">Prompt not found</div>;

  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-[1000px] mx-auto">
            
            {/* 1. HEADER SECTION */}
            <div className="mb-12">
                {/* Breadcrumb */}
                <button 
                    onClick={() => navigate(-1)} 
                    className="text-sm text-gray-500 hover:text-black mb-6 flex items-center gap-1 transition-colors"
                >
                    ← Back to Library
                </button>

                {/* Tags */}
                <div className="flex gap-2 mb-4">
                    {prompt.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-100">
                            {tag}
                        </span>
                    ))}
                </div>

                <h1 className="text-4xl md:text-5xl font-display font-medium text-gray-900 leading-tight mb-6">
                    {prompt.title}
                </h1>
                
                {/* 2. DESCRIPTION ("What this prompt does") */}
                <div className="text-lg text-gray-600 leading-relaxed max-w-3xl border-l-4 border-blue-600 pl-6">
                    {prompt.description}
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                
                {/* LEFT COLUMN: Main Prompt Content */}
                <div className="lg:col-span-2 space-y-12">
                    
                    {/* 4. THE PROMPT BLOCK (Black Aesthetic) */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-30 blur transition duration-500"></div>
                        <div className="relative bg-[#0F0F0F] rounded-2xl border border-gray-800 shadow-2xl overflow-hidden">
                            
                            {/* Toolbar */}
                            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-[#161616]">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                                </div>
                                <span className="text-xs font-mono text-gray-500">PROMPT_SOURCE_CODE</span>
                                <button 
                                    onClick={handleCopy}
                                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-all"
                                >
                                    {copied ? (
                                        <>
                                            <svg className="w-3.5 h-3.5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                            Copied!
                                        </>
                                    ) : (
                                        <>
                                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
                                            Copy Code
                                        </>
                                    )}
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-6 md:p-8">
                                <pre className="font-mono text-sm md:text-base text-gray-300 whitespace-pre-wrap leading-relaxed">
                                    {prompt.content}
                                </pre>
                            </div>
                        </div>
                    </div>

                    {/* 5. INSTRUCTIONS SECTION */}
                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                        <h3 className="text-xl font-display font-medium text-gray-900 mb-6 flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold">?</span>
                            How to use this prompt
                        </h3>
                        <div className="space-y-4">
                            {prompt.instructions?.map((step, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-sm font-bold text-gray-500 shadow-sm">
                                        {index + 1}
                                    </div>
                                    <p className="text-gray-600 text-sm leading-7 pt-0.5">
                                        {step}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* RIGHT COLUMN: Sidebar (Tips) */}
                <div className="lg:col-span-1">
                    <div className="sticky top-32">
                        {/* 3. TIPS SECTION */}
                        <div className="bg-yellow-50/50 rounded-2xl p-6 border border-yellow-100/80">
                            <div className="flex items-center gap-2 mb-4">
                                <svg className="w-5 h-5 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                <h3 className="font-bold text-gray-900">Pro Tips</h3>
                            </div>
                            
                            <ul className="space-y-4">
                                {prompt.tips?.map((tip, index) => (
                                    <li key={index} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                                        <span className="text-yellow-500 text-lg leading-none">•</span>
                                        {tip}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CTA / Info Box */}
                        <div className="mt-6 bg-blue-600 rounded-2xl p-6 text-white shadow-lg shadow-blue-500/20 relative overflow-hidden">
                             <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                             <h4 className="font-bold mb-2 relative z-10">Need a custom strategy?</h4>
                             <p className="text-blue-100 text-sm mb-4 relative z-10">
                                This prompt is just the beginning. Get a full GTM audit from our experts.
                             </p>
                             <button className="w-full py-2 bg-white text-blue-600 text-xs font-bold rounded-lg hover:bg-blue-50 transition-colors relative z-10">
                                Book a Call
                             </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PromptDetailPage;