import React from 'react';

// --- Data for the cards (using clean text logos as requested) ---
const caseStudiesData = [
  {
    logoText: "Prosprly",
    logoColor: "text-blue-600",
    title: "How we helped Prosperly get 649 Sales Opportunities in 7 Months - resulting in 153 booked meetings",
    link: "#",
    quote: "“Outmate quickly felt like part of our sales team. It helped us reach the right people faster, so our reps stopped guessing who to call and spent their time in real conversations that actually moved deals forward.”",
    avatarUrl: "https://framerusercontent.com/images/XFhCK9TBR6GJ4hzVJjnpp6XNaAY.jpeg",
    author: "Mark White",
    authorTitle: "Founder"
  },
  {
    logoText: "SaleDraft",
    logoColor: "text-gray-800",
    title: "How We Helped SalesDraft Get 190 Sales Opportunities in 5 Months",
    link: "#",
    quote: "“With Outmate, our pipeline finally feels steady. In one quarter we went from random leads to a regular stream of good meetings on our calendars, and prospects often say the messages sound personal and relevant, not automated.”",
    avatarUrl: "https://framerusercontent.com/images/es32ENd9eNd9Lbk5qDilSrZXmg.jpeg",
    author: "Jhon Whitehead",
    authorTitle: "CEO"
  },
  {
    logoText: "Beslo",
    logoColor: "text-indigo-600",
    title: "How We Helped Besolo Generate 139 Sales Opportunities in 5 Months",
    link: "#",
    quote: "“Working with Outmate changed how our team sells. It takes care of the busy work like finding prospects and sending the first emails, so our sellers can focus on demos and closing, and we were able to reach new markets without adding more SDRs.”",
    avatarUrl: "https://framerusercontent.com/images/KNmsWHnpztNfi6nJYJ0Xj5IUFOE.jpeg",
    author: "Harry Jackson",
    authorTitle: "CEO"
  }
];

// --- Sub-component for a single card ---
const CaseStudyCard = ({ card, index }) => (
  <a 
    href={card.link}
    target="_blank"
    rel="noopener noreferrer"
    // THIS IS THE KEY:
    // 1. `sticky`: Makes the card stick to the top of its parent.
    // 2. `top`: We calculate a new top position for each card.
    //    `calc(8rem + ...)`: 8rem (128px) from the top of the viewport.
    //    `index * 1rem`: Each card is 1rem (16px) lower than the one before it.
    className="sticky block bg-white border border-[#E1E2E3] rounded-2xl shadow-sm overflow-hidden p-8 animate-card-stack"
    style={{ 
      top: `calc(8rem + ${index * 1}rem)`, // Creates the stack
      animationDelay: `${index * 100}ms`,
    }}
  >
    <div className="flex flex-col gap-6">
      
      {/* 1. Logo (Clean Text) */}
      <h2 className={`font-display text-4xl font-semibold h-12 flex items-center ${card.logoColor}`}>
        {card.logoText}
      </h2>
      
      {/* 2. Divider Line */}
      <div className="w-full h-px bg-[#E1E2E3]"></div>

      {/* 3. Title */}
      <h3 className="font-display font-semibold text-2xl md:text-3xl text-black leading-tight min-h-[64px]">
        {card.title}
      </h3>

      {/* 4. "Read Case Study" Link */}
      

      {/* 5. Testimonial Box */}
      <div className="relative bg-[#f4f4f4] rounded-lg p-6 mt-4 border border-[#E1E2E3]">
        {/* Faint Quote SVG in background */}
        <svg width="141" height="105" viewBox="-1 -1 141 105" fill="none" className="absolute top-4 left-4 w-20 h-auto opacity-10 text-black">
          <path d="M139 102.29H78.6946V57.8832L104.656 0.289551H128.453L107.36 53.5771H139V102.29ZM60.5759 102.29H0V57.8832L26.2315 0.289551H50.0292L28.9358 53.5771H60.5759V102.29Z" fill="currentColor"></path>
        </svg>

        {/* Quote Text */}
        <p className="relative z-10 font-display text-lg md:text-xl text-[#4d4d4d] leading-relaxed">
          {card.quote}
        </p>

        {/* Author Info */}
        <div className="relative z-10 flex items-center gap-3 mt-6">
          <img 
            src={card.avatarUrl} 
            alt={card.author}
            className="w-12 h-12 rounded-full border border-gray-200 object-cover" 
          />
          <div>
            <p className="font-display font-semibold text-base text-black">{card.author}</p>
            <p className="font-sans text-sm text-gray-500">{card.authorTitle}</p>
          </div>
        </div>
      </div>
    </div>
  </a>
);

