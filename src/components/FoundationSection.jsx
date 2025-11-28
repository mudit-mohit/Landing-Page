import React from 'react';

// Data for the 9 cards on the right
const foundationSteps = [
  { title: "Infrastructure Setup & Warmup", description: "you have world-class deliverability." },
  { title: "Tech-Stack Implementation", description: "we build inside your business, you own everything." },
  { title: "TAM Mapping", description: "you have full market visibility" },
  { title: "TAM Scoring & Segmentation", description: "you focus on high-return segments across all your channels." },
  { title: "Copywriting", description: "you get tailored copy across each TAM segment" },
  { title: "Campaign Creation and Management", description: "you maximize campaign ROI." },
  { title: "Sending Automation & Inbox Management", description: "you scale effortlessly." },
  { title: "Market Feedback", description: "you get to talk to your whole market at scale and iterate." },
  { title: "Message-Market Fit", description: "you maximize channel revenue potential." },
];

const FoundationSection = () => {
  const handleScrollToCalendar = () => {
    const element = document.getElementById('BookingScheduler');
    if (element) {
      // Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section 
      id="foundation" 
      className="w-full max-w-[1280px] mx-auto px-4 pt-16 pb-20 border-t border-[#E1E2E3]"
    >
      {/* 2-Column Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

        {/* --- LEFT COLUMN (Sticky Text) --- */}
        <div className="md:sticky top-32 flex flex-col items-start gap-6">
          {/* Pill */}
          <div className="flex items-center gap-4">
            <svg width="40" height="10" viewBox="0 0 50 13" fill="none" className="opacity-20 hidden md:block">
              <path d="M42.9956 10.5L42.0222 9.52672L44.7897 6.75954L45.4386 6.32061L45.3624 6.0916L44.5798 6.18702L0.5 6.18703L0.5 4.81298L44.5798 4.81298L45.3624 4.9084L45.4386 4.67939L44.7897 4.24046L42.0222 1.47328L42.9956 0.5L47.5 5.00382V5.99618L42.9956 10.5Z" fill="black"/>
            </svg>
            <div className="border border-[#e2e2e2] bg-white rounded-full px-5 py-2 shadow-sm whitespace-nowrap">
              <p className="font-mono text-[11px] tracking-widest uppercase text-[#4D4D4D] font-medium">
                THE FOUNDATION
              </p>
            </div>
            <svg width="40" height="10" viewBox="0 0 50 13" fill="none" className="opacity-20 hidden md:block rotate-180">
              <path d="M42.9956 10.5L42.0222 9.52672L44.7897 6.75954L45.4386 6.32061L45.3624 6.0916L44.5798 6.18702L0.5 6.18703L0.5 4.81298L44.5798 4.81298L45.3624 4.9084L45.4386 4.67939L44.7897 4.24046L42.0222 1.47328L42.9956 0.5L47.5 5.00382V5.99618L42.9956 10.5Z" fill="black"/>
            </svg>
          </div>
          
          {/* Main Title */}
          <h2 className="font-display font-semibold text-5xl md:text-6xl tracking-tight text-black text-left">
            Your outbound system, built and managed
          </h2>
          
          {/* Subtitle */}
          <p className="font-display text-lg text-[#4d4d4d] leading-relaxed">
            So you can focus on closing deals
          </p>

          {/* Button (Same as Hero) */}
          <a 
            onClick={handleScrollToCalendar} 
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 group flex items-center gap-3 bg-gradient-to-b from-[#1679fa] to-[#0a61d1] text-white px-5 py-3.5 rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span className="font-display font-medium text-lg">
              Request a call
            </span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="w-3.5 h-3.5 opacity-80 group-hover:opacity-100 transition-opacity">
              <path d="M 7.595 13 L 6.427 11.832 L 9.748 8.511 L 10.526 7.985 L 10.435 7.71 L 9.496 7.824 L 1 7.824 L 1 6.176 L 9.496 6.176 L 10.435 6.29 L 10.526 6.015 L 9.748 5.489 L 6.427 2.168 L 7.595 1 L 13 6.405 L 13 7.595 Z" fill="white"/>
            </svg>
          </a>
        </div>

        {/* --- RIGHT COLUMN (Scrolling Cards) --- */}
        <div className="flex flex-col gap-6">
          {foundationSteps.map((step, index) => (
            <div 
              key={step.title}
              className="bg-white border border-[#E1E2E3] rounded-2xl p-6 shadow-sm opacity-0 animate-fade-scale"
              // This arbitrary value applies a staggered delay, just like the original site
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h3 className="font-display font-semibold text-xl text-black leading-tight">
                {step.title}
              </h3>
              <p className="font-display text-lg text-[#4d4d4d] mt-2">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FoundationSection;