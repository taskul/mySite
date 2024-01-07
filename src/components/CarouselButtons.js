import "./carousel.css"

import React, { useState, useEffect } from 'react';

export default function CarouselButtons ({children}) {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 1; // Adjust the threshold as needed

      // Update the state based on the scroll position
      setIsFixed(scrollY > threshold);
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="carousel-btn-holder">
        {children}
    </div>
  );
};


