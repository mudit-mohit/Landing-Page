import React from 'react';

const TechStackFeatures = ({ features, isLight }) => {
  return (
    <section className="w-full py-20 px-6 lg:px-[60px]">
      <div className="max-w-[1200px] mx-auto">
        <h2 className={`text-3xl font-bold font-space mb-12 text-center ${isLight ? "text-slate-900" : "text-white"}`}>
            Capabilities & Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className={`
              p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1
              ${isLight 
                ? "bg-white border-slate-100 shadow-lg shadow-green-500/5 hover:shadow-xl" 
                : "bg-[#111] border-[#222] hover:border-green-500/30"
              }
            `}>
              <div className="w-10 h-10 mb-6 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"></path><path d="M14 2v6h6"></path><path d="M16 13H8"></path><path d="M16 17H8"></path><path d="M10 9H8"></path></svg>
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

export default TechStackFeatures;