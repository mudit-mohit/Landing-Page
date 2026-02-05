import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import ToolCard from './ToolCard';

const FeaturedToolsSection = ({ tools, categories, onMoreClick, loading }) => {
  const [activeTab, setActiveTab] = useState('All');

  // Filter tools client-side for this section
  const displayedTools = activeTab === 'All' 
    ? tools 
    : tools.filter(t => t.categories.includes(activeTab));

  return (
    <section className="max-w-[1280px] mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
            <div>
                <h2 className="text-3xl font-display font-medium text-gray-900 mb-2">Featured Tools</h2>
                <p className="text-gray-500">Hand-picked essentials for every stack.</p>
            </div>
            
            {/* Filter Tabs (Horizontal Scroll) */}
            <div className="w-full md:w-auto overflow-x-auto pb-2">
                <div className="flex gap-2">
                    {categories.slice(0, 6).map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveTab(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                                activeTab === cat 
                                ? 'bg-black text-white' 
                                : 'bg-white text-gray-600 border border-gray-200 hover:border-black'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>
        </div>

        {/* Grid */}
        {loading ? (
             <div className="h-64 flex items-center justify-center text-gray-400">Loading Featured...</div>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {displayedTools.slice(0, 8).map(tool => (
                    <ToolCard key={tool._id} tool={tool} />
                ))}
            </div>
        )}

        {/* More Categories Button */}
        <div className="flex justify-center mt-12">
            <button 
                onClick={onMoreClick}
                className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full text-gray-900 font-bold hover:bg-gray-50 transition-all shadow-sm group"
            >
                More Categories
                <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
        </div>
    </section>
  );
};

export default FeaturedToolsSection;