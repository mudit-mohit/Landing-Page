import React, { useState } from "react";
import { useTheme } from "../../../hooks/useTheme";
import WorkflowModal from "./WorkflowModal";
import { getWorkflowDetails } from "../../../services/api";

const getTagColor = (tag, isLight) => {
  const colors = [
    isLight ? "bg-blue-100 text-blue-700" : "bg-blue-900/30 text-blue-300",
    isLight ? "bg-purple-100 text-purple-700" : "bg-purple-900/30 text-purple-300",
    isLight ? "bg-orange-100 text-orange-700" : "bg-orange-900/30 text-orange-300",
    isLight ? "bg-green-100 text-green-700" : "bg-green-900/30 text-green-300",
  ];
  const index = tag.length % colors.length;
  return colors[index];
};

const WorkflowGrid = ({ workflows = [], totalCount = 0, onLoadMore, hasMore, loading }) => {
  const { isLight } = useTheme();
  const [selectedWorkflowId, setSelectedWorkflowId] = useState(null);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-[40px] pb-20">
      <div className="max-w-[1440px] mx-auto">
        
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row justify-between items-end sm:items-center mb-10 border-b pb-4 border-gray-200 dark:border-white/10">
          <h2 className={`font-space font-bold text-2xl sm:text-3xl ${isLight ? "text-gray-900" : "text-white"}`}>
            Search Results
          </h2>
          <span className={`text-sm font-medium px-3 py-1 rounded-full border mt-2 sm:mt-0 ${isLight ? "bg-purple-50 text-purple-700 border-purple-100" : "bg-white/5 text-purple-300 border-white/10"}`}>
            {loading && workflows.length === 0 ? "Searching..." : `${totalCount} Workflows Found`}
          </span>
        </div>

        {/* LOADING */}
        {loading && workflows.length === 0 && (
             <div className="py-20 text-center animate-pulse">
                <p className={isLight ? "text-gray-500" : "text-gray-400"}>Loading workflows...</p>
             </div>
        )}

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {workflows.map((workflow) => (
            <WorkflowCard 
              key={workflow._id || workflow.id} 
              data={workflow} 
              isLight={isLight} 
              onOpen={() => setSelectedWorkflowId(workflow._id)} 
            />
          ))}
        </div>

        {/* LOAD MORE */}
        {hasMore && (
          <div className="mt-16 flex justify-center">
            <button 
                onClick={onLoadMore} 
                disabled={loading}
                className={`px-8 py-3 rounded-xl font-bold text-sm transition-all duration-300 border ${isLight ? "bg-white border-gray-200 text-gray-700 hover:border-purple-500 hover:text-purple-600 shadow-sm" : "bg-[#121212] border-[#333] text-[#bababa] hover:border-purple-500 hover:text-white"}`}
            >
              {loading ? "Loading..." : "Load More Workflows"}
            </button>
          </div>
        )}
      </div>

      <WorkflowModal 
          isOpen={!!selectedWorkflowId} 
          workflowId={selectedWorkflowId}
          onClose={() => setSelectedWorkflowId(null)} 
      />
    </section>
  );
};

// ✅ HELPER: FORMAT WORKFLOW NAME
const formatWorkflowName = (name) => {
    if (!name) return "Untitled Workflow";
    // 1. Remove leading numbers followed by underscore (e.g. "0280_" -> "")
    // 2. Replace all remaining underscores and dashes with spaces
    return name
        .replace(/^\d+[_-]/, '') // Remove starting "1234_"
        .replace(/[_-]/g, ' ')   // Replace remaining "_" or "-" with space
        .trim();
};

