'use client';

import { useState } from 'react';
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

export default function Navbar() {
  const { currentPage } = usePage();

  // 🚀 현재 활성화된 드롭다운 메뉴 상태
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header
      className={`p-3 fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        currentPage !== 1 ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container flex h-24 max-w-full items-center justify-between px-4 md:px-6 xl:pl-32">
        <Link href="/" className="flex items-center" prefetch={false}>
          {currentPage !== 1 ? (
            <Image src={logo2} alt="logo" width={350} />
          ) : (
            <Image src={logo} alt="logo" width={350} />
          )}
        </Link>

        {/* 🚀 네비게이션 메뉴 */}
        <nav
          className={`hidden md:flex items-center gap-10 md:gap-4 lg:gap-28 text-lg md:text-xl lg:text-2xl font-semibold ${
            currentPage !== 1 ? 'text-black' : 'text-white'
          } tracking-tight`}
        >
          {/* 🚀 회사소개 Dropdown */}
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
              <Link href="#" className="hover:text-[#04C9EA]" prefetch={false}>
                회사소개
              </Link>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              onMouseEnter={() => setActiveDropdown('company')}
              onMouseLeave={() => setActiveDropdown(null)}
              align="center"
              className="p-2 py-4 font-semibold"
            >
              <DropdownMenuItem>CEO 인사말</DropdownMenuItem>
              <DropdownMenuItem>비전 및 브랜드스토리</DropdownMenuItem>
              <DropdownMenuItem>연혁</DropdownMenuItem>
              <DropdownMenuItem>인증 및 특허</DropdownMenuItem>
              <DropdownMenuItem>오시는 길</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* 🚀 솔루션 Dropdown */}
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
              <Link href="#" className="hover:text-[#04C9EA]" prefetch={false}>
                솔루션
              </Link>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              onMouseEnter={() => setActiveDropdown('solution')}
              onMouseLeave={() => setActiveDropdown(null)}
              align="center"
              className="py-4 px-4 font-semibold"
            >
              <DropdownMenuItem>청음식 누수 탐지</DropdownMenuItem>
              <DropdownMenuItem>임베디드 유랑계</DropdownMenuItem>
              <DropdownMenuItem>자산 관리</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* 🚀 비즈니스 Dropdown */}
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
              <Link href="#" className="hover:text-[#04C9EA]" prefetch={false}>
                비즈니스
              </Link>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              onMouseEnter={() => setActiveDropdown('business')}
              onMouseLeave={() => setActiveDropdown(null)}
              align="center"
              className="p-2 py-4 font-semibold"
            >
              <DropdownMenuItem>비즈니스</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* 🚀 커뮤니티 Dropdown */}
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
              <Link href="#" className="hover:text-[#04C9EA]" prefetch={false}>
                커뮤니티
              </Link>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              onMouseEnter={() => setActiveDropdown('community')}
              onMouseLeave={() => setActiveDropdown(null)}
              align="center"
              className="p-2 py-4 font-semibold"
            >
              <DropdownMenuItem>공지사항</DropdownMenuItem>
              <DropdownMenuItem>뉴스</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* 🚀 소통 Dropdown */}
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
              <Link href="#" className="hover:text-[#04C9EA]" prefetch={false}>
                소통
              </Link>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              onMouseEnter={() => setActiveDropdown('contact')}
              onMouseLeave={() => setActiveDropdown(null)}
              align="center"
              className="p-2 py-4 font-semibold"
            >
              <DropdownMenuItem>문의하기</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* 햄버거 메뉴 (모바일) */}
        <div className="flex items-center gap-4 cursor-pointer">
          <Sheet>
            <SheetTrigger asChild>
              {currentPage !== 1 ? (
                <Image src={menu2} alt="menu" />
              ) : (
                <Image src={menu} alt="menu" />
              )}
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-6 p-4 pt-10">
                <Link
                  href="#"
                  className="text-2xl font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  prefetch={false}
                >
                  <div className="flex justify-start items-center">
                    <div>About us</div>
                    <Image src={rightArrow} alt="right-arrow" />
                  </div>
                </Link>
                <Link
                  href="#"
                  className="text-2xl font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  prefetch={false}
                >
                  <div className="flex justify-start items-center">
                    <div>Solution</div>
                    <Image src={rightArrow} alt="right-arrow" />
                  </div>
                </Link>
                <Link
                  href="#"
                  className="text-2xl font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  prefetch={false}
                >
                  <div className="flex justify-start items-center">
                    <div>Business</div>
                    <Image src={rightArrow} alt="right-arrow" />
                  </div>
                </Link>
                <Link
                  href="#"
                  className="text-2xl font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  prefetch={false}
                >
                  <div className="flex justify-start items-center">
                    <div>Community</div>
                    <Image src={rightArrow} alt="right-arrow" />
                  </div>
                </Link>
                <Link
                  href="#"
                  className="text-2xl font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
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
