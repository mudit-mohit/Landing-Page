import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WorkflowHero from '../components/n8n/WorkflowHero';
import WorkflowGrid from '../components/n8n/WorkflowGrid';
import { getWorkflows } from '../services/n8nApi';

const N8nWorkflowsPage = () => {
  const [workflows, setWorkflows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [totalCount, setTotalCount] = useState(0);

  // Initial Load & Filter Changes
  useEffect(() => {
    fetchData(1, true);
  }, [search, category]);

  const fetchData = async (pageNum, reset = false) => {
    setLoading(true);
    const data = await getWorkflows(pageNum, search, category);
    
    if (reset) {
        setWorkflows(data.workflows);
    } else {
        setWorkflows(prev => [...prev, ...data.workflows]);
    }
    
    setTotalCount(data.totalWorkflows);
    setHasMore(pageNum < data.totalPages);
    setLoading(false);
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchData(nextPage, false);
  };

  return (
    <div className="min-h-screen w-full bg-[#f4f4f4] font-sans">
      <Navbar />
      <WorkflowHero 
        onSearch={setSearch} 
        onCategoryChange={setCategory} 
        activeCategory={category}
      />
      <WorkflowGrid 
        workflows={workflows} 
        totalCount={totalCount} 
        onLoadMore={handleLoadMore} 
        hasMore={hasMore} 
        loading={loading}
      />
      <Footer />
    </div>
  );
};

export default N8nWorkflowsPage;