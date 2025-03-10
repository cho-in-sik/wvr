'use client';

import vision from '@/../public/images/introduce/vision.png';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="relative">
      {/* 배경색이 적용될 영역 (컨테이너의 하단 50%를 덮음) */}
      {/* <div className="absolute inset-x-0 bottom-0 bg-blue-200 z-[-1]" /> */}

      {/* 메인 컨텐츠 영역 */}
      <div className="flex flex-col justify-center items-center">
        <div className="font-sans flex flex-col justify-center items-center mt-10">
          <h1 className="font-medium text-2xl sm:text-3xl md:text-4xl mb-6 text-center">
            지속 가능한 환경 인프라를 위한 스마트 솔루션
          </h1>
          <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl mb-10 border-t-2 pt-6 text-center">
            더블유브이알은 AI와 데이터를 통해 새로운 가능성을 열고 환경과 미래를
            설계합니다
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16">
            {/* 왼쪽 카드 */}
            <div className="flex flex-col justify-center items-center gap-2 border-4 rounded-xl px-4 py-3 w-full max-w-xs">
              <div className="text-blue-400 text-xl sm:text-2xl font-semibold overflow-auto whitespace-nowrap">
                스마트 인프라와 AI 솔루션
              </div>
              <div className="text-center text-sm sm:text-base">
                효율적 운영과 탄소중립 실현
              </div>
            </div>
            {/* 중앙 이미지 */}
            <div className="w-full max-w-sm min-w-96">
              <Image src={vision} alt="vision" layout="responsive" />
            </div>
            {/* 오른쪽 카드 */}
            <div className="flex flex-col justify-center items-center gap-2 border-4 rounded-xl px-10 py-3 w-full max-w-xs">
              <div className="text-blue-400 text-xl sm:text-2xl font-semibold">
                스마트 자산관리
              </div>
              <div className="text-center text-sm sm:text-base">
                자산의 체계적 관리와 최적화
              </div>
            </div>
          </div>
          {/* 마지막 박스 영역 */}
          <div className="mt-8 w-full flex justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-2 border-4 rounded-xl px-4 py-3 w-full max-w-xs">
              <div className="text-green-600 text-xl sm:text-2xl font-semibold">
                지속가능한 환경 관리
              </div>
              <div className="text-center text-sm sm:text-base">
                탄소중립과 자원 최적화
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
