'use client';

import vision from '@/../public/images/introduce/vision1.png';
import dot from '@/../public/images/introduce/dot.png';
import data from '@/../public/images/introduce/data.png';
import screen from '@/../public/images/introduce/screen.png';
import seed from '@/../public/images/introduce/seed.png';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="relative font-sans min-h-[80vh]">
      {/* 배경 분리를 위한 wrapper div */}
      <div className="relative z-10">
        {/* 메인 컨텐츠 영역 */}
        <div className="flex flex-col justify-center items-center mb-32">
          <div className="font-sans flex flex-col justify-center items-center mt-10">
            <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl mb-6 text-center border-b pb-6 border-[#63BBA2]">
              {`" AI와 데이터를 기반으로 환경 문제를 진단하고, 지속 가능한 해답을 제시합니다 "`}
            </h1>
            <h2 className="font-light text-lg sm:text-xl md:text-2xl mb-32 text-center">
              더블유브이알은 데이터와 AI 기술을 통해 환경 인프라를 정밀하게
              진단하고 효율적으로 관리합니다.
              <br />
              지속 가능한 환경을 목표로, 모두가 깨끗하고 안전한 일상을 누릴 수
              있는 혁신적인 솔루션을 제공합니다.
            </h2>

            <div className="flex flex-col sm:flex-row sm:flex-nowrap justify-center items-center sm:items-start">
              {/* 왼쪽 카드 */}
              <div className="order-1 flex justify-center items-center gap-2 rounded-full px-8 py-6 w-full max-w-sm text-[#4590C4] shadow-lg text-3xl font-medium sm:-mr-8 mt-5 bg-white whitespace-nowrap">
                스마트 인프라 & AI 솔루션
              </div>
              {/* 중앙 이미지 */}
              <div className="order-3 sm:order-2 w-full sm:max-w-3xl p-10 border-4 border-[#E2F0D9] rounded-full relative bg-white">
                <div className="absolute bg-[#4590C4] rounded-full p-4 flex justify-center items-center left-0 top-0 shadow-xl">
                  <Image src={dot} alt="dot" width={100} />
                </div>
                <div className="absolute bg-[#62B9A3] rounded-full p-4 flex justify-center items-center right-0 top-0 shadow-xl">
                  <Image src={data} alt="data" width={100} />
                </div>
                <div className="absolute bg-[#62B9A3] rounded-full p-4 flex justify-center items-center left-0 bottom-0 shadow-xl">
                  <Image src={screen} alt="screen" width={100} />
                </div>
                <div className="absolute bg-[#4590C4] rounded-full p-4 flex justify-center items-center right-0 bottom-0 shadow-xl">
                  <Image src={seed} alt="seed" width={100} />
                </div>
                <Image src={vision} alt="vision" layout="responsive" />
              </div>
              {/* 오른쪽 카드 */}
              <div className="order-2 flex justify-center items-center gap-2 rounded-full px-8 py-6 w-full max-w-sm text-[#62B9A3] shadow-lg text-3xl font-medium sm:-ml-8 mt-5 bg-white">
                데이터 기반 예측
              </div>
            </div>
            {/* 하단 카드 영역: 데스크탑에서는 한 줄로 고정 */}
            <div className="flex flex-col sm:flex-row sm:flex-nowrap justify-between w-full items-center mt-10 sm:-mt-32">
              <div className="flex justify-center items-center gap-2 rounded-full px-8 py-6 w-full max-w-sm text-[#62B9A3] shadow-lg text-3xl font-medium mt-5 sm:ml-3 mx-auto bg-white">
                스마트 자산관리
              </div>
              <div className="flex justify-center items-center gap-2 rounded-full px-8 py-6 w-full max-w-sm text-[#4590C4] shadow-lg text-3xl font-medium mt-5 sm:mr-3 mx-auto bg-white">
                지속 가능한 환경 관리
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 배경색 요소 */}
      <div className="absolute inset-x-0 bottom-0 h-[40%] bg-[#F2F5F9] -z-50 blur-md" />
    </div>
  );
}
