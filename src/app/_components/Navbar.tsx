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
import menu from '@/../public/svgs/menu.svg';
import { usePage } from '../context/ScrollContext';

export default function Navbar() {
  const { currentPage } = usePage();

  // 🚀 현재 활성화된 드롭다운 메뉴 상태
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header
      className={`p-3 fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        currentPage !== 1 ? 'bg-gray-900 shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container flex h-28 max-w-full items-center justify-between px-4 md:px-6 xl:pl-32">
        <Link href="/" className="flex items-center" prefetch={false}>
          <Image src={logo} alt="logo" width={350} />
        </Link>

        {/* 🚀 네비게이션 메뉴 */}
        <nav className="hidden md:flex items-center gap-10 md:gap-4 lg:gap-28 text-lg md:text-xl lg:text-2xl font-semibold text-white tracking-tight">
          {/* 🚀 회사소개 Dropdown */}
          <DropdownMenu
            open={activeDropdown === 'company'}
            onOpenChange={() => setActiveDropdown(null)}
          >
            <DropdownMenuTrigger
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
            >
              <DropdownMenuItem>회사 연혁</DropdownMenuItem>
              <DropdownMenuItem>비전 및 미션</DropdownMenuItem>
              <DropdownMenuItem>팀 소개</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* 🚀 솔루션 Dropdown */}
          <DropdownMenu
            open={activeDropdown === 'solution'}
            onOpenChange={() => setActiveDropdown(null)}
          >
            <DropdownMenuTrigger
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
            >
              <DropdownMenuItem>AI 솔루션</DropdownMenuItem>
              <DropdownMenuItem>클라우드 서비스</DropdownMenuItem>
              <DropdownMenuItem>데이터 분석</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* 🚀 비즈니스 Dropdown */}
          <DropdownMenu
            open={activeDropdown === 'business'}
            onOpenChange={() => setActiveDropdown(null)}
          >
            <DropdownMenuTrigger
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
            >
              <DropdownMenuItem>파트너십</DropdownMenuItem>
              <DropdownMenuItem>고객 사례</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* 🚀 커뮤니티 Dropdown */}
          <DropdownMenu
            open={activeDropdown === 'community'}
            onOpenChange={() => setActiveDropdown(null)}
          >
            <DropdownMenuTrigger
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
            >
              <DropdownMenuItem>블로그</DropdownMenuItem>
              <DropdownMenuItem>포럼</DropdownMenuItem>
              <DropdownMenuItem>이벤트</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* 🚀 소통 Dropdown */}
          <DropdownMenu
            open={activeDropdown === 'contact'}
            onOpenChange={() => setActiveDropdown(null)}
          >
            <DropdownMenuTrigger
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
            >
              <DropdownMenuItem>고객 지원</DropdownMenuItem>
              <DropdownMenuItem>문의하기</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* 햄버거 메뉴 (모바일) */}
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Image src={menu} alt="menu" />
            </SheetTrigger>
            <SheetContent side="left">
              <div className="grid gap-4 p-4">
                <Link
                  href="#"
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  prefetch={false}
                >
                  Home
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  prefetch={false}
                >
                  About
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  prefetch={false}
                >
                  Services
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  prefetch={false}
                >
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
