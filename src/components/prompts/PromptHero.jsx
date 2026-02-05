import React from 'react';
import { motion } from 'framer-motion';

// --- LOGO COMPONENTS ---

// ✅ UPDATED: Now uses the image file you will upload
const OpenAILogo = () => (
  <img 
    src="./././public/chatgpt_logo1.jpg" 
    alt="ChatGPT" 
    className="w-8 h-8 object-contain"
  />
);

// Kept as SVG since you mentioned the rest of the design is good now
const GeminiLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-500">
    <path d="M12.0001 0.46167C12.3334 6.78423 17.2159 11.6667 23.5385 12C17.2159 12.3333 12.3334 17.2159 12.0001 23.5384C11.6667 17.2159 6.78423 12.3333 0.46167 12C6.78423 11.6667 11.6667 6.78423 12.0001 0.46167ZM11.9999 4.38202C11.621 8.52554 8.52531 11.6212 4.38179 12.0001C8.52531 12.3789 11.621 15.4746 11.9999 19.6181C12.3788 15.4746 15.4745 12.3789 19.618 12.0001C15.4745 11.6212 12.3788 8.52554 11.9999 4.38202Z" />
  </svg>
);

const PromptHero = () => {
  return (
    <section className="relative pt-32 pb-12 px-4 md:px-6 lg:px-8">
      
      {/* THE CENTERED CONTAINER */}
      <div className="max-w-[1280px] mx-auto bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden relative">
        
        {/* Inner Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8 md:p-12 lg:p-16">
          
          {/* Left: Text Content */}
          <div className="flex flex-col gap-6 z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 w-fit"
            >
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">New Feature</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-black leading-[1.1]"
            >
              The Ultimate GTM <br/>
              <span className="text-gray-400">Prompt Library</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600 max-w-lg leading-relaxed"
            >
              Stop guessing. Access a curated collection of high-performance AI prompts designed specifically for Go-To-Market, Sales, and Growth leaders.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <button className="px-8 py-3.5 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-black/20">
                Browse Categories
              </button>
              <button className="px-8 py-3.5 bg-white text-black border border-gray-200 rounded-xl font-medium hover:bg-gray-50 transition-all">
                Submit a Prompt
              </button>
            </motion.div>
          </div>

          {/* Right: LEVITATING GLASS CARDS */}
          <div className="relative h-[450px] w-full bg-gray-50 rounded-3xl overflow-hidden flex items-center justify-center">
             
             {/* Decorative Background Gradients */}
             <div className="absolute top-0 right-0 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-[80px] opacity-40"></div>
             <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-[80px] opacity-40"></div>

             {/* MAIN CARD: The "Hero" Prompt */}
             <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 w-full max-w-sm bg-white/90 backdrop-blur-xl border border-white/60 p-6 rounded-2xl shadow-2xl"
             >
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                    <div className="flex gap-2">
                        <span className="px-2.5 py-1 rounded-md bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-wide border border-green-100">
                            Strategy
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-wide border border-blue-100">
                            GTM
                        </span>
                    </div>
                    <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                    </div>
                </div>

                {/* Prompt Body */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">The "30-60-90" Launch Plan</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6 font-mono bg-gray-50 p-3 rounded-lg border border-gray-100">
                    "Act as a VP of Sales. Create a detailed 30-60-90 day execution plan for launching [Product Name] into the Enterprise market, focusing on..."
                </p>

                {/* Footer Actions */}
                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                    <div className="flex items-center gap-2 text-xs text-gray-400 font-medium">
                        <span>Used 1.2k times</span>
                    </div>
                    <button className="text-xs font-semibold bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                        Copy Prompt
                    </button>
                </div>

                {/* FLOATING LOGO BADGES (Glassmorphism) */}
                
                {/* OpenAI Badge (Uses your new image) */}
                <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-6 -right-6 w-14 h-14 bg-white/80 backdrop-blur-md border border-white rounded-2xl shadow-lg flex items-center justify-center"
                >
                    <OpenAILogo />
                </motion.div>

                {/* Gemini Badge (SVG) */}
                <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-6 -left-6 w-14 h-14 bg-white/80 backdrop-blur-md border border-white rounded-2xl shadow-lg flex items-center justify-center"
                >
                    <GeminiLogo />
                </motion.div>
             </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default PromptHero;