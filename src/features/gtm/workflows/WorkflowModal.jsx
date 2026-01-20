import React, { useEffect, useState } from "react";
import { useTheme } from "../../../hooks/useTheme";
import { getWorkflowDetails } from "../../../services/api";

const WorkflowModal = ({ isOpen, onClose, workflowId }) => {
  const { isLight } = useTheme();

  // State
  const [workflow, setWorkflow] = useState(null);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState("details"); 
  const [copyBtnText, setCopyBtnText] = useState("Copy JSON Code");

  // Prevent background scrolling
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  // Fetch Data
  useEffect(() => {
    if (isOpen && workflowId) {
      setLoading(true);
      setViewMode("details");
      getWorkflowDetails(workflowId).then((data) => {
        setWorkflow(data);
        setLoading(false);
      });
    }
  }, [isOpen, workflowId]);

  // ✅ SANITIZED COPY HANDLER
  const handleCopyJSON = () => {
    if (workflow && workflow.json) {
      let cleanJson = workflow.json;
            
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

      navigator.clipboard.writeText(JSON.stringify(n8nPayload, null, 2));
      setCopyBtnText("Copied!");
      setTimeout(() => setCopyBtnText("Copy JSON Code"), 2000);
    }
  };

  if (!isOpen) return null;

  const data = workflow || {};
  const tags = data.nodes || [];

  return (
    // BACKDROP
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      {/* MODAL CONTAINER */}
      <div 
        className={`
          relative w-full max-w-2xl rounded-2xl shadow-2xl animate-fade-in-up 
          flex flex-col max-h-[85vh] overflow-hidden
          ${isLight ? "bg-white" : "bg-[#1a1a1a] border border-[#333]"}
        `}
      >
        
        {/* 1. HEADER */}
        <div className={`flex items-start justify-between p-6 border-b shrink-0 ${isLight ? "border-gray-100" : "border-[#333]"}`}>
          <div className="min-w-0 flex-1 pr-4">
            <h3 className={`text-xl font-space font-bold  break-words ${isLight ? "text-gray-900" : "text-white"}`}>
              {loading ? "Loading..." : (data.name || data.title)}
            </h3>
            <span className={`text-xs font-medium mt-1 block ${isLight ? "text-gray-500" : "text-[#888]"}`}>
              ID: #{workflowId?.slice(-6)} • Verified Workflow
            </span>
          </div>
          <button 
            onClick={onClose}
            className={`p-2 rounded-full shrink-0 transition-colors ${isLight ? "hover:bg-gray-100 text-gray-500" : "hover:bg-[#333] text-[#888]"}`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* 2. CONTENT */}
        <div className="overflow-y-auto p-6 custom-scrollbar relative w-full flex-1 min-h-0">
          
          {loading ? (
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
             </div>
          ) : viewMode === "details" ? (
             /* DETAILS VIEW */
             <div>
                <div className="mb-8">
                  <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 ${isLight ? "text-gray-400" : "text-[#666]"}`}>
                    Description
                  </h4>
                  <p className={`text-sm leading-relaxed break-words ${isLight ? "text-gray-600" : "text-[#bababa]"}`}>
                    {data.description || "This workflow automates processes by connecting multiple nodes. Use the 'View Code' button to see the full JSON configuration."}
                  </p>
                </div>

                <div className="mb-8">
                  <h4 className={`text-xs font-bold uppercase tracking-wider mb-3 ${isLight ? "text-gray-400" : "text-[#666]"}`}>
                    Details
                  </h4>
                  <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl ${isLight ? "bg-gray-50" : "bg-[#222]"}`}>
                    <div>
                      <span className={`block text-xs mb-1 ${isLight ? "text-gray-400" : "text-[#666]"}`}>Nodes</span>
                      <span className={`font-medium text-sm ${isLight ? "text-gray-800" : "text-white"}`}>{tags.length} Nodes</span>
                    </div>
                    <div>
                      <span className={`block text-xs mb-1 ${isLight ? "text-gray-400" : "text-[#666]"}`}>Status</span>
                      <span className="inline-flex items-center gap-1.5 font-medium text-sm text-green-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Active
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className={`text-xs font-bold uppercase tracking-wider mb-3 ${isLight ? "text-gray-400" : "text-[#666]"}`}>
                    Integrations
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {tags.slice(0, 10).map((tag, i) => (
                      <span key={i} className={`px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wide border ${isLight ? "bg-white border-gray-200 text-gray-600" : "bg-[#252525] border-[#333] text-[#ccc]"}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
             </div>
          ) : (
             /* CODE VIEW */
             <div className="h-full w-full max-w-full">
                <div className={`
                   w-full h-full p-4 rounded-xl overflow-auto font-mono text-xs whitespace-pre custom-scrollbar max-w-full
                   ${isLight ? "bg-slate-50 text-slate-700 border border-gray-100" : "bg-[#111] text-green-400 border border-[#333]"}
                `}>
                   {JSON.stringify(data.json, null, 2)}
                </div>
             </div>
          )}
        </div>

        {/* 3. FOOTER */}
        <div className={`p-6 border-t flex flex-col sm:flex-row gap-3 shrink-0 ${isLight ? "border-gray-100 bg-gray-50/50" : "border-[#333] bg-[#222]/30"}`}>
          
          <button 
            onClick={handleCopyJSON}
            className={`
              flex-1 py-3 rounded-xl text-sm font-bold border flex items-center justify-center gap-2 transition-colors
              ${isLight 
                ? "bg-white border-gray-200 text-gray-700 hover:bg-gray-50" 
                : "bg-[#252525] border-[#333] text-[#ccc] hover:bg-[#333]"
              }
            `}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            {copyBtnText}
          </button>

          <button 
            onClick={() => setViewMode(prev => prev === 'details' ? 'code' : 'details')}
            className={`
              flex-1 py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-transform active:scale-95 text-white
              bg-gradient-to-r from-[#ff6d5a] to-[#ff4f81] shadow-lg shadow-orange-500/20
            `}
          >
            {viewMode === 'details' ? (
                <>
                   <span>View JSON Code</span>
                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                </>
            ) : (
                <>
                   <span>Back to Details</span>
                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                </>
            )}
          </button>
        </div>
      </div>
      
      {/* CSS */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; height: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: ${isLight ? '#cbd5e1' : '#444'}; border-radius: 10px; }
        
        @keyframes fadeInUpModal {
          from { opacity: 0; transform: translateY(10px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fade-in-up {
          animation: fadeInUpModal 0.25s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default WorkflowModal;