'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePage } from '@/app/context/ScrollContext';
import top from '@/../public/svgs/top.svg';

export default function Footer() {
  const { currentPage, setCurrentPage } = usePage();

  const handleScrollToTop = () => {
    if (currentPage === 1) {
      // 이미 1페이지인 경우, 강제로 위로 스크롤 애니메이션을 실행
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // 1페이지가 아닌 경우, 페이지를 1로 전환(전환 시 애니메이션 포함)
      setCurrentPage(1);
    }
    const firstSection = document.querySelector('.first-section');

    if (firstSection) {
      firstSection.scrollIntoView({ behavior: 'smooth' });
      setCurrentPage(1);
    }
  };

  return (
    <div className="h-[25%] w-full bg-black text-white flex flex-col justify-center items-start px-6 md:px-16 lg:px-48 gap-5 md:gap-7 relative">
      {/* Footer Links */}
      <div className="flex flex-wrap justify-start items-center gap-3 md:gap-5 text-sm md:text-lg">
        <Link href="/policy?1=usage">
          <span className="hover:text-gray-400 transition">이용약관</span>
        </Link>
        <Link href="/policy?1=privacy">
          <span className="hover:text-gray-400 transition">
            개인정보취급방침
          </span>
        </Link>
        <Link href="/policy?1=email">
          <span className="hover:text-gray-400 transition">
            이메일주소무단수집거부
          </span>
        </Link>
      </div>

      {/* 회사 정보 */}
      <div className="text-xs md:text-sm text-slate-300">
        <h6>
          광주광역시 북구 용봉로 77, 제 1산학협력공학관 607호 (용봉동,
          전남대학교)
        </h6>
        <h6>
          회사명 : (주)더블유브이알 ｜ 대표이사 : 박용균 ｜ 사업자등록번호 :
          634-86-02784 ｜ Tel : 062-716-7702
        </h6>
      </div>

      {/* 저작권 */}
      <div className="text-xs md:text-sm text-slate-400">
        <h6>© (주)더블유브이알 All rights reserved.</h6>
      </div>

      {/* 상단 이동 버튼 */}
      <div
        className="rounded-md absolute right-6 md:right-16 lg:right-20 cursor-pointer hover:scale-110 transition"
        onClick={handleScrollToTop}
      >
        <Image src={top} alt="top-arrow" width={40} height={40} />
      </div>
    </div>
  );
}
