'use client';

import { useEffect, useRef, useState } from 'react';
import { Dots } from './_components/main/Dots';

export default function Home() {
  const DIVIDER_HEIGHT = 5;
  const PAGE_COUNT = 5;
  const outerDivRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pageHeight = typeof window !== 'undefined' ? window.innerHeight : 0;

  useEffect(() => {
    const wheelHandler = (e: WheelEvent) => {
      if (!outerDivRef.current) return;
      e.preventDefault();

      if (e.deltaY > 0) {
        // 스크롤 다운
        if (currentPage < PAGE_COUNT) {
          setCurrentPage((prev) => prev + 1);
        }
      } else {
        // 스크롤 업
        if (currentPage > 1) {
          setCurrentPage((prev) => prev - 1);
        }
      }
    };

    const scrollToPage = () => {
      if (!outerDivRef.current) return;
      outerDivRef.current.scrollTo({
        top: (currentPage - 1) * (pageHeight + DIVIDER_HEIGHT),
        left: 0,
        behavior: 'smooth',
      });
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
  }, [currentPage, pageHeight]);

  return (
    <div ref={outerDivRef} className="h-screen overflow-y-hidden">
      <Dots currentPage={currentPage} />
      <div className="inner bg-yellow-300 h-screen">1</div>
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
