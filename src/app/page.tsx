'use client';

import { useEffect, useRef, useState } from 'react';
import { Dots } from './_components/main/Dots';
import FirstMain from './_components/main/FirstMain';
import SecondMain from './_components/main/SecondMain';
import ThirdMain from './_components/main/ThirdMain';
import LastMain from './_components/main/LastMain';
import { usePage } from './context/ScrollContext';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { currentPage, setCurrentPage } = usePage();
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // 최신 currentPage와 isScrolling 값을 저장할 ref
  const currentPageRef = useRef<number>(currentPage);
  const isScrollingRef = useRef<boolean>(isScrolling);

  useEffect(() => {
    console.log('currentPage', currentPage);
    currentPageRef.current = currentPage;
  }, [currentPage]);

  useEffect(() => {
    isScrollingRef.current = isScrolling;
  }, [isScrolling]);

  // 섹션으로 스크롤하는 함수
  const scrollToSection = (sectionIndex: number) => {
    if (!containerRef.current) return;
    const sections = containerRef.current.querySelectorAll('.section');
    if (sectionIndex >= 0 && sectionIndex < sections.length) {
      setIsScrolling(true);
      sections[sectionIndex].scrollIntoView({ behavior: 'smooth' });
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
        setCurrentPage(sectionIndex + 1);
      }, 1000);
    }
  };

  // 휠 이벤트 리스너를 한 번만 부착 (의존성 빈 배열)
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrollingRef.current) {
        e.preventDefault();
        return;
      }
      e.preventDefault();
      const direction = e.deltaY > 0 ? 1 : -1;
      const nextSection = currentPageRef.current - 1 + direction;
      scrollToSection(nextSection);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }
    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Intersection Observer를 사용해 현재 섹션이 뷰포트에 들어오면 currentPage 업데이트
  useEffect(() => {
    const sections = containerRef.current?.querySelectorAll('.section');
    if (!sections) return;
    const observerOptions = { threshold: 0.6 };

    const observer = new IntersectionObserver((entries) => {
      if (isScrollingRef.current) return; // 스크롤 애니메이션 중엔 업데이트 무시
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Array.from(sections).indexOf(entry.target as Element);
          setCurrentPage(index + 1);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [setCurrentPage]);

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden"
    >
      {/* Dots 컴포넌트를 사용할 경우 */}
      {/* <Dots currentPage={currentPage} /> */}

      <section className="section snap-start h-screen relative first-section">
        <FirstMain />
      </section>
      <div className="w-full h-1 bg-gray-200"></div>

      <section className="section snap-start h-screen relative">
        <SecondMain />
      </section>
      <div className="w-full h-1 bg-gray-200"></div>

      <section className="section snap-start h-screen relative">
        <ThirdMain />
      </section>
      <div className="w-full h-1 bg-gray-200"></div>

      <section className="section snap-start h-screen relative">
        <LastMain />
      </section>
    </div>
  );
}
