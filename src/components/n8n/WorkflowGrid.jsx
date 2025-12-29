import React, { useState } from "react";
import WorkflowModal from "./WorkflowModal";
import { getWorkflowDetails } from "../../services/n8nApi";

// Helper for Tag Colors (using Outmate style subtleness)
const getTagColor = (tag) => {
  return "bg-[#f4f4f4] text-[#4d4d4d] border border-[#E1E2E3]";
};

// Helper: Format Name
const formatWorkflowName = (name) => {
    if (!name) return "Untitled Workflow";
    return name
        .replace(/^\d+[_-]/, '') 
        .replace(/[_-]/g, ' ') 
        .trim();
};

const WorkflowGrid = ({ workflows = [], totalCount = 0, onLoadMore, hasMore, loading }) => {
  const [selectedWorkflowId, setSelectedWorkflowId] = useState(null);

  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 pb-20">
      
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row justify-between items-end sm:items-center mb-10 border-b border-[#E1E2E3] pb-4">
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-black">
          Search Results
        </h2>
        <span className="text-sm font-medium px-3 py-1 rounded-full border border-[#E1E2E3] bg-white text-[#4d4d4d] mt-2 sm:mt-0">
          {loading && workflows.length === 0 ? "Searching..." : `${totalCount} Workflows Found`}
        </span>
      </div>

      {/* LOADING */}
      {loading && workflows.length === 0 && (
           <div className="py-20 text-center animate-pulse">
              <p className="text-gray-400 font-display">Loading workflows...</p>
           </div>
      )}

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workflows.map((workflow) => (
          <WorkflowCard 
            key={workflow._id || workflow.id} 
            data={workflow} 
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
              className="px-8 py-3 rounded-xl font-bold text-sm transition-all duration-300 border border-[#E1E2E3] bg-white text-black hover:border-black shadow-sm hover:shadow-md"
          >
            {loading ? "Loading..." : "Load More Workflows"}
          </button>
        </div>
      )}

      <WorkflowModal 
          isOpen={!!selectedWorkflowId} 
          workflowId={selectedWorkflowId}
          onClose={() => setSelectedWorkflowId(null)} 
      />
    </section>
  );
};

const WorkflowCard = ({ data, onOpen }) => {
  const tags = data.nodes || data.tags || [];
  const maxTags = 4;
  const showTags = tags.slice(0, maxTags);
  const remainingTags = tags.length - maxTags;
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
      className="group flex flex-col justify-between h-full p-6 bg-white border border-[#E1E2E3] rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:-translate-y-1"
    >
      <div>
        <div className="mb-4">
           <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#f4f4f4] text-[#1679fa] border border-[#E1E2E3]">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
           </div>
        </div>

        <h3 className="font-display font-bold text-lg leading-tight mb-3 line-clamp-2 text-black group-hover:text-[#1679fa] transition-colors">
          {displayName}
        </h3>

        <p className="text-sm font-sans leading-relaxed mb-6 line-clamp-3 text-[#4d4d4d]">
          {data.description || `Automated workflow connecting ${tags.slice(0, 3).join(', ')} and more.`}
        </p>

        <div className="flex flex-wrap gap-2 mb-6 content-start overflow-hidden relative">
          {showTags.map((tag, i) => (
            <span key={i} className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide ${getTagColor(tag)}`}>
              {tag}
            </span>
          ))}
          {remainingTags > 0 && (
            <span className="px-2 py-1 rounded-md text-[10px] font-bold border bg-gray-50 text-gray-500 border-gray-200">
              +{remainingTags}
            </span>
          )}
        </div>
      </div>

      <div className="pt-5 mt-auto border-t border-[#E1E2E3] flex items-center gap-3">
        
        <button 
          onClick={handleCopy}
          className={`flex-1 py-2.5 rounded-lg text-sm font-bold border flex items-center justify-center gap-2 transition-colors border-[#E1E2E3] text-[#4d4d4d] hover:bg-[#f4f4f4] ${copyStatus === "Copied!" ? "text-green-600 border-green-200 bg-green-50" : ""}`}
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
          className="flex-1 py-2.5 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-transform active:scale-95 bg-black text-white hover:bg-gray-800"
        >
          <span>Details</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    </div>
  );
};

export default WorkflowGrid;