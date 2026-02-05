import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft, ArrowRight, Globe, Linkedin, Youtube, ExternalLink,
  CheckCircle2, HelpCircle, Layers, Users, Zap, DollarSign,
  ChevronDown, ChevronUp, Play, Target, Star, Check, BookOpen
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getToolBySlug } from '../services/toolsApi';

// --- HELPER: YOUTUBE EMBED GENERATOR ---
const getYoutubeEmbed = (url) => {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

// --- COMPONENT: COMPLEXITY METER ---
// --- COMPONENT: COMPLEXITY METER (MODERN) ---
const ComplexityMeter = ({ score }) => {
  const getLevel = () => {
    if (score < 40) return { label: 'Low', color: 'text-emerald-500', barColor: 'bg-emerald-400' };
    if (score < 70) return { label: 'Medium', color: 'text-amber-500', barColor: 'bg-amber-400' };
    return { label: 'High', color: 'text-rose-500', barColor: 'bg-rose-500' };
  };

  const level = getLevel();

  return (
    <div className="w-full">
      <div className="flex justify-between items-end mb-3">
        <span className={`text-2xl font-display font-bold ${level.color}`}>
          {score}<span className="text-sm text-gray-500 ml-0.5">/100</span>
        </span>
        <span className={`text-xs font-bold uppercase tracking-wider ${level.color} bg-gray-50 px-2 py-1 rounded-lg border border-gray-100`}>
          {level.label} Complexity
        </span>
      </div>

      {/* Segmented Bar Design */}
      <div className="flex gap-1 h-3 w-full">
        {[...Array(10)].map((_, i) => {
          // Calculate active state for each segment (each segment represents 10%)
          const isActive = score >= (i + 1) * 10 - 5;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0.3, scaleY: 0.5 }}
              animate={{
                opacity: isActive ? 1 : 0.2,
                scaleY: isActive ? 1 : 0.8,
              }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`flex-1 rounded-full ${isActive ? level.barColor : 'bg-gray-200'}`}
            />
          );
        })}
      </div>
      <div className="flex justify-between mt-2 text-[10px] font-bold uppercase text-gray-400 tracking-wider">
        <span>Simple</span>
        <span>Advanced</span>
      </div>
    </div>
  );
};

// --- COMPONENT: FAQ ACCORDION ---
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="group border-b border-gray-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left focus:outline-none"
      >
        <span className={`font-medium transition-colors ${isOpen ? 'text-blue-600' : 'text-gray-900 group-hover:text-blue-600'}`}>
          {question}
        </span>
        {isOpen ? <ChevronUp size={18} className="text-blue-600" /> : <ChevronDown size={18} className="text-gray-400 group-hover:text-blue-600 transition-colors" />}
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="pb-5 text-sm text-gray-500 leading-relaxed">
          {answer}
        </div>
      </motion.div>
    </div>
  );
};

