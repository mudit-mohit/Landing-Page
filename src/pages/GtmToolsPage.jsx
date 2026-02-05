import React, { useEffect, useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ToolsHero from '../components/tools/ToolsHero';
import FeaturedToolsSection from '../components/tools/FeaturedToolsSection';
import ToolsDirectorySection from '../components/tools/ToolsDirectorySection';
import { getFeaturedTools, getTools, getToolCategories } from '../services/toolsApi';

const GtmToolsPage = () => {
  const [featuredTools, setFeaturedTools] = useState([]);
  const [directoryTools, setDirectoryTools] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Ref for "More Categories" scroll
  const directoryRef = useRef(null);

  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true);
      const [featured, cats, all] = await Promise.all([
        getFeaturedTools(),
        getToolCategories(),
        getTools('All')
      ]);
      setFeaturedTools(featured);
      setCategories(['All', ...cats]); // Add 'All' option
      setDirectoryTools(all);
      setLoading(false);
    };

    fetchAllData();
  }, []);

  const scrollToDirectory = () => {
    directoryRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full min-h-screen bg-[#f8f9fa] font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />

      {/* 1. Animated Hero */}
      <ToolsHero />

      {/* 2. Featured Section (Top 8-10 Important Tools) */}
      <FeaturedToolsSection
        tools={featuredTools}
        categories={categories}
        onMoreClick={scrollToDirectory}
        loading={loading}
      />

      {/* 3. The Massive Directory (900+ Tools) */}
      <div ref={directoryRef}>
        <ToolsDirectorySection
          initialTools={directoryTools}
          categories={categories}
          loading={loading}
        />
      </div>

      <Footer />
    </div>
  );
};

export default GtmToolsPage;