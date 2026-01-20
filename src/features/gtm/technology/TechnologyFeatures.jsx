import React from 'react';

const TechnologyFeatures = ({ features, isLight }) => {
  return (
    <section className="w-full py-10 px-6 lg:px-[60px]">
      <div className="max-w-[1200px] mx-auto">
        <h2 className={`text-3xl font-bold font-space mb-12 text-center ${isLight ? "text-slate-900" : "text-white"}`}>
            Key Capabilities
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className={`
              p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1
              ${isLight 
                ? "bg-white border-slate-100 shadow-lg shadow-blue-500/5 hover:shadow-xl" 
                : "bg-[#111] border-[#222] hover:border-blue-500/30"
              }
            `}>
              <div className="w-10 h-10 mb-6 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                 {/* Generic Icon - Can be customized per index if needed */}
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              <h3 className={`text-xl font-bold mb-3 ${isLight ? "text-slate-900" : "text-white"}`}>
                {feature.title}
              </h3>
              <p className={`text-sm leading-relaxed ${isLight ? "text-slate-600" : "text-gray-400"}`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyFeatures;