'use client';

import { useEffect, useRef, useState } from 'react';
import { Dots } from './_components/main/Dots';
import FirstMain from './_components/main/FirstMain';
import { usePage } from './context/ScrollContext';
import SecondMain from './_components/main/SecondMain';
import ThirdMain from './_components/main/ThirdMain';
import LastMain from './_components/main/LastMain';

export default function Home() {
  const DIVIDER_HEIGHT = 4;
  const PAGE_COUNT = 4;
  const outerDivRef = useRef<HTMLDivElement | null>(null);
  const { currentPage, setCurrentPage } = usePage();
  const [isAnimating, setIsAnimating] = useState(false);
  const pageHeight = typeof window !== 'undefined' ? window.innerHeight : 0;

  useEffect(() => {
    // 페이지 마운트 시 overflow를 숨김
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const wheelHandler = (e: WheelEvent) => {
      if (!outerDivRef.current || isAnimating) return;
      e.preventDefault();

      setIsAnimating(true); // 스크롤 이벤트 시작

      requestAnimationFrame(() => {
        setCurrentPage((prev) => {
          let nextPage = prev;
          if (e.deltaY > 0 && prev < PAGE_COUNT) {
            nextPage = prev + 1;
          } else if (e.deltaY < 0 && prev > 1) {
            nextPage = prev - 1;
          }
          return nextPage;
        });

        setTimeout(() => {
          setIsAnimating(false); // 600ms 후 스크롤 허용
        }, 600);
      });
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

    // outerDivRef.current가 null이 아닌지 확인 후 이벤트 등록
    if (!outerDivRef.current) return;
    const outerDivRefCurrent = outerDivRef.current as HTMLDivElement;
    outerDivRefCurrent.addEventListener('wheel', wheelHandler, {
      passive: false,
    });
    scrollToPage();

    // 클린업: 이벤트 제거 및 overflow 복원
    return () => {
      outerDivRefCurrent.removeEventListener('wheel', wheelHandler);
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [currentPage, pageHeight, isAnimating, setCurrentPage]);

  return (
    <div ref={outerDivRef} className="min-h-screen h-screen overflow-hidden">
      <Dots currentPage={currentPage} />
      <div className="h-screen w-full relative">
        <FirstMain />
      </div>
      <div className="w-full h-1 bg-gray-200"></div>
      <div className="h-screen w-full relative">
        <SecondMain />
      </div>
      <div className="w-full h-1 bg-gray-200"></div>
      <div className="h-screen w-full relative">
        <ThirdMain />
      </div>

      <div className="w-full h-1 bg-gray-200"></div>
      <div className="h-screen w-full relative">
        <LastMain />
      </div>
    </div>
  );
}
