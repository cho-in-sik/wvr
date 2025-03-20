'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Footer from '../_components/Footer';
import Navbar from '../_components/Navbar';
import ReactQueryClientProvider from '@/app/_components/ReactQueryClientProvider';
import LoadingScreen from '@/app/_components/LoadingScreen';

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();

  // ✅ 메뉴 리스트 (이름 & 경로)
  const menuItems = [
    { label: '공지사항', path: '/community' },
    { label: '뉴스', path: '/community/news' },
  ];

  const currentTitle =
    menuItems
      .slice()
      .sort((a, b) => b.path.length - a.path.length)
      .find((item) => pathname.startsWith(item.path))?.label || '공지사항';

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* ✅ 네비게이션 영역 (반응형) */}
      <div
        className="min-h-[40vh] sm:min-h-[50vh] w-full bg-gray-400 bg-cover bg-no-repeat flex flex-col justify-center items-center gap-5 relative px-4 sm:px-6 bg-[center_80%]"
        style={{ backgroundImage: "url('/images/notice/community.jpeg')" }}
      >
        <h4 className="text-white text-lg sm:text-xl font-play font-semibold">
          커뮤니티
        </h4>
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
          {currentTitle}
        </h1>

        {/* ✅ 네비게이션 메뉴 (반응형) */}
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

      {/* ✅ 컨텐츠 영역 (반응형) */}
      <div className="flex-grow min-h-[50vh] w-full px-4 sm:px-6 lg:px-10 py-8 sm:py-12 lg:py-16">
        {children}
      </div>

      {/* ✅ Footer (항상 하단 고정) */}
      <div className="w-full bg-black py-16 sm:py-12">
        <Footer />
      </div>
    </div>
  );
}
