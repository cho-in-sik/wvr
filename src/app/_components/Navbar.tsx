'use client';

import { useState, useEffect } from 'react';
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
          <DropdownMenu
            open={activeDropdown === 'company'}
            onOpenChange={() => setActiveDropdown(null)}
          >
            <DropdownMenuTrigger
              className="border-none outline-none focus:outline-none"
              onMouseEnter={() => setActiveDropdown('company')}
              onMouseLeave={() => setActiveDropdown(null)}
              asChild
            >
              <Link
                href="/introduce"
                className="hover:text-[#04C9EA] whitespace-nowrap"
                prefetch={false}
              >
                회사소개
              </Link>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              onMouseEnter={() => setActiveDropdown('company')}
              onMouseLeave={() => setActiveDropdown(null)}
              align="center"
              className="p-2 py-4 font-semibold"
            >
              <Link href="/introduce">
                <DropdownMenuItem>CEO 인사말</DropdownMenuItem>
              </Link>
              <Link href="/introduce/vision">
                <DropdownMenuItem>비전</DropdownMenuItem>
              </Link>
              <Link href="/introduce/history">
                <DropdownMenuItem>연혁</DropdownMenuItem>
              </Link>
              <Link href="/introduce/certification">
                <DropdownMenuItem>인증 및 특허</DropdownMenuItem>
              </Link>
              <Link href="/introduce/direction">
                <DropdownMenuItem>오시는 길</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* 솔루션 Dropdown */}
          <DropdownMenu
            open={activeDropdown === 'solution'}
            onOpenChange={() => setActiveDropdown(null)}
          >
            <DropdownMenuTrigger
              className="border-none outline-none focus:outline-none"
              onMouseEnter={() => setActiveDropdown('solution')}
              onMouseLeave={() => setActiveDropdown(null)}
              asChild
            >
              <Link
                href="/solution"
                className="hover:text-[#04C9EA] whitespace-nowrap"
                prefetch={false}
              >
                솔루션
              </Link>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              onMouseEnter={() => setActiveDropdown('solution')}
              onMouseLeave={() => setActiveDropdown(null)}
              align="center"
              className="py-4 px-4 font-semibold"
            >
              <Link href={'/solution'}>
                <DropdownMenuItem>스마트 누수 탐지 AI 솔루션</DropdownMenuItem>
              </Link>
              <Link href={'/solution/embeded'}>
                <DropdownMenuItem>스마트 상수관로 AIoT 유량계</DropdownMenuItem>
              </Link>
              <Link href={'/solution/asset'}>
                <DropdownMenuItem>스마트 하수처리 AI 솔루션</DropdownMenuItem>
              </Link>
              <Link href={'/solution/environment'}>
                <DropdownMenuItem>
                  환경 모니터링 시설 분광 분석
                </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* 비즈니스 Dropdown */}
          <DropdownMenu
            open={activeDropdown === 'business'}
            onOpenChange={() => setActiveDropdown(null)}
          >
            <DropdownMenuTrigger
              className="border-none outline-none focus:outline-none"
              onMouseEnter={() => setActiveDropdown('business')}
              onMouseLeave={() => setActiveDropdown(null)}
              asChild
            >
              <Link
                href="/business"
                className="hover:text-[#04C9EA] whitespace-nowrap"
                prefetch={false}
              >
                비즈니스
              </Link>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              onMouseEnter={() => setActiveDropdown('business')}
              onMouseLeave={() => setActiveDropdown(null)}
              align="center"
              className="p-2 py-4 font-semibold"
            >
              <Link href={'/business'}>
                <DropdownMenuItem>비즈니스</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* 커뮤니티 Dropdown */}
          <DropdownMenu
            open={activeDropdown === 'community'}
            onOpenChange={() => setActiveDropdown(null)}
          >
            <DropdownMenuTrigger
              className="border-none outline-none focus:outline-none"
              onMouseEnter={() => setActiveDropdown('community')}
              onMouseLeave={() => setActiveDropdown(null)}
              asChild
            >
              <Link
                href="/community"
                className="hover:text-[#04C9EA] whitespace-nowrap"
                prefetch={false}
              >
                커뮤니티
              </Link>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              onMouseEnter={() => setActiveDropdown('community')}
              onMouseLeave={() => setActiveDropdown(null)}
              align="center"
              className="p-2 py-4 font-semibold"
            >
              <Link href="/community">
                <DropdownMenuItem>공지사항</DropdownMenuItem>
              </Link>
              <Link href="/community/news">
                <DropdownMenuItem>뉴스</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* 소통 Dropdown */}
          <DropdownMenu
            open={activeDropdown === 'contact'}
            onOpenChange={() => setActiveDropdown(null)}
          >
            <DropdownMenuTrigger
              className="border-none outline-none focus:outline-none"
              onMouseEnter={() => setActiveDropdown('contact')}
              onMouseLeave={() => setActiveDropdown(null)}
              asChild
            >
              <Link
                href="/contact"
                className="hover:text-[#04C9EA] whitespace-nowrap"
                prefetch={false}
              >
                소통
              </Link>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              onMouseEnter={() => setActiveDropdown('contact')}
              onMouseLeave={() => setActiveDropdown(null)}
              align="center"
              className="p-2 py-4 font-semibold"
            >
              <Link href="/contact">
                <DropdownMenuItem>문의하기</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
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
