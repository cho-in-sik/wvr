'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';

import logo from '@/../public/images/logo/PNG 4.png';
import logo2 from '@/../public/images/logo/PNG 2.png';
import menu from '@/../public/svgs/menu.svg';
import menu2 from '@/../public/svgs/menu2.svg';
import rightArrow from '@/../public/svgs/rightArrow.svg';
import { usePage } from '../context/ScrollContext';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const { currentPage } = usePage();
  const pathname = usePathname();
  const isMain = pathname === '/';
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 조건: 메인페이지의 경우 (currentPage !== 1 || isScrolled), 다른 페이지는 (isScrolled)
  const changeBg = isMain ? currentPage !== 1 || isScrolled : isScrolled;
  const headerBgClass = changeBg ? 'bg-white shadow-sm' : 'bg-transparent';
  const textColorClass = changeBg ? 'text-black' : 'text-white';
  const logoToUse = changeBg ? logo2 : logo;

  // 디바운싱 함수로 드롭다운 상태 변경
  const handleDropdownEnter = (dropdownName: string) => {
    if (dropdownTimerRef.current) {
      clearTimeout(dropdownTimerRef.current);
      dropdownTimerRef.current = null;
    }
    setActiveDropdown(dropdownName);
  };

  const handleDropdownLeave = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 100); // 100ms 지연시간을 줘서 깜빡임 방지
  };

  return (
    <header
      className={`p-3 fixed top-0 left-0 z-50 w-full transition-all duration-300 ${headerBgClass}`}
    >
      <div className="flex h-24 items-center justify-between w-full mx-auto px-4 md:px-6 max-w-[1800px]">
        <Link href="/" className="flex items-center" prefetch={false}>
          <Image src={logoToUse} alt="logo" width={350} />
        </Link>
        <div></div>
        <div></div>
        <nav
          className={`hidden md:flex items-center gap-6 md:gap-8 lg:gap-12 xl:gap-16 text-base md:text-lg lg:text-xl xl:text-2xl font-semibold whitespace-nowrap tracking-tight ${textColorClass}`}
        >
          {/* 회사소개 Dropdown */}
          <div
            className="relative "
            onMouseEnter={() => handleDropdownEnter('company')}
            onMouseLeave={handleDropdownLeave}
          >
            <Link
              href="/introduce"
              className="hover:text-[#04C9EA] whitespace-nowrap"
              prefetch={false}
            >
              회사소개
            </Link>
            {activeDropdown === 'company' && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-black shadow-md rounded-md py-4 font-semibold min-w-[150px] z-10 text-center text-lg">
                <Link href="/introduce">
                  <div className="px-4 py-2 cursor-pointer hover:text-[#04C9EA]">
                    CEO 인사말
                  </div>
                </Link>
                <Link href="/introduce/vision">
                  <div className="px-4 py-2 cursor-pointer hover:text-[#04C9EA]">
                    비전
                  </div>
                </Link>
                <Link href="/introduce/history">
                  <div className="px-4 py-2 cursor-pointer hover:text-[#04C9EA]">
                    연혁
                  </div>
                </Link>
                <Link href="/introduce/certification">
                  <div className="px-4 py-2 cursor-pointer hover:text-[#04C9EA]">
                    인증 및 특허
                  </div>
                </Link>
                <Link href="/introduce/direction">
                  <div className="px-4 py-2 cursor-pointer hover:text-[#04C9EA]">
                    오시는 길
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* 솔루션 Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleDropdownEnter('solution')}
            onMouseLeave={handleDropdownLeave}
          >
            <Link
              href="/solution"
              className="hover:text-[#04C9EA] whitespace-nowrap"
              prefetch={false}
            >
              솔루션
            </Link>
            {activeDropdown === 'solution' && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-black shadow-md rounded-md py-4 px-4 font-semibold min-w-[250px] z-10 text-center text-lg">
                <Link href={'/solution'}>
                  <div className="px-4 py-2 cursor-pointer hover:text-[#04C9EA]">
                    스마트 누수 탐지 AI 솔루션
                  </div>
                </Link>
                <Link href={'/solution/embeded'}>
                  <div className="px-4 py-2 cursor-pointer hover:text-[#04C9EA]">
                    스마트 상수관로 AIoT 유량계
                  </div>
                </Link>
                <Link href={'/solution/asset'}>
                  <div className="px-4 py-2 cursor-pointer hover:text-[#04C9EA]">
                    스마트 하수처리 AI 솔루션
                  </div>
                </Link>
                <Link href={'/solution/environment'}>
                  <div className="px-4 py-2 cursor-pointer hover:text-[#04C9EA]">
                    환경 모니터링 시설 분광 분석
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* 비즈니스 Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleDropdownEnter('business')}
            onMouseLeave={handleDropdownLeave}
          >
            <Link
              href="/business"
              className="hover:text-[#04C9EA] whitespace-nowrap"
              prefetch={false}
            >
              비즈니스
            </Link>
            {activeDropdown === 'business' && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-black shadow-md rounded-md p-2 py-4 font-semibold min-w-[150px] z-10 text-center text-lg">
                <Link href={'/business'}>
                  <div className="px-4 py-2 cursor-pointer hover:text-[#04C9EA]">
                    비즈니스
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* 커뮤니티 Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleDropdownEnter('community')}
            onMouseLeave={handleDropdownLeave}
          >
            <Link
              href="/community"
              className="hover:text-[#04C9EA] whitespace-nowrap"
              prefetch={false}
            >
              커뮤니티
            </Link>
            {activeDropdown === 'community' && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-black text-center text-lg shadow-md rounded-md p-2 py-4 font-semibold min-w-[150px] z-10">
                <Link href="/community">
                  <div className="px-4 py-2 cursor-pointer hover:text-[#04C9EA]">
                    공지사항
                  </div>
                </Link>
                <Link href="/community/news">
                  <div className="px-4 py-2 cursor-pointer hover:text-[#04C9EA]">
                    뉴스
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* 소통 Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleDropdownEnter('contact')}
            onMouseLeave={handleDropdownLeave}
          >
            <Link
              href="/contact"
              className="hover:text-[#04C9EA] whitespace-nowrap"
              prefetch={false}
            >
              소통
            </Link>
            {activeDropdown === 'contact' && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-black text-center text-lg shadow-md rounded-md p-2 py-4 font-semibold min-w-[150px] z-10">
                <Link href="/contact">
                  <div className="px-4 py-2 cursor-pointer hover:text-[#04C9EA]">
                    문의하기
                  </div>
                </Link>
              </div>
            )}
          </div>
        </nav>
        {/* 햄버거 메뉴 (모바일) */}
        <div className="flex items-center gap-4 cursor-pointer">
          <Sheet>
            <SheetTrigger asChild>
              {(isMain && currentPage !== 1) || (!isMain && isScrolled) ? (
                <Image src={menu2} alt="menu" />
              ) : (
                <Image src={menu} alt="menu" />
              )}
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-6 p-4 pt-10">
                <Link
                  href="/introduce"
                  className="text-2xl font-medium text-gray-500 hover:text-gray-900 whitespace-nowrap"
                  prefetch={false}
                >
                  <div className="flex justify-start items-center">
                    <div>About us</div>
                    <Image src={rightArrow} alt="right-arrow" />
                  </div>
                </Link>
                <Link
                  href="/solution"
                  className="text-2xl font-medium text-gray-500 hover:text-gray-900 whitespace-nowrap"
                  prefetch={false}
                >
                  <div className="flex justify-start items-center">
                    <div>Solution</div>
                    <Image src={rightArrow} alt="right-arrow" />
                  </div>
                </Link>
                <Link
                  href="/business"
                  className="text-2xl font-medium text-gray-500 hover:text-gray-900 whitespace-nowrap"
                  prefetch={false}
                >
                  <div className="flex justify-start items-center">
                    <div>Business</div>
                    <Image src={rightArrow} alt="right-arrow" />
                  </div>
                </Link>
                <Link
                  href="/community"
                  className="text-2xl font-medium text-gray-500 hover:text-gray-900 whitespace-nowrap"
                  prefetch={false}
                >
                  <div className="flex justify-start items-center">
                    <div>Community</div>
                    <Image src={rightArrow} alt="right-arrow" />
                  </div>
                </Link>
                <Link
                  href="/contact"
                  className="text-2xl font-medium text-gray-500 hover:text-gray-900 whitespace-nowrap"
                  prefetch={false}
                >
                  <div className="flex justify-start items-center">
                    <div>Contact</div>
                    <Image src={rightArrow} alt="right-arrow" />
                  </div>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
