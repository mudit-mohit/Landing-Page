import React from 'react';
import { motion } from 'framer-motion';

const ToolsHero = () => {
  return (
    <div className="w-full pt-28 px-4 md:px-6 mb-8">
      <div className="max-w-[1280px] mx-auto bg-black rounded-[2.5rem] overflow-hidden relative shadow-2xl h-[500px] flex items-center justify-center">
        
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[-50%] left-[-20%] w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-[-50%] right-[-20%] w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
        </div>

        <div className="relative z-10 text-center max-w-3xl px-6">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white/80 text-xs font-bold uppercase tracking-wider mb-6">
                    Outmate Labs Directory
                </div>
                <h1 className="text-5xl md:text-7xl font-display font-medium text-white mb-6 leading-[1.2]">
                    The Ultimate <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">GTM Tool Stack</span>
                </h1>
                <p className="text-lg text-gray-400 leading-relaxed">
                    A curated database of 900+ tools to supercharge your Go-To-Market strategy. 
                    From CRM to AI Agents, find exactly what you need to scale.
                </p>
            </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ToolsHero;