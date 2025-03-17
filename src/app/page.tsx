'use client';

import { useEffect, useRef } from 'react';
import { Dots } from './_components/main/Dots';
import FirstMain from './_components/main/FirstMain';
import SecondMain from './_components/main/SecondMain';
import ThirdMain from './_components/main/ThirdMain';
import LastMain from './_components/main/LastMain';
import { usePage } from './context/ScrollContext';

export default function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { currentPage, setCurrentPage } = usePage();

  // Intersection Observer를 사용해 현재 화면(섹션)이 뷰포트에 들어올 때 currentPage 업데이트
  useEffect(() => {
    const sections = containerRef.current?.querySelectorAll('.section');
    if (!sections) return;

    const observerOptions = {
      threshold: 0.6, // 섹션의 60% 이상 보이면
    };

    const observer = new IntersectionObserver((entries) => {
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
      <Dots currentPage={currentPage} />

      <section className="section snap-start h-screen relative">
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
