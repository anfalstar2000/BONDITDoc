import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 left-8 z-40 size-12 bg-[#3B82F6] text-white rounded-full hover:bg-[#2563EB] transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-2"
      aria-label="العودة للأعلى"
    >
      <ArrowUp className="size-5" />
    </button>
  );
}
