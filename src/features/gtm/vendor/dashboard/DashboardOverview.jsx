import React from "react";
import { useTheme } from "../../../../hooks/useTheme";

// MOCK DATA (unchanged)
const statsData = [
  { title: "Total Revenue", value: "$45,231.89", change: "+20.1%", trend: "up" },
  { title: "Active Jobs", value: "12", change: "+4.5%", trend: "up" },
  { title: "Talent Pool", value: "145", change: "-2.3%", trend: "down" },
  { title: "Pending Interviews", value: "8", change: "+12%", trend: "up" },
  { title: "Offers Sent", value: "3", change: "0%", trend: "neutral" },
  { title: "Avg. Time to Hire", value: "14 Days", change: "-5%", trend: "up" }
];

const DashboardOverview = () => {
  const { isLight } = useTheme();

  return (
    <div className="w-full">
      
      {/* 1. WELCOME HEADER */}
      <div className="mb-8">
        <h1 className={`text-3xl font-space font-bold ${isLight ? "text-gray-900" : "text-white"}`}>
          Welcome back, Mayank
        </h1>
        <p className={`text-sm mt-1 ${isLight ? "text-gray-500" : "text-[#888]"}`}>
          Measure your advertising ROI and report website traffic.
        </p>
      </div>

      {/* 2. STATS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {statsData.map((stat, index) => (
          <div 
            key={index}
            className={`
              p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 relative group
              ${isLight 
                // Stronger border and shadow for light mode visibility
                ? "bg-white border-gray-200 shadow-sm hover:shadow-md hover:border-purple-200" 
                : "bg-[#121212] border-[#222] hover:border-[#333]"
              }
            `}
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
              <span className={`text-sm font-medium ${isLight ? "text-gray-500" : "text-[#888]"}`}>
                {stat.title}
              </span>
              <button className={`p-1 rounded-full ${isLight ? "hover:bg-gray-50 text-gray-400" : "hover:bg-[#222] text-gray-600"}`}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
              </button>
            </div>

            {/* Value + Trend */}
            <div className="flex items-end justify-between">
              <h3 className={`text-2xl font-bold ${isLight ? "text-gray-900" : "text-white"}`}>
                {stat.value}
              </h3>
              <span className={`
                text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1
                ${stat.trend === "up" 
                  ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" 
                  : stat.trend === "down" 
                    ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                    : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                }
              `}>
                {stat.trend === "up" && "↑"}
                {stat.trend === "down" && "↓"}
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* 3. ANALYTICS GRAPH CONTAINER */}
      <div className={`
        w-full p-6 rounded-[32px] border mb-8
        ${isLight 
          ? "bg-white border-gray-200 shadow-sm" 
          : "bg-[#121212] border-[#222]"
        }
      `}>
        {/* ... (Graph logic remains the same, just ensured container has contrast) ... */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* LEFT: MAIN CHART */}
          <div className="flex-grow">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className={`text-lg font-bold ${isLight ? "text-gray-900" : "text-white"}`}>Revenue Overview</h3>
                <p className={`text-xs ${isLight ? "text-gray-500" : "text-[#666]"}`}>(+5%) more in 2024</p>
              </div>
              <div className="flex gap-2">
                 {['1D', '1W', '1M', '1Y'].map(t => (
                   <button key={t} className={`text-xs px-3 py-1 rounded-lg ${t === '1M' ? (isLight ? "bg-black text-white" : "bg-white text-black") : (isLight ? "text-gray-500 bg-gray-100" : "text-[#888] bg-[#1a1a1a]")}`}>{t}</button>
                 ))}
              </div>
            </div>

            <div className="relative h-[300px] w-full flex items-end justify-between gap-1 overflow-hidden group">
               {Array.from({ length: 40 }).map((_, i) => {
                 const height = Math.floor(Math.random() * 60) + 20 + "%";
                 return (
                   <div 
                     key={i}
                     className={`flex-1 rounded-t-sm transition-all duration-500 ease-in-out group-hover:opacity-80 ${isLight ? "bg-purple-100 hover:bg-purple-500" : "bg-purple-900/20 hover:bg-purple-500"}`}
                     style={{ height: height }}
                   ></div>
                 );
               })}
            </div>
          </div>

          {/* RIGHT: SMALLER METRICS */}
          <div className={`w-full lg:w-[300px] flex flex-col gap-6 border-l pl-0 lg:pl-8 ${isLight ? "border-gray-100" : "border-[#222]"}`}>
            <div>
               <h4 className={`text-sm font-bold mb-2 ${isLight ? "text-gray-900" : "text-white"}`}>Total Sales</h4>
               <div className={`h-[100px] rounded-xl relative overflow-hidden flex items-center justify-center ${isLight ? "bg-orange-50" : "bg-orange-900/10"}`}>
                  <span className="text-orange-500 text-2xl font-bold">$12K</span>
               </div>
            </div>
            <div>
               <h4 className={`text-sm font-bold mb-2 ${isLight ? "text-gray-900" : "text-white"}`}>Visitors</h4>
               <div className={`h-[100px] rounded-xl relative overflow-hidden flex items-center justify-center ${isLight ? "bg-blue-50" : "bg-blue-900/10"}`}>
                  <span className="text-blue-500 text-2xl font-bold">2.4M</span>
               </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default DashboardOverview;