import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, Globe, Linkedin, Youtube, ExternalLink,
  CheckCircle2, HelpCircle, Layers, Users, Zap, DollarSign,
  ChevronDown, ChevronUp, Play, Target, Star, Check
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
const ComplexityMeter = ({ score }) => {
  const getColor = () => {
    if (score < 40) return 'bg-emerald-500';
    if (score < 70) return 'bg-amber-500';
    return 'bg-rose-500';
  };

  return (
    <div className="w-full">
      <div className="flex justify-between text-[10px] font-bold uppercase text-gray-400 mb-2 tracking-wider">
        <span>Easy</span>
        <span>Complex</span>
      </div>
      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${score}%` }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className={`h-full rounded-full ${getColor()}`}
        />
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
const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: 'Starter',
      price: billingCycle === 'monthly' ? '$29' : '$24',
      period: 'mo',
      description: 'Perfect for individuals and small teams starting out.',
      features: ['Basic Analytics', '5 Team Members', '10 Projects', 'Community Support'],
      highlighted: false
    },
    {
      name: 'Pro',
      price: billingCycle === 'monthly' ? '$79' : '$65',
      period: 'mo',
      description: 'For growing businesses comprising larger teams.',
      features: ['Advanced Analytics', 'Unlimited Team Members', 'Unlimited Projects', 'Priority Support', 'Custom Integrations'],
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large-scale organizations.',
      features: ['Dedicated Account Manager', 'SSO & Advanced Security', 'Custom SLAs', 'On-premise Deployment'],
      highlighted: false
    }
  ];

  return (
    <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h3 className="text-2xl font-display font-bold text-gray-900">Pricing Plans</h3>
          <p className="text-gray-500 text-sm mt-1">Simple, transparent pricing for everyone.</p>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center bg-gray-100 p-1 rounded-xl w-fit">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${billingCycle === 'monthly' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle('yearly')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${billingCycle === 'yearly' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Yearly <span className="text-[10px] text-green-600 ml-1">-20%</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`relative p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${plan.highlighted
                ? 'bg-black text-white border-black ring-4 ring-black/5 shadow-xl'
                : 'bg-white text-gray-900 border-gray-200 hover:border-gray-300 hover:shadow-lg'
              }`}
          >
            {plan.highlighted && (
              <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">
                POPULAR
              </div>
            )}
            <h4 className={`text-sm font-bold uppercase tracking-wider mb-2 ${plan.highlighted ? 'text-gray-400' : 'text-gray-500'}`}>{plan.name}</h4>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-4xl font-display font-bold">{plan.price}</span>
              {plan.period && <span className={`text-sm ${plan.highlighted ? 'text-gray-400' : 'text-gray-500'}`}>/{plan.period}</span>}
            </div>
            <p className={`text-xs mb-6 leading-relaxed ${plan.highlighted ? 'text-gray-400' : 'text-gray-500'}`}>
              {plan.description}
            </p>
            <div className="space-y-3 mb-8">
              {plan.features.map((feature, f) => (
                <div key={f} className="flex items-start gap-2 text-sm">
                  <Check size={16} className={`shrink-0 mt-0.5 ${plan.highlighted ? 'text-green-400' : 'text-blue-600'}`} />
                  <span className={plan.highlighted ? 'text-gray-300' : 'text-gray-600'}>{feature}</span>
                </div>
              ))}
            </div>
            <button className={`w-full py-3 rounded-xl font-bold text-sm transition-colors ${plan.highlighted
                ? 'bg-white text-black hover:bg-gray-200'
                : 'bg-black text-white hover:bg-gray-800'
              }`}>
              Get Started
            </button>
          </div>
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

  const videoId = getYoutubeEmbed(tool.youtubeVideoUrl);

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
                    <img src={tool.logo} alt={tool.name} className="w-full h-full object-contain" />
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
                      {tool.linkedinLink && (
                        <a href={tool.linkedinLink} target="_blank" rel="noopener noreferrer" className="flex-1 py-3 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all">
                          <Linkedin size={18} /> LinkedIn
                        </a>
                      )}
                      {tool.youtubeChannel && (
                        <a href={tool.youtubeChannel} target="_blank" rel="noopener noreferrer" className="flex-1 py-3 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-all">
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
                  <div className="font-medium text-gray-900">{tool.organizationType || 'Various'}</div>
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
                  src={`https://www.youtube.com/embed/${videoId}`}
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
                  <p className="text-blue-100 text-lg leading-relaxed font-light">
                    {tool.idealCustomerProfile}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 5. Pricing Section (New) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <PricingSection />
            </motion.div>

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
      </main>

      <Footer />
    </div>
  );
};

export default ToolDetailPage;