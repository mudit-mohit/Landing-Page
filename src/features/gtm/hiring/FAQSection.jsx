import React, { useState } from 'react';

const FAQSection = ({ faq, isLight }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section className="w-full py-10 px-6 lg:px-[60px] relative z-10">
      <div className="max-w-[1000px] mx-auto">
        <div className="mb-16 text-center">
          <h2 className={`text-3xl sm:text-4xl font-space font-bold ${isLight ? "text-gray-900" : "text-white"}`}>
            Frequently asked questions
          </h2>
        </div>
        <div className={`w-full rounded-[32px] border overflow-hidden ${isLight ? "bg-white border-gray-200 shadow-xl" : "bg-[#111] border-[#222] shadow-2xl"}`}>
          <div className="flex flex-col">
            {faq.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className={`border-b transition-colors ${isLight ? "border-gray-100" : "border-[#222]"} last:border-none`}>
                  <button onClick={() => toggleFaq(index)} className="w-full py-8 px-8 flex items-start justify-between text-left group">
                    <span className={`text-xl sm:text-2xl font-medium pr-8 transition-colors duration-300 ${isOpen ? "text-purple-600" : (isLight ? "text-gray-900 group-hover:text-purple-600" : "text-white group-hover:text-purple-400")}`}>
                      {item.question}
                    </span>
                    <div className={`relative w-6 h-6 flex-shrink-0 mt-1 transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}>
                      <span className={`absolute top-1/2 left-0 w-full h-[2px] -translate-y-1/2 rounded-full ${isLight ? "bg-gray-400" : "bg-gray-500"} ${isOpen ? "bg-purple-600" : ""}`}></span>
                      <span className={`absolute top-0 left-1/2 h-full w-[2px] -translate-x-1/2 rounded-full ${isLight ? "bg-gray-400" : "bg-gray-500"} ${isOpen ? "bg-purple-600" : ""}`}></span>
                    </div>
                  </button>
                  <div className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 pb-8" : "grid-rows-[0fr] opacity-0 pb-0"}`}>
                    <div className="overflow-hidden px-8">
                      <p className={`text-lg leading-relaxed max-w-[800px] ${isLight ? "text-gray-600" : "text-[#bababa]"}`}>
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;