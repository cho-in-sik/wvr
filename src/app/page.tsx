'use client';

import { useEffect, useRef, useState } from 'react';
import { Dots } from './_components/main/Dots';
import FirstMain from './_components/main/FirstMain';

export default function Home() {
  const DIVIDER_HEIGHT = 5;
  const PAGE_COUNT = 5;
  const outerDivRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false); // 🚀 스크롤 중인지 체크하는 상태 추가
  const pageHeight = typeof window !== 'undefined' ? window.innerHeight : 0;

  useEffect(() => {
    const wheelHandler = (e: WheelEvent) => {
      if (!outerDivRef.current || isAnimating) return; // 🚀 스크롤 중이면 이벤트 차단
      e.preventDefault();

      setIsAnimating(true); // 🚀 스크롤 시작 -> 중복 이벤트 방지

      if (e.deltaY > 0) {
        if (currentPage < PAGE_COUNT) {
          setCurrentPage((prev) => prev + 1);
        }
      } else {
        if (currentPage > 1) {
          setCurrentPage((prev) => prev - 1);
        }
      }

      setTimeout(() => setIsAnimating(false), 700); // 🚀 애니메이션 끝나면 다시 입력 허용
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

    scrollToPage(); // 🚀 페이지가 바뀔 때 스크롤 이동 실행

    return () => {
      outerDivRefCurrent.removeEventListener('wheel', wheelHandler);
    };
  }, [currentPage, isAnimating, pageHeight]);

  return (
    <div ref={outerDivRef} className="h-screen overflow-y-hidden">
      <Dots currentPage={currentPage} />
      <FirstMain />
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
