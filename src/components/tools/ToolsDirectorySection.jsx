import React, { useState } from 'react';
import ToolCard from './ToolCard';

const ToolsDirectorySection = ({ initialTools, categories, loading }) => {
  const [selectedCats, setSelectedCats] = useState([]);

  const toggleCategory = (cat) => {
    if (selectedCats.includes(cat)) {
      setSelectedCats(selectedCats.filter(c => c !== cat));
    } else {
      setSelectedCats([...selectedCats, cat]);
    }
  };

  // Filter Logic: Show tool if it matches ANY selected category (OR logic), or show all if none selected
  const filteredTools = selectedCats.length === 0 
    ? initialTools 
    : initialTools.filter(tool => tool.categories.some(c => selectedCats.includes(c)));

  return (
    <section className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto px-6">
            
            <h2 className="text-3xl font-display font-medium text-gray-900 mb-8">Browse Full Directory</h2>

            {/* Layout: Sidebar (Desktop) + Grid */}
            <div className="flex flex-col lg:flex-row gap-12">
                
                {/* 1. Sidebar Filters */}
                <div className="lg:w-1/4">
                    <div className="bg-gray-50 rounded-2xl p-6 sticky top-24">
                        <h3 className="font-bold text-gray-900 mb-4">Filter by Category</h3>
                        <div className="flex flex-wrap lg:flex-col gap-2">
                            {categories.filter(c => c !== 'All').map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => toggleCategory(cat)}
                                    className={`px-3 py-2 rounded-lg text-sm text-left transition-colors flex justify-between items-center ${
                                        selectedCats.includes(cat) 
                                        ? 'bg-blue-600 text-white' 
                                        : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-100'
                                    }`}
                                >
                                    {cat}
                                    {selectedCats.includes(cat) && <span>✓</span>}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 2. Tools Grid */}
                <div className="lg:w-3/4">
                    <div className="mb-6 text-sm text-gray-500">
                        Showing {filteredTools.length} tools
                    </div>
                    
                    {loading ? (
                         <div className="text-center py-20">Loading directory...</div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredTools.map(tool => (
                                <ToolCard key={tool._id} tool={tool} />
                            ))}
                        </div>
                    )}

                    {!loading && filteredTools.length === 0 && (
                        <div className="text-center py-20 bg-gray-50 rounded-2xl">
                            <p className="text-gray-500">No tools found matching your filters.</p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    </section>
  );
};

export default ToolsDirectorySection;