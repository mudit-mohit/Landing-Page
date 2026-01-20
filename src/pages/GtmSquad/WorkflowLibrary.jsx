import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useTheme } from "../../hooks/useTheme';
import { getWorkflows } from "../../services/api';

import WorkflowHero from "../../features/gtm/workflows/WorkflowHero';
import WorkflowGrid from "../../features/gtm/workflows/WorkflowGrid'; 

const WorkflowLibrary = () => {
  const { isLight } = useTheme();

  // STATE
  const [workflows, setWorkflows] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState(""); 
  const [category, setCategory] = useState(""); // ✅ Added Category State
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // FETCH LOGIC
  const fetchWorkflows = async (reset = false) => {
    setLoading(true);
    const currentPage = reset ? 1 : page;
    
    try {
      // ✅ Pass category to API
      const data = await getWorkflows(currentPage, search, category);
      
      if (reset) {
        setWorkflows(data.workflows);
      } else {
        setWorkflows(prev => [...prev, ...data.workflows]);
      }
      
      if (data.totalWorkflows !== undefined) setTotalCount(data.totalWorkflows);
      setHasMore(currentPage < data.totalPages);

    } catch (err) {
      console.error("Fetch failed", err);
    } finally {
      setLoading(false);
    }
  };

  // 1. TRIGGER SEARCH
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setPage(1);
      fetchWorkflows(true);
    }, 500); 
    return () => clearTimeout(timeoutId);
  }, [search]);

  // ✅ 2. TRIGGER CATEGORY FILTER (Immediate)
  useEffect(() => {
    setPage(1);
    fetchWorkflows(true);
  }, [category]);

  // 3. LOAD MORE
  const handleLoadMore = () => setPage(prev => prev + 1);

  useEffect(() => {
    if (page > 1) fetchWorkflows(false);
  }, [page]);

  const pageBackground = {
    background: isLight 
      ? `radial-gradient(circle at 0% 0%, rgba(139, 92, 246, 0.20) 0%, transparent 50%), 
         radial-gradient(circle at 100% 20%, rgba(59, 130, 246, 0.20) 0%, transparent 50%), 
         radial-gradient(circle at 0% 60%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), 
         radial-gradient(circle at 100% 90%, rgba(139, 92, 246, 0.20) 0%, transparent 50%), 
         linear-gradient(to bottom, #f5f3ff, #f0f9ff, #fdf4ff)` 
      : "radial-gradient(50% 50% at 50% 50%, rgba(76, 29, 149, 0.35) 0%, rgba(10, 10, 10, 1) 100%), #0a0a0a",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    minHeight: "100vh",
    width: "100%"
  };

  return (
    <div style={pageBackground} className="min-h-screen w-full relative transition-colors duration-300">
      <Helmet>
        <title>n8n Workflow Library | GenSquad</title>
      </Helmet>

      <div className="pt-[30px]">
        {/* ✅ Pass category handler */}
        <WorkflowHero onSearch={setSearch} onCategoryChange={setCategory} />
      </div>

      <WorkflowGrid 
        workflows={workflows}
        totalCount={totalCount} 
        onLoadMore={handleLoadMore} 
        hasMore={hasMore} 
        loading={loading}
      />
    </div>
  );
};

export default WorkflowLibrary;