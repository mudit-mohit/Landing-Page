import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../../../hooks/useTheme";

const VendorSidebar = ({ isCollapsed, toggleCollapse }) => {
  const { isLight, toggleTheme } = useTheme();
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/vendor/dashboard", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
    // ✅ RENAMED: Add Talent (Form)
    { name: "Add Talent", path: "/vendor/all-talent", icon: "M12 4v16m8-8H4" }, 
    // ✅ RENAMED: All Talent (List)
    { name: "All Talent", path: "/vendor/talent-list", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
    { name: "Settings", path: "/vendor/settings", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" },
  ];

  return (
    <aside 
      className={`
        relative h-screen flex flex-col border-r transition-all duration-300 z-50
        ${isCollapsed ? "w-[80px]" : "w-[280px]"}
        ${isLight 
          ? "bg-white border-gray-200 shadow-[4px_0_24px_rgba(0,0,0,0.02)]" 
          : "bg-[#0a0a0a] border-[#222]"
        }
      `}
    >
      {/* 1. HEADER */}
      <div className={`h-[80px] flex items-center justify-between px-6 border-b ${isLight ? "border-gray-100" : "border-[#1a1a1a]"}`}>
        {!isCollapsed && (
          <span className={`text-xl font-space font-bold tracking-tight ${isLight ? "text-gray-900" : "text-white"}`}>
            GenSquad
          </span>
        )}
        <button 
          onClick={toggleCollapse}
          className={`p-2 rounded-lg transition-colors ${isLight ? "hover:bg-gray-100 text-gray-500" : "hover:bg-[#222] text-[#888]"} ${isCollapsed ? "mx-auto" : ""}`}
        >
          {isCollapsed ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><path d="M9 3v18"/></svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 19l-7-7 7-7"/><path d="M19 12H4"/></svg>
          )}
        </button>
      </div>

      {/* 2. SEARCH */}
      <div className={`px-4 py-4 ${isCollapsed ? "hidden" : "block"}`}>
        <div className={`flex items-center px-3 py-2.5 rounded-xl border ${isLight ? "bg-gray-50 border-gray-200 focus-within:border-gray-300 focus-within:bg-white" : "bg-[#161616] border-[#333]"}`}>
          <svg width="16" height="16" className={`mr-2 ${isLight ? "text-gray-400" : "text-[#666]"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
          <input type="text" placeholder="Search..." className={`bg-transparent outline-none text-sm w-full font-dm ${isLight ? "text-gray-900 placeholder-gray-400" : "text-white placeholder-[#555]"}`} />
        </div>
      </div>

      {/* 3. NAV LINKS */}
      <nav className="flex-1 px-3 space-y-1 mt-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`
                flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group relative font-medium
                ${isActive 
                  ? isLight ? "bg-purple-50 text-purple-700 shadow-sm border border-purple-100" : "bg-purple-900/20 text-purple-300 border border-purple-500/20"
                  : isLight ? "text-gray-600 hover:bg-gray-50 hover:text-gray-900" : "text-[#888] hover:bg-[#161616] hover:text-white"
                }
                ${isCollapsed ? "justify-center" : ""}
              `}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d={item.icon} />
              </svg>
              {!isCollapsed && <span className="text-sm">{item.name}</span>}
            </Link>
          );
        })}
      </nav>

      {/* 4. FOOTER */}
      <div className={`p-4 border-t ${isLight ? "border-gray-200" : "border-[#222]"}`}>
        <button
          onClick={toggleTheme}
          className={`
            w-full flex items-center gap-3 px-3 py-2.5 rounded-xl mb-4 transition-colors border
            ${isLight ? "border-gray-200 bg-white text-gray-600 hover:bg-gray-50 shadow-sm" : "border-[#333] bg-[#161616] hover:bg-[#222] text-[#888]"}
            ${isCollapsed ? "justify-center" : ""}
          `}
        >
          {isLight ? (
            <>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
              {!isCollapsed && <span className="text-sm font-medium">Light Mode</span>}
            </>
          ) : (
            <>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
              {!isCollapsed && <span className="text-sm font-medium">Dark Mode</span>}
            </>
          )}
        </button>

        <div className={`flex items-center gap-3 ${isCollapsed ? "justify-center" : ""}`}>
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 flex-shrink-0 border-2 border-white dark:border-[#222] shadow-sm"></div>
          {!isCollapsed && (
            <div className="overflow-hidden">
              <p className={`text-sm font-bold truncate ${isLight ? "text-gray-900" : "text-white"}`}>John Doe</p>
              <p className={`text-xs truncate ${isLight ? "text-gray-500" : "text-[#666]"}`}>Vendor Admin</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default VendorSidebar;