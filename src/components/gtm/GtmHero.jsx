import React from 'react';

const GtmHero = () => {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 pt-28 pb-12">
      <div className="w-full bg-white border border-[#E1E2E3] rounded-3xl flex flex-col items-center py-16 px-6 shadow-[0_2px_20px_rgba(0,0,0,0.02)] text-center">
        
        {/* Badge */}
        <div className="mb-6 border border-[#E1E2E3] bg-[#f4f4f4] rounded-full px-4 py-1.5 shadow-sm">
          <p className="font-mono text-[11px] tracking-widest uppercase text-[#4D4D4D] font-medium">
            THE GTM KNOWLEDGE HUB
          </p>
        </div>

        {/* Title */}
        <h1 className="font-display font-semibold text-5xl md:text-6xl tracking-tight text-black mb-6 max-w-3xl">
           Master the Art of <br></br><span className="text-[#1679fa]">Go-To-Market</span>
        </h1>
        
        {/* Subtitle */}
        <p className="font-display text-lg text-[#4d4d4d] max-w-2xl mx-auto mb-10">
          Curated insights, strategies, and playbooks from the world's best GTM operators. 
          Updated daily from the best corners of Twitter.
        </p>

      </div>
    </section>
  );
};

export default GtmHero;