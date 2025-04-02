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
    { label: 'CEO 인사말', path: '/introduce' },
    { label: '비전', path: '/introduce/vision' },
    { label: '연혁', path: '/introduce/history' },
    { label: '인증 및 특허', path: '/introduce/certification' },
    { label: '오시는 길', path: '/introduce/direction' },
  ];

  // 현재 페이지 제목 결정
  const currentTitle =
    menuItems.find((item) => item.path === pathname)?.label || '회사소개';

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* 네비게이션 영역 */}
      <div className="relative min-h-[40vh] sm:min-h-[50vh] w-full flex flex-col justify-center items-center gap-5 px-4 sm:px-6">
        {/* 배경 이미지 레이어: brightness 90% 적용 */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/introduce/ceo.jpeg')",
            filter: 'brightness(0.8)',
          }}
        ></div>

        {/* 상단 타이틀 영역 (텍스트는 배경 레이어 위에 표시) */}
        <div className="relative z-10 flex flex-col justify-center items-center gap-4">
          <h4 className="text-white text-lg sm:text-xl font-play font-semibold">
            회사소개
          </h4>
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
            {currentTitle}
          </h1>
        </div>

        {/* 네비게이션 메뉴 */}
        <div className="absolute bottom-0 bg-black/50 text-white w-full h-16 sm:h-20 flex justify-between items-center text-sm sm:text-base lg:text-xl">
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

      {/* 콘텐츠 영역: h-full 제거, flex-grow로 자연스럽게 확장 */}
      <div className="flex-grow min-h-[50vh] w-full px-4 sm:px-6 lg:px-10 py-8 sm:py-12 lg:py-16">
        {children}
      </div>

      {/* Footer는 항상 하단에 위치 */}
      <div className="w-full bg-black py-16 sm:py-12">
        <Footer />
      </div>
    </div>
  );
}
