'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import water from '@/../public/images/main/water.png';
import carbon from '@/../public/images/main/carbon2.png';
import environment from '@/../public/images/main/environment.png';
import right from '@/../public/svgs/right.svg';
import Image from 'next/image';

export default function ThirdMain() {
  // ✅ ref 생성하여 화면 감지
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 }); // 스크롤 20% 보이면 실행

  return (
    <div ref={ref} className="h-screen w-full flex flex-col lg:flex-row">
      {/* ✅ 왼쪽 텍스트 영역 */}
      <div className="w-full lg:w-2/5 h-full bg-gray-50 flex justify-center items-center p-6 md:p-12 lg:p-16">
        <div className="text-black flex flex-col items-start justify-center max-w-[80%]">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-extrabold mb-3">
            Business
          </h3>
          <h4 className="text-lg md:text-2xl lg:text-4xl font-normal mb-1">
            더블유브이알은 모두가 행복한
          </h4>
          <h4 className="text-lg md:text-2xl lg:text-4xl font-bold mb-1">
            삶을 위해 보이지 않는 것으로부터
          </h4>
          <h4 className="text-lg md:text-2xl lg:text-4xl font-bold mb-6 lg:mb-8">
            새로운 가치를 탐구합니다.
          </h4>
          <span className="text-base md:text-lg pr-20">
            수질 환경, 대기 환경, 개인과 가족 구성원들의 건강 등 더 넓어지고
            다양해질 분야에서 더블유브이알의 AI care 기술을 만나보세요.
          </span>
        </div>
      </div>

      {/* ✅ 오른쪽 아이콘 영역 */}
      <div
        className="w-full lg:w-3/5 h-full flex flex-col lg:flex-row justify-center items-center gap-6 px-6 md:px-10 lg:px-0 py-12 lg:py-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/main/thirdMain2.jpg')" }}
      >
        {/* ✅ 개별 카드 (Water, Environment, Carbon) */}
        {[
          { title: 'Water', img: water, desc: 'WVR와 함께 나아갈 물관리' },
          {
            title: 'Environment',
            img: environment,
            desc: '환경을 생각하는 친화적인',
          },
          { title: 'Carbon', img: carbon, desc: '탄소 저감을 위한 사업' },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2, // 첫 번째 0.2초, 두 번째 0.4초, 세 번째 0.6초
            }}
            className="flex flex-col justify-center items-center gap-2 w-[90%] sm:w-[80%] md:w-[45%] lg:w-[30%] p-6 bg-white bg-opacity-20 shadow-lg rounded-lg transition-transform duration-300 hover:scale-105"
          >
            <span className="text-lg md:text-xl lg:text-2xl font-semibold">
              {item.title}
            </span>
            <Image
              src={item.img}
              alt={item.title}
              width={90}
              height={90}
              className="md:w-[120px] md:h-[120px]"
            />
            <span className="text-xs md:text-sm lg:text-lg text-center mb-5">
              {item.desc}
            </span>
            <div className="bg-gray-800 rounded-full p-2 md:p-3 hover:bg-gray-600 transition-colors">
              <Image src={right} alt="right" width={20} height={20} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
