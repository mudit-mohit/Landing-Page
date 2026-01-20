import React from 'react';

const FeatureGrid = ({ title, subtitle, cards, isLight, variant = "soft" }) => {
  return (
    <section className="w-full py-10 px-6 lg:px-[60px] relative z-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className={`text-4xl sm:text-5xl font-space font-bold mb-6 ${isLight ? "text-gray-900" : "text-white"}`}>
            {title}
          </h2>
          <p className={`text-lg sm:text-xl max-w-[800px] mx-auto leading-relaxed ${isLight ? "text-gray-600" : "text-[#bababa]"}`}>
            {subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => {
            
            // Logic for "Soft" style (Augmentation) vs "Bold" style (Industry)
            const getColorClasses = (colorName) => {
              if (variant === "bold") {
                // Section 4 Style: Bold Icons (bg-blue-500)
                const boldMap = {
                  yellow: { iconBg: "bg-yellow-500", text: "text-yellow-500", border: "group-hover:border-yellow-500" },
                  blue: { iconBg: "bg-blue-500", text: "text-blue-500", border: "group-hover:border-blue-500" },
                  purple: { iconBg: "bg-purple-500", text: "text-purple-500", border: "group-hover:border-purple-500" },
                  cyan: { iconBg: "bg-cyan-500", text: "text-cyan-500", border: "group-hover:border-cyan-500" },
                  red: { iconBg: "bg-red-500", text: "text-red-500", border: "group-hover:border-red-500" },
                  green: { iconBg: "bg-green-500", text: "text-green-500", border: "group-hover:border-green-500" },
                  orange: { iconBg: "bg-orange-500", text: "text-orange-500", border: "group-hover:border-orange-500" },
                  pink: { iconBg: "bg-pink-500", text: "text-pink-500", border: "group-hover:border-pink-500" },
                };
                const theme = boldMap[colorName] || boldMap.blue;
                return {
                    iconWrapper: `text-white shadow-lg ${theme.iconBg}`,
                    activeLine: `bg-${colorName}-500`, // Not used in bold variant usually, but good fallback
                    container: isLight ? `bg-white border-gray-100 shadow-lg shadow-gray-200/50 ${theme.border}` : `bg-[#111] border-[#222] shadow-2xl ${theme.border}`
                };
              } else {
                // Section 2 Style: Soft Icons (bg-blue-50)
                const softMap = {
                    blue: isLight ? "bg-blue-50 text-blue-600" : "bg-blue-900/20 text-blue-400",
                    purple: isLight ? "bg-purple-50 text-purple-600" : "bg-purple-900/20 text-purple-400",
                    pink: isLight ? "bg-pink-50 text-pink-600" : "bg-pink-900/20 text-pink-400",
                    orange: isLight ? "bg-orange-50 text-orange-600" : "bg-orange-900/20 text-orange-400",
                    green: isLight ? "bg-green-50 text-green-600" : "bg-green-900/20 text-green-400",
                    cyan: isLight ? "bg-cyan-50 text-cyan-600" : "bg-cyan-900/20 text-cyan-400",
                    yellow: isLight ? "bg-yellow-50 text-yellow-600" : "bg-yellow-900/20 text-yellow-400",
                    red: isLight ? "bg-red-50 text-red-600" : "bg-red-900/20 text-red-400",
                };
                const activeColor = softMap[colorName] || softMap.blue;
                return {
                    iconWrapper: `transition-all duration-300 shadow-sm ${activeColor}`,
                    activeLine: `bg-${colorName}-500`,
                    container: isLight ? "bg-white border-gray-100 shadow-xl shadow-purple-500/5 hover:shadow-2xl" : "bg-[#111] border-[#222] shadow-2xl hover:shadow-purple-900/10"
                };
              }
            };

            const styles = getColorClasses(card.color);

            return (
              <div key={index} className={`group relative p-8 rounded-[32px] border transition-all duration-500 hover:-translate-y-2 z-20 ${styles.container}`}>
                {/* Soft Gradient for Variant 'soft' */}
                {variant === 'soft' && (
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[32px] pointer-events-none bg-gradient-to-br from-transparent via-transparent to-${card.color}-500/5`}></div>
                )}

                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${styles.iconWrapper}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d={card.icon} /></svg>
                </div>
                
                <h3 className={`text-xl font-bold mb-3 transition-colors ${isLight ? "text-gray-900" : "text-white"}`}>{card.title}</h3>
                <p className={`text-base leading-relaxed ${isLight ? "text-gray-600" : "text-[#888]"}`}>{card.description}</p>
                
                {/* Bottom Line for Variant 'soft' */}
                {variant === 'soft' && (
                    <div className={`absolute bottom-0 left-8 right-8 h-[3px] ${styles.activeLine} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;