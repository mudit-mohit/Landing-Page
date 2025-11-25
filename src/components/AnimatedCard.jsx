import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

/**
 * A wrapper component that applies the "fade-in-scale-up" animation
 * when it becomes visible in the viewport.
 */
const AnimatedCard = ({ children, index }) => {
  // 1. Get a ref and a boolean `isVisible` from our new hook
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  // 2. Set the CSS classes:
  // - Start as 'opacity-0'
  // - When `isVisible` becomes true, swap to 'animate-fade-scale'
  const animationClass = isVisible ? 'animate-fade-scale' : 'opacity-0';

  return (
    <div
      ref={ref}
      className={`transition-opacity ${animationClass}`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;