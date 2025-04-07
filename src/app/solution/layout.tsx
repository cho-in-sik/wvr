'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Footer from '../_components/Footer';
import Navbar from '../_components/Navbar';

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();

  // ✅ 메뉴 리스트 (이름 & 경로)
  const menuItems = [
    { label: '스마트 누수 탐지 AI 솔루션', path: '/solution' },
    { label: '스마트 상수관로 AIoT 유량계', path: '/solution/embeded' },
    { label: '스마트 하수처리 AI 솔루션', path: '/solution/asset' },
    // { label: '환경 모니터링 시설 분광 분석', path: '/solution/environment' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* 네비게이션 영역 */}
      <div className="relative">
        {/* 배경 이미지 영역 */}
        <div
          className="min-h-[40vh] sm:min-h-[50vh] w-full bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('/images/solution/solutionMain.jpeg')",
            backgroundPosition: '70% 30%',
          }}
        />

        {/* 오버레이 (배경 이미지 밝기 조절) */}
        <div className="absolute inset-0 bg-black opacity-20 pointer-events-none" />

        {/* 네비게이션 콘텐츠 영역 */}
        <div className="absolute inset-0 flex flex-col justify-center items-center gap-5 px-4 sm:px-6">
          <h4 className="text-white text-lg sm:text-xl font-medium font-sans">
            Solutions
          </h4>
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-semibold">
            솔루션
          </h1>

          {/* 네비게이션 메뉴 */}
          <div className="bg-black/50 text-white w-full h-16 sm:h-20 absolute bottom-0 flex justify-between items-center text-sm sm:text-base lg:text-xl">
            {menuItems.map((item, index) => (
              <Link key={index} href={item.path} className="w-full h-full">
                <div
                  className={`w-full h-full flex justify-center items-center border-r last:border-r-0 font-semibold shadow-md transition-all duration-300 ${
                    pathname === item.path
                      ? 'bg-gray-200 text-black'
                      : 'hover:bg-gray-100 hover:text-slate-800'
                  }`}
                >
                  {item.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* 컨텐츠 영역 */}
      <div className="flex-grow min-h-[50vh] w-full px-4 sm:px-6 lg:px-10 py-8 sm:py-12 lg:py-16">
        {children}
      </div>

      {/* Footer */}
      <div className="w-full bg-black py-16 sm:py-12">
        <Footer />
      </div>
    </div>
  );
}