const WorkflowCard = ({ data, isLight, onOpen }) => {
  const tags = data.nodes || data.tags || [];
  const maxTags = 5;
  const showTags = tags.slice(0, maxTags);
  const remainingTags = tags.length - maxTags;

  // ✅ USE FORMATTER HERE
  const displayName = formatWorkflowName(data.name || data.title);

  const [copyStatus, setCopyStatus] = useState("Copy JSON"); 

  const handleCopy = async (e) => {
    e.stopPropagation(); 
    if (copyStatus !== "Copy JSON") return; 

    setCopyStatus("Copying...");

    try {
        const fullData = await getWorkflowDetails(data._id);

        if (fullData && fullData.json) {
            let cleanJson = fullData.json;
            if (typeof cleanJson === 'string') {
                try { cleanJson = JSON.parse(cleanJson); } catch (e) {}
            }
            const n8nPayload = {
                nodes: cleanJson.nodes || [],
                connections: cleanJson.connections || {},
                settings: cleanJson.settings || {},
                meta: cleanJson.meta || {},
                pinData: cleanJson.pinData || {}
            };
            await navigator.clipboard.writeText(JSON.stringify(n8nPayload, null, 2));
            setCopyStatus("Copied!");
        } else {
            setCopyStatus("Error");
        }
    } catch (err) {
        console.error("Copy failed", err);
        setCopyStatus("Error");
    }

    setTimeout(() => setCopyStatus("Copy JSON"), 2000);
  };

  return (
    <div 
      onClick={onOpen}
      className={`
        group relative flex flex-col justify-between h-full p-6 rounded-[24px] border transition-all duration-300 cursor-pointer
        hover:-translate-y-1 hover:shadow-xl
        ${isLight 
          ? "bg-white/80 border-gray-100 shadow-sm hover:border-purple-200" 
          : "bg-[#161616]/80 border-[#333] shadow-lg hover:border-purple-500/30"
        }
      `}
    >
      <div>
        <div className="mb-4">
           <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isLight ? "bg-orange-100 text-orange-600" : "bg-orange-900/20 text-orange-500"}`}>
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
           </div>
        </div>

        {/* ✅ DISPLAY CLEAN NAME */}
        <h3 className={`font-space font-bold text-lg leading-tight mb-3 line-clamp-2 ${isLight ? "text-gray-900 group-hover:text-purple-600 transition-colors" : "text-white group-hover:text-purple-400 transition-colors"}`}>
          {displayName}
        </h3>

        <p className={`text-sm leading-relaxed mb-6 line-clamp-3 ${isLight ? "text-gray-600" : "text-[#bababa]"}`}>
          {data.description || `Automated workflow connecting ${tags.slice(0, 3).join(', ')} and more.`}
        </p>

        <div className="flex flex-wrap gap-2 mb-6 h-[86px] content-start overflow-hidden relative">
          {showTags.map((tag, i) => (
            <span key={i} className={`px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wide ${getTagColor(tag, isLight)}`}>
              {tag}
            </span>
          ))}
          {remainingTags > 0 && (
            <span className={`px-2 py-1 rounded-md text-[11px] font-bold border ${isLight ? "bg-gray-50 text-gray-500 border-gray-200" : "bg-[#222] text-gray-400 border-[#444]"}`}>
              +{remainingTags}
            </span>
          )}
        </div>
      </div>

      <div className={`pt-5 mt-auto border-t flex items-center gap-3 ${isLight ? "border-gray-100" : "border-[#2a2a2a]"}`}>
        
        <button 
          onClick={handleCopy}
          className={`
            flex-1 py-2.5 rounded-lg text-sm font-bold border flex items-center justify-center gap-2 transition-colors 
            ${isLight ? "border-gray-200 text-gray-700 hover:bg-gray-50" : "border-[#333] text-[#ccc] hover:bg-[#222]"}
            ${copyStatus === "Copied!" ? "text-green-500 border-green-500/50" : ""}
          `}
        >
          {copyStatus === "Copying..." ? (
             <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></span>
          ) : copyStatus === "Copied!" ? (
             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
          ) : (
             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          )}
          {copyStatus}
        </button>

        <button 
          onClick={(e) => { e.stopPropagation(); onOpen(); }}
          className={`flex-1 py-2.5 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-transform active:scale-95 bg-[#ff6d5a] text-white hover:bg-[#ff5a45]`}
        >
          <span>View Code</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    </div>
  );
};

export default WorkflowGrid;