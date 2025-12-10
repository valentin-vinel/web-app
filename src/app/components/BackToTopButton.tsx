'use client';

import { useState, useEffect } from 'react';

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300); // apparaît après 300px de scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {visible && (
        <button
            type='button'
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 rounded-full text-blue-500/90 shadow-xl hover:bg-linear-to-t hover:from-[#14b9b1]/50 hover:to-[#004ad4]/50 hover:text-white hover:cursor-pointer z-50"
        >
          ↑
        </button>
      )}
    </>
  );
}
