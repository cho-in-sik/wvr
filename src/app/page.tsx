'use client';

import { useEffect, useRef, useState } from 'react';
import { Dots } from './_components/main/Dots';
import FirstMain from './_components/main/FirstMain';
import { usePage } from './context/ScrollContext';

export default function Home() {
  const DIVIDER_HEIGHT = 5;
  const PAGE_COUNT = 5;
  const outerDivRef = useRef<HTMLDivElement>(null);
  const { currentPage, setCurrentPage } = usePage(); // 🚀 전역 상태 사용
  const [isAnimating, setIsAnimating] = useState(false);
  const pageHeight = typeof window !== 'undefined' ? window.innerHeight : 0;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const wheelHandler = (e: WheelEvent) => {
      if (!outerDivRef.current || isAnimating) return;
      e.preventDefault();

      setIsAnimating(true);

      if (e.deltaY > 0 && currentPage < PAGE_COUNT) {
        setCurrentPage(currentPage + 1);
      } else if (e.deltaY < 0 && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }

      setTimeout(() => setIsAnimating(false), 500);
    };

    const scrollToPage = () => {
      if (!outerDivRef.current) return;
      outerDivRef.current.scrollTo({
        top: (currentPage - 1) * (pageHeight + DIVIDER_HEIGHT),
        left: 0,
        behavior: 'smooth',
      });

      if (currentPage === 1) {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }
    };

    if (!outerDivRef.current) return;
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener('wheel', wheelHandler, {
      passive: false,
    });

    scrollToPage();

    return () => {
      outerDivRefCurrent.removeEventListener('wheel', wheelHandler);
    };
  }, [currentPage, isAnimating, pageHeight, setCurrentPage]);

  return (
    <div ref={outerDivRef} className="min-h-screen h-screen overflow-hidden">
      <Dots currentPage={currentPage} />
      <div className="h-screen w-full relative">
        <FirstMain />
      </div>
      <div className="w-full h-1 bg-gray-200"></div>
      <div className="inner bg-blue-300 h-screen">2</div>
      <div className="w-full h-1 bg-gray-200"></div>
      <div className="inner bg-pink-300 h-screen">3</div>
      <div className="w-full h-1 bg-gray-200"></div>
      <div className="inner bg-green-300 h-screen">4</div>
      <div className="w-full h-1 bg-gray-200"></div>
      <div className="inner bg-red-300 h-screen">5</div>
    </div>
  );
}
