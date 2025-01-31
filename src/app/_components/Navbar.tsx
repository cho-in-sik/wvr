'use client';

import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import Image from 'next/image';

import logo from '@/../public/images/logo/PNG 4.png';
import menu from '@/../public/svgs/menu.svg';

import { useScroll } from '../context/ScrollContext';

export default function Navbar() {
  const { isScrolled } = useScroll();

  return (
    <header
      className={`p-3 fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-gray-900 shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container flex h-28 max-w-full items-center justify-between px-4 md:px-6 xl:pl-32">
        <Link href="/" className="flex items-center" prefetch={false}>
          <Image src={logo} alt="logo" width={350} />
        </Link>
        <div></div>
        <div></div>
        <div></div>
        <nav className="hidden md:flex items-center gap-10 md:gap-4 lg:gap-32 text-lg md:text-xl lg:text-2xl font-semibold text-white tracking-tight">
          <Link
            href="#"
            className="hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            prefetch={false}
          >
            회사소개
          </Link>
          <Link
            href="#"
            className="hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            prefetch={false}
          >
            솔루션
          </Link>
          <Link
            href="#"
            className="hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            prefetch={false}
          >
            비즈니스
          </Link>
          <Link
            href="#"
            className="hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            prefetch={false}
          >
            커뮤니티
          </Link>
          <Link
            href="#"
            className="hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            prefetch={false}
          >
            소통
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Image src={menu} alt="menu" />
            </SheetTrigger>
            <SheetContent side="left" className="">
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