// --- Main Section Component ---
const CaseStudiesSection = () => {
  return (
    <section 
      id="case-studies" 
      // Single-column, centered layout
      className="w-full max-w-[1024px] mx-auto px-4 pt-16 pb-20 border-t border-[#E1E2E3]"
    >
        
      {/* --- 1. CENTERED Title Block (This part scrolls away) --- */}
      <div className="flex flex-col items-center gap-6 mb-16">
        
        {/* Pill */}
        <div className="flex items-center gap-4">
          <svg width="40" height="10" viewBox="0 0 50 13" fill="none" className="opacity-20 hidden md:block">
            <path d="M42.9956 10.5L42.0222 9.52672L44.7897 6.75954L45.4386 6.32061L45.3624 6.0916L44.5798 6.18702L0.5 6.18703L0.5 4.81298L44.5798 4.81298L45.3624 4.9084L45.4386 4.67939L44.7897 4.24046L42.0222 1.47328L42.9956 0.5L47.5 5.00382V5.99618L42.9956 10.5Z" fill="black"/>
          </svg>
          <div className="border border-[#e2e2e2] bg-white rounded-full px-5 py-2 shadow-sm whitespace-nowrap">
            <p className="font-mono text-[11px] tracking-widest uppercase text-[#4D4D4D] font-medium">
              CASE STUDIES
            </p>
          </div>
          <svg width="40" height="10" viewBox="0 0 50 13" fill="none" className="opacity-20 hidden md:block rotate-180">
            <path d="M42.9956 10.5L42.0222 9.52672L44.7897 6.75954L45.4386 6.32061L45.3624 6.0916L44.5798 6.18702L0.5 6.18703L0.5 4.81298L44.5798 4.81298L45.3624 4.9084L45.4386 4.67939L44.7897 4.24046L42.0222 1.47328L42.9956 0.5L47.5 5.00382V5.99618L42.9956 10.5Z" fill="black"/>
          </svg>
        </div>
        
        {/* Title */}
        <h2 className="font-display font-semibold text-5xl md:text-6xl tracking-tight text-black text-center max-w-2xl">
          The growth we engineered
        </h2>
      </div>

      {/* --- 2. CENTERED Card Stack --- */}
      {/* This container has the list of cards. `gap-8` provides spacing *before* they stack */}
      <div className="relative flex flex-col gap-8">
        {caseStudiesData.map((card, index) => (
          <CaseStudyCard key={index} card={card} index={index} />
        ))}
        {/* This spacer div is important. It adds empty space at the end 
            so you have room to scroll past the final sticky card. */}
        <div className="h-96"></div>
      </div>
      <div className="flex justify-center mt-12">
        <a 
          href="https://apply.outmate.co/" 
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 bg-gradient-to-b from-[#1679fa] to-[#0a61d1] text-white px-5 py-3.5 rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
        >
          <span className="font-display font-medium text-lg">
            Request a call
          </span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="w-3.5 h-3.5 opacity-80 group-hover:opacity-100 transition-opacity">
            <path d="M 7.595 13 L 6.427 11.832 L 9.748 8.511 L 10.526 7.985 L 10.435 7.71 L 9.496 7.824 L 1 7.824 L 1 6.176 L 9.496 6.176 L 10.435 6.29 L 10.526 6.015 L 9.748 5.489 L 6.427 2.168 L 7.595 1 L 13 6.405 L 13 7.595 Z" fill="white"/>
          </svg>
        </a>
      </div>


    </section>
  );
};

export default CaseStudiesSection;