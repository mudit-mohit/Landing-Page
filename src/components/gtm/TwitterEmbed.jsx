import React, { useEffect, useRef } from 'react';

const TwitterEmbed = ({ tweetId }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // 1. Check if the Twitter script is already loaded
    if (!window.twttr) {
      const script = document.createElement("script");
      script.setAttribute("src", "https://platform.twitter.com/widgets.js");
      script.setAttribute("async", "true");
      document.head.appendChild(script);
    }

    // 2. Render the tweet when script loads
    const renderTweet = () => {
      if (window.twttr && containerRef.current) {
        // Clear previous content to prevent duplicates if ID changes
        containerRef.current.innerHTML = "";
        window.twttr.widgets.createTweet(tweetId, containerRef.current, {
          theme: 'light',
          conversation: 'none',
          align: 'center'
        });
      }
    };

    // Retry a few times if script is slow to load
    const interval = setInterval(() => {
      if (window.twttr) {
        renderTweet();
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [tweetId]);

  return <div ref={containerRef} className="min-h-[200px] flex justify-center" />;
};

export default TwitterEmbed;