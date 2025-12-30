import React, { useState, useEffect } from 'react';
import { getGtmTweets } from '../../services/gtmApi';

// --- Sub-Component: The Tweet Card (Pure Display Logic) ---
const TweetCard = ({ tweet }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!tweet) return null;

  // Defensive Checks (Fallbacks)
  const authorName = tweet.author?.name || "Unknown User";
  const authorHandle = tweet.author?.handle || "unknown";
  const authorAvatar = tweet.author?.avatar || "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png";
  const mediaItems = tweet.media || [];

  const toggleExpand = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  return (
    <a 
      href={tweet.originalUrl || tweet.url} // Handle both DB and API fields
      target="_blank" 
      rel="noopener noreferrer"
      className="block bg-white border border-[#E1E2E3] rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col gap-4 group hover:-translate-y-1"
    >
      {/* Author Header */}
      <div className="flex items-center gap-3">
        <img 
          src={authorAvatar} 
          alt={authorName} 
          className="w-10 h-10 rounded-full border border-gray-100 object-cover" 
          onError={(e) => { e.target.src = "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png"; }} 
        />
        <div className="flex flex-col leading-tight">
          <div className="flex items-center gap-1">
             <span className="font-bold text-black text-sm group-hover:underline decoration-black/50 line-clamp-1">
                {authorName}
             </span>
             {tweet.author?.verified && (
               <svg className="w-4 h-4 text-blue-500 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.192-1.32.13-.656-1.258-2.02-2.132-3.595-2.132-1.575 0-2.94.874-3.595 2.133-.4-.062-.85-.13-1.32-.13-2.108 0-3.818 1.788-3.818 3.998 0 .495.085.965.238 1.4-1.273.65-2.148 2.02-2.148 3.6 0 1.578.875 2.95 2.148 3.6-.154.435-.238.905-.238 1.4 0 2.21 1.71 4 3.818 4 .47 0 .92-.192 1.32-.13.656 1.258 2.02 2.132 3.595 2.132 1.575 0 2.94-.874 3.595-2.133.4.062.85.13 1.32.13 2.108 0 3.818-1.79 3.818-4 0-.495-.085-.965-.238-1.4 1.273-.65 2.148-2.02 2.148-3.6zM9.763 16.03L5.617 12.18c-.464-.43-.49-1.16-.06-1.62.43-.46 1.16-.49 1.62-.06l2.36 2.19 6.255-8.25c.386-.51 1.108-.616 1.618-.23.51.385.616 1.107.23 1.616L9.763 16.03z"/>
               </svg>
             )}
          </div>
          <span className="text-gray-500 text-xs truncate">@{authorHandle}</span>
        </div>
        <div className="ml-auto text-gray-300 hover:text-blue-400 transition-colors z-10">
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
        </div>
      </div>

      {/* Text Content */}
      <div className="relative">
        <p className={`text-[#4d4d4d] text-sm whitespace-pre-wrap leading-relaxed font-sans ${isExpanded ? '' : 'line-clamp-6'}`}>
            {tweet.text}
        </p>
        {tweet.text.length > 200 && (
             <button onClick={toggleExpand} className="text-blue-600 text-xs font-medium mt-1 hover:underline z-20 relative focus:outline-none">
                 {isExpanded ? "Read less" : "Read more"}
             </button>
        )}
      </div>

      {/* Media / Images */}
      {mediaItems.length > 0 && (
        <div className={`grid gap-1 rounded-xl overflow-hidden mt-2 border border-gray-100 ${mediaItems.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
          {mediaItems.map((m, i) => (
             <div key={i} className="relative w-full bg-gray-50 overflow-hidden group">
               <img 
                 src={m.url} 
                 alt="Tweet media" 
                 className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${isExpanded ? 'h-auto max-h-[500px]' : 'h-48'}`} 
                 loading="lazy"
               />
               {m.type === 'video' && (
                 <div className="absolute inset-0 flex items-center justify-center bg-black/20 pointer-events-none">
                   <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center backdrop-blur-sm shadow-sm">
                     <svg className="w-5 h-5 text-black fill-current ml-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                   </div>
                 </div>
               )}
             </div>
          ))}
        </div>
      )}

      {/* Metrics */}
      <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between text-xs text-gray-500 font-medium">
         <div className="flex items-center gap-1 hover:text-red-500 transition-colors"><span>♥</span> {tweet.metrics?.likes || 0}</div>
         <div className="flex items-center gap-1 hover:text-green-500 transition-colors"><span>↺</span> {tweet.metrics?.retweets || 0}</div>
         <div className="flex items-center gap-1 hover:text-blue-500 transition-colors"><span>👁</span> {tweet.metrics?.views || 'N/A'}</div>
      </div>
    </a>
  );
};

// --- Main Grid Component (Fetches Data) ---
const GtmPostGrid = () => {
  const [tweets, setTweets] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  const categories = ["All", "Strategy", "Cold Email", "Sales", "PLG", "Marketing"];

  // ✅ Fetch Logic Moved Here
  useEffect(() => {
    const loadTweets = async () => {
      setLoading(true);
      const data = await getGtmTweets(activeCategory);
      setTweets(data);
      setLoading(false);
    };
    loadTweets();
  }, [activeCategory]);

  return (
    <div className="w-full max-w-[1280px] mx-auto px-6 pb-20">
      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all ${
              activeCategory === cat ? "bg-black text-white border-black shadow-lg" : "bg-white text-gray-600 border-[#E1E2E3] hover:border-black hover:text-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {tweets.map((tweet) => (
          <div key={tweet.tweetId || tweet.id} className="break-inside-avoid mb-6">
            <TweetCard tweet={tweet} />
          </div>
        ))}
      </div>

      {/* Loading & Empty States */}
      {loading && tweets.length === 0 && (
         <div className="text-center py-20"><p className="text-gray-400">Loading tweets...</p></div>
      )}

      {!loading && tweets.length === 0 && (
        <div className="text-center py-20 bg-gray-50 rounded-3xl border border-gray-200">
          <p className="text-gray-500 text-lg font-display">No posts found.</p>
        </div>
      )}
    </div>
  );
};

export default GtmPostGrid;