// --- COMPONENT: PRICING SECTION ---
const PricingSection = ({ plans }) => {
  const scrollRef = React.useRef(null);

  if (!plans || plans.length === 0) return null;

  const scroll = (direction) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      // Scroll by the width of one card (approx) or 100% of view
      const scrollAmount = container.clientWidth / (window.innerWidth >= 768 ? 3 : 1);
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
      <div className="mb-8">
        <h3 className="text-2xl font-display font-bold text-gray-900">Pricing Plans</h3>
        <p className="text-gray-500 text-sm mt-1">Simple, transparent pricing for everyone.</p>
      </div>

      <div className="relative group">
        <style>{`
          .scrollbar-hide::-webkit-scrollbar {
              display: none;
          }
          .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
          }
        `}</style>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
        >
          {plans.map((plan, i) => {
            const isHighlighted = plan.planName?.toLowerCase().includes('pro') || plan.planName?.toLowerCase().includes('business');
            return (
              <div
                key={plan._id || i}
                className={`flex-shrink-0 snap-start w-full md:w-[calc(33.333%-11px)] relative p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${isHighlighted
                  ? 'bg-black text-white border-black ring-4 ring-black/5 shadow-xl'
                  : 'bg-white text-gray-900 border-gray-200 hover:border-gray-300 hover:shadow-lg'
                  }`}
              >
                {isHighlighted && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">
                    POPULAR
                  </div>
                )}
                <h4 className={`text-sm font-bold uppercase tracking-wider mb-2 ${isHighlighted ? 'text-gray-400' : 'text-gray-500'}`}>{plan.planName}</h4>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-display font-bold">{plan.price}</span>
                  {plan.billing && <span className={`text-xs ${isHighlighted ? 'text-gray-400' : 'text-gray-500'}`}>/{plan.billing}</span>}
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, f) => (
                    <div key={f} className="flex items-start gap-2 text-sm">
                      <Check size={16} className={`shrink-0 mt-0.5 ${isHighlighted ? 'text-green-400' : 'text-blue-600'}`} />
                      <span className={isHighlighted ? 'text-gray-300' : 'text-gray-600'}>{feature}</span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {plans.length > 3 && (
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => scroll('left')}
            className="p-3 rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-black hover:border-black transition-all"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-3 rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-black hover:border-black transition-all"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

// --- COMPONENT: LEARN MORE SECTION ---
const LearnMoreSection = ({ resources }) => {
  if (!resources || resources.length === 0) return null;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2.5 bg-sky-50 text-sky-600 rounded-xl">
          <BookOpen size={20} className="fill-sky-100" />
        </div>
        <h2 className="text-2xl font-display font-bold text-gray-900">Learn More</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resources.map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-sky-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />

            <div className="flex justify-between items-start gap-4">
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-sky-600 transition-colors flex items-center gap-2">
                  <span className="underline decoration-2 decoration-transparent group-hover:decoration-sky-200 underline-offset-4 transition-all">
                    {item.heading}
                  </span>
                  <ExternalLink size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-sky-400" />
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center text-sky-600 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight size={16} className="-rotate-45" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---
const ToolDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [tool, setTool] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTool = async () => {
      setLoading(true);
      const data = await getToolBySlug(slug);
      setTool(data);
      setLoading(false);
    };
    fetchTool();
  }, [slug]);

  if (loading) return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#f8f9fa]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-gray-200 border-t-black rounded-full animate-spin"></div>
        <p className="text-gray-400 font-medium animate-pulse">Loading Tool Idea...</p>
      </div>
    </div>
  );

  if (!tool) return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[#f8f9fa]">
      <h2 className="text-2xl font-bold text-gray-900">Tool not found</h2>
      <button onClick={() => navigate('/outmate-labs/tools')} className="mt-4 text-blue-600 font-medium hover:underline">Back to Directory</button>
    </div>
  );


  const videoId = getYoutubeEmbed(tool.ytVideoLink);

  return (
    <div className="w-full min-h-screen bg-[#f8f9fa] font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />

      <main className="max-w-[1280px] mx-auto px-4 md:px-6 pt-28 pb-32">

        {/* Back Button */}
        <button
          onClick={() => navigate('/outmate-labs/tools')}
          className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-black mb-10 transition-colors w-fit"
        >
          <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:border-black transition-colors">
            <ArrowLeft size={14} />
          </div>
          Back to Directory
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* --- LEFT COLUMN: IDENTITY (STICKY) --- */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">

              {/* Identity Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-[2rem] p-8 border border-white shadow-xl shadow-gray-200/50 relative overflow-hidden"
              >
                {/* Subtle Gradient Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none opacity-60" />

                <div className="relative z-10">
                  <div className="w-24 h-24 bg-white rounded-2xl border border-gray-100 flex items-center justify-center p-4 mb-6 shadow-sm">
                    {tool.logo ? (
                      <img src={tool.logo} alt={tool.name} className="w-full h-full object-contain" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-50 rounded-xl text-gray-300 font-bold text-2xl">
                        {tool.name.charAt(0)}
                      </div>
                    )}
                  </div>

                  <h1 className="text-4xl font-display font-extrabold text-gray-900 mb-3 tracking-tight">{tool.name}</h1>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {tool.categories.map((cat, i) => (
                      <span key={i} className="px-2.5 py-1 bg-gray-50 border border-gray-100 rounded-lg text-[11px] font-bold uppercase tracking-wide text-gray-500">
                        {cat}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-500 leading-relaxed mb-8">
                    {tool.shortDescription}
                  </p>

                  <div className="flex flex-col gap-3">
                    <a
                      href={tool.websiteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-full py-3.5 bg-black text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-900 transition-all shadow-lg shadow-black/10 hover:shadow-black/20 hover:-translate-y-0.5"
                    >
                      <Globe size={18} /> Visit Website <ExternalLink size={14} className="opacity-50 group-hover:translate-x-0.5 transition-transform" />
                    </a>

                    <div className="flex gap-3">
                      {tool.linkedInLink && (
                        <a href={tool.linkedInLink} target="_blank" rel="noopener noreferrer" className="flex-1 py-3 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all">
                          <Linkedin size={18} /> LinkedIn
                        </a>
                      )}
                      {tool.youTubeChannelLink && (
                        <a href={tool.youTubeChannelLink} target="_blank" rel="noopener noreferrer" className="flex-1 py-3 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-all">
                          <Youtube size={18} /> Channel
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Simplified Stats (Replacing Old Bento Grid for Cleanliness) */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-6"
              >
                <div>
                  <div className="flex items-center gap-2 text-gray-400 mb-2">
                    <Users size={16} /> <span className="text-[10px] font-bold uppercase tracking-wider">Target Organization</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {Array.isArray(tool.organizationType) ? (
                      tool.organizationType.map((org, i) => (
                        <span key={i} className="px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-lg text-xs font-bold uppercase tracking-wide text-gray-600">
                          {org}
                        </span>
                      ))
                    ) : (
                      <span className="text-gray-900 font-medium">{tool.organizationType || 'Various'}</span>
                    )}
                  </div>
                </div>

                <div className="h-px bg-gray-50" />

                <div>
                  <div className="flex items-center gap-2 text-gray-400 mb-2">
                    <Layers size={16} /> <span className="text-[10px] font-bold uppercase tracking-wider">Complexity</span>
                  </div>
                  <ComplexityMeter score={tool.complexity} />
                </div>
              </motion.div>

            </div>
          </div>

          {/* --- RIGHT COLUMN: DEEP DIVE --- */}
          <div className="lg:col-span-8 space-y-10">

            {/* 1. Deep Description (Without ICP) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 md:p-10 rounded-[2rem] border border-gray-100 shadow-sm"
            >
              <div className="prose prose-lg prose-slate max-w-none text-gray-600 leading-relaxed font-light">
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6 tracking-tight">What is {tool.name}?</h2>
                {tool.fullDescription}
              </div>
            </motion.div>

            {/* 2. YouTube Video Section (Moved Here) */}
            {videoId && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="rounded-[2rem] overflow-hidden shadow-2xl shadow-gray-200 aspect-video relative group bg-black"
              >
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10" />
                <iframe
                  className="w-full h-full relative z-0"
                  src={`https://www.youtube.com/embed/${videoId}?origin=${window.location.origin}`}
                  title="Tool Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </motion.div>
            )}

            {/* 3. Key Features */}
            {tool.keyFeatures && tool.keyFeatures.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-black text-white p-8 md:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden"
              >
                {/* Abstract bg element */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-gray-800/30 to-transparent rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />

                <h2 className="text-2xl font-display font-bold mb-8 flex items-center gap-3 relative z-10">
                  <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                    <Zap className="text-yellow-400 fill-yellow-400" size={20} />
                  </div>
                  Key Highlights
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 relative z-10">
                  {tool.keyFeatures.map((feature, i) => (
                    <div key={i} className="flex items-start gap-4 group">
                      <div className="p-1 rounded-full bg-green-500/20 mt-0.5">
                        <Check size={14} className="text-green-400" />
                      </div>
                      <span className="text-gray-300 font-medium leading-relaxed group-hover:text-white transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* 4. Ideal Customer Profile (ICP) - Standalone Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 md:p-12 rounded-[2rem] text-white shadow-xl shadow-blue-900/10 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                  <Target size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Who is this for?</h3>
                  <p className="text-blue-100 text-lg leading-relaxed font-light mb-6">
                    {tool.idealCustomerProfile}
                  </p>

                  {/* Tag Cloud in ICP Section */}
                  {Array.isArray(tool.organizationType) && tool.organizationType.length > 0 && (
                    <div className="flex flex-wrap gap-2 border-t border-white/10 pt-6">
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-200 py-1.5 mr-2">Best Suited For:</span>
                      {tool.organizationType.map((org, i) => (
                        <span key={i} className="px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg text-xs font-bold uppercase tracking-wide text-white">
                          {org}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            {/* 5. Pricing Section (New) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <PricingSection plans={tool.plans} />
            </motion.div>

            {/* 6. Pro Tips Section (Alternative Design: Light Grid) */}
            {tool.proTips && tool.proTips.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl">
                    <Star size={20} className="fill-indigo-600" />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-gray-900">Expert Pro Tips</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {tool.proTips.map((tip, i) => (
                    <div
                      key={i}
                      className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-50 to-transparent rounded-bl-full opacity-50 transition-opacity group-hover:opacity-100" />

                      <div className="relative z-10 flex gap-4">
                        <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 font-bold text-sm">
                          {i + 1}
                        </span>
                        <p className="text-gray-600 leading-relaxed font-medium">
                          {tip}
                        </p>
                      </div>
                    </div>
                  ))}

                  {/* CTA Card Integrated in Grid */}
                  <div className="bg-gradient-to-br from-indigo-600 to-violet-700 p-8 rounded-2xl shadow-xl shadow-indigo-200 text-white flex flex-col justify-between relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10" />

                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-4">
                        <Zap size={24} className="text-white fill-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Need more leverage?</h3>
                      <p className="text-indigo-100/90 text-sm mb-6 leading-relaxed">
                        Access our full library of growth playbooks and outbound strategies.
                      </p>
                    </div>

                    <button
                      onClick={() => navigate('/outmate-labs/tips')}
                      className="relative z-10 w-full py-3.5 bg-white text-indigo-600 rounded-xl font-bold hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2 group-hover:gap-3"
                    >
                      View All Tips
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}




            {/* 7. Learn More Section */}
            {tool.learnMore && tool.learnMore.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <LearnMoreSection resources={tool.learnMore} />
              </motion.div>
            )}

            {/* 6. FAQs */}
            {tool.faqs && tool.faqs.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-white p-8 md:p-10 rounded-[2rem] border border-gray-100 shadow-sm"
              >
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <div className="p-2 bg-purple-50 rounded-xl text-purple-600">
                    <HelpCircle size={24} />
                  </div>
                  Frequently Asked Questions
                </h2>
                <div className="space-y-2">
                  {tool.faqs.map((faq, i) => (
                    <FaqItem key={i} question={faq.question} answer={faq.answer} />
                  ))}
                </div>
              </motion.div>
            )}

          </div>
        </div>
      </main >

      <Footer />
    </div >
  );
};

export default ToolDetailPage;