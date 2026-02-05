import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const ToolCard = ({ tool }) => {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(`/outmate-labs/tools/${tool.slug}`)}
            className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col h-full relative overflow-hidden"
        >
            {/* Hover Gradient Border Effect (Optional nice touch) */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-colors pointer-events-none" />

            <div className="flex justify-between items-start mb-5 relative z-10">
                {/* Tool Logo */}
                <div className="w-14 h-14 rounded-xl bg-white border border-gray-100 flex items-center justify-center overflow-hidden p-2 shadow-sm group-hover:scale-105 transition-transform duration-300">
                    {tool.logo ? (
                        <img src={tool.logo} alt={tool.name} className="w-full h-full object-contain" />
                    ) : (
                        <span className="text-xl font-bold text-gray-400">{tool.name.charAt(0)}</span>
                    )}
                </div>

                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-black transition-colors duration-300">
                    <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </div>
            </div>

            <h3 className="text-xl font-display font-bold text-gray-900 mb-2 relative z-10 group-hover:text-blue-600 transition-colors">{tool.name}</h3>

            <p className="text-sm text-gray-500 line-clamp-2 mb-6 flex-grow leading-relaxed relative z-10">
                {tool.shortDescription}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-auto relative z-10 border-t border-gray-50 pt-4">
                {tool.categories.slice(0, 3).map((cat, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md bg-gray-50 text-[11px] font-bold uppercase tracking-wide text-gray-500 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                        {cat}
                    </span>
                ))}
                {tool.categories.length > 3 && (
                    <span className="px-2 py-1 text-[11px] text-gray-400 font-medium">+{tool.categories.length - 3}</span>
                )}
            </div>
        </div>
    );
};

export default ToolCard;