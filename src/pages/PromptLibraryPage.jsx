import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PromptHero from '../components/prompts/PromptHero';
import PromptCategoryGrid from '../components/prompts/PromptCategoryGrid';

const PromptLibraryPage = () => {
  return (
    // ✅ ADDED: 'bg-gray-50' to the outer wrapper.
    // This allows the white PromptHero card to visually stand out as a "Container".
    <div className="w-full min-h-screen bg-gray-50 overflow-x-hidden">
      <Navbar />
      
      <main>
        <PromptHero />
        <PromptCategoryGrid />
      </main>

      <Footer />
    </div>
  );
};

export default PromptLibraryPage;